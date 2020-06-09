const database = require("./database");

module.exports = {
  getItemsByType(type) {
    return database.execute("select * from namegator.item where type = $1", [type]);
  },

  getItems() {
    return database.execute("select * from namegator.item")
  },

  saveItem(item) {
    return database.execute("insert into namegator.item (type, description) values ($1, $2) returning *", [item.type, item.description])
  },

  deleteItem(id) {
    return database.execute("delete from namegator.item where id = $1", [id]);
  }
}


