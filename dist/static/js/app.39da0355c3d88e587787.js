webpackJsonp([1],{"1/oy":function(t,e){},"87Fb":function(t,e){},"9M+g":function(t,e){},B5HO:function(t,e,a){t.exports=a.p+"static/img/Chewie1.200401e.png"},EVQ7:function(t,e,a){t.exports=a.p+"static/img/Lexi1.cf83816.png"},Id91:function(t,e){},Jmt5:function(t,e){},NHnr:function(t,e,a){"use strict";Object.defineProperty(e,"__esModule",{value:!0});var n=a("7+uW"),s=a("e6fC");n.a.use(s.a);var i={name:"App",beforeCreate:function(){document.body.className="home"}},o={render:function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("div",{attrs:{id:"app"}},[a("b-navbar",{attrs:{fixed:"",sticky:"",toggleable:"md",type:"dark",variant:"dark"}},[a("b-navbar-brand",{attrs:{to:"/home"}},[t._v("James "),a("strong",[t._v("Armbrust")])]),t._v(" "),a("b-navbar-nav",{staticClass:"ml-auto"})],1),t._v(" "),a("b-container",{attrs:{fluid:""}},[a("b-row",[a("b-col",{attrs:{cols:"auto"}},[a("b-navbar",{staticClass:"side-bar collapse navbar-collapse",attrs:{sticky:"",role:"navigation"}},[a("b-nav",{attrs:{vertical:"",pills:""}},[a("b-nav-item",{attrs:{to:"/home"}},[t._v("Home")]),t._v(" "),a("b-nav-item",{attrs:{to:"/miscprojects"}},[t._v("Misc Projects")]),t._v(" "),a("b-nav-item",{attrs:{to:"/petpics"}},[t._v("Pet Pics")]),t._v(" "),a("b-nav-item",{attrs:{to:"/aboutme"}},[t._v("About Me")])],1)],1)],1),t._v(" "),a("b-col",[a("router-view")],1)],1)],1)],1)},staticRenderFns:[]};var r=a("VU/8")(i,o,!1,function(t){a("bhHt")},null,null).exports,c=a("/ocq"),l={render:function(){this.$createElement;this._self._c;return this._m(0)},staticRenderFns:[function(){var t=this.$createElement,e=this._self._c||t;return e("div",{staticClass:"welcome-body"},[e("h1",{staticClass:"heading"},[this._v("Hello")]),this._v(" "),e("p",[this._v("\n      Welcome to my little corner of the web.\n    ")]),this._v(" "),e("p",[this._v("\n      This site is pretty bare-bones at the moment. I started playing around with making it 4/6/2018 and hope\n      to have it more or less fleshed out by the end of April.  Right now I am using it to host a few\n      peices of code I wrote and projects I am working on, and of course show off pictures of my dogs.\n    ")])])}]};var d=a("VU/8")({},l,!1,function(t){a("X0hl")},"data-v-60b092b0",null).exports,u={render:function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("div",{attrs:{id:"app"}},[a("input",{directives:[{name:"model",rawName:"v-model",value:t.newItemText,expression:"newItemText"}],attrs:{type:"text",placeholder:"Add an item"},domProps:{value:t.newItemText},on:{keyup:function(e){return"button"in e||!t._k(e.keyCode,"enter",13,e.key,"Enter")?t.addNewTodoItem(e):null},input:function(e){e.target.composing||(t.newItemText=e.target.value)}}}),t._v(" "),t._l(t.todolist,function(e){return a("ul",{key:e.id},[a("li",[t._v("\n      "+t._s(e.title)+" "),a("b-button",{attrs:{size:"sm",variant:"outline-secondary"},on:{click:function(a){t.removeItem(e.id)}}},[t._v("x")])],1)])})],2)},staticRenderFns:[]};var m=a("VU/8")({name:"AppTodoList",data:function(){return{newItemText:"",todolist:[{id:0,title:"Walk dogs"},{id:1,title:"Wash dishes"},{id:2,title:"Finish website"}],nextTodoId:3}},methods:{addNewTodoItem:function(){this.todolist.push({id:this.nextTodoId++,title:this.newItemText}),this.newItemText=""},removeItem:function(t){var e=this.todolist.map(function(t){return t.id}).indexOf(t);this.todolist.splice(e,1)}}},u,!1,function(t){a("rvBl")},"data-v-930bf5e4",null).exports,h=a("fZjL"),p=a.n(h),v=[{race:"Human",stats:[{Strength:1,Dexterity:1,Constitution:1,Intelligence:1,Wisdom:1,Charisma:1}]},{race:"Hill Dwarf",stats:[{Strength:0,Dexterity:0,Constitution:2,Intelligence:0,Wisdom:1,Charisma:0}]},{race:"Mountain Dwarf",stats:[{Strength:2,Dexterity:0,Constitution:2,Intelligence:0,Wisdom:0,Charisma:0}]},{race:"High Elf",stats:[{Strength:0,Dexterity:2,Constitution:0,Intelligence:1,Wisdom:0,Charisma:0}]},{race:"Drow Elf",stats:[{Strength:0,Dexterity:2,Constitution:0,Intelligence:0,Wisdom:0,Charisma:1}]},{race:"Wood Elf",stats:[{Strength:0,Dexterity:2,Constitution:0,Intelligence:0,Wisdom:1,Charisma:0}]},{race:"Lightfood Halfling",stats:[{Strength:0,Dexterity:2,Constitution:0,Intelligence:0,Wisdom:0,Charisma:1}]},{race:"Stout Halfling",stats:[{Strength:0,Dexterity:2,Constitution:1,Intelligence:0,Wisdom:0,Charisma:0}]},{race:"Rock Gnome",stats:[{Strength:0,Dexterity:0,Constitution:1,Intelligence:2,Wisdom:0,Charisma:0}]},{race:"Forrest Gnome",stats:[{Strength:0,Dexterity:1,Constitution:0,Intelligence:2,Wisdom:0,Charisma:0}]},{race:"Dragonborn",stats:[{Strength:2,Dexterity:0,Constitution:0,Intelligence:0,Wisdom:0,Charisma:1}]},{race:"Tiefling",stats:[{Strength:0,Dexterity:0,Constitution:0,Intelligence:1,Wisdom:0,Charisma:2}]},{race:"Half-Elf*",stats:[{Strength:0,Dexterity:0,Constitution:0,Intelligence:0,Wisdom:0,Charisma:2}]},{race:"Half-Orc",stats:[{Strength:2,Dexterity:0,Constitution:1,Intelligence:0,Wisdom:0,Charisma:0}]}],g={data:function(){return{baseStats:[{id:"Strength",val:8},{id:"Dexterity",val:8},{id:"Constitution",val:8},{id:"Intelligence",val:8},{id:"Wisdom",val:8},{id:"Charisma",val:8}],points:27,race:"Default",raceIndex:0,cost:{8:0,9:1,10:2,11:3,12:4,13:5,14:7,15:9},racialBonuses:v}},methods:{modifyStat:function(t,e,a){var n=this,s=p()(this.cost).find(function(t){return n.cost[t]===e});this.baseStats[a].val=s,this.adjustPoints(this.cost[t],e)},adjustPoints:function(t,e){this.points+=t-e},addRacialBonuses:function(t,e,a){this.race=t,this.raceIndex=a},displayRacialBonus:function(t,e){return"Default"===this.race?0:this.racialBonuses[this.raceIndex].stats[0][t]}}},f={render:function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("div",[a("table",[a("thead",[a("tr",[a("th",{attrs:{scope:"col"}},[t._v("Ability")]),t._v(" "),a("th",{attrs:{scope:"col"}},[t._v("Total")]),t._v(" "),a("th",{attrs:{scope:"col"}},[t._v("Bonus")]),t._v(" "),a("th",{attrs:{scope:"col"}},[t._v("Racial")]),t._v(" "),a("th",{attrs:{scope:"col"}},[t._v("Point Cost")]),t._v(" "),a("th",{attrs:{scope:"col"}},[t._v(" Race: "+t._s(t.race))])])]),t._v(" "),a("tbody",t._l(t.baseStats,function(e,n){return a("tr",{key:e.id},[a("td",[t._v(t._s(e.id))]),t._v(" "),a("td",[t._v(t._s(Number(e.val)+Number(t.displayRacialBonus(e.id,n))))]),t._v(" "),a("td",[t._v(t._s(Math.floor((Number(e.val)+Number(t.displayRacialBonus(e.id,n))-10)/2)))]),t._v(" "),a("td",[t._v(t._s(t.displayRacialBonus(e.id,n)))]),t._v(" "),a("td",[t._v(t._s(t.cost[e.val]))]),t._v(" "),a("td",[a("b-dropdown",{staticClass:"m-md-1",attrs:{text:"Assign Points"}},t._l(t.cost,function(s,i){return a("b-dropdown-item",{key:s,on:{click:function(a){t.modifyStat(e.val,s,n)}}},[t._v("\n              Value: "+t._s(i)+", Cost: "+t._s(s)+"\n            ")])}))],1)])})),t._v(" "),a("tfoot",[a("tr",[a("td",{attrs:{colspan:"5"}},[t._v("Points to spend: "+t._s(t.points))]),t._v(" "),a("td",[a("b-dropdown",{staticClass:"m-md-1",attrs:{text:"Choose Race"}},t._l(t.racialBonuses,function(e,n){return a("b-dropdown-item",{key:n,on:{click:function(a){t.addRacialBonuses(e.race,e.stats,n)}}},[t._v("\n              "+t._s(e.race)+"\n            ")])}))],1)])])])])},staticRenderFns:[]};var _={components:{stats:a("VU/8")(g,f,!1,function(t){a("WEUy")},"data-v-b91eb2aa",null).exports}},b={render:function(){var t=this.$createElement,e=this._self._c||t;return e("div",{attrs:{id:"app"}},[e("stats")],1)},staticRenderFns:[]};var y={components:{todoList:m,statsTool:a("VU/8")(_,b,!1,function(t){a("87Fb")},"data-v-765afc17",null).exports}},x={render:function(){var t=this.$createElement,e=this._self._c||t;return e("div",[e("h1",{staticClass:"heading"},[this._v("Various projects and code samples will be added here...")]),this._v(" "),e("b-card",{staticClass:"text-center project-card",staticStyle:{"max-width":"400px"},attrs:{header:"Simple Todo List"}},[e("todo-list")],1),this._v(" "),e("b-card",{staticClass:"text-center project-card",staticStyle:{"max-width":"550px"},attrs:{header:"Dungeons and Dragons Character Stat Generator"}},[e("stats-tool")],1),this._v(" "),e("b-card",{staticClass:"text-center project-card",staticStyle:{"max-width":"400px"},attrs:{header:"Retro Gamming Console"}},[e("p",{staticClass:"card-text"},[this._v("Using a Raspberry Pi to make an awesome retro gaming console.")]),this._v(" "),e("b-button",{directives:[{name:"b-tooltip",rawName:"v-b-tooltip.hover",modifiers:{hover:!0}}],attrs:{title:"not ready yet"}},[this._v("Go to project")])],1)],1)},staticRenderFns:[]};var C=a("VU/8")(y,x,!1,function(t){a("Y3pn")},"data-v-26783940",null).exports,w={render:function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("div",[n("h1",{staticClass:"heading"},[t._v("Meet the members of our family!")]),t._v(" "),n("b-card",{staticClass:"pet-card",attrs:{title:"Chewie","img-src":a("B5HO"),"img-alt":"Chewie the dog","img-top":"",tag:"article"}},[n("p",{staticClass:"card-text"},[t._v("\n      Adopted from the pound about 7 years ago, this lovable black lab loves\n      lounging on the couch, walks, and generally ignoring physics.\n    ")])]),t._v(" "),n("b-card",{staticClass:"pet-card",attrs:{title:"Muppet","img-src":a("p5iJ"),"img-alt":"Muppet the dog","img-top":"",tag:"article"}},[n("p",{staticClass:"card-text"},[t._v("\n      Adopted from the pound about 2 years ago, this Chinese crested/terrier mix loves\n      barking, looking stylish, and playing with his toys.\n    ")])]),t._v(" "),n("b-card",{staticClass:"pet-card",attrs:{title:"Lexi","img-src":a("EVQ7"),"img-alt":"Lexi the dog","img-top":"",tag:"article"}},[n("p",{staticClass:"card-text"},[t._v("\n      Adopted from the pound about 3 years ago, this chihuahua mix loves\n      cuddling, licking faces, and occasional bezerker rages.\n    ")])]),t._v(" "),n("b-card",{staticClass:"pet-card",attrs:{title:"Stormy","img-src":a("f6m+"),"img-alt":"Stormy the dog","img-top":"",tag:"article"}},[n("p",{staticClass:"card-text"},[t._v("\n      Adopted from the pound over 5 years ago, this old chihuahua mix loves\n      sleeping, burrowing under blankets, and more sleeping.\n    ")])]),t._v(" "),n("b-card",{staticClass:"pet-card",attrs:{title:"Kitten","img-src":a("lX3e"),"img-alt":"Kitten the cat","img-top":"",tag:"article"}},[n("p",{staticClass:"card-text"},[t._v('\n      Adopted around 8 years ago, "Kitten" loves attention, being the center of attention,\n      and finding interesting places to take a nap.\n    ')])]),t._v(" "),n("b-card",{staticClass:"pet-card",attrs:{title:"Toshi","img-src":a("u6XX"),"img-alt":"Toshi the cat","img-top":"",tag:"article"}},[n("p",{staticClass:"card-text"},[t._v("\n      Adopted almost 10 years ago, Toshi loved warmth, sunbeams, and just chill'n.  He passed away 4/4/2018\n      at the aprox age of 16.\n    ")])])],1)},staticRenderFns:[]};var I=a("VU/8")({},w,!1,function(t){a("le+A")},null,null).exports,k={render:function(){this.$createElement;this._self._c;return this._m(0)},staticRenderFns:[function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("div",{staticClass:"aboutme-body"},[a("h1",{staticClass:"heading"},[t._v("Talk'n about myself")]),t._v(" "),a("p",[t._v("\n    Originally from Minneapolis I moved to sunny Colorado around nine years ago with my wife Lacey. Here\n    we bought a house on the Front Range and adopted several animals.  I work for a fairly large company\n    in the area as a full stack web developer, while Lacey works at one of the best children's museums in the country.\n  ")]),t._v(" "),a("p",[t._v("\n    My hobbies include Tabletop RPGs; as well as sketching, hiking, programming, computer games, and playing with my dogs.\n  ")]),t._v(" "),a("p",[t._v("\n    Code for this site can be found on "),a("a",{attrs:{href:"https://github.com/jarmbrust/homepage1",target:"_blank"}},[t._v("my Github")]),t._v("\n    in case you are curious.\n  ")])])}]};var S=a("VU/8")({},k,!1,function(t){a("X6pR")},"data-v-5971030e",null).exports;n.a.use(c.a);var R=new c.a({routes:[{path:"/",name:"HomePage",component:d},{path:"/home",name:"HomePage",component:d},{path:"/miscprojects",name:"MiscProjects",component:C},{path:"/petpics",name:"PetPics",component:I},{path:"/aboutme",name:"AboutMe",component:S},{path:"/todolist",name:"TodoList",component:m},{path:"*",redirect:"/",component:d}]});a("Jmt5"),a("9M+g");n.a.use(s.a),n.a.config.productionTip=!1,new n.a({el:"#app",router:R,components:{App:r},template:"<App/>"})},WEUy:function(t,e){},X0hl:function(t,e){},X6pR:function(t,e){},Y3pn:function(t,e){},bhHt:function(t,e){},"f6m+":function(t,e,a){t.exports=a.p+"static/img/Stormy1.3cb7ec1.png"},lX3e:function(t,e,a){t.exports=a.p+"static/img/Kitten1.5d5e06e.png"},"le+A":function(t,e){},p5iJ:function(t,e,a){t.exports=a.p+"static/img/Muppet1.3694e80.png"},rvBl:function(t,e){},u6XX:function(t,e,a){t.exports=a.p+"static/img/Toshi1.6bd7b32.png"},zj2Q:function(t,e){}},["NHnr"]);
//# sourceMappingURL=app.39da0355c3d88e587787.js.map