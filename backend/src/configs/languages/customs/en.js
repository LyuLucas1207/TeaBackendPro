const MESSAGES = {
    START_VALIDATION: 'Starting path validation...',
    CHECK_CATEGORY: 'Checking category:',

    START_VALIDATING_PATH: '\nValidating paths...',
    VALIDATION_FAILED: '❌ Path validation failed. Stopping execution.',

    START_LOADING_CONFIG: '\nStarting to load configuration...',
    CONFIG_LOADED_SUCCESS: '✅ Configuration file loaded successfully:',
    CONFIG_LOADED_FAILURE: '❌ Error loading configuration file:',

    CONFIG_RELOADED_SUCCESS: '✅ Configuration file reloaded successfully:',
    CONFIG_RELOADED_FAILURE: '❌ Error reloading configuration file:',

    START_CHECKING_DATABASE: '\nStarting to check database...',
    CONNECTING_DATABASE: 'Connecting to database:',
    DATABASE_CONNECTED: '✅ Database connected successfully',
    DATABASE_CONNECTION_FAILED: '❌ Database connection failed',
    DATABASE_CONNECTION_SUCCESS: '✅ Database operation completed',

    ALL_VALIDATION_PASSED: '✅ All validations passed. Proceeding with execution...',

    BACKEND_STARTED: '\n✅ Backend service running on',
    BACKEND_FAILED: '❌ Backend service failed to start:',
};

module.exports = MESSAGES;
