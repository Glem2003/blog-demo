"use strict";(self.webpackChunkblog_demo=self.webpackChunkblog_demo||[]).push([[503],{5917:(e,t,s)=>{s.d(t,{A:()=>b});var a=s(1041),l=s(3888),o=s(3519),r=s(579);const i=()=>(0,r.jsx)(r.Fragment,{children:(0,r.jsx)(l.A,{expand:"md",children:(0,r.jsxs)(o.A,{children:[(0,r.jsx)(l.A.Brand,{href:"/",children:"Blog Platform"}),(0,r.jsx)(l.A.Toggle,{}),(0,r.jsx)(l.A.Collapse,{children:(0,r.jsxs)(a.A,{children:[(0,r.jsx)(a.A.Link,{href:"/",children:"Home"}),(0,r.jsx)(a.A.Link,{href:"/blog",children:"Blog"}),(0,r.jsx)(a.A.Link,{href:"/about_us",children:"About us"}),(0,r.jsx)(a.A.Link,{href:"/contact_us",children:"Contact us"})]})})]})})});var n=s(7196),c=s(8877),d=s(3825);const m=[{customClass:"ms-auto text-dark",content:(0,r.jsx)(n.M2C,{}),link:null},{customClass:"text-dark",content:(0,r.jsx)(c.jCV,{}),link:null},{customClass:"text-dark",content:(0,r.jsx)(d.NSh,{}),link:"https://github.com/Glem2003/blog-demo"}];var h=s(4511),x=s(1072),f=s(8602),p=s(2327);const u=()=>(0,r.jsx)("footer",{children:(0,r.jsx)(o.A,{children:(0,r.jsxs)(x.A,{children:[(0,r.jsx)(f.A,{children:(0,r.jsx)("div",{className:"footer__text",children:h.z8.footer.text})}),(0,r.jsx)(f.A,{children:(0,r.jsx)(p.A,{direction:"horizontal",className:"justify-content-end",children:m.map((e=>{const{customClass:t,content:s,link:a}=e;return(0,r.jsx)("a",{href:null!=a?a:"/#!",children:(0,r.jsx)("div",{className:"footer__icon ".concat(null!==t?t:""),children:s})})}))})})]})})}),b=e=>{const{children:t}=e;return(0,r.jsxs)(r.Fragment,{children:[(0,r.jsx)(i,{}),t,(0,r.jsx)(u,{})]})}},4511:(e,t,s)=>{s.d(t,{NL:()=>a,z8:()=>l,xr:()=>o});const a=JSON.parse('{"Hero_Section":{"Section_title":"Welcome to Blog Demo","Section_subtitle":"Sharing insights, stories, and ideas with the world."},"Our_Story":{"title":"Our Story","text":"Blog Demo is a platform dedicated to sharing high-quality content, whether it is technology sharing, daily life or professional insights. Our goal is to provide inspiration and value to readers."},"Our_Mission":{"title":"Our Mission","content":["Create an open and interesting content platform.","Promote the sharing and exchange of knowledge.","Support community members to learn and grow from each other."]},"Join_Us":{"title":"Join Us","text":"If you are interested in sharing content, please contact us and become one of the Blog Demo authors!"}}'),l=JSON.parse('{"footer":{"text":"Glem Copyright \xa9 2024."}}'),o=JSON.parse('{"Hero_Section":{"title":"Welcome to Blog Demo","subtitle":"Explore the world of ideas and knowledge.","button_text":"Get Started"},"Latest_Posts":{"title":"Latest Posts"},"Categories":{"title":"Categories"},"About_Us":{"title":"About Us","text":"Discover the story behind Blog Demo."},"Contact_Us":{"title":"Contact Us","button_text":"Reach Out Today!"}}')},1503:(e,t,s)=>{s.r(t),s.d(t,{default:()=>me});var a=s(5917),l=s(2555),o=s(8628),r=s(45),i=s(8139),n=s.n(i),c=s(5173),d=s.n(c),m=s(5043),h=s(579);const x=["as","className","type","tooltip"],f={type:d().string,tooltip:d().bool,as:d().elementType},p=m.forwardRef(((e,t)=>{let{as:s="div",className:a,type:o="valid",tooltip:i=!1}=e,c=(0,r.A)(e,x);return(0,h.jsx)(s,(0,l.A)((0,l.A)({},c),{},{ref:t,className:n()(a,"".concat(o,"-").concat(i?"tooltip":"feedback"))}))}));p.displayName="Feedback",p.propTypes=f;const u=p,b=m.createContext({});var A=s(7852);const N=["id","bsPrefix","className","type","isValid","isInvalid","as"],y=m.forwardRef(((e,t)=>{let{id:s,bsPrefix:a,className:o,type:i="checkbox",isValid:c=!1,isInvalid:d=!1,as:x="input"}=e,f=(0,r.A)(e,N);const{controlId:p}=(0,m.useContext)(b);return a=(0,A.oU)(a,"form-check-input"),(0,h.jsx)(x,(0,l.A)((0,l.A)({},f),{},{ref:t,type:i,id:s||p,className:n()(o,a,c&&"is-valid",d&&"is-invalid")}))}));y.displayName="FormCheckInput";const j=y,g=["bsPrefix","className","htmlFor"],v=m.forwardRef(((e,t)=>{let{bsPrefix:s,className:a,htmlFor:o}=e,i=(0,r.A)(e,g);const{controlId:c}=(0,m.useContext)(b);return s=(0,A.oU)(s,"form-check-label"),(0,h.jsx)("label",(0,l.A)((0,l.A)({},i),{},{ref:t,htmlFor:o||c,className:n()(a,s)}))}));v.displayName="FormCheckLabel";const k=v;const w=["id","bsPrefix","bsSwitchPrefix","inline","reverse","disabled","isValid","isInvalid","feedbackTooltip","feedback","feedbackType","className","style","title","type","label","children","as"],I=m.forwardRef(((e,t)=>{let{id:s,bsPrefix:a,bsSwitchPrefix:o,inline:i=!1,reverse:c=!1,disabled:d=!1,isValid:x=!1,isInvalid:f=!1,feedbackTooltip:p=!1,feedback:N,feedbackType:y,className:g,style:v,title:I="",type:C="checkbox",label:P,children:F,as:S="input"}=e,_=(0,r.A)(e,w);a=(0,A.oU)(a,"form-check"),o=(0,A.oU)(o,"form-switch");const{controlId:U}=(0,m.useContext)(b),R=(0,m.useMemo)((()=>({controlId:s||U})),[U,s]),O=!F&&null!=P&&!1!==P||function(e,t){return m.Children.toArray(e).some((e=>m.isValidElement(e)&&e.type===t))}(F,k),L=(0,h.jsx)(j,(0,l.A)((0,l.A)({},_),{},{type:"switch"===C?"checkbox":C,ref:t,isValid:x,isInvalid:f,disabled:d,as:S}));return(0,h.jsx)(b.Provider,{value:R,children:(0,h.jsx)("div",{style:v,className:n()(g,O&&a,i&&"".concat(a,"-inline"),c&&"".concat(a,"-reverse"),"switch"===C&&o),children:F||(0,h.jsxs)(h.Fragment,{children:[L,O&&(0,h.jsx)(k,{title:I,children:P}),N&&(0,h.jsx)(u,{type:y,tooltip:p,children:N})]})})})}));I.displayName="FormCheck";const C=Object.assign(I,{Input:j,Label:k});s(6440);const P=["bsPrefix","type","size","htmlSize","id","className","isValid","isInvalid","plaintext","readOnly","as"],F=m.forwardRef(((e,t)=>{let{bsPrefix:s,type:a,size:o,htmlSize:i,id:c,className:d,isValid:x=!1,isInvalid:f=!1,plaintext:p,readOnly:u,as:N="input"}=e,y=(0,r.A)(e,P);const{controlId:j}=(0,m.useContext)(b);return s=(0,A.oU)(s,"form-control"),(0,h.jsx)(N,(0,l.A)((0,l.A)({},y),{},{type:a,size:i,ref:t,readOnly:u,id:c||j,className:n()(d,p?"".concat(s,"-plaintext"):s,o&&"".concat(s,"-").concat(o),"color"===a&&"".concat(s,"-color"),x&&"is-valid",f&&"is-invalid")}))}));F.displayName="FormControl";const S=Object.assign(F,{Feedback:u}),_=["className","bsPrefix","as"],U=m.forwardRef(((e,t)=>{let{className:s,bsPrefix:a,as:o="div"}=e,i=(0,r.A)(e,_);return a=(0,A.oU)(a,"form-floating"),(0,h.jsx)(o,(0,l.A)({ref:t,className:n()(s,a)},i))}));U.displayName="FormFloating";const R=U,O=["controlId","as"],L=m.forwardRef(((e,t)=>{let{controlId:s,as:a="div"}=e,o=(0,r.A)(e,O);const i=(0,m.useMemo)((()=>({controlId:s})),[s]);return(0,h.jsx)(b.Provider,{value:i,children:(0,h.jsx)(a,(0,l.A)((0,l.A)({},o),{},{ref:t}))})}));L.displayName="FormGroup";const T=L;var z=s(8602);const V=["as","bsPrefix","column","visuallyHidden","className","htmlFor"],B=m.forwardRef(((e,t)=>{let{as:s="label",bsPrefix:a,column:o=!1,visuallyHidden:i=!1,className:c,htmlFor:d}=e,x=(0,r.A)(e,V);const{controlId:f}=(0,m.useContext)(b);a=(0,A.oU)(a,"form-label");let p="col-form-label";"string"===typeof o&&(p="".concat(p," ").concat(p,"-").concat(o));const u=n()(c,a,i&&"visually-hidden",o&&p);return d=d||f,o?(0,h.jsx)(z.A,(0,l.A)({ref:t,as:"label",className:u,htmlFor:d},x)):(0,h.jsx)(s,(0,l.A)({ref:t,className:u,htmlFor:d},x))}));B.displayName="FormLabel";const E=B,G=["bsPrefix","className","id"],M=m.forwardRef(((e,t)=>{let{bsPrefix:s,className:a,id:o}=e,i=(0,r.A)(e,G);const{controlId:c}=(0,m.useContext)(b);return s=(0,A.oU)(s,"form-range"),(0,h.jsx)("input",(0,l.A)((0,l.A)({},i),{},{type:"range",ref:t,className:n()(a,s),id:o||c}))}));M.displayName="FormRange";const D=M,H=["bsPrefix","size","htmlSize","className","isValid","isInvalid","id"],J=m.forwardRef(((e,t)=>{let{bsPrefix:s,size:a,htmlSize:o,className:i,isValid:c=!1,isInvalid:d=!1,id:x}=e,f=(0,r.A)(e,H);const{controlId:p}=(0,m.useContext)(b);return s=(0,A.oU)(s,"form-select"),(0,h.jsx)("select",(0,l.A)((0,l.A)({},f),{},{size:o,ref:t,className:n()(i,s,a&&"".concat(s,"-").concat(a),c&&"is-valid",d&&"is-invalid"),id:x||p}))}));J.displayName="FormSelect";const q=J,W=["bsPrefix","className","as","muted"],K=m.forwardRef(((e,t)=>{let{bsPrefix:s,className:a,as:o="small",muted:i}=e,c=(0,r.A)(e,W);return s=(0,A.oU)(s,"form-text"),(0,h.jsx)(o,(0,l.A)((0,l.A)({},c),{},{ref:t,className:n()(a,s,i&&"text-muted")}))}));K.displayName="FormText";const Q=K,X=m.forwardRef(((e,t)=>(0,h.jsx)(C,(0,l.A)((0,l.A)({},e),{},{ref:t,type:"switch"}))));X.displayName="Switch";const Y=Object.assign(X,{Input:C.Input,Label:C.Label}),Z=["bsPrefix","className","children","controlId","label"],$=m.forwardRef(((e,t)=>{let{bsPrefix:s,className:a,children:o,controlId:i,label:c}=e,d=(0,r.A)(e,Z);return s=(0,A.oU)(s,"form-floating"),(0,h.jsxs)(T,(0,l.A)((0,l.A)({ref:t,className:n()(a,s),controlId:i},d),{},{children:[o,(0,h.jsx)("label",{htmlFor:i,children:c})]}))}));$.displayName="FloatingLabel";const ee=$,te=["className","validated","as"],se={_ref:d().any,validated:d().bool,as:d().elementType},ae=m.forwardRef(((e,t)=>{let{className:s,validated:a,as:o="form"}=e,i=(0,r.A)(e,te);return(0,h.jsx)(o,(0,l.A)((0,l.A)({},i),{},{ref:t,className:n()(s,a&&"was-validated")}))}));ae.displayName="Form",ae.propTypes=se;const le=Object.assign(ae,{Group:T,Control:S,Floating:R,Check:C,Switch:Y,Label:E,Text:Q,Range:D,Select:q,FloatingLabel:ee});var oe=s(4282);const re=e=>{const{controlId:t,label:s,type:a,placeholder:l}=e;return(0,h.jsxs)(le.Group,{className:"mb-3",controlId:t,children:[(0,h.jsx)(le.Label,{children:s}),(0,h.jsx)(le.Control,{type:a,placeholder:l})]})},ie=[{controlId:"name",label:"Name",type:"text",placeholder:"Enter Name"},{controlId:"email",label:"Email",type:"email",placeholder:"Enter Email"},{controlId:"tel",label:"Phone Number",type:"tel",placeholder:"Enter Tel"},{controlId:"message",label:"Other Message",type:"textarea",placeholder:"Enter Message"}],ne=()=>(0,h.jsx)(o.A,{className:"p-4 shadow",children:(0,h.jsxs)(o.A.Body,{children:[(0,h.jsx)(o.A.Title,{className:"text-center",children:"Contact Us"}),(0,h.jsx)(o.A.Text,{className:"text-center",children:"If you have any questions, let us know by filling out the form below!"}),(0,h.jsxs)(le,{children:[ie.map(((e,t)=>(0,h.jsx)(re,(0,l.A)({},e),t))),(0,h.jsx)(oe.A,{type:"submit",className:"w-100 mt-3",variant:"primary",children:"Submit"})]})]})});var ce=s(3519),de=s(1072);const me=()=>(0,h.jsxs)(a.A,{children:[(0,h.jsx)("h3",{className:"text-center",children:"Get in Touch"}),(0,h.jsx)(ce.A,{className:"my-5",children:(0,h.jsx)(de.A,{className:"justify-content-center",children:(0,h.jsx)(z.A,{md:8,children:(0,h.jsx)(ne,{})})})})]})},4282:(e,t,s)=>{s.d(t,{A:()=>x});var a=s(2555),l=s(45),o=s(8139),r=s.n(o),i=s(5043),n=s(4140),c=s(7852),d=s(579);const m=["as","bsPrefix","variant","size","active","disabled","className"],h=i.forwardRef(((e,t)=>{let{as:s,bsPrefix:o,variant:i="primary",size:h,active:x=!1,disabled:f=!1,className:p}=e,u=(0,l.A)(e,m);const b=(0,c.oU)(o,"btn"),[A,{tagName:N}]=(0,n.Am)((0,a.A)({tagName:s,disabled:f},u)),y=N;return(0,d.jsx)(y,(0,a.A)((0,a.A)((0,a.A)({},A),u),{},{ref:t,disabled:f,className:r()(p,b,x&&"active",i&&"".concat(b,"-").concat(i),h&&"".concat(b,"-").concat(h),u.href&&f&&"disabled")}))}));h.displayName="Button";const x=h},6440:e=>{var t=function(){};e.exports=t}}]);
//# sourceMappingURL=503.74040ebb.chunk.js.map