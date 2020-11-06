
exports.seed = function (knex) {
  return knex('recipe_books').insert([
    { recipe_book_title: 'justins cook book', recipe_id: 1 },
    { recipe_book_title: 'wills cook book', recipe_id: 2},
    { recipe_book_title: 'mikes cook book', recipe_id: 3}
  ]);
};
