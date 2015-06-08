module.exports = function(bh) {
	bh.match('quotes__list', function(ctx, json) {
		ctx.content(json.quotes.map(function(quote) {
			return {
				block: 'quote',
				quote: quote
			};
		}));
	});
};
