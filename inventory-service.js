/* inventory-service.js */

var seneca = require('seneca')();

seneca.use('./inventory.js');

seneca.listen();
