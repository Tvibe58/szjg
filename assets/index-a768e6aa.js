import{j as Ce,f as je,k as st,V as at,l as qe,m as ee,n as it,F as de,N as ze,C as ct,L as ut,W as dt,o as ft,p as mt}from"./roundedArrow-0c260621.js";import{c as l,G as pt,o as gt,y as xe,v as Be,x as Y,C as ae,l as Q,A as Ge,Y as ve,k as X,N as ht,aR as bt,av as yt,ah as $t,an as Ct,aS as xt,W as vt,aT as St,ae as wt,w as Fe,ai as Ot,a0 as It,at as Me,aU as Et,s as ke,ac as jt,a4 as Ft,a2 as Mt,a3 as Nt,aC as Pt,q as Rt,E as _t,H as Tt,ar as Lt,ao as Vt,aB as Wt}from"./index-31bd6e39.js";import{g as Ht,z as Xe,T as At}from"./gapSize-e190580d.js";import{u as Dt,r as fe}from"./index-129f8e73.js";import{u as qt}from"./index-d0e68813.js";var zt={icon:{tag:"svg",attrs:{viewBox:"64 64 896 896",focusable:"false"},children:[{tag:"path",attrs:{d:"M512 64C264.6 64 64 264.6 64 512s200.6 448 448 448 448-200.6 448-448S759.4 64 512 64zm0 820c-205.4 0-372-166.6-372-372s166.6-372 372-372 372 166.6 372 372-166.6 372-372 372z"}},{tag:"path",attrs:{d:"M623.6 316.7C593.6 290.4 554 276 512 276s-81.6 14.5-111.6 40.7C369.2 344 352 380.7 352 420v7.6c0 4.4 3.6 8 8 8h48c4.4 0 8-3.6 8-8V420c0-44.1 43.1-80 96-80s96 35.9 96 80c0 31.1-22 59.6-56.1 72.7-21.2 8.1-39.2 22.3-52.1 40.9-13.1 19-19.9 41.8-19.9 64.9V620c0 4.4 3.6 8 8 8h48c4.4 0 8-3.6 8-8v-22.7a48.3 48.3 0 0130.9-44.8c59-22.7 97.1-74.7 97.1-132.5.1-39.3-17.1-76-48.3-103.3zM472 732a40 40 0 1080 0 40 40 0 10-80 0z"}}]},name:"question-circle",theme:"outlined"};const Bt=zt;var Gt=function(t,r){return l.createElement(pt,gt({},t,{ref:r,icon:Bt}))},kt=l.forwardRef(Gt);const Xt=kt,Ne=e=>typeof e=="object"&&e!=null&&e.nodeType===1,Pe=(e,t)=>(!t||e!=="hidden")&&e!=="visible"&&e!=="clip",be=(e,t)=>{if(e.clientHeight<e.scrollHeight||e.clientWidth<e.scrollWidth){const r=getComputedStyle(e,null);return Pe(r.overflowY,t)||Pe(r.overflowX,t)||(n=>{const o=(s=>{if(!s.ownerDocument||!s.ownerDocument.defaultView)return null;try{return s.ownerDocument.defaultView.frameElement}catch{return null}})(n);return!!o&&(o.clientHeight<n.scrollHeight||o.clientWidth<n.scrollWidth)})(e)}return!1},ue=(e,t,r,n,o,s,a,d)=>s<e&&a>t||s>e&&a<t?0:s<=e&&d<=r||a>=t&&d>=r?s-e-n:a>t&&d<r||s<e&&d>r?a-t+o:0,Kt=e=>{const t=e.parentElement;return t??(e.getRootNode().host||null)},Re=(e,t)=>{var r,n,o,s;if(typeof document>"u")return[];const{scrollMode:a,block:d,inline:u,boundary:p,skipOverflowHiddenElements:w}=t,y=typeof p=="function"?p:V=>V!==p;if(!Ne(e))throw new TypeError("Invalid target");const I=document.scrollingElement||document.documentElement,M=[];let v=e;for(;Ne(v)&&y(v);){if(v=Kt(v),v===I){M.push(v);break}v!=null&&v===document.body&&be(v)&&!be(document.documentElement)||v!=null&&be(v,w)&&M.push(v)}const S=(n=(r=window.visualViewport)==null?void 0:r.width)!=null?n:innerWidth,O=(s=(o=window.visualViewport)==null?void 0:o.height)!=null?s:innerHeight,{scrollX:f,scrollY:j}=window,{height:i,width:h,top:g,right:b,bottom:R,left:x}=e.getBoundingClientRect();let m=d==="start"||d==="nearest"?g:d==="end"?R:g+i/2,c=u==="center"?x+h/2:u==="end"?b:x;const F=[];for(let V=0;V<M.length;V++){const $=M[V],{height:N,width:_,top:q,right:P,bottom:H,left:E}=$.getBoundingClientRect();if(a==="if-needed"&&g>=0&&x>=0&&R<=O&&b<=S&&g>=q&&R<=H&&x>=E&&b<=P)return F;const z=getComputedStyle($),W=parseInt(z.borderLeftWidth,10),D=parseInt(z.borderTopWidth,10),U=parseInt(z.borderRightWidth,10),Z=parseInt(z.borderBottomWidth,10);let G=0,B=0;const C="offsetWidth"in $?$.offsetWidth-$.clientWidth-W-U:0,T="offsetHeight"in $?$.offsetHeight-$.clientHeight-D-Z:0,L="offsetWidth"in $?$.offsetWidth===0?0:_/$.offsetWidth:0,k="offsetHeight"in $?$.offsetHeight===0?0:N/$.offsetHeight:0;if(I===$)G=d==="start"?m:d==="end"?m-O:d==="nearest"?ue(j,j+O,O,D,Z,j+m,j+m+i,i):m-O/2,B=u==="start"?c:u==="center"?c-S/2:u==="end"?c-S:ue(f,f+S,S,W,U,f+c,f+c+h,h),G=Math.max(0,G+j),B=Math.max(0,B+f);else{G=d==="start"?m-q-D:d==="end"?m-H+Z+T:d==="nearest"?ue(q,H,N,D,Z+T,m,m+i,i):m-(q+N/2)+T/2,B=u==="start"?c-E-W:u==="center"?c-(E+_/2)+C/2:u==="end"?c-P+U+C:ue(E,P,_,W,U+C,c,c+h,h);const{scrollLeft:J,scrollTop:ne}=$;G=Math.max(0,Math.min(ne+G/k,$.scrollHeight-N/k+T)),B=Math.max(0,Math.min(J+B/L,$.scrollWidth-_/L+C)),m+=ne-G,c+=J-B}F.push({el:$,top:G,left:B})}return F},Yt=e=>e===!1?{block:"end",inline:"nearest"}:(t=>t===Object(t)&&Object.keys(t).length!==0)(e)?e:{block:"start",inline:"nearest"};function Qt(e,t){if(!e.isConnected||!(o=>{let s=o;for(;s&&s.parentNode;){if(s.parentNode===document)return!0;s=s.parentNode instanceof ShadowRoot?s.parentNode.host:s.parentNode}return!1})(e))return;const r=(o=>{const s=window.getComputedStyle(o);return{top:parseFloat(s.scrollMarginTop)||0,right:parseFloat(s.scrollMarginRight)||0,bottom:parseFloat(s.scrollMarginBottom)||0,left:parseFloat(s.scrollMarginLeft)||0}})(e);if((o=>typeof o=="object"&&typeof o.behavior=="function")(t))return t.behavior(Re(e,t));const n=typeof t=="boolean"||t==null?void 0:t.behavior;for(const{el:o,top:s,left:a}of Re(e,Yt(t))){const d=s-r.top+r.bottom,u=a-r.left+r.right;o.scroll({top:d,left:u,behavior:n})}}const Ut=l.createContext({}),Ke=Ut,Jt=e=>{const{componentCls:t}=e;return{[t]:{display:"flex",flexFlow:"row wrap",minWidth:0,"&::before, &::after":{display:"flex"},"&-no-wrap":{flexWrap:"nowrap"},"&-start":{justifyContent:"flex-start"},"&-center":{justifyContent:"center"},"&-end":{justifyContent:"flex-end"},"&-space-between":{justifyContent:"space-between"},"&-space-around":{justifyContent:"space-around"},"&-space-evenly":{justifyContent:"space-evenly"},"&-top":{alignItems:"flex-start"},"&-middle":{alignItems:"center"},"&-bottom":{alignItems:"flex-end"}}}},Zt=e=>{const{componentCls:t}=e;return{[t]:{position:"relative",maxWidth:"100%",minHeight:1}}},en=(e,t)=>{const{prefixCls:r,componentCls:n,gridColumns:o}=e,s={};for(let a=o;a>=0;a--)a===0?(s[`${n}${t}-${a}`]={display:"none"},s[`${n}-push-${a}`]={insetInlineStart:"auto"},s[`${n}-pull-${a}`]={insetInlineEnd:"auto"},s[`${n}${t}-push-${a}`]={insetInlineStart:"auto"},s[`${n}${t}-pull-${a}`]={insetInlineEnd:"auto"},s[`${n}${t}-offset-${a}`]={marginInlineStart:0},s[`${n}${t}-order-${a}`]={order:0}):(s[`${n}${t}-${a}`]=[{"--ant-display":"block",display:"block"},{display:"var(--ant-display)",flex:`0 0 ${a/o*100}%`,maxWidth:`${a/o*100}%`}],s[`${n}${t}-push-${a}`]={insetInlineStart:`${a/o*100}%`},s[`${n}${t}-pull-${a}`]={insetInlineEnd:`${a/o*100}%`},s[`${n}${t}-offset-${a}`]={marginInlineStart:`${a/o*100}%`},s[`${n}${t}-order-${a}`]={order:a});return s[`${n}${t}-flex`]={flex:`var(--${r}${t}-flex)`},s},$e=(e,t)=>en(e,t),tn=(e,t,r)=>({[`@media (min-width: ${Y(t)})`]:Object.assign({},$e(e,r))}),nn=()=>({}),rn=()=>({}),on=xe("Grid",Jt,nn),ln=xe("Grid",e=>{const t=Be(e,{gridColumns:24}),r={"-sm":t.screenSMMin,"-md":t.screenMDMin,"-lg":t.screenLGMin,"-xl":t.screenXLMin,"-xxl":t.screenXXLMin};return[Zt(t),$e(t,""),$e(t,"-xs"),Object.keys(r).map(n=>tn(t,r[n],n)).reduce((n,o)=>Object.assign(Object.assign({},n),o),{})]},rn);var sn=globalThis&&globalThis.__rest||function(e,t){var r={};for(var n in e)Object.prototype.hasOwnProperty.call(e,n)&&t.indexOf(n)<0&&(r[n]=e[n]);if(e!=null&&typeof Object.getOwnPropertySymbols=="function")for(var o=0,n=Object.getOwnPropertySymbols(e);o<n.length;o++)t.indexOf(n[o])<0&&Object.prototype.propertyIsEnumerable.call(e,n[o])&&(r[n[o]]=e[n[o]]);return r};function _e(e){return typeof e=="number"?`${e} ${e} auto`:/^\d+(\.\d+)?(px|em|rem|%)$/.test(e)?`0 0 ${e}`:e}const an=["xs","sm","md","lg","xl","xxl"],cn=l.forwardRef((e,t)=>{const{getPrefixCls:r,direction:n}=l.useContext(ae),{gutter:o,wrap:s}=l.useContext(Ke),{prefixCls:a,span:d,order:u,offset:p,push:w,pull:y,className:I,children:M,flex:v,style:S}=e,O=sn(e,["prefixCls","span","order","offset","push","pull","className","children","flex","style"]),f=r("col",a),[j,i,h]=ln(f),g={};let b={};an.forEach(m=>{let c={};const F=e[m];typeof F=="number"?c.span=F:typeof F=="object"&&(c=F||{}),delete O[m],b=Object.assign(Object.assign({},b),{[`${f}-${m}-${c.span}`]:c.span!==void 0,[`${f}-${m}-order-${c.order}`]:c.order||c.order===0,[`${f}-${m}-offset-${c.offset}`]:c.offset||c.offset===0,[`${f}-${m}-push-${c.push}`]:c.push||c.push===0,[`${f}-${m}-pull-${c.pull}`]:c.pull||c.pull===0,[`${f}-rtl`]:n==="rtl"}),c.flex&&(b[`${f}-${m}-flex`]=!0,g[`--${f}-${m}-flex`]=_e(c.flex))});const R=Q(f,{[`${f}-${d}`]:d!==void 0,[`${f}-order-${u}`]:u,[`${f}-offset-${p}`]:p,[`${f}-push-${w}`]:w,[`${f}-pull-${y}`]:y},I,b,i,h),x={};if(o&&o[0]>0){const m=o[0]/2;x.paddingLeft=m,x.paddingRight=m}return v&&(x.flex=_e(v),s===!1&&!x.minWidth&&(x.minWidth=0)),j(l.createElement("div",Object.assign({},O,{style:Object.assign(Object.assign(Object.assign({},x),S),g),className:R,ref:t}),M))}),Ye=cn;var un=globalThis&&globalThis.__rest||function(e,t){var r={};for(var n in e)Object.prototype.hasOwnProperty.call(e,n)&&t.indexOf(n)<0&&(r[n]=e[n]);if(e!=null&&typeof Object.getOwnPropertySymbols=="function")for(var o=0,n=Object.getOwnPropertySymbols(e);o<n.length;o++)t.indexOf(n[o])<0&&Object.prototype.propertyIsEnumerable.call(e,n[o])&&(r[n[o]]=e[n[o]]);return r};function Te(e,t){const[r,n]=l.useState(typeof e=="string"?e:""),o=()=>{if(typeof e=="string"&&n(e),typeof e=="object")for(let s=0;s<fe.length;s++){const a=fe[s];if(!t[a])continue;const d=e[a];if(d!==void 0){n(d);return}}};return l.useEffect(()=>{o()},[JSON.stringify(e),t]),r}const dn=l.forwardRef((e,t)=>{const{prefixCls:r,justify:n,align:o,className:s,style:a,children:d,gutter:u=0,wrap:p}=e,w=un(e,["prefixCls","justify","align","className","style","children","gutter","wrap"]),{getPrefixCls:y,direction:I}=l.useContext(ae),[M,v]=l.useState({xs:!0,sm:!0,md:!0,lg:!0,xl:!0,xxl:!0}),[S,O]=l.useState({xs:!1,sm:!1,md:!1,lg:!1,xl:!1,xxl:!1}),f=Te(o,S),j=Te(n,S),i=l.useRef(u),h=Dt();l.useEffect(()=>{const P=h.subscribe(H=>{O(H);const E=i.current||0;(!Array.isArray(E)&&typeof E=="object"||Array.isArray(E)&&(typeof E[0]=="object"||typeof E[1]=="object"))&&v(H)});return()=>h.unsubscribe(P)},[]);const g=()=>{const P=[void 0,void 0];return(Array.isArray(u)?u:[u,void 0]).forEach((E,z)=>{if(typeof E=="object")for(let W=0;W<fe.length;W++){const D=fe[W];if(M[D]&&E[D]!==void 0){P[z]=E[D];break}}else P[z]=E}),P},b=y("row",r),[R,x,m]=on(b),c=g(),F=Q(b,{[`${b}-no-wrap`]:p===!1,[`${b}-${j}`]:j,[`${b}-${f}`]:f,[`${b}-rtl`]:I==="rtl"},s,x,m),V={},$=c[0]!=null&&c[0]>0?c[0]/-2:void 0;$&&(V.marginLeft=$,V.marginRight=$);const[N,_]=c;V.rowGap=_;const q=l.useMemo(()=>({gutter:[N,_],wrap:p}),[N,_,p]);return R(l.createElement(Ke.Provider,{value:q},l.createElement("div",Object.assign({},w,{className:F,style:Object.assign(Object.assign({},V),a),ref:t}),d)))}),fn=dn;function me(e){const[t,r]=l.useState(e);return l.useEffect(()=>{const n=setTimeout(()=>{r(e)},e.length?0:10);return()=>{clearTimeout(n)}},[e]),t}const mn=e=>{const{componentCls:t}=e,r=`${t}-show-help`,n=`${t}-show-help-item`;return{[r]:{transition:`opacity ${e.motionDurationFast} ${e.motionEaseInOut}`,"&-appear, &-enter":{opacity:0,"&-active":{opacity:1}},"&-leave":{opacity:1,"&-active":{opacity:0}},[n]:{overflow:"hidden",transition:`height ${e.motionDurationFast} ${e.motionEaseInOut},
                     opacity ${e.motionDurationFast} ${e.motionEaseInOut},
                     transform ${e.motionDurationFast} ${e.motionEaseInOut} !important`,[`&${n}-appear, &${n}-enter`]:{transform:"translateY(-5px)",opacity:0,"&-active":{transform:"translateY(0)",opacity:1}},[`&${n}-leave-active`]:{transform:"translateY(-5px)"}}}}},pn=mn,gn=e=>({legend:{display:"block",width:"100%",marginBottom:e.marginLG,padding:0,color:e.colorTextDescription,fontSize:e.fontSizeLG,lineHeight:"inherit",border:0,borderBottom:`${Y(e.lineWidth)} ${e.lineType} ${e.colorBorder}`},'input[type="search"]':{boxSizing:"border-box"},'input[type="radio"], input[type="checkbox"]':{lineHeight:"normal"},'input[type="file"]':{display:"block"},'input[type="range"]':{display:"block",width:"100%"},"select[multiple], select[size]":{height:"auto"},"input[type='file']:focus,\n  input[type='radio']:focus,\n  input[type='checkbox']:focus":{outline:0,boxShadow:`0 0 0 ${Y(e.controlOutlineWidth)} ${e.controlOutline}`},output:{display:"block",paddingTop:15,color:e.colorText,fontSize:e.fontSize,lineHeight:e.lineHeight}}),Le=(e,t)=>{const{formItemCls:r}=e;return{[r]:{[`${r}-label > label`]:{height:t},[`${r}-control-input`]:{minHeight:t}}}},hn=e=>{const{componentCls:t}=e;return{[e.componentCls]:Object.assign(Object.assign(Object.assign({},Ge(e)),gn(e)),{[`${t}-text`]:{display:"inline-block",paddingInlineEnd:e.paddingSM},"&-small":Object.assign({},Le(e,e.controlHeightSM)),"&-large":Object.assign({},Le(e,e.controlHeightLG))})}},bn=e=>{const{formItemCls:t,iconCls:r,componentCls:n,rootPrefixCls:o,antCls:s,labelRequiredMarkColor:a,labelColor:d,labelFontSize:u,labelHeight:p,labelColonMarginInlineStart:w,labelColonMarginInlineEnd:y,itemMarginBottom:I}=e;return{[t]:Object.assign(Object.assign({},Ge(e)),{marginBottom:I,verticalAlign:"top","&-with-help":{transition:"none"},[`&-hidden,
        &-hidden${s}-row`]:{display:"none"},"&-has-warning":{[`${t}-split`]:{color:e.colorError}},"&-has-error":{[`${t}-split`]:{color:e.colorWarning}},[`${t}-label`]:{flexGrow:0,overflow:"hidden",whiteSpace:"nowrap",textAlign:"end",verticalAlign:"middle","&-left":{textAlign:"start"},"&-wrap":{overflow:"unset",lineHeight:e.lineHeight,whiteSpace:"unset"},"> label":{position:"relative",display:"inline-flex",alignItems:"center",maxWidth:"100%",height:p,color:d,fontSize:u,[`> ${r}`]:{fontSize:e.fontSize,verticalAlign:"top"},[`&${t}-required:not(${t}-required-mark-optional)::before`]:{display:"inline-block",marginInlineEnd:e.marginXXS,color:a,fontSize:e.fontSize,fontFamily:"SimSun, sans-serif",lineHeight:1,content:'"*"',[`${n}-hide-required-mark &`]:{display:"none"}},[`${t}-optional`]:{display:"inline-block",marginInlineStart:e.marginXXS,color:e.colorTextDescription,[`${n}-hide-required-mark &`]:{display:"none"}},[`${t}-tooltip`]:{color:e.colorTextDescription,cursor:"help",writingMode:"horizontal-tb",marginInlineStart:e.marginXXS},"&::after":{content:'":"',position:"relative",marginBlock:0,marginInlineStart:w,marginInlineEnd:y},[`&${t}-no-colon::after`]:{content:'"\\a0"'}}},[`${t}-control`]:{"--ant-display":"flex",flexDirection:"column",flexGrow:1,[`&:first-child:not([class^="'${o}-col-'"]):not([class*="' ${o}-col-'"])`]:{width:"100%"},"&-input":{position:"relative",display:"flex",alignItems:"center",minHeight:e.controlHeight,"&-content":{flex:"auto",maxWidth:"100%"}}},[t]:{"&-additional":{display:"flex",flexDirection:"column"},"&-explain, &-extra":{clear:"both",color:e.colorTextDescription,fontSize:e.fontSize,lineHeight:e.lineHeight},"&-explain-connected":{width:"100%"},"&-extra":{minHeight:e.controlHeightSM,transition:`color ${e.motionDurationMid} ${e.motionEaseOut}`},"&-explain":{"&-error":{color:e.colorError},"&-warning":{color:e.colorWarning}}},[`&-with-help ${t}-explain`]:{height:"auto",opacity:1},[`${t}-feedback-icon`]:{fontSize:e.fontSize,textAlign:"center",visibility:"visible",animationName:Xe,animationDuration:e.motionDurationMid,animationTimingFunction:e.motionEaseOutBack,pointerEvents:"none","&-success":{color:e.colorSuccess},"&-error":{color:e.colorError},"&-warning":{color:e.colorWarning},"&-validating":{color:e.colorPrimary}}})}},Ve=(e,t)=>{const{formItemCls:r}=e;return{[`${t}-horizontal`]:{[`${r}-label`]:{flexGrow:0},[`${r}-control`]:{flex:"1 1 0",minWidth:0},[`${r}-label[class$='-24'], ${r}-label[class*='-24 ']`]:{[`& + ${r}-control`]:{minWidth:"unset"}}}}},yn=e=>{const{componentCls:t,formItemCls:r,inlineItemMarginBottom:n}=e;return{[`${t}-inline`]:{display:"flex",flexWrap:"wrap",[r]:{flex:"none",marginInlineEnd:e.margin,marginBottom:n,"&-row":{flexWrap:"nowrap"},[`> ${r}-label,
        > ${r}-control`]:{display:"inline-block",verticalAlign:"top"},[`> ${r}-label`]:{flex:"none"},[`${t}-text`]:{display:"inline-block"},[`${r}-has-feedback`]:{display:"inline-block"}}}}},K=e=>({padding:e.verticalLabelPadding,margin:e.verticalLabelMargin,whiteSpace:"initial",textAlign:"start","> label":{margin:0,"&::after":{visibility:"hidden"}}}),Qe=e=>{const{componentCls:t,formItemCls:r,rootPrefixCls:n}=e;return{[`${r} ${r}-label`]:K(e),[`${t}:not(${t}-inline)`]:{[r]:{flexWrap:"wrap",[`${r}-label, ${r}-control`]:{[`&:not([class*=" ${n}-col-xs"])`]:{flex:"0 0 100%",maxWidth:"100%"}}}}}},$n=e=>{const{componentCls:t,formItemCls:r,antCls:n}=e;return{[`${t}-vertical`]:{[`${r}:not(${r}-horizontal)`]:{[`${r}-row`]:{flexDirection:"column"},[`${r}-label > label`]:{height:"auto"},[`${r}-control`]:{width:"100%"},[`${r}-label,
        ${n}-col-24${r}-label,
        ${n}-col-xl-24${r}-label`]:K(e)}},[`@media (max-width: ${Y(e.screenXSMax)})`]:[Qe(e),{[t]:{[`${r}:not(${r}-horizontal)`]:{[`${n}-col-xs-24${r}-label`]:K(e)}}}],[`@media (max-width: ${Y(e.screenSMMax)})`]:{[t]:{[`${r}:not(${r}-horizontal)`]:{[`${n}-col-sm-24${r}-label`]:K(e)}}},[`@media (max-width: ${Y(e.screenMDMax)})`]:{[t]:{[`${r}:not(${r}-horizontal)`]:{[`${n}-col-md-24${r}-label`]:K(e)}}},[`@media (max-width: ${Y(e.screenLGMax)})`]:{[t]:{[`${r}:not(${r}-horizontal)`]:{[`${n}-col-lg-24${r}-label`]:K(e)}}}}},Cn=e=>{const{formItemCls:t,antCls:r}=e;return{[`${t}-vertical`]:{[`${t}-row`]:{flexDirection:"column"},[`${t}-label > label`]:{height:"auto"},[`${t}-control`]:{width:"100%"}},[`${t}-vertical ${t}-label,
      ${r}-col-24${t}-label,
      ${r}-col-xl-24${t}-label`]:K(e),[`@media (max-width: ${Y(e.screenXSMax)})`]:[Qe(e),{[t]:{[`${r}-col-xs-24${t}-label`]:K(e)}}],[`@media (max-width: ${Y(e.screenSMMax)})`]:{[t]:{[`${r}-col-sm-24${t}-label`]:K(e)}},[`@media (max-width: ${Y(e.screenMDMax)})`]:{[t]:{[`${r}-col-md-24${t}-label`]:K(e)}},[`@media (max-width: ${Y(e.screenLGMax)})`]:{[t]:{[`${r}-col-lg-24${t}-label`]:K(e)}}}},xn=e=>({labelRequiredMarkColor:e.colorError,labelColor:e.colorTextHeading,labelFontSize:e.fontSize,labelHeight:e.controlHeight,labelColonMarginInlineStart:e.marginXXS/2,labelColonMarginInlineEnd:e.marginXS,itemMarginBottom:e.marginLG,verticalLabelPadding:`0 0 ${e.paddingXS}px`,verticalLabelMargin:0,inlineItemMarginBottom:0}),Ue=(e,t)=>Be(e,{formItemCls:`${e.componentCls}-item`,rootPrefixCls:t}),Se=xe("Form",(e,t)=>{let{rootPrefixCls:r}=t;const n=Ue(e,r);return[hn(n),bn(n),pn(n),Ve(n,n.componentCls),Ve(n,n.formItemCls),yn(n),$n(n),Cn(n),Ht(n),Xe]},xn,{order:-1e3}),We=[];function ye(e,t,r){let n=arguments.length>3&&arguments[3]!==void 0?arguments[3]:0;return{key:typeof e=="string"?e:`${t}-${n}`,error:e,errorStatus:r}}const vn=e=>{let{help:t,helpStatus:r,errors:n=We,warnings:o=We,className:s,fieldId:a,onVisibleChanged:d}=e;const{prefixCls:u}=l.useContext(Ce),p=`${u}-item-explain`,w=ve(u),[y,I,M]=Se(u,w),v=l.useMemo(()=>je(u),[u]),S=me(n),O=me(o),f=l.useMemo(()=>t!=null?[ye(t,"help",r)]:[].concat(X(S.map((h,g)=>ye(h,"error","error",g))),X(O.map((h,g)=>ye(h,"warning","warning",g)))),[t,r,S,O]),j=l.useMemo(()=>{const h={};return f.forEach(g=>{let{key:b}=g;h[b]=(h[b]||0)+1}),f.map((g,b)=>Object.assign(Object.assign({},g),{key:h[g.key]>1?`${g.key}-fallback-${b}`:g.key}))},[f]),i={};return a&&(i.id=`${a}_help`),y(l.createElement(ht,{motionDeadline:v.motionDeadline,motionName:`${u}-show-help`,visible:!!j.length,onVisibleChanged:d},h=>{const{className:g,style:b}=h;return l.createElement("div",Object.assign({},i,{className:Q(p,g,M,w,s,I),style:b,role:"alert"}),l.createElement(bt,Object.assign({keys:j},je(u),{motionName:`${u}-show-help-item`,component:!1}),R=>{const{key:x,error:m,errorStatus:c,className:F,style:V}=R;return l.createElement("div",{key:x,className:Q(F,{[`${p}-${c}`]:c}),style:V},m)}))}))},Je=vn,Sn=["parentNode"],wn="form_item";function se(e){return e===void 0||e===!1?[]:Array.isArray(e)?e:[e]}function Ze(e,t){if(!e.length)return;const r=e.join("_");return t?`${t}_${r}`:Sn.includes(r)?`${wn}_${r}`:r}function et(e,t,r,n,o,s){let a=n;return s!==void 0?a=s:r.validating?a="validating":e.length?a="error":t.length?a="warning":(r.touched||o&&r.validated)&&(a="success"),a}function He(e){return se(e).join("_")}function Ae(e,t){const r=t.getFieldInstance(e),n=yt(r);if(n)return n;const o=Ze(se(e),t.__INTERNAL__.name);if(o)return document.getElementById(o)}function tt(e){const[t]=st(),r=l.useRef({}),n=l.useMemo(()=>e??Object.assign(Object.assign({},t),{__INTERNAL__:{itemRef:o=>s=>{const a=He(o);s?r.current[a]=s:delete r.current[a]}},scrollToField:function(o){let s=arguments.length>1&&arguments[1]!==void 0?arguments[1]:{};const a=Ae(o,n);a&&Qt(a,Object.assign({scrollMode:"if-needed",block:"nearest"},s))},focusField:o=>{var s;const a=Ae(o,n);a&&((s=a.focus)===null||s===void 0||s.call(a))},getFieldInstance:o=>{const s=He(o);return r.current[s]}}),[e,t]);return[n]}var On=globalThis&&globalThis.__rest||function(e,t){var r={};for(var n in e)Object.prototype.hasOwnProperty.call(e,n)&&t.indexOf(n)<0&&(r[n]=e[n]);if(e!=null&&typeof Object.getOwnPropertySymbols=="function")for(var o=0,n=Object.getOwnPropertySymbols(e);o<n.length;o++)t.indexOf(n[o])<0&&Object.prototype.propertyIsEnumerable.call(e,n[o])&&(r[n[o]]=e[n[o]]);return r};const In=(e,t)=>{const r=l.useContext($t),{getPrefixCls:n,direction:o,form:s}=l.useContext(ae),{prefixCls:a,className:d,rootClassName:u,size:p,disabled:w=r,form:y,colon:I,labelAlign:M,labelWrap:v,labelCol:S,wrapperCol:O,hideRequiredMark:f,layout:j="horizontal",scrollToFirstError:i,requiredMark:h,onFinishFailed:g,name:b,style:R,feedbackIcons:x,variant:m}=e,c=On(e,["prefixCls","className","rootClassName","size","disabled","form","colon","labelAlign","labelWrap","labelCol","wrapperCol","hideRequiredMark","layout","scrollToFirstError","requiredMark","onFinishFailed","name","style","feedbackIcons","variant"]),F=Ct(p),V=l.useContext(xt),$=l.useMemo(()=>h!==void 0?h:f?!1:s&&s.requiredMark!==void 0?s.requiredMark:!0,[f,h,s]),N=I??(s==null?void 0:s.colon),_=n("form",a),q=ve(_),[P,H,E]=Se(_,q),z=Q(_,`${_}-${j}`,{[`${_}-hide-required-mark`]:$===!1,[`${_}-rtl`]:o==="rtl",[`${_}-${F}`]:F},E,q,H,s==null?void 0:s.className,d,u),[W]=tt(y),{__INTERNAL__:D}=W;D.name=b;const U=l.useMemo(()=>({name:b,labelAlign:M,labelCol:S,labelWrap:v,wrapperCol:O,vertical:j==="vertical",colon:N,requiredMark:$,itemRef:D.itemRef,form:W,feedbackIcons:x}),[b,M,S,O,j,N,$,W,x]),Z=l.useRef(null);l.useImperativeHandle(t,()=>{var C;return Object.assign(Object.assign({},W),{nativeElement:(C=Z.current)===null||C===void 0?void 0:C.nativeElement})});const G=(C,T)=>{if(C){let L={block:"nearest"};typeof C=="object"&&(L=Object.assign(Object.assign({},L),C)),W.scrollToField(T,L),L.focus&&W.focusField(T)}},B=C=>{if(g==null||g(C),C.errorFields.length){const T=C.errorFields[0].name;if(i!==void 0){G(i,T);return}s&&s.scrollToFirstError!==void 0&&G(s.scrollToFirstError,T)}};return P(l.createElement(at.Provider,{value:m},l.createElement(vt,{disabled:w},l.createElement(St.Provider,{value:F},l.createElement(qe,{validateMessages:V},l.createElement(ee.Provider,{value:U},l.createElement(it,Object.assign({id:b},c,{name:b,onFinishFailed:B,form:W,ref:Z,style:Object.assign(Object.assign({},s==null?void 0:s.style),R),className:z}))))))))},En=l.forwardRef(In),jn=En;function Fn(e){if(typeof e=="function")return e;const t=wt(e);return t.length<=1?t[0]:t}const nt=()=>{const{status:e,errors:t=[],warnings:r=[]}=l.useContext(de);return{status:e,errors:t,warnings:r}};nt.Context=de;const Mn=nt;function Nn(e){const[t,r]=l.useState(e),n=l.useRef(null),o=l.useRef([]),s=l.useRef(!1);l.useEffect(()=>(s.current=!1,()=>{s.current=!0,Fe.cancel(n.current),n.current=null}),[]);function a(d){s.current||(n.current===null&&(o.current=[],n.current=Fe(()=>{n.current=null,r(u=>{let p=u;return o.current.forEach(w=>{p=w(p)}),p})})),o.current.push(d))}return[t,a]}function Pn(){const{itemRef:e}=l.useContext(ee),t=l.useRef({});function r(n,o){const s=o&&typeof o=="object"&&o.ref,a=n.join("_");return(t.current.name!==a||t.current.originRef!==s)&&(t.current.name=a,t.current.originRef=s,t.current.ref=Ot(e(n),s)),t.current.ref}return r}const Rn=e=>{const{formItemCls:t}=e;return{"@media screen and (-ms-high-contrast: active), (-ms-high-contrast: none)":{[`${t}-control`]:{display:"flex"}}}},_n=It(["Form","item-item"],(e,t)=>{let{rootPrefixCls:r}=t;const n=Ue(e,r);return[Rn(n)]});var Tn=globalThis&&globalThis.__rest||function(e,t){var r={};for(var n in e)Object.prototype.hasOwnProperty.call(e,n)&&t.indexOf(n)<0&&(r[n]=e[n]);if(e!=null&&typeof Object.getOwnPropertySymbols=="function")for(var o=0,n=Object.getOwnPropertySymbols(e);o<n.length;o++)t.indexOf(n[o])<0&&Object.prototype.propertyIsEnumerable.call(e,n[o])&&(r[n[o]]=e[n[o]]);return r};const Ln=24,Vn=e=>{const{prefixCls:t,status:r,labelCol:n,wrapperCol:o,children:s,errors:a,warnings:d,_internalItemRender:u,extra:p,help:w,fieldId:y,marginBottom:I,onErrorVisibleChanged:M,label:v}=e,S=`${t}-item`,O=l.useContext(ee),f=l.useMemo(()=>{let N=Object.assign({},o||O.wrapperCol||{});return v===null&&!n&&!o&&O.labelCol&&[void 0,"xs","sm","md","lg","xl","xxl"].forEach(q=>{const P=q?[q]:[],H=Me(O.labelCol,P),E=typeof H=="object"?H:{},z=Me(N,P),W=typeof z=="object"?z:{};"span"in E&&!("offset"in W)&&E.span<Ln&&(N=Et(N,[].concat(P,["offset"]),E.span))}),N},[o,O]),j=Q(`${S}-control`,f.className),i=l.useMemo(()=>Tn(O,["labelCol","wrapperCol"]),[O]),h=l.useRef(null),[g,b]=l.useState(0);ke(()=>{p&&h.current?b(h.current.clientHeight):b(0)},[p]);const R=l.createElement("div",{className:`${S}-control-input`},l.createElement("div",{className:`${S}-control-input-content`},s)),x=l.useMemo(()=>({prefixCls:t,status:r}),[t,r]),m=I!==null||a.length||d.length?l.createElement(Ce.Provider,{value:x},l.createElement(Je,{fieldId:y,errors:a,warnings:d,help:w,helpStatus:r,className:`${S}-explain-connected`,onVisibleChanged:M})):null,c={};y&&(c.id=`${y}_extra`);const F=p?l.createElement("div",Object.assign({},c,{className:`${S}-extra`,ref:h}),p):null,V=m||F?l.createElement("div",{className:`${S}-additional`,style:I?{minHeight:I+g}:{}},m,F):null,$=u&&u.mark==="pro_table_render"&&u.render?u.render(e,{input:R,errorList:m,extra:F}):l.createElement(l.Fragment,null,R,V);return l.createElement(ee.Provider,{value:i},l.createElement(Ye,Object.assign({},f,{className:j}),$),l.createElement(_n,{prefixCls:t}))},Wn=Vn;var Hn=globalThis&&globalThis.__rest||function(e,t){var r={};for(var n in e)Object.prototype.hasOwnProperty.call(e,n)&&t.indexOf(n)<0&&(r[n]=e[n]);if(e!=null&&typeof Object.getOwnPropertySymbols=="function")for(var o=0,n=Object.getOwnPropertySymbols(e);o<n.length;o++)t.indexOf(n[o])<0&&Object.prototype.propertyIsEnumerable.call(e,n[o])&&(r[n[o]]=e[n[o]]);return r};function An(e){return e?typeof e=="object"&&!l.isValidElement(e)?e:{title:e}:null}const Dn=e=>{let{prefixCls:t,label:r,htmlFor:n,labelCol:o,labelAlign:s,colon:a,required:d,requiredMark:u,tooltip:p,vertical:w}=e;var y;const[I]=qt("Form"),{labelAlign:M,labelCol:v,labelWrap:S,colon:O}=l.useContext(ee);if(!r)return null;const f=o||v||{},j=s||M,i=`${t}-item-label`,h=Q(i,j==="left"&&`${i}-left`,f.className,{[`${i}-wrap`]:!!S});let g=r;const b=a===!0||O!==!1&&a!==!1;b&&!w&&typeof r=="string"&&r.trim()&&(g=r.replace(/[:|：]\s*$/,""));const x=An(p);if(x){const{icon:V=l.createElement(Xt,null)}=x,$=Hn(x,["icon"]),N=l.createElement(At,Object.assign({},$),l.cloneElement(V,{className:`${t}-item-tooltip`,title:"",onClick:_=>{_.preventDefault()},tabIndex:null}));g=l.createElement(l.Fragment,null,g,N)}const m=u==="optional",c=typeof u=="function";c?g=u(g,{required:!!d}):m&&!d&&(g=l.createElement(l.Fragment,null,g,l.createElement("span",{className:`${t}-item-optional`,title:""},(I==null?void 0:I.optional)||((y=jt.Form)===null||y===void 0?void 0:y.optional))));const F=Q({[`${t}-item-required`]:d,[`${t}-item-required-mark-optional`]:m||c,[`${t}-item-no-colon`]:!b});return l.createElement(Ye,Object.assign({},f,{className:h}),l.createElement("label",{htmlFor:n,className:F,title:typeof r=="string"?r:""},g))},qn=Dn,zn={success:Ft,warning:Mt,error:Nt,validating:Pt};function rt(e){let{children:t,errors:r,warnings:n,hasFeedback:o,validateStatus:s,prefixCls:a,meta:d,noStyle:u}=e;const p=`${a}-item`,{feedbackIcons:w}=l.useContext(ee),y=et(r,n,d,null,!!o,s),{isFormItemInput:I,status:M,hasFeedback:v,feedbackIcon:S}=l.useContext(de),O=l.useMemo(()=>{var f;let j;if(o){const h=o!==!0&&o.icons||w,g=y&&((f=h==null?void 0:h({status:y,errors:r,warnings:n}))===null||f===void 0?void 0:f[y]),b=y&&zn[y];j=g!==!1&&b?l.createElement("span",{className:Q(`${p}-feedback-icon`,`${p}-feedback-icon-${y}`)},g||l.createElement(b,null)):null}const i={status:y||"",errors:r,warnings:n,hasFeedback:!!o,feedbackIcon:j,isFormItemInput:!0};return u&&(i.status=(y??M)||"",i.isFormItemInput=I,i.hasFeedback=!!(o??v),i.feedbackIcon=o!==void 0?i.feedbackIcon:S),i},[y,o,u,I,M]);return l.createElement(de.Provider,{value:O},t)}var Bn=globalThis&&globalThis.__rest||function(e,t){var r={};for(var n in e)Object.prototype.hasOwnProperty.call(e,n)&&t.indexOf(n)<0&&(r[n]=e[n]);if(e!=null&&typeof Object.getOwnPropertySymbols=="function")for(var o=0,n=Object.getOwnPropertySymbols(e);o<n.length;o++)t.indexOf(n[o])<0&&Object.prototype.propertyIsEnumerable.call(e,n[o])&&(r[n[o]]=e[n[o]]);return r};function Gn(e){const{prefixCls:t,className:r,rootClassName:n,style:o,help:s,errors:a,warnings:d,validateStatus:u,meta:p,hasFeedback:w,hidden:y,children:I,fieldId:M,required:v,isRequired:S,onSubItemMetaChange:O,layout:f}=e,j=Bn(e,["prefixCls","className","rootClassName","style","help","errors","warnings","validateStatus","meta","hasFeedback","hidden","children","fieldId","required","isRequired","onSubItemMetaChange","layout"]),i=`${t}-item`,{requiredMark:h,vertical:g}=l.useContext(ee),b=g||f==="vertical",R=l.useRef(null),x=me(a),m=me(d),c=s!=null,F=!!(c||a.length||d.length),V=!!R.current&&Rt(R.current),[$,N]=l.useState(null);ke(()=>{if(F&&R.current){const E=getComputedStyle(R.current);N(parseInt(E.marginBottom,10))}},[F,V]);const _=E=>{E||N(null)},P=function(){let E=arguments.length>0&&arguments[0]!==void 0?arguments[0]:!1;const z=E?x:p.errors,W=E?m:p.warnings;return et(z,W,p,"",!!w,u)}(),H=Q(i,r,n,{[`${i}-with-help`]:c||x.length||m.length,[`${i}-has-feedback`]:P&&w,[`${i}-has-success`]:P==="success",[`${i}-has-warning`]:P==="warning",[`${i}-has-error`]:P==="error",[`${i}-is-validating`]:P==="validating",[`${i}-hidden`]:y,[`${i}-${f}`]:f});return l.createElement("div",{className:H,style:o,ref:R},l.createElement(fn,Object.assign({className:`${i}-row`},_t(j,["_internalItemRender","colon","dependencies","extra","fieldKey","getValueFromEvent","getValueProps","htmlFor","id","initialValue","isListField","label","labelAlign","labelCol","labelWrap","messageVariables","name","normalize","noStyle","preserve","requiredMark","rules","shouldUpdate","trigger","tooltip","validateFirst","validateTrigger","valuePropName","wrapperCol","validateDebounce"])),l.createElement(qn,Object.assign({htmlFor:M},e,{requiredMark:h,required:v??S,prefixCls:t,vertical:b})),l.createElement(Wn,Object.assign({},e,p,{errors:x,warnings:m,prefixCls:t,status:P,help:s,marginBottom:$,onErrorVisibleChanged:_}),l.createElement(ze.Provider,{value:O},l.createElement(rt,{prefixCls:t,meta:p,errors:p.errors,warnings:p.warnings,hasFeedback:w,validateStatus:P},I)))),!!$&&l.createElement("div",{className:`${i}-margin-offset`,style:{marginBottom:-$}}))}const kn="__SPLIT__";function Xn(e,t){const r=Object.keys(e),n=Object.keys(t);return r.length===n.length&&r.every(o=>{const s=e[o],a=t[o];return s===a||typeof s=="function"||typeof a=="function"})}const Kn=l.memo(e=>{let{children:t}=e;return t},(e,t)=>Xn(e.control,t.control)&&e.update===t.update&&e.childProps.length===t.childProps.length&&e.childProps.every((r,n)=>r===t.childProps[n]));function De(){return{errors:[],warnings:[],touched:!1,validating:!1,name:[],validated:!1}}function Yn(e){const{name:t,noStyle:r,className:n,dependencies:o,prefixCls:s,shouldUpdate:a,rules:d,children:u,required:p,label:w,messageVariables:y,trigger:I="onChange",validateTrigger:M,hidden:v,help:S,layout:O}=e,{getPrefixCls:f}=l.useContext(ae),{name:j}=l.useContext(ee),i=Fn(u),h=typeof i=="function",g=l.useContext(ze),{validateTrigger:b}=l.useContext(ct),R=M!==void 0?M:b,x=t!=null,m=f("form",s),c=ve(m),[F,V,$]=Se(m,c);Wt();const N=l.useContext(ut),_=l.useRef(),[q,P]=Nn({}),[H,E]=Tt(()=>De()),z=C=>{const T=N==null?void 0:N.getKey(C.name);if(E(C.destroy?De():C,!0),r&&S!==!1&&g){let L=C.name;if(C.destroy)L=_.current||L;else if(T!==void 0){const[k,J]=T;L=[k].concat(X(J)),_.current=L}g(C,L)}},W=(C,T)=>{P(L=>{const k=Object.assign({},L),ne=[].concat(X(C.name.slice(0,-1)),X(T)).join(kn);return C.destroy?delete k[ne]:k[ne]=C,k})},[D,U]=l.useMemo(()=>{const C=X(H.errors),T=X(H.warnings);return Object.values(q).forEach(L=>{C.push.apply(C,X(L.errors||[])),T.push.apply(T,X(L.warnings||[]))}),[C,T]},[q,H.errors,H.warnings]),Z=Pn();function G(C,T,L){return r&&!v?l.createElement(rt,{prefixCls:m,hasFeedback:e.hasFeedback,validateStatus:e.validateStatus,meta:H,errors:D,warnings:U,noStyle:!0},C):l.createElement(Gn,Object.assign({key:"row"},e,{className:Q(n,$,c,V),prefixCls:m,fieldId:T,isRequired:L,errors:D,warnings:U,meta:H,onSubItemMetaChange:W,layout:O}),C)}if(!x&&!h&&!o)return F(G(i));let B={};return typeof w=="string"?B.label=w:t&&(B.label=String(t)),y&&(B=Object.assign(Object.assign({},B),y)),F(l.createElement(dt,Object.assign({},e,{messageVariables:B,trigger:I,validateTrigger:R,onMetaChange:z}),(C,T,L)=>{const k=se(t).length&&T?T.name:[],J=Ze(k,j),ne=p!==void 0?p:!!(d!=null&&d.some(A=>{if(A&&typeof A=="object"&&A.required&&!A.warningOnly)return!0;if(typeof A=="function"){const re=A(L);return(re==null?void 0:re.required)&&!(re!=null&&re.warningOnly)}return!1})),ie=Object.assign({},C);let le=null;if(Array.isArray(i)&&x)le=i;else if(!(h&&(!(a||o)||x))){if(!(o&&!h&&!x))if(l.isValidElement(i)){const A=Object.assign(Object.assign({},i.props),ie);if(A.id||(A.id=J),S||D.length>0||U.length>0||e.extra){const oe=[];(S||D.length>0)&&oe.push(`${J}_help`),e.extra&&oe.push(`${J}_extra`),A["aria-describedby"]=oe.join(" ")}D.length>0&&(A["aria-invalid"]="true"),ne&&(A["aria-required"]="true"),Lt(i)&&(A.ref=Z(k,i)),new Set([].concat(X(se(I)),X(se(R)))).forEach(oe=>{A[oe]=function(){for(var we,Oe,pe,Ie,ge,Ee=arguments.length,he=new Array(Ee),ce=0;ce<Ee;ce++)he[ce]=arguments[ce];(pe=ie[oe])===null||pe===void 0||(we=pe).call.apply(we,[ie].concat(he)),(ge=(Ie=i.props)[oe])===null||ge===void 0||(Oe=ge).call.apply(Oe,[Ie].concat(he))}});const lt=[A["aria-required"],A["aria-invalid"],A["aria-describedby"]];le=l.createElement(Kn,{control:ie,update:i,childProps:lt},Vt(i,A))}else h&&(a||o)&&!x?le=i(L):le=i}return G(le,J,ne)}))}const ot=Yn;ot.useStatus=Mn;const Qn=ot;var Un=globalThis&&globalThis.__rest||function(e,t){var r={};for(var n in e)Object.prototype.hasOwnProperty.call(e,n)&&t.indexOf(n)<0&&(r[n]=e[n]);if(e!=null&&typeof Object.getOwnPropertySymbols=="function")for(var o=0,n=Object.getOwnPropertySymbols(e);o<n.length;o++)t.indexOf(n[o])<0&&Object.prototype.propertyIsEnumerable.call(e,n[o])&&(r[n[o]]=e[n[o]]);return r};const Jn=e=>{var{prefixCls:t,children:r}=e,n=Un(e,["prefixCls","children"]);const{getPrefixCls:o}=l.useContext(ae),s=o("form",t),a=l.useMemo(()=>({prefixCls:s,status:"error"}),[s]);return l.createElement(ft,Object.assign({},n),(d,u,p)=>l.createElement(Ce.Provider,{value:a},r(d.map(w=>Object.assign(Object.assign({},w),{fieldKey:w.key})),u,{errors:p.errors,warnings:p.warnings})))},Zn=Jn;function er(){const{form:e}=l.useContext(ee);return e}const te=jn;te.Item=Qn;te.List=Zn;te.ErrorList=Je;te.useForm=tt;te.useFormInstance=er;te.useWatch=mt;te.Provider=qe;te.create=()=>{};const sr=te;export{Ye as C,sr as F,fn as R};
