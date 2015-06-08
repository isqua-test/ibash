module.exports = function(bh) {
	bh.match('header__search', function(ctx) {
		ctx.tag('input');
		ctx.attr('type', 'search');
	});
};
