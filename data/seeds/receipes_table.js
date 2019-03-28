
exports.seed = function(knex, Promise) {
  // Deletes ALL existing entries
  return knex('receipes').truncate()
    .then(function () {
      // Inserts seed entries
      return knex('receipes').insert([
        {name: 'Baked Garlic Salmon', recipe_id:1},
        {name: 'BBQ Chicken', recipe_id: 2},
      ]);
    });
};