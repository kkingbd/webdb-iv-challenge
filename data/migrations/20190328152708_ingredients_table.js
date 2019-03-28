
exports.up = function(knex, Promise) {
    return knex.schema.createTable('ingredients', tbl => {
        tbl.increments('id');

        tbl.float('quantity');

        tbl
        .string('name',150)
        .notNullable()

        tbl
        .integer('ingr_id')
        .notNullable()
        .references('id')
        .inTable('receipes');
    })

};

exports.down = function(knex, Promise) {
    return knex.schema.dropTableIfExists('ingredients');

};