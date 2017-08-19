var seneca = require('seneca')();

seneca.add({role: 'inventory', cmd: 'find_item'}, function (args, done) {
  var itemId = args.id;
  done(null, args);
});


seneca.act({role: 'inventory', cmd: 'find_item', id: 'item_123'}, function (err, item) {
  if (err) {
    console.log("Error happened");
    return err;
  }
    console.log(item);
});
