module.exports = function(bh) {
	bh.match('quotes__sort', function(ctx) {
		ctx.content([
			{
				elem: 'link',
				content: 'По дате'
			},
			{
				elem: 'link',
				content: 'По рейтингу'
			},
			{
				elem: 'link',
				content: 'Случайно'
			}
		]);
	});
};

