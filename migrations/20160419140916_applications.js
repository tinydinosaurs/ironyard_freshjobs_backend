exports.up = function(knex, Promise) {
	return knex.schema.createTable('applications', function(t) {
		t.increments('id').unsigned().primary();
		t.dateTime('createdAt').notNull();
		t.dateTime('updatedAt').nullable();
		t.dateTime('deletedAt').nullable();

		t.text('coverLetter').notNull();
		t.string('resumeUrl').nullable();
		t.integer('userId')
			.notNull()
			.unsigned()
			.references('id')
			.inTable('users')
			.onDelete('CASCADE');
	});
};

exports.down = function(knex, Promise) {
	return knex.schema.dropTable('applications');
};
