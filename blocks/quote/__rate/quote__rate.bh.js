module.exports = function(bh) {
	bh.match('quote__rate', function(ctx, json) {
		ctx.tag('span');
		ctx.content([
			{
				elem: 'rate-minus',
				content: '−'
			},
			{
				elem: 'rate-val',
				content: json.rate
			},
			{
				elem: 'rate-plus',
				content: '+'
			}
		]);
	});
};
