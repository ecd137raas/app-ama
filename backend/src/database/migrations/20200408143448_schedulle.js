
exports.up = function(knex) {
    return knex.schema.createTable('schedulle', function (table) {
        table.increments();
        table.string('employee').notNullable();
        table.string('role').notNullable();
        table.integer('id_patients').notNullable();
        table.date('day_schedulle').notNullable();
        table.string('hr_schedulle').notNullable();
        table.string('presence', 1).notNullable();
        table.string('note').notNullable();
        table.date('date').notNullable();
      });
};

exports.down = function(knex) {
    return knex.schema.droptable('schedulle');
};
