(function(e){function t(t){for(var r,i,s=t[0],u=t[1],c=t[2],d=0,p=[];d<s.length;d++)i=s[d],Object.prototype.hasOwnProperty.call(a,i)&&a[i]&&p.push(a[i][0]),a[i]=0;for(r in u)Object.prototype.hasOwnProperty.call(u,r)&&(e[r]=u[r]);l&&l(t);while(p.length)p.shift()();return o.push.apply(o,c||[]),n()}function n(){for(var e,t=0;t<o.length;t++){for(var n=o[t],r=!0,s=1;s<n.length;s++){var u=n[s];0!==a[u]&&(r=!1)}r&&(o.splice(t--,1),e=i(i.s=n[0]))}return e}var r={},a={app:0},o=[];function i(t){if(r[t])return r[t].exports;var n=r[t]={i:t,l:!1,exports:{}};return e[t].call(n.exports,n,n.exports,i),n.l=!0,n.exports}i.m=e,i.c=r,i.d=function(e,t,n){i.o(e,t)||Object.defineProperty(e,t,{enumerable:!0,get:n})},i.r=function(e){"undefined"!==typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(e,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(e,"__esModule",{value:!0})},i.t=function(e,t){if(1&t&&(e=i(e)),8&t)return e;if(4&t&&"object"===typeof e&&e&&e.__esModule)return e;var n=Object.create(null);if(i.r(n),Object.defineProperty(n,"default",{enumerable:!0,value:e}),2&t&&"string"!=typeof e)for(var r in e)i.d(n,r,function(t){return e[t]}.bind(null,r));return n},i.n=function(e){var t=e&&e.__esModule?function(){return e["default"]}:function(){return e};return i.d(t,"a",t),t},i.o=function(e,t){return Object.prototype.hasOwnProperty.call(e,t)},i.p="/kanel/";var s=window["webpackJsonp"]=window["webpackJsonp"]||[],u=s.push.bind(s);s.push=t,s=s.slice();for(var c=0;c<s.length;c++)t(s[c]);var l=u;o.push([0,"chunk-vendors"]),n()})({0:function(e,t,n){e.exports=n("56d7")},"56d7":function(e,t,n){"use strict";n.r(t);n("e260"),n("e6cf"),n("cca6"),n("a79d");var r=n("2b0e"),a=function(){var e=this,t=e.$createElement,n=e._self._c||t;return n("div",{attrs:{id:"app"}},[n("BaseHeader",{attrs:{generation:e.generateSynthesis}}),n("transition",{attrs:{name:"fade",mode:"out-in"}},[n("router-view")],1)],1)},o=[],i=(n("a4d3"),n("4de4"),n("4160"),n("e439"),n("dbb4"),n("b64b"),n("159b"),n("ade3")),s=n("2f62"),u=function(){var e=this,t=e.$createElement,n=e._self._c||t;return n("header",{staticClass:"header container grid"},[n("nav",{staticClass:"col-start-1 col-end-6 flex flex--align-center"},[n("ul",{staticClass:"header__menu "},[n("li",[n("router-link",{staticClass:"header__title column-start-1 column-end-6",attrs:{to:"/"}},[e._v("KANEL")])],1),n("li",[n("router-link",{attrs:{to:"/week"}},[e._v("Repas de la semaine")])],1),n("li",[n("router-link",{attrs:{to:"/synthesis"}},[e._v("Recommandation")])],1)])]),n("button-action",{staticClass:"col-start-7 col-end-12 col-start-9-desktop col-end-12-desktop",attrs:{type:"action"},on:{action:e.generation}},[e._v("Générer une recommandation")])],1)},c=[],l=function(){var e=this,t=e.$createElement,n=e._self._c||t;return n("button",{class:e.type,on:{click:e.click}},[e._t("default")],2)},d=[],p=(n("caad"),{name:"ButtonAction",props:{type:{type:String,required:!0,validator:function(e){return["action","add","remove"].includes(e)}}},methods:{click:function(e){this.$emit("action",e)}}}),m=p,f=n("2877"),h=Object(f["a"])(m,l,d,!1,null,null,null),b=h.exports,v={name:"BaseHeader",components:{ButtonAction:b},props:{generation:{type:Function}}},y=v,g=Object(f["a"])(y,u,c,!1,null,null,null),k=g.exports;function O(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,r)}return n}function j(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?O(Object(n),!0).forEach((function(t){Object(i["a"])(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):O(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}var _={name:"App",components:{BaseHeader:k},methods:j({},Object(s["b"])({generateResults:"generateResults"}),{generateSynthesis:function(){this.generateResults(),this.$router.push("/synthesis")}})},w=_,P=(n("5c0b"),Object(f["a"])(w,a,o,!1,null,null,null)),M=P.exports,C=n("9483");Object(C["a"])("".concat("/kanel/","service-worker.js"),{ready:function(){console.log("App is being served from cache by a service worker.\nFor more details, visit https://goo.gl/AFskqB")},registered:function(){console.log("Service worker has been registered.")},cached:function(){console.log("Content has been cached for offline use.")},updatefound:function(){console.log("New content is downloading.")},updated:function(){console.log("New content is available; please refresh.")},offline:function(){console.log("No internet connection found. App is running in offline mode.")},error:function(e){console.error("Error during service worker registration:",e)}});var S=n("8c4f"),D=function(){var e=this,t=e.$createElement,n=e._self._c||t;return n("div",{staticClass:"page home "},[n("div",{staticClass:"start_container"},[n("heading",{staticClass:"mb--40",attrs:{level:"1"}},[e._v("Kanel")]),n("p",{staticClass:"mb--30 "},[e._v(" Kanel permet de générer une recommandation de groupes d’aliments dont vous avez besoin pour maintenir une alimentation équilibrée sur toute une semaine. ")]),n("button-router",{attrs:{name:"Week"}},[e._v("Commencer")])],1)])},E=[],x=function(){var e=this,t=e.$createElement,n=e._self._c||t;return n("h"+e.level,{tag:"component"},[e._t("default")],2)},T=[],$=(n("a9e3"),{name:"Heading",props:{level:{type:Number|String,required:!0,default:1}}}),G=$,W=Object(f["a"])(G,x,T,!1,null,null,null),A=W.exports,R=function(){var e=this,t=e.$createElement,n=e._self._c||t;return n("router-link",{staticClass:"button",attrs:{to:e.route}},[e._t("default")],2)},q=[],B=(n("b0c0"),{name:"ButtonRouter",props:{name:{type:String,required:!0},params:{type:Object|Array}},computed:{route:function(){return{name:this.name,params:this.params}}}}),F=B,L=Object(f["a"])(F,R,q,!1,null,null,null),N=L.exports,H={name:"Home",components:{Heading:A,ButtonRouter:N}},K=H,U=Object(f["a"])(K,D,E,!1,null,null,null),V=U.exports,z=function(){var e=this,t=e.$createElement,n=e._self._c||t;return n("div",{staticClass:"page container"},[n("heading",{staticClass:"mb--40",attrs:{level:"1"}},[e._v("Vos repas de la semaine")]),n("tabs",{attrs:{tabs:e.tabs},scopedSlots:e._u([{key:"tab-navigation",fn:function(t){var n=t.tab;return[e._v(e._s(n.title))]}},{key:"tab-content",fn:function(t){var r=t.currentTab;return[n("fragment",[n("segment-day-meals",{attrs:{day:e.weekMeals[r.value]}}),n("button-router",{staticClass:"mt--50",attrs:{name:"Meals",params:{day:r.value}}},[e._v(" "+e._s(e.actionButtonLabel(r.value))+" ")])],1)]}}])})],1)},I=[],J=n("3f08"),Q=function(){var e=this,t=e.$createElement,n=e._self._c||t;return n("div",{staticClass:"tabs"},[n("nav",{staticClass:"tabs__navigation mb--20"},[n("ul",e._l(e.tabs,(function(t){return n("li",{key:t.id,staticClass:"tab",class:e.getActiveClass(t.id),on:{click:function(n){e.goToTab(t.id),e.emitCurrentTab()}}},[e._t("tab-navigation",null,{tab:t})],2)})),0)]),n("main",{staticClass:"tabs__content"},[n("keep-alive",[e._t("tab-content",null,{currentTab:e.currentTab})],2)],1)])},X=[],Y=(n("7db0"),{name:"Tabs",data:function(){return{currentTab:{}}},props:{tabs:{type:Array,required:!0}},methods:{goToTab:function(e){this.currentTab=this.tabs.find((function(t){return t.id===e}))},getActiveClass:function(e){return this.currentTab.id===e?"tab--active":""},emitCurrentTab:function(){this.$emit("tabClicked",this.currentTab)}},created:function(){this.goToTab(this.tabs[0].id)}}),Z=Y,ee=Object(f["a"])(Z,Q,X,!1,null,null,null),te=ee.exports,ne=function(){var e=this,t=e.$createElement,n=e._self._c||t;return Object.keys(e.cleanDay).length?n("ul",{staticClass:"card-list"},e._l(e.cleanDay,(function(t,r){return n("li",{key:e.generateUniqueComponentKey(),staticClass:"card"},[t.length?n("list",{attrs:{label:e.getPeriodName(r),items:t},scopedSlots:e._u([{key:"default",fn:function(t){var r=t.item;return[0!==r.portions?[n("span",[e._v(e._s(r.name))]),e._v(" "),n("span",{staticClass:"font-medium"},[e._v(e._s(r.portions))])]:e._e()]}}],null,!0)}):e._e()],1)})),0):e._e()},re=[],ae=(n("13d5"),n("0d03"),n("d3b7"),n("25f0"),function(){return Math.random().toString(36).substring(2,5)+Math.random().toString(36).substring(2,5)}),oe=ae,ie=(n("e25e"),function(e){switch(parseInt(e,10)){case 0:return"Petit déjeuner";case 1:return"Déjeuner";case 2:return"Goûter";case 3:return"Dîner";default:return"Indéterminé"}}),se=ie,ue=function(){var e=this,t=e.$createElement,n=e._self._c||t;return n("fragment",[n("h3",{staticClass:"list__label"},[e._v(e._s(e.label))]),n("ul",{staticClass:"list"},e._l(e.items,(function(t){return n("li",{key:e.generateUniqueComponentKey()},[e._t("default",null,{item:t})],2)})),0)])},ce=[],le={name:"List",components:{Fragment:J["a"]},props:{label:{type:String,required:!0},items:{type:Array,required:!0}},methods:{generateUniqueComponentKey:oe}},de=le,pe=Object(f["a"])(de,ue,ce,!1,null,null,null),me=pe.exports,fe={name:"SegmentDayMeals",components:{List:me},props:{day:{type:Object,required:!0,default:function(){return{}}}},computed:{cleanDay:function(){var e=this;return Object.keys(this.day).reduce((function(t,n){return e.day[n].length>0&&(t[n]=e.day[n]),t}),{})}},methods:{generateUniqueComponentKey:oe,getPeriodName:se}},he=fe,be=Object(f["a"])(he,ne,re,!1,null,null,null),ve=be.exports;function ye(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,r)}return n}function ge(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?ye(Object(n),!0).forEach((function(t){Object(i["a"])(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):ye(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}var ke={name:"Week",components:{Fragment:J["a"],Heading:A,Tabs:te,ButtonRouter:N,SegmentDayMeals:ve},data:function(){return{tabs:[{id:1,title:"Lundi",value:"monday"},{id:2,title:"Mardi",value:"tuesday"},{id:3,title:"Mercredi",value:"wednesday"},{id:4,title:"Jeudi",value:"thursday"},{id:5,title:"Vendredi",value:"friday"},{id:6,title:"Samedi",value:"saturday"},{id:7,title:"Dimanche",value:"sunday"}]}},computed:ge({},Object(s["c"])({weekMeals:"weekMeals"})),methods:ge({},Object(s["b"])({updateDayMeals:"updateDayMeals",generateResults:"generateResults"}),{generateSynthesis:function(){this.generateResults(),this.$router.push("/synthesis")},actionButtonLabel:function(e){return this.weekMeals[e]&&Object.keys(this.weekMeals[e]).length?"Modifier les repas":"Ajouter des repas"}})},Oe=ke,je=Object(f["a"])(Oe,z,I,!1,null,null,null),_e=je.exports,we=function(){var e=this,t=e.$createElement,n=e._self._c||t;return n("div",{staticClass:"page container"},[n("heading",{staticClass:"mb--40",attrs:{level:"1"}},[e._v("Ajoutez vos repas du "+e._s(e.dayName.toLowerCase()))]),n("tabs",{attrs:{tabs:e.tabs},on:{tabClicked:e.changeCurrentPeriod},scopedSlots:e._u([{key:"tab-navigation",fn:function(t){var n=t.tab;return[e._v(e._s(n.title))]}},{key:"tab-content",fn:function(t){var r=t.currentTab;return[n("fragment",[n("segment-food-group-cards",{staticClass:"mb--40",attrs:{day:e.meals[r.value]},on:{changePortion:e.updateFoodGroupPortions}}),n("button-action",{staticClass:"mt--50",attrs:{type:"action"},on:{action:e.storeDayMeals}},[e._v("Valider")])],1)]}}])})],1)},Pe=[],Me=(n("c740"),n("a434"),function(e){switch(e){case"monday":return"Lundi";case"tuesday":return"Mardi";case"wednesday":return"Mercredi";case"thursday":return"Jeudi";case"friday":return"Vendredi";case"saturday":return"Samedi";case"sunday":return"Dimanche";default:return"Indéterminé"}}),Ce=Me,Se=function(){var e=this,t=e.$createElement,n=e._self._c||t;return n("ul",{staticClass:"card-list"},e._l(e.foodGroups,(function(t){return n("li",{key:t.id},[n("food-group-card",{attrs:{foodGroup:t,portions:e.getCurrentPortions(t)},on:{changePortion:e.changePortion}})],1)})),0)},De=[],Ee=[{id:1,name:"Fruits et légumes",min:5,period:"day",cumulative:!0},{id:2,name:"Viande rouge",max:2,period:"week",cumulative:!1},{id:3,name:"Charcuterie",max:1,period:"week",cumulative:!1},{id:4,name:"Viande blanche",max:1,period:"day",cumulative:!1},{id:5,name:"Féculents et produits céréaliers",max:2,period:"day",cumulative:!0},{id:6,name:"Poisson gras",max:1,period:"week",cumulative:!1},{id:7,name:"Poisson maigre",max:1,period:"week",cumulative:!1},{id:8,name:"Œuf",max:1,period:"day",cumulative:!1},{id:9,name:"Produits laitiers",max:3,period:"day",cumulative:!0},{id:10,name:"Légumineuses",min:2,period:"week",cumulative:!0}],xe=function(){var e=this,t=e.$createElement,n=e._self._c||t;return n("div",{staticClass:"card card--action"},[n("h4",[e._v(e._s(e.foodGroup.name))]),n("span",{staticClass:"card__number mb--30",class:{"text-grey":e.hasPortions}},[e._v(e._s(e.portions))]),n("button-action",{attrs:{type:"add"},on:{action:function(t){return e.changePortion({foodGroup:e.foodGroup,type:"add"})}}},[e._v(" + ")]),n("button-action",{attrs:{type:"remove"},on:{action:function(t){return e.changePortion({foodGroup:e.foodGroup,type:"remove"})}}},[e._v(" - ")])],1)},Te=[],$e={name:"FoodGroupCard",components:{ButtonAction:b},props:{foodGroup:{type:Object,required:!0},portions:{type:Number,default:function(){return 0}}},computed:{foodGroups:function(){return Ee},hasPortions:function(){return!this.portions>0}},methods:{changePortion:function(e){this.$emit("changePortion",e)}}},Ge=$e,We=Object(f["a"])(Ge,xe,Te,!1,null,null,null),Ae=We.exports,Re={name:"SegmentFoodGroupCards",components:{FoodGroupCard:Ae},props:{day:{type:Array,required:!0}},computed:{foodGroups:function(){return Ee}},methods:{changePortion:function(e){this.$emit("changePortion",e)},getCurrentPortions:function(e){var t=this.day.find((function(t){return t.id===e.id}));return t?t.portions:0}}},qe=Re,Be=Object(f["a"])(qe,Se,De,!1,null,null,null),Fe=Be.exports;function Le(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,r)}return n}function Ne(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?Le(Object(n),!0).forEach((function(t){Object(i["a"])(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):Le(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}var He={name:"Meals",components:{Fragment:J["a"],Heading:A,Tabs:te,ButtonAction:b,SegmentFoodGroupCards:Fe},data:function(){return{tabs:[{id:1,title:"Petit déjeuner",value:0},{id:2,title:"Déjeuner",value:1},{id:3,title:"Goûter",value:2},{id:4,title:"Dîner",value:3}],meals:{0:[],1:[],2:[],3:[]},currentPeriod:0}},computed:Ne({},Object(s["c"])({weekMeals:"weekMeals"}),{dayName:function(){return Ce(this.$route.params.day)}}),methods:Ne({},Object(s["b"])({updateDayMeals:"updateDayMeals"}),{changeCurrentPeriod:function(e){this.currentPeriod=e.value},storeDayMeals:function(){this.updateDayMeals({day:this.$route.params.day,meals:this.meals}),this.$router.push("/week")},updateFoodGroupPortions:function(e){var t=this.currentPeriod,n=this.meals[t].findIndex((function(t){return t.id===e.foodGroup.id}));if(-1!==n)return"add"===e.type?this.meals[t][n].portions++:this.meals[t][n].portions--,void(this.meals[t][n].portions<=0&&this.meals[t].splice(n,1));"remove"!==e.type&&this.meals[t].push({id:e.foodGroup.id,name:e.foodGroup.name,portions:1})}}),created:function(){this.weekMeals[this.$route.params.day]&&(this.meals=this.weekMeals[this.$route.params.day])}},Ke=He,Ue=Object(f["a"])(Ke,we,Pe,!1,null,null,null),Ve=Ue.exports,ze=function(){var e=this,t=e.$createElement,n=e._self._c||t;return n("div",{staticClass:"page container"},[n("heading",{staticClass:"mb--40",attrs:{level:"1"}},[e._v("Recommandation")]),Object.keys(e.results).length?n("ul",e._l(e.results,(function(t,r){return n("li",{key:r,staticClass:"mb--30"},[n("h2",{staticClass:"mb--10"},[e._v(e._s(e.getDayName(r)))]),n("segment-day-meals",{attrs:{day:t}})],1)})),0):[n("p",{staticClass:"mb--30"},[e._v(' Vous n\'avez pas encore généré de recommandation. Saisissez vos repas de la semaine puis cliquez sur "Générer une recommandation". ')]),n("button-router",{attrs:{name:"Week"}},[e._v("Ajouter des repas")])]],2)},Ie=[];function Je(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,r)}return n}function Qe(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?Je(Object(n),!0).forEach((function(t){Object(i["a"])(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):Je(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}var Xe={name:"Synthesis",components:{Heading:A,ButtonRouter:N,SegmentDayMeals:ve},computed:Qe({},Object(s["c"])({results:"results"})),methods:{getDayName:Ce}},Ye=Xe,Ze=Object(f["a"])(Ye,ze,Ie,!1,null,null,null),et=Ze.exports,tt=n("5f35"),nt=n.n(tt);r["a"].use(S["a"]);var rt=[{path:"/",name:"Home",component:V},{path:"/week",name:"Week",component:_e},{path:"/:day/meals",name:"Meals",component:Ve},{path:"/synthesis",name:"Synthesis",component:et}],at=nt.a.publicPath,ot=new S["a"]({mode:"history",base:at,routes:rt}),it=ot,st=n("0e44"),ut=n("d4ec"),ct=n("bee2"),lt=function(){function e(t,n){var r=arguments.length>2&&void 0!==arguments[2]?arguments[2]:[];Object(ut["a"])(this,e),this.days=7,this.nameDays=["monday","tuesday","wednesday","thursday","friday","saturday","sunday"],this.reco=t,this.pattern=n,this.uptake=r,this.totalsWeek={},this.cumulativeState={},this.weekMap=this.weekMap()}return Object(ct["a"])(e,[{key:"provideMeals",value:function(){for(var e in this.weekMap)for(var t=0;t<this.pattern.length;t++)void 0===this.weekMap[e][t]&&this.createMeal(e,this.pattern[t],t)}},{key:"createMeal",value:function(e,t,n){var r=this,a=t.portions,o=0,i=[],s=function(){var t=r.randomEntry(r.reco);if(r.checkMax(t,e,i)&&r.checkCumul(t,e,i)){var n=i.findIndex((function(e){return e.id==t.id}));n>=0?i[n].portions=i[n].portions+1:i.push({id:t.id,name:t.name,portions:1,cumulative:t.cumulative}),o++}};while(o<a)s();this.weekMap[e][n]=i,this.incrementTotals(e,i)}},{key:"checkCumul",value:function(e,t,n){if(e.cumulative)return!0;if(this.cumulativeState[t])return!1;var r=n.find((function(t){return t.cumulative==e.cumulative}));return void 0===r}},{key:"checkMax",value:function(e,t,n){var r=this.reco.find((function(t){return t.id==e.id})).max;if(void 0===r)return!0;if(void 0!==n.find((function(t){return t.id==e.id}))&&(r-=n.find((function(t){return t.id==e.id})).portions,!r))return!1;var a=this.reco.find((function(t){return t.id==e.id})).period,o=void 0;return"day"==a&&void 0!==this.totalsWeek[e.id]&&void 0!==this.totalsWeek[e.id][t]&&(o=this.totalsWeek[e.id][t]),"week"==a&&void 0!==this.totalsWeek[e.id]&&void 0!==this.totalsWeek[e.id]["week"]&&(o=this.totalsWeek[e.id]["week"]),void 0===o&&(o=0),o<r}},{key:"incrementTotals",value:function(e,t){for(var n=this,r=function(r){void 0===n.totalsWeek[t[r].id]&&(n.totalsWeek[t[r].id]={}),void 0===n.totalsWeek[t[r].id][e]&&(n.totalsWeek[t[r].id][e]=0),n.totalsWeek[t[r].id][e]=n.totalsWeek[t[r].id][e]+t[r].portions,void 0===n.totalsWeek[t[r].id]["week"]&&(n.totalsWeek[t[r].id]["week"]=0),n.totalsWeek[t[r].id]["week"]=n.totalsWeek[t[r].id]["week"]+t[r].portions,void 0!==n.cumulativeState[e]||n.reco.find((function(e){return e.id==t[r].id})).cumulative||(n.cumulativeState[e]=t[r].name)},a=0;a<t.length;a++)r(a)}},{key:"randomEntry",value:function(e){if("Array"===e.constructor.name){var t=Math.floor(Math.random()*e.length);return e[t]}if("Object"===e.constructor.name){var n=Object.keys(e),r=Math.floor(Math.random()*n.length),a=n[r];return e[a]}}},{key:"weekMap",value:function(){for(var e={},t=0;t<7;t++){var n=this.nameDays[t];if(e[n]={},void 0!==this.uptake[n])for(var r in this.uptake[n])e[n][r]=this.uptake[n][r],this.incrementTotals(n,this.uptake[n][r])}return e}},{key:"debug",value:function(){for(var e in console.log("---------- DEBUG ----------"),console.log("Recommendations (reco) : ",this.reco),console.log("Portions par repas (pattern) : ",this.pattern),console.log("Déjà mangé cette semaine (uptake) : ",this.uptake),console.log("Totaux par jour et semaine (totalsWeek) : ",this.totalsWeek),console.log("Propositions, jour par jour (weekMap) : "),this.weekMap)console.log(e,this.weekMap[e])}}]),e}(),dt=[{name:"Petit déjeuner",portions:3},{name:"Déjeuner",portions:5},{name:"Goûter",portions:2},{name:"Dîner",portions:5}];r["a"].use(s["a"]);var pt={weekMeals:{},results:{}},mt={weekMeals:function(e){return e.weekMeals},results:function(e){return e.results}},ft={SET_WEEK_MEALS:function(e,t){e.weekMeals=t},SET_RESULTS:function(e,t){e.results=t}},ht={updateDayMeals:function(e,t){var n=pt.weekMeals;n[t.day]=t.meals;var r=Object.keys(n[t.day]).filter((function(e){return n[t.day][e].length}));r.length||delete n[t.day],e.commit("SET_WEEK_MEALS",n)},generateResults:function(e){var t=new lt(Ee,dt,pt.weekMeals);t.provideMeals(),e.commit("SET_RESULTS",t.weekMap)}},bt=new s["a"].Store({state:pt,getters:mt,mutations:ft,actions:ht,plugins:[Object(st["a"])({key:"kanel"})]});r["a"].config.productionTip=!1,new r["a"]({router:it,store:bt,render:function(e){return e(M)}}).$mount("#app")},"5c0b":function(e,t,n){"use strict";var r=n("9c0c"),a=n.n(r);a.a},"5f35":function(e,t,n){e.exports={publicPath:"/kanel/"}},"9c0c":function(e,t,n){}});
//# sourceMappingURL=app.e189a7a9.js.map