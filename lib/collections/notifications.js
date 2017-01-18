Notifications = new Mongo.Collection('notifications');

Notifications.allow({
	update: function(userId, doc, fieldNames) {
		return ownsDoucment(userId, doc) && 
			fieldNames.length === 1 && fieldNames[0] === 'read';
	}
});

createCommentNoficiation = function(comment) {
	var post = Posts.findOne(comment.postId);
	if (comment.userId !== post.uerId) {
		Notifications.insert({
			userId: post.userId,
			postId: post._id,
			commentId: comment._id,
			commenterName: comment.author,
			read: false
		});
	}
};