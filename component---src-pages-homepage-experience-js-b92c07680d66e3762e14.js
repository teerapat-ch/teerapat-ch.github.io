"use strict";(self.webpackChunkteerapat_ted_chaiwachirasak=self.webpackChunkteerapat_ted_chaiwachirasak||[]).push([[577,136,122,563],{7389:function(e,t,n){n.d(t,{Z:function(){return f}});var a=n(4942),r=n(7462),o=n(1002),i=n(7294),c=n(5900),l=n.n(c),s=n(5071),d=n(2525),m=function(e,t){var n={};for(var a in e)Object.prototype.hasOwnProperty.call(e,a)&&t.indexOf(a)<0&&(n[a]=e[a]);if(null!=e&&"function"==typeof Object.getOwnPropertySymbols){var r=0;for(a=Object.getOwnPropertySymbols(e);r<a.length;r++)t.indexOf(a[r])<0&&Object.prototype.propertyIsEnumerable.call(e,a[r])&&(n[a[r]]=e[a[r]])}return n};var u=["xs","sm","md","lg","xl","xxl"],p=i.forwardRef((function(e,t){var n,c=i.useContext(d.E_),p=c.getPrefixCls,f=c.direction,h=i.useContext(s.Z),g=h.gutter,v=h.wrap,Z=h.supportFlexGap,y=e.prefixCls,b=e.span,x=e.order,w=e.offset,D=e.push,O=e.pull,E=e.className,S=e.children,C=e.flex,k=e.style,P=m(e,["prefixCls","span","order","offset","push","pull","className","children","flex","style"]),j=p("col",y),N={};u.forEach((function(t){var n,i={},c=e[t];"number"==typeof c?i.span=c:"object"===(0,o.Z)(c)&&(i=c||{}),delete P[t],N=(0,r.Z)((0,r.Z)({},N),(n={},(0,a.Z)(n,"".concat(j,"-").concat(t,"-").concat(i.span),void 0!==i.span),(0,a.Z)(n,"".concat(j,"-").concat(t,"-order-").concat(i.order),i.order||0===i.order),(0,a.Z)(n,"".concat(j,"-").concat(t,"-offset-").concat(i.offset),i.offset||0===i.offset),(0,a.Z)(n,"".concat(j,"-").concat(t,"-push-").concat(i.push),i.push||0===i.push),(0,a.Z)(n,"".concat(j,"-").concat(t,"-pull-").concat(i.pull),i.pull||0===i.pull),(0,a.Z)(n,"".concat(j,"-rtl"),"rtl"===f),n))}));var T=l()(j,(n={},(0,a.Z)(n,"".concat(j,"-").concat(b),void 0!==b),(0,a.Z)(n,"".concat(j,"-order-").concat(x),x),(0,a.Z)(n,"".concat(j,"-offset-").concat(w),w),(0,a.Z)(n,"".concat(j,"-push-").concat(D),D),(0,a.Z)(n,"".concat(j,"-pull-").concat(O),O),n),E,N),A={};if(g&&g[0]>0){var z=g[0]/2;A.paddingLeft=z,A.paddingRight=z}if(g&&g[1]>0&&!Z){var I=g[1]/2;A.paddingTop=I,A.paddingBottom=I}return C&&(A.flex=function(e){return"number"==typeof e?"".concat(e," ").concat(e," auto"):/^\d+(\.\d+)?(px|em|rem|%)$/.test(e)?"0 0 ".concat(e):e}(C),!1!==v||A.minWidth||(A.minWidth=0)),i.createElement("div",(0,r.Z)({},P,{style:(0,r.Z)((0,r.Z)({},A),k),className:T,ref:t}),S)}));p.displayName="Col";var f=p},5071:function(e,t,n){var a=(0,n(7294).createContext)({});t.Z=a},3259:function(e,t,n){n.d(t,{Z:function(){return w}});var a=n(7462),r=n(4942),o=n(1002),i=n(9439),c=n(7294),l=n(5900),s=n.n(l),d=n(2525),m=n(5071),u=n(4224),p=["xxl","xl","lg","md","sm","xs"],f={xs:"(max-width: 575px)",sm:"(min-width: 576px)",md:"(min-width: 768px)",lg:"(min-width: 992px)",xl:"(min-width: 1200px)",xxl:"(min-width: 1600px)"},h=new Map,g=-1,v={},Z={matchHandlers:{},dispatch:function(e){return v=e,h.forEach((function(e){return e(v)})),h.size>=1},subscribe:function(e){return h.size||this.register(),g+=1,h.set(g,e),e(v),g},unsubscribe:function(e){h.delete(e),h.size||this.unregister()},unregister:function(){var e=this;Object.keys(f).forEach((function(t){var n=f[t],a=e.matchHandlers[n];null==a||a.mql.removeListener(null==a?void 0:a.listener)})),h.clear()},register:function(){var e=this;Object.keys(f).forEach((function(t){var n=f[t],o=function(n){var o=n.matches;e.dispatch((0,a.Z)((0,a.Z)({},v),(0,r.Z)({},t,o)))},i=window.matchMedia(n);i.addListener(o),e.matchHandlers[n]={mql:i,listener:o},o(i)}))}},y=n(9491),b=function(e,t){var n={};for(var a in e)Object.prototype.hasOwnProperty.call(e,a)&&t.indexOf(a)<0&&(n[a]=e[a]);if(null!=e&&"function"==typeof Object.getOwnPropertySymbols){var r=0;for(a=Object.getOwnPropertySymbols(e);r<a.length;r++)t.indexOf(a[r])<0&&Object.prototype.propertyIsEnumerable.call(e,a[r])&&(n[a[r]]=e[a[r]])}return n},x=((0,u.b)("top","middle","bottom","stretch"),(0,u.b)("start","end","center","space-around","space-between"),c.forwardRef((function(e,t){var n,l=e.prefixCls,u=e.justify,f=e.align,h=e.className,g=e.style,v=e.children,x=e.gutter,w=void 0===x?0:x,D=e.wrap,O=b(e,["prefixCls","justify","align","className","style","children","gutter","wrap"]),E=c.useContext(d.E_),S=E.getPrefixCls,C=E.direction,k=c.useState({xs:!0,sm:!0,md:!0,lg:!0,xl:!0,xxl:!0}),P=(0,i.Z)(k,2),j=P[0],N=P[1],T=(0,y.Z)(),A=c.useRef(w);c.useEffect((function(){var e=Z.subscribe((function(e){var t=A.current||0;(!Array.isArray(t)&&"object"===(0,o.Z)(t)||Array.isArray(t)&&("object"===(0,o.Z)(t[0])||"object"===(0,o.Z)(t[1])))&&N(e)}));return function(){return Z.unsubscribe(e)}}),[]);var z,I=S("row",l),M=(z=[0,0],(Array.isArray(w)?w:[w,0]).forEach((function(e,t){if("object"===(0,o.Z)(e))for(var n=0;n<p.length;n++){var a=p[n];if(j[a]&&void 0!==e[a]){z[t]=e[a];break}}else z[t]=e||0})),z),R=s()(I,(n={},(0,r.Z)(n,"".concat(I,"-no-wrap"),!1===D),(0,r.Z)(n,"".concat(I,"-").concat(u),u),(0,r.Z)(n,"".concat(I,"-").concat(f),f),(0,r.Z)(n,"".concat(I,"-rtl"),"rtl"===C),n),h),_={},L=M[0]>0?M[0]/-2:void 0,B=M[1]>0?M[1]/-2:void 0;if(L&&(_.marginLeft=L,_.marginRight=L),T){var H=(0,i.Z)(M,2);_.rowGap=H[1]}else B&&(_.marginTop=B,_.marginBottom=B);var Q=c.useMemo((function(){return{gutter:M,wrap:D,supportFlexGap:T}}),[M,D,T]);return c.createElement(m.Z.Provider,{value:Q},c.createElement("div",(0,a.Z)({},O,{className:R,style:(0,a.Z)((0,a.Z)({},_),g),ref:t}),v))})));x.displayName="Row";var w=x},4352:function(e,t,n){n.d(t,{Z:function(){return h}});var a=n(7462),r=n(4942),o=n(7294),i=n(5900),c=n.n(i),l=n(83),s=n(2525),d=function(e,t){var n={};for(var a in e)Object.prototype.hasOwnProperty.call(e,a)&&t.indexOf(a)<0&&(n[a]=e[a]);if(null!=e&&"function"==typeof Object.getOwnPropertySymbols){var r=0;for(a=Object.getOwnPropertySymbols(e);r<a.length;r++)t.indexOf(a[r])<0&&Object.prototype.propertyIsEnumerable.call(e,a[r])&&(n[a[r]]=e[a[r]])}return n},m=function(e){var t,n,i=e.prefixCls,l=e.className,m=e.color,u=void 0===m?"blue":m,p=e.dot,f=e.pending,h=void 0!==f&&f,g=(e.position,e.label),v=e.children,Z=d(e,["prefixCls","className","color","dot","pending","position","label","children"]),y=(0,o.useContext(s.E_).getPrefixCls)("timeline",i),b=c()((t={},(0,r.Z)(t,"".concat(y,"-item"),!0),(0,r.Z)(t,"".concat(y,"-item-pending"),h),t),l),x=c()((n={},(0,r.Z)(n,"".concat(y,"-item-head"),!0),(0,r.Z)(n,"".concat(y,"-item-head-custom"),!!p),(0,r.Z)(n,"".concat(y,"-item-head-").concat(u),!0),n));return o.createElement("li",(0,a.Z)({},Z,{className:b}),g&&o.createElement("div",{className:"".concat(y,"-item-label")},g),o.createElement("div",{className:"".concat(y,"-item-tail")}),o.createElement("div",{className:x,style:{borderColor:/blue|red|green|gray/.test(u||"")?void 0:u}},p),o.createElement("div",{className:"".concat(y,"-item-content")},v))},u=n(4221),p=function(e,t){var n={};for(var a in e)Object.prototype.hasOwnProperty.call(e,a)&&t.indexOf(a)<0&&(n[a]=e[a]);if(null!=e&&"function"==typeof Object.getOwnPropertySymbols){var r=0;for(a=Object.getOwnPropertySymbols(e);r<a.length;r++)t.indexOf(a[r])<0&&Object.prototype.propertyIsEnumerable.call(e,a[r])&&(n[a[r]]=e[a[r]])}return n},f=function(e){var t,n=o.useContext(s.E_),i=n.getPrefixCls,d=n.direction,f=e.prefixCls,h=e.pending,g=void 0===h?null:h,v=e.pendingDot,Z=e.children,y=e.className,b=e.reverse,x=void 0!==b&&b,w=e.mode,D=void 0===w?"":w,O=p(e,["prefixCls","pending","pendingDot","children","className","reverse","mode"]),E=i("timeline",f),S="boolean"==typeof g?null:g,C=g?o.createElement(m,{pending:!!g,dot:v||o.createElement(l.Z,null)},S):null,k=o.Children.toArray(Z);k.push(C),x&&k.reverse();var P=function(e,t){return"alternate"===D?"right"===e.props.position?"".concat(E,"-item-right"):"left"===e.props.position?"".concat(E,"-item-left"):"".concat(E,t%2==0?"-item-left":"-item-right"):"left"===D?"".concat(E,"-item-left"):"right"===D||"right"===e.props.position?"".concat(E,"-item-right"):""},j=k.filter((function(e){return!!e})),N=o.Children.count(j),T="".concat(E,"-item-last"),A=o.Children.map(j,(function(e,t){var n=t===N-2?T:"",a=t===N-1?T:"";return(0,u.Tm)(e,{className:c()([e.props.className,!x&&g?n:a,P(e,t)])})})),z=k.some((function(e){var t;return!!(null===(t=null==e?void 0:e.props)||void 0===t?void 0:t.label)})),I=c()(E,(t={},(0,r.Z)(t,"".concat(E,"-pending"),!!g),(0,r.Z)(t,"".concat(E,"-reverse"),!!x),(0,r.Z)(t,"".concat(E,"-").concat(D),!!D&&!z),(0,r.Z)(t,"".concat(E,"-label"),z),(0,r.Z)(t,"".concat(E,"-rtl"),"rtl"===d),t),y);return o.createElement("ul",(0,a.Z)({},O,{className:I}),A)};f.Item=m;var h=f},801:function(e,t,n){n.r(t),n.d(t,{Section:function(){return m},Section2:function(){return u},Section3:function(){return f},FadeInDiv:function(){return p}});var a,r,o=n(1880),i=(n(7294),n(3259)),c=n(7389),l=n(3583),s=n(2265),d=n(2036),m=l.ZP.div(a||(a=(0,o.Z)(["\n    background-color: #1C1D21;\n    height: 100%;\n    width: 100%;\n\n    height: 80vh;\n    width: 100vw;\n\n    /* Remove any browser-default margins. */\n    margin: 0;\n    padding: 0;\n"]))),u=l.ZP.div(r||(r=(0,o.Z)(["\n    background-color: #1C1D21;\n    height: 100%;\n    width: 100%;\n\n    /* Remove any browser-default margins. */\n    margin: 0;\n    padding: 0;\n    padding-bottom: 20px;\n"]))),p=function(e){return(0,d.tZ)(s.Mi,{left:!0},e.children)},f=function(e){return(0,d.tZ)(u,null,(0,d.tZ)("div",{style:{paddingTop:"80px"}},(0,d.tZ)(i.Z,null,(0,d.tZ)(c.Z,{span:4,style:{fontSize:"1.6em",color:"#8EA4D2",fontWeight:"bold"},offset:6},(0,d.tZ)(p,{direction:"left"},e.title)),(0,d.tZ)(c.Z,{span:8,style:{fontSize:"1.2em",color:"#ddd"}},e.children))))}},759:function(e,t,n){n.r(t),n.d(t,{TimelineItem:function(){return f}});n(7294);var a=n(1031),r=n(4352),o=n(7371),i=n(2265),c=n(2036),l=a.Z.Title,s=a.Z.Text,d=a.Z.Paragraph,m=["Jan","Feb","Mar","Apr","May","Jun","Jul","Sep","Oct","Nov","Dec"];function u(e){if(null==e||0===e.size)return"Present";var t=e.getMonth(),n=e.getFullYear();return m[t]+" "+n}var p={color:"#ddd"};function f(e){var t=e.title,n=e.company,a=e.details,m=e.startDate,f=e.endDate,h=n.name,g=(n.icon,n.iconWidth,(0,c.tZ)("div",null,(0,c.tZ)(i.Mi,{left:!0},(0,c.tZ)(s,{strong:!0,style:p},u(m)," -")),(0,c.tZ)(i.Mi,{left:!0},(0,c.tZ)(s,{strong:!0,style:p},u(f))),(0,c.tZ)(i.Mi,{left:!0},(0,c.tZ)(s,{style:p},"(",function(e,t){var n=t;null!=t&&0!==t.size||(n=new Date);var a=2592e6,r=Math.ceil((n-e)/7776e7),o=Math.ceil((n.setDate(1)-e.setDate(1))/a);return o<=0?r+" days":o>=12?parseInt(o/12)+" yrs "+o%12+" mos":1===o?o+" month":o+" months"}(m,f),")"))));return(0,c.tZ)(r.Z.Item,{label:g,position:"left"},(0,c.tZ)("div",{style:{align:"Left"}},(0,c.tZ)(i.Mi,{right:!0,cascade:!0},(0,c.tZ)(o.Z,{direction:"horizontal",style:{marginTop:"-30px"}},(0,c.tZ)(l,{level:5,style:p},t,", ",h)),(0,c.tZ)(d,null,(0,c.tZ)("ul",{style:p},a.slice(0,1).map((function(e){return(0,c.tZ)("li",null,e)})))))))}},2266:function(e,t,n){n.r(t);var a=[{title:"Data Scientist",company:{name:"Agoda",icon:"https://media-exp1.licdn.com/dms/image/C510BAQFlzwnDh-1n8g/company-logo_200_200/0/1564993524217?e=1630540800&v=beta&t=QhZLgxs8zmsnggvwqjNJckrgQDzDefHSNeY-xqgE-lY"},details:["Applied machine learning, deep learning, and statistical methods on user-generated data to improve the hotel ranking system and maximize the company’s number of bookings, revenues, and lifetime values.","Built Hotel embeddings Recommendation using neural networks, Ranking Diversification, Personalized Filter Recommendation, Hotel Image Selection, etc. (Scala & Python)","Explored traffic data to learn user behavior to help in business decisions (SQL + Spark).","Served Tree-based model trained in Python on production with Scala code."],startDate:new Date("2020-03-10"),endDate:new Date("2021-08-10")},{title:"Machine Learning Engineer",company:{name:"Agoda",icon:"https://media-exp1.licdn.com/dms/image/C510BAQFlzwnDh-1n8g/company-logo_200_200/0/1564993524217?e=1630540800&v=beta&t=QhZLgxs8zmsnggvwqjNJckrgQDzDefHSNeY-xqgE-lY"},details:["Implemented machine learning products from end-to-end, from preprocessing the training data using Spark, serving the trained models on production codebase written in Scala, and deploying the new features with in-house tools.","Built Hotel embeddings Recommendation using neural networks, Ranking Diversification, Personalized Filter Recommendation, Hotel Image Selection, etc. (Scala & Python)","Explored traffic data to learn user behavior to help in business decisions (SQL + Spark).","Served Tree-based model trained in Python on production with Scala code."],startDate:new Date("2018-08-10"),endDate:new Date("2020-03-10")},{title:"NLP Researcher",company:{name:"Kasikorn Business Technology Group",icon:"https://image-dev.wi.th/uploads/images/profiles/KBTG-Kasikorn"},details:["Developed a character embedding convolutional neural networks model for capturing a character-level misspelling for Thai social media chat messages of Kasikorn Bank help center with PyTorch.","Applied clustering technique on Word2vec embeddings on the chat messages to recognize spelling variations of words with the same meaning common in the unconventional language in a social media context."],startDate:new Date("2018-05-10"),endDate:new Date("2018-08-10")},{title:"Data Scientist Intern",company:{name:"DTAC",icon:"https://media-exp1.licdn.com/dms/image/C510BAQGx_Me3EkEY6A/company-logo_200_200/0/1519856321144?e=1630540800&v=beta&t=jUKeD5gsUCg5uHTTwuEJ8YyWKsrmaAloQzHSR2ruELw"},details:["Created a social listening platform for brand tracking and crisis detection for the marketing and call-center team.","Implemented the sentiment classifier on Thai social media text data using Bidirectional long short term memory (Bi-LSTM) on Word2Vec embeddings - f1-score of 0.74, 20% higher than the N-gram baseline.","Coded a website platform for call-center teams at DTAC to label the social media comment’s sentiment to combat the lack of labels problem."],startDate:new Date("2017-06-10"),endDate:new Date("2017-08-10")}];t.default=a},7705:function(e,t,n){n.r(t);n(7294);var a=n(4352),r=n(801),o=n(759),i=n(2266),c=n(2036);t.default=function(){return(0,c.tZ)(r.Section3,{title:"Experience"},(0,c.tZ)(a.Z,{mode:"left"},i.default.map((function(e){return(0,o.TimelineItem)(e)})),(0,c.tZ)(a.Z.Item,{dot:(0,c.tZ)("div",null)})))}}}]);
//# sourceMappingURL=component---src-pages-homepage-experience-js-b92c07680d66e3762e14.js.map