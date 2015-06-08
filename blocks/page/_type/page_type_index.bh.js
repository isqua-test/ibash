module.exports = function(bh) {
	bh.match('page_type_index', function(ctx, json) {
		ctx.content({
			block: 'quotes',
			quotes: json.content
		}, true);
	});
};
