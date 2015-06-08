module.exports = function(bh) {
	bh.match('quotes__sort', function(ctx) {
		ctx.content([
			{
				elem: 'link',
				mods: { current: 'yes' },
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

