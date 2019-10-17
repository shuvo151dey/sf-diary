(this["webpackJsonpsf-diary"]=this["webpackJsonpsf-diary"]||[]).push([[0],{110:function(e,t,a){},135:function(e,t,a){"use strict";a.r(t);var n=a(1),r=a.n(n),l=a(23),o=a.n(l),c=(a(75),a(76),a(38)),s=a(25),i=a(6),m=a.n(i),p=a(15),u=a(20),d=a(9),h=a(10),f=a(13),g=a(12),y=a(14),b=a(11),E=a(16),v=a(30),O=a.n(v),C=new(function(){function e(){Object(d.a)(this,e),this.ctm_authenticated=!1,this.cth_authenticated=!1}return Object(h.a)(e,[{key:"login",value:function(e,t){localStorage.setItem("login_state",e),t()}},{key:"logout",value:function(e){localStorage.setItem("login_state",!1),localStorage.removeItem("id"),e()}},{key:"isAuthenticated",value:function(){return localStorage.getItem("login_state")}}]),e}()),j=function(e){return{type:"ADD_ALUMNI_DATA",payload:e}},k=function(e){return{type:"ADD_COMPANY_DATA",payload:e}},D=function(e){return{type:"ADD_CTM_DATA",payload:e}},w=function(e){return{type:"ADD_USER_DETAILS",payload:e}},A=a(64),x=a.n(A).a.create({baseURL:"https://mainapi.springfest.in"}),S=a(21),N=function(e){return Object(S.trackPromise)(x.post("sfdiary/login",JSON.stringify(e),{headers:{"Content-Type":"application/json"}}).then((function(e){return e.data})).catch((function(e){return console.log(e),null})))},_=function(e){return Object(S.trackPromise)(x.post("sfdiary/getdata",JSON.stringify(e),{headers:{"Content-Type":"application/json"}}).then((function(e){return e.data})).catch((function(e){return console.log(e),null})))},T=function(e){return Object(S.trackPromise)(x.post("sfdiary/getdetails",JSON.stringify(e),{headers:{"Content-Type":"application/json"}}).then((function(e){return e.data})).catch((function(e){return console.log(e),null})))},P=function(e){return Object(S.trackPromise)(x.post("sfdiary/addupdate",JSON.stringify(e),{headers:{"Content-Type":"application/json"}}).then((function(e){return e.data})).catch((function(e){return console.log(e),null})))},I=function(e){return Object(S.trackPromise)(x.post("sfdiary/addalumni",JSON.stringify(e),{headers:{"Content-Type":"application/json"}}).then((function(e){return e.data})).catch((function(e){return console.log(e),null})))},L=function(e){return Object(S.trackPromise)(x.post("sfdiary/addcompany",JSON.stringify(e),{headers:{"Content-Type":"application/json"}}).then((function(e){return e.data})).catch((function(e){return console.log(e),null})))},H=function(e){return Object(S.trackPromise)(x.post("sfdiary/getctms",JSON.stringify(e),{headers:{"Content-Type":"application/json"}}).then((function(e){return e.data})).catch((function(e){return console.log(e),null})))},U=function(e){return Object(S.trackPromise)(x.post("sfdiary/editdetail",JSON.stringify(e),{headers:{"Content-Type":"application/json"}}).then((function(e){return e.data})).catch((function(e){return console.log(e),null})))},F=a(31),M=a.n(F),J=(a(110),a(136)),R=a(137),B=a(138),z=a(139),Y=a(140),V=a(141),W=a(142),G=a(143);function K(e,t){var a=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),a.push.apply(a,n)}return a}function $(e){for(var t=1;t<arguments.length;t++){var a=null!=arguments[t]?arguments[t]:{};t%2?K(a,!0).forEach((function(t){Object(u.a)(e,t,a[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(a)):K(a).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(a,t))}))}return e}var q=function(e){function t(){var e,a;Object(d.a)(this,t);for(var n=arguments.length,r=new Array(n),l=0;l<n;l++)r[l]=arguments[l];return(a=Object(f.a)(this,(e=Object(g.a)(t)).call.apply(e,[this].concat(r)))).state={data:{email:"",password:""},showForm:!1},a.handleChange=function(e){a.setState({data:$({},a.state.data,Object(u.a)({},e.target.name,e.target.value))})},a.toggleForm=function(){a.setState({showForm:!a.state.showForm})},a.handleSubmit=function(){var e=Object(p.a)(m.a.mark((function e(t){var n;return m.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return t.preventDefault(),e.next=3,N(a.state.data);case 3:"ctm"===(n=e.sent).data.por||"cth"===n.data.por?(a.props.addUser(n.data),localStorage.setItem("id",n.data.id),C.login(n.data.por,(function(){a.props.history.push("/"+n.data.por)}))):alert(n.data);case 5:case"end":return e.stop()}}),e)})));return function(t){return e.apply(this,arguments)}}(),a}return Object(y.a)(t,e),Object(h.a)(t,[{key:"render",value:function(){return r.a.createElement(n.Fragment,null,r.a.createElement(O.a,{component:"div",transitionName:"TabsAnimation",className:"h-80",transitionAppear:!0,transitionAppearTimeout:0,transitionEnter:!1,transitionLeave:!1},r.a.createElement(J.a,{xs:"12"},r.a.createElement(R.a,{className:"mt-4"},r.a.createElement(J.a,{className:"col-xs-12 col-md-7 font-size-lg text-center"},r.a.createElement("img",{src:M.a,alt:"SF-logo",width:"300rem"}),r.a.createElement("h1",{className:"pe-4x"},"SF Diary")),r.a.createElement(J.a,{className:"col-xs-6 col-md-4"},r.a.createElement(B.a,{className:"main-card mb-3"},r.a.createElement(z.a,null,r.a.createElement(Y.a,{className:"text-center pe-2x"},"Login"),r.a.createElement(V.a,{onSubmit:this.handleSubmit},r.a.createElement(W.a,{type:"email",name:"email",placeholder:"Email",value:this.state.data.email,onChange:this.handleChange}),r.a.createElement("br",null),r.a.createElement(W.a,{type:"password",name:"password",placeholder:"Password",value:this.state.data.password,onChange:this.handleChange}),r.a.createElement(G.a,{color:"primary",className:"mt-3"},"Login")))))))))}}]),t}(n.Component),Q=Object(E.b)((function(e){return{}}),(function(e){return Object(b.b)({addUser:w},e)}))(q),X=a(66),Z=function(e){var t=e.component,a=Object(X.a)(e,["component"]);return r.a.createElement(s.b,Object.assign({},a,{render:function(e){return C.isAuthenticated()?r.a.createElement(t,e):r.a.createElement(s.a,{to:{pathname:"/",state:{from:e.location}}})}}))},ee=a(42),te=(a(112),a(158)),ae=a(144),ne=a(145),re=a(146),le=a(147),oe=a(148),ce=a(149),se=function(e){function t(e){var a;return Object(d.a)(this,t),(a=Object(f.a)(this,Object(g.a)(t).call(this,e))).handleChange=function(e){a.setState({value:e.target.value})},a.handleSubmit=function(){var e=Object(p.a)(m.a.mark((function e(t){var n,r,l;return m.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:if(t.preventDefault(),a.state.value){e.next=5;break}alert("Field is empty"),e.next=16;break;case 5:return n={id:a.props.id,member_id:a.state.details.member_id,update:a.state.value,type:a.props.type,n_updates:a.state.details.n_updates},e.next=8,P(n);case 8:return r=e.sent,console.log(n),e.next=12,_({id:localStorage.getItem("id"),type:a.props.type});case 12:l=e.sent,"alumni"===a.props.type?a.props.addAlumni(l.data):a.props.addCompany(l.data),alert(r.data),a.toggle();case 16:a.setState({value:""});case 17:case"end":return e.stop()}}),e)})));return function(t){return e.apply(this,arguments)}}(),a.toggle=Object(p.a)(m.a.mark((function e(){var t,n;return m.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:if(a.state.modal){e.next=6;break}return t={id:a.props.id,type:"alumni"===a.props.type||"ctmAlumni"===a.props.type?"alumni":"company"},e.next=4,T(t);case 4:n=e.sent,a.setState({details:n.data});case 6:a.setState({table:"alumni"===a.props.type||"ctmAlumni"===a.props.type?a.props.alumniTable:a.props.companyTable,modal:!a.state.modal});case 7:case"end":return e.stop()}}),e)}))),a.state={modal:!1,value:"",details:{},table:[]},a}return Object(y.a)(t,e),Object(h.a)(t,[{key:"render",value:function(){var e=this;return r.a.createElement("span",{className:"d-inline-block mb-2 mr-2"},"ctmAlumni"===this.props.type||"ctmCompany"===this.props.type?r.a.createElement(G.a,{color:"primary",onClick:this.toggle},"Details"):r.a.createElement(G.a,{color:"primary",onClick:this.toggle},"Update"),r.a.createElement(te.a,{isOpen:this.state.modal,toggle:this.toggle},"ctmAlumni"===this.props.type||"ctmCompany"===this.props.type?r.a.createElement(ae.a,{toggle:this.toggle},"Details"):r.a.createElement(ae.a,{toggle:this.toggle},"Update"),r.a.createElement(ne.a,null,r.a.createElement("table",{className:"w-100"},r.a.createElement("tbody",null,this.state.table.map((function(t){var a=Object.keys(e.state.details),n=a.splice(9,2*(e.state.details.n_updates-1)).concat(a.splice(-3,1),a.splice(-1,1));return r.a.createElement("tr",{key:t.index},r.a.createElement("td",null,t.Header),r.a.createElement("td",null,"updates"!==t.accessor?e.state.details[t.accessor]:r.a.createElement(re.a,null,n.map((function(t,a){return r.a.createElement(le.a,{className:"border-0 p-0",key:t},(a%2?"- ":"")+e.state.details[t])})))))})))),"ctmAlumni"===this.props.type||"ctmCompany"===this.props.type?"":r.a.createElement(V.a,{onSubmit:this.handleSubmit},r.a.createElement(R.a,{form:!0},r.a.createElement(J.a,{md:8},r.a.createElement(oe.a,null,r.a.createElement(W.a,{type:"text",placeholder:"Add Update",value:this.state.value,onChange:this.handleChange}))),r.a.createElement(J.a,{md:4},r.a.createElement(G.a,{className:"float-left"},"Add Update"))))),r.a.createElement(ce.a,null,r.a.createElement(G.a,{color:"link",onClick:this.toggle},"Cancel"))))}}]),t}(r.a.Component),ie=Object(E.b)((function(e){return{alumniTable:e.alumniDetailTable,companyTable:e.companyDetailTable}}),(function(e){return Object(b.b)({addAlumni:j,addCompany:k},e)}))(se),me=a(150);function pe(e,t){var a=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),a.push.apply(a,n)}return a}function ue(e){for(var t=1;t<arguments.length;t++){var a=null!=arguments[t]?arguments[t]:{};t%2?pe(a,!0).forEach((function(t){Object(u.a)(e,t,a[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(a)):pe(a).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(a,t))}))}return e}var de=function(e){function t(e){var a;return Object(d.a)(this,t),(a=Object(f.a)(this,Object(g.a)(t).call(this,e))).handleChange=function(e){a.setState({details:ue({},a.state.details,Object(u.a)({},e.target.name,e.target.value))})},a.handleSubmit=function(){var e=Object(p.a)(m.a.mark((function e(t){var n,r,l;return m.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return t.preventDefault(),n={id:a.props.data.id,member_id:a.state.details.member_id,type:a.props.type,mobile:a.state.details.mobile,email:a.state.details.email,linkedin:a.state.details.linkedin?a.state.details.linkedin:"",addr:a.state.details.addr,post:a.state.details.post?a.state.details.post:"",remarks:a.state.details.remarks},e.next=4,U(n);case 4:return r=e.sent,e.next=7,_({id:localStorage.getItem("id"),type:a.props.type});case 7:l=e.sent,"alumni"===a.props.type?a.props.addAlumni(l.data):a.props.addCompany(l.data),alert(r.data),a.toggle(),a.setState({value:""});case 12:case"end":return e.stop()}}),e)})));return function(t){return e.apply(this,arguments)}}(),a.toggle=Object(p.a)(m.a.mark((function e(){var t,n;return m.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:if(a.state.modal){e.next=8;break}return t={id:a.props.data.id,type:"alumni"===a.props.type||"ctmAlumni"===a.props.type?"alumni":"company"},e.next=4,T(t);case 4:n=e.sent,a.setState({modal:!0,details:n.data}),e.next=9;break;case 8:a.setState(a.getInitState());case 9:case"end":return e.stop()}}),e)}))),a.state=a.getInitState(),a}return Object(y.a)(t,e),Object(h.a)(t,[{key:"getInitState",value:function(){return{modal:!1,details:{company_name:"",name:"",contact_name:"",mobile:"",email:"",linkedin:"",addr:"",post:"",remarks:""}}}},{key:"render",value:function(){return r.a.createElement("span",{className:"d-inline-block mb-2 mr-2"},r.a.createElement(G.a,{onClick:this.toggle},"Edit"),r.a.createElement(te.a,{isOpen:this.state.modal,toggle:this.toggle},r.a.createElement(ae.a,{toggle:this.toggle},"Edit"),r.a.createElement(ne.a,null,r.a.createElement(V.a,{onSubmit:this.handleSubmit},r.a.createElement(oe.a,null,r.a.createElement(me.a,null,"Name"),r.a.createElement(W.a,{type:"text",disabled:!0,name:"name",value:"company"===this.props.type?this.state.details.company_name:this.state.details.name})),"company"===this.props.type?r.a.createElement(oe.a,null,r.a.createElement(me.a,null,"Contact Name"),r.a.createElement(W.a,{disabled:!0,type:"text",placeholder:"Contact Person name",name:"contact_name",value:this.state.details.contact_name})):"",r.a.createElement(oe.a,null,r.a.createElement(me.a,null,"Phone No"),r.a.createElement(W.a,{type:"number",placeholder:"Phone number",name:"mobile",value:this.state.details.mobile,onChange:this.handleChange})),r.a.createElement(oe.a,null,r.a.createElement(me.a,null,"Email"),r.a.createElement(W.a,{type:"email",placeholder:"Email",name:"email",value:this.state.details.email,onChange:this.handleChange})),"alumni"===this.props.type?r.a.createElement(oe.a,null,r.a.createElement(me.a,null,"LinkedIn"),r.a.createElement(W.a,{type:"text",placeholder:"LinkedIn link",name:"linkedin",value:this.state.details.linkedin,onChange:this.handleChange})):r.a.createElement(oe.a,null,r.a.createElement(me.a,null,"Post"),r.a.createElement(W.a,{type:"text",placeholder:"Post of Contact",name:"post",value:this.state.details.post,onChange:this.handleChange})),r.a.createElement(oe.a,null,r.a.createElement(me.a,null,"Address"),r.a.createElement(W.a,{type:"text",placeholder:"Address",name:"addr",value:this.state.details.addr,onChange:this.handleChange})),r.a.createElement(oe.a,null,r.a.createElement(me.a,null,"Remarks"),r.a.createElement(W.a,{type:"text",placeholder:"Remarks",name:"remarks",value:this.state.details.remarks,onChange:this.handleChange})),r.a.createElement(G.a,null,"Save"))),r.a.createElement(ce.a,null,r.a.createElement(G.a,{color:"link",onClick:this.toggle},"Cancel"))))}}]),t}(r.a.Component),he=Object(E.b)((function(e){return{alumniTable:e.alumniDetailTable,companyTable:e.companyDetailTable}}),(function(e){return Object(b.b)({addAlumni:j,addCompany:k},e)}))(de);function fe(e,t){var a=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),a.push.apply(a,n)}return a}function ge(e){for(var t=1;t<arguments.length;t++){var a=null!=arguments[t]?arguments[t]:{};t%2?fe(a,!0).forEach((function(t){Object(u.a)(e,t,a[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(a)):fe(a).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(a,t))}))}return e}var ye=function(e){function t(e){var a;return Object(d.a)(this,t),(a=Object(f.a)(this,Object(g.a)(t).call(this,e))).handleChange=function(e){a.setState({formData:ge({},a.state.formData,Object(u.a)({},e.target.name,e.target.value))})},a.handleSubmit=function(){var e=Object(p.a)(m.a.mark((function e(t){var n,r,l,o,c,s;return m.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:if(t.preventDefault(),a.state.formData.name||a.state.formData.mobile||a.state.formData.update){e.next=5;break}alert("Fill all fields"),e.next=27;break;case 5:if("alumni"!==a.props.type){e.next=17;break}return n={member_id:localStorage.getItem("id"),name:a.state.formData.name,mobile:a.state.formData.mobile,email:a.state.formData.email,linkedin:a.state.formData.linkedin,addr:a.state.formData.addr,remarks:a.state.formData.remarks,update:a.state.formData.update},e.next=9,I(n);case 9:return r=e.sent,e.next=12,_({id:localStorage.getItem("id"),type:a.props.type});case 12:l=e.sent,a.props.addAlumni(l.data),alert(r.data),e.next=26;break;case 17:return o={member_id:localStorage.getItem("id"),company_name:a.state.formData.name,contact_name:a.state.formData.contact_name,mobile:a.state.formData.mobile,email:a.state.formData.email,update:a.state.formData.update,post:a.state.formData.post,addr:a.state.formData.addr,remarks:a.state.formData.remarks},e.next=20,L(o);case 20:return c=e.sent,e.next=23,_({id:localStorage.getItem("id"),type:a.props.type});case 23:s=e.sent,a.props.addCompany(s.data),alert(c.data);case 26:a.toggle();case 27:a.setState(a.getInitState());case 28:case"end":return e.stop()}}),e)})));return function(t){return e.apply(this,arguments)}}(),a.toggle=function(){a.setState({modal:!a.state.modal})},a.state=a.getInitState(),a}return Object(y.a)(t,e),Object(h.a)(t,[{key:"getInitState",value:function(){return{modal:!1,formData:{name:"",contact_name:"",mobile:"",email:"",post:"",linkedin:"",addr:"",remarks:"",update:""}}}},{key:"render",value:function(){return r.a.createElement("span",{className:"d-inline-block mb-2 mr-2"},r.a.createElement(G.a,{color:"primary",onClick:this.toggle},"Add Contact"),r.a.createElement(te.a,{isOpen:this.state.modal,toggle:this.toggle,className:this.props.className},r.a.createElement(ae.a,{toggle:this.toggle},"Add ",this.props.type.charAt(0).toUpperCase()+this.props.type.slice(1)," Contact"),r.a.createElement(ne.a,null,r.a.createElement(V.a,{onSubmit:this.handleSubmit},r.a.createElement(oe.a,null,r.a.createElement(W.a,{type:"text",placeholder:"alumni"===this.props.type?"Name":"Comapny Name",name:"name",value:this.state.formData.name,onChange:this.handleChange})),"company"===this.props.type?r.a.createElement(oe.a,null,r.a.createElement(W.a,{type:"text",placeholder:"Contact Person name",name:"contact_name",value:this.state.formData.contact_name,onChange:this.handleChange})):"",r.a.createElement(oe.a,null,r.a.createElement(W.a,{type:"number",placeholder:"Phone number",name:"mobile",value:this.state.formData.mobile,onChange:this.handleChange})),r.a.createElement(oe.a,null,r.a.createElement(W.a,{type:"email",placeholder:"Email",name:"email",value:this.state.formData.email,onChange:this.handleChange})),"alumni"===this.props.type?r.a.createElement(oe.a,null,r.a.createElement(W.a,{type:"text",placeholder:"LinkedIn link",name:"linkedin",value:this.state.formData.linkedin,onChange:this.handleChange})):r.a.createElement(oe.a,null,r.a.createElement(W.a,{type:"text",placeholder:"Post of Contact",name:"post",value:this.state.formData.post,onChange:this.handleChange})),r.a.createElement(oe.a,null,r.a.createElement(W.a,{type:"text",placeholder:"Address",name:"addr",value:this.state.formData.addr,onChange:this.handleChange})),r.a.createElement(oe.a,null,r.a.createElement(W.a,{type:"text",placeholder:"First Update",name:"update",value:this.state.formData.update,onChange:this.handleChange})),r.a.createElement(oe.a,null,r.a.createElement(W.a,{type:"text",placeholder:"Remarks",name:"remarks",value:this.state.formData.remarks,onChange:this.handleChange})),r.a.createElement(G.a,null,"Add Contact"))),r.a.createElement(ce.a,null,r.a.createElement(G.a,{color:"link",onClick:this.toggle},"Cancel"))))}}]),t}(r.a.Component),be=Object(E.b)((function(e){return{}}),(function(e){return Object(b.b)({addAlumni:j,addCompany:k},e)}))(ye),Ee=a(68),ve=a.n(Ee),Oe=function(e){return Object(S.usePromiseTracker)().promiseInProgress&&r.a.createElement("div",{className:"loader t-container text-center"},r.a.createElement(ve.a,{type:"ThreeDots",color:"#2BAD60",height:100,width:100}))},Ce=function(e){function t(e){var a;return Object(d.a)(this,t),(a=Object(f.a)(this,Object(g.a)(t).call(this,e))).setCTM=function(e){a.setState({ctm:e}),a.props.changeTable("ctmAlumni",e.id)},a.state={ctm:{},tableData:[],columns_ctm:[{Header:"Name",accessor:"name",filterable:!0},{Header:"Phone Number",accessor:"mobile",filterable:!0},{Header:"Email",accessor:"email"},{filterable:!1,Cell:function(e){return r.a.createElement(G.a,{color:"primary",onClick:function(){return a.setCTM(e.original)}},"View")}}]},a}return Object(y.a)(t,e),Object(h.a)(t,[{key:"render",value:function(){var e=this,t="ctmAlumni"===this.props.type?"ctmCompany":"ctmCompany"===this.props.type?"ctmAlumni":"";return"ctm"===this.props.view?r.a.createElement(n.Fragment,null,r.a.createElement("div",{className:"w-100 mt-4 mb-4"},r.a.createElement("div",{className:"float-right"},r.a.createElement(be,{type:this.props.type})),r.a.createElement("h2",{className:"text-center"},this.props.type.charAt(0).toUpperCase()+this.props.type.slice(1)+" Contacts")),r.a.createElement("div",{className:"t-container overflow-hidden"},r.a.createElement(ee.a,{data:this.state.tableData,LoadingComponent:Oe,columns:"alumni"===this.props.type?this.state.columns_alumni:this.state.columns_company,defaultPageSize:10,sortable:!1}))):r.a.createElement(n.Fragment,null,"ctmAlumni"===this.props.type||"ctmCompany"===this.props.type?r.a.createElement("div",{className:"w-100 mt-4 mb-4"},r.a.createElement(G.a,{className:"float-right mr-4",onClick:function(){return e.props.changeTable(t,e.state.ctm.id)}},"View ",t," updates"),r.a.createElement("h2",{className:"text-center"},this.props.type.charAt(0).toUpperCase()+this.props.type.slice(1)+" Updates ("+this.state.ctm.name+")")):r.a.createElement("div",{className:"w-100 mt-4 mb-4"},"ctm"===this.props.type?"":r.a.createElement("div",{className:"float-right"},r.a.createElement(be,{type:this.props.type})),r.a.createElement("h2",{className:"text-center"},this.props.type.charAt(0).toUpperCase()+this.props.type.slice(1))),r.a.createElement("div",{className:"t-container overflow-hidden"},r.a.createElement(ee.a,{data:this.state.tableData,LoadingComponent:Oe,columns:"alumni"===this.props.type||"ctmAlumni"===this.props.type?this.state.columns_alumni:"company"===this.props.type||"ctmCompany"===this.props.type?this.state.columns_company:this.state.columns_ctm,defaultPageSize:10,sortable:!1})))}}],[{key:"getDerivedStateFromProps",value:function(e){return{tableData:"alumni"===e.type||"ctmAlumni"===e.type?e.alumni:"ctm"===e.type?e.ctm:e.company,columns_alumni:[{Header:"Name",accessor:"name",filterable:!0},{Header:"Phone Number",accessor:"mobile",filterable:!0},{Header:"Last Update",accessor:"last_update"},{Header:"Last Update Date",accessor:"updated_at"},{filterable:!1,width:80,Cell:function(t){return r.a.createElement(ie,{id:t.original.id,type:e.type})}},{filterable:!1,width:60,show:"alumni"===e.type,Cell:function(t){return r.a.createElement(he,{data:t.original,type:e.type})}}],columns_company:[{Header:"Company Name",accessor:"company_name",filterable:!0},{Header:"Contact Name",accessor:"contact_name",filterable:!0},{Header:"Phone Number",accessor:"mobile",filterable:!0},{Header:"Last Update",accessor:"last_update"},{Header:"Last Update Date",accessor:"updated_at"},{filterable:!1,width:80,Cell:function(t){return r.a.createElement(ie,{id:t.original.id,type:e.type})}},{filterable:!1,width:60,show:"company"===e.type,Cell:function(t){return r.a.createElement(he,{data:t.original,type:e.type})}}]}}}]),t}(r.a.Component),je=Object(E.b)((function(e){return{alumni:e.alumni,company:e.company,ctm:e.ctm}}))(Ce),ke=a(151),De=a(152),we=a(153),Ae=a(154),xe=a(155),Se=a(156),Ne=a(157),_e=function(e){function t(){var e,a;Object(d.a)(this,t);for(var n=arguments.length,r=new Array(n),l=0;l<n;l++)r[l]=arguments[l];return(a=Object(f.a)(this,(e=Object(g.a)(t)).call.apply(e,[this].concat(r)))).state={isOpen:!1},a.toggle=function(){a.setState({isOpen:!a.state.isOpen})},a}return Object(y.a)(t,e),Object(h.a)(t,[{key:"render",value:function(){var e=this;return r.a.createElement(n.Fragment,null,r.a.createElement(O.a,{component:"div",className:"app-header header-shadow",transitionName:"HeaderAnimation",transitionAppear:!0,transitionAppearTimeout:1500,transitionEnter:!1,transitionLeave:!1},r.a.createElement("div",{className:"w-100"},r.a.createElement(ke.a,{light:!0,expand:"md"},r.a.createElement(De.a,{className:"mr-auto"},r.a.createElement("img",{className:"float-left",src:M.a,alt:"SF-logo",width:"40px"}),r.a.createElement("h2",{className:"ml-2 float-left"},"SF diary")),r.a.createElement(we.a,{onClick:this.toggle}),r.a.createElement(Ae.a,{isOpen:this.state.isOpen,navbar:!0},r.a.createElement(xe.a,{className:"ml-auto",navbar:!0},"cth"===this.props.type?r.a.createElement(Se.a,{onClick:function(){return e.props.changeTable("ctm")}},r.a.createElement(Ne.a,null,"CTM")):"",r.a.createElement(Se.a,{onClick:function(){return e.props.changeTable("alumni")}},r.a.createElement(Ne.a,null,"Alumni")),r.a.createElement(Se.a,{onClick:function(){return e.props.changeTable("company")}},r.a.createElement(Ne.a,null,"Company")),r.a.createElement(Se.a,{onClick:function(){return e.props.logout()}},r.a.createElement(Ne.a,null,"Log Out"))))))))}}]),t}(r.a.Component),Te=function(e){function t(){var e,a;Object(d.a)(this,t);for(var n=arguments.length,r=new Array(n),l=0;l<n;l++)r[l]=arguments[l];return(a=Object(f.a)(this,(e=Object(g.a)(t)).call.apply(e,[this].concat(r)))).state={table:"alumni",allData:!1},a.getAllData=Object(p.a)(m.a.mark((function e(){var t,n,r,l;return m.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return t={id:localStorage.getItem("id"),type:"alumni"},e.next=3,_(t);case 3:return n=e.sent,a.props.addAlumni(n.data),r={id:localStorage.getItem("id"),type:"company"},e.next=8,_(r);case 8:l=e.sent,a.props.addCompany(l.data);case 10:case"end":return e.stop()}}),e)}))),a.handleLogout=function(){a.props.addAlumni([]),a.props.addCompany([]),C.logout((function(){a.props.history.push("/")}))},a.changeTable=function(){var e=Object(p.a)(m.a.mark((function e(t){return m.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,a.getAllData();case 2:a.setState({table:t});case 3:case"end":return e.stop()}}),e)})));return function(t){return e.apply(this,arguments)}}(),a}return Object(y.a)(t,e),Object(h.a)(t,[{key:"componentDidMount",value:function(){var e=Object(p.a)(m.a.mark((function e(){return m.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:if("ctm"===C.isAuthenticated()){e.next=4;break}this.props.history.push("/"),e.next=6;break;case 4:return e.next=6,this.getAllData();case 6:case"end":return e.stop()}}),e,this)})));return function(){return e.apply(this,arguments)}}()},{key:"render",value:function(){return r.a.createElement(n.Fragment,null,r.a.createElement(_e,{changeTable:this.changeTable,type:"ctm",logout:this.handleLogout}),r.a.createElement(je,{view:"ctm",type:this.state.table,id:localStorage.getItem("id")}))}}]),t}(n.Component),Pe=Object(E.b)((function(e){return{userDetails:e.userDetails}}),(function(e){return Object(b.b)({addAlumni:j,addCompany:k},e)}))(Te),Ie=function(e){function t(){var e,a;Object(d.a)(this,t);for(var n=arguments.length,r=new Array(n),l=0;l<n;l++)r[l]=arguments[l];return(a=Object(f.a)(this,(e=Object(g.a)(t)).call.apply(e,[this].concat(r)))).state={table:"alumni"},a.getAllData=function(){var e=Object(p.a)(m.a.mark((function e(t){var n,r,l,o,c,s;return m.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return n={id:t,type:"alumni"},e.next=3,_(n);case 3:return r=e.sent,a.props.addAlumni(r.data),l={id:t,type:"company"},e.next=8,_(l);case 8:return o=e.sent,a.props.addCompany(o.data),c={id:localStorage.getItem("id"),type:"cth"},e.next=13,H(c);case 13:s=e.sent,a.props.addCTM(s.data);case 15:case"end":return e.stop()}}),e)})));return function(t){return e.apply(this,arguments)}}(),a.handleLogout=function(){a.props.addAlumni([]),a.props.addCompany([]),a.props.addCTM([]),C.logout((function(){a.props.history.push("/")}))},a.changeTable=function(){var e=Object(p.a)(m.a.mark((function e(t){var n,r=arguments;return m.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return n=r.length>1&&void 0!==r[1]?r[1]:localStorage.getItem("id"),e.next=3,a.getAllData(n);case 3:a.setState({table:t});case 4:case"end":return e.stop()}}),e)})));return function(t){return e.apply(this,arguments)}}(),a}return Object(y.a)(t,e),Object(h.a)(t,[{key:"componentDidMount",value:function(){var e=Object(p.a)(m.a.mark((function e(){return m.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:if("cth"===C.isAuthenticated()){e.next=4;break}this.props.history.push("/"),e.next=6;break;case 4:return e.next=6,this.getAllData(localStorage.getItem("id"));case 6:case"end":return e.stop()}}),e,this)})));return function(){return e.apply(this,arguments)}}()},{key:"render",value:function(){return r.a.createElement(n.Fragment,null,r.a.createElement(_e,{changeTable:this.changeTable,type:"cth",logout:this.handleLogout}),r.a.createElement(je,{view:"cth",type:this.state.table,changeTable:this.changeTable}))}}]),t}(n.Component),Le=Object(E.b)((function(e){return{userDetails:e.userDetails}}),(function(e){return Object(b.b)({addAlumni:j,addCompany:k,addCTM:D},e)}))(Ie);var He=function(){return r.a.createElement(c.a,null,r.a.createElement(s.d,null,r.a.createElement(s.b,{exact:!0,path:"/",component:Q}),r.a.createElement(Z,{path:"/ctm",component:Pe}),r.a.createElement(Z,{path:"/cth",component:Le}),r.a.createElement(s.b,{path:"*",component:function(){return"404 Not Found"}})))},Ue=function(e){function t(){var e,a;Object(d.a)(this,t);for(var n=arguments.length,r=new Array(n),l=0;l<n;l++)r[l]=arguments[l];return(a=Object(f.a)(this,(e=Object(g.a)(t)).call.apply(e,[this].concat(r)))).state={modal:!1},a.toggle=function(){a.setState({modal:!a.state.modal})},a}return Object(y.a)(t,e),Object(h.a)(t,[{key:"render",value:function(){return r.a.createElement(n.Fragment,null,r.a.createElement("div",{className:"app-footer newFooter"},r.a.createElement("div",{className:"app-footer__inner"},r.a.createElement("div",{className:"app-footer-right"},r.a.createElement("span",{className:"d-inline-block mb-2 mr-2"},r.a.createElement(G.a,{color:"link",onClick:this.toggle},"Credits"),r.a.createElement(te.a,{isOpen:this.state.modal,toggle:this.toggle},r.a.createElement(ae.a,{toggle:this.toggle},"Credits"),r.a.createElement(ne.a,null,"Kashish Goyal"),r.a.createElement(ce.a,null,r.a.createElement(G.a,{color:"link",onClick:this.toggle},"Cancel"))))))))}}]),t}(r.a.Component),Fe=[],Me=[],Je=[],Re=[],Be=[{Header:"Name",accessor:"name",index:1},{Header:"Phone No",accessor:"mobile",index:2},{Header:"Email",accessor:"email",index:3},{Header:"LinkedIn Link",accessor:"linkedin",index:4},{Header:"Address",accessor:"addr",index:5},{Header:"Remarks",accessor:"remarks",index:6},{Header:"Updates",accessor:"updates",index:7}],ze=[{Header:"Compay Name",accessor:"company_name",index:1},{Header:"Contact Person Name",accessor:"contact_name",index:2},{Header:"Phone No",accessor:"mobile",index:3},{Header:"Email",accessor:"email",index:4},{Header:"Post of Contact",accessor:"post",index:5},{Header:"Address",accessor:"addr",index:6},{Header:"Remarks",accessor:"remarks",index:7},{Header:"Updates",accessor:"updates",index:8}],Ye=Object(b.c)({alumni:function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:Fe,t=arguments.length>1?arguments[1]:void 0;switch(t.type){case"ADD_ALUMNI_DATA":return t.payload;default:return e}},company:function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:Me,t=arguments.length>1?arguments[1]:void 0;switch(t.type){case"ADD_COMPANY_DATA":return t.payload;default:return e}},userDetails:function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:Re,t=arguments.length>1?arguments[1]:void 0;switch(t.type){case"ADD_USER_DETAILS":return t.payload;default:return e}},alumniDetailTable:function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:Be,t=arguments.length>1?arguments[1]:void 0;switch(t.type){case"ALUMNI_DETAIL_TABLE":return t.payload;default:return e}},companyDetailTable:function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:ze,t=arguments.length>1?arguments[1]:void 0;switch(t.type){case"COMPANY_DETAIL_TABLE":return t.payload;default:return e}},ctm:function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:Je,t=arguments.length>1?arguments[1]:void 0;switch(t.type){case"ADD_CTM_DATA":return t.payload;default:return e}}}),Ve=a(69);Boolean("localhost"===window.location.hostname||"[::1]"===window.location.hostname||window.location.hostname.match(/^127(?:\.(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)){3}$/));a.d(t,"store",(function(){return We}));var We=Object(b.d)(Ye,Object(b.a)(Ve.a));o.a.render(r.a.createElement(E.a,{store:We},r.a.createElement(He,null),r.a.createElement(Ue,null)),document.getElementById("root")),"serviceWorker"in navigator&&navigator.serviceWorker.ready.then((function(e){e.unregister()}))},31:function(e,t,a){e.exports=a.p+"static/media/sflogo.98f322d5.png"},70:function(e,t,a){e.exports=a(135)},75:function(e,t,a){},76:function(e,t,a){}},[[70,1,2]]]);
//# sourceMappingURL=main.9a5a74c0.chunk.js.map