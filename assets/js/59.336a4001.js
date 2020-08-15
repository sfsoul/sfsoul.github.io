(window.webpackJsonp=window.webpackJsonp||[]).push([[59],{312:function(e,r,t){"use strict";t.r(r);var a=t(28),v=Object(a.a)({},(function(){var e=this,r=e.$createElement,t=e._self._c||r;return t("ContentSlotsDistributor",{attrs:{"slot-key":e.$parent.slotKey}},[t("h2",{attrs:{id:"webpack-热更新"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#webpack-热更新"}},[e._v("#")]),e._v(" webpack 热更新")]),e._v(" "),t("blockquote",[t("p",[t("code",[e._v("Hot Module Replacement")]),e._v("，简称"),t("code",[e._v("HMR")]),e._v("，可以做到不用刷新浏览器而将新变更的模块替换掉旧的模块。")])]),e._v(" "),t("p",[t("img",{attrs:{src:"https://i.loli.net/2020/07/26/Bd86feJEzLFiIRh.png",alt:"HMR原理"}})]),e._v(" "),t("p",[t("strong",[e._v("server端和client端都做了处理工作：")])]),e._v(" "),t("ul",[t("li",[e._v("在webpack的watch模式下，文件系统中某一个文件发生修改，webpack监听到文件变换，根据配置文件对模块重新编译打包，并将打包后的代码通过简单的JavaScript对象保存在内存中。")]),e._v(" "),t("li",[e._v("webpack-dev-server 和 webpack 之间的接口交互，这一步主要是 dev-server 的中间件 webpack-dev-middleware 和 webpack 之间的交互，webpack-dev-middleware 调用 webpack 暴露的 API 对代码变化进行监控，并且告诉 webpack，将代码打包到内存中。")]),e._v(" "),t("li",[e._v("webpack-dev-server 对文件变化的一个监控，这一步不同于第一步，并不是监控代码变化重新打包。当在配置文件中配置了 devServer.watchContentBase 为 true 时，Server 会监听这些配置文件中静态文件的变化，变化后会通知浏览器端对应用进行 live reload。（注意：此处是浏览器刷新，和 HMR 是两个概念）。")]),e._v(" "),t("li",[e._v("webpack-dev-server 代码的工作：主要是通过 sockjs（webpack-dev-server的依赖）在浏览器端和服务端之间建立一个 websocket 长连接，将 webpack 编译打包的各个阶段的状态信息告知浏览器端，同时也包括第三步中 Server 监听静态文件变化的信息。浏览器端根据这些 socket 消息进行不同的操作。"),t("strong",[e._v("当然服务端传递的最主要信息还是新模块的 hash 值，后面的步骤根据这一 hash 值来进行模块热替换。")])]),e._v(" "),t("li",[e._v("webpack-dev-server/client 端并不能够请求更新的代码，也不会执行热更模块操作，而把这些工作又交回给了 webpack，webpack/hot/dev-server 的工作就是根据 webpack-dev-server/client 传给它的信息以及 dev-server 的配置决定是刷新浏览器呢还是进行模块热更新。（若仅仅是刷新浏览器，就没有后面那些步骤啦）。")]),e._v(" "),t("li",[t("strong",[e._v("HotModuleReplacement.runtime 是客户端 HMR 的中枢，它接收到上一步传递给它的新模块的 hash 值，它通过 JsonpMainTemplate.runtime 向 server 端发送 Ajax 请求，服务端返回一个 json，该 json 包含了所有要更新的模块的 hash 值，获取到更新列表后，该模块再次通过 jsonp 请求，获取到最新的模块代码。")])]),e._v(" "),t("li",[e._v("此步会决定 HMR 成功与否。HotModulePlugin 将会对新旧模块进行对比，决定是否更新模块，在决定更新模块后，检查模块之间的依赖关系，更新模块的同时更新模块间的依赖引用。")]),e._v(" "),t("li",[e._v("当 HMR 失败后，回退到 live reload 操作，即进行浏览器刷新来获取最新打包代码。")])]),e._v(" "),t("h2",{attrs:{id:"参考文章"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#参考文章"}},[e._v("#")]),e._v(" 参考文章")]),e._v(" "),t("ul",[t("li",[t("a",{attrs:{href:"https://github.com/Advanced-Frontend/Daily-Interview-Question/issues/118",target:"_blank",rel:"noopener noreferrer"}},[e._v("介绍热更新原理"),t("OutboundLink")],1)])])])}),[],!1,null,null,null);r.default=v.exports}}]);