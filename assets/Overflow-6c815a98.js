import{K as c,c as n,a6 as qe,C as Je,af as F,o as K,l as fe,_ as W,w as Ze,f as w,p as et,ap as tt,R as nt,s as rt}from"./index-31bd6e39.js";import{i as Ce,u as at,R as Ie}from"./roundedArrow-0c260621.js";const it=new c("antMoveDownIn",{"0%":{transform:"translate3d(0, 100%, 0)",transformOrigin:"0 0",opacity:0},"100%":{transform:"translate3d(0, 0, 0)",transformOrigin:"0 0",opacity:1}}),st=new c("antMoveDownOut",{"0%":{transform:"translate3d(0, 0, 0)",transformOrigin:"0 0",opacity:1},"100%":{transform:"translate3d(0, 100%, 0)",transformOrigin:"0 0",opacity:0}}),ot=new c("antMoveLeftIn",{"0%":{transform:"translate3d(-100%, 0, 0)",transformOrigin:"0 0",opacity:0},"100%":{transform:"translate3d(0, 0, 0)",transformOrigin:"0 0",opacity:1}}),ft=new c("antMoveLeftOut",{"0%":{transform:"translate3d(0, 0, 0)",transformOrigin:"0 0",opacity:1},"100%":{transform:"translate3d(-100%, 0, 0)",transformOrigin:"0 0",opacity:0}}),lt=new c("antMoveRightIn",{"0%":{transform:"translate3d(100%, 0, 0)",transformOrigin:"0 0",opacity:0},"100%":{transform:"translate3d(0, 0, 0)",transformOrigin:"0 0",opacity:1}}),ct=new c("antMoveRightOut",{"0%":{transform:"translate3d(0, 0, 0)",transformOrigin:"0 0",opacity:1},"100%":{transform:"translate3d(100%, 0, 0)",transformOrigin:"0 0",opacity:0}}),mt=new c("antMoveUpIn",{"0%":{transform:"translate3d(0, -100%, 0)",transformOrigin:"0 0",opacity:0},"100%":{transform:"translate3d(0, 0, 0)",transformOrigin:"0 0",opacity:1}}),ut=new c("antMoveUpOut",{"0%":{transform:"translate3d(0, 0, 0)",transformOrigin:"0 0",opacity:1},"100%":{transform:"translate3d(0, -100%, 0)",transformOrigin:"0 0",opacity:0}}),dt={"move-up":{inKeyframes:mt,outKeyframes:ut},"move-down":{inKeyframes:it,outKeyframes:st},"move-left":{inKeyframes:ot,outKeyframes:ft},"move-right":{inKeyframes:lt,outKeyframes:ct}},Lt=(e,s)=>{const{antCls:f}=e,a=`${f}-${s}`,{inKeyframes:l,outKeyframes:i}=dt[s];return[Ce(a,l,i,e.motionDurationMid),{[`
        ${a}-enter,
        ${a}-appear
      `]:{opacity:0,animationTimingFunction:e.motionEaseOutCirc},[`${a}-leave`]:{animationTimingFunction:e.motionEaseInOutCirc}}]},vt=new c("antSlideUpIn",{"0%":{transform:"scaleY(0.8)",transformOrigin:"0% 0%",opacity:0},"100%":{transform:"scaleY(1)",transformOrigin:"0% 0%",opacity:1}}),yt=new c("antSlideUpOut",{"0%":{transform:"scaleY(1)",transformOrigin:"0% 0%",opacity:1},"100%":{transform:"scaleY(0.8)",transformOrigin:"0% 0%",opacity:0}}),pt=new c("antSlideDownIn",{"0%":{transform:"scaleY(0.8)",transformOrigin:"100% 100%",opacity:0},"100%":{transform:"scaleY(1)",transformOrigin:"100% 100%",opacity:1}}),gt=new c("antSlideDownOut",{"0%":{transform:"scaleY(1)",transformOrigin:"100% 100%",opacity:1},"100%":{transform:"scaleY(0.8)",transformOrigin:"100% 100%",opacity:0}}),Ot=new c("antSlideLeftIn",{"0%":{transform:"scaleX(0.8)",transformOrigin:"0% 0%",opacity:0},"100%":{transform:"scaleX(1)",transformOrigin:"0% 0%",opacity:1}}),ht=new c("antSlideLeftOut",{"0%":{transform:"scaleX(1)",transformOrigin:"0% 0%",opacity:1},"100%":{transform:"scaleX(0.8)",transformOrigin:"0% 0%",opacity:0}}),Rt=new c("antSlideRightIn",{"0%":{transform:"scaleX(0.8)",transformOrigin:"100% 0%",opacity:0},"100%":{transform:"scaleX(1)",transformOrigin:"100% 0%",opacity:1}}),St=new c("antSlideRightOut",{"0%":{transform:"scaleX(1)",transformOrigin:"100% 0%",opacity:1},"100%":{transform:"scaleX(0.8)",transformOrigin:"100% 0%",opacity:0}}),wt={"slide-up":{inKeyframes:vt,outKeyframes:yt},"slide-down":{inKeyframes:pt,outKeyframes:gt},"slide-left":{inKeyframes:Ot,outKeyframes:ht},"slide-right":{inKeyframes:Rt,outKeyframes:St}},Tt=(e,s)=>{const{antCls:f}=e,a=`${f}-${s}`,{inKeyframes:l,outKeyframes:i}=wt[s];return[Ce(a,l,i,e.motionDurationMid),{[`
      ${a}-enter,
      ${a}-appear
    `]:{transform:"scale(0)",transformOrigin:"0% 0%",opacity:0,animationTimingFunction:e.motionEaseOutQuint,"&-prepare":{transform:"scale(1)"}},[`${a}-leave`]:{animationTimingFunction:e.motionEaseInQuint}}]};function Et(e){return s=>n.createElement(qe,{theme:{token:{motion:!1,zIndexPopupBase:0}}},n.createElement(e,Object.assign({},s)))}const Ct=(e,s,f,a)=>Et(i=>{const{prefixCls:u,style:p}=i,m=n.useRef(null),[E,C]=n.useState(0),[U,L]=n.useState(0),[P,v]=at(!1,{value:i.open}),{getPrefixCls:M}=n.useContext(Je),I=M(s||"select",u);n.useEffect(()=>{if(v(!0),typeof ResizeObserver<"u"){const b=new ResizeObserver(d=>{const R=d[0].target;C(R.offsetHeight+8),L(R.offsetWidth)}),D=setInterval(()=>{var d;const R=f?`.${f(I)}`:`.${I}-dropdown`,g=(d=m.current)===null||d===void 0?void 0:d.querySelector(R);g&&(clearInterval(D),b.observe(g))},10);return()=>{clearInterval(D),b.disconnect()}}},[]);let h=Object.assign(Object.assign({},i),{style:Object.assign(Object.assign({},p),{margin:0}),open:P,visible:P,getPopupContainer:()=>m.current});a&&(h=a(h));const y={paddingBottom:E,position:"relative",minWidth:U};return n.createElement("div",{ref:m,style:y},n.createElement(e,Object.assign({},h)))}),Xt=Ct;var It=["prefixCls","invalidate","item","renderItem","responsive","responsiveDisabled","registerSize","itemKey","className","style","children","display","order","component"],$=void 0;function _t(e,s){var f=e.prefixCls,a=e.invalidate,l=e.item,i=e.renderItem,u=e.responsive,p=e.responsiveDisabled,m=e.registerSize,E=e.itemKey,C=e.className,U=e.style,L=e.children,P=e.display,v=e.order,M=e.component,I=M===void 0?"div":M,h=F(e,It),y=u&&!P;function b(_){m(E,_)}n.useEffect(function(){return function(){b(null)}},[]);var D=i&&l!==$?i(l):L,d;a||(d={opacity:y?0:1,height:y?0:$,overflowY:y?"hidden":$,order:u?v:$,pointerEvents:y?"none":$,position:y?"absolute":$});var R={};y&&(R["aria-hidden"]=!0);var g=n.createElement(I,K({className:fe(!a&&f,C),style:W(W({},d),U)},R,h,{ref:s}),D);return u&&(g=n.createElement(Ie,{onResize:function(Z){var j=Z.offsetWidth;b(j)},disabled:p},g)),g}var Y=n.forwardRef(_t);Y.displayName="Item";function bt(e){if(typeof MessageChannel>"u")Ze(e);else{var s=new MessageChannel;s.port1.onmessage=function(){return e()},s.port2.postMessage(void 0)}}function Nt(){var e=n.useRef(null),s=function(a){e.current||(e.current=[],bt(function(){tt.unstable_batchedUpdates(function(){e.current.forEach(function(l){l()}),e.current=null})})),e.current.push(a)};return s}function A(e,s){var f=n.useState(s),a=w(f,2),l=a[0],i=a[1],u=et(function(p){e(function(){i(p)})});return[l,u]}var q=nt.createContext(null),xt=["component"],Kt=["className"],Pt=["className"],Mt=function(s,f){var a=n.useContext(q);if(!a){var l=s.component,i=l===void 0?"div":l,u=F(s,xt);return n.createElement(i,K({},u,{ref:f}))}var p=a.className,m=F(a,Kt),E=s.className,C=F(s,Pt);return n.createElement(q.Provider,{value:null},n.createElement(Y,K({ref:f,className:fe(p,E)},m,C)))},_e=n.forwardRef(Mt);_e.displayName="RawItem";var Dt=["prefixCls","data","renderItem","renderRawItem","itemKey","itemWidth","ssr","style","className","maxCount","renderRest","renderRawRest","suffix","component","itemComponent","onVisibleChange"],be="responsive",Ne="invalidate";function zt(e){return"+ ".concat(e.length," ...")}function $t(e,s){var f=e.prefixCls,a=f===void 0?"rc-overflow":f,l=e.data,i=l===void 0?[]:l,u=e.renderItem,p=e.renderRawItem,m=e.itemKey,E=e.itemWidth,C=E===void 0?10:E,U=e.ssr,L=e.style,P=e.className,v=e.maxCount,M=e.renderRest,I=e.renderRawRest,h=e.suffix,y=e.component,b=y===void 0?"div":y,D=e.itemComponent,d=e.onVisibleChange,R=F(e,Dt),g=U==="full",_=Nt(),Z=A(_,null),j=w(Z,2),V=j[0],xe=j[1],N=V||0,Ke=A(_,new Map),le=w(Ke,2),ce=le[0],Pe=le[1],Me=A(_,0),me=w(Me,2),De=me[0],ze=me[1],$e=A(_,0),ue=w($e,2),H=ue[0],We=ue[1],Ue=A(_,0),de=w(Ue,2),B=de[0],Le=de[1],Te=n.useState(null),ve=w(Te,2),ee=ve[0],ye=ve[1],Xe=n.useState(null),pe=w(Xe,2),k=pe[0],Ae=pe[1],z=n.useMemo(function(){return k===null&&g?Number.MAX_SAFE_INTEGER:k||0},[k,V]),Fe=n.useState(!1),ge=w(Fe,2),Ye=ge[0],je=ge[1],te="".concat(a,"-item"),Oe=Math.max(De,H),ne=v===be,S=i.length&&ne,he=v===Ne,Ve=S||typeof v=="number"&&i.length>v,x=n.useMemo(function(){var t=i;return S?V===null&&g?t=i:t=i.slice(0,Math.min(i.length,N/C)):typeof v=="number"&&(t=i.slice(0,v)),t},[i,C,V,v,S]),re=n.useMemo(function(){return S?i.slice(z+1):i.slice(x.length)},[i,x,S,z]),G=n.useCallback(function(t,r){var o;return typeof m=="function"?m(t):(o=m&&(t==null?void 0:t[m]))!==null&&o!==void 0?o:r},[m]),He=n.useCallback(u||function(t){return t},[u]);function Q(t,r,o){k===t&&(r===void 0||r===ee)||(Ae(t),o||(je(t<i.length-1),d==null||d(t)),r!==void 0&&ye(r))}function Be(t,r){xe(r.clientWidth)}function Re(t,r){Pe(function(o){var O=new Map(o);return r===null?O.delete(t):O.set(t,r),O})}function ke(t,r){We(r),ze(H)}function Ge(t,r){Le(r)}function ae(t){return ce.get(G(x[t],t))}rt(function(){if(N&&typeof Oe=="number"&&x){var t=B,r=x.length,o=r-1;if(!r){Q(0,null);return}for(var O=0;O<r;O+=1){var X=ae(O);if(g&&(X=X||0),X===void 0){Q(O-1,void 0,!0);break}if(t+=X,o===0&&t<=N||O===o-1&&t+ae(o)<=N){Q(o,null);break}else if(t+Oe>N){Q(O-1,t-X-B+H);break}}h&&ae(0)+B>N&&ye(null)}},[N,ce,H,B,G,x]);var Se=Ye&&!!re.length,we={};ee!==null&&S&&(we={position:"absolute",left:ee,top:0});var T={prefixCls:te,responsive:S,component:D,invalidate:he},Qe=p?function(t,r){var o=G(t,r);return n.createElement(q.Provider,{key:o,value:W(W({},T),{},{order:r,item:t,itemKey:o,registerSize:Re,display:r<=z})},p(t,r))}:function(t,r){var o=G(t,r);return n.createElement(Y,K({},T,{order:r,key:o,item:t,renderItem:He,itemKey:o,registerSize:Re,display:r<=z}))},ie,Ee={order:Se?z:Number.MAX_SAFE_INTEGER,className:"".concat(te,"-rest"),registerSize:ke,display:Se};if(I)I&&(ie=n.createElement(q.Provider,{value:W(W({},T),Ee)},I(re)));else{var se=M||zt;ie=n.createElement(Y,K({},T,Ee),typeof se=="function"?se(re):se)}var oe=n.createElement(b,K({className:fe(!he&&a,P),style:L,ref:s},R),x.map(Qe),Ve?ie:null,h&&n.createElement(Y,K({},T,{responsive:ne,responsiveDisabled:!S,order:z,className:"".concat(te,"-suffix"),registerSize:Ge,display:!0,style:we}),h));return ne&&(oe=n.createElement(Ie,{onResize:Be,disabled:!S},oe)),oe}var J=n.forwardRef($t);J.displayName="Overflow";J.Item=_e;J.RESPONSIVE=be;J.INVALIDATE=Ne;export{J as F,vt as a,gt as b,yt as c,Lt as d,Xt as g,Tt as i,pt as s,Et as w};
