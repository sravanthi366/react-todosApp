(this.webpackJsonptodos=this.webpackJsonptodos||[]).push([[0],{25:function(t,e,o){},44:function(t,e,o){"use strict";o.r(e);var n=o(0),r=o(2),a=o.n(r),c=o(17),i=o.n(c),s=o(8),d=o(3),l=o(4),u=o(6),p=o(5),b=function(t){Object(u.a)(o,t);var e=Object(p.a)(o);function o(){var t;Object(d.a)(this,o);for(var n=arguments.length,r=new Array(n),a=0;a<n;a++)r[a]=arguments[a];return(t=e.call.apply(e,[this].concat(r))).getStyle=function(){return{backgroundColor:"#f4f4f4",padding:"10px",borderBottom:"1px #ccc dotted",textDecoration:t.props.todo.completed?"line-through":"none"}},t}return Object(l.a)(o,[{key:"render",value:function(){var t=this.props.todo,e=t.id,o=t.title;return Object(n.jsx)("div",{style:this.getStyle(),children:Object(n.jsxs)("p",{children:[Object(n.jsx)("input",{type:"checkbox",onChange:this.props.markComplete.bind(this,e)})," "," ",o,Object(n.jsx)("button",{onClick:this.props.delTodo.bind(this,e),style:j,children:"x"})]})})}}]),o}(r.Component),j={background:"#ff0000",color:"#fff",border:"none",padding:"5px 8px",borderRadius:"50%",cursor:"pointer",float:"right",boxShadow:"none"},h=b,f=function(t){Object(u.a)(o,t);var e=Object(p.a)(o);function o(){return Object(d.a)(this,o),e.apply(this,arguments)}return Object(l.a)(o,[{key:"render",value:function(){var t=this;return this.props.todos.map((function(e){return Object(n.jsx)(h,{todo:e,markComplete:t.props.markComplete,delTodo:t.props.delTodo},e.id)}))}}]),o}(r.Component);var m=function(){return Object(n.jsx)("div",{children:Object(n.jsx)("header",{style:{backgroundColor:"rgb(60,60,60)"},children:Object(n.jsx)("h1",{style:{textAlign:"center",color:"#fff",padding:"10px"},children:"Todos List.."})})})},O=(o(25),o(18)),x=function(t){Object(u.a)(o,t);var e=Object(p.a)(o);function o(){var t;Object(d.a)(this,o);for(var n=arguments.length,r=new Array(n),a=0;a<n;a++)r[a]=arguments[a];return(t=e.call.apply(e,[this].concat(r))).state={title:""},t.onSubmit=function(e){e.preventDefault(),t.props.addTodo(t.state.title),t.setState({title:""})},t.onChange=function(e){return t.setState(Object(O.a)({},e.target.name,e.target.value))},t}return Object(l.a)(o,[{key:"render",value:function(){return Object(n.jsx)("div",{children:Object(n.jsxs)("form",{onSubmit:this.onSubmit,style:{display:"flex"},children:[Object(n.jsx)("input",{type:"text",name:"title",placeholder:"Add Todo..",style:{flex:"10",padding:"5px"},value:this.state.title,onChange:this.onChange}),Object(n.jsx)("input",{type:"submit",value:"submit",className:"btn",style:{flex:"1"}})]})})}}]),o}(r.Component),v=o(46),y=o(19),g=o.n(y),T=function(t){Object(u.a)(o,t);var e=Object(p.a)(o);function o(){var t;Object(d.a)(this,o);for(var n=arguments.length,r=new Array(n),a=0;a<n;a++)r[a]=arguments[a];return(t=e.call.apply(e,[this].concat(r))).state={Todos:[]},t.markComplete=function(e){t.setState({Todos:t.state.Todos.map((function(t){return t.id===e&&(t.completed=!t.completed),t}))})},t.delTodo=function(e){t.setState({Todos:Object(s.a)(t.state.Todos.filter((function(t){return t.id!==e})))})},t.addTodo=function(e){var o={id:Object(v.a)(),title:e,completed:!1};t.setState({Todos:[].concat(Object(s.a)(t.state.Todos),[o])})},t}return Object(l.a)(o,[{key:"componentDidMount",value:function(){var t=this;g.a.get("https://jsonplaceholder.typicode.com/todos?_limit=10").then((function(e){return t.setState({Todos:e.data})}))}},{key:"render",value:function(){return Object(n.jsx)("div",{className:"App",children:Object(n.jsxs)("div",{className:"container",children:[Object(n.jsx)(m,{}),Object(n.jsx)(x,{addTodo:this.addTodo}),Object(n.jsx)(f,{todos:this.state.Todos,markComplete:this.markComplete,delTodo:this.delTodo})]})})}}]),o}(r.Component);i.a.render(Object(n.jsx)(a.a.StrictMode,{children:Object(n.jsx)(T,{})}),document.getElementById("root"))}},[[44,1,2]]]);
//# sourceMappingURL=main.c405f81d.chunk.js.map