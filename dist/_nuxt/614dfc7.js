(window.webpackJsonp=window.webpackJsonp||[]).push([[9],{436:function(e,t,n){"use strict";var r=n(124),c=n.n(r).a.create({baseURL:"https://ecsdevapi.nextline.mx/vdev/tasks-challenge/tasks",headers:{Authorization:"Bearer ".concat("e864a0c9eda63181d7d65bc73e61e3dc6b74ef9b82f7049f1fc7d9fc8f29706025bd271d1ee1822b15d654a84e1a0997b973a46f923cc9977b3fcbb064179ecd")}});t.a=c},445:function(e,t){},471:function(e,t,n){"use strict";n.r(t);var r=n(418),c=n(461),o=n(432),l=n(559),d=n(497),k=n(565),v=n(560),m=n(558),f=n(191),_=n(89),h=n(569),w=n(431),x=n(557),y=n(563),C=n(428),D=n(556),T=n(562),R=(n(10),n(58),n(36)),j=(n(33),n(45),n(109),n(436)),$=n(443),O=n.n($),S={data:function(){return{task:[],dialog:!1,detail:"",snackbar:!1,drawer:!1,edit:!0,menu2:!1,newTask:!1}},watch:{changes:function(){this.drawer=!0,this.edit=!0,this.newTask=!1},id:function(e){this.getData(e)},upload:function(){this.task={token:"",title:"",is_completed:0,due_date:"",comments:"",description:"",tags:""},this.drawer=!0,this.edit=!1,this.newTask=!0},edits:function(){this.drawer=!0,this.edit=!1,this.newTask=!1}},methods:{getData:function(e){var t=this;return Object(R.a)(regeneratorRuntime.mark((function n(){var r;return regeneratorRuntime.wrap((function(n){for(;;)switch(n.prev=n.next){case 0:return n.prev=0,n.next=3,j.a.get("/"+e);case 3:r=n.sent,t.task=r.data[0]||{},n.next=10;break;case 7:n.prev=7,n.t0=n.catch(0),console.error(n.t0);case 10:case"end":return n.stop()}}),n,null,[[0,7]])})))()},deleteData:function(e){var t=this;return Object(R.a)(regeneratorRuntime.mark((function n(){var r;return regeneratorRuntime.wrap((function(n){for(;;)switch(n.prev=n.next){case 0:return n.prev=0,n.next=3,j.a.delete("/"+e);case 3:r=n.sent,t.detail=r.data.detail||{},t.dialog=!1,t.snackbar=!0,t.drawer=!1,t.$emit("refreshData"),n.next=14;break;case 11:n.prev=11,n.t0=n.catch(0),console.error(n.t0);case 14:case"end":return n.stop()}}),n,null,[[0,11]])})))()},completeTask:function(e){var t=this;return Object(R.a)(regeneratorRuntime.mark((function n(){var r;return regeneratorRuntime.wrap((function(n){for(;;)switch(n.prev=n.next){case 0:return n.prev=0,n.next=3,j.a.get("/"+e);case 3:return r=n.sent,t.task=r.data[0]||{},t.task.is_completed=1,n.next=8,j.a.put("/"+e,O.a.stringify(t.task));case 8:n.sent,t.drawer=!1,t.$emit("refreshData"),n.next=16;break;case 13:n.prev=13,n.t0=n.catch(0),console.error(n.t0);case 16:case"end":return n.stop()}}),n,null,[[0,13]])})))()},inCompleteTask:function(e){var t=this;return Object(R.a)(regeneratorRuntime.mark((function n(){var r;return regeneratorRuntime.wrap((function(n){for(;;)switch(n.prev=n.next){case 0:return n.prev=0,n.next=3,j.a.get("/"+e);case 3:return r=n.sent,t.task=r.data[0]||{},t.task.is_completed=0,n.next=8,j.a.put("/"+e,O.a.stringify(t.task));case 8:n.sent,t.drawer=!1,t.$emit("refreshData"),n.next=16;break;case 13:n.prev=13,n.t0=n.catch(0),console.error(n.t0);case 16:case"end":return n.stop()}}),n,null,[[0,13]])})))()},submitChanges:function(){var e=this;return Object(R.a)(regeneratorRuntime.mark((function t(){var n;return regeneratorRuntime.wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return t.prev=0,console.log(e.task),t.next=4,j.a.put("/"+e.task.id,O.a.stringify(e.task));case 4:n=t.sent,console.log(n.data),e.edit=!e.edit,e.drawer=!e.drawer,e.$emit("refreshData"),t.next=14;break;case 11:t.prev=11,t.t0=t.catch(0),console.error(t.t0);case 14:case"end":return t.stop()}}),t,null,[[0,11]])})))()},submitNew:function(){var e=this;return Object(R.a)(regeneratorRuntime.mark((function t(){return regeneratorRuntime.wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return t.prev=0,console.log(e.task),t.next=4,j.a.post("",O.a.stringify(e.task));case 4:t.sent,e.edit=!e.edit,e.newTask=!e.newTask,e.drawer=!e.drawer,e.$emit("refreshData"),t.next=14;break;case 11:t.prev=11,t.t0=t.catch(0),console.error(t.t0);case 14:case"end":return t.stop()}}),t,null,[[0,11]])})))()}},props:{changes:Boolean,id:Number,upload:Boolean,edits:Boolean},computed:{difference:function(){var e=new Date,t=new Date(this.task.due_date)-e,n=Math.ceil(t/864e5);return 1==this.task.is_completed?"blue":n>7?"green":n>=4&&n<=7?"orange":"red darken-2"},formattedDate:function(){var e=new Date(this.task.due_date).toLocaleDateString("es-ES",{weekday:"long"});return e.charAt(0).toLocaleUpperCase()+e.slice(1)},formattedDateMonth:function(){return new Date(this.task.due_date).toLocaleDateString("es-ES",{month:"long",day:"numeric",year:"numeric"})}}},B=n(72),component=Object(B.a)(S,(function(){var e=this,t=e._self._c;return t(w.a,{attrs:{fixed:"",top:"",temporary:"",right:"",cliped:"",width:"400"},model:{value:e.drawer,callback:function(t){e.drawer=t},expression:"drawer"}},[t(_.b,{staticClass:"text-h6"},[t(r.a,{attrs:{icon:""},on:{click:function(t){t.stopPropagation(),e.drawer=!e.drawer}}},[t(f.a,{attrs:{"x-large":""}},[e._v("\n        mdi-chevron-double-right\n      ")])],1)],1),e._v(" "),t(m.a),e._v(" "),e.edit?t(x.a,{staticClass:"pa-3",attrs:{dense:""}},[t(d.a,[t(x.a,{attrs:{justify:"center",align:"center"}},[t("h1",{staticClass:"display-2 ma-4"},[e._v(" "+e._s(e.task.title))])]),e._v(" "),t(x.a,{attrs:{justify:"center",align:"center"}},[e.task.tags?t(l.a,{staticClass:"ma-2",attrs:{color:"primary"}},[e._v("\n          "+e._s(e.task.tags)+"\n        ")]):e._e()],1),e._v(" "),t("h3",[e._v("Descripción:")]),e._v(" "),t(c.a,{staticClass:"ml-4 pa-2 my-4",attrs:{outlined:"",height:"50"}},[t("p",{},[e._v("\n          "+e._s(e.task.description)+"\n        ")])]),e._v(" "),t("h3",[e._v("Comentarios:")]),e._v(" "),t(c.a,{staticClass:"ml-4 pa-2 my-4",attrs:{outlined:"",height:"50"}},[t("p",[e._v("\n          "+e._s(e.task.comments)+"\n        ")])]),e._v(" "),t(c.a,{staticClass:"my-4",attrs:{color:e.difference,height:"150"}},[t(x.a,[t(d.a,{attrs:{align:"center",justify:"center"}},[t("p",[e._v("Fecha de entrega:")]),e._v(" "),t("h1",[e._v(" "+e._s(e.formattedDate)+" ")]),e._v(" "),t("h3",[e._v(" "+e._s(e.formattedDateMonth))])])],1)],1),e._v(" "),0===e.task.is_completed?t(r.a,{staticClass:"pa-8 my-4",attrs:{color:"green",block:""},on:{click:function(t){return e.completeTask(e.task.id)}}},[t(f.a,{attrs:{large:""}},[e._v("mdi-star-outline")])],1):e._e(),e._v(" "),1===e.task.is_completed?t(r.a,{staticClass:"pa-8 my-4",attrs:{color:"amber accent-4",block:""},on:{click:function(t){return e.inCompleteTask(e.task.id)}}},[t(f.a,{attrs:{large:""}},[e._v("mdi-star")])],1):e._e(),e._v(" "),t(x.a,[t(d.a,[t(r.a,{staticClass:"pa-4",attrs:{color:"blue",block:""},on:{click:function(t){e.edit=!e.edit}}},[t(f.a,{attrs:{large:""}},[e._v("mdi-pencil")])],1)],1),e._v(" "),t(d.a,[t("div",{staticClass:"text-center"},[t(v.a,{attrs:{width:"500"},scopedSlots:e._u([{key:"activator",fn:function(n){var c=n.on,o=n.attrs;return[t(r.a,e._g(e._b({staticClass:"pa-4",attrs:{color:"red",block:""}},"v-btn",o,!1),c),[t(f.a,{attrs:{large:""}},[e._v("mdi-trash-can-outline")])],1)]}}],null,!1,659178134),model:{value:e.dialog,callback:function(t){e.dialog=t},expression:"dialog"}},[e._v(" "),t(c.a,[t(o.d,{staticClass:"text-h5 red darken-3"},[e._v("\n                  Borrar permanentemente\n                ")]),e._v(" "),t(o.c,{attrs:{justify:"center",align:"center"}},[e._v("\n                  Des: "+e._s(e.task.description)+"\n                ")]),e._v(" "),t(m.a),e._v(" "),t(o.a,[t(C.a),e._v(" "),t(r.a,{attrs:{color:"red lighten-1",text:""},on:{click:function(t){return e.deleteData(e.id)}}},[e._v("\n                    Borrar\n                  ")])],1)],1)],1)],1)])],1)],1)],1):e._e(),e._v(" "),e.edit?e._e():t(x.a,{staticClass:"pa-3",attrs:{dense:""}},[t(D.a,{staticClass:"display-1 pa-4",attrs:{label:"Titulo",color:"green",outlined:""},model:{value:e.task.title,callback:function(t){e.$set(e.task,"title",t)},expression:"task.title"}}),e._v(" "),t(D.a,{attrs:{dense:"",label:"Tag",filled:"",rounded:"",color:"green"},model:{value:e.task.tags,callback:function(t){e.$set(e.task,"tags",t)},expression:"task.tags"}}),e._v(" "),t(T.a,{attrs:{outlined:"",name:"input-7-4",label:"Descripción",color:"green",rows:"3"},model:{value:e.task.description,callback:function(t){e.$set(e.task,"description",t)},expression:"task.description"}}),e._v(" "),t(T.a,{attrs:{outlined:"",name:"input-7-4",label:"Comentarios",color:"green",rows:"3"},model:{value:e.task.comments,callback:function(t){e.$set(e.task,"comments",t)},expression:"task.comments"}}),e._v(" "),t(h.a,{attrs:{"close-on-content-click":!1,"nudge-right":40,transition:"scale-transition","offset-y":"","min-width":"auto"},scopedSlots:e._u([{key:"activator",fn:function(n){var r=n.on,c=n.attrs;return[t(D.a,e._g(e._b({attrs:{label:"Fechas de entrega","prepend-icon":"mdi-calendar",readonly:"",color:"green"},model:{value:e.task.due_date,callback:function(t){e.$set(e.task,"due_date",t)},expression:"task.due_date"}},"v-text-field",c,!1),r))]}}],null,!1,2652388859),model:{value:e.menu2,callback:function(t){e.menu2=t},expression:"menu2"}},[e._v(" "),t(k.a,{attrs:{color:"green",locale:"es-MX"},on:{input:function(t){e.menu2=!1}},model:{value:e.task.due_date,callback:function(t){e.$set(e.task,"due_date",t)},expression:"task.due_date"}})],1),e._v(" "),e.newTask?e._e():t(r.a,{staticClass:"pa-4",attrs:{color:"blue",block:""},on:{click:e.submitChanges}},[t(f.a,{attrs:{large:""}},[e._v("mdi-pencil")])],1),e._v(" "),e.newTask?t(r.a,{staticClass:"pa-4",attrs:{color:"green",block:""},on:{click:e.submitNew}},[t(f.a,{attrs:{large:""}},[e._v("mdi-plus")])],1):e._e()],1),e._v(" "),t(y.a,{attrs:{absolute:"",bottom:"",color:"lime accent-3",outlined:""},scopedSlots:e._u([{key:"action",fn:function(n){var c=n.attrs;return[t(r.a,e._b({attrs:{color:"lime accent-3",text:""},on:{click:function(t){e.snackbar=!1}}},"v-btn",c,!1),[e._v("\n        Close\n      ")])]}}]),model:{value:e.snackbar,callback:function(t){e.snackbar=t},expression:"snackbar"}},[e._v("\n    "+e._s(e.detail)+"\n\n    ")])],1)}),[],!1,null,null,null);t.default=component.exports}}]);