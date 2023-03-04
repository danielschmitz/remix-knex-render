const knexfile = require("../knexfile")
const env = process.env.NODE_ENV || "development"

let cachedConnection = global.cachedConnection

function getConnection() {
  if (!cachedConnection) {
    cachedConnection = require("knex")(knexfile[env])
    global.cachedConnection = cachedConnection
    return cachedConnection
  }
  return cachedConnection
}
module.exports = getConnection()