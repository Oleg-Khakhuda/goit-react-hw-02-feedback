(this["webpackJsonpgoit-react-hw-02-feedback"]=this["webpackJsonpgoit-react-hw-02-feedback"]||[]).push([[0],{13:function(e,t,n){},15:function(e,t,n){"use strict";n.r(t);var c=n(1),r=n.n(c),a=n(7),o=n.n(a),i=(n(13),n(8)),s=n(2),u=n(3),b=n(5),j=n(4),d=n(0),l=function(e){Object(b.a)(n,e);var t=Object(j.a)(n);function n(){return Object(s.a)(this,n),t.apply(this,arguments)}return Object(u.a)(n,[{key:"render",value:function(){var e=this;return Object(d.jsx)(d.Fragment,{children:this.props.options.map((function(t,n){return Object(d.jsx)("button",{value:t,type:"button",onClick:e.props.onLeaveFeedback,children:t},n)}))})}}]),n}(c.Component),h=function(e){Object(b.a)(n,e);var t=Object(j.a)(n);function n(){return Object(s.a)(this,n),t.apply(this,arguments)}return Object(u.a)(n,[{key:"render",value:function(){var e=this.props,t=e.good,n=e.neutral,c=e.bad,r=e.total,a=e.positivePercentage;return Object(d.jsx)(d.Fragment,{children:Object(d.jsxs)("ul",{children:[Object(d.jsxs)("p",{children:["Good: ",t]}),Object(d.jsxs)("p",{children:["Neutral: ",n]}),Object(d.jsxs)("p",{children:["Bad: ",c]}),Object(d.jsxs)("p",{children:["Total: ",r]}),Object(d.jsxs)("p",{children:["Positive feedback: ",a,"%"]})]})})}}]),n}(c.Component),p=function(e){Object(b.a)(n,e);var t=Object(j.a)(n);function n(){return Object(s.a)(this,n),t.apply(this,arguments)}return Object(u.a)(n,[{key:"render",value:function(){return Object(d.jsx)("h2",{children:this.props.message})}}]),n}(c.Component),O=function(e){Object(b.a)(n,e);var t=Object(j.a)(n);function n(){return Object(s.a)(this,n),t.apply(this,arguments)}return Object(u.a)(n,[{key:"render",value:function(){return Object(d.jsxs)(d.Fragment,{children:[Object(d.jsx)("h2",{children:this.props.title}),this.props.children]})}}]),n}(c.Component),v=function(e){Object(b.a)(n,e);var t=Object(j.a)(n);function n(){var e;Object(s.a)(this,n);for(var c=arguments.length,r=new Array(c),a=0;a<c;a++)r[a]=arguments[a];return(e=t.call.apply(t,[this].concat(r))).state={good:0,neutral:0,bad:0},e.countTotalFeedback=function(){return Object.values(e.state).reduce((function(e,t){return e+t}),0)},e.countPositiveFeedbackPercentage=function(){return Math.round(e.state.good/e.countTotalFeedback()*100)},e.onLeaveFeedback=function(t){var n=t.currentTarget.value;e.setState((function(e){return Object(i.a)({},n,e[n]+1)}))},e}return Object(u.a)(n,[{key:"render",value:function(){var e=this.state,t=e.good,n=e.neutral,c=e.bad,r=this.countTotalFeedback,a=this.countPositiveFeedbackPercentage,o=this.onLeaveFeedback;return Object(d.jsxs)(d.Fragment,{children:[Object(d.jsx)(O,{title:"Please leave feedback",children:Object(d.jsx)(l,{options:Object.keys(this.state),onLeaveFeedback:o})}),Object(d.jsx)(O,{title:"Statistics",children:0===r()?Object(d.jsx)(p,{message:"No feedback given"}):Object(d.jsx)(h,{good:t,neutral:n,bad:c,total:r(),positivePercentage:a()})})]})}}]),n}(c.Component);o.a.render(Object(d.jsx)(r.a.StrictMode,{children:Object(d.jsx)(v,{})}),document.getElementById("root"))}},[[15,1,2]]]);
//# sourceMappingURL=main.e3034012.chunk.js.map