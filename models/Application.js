require('./User');
module.exports = bookshelf.model('Application', {
	tableName: 'users',
	hasTimestamps: ['createdAt', 'updatedAt', 'deletedAt'],
	user: function() {
		return this.belongsTo('User', 'userId');
	}
});