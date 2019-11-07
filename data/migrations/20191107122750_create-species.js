
exports.up = function(knex) {
    return knex.schema
    .createtable('species', tbl => {
    tbl.increments();
    tbl.string('name', 255).notNullable();
    })
    .createTable('animals', tbl => {
        tbl.increments("AnimalId");
        tbl.string('name',255).notNullable();
        tbl.integer('species_id')
        .unsigned()
        .references("id")
        .inTable("species")
        .onDelete("RESTRICT")
        .onUpdate("CASCADE");

        //we have bears, and a few animals that are bears
    }).createTable("zoos", tbl => {
        tbl.increments("ZooId");
        tbl.string("name", 255).notNullable();
    }).createTable("zoosAnimals", tbl => {
        tbl.increments("ZooTxid");
        tbl.string("from").notNullable();
        tbl.string("to")
        tbl.integer("zoo_id")
        .unsigned()
        .references("ZooId")
        .inTable("zoos")
        .onDelete("RESTRICT")
        .onUpdate("CASCADE");
        tbl.integer("AnimalId")
        .unsigned()
        .references("AnimalId")
        .inTable("animals")
        .onDelete("RESTRICT")
        .onUpdate("CASCADE");
    })
    
    ;


};

exports.down = function(knex) {
  
};
