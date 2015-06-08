module.exports = function(bh) {
	bh.match('quote__permalink', function(ctx, json) {
		ctx.tag('a');
		ctx.attr('url', '#');
		ctx.content('#' + json.id);
	});
};
