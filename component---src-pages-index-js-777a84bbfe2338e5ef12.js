(window.webpackJsonp=window.webpackJsonp||[]).push([[2],{188:function(e,t,a){"use strict";a.r(t);var n=a(0),r=a.n(n),l=(a(189),function(e){return r.a.createElement("div",{className:"container"},r.a.createElement("main",{id:"main-content"},e.children))});a(65),a(13),a(49),a(39),a(30),a(38),a(66),a(130);function c(e){return function(e){if(Array.isArray(e)){for(var t=0,a=new Array(e.length);t<e.length;t++)a[t]=e[t];return a}}(e)||function(e){if(Symbol.iterator in Object(e)||"[object Arguments]"===Object.prototype.toString.call(e))return Array.from(e)}(e)||function(){throw new TypeError("Invalid attempt to spread non-iterable instance")}()}var o=a(190),i=function(e){var t=e.setTodos,a=e.todos,l=Object(n.useState)(""),i=l[0],m=l[1],u=function(e){switch(e[0]){case"add":t((function(t){return[(n=e[1],{id:a.length,title:n,completed:!1})].concat(c(t));var n}));break;case"del":o=e[1],o=parseInt(o),t((function(e){return e.filter((function(e){return e.id!==o}))}));break;case"com":!function(e){e=parseInt(e),t((function(t){return Array.from(t,(function(t){return t.id===e&&(t.completed=!t.completed),t}))}))}(e[1]);break;case"rn":var n=e[1].split(" "),r=n.shift(),l=n.join(" ");if(isNaN(r)){alert("First command must be todo ID");break}!function(e,a){e=parseInt(e),t((function(t){return Array.from(t,(function(t){return t.id===e&&(t.title=a),t}))}))}(r,l);break;default:alert("Unknown command")}var o};return r.a.createElement("form",{onSubmit:function(e){e.preventDefault(),u(o(i)),m("")},className:"input"},r.a.createElement("label",{htmlFor:"command"},">"),r.a.createElement("input",{className:"command",name:"command",placeholder:"add todo",onChange:function(e){return m(e.target.value)},value:i,autoComplete:"off",type:"text"}))},m=function(e){var t=e.todo;return t.completed?r.a.createElement("div",{className:"todo list-item completed"},r.a.createElement("h3",{className:"title"},t.title),r.a.createElement("h3",{className:"id"},t.id)):r.a.createElement("div",{className:"todo list-item"},r.a.createElement("h3",{className:"title"},t.title),r.a.createElement("h3",{className:"id"},t.id))},u=function(e){var t=e.todos;return r.a.createElement("ul",{className:"todos"},r.a.createElement("div",{className:"list-header"},r.a.createElement("h3",{className:"title-header"},"Title"),r.a.createElement("h3",{className:"id-header"},"ID")),t.map((function(e){return r.a.createElement("li",{key:e.id},r.a.createElement(m,{todo:e}))})))},s=function(){return r.a.createElement("footer",null,r.a.createElement("h4",null,"Made by Fernando"))},d=function(){var e=Object(n.useState)(!0),t=e[0],a=e[1],l=function(){return a(!t)};return t?r.a.createElement("div",{className:"help"},r.a.createElement("button",{"aria-label":"help button",className:"help-button",onClick:l},"?"),r.a.createElement("ul",{className:"help-commands"},r.a.createElement("li",{className:"help-command"},"add(name)"),r.a.createElement("li",{className:"help-command"},"del(id)"),r.a.createElement("li",{className:"help-command"},"rn(id, new name)"),r.a.createElement("li",{className:"help-command"},"com(id)"))):r.a.createElement("div",{className:"help"},r.a.createElement("button",{"aria-label":"help button",className:"help-button",onClick:l},"?"))};t.default=function(){var e=Object(n.useState)([{id:0,title:"Deploy App",completed:!1}]),t=e[0],a=e[1];return r.a.createElement(r.a.Fragment,null,r.a.createElement(l,null,r.a.createElement(i,{setTodos:a,todos:t}),r.a.createElement(u,{todos:t})),r.a.createElement(d,null),r.a.createElement(s,null))}},190:function(e,t,a){a(191),a(38);e.exports=function(e){if(!e)return[];var t=e.split(" ").filter((function(e){return""!==e}));if(1===t.length)return Array.of(e);var a=t.shift();return Array.of(a,t.join(" "))}},191:function(e,t,a){"use strict";var n=a(1),r=a(131);n(n.S+n.F*a(8)((function(){function e(){}return!(Array.of.call(e)instanceof e)})),"Array",{of:function(){for(var e=0,t=arguments.length,a=new("function"==typeof this?this:Array)(t);t>e;)r(a,e,arguments[e++]);return a.length=t,a}})}}]);
//# sourceMappingURL=component---src-pages-index-js-777a84bbfe2338e5ef12.js.map