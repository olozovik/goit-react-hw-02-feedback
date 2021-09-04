(this["webpackJsonpgoit-react-hw-02-feedback"]=this["webpackJsonpgoit-react-hw-02-feedback"]||[]).push([[0],{22:function(e,t,n){"use strict";n.r(t);var a,c,r=n(1),o=n.n(r),i=n(5),s=n.n(i),d=(n(17),n(6)),b=n(7),u=n(8),l=n(11),j=n(10),p=n(2),h=n(3),g=h.a.div(a||(a=Object(p.a)(["\n  & button {\n    padding: 2px 10px;\n    border: 1px solid lightgray;\n    border-radius: 4px;\n    background-color: transparent;\n    cursor: pointer;\n    transition: background-color 150ms linear;\n\n    &:hover,\n    &:focus {\n      background-color: rgba(94, 152, 247, 1);\n      border-color: transparent;\n      outline: none;\n    }\n\n    &:not(:last-child) {\n      margin-right: 5px;\n    }\n  }\n"]))),x=n(0);function O(e){var t=e.options,n=e.onLeaveFeedback;return Object(x.jsx)(g,{children:t.map((function(e){var t=e.replace(e[0],e[0].toUpperCase());return Object(x.jsx)("button",{onClick:function(){return n(e)},children:t},e)}))})}function v(e){var t=e.good,n=e.neutral,a=e.bad,c=e.total,r=e.positivePercentage;return Object(x.jsxs)(x.Fragment,{children:[Object(x.jsxs)("p",{children:["Good: ",Object(x.jsx)("span",{children:t})]}),Object(x.jsxs)("p",{children:["Neutral: ",Object(x.jsx)("span",{children:n})]}),Object(x.jsxs)("p",{children:["Bad: ",Object(x.jsx)("span",{children:a})]}),Object(x.jsxs)("p",{children:["Total: ",Object(x.jsx)("span",{children:c})]}),Object(x.jsxs)("p",{children:["Positive feedback: ",Object(x.jsxs)("span",{children:[r,"%"]})]})]})}var f=h.a.section(c||(c=Object(p.a)(["\n  padding: 10px 40px;\n"])));function k(e){var t=e.title,n=e.children;return Object(x.jsxs)(f,{children:[Object(x.jsx)("h2",{children:t}),n]})}function y(e){var t=e.message;return Object(x.jsx)("p",{children:t})}var F=function(e){Object(l.a)(n,e);var t=Object(j.a)(n);function n(){var e;Object(b.a)(this,n);for(var a=arguments.length,c=new Array(a),r=0;r<a;r++)c[r]=arguments[r];return(e=t.call.apply(t,[this].concat(c))).state={good:0,neutral:0,bad:0},e.onLeaveFeedback=function(t){e.setState((function(e){return Object(d.a)({},t,e[t]+1)}))},e.getQuantityByType=function(t){return e.state[t]},e.countTotalFeedback=function(){return e.state.good+e.state.neutral+e.state.bad},e.countPositiveFeedbackPercentage=function(){var t=e.countTotalFeedback(),n=e.state.good;return Math.round(n/t*100)},e}return Object(u.a)(n,[{key:"render",value:function(){return Object(x.jsxs)(x.Fragment,{children:[Object(x.jsx)(k,{title:"Please leave feedback",children:Object(x.jsx)(O,{options:["good","neutral","bad"],onLeaveFeedback:this.onLeaveFeedback})}),Object(x.jsx)(k,{title:"Statistics",children:this.countTotalFeedback()>0?Object(x.jsx)(v,{good:this.getQuantityByType("good"),neutral:this.getQuantityByType("neutral"),bad:this.getQuantityByType("bad"),total:this.countTotalFeedback(),positivePercentage:this.countPositiveFeedbackPercentage()}):Object(x.jsx)(y,{message:"No feedback given"})})]})}}]),n}(r.Component);s.a.render(Object(x.jsx)(o.a.StrictMode,{children:Object(x.jsx)(F,{})}),document.getElementById("root"))}},[[22,1,2]]]);
//# sourceMappingURL=main.89d6a84e.chunk.js.map