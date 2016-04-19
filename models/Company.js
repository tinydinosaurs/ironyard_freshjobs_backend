require('./Job');
require('./User');
module.exports = bookshelf.model('Company', {
	tableName: 'companies',
	hasTimestamps: ['createdAt', 'updatedAt', 'deletedAt'],
	job: function() {
		return this.hasMany('Job', 'companyId');
	},
	user: function() {
		return this.belongsTo('User', 'userId');
	}
});