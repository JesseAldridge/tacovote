var Hapi = require('hapi');

var server = new Hapi.Server();
server.connection({
    host: 'localhost',
    port: 8000
});

// Add the route
server.route({
    method: 'GET',
    path:'/hello',
    handler: function (request, reply) {
        reply('hello world');
    }
});

// Start the server
server.start();
