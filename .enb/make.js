var mkdirp = require('mkdirp'),
	util = require('util');

module.exports = function(config) {
	var staticPages = [ 'index', 'add' ];

    staticPages.concat([ 'common' ]).forEach(function(page) {
        var bundlePath = util.format('pages/%s', page); // Путь до папки со страницей относительно корня проекта

        mkdirp.sync(config.resolvePath(bundlePath));

        config.node(bundlePath, function(nodeConfig) {

            // Уровни переопределения
            nodeConfig.addTech([
                require('enb-bem-techs/techs/levels'),
                {
                    levels: [
                    	config.resolvePath('blocks')
                    ]
                }
            ]);

            // BEM Decl
            nodeConfig.addTech([ require('enb/techs/file-provider'), { target: '?.bemjson.js' } ]);
            nodeConfig.addTech(require('enb-bem-techs/techs/bemjson-to-bemdecl'));

            // Зависимости
            nodeConfig.addTech(require('enb-bem-techs/techs/deps'));

            // Список исходный файлов
            nodeConfig.addTech(require('enb-bem-techs/techs/files'));
        });
    });

    config.node('pages/common', function(nodeConfig) {
        // CSS
        nodeConfig.addTech([
            require('enb/techs/css'),
            {
                target: '?.pre.css'
            }
        ]);

        nodeConfig.addTech([
            require('enb-autoprefixer'),
            {
                sourceTarget: "?.pre.css",
                destTarget: "?.css"
            }
        ]);

        nodeConfig.addTarget('?.css');
    });

    staticPages.forEach(function(page) {
        var bundlePath = util.format('pages/%s', page); // Путь до папки со страницей относительно корня проекта

        config.node(bundlePath, function(nodeConfig) {
            // BH (Шаблоны)
            nodeConfig.addTech([
                require('enb-bh/techs/bh-server'),
                {
                    jsAttrName: 'data-bem',
                    jsAttrScheme: 'json'
                }
            ]);
            nodeConfig.addTarget('?.bh.js');

            // HTML
            nodeConfig.addTech(require('enb-bh/techs/html-from-bemjson'));
            nodeConfig.addTarget('?.html');
        });
    });
};
