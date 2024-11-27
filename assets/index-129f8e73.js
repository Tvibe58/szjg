import{c as r,G as Ze,o as he,a7 as ut,R as O,l as T,h as Be,m as se,_ as ae,af as ze,f as le,k as Ve,E as Je,C as be,a3 as ct,Y as De,aK as et,an as $e,ah as Le,ai as Ke,y as dt,v as ft,w as Fe,M as vt,p as Xe,ao as Ge,F as mt,s as qe}from"./index-31bd6e39.js";import{u as He,F as xe,R as pt}from"./roundedArrow-0c260621.js";import{n as Ue,k as tt,l as ke,m as We,c as gt,i as ht,S as xt}from"./index-d0e68813.js";import{C as Ye}from"./gapSize-e190580d.js";var bt={icon:{tag:"svg",attrs:{viewBox:"64 64 896 896",focusable:"false"},children:[{tag:"path",attrs:{d:"M942.2 486.2Q889.47 375.11 816.7 305l-50.88 50.88C807.31 395.53 843.45 447.4 874.7 512 791.5 684.2 673.4 766 512 766q-72.67 0-133.87-22.38L323 798.75Q408 838 512 838q288.3 0 430.2-300.3a60.29 60.29 0 000-51.5zm-63.57-320.64L836 122.88a8 8 0 00-11.32 0L715.31 232.2Q624.86 186 512 186q-288.3 0-430.2 300.3a60.3 60.3 0 000 51.5q56.69 119.4 136.5 191.41L112.48 835a8 8 0 000 11.31L155.17 889a8 8 0 0011.31 0l712.15-712.12a8 8 0 000-11.32zM149.3 512C232.6 339.8 350.7 258 512 258c54.54 0 104.13 9.36 149.12 28.39l-70.3 70.3a176 176 0 00-238.13 238.13l-83.42 83.42C223.1 637.49 183.3 582.28 149.3 512zm246.7 0a112.11 112.11 0 01146.2-106.69L401.31 546.2A112 112 0 01396 512z"}},{tag:"path",attrs:{d:"M508 624c-3.46 0-6.87-.16-10.25-.47l-52.82 52.82a176.09 176.09 0 00227.42-227.42l-52.82 52.82c.31 3.38.47 6.79.47 10.25a111.94 111.94 0 01-112 112z"}}]},name:"eye-invisible",theme:"outlined"};const Ct=bt;var yt=function(o,a){return r.createElement(Ze,he({},o,{ref:a,icon:Ct}))},St=r.forwardRef(yt);const wt=St;var Et={icon:{tag:"svg",attrs:{viewBox:"64 64 896 896",focusable:"false"},children:[{tag:"path",attrs:{d:"M942.2 486.2C847.4 286.5 704.1 186 512 186c-192.2 0-335.4 100.5-430.2 300.3a60.3 60.3 0 000 51.5C176.6 737.5 319.9 838 512 838c192.2 0 335.4-100.5 430.2-300.3 7.7-16.2 7.7-35 0-51.5zM512 766c-161.3 0-279.4-81.8-362.7-254C232.6 339.8 350.7 258 512 258c161.3 0 279.4 81.8 362.7 254C791.5 684.2 673.4 766 512 766zm-4-430c-97.2 0-176 78.8-176 176s78.8 176 176 176 176-78.8 176-176-78.8-176-176-176zm0 288c-61.9 0-112-50.1-112-112s50.1-112 112-112 112 50.1 112 112-50.1 112-112 112z"}}]},name:"eye",theme:"outlined"};const Rt=Et;var Ot=function(o,a){return r.createElement(Ze,he({},o,{ref:a,icon:Rt}))},zt=r.forwardRef(Ot);const $t=zt,It=["xxl","xl","lg","md","sm","xs"],At=e=>({xs:`(max-width: ${e.screenXSMax}px)`,sm:`(min-width: ${e.screenSM}px)`,md:`(min-width: ${e.screenMD}px)`,lg:`(min-width: ${e.screenLG}px)`,xl:`(min-width: ${e.screenXL}px)`,xxl:`(min-width: ${e.screenXXL}px)`}),Nt=e=>{const o=e,a=[].concat(It).reverse();return a.forEach((t,n)=>{const s=t.toUpperCase(),l=`screen${s}Min`,i=`screen${s}`;if(!(o[l]<=o[i]))throw new Error(`${l}<=${i} fails : !(${o[l]}<=${o[i]})`);if(n<a.length-1){const f=`screen${s}Max`;if(!(o[i]<=o[f]))throw new Error(`${i}<=${f} fails : !(${o[i]}<=${o[f]})`);const c=`screen${a[n+1].toUpperCase()}Min`;if(!(o[f]<=o[c]))throw new Error(`${f}<=${c} fails : !(${o[f]}<=${o[c]})`)}}),e};function yn(){const[,e]=ut(),o=At(Nt(e));return O.useMemo(()=>{const a=new Map;let t=-1,n={};return{matchHandlers:{},dispatch(s){return n=s,a.forEach(l=>l(n)),a.size>=1},subscribe(s){return a.size||this.register(),t+=1,a.set(t,s),s(n),t},unsubscribe(s){a.delete(s),a.size||this.unregister()},unregister(){Object.keys(o).forEach(s=>{const l=o[s],i=this.matchHandlers[l];i==null||i.mql.removeListener(i==null?void 0:i.listener)}),a.clear()},register(){Object.keys(o).forEach(s=>{const l=o[s],i=g=>{let{matches:c}=g;this.dispatch(Object.assign(Object.assign({},n),{[s]:c}))},f=window.matchMedia(l);f.addListener(i),this.matchHandlers[l]={mql:f,listener:i},i(f)})},responsiveMap:o}},[e])}function Pt(e){return!!(e.addonBefore||e.addonAfter)}function _t(e){return!!(e.prefix||e.suffix||e.allowClear)}function Qe(e,o,a){var t=o.cloneNode(!0),n=Object.create(e,{target:{value:t},currentTarget:{value:t}});return t.value=a,typeof o.selectionStart=="number"&&typeof o.selectionEnd=="number"&&(t.selectionStart=o.selectionStart,t.selectionEnd=o.selectionEnd),t.setSelectionRange=function(){o.setSelectionRange.apply(o,arguments)},n}function Oe(e,o,a,t){if(a){var n=o;if(o.type==="click"){n=Qe(o,e,""),a(n);return}if(e.type!=="file"&&t!==void 0){n=Qe(o,e,t),a(n);return}a(n)}}function nt(e,o){if(e){e.focus(o);var a=o||{},t=a.cursor;if(t){var n=e.value.length;switch(t){case"start":e.setSelectionRange(0,0);break;case"end":e.setSelectionRange(n,n);break;default:e.setSelectionRange(0,n)}}}}var at=O.forwardRef(function(e,o){var a,t,n=e.inputElement,s=e.children,l=e.prefixCls,i=e.prefix,f=e.suffix,g=e.addonBefore,c=e.addonAfter,x=e.className,N=e.style,M=e.disabled,b=e.readOnly,_=e.focused,X=e.triggerFocus,L=e.allowClear,R=e.value,v=e.handleReset,F=e.hidden,C=e.classes,u=e.classNames,P=e.dataAttrs,p=e.styles,m=e.components,k=e.onClear,z=s??n,w=(m==null?void 0:m.affixWrapper)||"span",H=(m==null?void 0:m.groupWrapper)||"span",K=(m==null?void 0:m.wrapper)||"span",j=(m==null?void 0:m.groupAddon)||"span",$=r.useRef(null),U=function(ne){var ve;(ve=$.current)!==null&&ve!==void 0&&ve.contains(ne.target)&&(X==null||X())},G=_t(e),q=r.cloneElement(z,{value:R,className:T(z.props.className,!G&&(u==null?void 0:u.variant))||null}),y=r.useRef(null);if(O.useImperativeHandle(o,function(){return{nativeElement:y.current||$.current}}),G){var E=null;if(L){var B=!M&&!b&&R,V="".concat(l,"-clear-icon"),d=Be(L)==="object"&&L!==null&&L!==void 0&&L.clearIcon?L.clearIcon:"✖";E=O.createElement("span",{onClick:function(ne){v==null||v(ne),k==null||k()},onMouseDown:function(ne){return ne.preventDefault()},className:T(V,se(se({},"".concat(V,"-hidden"),!B),"".concat(V,"-has-suffix"),!!f)),role:"button",tabIndex:-1},d)}var h="".concat(l,"-affix-wrapper"),I=T(h,se(se(se(se(se({},"".concat(l,"-disabled"),M),"".concat(h,"-disabled"),M),"".concat(h,"-focused"),_),"".concat(h,"-readonly"),b),"".concat(h,"-input-with-clear-btn"),f&&L&&R),C==null?void 0:C.affixWrapper,u==null?void 0:u.affixWrapper,u==null?void 0:u.variant),ee=(f||L)&&O.createElement("span",{className:T("".concat(l,"-suffix"),u==null?void 0:u.suffix),style:p==null?void 0:p.suffix},E,f);q=O.createElement(w,he({className:I,style:p==null?void 0:p.affixWrapper,onClick:U},P==null?void 0:P.affixWrapper,{ref:$}),i&&O.createElement("span",{className:T("".concat(l,"-prefix"),u==null?void 0:u.prefix),style:p==null?void 0:p.prefix},i),q,ee)}if(Pt(e)){var S="".concat(l,"-group"),Z="".concat(S,"-addon"),J="".concat(S,"-wrapper"),ie=T("".concat(l,"-wrapper"),S,C==null?void 0:C.wrapper,u==null?void 0:u.wrapper),ue=T(J,se({},"".concat(J,"-disabled"),M),C==null?void 0:C.group,u==null?void 0:u.groupWrapper);q=O.createElement(H,{className:ue,ref:y},O.createElement(K,{className:ie},g&&O.createElement(j,{className:Z},g),q,c&&O.createElement(j,{className:Z},c)))}return O.cloneElement(q,{className:T((a=q.props)===null||a===void 0?void 0:a.className,x)||null,style:ae(ae({},(t=q.props)===null||t===void 0?void 0:t.style),N),hidden:F})}),jt=["show"];function ot(e,o){return r.useMemo(function(){var a={};o&&(a.show=Be(o)==="object"&&o.formatter?o.formatter:!!o),a=ae(ae({},a),e);var t=a,n=t.show,s=ze(t,jt);return ae(ae({},s),{},{show:!!n,showFormatter:typeof n=="function"?n:void 0,strategy:s.strategy||function(l){return l.length}})},[e,o])}var Tt=["autoComplete","onChange","onFocus","onBlur","onPressEnter","onKeyDown","onKeyUp","prefixCls","disabled","htmlSize","className","maxLength","suffix","showCount","count","type","classes","classNames","styles","onCompositionStart","onCompositionEnd"],Mt=r.forwardRef(function(e,o){var a=e.autoComplete,t=e.onChange,n=e.onFocus,s=e.onBlur,l=e.onPressEnter,i=e.onKeyDown,f=e.onKeyUp,g=e.prefixCls,c=g===void 0?"rc-input":g,x=e.disabled,N=e.htmlSize,M=e.className,b=e.maxLength,_=e.suffix,X=e.showCount,L=e.count,R=e.type,v=R===void 0?"text":R,F=e.classes,C=e.classNames,u=e.styles,P=e.onCompositionStart,p=e.onCompositionEnd,m=ze(e,Tt),k=r.useState(!1),z=le(k,2),w=z[0],H=z[1],K=r.useRef(!1),j=r.useRef(!1),$=r.useRef(null),U=r.useRef(null),G=function(A){$.current&&nt($.current,A)},q=He(e.defaultValue,{value:e.value}),y=le(q,2),E=y[0],B=y[1],V=E==null?"":String(E),d=r.useState(null),h=le(d,2),I=h[0],ee=h[1],S=ot(L,X),Z=S.max||b,J=S.strategy(V),ie=!!Z&&J>Z;r.useImperativeHandle(o,function(){var W;return{focus:G,blur:function(){var Y;(Y=$.current)===null||Y===void 0||Y.blur()},setSelectionRange:function(Y,pe,de){var ce;(ce=$.current)===null||ce===void 0||ce.setSelectionRange(Y,pe,de)},select:function(){var Y;(Y=$.current)===null||Y===void 0||Y.select()},input:$.current,nativeElement:((W=U.current)===null||W===void 0?void 0:W.nativeElement)||$.current}}),r.useEffect(function(){H(function(W){return W&&x?!1:W})},[x]);var ue=function(A,Y,pe){var de=Y;if(!K.current&&S.exceedFormatter&&S.max&&S.strategy(Y)>S.max){if(de=S.exceedFormatter(Y,{max:S.max}),Y!==de){var ce,ge;ee([((ce=$.current)===null||ce===void 0?void 0:ce.selectionStart)||0,((ge=$.current)===null||ge===void 0?void 0:ge.selectionEnd)||0])}}else if(pe.source==="compositionEnd")return;B(de),$.current&&Oe($.current,A,t,de)};r.useEffect(function(){if(I){var W;(W=$.current)===null||W===void 0||W.setSelectionRange.apply(W,Ve(I))}},[I]);var te=function(A){ue(A,A.target.value,{source:"change"})},ne=function(A){K.current=!1,ue(A,A.currentTarget.value,{source:"compositionEnd"}),p==null||p(A)},ve=function(A){l&&A.key==="Enter"&&!j.current&&(j.current=!0,l(A)),i==null||i(A)},oe=function(A){A.key==="Enter"&&(j.current=!1),f==null||f(A)},me=function(A){H(!0),n==null||n(A)},Ae=function(A){H(!1),s==null||s(A)},ye=function(A){B(""),G(),$.current&&Oe($.current,A,t)},Ne=ie&&"".concat(c,"-out-of-range"),we=function(){var A=Je(e,["prefixCls","onPressEnter","addonBefore","addonAfter","prefix","suffix","allowClear","defaultValue","showCount","count","classes","htmlSize","styles","classNames","onClear"]);return O.createElement("input",he({autoComplete:a},A,{onChange:te,onFocus:me,onBlur:Ae,onKeyDown:ve,onKeyUp:oe,className:T(c,se({},"".concat(c,"-disabled"),x),C==null?void 0:C.input),style:u==null?void 0:u.input,ref:$,size:N,type:v,onCompositionStart:function(pe){K.current=!0,P==null||P(pe)},onCompositionEnd:ne}))},Pe=function(){var A=Number(Z)>0;if(_||S.show){var Y=S.showFormatter?S.showFormatter({value:V,count:J,maxLength:Z}):"".concat(J).concat(A?" / ".concat(Z):"");return O.createElement(O.Fragment,null,S.show&&O.createElement("span",{className:T("".concat(c,"-show-count-suffix"),se({},"".concat(c,"-show-count-has-suffix"),!!_),C==null?void 0:C.count),style:ae({},u==null?void 0:u.count)},Y),_)}return null};return O.createElement(at,he({},m,{prefixCls:c,className:T(M,Ne),handleReset:ye,value:V,focused:w,triggerFocus:G,suffix:Pe(),disabled:x,classes:F,classNames:C,styles:u}),we())});const Ft=e=>{const{getPrefixCls:o,direction:a}=r.useContext(be),{prefixCls:t,className:n}=e,s=o("input-group",t),l=o("input"),[i,f]=Ue(l),g=T(s,{[`${s}-lg`]:e.size==="large",[`${s}-sm`]:e.size==="small",[`${s}-compact`]:e.compact,[`${s}-rtl`]:a==="rtl"},f,n),c=r.useContext(xe),x=r.useMemo(()=>Object.assign(Object.assign({},c),{isFormItemInput:!1}),[c]);return i(r.createElement("span",{className:g,style:e.style,onMouseEnter:e.onMouseEnter,onMouseLeave:e.onMouseLeave,onFocus:e.onFocus,onBlur:e.onBlur},r.createElement(xe.Provider,{value:x},e.children)))},kt=Ft,Bt=e=>{let o;return typeof e=="object"&&(e!=null&&e.clearIcon)?o=e:e&&(o={clearIcon:O.createElement(ct,null)}),o},rt=Bt;function st(e,o){const a=r.useRef([]),t=()=>{a.current.push(setTimeout(()=>{var n,s,l,i;!((n=e.current)===null||n===void 0)&&n.input&&((s=e.current)===null||s===void 0?void 0:s.input.getAttribute("type"))==="password"&&(!((l=e.current)===null||l===void 0)&&l.input.hasAttribute("value"))&&((i=e.current)===null||i===void 0||i.input.removeAttribute("value"))}))};return r.useEffect(()=>(o&&t(),()=>a.current.forEach(n=>{n&&clearTimeout(n)})),[]),t}function Vt(e){return!!(e.prefix||e.suffix||e.allowClear||e.showCount)}var Dt=globalThis&&globalThis.__rest||function(e,o){var a={};for(var t in e)Object.prototype.hasOwnProperty.call(e,t)&&o.indexOf(t)<0&&(a[t]=e[t]);if(e!=null&&typeof Object.getOwnPropertySymbols=="function")for(var n=0,t=Object.getOwnPropertySymbols(e);n<t.length;n++)o.indexOf(t[n])<0&&Object.prototype.propertyIsEnumerable.call(e,t[n])&&(a[t[n]]=e[t[n]]);return a};const Lt=r.forwardRef((e,o)=>{var a;const{prefixCls:t,bordered:n=!0,status:s,size:l,disabled:i,onBlur:f,onFocus:g,suffix:c,allowClear:x,addonAfter:N,addonBefore:M,className:b,style:_,styles:X,rootClassName:L,onChange:R,classNames:v,variant:F}=e,C=Dt(e,["prefixCls","bordered","status","size","disabled","onBlur","onFocus","suffix","allowClear","addonAfter","addonBefore","className","style","styles","rootClassName","onChange","classNames","variant"]),{getPrefixCls:u,direction:P,input:p}=O.useContext(be),m=u("input",t),k=r.useRef(null),z=De(m),[w,H,K]=Ue(m,z),{compactSize:j,compactItemClassnames:$}=et(m,P),U=$e(te=>{var ne;return(ne=l??j)!==null&&ne!==void 0?ne:te}),G=O.useContext(Le),q=i??G,{status:y,hasFeedback:E,feedbackIcon:B}=r.useContext(xe),V=We(y,s),d=Vt(e)||!!E;r.useRef(d);const h=st(k,!0),I=te=>{h(),f==null||f(te)},ee=te=>{h(),g==null||g(te)},S=te=>{h(),R==null||R(te)},Z=(E||c)&&O.createElement(O.Fragment,null,c,E&&B),J=rt(x??(p==null?void 0:p.allowClear)),[ie,ue]=tt("input",F,n);return w(O.createElement(Mt,Object.assign({ref:Ke(o,k),prefixCls:m,autoComplete:p==null?void 0:p.autoComplete},C,{disabled:q,onBlur:I,onFocus:ee,style:Object.assign(Object.assign({},p==null?void 0:p.style),_),styles:Object.assign(Object.assign({},p==null?void 0:p.styles),X),suffix:Z,allowClear:J,className:T(b,L,K,z,$,p==null?void 0:p.className),onChange:S,addonBefore:M&&O.createElement(Ye,{form:!0,space:!0},M),addonAfter:N&&O.createElement(Ye,{form:!0,space:!0},N),classNames:Object.assign(Object.assign(Object.assign({},v),p==null?void 0:p.classNames),{input:T({[`${m}-sm`]:U==="small",[`${m}-lg`]:U==="large",[`${m}-rtl`]:P==="rtl"},v==null?void 0:v.input,(a=p==null?void 0:p.classNames)===null||a===void 0?void 0:a.input,H),variant:T({[`${m}-${ie}`]:ue},ke(m,V)),affixWrapper:T({[`${m}-affix-wrapper-sm`]:U==="small",[`${m}-affix-wrapper-lg`]:U==="large",[`${m}-affix-wrapper-rtl`]:P==="rtl"},H),wrapper:T({[`${m}-group-rtl`]:P==="rtl"},H),groupWrapper:T({[`${m}-group-wrapper-sm`]:U==="small",[`${m}-group-wrapper-lg`]:U==="large",[`${m}-group-wrapper-rtl`]:P==="rtl",[`${m}-group-wrapper-${ie}`]:ue},ke(`${m}-group-wrapper`,V,E),H)})})))}),Ie=Lt,Kt=e=>{const{componentCls:o,paddingXS:a}=e;return{[o]:{display:"inline-flex",alignItems:"center",flexWrap:"nowrap",columnGap:a,"&-rtl":{direction:"rtl"},[`${o}-input`]:{textAlign:"center",paddingInline:e.paddingXXS},[`&${o}-sm ${o}-input`]:{paddingInline:e.calc(e.paddingXXS).div(2).equal()},[`&${o}-lg ${o}-input`]:{paddingInline:e.paddingXS}}}},Ht=dt(["Input","OTP"],e=>{const o=ft(e,gt(e));return[Kt(o)]},ht);var Ut=globalThis&&globalThis.__rest||function(e,o){var a={};for(var t in e)Object.prototype.hasOwnProperty.call(e,t)&&o.indexOf(t)<0&&(a[t]=e[t]);if(e!=null&&typeof Object.getOwnPropertySymbols=="function")for(var n=0,t=Object.getOwnPropertySymbols(e);n<t.length;n++)o.indexOf(t[n])<0&&Object.prototype.propertyIsEnumerable.call(e,t[n])&&(a[t[n]]=e[t[n]]);return a};const Wt=r.forwardRef((e,o)=>{const{value:a,onChange:t,onActiveChange:n,index:s,mask:l}=e,i=Ut(e,["value","onChange","onActiveChange","index","mask"]),f=a&&typeof l=="string"?l:a,g=b=>{t(s,b.target.value)},c=r.useRef(null);r.useImperativeHandle(o,()=>c.current);const x=()=>{Fe(()=>{var b;const _=(b=c.current)===null||b===void 0?void 0:b.input;document.activeElement===_&&_&&_.select()})},N=b=>{const{key:_,ctrlKey:X,metaKey:L}=b;_==="ArrowLeft"?n(s-1):_==="ArrowRight"?n(s+1):_==="z"&&(X||L)&&b.preventDefault(),x()},M=b=>{b.key==="Backspace"&&!a&&n(s-1),x()};return r.createElement(Ie,Object.assign({type:l===!0?"password":"text"},i,{ref:c,value:f,onInput:g,onFocus:x,onKeyDown:N,onKeyUp:M,onMouseDown:x,onMouseUp:x}))}),Xt=Wt;var Gt=globalThis&&globalThis.__rest||function(e,o){var a={};for(var t in e)Object.prototype.hasOwnProperty.call(e,t)&&o.indexOf(t)<0&&(a[t]=e[t]);if(e!=null&&typeof Object.getOwnPropertySymbols=="function")for(var n=0,t=Object.getOwnPropertySymbols(e);n<t.length;n++)o.indexOf(t[n])<0&&Object.prototype.propertyIsEnumerable.call(e,t[n])&&(a[t[n]]=e[t[n]]);return a};function Re(e){return(e||"").split("")}const qt=r.forwardRef((e,o)=>{const{prefixCls:a,length:t=6,size:n,defaultValue:s,value:l,onChange:i,formatter:f,variant:g,disabled:c,status:x,autoFocus:N,mask:M,type:b,onInput:_,inputMode:X}=e,L=Gt(e,["prefixCls","length","size","defaultValue","value","onChange","formatter","variant","disabled","status","autoFocus","mask","type","onInput","inputMode"]),{getPrefixCls:R,direction:v}=r.useContext(be),F=R("otp",a),C=vt(L,{aria:!0,data:!0,attr:!0}),u=De(F),[P,p,m]=Ht(F,u),k=$e(d=>n??d),z=r.useContext(xe),w=We(z.status,x),H=r.useMemo(()=>Object.assign(Object.assign({},z),{status:w,hasFeedback:!1,feedbackIcon:null}),[z,w]),K=r.useRef(null),j=r.useRef({});r.useImperativeHandle(o,()=>({focus:()=>{var d;(d=j.current[0])===null||d===void 0||d.focus()},blur:()=>{var d;for(let h=0;h<t;h+=1)(d=j.current[h])===null||d===void 0||d.blur()},nativeElement:K.current}));const $=d=>f?f(d):d,[U,G]=r.useState(Re($(s||"")));r.useEffect(()=>{l!==void 0&&G(Re(l))},[l]);const q=Xe(d=>{G(d),_&&_(d),i&&d.length===t&&d.every(h=>h)&&d.some((h,I)=>U[I]!==h)&&i(d.join(""))}),y=Xe((d,h)=>{let I=Ve(U);for(let S=0;S<d;S+=1)I[S]||(I[S]="");h.length<=1?I[d]=h:I=I.slice(0,d).concat(Re(h)),I=I.slice(0,t);for(let S=I.length-1;S>=0&&!I[S];S-=1)I.pop();const ee=$(I.map(S=>S||" ").join(""));return I=Re(ee).map((S,Z)=>S===" "&&!I[Z]?I[Z]:S),I}),E=(d,h)=>{var I;const ee=y(d,h),S=Math.min(d+h.length,t-1);S!==d&&ee[d]!==void 0&&((I=j.current[S])===null||I===void 0||I.focus()),q(ee)},B=d=>{var h;(h=j.current[d])===null||h===void 0||h.focus()},V={variant:g,disabled:c,status:w,mask:M,type:b,inputMode:X};return P(r.createElement("div",Object.assign({},C,{ref:K,className:T(F,{[`${F}-sm`]:k==="small",[`${F}-lg`]:k==="large",[`${F}-rtl`]:v==="rtl"},m,p)}),r.createElement(xe.Provider,{value:H},Array.from({length:t}).map((d,h)=>{const I=`otp-${h}`,ee=U[h]||"";return r.createElement(Xt,Object.assign({ref:S=>{j.current[h]=S},key:I,index:h,size:k,htmlSize:1,className:`${F}-input`,onChange:E,value:ee,onActiveChange:B,autoFocus:h===0&&N},V))}))))}),Yt=qt;var Qt=globalThis&&globalThis.__rest||function(e,o){var a={};for(var t in e)Object.prototype.hasOwnProperty.call(e,t)&&o.indexOf(t)<0&&(a[t]=e[t]);if(e!=null&&typeof Object.getOwnPropertySymbols=="function")for(var n=0,t=Object.getOwnPropertySymbols(e);n<t.length;n++)o.indexOf(t[n])<0&&Object.prototype.propertyIsEnumerable.call(e,t[n])&&(a[t[n]]=e[t[n]]);return a};const Zt=e=>e?r.createElement($t,null):r.createElement(wt,null),Jt={click:"onClick",hover:"onMouseOver"},en=r.forwardRef((e,o)=>{const{disabled:a,action:t="click",visibilityToggle:n=!0,iconRender:s=Zt}=e,l=r.useContext(Le),i=a??l,f=typeof n=="object"&&n.visible!==void 0,[g,c]=r.useState(()=>f?n.visible:!1),x=r.useRef(null);r.useEffect(()=>{f&&c(n.visible)},[f,n]);const N=st(x),M=()=>{i||(g&&N(),c(k=>{var z;const w=!k;return typeof n=="object"&&((z=n.onVisibleChange)===null||z===void 0||z.call(n,w)),w}))},b=k=>{const z=Jt[t]||"",w=s(g),H={[z]:M,className:`${k}-icon`,key:"passwordIcon",onMouseDown:K=>{K.preventDefault()},onMouseUp:K=>{K.preventDefault()}};return r.cloneElement(r.isValidElement(w)?w:r.createElement("span",null,w),H)},{className:_,prefixCls:X,inputPrefixCls:L,size:R}=e,v=Qt(e,["className","prefixCls","inputPrefixCls","size"]),{getPrefixCls:F}=r.useContext(be),C=F("input",L),u=F("input-password",X),P=n&&b(u),p=T(u,_,{[`${u}-${R}`]:!!R}),m=Object.assign(Object.assign({},Je(v,["suffix","iconRender","visibilityToggle"])),{type:g?"text":"password",className:p,prefixCls:C,suffix:P});return R&&(m.size=R),r.createElement(Ie,Object.assign({ref:Ke(o,x)},m))}),tn=en;var nn=globalThis&&globalThis.__rest||function(e,o){var a={};for(var t in e)Object.prototype.hasOwnProperty.call(e,t)&&o.indexOf(t)<0&&(a[t]=e[t]);if(e!=null&&typeof Object.getOwnPropertySymbols=="function")for(var n=0,t=Object.getOwnPropertySymbols(e);n<t.length;n++)o.indexOf(t[n])<0&&Object.prototype.propertyIsEnumerable.call(e,t[n])&&(a[t[n]]=e[t[n]]);return a};const an=r.forwardRef((e,o)=>{const{prefixCls:a,inputPrefixCls:t,className:n,size:s,suffix:l,enterButton:i=!1,addonAfter:f,loading:g,disabled:c,onSearch:x,onChange:N,onCompositionStart:M,onCompositionEnd:b}=e,_=nn(e,["prefixCls","inputPrefixCls","className","size","suffix","enterButton","addonAfter","loading","disabled","onSearch","onChange","onCompositionStart","onCompositionEnd"]),{getPrefixCls:X,direction:L}=r.useContext(be),R=r.useRef(!1),v=X("input-search",a),F=X("input",t),{compactSize:C}=et(v,L),u=$e(y=>{var E;return(E=s??C)!==null&&E!==void 0?E:y}),P=r.useRef(null),p=y=>{y!=null&&y.target&&y.type==="click"&&x&&x(y.target.value,y,{source:"clear"}),N==null||N(y)},m=y=>{var E;document.activeElement===((E=P.current)===null||E===void 0?void 0:E.input)&&y.preventDefault()},k=y=>{var E,B;x&&x((B=(E=P.current)===null||E===void 0?void 0:E.input)===null||B===void 0?void 0:B.value,y,{source:"input"})},z=y=>{R.current||g||k(y)},w=typeof i=="boolean"?r.createElement(xt,null):null,H=`${v}-button`;let K;const j=i||{},$=j.type&&j.type.__ANT_BUTTON===!0;$||j.type==="button"?K=Ge(j,Object.assign({onMouseDown:m,onClick:y=>{var E,B;(B=(E=j==null?void 0:j.props)===null||E===void 0?void 0:E.onClick)===null||B===void 0||B.call(E,y),k(y)},key:"enterButton"},$?{className:H,size:u}:{})):K=r.createElement(mt,{className:H,type:i?"primary":void 0,size:u,disabled:c,key:"enterButton",onMouseDown:m,onClick:k,loading:g,icon:w},i),f&&(K=[K,Ge(f,{key:"addonAfter"})]);const U=T(v,{[`${v}-rtl`]:L==="rtl",[`${v}-${u}`]:!!u,[`${v}-with-button`]:!!i},n),G=y=>{R.current=!0,M==null||M(y)},q=y=>{R.current=!1,b==null||b(y)};return r.createElement(Ie,Object.assign({ref:Ke(P,o),onPressEnter:z},_,{size:u,onCompositionStart:G,onCompositionEnd:q,prefixCls:F,addonAfter:K,suffix:l,onChange:p,className:U,disabled:c}))}),on=an;var rn=`
  min-height:0 !important;
  max-height:none !important;
  height:0 !important;
  visibility:hidden !important;
  overflow:hidden !important;
  position:absolute !important;
  z-index:-1000 !important;
  top:0 !important;
  right:0 !important;
  pointer-events: none !important;
`,sn=["letter-spacing","line-height","padding-top","padding-bottom","font-family","font-weight","font-size","font-variant","text-rendering","text-transform","width","text-indent","padding-left","padding-right","border-width","box-sizing","word-break","white-space"],_e={},re;function ln(e){var o=arguments.length>1&&arguments[1]!==void 0?arguments[1]:!1,a=e.getAttribute("id")||e.getAttribute("data-reactid")||e.getAttribute("name");if(o&&_e[a])return _e[a];var t=window.getComputedStyle(e),n=t.getPropertyValue("box-sizing")||t.getPropertyValue("-moz-box-sizing")||t.getPropertyValue("-webkit-box-sizing"),s=parseFloat(t.getPropertyValue("padding-bottom"))+parseFloat(t.getPropertyValue("padding-top")),l=parseFloat(t.getPropertyValue("border-bottom-width"))+parseFloat(t.getPropertyValue("border-top-width")),i=sn.map(function(g){return"".concat(g,":").concat(t.getPropertyValue(g))}).join(";"),f={sizingStyle:i,paddingSize:s,borderSize:l,boxSizing:n};return o&&a&&(_e[a]=f),f}function un(e){var o=arguments.length>1&&arguments[1]!==void 0?arguments[1]:!1,a=arguments.length>2&&arguments[2]!==void 0?arguments[2]:null,t=arguments.length>3&&arguments[3]!==void 0?arguments[3]:null;re||(re=document.createElement("textarea"),re.setAttribute("tab-index","-1"),re.setAttribute("aria-hidden","true"),re.setAttribute("name","hiddenTextarea"),document.body.appendChild(re)),e.getAttribute("wrap")?re.setAttribute("wrap",e.getAttribute("wrap")):re.removeAttribute("wrap");var n=ln(e,o),s=n.paddingSize,l=n.borderSize,i=n.boxSizing,f=n.sizingStyle;re.setAttribute("style","".concat(f,";").concat(rn)),re.value=e.value||e.placeholder||"";var g=void 0,c=void 0,x,N=re.scrollHeight;if(i==="border-box"?N+=l:i==="content-box"&&(N-=s),a!==null||t!==null){re.value=" ";var M=re.scrollHeight-s;a!==null&&(g=M*a,i==="border-box"&&(g=g+s+l),N=Math.max(g,N)),t!==null&&(c=M*t,i==="border-box"&&(c=c+s+l),x=N>c?"":"hidden",N=Math.min(c,N))}var b={height:N,overflowY:x,resize:"none"};return g&&(b.minHeight=g),c&&(b.maxHeight=c),b}var cn=["prefixCls","defaultValue","value","autoSize","onResize","className","style","disabled","onChange","onInternalAutoSize"],je=0,Te=1,Me=2,dn=r.forwardRef(function(e,o){var a=e,t=a.prefixCls,n=a.defaultValue,s=a.value,l=a.autoSize,i=a.onResize,f=a.className,g=a.style,c=a.disabled,x=a.onChange;a.onInternalAutoSize;var N=ze(a,cn),M=He(n,{value:s,postState:function(d){return d??""}}),b=le(M,2),_=b[0],X=b[1],L=function(d){X(d.target.value),x==null||x(d)},R=r.useRef();r.useImperativeHandle(o,function(){return{textArea:R.current}});var v=r.useMemo(function(){return l&&Be(l)==="object"?[l.minRows,l.maxRows]:[]},[l]),F=le(v,2),C=F[0],u=F[1],P=!!l,p=function(){try{if(document.activeElement===R.current){var d=R.current,h=d.selectionStart,I=d.selectionEnd,ee=d.scrollTop;R.current.setSelectionRange(h,I),R.current.scrollTop=ee}}catch{}},m=r.useState(Me),k=le(m,2),z=k[0],w=k[1],H=r.useState(),K=le(H,2),j=K[0],$=K[1],U=function(){w(je)};qe(function(){P&&U()},[s,C,u,P]),qe(function(){if(z===je)w(Te);else if(z===Te){var V=un(R.current,!1,C,u);w(Me),$(V)}else p()},[z]);var G=r.useRef(),q=function(){Fe.cancel(G.current)},y=function(d){z===Me&&(i==null||i(d),l&&(q(),G.current=Fe(function(){U()})))};r.useEffect(function(){return q},[]);var E=P?j:null,B=ae(ae({},g),E);return(z===je||z===Te)&&(B.overflowY="hidden",B.overflowX="hidden"),r.createElement(pt,{onResize:y,disabled:!(l||i)},r.createElement("textarea",he({},N,{ref:R,style:B,className:T(t,f,se({},"".concat(t,"-disabled"),c)),disabled:c,value:_,onChange:L})))}),fn=["defaultValue","value","onFocus","onBlur","onChange","allowClear","maxLength","onCompositionStart","onCompositionEnd","suffix","prefixCls","showCount","count","className","style","disabled","hidden","classNames","styles","onResize","onClear","onPressEnter","readOnly","autoSize","onKeyDown"],vn=O.forwardRef(function(e,o){var a,t=e.defaultValue,n=e.value,s=e.onFocus,l=e.onBlur,i=e.onChange,f=e.allowClear,g=e.maxLength,c=e.onCompositionStart,x=e.onCompositionEnd,N=e.suffix,M=e.prefixCls,b=M===void 0?"rc-textarea":M,_=e.showCount,X=e.count,L=e.className,R=e.style,v=e.disabled,F=e.hidden,C=e.classNames,u=e.styles,P=e.onResize,p=e.onClear,m=e.onPressEnter,k=e.readOnly,z=e.autoSize,w=e.onKeyDown,H=ze(e,fn),K=He(t,{value:n,defaultValue:t}),j=le(K,2),$=j[0],U=j[1],G=$==null?"":String($),q=O.useState(!1),y=le(q,2),E=y[0],B=y[1],V=O.useRef(!1),d=O.useState(null),h=le(d,2),I=h[0],ee=h[1],S=r.useRef(null),Z=r.useRef(null),J=function(){var D;return(D=Z.current)===null||D===void 0?void 0:D.textArea},ie=function(){J().focus()};r.useImperativeHandle(o,function(){var Q;return{resizableTextArea:Z.current,focus:ie,blur:function(){J().blur()},nativeElement:((Q=S.current)===null||Q===void 0?void 0:Q.nativeElement)||J()}}),r.useEffect(function(){B(function(Q){return!v&&Q})},[v]);var ue=O.useState(null),te=le(ue,2),ne=te[0],ve=te[1];O.useEffect(function(){if(ne){var Q;(Q=J()).setSelectionRange.apply(Q,Ve(ne))}},[ne]);var oe=ot(X,_),me=(a=oe.max)!==null&&a!==void 0?a:g,Ae=Number(me)>0,ye=oe.strategy(G),Ne=!!me&&ye>me,we=function(D,fe){var Ee=fe;!V.current&&oe.exceedFormatter&&oe.max&&oe.strategy(fe)>oe.max&&(Ee=oe.exceedFormatter(fe,{max:oe.max}),fe!==Ee&&ve([J().selectionStart||0,J().selectionEnd||0])),U(Ee),Oe(D.currentTarget,D,i,Ee)},Pe=function(D){V.current=!0,c==null||c(D)},W=function(D){V.current=!1,we(D,D.currentTarget.value),x==null||x(D)},A=function(D){we(D,D.target.value)},Y=function(D){D.key==="Enter"&&m&&m(D),w==null||w(D)},pe=function(D){B(!0),s==null||s(D)},de=function(D){B(!1),l==null||l(D)},ce=function(D){U(""),ie(),Oe(J(),D,i)},ge=N,Se;oe.show&&(oe.showFormatter?Se=oe.showFormatter({value:G,count:ye,maxLength:me}):Se="".concat(ye).concat(Ae?" / ".concat(me):""),ge=O.createElement(O.Fragment,null,ge,O.createElement("span",{className:T("".concat(b,"-data-count"),C==null?void 0:C.count),style:u==null?void 0:u.count},Se)));var lt=function(D){var fe;P==null||P(D),(fe=J())!==null&&fe!==void 0&&fe.style.height&&ee(!0)},it=!z&&!_&&!f;return O.createElement(at,{ref:S,value:G,allowClear:f,handleReset:ce,suffix:ge,prefixCls:b,classNames:ae(ae({},C),{},{affixWrapper:T(C==null?void 0:C.affixWrapper,se(se({},"".concat(b,"-show-count"),_),"".concat(b,"-textarea-allow-clear"),f))}),disabled:v,focused:E,className:T(L,Ne&&"".concat(b,"-out-of-range")),style:ae(ae({},R),I&&!it?{height:"auto"}:{}),dataAttrs:{affixWrapper:{"data-count":typeof Se=="string"?Se:void 0}},hidden:F,readOnly:k,onClear:p},O.createElement(dn,he({},H,{autoSize:z,maxLength:g,onKeyDown:Y,onChange:A,onFocus:pe,onBlur:de,onCompositionStart:Pe,onCompositionEnd:W,className:T(C==null?void 0:C.textarea),style:ae(ae({},u==null?void 0:u.textarea),{},{resize:R==null?void 0:R.resize}),disabled:v,prefixCls:b,onResize:lt,ref:Z,readOnly:k})))}),mn=globalThis&&globalThis.__rest||function(e,o){var a={};for(var t in e)Object.prototype.hasOwnProperty.call(e,t)&&o.indexOf(t)<0&&(a[t]=e[t]);if(e!=null&&typeof Object.getOwnPropertySymbols=="function")for(var n=0,t=Object.getOwnPropertySymbols(e);n<t.length;n++)o.indexOf(t[n])<0&&Object.prototype.propertyIsEnumerable.call(e,t[n])&&(a[t[n]]=e[t[n]]);return a};const pn=r.forwardRef((e,o)=>{var a,t;const{prefixCls:n,bordered:s=!0,size:l,disabled:i,status:f,allowClear:g,classNames:c,rootClassName:x,className:N,style:M,styles:b,variant:_}=e,X=mn(e,["prefixCls","bordered","size","disabled","status","allowClear","classNames","rootClassName","className","style","styles","variant"]),{getPrefixCls:L,direction:R,textArea:v}=r.useContext(be),F=$e(l),C=r.useContext(Le),u=i??C,{status:P,hasFeedback:p,feedbackIcon:m}=r.useContext(xe),k=We(P,f),z=r.useRef(null);r.useImperativeHandle(o,()=>{var y;return{resizableTextArea:(y=z.current)===null||y===void 0?void 0:y.resizableTextArea,focus:E=>{var B,V;nt((V=(B=z.current)===null||B===void 0?void 0:B.resizableTextArea)===null||V===void 0?void 0:V.textArea,E)},blur:()=>{var E;return(E=z.current)===null||E===void 0?void 0:E.blur()}}});const w=L("input",n),H=De(w),[K,j,$]=Ue(w,H),[U,G]=tt("textArea",_,s),q=rt(g??(v==null?void 0:v.allowClear));return K(r.createElement(vn,Object.assign({autoComplete:v==null?void 0:v.autoComplete},X,{style:Object.assign(Object.assign({},v==null?void 0:v.style),M),styles:Object.assign(Object.assign({},v==null?void 0:v.styles),b),disabled:u,allowClear:q,className:T($,H,N,x,v==null?void 0:v.className),classNames:Object.assign(Object.assign(Object.assign({},c),v==null?void 0:v.classNames),{textarea:T({[`${w}-sm`]:F==="small",[`${w}-lg`]:F==="large"},j,c==null?void 0:c.textarea,(a=v==null?void 0:v.classNames)===null||a===void 0?void 0:a.textarea),variant:T({[`${w}-${U}`]:G},ke(w,k)),affixWrapper:T(`${w}-textarea-affix-wrapper`,{[`${w}-affix-wrapper-rtl`]:R==="rtl",[`${w}-affix-wrapper-sm`]:F==="small",[`${w}-affix-wrapper-lg`]:F==="large",[`${w}-textarea-show-count`]:e.showCount||((t=e.count)===null||t===void 0?void 0:t.show)},j)}),prefixCls:w,suffix:p&&r.createElement("span",{className:`${w}-textarea-suffix`},m),ref:z})))}),gn=pn,Ce=Ie;Ce.Group=kt;Ce.Search=on;Ce.TextArea=gn;Ce.Password=tn;Ce.OTP=Yt;const Sn=Ce;export{Sn as I,It as r,yn as u};
