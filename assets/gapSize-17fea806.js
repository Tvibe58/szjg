import{K as b,R as et,aX as jt,d as c,k as R,ae as zt,_ as Rt,m as Nt,v as M,x as At,s as st,z as Et,h as ot,C as it,a6 as Dt,aA as Vt,aY as Lt,Y as Bt,an as Mt,Z as kt}from"./index-0b302016.js";import{i as Xt,q as Ht,T as Yt,a as Zt,g as Kt,u as Wt,c as Ft}from"./roundedArrow-c0cd7992.js";const k=["blue","purple","cyan","green","magenta","pink","red","orange","yellow","volcano","geekblue","lime","gold"];function Ut(t,o){return k.reduce((a,e)=>{const r=t[`${e}1`],n=t[`${e}3`],s=t[`${e}6`],i=t[`${e}7`];return Object.assign(Object.assign({},a),o(e,{lightColor:r,lightBorderColor:n,darkColor:s,textColor:i}))},{})}const qt=t=>({[t.componentCls]:{[`${t.antCls}-motion-collapse-legacy`]:{overflow:"hidden","&-active":{transition:`height ${t.motionDurationMid} ${t.motionEaseInOut},
        opacity ${t.motionDurationMid} ${t.motionEaseInOut} !important`}},[`${t.antCls}-motion-collapse`]:{overflow:"hidden",transition:`height ${t.motionDurationMid} ${t.motionEaseInOut},
        opacity ${t.motionDurationMid} ${t.motionEaseInOut} !important`}}}),je=qt,Gt=new b("antZoomIn",{"0%":{transform:"scale(0.2)",opacity:0},"100%":{transform:"scale(1)",opacity:1}}),Jt=new b("antZoomOut",{"0%":{transform:"scale(1)"},"100%":{transform:"scale(0.2)",opacity:0}}),rt=new b("antZoomBigIn",{"0%":{transform:"scale(0.8)",opacity:0},"100%":{transform:"scale(1)",opacity:1}}),at=new b("antZoomBigOut",{"0%":{transform:"scale(1)"},"100%":{transform:"scale(0.8)",opacity:0}}),Qt=new b("antZoomUpIn",{"0%":{transform:"scale(0.8)",transformOrigin:"50% 0%",opacity:0},"100%":{transform:"scale(1)",transformOrigin:"50% 0%"}}),te=new b("antZoomUpOut",{"0%":{transform:"scale(1)",transformOrigin:"50% 0%"},"100%":{transform:"scale(0.8)",transformOrigin:"50% 0%",opacity:0}}),ee=new b("antZoomLeftIn",{"0%":{transform:"scale(0.8)",transformOrigin:"0% 50%",opacity:0},"100%":{transform:"scale(1)",transformOrigin:"0% 50%"}}),oe=new b("antZoomLeftOut",{"0%":{transform:"scale(1)",transformOrigin:"0% 50%"},"100%":{transform:"scale(0.8)",transformOrigin:"0% 50%",opacity:0}}),re=new b("antZoomRightIn",{"0%":{transform:"scale(0.8)",transformOrigin:"100% 50%",opacity:0},"100%":{transform:"scale(1)",transformOrigin:"100% 50%"}}),ae=new b("antZoomRightOut",{"0%":{transform:"scale(1)",transformOrigin:"100% 50%"},"100%":{transform:"scale(0.8)",transformOrigin:"100% 50%",opacity:0}}),ne=new b("antZoomDownIn",{"0%":{transform:"scale(0.8)",transformOrigin:"50% 100%",opacity:0},"100%":{transform:"scale(1)",transformOrigin:"50% 100%"}}),se=new b("antZoomDownOut",{"0%":{transform:"scale(1)",transformOrigin:"50% 100%"},"100%":{transform:"scale(0.8)",transformOrigin:"50% 100%",opacity:0}}),ie={zoom:{inKeyframes:Gt,outKeyframes:Jt},"zoom-big":{inKeyframes:rt,outKeyframes:at},"zoom-big-fast":{inKeyframes:rt,outKeyframes:at},"zoom-left":{inKeyframes:ee,outKeyframes:oe},"zoom-right":{inKeyframes:re,outKeyframes:ae},"zoom-up":{inKeyframes:Qt,outKeyframes:te},"zoom-down":{inKeyframes:ne,outKeyframes:se}},le=(t,o)=>{const{antCls:a}=t,e=`${a}-${o}`,{inKeyframes:r,outKeyframes:n}=ie[o];return[Xt(e,r,n,o==="zoom-big-fast"?t.motionDurationFast:t.motionDurationMid),{[`
        ${e}-enter,
        ${e}-appear
      `]:{transform:"scale(0)",opacity:0,animationTimingFunction:t.motionEaseOutCirc,"&-prepare":{transform:"none"}},[`${e}-leave`]:{animationTimingFunction:t.motionEaseInOutCirc}}]},ce=t=>{const{space:o,form:a,children:e}=t;if(e==null)return null;let r=e;return a&&(r=et.createElement(Ht,{override:!0,status:!0},r)),o&&(r=et.createElement(jt,null,r)),r},fe=ce;function lt(t){var o=t.children,a=t.prefixCls,e=t.id,r=t.overlayInnerStyle,n=t.className,s=t.style;return c.createElement("div",{className:R("".concat(a,"-content"),n),style:s},c.createElement("div",{className:"".concat(a,"-inner"),id:e,role:"tooltip",style:r},typeof o=="function"?o():o))}var I={shiftX:64,adjustY:1},S={adjustX:1,shiftY:!0},d=[0,0],me={left:{points:["cr","cl"],overflow:S,offset:[-4,0],targetOffset:d},right:{points:["cl","cr"],overflow:S,offset:[4,0],targetOffset:d},top:{points:["bc","tc"],overflow:I,offset:[0,-4],targetOffset:d},bottom:{points:["tc","bc"],overflow:I,offset:[0,4],targetOffset:d},topLeft:{points:["bl","tl"],overflow:I,offset:[0,-4],targetOffset:d},leftTop:{points:["tr","tl"],overflow:S,offset:[-4,0],targetOffset:d},topRight:{points:["br","tr"],overflow:I,offset:[0,-4],targetOffset:d},rightTop:{points:["tl","tr"],overflow:S,offset:[4,0],targetOffset:d},bottomRight:{points:["tr","br"],overflow:I,offset:[0,4],targetOffset:d},rightBottom:{points:["bl","br"],overflow:S,offset:[4,0],targetOffset:d},bottomLeft:{points:["tl","bl"],overflow:I,offset:[0,4],targetOffset:d},leftBottom:{points:["br","bl"],overflow:S,offset:[-4,0],targetOffset:d}},ue=["overlayClassName","trigger","mouseEnterDelay","mouseLeaveDelay","overlayStyle","prefixCls","children","onVisibleChange","afterVisibleChange","transitionName","animation","motion","placement","align","destroyTooltipOnHide","defaultVisible","getTooltipContainer","overlayInnerStyle","arrowContent","overlay","id","showArrow"],pe=function(o,a){var e=o.overlayClassName,r=o.trigger,n=r===void 0?["hover"]:r,s=o.mouseEnterDelay,i=s===void 0?0:s,f=o.mouseLeaveDelay,u=f===void 0?.1:f,g=o.overlayStyle,l=o.prefixCls,m=l===void 0?"rc-tooltip":l,y=o.children,h=o.onVisibleChange,v=o.afterVisibleChange,T=o.transitionName,N=o.animation,P=o.motion,A=o.placement,E=A===void 0?"right":A,w=o.align,X=w===void 0?{}:w,j=o.destroyTooltipOnHide,H=j===void 0?!1:j,Y=o.defaultVisible,z=o.getTooltipContainer,D=o.overlayInnerStyle;o.arrowContent;var Z=o.overlay,K=o.id,C=o.showArrow,W=C===void 0?!0:C,F=zt(o,ue),$=c.useRef(null);c.useImperativeHandle(a,function(){return $.current});var V=Rt({},F);"visible"in o&&(V.popupVisible=o.visible);var U=function(){return c.createElement(lt,{key:"content",prefixCls:m,id:K,overlayInnerStyle:D},Z)};return c.createElement(Yt,Nt({popupClassName:e,prefixCls:m,popup:U,action:n,builtinPlacements:me,popupPlacement:E,ref:$,popupAlign:X,getPopupContainer:z,onPopupVisibleChange:h,afterPopupVisibleChange:v,popupTransitionName:T,popupAnimation:N,popupMotion:P,defaultPopupVisible:Y,autoDestroy:H,mouseLeaveDelay:u,popupStyle:g,mouseEnterDelay:i,arrow:W},V),y)};const ge=c.forwardRef(pe),ct=8;function ft(t){const{contentRadius:o,limitVerticalRadius:a}=t,e=o>12?o+2:12;return{arrowOffsetHorizontal:e,arrowOffsetVertical:a?ct:e}}function B(t,o){return t?o:{}}function de(t,o,a){const{componentCls:e,boxShadowPopoverArrow:r,arrowOffsetVertical:n,arrowOffsetHorizontal:s}=t,{arrowDistance:i=0,arrowPlacement:f={left:!0,right:!0,top:!0,bottom:!0}}=a||{};return{[e]:Object.assign(Object.assign(Object.assign(Object.assign({[`${e}-arrow`]:[Object.assign(Object.assign({position:"absolute",zIndex:1,display:"block"},Zt(t,o,r)),{"&:before":{background:o}})]},B(!!f.top,{[[`&-placement-top > ${e}-arrow`,`&-placement-topLeft > ${e}-arrow`,`&-placement-topRight > ${e}-arrow`].join(",")]:{bottom:i,transform:"translateY(100%) rotate(180deg)"},[`&-placement-top > ${e}-arrow`]:{left:{_skip_check_:!0,value:"50%"},transform:"translateX(-50%) translateY(100%) rotate(180deg)"},"&-placement-topLeft":{"--arrow-offset-horizontal":s,[`> ${e}-arrow`]:{left:{_skip_check_:!0,value:s}}},"&-placement-topRight":{"--arrow-offset-horizontal":`calc(100% - ${M(s)})`,[`> ${e}-arrow`]:{right:{_skip_check_:!0,value:s}}}})),B(!!f.bottom,{[[`&-placement-bottom > ${e}-arrow`,`&-placement-bottomLeft > ${e}-arrow`,`&-placement-bottomRight > ${e}-arrow`].join(",")]:{top:i,transform:"translateY(-100%)"},[`&-placement-bottom > ${e}-arrow`]:{left:{_skip_check_:!0,value:"50%"},transform:"translateX(-50%) translateY(-100%)"},"&-placement-bottomLeft":{"--arrow-offset-horizontal":s,[`> ${e}-arrow`]:{left:{_skip_check_:!0,value:s}}},"&-placement-bottomRight":{"--arrow-offset-horizontal":`calc(100% - ${M(s)})`,[`> ${e}-arrow`]:{right:{_skip_check_:!0,value:s}}}})),B(!!f.left,{[[`&-placement-left > ${e}-arrow`,`&-placement-leftTop > ${e}-arrow`,`&-placement-leftBottom > ${e}-arrow`].join(",")]:{right:{_skip_check_:!0,value:i},transform:"translateX(100%) rotate(90deg)"},[`&-placement-left > ${e}-arrow`]:{top:{_skip_check_:!0,value:"50%"},transform:"translateY(-50%) translateX(100%) rotate(90deg)"},[`&-placement-leftTop > ${e}-arrow`]:{top:n},[`&-placement-leftBottom > ${e}-arrow`]:{bottom:n}})),B(!!f.right,{[[`&-placement-right > ${e}-arrow`,`&-placement-rightTop > ${e}-arrow`,`&-placement-rightBottom > ${e}-arrow`].join(",")]:{left:{_skip_check_:!0,value:i},transform:"translateX(-100%) rotate(-90deg)"},[`&-placement-right > ${e}-arrow`]:{top:{_skip_check_:!0,value:"50%"},transform:"translateY(-50%) translateX(-100%) rotate(-90deg)"},[`&-placement-rightTop > ${e}-arrow`]:{top:n},[`&-placement-rightBottom > ${e}-arrow`]:{bottom:n}}))}}function be(t,o,a,e){if(e===!1)return{adjustX:!1,adjustY:!1};const r=e&&typeof e=="object"?e:{},n={};switch(t){case"top":case"bottom":n.shiftX=o.arrowOffsetHorizontal*2+a,n.shiftY=!0,n.adjustY=!0;break;case"left":case"right":n.shiftY=o.arrowOffsetVertical*2+a,n.shiftX=!0,n.adjustX=!0;break}const s=Object.assign(Object.assign({},n),r);return s.shiftX||(s.adjustX=!0),s.shiftY||(s.adjustY=!0),s}const nt={left:{points:["cr","cl"]},right:{points:["cl","cr"]},top:{points:["bc","tc"]},bottom:{points:["tc","bc"]},topLeft:{points:["bl","tl"]},leftTop:{points:["tr","tl"]},topRight:{points:["br","tr"]},rightTop:{points:["tl","tr"]},bottomRight:{points:["tr","br"]},rightBottom:{points:["bl","br"]},bottomLeft:{points:["tl","bl"]},leftBottom:{points:["br","bl"]}},ve={topLeft:{points:["bl","tc"]},leftTop:{points:["tr","cl"]},topRight:{points:["br","tc"]},rightTop:{points:["tl","cr"]},bottomRight:{points:["tr","bc"]},rightBottom:{points:["bl","cr"]},bottomLeft:{points:["tl","bc"]},leftBottom:{points:["br","cl"]}},he=new Set(["topLeft","topRight","bottomLeft","bottomRight","leftTop","leftBottom","rightTop","rightBottom"]);function ye(t){const{arrowWidth:o,autoAdjustOverflow:a,arrowPointAtCenter:e,offset:r,borderRadius:n,visibleFirst:s}=t,i=o/2,f={};return Object.keys(nt).forEach(u=>{const g=e&&ve[u]||nt[u],l=Object.assign(Object.assign({},g),{offset:[0,0],dynamicInset:!0});switch(f[u]=l,he.has(u)&&(l.autoArrow=!1),u){case"top":case"topLeft":case"topRight":l.offset[1]=-i-r;break;case"bottom":case"bottomLeft":case"bottomRight":l.offset[1]=i+r;break;case"left":case"leftTop":case"leftBottom":l.offset[0]=-i-r;break;case"right":case"rightTop":case"rightBottom":l.offset[0]=i+r;break}const m=ft({contentRadius:n,limitVerticalRadius:!0});if(e)switch(u){case"topLeft":case"bottomLeft":l.offset[0]=-m.arrowOffsetHorizontal-i;break;case"topRight":case"bottomRight":l.offset[0]=m.arrowOffsetHorizontal+i;break;case"leftTop":case"rightTop":l.offset[1]=-m.arrowOffsetHorizontal*2+i;break;case"leftBottom":case"rightBottom":l.offset[1]=m.arrowOffsetHorizontal*2-i;break}l.overflow=be(u,m,o,a),s&&(l.htmlRegion="visibleFirst")}),f}const we=t=>{const{componentCls:o,tooltipMaxWidth:a,tooltipColor:e,tooltipBg:r,tooltipBorderRadius:n,zIndexPopup:s,controlHeight:i,boxShadowSecondary:f,paddingSM:u,paddingXS:g}=t;return[{[o]:Object.assign(Object.assign(Object.assign(Object.assign({},Et(t)),{position:"absolute",zIndex:s,display:"block",width:"max-content",maxWidth:a,visibility:"visible","--valid-offset-x":"var(--arrow-offset-horizontal, var(--arrow-x))",transformOrigin:["var(--valid-offset-x, 50%)","var(--arrow-y, 50%)"].join(" "),"&-hidden":{display:"none"},"--antd-arrow-background-color":r,[`${o}-inner`]:{minWidth:"1em",minHeight:i,padding:`${M(t.calc(u).div(2).equal())} ${M(g)}`,color:e,textAlign:"start",textDecoration:"none",wordWrap:"break-word",backgroundColor:r,borderRadius:n,boxShadow:f,boxSizing:"border-box"},[["&-placement-left","&-placement-leftTop","&-placement-leftBottom","&-placement-right","&-placement-rightTop","&-placement-rightBottom"].join(",")]:{[`${o}-inner`]:{borderRadius:t.min(n,ct)}},[`${o}-content`]:{position:"relative"}}),Ut(t,(l,m)=>{let{darkColor:y}=m;return{[`&${o}-${l}`]:{[`${o}-inner`]:{backgroundColor:y},[`${o}-arrow`]:{"--antd-arrow-background-color":y}}}})),{"&-rtl":{direction:"rtl"}})},de(t,"var(--antd-arrow-background-color)"),{[`${o}-pure`]:{position:"relative",maxWidth:"none",margin:t.sizePopupArrow}}]},Oe=t=>Object.assign(Object.assign({zIndexPopup:t.zIndexPopupBase+70},ft({contentRadius:t.borderRadius,limitVerticalRadius:!0})),Kt(st(t,{borderRadiusOuter:Math.min(t.borderRadiusOuter,4)}))),mt=function(t){let o=arguments.length>1&&arguments[1]!==void 0?arguments[1]:!0;return At("Tooltip",e=>{const{borderRadius:r,colorTextLightSolid:n,colorBgSpotlight:s}=e,i=st(e,{tooltipMaxWidth:250,tooltipColor:n,tooltipBorderRadius:r,tooltipBg:s});return[we(i),le(e,"zoom-big-fast")]},Oe,{resetStyle:!1,injectStyle:o})(t)},Ce=k.map(t=>`${t}-inverse`);function $e(t){return(arguments.length>1&&arguments[1]!==void 0?arguments[1]:!0)?[].concat(ot(Ce),ot(k)).includes(t):k.includes(t)}function ut(t,o){const a=$e(o),e=R({[`${t}-${o}`]:o&&a}),r={},n={};return o&&!a&&(r.background=o,n["--antd-arrow-background-color"]=o),{className:e,overlayStyle:r,arrowStyle:n}}const xe=t=>{const{prefixCls:o,className:a,placement:e="top",title:r,color:n,overlayInnerStyle:s}=t,{getPrefixCls:i}=c.useContext(it),f=i("tooltip",o),[u,g,l]=mt(f),m=ut(f,n),y=m.arrowStyle,h=Object.assign(Object.assign({},s),m.overlayStyle),v=R(g,l,f,`${f}-pure`,`${f}-placement-${e}`,a,m.className);return u(c.createElement("div",{className:v,style:y},c.createElement("div",{className:`${f}-arrow`}),c.createElement(lt,Object.assign({},t,{className:g,prefixCls:f,overlayInnerStyle:h}),r)))},_e=xe;var Ie=globalThis&&globalThis.__rest||function(t,o){var a={};for(var e in t)Object.prototype.hasOwnProperty.call(t,e)&&o.indexOf(e)<0&&(a[e]=t[e]);if(t!=null&&typeof Object.getOwnPropertySymbols=="function")for(var r=0,e=Object.getOwnPropertySymbols(t);r<e.length;r++)o.indexOf(e[r])<0&&Object.prototype.propertyIsEnumerable.call(t,e[r])&&(a[e[r]]=t[e[r]]);return a};const Se=c.forwardRef((t,o)=>{var a,e;const{prefixCls:r,openClassName:n,getTooltipContainer:s,overlayClassName:i,color:f,overlayInnerStyle:u,children:g,afterOpenChange:l,afterVisibleChange:m,destroyTooltipOnHide:y,arrow:h=!0,title:v,overlay:T,builtinPlacements:N,arrowPointAtCenter:P=!1,autoAdjustOverflow:A=!0}=t,E=!!h,[,w]=Dt(),{getPopupContainer:X,getPrefixCls:j,direction:H}=c.useContext(it),Y=Vt(),z=c.useRef(null),D=()=>{var p;(p=z.current)===null||p===void 0||p.forceAlign()};c.useImperativeHandle(o,()=>{var p;return{forceAlign:D,forcePopupAlign:()=>{Y.deprecated(!1,"forcePopupAlign","forceAlign"),D()},nativeElement:(p=z.current)===null||p===void 0?void 0:p.nativeElement}});const[Z,K]=Wt(!1,{value:(a=t.open)!==null&&a!==void 0?a:t.visible,defaultValue:(e=t.defaultOpen)!==null&&e!==void 0?e:t.defaultVisible}),C=!v&&!T&&v!==0,W=p=>{var O,_;K(C?!1:p),C||((O=t.onOpenChange)===null||O===void 0||O.call(t,p),(_=t.onVisibleChange)===null||_===void 0||_.call(t,p))},F=c.useMemo(()=>{var p,O;let _=P;return typeof h=="object"&&(_=(O=(p=h.pointAtCenter)!==null&&p!==void 0?p:h.arrowPointAtCenter)!==null&&O!==void 0?O:P),N||ye({arrowPointAtCenter:_,autoAdjustOverflow:A,arrowWidth:E?w.sizePopupArrow:0,borderRadius:w.borderRadius,offset:w.marginXXS,visibleFirst:!0})},[P,h,N,w]),$=c.useMemo(()=>v===0?v:T||v||"",[T,v]),V=c.createElement(fe,{space:!0},typeof $=="function"?$():$),{getPopupContainer:U,placement:Q="top",mouseEnterDelay:gt=.1,mouseLeaveDelay:dt=.1,overlayStyle:bt,rootClassName:vt}=t,tt=Ie(t,["getPopupContainer","placement","mouseEnterDelay","mouseLeaveDelay","overlayStyle","rootClassName"]),x=j("tooltip",r),ht=j(),yt=t["data-popover-inject"];let q=Z;!("open"in t)&&!("visible"in t)&&C&&(q=!1);const G=c.isValidElement(g)&&!Lt(g)?g:c.createElement("span",null,g),L=G.props,wt=!L.className||typeof L.className=="string"?R(L.className,n||`${x}-open`):L.className,[Ot,Ct,$t]=mt(x,!yt),J=ut(x,f),xt=J.arrowStyle,_t=Object.assign(Object.assign({},u),J.overlayStyle),It=R(i,{[`${x}-rtl`]:H==="rtl"},J.className,vt,Ct,$t),[St,Tt]=Bt("Tooltip",tt.zIndex),Pt=c.createElement(ge,Object.assign({},tt,{zIndex:St,showArrow:E,placement:Q,mouseEnterDelay:gt,mouseLeaveDelay:dt,prefixCls:x,overlayClassName:It,overlayStyle:Object.assign(Object.assign({},xt),bt),getTooltipContainer:U||s||X,ref:z,builtinPlacements:F,overlay:V,visible:q,onVisibleChange:W,afterVisibleChange:l??m,overlayInnerStyle:_t,arrowContent:c.createElement("span",{className:`${x}-arrow-content`}),motion:{motionName:Ft(ht,"zoom-big-fast",t.transitionName),motionDeadline:1e3},destroyTooltipOnHide:!!y}),q?Mt(G,{className:wt}):G);return Ot(c.createElement(kt.Provider,{value:Tt},Pt))}),pt=Se;pt._InternalPanelDoNotUseOrYouWillBeFired=_e;const ze=pt;function Re(t){return["small","middle","large"].includes(t)}function Ne(t){return t?typeof t=="number"&&!Number.isNaN(t):!1}export{fe as C,ze as T,le as a,de as b,ft as c,ye as d,Ne as e,je as g,Re as i,Gt as z};
