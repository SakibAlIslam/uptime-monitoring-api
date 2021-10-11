//module scaffolding
const handler = {};

handler.notFoundHandler = (requestProperties, cb) => {
    
    cb(404, {
        message: 'Your requested url was not found'
    });

}

module.exports = handler;