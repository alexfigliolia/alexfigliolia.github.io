var t=Object.defineProperty,e=(e,s,i)=>(((e,s,i)=>{s in e?t(e,s,{enumerable:!0,configurable:!0,writable:!0,value:i}):e[s]=i})(e,"symbol"!=typeof s?s+"":s,i),i);import{r as s,j as i,c as n,T as o,M as a}from"./index-oNVdPQUU.js";import{B as r,P as c}from"./index-H243_uNB.js";const l=class t extends s.Component{shouldComponentUpdate(){return!1}render(){return i.jsx("div",{className:"contact-text",children:i.jsx("h1",{id:"contactText",children:t.contact.map(((t,e)=>i.jsx("div",{className:"text-letter",children:t},`${t}-${e}`)))})})}};e(l,"contact","CONTACT".split(""));let h=l;class d extends s.Component{constructor(){super(...arguments),e(this,"state",{reset:!1})}UNSAFE_componentWillReceiveProps({active:t}){!this.props.active&&t&&o.deferTask((()=>{this.setState({reset:!0})}),3100)}shouldComponentUpdate({active:t},{reset:e}){return t!==this.props.active||e!==this.state.reset}render(){const{reset:t}=this.state,{text:e,onClick:s,active:n}=this.props;return i.jsx("div",{className:`contact-button ${n?" active":""} ${t?"reset":""}`,children:i.jsx(r,{text:e,onClick:s})})}}const p=n((({screenActive:t})=>({active:t})))(d);class m extends s.Component{constructor(t){super(t),e(this,"toNPM"),e(this,"toGithub"),a.setButtonDelay(3500),this.emailMe=this.emailMe.bind(this),this.toGithub=this.openLink("https://github.com/alexfigliolia"),this.toNPM=this.openLink("https://www.npmjs.com/~alexfigliolia")}shouldComponentUpdate(){return!1}openLink(t){return()=>{window.open(t,"_blank")}}emailMe(){window.location.href="mailto:alexfigliolia@gmail.com?subject=Hey%20Alex,%20let's%20chat!"}render(){return i.jsx(c,{name:"contact",children:i.jsxs("div",{children:[i.jsx(h,{}),i.jsxs("div",{className:"buttons",children:[i.jsx(p,{text:"Email",onClick:this.emailMe}),i.jsx(p,{text:"Github",onClick:this.toGithub}),i.jsx(p,{text:"NPM",onClick:this.toNPM})]})]})})}}export{m as default};
