//module scaffolding
const handler = {};

handler.savehandler  = () => {
    console.log('Sample')
}

handler.aboutHandler = (requestProperties, cb) => {
    console.log(requestProperties)
    cb(200, {
        message: 'this is simple url'
    });
}

module.exports = handler;