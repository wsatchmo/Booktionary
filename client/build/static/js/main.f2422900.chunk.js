(this.webpackJsonpbooktionary=this.webpackJsonpbooktionary||[]).push([[0],{27:function(e,t,a){e.exports=a(56)},32:function(e,t,a){},33:function(e,t,a){},51:function(e,t,a){},54:function(e,t,a){},56:function(e,t,a){"use strict";a.r(t);var n=a(0),o=a.n(n),l=a(23),r=a.n(l),s=a(63),i=a(64),c=a(65),m=a(59),h=a(57),u=a(58),d=a(60),g=a(62);var E=function({q:e,handleInputChange:t,handleFormSubmit:a}){return o.a.createElement("form",null,o.a.createElement("div",{className:"form-group"},o.a.createElement("label",{htmlFor:"Query"},o.a.createElement("strong",null,"Book")),o.a.createElement("input",{className:"form-control",id:"Title",type:"text",value:e,placeholder:"Lord of the Rings",name:"q",onChange:t,required:!0})),o.a.createElement("div",{className:"pull-right"},o.a.createElement("button",{onClick:a,type:"submit",className:"btn btn-lg btn-outline-primary float-right"},"Search")))};a(32);const p=({children:e})=>o.a.createElement("ul",{className:"list-group"},e);function v({children:e}){return o.a.createElement("li",{className:"list-group-item"},e)}a(33);var b=function({title:e,subtitle:t,authors:a,link:n,description:l,image:r,Button:s}){return o.a.createElement(v,null,o.a.createElement(h.a,{className:"flex-wrap"},o.a.createElement(u.a,{size:"md-8"},o.a.createElement("h3",{className:"font-italic"},e),t&&o.a.createElement("h5",{className:"font-italic"},t)),o.a.createElement(u.a,{size:"md-4"},o.a.createElement("div",{className:"btn-container"},o.a.createElement("a",{className:"btn btn-light",target:"_blank",rel:"noopener noreferrer",href:n},"View"),o.a.createElement(s,null)))),o.a.createElement(h.a,null,o.a.createElement(u.a,{size:"md-6"},o.a.createElement("p",{className:"font-italic small"},"Author(s): ",a))),o.a.createElement(h.a,null,o.a.createElement(u.a,null,o.a.createElement("img",{className:"book-image",src:r,alt:e})),o.a.createElement(u.a,null,o.a.createElement("p",null,l))))};var k=function(){return o.a.createElement("footer",{className:"bg-primary"},o.a.createElement("hr",null),o.a.createElement("p",{className:"pull-right text-center text-white"},o.a.createElement("i",{className:"fa fa-cog fa-spin fa-fw text-white"})," Built with React.js"))},f=a(10),N=a.n(f),w=function(e){return N.a.get("/api/google",{params:{q:"title:"+e}})},S=function(){return N.a.get("/api/books")},x=function(e){return N.a.delete("/api/books/"+e)},B=function(e){return N.a.post("/api/books",e)};const y={form:{padding:20,marginBottom:20}};class I extends n.Component{constructor(...e){super(...e),this.state={books:[],q:"",message:"Searched books will appear here"},this.handleInputChange=e=>{const t=e.target,a=t.name,n=t.value;this.setState({[a]:n})},this.getBooks=()=>{w(this.state.q).then(e=>this.setState({books:e.data})).catch(()=>this.setState({books:[],message:"No new books matching. Please search something else"}))},this.handleFormSubmit=e=>{e.preventDefault(),this.getBooks()},this.handleBookSave=e=>{const t=this.state.books.find(t=>t.id===e);B({googleId:t.id,title:t.volumeInfo.title,subtitle:t.volumeInfo.subtitle,link:t.volumeInfo.infoLink,authors:t.volumeInfo.authors,description:t.volumeInfo.description,image:t.volumeInfo.imageLinks.thumbnail}).then(()=>this.getBooks())}}render(){return o.a.createElement(m.a,null,o.a.createElement(h.a,null,o.a.createElement(u.a,{size:"md-12"},o.a.createElement(d.a,{className:"bg-dark text-secondary"},o.a.createElement("h1",{className:"text-center"},o.a.createElement("i",{className:"fa fa-book"}),o.a.createElement("strong",null,"  Booktionary  "),o.a.createElement("i",{className:"fa fa-book"})),o.a.createElement("h2",{className:"text-center"},"Search and Save books with the Google API")))),o.a.createElement(h.a,null,o.a.createElement(u.a,{size:"md-12"},o.a.createElement(g.a,{title:"Book Search",style:y.form},o.a.createElement(E,{handleInputChange:this.handleInputChange,handleFormSubmit:this.handleFormSubmit,q:this.state.q})))),o.a.createElement(h.a,null,o.a.createElement(u.a,{size:"md-12"},o.a.createElement(g.a,{title:"Results"},o.a.createElement(g.a.Body,null,o.a.createElement(g.a.Text,null,this.state.books.length?o.a.createElement(p,null,console.log("BOOKS STATE::",this.state),this.state.books.map(e=>o.a.createElement(b,{key:e.id,title:e.volumeInfo.title,subtitle:e.volumeInfo.subtitle,link:e.volumeInfo.infoLink,authors:e.volumeInfo.authors.join(", "),description:e.volumeInfo.description,image:e.volumeInfo.imageLinks.thumbnail,Button:()=>o.a.createElement("button",{onClick:()=>this.handleBookSave(e.id),className:"btn btn-primary ml-2"},"Save")}))):o.a.createElement("h2",{className:"text-center"},this.state.message)))))),o.a.createElement(k,null))}}var C=I;class z extends n.Component{constructor(...e){super(...e),this.state={books:[]},this.getSavedBooks=()=>{S().then(e=>this.setState({books:e.data})).catch(e=>console.log(e))},this.handleBookDelete=e=>{x(e).then(e=>this.getSavedBooks())}}componentDidMount(){this.getSavedBooks()}render(){return o.a.createElement(m.a,null,o.a.createElement(h.a,null,o.a.createElement(u.a,{size:"md-12"},o.a.createElement(d.a,{className:"bg-dark text-secondary"},o.a.createElement("h1",{className:"text-center"},o.a.createElement("strong",null,"Booktionary")),o.a.createElement("h2",{className:"text-center"},"Search and Save books from Google")))),o.a.createElement(h.a,null,o.a.createElement(u.a,{size:"md-12"},o.a.createElement(g.a,{title:"Saved Books",icon:"download"},this.state.books.length?o.a.createElement(p,null,this.state.books.map(e=>o.a.createElement(b,{key:e._id,title:e.title,subtitle:e.subtitle,link:e.link,authors:e.authors.join(", "),description:e.description,image:e.image,Button:()=>o.a.createElement("button",{onClick:()=>this.handleBookDelete(e._id),className:"btn btn-danger ml-2"},"Delete")}))):o.a.createElement("h2",{className:"text-center"},"No Saved Books")))),o.a.createElement(k,null))}}var W=z;var L=function(){window.open("https://github.com/wsatchmo/Booktionary"),window.location.href="/"};var q=function(){return o.a.createElement(m.a,{fluid:!0},o.a.createElement(h.a,null,o.a.createElement(u.a,{size:"md-12"},o.a.createElement(d.a,{className:"bg-dark text-secondary"},o.a.createElement("h1",{className:"text-center"},"404 Page Not Found"),o.a.createElement("h1",{className:"text-center"},"We're sorry, there doesn't seem to be anything here...")))))},D=a(61);a(51);class F extends n.Component{constructor(...e){super(...e),this.state={open:!1,width:window.innerWidth},this.updateWidth=()=>{const e={width:window.innerWidth};this.state.open&&e.width>991&&(e.open=!1),this.setState(e)},this.toggleNav=()=>{this.setState({open:!this.state.open})}}componentDidMount(){window.addEventListener("resize",this.updateWidth)}componentWillUnmount(){window.removeEventListener("resize",this.updateWidth)}render(){return o.a.createElement("nav",{className:"navbar navbar-expand-lg navbar-dark bg-dark danger mb-2"},o.a.createElement(D.a,{className:"navbar-brand",to:"/"},"Booktionary"),o.a.createElement("button",{onClick:this.toggleNav,className:"navbar-toggler","data-toggle":"collapse","data-target":"#navbarNav","aria-controls":"navbarNav","aria-expanded":"false","aria-label":"Toggle navigation"},o.a.createElement("span",{className:"navbar-toggler-icon"})),o.a.createElement("div",{className:"".concat(this.state.open?"":"collapse ","navbar-collapse"),id:"navbarNav"},o.a.createElement("ul",{className:"navbar-nav"},o.a.createElement("li",{className:"nav-item"},o.a.createElement(D.a,{onClick:this.toggleNav,className:"/"===window.location.pathname?"nav-link active":"nav-link",to:"/"},"Search")),o.a.createElement("li",{className:"nav-item"},o.a.createElement(D.a,{onClick:this.toggleNav,className:"/saved"===window.location.pathname?"nav-link active":"nav-link",to:"/saved"},"Saved")),o.a.createElement("li",{className:"nav-item"},o.a.createElement(D.a,{onClick:this.toggleNav,className:"/repo"===window.location.pathname?"nav-link active":"nav-link",to:"/repo"},"Github Repo")))))}}var j=F;a(54);var R=function(){return o.a.createElement(s.a,null,o.a.createElement("div",{className:"bg-primary"},o.a.createElement(j,null),o.a.createElement(i.a,null,o.a.createElement(c.a,{exact:!0,path:"/",component:C}),o.a.createElement(c.a,{exact:!0,path:"/saved",component:W}),o.a.createElement(c.a,{exact:!0,path:"/repo",component:L}),o.a.createElement(c.a,{component:q}))))};const T=Boolean("localhost"===window.location.hostname||"[::1]"===window.location.hostname||window.location.hostname.match(/^127(?:\.(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)){3}$/));function A(e){navigator.serviceWorker.register(e).then(e=>{e.onupdatefound=()=>{const t=e.installing;t.onstatechange=()=>{"installed"===t.state&&(navigator.serviceWorker.controller?console.log("New content is available; please refresh."):console.log("Content is cached for offline use."))}}}).catch(e=>{console.error("Error during service worker registration:",e)})}r.a.render(o.a.createElement(R,null),document.getElementById("root")),function(){if("serviceWorker"in navigator){if(new URL("",window.location).origin!==window.location.origin)return;window.addEventListener("load",()=>{const e="".concat("","/service-worker.js");T?function(e){fetch(e).then(t=>{404===t.status||-1===t.headers.get("content-type").indexOf("javascript")?navigator.serviceWorker.ready.then(e=>{e.unregister().then(()=>{window.location.reload()})}):A(e)}).catch(()=>{console.log("No internet connection found. App is running in offline mode.")})}(e):A(e)})}}()}},[[27,1,2]]]);
//# sourceMappingURL=main.f2422900.chunk.js.map