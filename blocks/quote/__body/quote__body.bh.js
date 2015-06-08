module.exports = function(bh) {
	bh.match('quote__body', function(ctx) {
		ctx.tag('pre');
	});
};