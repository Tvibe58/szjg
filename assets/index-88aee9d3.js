import{x as F,s as k,z as D,v as x,d as v,C as R,k as z,R as I,D as q,j as l,E as P}from"./index-02e4849c.js";import{F as g,R as J,C as G}from"./index-8dd5f234.js";import{I as S}from"./index-f7ba51d6.js";import{i as T}from"./gapSize-22b3a1e9.js";import"./roundedArrow-e6718a81.js";import"./index-f49f9cae.js";const X=e=>{const{componentCls:t,sizePaddingEdgeHorizontal:n,colorSplit:r,lineWidth:o,textPaddingInline:u,orientationMargin:i,verticalMarginInline:a}=e;return{[t]:Object.assign(Object.assign({},D(e)),{borderBlockStart:`${x(o)} solid ${r}`,"&-vertical":{position:"relative",top:"-0.06em",display:"inline-block",height:"0.9em",marginInline:a,marginBlock:0,verticalAlign:"middle",borderTop:0,borderInlineStart:`${x(o)} solid ${r}`},"&-horizontal":{display:"flex",clear:"both",width:"100%",minWidth:"100%",margin:`${x(e.dividerHorizontalGutterMargin)} 0`},[`&-horizontal${t}-with-text`]:{display:"flex",alignItems:"center",margin:`${x(e.dividerHorizontalWithTextGutterMargin)} 0`,color:e.colorTextHeading,fontWeight:500,fontSize:e.fontSizeLG,whiteSpace:"nowrap",textAlign:"center",borderBlockStart:`0 ${r}`,"&::before, &::after":{position:"relative",width:"50%",borderBlockStart:`${x(o)} solid transparent`,borderBlockStartColor:"inherit",borderBlockEnd:0,transform:"translateY(50%)",content:"''"}},[`&-horizontal${t}-with-text-left`]:{"&::before":{width:`calc(${i} * 100%)`},"&::after":{width:`calc(100% - ${i} * 100%)`}},[`&-horizontal${t}-with-text-right`]:{"&::before":{width:`calc(100% - ${i} * 100%)`},"&::after":{width:`calc(${i} * 100%)`}},[`${t}-inner-text`]:{display:"inline-block",paddingBlock:0,paddingInline:u},"&-dashed":{background:"none",borderColor:r,borderStyle:"dashed",borderWidth:`${x(o)} 0 0`},[`&-horizontal${t}-with-text${t}-dashed`]:{"&::before, &::after":{borderStyle:"dashed none none"}},[`&-vertical${t}-dashed`]:{borderInlineStartWidth:o,borderInlineEnd:0,borderBlockStart:0,borderBlockEnd:0},"&-dotted":{background:"none",borderColor:r,borderStyle:"dotted",borderWidth:`${x(o)} 0 0`},[`&-horizontal${t}-with-text${t}-dotted`]:{"&::before, &::after":{borderStyle:"dotted none none"}},[`&-vertical${t}-dotted`]:{borderInlineStartWidth:o,borderInlineEnd:0,borderBlockStart:0,borderBlockEnd:0},[`&-plain${t}-with-text`]:{color:e.colorText,fontWeight:"normal",fontSize:e.fontSize},[`&-horizontal${t}-with-text-left${t}-no-default-orientation-margin-left`]:{"&::before":{width:0},"&::after":{width:"100%"},[`${t}-inner-text`]:{paddingInlineStart:n}},[`&-horizontal${t}-with-text-right${t}-no-default-orientation-margin-right`]:{"&::before":{width:"100%"},"&::after":{width:0},[`${t}-inner-text`]:{paddingInlineEnd:n}}})}},Y=e=>({textPaddingInline:"1em",orientationMargin:.05,verticalMarginInline:e.marginXS}),A=F("Divider",e=>{const t=k(e,{dividerHorizontalWithTextGutterMargin:e.margin,dividerHorizontalGutterMargin:e.marginLG,sizePaddingEdgeHorizontal:0});return[X(t)]},Y,{unitless:{orientationMargin:!0}});var Q=globalThis&&globalThis.__rest||function(e,t){var n={};for(var r in e)Object.prototype.hasOwnProperty.call(e,r)&&t.indexOf(r)<0&&(n[r]=e[r]);if(e!=null&&typeof Object.getOwnPropertySymbols=="function")for(var o=0,r=Object.getOwnPropertySymbols(e);o<r.length;o++)t.indexOf(r[o])<0&&Object.prototype.propertyIsEnumerable.call(e,r[o])&&(n[r[o]]=e[r[o]]);return n};const U=e=>{const{getPrefixCls:t,direction:n,divider:r}=v.useContext(R),{prefixCls:o,type:u="horizontal",orientation:i="center",orientationMargin:a,className:p,rootClassName:d,children:f,dashed:m,variant:c="solid",plain:b,style:y}=e,h=Q(e,["prefixCls","type","orientation","orientationMargin","className","rootClassName","children","dashed","variant","plain","style"]),s=t("divider",o),[$,w,M]=A(s),C=!!f,j=i==="left"&&a!=null,E=i==="right"&&a!=null,V=z(s,r==null?void 0:r.className,w,M,`${s}-${u}`,{[`${s}-with-text`]:C,[`${s}-with-text-${i}`]:C,[`${s}-dashed`]:!!m,[`${s}-${c}`]:c!=="solid",[`${s}-plain`]:!!b,[`${s}-rtl`]:n==="rtl",[`${s}-no-default-orientation-margin-left`]:j,[`${s}-no-default-orientation-margin-right`]:E},p,d),N=v.useMemo(()=>typeof a=="number"?a:/^\d+$/.test(a)?Number(a):a,[a]),_=Object.assign(Object.assign({},j&&{marginLeft:N}),E&&{marginRight:N});return $(v.createElement("div",Object.assign({className:V,style:Object.assign(Object.assign({},r==null?void 0:r.style),y)},h,{role:"separator"}),f&&u!=="vertical"&&v.createElement("span",{className:`${s}-inner-text`,style:_},f)))},O=U,L=["wrap","nowrap","wrap-reverse"],B=["flex-start","flex-end","start","end","center","space-between","space-around","space-evenly","stretch","normal","left","right"],H=["center","start","end","flex-start","flex-end","self-start","self-end","baseline","normal","stretch"],Z=(e,t)=>{const n=t.wrap===!0?"wrap":t.wrap;return{[`${e}-wrap-${n}`]:n&&L.includes(n)}},K=(e,t)=>{const n={};return H.forEach(r=>{n[`${e}-align-${r}`]=t.align===r}),n[`${e}-align-stretch`]=!t.align&&!!t.vertical,n},ee=(e,t)=>{const n={};return B.forEach(r=>{n[`${e}-justify-${r}`]=t.justify===r}),n};function te(e,t){return z(Object.assign(Object.assign(Object.assign({},Z(e,t)),K(e,t)),ee(e,t)))}const re=e=>{const{componentCls:t}=e;return{[t]:{display:"flex","&-vertical":{flexDirection:"column"},"&-rtl":{direction:"rtl"},"&:empty":{display:"none"}}}},ne=e=>{const{componentCls:t}=e;return{[t]:{"&-gap-small":{gap:e.flexGapSM},"&-gap-middle":{gap:e.flexGap},"&-gap-large":{gap:e.flexGapLG}}}},oe=e=>{const{componentCls:t}=e,n={};return L.forEach(r=>{n[`${t}-wrap-${r}`]={flexWrap:r}}),n},le=e=>{const{componentCls:t}=e,n={};return H.forEach(r=>{n[`${t}-align-${r}`]={alignItems:r}}),n},ie=e=>{const{componentCls:t}=e,n={};return B.forEach(r=>{n[`${t}-justify-${r}`]={justifyContent:r}}),n},ae=()=>({}),se=F("Flex",e=>{const{paddingXS:t,padding:n,paddingLG:r}=e,o=k(e,{flexGapSM:t,flexGap:n,flexGapLG:r});return[re(o),ne(o),oe(o),le(o),ie(o)]},ae,{resetStyle:!1});var ce=globalThis&&globalThis.__rest||function(e,t){var n={};for(var r in e)Object.prototype.hasOwnProperty.call(e,r)&&t.indexOf(r)<0&&(n[r]=e[r]);if(e!=null&&typeof Object.getOwnPropertySymbols=="function")for(var o=0,r=Object.getOwnPropertySymbols(e);o<r.length;o++)t.indexOf(r[o])<0&&Object.prototype.propertyIsEnumerable.call(e,r[o])&&(n[r[o]]=e[r[o]]);return n};const de=I.forwardRef((e,t)=>{const{prefixCls:n,rootClassName:r,className:o,style:u,flex:i,gap:a,children:p,vertical:d=!1,component:f="div"}=e,m=ce(e,["prefixCls","rootClassName","className","style","flex","gap","children","vertical","component"]),{flex:c,direction:b,getPrefixCls:y}=I.useContext(R),h=y("flex",n),[s,$,w]=se(h),M=d??(c==null?void 0:c.vertical),C=z(o,r,c==null?void 0:c.className,h,$,w,te(h,e),{[`${h}-rtl`]:b==="rtl",[`${h}-gap-${a}`]:T(a),[`${h}-vertical`]:M}),j=Object.assign(Object.assign({},c==null?void 0:c.style),u);return i&&(j.flex=i),a&&!T(a)&&(j.gap=a),s(I.createElement(f,Object.assign({ref:t,className:C,style:j},q(m,["justify","wrap","align"])),p))}),fe=de;const he={labelCol:{span:4},wrapperCol:{span:20}},W={wrapperCol:{offset:4,span:20}},ge={wrapperCol:{offset:0,span:24}},$e=()=>{const[e]=g.useForm(),[t,n]=v.useState(null),r=i=>{const a=u(i.a,i.b,i.c,i.x,i.y,i.z);n(a)},o=()=>{e.resetFields(),n(null)},u=(i,a,p,d,f,m)=>{let c=Math.floor(i/d)*Math.floor(a/f)*Math.floor(p/m),b=Math.floor(i/f)*Math.floor(a/d)*Math.floor(p/m),y=Math.floor(i/m)*Math.floor(a/d)*Math.floor(p/f),h=Math.floor(i/m)*Math.floor(a/f)*Math.floor(p/d),s=Math.floor(i/d)*Math.floor(a/m)*Math.floor(p/f),$=Math.floor(i/f)*Math.floor(a/m)*Math.floor(p/d);return console.log(c,b,y,h,s,$),Math.max(c,b,y,h,s,$)};return l.jsx("div",{className:"page-tools",children:l.jsx("div",{className:"tools-container",children:l.jsxs(g,{...he,form:e,name:"control-hooks",onFinish:r,children:[l.jsxs(J,{children:[l.jsxs(G,{span:12,children:[l.jsx(g.Item,{...W,children:l.jsx(O,{plain:!0,children:"大箱子尺寸"})}),l.jsx(g.Item,{name:"a",label:"长",rules:[{required:!0}],children:l.jsx(S,{})}),l.jsx(g.Item,{name:"b",label:"宽",rules:[{required:!0}],children:l.jsx(S,{})}),l.jsx(g.Item,{name:"c",label:"高",rules:[{required:!0}],children:l.jsx(S,{})})]}),l.jsxs(G,{span:12,children:[l.jsx(g.Item,{...W,children:l.jsx(O,{plain:!0,children:"小箱子尺寸"})}),l.jsx(g.Item,{name:"x",label:"长",rules:[{required:!0}],children:l.jsx(S,{})}),l.jsx(g.Item,{name:"y",label:"宽",rules:[{required:!0}],children:l.jsx(S,{})}),l.jsx(g.Item,{name:"z",label:"高",rules:[{required:!0}],children:l.jsx(S,{})})]})]}),l.jsxs(g.Item,{...ge,children:[l.jsxs(fe,{justify:"center",children:[l.jsx(P,{type:"primary",htmlType:"submit",children:"计算能装小箱子数量"})," ",l.jsx(P,{htmlType:"button",onClick:o,children:"重置"})]}),l.jsxs("div",{className:"result",children:[l.jsx(O,{plain:!0,children:"计算结果"}),l.jsx("h1",{children:t})]})]})]})})})};export{$e as default};
