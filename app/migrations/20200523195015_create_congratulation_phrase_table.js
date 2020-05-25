exports.up = async knex => {
  return knex.schema.createTable('congtatulation_phrases', table => {
    table.string('phrase').notNullable();
  });
};

exports.down = knex => {
  return knex.schema.dropTable('congtatulation_phrases');
};
