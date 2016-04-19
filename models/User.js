require('./Authentication');
require('./Job');
require('./Company');
require('./Application');
module.exports = bookshelf.model('User', {
	tableName: 'users',
	hasTimestamps: ['createdAt', 'updatedAt', 'deletedAt'],
	authentication: function() {
		return this.hasMany('Authentication', 'userId');
	},
	job: function() {
		return this.hasMany('Job', 'userId');
	},
	company: function() {
		return this.hasMany('Company', 'userId');
	},
	application: function() {
		return this.hasMany('Application', 'userId');
	}
});