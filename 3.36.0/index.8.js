(window.webpackJsonp=window.webpackJsonp||[]).push([[8],{41:function(e,a,n){"use strict";Object.defineProperty(a,"__esModule",{value:!0}),a.meta=void 0;var t=o(n(2)),s=n(614),m=o(n(633));function o(e){return e&&e.__esModule?e:{default:e}}var p=a.meta={title:"Разработка",toc:["Установка","Песочница","Структура библиотеки","Стили","Темизация","Документация","Тестирование","Сборка","Публикация новой версии","Сборка и публикация сайта"]};a.default=function(e){var a=e.components,n=function(e,a){var n={};for(var t in e)a.indexOf(t)>=0||Object.prototype.hasOwnProperty.call(e,t)&&(n[t]=e[t]);return n}(e,["components"]);return t.default.createElement(s.MDXTag,{name:"wrapper",Layout:(0,m.default)(p)(function(e){return e.children}),layoutProps:n,components:a},t.default.createElement(s.MDXTag,{name:"h2",components:a},"Установка"),t.default.createElement(s.MDXTag,{name:"p",components:a},"Склонируйте репозиторий локально и установите зависимости:"),t.default.createElement(s.MDXTag,{name:"pre",components:a},t.default.createElement(s.MDXTag,{name:"code",components:a,parentName:"pre",props:{className:"hljs language-sh",metaString:""}},"git ",t.default.createElement(s.MDXTag,{name:"span",components:a,parentName:"code",props:{className:"hljs-built_in"}},"clone")," git@github.com:rambler-digital-solutions/rambler-ui.git\n",t.default.createElement(s.MDXTag,{name:"span",components:a,parentName:"code",props:{className:"hljs-built_in"}},"cd")," ./rambler-ui\nnpm install")),t.default.createElement(s.MDXTag,{name:"h2",components:a},"Песочница"),t.default.createElement(s.MDXTag,{name:"p",components:a},"Для запуска песочницы выполните:"),t.default.createElement(s.MDXTag,{name:"pre",components:a},t.default.createElement(s.MDXTag,{name:"code",components:a,parentName:"pre",props:{className:"hljs language-sh",metaString:""}},"npm run dev")),t.default.createElement(s.MDXTag,{name:"p",components:a},"На определенном порту/хосте:"),t.default.createElement(s.MDXTag,{name:"pre",components:a},t.default.createElement(s.MDXTag,{name:"code",components:a,parentName:"pre",props:{className:"hljs language-sh",metaString:""}},"npm run dev -- --port 8080 --host 127.0.0.1")),t.default.createElement(s.MDXTag,{name:"h2",components:a},"Структура библиотеки"),t.default.createElement(s.MDXTag,{name:"p",components:a},"Каждый компонент, тесты и документация к нему располагаются соответственно следующей структуре:"),t.default.createElement(s.MDXTag,{name:"pre",components:a},t.default.createElement(s.MDXTag,{name:"code",components:a,parentName:"pre",props:{className:"hljs language-sh",metaString:""}},"docs/\n  pages/\n    components/\n      Button/     ",t.default.createElement(s.MDXTag,{name:"span",components:a,parentName:"code",props:{className:"hljs-comment"}},"# документация"),"\n        index.md\n        example.js\nsrc/\n  Button/\n    index.js        ",t.default.createElement(s.MDXTag,{name:"span",components:a,parentName:"code",props:{className:"hljs-comment"}},"# импорты"),"\n    Button.js       ",t.default.createElement(s.MDXTag,{name:"span",components:a,parentName:"code",props:{className:"hljs-comment"}},"# код компонента"),"\n    Button.test.js  ",t.default.createElement(s.MDXTag,{name:"span",components:a,parentName:"code",props:{className:"hljs-comment"}},"# тесты"))),t.default.createElement(s.MDXTag,{name:"h3",components:a},"Стили"),t.default.createElement(s.MDXTag,{name:"p",components:a},"Для стилей библиотеки используется ",t.default.createElement(s.MDXTag,{name:"a",components:a,parentName:"p",props:{href:"https://github.com/cssinjs/jss"}},"JSS"),":"),t.default.createElement(s.MDXTag,{name:"pre",components:a},t.default.createElement(s.MDXTag,{name:"code",components:a,parentName:"pre",props:{className:"hljs language-js",metaString:""}},t.default.createElement(s.MDXTag,{name:"span",components:a,parentName:"code",props:{className:"hljs-comment"}},"// src/Button/Button.js"),"\n",t.default.createElement(s.MDXTag,{name:"span",components:a,parentName:"code",props:{className:"hljs-keyword"}},"import")," React, { PureComponent } ",t.default.createElement(s.MDXTag,{name:"span",components:a,parentName:"code",props:{className:"hljs-keyword"}},"from")," ",t.default.createElement(s.MDXTag,{name:"span",components:a,parentName:"code",props:{className:"hljs-string"}},"'react'"),"\n",t.default.createElement(s.MDXTag,{name:"span",components:a,parentName:"code",props:{className:"hljs-keyword"}},"import")," { injectSheet } ",t.default.createElement(s.MDXTag,{name:"span",components:a,parentName:"code",props:{className:"hljs-keyword"}},"from")," ",t.default.createElement(s.MDXTag,{name:"span",components:a,parentName:"code",props:{className:"hljs-string"}},"'../theme'"),"\n\n@injectSheet({\n  ",t.default.createElement(s.MDXTag,{name:"span",components:a,parentName:"code",props:{className:"hljs-attr"}},"root"),": { ",t.default.createElement(s.MDXTag,{name:"span",components:a,parentName:"code",props:{className:"hljs-comment"}},"// имя css-класса внутри комонента"),"\n    color: ",t.default.createElement(s.MDXTag,{name:"span",components:a,parentName:"code",props:{className:"hljs-string"}},"'black'"),"\n  }\n}, {",t.default.createElement(s.MDXTag,{name:"span",components:a,parentName:"code",props:{className:"hljs-attr"}},"name"),": ",t.default.createElement(s.MDXTag,{name:"span",components:a,parentName:"code",props:{className:"hljs-string"}},"'Button'"),"})\n",t.default.createElement(s.MDXTag,{name:"span",components:a,parentName:"code",props:{className:"hljs-keyword"}},"export")," ",t.default.createElement(s.MDXTag,{name:"span",components:a,parentName:"code",props:{className:"hljs-keyword"}},"default")," ",t.default.createElement(s.MDXTag,{name:"span",components:a,parentName:"code",props:{className:"hljs-class"}},t.default.createElement(s.MDXTag,{name:"span",components:a,parentName:"span",props:{className:"hljs-keyword"}},"class")," ",t.default.createElement(s.MDXTag,{name:"span",components:a,parentName:"span",props:{className:"hljs-title"}},"Button")," ",t.default.createElement(s.MDXTag,{name:"span",components:a,parentName:"span",props:{className:"hljs-keyword"}},"extends")," ",t.default.createElement(s.MDXTag,{name:"span",components:a,parentName:"span",props:{className:"hljs-title"}},"PureComponent")," "),"{\n  render() {\n    ",t.default.createElement(s.MDXTag,{name:"span",components:a,parentName:"code",props:{className:"hljs-keyword"}},"const")," {classes, children} = ",t.default.createElement(s.MDXTag,{name:"span",components:a,parentName:"code",props:{className:"hljs-keyword"}},"this"),".props\n\n    ",t.default.createElement(s.MDXTag,{name:"span",components:a,parentName:"code",props:{className:"hljs-keyword"}},"return")," (\n      ",t.default.createElement(s.MDXTag,{name:"span",components:a,parentName:"code",props:{className:"xml"}},t.default.createElement(s.MDXTag,{name:"span",components:a,parentName:"span",props:{className:"hljs-tag"}},"<",t.default.createElement(s.MDXTag,{name:"span",components:a,parentName:"span",props:{className:"hljs-name"}},"ul")," ",t.default.createElement(s.MDXTag,{name:"span",components:a,parentName:"span",props:{className:"hljs-attr"}},"className"),"=",t.default.createElement(s.MDXTag,{name:"span",components:a,parentName:"span",props:{className:"hljs-string"}},"{classes.root}"),">"),"\n        {children}\n      ",t.default.createElement(s.MDXTag,{name:"span",components:a,parentName:"span",props:{className:"hljs-tag"}},"</",t.default.createElement(s.MDXTag,{name:"span",components:a,parentName:"span",props:{className:"hljs-name"}},"ul"),">")),"\n    )\n  }\n}")),t.default.createElement(s.MDXTag,{name:"p",components:a},"Более подробно про ",t.default.createElement(s.MDXTag,{name:"inlineCode",components:a,parentName:"p"},"injectSheet")," описано в документации ",t.default.createElement(s.MDXTag,{name:"a",components:a,parentName:"p",props:{href:"https://github.com/cssinjs/react-jss"}},t.default.createElement(s.MDXTag,{name:"inlineCode",components:a,parentName:"a"},"react-jss")),". В нашей реализации вторым аргументом в ",t.default.createElement(s.MDXTag,{name:"inlineCode",components:a,parentName:"p"},"injectSheet")," передается объект с опциями, содержащий имя компонента для генерации детерминированных имен классов."),t.default.createElement(s.MDXTag,{name:"h3",components:a},"Темизация"),t.default.createElement(s.MDXTag,{name:"p",components:a},"Библиотека позволяет темизировать компоненты путем изменеия базовых цветов и свойств отдельных компонентов, путем расширения ",t.default.createElement(s.MDXTag,{name:"a",components:a,parentName:"p",props:{href:"https://github.com/rambler-digital-solutions/rambler-ui/tree/master/src/theme/base/index.js"}},"базовой темы"),". Соответственно при описании стилей компонента, необходимо базовые параметры: цвета, шрифты, размеры - выносить в тему и переиспользовать внутри:"),t.default.createElement(s.MDXTag,{name:"pre",components:a},t.default.createElement(s.MDXTag,{name:"code",components:a,parentName:"pre",props:{className:"hljs language-js",metaString:""}},t.default.createElement(s.MDXTag,{name:"span",components:a,parentName:"code",props:{className:"hljs-comment"}},"// src/Button/Button.js"),"\n",t.default.createElement(s.MDXTag,{name:"span",components:a,parentName:"code",props:{className:"hljs-keyword"}},"import")," React, { PureComponent } ",t.default.createElement(s.MDXTag,{name:"span",components:a,parentName:"code",props:{className:"hljs-keyword"}},"from")," ",t.default.createElement(s.MDXTag,{name:"span",components:a,parentName:"code",props:{className:"hljs-string"}},"'react'"),"\n",t.default.createElement(s.MDXTag,{name:"span",components:a,parentName:"code",props:{className:"hljs-keyword"}},"import")," { injectSheet } ",t.default.createElement(s.MDXTag,{name:"span",components:a,parentName:"code",props:{className:"hljs-keyword"}},"from")," ",t.default.createElement(s.MDXTag,{name:"span",components:a,parentName:"code",props:{className:"hljs-string"}},"'../theme'"),"\n\n@injectSheet(",t.default.createElement(s.MDXTag,{name:"span",components:a,parentName:"code",props:{className:"hljs-function"}},t.default.createElement(s.MDXTag,{name:"span",components:a,parentName:"span",props:{className:"hljs-params"}},"theme")," =>")," {\n  ",t.default.createElement(s.MDXTag,{name:"span",components:a,parentName:"code",props:{className:"hljs-attr"}},"root"),": { ",t.default.createElement(s.MDXTag,{name:"span",components:a,parentName:"code",props:{className:"hljs-comment"}},"// имя css-класса внутри комонента"),"\n    color: theme.button.color\n  }\n}, {",t.default.createElement(s.MDXTag,{name:"span",components:a,parentName:"code",props:{className:"hljs-attr"}},"name"),": ",t.default.createElement(s.MDXTag,{name:"span",components:a,parentName:"code",props:{className:"hljs-string"}},"'Button'"),"})\n",t.default.createElement(s.MDXTag,{name:"span",components:a,parentName:"code",props:{className:"hljs-keyword"}},"export")," ",t.default.createElement(s.MDXTag,{name:"span",components:a,parentName:"code",props:{className:"hljs-keyword"}},"default")," ",t.default.createElement(s.MDXTag,{name:"span",components:a,parentName:"code",props:{className:"hljs-class"}},t.default.createElement(s.MDXTag,{name:"span",components:a,parentName:"span",props:{className:"hljs-keyword"}},"class")," ",t.default.createElement(s.MDXTag,{name:"span",components:a,parentName:"span",props:{className:"hljs-title"}},"Button")," ",t.default.createElement(s.MDXTag,{name:"span",components:a,parentName:"span",props:{className:"hljs-keyword"}},"extends")," ",t.default.createElement(s.MDXTag,{name:"span",components:a,parentName:"span",props:{className:"hljs-title"}},"PureComponent")," "),"{\n  render() {\n    ",t.default.createElement(s.MDXTag,{name:"span",components:a,parentName:"code",props:{className:"hljs-keyword"}},"const")," {classes, children} = ",t.default.createElement(s.MDXTag,{name:"span",components:a,parentName:"code",props:{className:"hljs-keyword"}},"this"),".props\n\n    ",t.default.createElement(s.MDXTag,{name:"span",components:a,parentName:"code",props:{className:"hljs-keyword"}},"return")," (\n      ",t.default.createElement(s.MDXTag,{name:"span",components:a,parentName:"code",props:{className:"xml"}},t.default.createElement(s.MDXTag,{name:"span",components:a,parentName:"span",props:{className:"hljs-tag"}},"<",t.default.createElement(s.MDXTag,{name:"span",components:a,parentName:"span",props:{className:"hljs-name"}},"ul")," ",t.default.createElement(s.MDXTag,{name:"span",components:a,parentName:"span",props:{className:"hljs-attr"}},"className"),"=",t.default.createElement(s.MDXTag,{name:"span",components:a,parentName:"span",props:{className:"hljs-string"}},"{classes.root}"),">"),"\n        {children}\n      ",t.default.createElement(s.MDXTag,{name:"span",components:a,parentName:"span",props:{className:"hljs-tag"}},"</",t.default.createElement(s.MDXTag,{name:"span",components:a,parentName:"span",props:{className:"hljs-name"}},"ul"),">")),"\n    )\n  }\n}\n\n",t.default.createElement(s.MDXTag,{name:"span",components:a,parentName:"code",props:{className:"hljs-comment"}},"// src/theme/base/index.js"),"\n",t.default.createElement(s.MDXTag,{name:"span",components:a,parentName:"code",props:{className:"hljs-keyword"}},"import")," deepmerge ",t.default.createElement(s.MDXTag,{name:"span",components:a,parentName:"code",props:{className:"hljs-keyword"}},"from")," ",t.default.createElement(s.MDXTag,{name:"span",components:a,parentName:"code",props:{className:"hljs-string"}},"'deepmerge'"),"\n\n",t.default.createElement(s.MDXTag,{name:"span",components:a,parentName:"code",props:{className:"hljs-keyword"}},"export")," ",t.default.createElement(s.MDXTag,{name:"span",components:a,parentName:"code",props:{className:"hljs-function"}},t.default.createElement(s.MDXTag,{name:"span",components:a,parentName:"span",props:{className:"hljs-keyword"}},"function")," ",t.default.createElement(s.MDXTag,{name:"span",components:a,parentName:"span",props:{className:"hljs-title"}},"createTheme"),"(",t.default.createElement(s.MDXTag,{name:"span",components:a,parentName:"span",props:{className:"hljs-params"}},"config"),") "),"{\n  ",t.default.createElement(s.MDXTag,{name:"span",components:a,parentName:"code",props:{className:"hljs-keyword"}},"const")," { colors } = config\n\n  ",t.default.createElement(s.MDXTag,{name:"span",components:a,parentName:"code",props:{className:"hljs-keyword"}},"return")," deepmerge({\n    ",t.default.createElement(s.MDXTag,{name:"span",components:a,parentName:"code",props:{className:"hljs-attr"}},"fontFamily"),": ",t.default.createElement(s.MDXTag,{name:"span",components:a,parentName:"code",props:{className:"hljs-string"}},"'Roboto, sans-serif'"),",\n    ",t.default.createElement(s.MDXTag,{name:"span",components:a,parentName:"code",props:{className:"hljs-attr"}},"button"),": {\n      ",t.default.createElement(s.MDXTag,{name:"span",components:a,parentName:"code",props:{className:"hljs-attr"}},"color"),": ",t.default.createElement(s.MDXTag,{name:"span",components:a,parentName:"code",props:{className:"hljs-string"}},"'black'"),"\n      ...\n    },\n    ...\n  })\n}")),t.default.createElement(s.MDXTag,{name:"p",components:a},"Более подробно о создании собственной темы можно посмотреть в ",t.default.createElement(s.MDXTag,{name:"a",components:a,parentName:"p",props:{href:"https://github.com/rambler-digital-solutions/rambler-ui/tree/master/examples/theming"}},"примере"),"."),t.default.createElement(s.MDXTag,{name:"h3",components:a},"Документация"),t.default.createElement(s.MDXTag,{name:"p",components:a},"Чтобы добавить компонент в документацию, нужно добавить папку с названием компонента в документацию ",t.default.createElement(s.MDXTag,{name:"inlineCode",components:a,parentName:"p"},"docs/pages/components"),". Для документации используется формат ",t.default.createElement(s.MDXTag,{name:"a",components:a,parentName:"p",props:{href:"https://github.com/mdx-js/mdx"}},t.default.createElement(s.MDXTag,{name:"inlineCode",components:a,parentName:"a"},"mdx")),", который позволяет использовать ",t.default.createElement(s.MDXTag,{name:"inlineCode",components:a,parentName:"p"},"React"),"-компоненты внутри Markdown."),t.default.createElement(s.MDXTag,{name:"pre",components:a},t.default.createElement(s.MDXTag,{name:"code",components:a,parentName:"pre",props:{className:"hljs language-md",metaString:""}},t.default.createElement(s.MDXTag,{name:"span",components:a,parentName:"code",props:{className:"xml"}},t.default.createElement(s.MDXTag,{name:"span",components:a,parentName:"span",props:{className:"hljs-comment"}},"\x3c!-- docs/pages/components/Button/index.md --\x3e")),"\nimport Playground from 'docs/components/Playground'\nimport PropTypesTable from 'docs/components/PropTypesTable'\nimport example from '!!raw-loader!./example'\nimport button from '!!raw-loader!rambler-ui/Button/Button'\n\n",t.default.createElement(s.MDXTag,{name:"span",components:a,parentName:"code",props:{className:"hljs-section"}},"# Button"),"\n\n",t.default.createElement(s.MDXTag,{name:"span",components:a,parentName:"code",props:{className:"hljs-section"}},"## Пример"),"\n",t.default.createElement(s.MDXTag,{name:"span",components:a,parentName:"code",props:{className:"xml"}},t.default.createElement(s.MDXTag,{name:"span",components:a,parentName:"span",props:{className:"hljs-tag"}},"<",t.default.createElement(s.MDXTag,{name:"span",components:a,parentName:"span",props:{className:"hljs-name"}},"Playground")," ",t.default.createElement(s.MDXTag,{name:"span",components:a,parentName:"span",props:{className:"hljs-attr"}},"code"),"=",t.default.createElement(s.MDXTag,{name:"span",components:a,parentName:"span",props:{className:"hljs-string"}},"{example}")," />")),"\n\n",t.default.createElement(s.MDXTag,{name:"span",components:a,parentName:"code",props:{className:"hljs-section"}},"## Свойства компонента `<Button />`"),"\n",t.default.createElement(s.MDXTag,{name:"span",components:a,parentName:"code",props:{className:"xml"}},t.default.createElement(s.MDXTag,{name:"span",components:a,parentName:"span",props:{className:"hljs-tag"}},"<",t.default.createElement(s.MDXTag,{name:"span",components:a,parentName:"span",props:{className:"hljs-name"}},"PropTypesTable")," ",t.default.createElement(s.MDXTag,{name:"span",components:a,parentName:"span",props:{className:"hljs-attr"}},"code"),"=",t.default.createElement(s.MDXTag,{name:"span",components:a,parentName:"span",props:{className:"hljs-string"}},"{button}")," />")))),t.default.createElement(s.MDXTag,{name:"pre",components:a},t.default.createElement(s.MDXTag,{name:"code",components:a,parentName:"pre",props:{className:"hljs language-js",metaString:""}},t.default.createElement(s.MDXTag,{name:"span",components:a,parentName:"code",props:{className:"hljs-comment"}},"// docs/pages/components/Button/example.js"),"\n",t.default.createElement(s.MDXTag,{name:"span",components:a,parentName:"code",props:{className:"hljs-keyword"}},"import")," React ",t.default.createElement(s.MDXTag,{name:"span",components:a,parentName:"code",props:{className:"hljs-keyword"}},"from")," ",t.default.createElement(s.MDXTag,{name:"span",components:a,parentName:"code",props:{className:"hljs-string"}},"'react'"),"\n",t.default.createElement(s.MDXTag,{name:"span",components:a,parentName:"code",props:{className:"hljs-keyword"}},"import")," Button ",t.default.createElement(s.MDXTag,{name:"span",components:a,parentName:"code",props:{className:"hljs-keyword"}},"from")," ",t.default.createElement(s.MDXTag,{name:"span",components:a,parentName:"code",props:{className:"hljs-string"}},"'rambler-ui/Button'"),"\n\n",t.default.createElement(s.MDXTag,{name:"span",components:a,parentName:"code",props:{className:"hljs-keyword"}},"export")," ",t.default.createElement(s.MDXTag,{name:"span",components:a,parentName:"code",props:{className:"hljs-keyword"}},"default")," () => (\n  ",t.default.createElement(s.MDXTag,{name:"span",components:a,parentName:"code",props:{className:"xml"}},t.default.createElement(s.MDXTag,{name:"span",components:a,parentName:"span",props:{className:"hljs-tag"}},"<",t.default.createElement(s.MDXTag,{name:"span",components:a,parentName:"span",props:{className:"hljs-name"}},"Button"),">"),"Кнопка",t.default.createElement(s.MDXTag,{name:"span",components:a,parentName:"span",props:{className:"hljs-tag"}},"</",t.default.createElement(s.MDXTag,{name:"span",components:a,parentName:"span",props:{className:"hljs-name"}},"Button"),">")),"\n)")),t.default.createElement(s.MDXTag,{name:"h2",components:a},"Тестирование"),t.default.createElement(s.MDXTag,{name:"p",components:a},"Для тестов используется ",t.default.createElement(s.MDXTag,{name:"inlineCode",components:a,parentName:"p"},"karma"),", ",t.default.createElement(s.MDXTag,{name:"inlineCode",components:a,parentName:"p"},"jasmine")," и headless ",t.default.createElement(s.MDXTag,{name:"inlineCode",components:a,parentName:"p"},"Chrome")," и ",t.default.createElement(s.MDXTag,{name:"inlineCode",components:a,parentName:"p"},"Firefox")," для их запуска:"),t.default.createElement(s.MDXTag,{name:"pre",components:a},t.default.createElement(s.MDXTag,{name:"code",components:a,parentName:"pre",props:{className:"hljs language-sh",metaString:""}},"npm ",t.default.createElement(s.MDXTag,{name:"span",components:a,parentName:"code",props:{className:"hljs-built_in"}},"test"),"              ",t.default.createElement(s.MDXTag,{name:"span",components:a,parentName:"code",props:{className:"hljs-comment"}},"# запуск тестов в Chrome"),"\nnpm run ",t.default.createElement(s.MDXTag,{name:"span",components:a,parentName:"code",props:{className:"hljs-built_in"}},"test"),":firefox  ",t.default.createElement(s.MDXTag,{name:"span",components:a,parentName:"code",props:{className:"hljs-comment"}},"# в Firefox"),"\nnpm run ",t.default.createElement(s.MDXTag,{name:"span",components:a,parentName:"code",props:{className:"hljs-built_in"}},"test"),":watch    ",t.default.createElement(s.MDXTag,{name:"span",components:a,parentName:"code",props:{className:"hljs-comment"}},"# в режиме отслеживания изменений"))),t.default.createElement(s.MDXTag,{name:"p",components:a},"Для запуска тестов определенного компонента или компонентов:"),t.default.createElement(s.MDXTag,{name:"pre",components:a},t.default.createElement(s.MDXTag,{name:"code",components:a,parentName:"pre",props:{className:"hljs language-sh",metaString:""}},"npm ",t.default.createElement(s.MDXTag,{name:"span",components:a,parentName:"code",props:{className:"hljs-built_in"}},"test")," -- --component Avatar\nnpm ",t.default.createElement(s.MDXTag,{name:"span",components:a,parentName:"code",props:{className:"hljs-built_in"}},"test")," -- --component Button,Input")),t.default.createElement(s.MDXTag,{name:"h2",components:a},"Сборка"),t.default.createElement(s.MDXTag,{name:"pre",components:a},t.default.createElement(s.MDXTag,{name:"code",components:a,parentName:"pre",props:{className:"hljs language-sh",metaString:""}},"npm run build")),t.default.createElement(s.MDXTag,{name:"p",components:a},"Скомпилированые файлы кладутся в папку ",t.default.createElement(s.MDXTag,{name:"inlineCode",components:a,parentName:"p"},"./build"),"."),t.default.createElement(s.MDXTag,{name:"h2",components:a},"Публикация новой версии"),t.default.createElement(s.MDXTag,{name:"pre",components:a},t.default.createElement(s.MDXTag,{name:"code",components:a,parentName:"pre",props:{className:"hljs language-sh",metaString:""}},"npm version <patch|minor|major>")),t.default.createElement(s.MDXTag,{name:"p",components:a},"Эта комманда обновит версию в ",t.default.createElement(s.MDXTag,{name:"inlineCode",components:a,parentName:"p"},"package.json"),", поставит тег и запушит. Непосредственно публикация производится в ",t.default.createElement(s.MDXTag,{name:"inlineCode",components:a,parentName:"p"},"ci"),"."),t.default.createElement(s.MDXTag,{name:"h2",components:a},"Сборка и публикация сайта"),t.default.createElement(s.MDXTag,{name:"p",components:a},"Выполните следующую комманду с указанием версий, в которые необходимо опубликовать текущую сборку:"),t.default.createElement(s.MDXTag,{name:"pre",components:a},t.default.createElement(s.MDXTag,{name:"code",components:a,parentName:"pre",props:{metaString:null}},"npm run pages -- --versions 'master, stable, 1.0.5, 1.0.x, 1.x'\n")))}},600:function(e,a,n){"use strict";Object.defineProperty(a,"__esModule",{value:!0});var t=o(n(2)),s=n(38),m=o(s);function o(e){return e&&e.__esModule?e:{default:e}}var p={root:{margin:0,fontFamily:s.fontFamily.Roboto,fontSize:40,fontWeight:300,lineHeight:"50px",overflow:"hidden",textOverflow:"ellipsis"}};a.default=(0,m.default)(p)(function(e){var a=e.classes,n=e.style,s=e.children;return t.default.createElement("h1",{className:a.root,style:n},s)})},629:function(e,a,n){"use strict";Object.defineProperty(a,"__esModule",{value:!0});var t=o(n(2)),s=n(38),m=o(s);function o(e){return e&&e.__esModule?e:{default:e}}a.default=(0,m.default)(function(){return{root:{display:"inline",padding:".2em .3em",backgroundColor:"rgba(238, 242, 244, .5)",fontFamily:s.fontFamily.Menlo,fontSize:"92%",lineHeight:"18px"}}})(function(e){var a=e.classes,n=e.children;return t.default.createElement("code",{className:a.root},n)})},630:function(e,a,n){"use strict";Object.defineProperty(a,"__esModule",{value:!0});var t=o(n(2)),s=n(38),m=o(s);function o(e){return e&&e.__esModule?e:{default:e}}a.default=(0,m.default)(function(){return{root:{padding:"14px 25px 14px 20px",overflow:"auto",backgroundColor:"rgba(238, 242, 244, .5)",fontFamily:s.fontFamily.Menlo,fontSize:13,lineHeight:"18px","& code":{padding:0,backgroundColor:"transparent",fontFamily:"inherit"}}}})(function(e){var a=e.classes,n=e.children;return t.default.createElement("pre",{className:a.root},n)})},631:function(e,a,n){"use strict";Object.defineProperty(a,"__esModule",{value:!0});var t=o(n(2)),s=n(38),m=o(s);function o(e){return e&&e.__esModule?e:{default:e}}var p={root:{marginTop:40,marginBottom:25,fontFamily:s.fontFamily.CorsicaRamblerLX,fontSize:35,fontWeight:500,lineHeight:"35px"}};a.default=(0,m.default)(p)(function(e){var a=e.classes,n=e.children;return t.default.createElement("h2",{className:a.root},n)})},632:function(e,a,n){"use strict";Object.defineProperty(a,"__esModule",{value:!0}),a.default=function(e){if(o[e])return o[e];var a=e.substring(1).split(/\//),n=a[0];if("components"!==n)return m.default.repoLink+"tree/"+m.default.branch+"/docs/pages"+e+"/index.md";var t=a.pop();if(null==t||n===t)return;return m.default.repoLink+"tree/"+m.default.branch+"/src/"+t};var t,s=n(281),m=(t=s)&&t.__esModule?t:{default:t};var o={}},633:function(e,a,n){"use strict";Object.defineProperty(a,"__esModule",{value:!0});var t=function(){function e(e,a){for(var n=0;n<a.length;n++){var t=a[n];t.enumerable=t.enumerable||!1,t.configurable=!0,"value"in t&&(t.writable=!0),Object.defineProperty(e,t.key,t)}}return function(a,n,t){return n&&e(a.prototype,n),t&&e(a,t),a}}(),s=n(2),m=E(s),o=n(614),p=n(99),r=E(n(269)),l=E(n(632)),c=E(n(38));n(636);var d=E(n(600)),u=E(n(631)),f=E(n(278)),i=E(n(277)),g=E(n(630)),N=E(n(629)),h=E(n(280));function E(e){return e&&e.__esModule?e:{default:e}}function M(e,a){if(!e)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return!a||"object"!=typeof a&&"function"!=typeof a?e:a}var T={h1:d.default,h2:u.default,h3:f.default,pre:g.default,inlineCode:N.default},D=function(e){return{header:{padding:"107px 30px 48px",backgroundColor:e.colors.argentumLight,"@media screen and (min-width: 768px)":{padding:"65px 200px 35px 100px"},"& h1 + p":{marginTop:25,marginBottom:0,"@media screen and (min-width: 768px)":{marginTop:15}}},toc:{marginTop:15,marginLeft:-6,"@media screen and (min-width: 768px)":{marginLeft:-11},"& button":{marginTop:15,marginRight:10}},source:{position:"absolute",top:30,right:30,"@media screen and (min-width: 768px)":{top:30,right:40},"& svg":{width:20,height:20}},content:{padding:"40px 0",marginLeft:30,marginRight:30,"@media screen and (min-width: 768px)":{marginLeft:100,marginRight:100,maxWidth:670},"& ~ footer":{display:"flex"}}}},X=m.default.createElement(h.default,null);a.default=function(e){return function(a){return(0,p.withRouter)((0,c.default)(D)(function(n){function p(){var e,a,n;!function(e,a){if(!(e instanceof a))throw new TypeError("Cannot call a class as a function")}(this,p);for(var t=arguments.length,s=Array(t),m=0;m<t;m++)s[m]=arguments[m];return a=n=M(this,(e=p.__proto__||Object.getPrototypeOf(p)).call.apply(e,[this].concat(s))),n.sourceUrl=(0,l.default)(n.props.location.pathname),n.scrollToHeading=function(e){var a=parseInt(e.currentTarget.getAttribute("data-index"),10),t=n.headingElements[a];t&&window.scrollTo(0,t.offsetTop-30)},M(n,a)}return function(e,a){if("function"!=typeof a&&null!==a)throw new TypeError("Super expression must either be null or a function, not "+typeof a);e.prototype=Object.create(a&&a.prototype,{constructor:{value:e,enumerable:!1,writable:!0,configurable:!0}}),a&&(Object.setPrototypeOf?Object.setPrototypeOf(e,a):e.__proto__=a)}(p,s.PureComponent),t(p,[{key:"componentDidMount",value:function(){var e=this.props.classes;this.headingElements=document.querySelectorAll("."+e.content+" h2, ."+e.content+" h3")}},{key:"render",value:function(){var n=this,t=this.props,p=t.classes,l=(t.location,t.history,function(e,a){var n={};for(var t in e)a.indexOf(t)>=0||Object.prototype.hasOwnProperty.call(e,t)&&(n[t]=e[t]);return n}(t,["classes","location","history"]));return m.default.createElement(o.MDXProvider,{components:T},m.default.createElement(s.Fragment,null,m.default.createElement("header",{className:p.header},this.sourceUrl&&m.default.createElement(r.default,{className:p.source,size:"small",href:this.sourceUrl,rel:"noreferrer noopener",target:"_blank"},X),m.default.createElement(d.default,null,e.title),e.description&&m.default.createElement("p",null,e.description),e.toc&&m.default.createElement("div",{className:p.toc},e.toc.map(function(e,a){return m.default.createElement(i.default,{type:"outline",key:e,"data-index":a,onClick:n.scrollToHeading},e)}))),m.default.createElement("div",{className:p.content},m.default.createElement(a,l))))}}]),p}()))}}}}]);