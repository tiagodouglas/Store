const config = {
    isProduction: process.env.NODE_ENV && process.env.NODE_ENV === 'production',
    PORT:3000
};

function init() {
    global.config = config;
    console.log('iniciou')
}

module.exports = init();