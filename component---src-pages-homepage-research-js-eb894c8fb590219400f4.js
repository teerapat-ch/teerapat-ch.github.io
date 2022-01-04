"use strict";(self.webpackChunkteerapat_ted_chaiwachirasak=self.webpackChunkteerapat_ted_chaiwachirasak||[]).push([[684,136],{7389:function(e,t,n){n.d(t,{Z:function(){return m}});var r=n(4942),a=n(7462),i=n(1002),o=n(7294),c=n(5900),l=n.n(c),s=n(5071),u=n(2525),d=function(e,t){var n={};for(var r in e)Object.prototype.hasOwnProperty.call(e,r)&&t.indexOf(r)<0&&(n[r]=e[r]);if(null!=e&&"function"==typeof Object.getOwnPropertySymbols){var a=0;for(r=Object.getOwnPropertySymbols(e);a<r.length;a++)t.indexOf(r[a])<0&&Object.prototype.propertyIsEnumerable.call(e,r[a])&&(n[r[a]]=e[r[a]])}return n};var f=["xs","sm","md","lg","xl","xxl"],p=o.forwardRef((function(e,t){var n,c=o.useContext(u.E_),p=c.getPrefixCls,m=c.direction,h=o.useContext(s.Z),v=h.gutter,g=h.wrap,Z=h.supportFlexGap,y=e.prefixCls,b=e.span,x=e.order,w=e.offset,S=e.push,O=e.pull,E=e.className,z=e.children,C=e.flex,j=e.style,P=d(e,["prefixCls","span","order","offset","push","pull","className","children","flex","style"]),k=p("col",y),N={};f.forEach((function(t){var n,o={},c=e[t];"number"==typeof c?o.span=c:"object"===(0,i.Z)(c)&&(o=c||{}),delete P[t],N=(0,a.Z)((0,a.Z)({},N),(n={},(0,r.Z)(n,"".concat(k,"-").concat(t,"-").concat(o.span),void 0!==o.span),(0,r.Z)(n,"".concat(k,"-").concat(t,"-order-").concat(o.order),o.order||0===o.order),(0,r.Z)(n,"".concat(k,"-").concat(t,"-offset-").concat(o.offset),o.offset||0===o.offset),(0,r.Z)(n,"".concat(k,"-").concat(t,"-push-").concat(o.push),o.push||0===o.push),(0,r.Z)(n,"".concat(k,"-").concat(t,"-pull-").concat(o.pull),o.pull||0===o.pull),(0,r.Z)(n,"".concat(k,"-rtl"),"rtl"===m),n))}));var A=l()(k,(n={},(0,r.Z)(n,"".concat(k,"-").concat(b),void 0!==b),(0,r.Z)(n,"".concat(k,"-order-").concat(x),x),(0,r.Z)(n,"".concat(k,"-offset-").concat(w),w),(0,r.Z)(n,"".concat(k,"-push-").concat(S),S),(0,r.Z)(n,"".concat(k,"-pull-").concat(O),O),n),E,N),I={};if(v&&v[0]>0){var R=v[0]/2;I.paddingLeft=R,I.paddingRight=R}if(v&&v[1]>0&&!Z){var M=v[1]/2;I.paddingTop=M,I.paddingBottom=M}return C&&(I.flex=function(e){return"number"==typeof e?"".concat(e," ").concat(e," auto"):/^\d+(\.\d+)?(px|em|rem|%)$/.test(e)?"0 0 ".concat(e):e}(C),!1!==g||I.minWidth||(I.minWidth=0)),o.createElement("div",(0,a.Z)({},P,{style:(0,a.Z)((0,a.Z)({},I),j),className:A,ref:t}),z)}));p.displayName="Col";var m=p},5071:function(e,t,n){var r=(0,n(7294).createContext)({});t.Z=r},3259:function(e,t,n){n.d(t,{Z:function(){return w}});var r=n(7462),a=n(4942),i=n(1002),o=n(9439),c=n(7294),l=n(5900),s=n.n(l),u=n(2525),d=n(5071),f=n(4224),p=["xxl","xl","lg","md","sm","xs"],m={xs:"(max-width: 575px)",sm:"(min-width: 576px)",md:"(min-width: 768px)",lg:"(min-width: 992px)",xl:"(min-width: 1200px)",xxl:"(min-width: 1600px)"},h=new Map,v=-1,g={},Z={matchHandlers:{},dispatch:function(e){return g=e,h.forEach((function(e){return e(g)})),h.size>=1},subscribe:function(e){return h.size||this.register(),v+=1,h.set(v,e),e(g),v},unsubscribe:function(e){h.delete(e),h.size||this.unregister()},unregister:function(){var e=this;Object.keys(m).forEach((function(t){var n=m[t],r=e.matchHandlers[n];null==r||r.mql.removeListener(null==r?void 0:r.listener)})),h.clear()},register:function(){var e=this;Object.keys(m).forEach((function(t){var n=m[t],i=function(n){var i=n.matches;e.dispatch((0,r.Z)((0,r.Z)({},g),(0,a.Z)({},t,i)))},o=window.matchMedia(n);o.addListener(i),e.matchHandlers[n]={mql:o,listener:i},i(o)}))}},y=n(9491),b=function(e,t){var n={};for(var r in e)Object.prototype.hasOwnProperty.call(e,r)&&t.indexOf(r)<0&&(n[r]=e[r]);if(null!=e&&"function"==typeof Object.getOwnPropertySymbols){var a=0;for(r=Object.getOwnPropertySymbols(e);a<r.length;a++)t.indexOf(r[a])<0&&Object.prototype.propertyIsEnumerable.call(e,r[a])&&(n[r[a]]=e[r[a]])}return n},x=((0,f.b)("top","middle","bottom","stretch"),(0,f.b)("start","end","center","space-around","space-between"),c.forwardRef((function(e,t){var n,l=e.prefixCls,f=e.justify,m=e.align,h=e.className,v=e.style,g=e.children,x=e.gutter,w=void 0===x?0:x,S=e.wrap,O=b(e,["prefixCls","justify","align","className","style","children","gutter","wrap"]),E=c.useContext(u.E_),z=E.getPrefixCls,C=E.direction,j=c.useState({xs:!0,sm:!0,md:!0,lg:!0,xl:!0,xxl:!0}),P=(0,o.Z)(j,2),k=P[0],N=P[1],A=(0,y.Z)(),I=c.useRef(w);c.useEffect((function(){var e=Z.subscribe((function(e){var t=I.current||0;(!Array.isArray(t)&&"object"===(0,i.Z)(t)||Array.isArray(t)&&("object"===(0,i.Z)(t[0])||"object"===(0,i.Z)(t[1])))&&N(e)}));return function(){return Z.unsubscribe(e)}}),[]);var R,M=z("row",l),F=(R=[0,0],(Array.isArray(w)?w:[w,0]).forEach((function(e,t){if("object"===(0,i.Z)(e))for(var n=0;n<p.length;n++){var r=p[n];if(k[r]&&void 0!==e[r]){R[t]=e[r];break}}else R[t]=e||0})),R),G=s()(M,(n={},(0,a.Z)(n,"".concat(M,"-no-wrap"),!1===S),(0,a.Z)(n,"".concat(M,"-").concat(f),f),(0,a.Z)(n,"".concat(M,"-").concat(m),m),(0,a.Z)(n,"".concat(M,"-rtl"),"rtl"===C),n),h),L={},_=F[0]>0?F[0]/-2:void 0,D=F[1]>0?F[1]/-2:void 0;if(_&&(L.marginLeft=_,L.marginRight=_),A){var W=(0,o.Z)(F,2);L.rowGap=W[1]}else D&&(L.marginTop=D,L.marginBottom=D);var B=c.useMemo((function(){return{gutter:F,wrap:S,supportFlexGap:A}}),[F,S,A]);return c.createElement(d.Z.Provider,{value:B},c.createElement("div",(0,r.Z)({},O,{className:G,style:(0,r.Z)((0,r.Z)({},L),v),ref:t}),g))})));x.displayName="Row";var w=x},7371:function(e,t,n){n.d(t,{u:function(){return m},Z:function(){return v}});var r=n(7462),a=n(4942),i=n(9439),o=n(7294),c=n(5900),l=n.n(c),s=n(1786),u=n(2525);function d(e){var t=e.className,n=e.direction,i=e.index,c=e.marginDirection,l=e.children,s=e.split,u=e.wrap,d=o.useContext(m),f=d.horizontalSize,p=d.verticalSize,h=d.latestIndex,v={};return d.supportFlexGap||("vertical"===n?i<h&&(v={marginBottom:f/(s?2:1)}):v=(0,r.Z)((0,r.Z)({},i<h&&(0,a.Z)({},c,f/(s?2:1))),u&&{paddingBottom:p})),null==l?null:o.createElement(o.Fragment,null,o.createElement("div",{className:t,style:v},l),i<h&&s&&o.createElement("span",{className:"".concat(t,"-split"),style:v},s))}var f=n(9491),p=function(e,t){var n={};for(var r in e)Object.prototype.hasOwnProperty.call(e,r)&&t.indexOf(r)<0&&(n[r]=e[r]);if(null!=e&&"function"==typeof Object.getOwnPropertySymbols){var a=0;for(r=Object.getOwnPropertySymbols(e);a<r.length;a++)t.indexOf(r[a])<0&&Object.prototype.propertyIsEnumerable.call(e,r[a])&&(n[r[a]]=e[r[a]])}return n},m=o.createContext({latestIndex:0,horizontalSize:0,verticalSize:0,supportFlexGap:!1}),h={small:8,middle:16,large:24};var v=function(e){var t,n=o.useContext(u.E_),c=n.getPrefixCls,v=n.space,g=n.direction,Z=e.size,y=void 0===Z?(null==v?void 0:v.size)||"small":Z,b=e.align,x=e.className,w=e.children,S=e.direction,O=void 0===S?"horizontal":S,E=e.prefixCls,z=e.split,C=e.style,j=e.wrap,P=void 0!==j&&j,k=p(e,["size","align","className","children","direction","prefixCls","split","style","wrap"]),N=(0,f.Z)(),A=o.useMemo((function(){return(Array.isArray(y)?y:[y,y]).map((function(e){return function(e){return"string"==typeof e?h[e]:e||0}(e)}))}),[y]),I=(0,i.Z)(A,2),R=I[0],M=I[1],F=(0,s.Z)(w,{keepEmpty:!0}),G=void 0===b&&"horizontal"===O?"center":b,L=c("space",E),_=l()(L,"".concat(L,"-").concat(O),(t={},(0,a.Z)(t,"".concat(L,"-rtl"),"rtl"===g),(0,a.Z)(t,"".concat(L,"-align-").concat(G),G),t),x),D="".concat(L,"-item"),W="rtl"===g?"marginLeft":"marginRight",B=0,T=F.map((function(e,t){return null!=e&&(B=t),o.createElement(d,{className:D,key:"".concat(D,"-").concat(t),direction:O,index:t,marginDirection:W,split:z,wrap:P},e)})),H=o.useMemo((function(){return{horizontalSize:R,verticalSize:M,latestIndex:B,supportFlexGap:N}}),[R,M,B,N]);if(0===F.length)return null;var q={};return P&&(q.flexWrap="wrap",N||(q.marginBottom=-M)),N&&(q.columnGap=R,q.rowGap=M),o.createElement("div",(0,r.Z)({className:_,style:(0,r.Z)((0,r.Z)({},q),C)},k),o.createElement(m.Provider,{value:H},T))}},1786:function(e,t,n){n.d(t,{Z:function(){return i}});var r=n(7294),a=n(8812);function i(e){var t=arguments.length>1&&void 0!==arguments[1]?arguments[1]:{},n=[];return r.Children.forEach(e,(function(e){(null!=e||t.keepEmpty)&&(Array.isArray(e)?n=n.concat(i(e)):(0,a.isFragment)(e)&&e.props?n=n.concat(i(e.props.children,t)):n.push(e))})),n}},801:function(e,t,n){n.r(t),n.d(t,{Section:function(){return d},Section2:function(){return f},Section3:function(){return m},FadeInDiv:function(){return p}});var r,a,i=n(1880),o=(n(7294),n(3259)),c=n(7389),l=n(3583),s=n(2265),u=n(2036),d=l.ZP.div(r||(r=(0,i.Z)(["\n    background-color: #1C1D21;\n    height: 100%;\n    width: 100%;\n\n    height: 80vh;\n    width: 100vw;\n\n    /* Remove any browser-default margins. */\n    margin: 0;\n    padding: 0;\n"]))),f=l.ZP.div(a||(a=(0,i.Z)(["\n    background-color: #1C1D21;\n    height: 100%;\n    width: 100%;\n\n    /* Remove any browser-default margins. */\n    margin: 0;\n    padding: 0;\n    padding-bottom: 20px;\n"]))),p=function(e){return(0,u.tZ)(s.Mi,{left:!0},e.children)},m=function(e){return(0,u.tZ)(f,null,(0,u.tZ)("div",{style:{paddingTop:"80px"}},(0,u.tZ)(o.Z,null,(0,u.tZ)(c.Z,{span:4,style:{fontSize:"1.6em",color:"#8EA4D2",fontWeight:"bold"},offset:6},(0,u.tZ)(p,{direction:"left"},e.title)),(0,u.tZ)(c.Z,{span:8,style:{fontSize:"1.2em",color:"#ddd"}},e.children))))}},1941:function(e,t,n){n.r(t),n.d(t,{Title:function(){return l},Subtitle:function(){return s},SubSubtitle:function(){return u}});var r,a,i,o=n(1880),c=n(3583),l=c.ZP.h1(r||(r=(0,o.Z)(["\n  font-size: 1.5em;\n  color: #eeeeee;\n"]))),s=c.ZP.h3(a||(a=(0,o.Z)(["\n    font-size: 1.2em;\n    color: #ddd;\n    font-weight: bold;\n"]))),u=c.ZP.h4(i||(i=(0,o.Z)(["\n    color: #888;\n"])))},5992:function(e,t,n){n.r(t);n(7294);var r=n(7371),a=n(801),i=n(1941),o=n(2265),c=n(2036),l={color:"#ddd",fontWeight:"bold"},s=function(){return(0,c.tZ)(r.Z,{direction:"vertical",size:20},(0,c.tZ)(o.Mi,{right:!0},(0,c.tZ)(i.SubSubtitle,{style:l},"Natural Language Processing"),(0,c.tZ)("div",null,"In this modern era when users generate unprecedented volumes of online text data, never has the field of natural language processing (NLP) and linguistics been so appealing. As written records exist in every field, whether it be healthcare, banking, government issues, or even in social media, the ability to make sense of textual data can be utilized to resolve a wide range of problems. ")),(0,c.tZ)(o.Mi,{right:!0},(0,c.tZ)(i.SubSubtitle,{style:l},"Recommendation System"),(0,c.tZ)("div",null,"How to build a system that understands what users want through their behavior interests me. I also find nuances in recommender systems between difference businesses intriguing to explore (e.g., entertainment services may care more about serendipity and novelty whereas e-commerces also require to care about the item’s margin, stock availability, and relevance.)")),(0,c.tZ)(o.Mi,{right:!0},(0,c.tZ)(i.SubSubtitle,{style:l},"Computational Social Science"),(0,c.tZ)("div",null,"With social interactions moving to digital realm, the availability of data provides an opportunity to study society and human behavior through digital data. I’m interested in utilizing these online data, especially in social media, to analyze and understand complex online social phenomenon. Even in Thailand, many social movements were originated from the online realm.")))};t.default=function(){return(0,c.tZ)(a.Section3,{title:"Research Interests"},(0,c.tZ)(s,null))}}}]);
//# sourceMappingURL=component---src-pages-homepage-research-js-eb894c8fb590219400f4.js.map