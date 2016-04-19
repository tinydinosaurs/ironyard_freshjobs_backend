// require('./JobTag');
require('./User');
require('./Company');
module.exports = bookshelf.model('Job', {
	tableName: 'jobs',
	hasTimestamps: ['createdAt', 'updatedAt', 'deletedAt'],
	user: function() {
		return this.belongsTo('User', 'userId');
	},

	user: function() {
		return this.belongsTo('User', 'userId');
	}

	// jobTag: function() {
	// 	this.hasMany('JobTag', 'JobId');
	// }
});