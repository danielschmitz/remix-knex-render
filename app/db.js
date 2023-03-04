const knexfile = require("../knexfile")
const env = process.env.NODE_ENV || "development"

let cachedConnection = global.cachedConnection

function getConnection() {
  if (!cachedConnection) {
    console.log("new connection")
    cachedConnection = require("knex")(knexfile[env])
    global.cachedConnection = cachedConnection
    return cachedConnection
  }
  console.log("cached connection")
  return cachedConnection
}
module.exports = getConnection()