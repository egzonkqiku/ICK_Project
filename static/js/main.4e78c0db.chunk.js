(this.webpackJsonpus=this.webpackJsonpus||[]).push([[0],{68:function(t,e,c){},69:function(t,e,c){},96:function(t,e,c){"use strict";c.r(e);var a=c(2),n=c(0),r=c.n(n),i=c(18),s=c.n(i),l=(c(68),c(69),c(6)),o=c(21),j=c(117),u=c(124),d=c(119),b=c(121),O=c(120),h=c(123),x=c(122),p=c(49),f=c.n(p),v=c(50),m=c.n(v);var g=Object(j.a)({root:{maxWidth:800}});var y=function(t){var e=t.isResult,c=g(),n=Object(o.b)();return Object(a.jsxs)(u.a,{className:c.root,children:[Object(a.jsx)(d.a,{children:Object(a.jsx)(O.a,{component:"img",alt:t.AllData.alt_description,height:"450",image:t.AllData.urls.regular})}),Object(a.jsxs)(b.a,{children:[Object(a.jsx)(x.a,{gutterBottom:!0,variant:"h5",component:"h2",children:t.AllData.user.name}),Object(a.jsx)("div",{children:e?Object(a.jsxs)(h.a,{size:"small",color:"primary",onClick:function(){n(function(t){return{type:"SAVE_FAVOURITE",payload:t}}(t.AllData))},children:[Object(a.jsx)(f.a,{}),"Favourite"]}):Object(a.jsxs)(h.a,{size:"small",color:"secondary",onClick:function(){n({type:"DELETE_FAVOURITE",payload:t.AllData.id})},children:[Object(a.jsx)(m.a,{}),"Delete"]})})]})]})};var E=function(){var t=Object(o.c)((function(t){return t.favourite}));return Object(a.jsx)("div",{style:{padding:55,marginLeft:275},children:t.map((function(t){return Object(a.jsx)(y,{AllData:t},t.id)}))})},A=c(34),F=c.n(A),k=c(51),D=c(56),N=c(52),T=c.n(N);var S=function(t){var e="https://api.unsplash.com/topics/".concat(t.topic,"/photos?"),c=Object(n.useState)([]),r=Object(D.a)(c,2),i=r[0],s=r[1],l=function(){var t=Object(k.a)(F.a.mark((function t(){var c;return F.a.wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return t.next=2,T.a.get("".concat(e).concat("client_id=iOZ2zhtozMMLB36JB8hXBzemEP3k6NwMykeBILmT24g"));case 2:c=t.sent,s(c.data);case 4:case"end":return t.stop()}}),t)})));return function(){return t.apply(this,arguments)}}();return Object(n.useEffect)((function(){l()}),[t.topic]),Object(a.jsxs)("div",{children:[Object(a.jsx)("h1",{children:t.category}),Object(a.jsx)("div",{style:{padding:55,marginLeft:275},children:i.map((function(t){return Object(a.jsx)(y,{isResult:!0,AllData:t},t.id)}))})]})};var B=function(){return Object(a.jsx)(a.Fragment,{children:Object(a.jsxs)(l.c,{children:[Object(a.jsx)(l.a,{exact:!0,path:"/nature",children:Object(a.jsx)(S,{topic:"nature",category:"Nature"})}),Object(a.jsx)(l.a,{exact:!0,path:"/travel",children:Object(a.jsx)(S,{topic:"travel",category:"Travel"})}),Object(a.jsx)(l.a,{exact:!0,path:"/film",children:Object(a.jsx)(S,{topic:"film",category:"Film"})}),Object(a.jsx)(l.a,{exact:!0,path:"/favourites",children:Object(a.jsx)(E,{})})]})})},L=c(19);var w=function(){return Object(a.jsxs)("div",{className:"App",children:[Object(a.jsxs)("div",{className:"NavBarStyle",children:[Object(a.jsx)(L.b,{className:"linkStyle",to:"/nature",children:"Nature"}),Object(a.jsx)(L.b,{className:"linkStyle",to:"/travel",children:"Travel"}),Object(a.jsx)(L.b,{className:"linkStyle",to:"/film",children:"Film"}),Object(a.jsx)(L.b,{className:"linkStyle",to:"/favourites",children:"Favourites"})]}),Object(a.jsx)(B,{})]})},I=c(53),R=c(16),V=c(54),_=c(37),z=c(57),C=[],M=Object(R.c)({favourite:function(){var t=arguments.length>0&&void 0!==arguments[0]?arguments[0]:C,e=arguments.length>1?arguments[1]:void 0;switch(e.type){case"SAVE_FAVOURITE":var c=t.find((function(t){return t.id===e.payload.id}));return c?t:[].concat(Object(z.a)(t),[e.payload]);case"DELETE_FAVOURITE":var a=t.filter((function(t){return t.id!==e.payload}));return a;default:return t}}}),U=c(55),J={key:"root",storage:c.n(U).a,whitelist:["favourite"]},P=Object(_.a)(J,M),W=Object(R.d)(P,Object(R.a)(V.a)),X=Object(_.b)(W),Z=function(t){t&&t instanceof Function&&c.e(3).then(c.bind(null,126)).then((function(e){var c=e.getCLS,a=e.getFID,n=e.getFCP,r=e.getLCP,i=e.getTTFB;c(t),a(t),n(t),r(t),i(t)}))};s.a.render(Object(a.jsx)(r.a.StrictMode,{children:Object(a.jsx)(L.a,{children:Object(a.jsx)(o.a,{store:W,children:Object(a.jsx)(I.a,{persistor:X,children:Object(a.jsx)(w,{})})})})}),document.getElementById("root")),Z()}},[[96,1,2]]]);
//# sourceMappingURL=main.4e78c0db.chunk.js.map