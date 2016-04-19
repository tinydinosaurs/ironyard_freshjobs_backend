exports.up = function(knex, Promise) {
	return knex.schema.createTable('jobTags', function(t) {
		t.increments('id').unsigned().primary();
		t.dateTime('createdAt').notNull();
		t.dateTime('updatedAt').nullable();
		t.dateTime('deletedAt').nullable();


		t.integer('tagId')
			.notNull()
			.unsigned()
			.references('id')
			.inTable('tags')
			.onDelete('CASCADE');
		t.integer('jobId')
			.notNull()
			.unsigned()
			.references('id')
			.inTable('jobs')
			.onDelete('CASCADE');
	});
};

exports.down = function(knex, Promise) {
	return knex.schema.dropTable('jobTags');
};
