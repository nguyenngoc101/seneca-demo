/* inventory.js */
module.exports = function(options) {
  var seneca = this;

  seneca.add({role:'inventory', cmd:'find_item'}, find_item);
  seneca.add({role:'inventory', cmd:'create_item'}, create_item);
  //... other action definitions

  function find_item(args, done) {
    var itemId = args.id;
    // ... perform find
    let item = {'name': 'item1', 'id': 1234};
    done(null, item);
  }

  function create_item(args, done) {
    var itemName = args.name;
    // ... perform item creation
    let item = {'name': 'item1', 'id': 1234};
    done(null, item);
  }
}
