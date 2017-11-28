const config = {
    isProduction: process.env.NODE_ENV && process.env.NODE_ENV === 'production',
    PORT:3000
};

function init() {
    global.config = config;
}

module.exports = init();