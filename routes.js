//dependency
const {savehandler} = require('./handlers/routeHandlers/sampleHandler')

const routes = {
    'sample': savehandler,
};

module.exports = routes;