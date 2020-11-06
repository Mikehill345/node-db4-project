
exports.up = function (knex) {
    return knex.schema
        .createTable('recipe_books', tbl => {
            tbl.increments()
            tbl.string('recipe_book_title', 125).notNullable()
            tbl.integer('recipe_id')
            .unsigned()
            .notNullable()
            .references('id')
            .inTable('recipes')
            .onDelete('RESTRICT')
            .onUpdate('CASCADE')
        })
        .createTable('recipes', tbl => {
            tbl.increments()
            tbl.string('recipe_title', 128).notNullable()
            tbl.string('instructions', 1000).notNullable()
        })
        .createTable('ingredients', tbl => {
            tbl.increments()
            tbl.string('ingredient_name', 120).notNullable()
        })
        .createTable('recipe_ingredients', tbl => {
            tbl.increments()
            tbl.integer('recipe_id')
                .unsigned()
                .notNullable()
                .references('id')
                .inTable('recipes')
                .onDelete('RESTRICT')
                .onUpdate('CASCADE')
            tbl.integer("ingredient_id")
                .unsigned()
                .notNullable()
                .references("id")
                .inTable("ingredients")
                .onDelete("RESTRICT")
                .onUpdate("CASCADE");
            tbl.string('amount').notNullable()
        })
};

exports.down = function (knex) {
    return knex.schema
        .dropTableIfExists('recipe_ingredients')
        .dropTableIfExists('ingredients')
        .dropTableIfExists('recipes')
        .dropTableIfExists('recipe_books')
};
