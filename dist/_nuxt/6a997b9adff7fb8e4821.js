(window.webpackJsonp=window.webpackJsonp||[]).push([[2],{620:function(e,n,t){var content=t(624);"string"==typeof content&&(content=[[e.i,content,""]]),content.locals&&(e.exports=content.locals);(0,t(6).default)("6e33315b",content,!0,{sourceMap:!1})},623:function(e,n,t){"use strict";var o=t(620);t.n(o).a},624:function(e,n,t){(e.exports=t(5)(!1)).push([e.i,'hr{margin:20px 0}.v-application code{padding:20px 20px 0;background-color:#282c34;color:#abb2bf;margin:0 0 20px}.v-application code:before{content:""}.page-component{padding:50px;max-width:1280px;margin:0 auto}.page-component img{margin:50px 0}',""])},626:function(e,n,t){"use strict";t.r(n);var o=t(113),r=Object(o.createClient)(),c={name:"index",asyncData:function(e){e.env;var n=e.params;return r.getEntries({content_type:"page","fields.slug":n.id}).then(function(e){return{page:e.items[0]}}).catch(console.error)}},l=(t(623),t(22)),component=Object(l.a)(c,function(){var e=this,n=e.$createElement,t=e._self._c||n;return t("div",{staticClass:"page-component"},[t("h1",[e._v(e._s(e.page.fields.title))]),e._v(" "),t("hr"),e._v(" "),t("p",{domProps:{innerHTML:e._s(e.$md.render(e.page.fields.content))}})])},[],!1,null,null,null);n.default=component.exports}}]);