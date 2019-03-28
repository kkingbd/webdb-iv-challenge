exports.seed = function(knex, Promise) {
  // Deletes ALL existing entries
  return knex('ingredients').truncate()
    .then(function () {
      // Inserts seed entries
      return knex('ingredients').insert([
        {quantity: 1, name: 'Salmon', ingr_id : 1},
        {quantity: 2, name: 'Chicken', ingr_id : 2},
        {quantity: 1, name: 'Garlic', ingr_id : 3},
        {quantity: 1, name: 'BBQ sauce', ingr_id  :4}
        
      ]);
    });
};