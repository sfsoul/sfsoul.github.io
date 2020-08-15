(window.webpackJsonp=window.webpackJsonp||[]).push([[28],{272:function(e,t,n){"use strict";n.r(t);var r=n(28),a=Object(r.a)({},(function(){var e=this,t=e.$createElement,n=e._self._c||t;return n("ContentSlotsDistributor",{attrs:{"slot-key":e.$parent.slotKey}},[n("div",{staticClass:"language- line-numbers-mode"},[n("pre",{pre:!0,attrs:{class:"language-text"}},[n("code",[e._v("const a = {\n    i: 1,\n    toString: function () {\n        return a.i++;\n    }\n}\nif (a == 1 && a == 2 && a == 3) {\n    console.log('hello world!');\n}\n")])]),e._v(" "),n("div",{staticClass:"line-numbers-wrapper"},[n("span",{staticClass:"line-number"},[e._v("1")]),n("br"),n("span",{staticClass:"line-number"},[e._v("2")]),n("br"),n("span",{staticClass:"line-number"},[e._v("3")]),n("br"),n("span",{staticClass:"line-number"},[e._v("4")]),n("br"),n("span",{staticClass:"line-number"},[e._v("5")]),n("br"),n("span",{staticClass:"line-number"},[e._v("6")]),n("br"),n("span",{staticClass:"line-number"},[e._v("7")]),n("br"),n("span",{staticClass:"line-number"},[e._v("8")]),n("br"),n("span",{staticClass:"line-number"},[e._v("9")]),n("br")])]),n("h2",{attrs:{id:"三种隐式转换类型"}},[n("a",{staticClass:"header-anchor",attrs:{href:"#三种隐式转换类型"}},[e._v("#")]),e._v(" 三种隐式转换类型")]),e._v(" "),n("ul",[n("li",[e._v("将值转为原始值，ToPrimitive()")]),e._v(" "),n("li",[e._v("将值转为数字，ToNumber()")]),e._v(" "),n("li",[e._v("将值转为字符串，toStrng()")])]),e._v(" "),n("h2",{attrs:{id:"valueof方法和tostring方法解析"}},[n("a",{staticClass:"header-anchor",attrs:{href:"#valueof方法和tostring方法解析"}},[e._v("#")]),e._v(" valueOf方法和toString方法解析")]),e._v(" "),n("h2",{attrs:{id:"通过tonumber将值转换为数字"}},[n("a",{staticClass:"header-anchor",attrs:{href:"#通过tonumber将值转换为数字"}},[e._v("#")]),e._v(" 通过ToNumber将值转换为数字")]),e._v(" "),n("p",[n("img",{attrs:{src:"https://i.loli.net/2020/06/28/PrFpX17K2NdDRGZ.png",alt:"ToNumber"}})]),e._v(" "),n("h2",{attrs:{id:"通过tostring将值转换为字符串"}},[n("a",{staticClass:"header-anchor",attrs:{href:"#通过tostring将值转换为字符串"}},[e._v("#")]),e._v(" 通过ToString将值转换为字符串")]),e._v(" "),n("p",[n("img",{attrs:{src:"https://i.loli.net/2020/06/28/GBoVpnZRMSyKjcD.png",alt:"ToString"}})]),e._v(" "),n("h2",{attrs:{id:"运算符隐式转换"}},[n("a",{staticClass:"header-anchor",attrs:{href:"#运算符隐式转换"}},[e._v("#")]),e._v(" == 运算符隐式转换")]),e._v(" "),n("p",[e._v("比较运算 x==y, 其中 x 和 y 是值，返回 true 或者 false。这样的比较按如下方式进行：")]),e._v(" "),n("p",[e._v("1、若 Type(x) 与 Type(y) 相同， 则")]),e._v(" "),n("div",{staticClass:"language- extra-class"},[n("pre",[n("code",[e._v("1* 若 Type(x) 为 Undefined， 返回 true。\n\n2* 若 Type(x) 为 Null， 返回 true。\n\n3* 若 Type(x) 为 Number， 则\n\n    (1)、若 x 为 NaN， 返回 false。\n\n    (2)、若 y 为 NaN， 返回 false。\n\n    (3)、若 x 与 y 为相等数值， 返回 true。\n\n    (4)、若 x 为 +0 且 y 为 −0， 返回 true。\n\n    (5)、若 x 为 −0 且 y 为 +0， 返回 true。\n\n    (6)、返回 false。\n\n4* 若 Type(x) 为 String, 则当 x 和 y 为完全相同的字符序列（长度相等且相同字符在相同位置）时返回 true。 否则， 返回 false。\n\n5* 若 Type(x) 为 Boolean, 当 x 和 y 为同为 true 或者同为 false 时返回 true。 否则， 返回 false。\n\n6*  当 x 和 y 为引用同一对象时返回 true。否则，返回 false。\n")])])]),n("p",[e._v("2、若 x 为 null 且 y 为 undefined， 返回 true。")]),e._v(" "),n("p",[e._v("3、若 x 为 undefined 且 y 为 null， 返回 true。")]),e._v(" "),n("p",[e._v("4、若 Type(x) 为 Number 且 Type(y) 为 String，返回比较 x == ToNumber(y) 的结果。")]),e._v(" "),n("p",[e._v("5、若 Type(x) 为 String 且 Type(y) 为 Number，返回比较 ToNumber(x) == y 的结果。")]),e._v(" "),n("p",[e._v("6、若 Type(x) 为 Boolean， 返回比较 ToNumber(x) == y 的结果。")]),e._v(" "),n("p",[e._v("7、若 Type(y) 为 Boolean， 返回比较 x == ToNumber(y) 的结果。")]),e._v(" "),n("p",[e._v("8、若 Type(x) 为 String 或 Number，且 Type(y) 为 Object，返回比较 x == ToPrimitive(y) 的结果。")]),e._v(" "),n("p",[e._v("9、若 Type(x) 为 Object 且 Type(y) 为 String 或 Number， 返回比较 ToPrimitive(x) == y 的结果。")]),e._v(" "),n("p",[e._v("10、返回 false。")]),e._v(" "),n("h2",{attrs:{id:"参考文章"}},[n("a",{staticClass:"header-anchor",attrs:{href:"#参考文章"}},[e._v("#")]),e._v(" 参考文章")]),e._v(" "),n("ul",[n("li",[n("a",{attrs:{href:"https://juejin.im/post/5a7172d9f265da3e3245cbca",target:"_blank",rel:"noopener noreferrer"}},[e._v("你所忽略的js隐式转换"),n("OutboundLink")],1)]),e._v(" "),n("li",[n("a",{attrs:{href:"https://juejin.im/post/5d6cc601f265da03c8153b36",target:"_blank",rel:"noopener noreferrer"}},[e._v("带你撸一遍JS隐式转换细则"),n("OutboundLink")],1)])])])}),[],!1,null,null,null);t.default=a.exports}}]);