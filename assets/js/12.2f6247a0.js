(window.webpackJsonp=window.webpackJsonp||[]).push([[12],{409:function(s,t,a){s.exports=a.p+"assets/img/why-esm.b7918652.png"},423:function(s,t,a){"use strict";a.r(t);var n=a(2),e=Object(n.a)({},(function(){var s=this,t=s._self._c;return t("ContentSlotsDistributor",{attrs:{"slot-key":s.$parent.slotKey}},[t("h2",{attrs:{id:"写在前面"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#写在前面"}},[s._v("#")]),s._v(" 写在前面")]),s._v(" "),t("p",[s._v("Pure ESM 是目前模块化中比较有意思的一个话题，最早由"),t("a",{attrs:{href:""}},[s._v("sindresorhus")]),s._v(' 在 Github 上的一个帖子中提出，它的意思不难理解，"纯净的 ESM"，对此暂且有两种解读：一种是比较狭义的理解，即 npm 包仅保留 ESM 格式产物，抛弃其他格式产物；广义的理解包容性更强，即所有的 npm 包都提供 ESM 格式产物。')]),s._v(" "),t("p",[s._v("Pure ESM 这个概念天生带有一份激进性和排他性，在社区里面引发了一系列讨论，众说纷纭，赞成的有，不赞成亦有。ESM 作为面向未来的前端模块化标准，已经足以应对于现代模块化开发的大部分场景。社区中越来越多的包也开始拥抱 ESM 大一统趋势，开始提供 ESM 格式产物，部分包更加激进，直接采用 Pure ESM 模式，例如 chalk 包，v5.0 以后将不再支持 Commonjs 产物。")]),s._v(" "),t("p",[s._v("面对来势汹汹的 Pure ESM，我们应该持有什么样的态度那？首先谈一下我的看法:")]),s._v(" "),t("p",[s._v("从长远趋势来看，Pure ESM 是革命性的正确，推动 ESM 大一统能有效推进前端开发的规范性，提高开发效率。但从现状来看，目前尚存有大量 Commonjs Only 的包，一昧的推行 Pure ESM 有失偏颇。")]),s._v(" "),t("p",[s._v("因此，我们应该客观的对待 Pure ESM：")]),s._v(" "),t("ul",[t("li",[s._v("对于没有上层封装的大型框架，例如 Vite、Next、Umi 等，鼓励使用 ESM，推动社区向 ESM 迁移")]),s._v(" "),t("li",[s._v("对于底层基础库，推荐使用 "),t("a",{attrs:{href:"https://nodejs.org/api/packages.html#dual-commonjses-module-packages",target:"_blank",rel:"noopener noreferrer"}},[s._v("Dual Package"),t("OutboundLink")],1),s._v("，即提供 ESM 和 Commonjs 双格式产物")]),s._v(" "),t("li",[s._v("对于日常开发，强烈推荐使用 ESM，Pure ESM 具备"),t("strong",[s._v("传染性")]),s._v("，ESM 使用基数的提升，可能引发多米诺骨牌效应，加速 Commonjs 的淘汰。")])]),s._v(" "),t("h2",{attrs:{id:"esm-commonjs-互通"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#esm-commonjs-互通"}},[s._v("#")]),s._v(" ESM & Commonjs 互通")]),s._v(" "),t("p",[s._v("JavaScript 现在有两种模块，一种是 Commonjs 模块，另一种是 ESM。Commonjs 采取同步加载方案，主要应用于 Nodejs 中；ESM 则采用异步加载方案，两者互相并不兼容。")]),s._v(" "),t("p",[s._v("在"),t("a",{attrs:{href:"https://juejin.cn/post/7215978971711438904",target:"_blank",rel:"noopener noreferrer"}},[s._v("群雄逐鹿，前端模块化的未来在何方"),t("OutboundLink")],1),s._v("中讲过，Node v12 版本后，开始提供对 ESM 的原生支持；ES2020 提案中，ESM 引入 import() 函数，来实现动态加载模块。也就是说，ESM 其实已经实现了对 Commonjs 的全面覆盖，还额外附带自己的优势，ESM 比 Commonjs 更具潜力。")]),s._v(" "),t("p",[t("img",{attrs:{src:a(409),alt:""}})]),s._v(" "),t("p",[s._v("Nodejs v12 以后，可以支持 ESM 和 Commonjs 模块协同操作，但两者并不能互相加载，"),t("strong",[s._v("ESM 可以加载 Commonjs，Commonjs 缺无法通过 require 加载 ESM")]),s._v("。")]),s._v(" "),t("h3",{attrs:{id:"commonjs-下使用-import"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#commonjs-下使用-import"}},[s._v("#")]),s._v(" Commonjs 下使用 import")]),s._v(" "),t("p",[s._v("在 ESM 中，直接导入 Commonjs 是完全可以的，但注意由于 Commonjs 导出 module.exports 为对象，ESM 存有静态分析，因此只能采用整体加载。")]),s._v(" "),t("div",{staticClass:"language-js extra-class"},[t("pre",{pre:!0,attrs:{class:"language-js"}},[t("code",[t("span",{pre:!0,attrs:{class:"token comment"}},[s._v("// esm-import-commonjs/commonjs.cjs")]),s._v("\nmodule"),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(".")]),s._v("exports"),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(".")]),s._v("onlyCommonjs "),t("span",{pre:!0,attrs:{class:"token operator"}},[s._v("=")]),s._v(" "),t("span",{pre:!0,attrs:{class:"token boolean"}},[s._v("true")]),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(";")]),s._v("\n\n"),t("span",{pre:!0,attrs:{class:"token comment"}},[s._v("// esm-import-commonjs/esm.js")]),s._v("\n"),t("span",{pre:!0,attrs:{class:"token keyword"}},[s._v("import")]),s._v(" commonjs "),t("span",{pre:!0,attrs:{class:"token keyword"}},[s._v("from")]),s._v(" "),t("span",{pre:!0,attrs:{class:"token string"}},[s._v('"./commonjs-conly.cjs"')]),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(";")]),s._v("\nconsole"),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(".")]),t("span",{pre:!0,attrs:{class:"token function"}},[s._v("log")]),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("(")]),s._v("commonjs"),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(".")]),s._v("onlyCommonjs"),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(")")]),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(";")]),s._v(" "),t("span",{pre:!0,attrs:{class:"token comment"}},[s._v("// true")]),s._v("\n\n"),t("span",{pre:!0,attrs:{class:"token comment"}},[s._v("// error")]),s._v("\n"),t("span",{pre:!0,attrs:{class:"token keyword"}},[s._v("import")]),s._v(" "),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("{")]),s._v(" onlyCommonjs "),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("}")]),s._v(" "),t("span",{pre:!0,attrs:{class:"token keyword"}},[s._v("from")]),s._v(" "),t("span",{pre:!0,attrs:{class:"token string"}},[s._v('"./commonjs-conly.cjs"')]),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(";")]),s._v("\nconsole"),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(".")]),t("span",{pre:!0,attrs:{class:"token function"}},[s._v("log")]),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("(")]),s._v("commonjs"),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(".")]),s._v("onlyCommonjs"),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(")")]),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(";")]),s._v(" "),t("span",{pre:!0,attrs:{class:"token comment"}},[s._v("// true")]),s._v("\n")])])]),t("p",[s._v("Commonjs 导入 ESM 就不可以了，此时会抛出如下错误")]),s._v(" "),t("div",{staticClass:"language-js extra-class"},[t("pre",{pre:!0,attrs:{class:"language-js"}},[t("code",[t("span",{pre:!0,attrs:{class:"token comment"}},[s._v("// commonjs-import-esm/esmOnly.mjs")]),s._v("\n"),t("span",{pre:!0,attrs:{class:"token keyword"}},[s._v("export")]),s._v(" "),t("span",{pre:!0,attrs:{class:"token keyword"}},[s._v("const")]),s._v(" onlyESM "),t("span",{pre:!0,attrs:{class:"token operator"}},[s._v("=")]),s._v(" "),t("span",{pre:!0,attrs:{class:"token boolean"}},[s._v("true")]),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(";")]),s._v("\n\n"),t("span",{pre:!0,attrs:{class:"token comment"}},[s._v("// commonjs-import-esm/common.js")]),s._v("\n"),t("span",{pre:!0,attrs:{class:"token keyword"}},[s._v("const")]),s._v(" "),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("{")]),s._v(" onlyESM "),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("}")]),s._v(" "),t("span",{pre:!0,attrs:{class:"token operator"}},[s._v("=")]),s._v(" "),t("span",{pre:!0,attrs:{class:"token function"}},[s._v("require")]),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("(")]),t("span",{pre:!0,attrs:{class:"token string"}},[s._v('"./esm-only.mjs"')]),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(")")]),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(";")]),s._v("\nconsole"),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(".")]),t("span",{pre:!0,attrs:{class:"token function"}},[s._v("log")]),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("(")]),s._v("onlyESM"),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(")")]),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(";")]),s._v("\n")])])]),t("div",{staticClass:"language-js extra-class"},[t("pre",{pre:!0,attrs:{class:"language-js"}},[t("code",[s._v("Error "),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("[")]),t("span",{pre:!0,attrs:{class:"token constant"}},[s._v("ERR_REQUIRE_ESM")]),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("]")]),t("span",{pre:!0,attrs:{class:"token operator"}},[s._v(":")]),s._v(" Must use "),t("span",{pre:!0,attrs:{class:"token keyword"}},[s._v("import")]),s._v(" to load "),t("span",{pre:!0,attrs:{class:"token constant"}},[s._v("ES")]),s._v(" Module"),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(".")]),s._v("\n")])])]),t("p",[s._v("这根本原因在于 require 是同步加载，而 ESM 则是异步加载，无法在同步上下文中导入异步模块。")]),s._v(" "),t("p",[s._v("那是不是意味着 Commonjs 中永远无法导入 ESM 包？不尽然，ES2020 提供的 import() 函数是一个例外，可以实现在 Commonjs 中使用 ESM 包。")]),s._v(" "),t("div",{staticClass:"language-js extra-class"},[t("pre",{pre:!0,attrs:{class:"language-js"}},[t("code",[t("span",{pre:!0,attrs:{class:"token comment"}},[s._v("// commonjs-import-esm/common.js")]),s._v("\n"),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("(")]),t("span",{pre:!0,attrs:{class:"token keyword"}},[s._v("async")]),s._v(" "),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("(")]),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(")")]),s._v(" "),t("span",{pre:!0,attrs:{class:"token operator"}},[s._v("=>")]),s._v(" "),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("{")]),s._v("\n  "),t("span",{pre:!0,attrs:{class:"token keyword"}},[s._v("const")]),s._v(" "),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("{")]),s._v(" onlyESM "),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("}")]),s._v(" "),t("span",{pre:!0,attrs:{class:"token operator"}},[s._v("=")]),s._v(" "),t("span",{pre:!0,attrs:{class:"token keyword"}},[s._v("await")]),s._v(" "),t("span",{pre:!0,attrs:{class:"token keyword"}},[s._v("import")]),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("(")]),t("span",{pre:!0,attrs:{class:"token string"}},[s._v('"./esm-only.mjs"')]),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(")")]),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(";")]),s._v("\n  console"),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(".")]),t("span",{pre:!0,attrs:{class:"token function"}},[s._v("log")]),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("(")]),s._v("onlyESM"),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(")")]),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(";")]),s._v(" "),t("span",{pre:!0,attrs:{class:"token comment"}},[s._v("// true")]),s._v("\n"),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("}")]),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(")")]),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("(")]),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(")")]),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(";")]),s._v("\n")])])]),t("p",[s._v("借助 dynamic import 成功实现了 Commonjs 导入 ESM 包，但同时也带来了一个非常明显的负面效应——同步执行环境异步化，这意味着整体的执行顺序都需要被异步，这并不是一种极佳的解决方案。")]),s._v(" "),t("p",[s._v("ESM 可以兼容 Commonjs，Commonjs 导入 ESM 存在重重限制，这也就意味着目前社区中存在的大量 Common Only 基础包迁移向 ESM 需要大量的人力物力消耗，这严重阻挡了 Pure ESM 趋势的发展。")]),s._v(" "),t("p",[s._v("针对这种情况，社区中提出一种折中方案——"),t("a",{attrs:{href:"https://nodejs.org/api/packages.html#dual-commonjses-module-packages",target:"_blank",rel:"noopener noreferrer"}},[s._v("Dual Packages"),t("OutboundLink")],1),s._v("。")]),s._v(" "),t("h2",{attrs:{id:"dual-packages"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#dual-packages"}},[s._v("#")]),s._v(" Dual Packages")]),s._v(" "),t("p",[s._v("Dual Packages 实现的关键在于 package.json 中提供的新字段 exports。exports 属性类似于 main，都是为 package.json 提供入口信息，此外 exports 优先级高于 main。")]),s._v(" "),t("div",{staticClass:"language-js extra-class"},[t("pre",{pre:!0,attrs:{class:"language-js"}},[t("code",[t("span",{pre:!0,attrs:{class:"token comment"}},[s._v("// es-module-package")]),s._v("\n"),t("span",{pre:!0,attrs:{class:"token comment"}},[s._v("// ./node_modules/es-module-package/package.json")]),s._v("\n"),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("{")]),s._v("\n  "),t("span",{pre:!0,attrs:{class:"token string-property property"}},[s._v('"type"')]),t("span",{pre:!0,attrs:{class:"token operator"}},[s._v(":")]),s._v(" "),t("span",{pre:!0,attrs:{class:"token string"}},[s._v('"module"')]),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(",")]),s._v("\n  "),t("span",{pre:!0,attrs:{class:"token string-property property"}},[s._v('"main"')]),t("span",{pre:!0,attrs:{class:"token operator"}},[s._v(":")]),s._v(" "),t("span",{pre:!0,attrs:{class:"token string"}},[s._v('"./src/index.js"')]),s._v("\n"),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("}")]),s._v("\n")])])]),t("p",[s._v("通过 main 指定 es-module-package 包的入口文件，格式为 ES6 模块，此时便可以使用 import 进行加载。")]),s._v(" "),t("div",{staticClass:"language-js extra-class"},[t("pre",{pre:!0,attrs:{class:"language-js"}},[t("code",[t("span",{pre:!0,attrs:{class:"token comment"}},[s._v("// ./my-app.mjs")]),s._v("\n"),t("span",{pre:!0,attrs:{class:"token keyword"}},[s._v("import")]),s._v(" "),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("{")]),s._v(" something "),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("}")]),s._v(" "),t("span",{pre:!0,attrs:{class:"token keyword"}},[s._v("from")]),s._v(" "),t("span",{pre:!0,attrs:{class:"token string"}},[s._v('"es-module-package"')]),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(";")]),s._v("\n"),t("span",{pre:!0,attrs:{class:"token comment"}},[s._v("// 实际加载的是 ./node_modules/es-module-package/src/index.js")]),s._v("\n")])])]),t("p",[s._v("脚本运行后，Nodejs 便会去 node_modules 下寻找 es-module-package 包，然后根据 package.json 下的 main 属性执行入口文件。")]),s._v(" "),t("p",[s._v("main 属性比较好理解，下面主要讲一下 exports 的多种导出方式：默认导出、子路径导出、条件导出")]),s._v(" "),t("p",[s._v("首先建立一个如下格式的项目:")]),s._v(" "),t("div",{staticClass:"language-js extra-class"},[t("pre",{pre:!0,attrs:{class:"language-js"}},[t("code",[t("span",{pre:!0,attrs:{class:"token comment"}},[s._v("// exports")]),s._v("\n├── index"),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(".")]),s._v("js\n├── "),t("span",{pre:!0,attrs:{class:"token keyword"}},[s._v("package")]),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(".")]),s._v("json\n├── node_modules\n│   ├── testmodule\n│   "),t("span",{pre:!0,attrs:{class:"token operator"}},[s._v("|")]),s._v("   ├── index"),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(".")]),s._v("cjs\n│   "),t("span",{pre:!0,attrs:{class:"token operator"}},[s._v("|")]),s._v("   ├── index"),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(".")]),s._v("mjs\n│   "),t("span",{pre:!0,attrs:{class:"token operator"}},[s._v("|")]),s._v("   ├── "),t("span",{pre:!0,attrs:{class:"token keyword"}},[s._v("package")]),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(".")]),s._v("json\n│   │   └── lib\n│   "),t("span",{pre:!0,attrs:{class:"token operator"}},[s._v("|")]),s._v("       └── childmodule"),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(".")]),s._v("js\n")])])]),t("h3",{attrs:{id:"子路径导出"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#子路径导出"}},[s._v("#")]),s._v(" 子路径导出")]),s._v(" "),t("p",[s._v("package.json 文件的 exports 字段可以指定脚本或子目录的别名。")]),s._v(" "),t("div",{staticClass:"language-js extra-class"},[t("pre",{pre:!0,attrs:{class:"language-js"}},[t("code",[t("span",{pre:!0,attrs:{class:"token comment"}},[s._v("// ./node_modules/testmodule/package.json")]),s._v("\n"),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("{")]),s._v("\n  "),t("span",{pre:!0,attrs:{class:"token string-property property"}},[s._v('"exports"')]),t("span",{pre:!0,attrs:{class:"token operator"}},[s._v(":")]),s._v(" "),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("{")]),s._v("\n    "),t("span",{pre:!0,attrs:{class:"token string-property property"}},[s._v('"./childmodule"')]),t("span",{pre:!0,attrs:{class:"token operator"}},[s._v(":")]),s._v(" "),t("span",{pre:!0,attrs:{class:"token string"}},[s._v('"./lib/childmodule.js"')]),s._v("\n  "),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("}")]),s._v("\n"),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("}")]),s._v("\n")])])]),t("p",[s._v("看上面的栗子，定义 lib/childmodule.js 别名为 childmodule，此时便可以通过 childmodule 加载。")]),s._v(" "),t("div",{staticClass:"language-js extra-class"},[t("pre",{pre:!0,attrs:{class:"language-js"}},[t("code",[t("span",{pre:!0,attrs:{class:"token keyword"}},[s._v("import")]),s._v(" childmodule "),t("span",{pre:!0,attrs:{class:"token keyword"}},[s._v("from")]),s._v(" "),t("span",{pre:!0,attrs:{class:"token string"}},[s._v('"testmodule/childmodule"')]),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(";")]),s._v("\n"),t("span",{pre:!0,attrs:{class:"token comment"}},[s._v("// 加载 ./node_modules/testmodule/lib/childmodule.js")]),s._v("\n")])])]),t("h3",{attrs:{id:"默认导出"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#默认导出"}},[s._v("#")]),s._v(" 默认导出")]),s._v(" "),t("p",[s._v("exports 属性如果使用 "),t("code",[s._v(".")]),s._v("指定别名，则代表模块的主入口，其优先级高于 main 字段。")]),s._v(" "),t("div",{staticClass:"language-js extra-class"},[t("pre",{pre:!0,attrs:{class:"language-js"}},[t("code",[t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("{")]),s._v("\n  "),t("span",{pre:!0,attrs:{class:"token string-property property"}},[s._v('"exports"')]),t("span",{pre:!0,attrs:{class:"token operator"}},[s._v(":")]),s._v(" "),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("{")]),s._v("\n    "),t("span",{pre:!0,attrs:{class:"token string-property property"}},[s._v('"."')]),t("span",{pre:!0,attrs:{class:"token operator"}},[s._v(":")]),s._v(" "),t("span",{pre:!0,attrs:{class:"token string"}},[s._v('"./main.js"')]),s._v("\n  "),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("}")]),s._v("\n"),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("}")]),s._v("\n"),t("span",{pre:!0,attrs:{class:"token comment"}},[s._v("// 等同于")]),s._v("\n"),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("{")]),s._v("\n  "),t("span",{pre:!0,attrs:{class:"token string-property property"}},[s._v('"exports"')]),t("span",{pre:!0,attrs:{class:"token operator"}},[s._v(":")]),s._v(" "),t("span",{pre:!0,attrs:{class:"token string"}},[s._v('"./main.js"')]),s._v("\n"),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("}")]),s._v("\n")])])]),t("p",[s._v("高版本 Nodejs 才支持 exports 字段，通常我们要考虑低版本的兼容问题。")]),s._v(" "),t("div",{staticClass:"language-js extra-class"},[t("pre",{pre:!0,attrs:{class:"language-js"}},[t("code",[t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("{")]),s._v("\n  "),t("span",{pre:!0,attrs:{class:"token string-property property"}},[s._v('"main"')]),t("span",{pre:!0,attrs:{class:"token operator"}},[s._v(":")]),s._v(" "),t("span",{pre:!0,attrs:{class:"token string"}},[s._v('"./main-legacy.cjs"')]),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(",")]),s._v(" "),t("span",{pre:!0,attrs:{class:"token comment"}},[s._v("// 低版本入口文件")]),s._v("\n  "),t("span",{pre:!0,attrs:{class:"token string-property property"}},[s._v('"exports"')]),t("span",{pre:!0,attrs:{class:"token operator"}},[s._v(":")]),s._v(" "),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("{")]),s._v("\n    "),t("span",{pre:!0,attrs:{class:"token string-property property"}},[s._v('"."')]),t("span",{pre:!0,attrs:{class:"token operator"}},[s._v(":")]),s._v(" "),t("span",{pre:!0,attrs:{class:"token string"}},[s._v('"./main-modern.cjs"')]),s._v("   "),t("span",{pre:!0,attrs:{class:"token comment"}},[s._v("// 高版本入口文件")]),s._v("\n  "),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("}")]),s._v("\n"),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("}")]),s._v("\n")])])]),t("h3",{attrs:{id:"条件导出"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#条件导出"}},[s._v("#")]),s._v(" 条件导出")]),s._v(" "),t("p",[s._v("Dual Packages 便是借助条件导出而实现的，通过条件导出可以指定多个条目以有条件地提供 Commonjs 及 ESM 格式产物。")]),s._v(" "),t("p",[s._v("条件导出有三大核心属性")]),s._v(" "),t("ul",[t("li",[s._v("require: 指定 require 方式导入情形，例如 require('testmodule')")]),s._v(" "),t("li",[s._v("import: 指定 import 方式导入情形")]),s._v(" "),t("li",[s._v("default: 默认情形，兜底方案")])]),s._v(" "),t("div",{staticClass:"language-js extra-class"},[t("pre",{pre:!0,attrs:{class:"language-js"}},[t("code",[t("span",{pre:!0,attrs:{class:"token string-property property"}},[s._v('"exports"')]),t("span",{pre:!0,attrs:{class:"token operator"}},[s._v(":")]),s._v(" "),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("{")]),s._v("\n    "),t("span",{pre:!0,attrs:{class:"token string-property property"}},[s._v('"."')]),t("span",{pre:!0,attrs:{class:"token operator"}},[s._v(":")]),s._v(" "),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("{")]),s._v("\n      "),t("span",{pre:!0,attrs:{class:"token string-property property"}},[s._v('"require"')]),t("span",{pre:!0,attrs:{class:"token operator"}},[s._v(":")]),s._v(" "),t("span",{pre:!0,attrs:{class:"token string"}},[s._v('"./index.cjs"')]),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(",")]),s._v("\n      "),t("span",{pre:!0,attrs:{class:"token string-property property"}},[s._v('"import"')]),t("span",{pre:!0,attrs:{class:"token operator"}},[s._v(":")]),s._v(" "),t("span",{pre:!0,attrs:{class:"token string"}},[s._v('"./index.mjs"')]),s._v("\n    "),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("}")]),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(",")]),s._v("\n    "),t("span",{pre:!0,attrs:{class:"token string-property property"}},[s._v('"./childmodule"')]),t("span",{pre:!0,attrs:{class:"token operator"}},[s._v(":")]),s._v(" "),t("span",{pre:!0,attrs:{class:"token string"}},[s._v('"./lib/childmodule.js"')]),s._v("\n  "),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("}")]),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(",")]),s._v("\n")])])]),t("p",[t("code",[s._v(".")]),s._v("路径别名定义项目入口，require 及 import 分别定义 Commonjs 和 ESM 格式产物，使用 require 加载时，入口文件为 index.cjs，使用 import 加载时，入口文件为 index.mjs。通过这种方式实现了 Commonjs 和 ESM 双格式产物的导出，也就是 Dual Packages。")]),s._v(" "),t("h3",{attrs:{id:"注意事项"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#注意事项"}},[s._v("#")]),s._v(" 注意事项")]),s._v(" "),t("blockquote",[t("p",[s._v("Tips1: 意外的双包加载风险")])]),s._v(" "),t("p",[s._v("当使用 Dual Packages 模式开发包时，提供了 Commonjs 和 ESM 两种版本产物，这两种产物在可以在同一运行时环境中被加载，这可能造成一些未知的错误。虽然应用程序或者包并不会有意加载两种版本，但可能存在一些意外情况，例如我们的应用代码使用 import ESM 版本，而项目其它依赖项 require 了 Commonjs 版本，这就造成包的两个版本同时被加载到内存中，造成某些难以解决的错误。")]),s._v(" "),t("p",[s._v("千里大堤，溃于蚁穴，双包模式虽然非常强大，但一定要尽可能避免双包风险，具体方案请参考文档"),t("a",{attrs:{href:"https://nodejs.cn/api/packages.html#packages_dual_commonjs_es_module_packages",target:"_blank",rel:"noopener noreferrer"}},[s._v("Nodejs 文档"),t("OutboundLink")],1),s._v("。")]),s._v(" "),t("blockquote",[t("p",[s._v("Tips2: type:module 强制 ESM 格式")])]),s._v(" "),t("p",[s._v("在 Nodejs 中，一般有两种方式来支持原生 ESM:")]),s._v(" "),t("ul",[t("li",[s._v("文件名以 .mjs 结尾")]),s._v(" "),t("li",[s._v("package.json 中配置 type: module")])]),s._v(" "),t("p",[s._v("配置 type: module 后，文件中 .js 扩展名都将被视为 ESM 模块，此时下列配置便会发生错误。")]),s._v(" "),t("div",{staticClass:"language-js extra-class"},[t("pre",{pre:!0,attrs:{class:"language-js"}},[t("code",[t("span",{pre:!0,attrs:{class:"token comment"}},[s._v("// ./node_modules/testmodule/package.json")]),s._v("\n"),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("{")]),s._v("\n  "),t("span",{pre:!0,attrs:{class:"token string-property property"}},[s._v('"type"')]),t("span",{pre:!0,attrs:{class:"token operator"}},[s._v(":")]),s._v(" "),t("span",{pre:!0,attrs:{class:"token string"}},[s._v('"module"')]),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(",")]),s._v("\n  "),t("span",{pre:!0,attrs:{class:"token string-property property"}},[s._v('"exports"')]),t("span",{pre:!0,attrs:{class:"token operator"}},[s._v(":")]),s._v(" "),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("{")]),s._v("\n    "),t("span",{pre:!0,attrs:{class:"token string-property property"}},[s._v('"import"')]),t("span",{pre:!0,attrs:{class:"token operator"}},[s._v(":")]),s._v(" "),t("span",{pre:!0,attrs:{class:"token string"}},[s._v('"./index.mjs"')]),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(",")]),s._v("\n    "),t("span",{pre:!0,attrs:{class:"token string-property property"}},[s._v('"require"')]),t("span",{pre:!0,attrs:{class:"token operator"}},[s._v(":")]),s._v(" "),t("span",{pre:!0,attrs:{class:"token string"}},[s._v('"./index.js"')]),s._v("\n  "),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("}")]),s._v("\n"),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("}")]),s._v("\n")])])]),t("p",[s._v("index.js 默认被视为 ESM 模块，因此 require 导出指令会失效。因此双包模式在编写时，如果配置 type: module，需要显式指定扩展名，来引导 Nodejs 识别模块类型。")]),s._v(" "),t("div",{staticClass:"language-js extra-class"},[t("pre",{pre:!0,attrs:{class:"language-js"}},[t("code",[t("span",{pre:!0,attrs:{class:"token comment"}},[s._v("// ./node_modules/testmodule/package.json")]),s._v("\n"),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("{")]),s._v("\n  "),t("span",{pre:!0,attrs:{class:"token string-property property"}},[s._v('"type"')]),t("span",{pre:!0,attrs:{class:"token operator"}},[s._v(":")]),s._v(" "),t("span",{pre:!0,attrs:{class:"token string"}},[s._v('"module"')]),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(",")]),s._v("\n  "),t("span",{pre:!0,attrs:{class:"token string-property property"}},[s._v('"exports"')]),t("span",{pre:!0,attrs:{class:"token operator"}},[s._v(":")]),s._v(" "),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("{")]),s._v("\n    "),t("span",{pre:!0,attrs:{class:"token string-property property"}},[s._v('"import"')]),t("span",{pre:!0,attrs:{class:"token operator"}},[s._v(":")]),s._v(" "),t("span",{pre:!0,attrs:{class:"token string"}},[s._v('"./index.mjs"')]),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(",")]),s._v("\n    "),t("span",{pre:!0,attrs:{class:"token string-property property"}},[s._v('"require"')]),t("span",{pre:!0,attrs:{class:"token operator"}},[s._v(":")]),s._v(" "),t("span",{pre:!0,attrs:{class:"token string"}},[s._v('"./index.cjs"')]),s._v("\n  "),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("}")]),s._v("\n"),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("}")]),s._v("\n")])])]),t("h2",{attrs:{id:"总结"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#总结"}},[s._v("#")]),s._v(" 总结")]),s._v(" "),t("p",[s._v("本文讲解了当前模块化方案中比较热点的话题——Pure ESM 与 Dual Packages。")]),s._v(" "),t("p",[s._v("ESM 与 Commonjs 的不兼容适配造成了当今模块化冲突的根源，此外社区中尚存有大量 Commonjs Only 的基础包，整体向 ESM 迁移存在重重阻力，目前来看，Pure ESM 有几分武断，但从长远来看，ESM 必将是模块化未来的规范，提倡使用 ESM 规范，共同推动社区向 ESM 进发。")]),s._v(" "),t("p",[s._v("Dual Packages 借助 Nodejs 新增加的条件导出功能，实现了一种双包格式导出的折中模块化处理方案，由于各类开发者所用模块化规范不一致，可能会造成双包风险，从而引起一系列未知错误。Dual Packages 方案还意味着要开发两种格式产物，开发成本较高。")]),s._v(" "),t("p",[s._v("从模块化历史进步的长河来看，Dual Packages 只能是模块化完善之路的一步台阶，暂时的救急之法，无法根深蒂固的影响整个模块化体系，拥抱 ESM，共同推进前端模块化的完善。")])])}),[],!1,null,null,null);t.default=e.exports}}]);