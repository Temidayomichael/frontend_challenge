(this.webpackJsonpfrontend_challenge=this.webpackJsonpfrontend_challenge||[]).push([[0],{111:function(e,t,c){},144:function(e,t,c){"use strict";c.r(t);var s=c(1),n=c.n(s),a=c(89),r=c.n(a),i=(c(111),c(70)),o=c.n(i),l=c(90),j=c(4),x=c(173),h=c(161),p=c(162),d=c(91),b=c.n(d),O=c(160),u=c(176),m=c(92),f=c.n(m),g=Object(s.createContext)(null),y=c(177),S=c(159),w=c(94),z=c(163),C=c(164),v=c(3);function D(){var e=Object(s.useContext)(g).schoolData;return Object(v.jsx)(v.Fragment,{children:Object(v.jsxs)(S.a,{as:O.a,py:"20",minH:"100vh",mt:"50px",maxW:"6xl",children:[Object(v.jsxs)(O.a,{display:["inherit","inherit","flex"],w:"100%",children:[Object(v.jsx)(h.a,{w:["100%","100%","50%"],children:Object(v.jsx)(y.a,{borderRadius:"full",boxSize:["250px","350px"],objectFit:"cover",src:e.scholarship.program.photos[0].src})}),Object(v.jsxs)(O.a,{w:["100%","100%","50%"],my:"5",children:[Object(v.jsxs)(p.a,{color:"#685DC5",fontSize:["35px","48px"],children:["About the ",Object(v.jsx)("br",{})," apprenticeship"]}),Object(v.jsxs)(p.a,{fontSize:["18px","22px"],lineHeight:"32px",children:[" ",e.scholarship.about[0].data]})]})]}),Object(v.jsxs)(w.a,{templateRows:"repeat(3, 1fr)",templateColumns:"repeat(6, 1fr)",gap:6,mt:["100px","200px"],display:["block","block","inline-grid"],children:[Object(v.jsxs)(w.b,{p:"40px",rowSpan:3,colSpan:2,shadow:"base",children:[Object(v.jsxs)(O.a,{h:"60%",children:[Object(v.jsx)(p.a,{color:"#685DC5",fontSize:"16px",children:"Scholarship value"}),Object(v.jsxs)(p.a,{fontSize:"48px",children:["\u20ac",e.scholarship.total_value]})]}),Object(v.jsx)(z.a,{my:"7",borderColor:"gray.300"}),Object(v.jsx)(O.a,{children:Object(v.jsxs)(C.a,{columns:2,spacing:15,children:[Object(v.jsxs)(O.a,{children:[Object(v.jsx)(p.a,{d:"flex",color:"#685DC5",fontSize:"16px",children:"Tuition covered"}),Object(v.jsxs)(p.a,{children:[" \u20ac",e.scholarship.tuition]})]}),Object(v.jsxs)(O.a,{children:[Object(v.jsx)(p.a,{d:"flex",color:"#685DC5",fontSize:"16px",children:"Remaining"}),Object(v.jsxs)(p.a,{children:[" \u20ac",e.scholarship.remaining]})]}),Object(v.jsxs)(O.a,{children:[Object(v.jsx)(p.a,{color:"#685DC5",fontSize:"16px",children:"Living stipend"}),Object(v.jsxs)(p.a,{d:"flex",fontSize:"16px",children:["\u20ac",e.scholarship.stipend_per_year,"(",Object(v.jsxs)(p.a,{fontSize:"16px",children:["\u20ac",e.scholarship.stipend_per_month,"/month"]}),")"]})]})]})})]}),Object(v.jsxs)(w.b,{p:"40px",rowSpan:2,colSpan:2,shadow:"base",children:[Object(v.jsxs)(O.a,{children:[Object(v.jsx)(p.a,{color:"#685DC5",fontSize:"16px",children:"Study commitment"}),Object(v.jsxs)(p.a,{fontSize:"26px",children:[e.scholarship.study_commitment," hours / day"]})]}),Object(v.jsx)(z.a,{my:"4",w:"30px",borderColor:"gray.300"}),Object(v.jsxs)(p.a,{children:[" ",e.scholarship.study_commitment_text]})]}),Object(v.jsxs)(w.b,{p:"40px",rowSpan:2,colSpan:2,shadow:"base",children:[Object(v.jsxs)(O.a,{children:[Object(v.jsx)(p.a,{color:"#685DC5",fontSize:"16px",children:"Internship commitment"}),Object(v.jsxs)(p.a,{fontSize:"26px",children:[e.scholarship.internship_commitment," hours / day"]})]}),Object(v.jsx)(z.a,{my:"4",w:"30px",borderColor:"gray.300"}),Object(v.jsxs)(p.a,{children:[" ",e.scholarship.internship_commitment_text]})]}),Object(v.jsxs)(w.b,{colSpan:4,shadow:"base",p:"40px",children:[Object(v.jsx)(p.a,{color:"#685DC5",fontSize:"16px",children:"A full-time contract"}),Object(v.jsxs)(p.a,{fontSize:"26px",children:[e.scholarship.duration," year(s)/Full-Time"]}),Object(v.jsx)(z.a,{my:"1",w:"25px",borderColor:"gray.300"}),Object(v.jsxs)(p.a,{children:[" You\u2019ll be guaranteed a ",e.scholarship.duration," year(s) contract with ",e.scholarship.company.name," upon graduation."]})]})]})]})})}var _=c(165),F=c(174),A=c(170),P=c(95),k=c(96);function I(){var e=Object(s.useContext)(g).schoolData,t=e.scholarship.faqs.items,c=t.filter((function(e,c){return t.findIndex((function(t){return t.type===e.type}))===c})),n=Object(s.useState)(c[0].type),a=Object(j.a)(n,2),r=a[0],i=a[1];return console.log(c),Object(v.jsxs)(S.a,{as:O.a,mt:["30px","50px"],minH:"70vh",maxW:"6xl",children:[Object(v.jsxs)(_.a,{display:["block","flex"],justifyContent:"space-between",children:[Object(v.jsxs)(p.a,{color:"#685DC5",fontSize:["35px","35px","48px"],letterSpacing:"-0.6px",children:["Frequently asked ",Object(v.jsx)("br",{})," questions"]}),Object(v.jsxs)(_.a,{display:["block","block","flex"],children:[Object(v.jsx)(p.a,{color:"#6A6A6A",mr:"3",fontSize:["16px","22px"],children:"Filter by:"}),Object(v.jsx)(O.a,{children:Object(v.jsx)(F.a,{borderRadius:"full",onChange:function(e){i(e.target.value),console.log(e)},color:"#685DC5",children:c.map((function(e,t){return Object(v.jsx)(v.Fragment,{children:Object(v.jsx)("option",{value:e.type,children:e.type},t)})}))})})]})]}),Object(v.jsx)(A.a,{mt:"10",allowMultiple:!0,children:e.scholarship.faqs.items.filter((function(e){return e.type===r})).map((function(e){return Object(v.jsx)(A.c,{children:function(t){var c=t.isExpanded;return Object(v.jsxs)(v.Fragment,{children:[Object(v.jsx)("h2",{children:Object(v.jsxs)(A.b,{allowToggle:!0,children:[Object(v.jsx)(O.a,{flex:"1",display:["none","none","inherit"],size:"22px",color:"#685DC5",textAlign:"left",children:e.type}),Object(v.jsx)(O.a,{flex:"2",textAlign:"left",children:e.question}),c?Object(v.jsx)(P.a,{color:"#685dc5",fontSize:"38px"}):Object(v.jsx)(k.a,{color:"#685dc5",fontSize:"38px"})]})}),Object(v.jsx)(A.d,{py:5,children:e.answer.map((function(e){return Object(v.jsx)(p.a,{children:e.data})}))})]})}})}))})]})}var H=c(171),L=c(168),R=c(97),W=c(172),B=c(169);c(141);function T(){var e=Object(s.useContext)(g).schoolData;return H.a.use([L.a]),Object(v.jsx)(v.Fragment,{children:Object(v.jsxs)(O.a,{minH:"50vh",mt:"100px",children:[Object(v.jsx)(y.a,{pos:"absolute",bottom:"55em",left:"50%",htmlWidth:"700px",zIndex:"-50",transform:"translateX(-50%)",src:"./img/Pattern.svg"}),Object(v.jsx)(W.a,{zIndex:"1",spaceBetween:50,slidesPerView:2.5,centeredSlides:!0,onSlideChange:function(){return console.log("slide change")},onSwiper:function(e){return console.log(e)},className:"mySwiper",navigation:!0,loop:!0,breakpoints:{"@0.00":{slidesPerView:1,spaceBetween:10},"@0.75":{slidesPerView:2.5,spaceBetween:20},"@1.00":{slidesPerView:3.5,spaceBetween:40},"@1.50":{slidesPerView:3.5,spaceBetween:50}},children:e.scholarship.instructors.map((function(e){return Object(v.jsx)(B.a,{style:{width:"8000px"},children:Object(v.jsxs)(O.a,{border:"1px",borderColor:"gray.200",shadow:"base",children:[Object(v.jsxs)(_.a,{p:"10",justifyContent:"space-between",bg:"white",h:"40",children:[Object(v.jsx)(h.a,{children:Object(v.jsxs)(v.Fragment,{children:[Object(v.jsx)(y.a,{borderRadius:"full",boxSize:"100px",src:e.small_picture.src,alt:e.name}),Object(v.jsxs)(O.a,{children:[Object(v.jsx)(p.a,{ml:"5",children:e.name}),Object(v.jsx)(p.a,{ml:"5",children:e.category})]})]})}),Object(v.jsx)(h.a,{children:Object(v.jsx)(R.a,{size:"30px"})})]}),Object(v.jsx)(O.a,{bg:"gray.50",color:"gray.500",h:"60",p:20,children:Object(v.jsx)(p.a,{fontSize:"22px",children:e.current_position})})]})})}))})]})})}var q=c(10),E=c(175),M=c(98);function V(e){var t=e.start_date,c=e.end_date,n=Object(s.useContext)(g).schoolData;return console.log(n.scholarship),Object(v.jsx)(S.a,{maxW:"6xl",children:Object(v.jsxs)(O.a,{mt:"10%",children:[Object(v.jsxs)(C.a,{minChildWidth:"340px",spacingX:"40px",spacingY:"20px",children:[Object(v.jsxs)(O.a,{bg:"white",children:[Object(v.jsx)(p.a,{fontSize:{base:"35px",md:"40px",lg:"48px"},color:"#685DC5",width:{base:"292px",md:"440px",lg:"440px"},lineHeight:{base:"40px",md:"40px",lg:"56px"},letterSpacing:"-0.6px",fontWeight:"500",children:n.scholarship.name}),Object(v.jsx)(y.a,{pos:"absolute",top:{base:"50px",md:"100px",lg:"100px"},left:{base:"160px",md:"220px",lg:"290px",xl:"440px"},boxSize:{base:"133px",lg:"206px"},src:"./img/IntDesign.svg"})]}),Object(v.jsxs)(_.a,{flexDirection:["column-reverse","colomn-reverse","inherit"],height:"80px",children:[Object(v.jsx)(y.a,{src:"./img/zeptolab.svg",boxSize:["62px","82px"]}),Object(v.jsx)(O.a,{ml:["0","10px"],children:Object(v.jsxs)(p.a,{fontSize:{base:"14px",md:"18px",lg:"18px",xl:"18px"},display:["flex","block"],color:"gray.500",children:["Powered by:",Object(v.jsx)(p.a,{color:"black",children:n.scholarship.company.name})]})})]})]}),Object(v.jsxs)(C.a,{minChildWidth:"340px",spacingX:"40px",spacingY:"20px",flexDirection:["column-reverse","inherit"],display:["flex","flex","block","flex"],mt:"10",children:[Object(v.jsxs)(u.b,{spacing:5,mt:"6",w:"100%",children:[Object(v.jsx)(p.a,{color:"#535353",fontSize:["18px","22px"],children:n.scholarship.program.about}),Object(v.jsx)(p.a,{color:"gray.500",fontSize:["18px","22px"],children:n.og_meta.desc}),Object(v.jsxs)(p.a,{fontSize:["18px","18px","22px"],d:"flex",children:["Position: ",Object(v.jsxs)(p.a,{ml:"3",color:"gray.500",children:[" ",n.scholarship.position?n.scholarship.position:n.scholarship.program.name]})]}),Object(v.jsx)(E.a,{py:"5",w:"157px",as:h.a,color:"white",bg:"#685DC5",borderRadius:"full",size:["xs","sm"],fontSize:"18px",_hover:{bg:"#887bf7"},_active:Object(q.a)({bg:"#dddfe2",transform:"scale(0.98)",borderColor:"#bec3c9"},"bg","#887bf7"),cursor:"pointer",children:"Apply Now"})]}),Object(v.jsxs)(O.a,{w:"100%",children:[Object(v.jsxs)(O.a,{boxShadow:"base",p:"10",children:[Object(v.jsx)(p.a,{color:"#685DC5",fontSize:"16px",children:"Application closes in"}),Object(v.jsx)(p.a,{fontSize:["16px","27px"],d:"flex",justifyContent:"space-between",children:Object(v.jsx)(M.a,{date:n.scholarship.application_end_date,children:Object(v.jsx)(p.a,{fontSize:"38px",children:"00:00:00:00"})})})]}),Object(v.jsxs)(C.a,{columns:2,boxShadow:"base",p:"10",mt:"10",spacing:"40px",bg:"white",children:[Object(v.jsxs)(O.a,{children:[Object(v.jsxs)(p.a,{color:"#685DC5",fontSize:"16px",children:["Location",Object(v.jsx)(p.a,{color:"gray.500",children:n.scholarship.location.name})]}),Object(v.jsxs)(p.a,{color:"#685DC5",fontSize:"16px",mt:"6",children:["Start date",Object(v.jsx)(p.a,{color:"gray.500",children:t.toLocaleDateString("default",{day:"numeric",month:"long",year:"numeric"})})]})]}),Object(v.jsxs)(O.a,{children:[Object(v.jsxs)(p.a,{color:"#685DC5",fontSize:"16px",children:["Duration",Object(v.jsxs)(p.a,{color:"gray.500",children:[n.scholarship.duration," year(s)",Object(v.jsx)("br",{})," Full-Time"]})]}),Object(v.jsxs)(p.a,{color:"#685DC5",fontSize:"16px",children:["End date",Object(v.jsx)(p.a,{color:"gray.500",children:c.toLocaleDateString("default",{day:"numeric",month:"long",year:"numeric"})})]})]})]}),Object(v.jsx)(y.a,{pos:"absolute",display:["none","none","none","inherit"],right:"0",top:"490",zIndex:"-50",src:"./img/Pattern.svg"})]})]})]})})}function N(){var e=Object(s.useContext)(g).schoolData,t=new Date(e.scholarship.scholarship_start_date),c=new Date(e.scholarship.application_end_date);return Object(v.jsxs)(O.a,{children:[Object(v.jsx)(V,{start_date:t,end_date:c}),Object(v.jsx)(D,{}),Object(v.jsx)(T,{}),Object(v.jsx)(I,{}),Object(v.jsx)(f.a,{mode:"bottom",children:Object(v.jsxs)(u.a,{display:["none","none","flex"],w:"100%",py:"3",bg:"white",justifyContent:"space-evenly",children:[Object(v.jsx)(O.a,{children:Object(v.jsxs)(p.a,{fontSize:"16px",children:[e.scholarship.company.name,Object(v.jsx)(p.a,{color:"gray.500",children:e.scholarship.name})]})}),Object(v.jsx)(O.a,{children:Object(v.jsxs)(p.a,{fontSize:"16px",children:["Location",Object(v.jsx)(p.a,{color:"gray.500",children:e.scholarship.location.name})]})}),Object(v.jsx)(O.a,{children:Object(v.jsxs)(p.a,{fontSize:"16px",children:["Duration",Object(v.jsxs)(p.a,{color:"gray.500",children:[e.scholarship.duration," year(s) Full-Time"]})]})}),Object(v.jsx)(O.a,{children:Object(v.jsxs)(p.a,{fontSize:"16px",children:["Start date",Object(v.jsx)(p.a,{color:"gray.500",children:t.toLocaleDateString("default",{day:"numeric",month:"long",year:"numeric"})})]})}),Object(v.jsx)(O.a,{children:Object(v.jsxs)(p.a,{fontSize:"16px",children:["End date",Object(v.jsx)(p.a,{color:"gray.500",children:c.toLocaleDateString("default",{day:"numeric",month:"long",year:"numeric"})})]})})]})})]})}function X(){var e=Object(s.useContext)(g).schoolData;return Object(v.jsx)(v.Fragment,{children:Object(v.jsxs)(_.a,{px:"10",fontFamily:"ApercuPro-Medium",textTransform:"uppercase",color:"white",alignItems:"center",justifyContent:"space-between",w:"100%",h:"60px",bg:"#685DC5",children:[Object(v.jsxs)(_.a,{children:[Object(v.jsx)(p.a,{fontFamily:"ApercuPro-Medium",letterSpacing:"widest",fontSize:"19px",children:"Harbour space"}),Object(v.jsxs)(p.a,{fontSize:"10px",ml:"2",pt:"1",fontFamily:"ApercuPro-Regular",children:["/",e.scholarship.program.name]})]}),Object(v.jsx)(y.a,{src:"./img/menu.svg"}),Object(v.jsx)(E.a,{bg:"#4fa16c",rounded:"full",boxSize:"100px",pos:"absolute",top:"3",left:"85%",alignItems:"center",display:["none","inherit"],visibility:{base:"hidden",md:"hidden",lg:"hidden",xl:"visible"},_hover:{bg:"5cb77c"},_active:{bg:"5cb77c",transform:"scale(0.98)",borderColor:"#5cb77c"},children:Object(v.jsxs)(p.a,{lineHeight:"1",textAlign:"center",children:["Apply ",Object(v.jsx)("br",{})," Now"]})})]})})}function Y(){var e=Object(s.useState)(0),t=Object(j.a)(e,2),c=t[0],n=t[1];return Object(s.useEffect)((function(){function e(){return(e=Object(l.a)(o.a.mark((function e(){return o.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,b.a.get("https://stage.harbour.space/api/v1/scholarship_pages/data-science-apprenticeship-zeptolab").then((function(e){n(e.data),console.log(e.data)}));case 2:case"end":return e.stop()}}),e)})))).apply(this,arguments)}!function(){e.apply(this,arguments)}()}),[]),c?Object(v.jsx)(g.Provider,{value:{schoolData:c},children:Object(v.jsxs)(x.a,{children:[Object(v.jsx)(X,{}),Object(v.jsx)(N,{})]})}):Object(v.jsx)(h.a,{h:"100vh",children:Object(v.jsx)(p.a,{fontFamily:"ApercuPro-Medium",fontSize:["10px","28px"],letterSpacing:"widest",color:"#685DC5",children:"Harbour.space"})})}r.a.render(Object(v.jsx)(n.a.StrictMode,{children:Object(v.jsx)(Y,{})}),document.getElementById("root"))}},[[144,1,2]]]);
//# sourceMappingURL=main.8b63006c.chunk.js.map