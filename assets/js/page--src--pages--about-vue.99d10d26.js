(window.webpackJsonp=window.webpackJsonp||[]).push([[3],{232:function(t,s,e){},233:function(t,s,e){},234:function(t,s,e){},236:function(t,s,e){"use strict";var n=e(232);e.n(n).a},237:function(t,s,e){"use strict";var n=e(233);e.n(n).a},238:function(t,s,e){"use strict";var n={props:["post"]},a=(e(237),e(15)),i=Object(a.a)(n,(function(){var t=this,s=t.$createElement,e=t._self._c||s;return e("div",{staticClass:"post-tags"},t._l(t.post.tags,(function(s){return e("g-link",{key:s.id,staticClass:"post-tags__link",attrs:{to:s.path}},[e("span",[t._v("#")]),t._v(" "+t._s(s.title)+"\n\t\t")])})),1)}),[],!1,null,null,null);s.a=i.exports},239:function(t,s,e){"use strict";var n={props:["post"]},a=(e(236),e(15)),i=Object(a.a)(n,(function(){var t=this,s=t.$createElement,e=t._self._c||s;return e("div",{staticClass:"post-meta"},[t._v("\n   Posted "+t._s(t.post.date)+".\n   "),t.post.timeToRead?[e("strong",[t._v(t._s(t.post.timeToRead)+" min read.")])]:t._e()],2)}),[],!1,null,null,null);s.a=i.exports},240:function(t,s,e){"use strict";var n=e(234);e.n(n).a},241:function(t,s,e){"use strict";e(240);var n=e(15),a=Object(n.a)({},(function(){var t=this.$createElement,s=this._self._c||t;return s("div",{staticClass:"side-menu"},[s("router-link",{staticClass:"link",attrs:{to:"/"}},[this._v(" subneural space ")]),s("router-link",{staticClass:"link",attrs:{to:"/about/"}},[this._v(" regarding this space ")]),s("router-link",{staticClass:"link",attrs:{to:"/entries/"}},[this._v(" all neural outputs ")]),s("p",{staticClass:"spacer"}),s("g-link",{staticClass:"link",attrs:{to:"https://dpettas.com/"}},[this._v(" Dionisis Pettas ")])],1)}),[],!1,null,null,null);s.a=a.exports},247:function(t,s){},261:function(t,s,e){"use strict";var n=e(247),a=e.n(n);s.default=a.a},278:function(t,s,e){"use strict";e.r(s);var n=e(239),a=e(238),i={components:{PostMeta:n.a,PostTags:a.a},props:["post"]},o=e(15),r={components:{AboutSection:Object(o.a)(i,(function(){var t=this.$createElement,s=this._self._c||t;return s("div",{staticClass:"about_container"},[s("span",{directives:[{name:"g-image",rawName:"v-g-image"}],staticClass:" about_container__title",domProps:{innerHTML:this._s(this.post.section)}}),s("p",{directives:[{name:"g-image",rawName:"v-g-image"}],staticClass:" about_container__content",domProps:{innerHTML:this._s(this.post.description)}})])}),[],!1,null,null,null).exports,Sidemenu:e(241).a},metaInfo:{title:"Portal"}},l=e(261),c=Object(o.a)(r,(function(){var t=this.$createElement,s=this._self._c||t;return s("Layout",{attrs:{"show-entries":!0}},[s("h2",{staticClass:"entry__title"},[this._v(" about this space ")]),s("div",{staticClass:"flex-container"},[s("div",{staticStyle:{flex:"4"}},this._l(this.$page.posts.edges,(function(t){return s("AboutSection",{key:t.node.id,attrs:{post:t.node}})})),1),s("div",{staticStyle:{flex:"1"}},[s("Sidemenu")],1)])])}),[],!1,null,null,null);"function"==typeof l.default&&Object(l.default)(c);s.default=c.exports}}]);