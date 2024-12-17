import{r as s,j as e}from"./index-UpcQ8XUw.js";import{u as F}from"./viewport-BFSY3irf.js";import{e as J,u as Q,f as _,s as Y,j as x}from"./owner-BLrbmOWj.js";import{m as ee}from"./spring-C80N1tKa.js";import{s as se,P as te,R as E,a as D,C as L,T as z,D as oe,b as ne}from"./index-BdLpNPKg.js";import{u as ae,D as re}from"./use-is-unmounted-DIErHh7q.js";import{u as le}from"./use-event-callback-BoXR1gav.js";import{s as b,n as ie}from"./dom-BowoBODo.js";import{c as w}from"./StyledButton-CQBvDIfc.js";import{u as ce,a as de}from"./use-drag-controls-BmdwdB98.js";import{m as U}from"./proxy-Cw92-JY2.js";import{A as me}from"./index-DZzsMnT1.js";const ue={},W=s.createContext(null),Ee=()=>s.useContext(W),l=J([]),xe=({className:t})=>e.jsx("svg",{xmlns:"http://www.w3.org/2000/svg",width:"1.4em",height:"1.4em",viewBox:"0 0 32 32",className:t,children:e.jsx("path",{fill:"currentColor",d:"M24 9.4L22.6 8L16 14.6L9.4 8L8 9.4l6.6 6.6L8 22.6L9.4 24l6.6-6.6l6.6 6.6l1.4-1.4l-6.6-6.6L24 9.4z"})}),he={scale:1,opacity:1},O={scale:.96,opacity:0},T={initial:O,animate:he,exit:O,transition:ee},$=100,fe=s.memo(function({item:n,index:d,onClose:m,children:h,isTop:C}){const f=Q(l),i=le(()=>{f(r=>r.filter(p=>p.id!==n.id)),m?.(!1)}),u=_(s.useMemo(()=>Y(l,r=>r.every(p=>p.id!==n.id)),[n.id]));s.useEffect(()=>{u&&(document.body.style.pointerEvents="auto")},[u]);const o=s.useCallback(r=>{r||i()},[i]),{CustomModalComponent:a,modalClassName:K,content:V,title:g,clickOutsideToDismiss:P,modalContainerClassName:S,wrapper:v=s.Fragment,max:X}=n,j=s.useMemo(()=>({zIndex:$+d+1}),[d]),I=s.useCallback(r=>{b(r),i()},[i]),k=F(),Z=ae(),c=ce(),N=de();s.useEffect(()=>{k||ie(()=>{c.start(T.animate)})},[c,k]);const q=s.useCallback(()=>{c.start({scale:1.05,transition:{duration:.06}}).then(()=>{Z.current||c.start({scale:1})})},[c]);s.useEffect(()=>{if(!C)return c.start({scale:.96,y:10}),()=>{try{c.stop(),c.start({scale:1,y:0})}catch{}}},[C]);const G=s.useRef(null),y=s.useMemo(()=>({dismiss:()=>{A.current?.dismiss(),i()}}),[i]),H=s.useMemo(()=>({...y,ref:G}),[y]),M=e.jsx(W.Provider,{value:H,children:h??s.createElement(V,y)}),R=s.useRef(null),A=s.useRef(null);if(k){const r=x.get(se).length;return e.jsx(v,{children:e.jsx(te,{ref:A,title:g,defaultOpen:!0,zIndex:1e3+r,onOpenChange:p=>{p||setTimeout(()=>{i()},1e3)},content:M})})}return a?e.jsx(v,{children:e.jsx(E,{open:!0,onOpenChange:o,children:e.jsx(D,{children:e.jsx(L,{asChild:!0,children:e.jsxs("div",{className:w("fixed inset-0 z-20 overflow-auto",u?"!pointer-events-none":"pointer-events-auto",S),onClick:P?I:void 0,style:j,children:[e.jsx(z,{className:"sr-only",children:g}),e.jsx("div",{className:"contents",onClick:b,children:e.jsx(a,{children:M})})]})})})})}):e.jsx(v,{children:e.jsx(E,{open:!0,onOpenChange:o,children:e.jsx(D,{children:e.jsx(L,{asChild:!0,children:e.jsx("div",{ref:R,className:w("center fixed inset-0 z-20 flex",u?"!pointer-events-none":"pointer-events-auto",S),style:j,onClick:P?I:q,children:e.jsxs(U.div,{style:j,...T,animate:c,className:w("relative flex flex-col overflow-hidden rounded-lg","bg-zinc-50/90 dark:bg-neutral-900/90","p-2 shadow-2xl shadow-stone-300 backdrop-blur-sm dark:shadow-stone-800",X?"h-[90vh] w-[90vw]":"max-h-[70vh] min-w-[300px] max-w-[90vw] lg:max-h-[calc(100vh-20rem)] lg:max-w-[70vw]","border border-slate-200 dark:border-neutral-800",K),onClick:b,drag:!0,dragControls:N,dragListener:!1,dragElastic:0,dragMomentum:!1,dragConstraints:R,whileDrag:{cursor:"grabbing"},children:[e.jsxs("div",{className:"relative flex items-center",onPointerDown:r=>N.start(r),children:[e.jsx(z,{className:"shrink-0 grow items-center px-4 py-1 text-lg font-medium",children:g}),e.jsx(oe,{className:"p-2",onClick:i,children:e.jsx(xe,{})})]}),e.jsx(re,{className:"my-2 shrink-0 border-slate-200 opacity-80 dark:border-neutral-800"}),e.jsx("div",{className:"min-h-0 shrink grow overflow-auto px-4 py-2",children:M})]})})})})})})}),De=()=>({push(t){location.pathname=t}}),pe=()=>location.pathname,Ce=({zIndex:t})=>e.jsx(ne,{children:e.jsx(U.div,{id:"modal-overlay",className:"pointer-events-none fixed inset-0 z-[11] bg-zinc-50/80 dark:bg-neutral-900/80",initial:{opacity:0},animate:{opacity:1},exit:{opacity:0},style:{zIndex:t}})}),ge=()=>{const t=pe();s.useEffect(()=>{B.dismissAll()},[t])},Le=t=>{const n=s.useId(),d=s.useRef(0),{wrapper:m}={};return{present:s.useCallback(h=>{const C=`${n}-${++d.current}`,f=h.id??C,u=x.get(l).find(o=>o.id===f);return u?x.set(l,o=>{const a=o.indexOf(u);return[...o.slice(0,a),...o.slice(a+1),u]}):x.set(l,o=>{const a={...h,id:f,wrapper:m};return ue[a.id]=a,o.concat(a)}),()=>{x.set(l,o=>o.filter(a=>a.id!==f))}},[n]),...B}},B={dismiss(t){x.set(l,n=>n.filter(d=>d.id!==t))},dismissTop(){x.set(l,t=>t.slice(0,-1))},dismissAll(){x.set(l,[])}},ze=({children:t})=>e.jsxs(e.Fragment,{children:[t,e.jsx(ve,{})]}),ve=()=>{const t=_(l);ge();const n=t.some(m=>m.overlay),d=F();return e.jsxs(me,{mode:"popLayout",children:[t.map((m,h)=>e.jsx(fe,{item:m,index:h,isTop:h===t.length-1},m.id)),t.length>0&&n&&!d&&e.jsx(Ce,{zIndex:$+t.length-1})]})};export{ze as M,De as a,Ee as b,Le as u};
