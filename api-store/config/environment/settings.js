require('dotenv').config();
const config = {
    isProduction: process.env.ENV === 'prod',
    PORT:3000
};

function init() {
    global.config = config;
}

module.exports = init();