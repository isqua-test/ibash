module.exports = function(bh) {
	bh.match('quotes__link', function(ctx) {
		ctx.tag('a');
		ctx.attr('href', '#');
	});
};
