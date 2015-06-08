module.exports = function(bh) {
	bh.match('quotes', function(ctx, json) {
		ctx.tag('section');
		ctx.content([
			{ elem: 'sort' },
			{ elem: 'list', quotes: json.quotes },
			{ elem: 'pages' },
			{ elem: 'sort' }
		]);
	});
};
