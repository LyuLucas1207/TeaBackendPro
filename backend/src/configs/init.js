const { loadConfigs, connectToDatabases, checkPaths, refreshConfigs } = require('./validation');
const { messages, setLanguage } = require('./languages/topLevel');
const paths = require('./paths');


async function init() {
    let configs = {
        basic: {},
        database: {},
        language: {},
        network: {},
    };
    let connections = {}; 

    try {
        console.log(messages.START_VALIDATION);
        //! 加载配置文件
        console.log(messages.START_LOADING_CONFIG);
        configs = loadConfigs(configs); // 更新全局配置
        //! 验证路径
        console.log(messages.START_VALIDATING_PATH);
        checkPaths(paths); // 检查路径有效性

        //! 连接数据库
        console.log(messages.START_CHECKING_DATABASE);
        connections = await connectToDatabases(configs.database.TeaDatabase);

        console.log(messages.ALL_VALIDATION_PASSED);
        return { configs, connections, paths};
    } catch (err) {
        console.error('Initialization failed:', err.message);
        throw err; // 抛出错误，供调用方捕获
    }
}

module.exports = {
    //TOP LEVEL
    init,

    // constants
    messages,

    // variables
    messages,

    // functions
    setLanguage,
    refreshConfigs,
}
