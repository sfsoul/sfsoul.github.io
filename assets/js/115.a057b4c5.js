(window.webpackJsonp=window.webpackJsonp||[]).push([[115],{225:function(t,a,r){"use strict";r.r(a);var s=r(28),e=Object(s.a)({},(function(){var t=this,a=t.$createElement,r=t._self._c||a;return r("ContentSlotsDistributor",{attrs:{"slot-key":t.$parent.slotKey}},[r("h2",{attrs:{id:"什么是内存泄漏？"}},[r("a",{staticClass:"header-anchor",attrs:{href:"#什么是内存泄漏？"}},[t._v("#")]),t._v(" 什么是内存泄漏？")]),t._v(" "),r("p",[r("strong",[t._v("不再用到的内存，没有及时释放，就叫做内存泄漏（memory leak）。")])]),t._v(" "),r("h2",{attrs:{id:"内存生命周期"}},[r("a",{staticClass:"header-anchor",attrs:{href:"#内存生命周期"}},[t._v("#")]),t._v(" 内存生命周期")]),t._v(" "),r("p",[t._v("内存一般分为三个周期：")]),t._v(" "),r("ul",[r("li",[t._v("分配期：分配所需要的内存")]),t._v(" "),r("li",[t._v("使用期：使用分配到的内存（读、写）")]),t._v(" "),r("li",[t._v("释放期：不需要时将其释放和归还")])]),t._v(" "),r("p",[r("strong",[t._v("内存分配 -> 内存使用 -> 内存释放。")])]),t._v(" "),r("h2",{attrs:{id:"内存回收-垃圾回收机制"}},[r("a",{staticClass:"header-anchor",attrs:{href:"#内存回收-垃圾回收机制"}},[t._v("#")]),t._v(" 内存回收/垃圾回收机制")]),t._v(" "),r("h3",{attrs:{id:"引用计数垃圾收集"}},[r("a",{staticClass:"header-anchor",attrs:{href:"#引用计数垃圾收集"}},[t._v("#")]),t._v(" 引用计数垃圾收集")]),t._v(" "),r("blockquote",[r("p",[t._v("这是最初级的垃圾收集算法。此算法把“对象是否不再需要”简化定义为“对象有没有其他对象引用到它”。如果没有引用指向该对象（零引用），对象将被垃圾回收机制回收。")])]),t._v(" "),r("h3",{attrs:{id:"标记清除法"}},[r("a",{staticClass:"header-anchor",attrs:{href:"#标记清除法"}},[t._v("#")]),t._v(" 标记清除法")]),t._v(" "),r("blockquote",[r("p",[t._v("当变量进入执行环境时标记为“进入环境”，当变量离开执行环境时则标记为“离开环境”，被标记为“进入环境”的变量是不能被回收的，因为它们正在被使用，而标记为“离开环境”的变量则可以被回收。")])]),t._v(" "),r("h2",{attrs:{id:"javascript-内存泄漏的一些场景"}},[r("a",{staticClass:"header-anchor",attrs:{href:"#javascript-内存泄漏的一些场景"}},[t._v("#")]),t._v(" JavaScript 内存泄漏的一些场景")]),t._v(" "),r("h3",{attrs:{id:"意外的全局变量"}},[r("a",{staticClass:"header-anchor",attrs:{href:"#意外的全局变量"}},[t._v("#")]),t._v(" 意外的全局变量")]),t._v(" "),r("h3",{attrs:{id:"被遗忘的定时器"}},[r("a",{staticClass:"header-anchor",attrs:{href:"#被遗忘的定时器"}},[t._v("#")]),t._v(" 被遗忘的定时器")]),t._v(" "),r("h3",{attrs:{id:"被遗忘的事件监听"}},[r("a",{staticClass:"header-anchor",attrs:{href:"#被遗忘的事件监听"}},[t._v("#")]),t._v(" 被遗忘的事件监听")]),t._v(" "),r("h3",{attrs:{id:"被遗忘的订阅发布事件监听器"}},[r("a",{staticClass:"header-anchor",attrs:{href:"#被遗忘的订阅发布事件监听器"}},[t._v("#")]),t._v(" 被遗忘的订阅发布事件监听器")]),t._v(" "),r("h3",{attrs:{id:"被遗忘的闭包"}},[r("a",{staticClass:"header-anchor",attrs:{href:"#被遗忘的闭包"}},[t._v("#")]),t._v(" 被遗忘的闭包")]),t._v(" "),r("h3",{attrs:{id:"脱离-dom-的引用"}},[r("a",{staticClass:"header-anchor",attrs:{href:"#脱离-dom-的引用"}},[t._v("#")]),t._v(" 脱离 DOM 的引用")]),t._v(" "),r("h2",{attrs:{id:"参考文章"}},[r("a",{staticClass:"header-anchor",attrs:{href:"#参考文章"}},[t._v("#")]),t._v(" 参考文章")]),t._v(" "),r("ul",[r("li",[r("a",{attrs:{href:"https://jinlong.github.io/2016/05/01/4-Types-of-Memory-Leaks-in-JavaScript-and-How-to-Get-Rid-Of-Them/",target:"_blank",rel:"noopener noreferrer"}},[t._v("4类JavaScript内存泄漏及如何避免"),r("OutboundLink")],1)]),t._v(" "),r("li",[r("a",{attrs:{href:"https://segmentfault.com/a/1190000020231307",target:"_blank",rel:"noopener noreferrer"}},[t._v("深入了解JavaScript内存泄漏"),r("OutboundLink")],1)])])])}),[],!1,null,null,null);a.default=e.exports}}]);