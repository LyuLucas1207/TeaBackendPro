const https = require('https'); // 使用 https 模块
const fs = require('fs');
const { init, messages } = require('./configs/init');

(async () => {
    try {
        const { configs, connections, paths} = await init(); // 确保初始化完成
        const options = {
            key: fs.readFileSync(paths.key.sslKey), // SSL 私钥文件路径
            cert: fs.readFileSync(paths.key.sslCrt) // SSL 证书文件路径
        };
        const port = configs.basic.BACKEND.PORT; // 从配置中获取端口号
        https.createServer(options, (req, res) => {
            const url = new URL(req.url, `https://${req.headers.host}`);
            if (url.pathname.startsWith('/images/')) {
                console.log('deal with static resources');
            } else {
                console.log('deal with non-static resources');
            }
        }).listen(port, () => {
            console.log(`${messages.BACKEND_STARTED} https://localhost:${port}`);
        });
    } catch (err) {
        console.error(`${messages.BACKEND_FAILED}: ${err.message}`);
    }
})();


