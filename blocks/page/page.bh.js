module.exports = function(bh) {
    bh.match('page', function(ctx, json) {
        ctx
            .tag('body')
            .content([
            	{ block: 'header' },
                ctx.content(),
                { block: 'footer' },
                json.scripts
            ], true);

        ctx.param('styles', [
            {
            	elem: 'css',
            	url: '/pages/common/common.css'
            },
            {
                elem: 'css',
                url: '//fonts.googleapis.com/css?family=PT+Mono&subset=latin,cyrillic-ext,cyrillic,latin-ext'
            }
        ])

        return [
            '<!DOCTYPE html>',
            {
                tag : 'html',
                content : [
                    {
                        elem : 'head',
                        content : [
                            { tag : 'meta', attrs : { charset : 'utf-8' } },
                            { tag : 'title', content : json.title },
                            json.head,
                            json.styles
                        ]
                    },
                    json
                ]
            }
        ];
    });

    bh.match('page__head', function(ctx) {
        ctx.bem(false).tag('head');
    });

    bh.match('page__meta', function(ctx) {
        ctx.bem(false).tag('meta');
    });

    bh.match('page__link', function(ctx) {
        ctx.bem(false).tag('link');
    });

    bh.match('page__css', function(ctx, json) {
        ctx.bem(false);

        if (json.url) {
            ctx
                .tag('link')
                .attr('rel', 'stylesheet')
                .attr('href', json.url);
        } else {
            ctx.tag('style');
        }

    });
};