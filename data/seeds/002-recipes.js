exports.seed = function (knex, Promise) {
  return knex("recipes").insert([
    { recipe_title: "yams",  instructions: 'testing ' },
    { recipe_title: "test1",  instructions: 'testing ' },
    { recipe_title: "test2",  instructions: 'testing ' },
    { recipe_title: "test3",  instructions: 'testing ' },
  ]);
};