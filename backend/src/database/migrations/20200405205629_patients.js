
exports.up = function(knex) {
    return knex.schema.createTable('patients', function (table) {
        table.increments();
        table.string('name').notNullable();
        table.string('birth').notNullable();
        table.string('genre', 1).notNullable();
        table.string('degree').notNullable();
        table.string('responsible').notNullable();
        table.string('email').notNullable();
        table.string('phone').notNullable();
        table.string('address').notNullable();
        table.string('address2');
        table.string('city').notNullable();
        table.string('uf',2).notNullable();
        table.string('active', 1).notNullable();
      });
};

exports.down = function(knex) {
    return knex.schema.droptable('patients');
};
