
const bcrypt = require('bcrypt')
const password = '123456'
const hash = bcrypt.hashSync(password, 10)

const users = [
    {
        username: 'admin',
        name: 'Admin User',
        email: 'admin@email.com',
        password: hash,
        role: 'admin'
    }
]

exports.up = function (knex) {
    return knex.schema
        .createTable('users', table => {
            table.increments('id')
            table.string('username')
            table.string('name')
            table.string('email')
            table.string('password')
            table.string('role')
        })
        .then(() => knex('users').insert(users))
}

exports.down = function (knex) {
    return knex.schema.dropTable('users')
}