(this.webpackJsonpreact_clock=this.webpackJsonpreact_clock||[]).push([[0],{12:function(t,e,n){},14:function(t,e,n){"use strict";n.r(e);var c=n(7),i=n.n(c),a=n(2),r=n(3),o=n(5),l=n(4),s=n(1),u=n.n(s),d=(n(12),n(0)),j=function(t){Object(o.a)(n,t);var e=Object(l.a)(n);function n(){var t;Object(a.a)(this,n);for(var c=arguments.length,i=new Array(c),r=0;r<c;r++)i[r]=arguments[r];return(t=e.call.apply(e,[this].concat(i))).state={date:new Date},t.timerId=void 0,t}return Object(r.a)(n,[{key:"componentDidMount",value:function(){var t=this;this.timerId=setInterval((function(){t.setState({date:new Date}),console.log(t.state.date.toLocaleTimeString())}),1e3)}},{key:"componentWillUnmount",value:function(){this.timerId&&clearInterval(this.timerId)}},{key:"render",value:function(){return Object(d.jsx)("p",{children:this.state.date.toLocaleTimeString()})}}]),n}(u.a.Component),b=function(t){Object(o.a)(n,t);var e=Object(l.a)(n);function n(){var t;Object(a.a)(this,n);for(var c=arguments.length,i=new Array(c),r=0;r<c;r++)i[r]=arguments[r];return(t=e.call.apply(e,[this].concat(i))).state={isClockVisible:!0},t.clickHandle=function(e){t.setState({isClockVisible:e})},t}return Object(r.a)(n,[{key:"render",value:function(){var t=this;return Object(d.jsxs)("div",{className:"App",children:[Object(d.jsx)("h1",{children:"React clock"}),Object(d.jsx)("button",{type:"button",onClick:function(){return t.clickHandle(!0)},children:"Show Clock"}),Object(d.jsx)("button",{type:"button",onClick:function(){return t.clickHandle(!1)},children:"Hide Clock"}),Object(d.jsx)("div",{children:this.state.isClockVisible?Object(d.jsxs)(d.Fragment,{children:["Current time:"," ",Object(d.jsx)(j,{})]}):Object(d.jsx)(d.Fragment,{})})]})}}]),n}(u.a.Component);i.a.render(Object(d.jsx)(b,{}),document.getElementById("root"))}},[[14,1,2]]]);
//# sourceMappingURL=main.0425c6bd.chunk.js.map