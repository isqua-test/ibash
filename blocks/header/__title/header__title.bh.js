module.exports = function(bh) {
    bh.match('header__title', function(ctx, json) {
    	ctx.content('iBash.im — IT-цитатник Рунета');
    	ctx.tag('h1');
    });
};