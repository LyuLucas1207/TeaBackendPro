const path = require('path');

let messages;

function setLanguage(lang = 'zh') {
    try {
        messages = require(path.resolve(__dirname, `./customs/${lang}.js`));
        return messages;
    } catch (error) {
        console.warn(`语言文件 ${lang} 不存在，默认使用中文。`);
        messages = require(path.resolve(__dirname, './customs/zh.js'));
        return messages;
    }
}

setLanguage();

module.exports = {messages , setLanguage};
