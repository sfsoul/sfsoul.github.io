(window.webpackJsonp=window.webpackJsonp||[]).push([[95],{206:function(e,o,s){"use strict";s.r(o);var t=s(28),a=Object(t.a)({},(function(){var e=this,o=e.$createElement,s=e._self._c||o;return s("ContentSlotsDistributor",{attrs:{"slot-key":e.$parent.slotKey}},[s("h2",{attrs:{id:"http"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#http"}},[e._v("#")]),e._v(" HTTP")]),e._v(" "),s("p",[s("strong",[e._v("HTTP 是一个无状态的协议，要注意这里的 HTTP 其实是指 HTTP1.x，而所谓无状态协议，简单的理解是即使同一个客户端连续两次\n发送请求给服务器，服务器也识别不出这是同一个客户端发送的请求，这导致的问题：你加了一个商品到购物车中，但因为识别不出是同一个客户端，\n刷新下页面就没有了...")])]),e._v(" "),s("h2",{attrs:{id:"cookie"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#cookie"}},[e._v("#")]),e._v(" Cookie")]),e._v(" "),s("blockquote",[s("p",[e._v("为了解决HTTP无状态导致的问题，出现了Cookie。Cookie的存在也不是为了解决通讯协议无状态的问题，只是为了解决客户端与服务端会话\n状态的问题，这个状态是指后端服务的状态而非通讯协议的状态。")])]),e._v(" "),s("h3",{attrs:{id:"cookie-的设置"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#cookie-的设置"}},[e._v("#")]),e._v(" Cookie 的设置")]),e._v(" "),s("ul",[s("li",[e._v("客户端发送 HTTP 请求到服务器")]),e._v(" "),s("li",[e._v("当服务器收到 HTTP请求时，在响应头里面添加一个 Set-Cookie 字段")]),e._v(" "),s("li",[e._v("浏览器收到响应后保存下 Cookie")]),e._v(" "),s("li",[e._v("之后对服务器每一次请求中都通过 Cookie 字段将 Cookie 信息发送给服务器")])]),e._v(" "),s("h3",{attrs:{id:"cookie-的属性"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#cookie-的属性"}},[e._v("#")]),e._v(" Cookie 的属性")]),e._v(" "),s("h4",{attrs:{id:"name-value"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#name-value"}},[e._v("#")]),e._v(" Name/Value")]),e._v(" "),s("blockquote",[s("p",[e._v("用 JS 操作 Cookie 的时候注意对Value进行编码处理。")])]),e._v(" "),s("h4",{attrs:{id:"expires"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#expires"}},[e._v("#")]),e._v(" Expires")]),e._v(" "),s("blockquote",[s("p",[e._v("Expires 用于设置 Cookie 的过期时间")])]),e._v(" "),s("div",{staticClass:"language-javascript line-numbers-mode"},[s("pre",{pre:!0,attrs:{class:"language-javascript"}},[s("code",[e._v("Set"),s("span",{pre:!0,attrs:{class:"token operator"}},[e._v("-")]),e._v("Cookie"),s("span",{pre:!0,attrs:{class:"token operator"}},[e._v(":")]),e._v(" id"),s("span",{pre:!0,attrs:{class:"token operator"}},[e._v("=")]),e._v("a3fWa"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[e._v(";")]),e._v(" Expires"),s("span",{pre:!0,attrs:{class:"token operator"}},[e._v("=")]),e._v("Wed"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[e._v(",")]),e._v(" "),s("span",{pre:!0,attrs:{class:"token number"}},[e._v("21")]),e._v(" Oct "),s("span",{pre:!0,attrs:{class:"token number"}},[e._v("2015")]),e._v(" "),s("span",{pre:!0,attrs:{class:"token number"}},[e._v("07")]),s("span",{pre:!0,attrs:{class:"token operator"}},[e._v(":")]),s("span",{pre:!0,attrs:{class:"token number"}},[e._v("28")]),s("span",{pre:!0,attrs:{class:"token operator"}},[e._v(":")]),s("span",{pre:!0,attrs:{class:"token number"}},[e._v("00")]),e._v(" "),s("span",{pre:!0,attrs:{class:"token constant"}},[e._v("GMT")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[e._v(";")]),e._v("\n")])]),e._v(" "),s("div",{staticClass:"line-numbers-wrapper"},[s("span",{staticClass:"line-number"},[e._v("1")]),s("br")])]),s("p",[e._v("当 Expires 属性缺省（即 Expires 值为 "),s("code",[e._v("Session")]),e._v("）时，表示是会话性的 Cookie。当为会话性Cookie时，值保存在客户端内存中，\n并在用户关闭浏览器时失效。与会话性Cookie相对的是持久性Cookie，持久性Cookie会保存在用户的硬盘中，直到过期或者清除Cookie。\n设定的日期和时间只与客户端相关，而不是服务端。")]),e._v(" "),s("h4",{attrs:{id:"max-age"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#max-age"}},[e._v("#")]),e._v(" Max-Age")]),e._v(" "),s("blockquote",[s("p",[e._v("Max-Age 用于设置在 Cookie 失效之前需要经过的秒数。\n"),s("code",[e._v("Set-Cookie: id=a3fWa; Max-Age=604800;")])])]),e._v(" "),s("p",[e._v("Max-Age 可以为正数、负数、甚至是 0.")]),e._v(" "),s("ul",[s("li",[s("strong",[e._v("若 max-age 属性为正数时，浏览器会将其持久化，即写到对应的 Cookie 文件中。")])]),e._v(" "),s("li",[s("strong",[e._v("若 max-age 属性为负数，则表示该 Cookie 只是一个会话性 Cookie。")])]),e._v(" "),s("li",[s("strong",[e._v("当 max-age 为0时，则会立即删除这个 Cookie。")])]),e._v(" "),s("li",[s("strong",[e._v("若 Expires 和 Max-Age 都存在，Max-Age 优先级更高。")])])]),e._v(" "),s("h4",{attrs:{id:"domain"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#domain"}},[e._v("#")]),e._v(" Domain")]),e._v(" "),s("p",[e._v("Domain 指定了 Cookie 可以送达的主机名。若没有指定，则默认值为当前文档访问地址中的主机部分（但是不包括子域名）。")]),e._v(" "),s("p",[e._v("淘宝首页设置的 Domain 为 "),s("code",[e._v(".taobao.com")]),e._v("，无论是 "),s("code",[e._v("a.taobao.com")]),e._v(" 还是 "),s("code",[e._v("b.taobao.com")]),e._v(" 都可以使用 Cookie。")]),e._v(" "),s("p",[s("strong",[e._v("不能跨域设置 Cookie：阿里域名下的页面把 Domain 设置成百度是无效的：")])]),e._v(" "),s("div",{staticClass:"language-javascript line-numbers-mode"},[s("pre",{pre:!0,attrs:{class:"language-javascript"}},[s("code",[e._v("Set"),s("span",{pre:!0,attrs:{class:"token operator"}},[e._v("-")]),e._v("Cookie"),s("span",{pre:!0,attrs:{class:"token operator"}},[e._v(":")]),e._v(" qwerty"),s("span",{pre:!0,attrs:{class:"token operator"}},[e._v("=")]),s("span",{pre:!0,attrs:{class:"token number"}},[e._v("219")]),e._v("ffwef9w0f"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[e._v(";")]),e._v(" Domain"),s("span",{pre:!0,attrs:{class:"token operator"}},[e._v("=")]),e._v("baidu"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[e._v(".")]),e._v("com"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[e._v(";")]),e._v(" Path"),s("span",{pre:!0,attrs:{class:"token operator"}},[e._v("=")]),s("span",{pre:!0,attrs:{class:"token operator"}},[e._v("/")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[e._v(";")]),e._v(" Expires"),s("span",{pre:!0,attrs:{class:"token operator"}},[e._v("=")]),e._v("Wed"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[e._v(",")]),e._v(" "),s("span",{pre:!0,attrs:{class:"token number"}},[e._v("30")]),e._v(" Aug "),s("span",{pre:!0,attrs:{class:"token number"}},[e._v("2020")]),e._v(" "),s("span",{pre:!0,attrs:{class:"token number"}},[e._v("00")]),s("span",{pre:!0,attrs:{class:"token operator"}},[e._v(":")]),s("span",{pre:!0,attrs:{class:"token number"}},[e._v("00")]),s("span",{pre:!0,attrs:{class:"token operator"}},[e._v(":")]),s("span",{pre:!0,attrs:{class:"token number"}},[e._v("00")]),e._v(" "),s("span",{pre:!0,attrs:{class:"token constant"}},[e._v("GMT")]),e._v("\n")])]),e._v(" "),s("div",{staticClass:"line-numbers-wrapper"},[s("span",{staticClass:"line-number"},[e._v("1")]),s("br")])]),s("h4",{attrs:{id:"path"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#path"}},[e._v("#")]),e._v(" Path")]),e._v(" "),s("blockquote",[s("p",[e._v("Path 指定了一个 URL 路径，此路径必须出现在要请求的资源的路径中才可以发送 Cookie 首部。\n如设置 "),s("code",[e._v("Path=/docs")]),e._v("，"),s("code",[e._v("/docs/Web")]),e._v(" 下的资源会带 Cookie 首部，"),s("code",[e._v("/test")]),e._v(" 则不会携带 Cookie 首部。")])]),e._v(" "),s("p",[s("strong",[e._v("Domain 和 Path 标识共同定义了 Cookie 的作用域：即 Cookie 应该发给哪些 URL。")])]),e._v(" "),s("h4",{attrs:{id:"secure属性"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#secure属性"}},[e._v("#")]),e._v(" Secure属性")]),e._v(" "),s("blockquote",[s("p",[s("strong",[e._v("标记为 Secure 的 Cookie 只应通过被HTTPS协议加密过的请求发送给服务端。使用 HTTPS 安全协议，可以保护Cookie在浏览器和Web服务器间的传输过程中不被窃取和篡改。")])])]),e._v(" "),s("h4",{attrs:{id:"httponly"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#httponly"}},[e._v("#")]),e._v(" HTTPOnly")]),e._v(" "),s("blockquote",[s("p",[s("strong",[e._v("设置 HTTPOnly 属性可以防止客户端脚本通过 document.cookie 等方式访问 Cookie，有助于避免 XSS 攻击。")])])]),e._v(" "),s("ul",[s("li",[e._v("HttpOnly："),s("strong",[e._v("防止XSS攻击，禁止攻击者通过"),s("code",[e._v("document.cookie")]),e._v("获取cookie")]),e._v("；")]),e._v(" "),s("li",[e._v("SameSite："),s("strong",[e._v("禁止第三方网站携带cookie，可防止CSRF攻击")]),e._v("。")])]),e._v(" "),s("h4",{attrs:{id:"samesite"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#samesite"}},[e._v("#")]),e._v(" SameSite")]),e._v(" "),s("blockquote",[s("p",[s("strong",[e._v("SameSite 属性可以让 Cookie 在跨站请求时不会被发送，从而可以阻止跨站请求伪造攻击（CSRF）。")])])]),e._v(" "),s("p",[e._v("属性值")]),e._v(" "),s("ul",[s("li",[s("strong",[e._v("Strict：仅允许一方请求携带 Cookie，即浏览器将只发送相同站点请求的 Cookie，即当前网页 URL 与请求目标 URL 完全一致。")])]),e._v(" "),s("li",[s("strong",[e._v("Lax：允许部分第三方请求携带 Cookie。")])]),e._v(" "),s("li",[s("strong",[e._v("None：无论是否跨站都会发送 Cookie。")])])]),e._v(" "),s("h2",{attrs:{id:"跨域和跨站"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#跨域和跨站"}},[e._v("#")]),e._v(" 跨域和跨站")]),e._v(" "),s("blockquote",[s("p",[e._v("跨站与跨域是不同的。同站（same-site）/跨站（cross-site）和第一方（first-party）/第三方（third-party）是等价的。\n但是与浏览器同源策略（SOP）中的同源（same-origin）/跨域（cross-origin）是完全不同的概念。")])]),e._v(" "),s("p",[s("strong",[e._v("同源策略的同源是指两个URL的协议/主机/端口一致。 Cookie 中的同站判断：只要两个URL的 eTLD+1 相同即可，不需要考虑协议和端口。\neTLD 表示有效顶级域名，注册于 Mozilla 维护的公共后缀列表中，例如："),s("code",[e._v(".com")]),e._v("，"),s("code",[e._v(".github.io")]),e._v(" 等。eTLD + 1表示有效顶级域名+二级域名，\n例如：taobao.com 等。")])]),e._v(" "),s("p",[e._v("举例："),s("code",[e._v("www.taobao.com")]),e._v(" 和 "),s("code",[e._v("www.baidu.com")]),e._v(" 是跨站；"),s("code",[e._v("www.a.taobao.com")]),e._v(" 和 "),s("code",[e._v("www.b.taobao.com")]),e._v(" 是同站；\n"),s("code",[e._v("a.github.io")]),e._v(" 和 "),s("code",[e._v("b.github.io")]),e._v(" 是跨站。")]),e._v(" "),s("h2",{attrs:{id:"cookie-的作用"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#cookie-的作用"}},[e._v("#")]),e._v(" Cookie 的作用")]),e._v(" "),s("ul",[s("li",[e._v("会话状态管理（如用户登录状态、购物车、游戏分数或其它需要记录的信息）")]),e._v(" "),s("li",[e._v("个性化设置（如用户自定义设置、主题等）")]),e._v(" "),s("li",[e._v("浏览器行为跟踪（如跟踪分析用户行为等）")])]),e._v(" "),s("h2",{attrs:{id:"session-与-cookie-的区别"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#session-与-cookie-的区别"}},[e._v("#")]),e._v(" session 与 cookie 的区别")]),e._v(" "),s("ul",[s("li",[e._v("session 在服务器端，cookie 在客户端（浏览器）")]),e._v(" "),s("li",[e._v("session 存在在服务器的一个文件里（默认），不是内存")]),e._v(" "),s("li",[e._v("session 的运行依赖 session id，而 session id 是存在 cookie 中的。即如果浏览器禁用了cookie，session也会失效")]),e._v(" "),s("li",[e._v("session 可以放在文件、数据库、或内存中都可以")]),e._v(" "),s("li",[e._v("用户验证这种场合一般用 session")])]),e._v(" "),s("p",[s("strong",[e._v("由于HTTP协议是无状态的协议，所以服务端需要记录用户的状态时，就需要用某种机制来识别具体的用户，这个机制就是Session。\n典型的场景如：购物车，当点击下单按钮时，由于HTTP协议无状态，所以并不知道是哪个用户操作的，所以服务端要为特定的用户创建特定的Session，\n用于标识这个用户，并且跟踪用户，这样才知道购物车里面有几本书。这个Session是保存在服务端的，有一个唯一标识。在服务端保存Session的方法有很多，\n内存、数据库、文件都有。集群的时候也要考虑Session的转移，在大型的网站，一般会有专门的Session服务器集群，用来保存用户会话。此时Session信息都是\n放在内存的，使用一些缓存服务比如Memcached之类的来放Session。")])]),e._v(" "),s("p",[s("strong",[e._v("思考服务端如何识别特定的客户？此时需要Cookie的登场。每次HTTP请求的时候，客户端都会发送相应的Cookie信息到服务端。\n实际上大多数的应用都是用Cookie来实现Session跟踪的。第一次创建Session的时候，服务端会在HTTP协议中告诉客户端，需要在Cookie里面\n记录一个Session ID，以后每次请求把这个会话ID发送到服务器，这样服务器就知道客户是谁。若客户端的浏览器禁用了Cookie怎么办？一般情况下，\n会使用一种叫做URL重写的技术来进行会话跟踪，即每次HTTP交互，URL后面都会被附加上一个诸如："),s("code",[e._v("sid=xxxx")]),e._v(" 这样的参数，服务端据此来识别用户。")])]),e._v(" "),s("p",[s("strong",[e._v("Cookie 还可以用在一些方便用户的场景下。假想某次登陆一个网站，下次登录的时候不想再次输入账号了，怎么办？这个信息可以写到Cookie里面，\n访问网站的时候，网站页面的脚本可以读取这个信息，就自动帮你把用户名给填了，能够方便一下用户。")])]),e._v(" "),s("h2",{attrs:{id:"cookie-与-session-问答"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#cookie-与-session-问答"}},[e._v("#")]),e._v(" Cookie 与 Session 问答")]),e._v(" "),s("h3",{attrs:{id:"浏览器关闭后，cookie和session都消失了，对吗？"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#浏览器关闭后，cookie和session都消失了，对吗？"}},[e._v("#")]),e._v(" 浏览器关闭后，Cookie和Session都消失了，对吗？")]),e._v(" "),s("p",[e._v("错。存储在内存中的Cookie确实会随着浏览器的关闭而消失，但存储在硬盘上的不会。")]),e._v(" "),s("h3",{attrs:{id:"如果把别人机器上的cookie文件复制到我的电脑上（假设使用相同的浏览器），是不是能够登录别人的账号呢？如何防范？"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#如果把别人机器上的cookie文件复制到我的电脑上（假设使用相同的浏览器），是不是能够登录别人的账号呢？如何防范？"}},[e._v("#")]),e._v(" 如果把别人机器上的Cookie文件复制到我的电脑上（假设使用相同的浏览器），是不是能够登录别人的账号呢？如何防范？")]),e._v(" "),s("p",[e._v("是的。这属于Cookie劫持的一种做法。要避免这种情况，需要在Cookie中针对IP、UA等加上特殊的校验信息，然后和服务器端进行比对。")]),e._v(" "),s("h2",{attrs:{id:"参考文章"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#参考文章"}},[e._v("#")]),e._v(" 参考文章")]),e._v(" "),s("ul",[s("li",[s("a",{attrs:{href:"https://juejin.im/post/5e718ecc6fb9a07cda098c2d",target:"_blank",rel:"noopener noreferrer"}},[e._v("Cookie的SameSite属性"),s("OutboundLink")],1)]),e._v(" "),s("li",[s("a",{attrs:{href:"https://www.cnblogs.com/ajianbeyourself/p/4900140.html",target:"_blank",rel:"noopener noreferrer"}},[e._v("HTTP cookies详解"),s("OutboundLink")],1)]),e._v(" "),s("li",[s("a",{attrs:{href:"https://mp.weixin.qq.com/s/NXrH7R8y2Dqxs9Ekm0u33w?",target:"_blank",rel:"noopener noreferrer"}},[e._v("详解 Cookie 纪要"),s("OutboundLink")],1)]),e._v(" "),s("li",[s("a",{attrs:{href:"https://juejin.im/post/5e055d9ef265da33997a42cc",target:"_blank",rel:"noopener noreferrer"}},[e._v("傻傻分不清之Cookie、Session、Token、JWT"),s("OutboundLink")],1)])])])}),[],!1,null,null,null);o.default=a.exports}}]);