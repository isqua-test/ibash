module.exports = function(bh) {
	bh.match('quote__timestamp', function(ctx, json) {
		ctx.tag('time');
		ctx.content(json.time);
	});
};
