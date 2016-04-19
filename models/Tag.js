require('./Job');
module.exports = bookshelf.model('Tag', {
	tableName: 'tags',
	hasTimestamps: ['createdAt', 'updatedAt', 'deletedAt'],
	job: function() {
		return this.hasMany('JobTag', 'tagId');
	}
});