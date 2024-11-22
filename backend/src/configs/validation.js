const fs = require('fs'); // 添加 fs 模块
const mysql = require('mysql2/promise');
const paths = require('./paths');
const { messages } = require(paths.jsfile.languages);

function loadConfigs(
    configs, 
    specifcRefresh = null, 
    config = paths.json, 
    success = messages.CONFIG_LOADED_SUCCESS, 
    failure = messages.CONFIG_LOADED_FAILURE
) {
    try {
        let NewConfigs = {};
        let ifSpecific = false;
        switch (specifcRefresh) {
            case 'basic':
                NewConfigs ={
                    ...configs,
                    basic: JSON.parse(fs.readFileSync(config.basic)),
                }
                ifSpecific = true;
                break;
            case 'database':
                NewConfigs = {
                    ...configs,
                    database: JSON.parse(fs.readFileSync(config.database)),
                }
                ifSpecific = true;
                break;
            case 'language':
                NewConfigs = {
                    ...configs,
                    language: JSON.parse(fs.readFileSync(config.language)),
                }
                ifSpecific = true;
                break;
            case 'network':
                NewConfigs = {
                    ...configs,
                    network: JSON.parse(fs.readFileSync(config.network)),
                }
                ifSpecific = true;
                break;
            default:
                NewConfigs = {
                    ...config,
                    basic: JSON.parse(fs.readFileSync(config.basic, 'utf8')),
                    database: JSON.parse(fs.readFileSync(config.database, 'utf8')),
                    language: JSON.parse(fs.readFileSync(config.language, 'utf8')),
                    network: JSON.parse(fs.readFileSync(config.network, 'utf8')),
                };
                console.log(success, config);
                break;
        }
        if (ifSpecific) {
            console.log(success, specifcRefresh);
        }
        return NewConfigs;
    } catch (err) {
        console.error(failure, config);
        console.error(messages.CONFIG_LOADED_FAILURE);
        process.exit(1);
    }
}


async function connectToDatabases(dbConfig, ifdevenv = true) {
    let dbEntries;
    const connections = {}; // 存储所有连接
    if (ifdevenv) {
        dbEntries = dbConfig.databases.Development;
    } else {
        dbEntries = dbConfig.databases.Production;
    }

    const connectionPromises = Object.entries(dbEntries).map(async ([dbKey, dbDetails]) => {
        try {
            console.log(`${messages.CONNECTING_DATABASE} ${dbDetails.name}`);
            const connection = await mysql.createConnection({
                host: dbConfig.host,
                port: dbConfig.port,
                user: dbConfig.user,
                password: dbConfig.password,
                database: dbDetails.name,
            });
            console.log(`${messages.DATABASE_CONNECTED}: ${dbDetails.name}`);
            connections[dbKey] = connection; // 保存连接
        } catch (err) {
            console.error(`${messages.DATABASE_CONNECTION_FAILED}: ${dbDetails.name}`);
            console.error(err.message);
            process.exit(1);
        }
    });

    await Promise.all(connectionPromises); // 等待所有连接完成
    return connections; // 返回所有连接
}

function checkPaths(paths, indentLevel = 0) {
    const indent = '  '.repeat(indentLevel); // 每层缩进两个空格
    Object.entries(paths).forEach(([key, value]) => {
        if (typeof value === 'object' && value !== null) {
            console.log(`${indent}${messages.CHECK_CATEGORY} ${key}`);
            checkPaths(value, indentLevel + 1); // 增加缩进级别
        } else if (typeof value === 'string') {
            const icon = fs.existsSync(value) ? '✅ ' : '❌ ';
            const keyValueStr = `${key}:`.padEnd(15);
            console.log(`${indent}${icon}${keyValueStr}${value}`);
            if (!fs.existsSync(value)) {
                console.error(messages.VALIDATION_FAILED);
                process.exit(1);
            }
        }
    });
}

function refreshConfigs(
    configs,
    specifcRefresh = null,
    resuccess = messages.CONFIG_RELOADED_SUCCESS,
    refailure = messages.CONFIG_RELOADED_FAILURE
) {
    const NewConfigs = loadConfigs(configs, specifcRefresh, paths.json, resuccess, refailure);
    return NewConfigs;
}



module.exports = { loadConfigs, connectToDatabases, refreshConfigs, checkPaths };
