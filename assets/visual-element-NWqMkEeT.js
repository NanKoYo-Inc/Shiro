import{F as At,t as ze,n as R,G as fe,H as de,z as Le,I as xt,J as ne,K as St,N as Mt,O as wt,f as k,Q as We,q as B,R as Vt,e as L,A as qe,c as Pt,T as Ct,B as Ft,i as Dt}from"./proxy-Cw92-JY2.js";function pe(t,e,n){const s=t.getProps();return At(s,e,n!==void 0?n:s.custom,t)}const P=t=>t*1e3,C=t=>t/1e3,Ot={type:"spring",stiffness:500,damping:25,restSpeed:10},Kt=t=>({type:"spring",stiffness:550,damping:t===0?2*Math.sqrt(550):30,restSpeed:10}),Rt={type:"keyframes",duration:.8},kt={type:"keyframes",ease:[.25,.1,.35,1],duration:.3},It=(t,{keyframes:e})=>e.length>2?Rt:ze.has(t)?t.startsWith("scale")?Kt(e[1]):Ot:kt;function $e(t,e){return t?t[e]||t.default||t:void 0}const je={current:!1},Nt=t=>t!==null;function Y(t,{repeat:e,repeatType:n="loop"},s){const i=t.filter(Nt),r=e&&n!=="loop"&&e%2===1?0:i.length-1;return!r||s===void 0?i[r]:s}const Ye=(t,e,n)=>(((1-3*n+3*e)*t+(3*n-6*e))*t+3*e)*t,_t=1e-7,Et=12;function Bt(t,e,n,s,i){let r,o,a=0;do o=e+(n-e)/2,r=Ye(o,s,i)-t,r>0?n=o:e=o;while(Math.abs(r)>_t&&++a<Et);return o}function G(t,e,n,s){if(t===e&&n===s)return R;const i=r=>Bt(r,0,1,t,n);return r=>r===0||r===1?r:Ye(i(r),e,s)}const He=t=>e=>e<=.5?t(2*e)/2:(2-t(2*(1-e)))/2,Xe=t=>e=>1-t(1-e),Ze=G(.33,1.53,.69,.99),me=Xe(Ze),Je=He(me),Qe=t=>(t*=2)<1?.5*me(t):.5*(2-Math.pow(2,-10*(t-1))),ge=t=>1-Math.sin(Math.acos(t)),Ut=Xe(ge),et=He(ge),Gt=t=>/^0[^.\s]+$/u.test(t);function zt(t){return typeof t=="number"?t===0:t!==null?t==="none"||t==="0"||Gt(t):!0}let Is=R,se=R;const Lt=t=>/^-?(?:\d+(?:\.\d+)?|\.\d+)$/u.test(t),Wt=/^var\(--(?:([\w-]+)|([\w-]+), ?([a-zA-Z\d ()%#.,-]+))\)/u;function qt(t){const e=Wt.exec(t);if(!e)return[,];const[,n,s,i]=e;return[`--${n??s}`,i]}function tt(t,e,n=1){const[s,i]=qt(t);if(!s)return;const r=window.getComputedStyle(e).getPropertyValue(s);if(r){const o=r.trim();return Lt(o)?parseFloat(o):o}return fe(i)?tt(i,e,n+1):i}const $t=new Set(["width","height","top","left","right","bottom","x","y","translateX","translateY"]),we=t=>t===de||t===Le,Ve=(t,e)=>parseFloat(t.split(", ")[e]),Pe=(t,e)=>(n,{transform:s})=>{if(s==="none"||!s)return 0;const i=s.match(/^matrix3d\((.+)\)$/u);if(i)return Ve(i[1],e);{const r=s.match(/^matrix\((.+)\)$/u);return r?Ve(r[1],t):0}},jt=new Set(["x","y","z"]),Yt=xt.filter(t=>!jt.has(t));function Ht(t){const e=[];return Yt.forEach(n=>{const s=t.getValue(n);s!==void 0&&(e.push([n,s.get()]),s.set(n.startsWith("scale")?1:0))}),e}const N={width:({x:t},{paddingLeft:e="0",paddingRight:n="0"})=>t.max-t.min-parseFloat(e)-parseFloat(n),height:({y:t},{paddingTop:e="0",paddingBottom:n="0"})=>t.max-t.min-parseFloat(e)-parseFloat(n),top:(t,{top:e})=>parseFloat(e),left:(t,{left:e})=>parseFloat(e),bottom:({y:t},{top:e})=>parseFloat(e)+(t.max-t.min),right:({x:t},{left:e})=>parseFloat(e)+(t.max-t.min),x:Pe(4,13),y:Pe(5,14)};N.translateX=N.x;N.translateY=N.y;const Xt=t=>e=>e.test(t),Zt={test:t=>t==="auto",parse:t=>t},Jt=[de,Le,ne,St,Mt,wt,Zt],Ce=t=>Jt.find(Xt(t)),O=new Set;let ie=!1,re=!1;function nt(){if(re){const t=Array.from(O).filter(s=>s.needsMeasurement),e=new Set(t.map(s=>s.element)),n=new Map;e.forEach(s=>{const i=Ht(s);i.length&&(n.set(s,i),s.render())}),t.forEach(s=>s.measureInitialState()),e.forEach(s=>{s.render();const i=n.get(s);i&&i.forEach(([r,o])=>{var a;(a=s.getValue(r))===null||a===void 0||a.set(o)})}),t.forEach(s=>s.measureEndState()),t.forEach(s=>{s.suspendedScrollY!==void 0&&window.scrollTo(0,s.suspendedScrollY)})}re=!1,ie=!1,O.forEach(t=>t.complete()),O.clear()}function st(){O.forEach(t=>{t.readKeyframes(),t.needsMeasurement&&(re=!0)})}function Qt(){st(),nt()}class it{constructor(e,n,s,i,r,o=!1){this.isComplete=!1,this.isAsync=!1,this.needsMeasurement=!1,this.isScheduled=!1,this.unresolvedKeyframes=[...e],this.onComplete=n,this.name=s,this.motionValue=i,this.element=r,this.isAsync=o}scheduleResolve(){this.isScheduled=!0,this.isAsync?(O.add(this),ie||(ie=!0,k.read(st),k.resolveKeyframes(nt))):(this.readKeyframes(),this.complete())}readKeyframes(){const{unresolvedKeyframes:e,name:n,element:s,motionValue:i}=this;for(let r=0;r<e.length;r++)if(e[r]===null)if(r===0){const o=i?.get(),a=e[e.length-1];if(o!==void 0)e[0]=o;else if(s&&n){const l=s.readValue(n,a);l!=null&&(e[0]=l)}e[0]===void 0&&(e[0]=a),i&&o===void 0&&i.set(e[0])}else e[r]=e[r-1]}setFinalKeyframe(){}measureInitialState(){}renderEndStyles(){}measureEndState(){}complete(){this.isComplete=!0,this.onComplete(this.unresolvedKeyframes,this.finalKeyframe),O.delete(this)}cancel(){this.isComplete||(this.isScheduled=!1,O.delete(this))}resume(){this.isComplete||this.scheduleResolve()}}const E=t=>Math.round(t*1e5)/1e5,ye=/-?(?:\d+(?:\.\d+)?|\.\d+)/gu;function en(t){return t==null}const tn=/^(?:#[\da-f]{3,8}|(?:rgb|hsl)a?\((?:-?[\d.]+%?[,\s]+){2}-?[\d.]+%?\s*(?:[,/]\s*)?(?:\b\d+(?:\.\d+)?|\.\d+)?%?\))$/iu,ve=(t,e)=>n=>!!(typeof n=="string"&&tn.test(n)&&n.startsWith(t)||e&&!en(n)&&Object.prototype.hasOwnProperty.call(n,e)),rt=(t,e,n)=>s=>{if(typeof s!="string")return s;const[i,r,o,a]=s.match(ye);return{[t]:parseFloat(i),[e]:parseFloat(r),[n]:parseFloat(o),alpha:a!==void 0?parseFloat(a):1}},nn=t=>B(0,255,t),J={...de,transform:t=>Math.round(nn(t))},D={test:ve("rgb","red"),parse:rt("red","green","blue"),transform:({red:t,green:e,blue:n,alpha:s=1})=>"rgba("+J.transform(t)+", "+J.transform(e)+", "+J.transform(n)+", "+E(We.transform(s))+")"};function sn(t){let e="",n="",s="",i="";return t.length>5?(e=t.substring(1,3),n=t.substring(3,5),s=t.substring(5,7),i=t.substring(7,9)):(e=t.substring(1,2),n=t.substring(2,3),s=t.substring(3,4),i=t.substring(4,5),e+=e,n+=n,s+=s,i+=i),{red:parseInt(e,16),green:parseInt(n,16),blue:parseInt(s,16),alpha:i?parseInt(i,16)/255:1}}const oe={test:ve("#"),parse:sn,transform:D.transform},I={test:ve("hsl","hue"),parse:rt("hue","saturation","lightness"),transform:({hue:t,saturation:e,lightness:n,alpha:s=1})=>"hsla("+Math.round(t)+", "+ne.transform(E(e))+", "+ne.transform(E(n))+", "+E(We.transform(s))+")"},x={test:t=>D.test(t)||oe.test(t)||I.test(t),parse:t=>D.test(t)?D.parse(t):I.test(t)?I.parse(t):oe.parse(t),transform:t=>typeof t=="string"?t:t.hasOwnProperty("red")?D.transform(t):I.transform(t)},rn=/(?:#[\da-f]{3,8}|(?:rgb|hsl)a?\((?:-?[\d.]+%?[,\s]+){2}-?[\d.]+%?\s*(?:[,/]\s*)?(?:\b\d+(?:\.\d+)?|\.\d+)?%?\))/giu;function on(t){var e,n;return isNaN(t)&&typeof t=="string"&&(((e=t.match(ye))===null||e===void 0?void 0:e.length)||0)+(((n=t.match(rn))===null||n===void 0?void 0:n.length)||0)>0}const ot="number",at="color",an="var",ln="var(",Fe="${}",cn=/var\s*\(\s*--(?:[\w-]+\s*|[\w-]+\s*,(?:\s*[^)(\s]|\s*\((?:[^)(]|\([^)(]*\))*\))+\s*)\)|#[\da-f]{3,8}|(?:rgb|hsl)a?\((?:-?[\d.]+%?[,\s]+){2}-?[\d.]+%?\s*(?:[,/]\s*)?(?:\b\d+(?:\.\d+)?|\.\d+)?%?\)|-?(?:\d+(?:\.\d+)?|\.\d+)/giu;function U(t){const e=t.toString(),n=[],s={color:[],number:[],var:[]},i=[];let r=0;const a=e.replace(cn,l=>(x.test(l)?(s.color.push(r),i.push(at),n.push(x.parse(l))):l.startsWith(ln)?(s.var.push(r),i.push(an),n.push(l)):(s.number.push(r),i.push(ot),n.push(parseFloat(l))),++r,Fe)).split(Fe);return{values:n,split:a,indexes:s,types:i}}function lt(t){return U(t).values}function ct(t){const{split:e,types:n}=U(t),s=e.length;return i=>{let r="";for(let o=0;o<s;o++)if(r+=e[o],i[o]!==void 0){const a=n[o];a===ot?r+=E(i[o]):a===at?r+=x.transform(i[o]):r+=i[o]}return r}}const un=t=>typeof t=="number"?0:t;function hn(t){const e=lt(t);return ct(t)(e.map(un))}const H={test:on,parse:lt,createTransformer:ct,getAnimatableNone:hn},fn=new Set(["brightness","contrast","saturate","opacity"]);function dn(t){const[e,n]=t.slice(0,-1).split("(");if(e==="drop-shadow")return t;const[s]=n.match(ye)||[];if(!s)return t;const i=n.replace(s,"");let r=fn.has(e)?1:0;return s!==n&&(r*=100),e+"("+r+i+")"}const pn=/\b([a-z-]*)\(.*?\)/gu,ae={...H,getAnimatableNone:t=>{const e=t.match(pn);return e?e.map(dn).join(" "):t}},mn={...Vt,color:x,backgroundColor:x,outlineColor:x,fill:x,stroke:x,borderColor:x,borderTopColor:x,borderRightColor:x,borderBottomColor:x,borderLeftColor:x,filter:ae,WebkitFilter:ae},gn=t=>mn[t];function yn(t,e){let n=gn(t);return n!==ae&&(n=H),n.getAnimatableNone?n.getAnimatableNone(e):void 0}const vn=new Set(["auto","none","0"]);function Tn(t,e,n){let s=0,i;for(;s<t.length&&!i;){const r=t[s];typeof r=="string"&&!vn.has(r)&&U(r).values.length&&(i=t[s]),s++}if(i&&n)for(const r of e)t[r]=yn(n,i)}class bn extends it{constructor(e,n,s,i,r){super(e,n,s,i,r,!0)}readKeyframes(){const{unresolvedKeyframes:e,element:n,name:s}=this;if(!n||!n.current)return;super.readKeyframes();for(let l=0;l<e.length;l++){let u=e[l];if(typeof u=="string"&&(u=u.trim(),fe(u))){const c=tt(u,n.current);c!==void 0&&(e[l]=c),l===e.length-1&&(this.finalKeyframe=u)}}if(this.resolveNoneKeyframes(),!$t.has(s)||e.length!==2)return;const[i,r]=e,o=Ce(i),a=Ce(r);if(o!==a)if(we(o)&&we(a))for(let l=0;l<e.length;l++){const u=e[l];typeof u=="string"&&(e[l]=parseFloat(u))}else this.needsMeasurement=!0}resolveNoneKeyframes(){const{unresolvedKeyframes:e,name:n}=this,s=[];for(let i=0;i<e.length;i++)zt(e[i])&&s.push(i);s.length&&Tn(e,s,n)}measureInitialState(){const{element:e,unresolvedKeyframes:n,name:s}=this;if(!e||!e.current)return;s==="height"&&(this.suspendedScrollY=window.pageYOffset),this.measuredOrigin=N[s](e.measureViewportBox(),window.getComputedStyle(e.current)),n[0]=this.measuredOrigin;const i=n[n.length-1];i!==void 0&&e.getValue(s,i).jump(i,!1)}measureEndState(){var e;const{element:n,name:s,unresolvedKeyframes:i}=this;if(!n||!n.current)return;const r=n.getValue(s);r&&r.jump(this.measuredOrigin,!1);const o=i.length-1,a=i[o];i[o]=N[s](n.measureViewportBox(),window.getComputedStyle(n.current)),a!==null&&this.finalKeyframe===void 0&&(this.finalKeyframe=a),!((e=this.removedTransforms)===null||e===void 0)&&e.length&&this.removedTransforms.forEach(([l,u])=>{n.getValue(l).set(u)}),this.resolveNoneKeyframes()}}function Te(t){return typeof t=="function"}let z;function An(){z=void 0}const K={now:()=>(z===void 0&&K.set(L.isProcessing||qe.useManualTiming?L.timestamp:performance.now()),z),set:t=>{z=t,queueMicrotask(An)}},De=(t,e)=>e==="zIndex"?!1:!!(typeof t=="number"||Array.isArray(t)||typeof t=="string"&&(H.test(t)||t==="0")&&!t.startsWith("url("));function xn(t){const e=t[0];if(t.length===1)return!0;for(let n=0;n<t.length;n++)if(t[n]!==e)return!0}function Sn(t,e,n,s){const i=t[0];if(i===null)return!1;if(e==="display"||e==="visibility")return!0;const r=t[t.length-1],o=De(i,e),a=De(r,e);return!o||!a?!1:xn(t)||(n==="spring"||Te(n))&&s}const Mn=40;class ut{constructor({autoplay:e=!0,delay:n=0,type:s="keyframes",repeat:i=0,repeatDelay:r=0,repeatType:o="loop",...a}){this.isStopped=!1,this.hasAttemptedResolve=!1,this.createdAt=K.now(),this.options={autoplay:e,delay:n,type:s,repeat:i,repeatDelay:r,repeatType:o,...a},this.updateFinishedPromise()}calcStartTime(){return this.resolvedAt?this.resolvedAt-this.createdAt>Mn?this.resolvedAt:this.createdAt:this.createdAt}get resolved(){return!this._resolved&&!this.hasAttemptedResolve&&Qt(),this._resolved}onKeyframesResolved(e,n){this.resolvedAt=K.now(),this.hasAttemptedResolve=!0;const{name:s,type:i,velocity:r,delay:o,onComplete:a,onUpdate:l,isGenerator:u}=this.options;if(!u&&!Sn(e,s,i,r))if(je.current||!o){l?.(Y(e,this.options,n)),a?.(),this.resolveFinishedPromise();return}else this.options.duration=0;const c=this.initPlayback(e,n);c!==!1&&(this._resolved={keyframes:e,finalKeyframe:n,...c},this.onPostResolved())}onPostResolved(){}then(e,n){return this.currentFinishedPromise.then(e,n)}flatten(){this.options.type="keyframes",this.options.ease="linear"}updateFinishedPromise(){this.currentFinishedPromise=new Promise(e=>{this.resolveFinishedPromise=e})}}function ht(t,e){return e?t*(1e3/e):0}const wn=5;function ft(t,e,n){const s=Math.max(e-wn,0);return ht(n-t(s),e-s)}const Q=.001,Vn=.01,Pn=10,Cn=.05,Fn=1;function Dn({duration:t=800,bounce:e=.25,velocity:n=0,mass:s=1}){let i,r,o=1-e;o=B(Cn,Fn,o),t=B(Vn,Pn,C(t)),o<1?(i=u=>{const c=u*o,h=c*t,f=c-n,g=le(u,o),p=Math.exp(-h);return Q-f/g*p},r=u=>{const h=u*o*t,f=h*n+n,g=Math.pow(o,2)*Math.pow(u,2)*t,p=Math.exp(-h),m=le(Math.pow(u,2),o);return(-i(u)+Q>0?-1:1)*((f-g)*p)/m}):(i=u=>{const c=Math.exp(-u*t),h=(u-n)*t+1;return-Q+c*h},r=u=>{const c=Math.exp(-u*t),h=(n-u)*(t*t);return c*h});const a=5/t,l=Kn(i,r,a);if(t=P(t),isNaN(l))return{stiffness:100,damping:10,duration:t};{const u=Math.pow(l,2)*s;return{stiffness:u,damping:o*2*Math.sqrt(s*u),duration:t}}}const On=12;function Kn(t,e,n){let s=n;for(let i=1;i<On;i++)s=s-t(s)/e(s);return s}function le(t,e){return t*Math.sqrt(1-e*e)}const Rn=["duration","bounce"],kn=["stiffness","damping","mass"];function Oe(t,e){return e.some(n=>t[n]!==void 0)}function In(t){let e={velocity:0,stiffness:100,damping:10,mass:1,isResolvedFromDuration:!1,...t};if(!Oe(t,kn)&&Oe(t,Rn)){const n=Dn(t);e={...e,...n,mass:1},e.isResolvedFromDuration=!0}return e}function dt({keyframes:t,restDelta:e,restSpeed:n,...s}){const i=t[0],r=t[t.length-1],o={done:!1,value:i},{stiffness:a,damping:l,mass:u,duration:c,velocity:h,isResolvedFromDuration:f}=In({...s,velocity:-C(s.velocity||0)}),g=h||0,p=l/(2*Math.sqrt(a*u)),m=r-i,y=C(Math.sqrt(a/u)),T=Math.abs(m)<5;n||(n=T?.01:2),e||(e=T?.005:.5);let S;if(p<1){const v=le(y,p);S=A=>{const b=Math.exp(-p*y*A);return r-b*((g+p*y*m)/v*Math.sin(v*A)+m*Math.cos(v*A))}}else if(p===1)S=v=>r-Math.exp(-y*v)*(m+(g+y*m)*v);else{const v=y*Math.sqrt(p*p-1);S=A=>{const b=Math.exp(-p*y*A),M=Math.min(v*A,300);return r-b*((g+p*y*m)*Math.sinh(M)+v*m*Math.cosh(M))/v}}return{calculatedDuration:f&&c||null,next:v=>{const A=S(v);if(f)o.done=v>=c;else{let b=0;p<1&&(b=v===0?P(g):ft(S,v,A));const M=Math.abs(b)<=n,F=Math.abs(r-A)<=e;o.done=M&&F}return o.value=o.done?r:A,o}}}function Ke({keyframes:t,velocity:e=0,power:n=.8,timeConstant:s=325,bounceDamping:i=10,bounceStiffness:r=500,modifyTarget:o,min:a,max:l,restDelta:u=.5,restSpeed:c}){const h=t[0],f={done:!1,value:h},g=d=>a!==void 0&&d<a||l!==void 0&&d>l,p=d=>a===void 0?l:l===void 0||Math.abs(a-d)<Math.abs(l-d)?a:l;let m=n*e;const y=h+m,T=o===void 0?y:o(y);T!==y&&(m=T-h);const S=d=>-m*Math.exp(-d/s),v=d=>T+S(d),A=d=>{const w=S(d),V=v(d);f.done=Math.abs(w)<=u,f.value=f.done?T:V};let b,M;const F=d=>{g(f.value)&&(b=d,M=dt({keyframes:[f.value,p(f.value)],velocity:ft(v,d,f.value),damping:i,stiffness:r,restDelta:u,restSpeed:c}))};return F(0),{calculatedDuration:null,next:d=>{let w=!1;return!M&&b===void 0&&(w=!0,A(d),F(d)),b!==void 0&&d>=b?M.next(d-b):(!w&&A(d),f)}}}const Nn=G(.42,0,1,1),_n=G(0,0,.58,1),pt=G(.42,0,.58,1),En=t=>Array.isArray(t)&&typeof t[0]!="number",be=t=>Array.isArray(t)&&typeof t[0]=="number",Re={linear:R,easeIn:Nn,easeInOut:pt,easeOut:_n,circIn:ge,circInOut:et,circOut:Ut,backIn:me,backInOut:Je,backOut:Ze,anticipate:Qe},ke=t=>{if(be(t)){se(t.length===4);const[e,n,s,i]=t;return G(e,n,s,i)}else if(typeof t=="string")return se(Re[t]!==void 0),Re[t];return t},Bn=(t,e)=>n=>e(t(n)),Ae=(...t)=>t.reduce(Bn),xe=(t,e,n)=>{const s=e-t;return s===0?1:(n-t)/s},X=(t,e,n)=>t+(e-t)*n;function ee(t,e,n){return n<0&&(n+=1),n>1&&(n-=1),n<1/6?t+(e-t)*6*n:n<1/2?e:n<2/3?t+(e-t)*(2/3-n)*6:t}function Un({hue:t,saturation:e,lightness:n,alpha:s}){t/=360,e/=100,n/=100;let i=0,r=0,o=0;if(!e)i=r=o=n;else{const a=n<.5?n*(1+e):n+e-n*e,l=2*n-a;i=ee(l,a,t+1/3),r=ee(l,a,t),o=ee(l,a,t-1/3)}return{red:Math.round(i*255),green:Math.round(r*255),blue:Math.round(o*255),alpha:s}}function W(t,e){return n=>n>0?e:t}const te=(t,e,n)=>{const s=t*t,i=n*(e*e-s)+s;return i<0?0:Math.sqrt(i)},Gn=[oe,D,I],zn=t=>Gn.find(e=>e.test(t));function Ie(t){const e=zn(t);if(!e)return!1;let n=e.parse(t);return e===I&&(n=Un(n)),n}const Ne=(t,e)=>{const n=Ie(t),s=Ie(e);if(!n||!s)return W(t,e);const i={...n};return r=>(i.red=te(n.red,s.red,r),i.green=te(n.green,s.green,r),i.blue=te(n.blue,s.blue,r),i.alpha=X(n.alpha,s.alpha,r),D.transform(i))},ce=new Set(["none","hidden"]);function Ln(t,e){return ce.has(t)?n=>n<=0?t:e:n=>n>=1?e:t}function Wn(t,e){return n=>X(t,e,n)}function Se(t){return typeof t=="number"?Wn:typeof t=="string"?fe(t)?W:x.test(t)?Ne:jn:Array.isArray(t)?mt:typeof t=="object"?x.test(t)?Ne:qn:W}function mt(t,e){const n=[...t],s=n.length,i=t.map((r,o)=>Se(r)(r,e[o]));return r=>{for(let o=0;o<s;o++)n[o]=i[o](r);return n}}function qn(t,e){const n={...t,...e},s={};for(const i in n)t[i]!==void 0&&e[i]!==void 0&&(s[i]=Se(t[i])(t[i],e[i]));return i=>{for(const r in s)n[r]=s[r](i);return n}}function $n(t,e){var n;const s=[],i={color:0,var:0,number:0};for(let r=0;r<e.values.length;r++){const o=e.types[r],a=t.indexes[o][i[o]],l=(n=t.values[a])!==null&&n!==void 0?n:0;s[r]=l,i[o]++}return s}const jn=(t,e)=>{const n=H.createTransformer(e),s=U(t),i=U(e);return s.indexes.var.length===i.indexes.var.length&&s.indexes.color.length===i.indexes.color.length&&s.indexes.number.length>=i.indexes.number.length?ce.has(t)&&!i.values.length||ce.has(e)&&!s.values.length?Ln(t,e):Ae(mt($n(s,i),i.values),n):W(t,e)};function gt(t,e,n){return typeof t=="number"&&typeof e=="number"&&typeof n=="number"?X(t,e,n):Se(t)(t,e)}function Yn(t,e,n){const s=[],i=n||gt,r=t.length-1;for(let o=0;o<r;o++){let a=i(t[o],t[o+1]);if(e){const l=Array.isArray(e)?e[o]||R:e;a=Ae(l,a)}s.push(a)}return s}function Hn(t,e,{clamp:n=!0,ease:s,mixer:i}={}){const r=t.length;if(se(r===e.length),r===1)return()=>e[0];if(r===2&&t[0]===t[1])return()=>e[1];t[0]>t[r-1]&&(t=[...t].reverse(),e=[...e].reverse());const o=Yn(e,s,i),a=o.length,l=u=>{let c=0;if(a>1)for(;c<t.length-2&&!(u<t[c+1]);c++);const h=xe(t[c],t[c+1],u);return o[c](h)};return n?u=>l(B(t[0],t[r-1],u)):l}function Xn(t,e){const n=t[t.length-1];for(let s=1;s<=e;s++){const i=xe(0,e,s);t.push(X(n,1,i))}}function Zn(t){const e=[0];return Xn(e,t.length-1),e}function Jn(t,e){return t.map(n=>n*e)}function Qn(t,e){return t.map(()=>e||pt).splice(0,t.length-1)}function q({duration:t=300,keyframes:e,times:n,ease:s="easeInOut"}){const i=En(s)?s.map(ke):ke(s),r={done:!1,value:e[0]},o=Jn(n&&n.length===e.length?n:Zn(e),t),a=Hn(o,e,{ease:Array.isArray(i)?i:Qn(e,i)});return{calculatedDuration:t,next:l=>(r.value=a(l),r.done=l>=t,r)}}const _e=2e4;function es(t){let e=0;const n=50;let s=t.next(e);for(;!s.done&&e<_e;)e+=n,s=t.next(e);return e>=_e?1/0:e}const ts=t=>{const e=({timestamp:n})=>t(n);return{start:()=>k.update(e,!0),stop:()=>Pt(e),now:()=>L.isProcessing?L.timestamp:K.now()}},ns={decay:Ke,inertia:Ke,tween:q,keyframes:q,spring:dt},ss=t=>t/100;class Z extends ut{constructor(e){super(e),this.holdTime=null,this.cancelTime=null,this.currentTime=0,this.playbackSpeed=1,this.pendingPlayState="running",this.startTime=null,this.state="idle",this.stop=()=>{if(this.resolver.cancel(),this.isStopped=!0,this.state==="idle")return;this.teardown();const{onStop:l}=this.options;l&&l()};const{name:n,motionValue:s,element:i,keyframes:r}=this.options,o=i?.KeyframeResolver||it,a=(l,u)=>this.onKeyframesResolved(l,u);this.resolver=new o(r,a,n,s,i),this.resolver.scheduleResolve()}flatten(){super.flatten(),this._resolved&&Object.assign(this._resolved,this.initPlayback(this._resolved.keyframes))}initPlayback(e){const{type:n="keyframes",repeat:s=0,repeatDelay:i=0,repeatType:r,velocity:o=0}=this.options,a=Te(n)?n:ns[n]||q;let l,u;a!==q&&typeof e[0]!="number"&&(l=Ae(ss,gt(e[0],e[1])),e=[0,100]);const c=a({...this.options,keyframes:e});r==="mirror"&&(u=a({...this.options,keyframes:[...e].reverse(),velocity:-o})),c.calculatedDuration===null&&(c.calculatedDuration=es(c));const{calculatedDuration:h}=c,f=h+i,g=f*(s+1)-i;return{generator:c,mirroredGenerator:u,mapPercentToKeyframes:l,calculatedDuration:h,resolvedDuration:f,totalDuration:g}}onPostResolved(){const{autoplay:e=!0}=this.options;this.play(),this.pendingPlayState==="paused"||!e?this.pause():this.state=this.pendingPlayState}tick(e,n=!1){const{resolved:s}=this;if(!s){const{keyframes:d}=this.options;return{done:!0,value:d[d.length-1]}}const{finalKeyframe:i,generator:r,mirroredGenerator:o,mapPercentToKeyframes:a,keyframes:l,calculatedDuration:u,totalDuration:c,resolvedDuration:h}=s;if(this.startTime===null)return r.next(0);const{delay:f,repeat:g,repeatType:p,repeatDelay:m,onUpdate:y}=this.options;this.speed>0?this.startTime=Math.min(this.startTime,e):this.speed<0&&(this.startTime=Math.min(e-c/this.speed,this.startTime)),n?this.currentTime=e:this.holdTime!==null?this.currentTime=this.holdTime:this.currentTime=Math.round(e-this.startTime)*this.speed;const T=this.currentTime-f*(this.speed>=0?1:-1),S=this.speed>=0?T<0:T>c;this.currentTime=Math.max(T,0),this.state==="finished"&&this.holdTime===null&&(this.currentTime=c);let v=this.currentTime,A=r;if(g){const d=Math.min(this.currentTime,c)/h;let w=Math.floor(d),V=d%1;!V&&d>=1&&(V=1),V===1&&w--,w=Math.min(w,g+1),!!(w%2)&&(p==="reverse"?(V=1-V,m&&(V-=m/h)):p==="mirror"&&(A=o)),v=B(0,1,V)*h}const b=S?{done:!1,value:l[0]}:A.next(v);a&&(b.value=a(b.value));let{done:M}=b;!S&&u!==null&&(M=this.speed>=0?this.currentTime>=c:this.currentTime<=0);const F=this.holdTime===null&&(this.state==="finished"||this.state==="running"&&M);return F&&i!==void 0&&(b.value=Y(l,this.options,i)),y&&y(b.value),F&&this.finish(),b}get duration(){const{resolved:e}=this;return e?C(e.calculatedDuration):0}get time(){return C(this.currentTime)}set time(e){e=P(e),this.currentTime=e,this.holdTime!==null||this.speed===0?this.holdTime=e:this.driver&&(this.startTime=this.driver.now()-e/this.speed)}get speed(){return this.playbackSpeed}set speed(e){const n=this.playbackSpeed!==e;this.playbackSpeed=e,n&&(this.time=C(this.currentTime))}play(){if(this.resolver.isScheduled||this.resolver.resume(),!this._resolved){this.pendingPlayState="running";return}if(this.isStopped)return;const{driver:e=ts,onPlay:n,startTime:s}=this.options;this.driver||(this.driver=e(r=>this.tick(r))),n&&n();const i=this.driver.now();this.holdTime!==null?this.startTime=i-this.holdTime:this.startTime?this.state==="finished"&&(this.startTime=i):this.startTime=s??this.calcStartTime(),this.state==="finished"&&this.updateFinishedPromise(),this.cancelTime=this.startTime,this.holdTime=null,this.state="running",this.driver.start()}pause(){var e;if(!this._resolved){this.pendingPlayState="paused";return}this.state="paused",this.holdTime=(e=this.currentTime)!==null&&e!==void 0?e:0}complete(){this.state!=="running"&&this.play(),this.pendingPlayState=this.state="finished",this.holdTime=null}finish(){this.teardown(),this.state="finished";const{onComplete:e}=this.options;e&&e()}cancel(){this.cancelTime!==null&&this.tick(this.cancelTime),this.teardown(),this.updateFinishedPromise()}teardown(){this.state="idle",this.stopDriver(),this.resolveFinishedPromise(),this.updateFinishedPromise(),this.startTime=this.cancelTime=null,this.resolver.cancel()}stopDriver(){this.driver&&(this.driver.stop(),this.driver=void 0)}sample(e){return this.startTime=0,this.tick(e,!0)}}function Ns(t){return new Z(t)}const is=new Set(["opacity","clipPath","filter","transform"]),rs=10,os=(t,e)=>{let n="";const s=Math.max(Math.round(e/rs),2);for(let i=0;i<s;i++)n+=t(xe(0,s-1,i))+", ";return`linear(${n.substring(0,n.length-2)})`};function Me(t){let e;return()=>(e===void 0&&(e=t()),e)}const as={linearEasing:void 0};function ls(t,e){const n=Me(t);return()=>{var s;return(s=as[e])!==null&&s!==void 0?s:n()}}const $=ls(()=>{try{document.createElement("div").animate({opacity:0},{easing:"linear(0, 1)"})}catch{return!1}return!0},"linearEasing");function yt(t){return!!(typeof t=="function"&&$()||!t||typeof t=="string"&&(t in ue||$())||be(t)||Array.isArray(t)&&t.every(yt))}const _=([t,e,n,s])=>`cubic-bezier(${t}, ${e}, ${n}, ${s})`,ue={linear:"linear",ease:"ease",easeIn:"ease-in",easeOut:"ease-out",easeInOut:"ease-in-out",circIn:_([0,.65,.55,1]),circOut:_([.55,0,1,.45]),backIn:_([.31,.01,.66,-.59]),backOut:_([.33,1.53,.69,.99])};function vt(t,e){if(t)return typeof t=="function"&&$()?os(t,e):be(t)?_(t):Array.isArray(t)?t.map(n=>vt(n,e)||ue.easeOut):ue[t]}function cs(t,e,n,{delay:s=0,duration:i=300,repeat:r=0,repeatType:o="loop",ease:a="easeInOut",times:l}={}){const u={[e]:n};l&&(u.offset=l);const c=vt(a,i);return Array.isArray(c)&&(u.easing=c),t.animate(u,{delay:s,duration:i,easing:Array.isArray(c)?"linear":c,fill:"both",iterations:r+1,direction:o==="reverse"?"alternate":"normal"})}function Ee(t,e){t.timeline=e,t.onfinish=null}const us=Me(()=>Object.hasOwnProperty.call(Element.prototype,"animate")),j=10,hs=2e4;function fs(t){return Te(t.type)||t.type==="spring"||!yt(t.ease)}function ds(t,e){const n=new Z({...e,keyframes:t,repeat:0,delay:0,isGenerator:!0});let s={done:!1,value:t[0]};const i=[];let r=0;for(;!s.done&&r<hs;)s=n.sample(r),i.push(s.value),r+=j;return{times:void 0,keyframes:i,duration:r-j,ease:"linear"}}const Tt={anticipate:Qe,backInOut:Je,circInOut:et};function ps(t){return t in Tt}class Be extends ut{constructor(e){super(e);const{name:n,motionValue:s,element:i,keyframes:r}=this.options;this.resolver=new bn(r,(o,a)=>this.onKeyframesResolved(o,a),n,s,i),this.resolver.scheduleResolve()}initPlayback(e,n){var s;let{duration:i=300,times:r,ease:o,type:a,motionValue:l,name:u,startTime:c}=this.options;if(!(!((s=l.owner)===null||s===void 0)&&s.current))return!1;if(typeof o=="string"&&$()&&ps(o)&&(o=Tt[o]),fs(this.options)){const{onComplete:f,onUpdate:g,motionValue:p,element:m,...y}=this.options,T=ds(e,y);e=T.keyframes,e.length===1&&(e[1]=e[0]),i=T.duration,r=T.times,o=T.ease,a="keyframes"}const h=cs(l.owner.current,u,e,{...this.options,duration:i,times:r,ease:o});return h.startTime=c??this.calcStartTime(),this.pendingTimeline?(Ee(h,this.pendingTimeline),this.pendingTimeline=void 0):h.onfinish=()=>{const{onComplete:f}=this.options;l.set(Y(e,this.options,n)),f&&f(),this.cancel(),this.resolveFinishedPromise()},{animation:h,duration:i,times:r,type:a,ease:o,keyframes:e}}get duration(){const{resolved:e}=this;if(!e)return 0;const{duration:n}=e;return C(n)}get time(){const{resolved:e}=this;if(!e)return 0;const{animation:n}=e;return C(n.currentTime||0)}set time(e){const{resolved:n}=this;if(!n)return;const{animation:s}=n;s.currentTime=P(e)}get speed(){const{resolved:e}=this;if(!e)return 1;const{animation:n}=e;return n.playbackRate}set speed(e){const{resolved:n}=this;if(!n)return;const{animation:s}=n;s.playbackRate=e}get state(){const{resolved:e}=this;if(!e)return"idle";const{animation:n}=e;return n.playState}get startTime(){const{resolved:e}=this;if(!e)return null;const{animation:n}=e;return n.startTime}attachTimeline(e){if(!this._resolved)this.pendingTimeline=e;else{const{resolved:n}=this;if(!n)return R;const{animation:s}=n;Ee(s,e)}return R}play(){if(this.isStopped)return;const{resolved:e}=this;if(!e)return;const{animation:n}=e;n.playState==="finished"&&this.updateFinishedPromise(),n.play()}pause(){const{resolved:e}=this;if(!e)return;const{animation:n}=e;n.pause()}stop(){if(this.resolver.cancel(),this.isStopped=!0,this.state==="idle")return;this.resolveFinishedPromise(),this.updateFinishedPromise();const{resolved:e}=this;if(!e)return;const{animation:n,keyframes:s,duration:i,type:r,ease:o,times:a}=e;if(n.playState==="idle"||n.playState==="finished")return;if(this.time){const{motionValue:u,onUpdate:c,onComplete:h,element:f,...g}=this.options,p=new Z({...g,keyframes:s,duration:i,type:r,ease:o,times:a,isGenerator:!0}),m=P(this.time);u.setWithVelocity(p.sample(m-j).value,p.sample(m).value,j)}const{onStop:l}=this.options;l&&l(),this.cancel()}complete(){const{resolved:e}=this;e&&e.animation.finish()}cancel(){const{resolved:e}=this;e&&e.animation.cancel()}static supports(e){const{motionValue:n,name:s,repeatDelay:i,repeatType:r,damping:o,type:a}=e;return us()&&s&&is.has(s)&&n&&n.owner&&n.owner.current instanceof HTMLElement&&!n.owner.getProps().onUpdate&&!i&&r!=="mirror"&&o!==0&&a!=="inertia"}}const ms=Me(()=>window.ScrollTimeline!==void 0);class gs{constructor(e){this.stop=()=>this.runAll("stop"),this.animations=e.filter(Boolean)}then(e,n){return Promise.all(this.animations).then(e).catch(n)}getAll(e){return this.animations[0][e]}setAll(e,n){for(let s=0;s<this.animations.length;s++)this.animations[s][e]=n}attachTimeline(e,n){const s=this.animations.map(i=>ms()&&i.attachTimeline?i.attachTimeline(e):n(i));return()=>{s.forEach((i,r)=>{i&&i(),this.animations[r].stop()})}}get time(){return this.getAll("time")}set time(e){this.setAll("time",e)}get speed(){return this.getAll("speed")}set speed(e){this.setAll("speed",e)}get startTime(){return this.getAll("startTime")}get duration(){let e=0;for(let n=0;n<this.animations.length;n++)e=Math.max(e,this.animations[n].duration);return e}runAll(e){this.animations.forEach(n=>n[e]())}flatten(){this.runAll("flatten")}play(){this.runAll("play")}pause(){this.runAll("pause")}cancel(){this.runAll("cancel")}complete(){this.runAll("complete")}}function ys({when:t,delay:e,delayChildren:n,staggerChildren:s,staggerDirection:i,repeat:r,repeatType:o,repeatDelay:a,from:l,elapsed:u,...c}){return!!Object.keys(c).length}const vs=(t,e,n,s={},i,r)=>o=>{const a=$e(s,t)||{},l=a.delay||s.delay||0;let{elapsed:u=0}=s;u=u-P(l);let c={keyframes:Array.isArray(n)?n:[null,n],ease:"easeOut",velocity:e.getVelocity(),...a,delay:-u,onUpdate:f=>{e.set(f),a.onUpdate&&a.onUpdate(f)},onComplete:()=>{o(),a.onComplete&&a.onComplete()},name:t,motionValue:e,element:r?void 0:i};ys(a)||(c={...c,...It(t,c)}),c.duration&&(c.duration=P(c.duration)),c.repeatDelay&&(c.repeatDelay=P(c.repeatDelay)),c.from!==void 0&&(c.keyframes[0]=c.from);let h=!1;if((c.type===!1||c.duration===0&&!c.repeatDelay)&&(c.duration=0,c.delay===0&&(h=!0)),(je.current||qe.skipAnimations)&&(h=!0,c.duration=0,c.delay=0),h&&!r&&e.get()!==void 0){const f=Y(c.keyframes,a);if(f!==void 0)return k.update(()=>{c.onUpdate(f),c.onComplete()}),new gs([])}return!r&&Be.supports(c)?new Be(c):new Z(c)};function Ts(t,e){t.indexOf(e)===-1&&t.push(e)}function bs(t,e){const n=t.indexOf(e);n>-1&&t.splice(n,1)}function _s([...t],e,n){const s=e<0?t.length+e:e;if(s>=0&&s<t.length){const i=n<0?t.length+n:n,[r]=t.splice(e,1);t.splice(i,0,r)}return t}class As{constructor(){this.subscriptions=[]}add(e){return Ts(this.subscriptions,e),()=>bs(this.subscriptions,e)}notify(e,n,s){const i=this.subscriptions.length;if(i)if(i===1)this.subscriptions[0](e,n,s);else for(let r=0;r<i;r++){const o=this.subscriptions[r];o&&o(e,n,s)}}getSize(){return this.subscriptions.length}clear(){this.subscriptions.length=0}}const Ue=30,xs=t=>!isNaN(parseFloat(t)),Ge={current:void 0};class Ss{constructor(e,n={}){this.version="11.11.17",this.canTrackVelocity=null,this.events={},this.updateAndNotify=(s,i=!0)=>{const r=K.now();this.updatedAt!==r&&this.setPrevFrameValue(),this.prev=this.current,this.setCurrent(s),this.current!==this.prev&&this.events.change&&this.events.change.notify(this.current),i&&this.events.renderRequest&&this.events.renderRequest.notify(this.current)},this.hasAnimated=!1,this.setCurrent(e),this.owner=n.owner}setCurrent(e){this.current=e,this.updatedAt=K.now(),this.canTrackVelocity===null&&e!==void 0&&(this.canTrackVelocity=xs(this.current))}setPrevFrameValue(e=this.current){this.prevFrameValue=e,this.prevUpdatedAt=this.updatedAt}onChange(e){return this.on("change",e)}on(e,n){this.events[e]||(this.events[e]=new As);const s=this.events[e].add(n);return e==="change"?()=>{s(),k.read(()=>{this.events.change.getSize()||this.stop()})}:s}clearListeners(){for(const e in this.events)this.events[e].clear()}attach(e,n){this.passiveEffect=e,this.stopPassiveEffect=n}set(e,n=!0){!n||!this.passiveEffect?this.updateAndNotify(e,n):this.passiveEffect(e,this.updateAndNotify)}setWithVelocity(e,n,s){this.set(n),this.prev=void 0,this.prevFrameValue=e,this.prevUpdatedAt=this.updatedAt-s}jump(e,n=!0){this.updateAndNotify(e),this.prev=e,this.prevUpdatedAt=this.prevFrameValue=void 0,n&&this.stop(),this.stopPassiveEffect&&this.stopPassiveEffect()}get(){return Ge.current&&Ge.current.push(this),this.current}getPrevious(){return this.prev}getVelocity(){const e=K.now();if(!this.canTrackVelocity||this.prevFrameValue===void 0||e-this.updatedAt>Ue)return 0;const n=Math.min(this.updatedAt-this.prevUpdatedAt,Ue);return ht(parseFloat(this.current)-parseFloat(this.prevFrameValue),n)}start(e){return this.stop(),new Promise(n=>{this.hasAnimated=!0,this.animation=e(n),this.events.animationStart&&this.events.animationStart.notify()}).then(()=>{this.events.animationComplete&&this.events.animationComplete.notify(),this.clearAnimation()})}stop(){this.animation&&(this.animation.stop(),this.events.animationCancel&&this.events.animationCancel.notify()),this.clearAnimation()}isAnimating(){return!!this.animation}clearAnimation(){delete this.animation}destroy(){this.clearListeners(),this.stop(),this.stopPassiveEffect&&this.stopPassiveEffect()}}function Ms(t,e){return new Ss(t,e)}function ws(t,e,n){t.hasValue(e)?t.getValue(e).set(n):t.addValue(e,Ms(n))}function Vs(t,e){const n=pe(t,e);let{transitionEnd:s={},transition:i={},...r}=n||{};r={...r,...s};for(const o in r){const a=Ct(r[o]);ws(t,o,a)}}function Ps(t){return t.props[Ft]}function Cs(t){return!!(Dt(t)&&t.add)}function Fs(t,e){const n=t.getValue("willChange");if(Cs(n))return n.add(e)}function Ds({protectedKeys:t,needsAnimating:e},n){const s=t.hasOwnProperty(n)&&e[n]!==!0;return e[n]=!1,s}function bt(t,e,{delay:n=0,transitionOverride:s,type:i}={}){var r;let{transition:o=t.getDefaultTransition(),transitionEnd:a,...l}=e;s&&(o=s);const u=[],c=i&&t.animationState&&t.animationState.getState()[i];for(const h in l){const f=t.getValue(h,(r=t.latestValues[h])!==null&&r!==void 0?r:null),g=l[h];if(g===void 0||c&&Ds(c,h))continue;const p={delay:n,...$e(o||{},h)};let m=!1;if(window.MotionHandoffAnimation){const T=Ps(t);if(T){const S=window.MotionHandoffAnimation(T,h,k);S!==null&&(p.startTime=S,m=!0)}}Fs(t,h),f.start(vs(h,f,g,t.shouldReduceMotion&&ze.has(h)?{type:!1}:p,t,m));const y=f.animation;y&&u.push(y)}return a&&Promise.all(u).then(()=>{k.update(()=>{a&&Vs(t,a)})}),u}function he(t,e,n={}){var s;const i=pe(t,e,n.type==="exit"?(s=t.presenceContext)===null||s===void 0?void 0:s.custom:void 0);let{transition:r=t.getDefaultTransition()||{}}=i||{};n.transitionOverride&&(r=n.transitionOverride);const o=i?()=>Promise.all(bt(t,i,n)):()=>Promise.resolve(),a=t.variantChildren&&t.variantChildren.size?(u=0)=>{const{delayChildren:c=0,staggerChildren:h,staggerDirection:f}=r;return Os(t,e,c+u,h,f,n)}:()=>Promise.resolve(),{when:l}=r;if(l){const[u,c]=l==="beforeChildren"?[o,a]:[a,o];return u().then(()=>c())}else return Promise.all([o(),a(n.delay)])}function Os(t,e,n=0,s=0,i=1,r){const o=[],a=(t.variantChildren.size-1)*s,l=i===1?(u=0)=>u*s:(u=0)=>a-u*s;return Array.from(t.variantChildren).sort(Ks).forEach((u,c)=>{u.notify("AnimationStart",e),o.push(he(u,e,{...r,delay:n+l(c)}).then(()=>u.notify("AnimationComplete",e)))}),Promise.all(o)}function Ks(t,e){return t.sortNodePosition(e)}function Es(t,e,n={}){t.notify("AnimationStart",e);let s;if(Array.isArray(e)){const i=e.map(r=>he(t,r,n));s=Promise.all(i)}else if(typeof e=="string")s=he(t,e,n);else{const i=typeof e=="function"?pe(t,e,n.custom):e;s=Promise.all(bt(t,i,n))}return s.then(()=>{t.notify("AnimationComplete",e)})}export{Nn as $,$ as A,us as B,cs as C,Ee as D,Y as E,$e as F,gs as G,je as H,Ps as I,ke as J,_s as K,x as L,Ss as M,H as N,Be as O,Dn as P,Ke as Q,q as R,gt as S,Ae as T,Qe as U,me as V,Je as W,Ze as X,ge as Y,et as Z,Ut as _,Es as a,pt as a0,_n as a1,G as a2,He as a3,Xe as a4,pe as a5,Fs as a6,vs as a7,K as a8,As as a9,Xt as aa,Jt as ab,it as ac,Lt as ad,Gt as ae,yn as af,bn as ag,gn as ah,Ns as b,Ge as c,se as d,Zn as e,ms as f,is as g,Ts as h,Hn as i,es as j,_e as k,C as l,Ms as m,En as n,X as o,xe as p,Te as q,bs as r,Vs as s,Xn as t,P as u,ht as v,Is as w,bt as x,dt as y,Me as z};
