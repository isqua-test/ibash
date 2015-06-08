module.exports = function(bh) {
	bh.match('header', function(ctx) {
		ctx.tag('header');
		ctx.content([
			{ elem: 'title' },
			{ elem: 'search' }
		]);
	});
};
