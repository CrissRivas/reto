(window.webpackJsonp=window.webpackJsonp||[]).push([[7],{436:function(t,e,n){"use strict";var r=n(124),c=n.n(r).a.create({baseURL:"https://ecsdevapi.nextline.mx/vdev/tasks-challenge/tasks",headers:{Authorization:"Bearer ".concat("e864a0c9eda63181d7d65bc73e61e3dc6b74ef9b82f7049f1fc7d9fc8f29706025bd271d1ee1822b15d654a84e1a0997b973a46f923cc9977b3fcbb064179ecd")}});e.a=c},438:function(t,e,n){"use strict";n.r(e);var r=n(418),c=n(466),o=n(432),l=n(191),d=n(36),f=(n(109),n(436)),k=n(443),v=n.n(k),h={name:"Task",data:function(){return{task:[],detail:"",showTask:!0}},methods:{putData:function(t){var e=this;return Object(d.a)(regeneratorRuntime.mark((function n(){var r;return regeneratorRuntime.wrap((function(n){for(;;)switch(n.prev=n.next){case 0:return n.prev=0,n.next=3,f.a.get("/"+t);case 3:return r=n.sent,e.task=r.data[0]||{},e.task.is_completed=1,n.next=8,f.a.put("/"+t,v.a.stringify(e.task));case 8:n.sent,e.$emit("refreshData"),n.next=15;break;case 12:n.prev=12,n.t0=n.catch(0),console.error(n.t0);case 15:case"end":return n.stop()}}),n,null,[[0,12]])})))()}},props:{task:Object}},m=n(72),component=Object(m.a)(h,(function(){var t=this,e=t._self._c;return e("div",[e(c.a,{staticClass:"my-4",attrs:{shaped:"",dark:"",outlined:"","min-width":"200"}},[e("div",{on:{click:function(e){return t.$emit("resolve-task",t.task.id)}}},[e(o.d,{staticClass:"text-h5"},[t._v("\n        "+t._s(t.task.title)+"\n      ")]),t._v(" "),e(o.b,[t._v("Entrega:"+t._s(t.task.due_date)+" ")])],1),t._v(" "),0===t.task.is_completed?e(r.a,{attrs:{color:"green",fab:"",absolute:"",top:"",right:"",small:""},on:{click:function(e){return t.putData(t.task.id)}}},[e(l.a,[t._v("mdi-star-outline")])],1):e(r.a,{attrs:{color:"light-blue lighten-3",fab:"",absolute:"",top:"",right:"",small:""},on:{click:function(e){return t.$emit("editTask",t.task.id)}}},[e(l.a,[t._v("mdi-pencil")])],1)],1)],1)}),[],!1,null,null,null);e.default=component.exports},444:function(t,e){}}]);