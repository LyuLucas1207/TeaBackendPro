const MESSAGES = {
    START_VALIDATION: '开始路径验证...',

    START_VALIDATING_PATH: '\n正在验证路径...',
    CHECK_CATEGORY: '正在检查类别:',
    VALIDATION_FAILED: '❌ 路径验证失败，停止程序执行',

    START_LOADING_CONFIG: '\n开始加载配置...',
    CONFIG_LOADED_SUCCESS: '✅ 配置文件加载成功:',
    CONFIG_LOADED_FAILURE: '❌ 加载配置文件时出错:',
    CONFIG_RELOADED_SUCCESS: '✅ 配置文件重新加载成功:',
    CONFIG_RELOADED_FAILURE: '❌ 重新加载配置文件时出错:',

    START_CHECKING_DATABASE: '\n开始检查数据库...',
    CONNECTING_DATABASE: '正在连接到数据库:',
    DATABASE_CONNECTED: '✅ 数据库连接成功',
    DATABASE_CONNECTION_FAILED: '❌ 数据库连接失败',
    DATABASE_CONNECTION_SUCCESS: '✅ 数据库操作完成',

    ALL_VALIDATION_PASSED: '✅ 所有验证通过，程序继续运行...',

    BACKEND_STARTED: '\n✅ 后端服务运行在',
    BACKEND_FAILED: '❌ 后端服务启动失败:',
};

module.exports = MESSAGES;
