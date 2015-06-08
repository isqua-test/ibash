module.exports = function(bh) {
	bh.match('quote', function(ctx, json) {
		ctx.tag('article');
		ctx.content([
			{
				elem: 'header',
				content: [
					{ elem: 'permalink', id: json.quote.id },
					{ elem: 'timestamp', time: json.quote.time },
					{ elem: 'rate', rate: json.quote.rate }
				]
			},
			{
				elem: 'body',
				content: json.quote.content
			},
			{
				elem: 'footer',
				content: [
					
				]
			}
		]);
	});
};
