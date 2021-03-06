require('dotenv').config();
const config = {
    isProduction: process.env.ENV === 'prod',
    PORT: process.env.PORT || 3000,
    USER: process.env.USER,
    PASS: process.env.PASS
};

function init() {
    global.config = config;
}

module.exports = init();