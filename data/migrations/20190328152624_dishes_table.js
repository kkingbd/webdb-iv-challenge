exports.up = function(knex, Promise) {
    return knex.schema.createTable('dishes', tbl =>  {
        tbl.increments('id');
        tbl
        .string('name', 128)
        .notNullable()
        .unique('dish_name');
    })
};

exports.down = function(knex, Promise) {
    return knex.schema.dropTableIfExists('dishes');

};
