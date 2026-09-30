var _4=Object.defineProperty;var e4=(o,i)=>{for(var r in i)_4(o,r,{get:i[r],enumerable:!0,configurable:!0,set:(a)=>i[r]=()=>a})};var hi=globalThis,co=(o)=>{if(!hi.emitLitDebugLogEvents)return;hi.dispatchEvent(new CustomEvent("lit-debug",{detail:o}))},ow=0,sr;hi.litIssuedWarnings??=new Set,sr=(o,i)=>{if(i+=o?` See https://lit.dev/msg/${o} for more information.`:"",!hi.litIssuedWarnings.has(i)&&!hi.litIssuedWarnings.has(o))console.warn(i),hi.litIssuedWarnings.add(i)},queueMicrotask(()=>{sr("dev-mode","Lit is in dev mode. Not recommended for production!")});var Qi=hi.ShadyDOM?.inUse&&hi.ShadyDOM?.noPatch===!0?hi.ShadyDOM.wrap:(o)=>o,Rr=hi.trustedTypes,Qa=Rr?Rr.createPolicy("lit-html",{createHTML:(o)=>o}):void 0,iw=(o)=>o,_r=(o,i,r)=>iw,rw=(o)=>{if(M0!==_r)throw Error("Attempted to overwrite existing lit-html security policy. setSanitizeDOMValueFactory should be called at most once.");M0=o},aw=()=>{M0=_r},W2=(o,i,r)=>{return M0(o,i,r)},_2="$lit$",Di=`lit$${Math.random().toFixed(9).slice(2)}$`,e2="?"+Di,nw=`<${e2}>`,G0=document,ur=()=>G0.createComment(""),zr=(o)=>o===null||typeof o!="object"&&typeof o!="function",o1=Array.isArray,Na=(o)=>o1(o)||typeof o?.[Symbol.iterator]==="function",S2=`[ 	
\f\r]`,fw=`[^ 	
\f\r"'\`<>=]`,ww=`[^\\s"'>=/]`,gr=/<(?:(!--|\/[^a-zA-Z])|(\/?[a-zA-Z][^>\s]*)|(\/?$))/g,Ka=1,R2=2,bw=3,Ba=/-->/g,Ga=/>/g,p0=new RegExp(`>|${S2}(?:(${ww}+)(${S2}*=${S2}*(?:${fw}|("|')|))|$)`,"g"),tw=0,Ma=1,cw=2,Va=3,C2=/'/g,P2=/"/g,Oa=/^(?:script|style|textarea|title)$/i,Aa=1,Cr=2,Pr=3,i1=1,Wr=2,mw=3,pw=4,hw=5,r1=6,dw=7,a1=(o)=>(i,...r)=>{if(i.some((a)=>a===void 0))console.warn(`Some template strings are undefined.
This is probably caused by illegal octal escape sequences.`);if(r.some((a)=>a?._$litStatic$))sr("",`Static values 'literal' or 'unsafeStatic' cannot be used as values to non-static templates.
Please use the static 'html' tag function. See https://lit.dev/docs/templates/expressions/#static-expressions`);return{["_$litType$"]:o,strings:i,values:r}},h=a1(Aa),Ea=a1(Cr),Da=a1(Pr),Jo=Symbol.for("lit-noChange"),wo=Symbol.for("lit-nothing"),Ha=new WeakMap,K0=G0.createTreeWalker(G0,129),M0=_r;function ka(o,i){if(!o1(o)||!o.hasOwnProperty("raw")){let r="invalid template strings array";throw r=`
          Internal Error: expected template strings to be an array
          with a 'raw' field. Faking a template strings array by
          calling html or svg like an ordinary function is effectively
          the same as calling unsafeHtml and can lead to major security
          issues, e.g. opening your code up to XSS attacks.
          If you're using the html or svg tagged template functions normally
          and still seeing this error, please file a bug at
          https://github.com/lit/lit/issues/new?template=bug_report.md
          and include information about your build tooling, if any.
        `.trim().replace(/\n */g,`
`),Error(r)}return Qa!==void 0?Qa.createHTML(i):i}var Ta=(o,i)=>{let r=o.length-1,a=[],n=i===Cr?"<svg>":i===Pr?"<math>":"",w,b=gr;for(let m=0;m<r;m++){let p=o[m],d=-1,s,z=0,u;while(z<p.length){if(b.lastIndex=z,u=b.exec(p),u===null)break;if(z=b.lastIndex,b===gr){if(u[Ka]==="!--")b=Ba;else if(u[Ka]!==void 0)b=Ga;else if(u[R2]!==void 0){if(Oa.test(u[R2]))w=new RegExp(`</${u[R2]}`,"g");b=p0}else if(u[bw]!==void 0)throw Error("Bindings in tag names are not supported. Please use static templates instead. See https://lit.dev/docs/templates/expressions/#static-expressions")}else if(b===p0)if(u[tw]===">")b=w??gr,d=-1;else if(u[Ma]===void 0)d=-2;else d=b.lastIndex-u[cw].length,s=u[Ma],b=u[Va]===void 0?p0:u[Va]==='"'?P2:C2;else if(b===P2||b===C2)b=p0;else if(b===Ba||b===Ga)b=gr;else b=p0,w=void 0}console.assert(d===-1||b===p0||b===C2||b===P2,"unexpected parse state B");let y=b===p0&&o[m+1].startsWith("/>")?" ":"";n+=b===gr?p+nw:d>=0?(a.push(s),p.slice(0,d)+_2+p.slice(d))+Di+y:p+Di+(d===-2?m:y)}let c=n+(o[r]||"<?>")+(i===Cr?"</svg>":i===Pr?"</math>":"");return[ka(o,c),a]};class yr{constructor({strings:o,["_$litType$"]:i},r){this.parts=[];let a,n=0,w=0,b=o.length-1,c=this.parts,[m,p]=Ta(o,i);if(this.el=yr.createElement(m,r),K0.currentNode=this.el.content,i===Cr||i===Pr){let d=this.el.content.firstChild;d.replaceWith(...d.childNodes)}while((a=K0.nextNode())!==null&&c.length<b){if(a.nodeType===1){{let d=a.localName;if(/^(?:textarea|template)$/i.test(d)&&a.innerHTML.includes(Di)){let s=`Expressions are not supported inside \`${d}\` elements. See https://lit.dev/msg/expression-in-${d} for more information.`;if(d==="template")throw Error(s);else sr("",s)}}if(a.hasAttributes()){for(let d of a.getAttributeNames())if(d.endsWith(_2)){let s=p[w++],u=a.getAttribute(d).split(Di),y=/([.?@])?(.*)/.exec(s);c.push({type:i1,index:n,name:y[2],strings:u,ctor:y[1]==="."?f1:y[1]==="?"?w1:y[1]==="@"?b1:e0}),a.removeAttribute(d)}else if(d.startsWith(Di))c.push({type:r1,index:n}),a.removeAttribute(d)}if(Oa.test(a.tagName)){let d=a.textContent.split(Di),s=d.length-1;if(s>0){a.textContent=Rr?Rr.emptyScript:"";for(let z=0;z<s;z++)a.append(d[z],ur()),K0.nextNode(),c.push({type:Wr,index:++n});a.append(d[s],ur())}}}else if(a.nodeType===8)if(a.data===e2)c.push({type:Wr,index:n});else{let s=-1;while((s=a.data.indexOf(Di,s+1))!==-1)c.push({type:dw,index:n}),s+=Di.length-1}n++}if(p.length!==w)throw Error('Detected duplicate attribute bindings. This occurs if your template has duplicate attributes on an element tag. For example "<input ?disabled=${true} ?disabled=${false}>" contains a duplicate "disabled" attribute. The error was detected in the following template: \n`'+o.join("${...}")+"`");co&&co({kind:"template prep",template:this,clonableTemplate:this.el,parts:this.parts,strings:o})}static createElement(o,i){let r=G0.createElement("template");return r.innerHTML=o,r}}function V0(o,i,r=o,a){if(i===Jo)return i;let n=a!==void 0?r.__directives?.[a]:r.__directive,w=zr(i)?void 0:i._$litDirective$;if(n?.constructor!==w){if(n?._$notifyDirectiveConnectionChanged?.(!1),w===void 0)n=void 0;else n=new w(o),n._$initialize(o,r,a);if(a!==void 0)(r.__directives??=[])[a]=n;else r.__directive=n}if(n!==void 0)i=V0(o,n._$resolve(o,i.values),n,a);return i}class n1{constructor(o,i){this._$parts=[],this._$disconnectableChildren=void 0,this._$template=o,this._$parent=i}get parentNode(){return this._$parent.parentNode}get _$isConnected(){return this._$parent._$isConnected}_clone(o){let{el:{content:i},parts:r}=this._$template,a=(o?.creationScope??G0).importNode(i,!0);K0.currentNode=a;let n=K0.nextNode(),w=0,b=0,c=r[0];while(c!==void 0){if(w===c.index){let m;if(c.type===Wr)m=new _0(n,n.nextSibling,this,o);else if(c.type===i1)m=new c.ctor(n,c.name,c.strings,this,o);else if(c.type===r1)m=new t1(n,this,o);this._$parts.push(m),c=r[++b]}if(w!==c?.index)n=K0.nextNode(),w++}return K0.currentNode=G0,a}_update(o){let i=0;for(let r of this._$parts){if(r!==void 0)if(co&&co({kind:"set part",part:r,value:o[i],valueIndex:i,values:o,templateInstance:this}),r.strings!==void 0)r._$setValue(o,r,i),i+=r.strings.length-2;else r._$setValue(o[i]);i++}}}class _0{get _$isConnected(){return this._$parent?._$isConnected??this.__isConnected}constructor(o,i,r,a){this.type=Wr,this._$committedValue=wo,this._$disconnectableChildren=void 0,this._$startNode=o,this._$endNode=i,this._$parent=r,this.options=a,this.__isConnected=a?.isConnected??!0,this._textSanitizer=void 0}get parentNode(){let o=Qi(this._$startNode).parentNode,i=this._$parent;if(i!==void 0&&o?.nodeType===11)o=i.parentNode;return o}get startNode(){return this._$startNode}get endNode(){return this._$endNode}_$setValue(o,i=this){if(this.parentNode===null)throw Error("This `ChildPart` has no `parentNode` and therefore cannot accept a value. This likely means the element containing the part was manipulated in an unsupported way outside of Lit's control such that the part's marker nodes were ejected from DOM. For example, setting the element's `innerHTML` or `textContent` can do this.");if(o=V0(this,o,i),zr(o)){if(o===wo||o==null||o===""){if(this._$committedValue!==wo)co&&co({kind:"commit nothing to child",start:this._$startNode,end:this._$endNode,parent:this._$parent,options:this.options}),this._$clear();this._$committedValue=wo}else if(o!==this._$committedValue&&o!==Jo)this._commitText(o)}else if(o._$litType$!==void 0)this._commitTemplateResult(o);else if(o.nodeType!==void 0){if(this.options?.host===o){this._commitText("[probable mistake: rendered a template's host in itself (commonly caused by writing ${this} in a template]"),console.warn("Attempted to render the template host",o,"inside itself. This is almost always a mistake, and in dev mode ","we render some warning text. In production however, we'll ","render it, which will usually result in an error, and sometimes ","in the element disappearing from the DOM.");return}this._commitNode(o)}else if(Na(o))this._commitIterable(o);else this._commitText(o)}_insert(o){return Qi(Qi(this._$startNode).parentNode).insertBefore(o,this._$endNode)}_commitNode(o){if(this._$committedValue!==o){if(this._$clear(),M0!==_r){let i=this._$startNode.parentNode?.nodeName;if(i==="STYLE"||i==="SCRIPT"){let r="Forbidden";if(i==="STYLE")r="Lit does not support binding inside style nodes. This is a security risk, as style injection attacks can exfiltrate data and spoof UIs. Consider instead using css`...` literals to compose styles, and do dynamic styling with css custom properties, ::parts, <slot>s, and by mutating the DOM rather than stylesheets.";else r="Lit does not support binding inside script nodes. This is a security risk, as it could allow arbitrary code execution.";throw Error(r)}}co&&co({kind:"commit node",start:this._$startNode,parent:this._$parent,value:o,options:this.options}),this._$committedValue=this._insert(o)}}_commitText(o){if(this._$committedValue!==wo&&zr(this._$committedValue)){let i=Qi(this._$startNode).nextSibling;if(this._textSanitizer===void 0)this._textSanitizer=W2(i,"data","property");o=this._textSanitizer(o),co&&co({kind:"commit text",node:i,value:o,options:this.options}),i.data=o}else{let i=G0.createTextNode("");if(this._commitNode(i),this._textSanitizer===void 0)this._textSanitizer=W2(i,"data","property");o=this._textSanitizer(o),co&&co({kind:"commit text",node:i,value:o,options:this.options}),i.data=o}this._$committedValue=o}_commitTemplateResult(o){let{values:i,["_$litType$"]:r}=o,a=typeof r==="number"?this._$getTemplate(o):(r.el===void 0&&(r.el=yr.createElement(ka(r.h,r.h[0]),this.options)),r);if(this._$committedValue?._$template===a)co&&co({kind:"template updating",template:a,instance:this._$committedValue,parts:this._$committedValue._$parts,options:this.options,values:i}),this._$committedValue._update(i);else{let n=new n1(a,this),w=n._clone(this.options);co&&co({kind:"template instantiated",template:a,instance:n,parts:n._$parts,options:this.options,fragment:w,values:i}),n._update(i),co&&co({kind:"template instantiated and updated",template:a,instance:n,parts:n._$parts,options:this.options,fragment:w,values:i}),this._commitNode(w),this._$committedValue=n}}_$getTemplate(o){let i=Ha.get(o.strings);if(i===void 0)Ha.set(o.strings,i=new yr(o));return i}_commitIterable(o){if(!o1(this._$committedValue))this._$committedValue=[],this._$clear();let i=this._$committedValue,r=0,a;for(let n of o){if(r===i.length)i.push(a=new _0(this._insert(ur()),this._insert(ur()),this,this.options));else a=i[r];a._$setValue(n),r++}if(r<i.length)this._$clear(a&&Qi(a._$endNode).nextSibling,r),i.length=r}_$clear(o=Qi(this._$startNode).nextSibling,i){this._$notifyConnectionChanged?.(!1,!0,i);while(o!==this._$endNode){let r=Qi(o).nextSibling;Qi(o).remove(),o=r}}setConnected(o){if(this._$parent===void 0)this.__isConnected=o,this._$notifyConnectionChanged?.(o);else throw Error("part.setConnected() may only be called on a RootPart returned from render().")}}class e0{get tagName(){return this.element.tagName}get _$isConnected(){return this._$parent._$isConnected}constructor(o,i,r,a,n){if(this.type=i1,this._$committedValue=wo,this._$disconnectableChildren=void 0,this.element=o,this.name=i,this._$parent=a,this.options=n,r.length>2||r[0]!==""||r[1]!=="")this._$committedValue=Array(r.length-1).fill(new String),this.strings=r;else this._$committedValue=wo;this._sanitizer=void 0}_$setValue(o,i=this,r,a){let n=this.strings,w=!1;if(n===void 0){if(o=V0(this,o,i,0),w=!zr(o)||o!==this._$committedValue&&o!==Jo,w)this._$committedValue=o}else{let b=o;o=n[0];let c,m;for(c=0;c<n.length-1;c++){if(m=V0(this,b[r+c],i,c),m===Jo)m=this._$committedValue[c];if(w||=!zr(m)||m!==this._$committedValue[c],m===wo)o=wo;else if(o!==wo)o+=(m??"")+n[c+1];this._$committedValue[c]=m}}if(w&&!a)this._commitValue(o)}_commitValue(o){if(o===wo)Qi(this.element).removeAttribute(this.name);else{if(this._sanitizer===void 0)this._sanitizer=M0(this.element,this.name,"attribute");o=this._sanitizer(o??""),co&&co({kind:"commit attribute",element:this.element,name:this.name,value:o,options:this.options}),Qi(this.element).setAttribute(this.name,o??"")}}}class f1 extends e0{constructor(){super(...arguments);this.type=mw}_commitValue(o){if(this._sanitizer===void 0)this._sanitizer=M0(this.element,this.name,"property");o=this._sanitizer(o),co&&co({kind:"commit property",element:this.element,name:this.name,value:o,options:this.options}),this.element[this.name]=o===wo?void 0:o}}class w1 extends e0{constructor(){super(...arguments);this.type=pw}_commitValue(o){co&&co({kind:"commit boolean attribute",element:this.element,name:this.name,value:!!(o&&o!==wo),options:this.options}),Qi(this.element).toggleAttribute(this.name,!!o&&o!==wo)}}class b1 extends e0{constructor(o,i,r,a,n){super(o,i,r,a,n);if(this.type=hw,this.strings!==void 0)throw Error(`A \`<${o.localName}>\` has a \`@${i}=...\` listener with invalid content. Event listeners in templates must have exactly one expression and no surrounding text.`)}_$setValue(o,i=this){if(o=V0(this,o,i,0)??wo,o===Jo)return;let r=this._$committedValue,a=o===wo&&r!==wo||o.capture!==r.capture||o.once!==r.once||o.passive!==r.passive,n=o!==wo&&(r===wo||a);if(co&&co({kind:"commit event listener",element:this.element,name:this.name,value:o,options:this.options,removeListener:a,addListener:n,oldListener:r}),a)this.element.removeEventListener(this.name,this,r);if(n)this.element.addEventListener(this.name,this,o);this._$committedValue=o}handleEvent(o){if(typeof this._$committedValue==="function")this._$committedValue.call(this.options?.host??this.element,o);else this._$committedValue.handleEvent(o)}}class t1{constructor(o,i,r){this.element=o,this.type=r1,this._$disconnectableChildren=void 0,this._$parent=i,this.options=r}get _$isConnected(){return this._$parent._$isConnected}_$setValue(o){co&&co({kind:"commit to element binding",element:this.element,value:o,options:this.options}),V0(this,o)}}var Po={_boundAttributeSuffix:_2,_marker:Di,_markerMatch:e2,_HTML_RESULT:Aa,_getTemplateHtml:Ta,_TemplateInstance:n1,_isIterable:Na,_resolveDirective:V0,_ChildPart:_0,_AttributePart:e0,_BooleanAttributePart:w1,_EventPart:b1,_PropertyPart:f1,_ElementPart:t1},gw=hi.litHtmlPolyfillSupportDevMode;gw?.(yr,_0);(hi.litHtmlVersions??=[]).push("3.3.3");if(hi.litHtmlVersions.length>1)queueMicrotask(()=>{sr("multiple-versions","Multiple versions of Lit loaded. Loading multiple versions is not recommended.")});var B0=(o,i,r)=>{if(i==null)throw TypeError(`The container to render into may not be ${i}`);let a=ow++,n=r?.renderBefore??i,w=n._$litPart$;if(co&&co({kind:"begin render",id:a,value:o,container:i,options:r,part:w}),w===void 0){let b=r?.renderBefore??null;n._$litPart$=w=new _0(i.insertBefore(ur(),b),b,void 0,r??{})}return w._$setValue(o),co&&co({kind:"end render",id:a,value:o,container:i,options:r,part:w}),w};B0.setSanitizer=rw,B0.createSanitizer=W2,B0._testOnlyClearSanitizerFactoryDoNotCallOrElse=aw;var c1=null,ja={boundAttributeSuffix:Po._boundAttributeSuffix,marker:Po._marker,markerMatch:Po._markerMatch,HTML_RESULT:Po._HTML_RESULT,getTemplateHtml:Po._getTemplateHtml,overrideDirectiveResolve:(o,i)=>class extends o{_$resolve(r,a){return i(this,a)}},patchDirectiveResolve:(o,i)=>{if(o.prototype._$resolve.name!==i.name){c1??=o.prototype._$resolve.name;for(let r=o.prototype;r!==Object.prototype;r=Object.getPrototypeOf(r))if(r.hasOwnProperty(c1)){r[c1]=i;return}throw Error("Internal error: It is possible that both dev mode and production mode Lit was mixed together during SSR. Please comment on the issue: https://github.com/lit/lit/issues/4527")}},setDirectiveClass(o,i){o._$litDirective$=i},getAttributePartCommittedValue:(o,i,r)=>{let a=Jo;return o._commitValue=(n)=>a=n,o._$setValue(i,o,r),a},connectedDisconnectable:(o)=>({...o,_$isConnected:!0}),resolveDirective:Po._resolveDirective,AttributePart:Po._AttributePart,PropertyPart:Po._PropertyPart,BooleanAttributePart:Po._BooleanAttributePart,EventPart:Po._EventPart,ElementPart:Po._ElementPart,TemplateInstance:Po._TemplateInstance,isIterable:Po._isIterable,ChildPart:Po._ChildPart};var Ho={ATTRIBUTE:1,CHILD:2,PROPERTY:3,BOOLEAN_ATTRIBUTE:4,EVENT:5,ELEMENT:6},h0=(o)=>(...i)=>({["_$litDirective$"]:o,values:i});class a0{constructor(o){}get _$isConnected(){return this._$parent._$isConnected}_$initialize(o,i,r){this.__part=o,this._$parent=i,this.__attributeIndex=r}_$resolve(o,i){return this.update(o,i)}update(o,i){return this.render(...i)}}var sw=!0,C6=sw&&window.ShadyDOM?.inUse&&window.ShadyDOM?.noPatch===!0?window.ShadyDOM.wrap:(o)=>o,Ia=(o)=>o===null||typeof o!="object"&&typeof o!="function";var er=(o,i)=>i===void 0?o?._$litType$!==void 0:o?._$litType$===i,Sa=(o)=>{return o?._$litType$?.h!=null};var o2=(o)=>o.strings===void 0;var uw={},Ra=(o,i=uw)=>o._$committedValue=i;var zw=!1,{TemplateInstance:yw,isIterable:lw,resolveDirective:Pa,ChildPart:lr,ElementPart:vw}=ja,Wa=(o,i,r={})=>{if(i._$litPart$!==void 0)throw Error("container already contains a live render");let a=void 0,n=void 0,w=void 0,b=[],c=document.createTreeWalker(i,NodeFilter.SHOW_COMMENT),m;while((m=c.nextNode())!==null){let p=m.data;if(p.startsWith("lit-part")){if(b.length===0&&a!==void 0)throw Error(`There must be only one root part per container. Found a part marker (${m}) when we already have a root part marker (${n})`);if(w=xw(o,m,b,r),a===void 0)a=w;n??=m}else if(p.startsWith("lit-node"))$w(m,b,r);else if(p.startsWith("/lit-part")){if(b.length===1&&w!==a)throw Error("internal error");w=Fw(m,w,b)}}if(a===void 0){let p=i instanceof ShadowRoot?"{container.host.localName}'s shadow root":i instanceof DocumentFragment?"DocumentFragment":i.localName;console.error(`There should be exactly one root part in a render container, but we didn't find any in ${p}.`)}i._$litPart$=a},xw=(o,i,r,a)=>{let n,w;if(r.length===0)w=new lr(i,null,void 0,a),n=o;else{let b=r[r.length-1];if(b.type==="template-instance")w=new lr(i,null,b.instance,a),b.instance._$parts.push(w),n=b.result.values[b.instancePartIndex++],b.templatePartIndex++;else if(b.type==="iterable"){w=new lr(i,null,b.part,a);let c=b.iterator.next();if(c.done)throw n=void 0,b.done=!0,Error("Unhandled shorter than expected iterable");else n=c.value;b.part._$committedValue.push(w)}else w=new lr(i,null,b.part,a)}if(n=Pa(w,n),n===Jo)r.push({part:w,type:"leaf"});else if(Ia(n))r.push({part:w,type:"leaf"}),w._$committedValue=n;else if(er(n)){if(Sa(n))throw Error("compiled templates are not supported");let b=`lit-part ${Yw(n)}`;if(i.data===b){let c=lr.prototype._$getTemplate(n),m=new yw(c,w);r.push({type:"template-instance",instance:m,part:w,templatePartIndex:0,instancePartIndex:0,result:n}),w._$committedValue=m}else throw Error("Hydration value mismatch: Unexpected TemplateResult rendered to part")}else if(lw(n))r.push({part:w,type:"iterable",value:n,iterator:n[Symbol.iterator](),done:!1}),w._$committedValue=[];else r.push({part:w,type:"leaf"}),w._$committedValue=n==null?"":n;return w},Fw=(o,i,r)=>{if(i===void 0)throw Error("unbalanced part marker");i._$endNode=o;let a=r.pop();if(a.type==="iterable"){if(!a.iterator.next().done)throw Error("unexpected longer than expected iterable")}if(r.length>0)return r[r.length-1].part;else return},$w=(o,i,r)=>{let a=/lit-node (\d+)/.exec(o.data),n=parseInt(a[1]),w=o.nextElementSibling;if(w===null)throw Error("could not find node for attribute parts");w.removeAttribute("defer-hydration");let b=i[i.length-1];if(b.type==="template-instance"){let c=b.instance;while(!0){let m=c._$template.parts[b.templatePartIndex];if(m===void 0||m.type!==Ho.ATTRIBUTE&&m.type!==Ho.ELEMENT||m.index!==n)break;if(m.type===Ho.ATTRIBUTE){let p=new m.ctor(w,m.name,m.strings,b.instance,r),d=o2(p)?b.result.values[b.instancePartIndex]:b.result.values,s=!(p.type===Ho.EVENT||p.type===Ho.PROPERTY);p._$setValue(d,p,b.instancePartIndex,s),b.instancePartIndex+=m.strings.length-1,c._$parts.push(p)}else{let p=new vw(w,b.instance,r);Pa(p,b.result.values[b.instancePartIndex++]),c._$parts.push(p)}b.templatePartIndex++}}else throw Error("Hydration value mismatch: Primitive found where TemplateResult expected. This usually occurs due to conditional rendering that resulted in a different value or template being rendered between the server and client.")},m1=2,Ca=new WeakMap,Yw=(o)=>{let i=Ca.get(o.strings);if(i!==void 0)return i;let r=new Uint32Array(m1).fill(5381);for(let n of o.strings)for(let w=0;w<n.length;w++)r[w%m1]=r[w%m1]*33^n.charCodeAt(w);let a=String.fromCharCode(...new Uint8Array(r.buffer));return i=zw?Buffer.from(a,"binary").toString("base64"):btoa(a),Ca.set(o.strings,i),i};var _a="hydrate-internals-";globalThis.litElementHydrateSupport=({LitElement:o})=>{let i=Object.getOwnPropertyDescriptor(Object.getPrototypeOf(o),"observedAttributes").get;Object.defineProperty(o,"observedAttributes",{get(){return[...i.call(this),"defer-hydration"]}});let r=o.prototype.attributeChangedCallback;o.prototype.attributeChangedCallback=function(b,c,m){if(b==="defer-hydration"&&m===null)a.call(this);r.call(this,b,c,m)};let a=o.prototype.connectedCallback;o.prototype.connectedCallback=function(){if(!this.hasAttribute("defer-hydration"))a.call(this)};let n=o.prototype.createRenderRoot;o.prototype.createRenderRoot=function(){if(this.shadowRoot)return this._$needsHydration=!0,this.shadowRoot;else return n.call(this)};let w=Object.getPrototypeOf(o.prototype).update;o.prototype.update=function(b){let c=this.render();if(w.call(this,b),this._$needsHydration){this._$needsHydration=!1;for(let m of this.getAttributeNames())if(m.startsWith(_a)){let p=m.slice(_a.length);this.removeAttribute(p),this.removeAttribute(m)}Wa(c,this.renderRoot,this.renderOptions)}else B0(c,this.renderRoot,this.renderOptions)}};/*! Copyright 2026 Fonticons, Inc. - https://webawesome.com/license *//*! Copyright 2026 Fonticons, Inc. - https://webawesome.com/license *//*! Copyright 2026 Fonticons, Inc. - https://webawesome.com/license */async function qw(o){let i={match:(w)=>w.startsWith("wa-"),additionalElements:[],root:document,...o},r=Array.isArray(i.additionalElements)?i.additionalElements:[i.additionalElements],n=[...[...i.root.querySelectorAll(":not(:defined)")].map((w)=>w.localName).filter((w,b,c)=>c.indexOf(w)===b).filter((w)=>i.match(w)),...r];await Promise.all(n.map((w)=>customElements.whenDefined(w))),await new Promise(requestAnimationFrame)}/*! Copyright 2026 Fonticons, Inc. - https://webawesome.com/license */function Lw(o){let i=new FormData(o),r={};return i.forEach((a,n)=>{if(Reflect.has(r,n)){let w=r[n];if(Array.isArray(w))w.push(a);else r[n]=[r[n],a]}else r[n]=a}),r}/*! Copyright 2026 Fonticons, Inc. - https://webawesome.com/license *//*! Copyright 2026 Fonticons, Inc. - https://webawesome.com/license */var p1="",ea="",h1="";function d1(o){p1=o}function g1(o=""){if(!p1){let i=document.querySelector("[data-webawesome]");if(i?.hasAttribute("data-webawesome")){let r=new URL(i.getAttribute("data-webawesome")??"",window.location.href).pathname;d1(r)}else{let a=[...document.getElementsByTagName("script")].find((n)=>n.src.endsWith("webawesome.js")||n.src.endsWith("webawesome.loader.js")||n.src.endsWith("webawesome.ssr-loader.js"));if(a){let n=String(a.getAttribute("src"));d1(n.split("/").slice(0,-1).join("/"))}}}return p1.replace(/\/$/,"")+(o?`/${o.replace(/^\//,"")}`:"")}function s1(o){ea=o}function u1(){return ea.replace(/\/$/,"")}function on(o){h1=o}function z1(){if(!h1){let o=document.querySelector("[data-fa-kit-code]");if(o)on(o.getAttribute("data-fa-kit-code")||"")}return h1}/*! Copyright 2026 Fonticons, Inc. - https://webawesome.com/license */var rn=new MutationObserver((o)=>{for(let{addedNodes:i}of o)for(let r of i)if(r.nodeType===Node.ELEMENT_NODE)i2(r)});function Uw(){i2(document),rn.observe(document.documentElement,{subtree:!0,childList:!0})}function Xw(){rn.disconnect()}async function i2(o){let i=o instanceof Element?o.tagName.toLowerCase():"",r=i?.startsWith("wa-"),a=[...o.querySelectorAll(":not(:defined)")].map((m)=>m.tagName.toLowerCase()).filter((m)=>m.startsWith("wa-"));if(r&&!customElements.get(i))a.push(i);let n=o.querySelectorAll("[data-wa-preload]"),w=o instanceof Element&&o.hasAttribute("data-wa-preload")?[o,...n]:n;for(let m of w)a.push(...m.getAttribute("data-wa-preload").split(/\s+/).filter((p)=>p.startsWith("wa-")));let b=[...new Set(a)],c=await Promise.allSettled(b.map((m)=>Jw(m)));for(let m of c)if(m.status==="rejected")console.warn(m.reason);await new Promise(requestAnimationFrame),o.dispatchEvent(new CustomEvent("wa-discovery-complete",{bubbles:!1,cancelable:!1,composed:!0}))}function Jw(o){if(customElements.get(o))return Promise.resolve();let i=o.replace(/^wa-/i,""),r=g1(`components/${i}/${i}.js`);return new Promise((a,n)=>{import(r).then(()=>a()).catch(()=>n(Error(`Unable to autoload <${o}> from ${r}`)))})}var an=2000;function Zw(o=2000){an=o,document.addEventListener("turbo:before-render",Qw)}async function Qw(o){let i=o.detail.newBody;o.preventDefault();try{await Promise.race([i2(i),new Promise((r)=>setTimeout(r,an))])}finally{o.detail.resume()}}var or={};e4(or,{zoomOutUp:()=>xb,zoomOutRight:()=>vb,zoomOutLeft:()=>lb,zoomOutDown:()=>yb,zoomOut:()=>zb,zoomInUp:()=>ub,zoomInRight:()=>sb,zoomInLeft:()=>gb,zoomInDown:()=>db,zoomIn:()=>hb,wobble:()=>Tw,tada:()=>kw,swing:()=>Dw,slideOutUp:()=>bb,slideOutRight:()=>wb,slideOutLeft:()=>fb,slideOutDown:()=>nb,slideInUp:()=>ab,slideInRight:()=>rb,slideInLeft:()=>ib,slideInDown:()=>ob,shakeY:()=>Ew,shakeX:()=>Aw,shake:()=>Ow,rubberBand:()=>Nw,rotateOutUpRight:()=>e5,rotateOutUpLeft:()=>_5,rotateOutDownRight:()=>W5,rotateOutDownLeft:()=>P5,rotateOut:()=>C5,rotateInUpRight:()=>R5,rotateInUpLeft:()=>S5,rotateInDownRight:()=>I5,rotateInDownLeft:()=>j5,rotateIn:()=>T5,rollOut:()=>pb,rollIn:()=>mb,pulse:()=>Hw,lightSpeedOutRight:()=>k5,lightSpeedOutLeft:()=>D5,lightSpeedInRight:()=>E5,lightSpeedInLeft:()=>A5,jello:()=>Vw,jackInTheBox:()=>cb,hinge:()=>tb,heartBeat:()=>Mw,headShake:()=>Gw,flipOutY:()=>O5,flipOutX:()=>N5,flipInY:()=>H5,flipInX:()=>V5,flip:()=>M5,flash:()=>Bw,fadeOutUpBig:()=>G5,fadeOutUp:()=>B5,fadeOutTopRight:()=>K5,fadeOutTopLeft:()=>Q5,fadeOutRightBig:()=>Z5,fadeOutRight:()=>J5,fadeOutLeftBig:()=>X5,fadeOutLeft:()=>U5,fadeOutDownBig:()=>L5,fadeOutDown:()=>q5,fadeOutBottomRight:()=>Y5,fadeOutBottomLeft:()=>$5,fadeOut:()=>F5,fadeInUpBig:()=>x5,fadeInUp:()=>v5,fadeInTopRight:()=>l5,fadeInTopLeft:()=>y5,fadeInRightBig:()=>z5,fadeInRight:()=>u5,fadeInLeftBig:()=>s5,fadeInLeft:()=>g5,fadeInDownBig:()=>d5,fadeInDown:()=>h5,fadeInBottomRight:()=>p5,fadeInBottomLeft:()=>m5,fadeIn:()=>c5,easings:()=>r2,bounceOutUp:()=>t5,bounceOutRight:()=>b5,bounceOutLeft:()=>w5,bounceOutDown:()=>f5,bounceOut:()=>n5,bounceInUp:()=>a5,bounceInRight:()=>r5,bounceInLeft:()=>i5,bounceInDown:()=>o5,bounceIn:()=>ew,bounce:()=>Kw,backOutUp:()=>_w,backOutRight:()=>Ww,backOutLeft:()=>Pw,backOutDown:()=>Cw,backInUp:()=>Rw,backInRight:()=>Sw,backInLeft:()=>Iw,backInDown:()=>jw});var Kw=[{offset:0,easing:"cubic-bezier(0.215, 0.61, 0.355, 1)",transform:"translate3d(0, 0, 0)"},{offset:0.2,easing:"cubic-bezier(0.215, 0.61, 0.355, 1)",transform:"translate3d(0, 0, 0)"},{offset:0.4,easing:"cubic-bezier(0.755, 0.05, 0.855, 0.06)",transform:"translate3d(0, -30px, 0) scaleY(1.1)"},{offset:0.43,easing:"cubic-bezier(0.755, 0.05, 0.855, 0.06)",transform:"translate3d(0, -30px, 0) scaleY(1.1)"},{offset:0.53,easing:"cubic-bezier(0.215, 0.61, 0.355, 1)",transform:"translate3d(0, 0, 0)"},{offset:0.7,easing:"cubic-bezier(0.755, 0.05, 0.855, 0.06)",transform:"translate3d(0, -15px, 0) scaleY(1.05)"},{offset:0.8,"transition-timing-function":"cubic-bezier(0.215, 0.61, 0.355, 1)",transform:"translate3d(0, 0, 0) scaleY(0.95)"},{offset:0.9,transform:"translate3d(0, -4px, 0) scaleY(1.02)"},{offset:1,easing:"cubic-bezier(0.215, 0.61, 0.355, 1)",transform:"translate3d(0, 0, 0)"}];var Bw=[{offset:0,opacity:"1"},{offset:0.25,opacity:"0"},{offset:0.5,opacity:"1"},{offset:0.75,opacity:"0"},{offset:1,opacity:"1"}];var Gw=[{offset:0,transform:"translateX(0)"},{offset:0.065,transform:"translateX(-6px) rotateY(-9deg)"},{offset:0.185,transform:"translateX(5px) rotateY(7deg)"},{offset:0.315,transform:"translateX(-3px) rotateY(-5deg)"},{offset:0.435,transform:"translateX(2px) rotateY(3deg)"},{offset:0.5,transform:"translateX(0)"}];var Mw=[{offset:0,transform:"scale(1)"},{offset:0.14,transform:"scale(1.3)"},{offset:0.28,transform:"scale(1)"},{offset:0.42,transform:"scale(1.3)"},{offset:0.7,transform:"scale(1)"}];var Vw=[{offset:0,transform:"translate3d(0, 0, 0)"},{offset:0.111,transform:"translate3d(0, 0, 0)"},{offset:0.222,transform:"skewX(-12.5deg) skewY(-12.5deg)"},{offset:0.33299999999999996,transform:"skewX(6.25deg) skewY(6.25deg)"},{offset:0.444,transform:"skewX(-3.125deg) skewY(-3.125deg)"},{offset:0.555,transform:"skewX(1.5625deg) skewY(1.5625deg)"},{offset:0.6659999999999999,transform:"skewX(-0.78125deg) skewY(-0.78125deg)"},{offset:0.777,transform:"skewX(0.390625deg) skewY(0.390625deg)"},{offset:0.888,transform:"skewX(-0.1953125deg) skewY(-0.1953125deg)"},{offset:1,transform:"translate3d(0, 0, 0)"}];var Hw=[{offset:0,transform:"scale3d(1, 1, 1)"},{offset:0.5,transform:"scale3d(1.05, 1.05, 1.05)"},{offset:1,transform:"scale3d(1, 1, 1)"}];var Nw=[{offset:0,transform:"scale3d(1, 1, 1)"},{offset:0.3,transform:"scale3d(1.25, 0.75, 1)"},{offset:0.4,transform:"scale3d(0.75, 1.25, 1)"},{offset:0.5,transform:"scale3d(1.15, 0.85, 1)"},{offset:0.65,transform:"scale3d(0.95, 1.05, 1)"},{offset:0.75,transform:"scale3d(1.05, 0.95, 1)"},{offset:1,transform:"scale3d(1, 1, 1)"}];var Ow=[{offset:0,transform:"translate3d(0, 0, 0)"},{offset:0.1,transform:"translate3d(-10px, 0, 0)"},{offset:0.2,transform:"translate3d(10px, 0, 0)"},{offset:0.3,transform:"translate3d(-10px, 0, 0)"},{offset:0.4,transform:"translate3d(10px, 0, 0)"},{offset:0.5,transform:"translate3d(-10px, 0, 0)"},{offset:0.6,transform:"translate3d(10px, 0, 0)"},{offset:0.7,transform:"translate3d(-10px, 0, 0)"},{offset:0.8,transform:"translate3d(10px, 0, 0)"},{offset:0.9,transform:"translate3d(-10px, 0, 0)"},{offset:1,transform:"translate3d(0, 0, 0)"}];var Aw=[{offset:0,transform:"translate3d(0, 0, 0)"},{offset:0.1,transform:"translate3d(-10px, 0, 0)"},{offset:0.2,transform:"translate3d(10px, 0, 0)"},{offset:0.3,transform:"translate3d(-10px, 0, 0)"},{offset:0.4,transform:"translate3d(10px, 0, 0)"},{offset:0.5,transform:"translate3d(-10px, 0, 0)"},{offset:0.6,transform:"translate3d(10px, 0, 0)"},{offset:0.7,transform:"translate3d(-10px, 0, 0)"},{offset:0.8,transform:"translate3d(10px, 0, 0)"},{offset:0.9,transform:"translate3d(-10px, 0, 0)"},{offset:1,transform:"translate3d(0, 0, 0)"}];var Ew=[{offset:0,transform:"translate3d(0, 0, 0)"},{offset:0.1,transform:"translate3d(0, -10px, 0)"},{offset:0.2,transform:"translate3d(0, 10px, 0)"},{offset:0.3,transform:"translate3d(0, -10px, 0)"},{offset:0.4,transform:"translate3d(0, 10px, 0)"},{offset:0.5,transform:"translate3d(0, -10px, 0)"},{offset:0.6,transform:"translate3d(0, 10px, 0)"},{offset:0.7,transform:"translate3d(0, -10px, 0)"},{offset:0.8,transform:"translate3d(0, 10px, 0)"},{offset:0.9,transform:"translate3d(0, -10px, 0)"},{offset:1,transform:"translate3d(0, 0, 0)"}];var Dw=[{offset:0.2,transform:"rotate3d(0, 0, 1, 15deg)"},{offset:0.4,transform:"rotate3d(0, 0, 1, -10deg)"},{offset:0.6,transform:"rotate3d(0, 0, 1, 5deg)"},{offset:0.8,transform:"rotate3d(0, 0, 1, -5deg)"},{offset:1,transform:"rotate3d(0, 0, 1, 0deg)"}];var kw=[{offset:0,transform:"scale3d(1, 1, 1)"},{offset:0.1,transform:"scale3d(0.9, 0.9, 0.9) rotate3d(0, 0, 1, -3deg)"},{offset:0.2,transform:"scale3d(0.9, 0.9, 0.9) rotate3d(0, 0, 1, -3deg)"},{offset:0.3,transform:"scale3d(1.1, 1.1, 1.1) rotate3d(0, 0, 1, 3deg)"},{offset:0.4,transform:"scale3d(1.1, 1.1, 1.1) rotate3d(0, 0, 1, -3deg)"},{offset:0.5,transform:"scale3d(1.1, 1.1, 1.1) rotate3d(0, 0, 1, 3deg)"},{offset:0.6,transform:"scale3d(1.1, 1.1, 1.1) rotate3d(0, 0, 1, -3deg)"},{offset:0.7,transform:"scale3d(1.1, 1.1, 1.1) rotate3d(0, 0, 1, 3deg)"},{offset:0.8,transform:"scale3d(1.1, 1.1, 1.1) rotate3d(0, 0, 1, -3deg)"},{offset:0.9,transform:"scale3d(1.1, 1.1, 1.1) rotate3d(0, 0, 1, 3deg)"},{offset:1,transform:"scale3d(1, 1, 1)"}];var Tw=[{offset:0,transform:"translate3d(0, 0, 0)"},{offset:0.15,transform:"translate3d(-25%, 0, 0) rotate3d(0, 0, 1, -5deg)"},{offset:0.3,transform:"translate3d(20%, 0, 0) rotate3d(0, 0, 1, 3deg)"},{offset:0.45,transform:"translate3d(-15%, 0, 0) rotate3d(0, 0, 1, -3deg)"},{offset:0.6,transform:"translate3d(10%, 0, 0) rotate3d(0, 0, 1, 2deg)"},{offset:0.75,transform:"translate3d(-5%, 0, 0) rotate3d(0, 0, 1, -1deg)"},{offset:1,transform:"translate3d(0, 0, 0)"}];var jw=[{offset:0,transform:"translateY(-1200px) scale(0.7)",opacity:"0.7"},{offset:0.8,transform:"translateY(0px) scale(0.7)",opacity:"0.7"},{offset:1,transform:"scale(1)",opacity:"1"}];var Iw=[{offset:0,transform:"translateX(-2000px) scale(0.7)",opacity:"0.7"},{offset:0.8,transform:"translateX(0px) scale(0.7)",opacity:"0.7"},{offset:1,transform:"scale(1)",opacity:"1"}];var Sw=[{offset:0,transform:"translateX(2000px) scale(0.7)",opacity:"0.7"},{offset:0.8,transform:"translateX(0px) scale(0.7)",opacity:"0.7"},{offset:1,transform:"scale(1)",opacity:"1"}];var Rw=[{offset:0,transform:"translateY(1200px) scale(0.7)",opacity:"0.7"},{offset:0.8,transform:"translateY(0px) scale(0.7)",opacity:"0.7"},{offset:1,transform:"scale(1)",opacity:"1"}];var Cw=[{offset:0,transform:"scale(1)",opacity:"1"},{offset:0.2,transform:"translateY(0px) scale(0.7)",opacity:"0.7"},{offset:1,transform:"translateY(700px) scale(0.7)",opacity:"0.7"}];var Pw=[{offset:0,transform:"scale(1)",opacity:"1"},{offset:0.2,transform:"translateX(0px) scale(0.7)",opacity:"0.7"},{offset:1,transform:"translateX(-2000px) scale(0.7)",opacity:"0.7"}];var Ww=[{offset:0,transform:"scale(1)",opacity:"1"},{offset:0.2,transform:"translateX(0px) scale(0.7)",opacity:"0.7"},{offset:1,transform:"translateX(2000px) scale(0.7)",opacity:"0.7"}];var _w=[{offset:0,transform:"scale(1)",opacity:"1"},{offset:0.2,transform:"translateY(0px) scale(0.7)",opacity:"0.7"},{offset:1,transform:"translateY(-700px) scale(0.7)",opacity:"0.7"}];var ew=[{offset:0,opacity:"0",transform:"scale3d(0.3, 0.3, 0.3)"},{offset:0,easing:"cubic-bezier(0.215, 0.61, 0.355, 1)"},{offset:0.2,transform:"scale3d(1.1, 1.1, 1.1)"},{offset:0.2,easing:"cubic-bezier(0.215, 0.61, 0.355, 1)"},{offset:0.4,transform:"scale3d(0.9, 0.9, 0.9)"},{offset:0.4,easing:"cubic-bezier(0.215, 0.61, 0.355, 1)"},{offset:0.6,opacity:"1",transform:"scale3d(1.03, 1.03, 1.03)"},{offset:0.6,easing:"cubic-bezier(0.215, 0.61, 0.355, 1)"},{offset:0.8,transform:"scale3d(0.97, 0.97, 0.97)"},{offset:0.8,easing:"cubic-bezier(0.215, 0.61, 0.355, 1)"},{offset:1,opacity:"1",transform:"scale3d(1, 1, 1)"},{offset:1,easing:"cubic-bezier(0.215, 0.61, 0.355, 1)"}];var o5=[{offset:0,opacity:"0",transform:"translate3d(0, -3000px, 0) scaleY(3)"},{offset:0,easing:"cubic-bezier(0.215, 0.61, 0.355, 1)"},{offset:0.6,opacity:"1",transform:"translate3d(0, 25px, 0) scaleY(0.9)"},{offset:0.6,easing:"cubic-bezier(0.215, 0.61, 0.355, 1)"},{offset:0.75,transform:"translate3d(0, -10px, 0) scaleY(0.95)"},{offset:0.75,easing:"cubic-bezier(0.215, 0.61, 0.355, 1)"},{offset:0.9,transform:"translate3d(0, 5px, 0) scaleY(0.985)"},{offset:0.9,easing:"cubic-bezier(0.215, 0.61, 0.355, 1)"},{offset:1,transform:"translate3d(0, 0, 0)"},{offset:1,easing:"cubic-bezier(0.215, 0.61, 0.355, 1)"}];var i5=[{offset:0,opacity:"0",transform:"translate3d(-3000px, 0, 0) scaleX(3)"},{offset:0,easing:"cubic-bezier(0.215, 0.61, 0.355, 1)"},{offset:0.6,opacity:"1",transform:"translate3d(25px, 0, 0) scaleX(1)"},{offset:0.6,easing:"cubic-bezier(0.215, 0.61, 0.355, 1)"},{offset:0.75,transform:"translate3d(-10px, 0, 0) scaleX(0.98)"},{offset:0.75,easing:"cubic-bezier(0.215, 0.61, 0.355, 1)"},{offset:0.9,transform:"translate3d(5px, 0, 0) scaleX(0.995)"},{offset:0.9,easing:"cubic-bezier(0.215, 0.61, 0.355, 1)"},{offset:1,transform:"translate3d(0, 0, 0)"},{offset:1,easing:"cubic-bezier(0.215, 0.61, 0.355, 1)"}];var r5=[{offset:0,opacity:"0",transform:"translate3d(3000px, 0, 0) scaleX(3)"},{offset:0,easing:"cubic-bezier(0.215, 0.61, 0.355, 1)"},{offset:0.6,opacity:"1",transform:"translate3d(-25px, 0, 0) scaleX(1)"},{offset:0.6,easing:"cubic-bezier(0.215, 0.61, 0.355, 1)"},{offset:0.75,transform:"translate3d(10px, 0, 0) scaleX(0.98)"},{offset:0.75,easing:"cubic-bezier(0.215, 0.61, 0.355, 1)"},{offset:0.9,transform:"translate3d(-5px, 0, 0) scaleX(0.995)"},{offset:0.9,easing:"cubic-bezier(0.215, 0.61, 0.355, 1)"},{offset:1,transform:"translate3d(0, 0, 0)"},{offset:1,easing:"cubic-bezier(0.215, 0.61, 0.355, 1)"}];var a5=[{offset:0,opacity:"0",transform:"translate3d(0, 3000px, 0) scaleY(5)"},{offset:0,easing:"cubic-bezier(0.215, 0.61, 0.355, 1)"},{offset:0.6,opacity:"1",transform:"translate3d(0, -20px, 0) scaleY(0.9)"},{offset:0.6,easing:"cubic-bezier(0.215, 0.61, 0.355, 1)"},{offset:0.75,transform:"translate3d(0, 10px, 0) scaleY(0.95)"},{offset:0.75,easing:"cubic-bezier(0.215, 0.61, 0.355, 1)"},{offset:0.9,transform:"translate3d(0, -5px, 0) scaleY(0.985)"},{offset:0.9,easing:"cubic-bezier(0.215, 0.61, 0.355, 1)"},{offset:1,transform:"translate3d(0, 0, 0)"},{offset:1,easing:"cubic-bezier(0.215, 0.61, 0.355, 1)"}];var n5=[{offset:0.2,transform:"scale3d(0.9, 0.9, 0.9)"},{offset:0.5,opacity:"1",transform:"scale3d(1.1, 1.1, 1.1)"},{offset:0.55,opacity:"1",transform:"scale3d(1.1, 1.1, 1.1)"},{offset:1,opacity:"0",transform:"scale3d(0.3, 0.3, 0.3)"}];var f5=[{offset:0.2,transform:"translate3d(0, 10px, 0) scaleY(0.985)"},{offset:0.4,opacity:"1",transform:"translate3d(0, -20px, 0) scaleY(0.9)"},{offset:0.45,opacity:"1",transform:"translate3d(0, -20px, 0) scaleY(0.9)"},{offset:1,opacity:"0",transform:"translate3d(0, 2000px, 0) scaleY(3)"}];var w5=[{offset:0.2,opacity:"1",transform:"translate3d(20px, 0, 0) scaleX(0.9)"},{offset:1,opacity:"0",transform:"translate3d(-2000px, 0, 0) scaleX(2)"}];var b5=[{offset:0.2,opacity:"1",transform:"translate3d(-20px, 0, 0) scaleX(0.9)"},{offset:1,opacity:"0",transform:"translate3d(2000px, 0, 0) scaleX(2)"}];var t5=[{offset:0.2,transform:"translate3d(0, -10px, 0) scaleY(0.985)"},{offset:0.4,opacity:"1",transform:"translate3d(0, 20px, 0) scaleY(0.9)"},{offset:0.45,opacity:"1",transform:"translate3d(0, 20px, 0) scaleY(0.9)"},{offset:1,opacity:"0",transform:"translate3d(0, -2000px, 0) scaleY(3)"}];var c5=[{offset:0,opacity:"0"},{offset:1,opacity:"1"}];var m5=[{offset:0,opacity:"0",transform:"translate3d(-100%, 100%, 0)"},{offset:1,opacity:"1",transform:"translate3d(0, 0, 0)"}];var p5=[{offset:0,opacity:"0",transform:"translate3d(100%, 100%, 0)"},{offset:1,opacity:"1",transform:"translate3d(0, 0, 0)"}];var h5=[{offset:0,opacity:"0",transform:"translate3d(0, -100%, 0)"},{offset:1,opacity:"1",transform:"translate3d(0, 0, 0)"}];var d5=[{offset:0,opacity:"0",transform:"translate3d(0, -2000px, 0)"},{offset:1,opacity:"1",transform:"translate3d(0, 0, 0)"}];var g5=[{offset:0,opacity:"0",transform:"translate3d(-100%, 0, 0)"},{offset:1,opacity:"1",transform:"translate3d(0, 0, 0)"}];var s5=[{offset:0,opacity:"0",transform:"translate3d(-2000px, 0, 0)"},{offset:1,opacity:"1",transform:"translate3d(0, 0, 0)"}];var u5=[{offset:0,opacity:"0",transform:"translate3d(100%, 0, 0)"},{offset:1,opacity:"1",transform:"translate3d(0, 0, 0)"}];var z5=[{offset:0,opacity:"0",transform:"translate3d(2000px, 0, 0)"},{offset:1,opacity:"1",transform:"translate3d(0, 0, 0)"}];var y5=[{offset:0,opacity:"0",transform:"translate3d(-100%, -100%, 0)"},{offset:1,opacity:"1",transform:"translate3d(0, 0, 0)"}];var l5=[{offset:0,opacity:"0",transform:"translate3d(100%, -100%, 0)"},{offset:1,opacity:"1",transform:"translate3d(0, 0, 0)"}];var v5=[{offset:0,opacity:"0",transform:"translate3d(0, 100%, 0)"},{offset:1,opacity:"1",transform:"translate3d(0, 0, 0)"}];var x5=[{offset:0,opacity:"0",transform:"translate3d(0, 2000px, 0)"},{offset:1,opacity:"1",transform:"translate3d(0, 0, 0)"}];var F5=[{offset:0,opacity:"1"},{offset:1,opacity:"0"}];var $5=[{offset:0,opacity:"1",transform:"translate3d(0, 0, 0)"},{offset:1,opacity:"0",transform:"translate3d(-100%, 100%, 0)"}];var Y5=[{offset:0,opacity:"1",transform:"translate3d(0, 0, 0)"},{offset:1,opacity:"0",transform:"translate3d(100%, 100%, 0)"}];var q5=[{offset:0,opacity:"1"},{offset:1,opacity:"0",transform:"translate3d(0, 100%, 0)"}];var L5=[{offset:0,opacity:"1"},{offset:1,opacity:"0",transform:"translate3d(0, 2000px, 0)"}];var U5=[{offset:0,opacity:"1"},{offset:1,opacity:"0",transform:"translate3d(-100%, 0, 0)"}];var X5=[{offset:0,opacity:"1"},{offset:1,opacity:"0",transform:"translate3d(-2000px, 0, 0)"}];var J5=[{offset:0,opacity:"1"},{offset:1,opacity:"0",transform:"translate3d(100%, 0, 0)"}];var Z5=[{offset:0,opacity:"1"},{offset:1,opacity:"0",transform:"translate3d(2000px, 0, 0)"}];var Q5=[{offset:0,opacity:"1",transform:"translate3d(0, 0, 0)"},{offset:1,opacity:"0",transform:"translate3d(-100%, -100%, 0)"}];var K5=[{offset:0,opacity:"1",transform:"translate3d(0, 0, 0)"},{offset:1,opacity:"0",transform:"translate3d(100%, -100%, 0)"}];var B5=[{offset:0,opacity:"1"},{offset:1,opacity:"0",transform:"translate3d(0, -100%, 0)"}];var G5=[{offset:0,opacity:"1"},{offset:1,opacity:"0",transform:"translate3d(0, -2000px, 0)"}];var M5=[{offset:0,transform:"perspective(400px) scale3d(1, 1, 1) translate3d(0, 0, 0) rotate3d(0, 1, 0, -360deg)",easing:"ease-out"},{offset:0.4,transform:`perspective(400px) scale3d(1, 1, 1) translate3d(0, 0, 150px)
      rotate3d(0, 1, 0, -190deg)`,easing:"ease-out"},{offset:0.5,transform:`perspective(400px) scale3d(1, 1, 1) translate3d(0, 0, 150px)
      rotate3d(0, 1, 0, -170deg)`,easing:"ease-in"},{offset:0.8,transform:`perspective(400px) scale3d(0.95, 0.95, 0.95) translate3d(0, 0, 0)
      rotate3d(0, 1, 0, 0deg)`,easing:"ease-in"},{offset:1,transform:"perspective(400px) scale3d(1, 1, 1) translate3d(0, 0, 0) rotate3d(0, 1, 0, 0deg)",easing:"ease-in"}];var V5=[{offset:0,transform:"perspective(400px) rotate3d(1, 0, 0, 90deg)",easing:"ease-in",opacity:"0"},{offset:0.4,transform:"perspective(400px) rotate3d(1, 0, 0, -20deg)",easing:"ease-in"},{offset:0.6,transform:"perspective(400px) rotate3d(1, 0, 0, 10deg)",opacity:"1"},{offset:0.8,transform:"perspective(400px) rotate3d(1, 0, 0, -5deg)"},{offset:1,transform:"perspective(400px)"}];var H5=[{offset:0,transform:"perspective(400px) rotate3d(0, 1, 0, 90deg)",easing:"ease-in",opacity:"0"},{offset:0.4,transform:"perspective(400px) rotate3d(0, 1, 0, -20deg)",easing:"ease-in"},{offset:0.6,transform:"perspective(400px) rotate3d(0, 1, 0, 10deg)",opacity:"1"},{offset:0.8,transform:"perspective(400px) rotate3d(0, 1, 0, -5deg)"},{offset:1,transform:"perspective(400px)"}];var N5=[{offset:0,transform:"perspective(400px)"},{offset:0.3,transform:"perspective(400px) rotate3d(1, 0, 0, -20deg)",opacity:"1"},{offset:1,transform:"perspective(400px) rotate3d(1, 0, 0, 90deg)",opacity:"0"}];var O5=[{offset:0,transform:"perspective(400px)"},{offset:0.3,transform:"perspective(400px) rotate3d(0, 1, 0, -15deg)",opacity:"1"},{offset:1,transform:"perspective(400px) rotate3d(0, 1, 0, 90deg)",opacity:"0"}];var A5=[{offset:0,transform:"translate3d(-100%, 0, 0) skewX(30deg)",opacity:"0"},{offset:0.6,transform:"skewX(-20deg)",opacity:"1"},{offset:0.8,transform:"skewX(5deg)"},{offset:1,transform:"translate3d(0, 0, 0)"}];var E5=[{offset:0,transform:"translate3d(100%, 0, 0) skewX(-30deg)",opacity:"0"},{offset:0.6,transform:"skewX(20deg)",opacity:"1"},{offset:0.8,transform:"skewX(-5deg)"},{offset:1,transform:"translate3d(0, 0, 0)"}];var D5=[{offset:0,opacity:"1"},{offset:1,transform:"translate3d(-100%, 0, 0) skewX(-30deg)",opacity:"0"}];var k5=[{offset:0,opacity:"1"},{offset:1,transform:"translate3d(100%, 0, 0) skewX(30deg)",opacity:"0"}];var T5=[{offset:0,transform:"rotate3d(0, 0, 1, -200deg)",opacity:"0"},{offset:1,transform:"translate3d(0, 0, 0)",opacity:"1"}];var j5=[{offset:0,transform:"rotate3d(0, 0, 1, -45deg)",opacity:"0"},{offset:1,transform:"translate3d(0, 0, 0)",opacity:"1"}];var I5=[{offset:0,transform:"rotate3d(0, 0, 1, 45deg)",opacity:"0"},{offset:1,transform:"translate3d(0, 0, 0)",opacity:"1"}];var S5=[{offset:0,transform:"rotate3d(0, 0, 1, 45deg)",opacity:"0"},{offset:1,transform:"translate3d(0, 0, 0)",opacity:"1"}];var R5=[{offset:0,transform:"rotate3d(0, 0, 1, -90deg)",opacity:"0"},{offset:1,transform:"translate3d(0, 0, 0)",opacity:"1"}];var C5=[{offset:0,opacity:"1"},{offset:1,transform:"rotate3d(0, 0, 1, 200deg)",opacity:"0"}];var P5=[{offset:0,opacity:"1"},{offset:1,transform:"rotate3d(0, 0, 1, 45deg)",opacity:"0"}];var W5=[{offset:0,opacity:"1"},{offset:1,transform:"rotate3d(0, 0, 1, -45deg)",opacity:"0"}];var _5=[{offset:0,opacity:"1"},{offset:1,transform:"rotate3d(0, 0, 1, -45deg)",opacity:"0"}];var e5=[{offset:0,opacity:"1"},{offset:1,transform:"rotate3d(0, 0, 1, 90deg)",opacity:"0"}];var ob=[{offset:0,transform:"translate3d(0, -100%, 0)",visibility:"visible"},{offset:1,transform:"translate3d(0, 0, 0)"}];var ib=[{offset:0,transform:"translate3d(-100%, 0, 0)",visibility:"visible"},{offset:1,transform:"translate3d(0, 0, 0)"}];var rb=[{offset:0,transform:"translate3d(100%, 0, 0)",visibility:"visible"},{offset:1,transform:"translate3d(0, 0, 0)"}];var ab=[{offset:0,transform:"translate3d(0, 100%, 0)",visibility:"visible"},{offset:1,transform:"translate3d(0, 0, 0)"}];var nb=[{offset:0,transform:"translate3d(0, 0, 0)"},{offset:1,visibility:"hidden",transform:"translate3d(0, 100%, 0)"}];var fb=[{offset:0,transform:"translate3d(0, 0, 0)"},{offset:1,visibility:"hidden",transform:"translate3d(-100%, 0, 0)"}];var wb=[{offset:0,transform:"translate3d(0, 0, 0)"},{offset:1,visibility:"hidden",transform:"translate3d(100%, 0, 0)"}];var bb=[{offset:0,transform:"translate3d(0, 0, 0)"},{offset:1,visibility:"hidden",transform:"translate3d(0, -100%, 0)"}];var tb=[{offset:0,easing:"ease-in-out"},{offset:0.2,transform:"rotate3d(0, 0, 1, 80deg)",easing:"ease-in-out"},{offset:0.4,transform:"rotate3d(0, 0, 1, 60deg)",easing:"ease-in-out",opacity:"1"},{offset:0.6,transform:"rotate3d(0, 0, 1, 80deg)",easing:"ease-in-out"},{offset:0.8,transform:"rotate3d(0, 0, 1, 60deg)",easing:"ease-in-out",opacity:"1"},{offset:1,transform:"translate3d(0, 700px, 0)",opacity:"0"}];var cb=[{offset:0,opacity:"0",transform:"scale(0.1) rotate(30deg)","transform-origin":"center bottom"},{offset:0.5,transform:"rotate(-10deg)"},{offset:0.7,transform:"rotate(3deg)"},{offset:1,opacity:"1",transform:"scale(1)"}];var mb=[{offset:0,opacity:"0",transform:"translate3d(-100%, 0, 0) rotate3d(0, 0, 1, -120deg)"},{offset:1,opacity:"1",transform:"translate3d(0, 0, 0)"}];var pb=[{offset:0,opacity:"1"},{offset:1,opacity:"0",transform:"translate3d(100%, 0, 0) rotate3d(0, 0, 1, 120deg)"}];var hb=[{offset:0,opacity:"0",transform:"scale3d(0.3, 0.3, 0.3)"},{offset:0.5,opacity:"1"}];var db=[{offset:0,opacity:"0",transform:"scale3d(0.1, 0.1, 0.1) translate3d(0, -1000px, 0)",easing:"cubic-bezier(0.55, 0.055, 0.675, 0.19)"},{offset:0.6,opacity:"1",transform:"scale3d(0.475, 0.475, 0.475) translate3d(0, 60px, 0)",easing:"cubic-bezier(0.175, 0.885, 0.32, 1)"}];var gb=[{offset:0,opacity:"0",transform:"scale3d(0.1, 0.1, 0.1) translate3d(-1000px, 0, 0)",easing:"cubic-bezier(0.55, 0.055, 0.675, 0.19)"},{offset:0.6,opacity:"1",transform:"scale3d(0.475, 0.475, 0.475) translate3d(10px, 0, 0)",easing:"cubic-bezier(0.175, 0.885, 0.32, 1)"}];var sb=[{offset:0,opacity:"0",transform:"scale3d(0.1, 0.1, 0.1) translate3d(1000px, 0, 0)",easing:"cubic-bezier(0.55, 0.055, 0.675, 0.19)"},{offset:0.6,opacity:"1",transform:"scale3d(0.475, 0.475, 0.475) translate3d(-10px, 0, 0)",easing:"cubic-bezier(0.175, 0.885, 0.32, 1)"}];var ub=[{offset:0,opacity:"0",transform:"scale3d(0.1, 0.1, 0.1) translate3d(0, 1000px, 0)",easing:"cubic-bezier(0.55, 0.055, 0.675, 0.19)"},{offset:0.6,opacity:"1",transform:"scale3d(0.475, 0.475, 0.475) translate3d(0, -60px, 0)",easing:"cubic-bezier(0.175, 0.885, 0.32, 1)"}];var zb=[{offset:0,opacity:"1"},{offset:0.5,opacity:"0",transform:"scale3d(0.3, 0.3, 0.3)"},{offset:1,opacity:"0"}];var yb=[{offset:0.4,opacity:"1",transform:"scale3d(0.475, 0.475, 0.475) translate3d(0, -60px, 0)",easing:"cubic-bezier(0.55, 0.055, 0.675, 0.19)"},{offset:1,opacity:"0",transform:"scale3d(0.1, 0.1, 0.1) translate3d(0, 2000px, 0)",easing:"cubic-bezier(0.175, 0.885, 0.32, 1)"}];var lb=[{offset:0.4,opacity:"1",transform:"scale3d(0.475, 0.475, 0.475) translate3d(42px, 0, 0)"},{offset:1,opacity:"0",transform:"scale(0.1) translate3d(-2000px, 0, 0)"}];var vb=[{offset:0.4,opacity:"1",transform:"scale3d(0.475, 0.475, 0.475) translate3d(-42px, 0, 0)"},{offset:1,opacity:"0",transform:"scale(0.1) translate3d(2000px, 0, 0)"}];var xb=[{offset:0.4,opacity:"1",transform:"scale3d(0.475, 0.475, 0.475) translate3d(0, 60px, 0)",easing:"cubic-bezier(0.55, 0.055, 0.675, 0.19)"},{offset:1,opacity:"0",transform:"scale3d(0.1, 0.1, 0.1) translate3d(0, -2000px, 0)",easing:"cubic-bezier(0.175, 0.885, 0.32, 1)"}];var r2={linear:"linear",ease:"ease",easeIn:"ease-in",easeOut:"ease-out",easeInOut:"ease-in-out",easeInSine:"cubic-bezier(0.47, 0, 0.745, 0.715)",easeOutSine:"cubic-bezier(0.39, 0.575, 0.565, 1)",easeInOutSine:"cubic-bezier(0.445, 0.05, 0.55, 0.95)",easeInQuad:"cubic-bezier(0.55, 0.085, 0.68, 0.53)",easeOutQuad:"cubic-bezier(0.25, 0.46, 0.45, 0.94)",easeInOutQuad:"cubic-bezier(0.455, 0.03, 0.515, 0.955)",easeInCubic:"cubic-bezier(0.55, 0.055, 0.675, 0.19)",easeOutCubic:"cubic-bezier(0.215, 0.61, 0.355, 1)",easeInOutCubic:"cubic-bezier(0.645, 0.045, 0.355, 1)",easeInQuart:"cubic-bezier(0.895, 0.03, 0.685, 0.22)",easeOutQuart:"cubic-bezier(0.165, 0.84, 0.44, 1)",easeInOutQuart:"cubic-bezier(0.77, 0, 0.175, 1)",easeInQuint:"cubic-bezier(0.755, 0.05, 0.855, 0.06)",easeOutQuint:"cubic-bezier(0.23, 1, 0.32, 1)",easeInOutQuint:"cubic-bezier(0.86, 0, 0.07, 1)",easeInExpo:"cubic-bezier(0.95, 0.05, 0.795, 0.035)",easeOutExpo:"cubic-bezier(0.19, 1, 0.22, 1)",easeInOutExpo:"cubic-bezier(1, 0, 0, 1)",easeInCirc:"cubic-bezier(0.6, 0.04, 0.98, 0.335)",easeOutCirc:"cubic-bezier(0.075, 0.82, 0.165, 1)",easeInOutCirc:"cubic-bezier(0.785, 0.135, 0.15, 0.86)",easeInBack:"cubic-bezier(0.6, -0.28, 0.735, 0.045)",easeOutBack:"cubic-bezier(0.175, 0.885, 0.32, 1.275)",easeInOutBack:"cubic-bezier(0.68, -0.55, 0.265, 1.55)"};/*! Copyright 2026 Fonticons, Inc. - https://webawesome.com/license */function Fb(){return Object.entries(or).filter(([o])=>o!=="easings").map(([o])=>o)}function $b(){return Object.entries(r2).map(([o])=>o)}var y1=new Set,ir=new Map,n0,l1="ltr",v1="en",nn=typeof MutationObserver<"u"&&typeof document<"u"&&typeof document.documentElement<"u";if(nn){let o=new MutationObserver(fn);l1=document.documentElement.dir||"ltr",v1=document.documentElement.lang||navigator.language,o.observe(document.documentElement,{attributes:!0,attributeFilter:["dir","lang"]})}function rr(...o){o.map((i)=>{let r=i.$code.toLowerCase();if(ir.has(r))ir.set(r,Object.assign(Object.assign({},ir.get(r)),i));else ir.set(r,i);if(!n0)n0=i}),fn()}function fn(){if(nn)l1=document.documentElement.dir||"ltr",v1=document.documentElement.lang||navigator.language;[...y1.keys()].map((o)=>{if(typeof o.requestUpdate==="function")o.requestUpdate()})}class x1{constructor(o){this.host=o,this.host.addController(this)}hostConnected(){y1.add(this.host)}hostDisconnected(){y1.delete(this.host)}dir(){return`${this.host.dir||l1}`.toLowerCase()}lang(){let o=`${this.host.lang||v1}`.toLowerCase().replace(/_/g,"-");try{return new Intl.Locale(o),o}catch(i){return n0?n0.$code.toLowerCase():"en"}}getTranslationData(o){var i,r;let a;try{a=new Intl.Locale(o.replace(/_/g,"-"))}catch(m){return{locale:void 0,language:"",region:"",primary:void 0,secondary:void 0}}let n=a.language.toLowerCase(),w=(r=(i=a.region)===null||i===void 0?void 0:i.toLowerCase())!==null&&r!==void 0?r:"",b=ir.get(`${n}-${w}`),c=ir.get(n);return{locale:a,language:n,region:w,primary:b,secondary:c}}exists(o,i){var r;let{primary:a,secondary:n}=this.getTranslationData((r=i.lang)!==null&&r!==void 0?r:this.lang());if(i=Object.assign({includeFallback:!1},i),a&&a[o]||n&&n[o]||i.includeFallback&&n0&&n0[o])return!0;return!1}term(o,...i){let{primary:r,secondary:a}=this.getTranslationData(this.lang()),n;if(r&&r[o])n=r[o];else if(a&&a[o])n=a[o];else if(n0&&n0[o])n=n0[o];else return console.error(`No translation found for: ${String(o)}`),String(o);if(typeof n==="function")return n(...i);return n}date(o,i){return o=new Date(o),new Intl.DateTimeFormat(this.lang(),i).format(o)}number(o,i){return o=Number(o),isNaN(o)?"":new Intl.NumberFormat(this.lang(),i).format(o)}relativeTime(o,i,r){return new Intl.RelativeTimeFormat(this.lang(),r).format(o,i)}}/*! Copyright 2026 Fonticons, Inc. - https://webawesome.com/license */var wn={$code:"en",$name:"English",$dir:"ltr",am:"AM",autosizeColumn:"Autosize column",captions:"Captions",carousel:"Carousel",chooseDate:"Choose date",chooseDecade:"Choose decade",chooseMonth:"Choose month",chooseTime:"Choose time",chooseYear:"Choose year",clearEntry:"Clear entry",clearFilter:"Clear filter",clearSort:"Clear sort",close:"Close",closeCalendar:"Close calendar",closeTimeInput:"Close time picker",collapseRow:"Collapse row",columnMenu:"Column options",columnMovedToPosition:(o,i,r)=>`${o} moved to position ${i} of ${r}`,columns:"Columns",compactPageXOfY:(o,i)=>`${o} of ${i}`,copied:"Copied",copy:"Copy",createOption:(o)=>`Create "${o}"`,currentlyPlaying:"currently playing",currentValue:"Current value",date:"Date",datePickerKeyboardHelp:"Use arrow keys to change values; press Alt+Down Arrow to open the calendar.",day:"Day",dayPeriod:"AM/PM",decrement:"Decrement",deselectAllRows:"Deselect all rows",dropFileHere:"Drop file here or click to browse",dropFilesHere:"Drop files here or click to browse",empty:"Empty",endDate:"End date",enterFullscreen:"Enter fullscreen",error:"Error",exitFullscreen:"Exit fullscreen",expandRow:"Expand row",filterByColumn:(o)=>`Filter by ${o}`,filterFrom:"From",filterMax:"Max",filterMin:"Min",filterTo:"To",firstPage:"First page",goToSlide:(o,i)=>`Go to slide ${o} of ${i}`,hideColumn:"Hide column",hidePassword:"Hide password",hour:"Hour",incompleteDate:"Enter a valid date.",increment:"Increment",jumpBackwardX:(o)=>`Jump back ${o} pages`,jumpForwardX:(o)=>`Jump forward ${o} pages`,lastPage:"Last page",loading:"Loading",minute:"Minute",month:"Month",moreOptions:"More Options",mute:"Mute",nextDecade:"Next decade",nextMonth:"Next month",nextPage:"Next page",nextSlide:"Next slide",nextVideo:"Next Video",nextYear:"Next year",noData:"No data",noResults:"No matching results",now:"Now",numCharacters:(o)=>{if(o===1)return"1 character";return`${o} characters`},numCharactersRemaining:(o)=>{if(o===1)return"1 character remaining";return`${o} characters remaining`},numOptionsSelected:(o)=>{if(o===0)return"No options selected";if(o===1)return"1 option selected";return`${o} options selected`},numRowsCopied:(o)=>o===1?"1 row copied":`${o} rows copied`,numRowsSelected:(o)=>o===1?"1 row selected":`${o} rows selected`,pageXOfY:(o,i)=>`Page ${o} of ${i}`,pagination:"Pagination",pause:"Pause",pauseAnimation:"Pause animation",pictureInPicture:"Picture in picture",pinLeft:"Pin left",pinRight:"Pin right",play:"Play",playAnimation:"Play animation",playbackSpeed:"Playback speed",playlist:"Playlist",pm:"PM",previousDecade:"Previous decade",previousMonth:"Previous month",previousPage:"Previous page",previousSlide:"Previous slide",previousVideo:"Previous video",previousYear:"Previous year",progress:"Progress",rangeTooLong:(o)=>{if(o===1)return"Select a range no longer than 1 day";return`Select a range no longer than ${o} days`},rangeTooShort:(o)=>{if(o===1)return"Select a range at least 1 day long";return`Select a range at least ${o} days long`},readonly:"Read-only",remove:"Remove",resetColumns:"Reset columns",resize:"Resize",resizeColumn:"Resize column",rowsPerPage:"Rows per page",scrollableRegion:"Scrollable region",scrollToEnd:"Scroll to end",scrollToStart:"Scroll to start",search:"Search",second:"Second",seek:"Seek",seekProgress:(o,i)=>`${o} of ${i}`,selectAColorFromTheScreen:"Select a color from the screen",selectAllRows:"Select all rows",selected:"Selected",selectedDateLabel:(o)=>`Selected: ${o}`,selectedRangeLabel:(o)=>`Selected range: ${o}`,selectGroup:"Select group",selectionCleared:"Selection cleared",selectRow:"Select row",showingNofMRows:(o,i)=>`Showing ${o} of ${i} rows`,showingXtoYofZ:(o,i,r)=>`${o}–${i} of ${r}`,showPassword:"Show password",slideNum:(o)=>`Slide ${o}`,sortAscending:"Sort ascending",sortColumn:"Sort column",sortDescending:"Sort descending",startDate:"Start date",time:"Time",timeInputKeyboardHelp:"Use arrow keys to change values; press Alt+Down Arrow to open the time picker.",today:"Today",toggleColorFormat:"Toggle color format",unmute:"Unmute",unpin:"Unpin",unpinColumn:"Unpin column",videoPlayer:"Video player",volume:"Volume",year:"Year",zoomIn:"Zoom in",zoomOut:"Zoom out"};rr(wn);var bn=wn;/*! Copyright 2026 Fonticons, Inc. - https://webawesome.com/license */var B=class extends x1{lang(){if(this.host.didSSR&&!this.host.hasUpdated)return this.host.lang||"en";return super.lang()}};rr(bn);/*! Copyright 2026 Fonticons, Inc. - https://webawesome.com/license */var tn="7.3.0";function cn(o,i,r){let a="solid";if(i==="chisel")a="chisel-regular";if(i==="etch")a="etch-solid";if(i==="graphite")a="graphite-thin";if(i==="jelly"){if(a="jelly-regular",r==="duo-regular")a="jelly-duo-regular";if(r==="fill-regular")a="jelly-fill-regular"}if(i==="jelly-duo")a="jelly-duo-regular";if(i==="jelly-fill")a="jelly-fill-regular";if(i==="notdog"){if(r==="solid")a="notdog-solid";if(r==="duo-solid")a="notdog-duo-solid"}if(i==="notdog-duo")a="notdog-duo-solid";if(i==="slab"){if(r==="solid"||r==="regular")a="slab-regular";if(r==="press-regular")a="slab-press-regular"}if(i==="slab-press")a="slab-press-regular";if(i==="slab-duo")a="slab-duo-regular";if(i==="slab-press-duo")a="slab-press-duo-regular";if(i==="thumbprint")a="thumbprint-light";if(i==="utility")a="utility-semibold";if(i==="utility-duo")a="utility-duo-semibold";if(i==="utility-fill")a="utility-fill-semibold";if(i==="whiteboard")a="whiteboard-semibold";if(i==="mosaic")a="mosaic-solid";if(i==="pixel")a="pixel-regular";if(i==="vellum")a="vellum-solid";if(i==="classic"){if(r==="thin")a="thin";if(r==="light")a="light";if(r==="regular")a="regular";if(r==="solid")a="solid"}if(i==="duotone"){if(r==="thin")a="duotone-thin";if(r==="light")a="duotone-light";if(r==="regular")a="duotone-regular";if(r==="solid")a="duotone"}if(i==="sharp"){if(r==="thin")a="sharp-thin";if(r==="light")a="sharp-light";if(r==="regular")a="sharp-regular";if(r==="solid")a="sharp-solid"}if(i==="sharp-duotone"){if(r==="thin")a="sharp-duotone-thin";if(r==="light")a="sharp-duotone-light";if(r==="regular")a="sharp-duotone-regular";if(r==="solid")a="sharp-duotone-solid"}if(i==="brands")a="brands";return a}function Yb(o,i,r){let a=cn(o,i,r),n=u1();if(n)return`${n}/${a}/${o}.svg`;let w=z1();return w.length>0?`https://ka-p.fontawesome.com/releases/v${tn}/svgs/${a}/${o}.svg?token=${encodeURIComponent(w)}`:`https://ka-f.fontawesome.com/releases/v${tn}/svgs/${a}/${o}.svg`}var qb={name:"default",resolver:(o,i="classic",r="solid")=>{return Yb(o,i,r)},mutator:(o,i)=>{if(!o.hasAttribute("fill"))o.setAttribute("fill","currentColor");if(i?.family&&!o.hasAttribute("data-duotone-initialized")){let{family:r,variant:a}=i;if(r==="duotone"||r==="sharp-duotone"||r==="notdog-duo"||r==="notdog"&&a==="duo-solid"||r==="jelly-duo"||r==="jelly"&&a==="duo-regular"||r==="utility-duo"||r==="slab-duo"||r==="slab-press-duo"||r==="thumbprint"){let n=[...o.querySelectorAll("path")],w=n.find((c)=>!c.hasAttribute("opacity")),b=n.find((c)=>c.hasAttribute("opacity"));if(!w||!b)return;if(w.setAttribute("data-duotone-primary",""),b.setAttribute("data-duotone-secondary",""),i.swapOpacity&&w&&b){let c=b.getAttribute("opacity")||"0.4";w.style.setProperty("--path-opacity",c),b.style.setProperty("--path-opacity","1")}o.setAttribute("data-duotone-initialized","")}}}},mn=qb;/*! Copyright 2026 Fonticons, Inc. - https://webawesome.com/license */function Lb(o){return`data:image/svg+xml,${encodeURIComponent(o)}`}var F1={solid:{backward:'<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 640 640"><!--!Font Awesome Free v7.2.0 by @fontawesome - https://fontawesome.com License - https://fontawesome.com/license/free Copyright 2026 Fonticons, Inc.--><path d="M236.3 107.1C247.9 96 265 92.9 279.7 99.2C294.4 105.5 304 120 304 136L304 272.3L476.3 107.2C487.9 96 505 92.9 519.7 99.2C534.4 105.5 544 120 544 136L544 504C544 520 534.4 534.5 519.7 540.8C505 547.1 487.9 544 476.3 532.9L304 367.7L304 504C304 520 294.4 534.5 279.7 540.8C265 547.1 247.9 544 236.3 532.9L44.3 348.9C36.5 341.3 32 330.9 32 320C32 309.1 36.5 298.7 44.3 291.1L236.3 107.1z"/></svg>',"backward-step":'<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 640 640"><!--!Font Awesome Free v7.2.0 by @fontawesome - https://fontawesome.com License - https://fontawesome.com/license/free Copyright 2026 Fonticons, Inc.--><path d="M491 100.8C478.1 93.8 462.3 94.5 450 102.6L192 272.1L192 128C192 110.3 177.7 96 160 96C142.3 96 128 110.3 128 128L128 512C128 529.7 142.3 544 160 544C177.7 544 192 529.7 192 512L192 367.9L450 537.5C462.3 545.6 478 546.3 491 539.3C504 532.3 512 518.8 512 504.1L512 136.1C512 121.4 503.9 107.9 491 100.9z"/></svg>',"angles-left":'<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 512 512"><!--! Font Awesome Free 7.0.0 by @fontawesome - https://fontawesome.com License - https://fontawesome.com/license/free Copyright 2025 Fonticons, Inc. --><path d="M77.3 256 214.7 118.6c12.5-12.5 12.5-32.8 0-45.3s-32.8-12.5-45.3 0l-160 160c-12.5 12.5-12.5 32.8 0 45.3l160 160c12.5 12.5 32.8 12.5 45.3 0s12.5-32.8 0-45.3L77.3 256zm192 0L406.7 118.6c12.5-12.5 12.5-32.8 0-45.3s-32.8-12.5-45.3 0l-160 160c-12.5 12.5-12.5 32.8 0 45.3l160 160c12.5 12.5 32.8 12.5 45.3 0s12.5-32.8 0-45.3L269.3 256z"/></svg>',"angles-right":'<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 512 512"><!--! Font Awesome Free 7.0.0 by @fontawesome - https://fontawesome.com License - https://fontawesome.com/license/free Copyright 2025 Fonticons, Inc. --><path d="M434.7 256 297.3 118.6c-12.5-12.5-12.5-32.8 0-45.3s32.8-12.5 45.3 0l160 160c12.5 12.5 12.5 32.8 0 45.3l-160 160c-12.5 12.5-32.8 12.5-45.3 0s-12.5-32.8 0-45.3L434.7 256zm-192 0L105.3 118.6c-12.5-12.5-12.5-32.8 0-45.3s32.8-12.5 45.3 0l160 160c12.5 12.5 12.5 32.8 0 45.3l-160 160c-12.5 12.5-32.8 12.5-45.3 0s-12.5-32.8 0-45.3L242.7 256z"/></svg>',check:'<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 448 512"><!--! Font Awesome Free 7.0.0 by @fontawesome - https://fontawesome.com License - https://fontawesome.com/license/free Copyright 2025 Fonticons, Inc. --><path d="M434.8 70.1c14.3 10.4 17.5 30.4 7.1 44.7l-256 352c-5.5 7.6-14 12.3-23.4 13.1s-18.5-2.7-25.1-9.3l-128-128c-12.5-12.5-12.5-32.8 0-45.3s32.8-12.5 45.3 0l101.5 101.5 234-321.7c10.4-14.3 30.4-17.5 44.7-7.1z"/></svg>',"chevron-down":'<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 448 512"><!--! Font Awesome Free 7.0.0 by @fontawesome - https://fontawesome.com License - https://fontawesome.com/license/free Copyright 2025 Fonticons, Inc. --><path d="M201.4 406.6c12.5 12.5 32.8 12.5 45.3 0l192-192c12.5-12.5 12.5-32.8 0-45.3s-32.8-12.5-45.3 0L224 338.7 54.6 169.4c-12.5-12.5-32.8-12.5-45.3 0s-12.5 32.8 0 45.3l192 192z"/></svg>',"chevron-left":'<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 320 512"><!--! Font Awesome Free 7.0.0 by @fontawesome - https://fontawesome.com License - https://fontawesome.com/license/free Copyright 2025 Fonticons, Inc. --><path d="M9.4 233.4c-12.5 12.5-12.5 32.8 0 45.3l192 192c12.5 12.5 32.8 12.5 45.3 0s12.5-32.8 0-45.3L77.3 256 246.6 86.6c12.5-12.5 12.5-32.8 0-45.3s-32.8-12.5-45.3 0l-192 192z"/></svg>',"chevron-right":'<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 320 512"><!--! Font Awesome Free 7.0.0 by @fontawesome - https://fontawesome.com License - https://fontawesome.com/license/free Copyright 2025 Fonticons, Inc. --><path d="M311.1 233.4c12.5 12.5 12.5 32.8 0 45.3l-192 192c-12.5 12.5-32.8 12.5-45.3 0s-12.5-32.8 0-45.3L243.2 256 73.9 86.6c-12.5-12.5-12.5-32.8 0-45.3s32.8-12.5 45.3 0l192 192z"/></svg>',circle:'<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 512 512"><!--! Font Awesome Free 7.0.0 by @fontawesome - https://fontawesome.com License - https://fontawesome.com/license/free Copyright 2025 Fonticons, Inc. --><path d="M0 256a256 256 0 1 1 512 0 256 256 0 1 1 -512 0z"/></svg>',"closed-captioning":'<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 640 640"><!--!Font Awesome Free v7.2.0 by @fontawesome - https://fontawesome.com License - https://fontawesome.com/license/free Copyright 2026 Fonticons, Inc.--><path d="M64 192C64 156.7 92.7 128 128 128L512 128C547.3 128 576 156.7 576 192L576 448C576 483.3 547.3 512 512 512L128 512C92.7 512 64 483.3 64 448L64 192zM216 272L248 272C252.4 272 256 275.6 256 280C256 293.3 266.7 304 280 304C293.3 304 304 293.3 304 280C304 249.1 278.9 224 248 224L216 224C185.1 224 160 249.1 160 280L160 360C160 390.9 185.1 416 216 416L248 416C278.9 416 304 390.9 304 360C304 346.7 293.3 336 280 336C266.7 336 256 346.7 256 360C256 364.4 252.4 368 248 368L216 368C211.6 368 208 364.4 208 360L208 280C208 275.6 211.6 272 216 272zM384 280C384 275.6 387.6 272 392 272L424 272C428.4 272 432 275.6 432 280C432 293.3 442.7 304 456 304C469.3 304 480 293.3 480 280C480 249.1 454.9 224 424 224L392 224C361.1 224 336 249.1 336 280L336 360C336 390.9 361.1 416 392 416L424 416C454.9 416 480 390.9 480 360C480 346.7 469.3 336 456 336C442.7 336 432 346.7 432 360C432 364.4 428.4 368 424 368L392 368C387.6 368 384 364.4 384 360L384 280z"/></svg>',"closed-captioning-slash":'<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 640 640"><!--!Font Awesome Free v7.2.0 by @fontawesome - https://fontawesome.com License - https://fontawesome.com/license/free Copyright 2026 Fonticons, Inc.--><path d="M39 39.1C48.4 29.7 63.6 29.7 72.9 39.1L161.8 128L512 128C547.3 128 576 156.7 576 192L576 448C576 473.5 561.1 495.4 539.6 505.8L601 567.1C610.4 576.5 610.4 591.7 601 601C591.6 610.3 576.4 610.4 567.1 601L39 73.1C29.7 63.7 29.7 48.5 39 39.1zM384 350.1L384 279.9C384 275.5 387.6 271.9 392 271.9L424 271.9C428.4 271.9 432 275.5 432 279.9C432 293.2 442.7 303.9 456 303.9C469.3 303.9 480 293.2 480 279.9C480 249 454.9 223.9 424 223.9L392 223.9C361.1 223.9 336 249 336 279.9L336 302.1L384 350.1zM445.5 411.6C465.7 403.2 480 383.2 480 359.9C480 346.6 469.3 335.9 456 335.9C442.7 335.9 432 346.6 432 359.9C432 364.3 428.4 367.9 424 367.9L401.8 367.9L445.5 411.6zM162.3 264.1C160.8 269.1 160 274.5 160 280L160 360C160 390.9 185.1 416 216 416L248 416C266.1 416 282.1 407.5 292.4 394.2L410.2 512L128 512C92.7 512 64 483.3 64 448L64 192C64 184.2 65.4 176.7 68 169.8L162.3 264.1zM256.1 357.9C256 358.6 256 359.3 256 360C256 364.4 252.4 368 248 368L216 368C211.6 368 208 364.4 208 360L208 309.8L256.1 357.9z"/></svg>',compress:'<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 448 512"><!--!Font Awesome Free v7.2.0 by @fontawesome - https://fontawesome.com License - https://fontawesome.com/license/free Copyright 2026 Fonticons, Inc.--><path d="M160 64c0-17.7-14.3-32-32-32S96 46.3 96 64l0 64-64 0c-17.7 0-32 14.3-32 32s14.3 32 32 32l96 0c17.7 0 32-14.3 32-32l0-96zM32 320c-17.7 0-32 14.3-32 32s14.3 32 32 32l64 0 0 64c0 17.7 14.3 32 32 32s32-14.3 32-32l0-96c0-17.7-14.3-32-32-32l-96 0zM352 64c0-17.7-14.3-32-32-32s-32 14.3-32 32l0 96c0 17.7 14.3 32 32 32l96 0c17.7 0 32-14.3 32-32s-14.3-32-32-32l-64 0 0-64zM320 320c-17.7 0-32 14.3-32 32l0 96c0 17.7 14.3 32 32 32s32-14.3 32-32l0-64 64 0c17.7 0 32-14.3 32-32s-14.3-32-32-32l-96 0z"/></svg>',ellipsis:'<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 640 640"><!--!Font Awesome Free v7.3.0 by @fontawesome - https://fontawesome.com License - https://fontawesome.com/license/free Copyright 2026 Fonticons, Inc.--><path d="M96 320C96 289.1 121.1 264 152 264C182.9 264 208 289.1 208 320C208 350.9 182.9 376 152 376C121.1 376 96 350.9 96 320zM264 320C264 289.1 289.1 264 320 264C350.9 264 376 289.1 376 320C376 350.9 350.9 376 320 376C289.1 376 264 350.9 264 320zM488 264C518.9 264 544 289.1 544 320C544 350.9 518.9 376 488 376C457.1 376 432 350.9 432 320C432 289.1 457.1 264 488 264z"/></svg>',"ellipsis-vertical":'<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 640 640"><!--!Font Awesome Free v7.2.0 by @fontawesome - https://fontawesome.com License - https://fontawesome.com/license/free Copyright 2026 Fonticons, Inc.--><path d="M320 208C289.1 208 264 182.9 264 152C264 121.1 289.1 96 320 96C350.9 96 376 121.1 376 152C376 182.9 350.9 208 320 208zM320 432C350.9 432 376 457.1 376 488C376 518.9 350.9 544 320 544C289.1 544 264 518.9 264 488C264 457.1 289.1 432 320 432zM376 320C376 350.9 350.9 376 320 376C289.1 376 264 350.9 264 320C264 289.1 289.1 264 320 264C350.9 264 376 289.1 376 320z"/></svg>',expand:'<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 640 640"><!--!Font Awesome Free v7.2.0 by @fontawesome - https://fontawesome.com License - https://fontawesome.com/license/free Copyright 2026 Fonticons, Inc.--><path d="M128 96C110.3 96 96 110.3 96 128L96 224C96 241.7 110.3 256 128 256C145.7 256 160 241.7 160 224L160 160L224 160C241.7 160 256 145.7 256 128C256 110.3 241.7 96 224 96L128 96zM160 416C160 398.3 145.7 384 128 384C110.3 384 96 398.3 96 416L96 512C96 529.7 110.3 544 128 544L224 544C241.7 544 256 529.7 256 512C256 494.3 241.7 480 224 480L160 480L160 416zM416 96C398.3 96 384 110.3 384 128C384 145.7 398.3 160 416 160L480 160L480 224C480 241.7 494.3 256 512 256C529.7 256 544 241.7 544 224L544 128C544 110.3 529.7 96 512 96L416 96zM544 416C544 398.3 529.7 384 512 384C494.3 384 480 398.3 480 416L480 480L416 480C398.3 480 384 494.3 384 512C384 529.7 398.3 544 416 544L512 544C529.7 544 544 529.7 544 512L544 416z"/></svg>',eyedropper:'<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 512 512"><!--! Font Awesome Free 7.0.0 by @fontawesome - https://fontawesome.com License - https://fontawesome.com/license/free Copyright 2025 Fonticons, Inc. --><path d="M341.6 29.2l-101.6 101.6-9.4-9.4c-12.5-12.5-32.8-12.5-45.3 0s-12.5 32.8 0 45.3l160 160c12.5 12.5 32.8 12.5 45.3 0s12.5-32.8 0-45.3l-9.4-9.4 101.6-101.6c39-39 39-102.2 0-141.1s-102.2-39-141.1 0zM55.4 323.3c-15 15-23.4 35.4-23.4 56.6l0 42.4-26.6 39.9c-8.5 12.7-6.8 29.6 4 40.4s27.7 12.5 40.4 4l39.9-26.6 42.4 0c21.2 0 41.6-8.4 56.6-23.4l109.4-109.4-45.3-45.3-109.4 109.4c-3 3-7.1 4.7-11.3 4.7l-36.1 0 0-36.1c0-4.2 1.7-8.3 4.7-11.3l109.4-109.4-45.3-45.3-109.4 109.4z"/></svg>',forward:'<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 640 640"><!--!Font Awesome Free v7.2.0 by @fontawesome - https://fontawesome.com License - https://fontawesome.com/license/free Copyright 2026 Fonticons, Inc.--><path d="M403.7 107.1C392.1 96 375 92.9 360.3 99.2C345.6 105.5 336 120 336 136L336 272.3L163.7 107.2C152.1 96 135 92.9 120.3 99.2C105.6 105.5 96 120 96 136L96 504C96 520 105.6 534.5 120.3 540.8C135 547.1 152.1 544 163.7 532.9L336 367.7L336 504C336 520 345.6 534.5 360.3 540.8C375 547.1 392.1 544 403.7 532.9L595.7 348.9C603.6 341.4 608 330.9 608 320C608 309.1 603.5 298.7 595.7 291.1L403.7 107.1z"/></svg>',file:'<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 640 640"><!--!Font Awesome Free 7.1.0 by @fontawesome - https://fontawesome.com License - https://fontawesome.com/license/free Copyright 2026 Fonticons, Inc.--><path d="M192 64C156.7 64 128 92.7 128 128L128 512C128 547.3 156.7 576 192 576L448 576C483.3 576 512 547.3 512 512L512 234.5C512 217.5 505.3 201.2 493.3 189.2L386.7 82.7C374.7 70.7 358.5 64 341.5 64L192 64zM453.5 240L360 240C346.7 240 336 229.3 336 216L336 122.5L453.5 240z"/></svg>',"file-audio":'<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 640 640"><!--!Font Awesome Free 7.1.0 by @fontawesome - https://fontawesome.com License - https://fontawesome.com/license/free Copyright 2026 Fonticons, Inc.--><path d="M128 128C128 92.7 156.7 64 192 64L341.5 64C358.5 64 374.8 70.7 386.8 82.7L493.3 189.3C505.3 201.3 512 217.6 512 234.6L512 512C512 547.3 483.3 576 448 576L192 576C156.7 576 128 547.3 128 512L128 128zM336 122.5L336 216C336 229.3 346.7 240 360 240L453.5 240L336 122.5zM389.8 307.7C380.7 301.4 368.3 303.6 362 312.7C355.7 321.8 357.9 334.2 367 340.5C390.9 357.2 406.4 384.8 406.4 416C406.4 447.2 390.8 474.9 367 491.5C357.9 497.8 355.7 510.3 362 519.3C368.3 528.3 380.8 530.6 389.8 524.3C423.9 500.5 446.4 460.8 446.4 416C446.4 371.2 424 331.5 389.8 307.7zM208 376C199.2 376 192 383.2 192 392L192 440C192 448.8 199.2 456 208 456L232 456L259.2 490C262.2 493.8 266.8 496 271.7 496L272 496C280.8 496 288 488.8 288 480L288 352C288 343.2 280.8 336 272 336L271.7 336C266.8 336 262.2 338.2 259.2 342L232 376L208 376zM336 448.2C336 458.9 346.5 466.4 354.9 459.8C367.8 449.5 376 433.7 376 416C376 398.3 367.8 382.5 354.9 372.2C346.5 365.5 336 373.1 336 383.8L336 448.3z"/></svg>',"file-code":'<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 640 640"><!--!Font Awesome Free 7.1.0 by @fontawesome - https://fontawesome.com License - https://fontawesome.com/license/free Copyright 2026 Fonticons, Inc.--><path d="M128 128C128 92.7 156.7 64 192 64L341.5 64C358.5 64 374.8 70.7 386.8 82.7L493.3 189.3C505.3 201.3 512 217.6 512 234.6L512 512C512 547.3 483.3 576 448 576L192 576C156.7 576 128 547.3 128 512L128 128zM336 122.5L336 216C336 229.3 346.7 240 360 240L453.5 240L336 122.5zM282.2 359.6C290.8 349.5 289.7 334.4 279.6 325.8C269.5 317.2 254.4 318.3 245.8 328.4L197.8 384.4C190.1 393.4 190.1 406.6 197.8 415.6L245.8 471.6C254.4 481.7 269.6 482.8 279.6 474.2C289.6 465.6 290.8 450.4 282.2 440.4L247.6 400L282.2 359.6zM394.2 328.4C385.6 318.3 370.4 317.2 360.4 325.8C350.4 334.4 349.2 349.6 357.8 359.6L392.4 400L357.8 440.4C349.2 450.5 350.3 465.6 360.4 474.2C370.5 482.8 385.6 481.7 394.2 471.6L442.2 415.6C449.9 406.6 449.9 393.4 442.2 384.4L394.2 328.4z"/></svg>',"file-excel":'<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 640 640"><!--!Font Awesome Free 7.1.0 by @fontawesome - https://fontawesome.com License - https://fontawesome.com/license/free Copyright 2026 Fonticons, Inc.--><path d="M128 128C128 92.7 156.7 64 192 64L341.5 64C358.5 64 374.8 70.7 386.8 82.7L493.3 189.3C505.3 201.3 512 217.6 512 234.6L512 512C512 547.3 483.3 576 448 576L192 576C156.7 576 128 547.3 128 512L128 128zM336 122.5L336 216C336 229.3 346.7 240 360 240L453.5 240L336 122.5zM292 330.7C284.6 319.7 269.7 316.7 258.7 324C247.7 331.3 244.7 346.3 252 357.3L291.2 416L252 474.7C244.6 485.7 247.6 500.6 258.7 508C269.8 515.4 284.6 512.4 292 501.3L320 459.3L348 501.3C355.4 512.3 370.3 515.3 381.3 508C392.3 500.7 395.3 485.7 388 474.7L348.8 416L388 357.3C395.4 346.3 392.4 331.4 381.3 324C370.2 316.6 355.4 319.6 348 330.7L320 372.7L292 330.7z"/></svg>',"file-image":'<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 640 640"><!--!Font Awesome Free 7.1.0 by @fontawesome - https://fontawesome.com License - https://fontawesome.com/license/free Copyright 2026 Fonticons, Inc.--><path d="M128 128C128 92.7 156.7 64 192 64L341.5 64C358.5 64 374.8 70.7 386.8 82.7L493.3 189.3C505.3 201.3 512 217.6 512 234.6L512 512C512 547.3 483.3 576 448 576L192 576C156.7 576 128 547.3 128 512L128 128zM336 122.5L336 216C336 229.3 346.7 240 360 240L453.5 240L336 122.5zM256 320C256 302.3 241.7 288 224 288C206.3 288 192 302.3 192 320C192 337.7 206.3 352 224 352C241.7 352 256 337.7 256 320zM220.6 512L419.4 512C435.2 512 448 499.2 448 483.4C448 476.1 445.2 469 440.1 463.7L343.3 361.9C337.3 355.6 328.9 352 320.1 352L319.8 352C311 352 302.7 355.6 296.6 361.9L199.9 463.7C194.8 469 192 476.1 192 483.4C192 499.2 204.8 512 220.6 512z"/></svg>',"file-pdf":'<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 640 640"><!--!Font Awesome Free 7.1.0 by @fontawesome - https://fontawesome.com License - https://fontawesome.com/license/free Copyright 2026 Fonticons, Inc.--><path d="M128 64C92.7 64 64 92.7 64 128L64 512C64 547.3 92.7 576 128 576L208 576L208 464C208 428.7 236.7 400 272 400L448 400L448 234.5C448 217.5 441.3 201.2 429.3 189.2L322.7 82.7C310.7 70.7 294.5 64 277.5 64L128 64zM389.5 240L296 240C282.7 240 272 229.3 272 216L272 122.5L389.5 240zM272 444C261 444 252 453 252 464L252 592C252 603 261 612 272 612C283 612 292 603 292 592L292 564L304 564C337.1 564 364 537.1 364 504C364 470.9 337.1 444 304 444L272 444zM304 524L292 524L292 484L304 484C315 484 324 493 324 504C324 515 315 524 304 524zM400 444C389 444 380 453 380 464L380 592C380 603 389 612 400 612L432 612C460.7 612 484 588.7 484 560L484 496C484 467.3 460.7 444 432 444L400 444zM420 572L420 484L432 484C438.6 484 444 489.4 444 496L444 560C444 566.6 438.6 572 432 572L420 572zM508 464L508 592C508 603 517 612 528 612C539 612 548 603 548 592L548 548L576 548C587 548 596 539 596 528C596 517 587 508 576 508L548 508L548 484L576 484C587 484 596 475 596 464C596 453 587 444 576 444L528 444C517 444 508 453 508 464z"/></svg>',"file-powerpoint":'<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 640 640"><!--!Font Awesome Free 7.1.0 by @fontawesome - https://fontawesome.com License - https://fontawesome.com/license/free Copyright 2026 Fonticons, Inc.--><path d="M128 128C128 92.7 156.7 64 192 64L341.5 64C358.5 64 374.8 70.7 386.8 82.7L493.3 189.3C505.3 201.3 512 217.6 512 234.6L512 512C512 547.3 483.3 576 448 576L192 576C156.7 576 128 547.3 128 512L128 128zM336 122.5L336 216C336 229.3 346.7 240 360 240L453.5 240L336 122.5zM280 320C266.7 320 256 330.7 256 344L256 488C256 501.3 266.7 512 280 512C293.3 512 304 501.3 304 488L304 464L328 464C367.8 464 400 431.8 400 392C400 352.2 367.8 320 328 320L280 320zM328 416L304 416L304 368L328 368C341.3 368 352 378.7 352 392C352 405.3 341.3 416 328 416z"/></svg>',"file-video":'<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 640 640"><!--!Font Awesome Free 7.1.0 by @fontawesome - https://fontawesome.com License - https://fontawesome.com/license/free Copyright 2026 Fonticons, Inc.--><path d="M128 128C128 92.7 156.7 64 192 64L341.5 64C358.5 64 374.8 70.7 386.8 82.7L493.3 189.3C505.3 201.3 512 217.6 512 234.6L512 512C512 547.3 483.3 576 448 576L192 576C156.7 576 128 547.3 128 512L128 128zM336 122.5L336 216C336 229.3 346.7 240 360 240L453.5 240L336 122.5zM208 368L208 464C208 481.7 222.3 496 240 496L336 496C353.7 496 368 481.7 368 464L368 440L403 475C406.2 478.2 410.5 480 415 480C424.4 480 432 472.4 432 463L432 368.9C432 359.5 424.4 351.9 415 351.9C410.5 351.9 406.2 353.7 403 356.9L368 391.9L368 367.9C368 350.2 353.7 335.9 336 335.9L240 335.9C222.3 335.9 208 350.2 208 367.9z"/></svg>',"file-word":'<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 640 640"><!--!Font Awesome Free 7.1.0 by @fontawesome - https://fontawesome.com License - https://fontawesome.com/license/free Copyright 2026 Fonticons, Inc.--><path d="M128 128C128 92.7 156.7 64 192 64L341.5 64C358.5 64 374.8 70.7 386.8 82.7L493.3 189.3C505.3 201.3 512 217.6 512 234.6L512 512C512 547.3 483.3 576 448 576L192 576C156.7 576 128 547.3 128 512L128 128zM336 122.5L336 216C336 229.3 346.7 240 360 240L453.5 240L336 122.5zM263.4 338.8C260.5 325.9 247.7 317.7 234.8 320.6C221.9 323.5 213.7 336.3 216.6 349.2L248.6 493.2C250.9 503.7 260 511.4 270.8 512C281.6 512.6 291.4 505.9 294.8 495.6L320 419.9L345.2 495.6C348.6 505.8 358.4 512.5 369.2 512C380 511.5 389.1 503.8 391.4 493.2L423.4 349.2C426.3 336.3 418.1 323.4 405.2 320.6C392.3 317.8 379.4 325.9 376.6 338.8L363.4 398.2L342.8 336.4C339.5 326.6 330.4 320 320 320C309.6 320 300.5 326.6 297.2 336.4L276.6 398.2L263.4 338.8z"/></svg>',"file-zipper":'<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 640 640"><!--!Font Awesome Free 7.1.0 by @fontawesome - https://fontawesome.com License - https://fontawesome.com/license/free Copyright 2026 Fonticons, Inc.--><path d="M128 128C128 92.7 156.7 64 192 64L341.5 64C358.5 64 374.8 70.7 386.8 82.7L493.3 189.3C505.3 201.3 512 217.6 512 234.6L512 512C512 547.3 483.3 576 448 576L192 576C156.7 576 128 547.3 128 512L128 128zM336 122.5L336 216C336 229.3 346.7 240 360 240L453.5 240L336 122.5zM192 136C192 149.3 202.7 160 216 160L264 160C277.3 160 288 149.3 288 136C288 122.7 277.3 112 264 112L216 112C202.7 112 192 122.7 192 136zM192 232C192 245.3 202.7 256 216 256L264 256C277.3 256 288 245.3 288 232C288 218.7 277.3 208 264 208L216 208C202.7 208 192 218.7 192 232zM256 304L224 304C206.3 304 192 318.3 192 336L192 384C192 410.5 213.5 432 240 432C266.5 432 288 410.5 288 384L288 336C288 318.3 273.7 304 256 304zM240 368C248.8 368 256 375.2 256 384C256 392.8 248.8 400 240 400C231.2 400 224 392.8 224 384C224 375.2 231.2 368 240 368z"/></svg>',"forward-step":'<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 384 512"><!--!Font Awesome Free v7.2.0 by @fontawesome - https://fontawesome.com License - https://fontawesome.com/license/free Copyright 2026 Fonticons, Inc.--><path d="M21 36.8c12.9-7 28.7-6.3 41 1.8L320 208.1 320 64c0-17.7 14.3-32 32-32s32 14.3 32 32l0 384c0 17.7-14.3 32-32 32s-32-14.3-32-32l0-144.1-258 169.6c-12.3 8.1-28 8.8-41 1.8S0 454.7 0 440L0 72C0 57.3 8.1 43.8 21 36.8z"/></svg>',gauge:'<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 512 512"><!--!Font Awesome Free v7.2.0 by @fontawesome - https://fontawesome.com License - https://fontawesome.com/license/free Copyright 2026 Fonticons, Inc.--><path d="M0 256a256 256 0 1 1 512 0 256 256 0 1 1 -512 0zm320 96c0-26.9-16.5-49.9-40-59.3L280 120c0-13.3-10.7-24-24-24s-24 10.7-24 24l0 172.7c-23.5 9.5-40 32.5-40 59.3 0 35.3 28.7 64 64 64s64-28.7 64-64zM144 176a32 32 0 1 0 0-64 32 32 0 1 0 0 64zm-16 80a32 32 0 1 0 -64 0 32 32 0 1 0 64 0zm288 32a32 32 0 1 0 0-64 32 32 0 1 0 0 64zM400 144a32 32 0 1 0 -64 0 32 32 0 1 0 64 0z"/></svg>',gear:'<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 640 640"><!--!Font Awesome Free v7.2.0 by @fontawesome - https://fontawesome.com License - https://fontawesome.com/license/free Copyright 2026 Fonticons, Inc.--><path d="M259.1 73.5C262.1 58.7 275.2 48 290.4 48L350.2 48C365.4 48 378.5 58.7 381.5 73.5L396 143.5C410.1 149.5 423.3 157.2 435.3 166.3L503.1 143.8C517.5 139 533.3 145 540.9 158.2L570.8 210C578.4 223.2 575.7 239.8 564.3 249.9L511 297.3C511.9 304.7 512.3 312.3 512.3 320C512.3 327.7 511.8 335.3 511 342.7L564.4 390.2C575.8 400.3 578.4 417 570.9 430.1L541 481.9C533.4 495 517.6 501.1 503.2 496.3L435.4 473.8C423.3 482.9 410.1 490.5 396.1 496.6L381.7 566.5C378.6 581.4 365.5 592 350.4 592L290.6 592C275.4 592 262.3 581.3 259.3 566.5L244.9 496.6C230.8 490.6 217.7 482.9 205.6 473.8L137.5 496.3C123.1 501.1 107.3 495.1 99.7 481.9L69.8 430.1C62.2 416.9 64.9 400.3 76.3 390.2L129.7 342.7C128.8 335.3 128.4 327.7 128.4 320C128.4 312.3 128.9 304.7 129.7 297.3L76.3 249.8C64.9 239.7 62.3 223 69.8 209.9L99.7 158.1C107.3 144.9 123.1 138.9 137.5 143.7L205.3 166.2C217.4 157.1 230.6 149.5 244.6 143.4L259.1 73.5zM320.3 400C364.5 399.8 400.2 363.9 400 319.7C399.8 275.5 363.9 239.8 319.7 240C275.5 240.2 239.8 276.1 240 320.3C240.2 364.5 276.1 400.2 320.3 400z"/></svg>',"grip-vertical":'<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 320 512"><!--! Font Awesome Free 7.0.0 by @fontawesome - https://fontawesome.com License - https://fontawesome.com/license/free Copyright 2025 Fonticons, Inc. --><path d="M128 40c0-22.1-17.9-40-40-40L40 0C17.9 0 0 17.9 0 40L0 88c0 22.1 17.9 40 40 40l48 0c22.1 0 40-17.9 40-40l0-48zm0 192c0-22.1-17.9-40-40-40l-48 0c-22.1 0-40 17.9-40 40l0 48c0 22.1 17.9 40 40 40l48 0c22.1 0 40-17.9 40-40l0-48zM0 424l0 48c0 22.1 17.9 40 40 40l48 0c22.1 0 40-17.9 40-40l0-48c0-22.1-17.9-40-40-40l-48 0c-22.1 0-40 17.9-40 40zM320 40c0-22.1-17.9-40-40-40L232 0c-22.1 0-40 17.9-40 40l0 48c0 22.1 17.9 40 40 40l48 0c22.1 0 40-17.9 40-40l0-48zM192 232l0 48c0 22.1 17.9 40 40 40l48 0c22.1 0 40-17.9 40-40l0-48c0-22.1-17.9-40-40-40l-48 0c-22.1 0-40 17.9-40 40zM320 424c0-22.1-17.9-40-40-40l-48 0c-22.1 0-40 17.9-40 40l0 48c0 22.1 17.9 40 40 40l48 0c22.1 0 40-17.9 40-40l0-48z"/></svg>',indeterminate:'<svg part="indeterminate-icon" class="icon" viewBox="0 0 16 16"><g stroke="none" stroke-width="1" fill="none" fill-rule="evenodd" stroke-linecap="round"><g stroke="currentColor" stroke-width="2"><g transform="translate(2.285714 6.857143)"><path d="M10.2857143,1.14285714 L1.14285714,1.14285714"/></g></g></g></svg>',minus:'<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 448 512"><!--! Font Awesome Free 7.0.0 by @fontawesome - https://fontawesome.com License - https://fontawesome.com/license/free Copyright 2025 Fonticons, Inc. --><path d="M0 256c0-17.7 14.3-32 32-32l384 0c17.7 0 32 14.3 32 32s-14.3 32-32 32L32 288c-17.7 0-32-14.3-32-32z"/></svg>',pause:'<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 384 512"><!--! Font Awesome Free 7.0.0 by @fontawesome - https://fontawesome.com License - https://fontawesome.com/license/free Copyright 2025 Fonticons, Inc. --><path d="M48 32C21.5 32 0 53.5 0 80L0 432c0 26.5 21.5 48 48 48l64 0c26.5 0 48-21.5 48-48l0-352c0-26.5-21.5-48-48-48L48 32zm224 0c-26.5 0-48 21.5-48 48l0 352c0 26.5 21.5 48 48 48l64 0c26.5 0 48-21.5 48-48l0-352c0-26.5-21.5-48-48-48l-64 0z"/></svg>',"picture-in-picture":'<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 512 512"><!--!Font Awesome Free v7.2.0 by @fontawesome - https://fontawesome.com License - https://fontawesome.com/license/free Copyright 2026 Fonticons, Inc.--><path d="M448 32c35.3 0 64 28.7 64 64l0 112-64 0 0-112-384 0 0 320 144 0 0 64-144 0-6.5-.3c-30.1-3.1-54.1-27-57.1-57.1L0 416 0 96C0 62.9 25.2 35.6 57.5 32.3L64 32 448 32zm16 224c26.5 0 48 21.5 48 48l0 128c0 26.5-21.5 48-48 48l-160 0c-26.5 0-48-21.5-48-48l0-128c0-26.5 21.5-48 48-48l160 0z"/></svg>',play:'<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 448 512"><!--! Font Awesome Free 7.0.0 by @fontawesome - https://fontawesome.com License - https://fontawesome.com/license/free Copyright 2025 Fonticons, Inc. --><path d="M91.2 36.9c-12.4-6.8-27.4-6.5-39.6 .7S32 57.9 32 72l0 368c0 14.1 7.5 27.2 19.6 34.4s27.2 7.5 39.6 .7l336-184c12.8-7 20.8-20.5 20.8-35.1s-8-28.1-20.8-35.1l-336-184z"/></svg>',"play-circle":'<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 512 512"><!--!Font Awesome Free v7.2.0 by @fontawesome - https://fontawesome.com License - https://fontawesome.com/license/free Copyright 2026 Fonticons, Inc.--><path d="M0 256a256 256 0 1 1 512 0 256 256 0 1 1 -512 0zM188.3 147.1c-7.6 4.2-12.3 12.3-12.3 20.9l0 176c0 8.7 4.7 16.7 12.3 20.9s16.8 4.1 24.3-.5l144-88c7.1-4.4 11.5-12.1 11.5-20.5s-4.4-16.1-11.5-20.5l-144-88c-7.4-4.5-16.7-4.7-24.3-.5z"/></svg>',plus:'<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 640 640"><!--!Font Awesome Free 7.1.0 by @fontawesome - https://fontawesome.com License - https://fontawesome.com/license/free Copyright 2026 Fonticons, Inc.--><path d="M352 128C352 110.3 337.7 96 320 96C302.3 96 288 110.3 288 128L288 288L128 288C110.3 288 96 302.3 96 320C96 337.7 110.3 352 128 352L288 352L288 512C288 529.7 302.3 544 320 544C337.7 544 352 529.7 352 512L352 352L512 352C529.7 352 544 337.7 544 320C544 302.3 529.7 288 512 288L352 288L352 128z"/></svg>',star:'<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 576 512"><!--! Font Awesome Free 7.0.0 by @fontawesome - https://fontawesome.com License - https://fontawesome.com/license/free Copyright 2025 Fonticons, Inc. --><path d="M309.5-18.9c-4.1-8-12.4-13.1-21.4-13.1s-17.3 5.1-21.4 13.1L193.1 125.3 33.2 150.7c-8.9 1.4-16.3 7.7-19.1 16.3s-.5 18 5.8 24.4l114.4 114.5-25.2 159.9c-1.4 8.9 2.3 17.9 9.6 23.2s16.9 6.1 25 2L288.1 417.6 432.4 491c8 4.1 17.7 3.3 25-2s11-14.2 9.6-23.2L441.7 305.9 556.1 191.4c6.4-6.4 8.6-15.8 5.8-24.4s-10.1-14.9-19.1-16.3L383 125.3 309.5-18.9z"/></svg>',upload:'<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 640 640"><!--!Font Awesome Free 7.1.0 by @fontawesome - https://fontawesome.com License - https://fontawesome.com/license/free Copyright 2026 Fonticons, Inc.--><path d="M352 173.3L352 384C352 401.7 337.7 416 320 416C302.3 416 288 401.7 288 384L288 173.3L246.6 214.7C234.1 227.2 213.8 227.2 201.3 214.7C188.8 202.2 188.8 181.9 201.3 169.4L297.3 73.4C309.8 60.9 330.1 60.9 342.6 73.4L438.6 169.4C451.1 181.9 451.1 202.2 438.6 214.7C426.1 227.2 405.8 227.2 393.3 214.7L352 173.3zM320 464C364.2 464 400 428.2 400 384L480 384C515.3 384 544 412.7 544 448L544 480C544 515.3 515.3 544 480 544L160 544C124.7 544 96 515.3 96 480L96 448C96 412.7 124.7 384 160 384L240 384C240 428.2 275.8 464 320 464zM464 488C477.3 488 488 477.3 488 464C488 450.7 477.3 440 464 440C450.7 440 440 450.7 440 464C440 477.3 450.7 488 464 488z"/></svg>',user:'<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 448 512"><!--! Font Awesome Free 7.0.0 by @fontawesome - https://fontawesome.com License - https://fontawesome.com/license/free Copyright 2025 Fonticons, Inc. --><path d="M224 248a120 120 0 1 0 0-240 120 120 0 1 0 0 240zm-29.7 56C95.8 304 16 383.8 16 482.3 16 498.7 29.3 512 45.7 512l356.6 0c16.4 0 29.7-13.3 29.7-29.7 0-98.5-79.8-178.3-178.3-178.3l-59.4 0z"/></svg>',volume:'<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 512 512"><!--!Font Awesome Free v7.2.0 by @fontawesome - https://fontawesome.com License - https://fontawesome.com/license/free Copyright 2026 Fonticons, Inc.--><path d="M48 352l48 0 134.1 119.2c6.4 5.7 14.6 8.8 23.1 8.8 19.2 0 34.8-15.6 34.8-34.8l0-378.4c0-19.2-15.6-34.8-34.8-34.8-8.5 0-16.7 3.1-23.1 8.8L96 160 48 160c-26.5 0-48 21.5-48 48l0 96c0 26.5 21.5 48 48 48zM441.1 107c-10.3-8.4-25.4-6.8-33.8 3.5s-6.8 25.4 3.5 33.8C443.3 170.7 464 210.9 464 256s-20.7 85.3-53.2 111.8c-10.3 8.4-11.8 23.5-3.5 33.8s23.5 11.8 33.8 3.5c43.2-35.2 70.9-88.9 70.9-149s-27.7-113.8-70.9-149zm-60.5 74.5c-10.3-8.4-25.4-6.8-33.8 3.5s-6.8 25.4 3.5 33.8C361.1 227.6 368 241 368 256s-6.9 28.4-17.7 37.3c-10.3 8.4-11.8 23.5-3.5 33.8s23.5 11.8 33.8 3.5C402.1 312.9 416 286.1 416 256s-13.9-56.9-35.5-74.5z"/></svg>',"volume-low":'<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 448 512"><!--!Font Awesome Free v7.2.0 by @fontawesome - https://fontawesome.com License - https://fontawesome.com/license/free Copyright 2026 Fonticons, Inc.--><path d="M48 352l48 0 134.1 119.2c6.4 5.7 14.6 8.8 23.1 8.8 19.2 0 34.8-15.6 34.8-34.8l0-378.4c0-19.2-15.6-34.8-34.8-34.8-8.5 0-16.7 3.1-23.1 8.8L96 160 48 160c-26.5 0-48 21.5-48 48l0 96c0 26.5 21.5 48 48 48zM380.6 181.5c-10.3-8.4-25.4-6.8-33.8 3.5s-6.8 25.4 3.5 33.8C361.1 227.6 368 241 368 256s-6.9 28.4-17.7 37.3c-10.3 8.4-11.8 23.5-3.5 33.8s23.5 11.8 33.8 3.5C402.1 312.9 416 286.1 416 256s-13.9-56.9-35.5-74.5z"/></svg>',"volume-xmark":'<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 576 512"><!--!Font Awesome Free v7.2.0 by @fontawesome - https://fontawesome.com License - https://fontawesome.com/license/free Copyright 2026 Fonticons, Inc.--><path d="M48 352l48 0 134.1 119.2c6.4 5.7 14.6 8.8 23.1 8.8 19.2 0 34.8-15.6 34.8-34.8l0-378.4c0-19.2-15.6-34.8-34.8-34.8-8.5 0-16.7 3.1-23.1 8.8L96 160 48 160c-26.5 0-48 21.5-48 48l0 96c0 26.5 21.5 48 48 48zM367 175c-9.4 9.4-9.4 24.6 0 33.9l47 47-47 47c-9.4 9.4-9.4 24.6 0 33.9s24.6 9.4 33.9 0l47-47 47 47c9.4 9.4 24.6 9.4 33.9 0s9.4-24.6 0-33.9l-47-47 47-47c9.4-9.4 9.4-24.6 0-33.9s-24.6-9.4-33.9 0l-47 47-47-47c-9.4-9.4-24.6-9.4-33.9 0z"/></svg>',xmark:'<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 384 512"><!--! Font Awesome Free 7.0.0 by @fontawesome - https://fontawesome.com License - https://fontawesome.com/license/free Copyright 2025 Fonticons, Inc. --><path d="M55.1 73.4c-12.5-12.5-32.8-12.5-45.3 0s-12.5 32.8 0 45.3L147.2 256 9.9 393.4c-12.5 12.5-12.5 32.8 0 45.3s32.8 12.5 45.3 0L192.5 301.3 329.9 438.6c12.5 12.5 32.8 12.5 45.3 0s12.5-32.8 0-45.3L237.8 256 375.1 118.6c12.5-12.5 12.5-32.8 0-45.3s-32.8-12.5-45.3 0L192.5 210.7 55.1 73.4z"/></svg>'},regular:{calendar:'<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 640 640"><!--!Font Awesome Free v7.2.0 by @fontawesome - https://fontawesome.com License - https://fontawesome.com/license/free Copyright 2026 Fonticons, Inc.--><path d="M216 64C229.3 64 240 74.7 240 88L240 128L400 128L400 88C400 74.7 410.7 64 424 64C437.3 64 448 74.7 448 88L448 128L480 128C515.3 128 544 156.7 544 192L544 480C544 515.3 515.3 544 480 544L160 544C124.7 544 96 515.3 96 480L96 192C96 156.7 124.7 128 160 128L192 128L192 88C192 74.7 202.7 64 216 64zM216 176L160 176C151.2 176 144 183.2 144 192L144 240L496 240L496 192C496 183.2 488.8 176 480 176L216 176zM144 288L144 480C144 488.8 151.2 496 160 496L480 496C488.8 496 496 488.8 496 480L496 288L144 288z"/></svg>',"circle-question":'<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 512 512"><!--! Font Awesome Free 7.0.0 by @fontawesome - https://fontawesome.com License - https://fontawesome.com/license/free Copyright 2025 Fonticons, Inc. --><path d="M464 256a208 208 0 1 0 -416 0 208 208 0 1 0 416 0zM0 256a256 256 0 1 1 512 0 256 256 0 1 1 -512 0zm256-80c-17.7 0-32 14.3-32 32 0 13.3-10.7 24-24 24s-24-10.7-24-24c0-44.2 35.8-80 80-80s80 35.8 80 80c0 47.2-36 67.2-56 74.5l0 3.8c0 13.3-10.7 24-24 24s-24-10.7-24-24l0-8.1c0-20.5 14.8-35.2 30.1-40.2 6.4-2.1 13.2-5.5 18.2-10.3 4.3-4.2 7.7-10 7.7-19.6 0-17.7-14.3-32-32-32zM224 368a32 32 0 1 1 64 0 32 32 0 1 1 -64 0z"/></svg>',"circle-xmark":'<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 512 512"><!--! Font Awesome Free 7.0.0 by @fontawesome - https://fontawesome.com License - https://fontawesome.com/license/free Copyright 2025 Fonticons, Inc. --><path d="M256 48a208 208 0 1 1 0 416 208 208 0 1 1 0-416zm0 464a256 256 0 1 0 0-512 256 256 0 1 0 0 512zM167 167c-9.4 9.4-9.4 24.6 0 33.9l55 55-55 55c-9.4 9.4-9.4 24.6 0 33.9s24.6 9.4 33.9 0l55-55 55 55c9.4 9.4 24.6 9.4 33.9 0s9.4-24.6 0-33.9l-55-55 55-55c9.4-9.4 9.4-24.6 0-33.9s-24.6-9.4-33.9 0l-55 55-55-55c-9.4-9.4-24.6-9.4-33.9 0z"/></svg>',clock:'<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 640 640"><!--!Font Awesome Free v7.2.0 by @fontawesome - https://fontawesome.com License - https://fontawesome.com/license/free Copyright 2026 Fonticons, Inc.--><path d="M528 320C528 434.9 434.9 528 320 528C205.1 528 112 434.9 112 320C112 205.1 205.1 112 320 112C434.9 112 528 205.1 528 320zM64 320C64 461.4 178.6 576 320 576C461.4 576 576 461.4 576 320C576 178.6 461.4 64 320 64C178.6 64 64 178.6 64 320zM296 184L296 320C296 328 300 335.5 306.7 340L402.7 404C413.7 411.4 428.6 408.4 436 397.3C443.4 386.2 440.4 371.4 429.3 364L344 307.2L344 184C344 170.7 333.3 160 320 160C306.7 160 296 170.7 296 184z"/></svg>',copy:'<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 448 512"><!--! Font Awesome Free 7.0.0 by @fontawesome - https://fontawesome.com License - https://fontawesome.com/license/free Copyright 2025 Fonticons, Inc. --><path d="M384 336l-192 0c-8.8 0-16-7.2-16-16l0-256c0-8.8 7.2-16 16-16l133.5 0c4.2 0 8.3 1.7 11.3 4.7l58.5 58.5c3 3 4.7 7.1 4.7 11.3L400 320c0 8.8-7.2 16-16 16zM192 384l192 0c35.3 0 64-28.7 64-64l0-197.5c0-17-6.7-33.3-18.7-45.3L370.7 18.7C358.7 6.7 342.5 0 325.5 0L192 0c-35.3 0-64 28.7-64 64l0 256c0 35.3 28.7 64 64 64zM64 128c-35.3 0-64 28.7-64 64L0 448c0 35.3 28.7 64 64 64l192 0c35.3 0 64-28.7 64-64l0-16-48 0 0 16c0 8.8-7.2 16-16 16L64 464c-8.8 0-16-7.2-16-16l0-256c0-8.8 7.2-16 16-16l16 0 0-48-16 0z"/></svg>',eye:'<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 576 512"><!--! Font Awesome Free 7.0.0 by @fontawesome - https://fontawesome.com License - https://fontawesome.com/license/free Copyright 2025 Fonticons, Inc. --><path d="M288 80C222.8 80 169.2 109.6 128.1 147.7 89.6 183.5 63 226 49.4 256 63 286 89.6 328.5 128.1 364.3 169.2 402.4 222.8 432 288 432s118.8-29.6 159.9-67.7C486.4 328.5 513 286 526.6 256 513 226 486.4 183.5 447.9 147.7 406.8 109.6 353.2 80 288 80zM95.4 112.6C142.5 68.8 207.2 32 288 32s145.5 36.8 192.6 80.6c46.8 43.5 78.1 95.4 93 131.1 3.3 7.9 3.3 16.7 0 24.6-14.9 35.7-46.2 87.7-93 131.1-47.1 43.7-111.8 80.6-192.6 80.6S142.5 443.2 95.4 399.4c-46.8-43.5-78.1-95.4-93-131.1-3.3-7.9-3.3-16.7 0-24.6 14.9-35.7 46.2-87.7 93-131.1zM288 336c44.2 0 80-35.8 80-80 0-29.6-16.1-55.5-40-69.3-1.4 59.7-49.6 107.9-109.3 109.3 13.8 23.9 39.7 40 69.3 40zm-79.6-88.4c2.5 .3 5 .4 7.6 .4 35.3 0 64-28.7 64-64 0-2.6-.2-5.1-.4-7.6-37.4 3.9-67.2 33.7-71.1 71.1zm45.6-115c10.8-3 22.2-4.5 33.9-4.5 8.8 0 17.5 .9 25.8 2.6 .3 .1 .5 .1 .8 .2 57.9 12.2 101.4 63.7 101.4 125.2 0 70.7-57.3 128-128 128-61.6 0-113-43.5-125.2-101.4-1.8-8.6-2.8-17.5-2.8-26.6 0-11 1.4-21.8 4-32 .2-.7 .3-1.3 .5-1.9 11.9-43.4 46.1-77.6 89.5-89.5z"/></svg>',"eye-slash":'<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 576 512"><!--! Font Awesome Free 7.0.0 by @fontawesome - https://fontawesome.com License - https://fontawesome.com/license/free Copyright 2025 Fonticons, Inc. --><path d="M41-24.9c-9.4-9.4-24.6-9.4-33.9 0S-2.3-.3 7 9.1l528 528c9.4 9.4 24.6 9.4 33.9 0s9.4-24.6 0-33.9l-96.4-96.4c2.7-2.4 5.4-4.8 8-7.2 46.8-43.5 78.1-95.4 93-131.1 3.3-7.9 3.3-16.7 0-24.6-14.9-35.7-46.2-87.7-93-131.1-47.1-43.7-111.8-80.6-192.6-80.6-56.8 0-105.6 18.2-146 44.2L41-24.9zM176.9 111.1c32.1-18.9 69.2-31.1 111.1-31.1 65.2 0 118.8 29.6 159.9 67.7 38.5 35.7 65.1 78.3 78.6 108.3-13.6 30-40.2 72.5-78.6 108.3-3.1 2.8-6.2 5.6-9.4 8.4L393.8 328c14-20.5 22.2-45.3 22.2-72 0-70.7-57.3-128-128-128-26.7 0-51.5 8.2-72 22.2l-39.1-39.1zm182 182l-108-108c11.1-5.8 23.7-9.1 37.1-9.1 44.2 0 80 35.8 80 80 0 13.4-3.3 26-9.1 37.1zM103.4 173.2l-34-34c-32.6 36.8-55 75.8-66.9 104.5-3.3 7.9-3.3 16.7 0 24.6 14.9 35.7 46.2 87.7 93 131.1 47.1 43.7 111.8 80.6 192.6 80.6 37.3 0 71.2-7.9 101.5-20.6L352.2 422c-20 6.4-41.4 10-64.2 10-65.2 0-118.8-29.6-159.9-67.7-38.5-35.7-65.1-78.3-78.6-108.3 10.4-23.1 28.6-53.6 54-82.8z"/></svg>',star:'<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 576 512"><!--! Font Awesome Free 7.0.0 by @fontawesome - https://fontawesome.com License - https://fontawesome.com/license/free Copyright 2025 Fonticons, Inc. --><path d="M288.1-32c9 0 17.3 5.1 21.4 13.1L383 125.3 542.9 150.7c8.9 1.4 16.3 7.7 19.1 16.3s.5 18-5.8 24.4L441.7 305.9 467 465.8c1.4 8.9-2.3 17.9-9.6 23.2s-17 6.1-25 2L288.1 417.6 143.8 491c-8 4.1-17.7 3.3-25-2s-11-14.2-9.6-23.2L134.4 305.9 20 191.4c-6.4-6.4-8.6-15.8-5.8-24.4s10.1-14.9 19.1-16.3l159.9-25.4 73.6-144.2c4.1-8 12.4-13.1 21.4-13.1zm0 76.8L230.3 158c-3.5 6.8-10 11.6-17.6 12.8l-125.5 20 89.8 89.9c5.4 5.4 7.9 13.1 6.7 20.7l-19.8 125.5 113.3-57.6c6.8-3.5 14.9-3.5 21.8 0l113.3 57.6-19.8-125.5c-1.2-7.6 1.3-15.3 6.7-20.7l89.8-89.9-125.5-20c-7.6-1.2-14.1-6-17.6-12.8L288.1 44.8z"/></svg>'}},Ub={name:"system",resolver:(o,i="classic",r="solid")=>{let n=F1[r][o]??F1.regular[o]??F1.regular["circle-question"];if(n)return Lb(n);return""},mutator:(o)=>{if(!o.hasAttribute("fill"))o.setAttribute("fill","currentColor")}},pn=Ub;/*! Copyright 2026 Fonticons, Inc. - https://webawesome.com/license */var hn="classic",a2=[mn,pn],n2=new Set;function dn(o){n2.add(o)}function gn(o){n2.delete(o)}function f2(o){return a2.find((i)=>i.name===o)}function Xb(o,i){sn(o),a2.push({name:o,resolver:i.resolver,mutator:i.mutator,spriteSheet:i.spriteSheet}),n2.forEach((r)=>{if(r.library===o)r.setIcon()})}function sn(o){a2=a2.filter((i)=>i.name!==o)}function Jb(o){hn=o,n2.forEach((i)=>i.setIcon())}function $1(){return hn}/*! Copyright 2026 Fonticons, Inc. - https://webawesome.com/license */var{defineProperty:Zb,getOwnPropertyDescriptor:Qb}=Object,un=(o)=>{throw TypeError(o)},f=(o,i,r,a)=>{var n=a>1?void 0:a?Qb(i,r):i;for(var w=o.length-1,b;w>=0;w--)if(b=o[w])n=(a?b(i,r,n):b(n))||n;if(a&&n)Zb(i,r,n);return n},zn=(o,i,r)=>i.has(o)||un("Cannot "+r),yn=(o,i,r)=>(zn(o,i,"read from private field"),r?r.call(o):i.get(o)),ln=(o,i,r)=>i.has(o)?un("Cannot add the same private member more than once"):i instanceof WeakSet?i.add(o):i.set(o,r),vn=(o,i,r,a)=>(zn(o,i,"write to private field"),a?a.call(o,r):i.set(o,r),r);/*! Copyright 2026 Fonticons, Inc. - https://webawesome.com/license *//*! Copyright 2026 Fonticons, Inc. - https://webawesome.com/license */var xn=class extends Event{constructor(o){super("wa-collapse",{bubbles:!0,cancelable:!0,composed:!0});this.detail=o}};/*! Copyright 2026 Fonticons, Inc. - https://webawesome.com/license */var Fn=class extends Event{constructor(o){super("wa-expand",{bubbles:!0,cancelable:!0,composed:!0});this.detail=o}};/*! Copyright 2026 Fonticons, Inc. - https://webawesome.com/license */var $n=class extends Event{constructor(o){super("wa-after-collapse",{bubbles:!0,cancelable:!1,composed:!0});this.detail=o}};/*! Copyright 2026 Fonticons, Inc. - https://webawesome.com/license */var Yn=class extends Event{constructor(o){super("wa-after-expand",{bubbles:!0,cancelable:!1,composed:!0});this.detail=o}};var w2=globalThis,Y1=w2.ShadowRoot&&(w2.ShadyCSS===void 0||w2.ShadyCSS.nativeShadow)&&"adoptedStyleSheets"in Document.prototype&&"replace"in CSSStyleSheet.prototype,q1=Symbol(),qn=new WeakMap;class L1{constructor(o,i,r){if(this._$cssResult$=!0,r!==q1)throw Error("CSSResult is not constructable. Use `unsafeCSS` or `css` instead.");this.cssText=o,this._strings=i}get styleSheet(){let o=this._styleSheet,i=this._strings;if(Y1&&o===void 0){let r=i!==void 0&&i.length===1;if(r)o=qn.get(i);if(o===void 0){if((this._styleSheet=o=new CSSStyleSheet).replaceSync(this.cssText),r)qn.set(i,o)}}return o}toString(){return this.cssText}}var Kb=(o)=>{if(o._$cssResult$===!0)return o.cssText;else if(typeof o==="number")return o;else throw Error(`Value passed to 'css' function must be a 'css' function result: ${o}. Use 'unsafeCSS' to pass non-literal values, but take care to ensure page security.`)},Bb=(o)=>new L1(typeof o==="string"?o:String(o),void 0,q1),F=(o,...i)=>{let r=o.length===1?o[0]:i.reduce((a,n,w)=>a+Kb(n)+o[w+1],o[0]);return new L1(r,o,q1)},Ln=(o,i)=>{if(Y1)o.adoptedStyleSheets=i.map((r)=>r instanceof CSSStyleSheet?r:r.styleSheet);else for(let r of i){let a=document.createElement("style"),n=w2.litNonce;if(n!==void 0)a.setAttribute("nonce",n);a.textContent=r.cssText,o.appendChild(a)}},Gb=(o)=>{let i="";for(let r of o.cssRules)i+=r.cssText;return Bb(i)},U1=Y1?(o)=>o:(o)=>o instanceof CSSStyleSheet?Gb(o):o;var{is:Mb,defineProperty:Vb,getOwnPropertyDescriptor:Un,getOwnPropertyNames:Hb,getOwnPropertySymbols:Nb,getPrototypeOf:Xn}=Object,Ob=!1,wi=globalThis;if(Ob)wi.customElements??=customElements;var di=!0,Ki,Jn=wi.trustedTypes,Ab=Jn?Jn.emptyScript:"",Qn=di?wi.reactiveElementPolyfillSupportDevMode:wi.reactiveElementPolyfillSupport;if(di)wi.litIssuedWarnings??=new Set,Ki=(o,i)=>{if(i+=` See https://lit.dev/msg/${o} for more information.`,!wi.litIssuedWarnings.has(i)&&!wi.litIssuedWarnings.has(o))console.warn(i),wi.litIssuedWarnings.add(i)},queueMicrotask(()=>{if(Ki("dev-mode","Lit is in dev mode. Not recommended for production!"),wi.ShadyDOM?.inUse&&Qn===void 0)Ki("polyfill-support-missing","Shadow DOM is being polyfilled via `ShadyDOM` but the `polyfill-support` module has not been loaded.")});var Eb=di?(o)=>{if(!wi.emitLitDebugLogEvents)return;wi.dispatchEvent(new CustomEvent("lit-debug",{detail:o}))}:void 0,ar=(o,i)=>o,vr={toAttribute(o,i){switch(i){case Boolean:o=o?Ab:null;break;case Object:case Array:o=o==null?o:JSON.stringify(o);break}return o},fromAttribute(o,i){let r=o;switch(i){case Boolean:r=o!==null;break;case Number:r=o===null?null:Number(o);break;case Object:case Array:try{r=JSON.parse(o)}catch(a){r=null}break}return r}},b2=(o,i)=>!Mb(o,i),Zn={attribute:!0,type:String,converter:vr,reflect:!1,useDefault:!1,hasChanged:b2};Symbol.metadata??=Symbol("metadata");wi.litPropertyMetadata??=new WeakMap;class gi extends HTMLElement{static addInitializer(o){this.__prepare(),(this._initializers??=[]).push(o)}static get observedAttributes(){return this.finalize(),this.__attributeToPropertyMap&&[...this.__attributeToPropertyMap.keys()]}static createProperty(o,i=Zn){if(i.state)i.attribute=!1;if(this.__prepare(),this.prototype.hasOwnProperty(o))i=Object.create(i),i.wrapped=!0;if(this.elementProperties.set(o,i),!i.noAccessor){let r=di?Symbol.for(`${String(o)} (@property() cache)`):Symbol(),a=this.getPropertyDescriptor(o,r,i);if(a!==void 0)Vb(this.prototype,o,a)}}static getPropertyDescriptor(o,i,r){let{get:a,set:n}=Un(this.prototype,o)??{get(){return this[i]},set(w){this[i]=w}};if(di&&a==null){if("value"in(Un(this.prototype,o)??{}))throw Error(`Field ${JSON.stringify(String(o))} on ${this.name} was declared as a reactive property but it's actually declared as a value on the prototype. Usually this is due to using @property or @state on a method.`);Ki("reactive-property-without-getter",`Field ${JSON.stringify(String(o))} on ${this.name} was declared as a reactive property but it does not have a getter. This will be an error in a future version of Lit.`)}return{get:a,set(w){let b=a?.call(this);n?.call(this,w),this.requestUpdate(o,b,r)},configurable:!0,enumerable:!0}}static getPropertyOptions(o){return this.elementProperties.get(o)??Zn}static __prepare(){if(this.hasOwnProperty(ar("elementProperties",this)))return;let o=Xn(this);if(o.finalize(),o._initializers!==void 0)this._initializers=[...o._initializers];this.elementProperties=new Map(o.elementProperties)}static finalize(){if(this.hasOwnProperty(ar("finalized",this)))return;if(this.finalized=!0,this.__prepare(),this.hasOwnProperty(ar("properties",this))){let i=this.properties,r=[...Hb(i),...Nb(i)];for(let a of r)this.createProperty(a,i[a])}let o=this[Symbol.metadata];if(o!==null){let i=litPropertyMetadata.get(o);if(i!==void 0)for(let[r,a]of i)this.elementProperties.set(r,a)}this.__attributeToPropertyMap=new Map;for(let[i,r]of this.elementProperties){let a=this.__attributeNameForProperty(i,r);if(a!==void 0)this.__attributeToPropertyMap.set(a,i)}if(this.elementStyles=this.finalizeStyles(this.styles),di){if(this.hasOwnProperty("createProperty"))Ki("no-override-create-property","Overriding ReactiveElement.createProperty() is deprecated. The override will not be called with standard decorators");if(this.hasOwnProperty("getPropertyDescriptor"))Ki("no-override-get-property-descriptor","Overriding ReactiveElement.getPropertyDescriptor() is deprecated. The override will not be called with standard decorators")}}static finalizeStyles(o){let i=[];if(Array.isArray(o)){let r=new Set(o.flat(1/0).reverse());for(let a of r)i.unshift(U1(a))}else if(o!==void 0)i.push(U1(o));return i}static __attributeNameForProperty(o,i){let r=i.attribute;return r===!1?void 0:typeof r==="string"?r:typeof o==="string"?o.toLowerCase():void 0}constructor(){super();this.__instanceProperties=void 0,this.isUpdatePending=!1,this.hasUpdated=!1,this.__reflectingProperty=null,this.__initialize()}__initialize(){this.__updatePromise=new Promise((o)=>this.enableUpdating=o),this._$changedProperties=new Map,this.__saveInstanceProperties(),this.requestUpdate(),this.constructor._initializers?.forEach((o)=>o(this))}addController(o){if((this.__controllers??=new Set).add(o),this.renderRoot!==void 0&&this.isConnected)o.hostConnected?.()}removeController(o){this.__controllers?.delete(o)}__saveInstanceProperties(){let o=new Map,i=this.constructor.elementProperties;for(let r of i.keys())if(this.hasOwnProperty(r))o.set(r,this[r]),delete this[r];if(o.size>0)this.__instanceProperties=o}createRenderRoot(){let o=this.shadowRoot??this.attachShadow(this.constructor.shadowRootOptions);return Ln(o,this.constructor.elementStyles),o}connectedCallback(){this.renderRoot??=this.createRenderRoot(),this.enableUpdating(!0),this.__controllers?.forEach((o)=>o.hostConnected?.())}enableUpdating(o){}disconnectedCallback(){this.__controllers?.forEach((o)=>o.hostDisconnected?.())}attributeChangedCallback(o,i,r){this._$attributeToProperty(o,r)}__propertyToAttribute(o,i){let a=this.constructor.elementProperties.get(o),n=this.constructor.__attributeNameForProperty(o,a);if(n!==void 0&&a.reflect===!0){let b=(a.converter?.toAttribute!==void 0?a.converter:vr).toAttribute(i,a.type);if(di&&this.constructor.enabledWarnings.includes("migration")&&b===void 0)Ki("undefined-attribute-value",`The attribute value for the ${o} property is undefined on element ${this.localName}. The attribute will be removed, but in the previous version of \`ReactiveElement\`, the attribute would not have changed.`);if(this.__reflectingProperty=o,b==null)this.removeAttribute(n);else this.setAttribute(n,b);this.__reflectingProperty=null}}_$attributeToProperty(o,i){let r=this.constructor,a=r.__attributeToPropertyMap.get(o);if(a!==void 0&&this.__reflectingProperty!==a){let n=r.getPropertyOptions(a),w=typeof n.converter==="function"?{fromAttribute:n.converter}:n.converter?.fromAttribute!==void 0?n.converter:vr;this.__reflectingProperty=a;let b=w.fromAttribute(i,n.type);this[a]=b??this.__defaultValues?.get(a)??b,this.__reflectingProperty=null}}requestUpdate(o,i,r,a=!1,n){if(o!==void 0){if(di&&o instanceof Event)Ki("","The requestUpdate() method was called with an Event as the property name. This is probably a mistake caused by binding this.requestUpdate as an event listener. Instead bind a function that will call it with no arguments: () => this.requestUpdate()");let w=this.constructor;if(a===!1)n=this[o];if(r??=w.getPropertyOptions(o),(r.hasChanged??b2)(n,i)||r.useDefault&&r.reflect&&n===this.__defaultValues?.get(o)&&!this.hasAttribute(w.__attributeNameForProperty(o,r)))this._$changeProperty(o,i,r);else return}if(this.isUpdatePending===!1)this.__updatePromise=this.__enqueueUpdate()}_$changeProperty(o,i,{useDefault:r,reflect:a,wrapped:n},w){if(r&&!(this.__defaultValues??=new Map).has(o)){if(this.__defaultValues.set(o,w??i??this[o]),n!==!0||w!==void 0)return}if(!this._$changedProperties.has(o)){if(!this.hasUpdated&&!r)i=void 0;this._$changedProperties.set(o,i)}if(a===!0&&this.__reflectingProperty!==o)(this.__reflectingProperties??=new Set).add(o)}async __enqueueUpdate(){this.isUpdatePending=!0;try{await this.__updatePromise}catch(i){Promise.reject(i)}let o=this.scheduleUpdate();if(o!=null)await o;return!this.isUpdatePending}scheduleUpdate(){let o=this.performUpdate();if(di&&this.constructor.enabledWarnings.includes("async-perform-update")&&typeof o?.then==="function")Ki("async-perform-update",`Element ${this.localName} returned a Promise from performUpdate(). This behavior is deprecated and will be removed in a future version of ReactiveElement.`);return o}performUpdate(){if(!this.isUpdatePending)return;if(Eb?.({kind:"update"}),!this.hasUpdated){if(this.renderRoot??=this.createRenderRoot(),di){let n=[...this.constructor.elementProperties.keys()].filter((w)=>this.hasOwnProperty(w)&&(w in Xn(this)));if(n.length)throw Error(`The following properties on element ${this.localName} will not trigger updates as expected because they are set using class fields: ${n.join(", ")}. Native class fields and some compiled output will overwrite accessors used for detecting changes. See https://lit.dev/msg/class-field-shadowing for more information.`)}if(this.__instanceProperties){for(let[a,n]of this.__instanceProperties)this[a]=n;this.__instanceProperties=void 0}let r=this.constructor.elementProperties;if(r.size>0)for(let[a,n]of r){let{wrapped:w}=n,b=this[a];if(w===!0&&!this._$changedProperties.has(a)&&b!==void 0)this._$changeProperty(a,void 0,n,b)}}let o=!1,i=this._$changedProperties;try{if(o=this.shouldUpdate(i),o)this.willUpdate(i),this.__controllers?.forEach((r)=>r.hostUpdate?.()),this.update(i);else this.__markUpdated()}catch(r){throw o=!1,this.__markUpdated(),r}if(o)this._$didUpdate(i)}willUpdate(o){}_$didUpdate(o){if(this.__controllers?.forEach((i)=>i.hostUpdated?.()),!this.hasUpdated)this.hasUpdated=!0,this.firstUpdated(o);if(this.updated(o),di&&this.isUpdatePending&&this.constructor.enabledWarnings.includes("change-in-update"))Ki("change-in-update",`Element ${this.localName} scheduled an update (generally because a property was set) after an update completed, causing a new update to be scheduled. This is inefficient and should be avoided unless the next update can only be scheduled as a side effect of the previous update.`)}__markUpdated(){this._$changedProperties=new Map,this.isUpdatePending=!1}get updateComplete(){return this.getUpdateComplete()}getUpdateComplete(){return this.__updatePromise}shouldUpdate(o){return!0}update(o){this.__reflectingProperties&&=this.__reflectingProperties.forEach((i)=>this.__propertyToAttribute(i,this[i])),this.__markUpdated()}updated(o){}firstUpdated(o){}}gi.elementStyles=[];gi.shadowRootOptions={mode:"open"};gi[ar("elementProperties",gi)]=new Map;gi[ar("finalized",gi)]=new Map;Qn?.({ReactiveElement:gi});if(di){gi.enabledWarnings=["change-in-update","async-perform-update"];let o=function(i){if(!i.hasOwnProperty(ar("enabledWarnings",i)))i.enabledWarnings=i.enabledWarnings.slice()};gi.enableWarning=function(i){if(o(this),!this.enabledWarnings.includes(i))this.enabledWarnings.push(i)},gi.disableWarning=function(i){o(this);let r=this.enabledWarnings.indexOf(i);if(r>=0)this.enabledWarnings.splice(r,1)}}(wi.reactiveElementVersions??=[]).push("2.1.2");if(di&&wi.reactiveElementVersions.length>1)queueMicrotask(()=>{Ki("multiple-versions","Multiple versions of Lit loaded. Loading multiple versions is not recommended.")});var Db=(o,i)=>o,X1=!0,f0=globalThis,Kn;if(X1)f0.litIssuedWarnings??=new Set,Kn=(o,i)=>{if(i+=` See https://lit.dev/msg/${o} for more information.`,!f0.litIssuedWarnings.has(i)&&!f0.litIssuedWarnings.has(o))console.warn(i),f0.litIssuedWarnings.add(i)};class d0 extends gi{constructor(){super(...arguments);this.renderOptions={host:this},this.__childPart=void 0}createRenderRoot(){let o=super.createRenderRoot();return this.renderOptions.renderBefore??=o.firstChild,o}update(o){let i=this.render();if(!this.hasUpdated)this.renderOptions.isConnected=this.isConnected;super.update(o),this.__childPart=B0(i,this.renderRoot,this.renderOptions)}connectedCallback(){super.connectedCallback(),this.__childPart?.setConnected(!0)}disconnectedCallback(){super.disconnectedCallback(),this.__childPart?.setConnected(!1)}render(){return Jo}}d0._$litElement$=!0;d0[Db("finalized",d0)]=!0;f0.litElementHydrateSupport?.({LitElement:d0});var kb=X1?f0.litElementPolyfillSupportDevMode:f0.litElementPolyfillSupport;kb?.({LitElement:d0});(f0.litElementVersions??=[]).push("4.2.2");if(X1&&f0.litElementVersions.length>1)queueMicrotask(()=>{Kn("multiple-versions","Multiple versions of Lit loaded. Loading multiple versions is not recommended.")});var M=!1;/*! Copyright 2026 Fonticons, Inc. - https://webawesome.com/license */var Bn=F`
  @layer wa-component {
    :host {
      display: block;
      border: var(--wa-panel-border-width) var(--wa-panel-border-style) var(--wa-color-surface-border);
      border-radius: var(--wa-panel-border-radius);
      overflow: hidden;
    }

    /* Appearance modifiers */
    :host([appearance='outlined']) {
      background-color: var(--wa-color-surface-default);
      border-color: var(--wa-color-surface-border);
    }

    :host([appearance='filled']) {
      border-color: transparent;
    }

    :host([appearance='filled-outlined']) {
      background-color: var(--wa-color-neutral-fill-quiet);
      border-color: var(--wa-color-neutral-border-quiet);
    }

    :host([appearance='plain']) {
      background-color: transparent;
      border-color: transparent;
      border-radius: 0;
    }
  }
`;/*! Copyright 2026 Fonticons, Inc. - https://webawesome.com/license */function v(o,i){let r={waitUntilFirstUpdate:!1,...i};return(a,n)=>{let{update:w}=a,b=Array.isArray(o)?o:[o];a.update=function(c){b.forEach((m)=>{let p=m;if(c.has(p)){let d=c.get(p),s=this[p];if(d!==s){if(!r.waitUntilFirstUpdate||this.hasUpdated)this[n](d,s)}}}),w.call(this,c)}}}var $=(o)=>(i,r)=>{if(r!==void 0)r.addInitializer(()=>{customElements.define(o,i)});else customElements.define(o,i)};var Gn=!0,Mn;if(Gn)globalThis.litIssuedWarnings??=new Set,Mn=(o,i)=>{if(i+=` See https://lit.dev/msg/${o} for more information.`,!globalThis.litIssuedWarnings.has(i)&&!globalThis.litIssuedWarnings.has(o))console.warn(i),globalThis.litIssuedWarnings.add(i)};var Tb=(o,i,r)=>{let a=i.hasOwnProperty(r);return i.constructor.createProperty(r,o),a?Object.getOwnPropertyDescriptor(i,r):void 0},jb={attribute:!0,type:String,converter:vr,reflect:!1,hasChanged:b2},Ib=(o=jb,i,r)=>{let{kind:a,metadata:n}=r;if(Gn&&n==null)Mn("missing-class-metadata",`The class ${i} is missing decorator metadata. This could mean that you're using a compiler that supports decorators but doesn't support decorator metadata, such as TypeScript 5.1. Please update your compiler.`);let w=globalThis.litPropertyMetadata.get(n);if(w===void 0)globalThis.litPropertyMetadata.set(n,w=new Map);if(a==="setter")o=Object.create(o),o.wrapped=!0;if(w.set(r.name,o),a==="accessor"){let{name:b}=r;return{set(c){let m=i.get.call(this);i.set.call(this,c),this.requestUpdate(b,m,o,!0,c)},init(c){if(c!==void 0)this._$changeProperty(b,void 0,o,c);return c}}}else if(a==="setter"){let{name:b}=r;return function(c){let m=this[b];i.call(this,c),this.requestUpdate(b,m,o,!0,c)}}throw Error(`Unsupported decorator location: ${a}`)};function t(o){return(i,r)=>{return typeof r==="object"?Ib(o,i,r):Tb(o,i,r)}}function J(o){return t({...o,state:!0,attribute:!1})}function nr(o){return(i,r)=>{let a=typeof i==="function"?i:i[r];Object.assign(a,o)}}var g0=(o,i,r)=>{if(r.configurable=!0,r.enumerable=!0,Reflect.decorate&&typeof i!=="object")Object.defineProperty(o,i,r);return r};var J1=!0,Vn;if(J1)globalThis.litIssuedWarnings??=new Set,Vn=(o,i)=>{if(i+=o?` See https://lit.dev/msg/${o} for more information.`:"",!globalThis.litIssuedWarnings.has(i)&&!globalThis.litIssuedWarnings.has(o))console.warn(i),globalThis.litIssuedWarnings.add(i)};function Y(o,i){return(r,a,n)=>{let w=(b)=>{let c=b.renderRoot?.querySelector(o)??null;if(J1&&c===null&&i&&!b.hasUpdated){let m=typeof a==="object"?a.name:a;Vn("",`@query'd field ${JSON.stringify(String(m))} with the 'cache' flag set for selector '${o}' has been accessed before the first update and returned null. This is expected if the renderRoot tree has not been provided beforehand (e.g. via Declarative Shadow DOM). Therefore the value hasn't been cached.`)}return c};if(i){let{get:b,set:c}=typeof a==="object"?r:n??(()=>{let m=J1?Symbol(`${String(a)} (@query() cache)`):Symbol();return{get(){return this[m]},set(p){this[m]=p}}})();return g0(r,a,{get(){let m=b.call(this);if(m===void 0){if(m=w(this),m!==null||this.hasUpdated)c.call(this,m)}return m}})}else return g0(r,a,{get(){return w(this)}})}}function Hn(o){return(i,r)=>{return g0(i,r,{async get(){return await this.updateComplete,this.renderRoot?.querySelector(o)??null}})}}/*! Copyright 2026 Fonticons, Inc. - https://webawesome.com/license */var Z1=F`
  :host {
    box-sizing: border-box;
  }

  :host *,
  :host *::before,
  :host *::after {
    box-sizing: inherit;
  }

  [hidden],
  :host([hidden]) {
    display: none !important;
  }
`,Sb=/;\s+$/;function Rb(o){return o.replace(/[A-Z]/g,(i)=>`-${i.toLowerCase()}`)}function Nn(o){let{property:i,value:r,element:a}=o;if(r){let n=a.getAttribute("style")||"";if(n){if(!n.match(Sb))n+=";";n+=" "}let w=`${i}: ${r}`;if(n.includes(w))return;return`${n}${w};`}return null}var t2,L=class extends d0{constructor(){super();ln(this,t2,!1),this.initialReflectedProperties=new Map,this.didSSR=M||Boolean(this.shadowRoot),this.customStates={set:(i,r)=>{if(!Boolean(this.internals?.states))return;try{if(r)this.internals.states.add(i);else this.internals.states.delete(i)}catch(a){if(String(a).includes("must start with '--'"))console.error("Your browser implements an outdated version of CustomStateSet. Consider using a polyfill");else throw a}},has:(i)=>{if(!Boolean(this.internals?.states))return!1;try{return this.internals.states.has(i)}catch{return!1}}};try{this.internals=this.attachInternals()}catch{console.error("Element internals are not supported in your browser. Consider using a polyfill")}this.customStates.set("wa-defined",!0);let o=this.constructor;for(let[i,r]of o.elementProperties)if(r.default==="inherit"&&r.initial!==void 0&&typeof i==="string")this.customStates.set(`initial-${i}-${r.initial}`,!0)}static get styles(){let o=Array.isArray(this.css)?this.css:this.css?[this.css]:[];return[Z1,...o]}connectedCallback(){if(super.connectedCallback(),!this.didSSR)this.shadowRoot?.prepend(document.createComment(` Web Awesome: https://webawesome.com/docs/components/${this.localName.replace("wa-","")} `));if(this.didSSR)this.updateComplete.then(()=>{this.shadowRoot?.prepend(document.createComment(` Web Awesome: https://webawesome.com/docs/components/${this.localName.replace("wa-","")} `))})}attributeChangedCallback(o,i,r){if(!yn(this,t2))this.constructor.elementProperties.forEach((a,n)=>{if(a.reflect&&this[n]!=null)this.initialReflectedProperties.set(n,this[n])}),vn(this,t2,!0);super.attributeChangedCallback(o,i,r)}willUpdate(o){super.willUpdate(o),this.initialReflectedProperties.forEach((i,r)=>{if(o.has(r)&&this[r]==null)this[r]=i})}firstUpdated(o){if(super.firstUpdated(o),this.didSSR)this.shadowRoot?.querySelectorAll("slot").forEach((i)=>{i.dispatchEvent(new Event("slotchange",{bubbles:!0,composed:!1,cancelable:!1}))})}update(o){try{super.update(o)}catch(i){if(this.didSSR&&!this.hasUpdated){let r=new Event("lit-hydration-error",{bubbles:!0,composed:!0,cancelable:!1});r.error=i,this.dispatchEvent(r)}throw i}}setStyle(o,i){if(!this.style){let r=Nn({property:Rb(o),value:i,element:this});if(r)this.setAttribute("style",r);return}this.style[o]=i}setStyleProperty(o,i){if(!this.style){let r=Nn({property:o,value:i,element:this});if(r)this.setAttribute("style",r);return}this.style.setProperty(o,i)}relayNativeEvent(o,i){o.stopImmediatePropagation(),this.dispatchEvent(new o.constructor(o.type,{...o,...i}))}};t2=new WeakMap;f([t()],L.prototype,"dir",2);f([t()],L.prototype,"lang",2);f([t({type:Boolean,reflect:!0,attribute:"did-ssr"})],L.prototype,"didSSR",2);/*! Copyright 2026 Fonticons, Inc. - https://webawesome.com/license */var $i=class extends L{constructor(){super(...arguments);this.mode="multiple",this.iconPlacement="end",this.headingLevel="3",this.appearance="outlined"}getAllItems(){return this.defaultSlot.assignedElements({flatten:!0}).filter((o)=>o.tagName.toLowerCase()==="wa-accordion-item")}getFocusableItems(){return this.getAllItems().filter((o)=>!o.disabled)}ownsItem(o){return o.closest("wa-accordion")===this}initRovingTabIndex(){this.getFocusableItems().forEach((o,i)=>{o.isTabbable=i===0})}handleSlotChange(){if(this.didSSR){let o=[];if(this.getAllItems().forEach((i)=>{if(i.didSSR&&!i.hasUpdated)o.push(i.updateComplete)}),o.length>0){Promise.allSettled(o).then(()=>{this.handleSlotChange()});return}}this.syncIconPlacement(),this.syncHeadingLevel(),this.syncAppearance(),this.initRovingTabIndex()}handleFocusIn(o){let i=this.getFocusableItems(),a=o.composedPath().find((w)=>w instanceof Element&&w.tagName.toLowerCase()==="wa-accordion-item");if(!a||!this.ownsItem(a))return;let n=i.find((w)=>w===a);if(!n)return;i.forEach((w)=>w.isTabbable=w===n)}handleKeyDown(o){let i=this.getFocusableItems();if(!i.length)return;let a=o.composedPath().find((b)=>b instanceof Element&&b.tagName.toLowerCase()==="wa-accordion-item");if(!a||!this.ownsItem(a))return;let n=i.findIndex((b)=>b.isTabbable),w=n;switch(o.key){case"ArrowDown":o.preventDefault(),w=(n+1)%i.length;break;case"ArrowUp":o.preventDefault(),w=(n-1+i.length)%i.length;break;case"Home":o.preventDefault(),w=0;break;case"End":o.preventDefault(),w=i.length-1;break;default:return}i.forEach((b,c)=>b.isTabbable=c===w),i[w].focus()}syncIconPlacement(){this.getAllItems().forEach((o)=>o.iconPlacement=this.iconPlacement)}syncHeadingLevel(){this.getAllItems().forEach((o)=>o.headingLevel=this.headingLevel)}syncAppearance(){this.getAllItems().forEach((o)=>o.appearance=this.appearance)}async handleItemTrigger(o){let{item:i}=o.detail;if(!this.ownsItem(i))return;if(o.stopPropagation(),i.disabled)return;if(i.expanded){if(this.mode==="single")return;let r=new xn({item:i});if(this.dispatchEvent(r),r.defaultPrevented)return;await i.collapse(),this.dispatchEvent(new $n({item:i}))}else{if(this.mode==="single"||this.mode==="single-collapsible")this.getAllItems().filter((a)=>a!==i&&a.expanded).forEach((a)=>a.collapse());let r=new Fn({item:i});if(this.dispatchEvent(r),r.defaultPrevented)return;await i.expand(),this.dispatchEvent(new Yn({item:i}))}}expandAll(){if(this.mode==="single"||this.mode==="single-collapsible")return;this.getAllItems().filter((o)=>!o.disabled&&!o.expanded).forEach((o)=>o.expand())}collapseAll(){this.getAllItems().filter((o)=>o.expanded).forEach((o)=>o.collapse())}render(){return h`
      <slot
        @slotchange=${this.handleSlotChange}
        @wa-accordion-item-trigger=${this.handleItemTrigger}
        @focusin=${this.handleFocusIn}
        @keydown=${this.handleKeyDown}
      ></slot>
    `}};$i.css=Bn;f([Y("slot")],$i.prototype,"defaultSlot",2);f([t({reflect:!0})],$i.prototype,"mode",2);f([t({attribute:"icon-placement",reflect:!0})],$i.prototype,"iconPlacement",2);f([t({attribute:"heading-level",reflect:!0})],$i.prototype,"headingLevel",2);f([t({reflect:!0})],$i.prototype,"appearance",2);f([v("iconPlacement",{waitUntilFirstUpdate:!0})],$i.prototype,"syncIconPlacement",1);f([v("headingLevel",{waitUntilFirstUpdate:!0})],$i.prototype,"syncHeadingLevel",1);f([v("appearance",{waitUntilFirstUpdate:!0})],$i.prototype,"syncAppearance",1);$i=f([$("wa-accordion")],$i);/*! Copyright 2026 Fonticons, Inc. - https://webawesome.com/license */var On=class extends Event{constructor(){super("wa-accordion-item-collapsed",{bubbles:!1,cancelable:!1,composed:!1})}};/*! Copyright 2026 Fonticons, Inc. - https://webawesome.com/license */var An=class extends Event{constructor(){super("wa-accordion-item-expanded",{bubbles:!1,cancelable:!1,composed:!1})}};/*! Copyright 2026 Fonticons, Inc. - https://webawesome.com/license */var En=class extends Event{constructor(o){super("wa-accordion-item-trigger",{bubbles:!0,cancelable:!1,composed:!0});this.detail=o}};/*! Copyright 2026 Fonticons, Inc. - https://webawesome.com/license */function Yo(o,i){return new Promise((r)=>{function a(n){if(n.target===o)o.removeEventListener(i,a),r()}o.addEventListener(i,a)})}/*! Copyright 2026 Fonticons, Inc. - https://webawesome.com/license */async function Bi(o,i,r){return o.animate(i,r).finished.catch(()=>{})}function P(o,i){return new Promise((r)=>{let a=new AbortController,{signal:n}=a;if(o.classList.contains(i))return;o.classList.add(i);let w=!1,b=()=>{if(w)return;w=!0,o.classList.remove(i),r(),a.abort()};o.addEventListener("animationend",b,{once:!0,signal:n}),o.addEventListener("animationcancel",b,{once:!0,signal:n}),requestAnimationFrame(()=>{if(!w&&o.getAnimations().length===0)b()})})}function w0(o){if(o=o.toString().toLowerCase(),o.indexOf("ms")>-1)return parseFloat(o)||0;if(o.indexOf("s")>-1)return(parseFloat(o)||0)*1000;return parseFloat(o)||0}function H0(){return window.matchMedia("(prefers-reduced-motion: reduce)").matches}/*! Copyright 2026 Fonticons, Inc. - https://webawesome.com/license */var Dn=F`
  @layer wa-component {
    :host {
      --spacing: var(--wa-space-m);
      --show-duration: var(--wa-transition-normal);
      --hide-duration: var(--wa-transition-normal);
      --easing: var(--wa-transition-easing);

      display: block;
    }

    :host(:not(:first-child)) {
      border-top: var(--wa-panel-border-width) var(--wa-panel-border-style) var(--wa-color-surface-border);
    }

    :host([appearance='filled']) {
      background-color: var(--wa-color-neutral-fill-quiet);
    }

    :host([appearance='filled']:not(:first-child)) {
      margin-block-start: var(--wa-panel-border-width);
      border-top: none;
    }

    [part~='heading'] {
      margin: 0;
      font: inherit;
    }

    [part~='button'] {
      display: flex;
      align-items: center;
      gap: var(--spacing);
      padding: var(--spacing);
      width: 100%;
      background: none;
      border: none;
      cursor: pointer;
      text-align: start;
      color: var(--wa-color-text-normal);
      font: inherit;
      font-weight: var(--wa-font-weight-semibold);

      &:focus {
        outline: none;
      }

      &:focus-visible {
        outline: var(--wa-focus-ring);
        /* Inset by the full ring width + offset so the parent's overflow:hidden doesn't clip it */
        outline-offset: calc(0px - var(--wa-focus-ring-width) - var(--wa-focus-ring-offset));
      }
    }

    /* Icon at end (default) */
    :host([icon-placement='end']) [part~='button'] {
      justify-content: space-between;
    }

    /* Icon at start */
    :host([icon-placement='start']) [part~='button'] {
      flex-direction: row-reverse;
      justify-content: flex-end;
    }

    :host([disabled]) {
      opacity: 0.5;
      cursor: not-allowed;
    }

    :host([disabled]) [part~='button'] {
      cursor: not-allowed;
      pointer-events: none;
    }

    :host(:first-child) [part~='button'] {
      border-top-left-radius: var(--wa-panel-border-radius);
      border-top-right-radius: var(--wa-panel-border-radius);
    }

    :host(:last-child:not([expanded])) [part~='button'] {
      border-bottom-left-radius: var(--wa-panel-border-radius);
      border-bottom-right-radius: var(--wa-panel-border-radius);
    }

    [part~='icon'] {
      flex: 0 0 auto;
      display: flex;
      align-items: center;
      color: var(--wa-color-text-quiet);
      transition: rotate var(--hide-duration) var(--easing);
    }

    :host([expanded]) [part~='icon'] {
      rotate: 90deg;
      transition-duration: var(--show-duration);
    }

    :host([expanded]:dir(rtl)) [part~='icon'] {
      rotate: -90deg;
    }

    .body {
      overflow: hidden;
      color: var(--wa-color-text-quiet);
    }

    :host([expanded]) .body:not(.animating) {
      overflow: visible;
    }

    .content {
      display: block;
      padding: 0 var(--spacing) var(--spacing);
    }
  }
`;class kn extends a0{constructor(o){super(o);if(o.type!==Ho.ATTRIBUTE||o.name!=="class"||o.strings?.length>2)throw Error("`classMap()` can only be used in the `class` attribute and must be the only part in the attribute.")}render(o){return" "+Object.keys(o).filter((i)=>o[i]).join(" ")+" "}update(o,[i]){if(this._previousClasses===void 0){if(this._previousClasses=new Set,o.strings!==void 0)this._staticClasses=new Set(o.strings.join(" ").split(/\s/).filter((a)=>a!==""));for(let a in i)if(i[a]&&!this._staticClasses?.has(a))this._previousClasses.add(a);return this.render(i)}let r=o.element.classList;for(let a of this._previousClasses)if(!(a in i))r.remove(a),this._previousClasses.delete(a);for(let a in i){let n=!!i[a];if(n!==this._previousClasses.has(a)&&!this._staticClasses?.has(a))if(n)r.add(a),this._previousClasses.add(a);else r.remove(a),this._previousClasses.delete(a)}return Jo}}var Z=h0(kn);/*! Copyright 2026 Fonticons, Inc. - https://webawesome.com/license */var ri=class extends L{constructor(){super(...arguments);this.animationGeneration=0,this.localize=new B(this),this.isAnimating=!1,this.label="",this.expanded=!1,this.disabled=!1,this.headingLevel="3",this.isTabbable=!0,this.iconPlacement="end",this.appearance="outlined"}firstUpdated(o){super.firstUpdated(o),this.body.style.height=this.expanded?"auto":"0"}updated(){this.customStates.set("animating",this.isAnimating)}handleTriggerClick(){if(this.disabled)return;this.dispatchEvent(new En({item:this}))}handleTriggerKeyDown(o){if(o.key==="Enter"||o.key===" ")o.preventDefault(),this.handleTriggerClick()}async handleExpandedChange(){this.animationGeneration++;let o=this.animationGeneration;if(this.expanded){this.isAnimating=!0;let i=w0(getComputedStyle(this.body).getPropertyValue("--show-duration")||"200ms"),r=getComputedStyle(this.body).getPropertyValue("--easing")||"ease";if(await Bi(this.body,[{height:"0",opacity:"0"},{height:`${this.body.scrollHeight}px`,opacity:"1"}],{duration:i,easing:r}),this.animationGeneration!==o)return;this.body.style.height="auto",this.isAnimating=!1,this.dispatchEvent(new An)}else{this.isAnimating=!0;let i=w0(getComputedStyle(this.body).getPropertyValue("--hide-duration")||"200ms"),r=getComputedStyle(this.body).getPropertyValue("--easing")||"ease";if(await Bi(this.body,[{height:`${this.body.scrollHeight}px`,opacity:"1"},{height:"0",opacity:"0"}],{duration:i,easing:r}),this.animationGeneration!==o)return;this.body.style.height="0",this.isAnimating=!1,this.dispatchEvent(new On)}}async expand(){if(this.expanded||this.disabled)return;return this.expanded=!0,Yo(this,"wa-accordion-item-expanded")}async collapse(){if(!this.expanded||this.disabled)return;return this.expanded=!1,Yo(this,"wa-accordion-item-collapsed")}async toggle(){return this.expanded?this.collapse():this.expand()}focus(o){this.triggerButton?.focus(o)}renderHeadingWrapper(o){let i=parseInt(this.headingLevel,10);switch(i>=1&&i<=6?i:3){case 1:return h`<h1 part="heading">${o}</h1>`;case 2:return h`<h2 part="heading">${o}</h2>`;case 4:return h`<h4 part="heading">${o}</h4>`;case 5:return h`<h5 part="heading">${o}</h5>`;case 6:return h`<h6 part="heading">${o}</h6>`;default:return h`<h3 part="heading">${o}</h3>`}}render(){let o=!this.hasUpdated?this.dir==="rtl":this.localize.dir()==="rtl",i=h`
      <button
        part="button"
        type="button"
        id="trigger"
        aria-expanded=${this.expanded?"true":"false"}
        aria-controls="panel"
        aria-disabled=${this.disabled?"true":"false"}
        tabindex=${this.disabled||!this.isTabbable?"-1":"0"}
        @click=${this.handleTriggerClick}
        @keydown=${this.handleTriggerKeyDown}
      >
        <slot name="label" part="label">${this.label}</slot>
        <span part="icon">
          <slot name="icon">
            <wa-icon library="system" variant="solid" name=${o?"chevron-left":"chevron-right"}></wa-icon>
          </slot>
        </span>
      </button>
    `;return h`
      <div part="base accordion-item">
        ${this.headingLevel==="none"?i:this.renderHeadingWrapper(i)}
        <div
          part="panel"
          id="panel"
          class=${Z({body:!0,animating:this.isAnimating})}
          role="region"
          aria-labelledby="trigger"
        >
          <slot part="content" class="content"></slot>
        </div>
      </div>
    `}};ri.css=Dn;f([Y(".body")],ri.prototype,"body",2);f([Y('[part~="button"]')],ri.prototype,"triggerButton",2);f([J()],ri.prototype,"isAnimating",2);f([t()],ri.prototype,"label",2);f([t({type:Boolean,reflect:!0})],ri.prototype,"expanded",2);f([t({type:Boolean,reflect:!0})],ri.prototype,"disabled",2);f([t({attribute:"heading-level",reflect:!0})],ri.prototype,"headingLevel",2);f([t({type:Boolean,attribute:!1})],ri.prototype,"isTabbable",2);f([t({attribute:"icon-placement",reflect:!0})],ri.prototype,"iconPlacement",2);f([t({reflect:!0})],ri.prototype,"appearance",2);f([v("expanded",{waitUntilFirstUpdate:!0})],ri.prototype,"handleExpandedChange",1);ri=f([$("wa-accordion-item")],ri);/*! Copyright 2026 Fonticons, Inc. - https://webawesome.com/license */var ki=class extends Event{constructor(){super("wa-error",{bubbles:!0,cancelable:!1,composed:!0})}};/*! Copyright 2026 Fonticons, Inc. - https://webawesome.com/license */var N0=class extends Event{constructor(){super("wa-load",{bubbles:!0,cancelable:!1,composed:!0})}};/*! Copyright 2026 Fonticons, Inc. - https://webawesome.com/license */var Tn=F`
  :host {
    --primary-color: currentColor;
    --primary-opacity: 1;
    --secondary-color: currentColor;
    --secondary-opacity: 0.4;
    --rotate-angle: 0deg;

    box-sizing: content-box;
    display: inline-flex;
    align-items: center;
    justify-content: center;
    vertical-align: -0.125em;
  }

  /* #region Canvas — the box the icon is centered within (mirrors Font Awesome's icon canvas). Orthogonal to font-size. */

  /* Fixed width (default): 1.25em × 1em (20 × 16px) */
  :host(:not([canvas])),
  :host([canvas='fixed']) {
    width: 1.25em;
    height: 1em;
    min-width: 1.25em; /* <-- this is what Safari respects for intrinsic */
    min-height: 1em;
  }

  /* Auto: hug the icon's width. \`auto-width\` is the deprecated alias for canvas="auto". */
  :host([canvas='auto']),
  :host([auto-width]:not([canvas])) {
    width: auto;
    height: 1em;
  }

  /* Square: 1.25em × 1.25em (20 × 20px) */
  :host([canvas='square']) {
    width: 1.25em;
    height: 1.25em;
    min-width: 1.25em;
    min-height: 1.25em;
  }

  /* Roomy: 1.5em × 1.5em (24 × 24px) */
  :host([canvas='roomy']) {
    width: 1.5em;
    height: 1.5em;
    min-width: 1.5em;
    min-height: 1.5em;
  }

  /* #endregion */

  svg {
    /* NOTE: Avoid setting fill here. A stylesheet rule beats SVG presentation attributes, breaking stroke-based
       libraries like Lucide (fill="none" stroke="currentColor") and attribute-based mutators (issue #1733). The default
       library applies fill="currentColor" in its mutator instead. */
    height: 1em;
    overflow: visible;
    width: auto;

    /* Duotone colors with path-specific opacity fallback */
    path[data-duotone-primary] {
      color: var(--primary-color);
      opacity: var(--path-opacity, var(--primary-opacity));
    }

    path[data-duotone-secondary] {
      color: var(--secondary-color);
      opacity: var(--path-opacity, var(--secondary-opacity));
    }
  }

  /* Rotation */
  :host([rotate]) {
    transform: rotate(var(--rotate-angle, 0deg));
  }

  /* Flipping */
  :host([flip='x']) {
    transform: scaleX(-1);
  }
  :host([flip='y']) {
    transform: scaleY(-1);
  }
  :host([flip='both']) {
    transform: scale(-1, -1);
  }

  /* Rotation and Flipping combined */
  :host([rotate][flip='x']) {
    transform: rotate(var(--rotate-angle, 0deg)) scaleX(-1);
  }
  :host([rotate][flip='y']) {
    transform: rotate(var(--rotate-angle, 0deg)) scaleY(-1);
  }
  :host([rotate][flip='both']) {
    transform: rotate(var(--rotate-angle, 0deg)) scale(-1, -1);
  }

  /* #region Animations — ported from Font Awesome 7.3 (--fa-* props mapped to wa-icon's --* names) */

  :host([animation='beat']) {
    animation-name: beat;
    animation-delay: var(--animation-delay, 0s);
    animation-direction: var(--animation-direction, normal);
    animation-duration: var(--animation-duration, 1s);
    animation-iteration-count: var(--animation-iteration-count, infinite);
    animation-timing-function: var(--animation-timing, ease-in-out);
  }

  :host([animation='bounce']) {
    animation-name: bounce;
    animation-delay: var(--animation-delay, 0s);
    animation-direction: var(--animation-direction, normal);
    animation-duration: var(--animation-duration, 1s);
    animation-iteration-count: var(--animation-iteration-count, infinite);
    animation-timing-function: var(--animation-timing, cubic-bezier(0.28, 0.84, 0.42, 1));
  }

  :host([animation='fade']) {
    animation-name: fade;
    animation-delay: var(--animation-delay, 0s);
    animation-direction: var(--animation-direction, normal);
    animation-duration: var(--animation-duration, 1s);
    animation-iteration-count: var(--animation-iteration-count, infinite);
    animation-timing-function: var(--animation-timing, ease-in-out);
  }

  :host([animation='beat-fade']) {
    animation-name: beat-fade;
    animation-delay: var(--animation-delay, 0s);
    animation-direction: var(--animation-direction, normal);
    animation-duration: var(--animation-duration, 1s);
    animation-iteration-count: var(--animation-iteration-count, infinite);
    animation-timing-function: var(--animation-timing, ease-in-out);
  }

  :host([animation='flip']) {
    animation-name: flip;
    animation-delay: var(--animation-delay, 0s);
    animation-direction: var(--animation-direction, normal);
    animation-duration: var(--animation-duration, 1.5s);
    animation-iteration-count: var(--animation-iteration-count, infinite);
    animation-timing-function: var(--animation-timing, ease-in-out);
  }

  :host([animation='flip-360']) {
    animation-name: flip-360;
    animation-delay: var(--animation-delay, 0s);
    animation-direction: var(--animation-direction, normal);
    animation-duration: var(--animation-duration, 1s);
    animation-iteration-count: var(--animation-iteration-count, infinite);
    animation-timing-function: var(--animation-timing, ease-in-out);
  }

  :host([animation='shake']) {
    animation-name: shake;
    animation-delay: var(--animation-delay, 0s);
    animation-direction: var(--animation-direction, normal);
    animation-duration: var(--animation-duration, 0.75s);
    animation-iteration-count: var(--animation-iteration-count, infinite);
    animation-timing-function: var(--animation-timing, ease-in-out);
  }

  :host([animation='spin']) {
    animation-name: spin;
    animation-delay: var(--animation-delay, 0s);
    animation-direction: var(--animation-direction, normal);
    animation-duration: var(--animation-duration, 2s);
    animation-iteration-count: var(--animation-iteration-count, infinite);
    animation-timing-function: var(--animation-timing, linear);
  }

  :host([animation='spin-pulse']) {
    animation-name: spin;
    animation-delay: var(--animation-delay, 0s);
    animation-direction: var(--animation-direction, normal);
    animation-duration: var(--animation-duration, 1s);
    animation-iteration-count: var(--animation-iteration-count, infinite);
    animation-timing-function: var(--animation-timing, steps(8));
  }

  /* spin-reverse is FA's reverse modifier expressed as a standalone value; reverse any spin via --animation-direction: reverse */
  :host([animation='spin-reverse']) {
    animation-name: spin;
    animation-delay: var(--animation-delay, 0s);
    animation-direction: var(--animation-direction, reverse);
    animation-duration: var(--animation-duration, 2s);
    animation-iteration-count: var(--animation-iteration-count, infinite);
    animation-timing-function: var(--animation-timing, linear);
  }

  :host([animation='spin-snap']) {
    animation-name: spin-snap;
    animation-delay: var(--animation-delay, 0s);
    animation-direction: var(--animation-direction, normal);
    animation-duration: var(--animation-duration, 3s);
    animation-iteration-count: var(--animation-iteration-count, infinite);
    animation-timing-function: var(--animation-timing, linear);
  }

  :host([animation='spin-snap-4']) {
    animation-name: spin-snap-4;
    animation-delay: var(--animation-delay, 0s);
    animation-direction: var(--animation-direction, normal);
    animation-duration: var(--animation-duration, 2.4s);
    animation-iteration-count: var(--animation-iteration-count, infinite);
    animation-timing-function: var(--animation-timing, linear);
  }

  :host([animation='spin-snap-8']) {
    animation-name: spin-snap-8;
    animation-delay: var(--animation-delay, 0s);
    animation-direction: var(--animation-direction, normal);
    animation-duration: var(--animation-duration, 4s);
    animation-iteration-count: var(--animation-iteration-count, infinite);
    animation-timing-function: var(--animation-timing, linear);
  }

  :host([animation='buzz']) {
    animation-name: buzz;
    animation-delay: var(--animation-delay, 0s);
    animation-direction: var(--animation-direction, normal);
    animation-duration: var(--animation-duration, 0.6s);
    animation-iteration-count: var(--animation-iteration-count, infinite);
    animation-timing-function: var(--animation-timing, linear);
  }

  :host([animation='wag']) {
    animation-name: wag;
    animation-delay: var(--animation-delay, 0s);
    animation-direction: var(--animation-direction, normal);
    animation-duration: var(--animation-duration, 0.9s);
    animation-iteration-count: var(--animation-iteration-count, infinite);
    animation-timing-function: var(--animation-timing, ease-out);
    transform-origin: bottom center;
  }

  :host([animation='float']) {
    animation-name: float;
    animation-delay: var(--animation-delay, 0s);
    animation-direction: var(--animation-direction, normal);
    animation-duration: var(--animation-duration, 3s);
    animation-iteration-count: var(--animation-iteration-count, infinite);
    animation-timing-function: var(--animation-timing, ease-in-out);
    will-change: transform;
  }

  :host([animation='swing']) {
    animation-name: swing;
    animation-delay: var(--animation-delay, 0s);
    animation-direction: var(--animation-direction, normal);
    animation-duration: var(--animation-duration, 1.2s);
    animation-iteration-count: var(--animation-iteration-count, infinite);
    animation-timing-function: var(--animation-timing, ease-out);
    transform-origin: top center;
  }

  :host([animation='jello']) {
    animation-name: jello;
    animation-delay: var(--animation-delay, 0s);
    animation-direction: var(--animation-direction, normal);
    animation-duration: var(--animation-duration, 0.9s);
    animation-iteration-count: var(--animation-iteration-count, infinite);
    animation-timing-function: var(--animation-timing, ease-out);
  }

  @media (prefers-reduced-motion: reduce) {
    :host([animation='beat']),
    :host([animation='bounce']),
    :host([animation='fade']),
    :host([animation='beat-fade']),
    :host([animation='flip']),
    :host([animation='flip-360']),
    :host([animation='shake']),
    :host([animation='spin']),
    :host([animation='spin-pulse']),
    :host([animation='spin-reverse']),
    :host([animation='spin-snap']),
    :host([animation='spin-snap-4']),
    :host([animation='spin-snap-8']),
    :host([animation='buzz']),
    :host([animation='wag']),
    :host([animation='float']),
    :host([animation='swing']),
    :host([animation='jello']) {
      animation: none !important;
      transition: none !important;
    }
  }

  /* #endregion */

  /* #region Keyframes — ported verbatim from Font Awesome 7.3 */

  @keyframes beat {
    0% {
      transform: scale(1);
    }
    25% {
      transform: scale(calc(1.25 * var(--beat-scale, 1.25)));
    }
    45% {
      transform: scale(calc(1.22 * var(--beat-scale, 1.22)));
    }
    65% {
      transform: scale(calc(1.25 * var(--beat-scale, 1.25)));
    }
    90% {
      transform: scale(1);
    }
  }

  @keyframes bounce {
    0% {
      transform: scale(1, 1) translateY(0);
      /* No fallback by design (ported from FA 7.3): the first segment uses the user's --animation-timing or the CSS
         initial ease, while the explicit cubic-beziers on later stops drive the bounce physics. */
      animation-timing-function: var(--animation-timing);
    }
    14% {
      transform: scale(var(--bounce-start-scale-x, 1.06), var(--bounce-start-scale-y, 0.94))
        translateY(var(--bounce-anticipation, 3px));
      animation-timing-function: cubic-bezier(0.33, 0, 0.66, 0.33);
    }
    32% {
      transform: scale(var(--bounce-jump-scale-x, 0.94), var(--bounce-jump-scale-y, 1.12))
        translateY(calc(-1 * var(--bounce-height, 0.5em)));
      animation-timing-function: cubic-bezier(0.33, 0.66, 0.66, 1);
    }
    52% {
      transform: scale(1, 1) translateY(calc(-1 * var(--bounce-height, 0.5em) * 1.1));
      animation-timing-function: cubic-bezier(0.5, 0, 1, 0.5);
    }
    70% {
      transform: scale(var(--bounce-land-scale-x, 1.06), var(--bounce-land-scale-y, 0.92)) translateY(0);
      animation-timing-function: cubic-bezier(0.33, 0.33, 0.66, 1);
    }
    85% {
      transform: scale(0.98, 1.04) translateY(calc(-2px * var(--bounce-rebound, 1)));
      animation-timing-function: cubic-bezier(0.33, 0, 0.66, 1);
    }
    100% {
      transform: scale(1, 1) translateY(0);
    }
  }

  @keyframes fade {
    0% {
      opacity: 1;
      transform: scale(1);
      animation-timing-function: cubic-bezier(0.2, 0, 0.4, 1);
    }
    40% {
      opacity: var(--fade-opacity, 0.4);
      transform: scale(0.98);
      animation-timing-function: cubic-bezier(0.4, 0, 0.6, 1);
    }
    100% {
      opacity: 1;
      transform: scale(1);
    }
  }

  @keyframes beat-fade {
    0% {
      opacity: var(--beat-fade-opacity, 0.4);
      transform: scale(1);
      animation-timing-function: cubic-bezier(0.2, 0, 0.4, 1);
    }
    25% {
      opacity: calc(var(--beat-fade-opacity, 0.4) + 0.4);
      transform: scale(var(--beat-fade-scale, 1.28));
      animation-timing-function: cubic-bezier(0.4, 0, 0.6, 1);
    }
    45% {
      opacity: 1;
      transform: scale(var(--beat-fade-scale, 1.25));
      animation-timing-function: cubic-bezier(0.4, 0, 0.2, 1);
    }
    65% {
      opacity: calc(var(--beat-fade-opacity, 0.4) + 0.4);
      transform: scale(var(--beat-fade-scale, 1.28));
      animation-timing-function: cubic-bezier(0.4, 0, 0.6, 1);
    }
    100% {
      opacity: var(--beat-fade-opacity, 0.4);
      transform: scale(1);
    }
  }

  @keyframes flip {
    0% {
      transform: perspective(2em) scale(1) rotate3d(var(--flip-x, 0), var(--flip-y, 1), var(--flip-z, 0), 0deg);
      animation-timing-function: cubic-bezier(0.2, 0, 0.4, 1);
    }
    8% {
      transform: perspective(2em) scale(var(--flip-anticipation-scale, 0.95))
        rotate3d(var(--flip-x, 0), var(--flip-y, 1), var(--flip-z, 0), 0deg);
      animation-timing-function: cubic-bezier(0.33, 0, 0.66, 0.33);
    }
    35% {
      transform: perspective(2em) scale(1)
        rotate3d(var(--flip-x, 0), var(--flip-y, 1), var(--flip-z, 0), calc(var(--flip-angle, -360deg) * 0.6));
      animation-timing-function: linear;
    }
    65% {
      transform: perspective(2em) scale(1)
        rotate3d(var(--flip-x, 0), var(--flip-y, 1), var(--flip-z, 0), calc(var(--flip-angle, -360deg) * 0.5));
      animation-timing-function: cubic-bezier(0.33, 0.66, 0.66, 1);
    }
    92% {
      transform: perspective(2em) scale(1)
        rotate3d(
          var(--flip-x, 0),
          var(--flip-y, 1),
          var(--flip-z, 0),
          calc(var(--flip-angle, -360deg) * var(--flip-overshoot, 1.04))
        );
      animation-timing-function: cubic-bezier(0.33, 0, 0.66, 1);
    }
    100% {
      transform: perspective(2em) scale(1)
        rotate3d(var(--flip-x, 0), var(--flip-y, 1), var(--flip-z, 0), var(--flip-angle, -360deg));
    }
  }

  @keyframes flip-360 {
    0% {
      transform: perspective(2em) scale(1) rotate3d(var(--flip-x, 0), var(--flip-y, 1), var(--flip-z, 0), 0deg);
      animation-timing-function: cubic-bezier(0.2, 0, 0.4, 1);
    }
    8% {
      transform: perspective(2em) scale(var(--flip-anticipation-scale, 0.95))
        rotate3d(var(--flip-x, 0), var(--flip-y, 1), var(--flip-z, 0), 0deg);
      animation-timing-function: cubic-bezier(0.33, 0, 0.66, 0.33);
    }
    50% {
      transform: perspective(2em) scale(1)
        rotate3d(var(--flip-x, 0), var(--flip-y, 1), var(--flip-z, 0), calc(var(--flip-angle, -360deg) * 0.6));
      animation-timing-function: cubic-bezier(0.33, 0.66, 0.66, 1);
    }
    80% {
      transform: perspective(2em) scale(1)
        rotate3d(
          var(--flip-x, 0),
          var(--flip-y, 1),
          var(--flip-z, 0),
          calc(var(--flip-angle, -360deg) * var(--flip-overshoot, 1.04))
        );
      animation-timing-function: cubic-bezier(0.33, 0, 0.66, 1);
    }
    100% {
      transform: perspective(2em) scale(1)
        rotate3d(var(--flip-x, 0), var(--flip-y, 1), var(--flip-z, 0), var(--flip-angle, -360deg));
    }
  }

  @keyframes shake {
    0% {
      transform: rotate(0deg);
      animation-timing-function: cubic-bezier(0.2, 0, 0.8, 1);
    }
    8% {
      transform: rotate(35deg) translateX(1px);
      animation-timing-function: cubic-bezier(0.3, 0, 0.7, 1);
    }
    20% {
      transform: rotate(-22deg) translateX(-1px);
      animation-timing-function: cubic-bezier(0.3, 0, 0.7, 1);
    }
    35% {
      transform: rotate(15deg) translateX(1px);
      animation-timing-function: cubic-bezier(0.3, 0, 0.7, 1);
    }
    50% {
      transform: rotate(-9deg);
      animation-timing-function: cubic-bezier(0.4, 0, 0.6, 1);
    }
    65% {
      transform: rotate(5deg);
      animation-timing-function: cubic-bezier(0.4, 0, 0.6, 1);
    }
    78% {
      transform: rotate(-3deg);
      animation-timing-function: cubic-bezier(0.4, 0, 0.6, 1);
    }
    90% {
      transform: rotate(1deg);
      animation-timing-function: cubic-bezier(0.4, 0, 0.2, 1);
    }
    100% {
      transform: rotate(0deg);
    }
  }

  @keyframes spin {
    0% {
      transform: rotate(0deg);
    }
    100% {
      transform: rotate(360deg);
    }
  }

  @keyframes spin-snap {
    0% {
      transform: rotate(0deg);
      animation-timing-function: cubic-bezier(0, 0, 0.2, 1);
    }
    12% {
      transform: rotate(60deg);
      animation-timing-function: cubic-bezier(0.8, 0, 1, 1);
    }
    16.67% {
      transform: rotate(60deg);
      animation-timing-function: cubic-bezier(0, 0, 0.2, 1);
    }
    28.67% {
      transform: rotate(120deg);
      animation-timing-function: cubic-bezier(0.8, 0, 1, 1);
    }
    33.33% {
      transform: rotate(120deg);
      animation-timing-function: cubic-bezier(0, 0, 0.2, 1);
    }
    45.33% {
      transform: rotate(180deg);
      animation-timing-function: cubic-bezier(0.8, 0, 1, 1);
    }
    50% {
      transform: rotate(180deg);
      animation-timing-function: cubic-bezier(0, 0, 0.2, 1);
    }
    62% {
      transform: rotate(240deg);
      animation-timing-function: cubic-bezier(0.8, 0, 1, 1);
    }
    66.67% {
      transform: rotate(240deg);
      animation-timing-function: cubic-bezier(0, 0, 0.2, 1);
    }
    78.67% {
      transform: rotate(300deg);
      animation-timing-function: cubic-bezier(0.8, 0, 1, 1);
    }
    83.33% {
      transform: rotate(300deg);
      animation-timing-function: cubic-bezier(0, 0, 0.2, 1);
    }
    95.33% {
      transform: rotate(360deg);
      animation-timing-function: cubic-bezier(0.8, 0, 1, 1);
    }
    100% {
      transform: rotate(360deg);
    }
  }

  @keyframes spin-snap-4 {
    0% {
      transform: rotate(0deg);
      animation-timing-function: cubic-bezier(0, 0, 0.2, 1);
    }
    15% {
      transform: rotate(90deg);
      animation-timing-function: cubic-bezier(0.8, 0, 1, 1);
    }
    25% {
      transform: rotate(90deg);
      animation-timing-function: cubic-bezier(0, 0, 0.2, 1);
    }
    40% {
      transform: rotate(180deg);
      animation-timing-function: cubic-bezier(0.8, 0, 1, 1);
    }
    50% {
      transform: rotate(180deg);
      animation-timing-function: cubic-bezier(0, 0, 0.2, 1);
    }
    65% {
      transform: rotate(270deg);
      animation-timing-function: cubic-bezier(0.8, 0, 1, 1);
    }
    75% {
      transform: rotate(270deg);
      animation-timing-function: cubic-bezier(0, 0, 0.2, 1);
    }
    90% {
      transform: rotate(360deg);
      animation-timing-function: cubic-bezier(0.8, 0, 1, 1);
    }
    100% {
      transform: rotate(360deg);
    }
  }

  @keyframes spin-snap-8 {
    0% {
      transform: rotate(0deg);
      animation-timing-function: cubic-bezier(0, 0, 0.2, 1);
    }
    9% {
      transform: rotate(45deg);
      animation-timing-function: cubic-bezier(0.8, 0, 1, 1);
    }
    12.5% {
      transform: rotate(45deg);
      animation-timing-function: cubic-bezier(0, 0, 0.2, 1);
    }
    21.5% {
      transform: rotate(90deg);
      animation-timing-function: cubic-bezier(0.8, 0, 1, 1);
    }
    25% {
      transform: rotate(90deg);
      animation-timing-function: cubic-bezier(0, 0, 0.2, 1);
    }
    34% {
      transform: rotate(135deg);
      animation-timing-function: cubic-bezier(0.8, 0, 1, 1);
    }
    37.5% {
      transform: rotate(135deg);
      animation-timing-function: cubic-bezier(0, 0, 0.2, 1);
    }
    46.5% {
      transform: rotate(180deg);
      animation-timing-function: cubic-bezier(0.8, 0, 1, 1);
    }
    50% {
      transform: rotate(180deg);
      animation-timing-function: cubic-bezier(0, 0, 0.2, 1);
    }
    59% {
      transform: rotate(225deg);
      animation-timing-function: cubic-bezier(0.8, 0, 1, 1);
    }
    62.5% {
      transform: rotate(225deg);
      animation-timing-function: cubic-bezier(0, 0, 0.2, 1);
    }
    71.5% {
      transform: rotate(270deg);
      animation-timing-function: cubic-bezier(0.8, 0, 1, 1);
    }
    75% {
      transform: rotate(270deg);
      animation-timing-function: cubic-bezier(0, 0, 0.2, 1);
    }
    84% {
      transform: rotate(315deg);
      animation-timing-function: cubic-bezier(0.8, 0, 1, 1);
    }
    87.5% {
      transform: rotate(315deg);
      animation-timing-function: cubic-bezier(0, 0, 0.2, 1);
    }
    96.5% {
      transform: rotate(360deg);
      animation-timing-function: cubic-bezier(0.8, 0, 1, 1);
    }
    100% {
      transform: rotate(360deg);
    }
  }

  @keyframes buzz {
    0% {
      transform: translateX(0) rotate(0deg);
      animation-timing-function: cubic-bezier(0.1, 0, 0.9, 1);
    }
    5% {
      transform: translateX(var(--buzz-distance, 4px)) rotate(0.5deg);
    }
    10% {
      transform: translateX(calc(-1 * var(--buzz-distance, 4px))) rotate(-0.5deg);
    }
    15% {
      transform: translateX(var(--buzz-distance, 4px)) rotate(0.3deg);
    }
    20% {
      transform: translateX(calc(-1 * var(--buzz-distance, 4px))) rotate(-0.3deg);
    }
    25% {
      transform: translateX(calc(var(--buzz-distance, 4px) * 0.7)) rotate(0.2deg);
    }
    30% {
      transform: translateX(calc(-1 * var(--buzz-distance, 4px) * 0.7)) rotate(-0.2deg);
    }
    35% {
      transform: translateX(calc(var(--buzz-distance, 4px) * 0.4)) rotate(0.1deg);
    }
    40% {
      transform: translateX(0) rotate(0deg);
    }
    100% {
      transform: translateX(0) rotate(0deg);
    }
  }

  @keyframes wag {
    0% {
      transform: rotate(0deg);
      animation-timing-function: cubic-bezier(0.2, 0, 0.6, 1);
    }
    12% {
      transform: rotate(var(--wag-angle, 12deg));
      animation-timing-function: cubic-bezier(0.4, 0, 0.2, 1);
    }
    24% {
      transform: rotate(2deg);
      animation-timing-function: cubic-bezier(0.2, 0, 0.6, 1);
    }
    36% {
      transform: rotate(calc(var(--wag-angle, 12deg) * 0.85));
      animation-timing-function: cubic-bezier(0.4, 0, 0.2, 1);
    }
    48% {
      transform: rotate(1deg);
      animation-timing-function: cubic-bezier(0.2, 0, 0.6, 1);
    }
    58% {
      transform: rotate(calc(var(--wag-angle, 12deg) * 0.6));
      animation-timing-function: cubic-bezier(0.4, 0, 0.2, 1);
    }
    68% {
      transform: rotate(0deg);
    }
    100% {
      transform: rotate(0deg);
    }
  }

  @keyframes float {
    0% {
      transform: translateY(0) translateX(0) rotate(0deg)
        scale(var(--float-squash-x, 1.02), var(--float-squash-y, 0.98));
      animation-timing-function: cubic-bezier(0.33, 0, 0.66, 0.33);
    }
    15% {
      transform: translateY(calc(-0.4 * var(--float-height, 6px))) translateX(var(--float-drift, 1px))
        rotate(var(--float-tilt, 1deg)) scale(1, 1);
      animation-timing-function: cubic-bezier(0.33, 0.66, 0.66, 1);
    }
    35% {
      transform: translateY(calc(-1 * var(--float-height, 6px))) translateX(0) rotate(0deg)
        scale(var(--float-stretch-x, 0.98), var(--float-stretch-y, 1.03));
      animation-timing-function: cubic-bezier(0.5, 0, 0.5, 0);
    }
    50% {
      transform: translateY(calc(-0.92 * var(--float-height, 6px))) translateX(calc(-0.5 * var(--float-drift, 1px)))
        rotate(calc(-0.5 * var(--float-tilt, 1deg))) scale(0.995, 1.01);
      animation-timing-function: cubic-bezier(0.33, 0, 0.66, 0.33);
    }
    70% {
      transform: translateY(calc(-0.3 * var(--float-height, 6px))) translateX(calc(-1 * var(--float-drift, 1px)))
        rotate(calc(-1 * var(--float-tilt, 1deg))) scale(1, 1);
      animation-timing-function: cubic-bezier(0.33, 0.66, 0.66, 1);
    }
    90% {
      transform: translateY(calc(0.05 * var(--float-height, 6px))) translateX(0) rotate(0deg)
        scale(var(--float-squash-x, 1.02), var(--float-squash-y, 0.98));
      animation-timing-function: cubic-bezier(0.33, 0, 0.66, 1);
    }
    100% {
      transform: translateY(0) translateX(0) rotate(0deg)
        scale(var(--float-squash-x, 1.02), var(--float-squash-y, 0.98));
    }
  }

  @keyframes swing {
    0% {
      transform: rotate(0deg);
      animation-timing-function: cubic-bezier(0.2, 0, 0.8, 1);
    }
    8% {
      transform: rotate(var(--swing-angle, 22deg));
      animation-timing-function: cubic-bezier(0.3, 0, 0.7, 1);
    }
    18% {
      transform: rotate(calc(-1 * var(--swing-angle, 22deg) * 0.85));
      animation-timing-function: cubic-bezier(0.3, 0, 0.7, 1);
    }
    28% {
      transform: rotate(calc(var(--swing-angle, 22deg) * 0.65));
      animation-timing-function: cubic-bezier(0.35, 0, 0.65, 1);
    }
    38% {
      transform: rotate(calc(-1 * var(--swing-angle, 22deg) * 0.45));
      animation-timing-function: cubic-bezier(0.4, 0, 0.6, 1);
    }
    48% {
      transform: rotate(calc(var(--swing-angle, 22deg) * 0.25));
      animation-timing-function: cubic-bezier(0.4, 0, 0.6, 1);
    }
    56% {
      transform: rotate(calc(-1 * var(--swing-angle, 22deg) * 0.1));
      animation-timing-function: cubic-bezier(0.4, 0, 0.6, 1);
    }
    64% {
      transform: rotate(0deg);
    }
    100% {
      transform: rotate(0deg);
    }
  }

  @keyframes jello {
    0% {
      transform: scale(1, 1);
      animation-timing-function: cubic-bezier(0.2, 0, 0.8, 1);
    }
    12% {
      transform: scale(var(--jello-scale-x, 1.15), calc(2 - var(--jello-scale-x, 1.15)));
      animation-timing-function: cubic-bezier(0.3, 0, 0.7, 1);
    }
    24% {
      transform: scale(calc(2 - var(--jello-scale-y, 1.12)), var(--jello-scale-y, 1.12));
      animation-timing-function: cubic-bezier(0.3, 0, 0.7, 1);
    }
    36% {
      transform: scale(
        calc(1 + (var(--jello-scale-x, 1.15) - 1) * 0.5),
        calc(2 - (1 + (var(--jello-scale-x, 1.15) - 1) * 0.5))
      );
      animation-timing-function: cubic-bezier(0.4, 0, 0.6, 1);
    }
    48% {
      transform: scale(
        calc(2 - (1 + (var(--jello-scale-y, 1.12) - 1) * 0.3)),
        calc(1 + (var(--jello-scale-y, 1.12) - 1) * 0.3)
      );
      animation-timing-function: cubic-bezier(0.4, 0, 0.6, 1);
    }
    58% {
      transform: scale(1.02, 0.98);
      animation-timing-function: cubic-bezier(0.4, 0, 0.2, 1);
    }
    68% {
      transform: scale(1, 1);
    }
    100% {
      transform: scale(1, 1);
    }
  }

  /* #endregion */
`;/*! Copyright 2026 Fonticons, Inc. - https://webawesome.com/license */var xr=Symbol(),c2=Symbol(),Q1,K1=new Map,No=class extends L{constructor(){super(...arguments);this.svg=null,this.autoWidth=!1,this.swapOpacity=!1,this.label="",this.library="default",this.rotate=0,this.resolveIcon=async(o,i)=>{let r;if(i?.spriteSheet){if(!this.hasUpdated)await this.updateComplete;this.svg=h`<svg part="svg">
        <use part="use" href="${o}"></use>
      </svg>`,await this.updateComplete;let a=this.shadowRoot.querySelector("[part='svg']");if(typeof i.mutator==="function")i.mutator(a,this);return this.svg}try{if(r=await fetch(o,{mode:"cors"}),!r.ok)return r.status===410?xr:c2}catch{return c2}try{let a=document.createElement("div");a.innerHTML=await r.text();let n=a.firstElementChild;if(n?.tagName?.toLowerCase()!=="svg")return xr;if(!Q1)Q1=new DOMParser;let b=Q1.parseFromString(n.outerHTML,"text/html").body.querySelector("svg");if(!b)return xr;return b.part.add("svg"),document.adoptNode(b)}catch{return xr}}}connectedCallback(){super.connectedCallback(),dn(this)}firstUpdated(o){if(super.firstUpdated(o),this.hasAttribute("rotate"))this.style.setProperty("--rotate-angle",`${this.rotate}deg`);this.setIcon()}disconnectedCallback(){super.disconnectedCallback(),gn(this)}async getIconSource(){let o=f2(this.library),i=this.family||$1();if(this.name&&o){let r=this.canvas==="auto"||this.autoWidth,a;try{a=await o.resolver(this.name,i,this.variant,r)}catch{a=void 0}return{url:a,fromLibrary:!0}}return{url:this.src,fromLibrary:!1}}handleLabelChange(){if(typeof this.label==="string"&&this.label.length>0)this.setAttribute("role","img"),this.setAttribute("aria-label",this.label),this.removeAttribute("aria-hidden");else this.removeAttribute("role"),this.removeAttribute("aria-label"),this.setAttribute("aria-hidden","true")}async setIcon(){let{url:o,fromLibrary:i}=await this.getIconSource(),r=i?f2(this.library):void 0;if(!o){this.svg=null;return}let a=K1.get(o);if(!a)a=this.resolveIcon(o,r),K1.set(o,a);let n=await a;if(n===c2)K1.delete(o);let w=await this.getIconSource();if(o!==w.url)return;if(er(n)){this.svg=n;return}switch(n){case c2:case xr:this.svg=null,this.dispatchEvent(new ki);break;default:this.svg=n.cloneNode(!0),r?.mutator?.(this.svg,this),this.dispatchEvent(new N0)}}willUpdate(o){if(!this.style)this.setStyleProperty("--rotate-angle",`${this.rotate}deg`);return super.willUpdate(o)}updated(o){super.updated(o);let i=f2(this.library);if(this.hasAttribute("rotate"))this.style.setProperty("--rotate-angle",`${this.rotate}deg`);let r=this.shadowRoot?.querySelector("svg");if(r)i?.mutator?.(r,this)}render(){if(this.hasUpdated)return this.svg;return h`<svg part="svg" width="16" height="16" viewBox="0 0 16 16"></svg>`}};No.css=Tn;f([J()],No.prototype,"svg",2);f([t({reflect:!0})],No.prototype,"name",2);f([t({reflect:!0})],No.prototype,"family",2);f([t({reflect:!0})],No.prototype,"variant",2);f([t({reflect:!0})],No.prototype,"canvas",2);f([t({attribute:"auto-width",type:Boolean,reflect:!0})],No.prototype,"autoWidth",2);f([t({attribute:"swap-opacity",type:Boolean,reflect:!0})],No.prototype,"swapOpacity",2);f([t()],No.prototype,"src",2);f([t()],No.prototype,"label",2);f([t({reflect:!0})],No.prototype,"library",2);f([t({type:Number,reflect:!0})],No.prototype,"rotate",2);f([t({type:String,reflect:!0})],No.prototype,"flip",2);f([t({type:String,reflect:!0})],No.prototype,"animation",2);f([v("label")],No.prototype,"handleLabelChange",1);f([v(["family","name","library","variant","src","autoWidth","canvas","swapOpacity"],{waitUntilFirstUpdate:!0})],No.prototype,"setIcon",1);No=f([$("wa-icon")],No);/*! Copyright 2026 Fonticons, Inc. - https://webawesome.com/license *//*! Copyright 2026 Fonticons, Inc. - https://webawesome.com/license *//*! Copyright 2026 Fonticons, Inc. - https://webawesome.com/license */var jn=F`
  :host {
    --control-box-size: 3rem;
    --icon-size: calc(var(--control-box-size) * 0.625);

    display: inline-flex;
    position: relative;
    cursor: pointer;
  }

  img {
    display: block;
    width: 100%;
    height: 100%;
  }

  img[aria-hidden='true'] {
    display: none;
  }

  .control-box {
    display: flex;
    position: absolute;
    align-items: center;
    justify-content: center;
    top: calc(50% - var(--control-box-size) / 2);
    right: calc(50% - var(--control-box-size) / 2);
    width: var(--control-box-size);
    height: var(--control-box-size);
    font-size: calc(var(--icon-size) * 0.75);
    background: none;
    border: solid var(--wa-border-width-s) currentColor;
    background-color: rgb(0 0 0 / 50%);
    border-radius: var(--wa-border-radius-circle);
    color: white;
    pointer-events: none;
    transition: opacity var(--wa-transition-normal) var(--wa-transition-easing);
  }

  @media (hover: hover) {
    :host([play]:hover) .control-box {
      opacity: 1;
    }
  }

  :where(:host([play]:not(:hover))) .control-box {
    opacity: 0;
  }

  :host([play]) slot[name='play-icon'],
  :host(:not([play])) slot[name='pause-icon'] {
    display: none;
  }

  /* Show control box on keyboard focus */
  .animated-image {
    &:focus {
      outline: none;
    }

    &:focus-visible .control-box {
      opacity: 1;
      outline: var(--wa-focus-ring);
      outline-offset: var(--wa-focus-ring-offset);
    }
  }
`;var In="important",Sn=" !"+In,Cb=0-Sn.length;class Rn extends a0{constructor(o){super(o);if(o.type!==Ho.ATTRIBUTE||o.name!=="style"||o.strings?.length>2)throw Error("The `styleMap` directive must be used in the `style` attribute and must be the only part in the attribute.")}render(o){return Object.keys(o).reduce((i,r)=>{let a=o[r];if(a==null)return i;return r=r.includes("-")?r:r.replace(/(?:^(webkit|moz|ms|o)|)(?=[A-Z])/g,"-$&").toLowerCase(),i+`${r}:${a};`},"")}update(o,[i]){let{style:r}=o.element;if(this._previousStyleProperties===void 0)return this._previousStyleProperties=new Set(Object.keys(i)),this.render(i);for(let a of this._previousStyleProperties)if(i[a]==null)if(this._previousStyleProperties.delete(a),a.includes("-"))r.removeProperty(a);else r[a]=null;for(let a in i){let n=i[a];if(n!=null){this._previousStyleProperties.add(a);let w=typeof n==="string"&&n.endsWith(Sn);if(a.includes("-")||w)r.setProperty(a,w?n.slice(0,Cb):n,w?In:"");else r[a]=n}}return Jo}}var mo=h0(Rn);/*! Copyright 2026 Fonticons, Inc. - https://webawesome.com/license */var Yi=class extends L{constructor(){super(...arguments);this.localize=new B(this),this.isLoaded=!1}handleClick(){this.play=!this.play}handleKeyDown(o){if(o.key==="Enter"||o.key===" ")o.preventDefault(),this.play=!this.play}firstUpdated(o){if(this.didSSR){let i=this.animatedImage;if(i&&i.complete)if(i.naturalWidth>0)i.dispatchEvent(new Event("load"));else i.dispatchEvent(new Event("error"))}super.firstUpdated(o)}handleLoad(){let o=document.createElement("canvas"),{width:i,height:r}=this.animatedImage;if(o.width=i,o.height=r,o.getContext("2d").drawImage(this.animatedImage,0,0,i,r),this.frozenFrame=o.toDataURL("image/gif"),!this.isLoaded)this.dispatchEvent(new N0),this.isLoaded=!0}handleError(){this.dispatchEvent(new ki)}handlePlayChange(){if(this.play)this.animatedImage.src="",this.animatedImage.src=this.src}handleSrcChange(){this.isLoaded=!1}render(){let i=`${this.localize.term(this.play?"pauseAnimation":"playAnimation")} ${this.alt}`,r=this.didSSR&&!this.hasUpdated||this.play;return h`
      <div
        class="animated-image"
        tabindex="0"
        role="button"
        aria-pressed=${this.play?"true":"false"}
        aria-label=${i}
        @click=${this.handleClick}
        @keydown=${this.handleKeyDown}
      >
        <img
          class="animated"
          src=${this.src}
          alt=${this.alt}
          crossorigin="anonymous"
          aria-hidden=${r?"false":"true"}
          style="visibility: hidden;"
          role="presentation"
          @load=${this.handleLoad}
          @error=${this.handleError}
        />

        ${this.isLoaded?h`
              <img
                class="frozen"
                src=${this.frozenFrame}
                alt=${this.alt}
                aria-hidden=${this.play?"true":"false"}
                role="presentation"
              />

              <div part="control-box" class="control-box" aria-hidden="true">
                <slot name="play-icon">
                  <wa-icon
                    name="play"
                    library="system"
                    variant="solid"
                    class="default"
                    style=${mo({"margin-inline-start":"3px"})}
                  ></wa-icon>
                </slot>
                <slot name="pause-icon">
                  <wa-icon name="pause" library="system" variant="solid" class="default"></wa-icon>
                </slot>
              </div>
            `:""}
      </div>
    `}};Yi.css=jn;f([Y(".animated")],Yi.prototype,"animatedImage",2);f([J()],Yi.prototype,"frozenFrame",2);f([J()],Yi.prototype,"isLoaded",2);f([t()],Yi.prototype,"src",2);f([t()],Yi.prototype,"alt",2);f([t({type:Boolean,reflect:!0})],Yi.prototype,"play",2);f([v("play",{waitUntilFirstUpdate:!0})],Yi.prototype,"handlePlayChange",1);f([v("src")],Yi.prototype,"handleSrcChange",1);Yi=f([$("wa-animated-image")],Yi);/*! Copyright 2026 Fonticons, Inc. - https://webawesome.com/license *//*! Copyright 2026 Fonticons, Inc. - https://webawesome.com/license */var B1=class extends Event{constructor(){super("wa-start",{bubbles:!0,cancelable:!1,composed:!0})}};/*! Copyright 2026 Fonticons, Inc. - https://webawesome.com/license */var Cn=class extends Event{constructor(){super("wa-finish",{bubbles:!0,cancelable:!1,composed:!0})}};/*! Copyright 2026 Fonticons, Inc. - https://webawesome.com/license */var Pn=class extends Event{constructor(){super("wa-cancel",{bubbles:!0,cancelable:!1,composed:!0})}};/*! Copyright 2026 Fonticons, Inc. - https://webawesome.com/license */var Wn=F`
  :host {
    display: contents;
  }
`;/*! Copyright 2026 Fonticons, Inc. - https://webawesome.com/license */var Bo=class extends L{constructor(){super(...arguments);this.hasStarted=!1,this.name="none",this.play=!1,this.delay=0,this.direction="normal",this.duration=1000,this.easing="linear",this.endDelay=0,this.fill="auto",this.iterations=1/0,this.iterationStart=0,this.playbackRate=1,this.handleAnimationFinish=()=>{this.play=!1,this.hasStarted=!1,this.dispatchEvent(new Cn)},this.handleAnimationCancel=()=>{this.play=!1,this.hasStarted=!1,this.dispatchEvent(new Pn)}}get currentTime(){return this.animation?.currentTime??0}set currentTime(o){if(this.animation)this.animation.currentTime=o}connectedCallback(){if(super.connectedCallback(),"animate"in this)this.createAnimation()}disconnectedCallback(){if(super.disconnectedCallback(),"animate"in this)this.destroyAnimation()}handleSlotChange(){this.destroyAnimation(),this.createAnimation()}async createAnimation(){let o=or.easings[this.easing]??this.easing,i=this.keyframes??or[this.name],a=(await this.defaultSlot).assignedElements()[0];if(!a||!i)return!1;if(this.destroyAnimation(),this.animation=a.animate(i,{delay:this.delay,direction:this.direction,duration:this.duration,easing:o,endDelay:this.endDelay,fill:this.fill,iterationStart:this.iterationStart,iterations:this.iterations}),this.animation.playbackRate=this.playbackRate,this.animation.addEventListener("cancel",this.handleAnimationCancel),this.animation.addEventListener("finish",this.handleAnimationFinish),this.play)this.hasStarted=!0,this.dispatchEvent(new B1);else this.animation.pause();return!0}destroyAnimation(){if(this.animation)this.animation.cancel(),this.animation.removeEventListener("cancel",this.handleAnimationCancel),this.animation.removeEventListener("finish",this.handleAnimationFinish),this.hasStarted=!1}handleAnimationChange(){if(!this.hasUpdated)return;this.createAnimation()}handlePlayChange(){if(this.animation){if(this.play&&!this.hasStarted)this.hasStarted=!0,this.dispatchEvent(new B1);if(this.play)this.animation.play();else this.animation.pause();return!0}return!1}handlePlaybackRateChange(){if(this.animation)this.animation.playbackRate=this.playbackRate}cancel(){this.animation?.cancel()}finish(){this.animation?.finish()}render(){return h` <slot @slotchange=${this.handleSlotChange}></slot> `}};Bo.css=Wn;f([Hn("slot")],Bo.prototype,"defaultSlot",2);f([t()],Bo.prototype,"name",2);f([t({type:Boolean,reflect:!0})],Bo.prototype,"play",2);f([t({type:Number})],Bo.prototype,"delay",2);f([t()],Bo.prototype,"direction",2);f([t({type:Number})],Bo.prototype,"duration",2);f([t()],Bo.prototype,"easing",2);f([t({attribute:"end-delay",type:Number})],Bo.prototype,"endDelay",2);f([t()],Bo.prototype,"fill",2);f([t({type:Number})],Bo.prototype,"iterations",2);f([t({attribute:"iteration-start",type:Number})],Bo.prototype,"iterationStart",2);f([t({attribute:!1})],Bo.prototype,"keyframes",2);f([t({attribute:"playback-rate",type:Number})],Bo.prototype,"playbackRate",2);f([v(["name","delay","direction","duration","easing","endDelay","fill","iterations","iterationsStart","keyframes"])],Bo.prototype,"handleAnimationChange",1);f([v("play")],Bo.prototype,"handlePlayChange",1);f([v("playbackRate")],Bo.prototype,"handlePlaybackRateChange",1);Bo=f([$("wa-animation")],Bo);/*! Copyright 2026 Fonticons, Inc. - https://webawesome.com/license *//*! Copyright 2026 Fonticons, Inc. - https://webawesome.com/license */var _n=F`
  :host {
    --size: 3rem;

    display: inline-flex;
    align-items: center;
    justify-content: center;
    position: relative;
    width: var(--size);
    height: var(--size);
    color: var(--wa-color-neutral-on-normal);
    font: inherit;
    font-size: calc(var(--size) * 0.4);
    vertical-align: middle;
    background-color: var(--wa-color-neutral-fill-normal);
    border-radius: var(--wa-border-radius-circle);
    user-select: none;
    -webkit-user-select: none;
  }

  :host([shape='square']) {
    border-radius: 0;
  }

  :host([shape='rounded']) {
    border-radius: var(--wa-border-radius-m);
  }

  .icon {
    display: flex;
    align-items: center;
    justify-content: center;
    position: absolute;
    top: 0;
    left: 0;
    width: 100%;
    height: 100%;
  }

  .initials {
    line-height: 1;
    text-transform: uppercase;
  }

  .image {
    position: absolute;
    top: 0;
    left: 0;
    width: 100%;
    height: 100%;
    object-fit: cover;
    overflow: hidden;
    border-radius: inherit;
  }
`;/*! Copyright 2026 Fonticons, Inc. - https://webawesome.com/license */var Gi=class extends L{constructor(){super(...arguments);this.hasError=!1,this.image="",this.label="",this.initials="",this.loading="eager",this.shape="circle"}handleImageChange(){this.hasError=!1}handleImageLoadError(){this.hasError=!0,this.dispatchEvent(new ki)}connectedCallback(){if(super.connectedCallback(),this.didSSR){let o=this.shadowRoot?.querySelector?.("img");if(o&&o.complete&&o.naturalWidth<=0)this.updateComplete.then(()=>{this.handleImageLoadError()})}}render(){let o=h`
      <img
        part="image"
        class="image"
        src="${this.image}"
        loading="${this.loading}"
        role="img"
        aria-label=${this.label}
        @error="${this.handleImageLoadError}"
      />
    `,i=h``;if(this.initials)i=h`<div part="initials" class="initials" role="img" aria-label=${this.label}>
        ${this.initials}
      </div>`;else i=h`
        <slot name="icon" part="icon" class="icon" role="img" aria-label=${this.label}>
          <wa-icon name="user" library="system" variant="solid"></wa-icon>
        </slot>
      `;return h` ${this.image&&!this.hasError?o:i} `}};Gi.css=_n;f([J()],Gi.prototype,"hasError",2);f([t()],Gi.prototype,"image",2);f([t()],Gi.prototype,"label",2);f([t()],Gi.prototype,"initials",2);f([t()],Gi.prototype,"loading",2);f([t({reflect:!0})],Gi.prototype,"shape",2);f([v("image")],Gi.prototype,"handleImageChange",1);Gi=f([$("wa-avatar")],Gi);/*! Copyright 2026 Fonticons, Inc. - https://webawesome.com/license *//*! Copyright 2026 Fonticons, Inc. - https://webawesome.com/license */var Ti=F`
  :where(:root),
  .wa-neutral,
  :host([variant='neutral']) {
    --wa-color-fill-loud: var(--wa-color-neutral-fill-loud);
    --wa-color-fill-normal: var(--wa-color-neutral-fill-normal);
    --wa-color-fill-quiet: var(--wa-color-neutral-fill-quiet);
    --wa-color-border-loud: var(--wa-color-neutral-border-loud);
    --wa-color-border-normal: var(--wa-color-neutral-border-normal);
    --wa-color-border-quiet: var(--wa-color-neutral-border-quiet);
    --wa-color-on-loud: var(--wa-color-neutral-on-loud);
    --wa-color-on-normal: var(--wa-color-neutral-on-normal);
    --wa-color-on-quiet: var(--wa-color-neutral-on-quiet);
  }

  .wa-brand,
  :host([variant='brand']) {
    --wa-color-fill-loud: var(--wa-color-brand-fill-loud);
    --wa-color-fill-normal: var(--wa-color-brand-fill-normal);
    --wa-color-fill-quiet: var(--wa-color-brand-fill-quiet);
    --wa-color-border-loud: var(--wa-color-brand-border-loud);
    --wa-color-border-normal: var(--wa-color-brand-border-normal);
    --wa-color-border-quiet: var(--wa-color-brand-border-quiet);
    --wa-color-on-loud: var(--wa-color-brand-on-loud);
    --wa-color-on-normal: var(--wa-color-brand-on-normal);
    --wa-color-on-quiet: var(--wa-color-brand-on-quiet);
  }

  .wa-success,
  :host([variant='success']) {
    --wa-color-fill-loud: var(--wa-color-success-fill-loud);
    --wa-color-fill-normal: var(--wa-color-success-fill-normal);
    --wa-color-fill-quiet: var(--wa-color-success-fill-quiet);
    --wa-color-border-loud: var(--wa-color-success-border-loud);
    --wa-color-border-normal: var(--wa-color-success-border-normal);
    --wa-color-border-quiet: var(--wa-color-success-border-quiet);
    --wa-color-on-loud: var(--wa-color-success-on-loud);
    --wa-color-on-normal: var(--wa-color-success-on-normal);
    --wa-color-on-quiet: var(--wa-color-success-on-quiet);
  }

  .wa-warning,
  :host([variant='warning']) {
    --wa-color-fill-loud: var(--wa-color-warning-fill-loud);
    --wa-color-fill-normal: var(--wa-color-warning-fill-normal);
    --wa-color-fill-quiet: var(--wa-color-warning-fill-quiet);
    --wa-color-border-loud: var(--wa-color-warning-border-loud);
    --wa-color-border-normal: var(--wa-color-warning-border-normal);
    --wa-color-border-quiet: var(--wa-color-warning-border-quiet);
    --wa-color-on-loud: var(--wa-color-warning-on-loud);
    --wa-color-on-normal: var(--wa-color-warning-on-normal);
    --wa-color-on-quiet: var(--wa-color-warning-on-quiet);
  }

  .wa-danger,
  :host([variant='danger']) {
    --wa-color-fill-loud: var(--wa-color-danger-fill-loud);
    --wa-color-fill-normal: var(--wa-color-danger-fill-normal);
    --wa-color-fill-quiet: var(--wa-color-danger-fill-quiet);
    --wa-color-border-loud: var(--wa-color-danger-border-loud);
    --wa-color-border-normal: var(--wa-color-danger-border-normal);
    --wa-color-border-quiet: var(--wa-color-danger-border-quiet);
    --wa-color-on-loud: var(--wa-color-danger-on-loud);
    --wa-color-on-normal: var(--wa-color-danger-on-normal);
    --wa-color-on-quiet: var(--wa-color-danger-on-quiet);
  }
`;/*! Copyright 2026 Fonticons, Inc. - https://webawesome.com/license */var en=F`
  :host {
    --pulse-color: var(--wa-color-fill-loud, var(--wa-color-brand-fill-loud));

    display: inline-flex;
    align-items: center;
    justify-content: center;
    padding: 0.375em 0.625em;
    color: var(--wa-color-on-loud, var(--wa-color-brand-on-loud));
    font-size: max(var(--wa-font-size-3xs), 0.75em);
    font-weight: var(--wa-font-weight-semibold);
    line-height: 1;
    vertical-align: middle;
    white-space: nowrap;
    background-color: var(--wa-color-fill-loud, var(--wa-color-brand-fill-loud));
    border-color: transparent;
    border-radius: var(--wa-border-radius-s);
    border-style: var(--wa-border-style);
    border-width: var(--wa-border-width-s);
    user-select: none;
    -webkit-user-select: none;
    cursor: inherit;

    min-width: 1.25em; /* <-- this is what Safari respects for intrinsic */
    min-height: 1em;
  }

  /* Appearance modifiers */
  :host([appearance='outlined']) {
    --pulse-color: var(--wa-color-border-loud, var(--wa-color-brand-border-loud));

    color: var(--wa-color-on-quiet, var(--wa-color-brand-on-quiet));
    background-color: transparent;
    border-color: var(--wa-color-border-loud, var(--wa-color-brand-border-loud));
  }

  :host([appearance='filled']) {
    --pulse-color: var(--wa-color-fill-normal, var(--wa-color-brand-fill-normal));

    color: var(--wa-color-on-normal, var(--wa-color-brand-on-normal));
    background-color: var(--wa-color-fill-normal, var(--wa-color-brand-fill-normal));
    border-color: transparent;
  }

  :host([appearance='filled-outlined']) {
    --pulse-color: var(--wa-color-border-normal, var(--wa-color-brand-border-normal));

    color: var(--wa-color-on-normal, var(--wa-color-brand-on-normal));
    background-color: var(--wa-color-fill-normal, var(--wa-color-brand-fill-normal));
    border-color: var(--wa-color-border-normal, var(--wa-color-brand-border-normal));
  }

  :host([appearance='accent']) {
    --pulse-color: var(--wa-color-fill-loud, var(--wa-color-brand-fill-loud));

    color: var(--wa-color-on-loud, var(--wa-color-brand-on-loud));
    background-color: var(--wa-color-fill-loud, var(--wa-color-brand-fill-loud));
    border-color: transparent;
  }

  /* Pill modifier */
  :host([pill]) {
    border-radius: var(--wa-border-radius-pill);
  }

  /* Pulse attention */
  :host([attention='pulse']) {
    animation: pulse 1.5s infinite;
  }

  @keyframes pulse {
    0% {
      box-shadow: 0 0 0 0 var(--pulse-color);
    }
    70% {
      box-shadow: 0 0 0 0.5rem transparent;
    }
    100% {
      box-shadow: 0 0 0 0 transparent;
    }
  }

  /* Bounce attention */
  :host([attention='bounce']) {
    animation: bounce 1s cubic-bezier(0.28, 0.84, 0.42, 1) infinite;
  }

  @keyframes bounce {
    0%,
    20%,
    50%,
    80%,
    100% {
      transform: translateY(0);
    }
    40% {
      transform: translateY(-5px);
    }
    60% {
      transform: translateY(-2px);
    }
  }

  /* Prevents vertical space when icons with vertical-align are slotted in - https://github.com/shoelace-style/webawesome/issues/2280 */
  [part='start'],
  [part='end'] {
    line-height: 0;
  }

  slot[name='start']::slotted(*) {
    margin-inline-end: 0.375em;
  }

  slot[name='end']::slotted(*) {
    margin-inline-start: 0.375em;
  }
`;/*! Copyright 2026 Fonticons, Inc. - https://webawesome.com/license */var s0=class extends L{constructor(){super(...arguments);this.variant="brand",this.appearance="accent",this.pill=!1,this.attention="none"}render(){return h`
      <span part="start">
        <slot name="start"></slot>
      </span>

      <span part="base badge" role="status">
        <slot></slot>
      </span>

      <span part="end">
        <slot name="end"></slot>
      </span>
    `}};s0.css=[Ti,en];f([t({reflect:!0})],s0.prototype,"variant",2);f([t({reflect:!0})],s0.prototype,"appearance",2);f([t({type:Boolean,reflect:!0})],s0.prototype,"pill",2);f([t({reflect:!0})],s0.prototype,"attention",2);s0=f([$("wa-badge")],s0);/*! Copyright 2026 Fonticons, Inc. - https://webawesome.com/license *//*! Copyright 2026 Fonticons, Inc. - https://webawesome.com/license */var of=F`
  .breadcrumb {
    display: flex;
    align-items: center;
    flex-wrap: wrap;
  }
`;/*! Copyright 2026 Fonticons, Inc. - https://webawesome.com/license */var O0=class extends L{constructor(){super(...arguments);this.localize=new B(this),this.separatorDir=this.localize.dir(),this.label=""}getSeparator(){let i=this.separatorSlot.assignedElements({flatten:!0})[0].cloneNode(!0);return[i,...i.querySelectorAll("[id]")].forEach((r)=>r.removeAttribute("id")),i.setAttribute("data-default",""),i.slot="separator",i}handleSlotChange(){let o=[...this.defaultSlot.assignedElements({flatten:!0})].filter((i)=>i.tagName.toLowerCase()==="wa-breadcrumb-item");o.forEach((i,r)=>{let a=i.querySelector('[slot="separator"]');if(a===null)i.append(this.getSeparator());else if(a.hasAttribute("data-default"))a.replaceWith(this.getSeparator());if(r===o.length-1)i.setAttribute("aria-current","page");else i.removeAttribute("aria-current")})}render(){if(this.separatorDir!==this.localize.dir())this.separatorDir=this.localize.dir(),this.updateComplete.then(()=>this.handleSlotChange());return h`
      <nav part="base breadcrumb" class="breadcrumb" aria-label=${this.label}>
        <slot @slotchange=${this.handleSlotChange}></slot>
      </nav>

      <span hidden aria-hidden="true">
        <slot name="separator">
          <wa-icon
            name=${this.localize.dir()==="rtl"?"chevron-left":"chevron-right"}
            library="system"
            variant="solid"
          ></wa-icon>
        </slot>
      </span>
    `}};O0.css=of;f([Y("slot")],O0.prototype,"defaultSlot",2);f([Y('slot[name="separator"]')],O0.prototype,"separatorSlot",2);f([t()],O0.prototype,"label",2);O0=f([$("wa-breadcrumb")],O0);/*! Copyright 2026 Fonticons, Inc. - https://webawesome.com/license *//*! Copyright 2026 Fonticons, Inc. - https://webawesome.com/license */var rf=F`
  :host {
    color: var(--wa-color-text-link);
    display: inline-flex;
    align-items: center;
    font: inherit;
    font-weight: var(--wa-font-weight-action);
    line-height: var(--wa-line-height-normal);
    white-space: nowrap;
  }

  :host(:last-of-type) {
    color: var(--wa-color-text-quiet);
  }

  .label {
    display: inline-block;
    font: inherit;
    text-decoration: none;
    color: currentColor;
    background: none;
    border: none;
    border-radius: var(--wa-border-radius-m);
    padding: 0;
    margin: 0;
    cursor: pointer;
    transition: color var(--wa-transition-normal) var(--wa-transition-easing);
  }

  @media (hover: hover) {
    :host(:not(:last-of-type)) .label:hover {
      color: color-mix(in oklab, currentColor, var(--wa-color-mix-hover));
    }
  }

  :host(:not(:last-of-type)) .label:active {
    color: color-mix(in oklab, currentColor, var(--wa-color-mix-active));
  }

  .label:focus {
    outline: none;
  }

  .label:focus-visible {
    outline: var(--wa-focus-ring);
    outline-offset: var(--wa-focus-ring-offset);
  }

  .start,
  .end {
    display: none;
    flex: 0 0 auto;
    display: flex;
    align-items: center;
  }

  .start,
  .end {
    display: inline-flex;
    color: var(--wa-color-text-quiet);
  }

  ::slotted([slot='start']) {
    margin-inline-end: var(--wa-space-s);
  }

  ::slotted([slot='end']) {
    margin-inline-start: var(--wa-space-s);
  }

  :host(:last-of-type) .separator {
    display: none;
  }

  .separator {
    color: var(--wa-color-text-quiet);
    display: inline-flex;
    align-items: center;
    margin: 0 var(--wa-space-s);
    user-select: none;
    -webkit-user-select: none;
  }
`;var Q=(o)=>o??wo;/*! Copyright 2026 Fonticons, Inc. - https://webawesome.com/license */var ji=class extends L{constructor(){super(...arguments);this.renderType="button",this.rel="noreferrer noopener"}setRenderType(){let o=this.defaultSlot.assignedElements({flatten:!0}).filter((i)=>i.tagName.toLowerCase()==="wa-dropdown").length>0;if(typeof this.href==="string"){this.renderType="link";return}if(o){this.renderType="dropdown";return}this.renderType="button"}hrefChanged(){this.setRenderType()}handleSlotChange(){this.setRenderType()}render(){return h`
      <span part="start" class="start">
        <slot name="start"></slot>
      </span>

      ${this.renderType==="link"?h`
            <a
              part="label"
              class="label label-link"
              href="${this.href}"
              target="${Q(this.target?this.target:void 0)}"
              rel=${Q(this.target?this.rel:void 0)}
            >
              <slot></slot>
            </a>
          `:""}
      ${this.renderType==="button"?h`
            <button part="label" type="button" class="label label-button">
              <slot @slotchange=${this.handleSlotChange}></slot>
            </button>
          `:""}
      ${this.renderType==="dropdown"?h`
            <div part="label" class="label label-dropdown">
              <slot @slotchange=${this.handleSlotChange}></slot>
            </div>
          `:""}

      <span part="end" class="end">
        <slot name="end"></slot>
      </span>

      <span part="separator" class="separator" aria-hidden="true">
        <slot name="separator"></slot>
      </span>
    `}};ji.css=rf;f([Y("slot:not([name])")],ji.prototype,"defaultSlot",2);f([J()],ji.prototype,"renderType",2);f([t()],ji.prototype,"href",2);f([t()],ji.prototype,"target",2);f([t()],ji.prototype,"rel",2);f([v("href",{waitUntilFirstUpdate:!0})],ji.prototype,"hrefChanged",1);ji=f([$("wa-breadcrumb-item")],ji);/*! Copyright 2026 Fonticons, Inc. - https://webawesome.com/license *//*! Copyright 2026 Fonticons, Inc. - https://webawesome.com/license */var Wo=()=>{return{checkValidity(o){let i=o.input,r={message:"",isValid:!0,invalidKeys:[]};if(!i)return r;let a=!0;if("checkValidity"in i)a=i.checkValidity();if(a)return r;if(r.isValid=!1,"validationMessage"in i)r.message=i.validationMessage;if(!("validity"in i))return r.invalidKeys.push("customError"),r;for(let n in i.validity){if(n==="valid")continue;let w=n;if(i.validity[w])r.invalidKeys.push(w)}return r}}};/*! Copyright 2026 Fonticons, Inc. - https://webawesome.com/license */var fr=class extends Event{constructor(){super("wa-invalid",{bubbles:!0,cancelable:!1,composed:!0})}};/*! Copyright 2026 Fonticons, Inc. - https://webawesome.com/license */var Pb=()=>{return{observedAttributes:["custom-error"],checkValidity(o){let i={message:"",isValid:!0,invalidKeys:[]};if(o.customError)i.message=o.customError,i.isValid=!1,i.invalidKeys=["customError"];return i}}},E=class extends L{constructor(){super();if(this.name=null,this.disabled=!1,this.required=!1,this.assumeInteractionOn=["input"],this.validators=[],this.valueHasChanged=!1,this.hasInteracted=!1,this.customError=null,this.emittedEvents=[],this.emitInvalid=(o)=>{if(o.target!==this)return;this.hasInteracted=!0,this.dispatchEvent(new fr)},this.handleInteraction=(o)=>{let i=this.emittedEvents;if(!i.includes(o.type))i.push(o.type);if(i.length===this.assumeInteractionOn?.length)this.hasInteracted=!0},"addEventListener"in this)this.addEventListener("invalid",this.emitInvalid)}static get validators(){return M?[]:[Pb()]}static get observedAttributes(){let o=new Set(super.observedAttributes||[]);for(let i of this.validators){if(!i.observedAttributes)continue;for(let r of i.observedAttributes)o.add(r)}return[...o]}connectedCallback(){if(super.connectedCallback(),this.didSSR&&!this.hasUpdated)this.updateComplete.then(()=>{this.updateValidity()});else this.updateValidity();this.assumeInteractionOn.forEach((o)=>{this.addEventListener?.(o,this.handleInteraction)})}firstUpdated(...o){super.firstUpdated(...o),this.updateValidity()}willUpdate(o){if(!M&&o.has("customError")){if(!this.customError)this.customError=null;this.setCustomValidity(this.customError||"")}if(o.has("value")||o.has("disabled")||o.has("defaultValue")){let i=this.value;this.updateFormValue(i)}if(o.has("disabled")){if(this.customStates.set("disabled",this.disabled),this.hasAttribute("disabled")||!M&&!this.matches(":disabled"))this.toggleAttribute("disabled",this.disabled)}if(super.willUpdate(o),this.didSSR&&!this.hasUpdated)this.updateComplete.then(()=>this.updateValidity());else this.updateValidity()}updateFormValue(o){if(Array.isArray(o)){if(this.name){let i=new FormData;for(let r of o)i.append(this.name,r);this.setValue(i,i)}}else this.setValue(o,o)}get labels(){return this.internals.labels}getForm(){return this.internals.form}set form(o){if(o)this.setAttribute("form",o);else this.removeAttribute("form")}get form(){return this.internals.form}get validity(){return this.internals.validity}get willValidate(){return this.internals.willValidate}get validationMessage(){return this.internals.validationMessage}checkValidity(){return this.updateValidity(),this.internals.checkValidity()}reportValidity(){return this.updateValidity(),this.hasInteracted=!0,this.internals.reportValidity()}get validationTarget(){return this.input||void 0}setValidity(...o){let i=o[0],r=o[1],a=o[2];if(!a)a=this.validationTarget;this.internals.setValidity(i,r,a||void 0),this.requestUpdate("validity"),this.setCustomStates()}setCustomStates(){let o=Boolean(this.required),i=this.internals.validity.valid,r=this.hasInteracted;this.customStates.set("required",o),this.customStates.set("optional",!o),this.customStates.set("invalid",!i),this.customStates.set("valid",i),this.customStates.set("user-invalid",!i&&r),this.customStates.set("user-valid",i&&r)}setCustomValidity(o){if(!o){this.customError=null,this.setValidity({});return}this.customError=o,this.setValidity({customError:!0},o,this.validationTarget)}formResetCallback(){this.resetValidity(),this.hasInteracted=!1,this.valueHasChanged=!1,this.emittedEvents=[],this.updateValidity()}formDisabledCallback(o){this.disabled=o,this.updateValidity()}formStateRestoreCallback(o,i){if(this.didSSR&&!this.hasUpdated)this.updateComplete.then(()=>{if(this.value=o,i==="restore")this.resetValidity();this.updateValidity()});else{if(this.value=o,i==="restore")this.resetValidity();this.updateValidity()}}setValue(...o){let[i,r]=o;this.internals.setFormValue(i,r)}get allValidators(){let o=this.constructor.validators||[],i=this.validators||[];return[...o,...i]}resetValidity(){this.setCustomValidity(""),this.setValidity({})}updateValidity(){if(this.disabled||this.hasAttribute("disabled")||!this.willValidate){this.resetValidity();return}let o=this.allValidators;if(!o?.length)return;let i={customError:Boolean(this.customError)},r=this.validationTarget||this.input||void 0,a="";for(let n of o){let{isValid:w,message:b,invalidKeys:c}=n.checkValidity(this);if(w)continue;if(!a)a=b;if(c?.length>=0)c.forEach((m)=>i[m]=!0)}if(!a)a=this.validationMessage;this.setValidity(i,a,r)}};E.formAssociated=!0;f([t({reflect:!0})],E.prototype,"name",2);f([t({type:Boolean})],E.prototype,"disabled",2);f([t({state:!0,attribute:!1})],E.prototype,"valueHasChanged",2);f([t({state:!0,attribute:!1})],E.prototype,"hasInteracted",2);f([t({attribute:"custom-error",reflect:!0})],E.prototype,"customError",2);f([t({attribute:!1,state:!0,type:Object})],E.prototype,"validity",1);/*! Copyright 2026 Fonticons, Inc. - https://webawesome.com/license */var af={small:"s",medium:"m",large:"l"},nf=new Set;function j(o,i){if(i in af&&!nf.has(`${o}:${i}`))nf.add(`${o}:${i}`),console.warn(`[${o}] size="${i}" is deprecated. Use size="${af[i]}" instead. The long-form value will be removed in the next major version.`)}/*! Copyright 2026 Fonticons, Inc. - https://webawesome.com/license */var W=class{constructor(o,...i){this.slotNames=[],this.handleSlotChange=(r)=>{let a=r.target;if(this.slotNames.includes("[default]")&&!a.name||a.name&&this.slotNames.includes(a.name))this.host.requestUpdate()},(this.host=o).addController(this),this.slotNames=i}hasDefaultSlot(){if(!this.host.childNodes)return!1;return[...this.host.childNodes].some((o)=>{if(o.nodeType===Node.TEXT_NODE&&o.textContent.trim()!=="")return!0;if(o.nodeType===Node.ELEMENT_NODE){let i=o;if(i.tagName.toLowerCase()==="wa-visually-hidden")return!1;if(!i.hasAttribute("slot"))return!0}return!1})}hasNamedSlot(o){return this.host.querySelector?.(`:scope > [slot="${o}"]`)!==null}test(o,i){if(i&&this.host.didSSR&&!this.host.hasUpdated)return Boolean(this.host[i]);return o==="[default]"?this.hasDefaultSlot():this.hasNamedSlot(o)}hostConnected(){let o=this.host.shadowRoot;if(o&&"addEventListener"in o)o.addEventListener("slotchange",this.handleSlotChange)}hostDisconnected(){let o=this.host.shadowRoot;if(o&&"removeEventListener"in o)o.removeEventListener("slotchange",this.handleSlotChange)}};/*! Copyright 2026 Fonticons, Inc. - https://webawesome.com/license */var I=F`
  :host([size='xs']) {
    font-size: var(--wa-font-size-xs);
  }

  :host([size='s']),
  :host([size='small']) {
    font-size: var(--wa-font-size-s);
  }

  :host([size='m']),
  :host([size='medium']) {
    font-size: var(--wa-font-size-m);
  }

  :host([size='l']),
  :host([size='large']) {
    font-size: var(--wa-font-size-l);
  }

  :host([size='xl']) {
    font-size: var(--wa-font-size-xl);
  }
`;/*! Copyright 2026 Fonticons, Inc. - https://webawesome.com/license */var ff=F`
  @layer wa-component {
    :host {
      display: inline-block;

      /* Workaround because Chrome doesn't like :host(:has()) below
       * https://issues.chromium.org/issues/40062355
       * Firefox doesn't like this nested rule, so both are needed */
      &:has(wa-badge) {
        position: relative;
      }
    }

    /* Apply relative positioning only when needed to position wa-badge
     * This avoids creating a new stacking context for every button */
    :host(:has(wa-badge)) {
      position: relative;
    }
  }

  .button {
    display: inline-flex;
    align-items: center;
    justify-content: center;
    text-decoration: none;
    user-select: none;
    -webkit-user-select: none;
    white-space: nowrap;
    vertical-align: middle;
    transition-property: background, border, box-shadow, color, opacity, transform;
    transition-duration: var(--wa-transition-fast);
    transition-timing-function: var(--wa-transition-easing);
    transform-origin: center;
    cursor: pointer;
    padding: 0 var(--wa-form-control-padding-inline);
    font-family: inherit;
    font-size: inherit;
    font-weight: var(--wa-font-weight-action);
    height: var(--wa-form-control-height);
    width: 100%;

    background-color: var(--wa-color-fill-loud, var(--wa-color-neutral-fill-loud));

    border-color: transparent;
    color: var(--wa-color-on-loud, var(--wa-color-neutral-on-loud));
    border-start-start-radius: var(--_button-start-start-radius, var(--wa-form-control-border-radius));
    border-start-end-radius: var(--_button-start-end-radius, var(--wa-form-control-border-radius));
    border-end-start-radius: var(--_button-end-start-radius, var(--wa-form-control-border-radius));
    border-end-end-radius: var(--_button-end-end-radius, var(--wa-form-control-border-radius));
    border-style: var(--wa-form-control-border-style);
    border-width: var(--wa-form-control-border-width);
  }

  /* Hover and active transforms */
  .button:not(.disabled):not(.loading) {
    @media (hover: hover) {
      &:hover {
        transform: var(--wa-button-transform-hover);
      }
    }
    &:active {
      transform: var(--wa-button-transform-active);
    }

    @media (prefers-reduced-motion: reduce) {
      &:hover,
      &:active {
        transform: none;
      }
    }
  }

  /* Appearance modifiers */
  :host([appearance='plain']) {
    /* Indentation overrides for grouping */
    margin-inline-start: var(--_button-horizontal-indent);
    margin-block-start: var(--_button-vertical-indent);

    .button {
      color: var(--wa-color-on-quiet, var(--wa-color-neutral-on-quiet));
      background-color: transparent;
      border-color: transparent;
    }
    @media (hover: hover) {
      .button:not(.disabled):not(.loading):hover {
        color: var(--wa-color-on-quiet, var(--wa-color-neutral-on-quiet));
        background-color: var(--wa-color-fill-quiet, var(--wa-color-neutral-fill-quiet));
      }
    }
    .button:not(.disabled):not(.loading):active {
      color: var(--wa-color-on-quiet, var(--wa-color-neutral-on-quiet));
      background-color: color-mix(
        in oklab,
        var(--wa-color-fill-quiet, var(--wa-color-neutral-fill-quiet)),
        var(--wa-color-mix-active)
      );
    }
  }

  :host([appearance='outlined']) {
    /* Indentation overrides for grouping outlined */
    margin-inline-start: var(--_button-horizontal-indent-outlined);
    margin-block-start: var(--_button-vertical-indent-outlined);

    .button {
      color: var(--wa-color-on-quiet, var(--wa-color-neutral-on-quiet));
      background-color: transparent;
      border-color: var(--wa-color-border-loud, var(--wa-color-neutral-border-loud));
    }
    @media (hover: hover) {
      .button:not(.disabled):not(.loading):hover {
        color: var(--wa-color-on-quiet, var(--wa-color-neutral-on-quiet));
        background-color: var(--wa-color-fill-quiet, var(--wa-color-neutral-fill-quiet));
      }
    }
    .button:not(.disabled):not(.loading):active {
      color: var(--wa-color-on-quiet, var(--wa-color-neutral-on-quiet));
      background-color: color-mix(
        in oklab,
        var(--wa-color-fill-quiet, var(--wa-color-neutral-fill-quiet)),
        var(--wa-color-mix-active)
      );
    }
  }

  :host([appearance='filled']) {
    /* Indentation overrides for grouping */
    margin-inline-start: var(--_button-horizontal-indent);
    margin-block-start: var(--_button-vertical-indent);

    .button {
      color: var(--wa-color-on-normal, var(--wa-color-neutral-on-normal));
      background-color: var(--wa-color-fill-normal, var(--wa-color-neutral-fill-normal));
      border-color: transparent;
    }
    @media (hover: hover) {
      .button:not(.disabled):not(.loading):hover {
        color: var(--wa-color-on-normal, var(--wa-color-neutral-on-normal));
        background-color: color-mix(
          in oklab,
          var(--wa-color-fill-normal, var(--wa-color-neutral-fill-normal)),
          var(--wa-color-mix-hover)
        );
      }
    }
    .button:not(.disabled):not(.loading):active {
      color: var(--wa-color-on-normal, var(--wa-color-neutral-on-normal));
      background-color: color-mix(
        in oklab,
        var(--wa-color-fill-normal, var(--wa-color-neutral-fill-normal)),
        var(--wa-color-mix-active)
      );
    }
  }

  :host([appearance='filled-outlined']) {
    /* Indentation overrides for grouping outlined */
    margin-inline-start: var(--_button-horizontal-indent-outlined);
    margin-block-start: var(--_button-vertical-indent-outlined);

    .button {
      color: var(--wa-color-on-normal, var(--wa-color-neutral-on-normal));
      background-color: var(--wa-color-fill-normal, var(--wa-color-neutral-fill-normal));
      border-color: var(--wa-color-border-normal, var(--wa-color-neutral-border-normal));
    }
    @media (hover: hover) {
      .button:not(.disabled):not(.loading):hover {
        color: var(--wa-color-on-normal, var(--wa-color-neutral-on-normal));
        background-color: color-mix(
          in oklab,
          var(--wa-color-fill-normal, var(--wa-color-neutral-fill-normal)),
          var(--wa-color-mix-hover)
        );
      }
    }
    .button:not(.disabled):not(.loading):active {
      color: var(--wa-color-on-normal, var(--wa-color-neutral-on-normal));
      background-color: color-mix(
        in oklab,
        var(--wa-color-fill-normal, var(--wa-color-neutral-fill-normal)),
        var(--wa-color-mix-active)
      );
    }
  }

  :host([appearance='accent']) {
    /* Indentation overrides for grouping */
    margin-inline-start: var(--_button-horizontal-indent);
    margin-block-start: var(--_button-vertical-indent);

    .button {
      color: var(--wa-color-on-loud, var(--wa-color-neutral-on-loud));
      background-color: var(--wa-color-fill-loud, var(--wa-color-neutral-fill-loud));
      border-color: transparent;
    }
    @media (hover: hover) {
      .button:not(.disabled):not(.loading):hover {
        background-color: color-mix(
          in oklab,
          var(--wa-color-fill-loud, var(--wa-color-neutral-fill-loud)),
          var(--wa-color-mix-hover)
        );
      }
    }
    .button:not(.disabled):not(.loading):active {
      background-color: color-mix(
        in oklab,
        var(--wa-color-fill-loud, var(--wa-color-neutral-fill-loud)),
        var(--wa-color-mix-active)
      );
    }
  }

  /* Focus states */
  .button:focus {
    outline: none;
  }

  .button:focus-visible {
    outline: var(--wa-focus-ring);
    outline-offset: var(--wa-focus-ring-offset);
  }

  /* Disabled state */
  :host([disabled]) {
    opacity: 0.5;
    cursor: not-allowed;

    /* When disabled, prevent mouse events from bubbling up from children */
    .button {
      pointer-events: none;
    }
  }

  /* Keep it last so Safari doesn't stop parsing this block */
  .button::-moz-focus-inner {
    border: 0;
  }

  /* Icon buttons */
  .button.is-icon-button {
    outline-offset: 2px;
    width: var(--wa-form-control-height);
    aspect-ratio: 1;
  }

  /* Icon buttons with a caret need to grow to fit both the icon and the caret */
  .button.is-icon-button.caret {
    width: auto;
    aspect-ratio: auto;
    min-width: var(--wa-form-control-height);
  }

  /* Pill modifier */
  :host([pill]) .button {
    border-start-start-radius: var(--_button-start-start-radius, var(--wa-border-radius-pill));
    border-start-end-radius: var(--_button-start-end-radius, var(--wa-border-radius-pill));
    border-end-start-radius: var(--_button-end-start-radius, var(--wa-border-radius-pill));
    border-end-end-radius: var(--_button-end-end-radius, var(--wa-border-radius-pill));
  }

  /*
   * Label
   */

  .start,
  .end {
    flex: 0 0 auto;
    display: flex;
    align-items: center;
    pointer-events: none;
  }

  .label {
    display: inline-block;
  }

  .is-icon-button .label {
    display: flex;
    justify-content: center;
  }

  .label::slotted(wa-icon) {
    align-self: center;
  }

  /*
   * Caret modifier
   */

  wa-icon[part='caret'] {
    display: flex;
    align-self: center;
    align-items: center;

    &::part(svg) {
      width: 0.875em;
      height: 0.875em;
    }

    .button:has(&) .end {
      display: none;
    }
  }

  /*
   * Loading modifier
   */

  .loading {
    position: relative;
    cursor: wait;

    .start,
    .label,
    .end,
    .caret {
      /* Hidden with opacity, not visibility, so the label stays in the accessibility tree */
      opacity: 0;

      /* Unlike visibility: hidden, opacity leaves the content clickable */
      pointer-events: none;
    }

    wa-spinner {
      --indicator-color: currentColor;
      --track-color: color-mix(in oklab, currentColor, transparent 90%);

      position: absolute;
      font-size: 1em;
      height: 1em;
      width: 1em;
      top: calc(50% - 0.5em);
      left: calc(50% - 0.5em);
    }
  }

  /*
   * Badges
   */

  .button ::slotted(wa-badge) {
    border-color: var(--wa-color-surface-default);
    position: absolute;
    inset-block-start: 0;
    inset-inline-end: 0;
    translate: 50% -50%;
    pointer-events: none;
  }

  :host(:dir(rtl)) ::slotted(wa-badge) {
    translate: -50% -50%;
  }

  /*
  * Button spacing
  */

  slot[name='start']::slotted(*) {
    margin-inline-end: 0.75em;
  }

  slot[name='end']::slotted(*),
  .button:not(.visually-hidden-label) [part='caret'] {
    margin-inline-start: 0.75em;
  }
`;var bf=Symbol.for(""),Wb=(o)=>{if(o?.r!==bf)return;return o?._$litStatic$};var _b=(o)=>{if(o._$litStatic$!==void 0)return o._$litStatic$;else throw Error(`Value passed to 'literal' function must be a 'literal' result: ${o}. Use 'unsafeStatic' to pass non-literal values, but
            take care to ensure page security.`)},G1=(o,...i)=>({["_$litStatic$"]:i.reduce((r,a,n)=>r+_b(a)+o[n+1],o[0]),r:bf}),wf=new Map,M1=(o)=>(i,...r)=>{let a=r.length,n,w,b=[],c=[],m=0,p=!1,d;while(m<a){d=i[m];while(m<a&&(w=r[m],n=Wb(w))!==void 0)d+=n+i[++m],p=!0;if(m!==a)c.push(w);b.push(d),m++}if(m===a)b.push(i[a]);if(p){let s=b.join("$$lit$$");if(i=wf.get(s),i===void 0)b.raw=b,wf.set(s,i=b);r=c}return o(i,...r)},m2=M1(h),Au=M1(Ea),Eu=M1(Da);/*! Copyright 2026 Fonticons, Inc. - https://webawesome.com/license */var io=class extends E{constructor(){super(...arguments);this.assumeInteractionOn=["click"],this.hasSlotController=new W(this,"[default]","start","end"),this.localize=new B(this),this.invalid=!1,this.isIconButton=!1,this.title="",this.variant="neutral",this.appearance="accent",this.size="m",this.withCaret=!1,this.withStart=!1,this.withEnd=!1,this.disabled=!1,this.loading=!1,this.pill=!1,this.type="button"}static get validators(){return[...super.validators,Wo()]}handleSizeChange(){j(this.localName,this.size)}constructLightDOMButton(){let o=document.createElement("button");for(let i of this.attributes){if(i.name==="style")continue;o.setAttribute(i.name,i.value)}if(o.type=this.type,o.style.position="absolute !important",o.style.width="0 !important",o.style.height="0 !important",o.style.clipPath="inset(50%) !important",o.style.overflow="hidden !important",o.style.whiteSpace="nowrap !important",this.name)o.name=this.name;return o.value=this.value||"",o}handleClick(o){if(this.disabled||this.loading){o.preventDefault(),o.stopImmediatePropagation();return}if(this.type!=="submit"&&this.type!=="reset")return;if(!this.getForm())return;let r=this.constructLightDOMButton();this.parentElement?.append(r),r.click(),r.remove()}handleInvalid(){this.dispatchEvent(new fr)}handleLabelSlotChange(){let o=this.labelSlot.assignedNodes({flatten:!0}),i=!1,r=!1,a=!1,n=!1;if([...o].forEach((w)=>{if(w.nodeType===Node.ELEMENT_NODE){let b=w;if(b.localName==="wa-icon"){if(r=!0,!i)i=b.label!==void 0}else n=!0}else if(w.nodeType===Node.TEXT_NODE){if((w.textContent?.trim()||"").length>0)a=!0}}),this.isIconButton=r&&!a&&!n,this.customStates.set("icon-button",this.isIconButton),this.isIconButton&&!i)console.warn('Icon buttons must have a label for screen readers. Add <wa-icon label="..."> to remove this warning.',this)}isButton(){return this.href?!1:!0}isLink(){return this.href?!0:!1}handleDisabledChange(){this.customStates.set("disabled",this.disabled),this.updateValidity()}handleHrefChange(){this.customStates.set("link",this.isLink())}handleLoadingChange(){this.customStates.set("loading",this.loading)}setValue(...o){}click(){this.button.click()}focus(o){this.button.focus(o)}blur(){this.button.blur()}render(){let o=this.isLink(),i=o?G1`a`:G1`button`;return m2`
      <${i}
        part="base button"
        class=${Z({button:!0,caret:this.withCaret,disabled:this.disabled,loading:this.loading,rtl:this.localize.dir()==="rtl","has-label":this.hasSlotController.test("[default]"),"has-start":this.hasSlotController.test("start","withStart"),"has-end":this.hasSlotController.test("end","withEnd"),"is-icon-button":this.isIconButton})}
        ?disabled=${Q(o?void 0:this.disabled)}
        type=${Q(o?void 0:this.type)}
        title=${this.title}
        name=${Q(o?void 0:this.name)}
        value=${Q(o?void 0:this.value)}
        href=${Q(o?this.href:void 0)}
        target=${Q(o?this.target:void 0)}
        download=${Q(o?this.download:void 0)}
        rel=${Q(o&&this.rel?this.rel:void 0)}
        role=${Q(o?void 0:"button")}
        aria-disabled=${Q(o&&this.disabled?"true":void 0)}
        aria-busy=${this.loading?"true":"false"}
        tabindex=${this.disabled?"-1":"0"}
        @invalid=${this.isButton()?this.handleInvalid:null}
        @click=${this.handleClick}
      >
        <slot name="start" part="start" class="start"></slot>
        <slot part="label" class="label" @slotchange=${this.handleLabelSlotChange}></slot>
        <slot name="end" part="end" class="end"></slot>
        ${this.withCaret?m2`
                <wa-icon part="caret" class="caret" library="system" name="chevron-down" variant="solid"></wa-icon>
              `:""}
        ${this.loading?m2`<wa-spinner part="spinner"></wa-spinner>`:""}
      </${i}>
    `}};io.shadowRootOptions={...E.shadowRootOptions,delegatesFocus:!0};io.css=[ff,Ti,I];f([Y(".button")],io.prototype,"button",2);f([Y("slot:not([name])")],io.prototype,"labelSlot",2);f([J()],io.prototype,"invalid",2);f([J()],io.prototype,"isIconButton",2);f([t()],io.prototype,"title",2);f([t({reflect:!0})],io.prototype,"variant",2);f([t({reflect:!0})],io.prototype,"appearance",2);f([t({reflect:!0})],io.prototype,"size",2);f([v("size")],io.prototype,"handleSizeChange",1);f([t({attribute:"with-caret",type:Boolean,reflect:!0})],io.prototype,"withCaret",2);f([t({attribute:"with-start",type:Boolean})],io.prototype,"withStart",2);f([t({attribute:"with-end",type:Boolean})],io.prototype,"withEnd",2);f([t({type:Boolean})],io.prototype,"disabled",2);f([t({type:Boolean,reflect:!0})],io.prototype,"loading",2);f([t({type:Boolean,reflect:!0})],io.prototype,"pill",2);f([t()],io.prototype,"type",2);f([t({reflect:!0})],io.prototype,"name",2);f([t({reflect:!0})],io.prototype,"value",2);f([t({reflect:!0})],io.prototype,"href",2);f([t()],io.prototype,"target",2);f([t()],io.prototype,"rel",2);f([t()],io.prototype,"download",2);f([t({attribute:"formaction"})],io.prototype,"formAction",2);f([t({attribute:"formenctype"})],io.prototype,"formEnctype",2);f([t({attribute:"formmethod"})],io.prototype,"formMethod",2);f([t({attribute:"formnovalidate",type:Boolean})],io.prototype,"formNoValidate",2);f([t({attribute:"formtarget"})],io.prototype,"formTarget",2);f([v("disabled",{waitUntilFirstUpdate:!0})],io.prototype,"handleDisabledChange",1);f([v("href")],io.prototype,"handleHrefChange",1);f([v("loading",{waitUntilFirstUpdate:!0})],io.prototype,"handleLoadingChange",1);io=f([$("wa-button")],io);io.disableWarning?.("change-in-update");/*! Copyright 2026 Fonticons, Inc. - https://webawesome.com/license */var tf=F`
  :host {
    --track-width: 2px;
    --track-color: var(--wa-color-neutral-fill-normal);
    --indicator-color: var(--wa-color-brand-fill-loud);
    --speed: 2s;
    --size: 1em;

    /*
      Resizing a spinner element using anything but font-size will break the animation because the animation uses em
      units. Therefore, if a spinner is used in a flex container without \`flex: none\` applied, the spinner can
      grow/shrink and break the animation. The use of \`flex: none\` on the host element prevents this by always having
      the spinner sized according to its actual dimensions.
    */
    flex: none;
    display: inline-flex;
    width: var(--size);
    height: var(--size);
  }

  svg {
    width: 100%;
    height: 100%;
    aspect-ratio: 1;
    animation: spin var(--speed) linear infinite;
  }

  .track,
  .indicator {
    --radius: calc(var(--size) / 2 - var(--track-width) / 2);
    --circumference: calc(var(--radius) * 2 * 3.141592654);

    cx: calc(var(--size) / 2);
    cy: calc(var(--size) / 2);
    r: var(--radius);
    fill: none;
    stroke-width: var(--track-width);
  }

  .track {
    stroke: var(--track-color);
  }

  .indicator {
    stroke: var(--indicator-color);
    stroke-linecap: round;
    stroke-dasharray: calc(0.597 * var(--circumference)), calc(0.796 * var(--circumference));
    stroke-dashoffset: calc(-0.04 * var(--circumference));
    animation: dash 1.5s ease-in-out infinite;
  }

  @keyframes spin {
    0% {
      transform: rotate(0deg);
    }
    100% {
      transform: rotate(360deg);
    }
  }

  @keyframes dash {
    0% {
      stroke-dasharray: calc(0.008 * var(--circumference)), calc(1.194 * var(--circumference));
      stroke-dashoffset: 0;
    }
    50% {
      stroke-dasharray: calc(0.716 * var(--circumference)), calc(1.194 * var(--circumference));
      stroke-dashoffset: calc(-0.278 * var(--circumference));
    }
    100% {
      stroke-dasharray: calc(0.716 * var(--circumference)), calc(1.194 * var(--circumference));
      stroke-dashoffset: calc(-0.987 * var(--circumference));
    }
  }
`;/*! Copyright 2026 Fonticons, Inc. - https://webawesome.com/license */var p2=class extends L{constructor(){super(...arguments);this.localize=new B(this)}render(){return h`
      <svg
        part="base spinner"
        role="progressbar"
        aria-label=${this.localize.term("loading")}
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
      >
        <circle class="track" />
        <circle class="indicator" />
      </svg>
    `}};p2.css=tf;p2=f([$("wa-spinner")],p2);/*! Copyright 2026 Fonticons, Inc. - https://webawesome.com/license *//*! Copyright 2026 Fonticons, Inc. - https://webawesome.com/license */var cf=F`
  :host {
    display: inline-flex;
  }

  .button-group {
    display: flex;
    position: relative;
    isolation: isolate;
    flex-wrap: wrap;

    @media (hover: hover) {
      > :hover,
      &::slotted(:hover) {
        z-index: 1;
      }
    }

    /* Focus and checked are always on top */
    > :focus,
    &::slotted(:focus),
    > [aria-checked='true'],
    &::slotted([aria-checked='true']),
    > [checked],
    &::slotted([checked]) {
      z-index: 2 !important;
    }

    :host([orientation='horizontal']) & {
      flex-direction: row;
    }

    :host([orientation='vertical']) & {
      flex-direction: column;
    }
  }

  /* Set custom properties to be inherited by slotted buttons */
  :host([orientation='horizontal']) {
    --_button-horizontal-indent: var(--wa-form-control-border-width);
    --_button-horizontal-indent-outlined: calc(var(--wa-form-control-border-width) * -1);

    ::slotted(:first-child) {
      --_button-horizontal-indent: 0;
      --_button-horizontal-indent-outlined: 0;
    }
  }

  :host([orientation='vertical']) {
    --_button-vertical-indent: var(--wa-form-control-border-width);
    --_button-vertical-indent-outlined: calc(var(--wa-form-control-border-width) * -1);

    ::slotted(:first-child) {
      --_button-vertical-indent: 0;
      --_button-vertical-indent-outlined: 0;
    }
  }

  /* All buttons that are not in front or at the end get their border radius removed */
  ::slotted(:not(:first-child):not(:last-child)) {
    --_button-start-start-radius: 0;
    --_button-start-end-radius: 0;
    --_button-end-start-radius: 0;
    --_button-end-end-radius: 0;
  }

  /* Remove leading and trailing buttons border radius individually */
  :host([orientation='horizontal']) {
    ::slotted(:first-child:not(:last-child)) {
      --_button-start-end-radius: 0;
      --_button-end-end-radius: 0;
    }

    ::slotted(:last-child:not(:first-child)) {
      --_button-start-start-radius: 0;
      --_button-end-start-radius: 0;
    }
  }

  :host([orientation='vertical']) {
    ::slotted(:first-child:not(:last-child)) {
      --_button-end-start-radius: 0;
      --_button-end-end-radius: 0;
    }

    ::slotted(:last-child:not(:first-child)) {
      --_button-start-start-radius: 0;
      --_button-start-end-radius: 0;
    }
  }
`;/*! Copyright 2026 Fonticons, Inc. - https://webawesome.com/license */var b0=class extends L{constructor(){super(...arguments);this.disableRole=!1,this.hasOutlined=!1,this.label="",this.orientation="horizontal"}updated(o){if(super.updated(o),o.has("orientation"))this.setAttribute("aria-orientation",this.orientation)}handleFocus(o){h2(o.target)?.classList.add("button-focus")}handleBlur(o){h2(o.target)?.classList.remove("button-focus")}handleMouseOver(o){h2(o.target)?.classList.add("button-hover")}handleMouseOut(o){h2(o.target)?.classList.remove("button-hover")}render(){return h`
      <slot
        part="base"
        class="button-group"
        role="${this.disableRole?"presentation":"group"}"
        aria-label=${this.label}
        aria-orientation=${this.orientation}
        @focusout=${this.handleBlur}
        @focusin=${this.handleFocus}
        @mouseover=${this.handleMouseOver}
        @mouseout=${this.handleMouseOut}
      ></slot>
    `}};b0.css=[cf];f([Y("slot")],b0.prototype,"defaultSlot",2);f([J()],b0.prototype,"disableRole",2);f([J()],b0.prototype,"hasOutlined",2);f([t()],b0.prototype,"label",2);f([t({reflect:!0})],b0.prototype,"orientation",2);b0=f([$("wa-button-group")],b0);function h2(o){return o.closest("wa-button, wa-radio-button")??o.querySelector("wa-button, wa-radio-button")}/*! Copyright 2026 Fonticons, Inc. - https://webawesome.com/license *//*! Copyright 2026 Fonticons, Inc. - https://webawesome.com/license */var mf=F`
  :host {
    display: flex;
    position: relative;
    align-items: stretch;
    border-radius: var(--wa-panel-border-radius);
    background-color: var(--wa-color-fill-quiet, var(--wa-color-brand-fill-quiet));
    border-color: var(--wa-color-border-quiet, var(--wa-color-brand-border-quiet));
    border-style: var(--wa-panel-border-style);
    border-width: var(--wa-panel-border-width);
    color: var(--wa-color-text-normal);
    padding: 1em;
  }

  /* Appearance modifiers */
  :host([appearance~='plain']) {
    background-color: transparent;
    border-color: transparent;
  }

  :host([appearance~='outlined']) {
    background-color: transparent;
    border-color: var(--wa-color-border-loud, var(--wa-color-brand-border-loud));
  }

  :host([appearance~='filled']) {
    background-color: var(--wa-color-fill-quiet, var(--wa-color-brand-fill-quiet));
    border-color: transparent;
  }

  :host([appearance~='filled-outlined']) {
    border-color: var(--wa-color-border-quiet, var(--wa-color-brand-border-quiet));
  }

  :host([appearance~='accent']) {
    color: var(--wa-color-on-loud, var(--wa-color-brand-on-loud));
    background-color: var(--wa-color-fill-loud, var(--wa-color-brand-fill-loud));
    border-color: transparent;

    [part~='icon'] {
      color: currentColor;
    }
  }

  [part~='icon'] {
    flex: 0 0 auto;
    display: flex;
    align-items: center;
    color: var(--wa-color-on-quiet);
    font-size: 1.25em;
  }

  ::slotted([slot='icon']) {
    margin-inline-end: var(--wa-form-control-padding-inline);
  }

  [part~='message'] {
    flex: 1 1 auto;
    display: block;
    overflow: hidden;
  }
`;/*! Copyright 2026 Fonticons, Inc. - https://webawesome.com/license */var u0=class extends L{constructor(){super(...arguments);this.variant="brand",this.size="m"}handleSizeChange(){j(this.localName,this.size)}render(){return h`
      <div part="icon">
        <slot name="icon"></slot>
      </div>

      <div part="message">
        <slot></slot>
      </div>
    `}};u0.css=[mf,Ti,I];f([t({reflect:!0})],u0.prototype,"variant",2);f([t({reflect:!0})],u0.prototype,"appearance",2);f([t({reflect:!0})],u0.prototype,"size",2);f([v("size")],u0.prototype,"handleSizeChange",1);u0=f([$("wa-callout")],u0);/*! Copyright 2026 Fonticons, Inc. - https://webawesome.com/license *//*! Copyright 2026 Fonticons, Inc. - https://webawesome.com/license */var pf=F`
  :host {
    --spacing: var(--wa-space-l);

    /* Internal calculated properties */
    --inner-border-radius: calc(var(--wa-panel-border-radius) - var(--wa-panel-border-width));

    display: flex;
    flex-direction: column;
    background-color: var(--wa-color-surface-default);
    border-color: var(--wa-color-surface-border);
    border-radius: var(--wa-panel-border-radius);
    border-style: var(--wa-panel-border-style);
    box-shadow: var(--wa-shadow-s);
    border-width: var(--wa-panel-border-width);
    color: var(--wa-color-text-normal);
  }

  /* Appearance modifiers */
  :host([appearance='plain']) {
    background-color: transparent;
    border-color: transparent;
    box-shadow: none;
  }

  :host([appearance='outlined']) {
    background-color: var(--wa-color-surface-default);
    border-color: var(--wa-color-surface-border);
  }

  :host([appearance='filled']) {
    background-color: var(--wa-color-neutral-fill-quiet);
    border-color: transparent;
  }

  :host([appearance='filled-outlined']) {
    background-color: var(--wa-color-neutral-fill-quiet);
    border-color: var(--wa-color-surface-border);
  }

  :host([appearance='accent']) {
    color: var(--wa-color-neutral-on-loud);
    background-color: var(--wa-color-neutral-fill-loud);
    border-color: transparent;
  }

  /* Take care of top and bottom radii */
  .media,
  :host(:not([with-media])) .header,
  :host(:not([with-media], [with-header])) .body {
    border-start-start-radius: var(--inner-border-radius);
    border-start-end-radius: var(--inner-border-radius);
  }

  :host(:not([with-footer])) .body,
  .footer {
    border-end-start-radius: var(--inner-border-radius);
    border-end-end-radius: var(--inner-border-radius);
  }

  .media {
    display: flex;
    overflow: hidden;

    &::slotted(*) {
      display: block;
      width: 100%;
      border-radius: 0 !important;
    }
  }

  /* Round all corners for plain appearance */
  :host([appearance='plain']) .media {
    border-radius: var(--inner-border-radius);

    &::slotted(*) {
      border-radius: inherit !important;
    }
  }

  .header {
    display: block;
    border-block-end-style: inherit;
    border-block-end-color: var(--wa-color-surface-border);
    border-block-end-width: var(--wa-panel-border-width);
    padding: calc(var(--spacing) / 2) var(--spacing);
  }

  .body {
    display: block;
    padding: var(--spacing);
  }

  .footer {
    display: block;
    border-block-start-style: inherit;
    border-block-start-color: var(--wa-color-surface-border);
    border-block-start-width: var(--wa-panel-border-width);
    padding: var(--spacing);
  }

  /* Push slots to sides when the action slots renders */
  .has-actions {
    display: flex;
    align-items: center;
    justify-content: space-between;
  }

  :host(:not([with-header])) .header,
  :host(:not([with-footer])) .footer,
  :host(:not([with-media])) .media {
    display: none;
  }

  /* Orientation Styles */
  :host([orientation='horizontal']) {
    flex-direction: row;

    .media {
      border-start-start-radius: var(--inner-border-radius);
      border-end-start-radius: var(--inner-border-radius);
      border-start-end-radius: 0;

      &::slotted(*) {
        block-size: 100%;
        inline-size: 100%;
        object-fit: cover;
      }
    }
  }

  :host([orientation='horizontal']) .body slot::slotted(*) {
    display: block;
    height: 100%;
    margin: 0;
  }

  :host([orientation='horizontal']) slot[name='actions']::slotted(*) {
    display: flex;
    align-items: center;
    padding: var(--spacing);
  }
`;/*! Copyright 2026 Fonticons, Inc. - https://webawesome.com/license */var qi=class extends L{constructor(){super(...arguments);this.hasSlotController=new W(this,"footer","header","media","header-actions","footer-actions","actions"),this.appearance="outlined",this.withHeader=!1,this.withMedia=!1,this.withFooter=!1,this.withHeaderActions=!1,this.withFooterActions=!1,this.orientation="vertical"}willUpdate(o){this.withHeader=this.hasSlotController.test("header","withHeader"),this.withMedia=this.hasSlotController.test("media","withMedia"),this.withFooter=this.hasSlotController.test("footer","withFooter"),super.willUpdate(o)}render(){if(this.orientation==="horizontal")return h`
        <slot name="media" part="media" class="media"></slot>
        <div part="body" class="body"><slot></slot></div>
        <slot name="actions" part="actions" class="actions"></slot>
      `;let o=this.hasSlotController.test("header-actions","withHeaderActions"),i=this.hasSlotController.test("footer-actions","withFooterActions");return h`
      <slot name="media" part="media" class="media"></slot>

      <div
        part="header"
        class=${Z({header:!0,"has-actions":o})}
      >
        <slot name="header"></slot>
        <slot name="header-actions"></slot>
      </div>

      <div part="body" class="body"><slot></slot></div>

      <div
        part="footer"
        class=${Z({footer:!0,"has-actions":i})}
      >
        <slot name="footer"></slot>
        <slot name="footer-actions"></slot>
      </div>
    `}};qi.css=[I,pf];f([t({reflect:!0})],qi.prototype,"appearance",2);f([t({attribute:"with-header",type:Boolean,reflect:!0})],qi.prototype,"withHeader",2);f([t({attribute:"with-media",type:Boolean,reflect:!0})],qi.prototype,"withMedia",2);f([t({attribute:"with-footer",type:Boolean,reflect:!0})],qi.prototype,"withFooter",2);f([t({attribute:"with-header-actions",type:Boolean,reflect:!0})],qi.prototype,"withHeaderActions",2);f([t({attribute:"with-footer-actions",type:Boolean,reflect:!0})],qi.prototype,"withFooterActions",2);f([t({reflect:!0})],qi.prototype,"orientation",2);qi=f([$("wa-card")],qi);qi.disableWarning?.("change-in-update");/*! Copyright 2026 Fonticons, Inc. - https://webawesome.com/license *//*! Copyright 2026 Fonticons, Inc. - https://webawesome.com/license */var hf=class extends Event{constructor(o){super("wa-slide-change",{bubbles:!0,cancelable:!1,composed:!0});this.detail=o}};var df="useandom-26T198340PX75pxJACKVERYMINDBUSHWOLF_GQZbfghjklqvwyzrict";var gf=(o=21)=>{let i="",r=crypto.getRandomValues(new Uint8Array(o|=0));while(o--)i+=df[r[o]&63];return i};/*! Copyright 2026 Fonticons, Inc. - https://webawesome.com/license */function D(o,i,r){let a=(n)=>Object.is(n,-0)?0:n;if(o<i)return a(i);if(o>r)return a(r);return a(o)}function bi(o=""){return`${o}${gf()}`}/*! Copyright 2026 Fonticons, Inc. - https://webawesome.com/license */var d2=class{constructor(o,i){this.timerId=0,this.activeInteractions=0,this.paused=!1,this.stopped=!0,this.pause=()=>{if(!this.activeInteractions++)this.paused=!0,this.host.requestUpdate()},this.resume=()=>{if(!--this.activeInteractions)this.paused=!1,this.host.requestUpdate()},o.addController(this),this.host=o,this.tickCallback=i}hostConnected(){this.host.addEventListener("mouseenter",this.pause),this.host.addEventListener("mouseleave",this.resume),this.host.addEventListener("focusin",this.pause),this.host.addEventListener("focusout",this.resume),this.host.addEventListener("touchstart",this.pause,{passive:!0}),this.host.addEventListener("touchend",this.resume)}hostDisconnected(){this.stop(),this.host.removeEventListener("mouseenter",this.pause),this.host.removeEventListener("mouseleave",this.resume),this.host.removeEventListener("focusin",this.pause),this.host.removeEventListener("focusout",this.resume),this.host.removeEventListener("touchstart",this.pause),this.host.removeEventListener("touchend",this.resume)}start(o){this.stop(),this.stopped=!1,this.timerId=window.setInterval(()=>{if(!this.paused)this.tickCallback()},o)}stop(){clearInterval(this.timerId),this.stopped=!0,this.host.requestUpdate()}};/*! Copyright 2026 Fonticons, Inc. - https://webawesome.com/license */var sf=F`
  :host {
    --aspect-ratio: 16 / 9;
    --scroll-hint: 0px;
    --slide-gap: var(--wa-space-m, 1rem); /* fallback value is necessary */

    display: flex;
  }

  .carousel {
    display: grid;
    grid-template-columns: min-content 1fr min-content;
    grid-template-rows: 1fr min-content;
    grid-template-areas:
      '. slides .'
      '. pagination .';
    gap: var(--wa-space-m);
    align-items: center;
    min-height: 100%;
    min-width: 100%;
    position: relative;
  }

  .pagination {
    grid-area: pagination;
    display: flex;
    flex-wrap: wrap;
    justify-content: center;
    gap: var(--wa-space-s);
    padding-block: var(--wa-space-3xs);
  }

  .slides {
    grid-area: slides;

    display: grid;
    height: 100%;
    width: 100%;
    align-items: center;
    justify-items: center;
    overflow: auto;
    overscroll-behavior-x: contain;
    scrollbar-width: none;
    aspect-ratio: calc(var(--aspect-ratio) * var(--slides-per-page));
    border-radius: var(--wa-border-radius-m);

    --slide-size: calc((100% - (var(--slides-per-page) - 1) * var(--slide-gap)) / var(--slides-per-page));
  }

  /*
   * While a looping carousel that initialized inside a hidden container waits to scroll past its leading clones, hide
   * the slides and pagination to avoid flashing the wrong slide and active dot, then fade them in once the carousel has
   * positioned itself.
   */
  .slides,
  .pagination {
    transition: opacity var(--wa-transition-fast) ease;
  }

  .slides-awaiting-position,
  .pagination-awaiting-position {
    opacity: 0;
    transition: none;
  }

  @media (prefers-reduced-motion) {
    :where(.slides) {
      scroll-behavior: auto;
    }
  }

  .slides-horizontal {
    grid-auto-flow: column;
    grid-auto-columns: var(--slide-size);
    grid-auto-rows: 100%;
    column-gap: var(--slide-gap);
    scroll-snap-type: x mandatory;
    scroll-padding-inline: var(--scroll-hint);
    padding-inline: var(--scroll-hint);
    overflow-y: hidden;
  }

  .slides-vertical {
    grid-auto-flow: row;
    grid-auto-columns: 100%;
    grid-auto-rows: var(--slide-size);
    row-gap: var(--slide-gap);
    scroll-snap-type: y mandatory;
    scroll-padding-block: var(--scroll-hint);
    padding-block: var(--scroll-hint);
    overflow-x: hidden;
  }

  :host([vertical]) ::slotted(wa-carousel-item) {
    height: 100%;
  }

  .slides::-webkit-scrollbar {
    display: none;
  }

  .navigation {
    grid-area: navigation;
    display: contents;
    font-size: var(--wa-font-size-l);
  }

  .navigation-button {
    flex: 0 0 auto;
    display: flex;
    align-items: center;
    background: none;
    border: none;
    border-radius: var(--wa-border-radius-m);
    font-size: inherit;
    color: var(--wa-color-text-quiet);
    padding: var(--wa-space-xs);
    cursor: pointer;
    transition: var(--wa-transition-normal) color;
    appearance: none;
  }

  .navigation-button-disabled {
    opacity: 0.5;
    cursor: not-allowed;
  }

  .navigation-button-disabled::part(base) {
    pointer-events: none;
  }

  .navigation-button-previous {
    grid-column: 1;
    grid-row: 1;
  }

  .navigation-button-next {
    grid-column: 3;
    grid-row: 1;
  }

  .pagination-item {
    display: block;
    cursor: pointer;
    background: none;
    border: 0;
    border-radius: var(--wa-border-radius-circle);
    width: var(--wa-space-s);
    height: var(--wa-space-s);
    background-color: var(--wa-color-neutral-fill-normal);
    padding: 0;
    margin: 0;
    transition: transform var(--wa-transition-slow);
  }

  .pagination-item-active {
    background-color: var(--wa-form-control-activated-color);
    transform: scale(1.25);
  }

  /* Focus styles */
  .slides:focus-visible,
  .navigation-button:focus-visible,
  .pagination-item:focus-visible {
    outline: var(--wa-focus-ring);
    outline-offset: var(--wa-focus-ring-offset);
  }
`;function*uf(o,i){if(o!==void 0){let r=0;for(let a of o)yield i(a,r++)}}function*zf(o,i,r=1){let a=i===void 0?0:o;i??=o;for(let n=a;r>0?n<i:i<n;n+=r)yield n}/*! Copyright 2026 Fonticons, Inc. - https://webawesome.com/license */(()=>{if(M)return;let o=(a,n)=>{let w=0;return function(...b){window.clearTimeout(w),w=window.setTimeout(()=>{a.call(this,...b)},n)}},i=(a,n,w)=>{let b=a[n];a[n]=function(...c){b.call(this,...c),w.call(this,b,...c)}};if(!("onscrollend"in window)){let a=new Set,n=new WeakMap,w=(c)=>{a.add(c.pointerId)},b=(c)=>{a.delete(c.pointerId)};document.addEventListener("pointerdown",w),document.addEventListener("pointerup",b),i(EventTarget.prototype,"addEventListener",function(c,m){if(m!=="scroll")return;let p=o(()=>{if(!a.size)this.dispatchEvent(new Event("scrollend"));else p()},100);c.call(this,"scroll",p,{passive:!0}),n.set(this,p)}),i(EventTarget.prototype,"removeEventListener",function(c,m){if(m!=="scroll")return;let p=n.get(this);if(p)c.call(this,"scroll",p,{passive:!0})})}})();var yo=class extends L{constructor(){super(...arguments);this.loop=!1,this.slides=0,this.currentSlide=0,this.navigation=!1,this.pagination=!1,this.autoplay=!1,this.autoplayInterval=3000,this.slidesPerPage=1,this.slidesPerMove=1,this.orientation="horizontal",this.mouseDragging=!1,this.activeSlide=0,this.scrolling=!1,this.dragging=!1,this.awaitingInitialPosition=!1,this.autoplayController=new d2(this,()=>this.next()),this.dragStartPosition=[-1,-1],this.localize=new B(this),this.pendingSlideChange=!1,this.handleMouseDrag=(o)=>{if(!this.dragging)this.scrollContainer.style.setProperty("scroll-snap-type","none"),this.dragging=!0,this.dragStartPosition=[o.clientX,o.clientY];this.scrollContainer.scrollBy({left:-o.movementX,top:-o.movementY,behavior:"instant"})},this.handleMouseDragEnd=()=>{let o=this.scrollContainer;document.removeEventListener("pointermove",this.handleMouseDrag,{capture:!0});let{scrollLeft:i,scrollTop:r}=o;o.style.removeProperty("scroll-snap-type"),o.style.setProperty("overflow","hidden");let{scrollLeft:a,scrollTop:n}=o;o.style.removeProperty("overflow"),o.style.setProperty("scroll-snap-type","none"),o.scrollTo({left:i,top:r,behavior:"instant"}),requestAnimationFrame(async()=>{if(i!==a||r!==n)o.scrollTo({left:a,top:n,behavior:H0()?"auto":"smooth"}),await Yo(o,"scrollend");o.style.removeProperty("scroll-snap-type"),this.dragging=!1,this.dragStartPosition=[-1,-1],this.handleScrollEnd()})},this.handleSlotChange=(o)=>{if(o.some((r)=>[...r.addedNodes,...r.removedNodes].some((a)=>this.isCarouselItem(a)&&!a.hasAttribute("data-clone"))))this.initializeSlides();this.requestUpdate()}}connectedCallback(){if(super.connectedCallback(),!M)this.setAttribute("role","region"),this.setAttribute("aria-label",this.localize.term("carousel"))}disconnectedCallback(){super.disconnectedCallback(),this.mutationObserver?.disconnect(),this.resizeObserver?.disconnect()}firstUpdated(o){if(super.firstUpdated(o),this.initializeSlides(),this.mutationObserver=new MutationObserver(this.handleSlotChange),this.mutationObserver.observe(this,{childList:!0,subtree:!0}),this.loop&&!this.scrollContainer?.clientWidth&&!this.scrollContainer?.clientHeight)this.awaitingInitialPosition=!0;this.resizeObserver=new ResizeObserver(()=>{if(this.scrollContainer?.clientWidth||this.scrollContainer?.clientHeight){if(this.goToSlide(this.activeSlide,"auto"),this.synchronizeSlides(),this.resizeObserver?.disconnect(),this.resizeObserver=void 0,this.awaitingInitialPosition)requestAnimationFrame(()=>{requestAnimationFrame(()=>{this.awaitingInitialPosition=!1})})}}),this.resizeObserver.observe(this)}willUpdate(o){if(o.has("slidesPerMove")||o.has("slidesPerPage"))this.slidesPerMove=Math.min(this.slidesPerMove,this.slidesPerPage)}getPageCount(){let o=this.getSlides().length,{slidesPerPage:i,slidesPerMove:r,loop:a}=this,n=a?o/r:(o-i)/r+1;return Math.ceil(n)}getCurrentPage(){return Math.ceil(this.activeSlide/this.slidesPerMove)}canScrollNext(){return this.loop||this.getCurrentPage()<this.getPageCount()-1}canScrollPrev(){return this.loop||this.getCurrentPage()>0}getSlides({excludeClones:o=!0}={}){return[...this.children].filter((i)=>this.isCarouselItem(i)&&(!o||!i.hasAttribute("data-clone")))}handleClick(o){if(this.dragging&&this.dragStartPosition[0]>0&&this.dragStartPosition[1]>0){let i=Math.abs(this.dragStartPosition[0]-o.clientX),r=Math.abs(this.dragStartPosition[1]-o.clientY);if(Math.sqrt(i*i+r*r)>=10)o.preventDefault()}}handleKeyDown(o){if(["ArrowLeft","ArrowRight","ArrowUp","ArrowDown","Home","End"].includes(o.key)){let i=o.target,r=this.localize.dir()==="rtl",a=i.closest('[part~="pagination-item"]')!==null,n=o.key==="ArrowDown"||!r&&o.key==="ArrowRight"||r&&o.key==="ArrowLeft",w=o.key==="ArrowUp"||!r&&o.key==="ArrowLeft"||r&&o.key==="ArrowRight";if(o.preventDefault(),w)this.previous();if(n)this.next();if(o.key==="Home")this.goToSlide(0);if(o.key==="End")this.goToSlide(this.getSlides().length-1);if(a)this.updateComplete.then(()=>{let b=this.shadowRoot?.querySelector('[part~="pagination-item-active"]');if(b)b.focus()})}}handleMouseDragStart(o){if(this.mouseDragging&&o.button===0)o.preventDefault(),document.addEventListener("pointermove",this.handleMouseDrag,{capture:!0,passive:!0}),document.addEventListener("pointerup",this.handleMouseDragEnd,{capture:!0,once:!0})}handleScroll(){if(this.scrolling=!0,!this.pendingSlideChange)this.synchronizeSlides()}synchronizeSlides(){let o=new IntersectionObserver((i)=>{o.disconnect();for(let c of i){let m=c.target;m.toggleAttribute("inert",!c.isIntersecting),m.classList.toggle("--in-view",c.isIntersecting),m.setAttribute("aria-hidden",c.isIntersecting?"false":"true")}let r=i.find((c)=>c.isIntersecting);if(!r)return;let a=this.getSlides({excludeClones:!1}),n=this.getSlides().length,w=a.indexOf(r.target),b=this.loop?w-this.slidesPerPage:w;if(r){if(this.activeSlide=(Math.ceil(b/this.slidesPerMove)*this.slidesPerMove+n)%n,!this.scrolling&&!this.pendingSlideChange){if(this.loop&&r.target.hasAttribute("data-clone")){let c=Number(r.target.getAttribute("data-clone"));this.goToSlide(c,"instant")}}}},{root:this.scrollContainer,threshold:0.6});this.getSlides({excludeClones:!1}).forEach((i)=>{o.observe(i)})}handleScrollEnd(){if(!this.scrolling||this.dragging)return;this.synchronizeSlides(),this.scrolling=!1,this.pendingSlideChange=!1,this.synchronizeSlides()}isCarouselItem(o){return o instanceof Element&&o.tagName.toLowerCase()==="wa-carousel-item"}initializeSlides(){if(this.getSlides({excludeClones:!1}).forEach((o,i)=>{if(o.classList.remove("--in-view"),o.classList.remove("--is-active"),o.setAttribute("aria-label",this.localize.term("slideNum",i+1)),o.hasAttribute("data-clone"))o.remove()}),this.updateSlidesSnap(),this.loop)this.createClones();this.goToSlide(this.activeSlide,"auto"),this.synchronizeSlides()}createClones(){let o=this.getSlides(),i=this.slidesPerPage,r=o.slice(-i),a=o.slice(0,i);r.reverse().forEach((n,w)=>{let b=n.cloneNode(!0);b.setAttribute("data-clone",String(o.length-w-1)),this.prepend(b)}),a.forEach((n,w)=>{let b=n.cloneNode(!0);b.setAttribute("data-clone",String(w)),this.append(b)})}handleSlideChange(){let o=this.getSlides();if(o.forEach((i,r)=>{i.classList.toggle("--is-active",r===this.activeSlide)}),this.hasUpdated)this.dispatchEvent(new hf({index:this.activeSlide,slide:o[this.activeSlide]}))}updateSlidesSnap(){let o=this.getSlides(),i=this.slidesPerMove;o.forEach((r,a)=>{if((a+i)%i===0)r.style.removeProperty("scroll-snap-align");else r.style.setProperty("scroll-snap-align","none")})}handleAutoplayChange(){if(this.autoplayController.stop(),this.autoplay)this.autoplayController.start(this.autoplayInterval)}previous(o="smooth"){this.goToSlide(this.activeSlide-this.slidesPerMove,o)}next(o="smooth"){this.goToSlide(this.activeSlide+this.slidesPerMove,o)}addSlide(o){if(!this.isCarouselItem(o))throw TypeError("addSlide() expects a <wa-carousel-item>.");if(o.hasAttribute("data-clone"))throw TypeError("addSlide() cannot add a cloned carousel item.");let i=this.getSlides(),r=i[i.length-1];this.insertBefore(o,r?.nextElementSibling??null)}removeSlide(o){if(!Number.isInteger(o))return;let i=this.getSlides(),r=i[o];if(!r)return;let a=Math.max(0,i.length-2);if(o<this.activeSlide)this.activeSlide=Math.max(0,this.activeSlide-1);else if(o===this.activeSlide)this.activeSlide=D(this.activeSlide,0,a);r.remove()}goToSlide(o,i="smooth"){let{slidesPerPage:r,loop:a}=this,n=this.getSlides(),w=this.getSlides({excludeClones:!1});if(!n.length)return;let b=a?(o+n.length)%n.length:D(o,0,n.length-r);this.activeSlide=b;let c=this.localize.dir()==="rtl",m=D(o+(a?r:0)+(c?r-1:0),0,w.length-1),p=w[m];this.scrollToSlide(p,H0()?"auto":i)}scrollToSlide(o,i="smooth"){this.pendingSlideChange=!0,window.requestAnimationFrame(()=>{if(!this.scrollContainer)return;let r=this.scrollContainer,a=r.getBoundingClientRect(),n=o.getBoundingClientRect(),w=n.left-a.left,b=n.top-a.top;if(w||b)this.pendingSlideChange=!0,r.scrollTo({left:w+r.scrollLeft,top:b+r.scrollTop,behavior:i});else this.pendingSlideChange=!1})}render(){let{slidesPerMove:o,scrolling:i}=this,r=0,a=0,n=!1,w=!1;if(this.hasUpdated)r=this.getPageCount(),a=this.getCurrentPage(),n=this.canScrollPrev(),w=this.canScrollNext();let b=M?this.dir==="rtl":this.localize.dir()==="rtl";return h`
      <div part="base carousel" class="carousel">
        <div
          id="scroll-container"
          part="scroll-container"
          class="${Z({slides:!0,"slides-horizontal":this.orientation==="horizontal","slides-vertical":this.orientation==="vertical","slides-dragging":this.dragging,"slides-awaiting-position":this.awaitingInitialPosition})}"
          style=${mo({"--slides-per-page":this.slidesPerPage})}
          aria-busy="${i?"true":"false"}"
          aria-atomic="true"
          tabindex="0"
          @keydown=${this.handleKeyDown}
          @mousedown="${this.handleMouseDragStart}"
          @scroll="${this.handleScroll}"
          @scrollend=${this.handleScrollEnd}
          @click=${this.handleClick}
        >
          <slot @slotchange=${()=>this.requestUpdate()}></slot>
        </div>

        ${this.navigation?h`
              <div part="navigation" class="navigation">
                <button
                  part="navigation-button navigation-button-previous"
                  class="${Z({"navigation-button":!0,"navigation-button-previous":!0,"navigation-button-disabled":!n})}"
                  aria-label="${this.localize.term("previousSlide")}"
                  aria-controls="scroll-container"
                  aria-disabled="${n?"false":"true"}"
                  @click=${n?()=>this.previous():null}
                >
                  <slot name="previous-icon">
                    <wa-icon library="system" name="${b?"chevron-right":"chevron-left"}"></wa-icon>
                  </slot>
                </button>

                <button
                  part="navigation-button navigation-button-next"
                  class=${Z({"navigation-button":!0,"navigation-button-next":!0,"navigation-button-disabled":!w})}
                  aria-label="${this.localize.term("nextSlide")}"
                  aria-controls="scroll-container"
                  aria-disabled="${w?"false":"true"}"
                  @click=${w?()=>this.next():null}
                >
                  <slot name="next-icon">
                    <wa-icon library="system" name="${b?"chevron-left":"chevron-right"}"></wa-icon>
                  </slot>
                </button>
              </div>
            `:""}
        ${this.pagination?h`
              <div
                part="pagination"
                role="tablist"
                class="${Z({pagination:!0,"pagination-awaiting-position":this.awaitingInitialPosition})}"
                aria-controls="scroll-container"
              >
                ${uf(zf(r),(c)=>{let m=c===a;return h`
                    <button
                      part="pagination-item ${m?"pagination-item-active":""}"
                      class="${Z({"pagination-item":!0,"pagination-item-active":m})}"
                      role="tab"
                      aria-selected="${m?"true":"false"}"
                      aria-label="${this.localize.term("goToSlide",c+1,r)}"
                      tabindex=${m?"0":"-1"}
                      @click=${()=>this.goToSlide(c*o)}
                      @keydown=${this.handleKeyDown}
                    ></button>
                  `})}
              </div>
            `:h``}
      </div>
    `}};yo.css=sf;f([t({type:Boolean,reflect:!0})],yo.prototype,"loop",2);f([t({type:Number,reflect:!0})],yo.prototype,"slides",2);f([t({type:Number,reflect:!0})],yo.prototype,"currentSlide",2);f([t({type:Boolean,reflect:!0})],yo.prototype,"navigation",2);f([t({type:Boolean,reflect:!0})],yo.prototype,"pagination",2);f([t({type:Boolean,reflect:!0})],yo.prototype,"autoplay",2);f([t({type:Number,attribute:"autoplay-interval"})],yo.prototype,"autoplayInterval",2);f([t({type:Number,attribute:"slides-per-page"})],yo.prototype,"slidesPerPage",2);f([t({type:Number,attribute:"slides-per-move"})],yo.prototype,"slidesPerMove",2);f([t()],yo.prototype,"orientation",2);f([t({type:Boolean,reflect:!0,attribute:"mouse-dragging"})],yo.prototype,"mouseDragging",2);f([Y(".slides")],yo.prototype,"scrollContainer",2);f([Y(".pagination")],yo.prototype,"paginationContainer",2);f([J()],yo.prototype,"activeSlide",2);f([J()],yo.prototype,"scrolling",2);f([J()],yo.prototype,"dragging",2);f([J()],yo.prototype,"awaitingInitialPosition",2);f([nr({passive:!0})],yo.prototype,"handleScroll",1);f([v("loop",{waitUntilFirstUpdate:!0}),v("slidesPerPage",{waitUntilFirstUpdate:!0})],yo.prototype,"initializeSlides",1);f([v("activeSlide")],yo.prototype,"handleSlideChange",1);f([v("slidesPerMove")],yo.prototype,"updateSlidesSnap",1);f([v("autoplay")],yo.prototype,"handleAutoplayChange",1);yo=f([$("wa-carousel")],yo);/*! Copyright 2026 Fonticons, Inc. - https://webawesome.com/license *//*! Copyright 2026 Fonticons, Inc. - https://webawesome.com/license */var yf=F`
  :host {
    --aspect-ratio: inherit;

    display: flex;
    align-items: center;
    justify-content: center;
    flex-direction: column;
    width: 100%;
    max-height: 100%;
    aspect-ratio: var(--aspect-ratio);
    scroll-snap-align: start;
    scroll-snap-stop: always;
  }

  ::slotted(img) {
    width: 100% !important;
    height: 100% !important;
    object-fit: cover;
  }
`;/*! Copyright 2026 Fonticons, Inc. - https://webawesome.com/license */var g2=class extends L{connectedCallback(){super.connectedCallback(),this.setAttribute("role","group")}render(){return h` <slot></slot> `}};g2.css=yf;g2=f([$("wa-carousel-item")],g2);/*! Copyright 2026 Fonticons, Inc. - https://webawesome.com/license *//*! Copyright 2026 Fonticons, Inc. - https://webawesome.com/license */var lf=F`
  :host {
    --checked-icon-color: var(--wa-color-brand-on-loud);
    --checked-icon-scale: 0.8;

    display: inline-flex;
    color: var(--wa-form-control-value-color);
    font-family: inherit;
    font-weight: var(--wa-form-control-value-font-weight);
    line-height: var(--wa-form-control-value-line-height);
    user-select: none;
    -webkit-user-select: none;
  }

  [part~='control'] {
    display: inline-flex;
    flex: 0 0 auto;
    position: relative;
    align-items: center;
    justify-content: center;
    width: var(--wa-form-control-toggle-size);
    height: var(--wa-form-control-toggle-size);
    border-color: var(--wa-form-control-border-color);
    border-radius: min(
      calc(var(--wa-form-control-toggle-size) * 0.375),
      var(--wa-border-radius-s)
    ); /* min prevents entirely circular checkbox */
    border-style: var(--wa-border-style);
    border-width: var(--wa-form-control-border-width);
    background-color: var(--wa-form-control-background-color);
    transition:
      background var(--wa-transition-normal),
      border-color var(--wa-transition-fast),
      box-shadow var(--wa-transition-fast),
      color var(--wa-transition-fast);
    transition-timing-function: var(--wa-transition-easing);

    margin-inline-end: 0.5em;
  }

  [part~='base'] {
    display: flex;
    align-items: flex-start;
    position: relative;
    color: currentColor;
    vertical-align: middle;
    cursor: pointer;
  }

  [part~='label'] {
    display: inline;
  }

  /* Checked */
  [part~='control']:has(:checked, :indeterminate) {
    color: var(--checked-icon-color);
    border-color: var(--wa-form-control-activated-color);
    background-color: var(--wa-form-control-activated-color);
  }

  /* Focus */
  [part~='control']:has(> input:focus-visible:not(:disabled)) {
    outline: var(--wa-focus-ring);
    outline-offset: var(--wa-focus-ring-offset);
  }

  /* Disabled */
  :host [part~='base']:has(input:disabled) {
    opacity: 0.5;
    cursor: not-allowed;
  }

  input {
    position: absolute;
    padding: 0;
    margin: 0;
    height: 100%;
    width: 100%;
    opacity: 0;
    pointer-events: none;
  }

  [part~='icon'] {
    display: flex;
    scale: var(--checked-icon-scale);

    /* Without this, Safari renders the icon slightly to the left */
    &::part(svg) {
      translate: 0.0009765625em;
    }

    input:not(:checked, :indeterminate) + & {
      visibility: hidden;
    }
  }

  :host([required]) [part~='label']::after {
    content: var(--wa-form-control-required-content);
    color: var(--wa-form-control-required-content-color);
    margin-inline-start: var(--wa-form-control-required-content-offset);
  }
`;/*! Copyright 2026 Fonticons, Inc. - https://webawesome.com/license */var ti=(o={})=>{let{validationElement:i,validationProperty:r}=o;if(!i){if(typeof document<"u"&&"createElement"in document)i=Object.assign(document.createElement("input"),{required:!0})}if(!r)r="value";let a={observedAttributes:["required"],message:i?.validationMessage,checkValidity(n){let w={message:"",isValid:!0,invalidKeys:[]};if(!(n.required??n.hasAttribute("required")))return w;if(!n[r])w.message=typeof a.message==="function"?a.message(n):a.message||"",w.isValid=!1,w.invalidKeys.push("valueMissing");return w}};return a};/*! Copyright 2026 Fonticons, Inc. - https://webawesome.com/license */var go=F`
  :host {
    display: flex;
    flex-direction: column;
  }

  /* Treat wrapped labels, inputs, and hints as direct children of the host element */
  [part~='form-control'] {
    display: contents;
  }

  /* Label */
  :is([part~='form-control-label'], [part~='label']):has(*:not(:empty)),
  :is([part~='form-control-label'], [part~='label']).has-label {
    display: inline-flex;
    color: var(--wa-form-control-label-color);
    font-weight: var(--wa-form-control-label-font-weight);
    line-height: var(--wa-form-control-label-line-height);
    margin-block-end: 0.5em;
  }

  :host([required]) :is([part~='form-control-label'], [part~='label'])::after {
    content: var(--wa-form-control-required-content);
    margin-inline-start: var(--wa-form-control-required-content-offset);
    color: var(--wa-form-control-required-content-color);
  }

  /* Help text */
  [part~='hint'] {
    display: block;
    color: var(--wa-form-control-hint-color);
    font-weight: var(--wa-form-control-hint-font-weight);
    line-height: var(--wa-form-control-hint-line-height);
    margin-block-start: 0.5em;
    font-size: var(--wa-font-size-smaller);

    &:not(.has-slotted, .has-hint, .has-count) {
      display: none;
    }
  }
`;class vf extends a0{constructor(o){super(o);if(!(o.type===Ho.PROPERTY||o.type===Ho.ATTRIBUTE||o.type===Ho.BOOLEAN_ATTRIBUTE))throw Error("The `live` directive is not allowed on child or event bindings");if(!o2(o))throw Error("`live` bindings can only contain a single expression")}render(o){return o}update(o,[i]){if(i===Jo||i===wo)return i;let{element:r,name:a}=o;if(o.type===Ho.PROPERTY){if(i===r[a])return Jo}else if(o.type===Ho.BOOLEAN_ATTRIBUTE){if(!!i===r.hasAttribute(a))return Jo}else if(o.type===Ho.ATTRIBUTE){if(r.getAttribute(a)===String(i))return Jo}return Ra(o),i}}var Oo=h0(vf);/*! Copyright 2026 Fonticons, Inc. - https://webawesome.com/license */var Go=class extends E{constructor(){super(...arguments);this.hasSlotController=new W(this,"hint"),this.title="",this._value=this.getAttribute("value")??null,this.size="m",this.disabled=!1,this.indeterminate=!1,this._checked=null,this.defaultChecked=this.hasAttribute("checked"),this.required=!1,this.hint=""}static get validators(){let o=M?[]:[ti({validationProperty:"checked",validationElement:Object.assign(document.createElement("input"),{type:"checkbox",required:!0})})];return[...super.validators,...o]}get value(){return this._value??"on"}set value(o){this._value=o}handleSizeChange(){j(this.localName,this.size)}get checked(){if(this.valueHasChanged)return Boolean(this._checked);return this._checked??this.defaultChecked}set checked(o){this._checked=Boolean(o),this.valueHasChanged=!0}handleClick(){this.hasInteracted=!0,this.checked=!this.checked,this.indeterminate=!1,this.updateComplete.then(()=>{this.dispatchEvent(new Event("change",{bubbles:!0,composed:!0}))})}connectedCallback(){if(super.connectedCallback(),this.didSSR&&!this.hasUpdated){this.updateComplete.then(()=>{this.handleDefaultCheckedChange()});return}this.handleDefaultCheckedChange()}handleDefaultCheckedChange(){this.handleValueOrCheckedChange()}handleValueOrCheckedChange(){if(this.didSSR&&!this.hasUpdated){this.updateComplete.then(()=>{this.handleValueOrCheckedChange()});return}this.setValue(this.checked?this.value:null,this._value),this.updateValidity()}handleStateChange(){if(this.hasUpdated)this.input.checked=this.checked,this.input.indeterminate=this.indeterminate;this.customStates.set("checked",this.checked),this.customStates.set("indeterminate",this.indeterminate),this.updateValidity()}handleDisabledChange(){this.customStates.set("disabled",this.disabled)}willUpdate(o){if(super.willUpdate(o),o.has("value")||o.has("checked")||o.has("defaultChecked")||o.has("disabled"))this.handleValueOrCheckedChange()}formResetCallback(){this._checked=null,super.formResetCallback(),this.handleValueOrCheckedChange()}click(){this.input.click()}focus(o){this.input.focus(o)}blur(){this.input.blur()}render(){let o=M?!0:this.hasSlotController.test("hint"),i=this.hint?!0:!!o,r=!this.checked&&this.indeterminate,a=r?"indeterminate":"check",n=r?"indeterminate":"checked",w=this.didSSR&&!this.hasUpdated?this.checked:this.defaultChecked,b=this.didSSR&&!this.hasUpdated?null:Oo(this.checked);return h`
      <label part="base checkbox">
        <span part="control">
          <input
            class="input"
            type="checkbox"
            title=${this.title}
            name=${Q(this.name)}
            value=${Q(this.value)}
            .indeterminate=${Oo(this.indeterminate)}
            .checked=${Q(b)}
            ?checked=${w}
            ?disabled=${this.disabled}
            ?required=${this.required}
            aria-checked=${this.indeterminate?"mixed":this.checked?"true":"false"}
            aria-describedby="hint"
            @click=${this.handleClick}
          />

          <wa-icon part="${n}-icon icon" library="system" name=${a}></wa-icon>
        </span>

        <slot part="label"></slot>
      </label>

      <slot
        id="hint"
        part="hint"
        name="hint"
        aria-hidden=${i?"false":"true"}
        class="${Z({"has-slotted":i})}"
      >
        ${this.hint}
      </slot>
    `}};Go.css=[go,I,lf];Go.shadowRootOptions={...E.shadowRootOptions,delegatesFocus:!0};f([Y('input[type="checkbox"]')],Go.prototype,"input",2);f([t()],Go.prototype,"title",2);f([t({reflect:!0})],Go.prototype,"value",1);f([t({reflect:!0})],Go.prototype,"size",2);f([v("size")],Go.prototype,"handleSizeChange",1);f([t({type:Boolean})],Go.prototype,"disabled",2);f([t({type:Boolean,reflect:!0})],Go.prototype,"indeterminate",2);f([t({type:Boolean,attribute:!1})],Go.prototype,"checked",1);f([t({type:Boolean,reflect:!0,attribute:"checked"})],Go.prototype,"defaultChecked",2);f([t({type:Boolean,reflect:!0})],Go.prototype,"required",2);f([t()],Go.prototype,"hint",2);f([v(["checked","defaultChecked"])],Go.prototype,"handleDefaultCheckedChange",1);f([v(["checked","indeterminate"])],Go.prototype,"handleStateChange",1);f([v("disabled")],Go.prototype,"handleDisabledChange",1);Go=f([$("wa-checkbox")],Go);Go.disableWarning?.("change-in-update");/*! Copyright 2026 Fonticons, Inc. - https://webawesome.com/license *//*! Copyright 2026 Fonticons, Inc. - https://webawesome.com/license */var xf=F`
  :host {
    --gap: 0.5em;

    display: block;
  }

  :host([orientation='horizontal']) {
    --gap: 1em;
  }

  .form-control {
    position: relative;
    border: none;
    padding: 0;
    margin: 0;
  }

  .label {
    padding: 0;
  }

  .checkbox-group-required .label::after {
    content: var(--wa-form-control-required-content);
    margin-inline-start: var(--wa-form-control-required-content-offset);
  }

  /* The group of checkboxes */
  [part~='form-control-input'] {
    display: flex;
    flex-direction: column;
    /* Keep items sized to their content so the clickable label doesn't span the full width */
    align-items: start;
    gap: var(--gap);
    margin-block-start: 0.5em;
  }

  /* Horizontal */
  :host([orientation='horizontal']) [part~='form-control-input'] {
    flex-direction: row;
    flex-wrap: wrap;
    align-items: center;
  }

  /* Hint */
  [part~='hint'] {
    margin-block-start: 0.5em;
  }

  /* Hide the required asterisk on individual controls; the group's label carries the indicator instead. */
  ::slotted(wa-checkbox[required]),
  ::slotted(wa-switch[required]) {
    --wa-form-control-required-content: '';
  }
`;/*! Copyright 2026 Fonticons, Inc. - https://webawesome.com/license */var si=class extends L{constructor(){super(...arguments);this.hasSlotController=new W(this,"hint","label"),this.label="",this.hint="",this.orientation="vertical",this.required=!1,this.withLabel=!1,this.withHint=!1,this.syncCheckboxElements=()=>{if(!this.size)return;for(let o of this.getAllCheckboxes())o.setAttribute("size",this.size)}}handleSizeChange(){j(this.localName,this.size)}updated(o){if(o.has("size"))this.syncCheckboxElements()}getAllCheckboxes(){return[...this.querySelectorAll(":is(wa-checkbox, wa-switch)")]}render(){let o=this.hasSlotController.test("label","withLabel"),i=this.hasSlotController.test("hint","withHint"),r=this.label?!0:!!o,a=this.hint?!0:!!i;return h`
      <fieldset
        part="form-control"
        class=${Z({"form-control":!0,"checkbox-group-required":this.required,"form-control-has-label":r})}
      >
        <label
          part="form-control-label"
          id="label"
          class=${Z({label:!0,"has-label":r})}
          aria-hidden=${r?"false":"true"}
        >
          <slot name="label">${this.label}</slot>
        </label>

        <div part="form-control-input" role="group" aria-labelledby="label" aria-describedby="hint">
          <slot @slotchange=${this.syncCheckboxElements}></slot>
        </div>

        <slot
          id="hint"
          name="hint"
          part="hint"
          class=${Z({"has-slotted":a})}
          aria-hidden=${a?"false":"true"}
          >${this.hint}</slot
        >
      </fieldset>
    `}};si.css=[I,go,xf];f([t()],si.prototype,"label",2);f([t({attribute:"hint"})],si.prototype,"hint",2);f([t({reflect:!0})],si.prototype,"orientation",2);f([t({reflect:!0})],si.prototype,"size",2);f([v("size")],si.prototype,"handleSizeChange",1);f([t({type:Boolean,reflect:!0})],si.prototype,"required",2);f([t({type:Boolean,attribute:"with-label"})],si.prototype,"withLabel",2);f([t({type:Boolean,attribute:"with-hint"})],si.prototype,"withHint",2);si=f([$("wa-checkbox-group")],si);si.disableWarning?.("change-in-update");/*! Copyright 2026 Fonticons, Inc. - https://webawesome.com/license *//*! Copyright 2026 Fonticons, Inc. - https://webawesome.com/license */function z0(o,i){function r(n){let w=o.getBoundingClientRect(),b=o.ownerDocument.defaultView,c=w.left+b.pageXOffset,m=w.top+b.pageYOffset,p=n.pageX-c,d=n.pageY-m;if(i?.onMove)i.onMove(p,d)}function a(){if(document.removeEventListener("pointermove",r),document.removeEventListener("pointerup",a),i?.onStop)i.onStop()}if(document.addEventListener("pointermove",r,{passive:!0}),document.addEventListener("pointerup",a),i?.initialEvent instanceof PointerEvent)r(i.initialEvent)}var V1=typeof window<"u"&&"ontouchstart"in window,Fr=class{constructor(o,i){this.isActive=!1,this.isDragging=!1,this.handleDragStart=(r)=>{let a="touches"in r?r.touches[0].clientX:r.clientX,n="touches"in r?r.touches[0].clientY:r.clientY;if(this.isDragging||!V1&&r.buttons>1)return;this.isDragging=!0,document.addEventListener("pointerup",this.handleDragStop),document.addEventListener("pointermove",this.handleDragMove),document.addEventListener("pointercancel",this.handleDragStop),document.addEventListener("touchend",this.handleDragStop),document.addEventListener("touchmove",this.handleDragMove),document.addEventListener("touchcancel",this.handleDragStop),this.options.start(a,n)},this.handleDragStop=(r)=>{let a="changedTouches"in r?r.changedTouches[0].clientX:r.clientX,n="changedTouches"in r?r.changedTouches[0].clientY:r.clientY;this.isDragging=!1,document.removeEventListener("pointerup",this.handleDragStop),document.removeEventListener("pointermove",this.handleDragMove),document.removeEventListener("pointercancel",this.handleDragStop),document.removeEventListener("touchend",this.handleDragStop),document.removeEventListener("touchmove",this.handleDragMove),document.removeEventListener("touchcancel",this.handleDragStop),this.options.stop(a,n)},this.handleDragMove=(r)=>{let a="touches"in r?r.touches[0].clientX:r.clientX,n="touches"in r?r.touches[0].clientY:r.clientY;window.getSelection()?.removeAllRanges(),this.options.move(a,n)},this.element=o,this.options={start:()=>{return},stop:()=>{return},move:()=>{return},...i},this.start()}start(){if(!this.isActive){if(this.element.addEventListener("pointerdown",this.handleDragStart),V1)this.element.addEventListener("touchstart",this.handleDragStart);this.isActive=!0}}stop(){if(document.removeEventListener("pointerup",this.handleDragStop),document.removeEventListener("pointermove",this.handleDragMove),document.removeEventListener("pointercancel",this.handleDragStop),document.removeEventListener("touchend",this.handleDragStop),document.removeEventListener("touchmove",this.handleDragMove),document.removeEventListener("touchcancel",this.handleDragStop),this.element.removeEventListener("pointerdown",this.handleDragStart),V1)this.element.removeEventListener("touchstart",this.handleDragStart);this.isActive=!1,this.isDragging=!1}toggle(o){if(o!==void 0?o:!this.isActive)this.start();else this.stop()}};/*! Copyright 2026 Fonticons, Inc. - https://webawesome.com/license */var Ii=F`
  .wa-visually-hidden:not(:focus-within),
  .wa-visually-hidden-force,
  .wa-visually-hidden-hint::part(hint),
  .wa-visually-hidden-label::part(label),
  .wa-visually-hidden-label::part(form-control-label) {
    position: absolute !important;
    width: 1px !important;
    height: 1px !important;
    clip: rect(0 0 0 0) !important;
    clip-path: inset(50%) !important;
    border: none !important;
    overflow: hidden !important;
    white-space: nowrap !important;
    padding: 0 !important;
  }
`;/*! Copyright 2026 Fonticons, Inc. - https://webawesome.com/license */var A0=[];function _o(o){Mo(o),A0.push(o)}function Mo(o){for(let i=A0.length-1;i>=0;i--)if(A0[i]===o){A0.splice(i,1);break}}function Ao(o){return A0.length>0&&A0[A0.length-1]===o}/*! Copyright 2026 Fonticons, Inc. - https://webawesome.com/license */var Ff=F`
  :host {
    --grid-width: 17em;
    --grid-height: 12em;
    --grid-handle-size: 1.25em;
    --slider-height: 1em;
    --slider-handle-size: calc(var(--slider-height) + 0.25em);
  }

  .color-picker {
    background-color: var(--wa-color-surface-raised);
    border-radius: var(--wa-border-radius-m);
    border-style: var(--wa-border-style);
    border-width: var(--wa-border-width-s);
    border-color: var(--wa-color-surface-border);
    box-shadow: var(--wa-shadow-m);
    color: var(--color);
    font: inherit;
    font-size: inherit;
    user-select: none;
    width: var(--grid-width);
    -webkit-user-select: none;
  }

  .grid {
    position: relative;
    height: var(--grid-height);
    background-image:
      linear-gradient(to bottom, rgba(0, 0, 0, 0) 0%, rgba(0, 0, 0, 1) 100%),
      linear-gradient(to right, #fff 0%, rgba(255, 255, 255, 0) 100%);
    border-top-left-radius: calc(var(--wa-border-radius-m) - var(--wa-border-width-s));
    border-top-right-radius: calc(var(--wa-border-radius-m) - var(--wa-border-width-s));
    cursor: crosshair;
    forced-color-adjust: none;
  }

  .grid-handle {
    position: absolute;
    width: var(--grid-handle-size);
    height: var(--grid-handle-size);
    border-radius: var(--wa-border-radius-circle);
    box-shadow: 0 0 0 0.0625rem rgba(0, 0, 0, 0.2);
    border: solid 0.125rem white;
    margin-top: calc(var(--grid-handle-size) / -2);
    margin-left: calc(var(--grid-handle-size) / -2);
    transition: scale var(--wa-transition-normal) var(--wa-transition-easing);
  }

  .grid-handle-dragging {
    cursor: none;
    scale: 1.5;
  }

  .grid-handle:focus-visible {
    outline: var(--wa-focus-ring);
  }

  .controls {
    padding: 0.75em;
    display: flex;
    align-items: center;
  }

  .sliders {
    flex: 1 1 auto;
  }

  .slider {
    position: relative;
    height: var(--slider-height);
    border-radius: var(--wa-border-radius-s);
    box-shadow: inset 0 0 0 0.0625rem rgba(0, 0, 0, 0.2);
    forced-color-adjust: none;
  }

  .slider:not(:last-of-type) {
    margin-bottom: 0.75em;
  }

  .slider-handle {
    position: absolute;
    top: calc(50% - var(--slider-handle-size) / 2);
    width: var(--slider-handle-size);
    height: var(--slider-handle-size);
    border-radius: var(--wa-border-radius-circle);
    border: solid 0.125rem white;
    box-shadow: 0 0 0 0.0625rem rgba(0, 0, 0, 0.2);
    margin-left: calc(var(--slider-handle-size) / -2);
  }

  .slider-handle:focus-visible {
    outline: var(--wa-focus-ring);
  }

  .hue {
    background-image: linear-gradient(
      to right,
      rgb(255, 0, 0) 0%,
      rgb(255, 255, 0) 17%,
      rgb(0, 255, 0) 33%,
      rgb(0, 255, 255) 50%,
      rgb(0, 0, 255) 67%,
      rgb(255, 0, 255) 83%,
      rgb(255, 0, 0) 100%
    );
  }

  .alpha .alpha-gradient {
    position: absolute;
    top: 0;
    left: 0;
    width: 100%;
    height: 100%;
    border-radius: inherit;
  }

  .preview {
    flex: 0 0 auto;
    display: inline-flex;
    align-items: center;
    justify-content: center;
    position: relative;
    width: 3em;
    height: 3em;
    border: none;
    border-radius: var(--wa-border-radius-circle);
    background: none;
    font-size: inherit;
    margin-inline-start: 0.75em;
    cursor: copy;
    forced-color-adjust: none;
  }

  .preview:before {
    content: '';
    position: absolute;
    top: 0;
    left: 0;
    width: 100%;
    height: 100%;
    border-radius: inherit;
    box-shadow: inset 0 0 0 0.0625rem rgba(0, 0, 0, 0.2);

    /* We use a custom property in lieu of currentColor because of https://bugs.webkit.org/show_bug.cgi?id=216780 */
    background-color: var(--preview-color);
  }

  .preview:focus-visible {
    outline: var(--wa-focus-ring);
    outline-offset: var(--wa-focus-ring-offset);
  }

  .preview-color {
    position: absolute;
    top: 0;
    left: 0;
    width: 100%;
    height: 100%;
    border: solid 0.0625rem rgba(0, 0, 0, 0.125);
  }

  .preview-color-copied {
    animation: pulse 850ms;
  }

  @keyframes pulse {
    0% {
      box-shadow: 0 0 0 0 var(--wa-color-brand-fill-loud);
    }
    70% {
      box-shadow: 0 0 0 0.5rem transparent;
    }
    100% {
      box-shadow: 0 0 0 0 transparent;
    }
  }

  .user-input {
    display: flex;
    align-items: center;
    padding: 0 0.75em 0.75em 0.75em;
  }

  .user-input wa-input {
    min-width: 0; /* fix input width in Safari */
    flex: 1 1 auto;

    &::part(form-control-label) {
      /* Visually hidden */
      position: absolute !important;
      width: 1px !important;
      height: 1px !important;
      clip: rect(0 0 0 0) !important;
      clip-path: inset(50%) !important;
      border: none !important;
      overflow: hidden !important;
      white-space: nowrap !important;
      padding: 0 !important;
    }
  }

  .user-input wa-button-group {
    margin-inline-start: 0.75em;

    &::part(base) {
      flex-wrap: nowrap;
    }
  }

  .user-input wa-button:first-of-type {
    min-width: 3em;
    max-width: 3em;
  }

  .swatches {
    display: grid;
    grid-template-columns: repeat(auto-fill, minmax(min(1.5em, 100%), 1fr));
    grid-gap: 0.5em;
    justify-items: center;
    border-block-start: var(--wa-form-control-border-style) var(--wa-form-control-border-width)
      var(--wa-color-surface-border);
    padding: 0.5em;
    forced-color-adjust: none;
  }

  .swatch {
    position: relative;
    aspect-ratio: 1 / 1;
    width: 100%;
    border-radius: var(--wa-border-radius-s);
  }

  .swatch .swatch-color {
    position: absolute;
    top: 0;
    left: 0;
    width: 100%;
    height: 100%;
    border: solid 0.0625rem rgba(0, 0, 0, 0.125);
    border-radius: inherit;
    cursor: pointer;
  }

  .swatch:focus-visible {
    outline: var(--wa-focus-ring);
    outline-offset: var(--wa-focus-ring-offset);
  }

  .transparent-bg {
    background-image:
      linear-gradient(45deg, var(--wa-color-neutral-fill-normal) 25%, transparent 25%),
      linear-gradient(45deg, transparent 75%, var(--wa-color-neutral-fill-normal) 75%),
      linear-gradient(45deg, transparent 75%, var(--wa-color-neutral-fill-normal) 75%),
      linear-gradient(45deg, var(--wa-color-neutral-fill-normal) 25%, transparent 25%);
    background-size: 0.5rem 0.5rem;
    background-position:
      0 0,
      0 0,
      -0.25rem -0.25rem,
      0.25rem 0.25rem;
  }

  :host([disabled]) {
    opacity: 0.5;
    cursor: not-allowed;

    .grid,
    .grid-handle,
    .slider,
    .slider-handle,
    .preview,
    .swatch,
    .swatch-color {
      pointer-events: none;
    }
  }

  /*
   * Color dropdown
   */

  .color-dropdown {
    display: contents;
  }

  .color-dropdown::part(panel) {
    max-height: none;
    background-color: var(--wa-color-surface-raised);
    border: var(--wa-border-style) var(--wa-border-width-s) var(--wa-color-surface-border);
    border-radius: var(--wa-border-radius-m);
    overflow: visible;
  }

  .trigger {
    display: block;
    position: relative;
    background-color: transparent;
    border: none;
    cursor: pointer;
    font-size: inherit;
    forced-color-adjust: none;
    width: var(--wa-form-control-height);
    height: var(--wa-form-control-height);
    border-radius: var(--wa-form-control-border-radius);
  }

  .trigger:before {
    content: '';
    position: absolute;
    top: 0;
    left: 0;
    width: 100%;
    height: 100%;
    border-radius: inherit;
    background-color: currentColor;
    box-shadow:
      inset 0 0 0 var(--wa-form-control-border-width) var(--wa-form-control-border-color),
      inset 0 0 0 calc(var(--wa-form-control-border-width) * 3) var(--wa-color-surface-default);
  }

  .trigger-empty:before {
    background-color: transparent;
  }

  .trigger:focus-visible {
    outline: none;
  }

  .trigger:focus-visible:not(.trigger:disabled) {
    outline: var(--wa-focus-ring);
    outline-offset: var(--wa-focus-ring-offset);
  }

  :host([disabled]) :is(.label, .trigger) {
    opacity: 0.5;
    cursor: not-allowed;
  }

  .form-control.form-control-has-label .label {
    cursor: pointer;
    display: inline-block;
  }
`;function Eo(o,i){if(eb(o))o="100%";let r=ot(o);if(o=i===360?o:Math.min(i,Math.max(0,parseFloat(o))),r)o=parseInt(String(o*i),10)/100;if(Math.abs(o-i)<0.000001)return 1;if(i===360)o=(o<0?o%i+i:o%i)/parseFloat(String(i));else o=o%i/parseFloat(String(i));return o}function $r(o){return Math.min(1,Math.max(0,o))}function eb(o){return typeof o==="string"&&o.indexOf(".")!==-1&&parseFloat(o)===1}function ot(o){return typeof o==="string"&&o.indexOf("%")!==-1}function s2(o){if(o=parseFloat(o),isNaN(o)||o<0||o>1)o=1;return o}function Yr(o){if(Number(o)<=1)return`${Number(o)*100}%`;return o}function y0(o){return o.length===1?"0"+o:String(o)}function $f(o,i,r){return{r:Eo(o,255)*255,g:Eo(i,255)*255,b:Eo(r,255)*255}}function N1(o,i,r){o=Eo(o,255),i=Eo(i,255),r=Eo(r,255);let a=Math.max(o,i,r),n=Math.min(o,i,r),w=0,b=0,c=(a+n)/2;if(a===n)b=0,w=0;else{let m=a-n;switch(b=c>0.5?m/(2-a-n):m/(a+n),a){case o:w=(i-r)/m+(i<r?6:0);break;case i:w=(r-o)/m+2;break;case r:w=(o-i)/m+4;break;default:break}w/=6}return{h:w,s:b,l:c}}function H1(o,i,r){if(r<0)r+=1;if(r>1)r-=1;if(r<0.16666666666666666)return o+(i-o)*(6*r);if(r<0.5)return i;if(r<0.6666666666666666)return o+(i-o)*(0.6666666666666666-r)*6;return o}function Yf(o,i,r){let a,n,w;if(o=Eo(o,360),i=Eo(i,100),r=Eo(r,100),i===0)n=r,w=r,a=r;else{let b=r<0.5?r*(1+i):r+i-r*i,c=2*r-b;a=H1(c,b,o+0.3333333333333333),n=H1(c,b,o),w=H1(c,b,o-0.3333333333333333)}return{r:a*255,g:n*255,b:w*255}}function O1(o,i,r){o=Eo(o,255),i=Eo(i,255),r=Eo(r,255);let a=Math.max(o,i,r),n=Math.min(o,i,r),w=0,b=a,c=a-n,m=a===0?0:c/a;if(a===n)w=0;else{switch(a){case o:w=(i-r)/c+(i<r?6:0);break;case i:w=(r-o)/c+2;break;case r:w=(o-i)/c+4;break;default:break}w/=6}return{h:w,s:m,v:b}}function qf(o,i,r){o=Eo(o,360)*6,i=Eo(i,100),r=Eo(r,100);let a=Math.floor(o),n=o-a,w=r*(1-i),b=r*(1-n*i),c=r*(1-(1-n)*i),m=a%6,p=[r,b,w,w,c,r][m],d=[c,r,r,b,w,w][m],s=[w,w,c,r,r,b][m];return{r:p*255,g:d*255,b:s*255}}function A1(o,i,r,a){let n=[y0(Math.round(o).toString(16)),y0(Math.round(i).toString(16)),y0(Math.round(r).toString(16))];if(a&&n[0].startsWith(n[0].charAt(1))&&n[1].startsWith(n[1].charAt(1))&&n[2].startsWith(n[2].charAt(1)))return n[0].charAt(0)+n[1].charAt(0)+n[2].charAt(0);return n.join("")}function Lf(o,i,r,a,n){let w=[y0(Math.round(o).toString(16)),y0(Math.round(i).toString(16)),y0(Math.round(r).toString(16)),y0(it(a))];if(n&&w[0].startsWith(w[0].charAt(1))&&w[1].startsWith(w[1].charAt(1))&&w[2].startsWith(w[2].charAt(1))&&w[3].startsWith(w[3].charAt(1)))return w[0].charAt(0)+w[1].charAt(0)+w[2].charAt(0)+w[3].charAt(0);return w.join("")}function Uf(o,i,r,a){let n=o/100,w=i/100,b=r/100,c=a/100,m=255*(1-n)*(1-c),p=255*(1-w)*(1-c),d=255*(1-b)*(1-c);return{r:m,g:p,b:d}}function E1(o,i,r){let a=1-o/255,n=1-i/255,w=1-r/255,b=Math.min(a,n,w);if(b===1)a=0,n=0,w=0;else a=(a-b)/(1-b)*100,n=(n-b)/(1-b)*100,w=(w-b)/(1-b)*100;return b*=100,{c:Math.round(a),m:Math.round(n),y:Math.round(w),k:Math.round(b)}}function it(o){return Math.round(parseFloat(o)*255).toString(16)}function D1(o){return ci(o)/255}function ci(o){return parseInt(o,16)}function Xf(o){return{r:o>>16,g:(o&65280)>>8,b:o&255}}var qr={aliceblue:"#f0f8ff",antiquewhite:"#faebd7",aqua:"#00ffff",aquamarine:"#7fffd4",azure:"#f0ffff",beige:"#f5f5dc",bisque:"#ffe4c4",black:"#000000",blanchedalmond:"#ffebcd",blue:"#0000ff",blueviolet:"#8a2be2",brown:"#a52a2a",burlywood:"#deb887",cadetblue:"#5f9ea0",chartreuse:"#7fff00",chocolate:"#d2691e",coral:"#ff7f50",cornflowerblue:"#6495ed",cornsilk:"#fff8dc",crimson:"#dc143c",cyan:"#00ffff",darkblue:"#00008b",darkcyan:"#008b8b",darkgoldenrod:"#b8860b",darkgray:"#a9a9a9",darkgreen:"#006400",darkgrey:"#a9a9a9",darkkhaki:"#bdb76b",darkmagenta:"#8b008b",darkolivegreen:"#556b2f",darkorange:"#ff8c00",darkorchid:"#9932cc",darkred:"#8b0000",darksalmon:"#e9967a",darkseagreen:"#8fbc8f",darkslateblue:"#483d8b",darkslategray:"#2f4f4f",darkslategrey:"#2f4f4f",darkturquoise:"#00ced1",darkviolet:"#9400d3",deeppink:"#ff1493",deepskyblue:"#00bfff",dimgray:"#696969",dimgrey:"#696969",dodgerblue:"#1e90ff",firebrick:"#b22222",floralwhite:"#fffaf0",forestgreen:"#228b22",fuchsia:"#ff00ff",gainsboro:"#dcdcdc",ghostwhite:"#f8f8ff",goldenrod:"#daa520",gold:"#ffd700",gray:"#808080",green:"#008000",greenyellow:"#adff2f",grey:"#808080",honeydew:"#f0fff0",hotpink:"#ff69b4",indianred:"#cd5c5c",indigo:"#4b0082",ivory:"#fffff0",khaki:"#f0e68c",lavenderblush:"#fff0f5",lavender:"#e6e6fa",lawngreen:"#7cfc00",lemonchiffon:"#fffacd",lightblue:"#add8e6",lightcoral:"#f08080",lightcyan:"#e0ffff",lightgoldenrodyellow:"#fafad2",lightgray:"#d3d3d3",lightgreen:"#90ee90",lightgrey:"#d3d3d3",lightpink:"#ffb6c1",lightsalmon:"#ffa07a",lightseagreen:"#20b2aa",lightskyblue:"#87cefa",lightslategray:"#778899",lightslategrey:"#778899",lightsteelblue:"#b0c4de",lightyellow:"#ffffe0",lime:"#00ff00",limegreen:"#32cd32",linen:"#faf0e6",magenta:"#ff00ff",maroon:"#800000",mediumaquamarine:"#66cdaa",mediumblue:"#0000cd",mediumorchid:"#ba55d3",mediumpurple:"#9370db",mediumseagreen:"#3cb371",mediumslateblue:"#7b68ee",mediumspringgreen:"#00fa9a",mediumturquoise:"#48d1cc",mediumvioletred:"#c71585",midnightblue:"#191970",mintcream:"#f5fffa",mistyrose:"#ffe4e1",moccasin:"#ffe4b5",navajowhite:"#ffdead",navy:"#000080",oldlace:"#fdf5e6",olive:"#808000",olivedrab:"#6b8e23",orange:"#ffa500",orangered:"#ff4500",orchid:"#da70d6",palegoldenrod:"#eee8aa",palegreen:"#98fb98",paleturquoise:"#afeeee",palevioletred:"#db7093",papayawhip:"#ffefd5",peachpuff:"#ffdab9",peru:"#cd853f",pink:"#ffc0cb",plum:"#dda0dd",powderblue:"#b0e0e6",purple:"#800080",rebeccapurple:"#663399",red:"#ff0000",rosybrown:"#bc8f8f",royalblue:"#4169e1",saddlebrown:"#8b4513",salmon:"#fa8072",sandybrown:"#f4a460",seagreen:"#2e8b57",seashell:"#fff5ee",sienna:"#a0522d",silver:"#c0c0c0",skyblue:"#87ceeb",slateblue:"#6a5acd",slategray:"#708090",slategrey:"#708090",snow:"#fffafa",springgreen:"#00ff7f",steelblue:"#4682b4",tan:"#d2b48c",teal:"#008080",thistle:"#d8bfd8",tomato:"#ff6347",turquoise:"#40e0d0",violet:"#ee82ee",wheat:"#f5deb3",white:"#ffffff",whitesmoke:"#f5f5f5",yellow:"#ffff00",yellowgreen:"#9acd32"};function Jf(o){let i={r:0,g:0,b:0},r=1,a=null,n=null,w=null,b=!1,c=!1;if(typeof o==="string")o=nt(o);if(typeof o==="object"){if(ui(o.r)&&ui(o.g)&&ui(o.b))i=$f(o.r,o.g,o.b),b=!0,c=String(o.r).substr(-1)==="%"?"prgb":"rgb";else if(ui(o.h)&&ui(o.s)&&ui(o.v))a=Yr(o.s),n=Yr(o.v),i=qf(o.h,a,n),b=!0,c="hsv";else if(ui(o.h)&&ui(o.s)&&ui(o.l))a=Yr(o.s),w=Yr(o.l),i=Yf(o.h,a,w),b=!0,c="hsl";else if(ui(o.c)&&ui(o.m)&&ui(o.y)&&ui(o.k))i=Uf(o.c,o.m,o.y,o.k),b=!0,c="cmyk";if(Object.prototype.hasOwnProperty.call(o,"a"))r=o.a}return r=s2(r),{ok:b,format:o.format||c,r:Math.min(255,Math.max(i.r,0)),g:Math.min(255,Math.max(i.g,0)),b:Math.min(255,Math.max(i.b,0)),a:r}}var rt="[-\\+]?\\d+%?",at="[-\\+]?\\d*\\.\\d+%?",l0="(?:"+at+")|(?:"+rt+")",k1="[\\s|\\(]+("+l0+")[,|\\s]+("+l0+")[,|\\s]+("+l0+")\\s*\\)?",u2="[\\s|\\(]+("+l0+")[,|\\s]+("+l0+")[,|\\s]+("+l0+")[,|\\s]+("+l0+")\\s*\\)?",Li={CSS_UNIT:new RegExp(l0),rgb:new RegExp("rgb"+k1),rgba:new RegExp("rgba"+u2),hsl:new RegExp("hsl"+k1),hsla:new RegExp("hsla"+u2),hsv:new RegExp("hsv"+k1),hsva:new RegExp("hsva"+u2),cmyk:new RegExp("cmyk"+u2),hex3:/^#?([0-9a-fA-F]{1})([0-9a-fA-F]{1})([0-9a-fA-F]{1})$/,hex6:/^#?([0-9a-fA-F]{2})([0-9a-fA-F]{2})([0-9a-fA-F]{2})$/,hex4:/^#?([0-9a-fA-F]{1})([0-9a-fA-F]{1})([0-9a-fA-F]{1})([0-9a-fA-F]{1})$/,hex8:/^#?([0-9a-fA-F]{2})([0-9a-fA-F]{2})([0-9a-fA-F]{2})([0-9a-fA-F]{2})$/};function nt(o){if(o=o.trim().toLowerCase(),o.length===0)return!1;let i=!1;if(qr[o])o=qr[o],i=!0;else if(o==="transparent")return{r:0,g:0,b:0,a:0,format:"name"};let r=Li.rgb.exec(o);if(r)return{r:r[1],g:r[2],b:r[3]};if(r=Li.rgba.exec(o),r)return{r:r[1],g:r[2],b:r[3],a:r[4]};if(r=Li.hsl.exec(o),r)return{h:r[1],s:r[2],l:r[3]};if(r=Li.hsla.exec(o),r)return{h:r[1],s:r[2],l:r[3],a:r[4]};if(r=Li.hsv.exec(o),r)return{h:r[1],s:r[2],v:r[3]};if(r=Li.hsva.exec(o),r)return{h:r[1],s:r[2],v:r[3],a:r[4]};if(r=Li.cmyk.exec(o),r)return{c:r[1],m:r[2],y:r[3],k:r[4]};if(r=Li.hex8.exec(o),r)return{r:ci(r[1]),g:ci(r[2]),b:ci(r[3]),a:D1(r[4]),format:i?"name":"hex8"};if(r=Li.hex6.exec(o),r)return{r:ci(r[1]),g:ci(r[2]),b:ci(r[3]),format:i?"name":"hex"};if(r=Li.hex4.exec(o),r)return{r:ci(r[1]+r[1]),g:ci(r[2]+r[2]),b:ci(r[3]+r[3]),a:D1(r[4]+r[4]),format:i?"name":"hex8"};if(r=Li.hex3.exec(o),r)return{r:ci(r[1]+r[1]),g:ci(r[2]+r[2]),b:ci(r[3]+r[3]),format:i?"name":"hex"};return!1}function ui(o){if(typeof o==="number")return!Number.isNaN(o);return Li.CSS_UNIT.test(o)}class qo{constructor(o="",i={}){if(o instanceof qo)return o;if(typeof o==="number")o=Xf(o);this.originalInput=o;let r=Jf(o);if(this.originalInput=o,this.r=r.r,this.g=r.g,this.b=r.b,this.a=r.a,this.roundA=Math.round(100*this.a)/100,this.format=i.format??r.format,this.gradientType=i.gradientType,this.r<1)this.r=Math.round(this.r);if(this.g<1)this.g=Math.round(this.g);if(this.b<1)this.b=Math.round(this.b);this.isValid=r.ok}isDark(){return this.getBrightness()<128}isLight(){return!this.isDark()}getBrightness(){let o=this.toRgb();return(o.r*299+o.g*587+o.b*114)/1000}getLuminance(){let o=this.toRgb(),i,r,a,n=o.r/255,w=o.g/255,b=o.b/255;if(n<=0.03928)i=n/12.92;else i=Math.pow((n+0.055)/1.055,2.4);if(w<=0.03928)r=w/12.92;else r=Math.pow((w+0.055)/1.055,2.4);if(b<=0.03928)a=b/12.92;else a=Math.pow((b+0.055)/1.055,2.4);return 0.2126*i+0.7152*r+0.0722*a}getAlpha(){return this.a}setAlpha(o){return this.a=s2(o),this.roundA=Math.round(100*this.a)/100,this}isMonochrome(){let{s:o}=this.toHsl();return o===0}toHsv(){let o=O1(this.r,this.g,this.b);return{h:o.h*360,s:o.s,v:o.v,a:this.a}}toHsvString(){let o=O1(this.r,this.g,this.b),i=Math.round(o.h*360),r=Math.round(o.s*100),a=Math.round(o.v*100);return this.a===1?`hsv(${i}, ${r}%, ${a}%)`:`hsva(${i}, ${r}%, ${a}%, ${this.roundA})`}toHsl(){let o=N1(this.r,this.g,this.b);return{h:o.h*360,s:o.s,l:o.l,a:this.a}}toHslString(){let o=N1(this.r,this.g,this.b),i=Math.round(o.h*360),r=Math.round(o.s*100),a=Math.round(o.l*100);return this.a===1?`hsl(${i}, ${r}%, ${a}%)`:`hsla(${i}, ${r}%, ${a}%, ${this.roundA})`}toHex(o=!1){return A1(this.r,this.g,this.b,o)}toHexString(o=!1){return"#"+this.toHex(o)}toHex8(o=!1){return Lf(this.r,this.g,this.b,this.a,o)}toHex8String(o=!1){return"#"+this.toHex8(o)}toHexShortString(o=!1){return this.a===1?this.toHexString(o):this.toHex8String(o)}toRgb(){return{r:Math.round(this.r),g:Math.round(this.g),b:Math.round(this.b),a:this.a}}toRgbString(){let o=Math.round(this.r),i=Math.round(this.g),r=Math.round(this.b);return this.a===1?`rgb(${o}, ${i}, ${r})`:`rgba(${o}, ${i}, ${r}, ${this.roundA})`}toPercentageRgb(){let o=(i)=>`${Math.round(Eo(i,255)*100)}%`;return{r:o(this.r),g:o(this.g),b:o(this.b),a:this.a}}toPercentageRgbString(){let o=(i)=>Math.round(Eo(i,255)*100);return this.a===1?`rgb(${o(this.r)}%, ${o(this.g)}%, ${o(this.b)}%)`:`rgba(${o(this.r)}%, ${o(this.g)}%, ${o(this.b)}%, ${this.roundA})`}toCmyk(){return{...E1(this.r,this.g,this.b)}}toCmykString(){let{c:o,m:i,y:r,k:a}=E1(this.r,this.g,this.b);return`cmyk(${o}, ${i}, ${r}, ${a})`}toName(){if(this.a===0)return"transparent";if(this.a<1)return!1;let o="#"+A1(this.r,this.g,this.b,!1);for(let[i,r]of Object.entries(qr))if(o===r)return i;return!1}toString(o){let i=Boolean(o);o=o??this.format;let r=!1,a=this.a<1&&this.a>=0;if(!i&&a&&(o.startsWith("hex")||o==="name")){if(o==="name"&&this.a===0)return this.toName();return this.toRgbString()}if(o==="rgb")r=this.toRgbString();if(o==="prgb")r=this.toPercentageRgbString();if(o==="hex"||o==="hex6")r=this.toHexString();if(o==="hex3")r=this.toHexString(!0);if(o==="hex4")r=this.toHex8String(!0);if(o==="hex8")r=this.toHex8String();if(o==="name")r=this.toName();if(o==="hsl")r=this.toHslString();if(o==="hsv")r=this.toHsvString();if(o==="cmyk")r=this.toCmykString();return r||this.toHexString()}toNumber(){return(Math.round(this.r)<<16)+(Math.round(this.g)<<8)+Math.round(this.b)}clone(){return new qo(this.toString())}lighten(o=10){let i=this.toHsl();return i.l+=o/100,i.l=$r(i.l),new qo(i)}brighten(o=10){let i=this.toRgb();return i.r=Math.max(0,Math.min(255,i.r-Math.round(255*-(o/100)))),i.g=Math.max(0,Math.min(255,i.g-Math.round(255*-(o/100)))),i.b=Math.max(0,Math.min(255,i.b-Math.round(255*-(o/100)))),new qo(i)}darken(o=10){let i=this.toHsl();return i.l-=o/100,i.l=$r(i.l),new qo(i)}tint(o=10){return this.mix("white",o)}shade(o=10){return this.mix("black",o)}desaturate(o=10){let i=this.toHsl();return i.s-=o/100,i.s=$r(i.s),new qo(i)}saturate(o=10){let i=this.toHsl();return i.s+=o/100,i.s=$r(i.s),new qo(i)}greyscale(){return this.desaturate(100)}spin(o){let i=this.toHsl(),r=(i.h+o)%360;return i.h=r<0?360+r:r,new qo(i)}mix(o,i=50){let r=this.toRgb(),a=new qo(o).toRgb(),n=i/100,w={r:(a.r-r.r)*n+r.r,g:(a.g-r.g)*n+r.g,b:(a.b-r.b)*n+r.b,a:(a.a-r.a)*n+r.a};return new qo(w)}analogous(o=6,i=30){let r=this.toHsl(),a=360/i,n=[this];for(r.h=(r.h-(a*o>>1)+720)%360;--o;)r.h=(r.h+a)%360,n.push(new qo(r));return n}complement(){let o=this.toHsl();return o.h=(o.h+180)%360,new qo(o)}monochromatic(o=6){let i=this.toHsv(),{h:r}=i,{s:a}=i,{v:n}=i,w=[],b=1/o;while(o--)w.push(new qo({h:r,s:a,v:n})),n=(n+b)%1;return w}splitcomplement(){let o=this.toHsl(),{h:i}=o;return[this,new qo({h:(i+72)%360,s:o.s,l:o.l}),new qo({h:(i+216)%360,s:o.s,l:o.l})]}onBackground(o){let i=this.toRgb(),r=new qo(o).toRgb(),a=i.a+r.a*(1-i.a);return new qo({r:(i.r*i.a+r.r*r.a*(1-i.a))/a,g:(i.g*i.a+r.g*r.a*(1-i.a))/a,b:(i.b*i.a+r.b*r.a*(1-i.a))/a,a})}triad(){return this.polyad(3)}tetrad(){return this.polyad(4)}polyad(o){let i=this.toHsl(),{h:r}=i,a=[this],n=360/o;for(let w=1;w<o;w++)a.push(new qo({h:(r+w*n)%360,s:i.s,l:i.l}));return a}equals(o){let i=new qo(o);if(this.format==="cmyk"||i.format==="cmyk")return this.toCmykString()===i.toCmykString();return this.toRgbString()===i.toRgbString()}}/*! Copyright 2026 Fonticons, Inc. - https://webawesome.com/license */var k=class extends E{constructor(){super();if(this.hasSlotController=new W(this,"hint","label"),this.isSafeValue=!1,this.localize=new B(this),this.hasFocus=!1,this.isDraggingGridHandle=!1,this.inputValue="",this.hue=0,this.isEmpty=!0,this.saturation=100,this.brightness=100,this.alpha=100,this._value=null,this.defaultValue=this.getAttribute("value")||null,this.withLabel=!1,this.withHint=!1,this.hasEyeDropper=!1,this.label="",this.hint="",this.format="hex",this.size="m",this.placement="bottom-start",this.withoutFormatToggle=!1,this.name=null,this.disabled=!1,this.open=!1,this.opacity=!1,this.uppercase=!1,this.swatches="",this.required=!1,this.handleFocusIn=()=>{this.hasFocus=!0},this.handleFocusOut=()=>{this.hasFocus=!1},this.reportValidityAfterShow=()=>{this.removeEventListener("invalid",this.emitInvalid),this.reportValidity(),this.addEventListener("invalid",this.emitInvalid)},this.handleKeyDown=(i)=>{if(this.open&&i.key==="Escape"&&Ao(this))i.stopPropagation(),this.hide(),this.focus()},this.handleDocumentKeyDown=(i)=>{if(i.key==="Escape"&&this.open&&Ao(this)){i.stopPropagation(),this.focus(),this.hide();return}if(i.key==="Tab")setTimeout(()=>{let r=this.getRootNode()instanceof ShadowRoot?document.activeElement?.shadowRoot?.activeElement:document.activeElement;if(!this||r?.closest(this.tagName.toLowerCase())!==this)this.hide()})},this.handleDocumentMouseDown=(i)=>{let a=i.composedPath().some((n)=>n instanceof Element&&(n.closest(".color-picker")||n===this.trigger));if(this&&!a)this.hide()},!M)this.addEventListener("focusin",this.handleFocusIn),this.addEventListener("focusout",this.handleFocusOut);this.opacity=this.hasAttribute("opacity"),this.uppercase=this.hasAttribute("uppercase");let o=this.getAttribute("format");if(o==="rgb"||o==="hsl"||o==="hsv")this.format=o;this.handleValueChange("",this.value||"")}static get validators(){let o=M?[]:[ti()];return[...super.validators,...o]}get validationTarget(){if(this.popup?.active)return this.input;return this.trigger}get value(){if(this.valueHasChanged)return this._value;return this._value??this.defaultValue}set value(o){if(this._value===o)return;this.valueHasChanged=!0,this._value=o}handleSizeChange(){j(this.localName,this.size)}updateFormValue(o){if(o==null){this.setValue("",null);return}super.updateFormValue(o)}handleCopy(){this.input.select(),document.execCommand("copy"),this.previewButton.focus(),this.previewButton.classList.add("preview-color-copied"),this.previewButton.addEventListener("animationend",()=>{this.previewButton.classList.remove("preview-color-copied")})}handleFormatToggle(){let o=["hex","rgb","hsl","hsv"],i=(o.indexOf(this.format)+1)%o.length;this.format=o[i],this.setColor(this.value||""),this.updateComplete.then(()=>{this.dispatchEvent(new Event("change",{bubbles:!0,composed:!0})),this.dispatchEvent(new InputEvent("input",{bubbles:!0,composed:!0}))})}handleAlphaDrag(o){let i=this.shadowRoot.querySelector(".slider.alpha"),r=i.querySelector(".slider-handle"),{width:a}=i.getBoundingClientRect(),n=this.value,w=this.value;r.focus(),o.preventDefault(),z0(i,{onMove:(b)=>{if(this.alpha=D(b/a*100,0,100),this.syncValues(),this.value!==w)w=this.value,this.updateComplete.then(()=>{this.dispatchEvent(new InputEvent("input",{bubbles:!0,composed:!0}))})},onStop:()=>{if(this.value!==n)n=this.value,this.updateComplete.then(()=>{this.dispatchEvent(new Event("change",{bubbles:!0,composed:!0}))})},initialEvent:o})}handleHueDrag(o){let i=this.shadowRoot.querySelector(".slider.hue"),r=i.querySelector(".slider-handle"),{width:a}=i.getBoundingClientRect(),n=this.value,w=this.value;r.focus(),o.preventDefault(),z0(i,{onMove:(b)=>{if(this.hue=D(b/a*360,0,360),this.syncValues(),this.value!==w)w=this.value,this.updateComplete.then(()=>{this.dispatchEvent(new InputEvent("input"))})},onStop:()=>{if(this.value!==n)n=this.value,this.updateComplete.then(()=>{this.dispatchEvent(new Event("change",{bubbles:!0,composed:!0}))})},initialEvent:o})}handleGridDrag(o){let i=this.shadowRoot.querySelector(".grid"),r=i.querySelector(".grid-handle"),{width:a,height:n}=i.getBoundingClientRect(),w=this.value,b=this.value;r.focus(),o.preventDefault(),this.isDraggingGridHandle=!0,z0(i,{onMove:(c,m)=>{if(this.saturation=D(c/a*100,0,100),this.brightness=D(100-m/n*100,0,100),this.syncValues(),this.value!==b)b=this.value,this.updateComplete.then(()=>{this.dispatchEvent(new InputEvent("input",{bubbles:!0,composed:!0}))})},onStop:()=>{if(this.isDraggingGridHandle=!1,this.value!==w)w=this.value,this.updateComplete.then(()=>{this.dispatchEvent(new Event("change",{bubbles:!0,composed:!0}))})},initialEvent:o})}handleAlphaKeyDown(o){let i=o.shiftKey?10:1,r=this.value;if(o.key==="ArrowLeft")o.preventDefault(),this.alpha=D(this.alpha-i,0,100),this.syncValues();if(o.key==="ArrowRight")o.preventDefault(),this.alpha=D(this.alpha+i,0,100),this.syncValues();if(o.key==="Home")o.preventDefault(),this.alpha=0,this.syncValues();if(o.key==="End")o.preventDefault(),this.alpha=100,this.syncValues();if(this.value!==r)this.updateComplete.then(()=>{this.dispatchEvent(new InputEvent("input",{bubbles:!0,composed:!0})),this.dispatchEvent(new Event("change",{bubbles:!0,composed:!0}))})}handleHueKeyDown(o){let i=o.shiftKey?10:1,r=this.value;if(o.key==="ArrowLeft")o.preventDefault(),this.hue=D(this.hue-i,0,360),this.syncValues();if(o.key==="ArrowRight")o.preventDefault(),this.hue=D(this.hue+i,0,360),this.syncValues();if(o.key==="Home")o.preventDefault(),this.hue=0,this.syncValues();if(o.key==="End")o.preventDefault(),this.hue=360,this.syncValues();if(this.value!==r)this.updateComplete.then(()=>{this.dispatchEvent(new InputEvent("input",{bubbles:!0,composed:!0})),this.dispatchEvent(new Event("change",{bubbles:!0,composed:!0}))})}handleGridKeyDown(o){let i=o.shiftKey?10:1,r=this.value;if(o.key==="ArrowLeft")o.preventDefault(),this.saturation=D(this.saturation-i,0,100),this.syncValues();if(o.key==="ArrowRight")o.preventDefault(),this.saturation=D(this.saturation+i,0,100),this.syncValues();if(o.key==="ArrowUp")o.preventDefault(),this.brightness=D(this.brightness+i,0,100),this.syncValues();if(o.key==="ArrowDown")o.preventDefault(),this.brightness=D(this.brightness-i,0,100),this.syncValues();if(this.value!==r)this.updateComplete.then(()=>{this.dispatchEvent(new InputEvent("input",{bubbles:!0,composed:!0})),this.dispatchEvent(new Event("change",{bubbles:!0,composed:!0}))})}handleInputChange(o){let i=o.target,r=this.value;if(o.stopPropagation(),this.input.value)this.setColor(i.value),i.value=this.value||"";else this.value="";if(this.value!==r)this.updateComplete.then(()=>{this.dispatchEvent(new InputEvent("input",{bubbles:!0,composed:!0})),this.dispatchEvent(new Event("change",{bubbles:!0,composed:!0}))})}handleInputInput(o){this.updateValidity(),o.stopPropagation()}handleInputKeyDown(o){if(o.key==="Enter"){let i=this.value;if(this.input.value){if(this.setColor(this.input.value),this.input.value=this.value,this.value!==i)this.updateComplete.then(()=>{this.dispatchEvent(new InputEvent("input",{bubbles:!0,composed:!0})),this.dispatchEvent(new Event("change",{bubbles:!0,composed:!0}))});setTimeout(()=>this.input.select())}else this.hue=0}}handleTouchMove(o){o.preventDefault()}parseColor(o){if(!o||o.trim()==="")return null;let i=new qo(o);if(!i.isValid)return null;let r=i.toHsl(),a=i.toRgb(),n=i.toHsv();if(!a||a.r==null||a.g==null||a.b==null)return null;let w={h:r.h||0,s:(r.s||0)*100,l:(r.l||0)*100,a:r.a||0},b=i.toHexString(),c=i.toHex8String(),m={h:n.h||0,s:(n.s||0)*100,v:(n.v||0)*100,a:n.a||0};return{hsl:{h:w.h,s:w.s,l:w.l,string:this.setLetterCase(`hsl(${Math.round(w.h)}, ${Math.round(w.s)}%, ${Math.round(w.l)}%)`)},hsla:{h:w.h,s:w.s,l:w.l,a:w.a,string:this.setLetterCase(`hsla(${Math.round(w.h)}, ${Math.round(w.s)}%, ${Math.round(w.l)}%, ${w.a.toFixed(2).toString()})`)},hsv:{h:m.h,s:m.s,v:m.v,string:this.setLetterCase(`hsv(${Math.round(m.h)}, ${Math.round(m.s)}%, ${Math.round(m.v)}%)`)},hsva:{h:m.h,s:m.s,v:m.v,a:m.a,string:this.setLetterCase(`hsva(${Math.round(m.h)}, ${Math.round(m.s)}%, ${Math.round(m.v)}%, ${m.a.toFixed(2).toString()})`)},rgb:{r:a.r,g:a.g,b:a.b,string:this.setLetterCase(`rgb(${Math.round(a.r)}, ${Math.round(a.g)}, ${Math.round(a.b)})`)},rgba:{r:a.r,g:a.g,b:a.b,a:a.a||0,string:this.setLetterCase(`rgba(${Math.round(a.r)}, ${Math.round(a.g)}, ${Math.round(a.b)}, ${(a.a||0).toFixed(2).toString()})`)},hex:this.setLetterCase(b),hexa:this.setLetterCase(c)}}setColor(o){let i=this.parseColor(o);if(i===null)return!1;return this.hue=i.hsva.h,this.saturation=i.hsva.s,this.brightness=i.hsva.v,this.alpha=this.opacity?i.hsva.a*100:100,this.syncValues(),!0}setLetterCase(o){if(typeof o!=="string")return"";return this.uppercase?o.toUpperCase():o.toLowerCase()}async syncValues(){let o=this.parseColor(`hsva(${this.hue}, ${this.saturation}%, ${this.brightness}%, ${this.alpha/100})`);if(o===null)return;if(this.format==="hsl")this.inputValue=this.opacity?o.hsla.string:o.hsl.string;else if(this.format==="rgb")this.inputValue=this.opacity?o.rgba.string:o.rgb.string;else if(this.format==="hsv")this.inputValue=this.opacity?o.hsva.string:o.hsv.string;else this.inputValue=this.opacity?o.hexa:o.hex;this.isSafeValue=!0,this.value=this.inputValue,await this.updateComplete,this.isSafeValue=!1}handleAfterHide(){this.previewButton.classList.remove("preview-color-copied"),this.updateValidity()}handleAfterShow(){this.updateValidity()}handleEyeDropper(){if(!this.hasEyeDropper)return;new EyeDropper().open().then((i)=>{let r=this.value;if(this.setColor(i.sRGBHex),this.value!==r)this.updateComplete.then(()=>{this.dispatchEvent(new InputEvent("input",{bubbles:!0,composed:!0})),this.dispatchEvent(new Event("change",{bubbles:!0,composed:!0}))})}).catch(()=>{})}selectSwatch(o){let i=this.value;if(!this.disabled){if(this.setColor(o),this.value!==i)this.updateComplete.then(()=>{this.dispatchEvent(new InputEvent("input",{bubbles:!0,composed:!0})),this.dispatchEvent(new Event("change",{bubbles:!0,composed:!0}))})}}getHexString(o,i,r,a=100){let n=new qo(`hsva(${o}, ${i}%, ${r}%, ${a/100})`);if(!n.isValid)return"";return n.toHex8String()}stopNestedEventPropagation(o){o.stopImmediatePropagation()}handleFormatChange(){this.syncValues()}handleOpacityChange(){this.alpha=100}willUpdate(o){if(o.has("value")||o.has("defaultValue"))this.handleValueChange(o.get("value")||"",this.value||"");super.willUpdate(o)}handleValueChange(o,i){if(this.isEmpty=!i,!i)this.hue=0,this.saturation=0,this.brightness=100,this.alpha=100;if(!this.isSafeValue){let r=this.parseColor(i);if(r!==null)this.inputValue=this.value||"",this.hue=r.hsva.h,this.saturation=r.hsva.s,this.brightness=r.hsva.v,this.alpha=this.opacity?r.hsva.a*100:100,this.syncValues();else this.inputValue=o??""}this.requestUpdate()}focus(o){this.trigger.focus(o)}blur(){let o=this.trigger;if(this.hasFocus)o.focus({preventScroll:!0}),o.blur();if(this.popup?.active)this.hide()}getFormattedValue(o="hex"){let i=this.parseColor(`hsva(${this.hue}, ${this.saturation}%, ${this.brightness}%, ${this.alpha/100})`);if(i===null)return"";switch(o){case"hex":return i.hex;case"hexa":return i.hexa;case"rgb":return i.rgb.string;case"rgba":return i.rgba.string;case"hsl":return i.hsl.string;case"hsla":return i.hsla.string;case"hsv":return i.hsv.string;case"hsva":return i.hsva.string;default:return""}}reportValidity(){if(!this.validity.valid&&!this.open){if(this.addEventListener("wa-after-show",this.reportValidityAfterShow,{once:!0}),this.show(),!this.disabled)this.dispatchEvent(new fr);return!1}return super.reportValidity()}formResetCallback(){this.value=this.defaultValue,super.formResetCallback()}firstUpdated(o){super.firstUpdated(o),this.hasEyeDropper="EyeDropper"in window}handleTriggerClick(){if(this.open)this.hide();else this.show(),this.focus()}async handleTriggerKeyDown(o){if([" ","Enter"].includes(o.key)){o.preventDefault(),this.handleTriggerClick();return}}handleTriggerKeyUp(o){if(o.key===" ")o.preventDefault()}updateAccessibleTrigger(){let o=this.trigger;if(o)o.setAttribute("aria-haspopup","true"),o.setAttribute("aria-expanded",this.open?"true":"false")}async show(){if(this.open)return;return this.open=!0,Yo(this,"wa-after-show")}async hide(){if(!this.open)return;return this.open=!1,Yo(this,"wa-after-hide")}addOpenListeners(){this.base.addEventListener("keydown",this.handleKeyDown),document.addEventListener("keydown",this.handleDocumentKeyDown),document.addEventListener("mousedown",this.handleDocumentMouseDown),_o(this)}removeOpenListeners(){if(this.base)this.base.removeEventListener("keydown",this.handleKeyDown);document.removeEventListener("keydown",this.handleDocumentKeyDown),document.removeEventListener("mousedown",this.handleDocumentMouseDown),Mo(this)}async handleOpenChange(){if(this.disabled){this.open=!1;return}if(this.updateAccessibleTrigger(),this.open)this.dispatchEvent(new CustomEvent("wa-show")),this.addOpenListeners(),await this.updateComplete,this.base.hidden=!1,this.popup.active=!0,await P(this.popup.popup,"show-with-scale"),this.dispatchEvent(new CustomEvent("wa-after-show"));else this.dispatchEvent(new CustomEvent("wa-hide")),this.removeOpenListeners(),await P(this.popup.popup,"hide-with-scale"),this.base.hidden=!0,this.popup.active=!1,this.dispatchEvent(new CustomEvent("wa-after-hide"))}render(){let o=this.isEmpty,i=this.hasSlotController.test("label","withLabel"),r=this.hasSlotController.test("hint","withHint"),a=this.label?!0:!!i,n=this.hint?!0:!!r,w=this.saturation,b=100-this.brightness,c=Array.isArray(this.swatches)?this.swatches.map((p)=>typeof p==="string"?{color:p,label:p}:p):this.swatches.split(";").filter((p)=>p.trim()!=="").map((p)=>({color:p.trim(),label:p.trim()})),m=h`
      <div
        part="base color-picker"
        class=${Z({"color-picker":!0})}
        aria-disabled=${this.disabled?"true":"false"}
        tabindex="-1"
      >
        <div
          part="grid"
          class="grid"
          style=${mo({backgroundColor:this.getHexString(this.hue,100,100)})}
          @pointerdown=${this.handleGridDrag}
          @touchmove=${this.handleTouchMove}
        >
          <span
            part="grid-handle"
            class=${Z({"grid-handle":!0,"grid-handle-dragging":this.isDraggingGridHandle})}
            style=${mo({top:`${b}%`,left:`${w}%`,backgroundColor:this.getHexString(this.hue,this.saturation,this.brightness,this.alpha)})}
            role="application"
            aria-label="HSV"
            tabindex=${Q(this.disabled?void 0:"0")}
            @keydown=${this.handleGridKeyDown}
          ></span>
        </div>

        <div class="controls">
          <div class="sliders">
            <div
              part="slider hue-slider"
              class="hue slider"
              @pointerdown=${this.handleHueDrag}
              @touchmove=${this.handleTouchMove}
            >
              <span
                part="slider-handle hue-slider-handle"
                class="slider-handle"
                style=${mo({left:`${this.hue===0?0:100/(360/this.hue)}%`,backgroundColor:this.getHexString(this.hue,100,100)})}
                role="slider"
                aria-label="hue"
                aria-orientation="horizontal"
                aria-valuemin="0"
                aria-valuemax="360"
                aria-valuenow=${`${Math.round(this.hue)}`}
                tabindex=${Q(this.disabled?void 0:"0")}
                @keydown=${this.handleHueKeyDown}
              ></span>
            </div>

            ${this.opacity?h`
                  <div
                    part="slider opacity-slider"
                    class="alpha slider transparent-bg"
                    @pointerdown="${this.handleAlphaDrag}"
                    @touchmove=${this.handleTouchMove}
                  >
                    <div
                      class="alpha-gradient"
                      style=${mo({backgroundImage:`linear-gradient(
                          to right,
                          ${this.getHexString(this.hue,this.saturation,this.brightness,0)} 0%,
                          ${this.getHexString(this.hue,this.saturation,this.brightness,100)} 100%
                        )`})}
                    ></div>
                    <span
                      part="slider-handle opacity-slider-handle"
                      class="slider-handle"
                      style=${mo({left:`${this.alpha}%`,backgroundColor:this.getHexString(this.hue,this.saturation,this.brightness,this.alpha)})}
                      role="slider"
                      aria-label="alpha"
                      aria-orientation="horizontal"
                      aria-valuemin="0"
                      aria-valuemax="100"
                      aria-valuenow=${Math.round(this.alpha)}
                      tabindex=${Q(this.disabled?void 0:"0")}
                      @keydown=${this.handleAlphaKeyDown}
                    ></span>
                  </div>
                `:""}
          </div>

          <button
            type="button"
            part="preview"
            class="preview transparent-bg"
            aria-label=${this.localize.term("copy")}
            style=${mo({"--preview-color":this.getHexString(this.hue,this.saturation,this.brightness,this.alpha)})}
            @click=${this.handleCopy}
          ></button>
        </div>

        <div class="user-input" aria-live="polite">
          <wa-input
            part="input"
            type="text"
            name=${this.name}
            size="s"
            autocomplete="off"
            autocorrect="off"
            autocapitalize="off"
            spellcheck="false"
            .value=${o?"":this.inputValue}
            value=${o?"":this.inputValue}
            ?required=${this.required}
            ?disabled=${this.disabled}
            aria-label=${this.localize.term("currentValue")}
            @keydown=${this.handleInputKeyDown}
            @change=${this.handleInputChange}
            @input=${this.handleInputInput}
            @blur=${this.stopNestedEventPropagation}
            @focus=${this.stopNestedEventPropagation}
          ></wa-input>

          <wa-button-group>
            ${!this.withoutFormatToggle?h`
                  <wa-button
                    part="format-button"
                    size="s"
                    appearance="outlined"
                    aria-label=${this.localize.term("toggleColorFormat")}
                    exportparts="
                      base:format-button__base,
                      start:format-button__start,
                      label:format-button__label,
                      end:format-button__end,
                      caret:format-button__caret
                    "
                    @click=${this.handleFormatToggle}
                    @blur=${this.stopNestedEventPropagation}
                    @focus=${this.stopNestedEventPropagation}
                  >
                    ${this.setLetterCase(this.format)}
                  </wa-button>
                `:""}
            ${this.hasEyeDropper?h`
                  <wa-button
                    part="eyedropper-button"
                    size="s"
                    appearance="outlined"
                    exportparts="
                      base:eyedropper-button__base,
                      start:eyedropper-button__start,
                      label:eyedropper-button__label,
                      end:eyedropper-button__end,
                      caret:eyedropper-button__caret
                    "
                    @click=${this.handleEyeDropper}
                    @blur=${this.stopNestedEventPropagation}
                    @focus=${this.stopNestedEventPropagation}
                  >
                    <wa-icon
                      library="system"
                      name="eyedropper"
                      variant="solid"
                      label=${this.localize.term("selectAColorFromTheScreen")}
                    ></wa-icon>
                  </wa-button>
                `:""}
          </wa-button-group>
        </div>

        ${c.length>0?h`
              <div part="swatches" class="swatches">
                ${c.map((p)=>{let d=this.parseColor(p.color);if(!d)return"";return h`
                    <div
                      part="swatch"
                      class="swatch transparent-bg"
                      tabindex=${Q(this.disabled?void 0:"0")}
                      role="button"
                      aria-label=${p.label}
                      @click=${()=>this.selectSwatch(p.color)}
                      @keydown=${(s)=>{if(s.key==="Enter"||s.key===" ")s.preventDefault(),this.selectSwatch(p.color)}}
                    >
                      <div class="swatch-color" style=${mo({backgroundColor:d.hexa})}></div>
                    </div>
                  `})}
              </div>
            `:""}
      </div>
    `;return h`
      <div
        class=${Z({container:!0,"form-control":!0,"form-control-has-label":a})}
        part="trigger-container form-control"
      >
        <div
          part="form-control-label"
          class=${Z({label:!0,"has-label":a})}
          id="form-control-label"
        >
          <slot name="label">${this.label}</slot>
        </div>

        <button
          id="trigger"
          part="trigger form-control-input"
          class=${Z({trigger:!0,"trigger-empty":o,"transparent-bg":!0,"form-control-input":!0})}
          style=${mo({color:this.getHexString(this.hue,this.saturation,this.brightness,this.alpha)})}
          type="button"
          aria-labelledby="form-control-label"
          aria-describedby="hint"
          .disabled=${this.disabled}
          @click=${this.handleTriggerClick}
          @keydown=${this.handleTriggerKeyDown}
          @keyup=${this.handleTriggerKeyUp}
        ></button>

        <slot
          id="hint"
          name="hint"
          part="hint"
          class=${Z({"has-slotted":n})}
          >${this.hint}</slot
        >
      </div>

      <wa-popup
        class="color-popup"
        anchor="trigger"
        placement=${this.placement}
        distance="0"
        skidding="0"
        flip
        flip-fallback-strategy="best-fit"
        shift
        shift-padding="10"
        aria-disabled=${this.disabled?"true":"false"}
        @wa-after-show=${this.handleAfterShow}
        @wa-after-hide=${this.handleAfterHide}
      >
        ${m}
      </wa-popup>
    `}};k.css=[Ii,I,go,Ff];k.shadowRootOptions={...E.shadowRootOptions,delegatesFocus:!0};f([Y('[part~="base"]')],k.prototype,"base",2);f([Y('[part~="input"]')],k.prototype,"input",2);f([Y('[part~="form-control-label"]')],k.prototype,"triggerLabel",2);f([Y('[part~="form-control-input"]')],k.prototype,"triggerButton",2);f([Y(".color-popup")],k.prototype,"popup",2);f([Y('[part~="preview"]')],k.prototype,"previewButton",2);f([Y('[part~="trigger"]')],k.prototype,"trigger",2);f([J()],k.prototype,"hasFocus",2);f([J()],k.prototype,"isDraggingGridHandle",2);f([J()],k.prototype,"inputValue",2);f([J()],k.prototype,"hue",2);f([J()],k.prototype,"isEmpty",2);f([J()],k.prototype,"saturation",2);f([J()],k.prototype,"brightness",2);f([J()],k.prototype,"alpha",2);f([J()],k.prototype,"value",1);f([t({attribute:"value",reflect:!0})],k.prototype,"defaultValue",2);f([t({attribute:"with-label",reflect:!0,type:Boolean})],k.prototype,"withLabel",2);f([t({attribute:"with-hint",reflect:!0,type:Boolean})],k.prototype,"withHint",2);f([J()],k.prototype,"hasEyeDropper",2);f([t()],k.prototype,"label",2);f([t({attribute:"hint"})],k.prototype,"hint",2);f([t()],k.prototype,"format",2);f([t({reflect:!0})],k.prototype,"size",2);f([v("size")],k.prototype,"handleSizeChange",1);f([t({reflect:!0})],k.prototype,"placement",2);f([t({attribute:"without-format-toggle",type:Boolean})],k.prototype,"withoutFormatToggle",2);f([t({reflect:!0})],k.prototype,"name",2);f([t({type:Boolean})],k.prototype,"disabled",2);f([t({type:Boolean,reflect:!0})],k.prototype,"open",2);f([t({type:Boolean})],k.prototype,"opacity",2);f([t({type:Boolean})],k.prototype,"uppercase",2);f([t()],k.prototype,"swatches",2);f([t({type:Boolean,reflect:!0})],k.prototype,"required",2);f([nr({passive:!1})],k.prototype,"handleTouchMove",1);f([v("format",{waitUntilFirstUpdate:!0})],k.prototype,"handleFormatChange",1);f([v("opacity",{waitUntilFirstUpdate:!0})],k.prototype,"handleOpacityChange",1);f([v("value")],k.prototype,"handleValueChange",1);f([v("open",{waitUntilFirstUpdate:!0})],k.prototype,"handleOpenChange",1);k=f([$("wa-color-picker")],k);k.disableWarning?.("change-in-update");/*! Copyright 2026 Fonticons, Inc. - https://webawesome.com/license */var v0=class extends Event{constructor(){super("wa-clear",{bubbles:!0,cancelable:!1,composed:!0})}};/*! Copyright 2026 Fonticons, Inc. - https://webawesome.com/license */function x0(o,i){let r=o.metaKey||o.ctrlKey||o.shiftKey||o.altKey;if(o.key==="Enter"&&!r)setTimeout(()=>{if(!o.defaultPrevented&&!o.isComposing)T1(i)})}function T1(o){let i=null;if("form"in o)i=o.form;if(!i&&"getForm"in o)i=o.getForm();if(!i)return;let r=[...i.elements];if(r.length===1){i.requestSubmit(null);return}let a=r.find((n)=>n.type==="submit"&&!n.matches(":disabled"));if(!a)return;if(["input","button"].includes(a.localName))i.requestSubmit(a);else a.click()}/*! Copyright 2026 Fonticons, Inc. - https://webawesome.com/license */var Zf=F`
  :host {
    border-width: 0;
  }

  :host(:focus) {
    outline: none;
  }

  .text-field {
    display: flex;
    align-items: stretch;
    justify-content: start;
    position: relative;
    transition: inherit;
    height: var(--wa-form-control-height);
    border-color: var(--wa-form-control-border-color);
    border-radius: var(--wa-form-control-border-radius);
    border-style: var(--wa-form-control-border-style);
    border-width: var(--wa-form-control-border-width);
    cursor: text;
    color: var(--wa-form-control-value-color);
    font-size: var(--wa-form-control-value-font-size);
    font-family: inherit;
    font-weight: var(--wa-form-control-value-font-weight);
    line-height: var(--wa-form-control-value-line-height);
    vertical-align: middle;
    width: 100%;
    transition:
      background-color var(--wa-transition-normal),
      border-color var(--wa-transition-normal),
      outline-color var(--wa-transition-fast);
    transition-timing-function: var(--wa-transition-easing);
    background-color: var(--wa-form-control-background-color);
    box-shadow: var(--box-shadow);
    padding: 0 var(--wa-form-control-padding-inline);
    outline: var(--wa-focus-ring-style) var(--wa-focus-ring-width) transparent;
    outline-offset: var(--wa-focus-ring-offset);

    /* Only ring the field when the text input has focus, not inner buttons */
    &:has(input:focus, textarea:focus) {
      outline-color: var(--wa-color-focus);
    }

    /* Style disabled inputs */
    &:has(:disabled) {
      cursor: not-allowed;
      opacity: 0.5;
    }
  }

  /* Appearance modifiers */
  :host([appearance='outlined']) .text-field {
    background-color: var(--wa-form-control-background-color);
    border-color: var(--wa-form-control-border-color);
  }

  :host([appearance='filled']) .text-field {
    background-color: var(--wa-color-neutral-fill-quiet);
    border-color: var(--wa-color-neutral-fill-quiet);
  }

  :host([appearance='filled-outlined']) .text-field {
    background-color: var(--wa-color-neutral-fill-quiet);
    border-color: var(--wa-form-control-border-color);
  }

  :host([pill]) .text-field {
    border-radius: var(--wa-border-radius-pill) !important;
  }

  .text-field {
    /* Show autofill styles over the entire text field, not just the native <input> */
    &:has(:autofill),
    &:has(:-webkit-autofill) {
      background-color: var(--wa-color-brand-fill-quiet) !important;
    }

    input,
    textarea {
      /*
      Fixes an alignment issue with placeholders.
      https://github.com/shoelace-style/webawesome/issues/342
    */
      height: 100%;

      padding: 0;
      border: none;
      outline: none;
      box-shadow: none;
      margin: 0;
      cursor: inherit;
      -webkit-appearance: none;
      font: inherit;

      /* Turn off Safari's autofill styles */
      &:-webkit-autofill,
      &:-webkit-autofill:hover,
      &:-webkit-autofill:focus,
      &:-webkit-autofill:active {
        -webkit-background-clip: text;
        background-color: transparent;
        -webkit-text-fill-color: inherit;
      }
    }
  }

  input {
    flex: 1 1 auto;
    min-width: 0;
    height: 100%;
    transition: inherit;

    /* prettier-ignore */
    background-color: rgb(118 118 118 / 0); /* ensures proper placeholder styles in webkit's date input */
    height: calc(var(--wa-form-control-height) - var(--border-width) * 2);
    padding-block: 0;
    color: inherit;

    &:autofill {
      &,
      &:hover,
      &:focus,
      &:active {
        box-shadow: none;
        caret-color: var(--wa-form-control-value-color);
      }
    }

    &::placeholder {
      color: var(--wa-form-control-placeholder-color);
      user-select: none;
      -webkit-user-select: none;
    }

    &::-webkit-search-decoration,
    &::-webkit-search-cancel-button,
    &::-webkit-search-results-button,
    &::-webkit-search-results-decoration {
      -webkit-appearance: none;
    }

    &:focus {
      outline: none;
    }
  }

  textarea {
    &:autofill {
      &,
      &:hover,
      &:focus,
      &:active {
        box-shadow: none;
        caret-color: var(--wa-form-control-value-color);
      }
    }

    &::placeholder {
      color: var(--wa-form-control-placeholder-color);
      user-select: none;
      -webkit-user-select: none;
    }
  }

  .start,
  .end {
    display: inline-flex;
    flex: 0 0 auto;
    align-items: center;
    cursor: default;

    &::slotted(wa-icon) {
      color: var(--wa-color-neutral-on-quiet);
    }
  }

  .start::slotted(*) {
    margin-inline-end: var(--wa-form-control-padding-inline);
  }

  .end::slotted(*) {
    margin-inline-start: var(--wa-form-control-padding-inline);
  }

  /*
   * Clearable + Password Toggle
   */

  .clear,
  .password-toggle {
    position: relative;
    display: inline-flex;
    align-self: center;
    align-items: center;
    justify-content: center;
    aspect-ratio: 1;
    height: 1.5em;
    font-size: inherit;
    color: var(--wa-color-neutral-on-quiet);
    border: none;
    border-radius: var(--wa-border-radius-s);
    background: none;
    padding: 0;
    transition: var(--wa-transition-normal) color;
    cursor: pointer;
    /* The box is wider than the glyph, so overhang half of that growth on each side. Keeps the
       glyph flush with the field's trailing padding edge, like every other form control. */
    margin-inline-start: calc(var(--wa-form-control-padding-inline) - 0.125em);
    margin-inline-end: -0.125em;

    &::after {
      content: '';
      position: absolute;
      inset-inline: 0;
      height: var(--wa-form-control-height);
    }

    @media (hover: hover) {
      &:hover {
        color: color-mix(in oklab, currentColor, var(--wa-color-mix-hover));
      }
    }

    &:active {
      color: color-mix(in oklab, currentColor, var(--wa-color-mix-active));
    }

    &:focus {
      outline: none;
    }

    &:focus-visible {
      outline: var(--wa-focus-ring);
      outline-offset: var(--wa-focus-ring-offset);
    }
  }

  /* Don't show the browser's password toggle in Edge */
  ::-ms-reveal {
    display: none;
  }

  /* Hide the built-in number spinner */
  :host([without-spin-buttons]) input[type='number'] {
    -moz-appearance: textfield;

    &::-webkit-outer-spin-button,
    &::-webkit-inner-spin-button {
      -webkit-appearance: none;
      display: none;
    }
  }
`;/*! Copyright 2026 Fonticons, Inc. - https://webawesome.com/license */var C=class extends E{constructor(){super(...arguments);this.assumeInteractionOn=["blur","input"],this.hasSlotController=new W(this,"hint","label"),this.localize=new B(this),this.title="",this.type="text",this._value=null,this.defaultValue=this.getAttribute("value")||null,this.size="m",this.appearance="outlined",this.pill=!1,this.label="",this.hint="",this.withClear=!1,this.placeholder="",this.readonly=!1,this.passwordToggle=!1,this.passwordVisible=!1,this.withoutSpinButtons=!1,this.required=!1,this.spellcheck=!0,this.withLabel=!1,this.withHint=!1}static get validators(){return M?[]:[...super.validators,Wo()]}get value(){if(this.valueHasChanged)return this._value;return this._value??this.defaultValue}set value(o){if(this._value===o)return;this.valueHasChanged=!0,this._value=o}updateFormValue(o){if(o==null){this.setValue("",null);return}super.updateFormValue(o)}handleSizeChange(){j(this.localName,this.size)}handleChange(o){this.value=this.input.value,this.relayNativeEvent(o,{bubbles:!0,composed:!0})}handleClearClick(o){if(o.preventDefault(),this.value!=="")this.value="",this.updateComplete.then(()=>{this.dispatchEvent(new v0),this.dispatchEvent(new InputEvent("input",{bubbles:!0,composed:!0})),this.dispatchEvent(new Event("change",{bubbles:!0,composed:!0}))});this.input.focus()}handleInput(){this.value=this.input.value}handleKeyDown(o){x0(o,this)}handlePasswordToggle(){this.passwordVisible=!this.passwordVisible}updated(o){if(super.updated(o),o.has("value")||o.has("defaultValue")||o.has("type")){let i=["number","date","time","datetime-local"];if(this.input&&i.includes(this.type)&&this.value&&this.input.value!==this.value)this._value=this.input.value;this.customStates.set("blank",!this.value),this.updateValidity()}}handleStepChange(){this.input.step=String(this.step),this.updateValidity()}focus(o){this.input.focus(o)}blur(){this.input.blur()}select(){this.input.select()}setSelectionRange(o,i,r="none"){this.input.setSelectionRange(o,i,r)}setRangeText(o,i,r,a="preserve"){let n=i??this.input.selectionStart,w=r??this.input.selectionEnd;if(this.input.setRangeText(o,n,w,a),this.value!==this.input.value)this.value=this.input.value}showPicker(){if("showPicker"in HTMLInputElement.prototype)this.input.showPicker()}stepUp(){if(this.input.stepUp(),this.value!==this.input.value)this.value=this.input.value}stepDown(){if(this.input.stepDown(),this.value!==this.input.value)this.value=this.input.value}formResetCallback(){if(this.value=null,this.input)this.input.value=this.value;super.formResetCallback()}render(){let o=this.hasSlotController.test("label","withLabel"),i=this.hasSlotController.test("hint","withHint"),r=this.label?!0:!!o,a=this.hint?!0:!!i,n=this.withClear&&!this.disabled&&!this.readonly,w=(!this.didSSR||this.hasUpdated)&&n&&(typeof this.value==="number"||this.value&&this.value.length>0);return h`
      <label
        part="form-control-label label"
        class=${Z({label:!0,"has-label":r})}
        for="input"
        aria-hidden=${r?"false":"true"}
      >
        <slot name="label">${this.label}</slot>
      </label>

      <div part="base input-wrapper" class="text-field">
        <slot name="start" part="start" class="start"></slot>

        <input
          part="input"
          id="input"
          class="control"
          type=${this.type==="password"&&this.passwordVisible?"text":this.type}
          title=${this.title}
          name=${Q(this.name)}
          ?disabled=${this.disabled}
          ?readonly=${this.readonly}
          ?required=${this.required}
          placeholder=${Q(this.placeholder)}
          minlength=${Q(this.minlength)}
          maxlength=${Q(this.maxlength)}
          min=${Q(this.min)}
          max=${Q(this.max)}
          step=${Q(this.step)}
          .value=${Oo(this.value??"")}
          autocapitalize=${Q(this.autocapitalize)}
          autocomplete=${Q(this.autocomplete)}
          autocorrect=${this.autocorrect?"on":"off"}
          ?autofocus=${this.autofocus}
          spellcheck=${this.spellcheck}
          pattern=${Q(this.pattern)}
          enterkeyhint=${Q(this.enterkeyhint)}
          inputmode=${Q(this.inputmode)}
          aria-describedby="hint"
          @change=${this.handleChange}
          @input=${this.handleInput}
          @keydown=${this.handleKeyDown}
        />

        ${w?h`
              <button
                part="clear-button"
                class="clear"
                type="button"
                aria-label=${this.localize.term("clearEntry")}
                @click=${this.handleClearClick}
                tabindex="-1"
              >
                <slot name="clear-icon">
                  <wa-icon name="circle-xmark" library="system" variant="regular"></wa-icon>
                </slot>
              </button>
            `:""}
        ${this.passwordToggle&&!this.disabled?h`
              <button
                part="password-toggle-button"
                class="password-toggle"
                type="button"
                aria-label=${this.localize.term(this.passwordVisible?"hidePassword":"showPassword")}
                @click=${this.handlePasswordToggle}
              >
                ${!this.passwordVisible?h`
                      <slot name="show-password-icon">
                        <wa-icon name="eye" library="system" variant="regular"></wa-icon>
                      </slot>
                    `:h`
                      <slot name="hide-password-icon">
                        <wa-icon name="eye-slash" library="system" variant="regular"></wa-icon>
                      </slot>
                    `}
              </button>
            `:""}

        <slot name="end" part="end" class="end"></slot>
      </div>

      <slot
        id="hint"
        part="hint"
        name="hint"
        class=${Z({"has-slotted":a})}
        aria-hidden=${a?"false":"true"}
        >${this.hint}</slot
      >
    `}};C.css=[I,go,Zf];C.shadowRootOptions={...E.shadowRootOptions,delegatesFocus:!0};f([Y("input")],C.prototype,"input",2);f([t()],C.prototype,"title",2);f([t({reflect:!0})],C.prototype,"type",2);f([J()],C.prototype,"value",1);f([t({attribute:"value",reflect:!0})],C.prototype,"defaultValue",2);f([t({reflect:!0})],C.prototype,"size",2);f([v("size")],C.prototype,"handleSizeChange",1);f([t({reflect:!0})],C.prototype,"appearance",2);f([t({type:Boolean,reflect:!0})],C.prototype,"pill",2);f([t()],C.prototype,"label",2);f([t({attribute:"hint"})],C.prototype,"hint",2);f([t({attribute:"with-clear",type:Boolean})],C.prototype,"withClear",2);f([t()],C.prototype,"placeholder",2);f([t({type:Boolean,reflect:!0})],C.prototype,"readonly",2);f([t({attribute:"password-toggle",type:Boolean})],C.prototype,"passwordToggle",2);f([t({attribute:"password-visible",type:Boolean})],C.prototype,"passwordVisible",2);f([t({attribute:"without-spin-buttons",type:Boolean,reflect:!0})],C.prototype,"withoutSpinButtons",2);f([t({type:Boolean,reflect:!0})],C.prototype,"required",2);f([t()],C.prototype,"pattern",2);f([t({type:Number})],C.prototype,"minlength",2);f([t({type:Number})],C.prototype,"maxlength",2);f([t()],C.prototype,"min",2);f([t()],C.prototype,"max",2);f([t()],C.prototype,"step",2);f([t()],C.prototype,"autocapitalize",2);f([t({type:Boolean,converter:{fromAttribute:(o)=>!o||o==="off"?!1:!0,toAttribute:(o)=>o?"on":"off"}})],C.prototype,"autocorrect",2);f([t()],C.prototype,"autocomplete",2);f([t({type:Boolean})],C.prototype,"autofocus",2);f([t()],C.prototype,"enterkeyhint",2);f([t({type:Boolean,converter:{fromAttribute:(o)=>!o||o==="false"?!1:!0,toAttribute:(o)=>o?"true":"false"}})],C.prototype,"spellcheck",2);f([t()],C.prototype,"inputmode",2);f([t({attribute:"with-label",type:Boolean})],C.prototype,"withLabel",2);f([t({attribute:"with-hint",type:Boolean})],C.prototype,"withHint",2);f([v("step",{waitUntilFirstUpdate:!0})],C.prototype,"handleStepChange",1);C=f([$("wa-input")],C);C.disableWarning?.("change-in-update");/*! Copyright 2026 Fonticons, Inc. - https://webawesome.com/license */var z2=class extends Event{constructor(){super("wa-reposition",{bubbles:!0,cancelable:!1,composed:!0})}};/*! Copyright 2026 Fonticons, Inc. - https://webawesome.com/license */var Qf=F`
  :host {
    --arrow-color: black;
    --arrow-size: var(--wa-tooltip-arrow-size);
    --popup-border-width: 0px;
    --show-duration: var(--wa-transition-fast);
    --hide-duration: var(--wa-transition-fast);

    /*
     * These properties are computed to account for the arrow's dimensions after being rotated 45º. The constant
     * 0.7071 is derived from sin(45) to calculate the length of the arrow after rotation.
     *
     * The diamond will be translated inward by --arrow-base-offset, the border thickness, to centralise it on
     * the inner edge of the popup border. This also means we need to increase the size of the arrow by the
     * same amount to compensate.
     *
     * A diamond shaped clipping mask is used to avoid overlap of popup content. This extends slightly inward so
     * the popup border is covered with no sub-pixel rounding artifacts. The diamond corners are mitred at 22.5º
     * to properly merge any arrow border with the popup border. The constant 1.4142 is derived from 1 + tan(22.5).
     *
     */
    --arrow-base-offset: var(--popup-border-width);
    --arrow-size-diagonal: calc((var(--arrow-size) + var(--arrow-base-offset)) * 0.7071);
    --arrow-padding-offset: calc(var(--arrow-size-diagonal) - var(--arrow-size));
    --arrow-size-div: calc(var(--arrow-size-diagonal) * 2);
    --arrow-clipping-corner: calc(var(--arrow-base-offset) * 1.4142);

    display: contents;
  }

  .popup {
    position: absolute;
    isolation: isolate;
    max-width: var(--auto-size-available-width, none);
    max-height: var(--auto-size-available-height, none);

    /* Clear UA styles for [popover] */
    :where(&) {
      inset: unset;
      padding: unset;
      margin: unset;
      width: unset;
      height: unset;
      color: unset;
      background: unset;
      border: unset;
      overflow: unset;
    }
  }

  .popup-fixed {
    position: fixed;
  }

  .popup:not(.popup-active) {
    display: none;
  }

  .arrow {
    position: absolute;
    width: var(--arrow-size-div);
    height: var(--arrow-size-div);
    background: var(--arrow-color);
    z-index: 3;
    clip-path: polygon(
      var(--arrow-clipping-corner) 100%,
      var(--arrow-base-offset) calc(100% - var(--arrow-base-offset)),
      calc(var(--arrow-base-offset) - 2px) calc(100% - var(--arrow-base-offset)),
      calc(100% - var(--arrow-base-offset)) calc(var(--arrow-base-offset) - 2px),
      calc(100% - var(--arrow-base-offset)) var(--arrow-base-offset),
      100% var(--arrow-clipping-corner),
      100% 100%
    );
    rotate: 45deg;
  }

  :host([data-current-placement|='left']) .arrow {
    rotate: -45deg;
  }

  :host([data-current-placement|='right']) .arrow {
    rotate: 135deg;
  }

  :host([data-current-placement|='bottom']) .arrow {
    rotate: 225deg;
  }

  /* Hover bridge */
  .popup-hover-bridge:not(.popup-hover-bridge-visible) {
    display: none;
  }

  .popup-hover-bridge {
    position: fixed;
    z-index: 899;
    top: 0;
    right: 0;
    bottom: 0;
    left: 0;
    clip-path: polygon(
      var(--hover-bridge-top-left-x, 0) var(--hover-bridge-top-left-y, 0),
      var(--hover-bridge-top-right-x, 0) var(--hover-bridge-top-right-y, 0),
      var(--hover-bridge-bottom-right-x, 0) var(--hover-bridge-bottom-right-y, 0),
      var(--hover-bridge-bottom-left-x, 0) var(--hover-bridge-bottom-left-y, 0)
    );
  }

  /* Built-in animations */
  .show {
    animation: show var(--show-duration) ease;
  }

  .hide {
    animation: show var(--hide-duration) ease reverse;
  }

  @keyframes show {
    from {
      opacity: 0;
    }
    to {
      opacity: 1;
    }
  }

  .show-with-scale {
    animation: show-with-scale var(--show-duration) ease;
  }

  .hide-with-scale {
    animation: show-with-scale var(--hide-duration) ease reverse;
  }

  @keyframes show-with-scale {
    from {
      opacity: 0;
      scale: 0.8;
    }
    to {
      opacity: 1;
      scale: 1;
    }
  }
`;var{min:Si,max:Mi,round:Ur,floor:Xr}=Math,Ri=(o)=>({x:o,y:o}),ft={left:"right",right:"left",bottom:"top",top:"bottom"};function j1(o,i,r){return Mi(o,Si(i,r))}function E0(o,i){return typeof o==="function"?o(i):o}function F0(o){return o.split("-")[0]}function D0(o){return o.split("-")[1]}function I1(o){return o==="x"?"y":"x"}function l2(o){return o==="y"?"height":"width"}function Ci(o){let i=o[0];return i==="t"||i==="b"?"y":"x"}function v2(o){return I1(Ci(o))}function Gf(o,i,r){if(r===void 0)r=!1;let a=D0(o),n=v2(o),w=l2(n),b=n==="x"?a===(r?"end":"start")?"right":"left":a==="start"?"bottom":"top";if(i.reference[w]>i.floating[w])b=Lr(b);return[b,Lr(b)]}function Mf(o){let i=Lr(o);return[y2(o),i,y2(i)]}function y2(o){return o.includes("start")?o.replace("start","end"):o.replace("end","start")}var Kf=["left","right"],Bf=["right","left"],wt=["top","bottom"],bt=["bottom","top"];function tt(o,i,r){switch(o){case"top":case"bottom":if(r)return i?Bf:Kf;return i?Kf:Bf;case"left":case"right":return i?wt:bt;default:return[]}}function Vf(o,i,r,a){let n=D0(o),w=tt(F0(o),r==="start",a);if(n){if(w=w.map((b)=>b+"-"+n),i)w=w.concat(w.map(y2))}return w}function Lr(o){let i=F0(o);return ft[i]+o.slice(i.length)}function ct(o){var i,r,a,n;return{top:(i=o.top)!=null?i:0,right:(r=o.right)!=null?r:0,bottom:(a=o.bottom)!=null?a:0,left:(n=o.left)!=null?n:0}}function S1(o){return typeof o!=="number"?ct(o):{top:o,right:o,bottom:o,left:o}}function k0(o){let{x:i,y:r,width:a,height:n}=o;return{width:a,height:n,top:r,left:i,right:i+a,bottom:r+n,x:i,y:r}}function Hf(o,i,r){let{reference:a,floating:n}=o,w=Ci(i),b=v2(i),c=l2(b),m=F0(i),p=w==="y",d=a.x+a.width/2-n.width/2,s=a.y+a.height/2-n.height/2,z=a[c]/2-n[c]/2,u;switch(m){case"top":u={x:d,y:a.y-n.height};break;case"bottom":u={x:d,y:a.y+a.height};break;case"right":u={x:a.x+a.width,y:s};break;case"left":u={x:a.x-n.width,y:s};break;default:u={x:a.x,y:a.y}}let y=D0(i);if(y)u[b]+=z*(y==="end"?1:-1)*(r&&p?-1:1);return u}async function Nf(o,i){var r;if(i===void 0)i={};let{x:a,y:n,platform:w,rects:b,elements:c,strategy:m}=o,{boundary:p="clippingAncestors",rootBoundary:d="viewport",elementContext:s="floating",altBoundary:z=!1,padding:u=0}=E0(i,o),y=S1(u),q=c[z?s==="floating"?"reference":"floating":s],l=k0(await w.getClippingRect({element:((r=await(w.isElement==null?void 0:w.isElement(q)))!=null?r:!0)?q:q.contextElement||await(w.getDocumentElement==null?void 0:w.getDocumentElement(c.floating)),boundary:p,rootBoundary:d,strategy:m})),x=s==="floating"?{x:a,y:n,width:b.floating.width,height:b.floating.height}:b.reference,X=await(w.getOffsetParent==null?void 0:w.getOffsetParent(c.floating)),U=await(w.isElement==null?void 0:w.isElement(X))&&await(w.getScale==null?void 0:w.getScale(X))||{x:1,y:1},K=k0(w.convertOffsetParentRelativeRectToViewportRelativeRect?await w.convertOffsetParentRelativeRectToViewportRelativeRect({elements:c,rect:x,offsetParent:X,strategy:m}):x);return{top:(l.top-K.top+y.top)/U.y,bottom:(K.bottom-l.bottom+y.bottom)/U.y,left:(l.left-K.left+y.left)/U.x,right:(K.right-l.right+y.right)/U.x}}var mt=50,Of=async(o,i,r)=>{let{placement:a="bottom",strategy:n="absolute",middleware:w=[],platform:b}=r,c=b.detectOverflow?b:{...b,detectOverflow:Nf},m=await(b.isRTL==null?void 0:b.isRTL(i)),p=await b.getElementRects({reference:o,floating:i,strategy:n}),{x:d,y:s}=Hf(p,a,m),z=a,u=0,y={};for(let g=0;g<w.length;g++){let q=w[g];if(!q)continue;let{name:l,fn:x}=q,{x:X,y:U,data:K,reset:O}=await x({x:d,y:s,initialPlacement:a,placement:z,strategy:n,middlewareData:y,rects:p,platform:c,elements:{reference:o,floating:i}});if(d=X!=null?X:d,s=U!=null?U:s,y[l]={...y[l],...K},O&&u<mt){if(u++,typeof O==="object"){if(O.placement)z=O.placement;if(O.rects)p=O.rects===!0?await b.getElementRects({reference:o,floating:i,strategy:n}):O.rects;({x:d,y:s}=Hf(p,z,m))}g=-1}}return{x:d,y:s,placement:z,strategy:n,middlewareData:y}},Af=(o)=>({name:"arrow",options:o,async fn(i){let{x:r,y:a,placement:n,rects:w,platform:b,elements:c,middlewareData:m}=i,{element:p,padding:d=0}=E0(o,i)||{};if(p==null)return{};let s=S1(d),z={x:r,y:a},u=v2(n),y=l2(u),g=await b.getDimensions(p),q=u==="y",l=q?"top":"left",x=q?"bottom":"right",X=q?"clientHeight":"clientWidth",U=w.reference[y]+w.reference[u]-z[u]-w.floating[y],K=z[u]-w.reference[u],O=await(b.getOffsetParent==null?void 0:b.getOffsetParent(p)),S=O?O[X]:0;if(!S||!await(b.isElement==null?void 0:b.isElement(O)))S=c.floating[X]||w.floating[y];let T=U/2-K/2,to=S/2-g[y]/2-1,ao=Si(s[l],to),Fo=Si(s[x],to),xo=S-g[y]-Fo,Ko=S/2-g[y]/2+T,Xo=j1(ao,Ko,xo),pi=!m.arrow&&D0(n)!=null&&Ko!==Xo&&w.reference[y]/2-(Ko<ao?ao:Fo)-g[y]/2<0,V=pi?Ko<ao?Ko-ao:Ko-xo:0;return{[u]:z[u]+V,data:{[u]:Xo,centerOffset:Ko-Xo-V,...pi&&{alignmentOffset:V}},reset:pi}}});var Ef=function(o){if(o===void 0)o={};return{name:"flip",options:o,async fn(i){var r,a;let{placement:n,middlewareData:w,rects:b,initialPlacement:c,platform:m,elements:p}=i,{mainAxis:d=!0,crossAxis:s=!0,fallbackPlacements:z,fallbackStrategy:u="bestFit",fallbackAxisSideDirection:y="none",flipAlignment:g=!0,...q}=E0(o,i);if((r=w.arrow)!=null&&r.alignmentOffset)return{};let l=F0(n),x=Ci(c),X=F0(c)===c,U=await(m.isRTL==null?void 0:m.isRTL(p.floating)),K=z||(X||!g?[Lr(c)]:Mf(c)),O=y!=="none";if(!z&&O)K.push(...Vf(c,g,y,U));let S=[c,...K],T=await m.detectOverflow(i,q),to=[],ao=((a=w.flip)==null?void 0:a.overflows)||[];if(d)to.push(T[l]);if(s){let Xo=Gf(n,b,U);to.push(T[Xo[0]],T[Xo[1]])}if(ao=[...ao,{placement:n,overflows:to}],!to.every((Xo)=>Xo<=0)){var Fo,xo;let Xo=(((Fo=w.flip)==null?void 0:Fo.index)||0)+1,pi=S[Xo];if(pi){if(!(s==="alignment"?x!==Ci(pi):!1)||ao.every((G)=>Ci(G.placement)===x?G.overflows[0]>0:!0))return{data:{index:Xo,overflows:ao},reset:{placement:pi}}}let V=(xo=ao.filter((H)=>H.overflows[0]<=0).sort((H,G)=>H.overflows[1]-G.overflows[1])[0])==null?void 0:xo.placement;if(!V)switch(u){case"bestFit":{var Ko;let H=(Ko=ao.filter((G)=>{if(O){let N=Ci(G.placement);return N===x||N==="y"}return!0}).map((G)=>[G.placement,G.overflows.filter((N)=>N>0).reduce((N,A)=>N+A,0)]).sort((G,N)=>G[1]-N[1])[0])==null?void 0:Ko[0];if(H)V=H;break}case"initialPlacement":V=c;break}if(n!==V)return{reset:{placement:V}}}return{}}}};var pt=new Set(["left","top"]);async function ht(o,i){let{placement:r,platform:a,elements:n}=o,w=await(a.isRTL==null?void 0:a.isRTL(n.floating)),b=F0(r),c=D0(r),m=Ci(r)==="y",p=pt.has(b)?-1:1,d=w&&m?-1:1,s=E0(i,o),{mainAxis:z,crossAxis:u,alignmentAxis:y}=typeof s==="number"?{mainAxis:s,crossAxis:0,alignmentAxis:null}:{mainAxis:s.mainAxis||0,crossAxis:s.crossAxis||0,alignmentAxis:s.alignmentAxis};if(c&&typeof y==="number")u=c==="end"?y*-1:y;return m?{x:u*d,y:z*p}:{x:z*p,y:u*d}}var Df=function(o){if(o===void 0)o=0;return{name:"offset",options:o,async fn(i){var r,a;let{x:n,y:w,placement:b,middlewareData:c}=i,m=await ht(i,o);if(b===((r=c.offset)==null?void 0:r.placement)&&(a=c.arrow)!=null&&a.alignmentOffset)return{};return{x:n+m.x,y:w+m.y,data:{...m,placement:b}}}}},kf=function(o){if(o===void 0)o={};return{name:"shift",options:o,async fn(i){let{x:r,y:a,placement:n,platform:w}=i,{mainAxis:b=!0,crossAxis:c=!1,limiter:m={fn:(x)=>{let{x:X,y:U}=x;return{x:X,y:U}}},...p}=E0(o,i),d={x:r,y:a},s=await w.detectOverflow(i,p),z=Ci(n),u=I1(z),y=d[u],g=d[z],q=(x,X)=>j1(X+s[x==="y"?"top":"left"],X,X-s[x==="y"?"bottom":"right"]);if(b)y=q(u,y);if(c)g=q(z,g);let l=m.fn({...i,[u]:y,[z]:g});return{...l,data:{x:l.x-r,y:l.y-a,enabled:{[u]:b,[z]:c}}}}}};var Tf=function(o){if(o===void 0)o={};return{name:"size",options:o,async fn(i){let{placement:r,rects:a,platform:n,elements:w}=i,{apply:b=()=>{},...c}=E0(o,i),m=await n.detectOverflow(i,c),p=F0(r),d=D0(r),s=Ci(r)==="y",{width:z,height:u}=a.floating,y,g;if(p==="top"||p==="bottom")y=p,g=d===(await(n.isRTL==null?void 0:n.isRTL(w.floating))?"start":"end")?"left":"right";else g=p,y=d==="end"?"top":"bottom";let q=u-m.top-m.bottom,l=z-m.left-m.right,x=Si(u-m[y],q),X=Si(z-m[g],l),U=i.middlewareData.shift,K=!U,O=x,S=X;if(U!=null&&U.enabled.x)S=l;if(U!=null&&U.enabled.y)O=q;if(K&&!d)if(s)S=z-2*Mi(m.left,m.right);else O=u-2*Mi(m.top,m.bottom);await b({...i,availableWidth:S,availableHeight:O});let T=await n.getDimensions(w.floating);if(z!==T.width||u!==T.height)return{reset:{rects:!0}};return{}}}};function x2(){return typeof window<"u"}function j0(o){if(If(o))return(o.nodeName||"").toLowerCase();return"#document"}function ai(o){var i;return(o==null||(i=o.ownerDocument)==null?void 0:i.defaultView)||window}function Pi(o){var i;return(i=(If(o)?o.ownerDocument:o.document)||window.document)==null?void 0:i.documentElement}function If(o){if(!x2())return!1;return o instanceof Node||o instanceof ai(o).Node}function Vi(o){if(!x2())return!1;return o instanceof Element||o instanceof ai(o).Element}function c0(o){if(!x2())return!1;return o instanceof HTMLElement||o instanceof ai(o).HTMLElement}function jf(o){if(!x2()||typeof ShadowRoot>"u")return!1;return o instanceof ShadowRoot||o instanceof ai(o).ShadowRoot}function Jr(o){let{overflow:i,overflowX:r,overflowY:a,display:n}=Hi(o);return/auto|scroll|overlay|hidden|clip/.test(i+a+r)&&n!=="inline"&&n!=="contents"}function Sf(o){return/^(table|td|th)$/.test(j0(o))}function Zr(o){try{if(o.matches(":popover-open"))return!0}catch(i){}try{return o.matches(":modal")}catch(i){return!1}}var dt=/transform|translate|scale|rotate|perspective|filter/,gt=/paint|layout|strict|content/,T0=(o)=>!!o&&o!=="none",R1;function wr(o){let i=Vi(o)?Hi(o):o;return T0(i.transform)||T0(i.translate)||T0(i.scale)||T0(i.rotate)||T0(i.perspective)||!F2()&&(T0(i.backdropFilter)||T0(i.filter))||dt.test(i.willChange||"")||gt.test(i.contain||"")}function Rf(o){let i=$0(o);while(c0(i)&&!br(i)){if(wr(i))return i;else if(Zr(i))return null;i=$0(i)}return null}function F2(){if(R1==null)R1=typeof CSS<"u"&&CSS.supports&&CSS.supports("-webkit-backdrop-filter","none");return R1}function br(o){return/^(html|body|#document)$/.test(j0(o))}function Hi(o){return ai(o).getComputedStyle(o)}function Qr(o){if(Vi(o))return{scrollLeft:o.scrollLeft,scrollTop:o.scrollTop};return{scrollLeft:o.scrollX,scrollTop:o.scrollY}}function $0(o){if(j0(o)==="html")return o;let i=o.assignedSlot||o.parentNode||jf(o)&&o.host||Pi(o);return jf(i)?i.host:i}function Cf(o){let i=$0(o);if(br(i))return(o.ownerDocument||o).body;if(c0(i)&&Jr(i))return i;return Cf(i)}function t0(o,i,r){var a;if(i===void 0)i=[];if(r===void 0)r=!0;let n=Cf(o),w=n===((a=o.ownerDocument)==null?void 0:a.body),b=ai(n);if(w){let c=$2(b);return i.concat(b,b.visualViewport||[],Jr(n)?n:[],c&&r?t0(c):[])}else return i.concat(n,t0(n,[],r))}function $2(o){return o.parent&&Object.getPrototypeOf(o.parent)?o.frameElement:null}function _f(o){let i=Hi(o),r=parseFloat(i.width)||0,a=parseFloat(i.height)||0,n=c0(o),w=n?o.offsetWidth:r,b=n?o.offsetHeight:a,c=Ur(r)!==w||Ur(a)!==b;if(c)r=w,a=b;return{width:r,height:a,$:c}}function P1(o){return!Vi(o)?o.contextElement:o}function tr(o){let i=P1(o);if(!c0(i))return Ri(1);let r=i.getBoundingClientRect(),{width:a,height:n,$:w}=_f(i),b=(w?Ur(r.width):r.width)/a,c=(w?Ur(r.height):r.height)/n;if(!b||!Number.isFinite(b))b=1;if(!c||!Number.isFinite(c))c=1;return{x:b,y:c}}var st=Ri(0);function ef(o){let i=ai(o);if(!F2()||!i.visualViewport)return st;return{x:i.visualViewport.offsetLeft,y:i.visualViewport.offsetTop}}function ut(o,i,r){if(i===void 0)i=!1;return!!r&&i&&r===ai(o)}function I0(o,i,r,a){if(i===void 0)i=!1;if(r===void 0)r=!1;let n=o.getBoundingClientRect(),w=P1(o),b=Ri(1);if(i)if(a){if(Vi(a))b=tr(a)}else b=tr(o);let c=ut(w,r,a)?ef(w):Ri(0),m=(n.left+c.x)/b.x,p=(n.top+c.y)/b.y,d=n.width/b.x,s=n.height/b.y;if(w&&a){let z=ai(w),u=Vi(a)?ai(a):a,y=z,g=$2(y);while(g&&u!==y){let q=tr(g),l=g.getBoundingClientRect(),x=Hi(g),X=l.left+(g.clientLeft+parseFloat(x.paddingLeft))*q.x,U=l.top+(g.clientTop+parseFloat(x.paddingTop))*q.y;m*=q.x,p*=q.y,d*=q.x,s*=q.y,m+=X,p+=U,y=ai(g),g=$2(y)}}return k0({width:d,height:s,x:m,y:p})}function Y2(o,i){let r=Qr(o).scrollLeft;if(!i)return I0(Pi(o)).left+r;return i.left+r}function o3(o,i){let r=o.getBoundingClientRect(),a=r.left+i.scrollLeft-Y2(o,r),n=r.top+i.scrollTop;return{x:a,y:n}}function zt(o){let{elements:i,rect:r,offsetParent:a,strategy:n}=o,w=n==="fixed",b=Pi(a),c=i?Zr(i.floating):!1;if(a===b||c&&w)return r;let m={scrollLeft:0,scrollTop:0},p=Ri(1),d=Ri(0),s=c0(a);if(s||!w){if(j0(a)!=="body"||Jr(b))m=Qr(a);if(s){let u=I0(a);p=tr(a),d.x=u.x+a.clientLeft,d.y=u.y+a.clientTop}}let z=b&&!s&&!w?o3(b,m):Ri(0);return{width:r.width*p.x,height:r.height*p.y,x:r.x*p.x-m.scrollLeft*p.x+d.x+z.x,y:r.y*p.y-m.scrollTop*p.y+d.y+z.y}}function yt(o){return o.getClientRects?Array.from(o.getClientRects()):[]}function lt(o){let i=Qr(o),r=o.ownerDocument.body,a=Mi(o.scrollWidth,o.clientWidth,r.scrollWidth,r.clientWidth),n=Mi(o.scrollHeight,o.clientHeight,r.scrollHeight,r.clientHeight),w=-i.scrollLeft+Y2(o),b=-i.scrollTop;if(Hi(r).direction==="rtl")w+=Mi(o.clientWidth,r.clientWidth)-a;return{width:a,height:n,x:w,y:b}}var vt=25;function xt(o,i,r){if(r===void 0)r="viewport";let a=r==="layoutViewport",n=ai(o),w=Pi(o),b=n.visualViewport,c=w.clientWidth,m=w.clientHeight,p=0,d=0;if(b){let z=!F2()||i==="fixed";if(a){if(!z)p=-b.offsetLeft,d=-b.offsetTop}else if(c=b.width,m=b.height,z)p=b.offsetLeft,d=b.offsetTop}if(Y2(w)<=0){let z=w.ownerDocument,u=z.body,y=getComputedStyle(u),g=z.compatMode==="CSS1Compat"?parseFloat(y.marginLeft)+parseFloat(y.marginRight)||0:0,q=Math.abs(w.clientWidth-u.clientWidth-g),l=getComputedStyle(w).scrollbarGutter==="stable both-edges"?q/2:q;if(l<=vt)c-=l}return{width:c,height:m,x:p,y:d}}function Ft(o,i){let r=I0(o,!0,i==="fixed"),a=r.top+o.clientTop,n=r.left+o.clientLeft,w=tr(o),b=o.clientWidth*w.x,c=o.clientHeight*w.y,m=n*w.x,p=a*w.y;return{width:b,height:c,x:m,y:p}}function Pf(o,i,r){let a;if(i==="viewport"||i==="layoutViewport")a=xt(o,r,i);else if(i==="document")a=lt(Pi(o));else if(Vi(i))a=Ft(i,r);else{let n=ef(o);a={x:i.x-n.x,y:i.y-n.y,width:i.width,height:i.height}}return k0(a)}function $t(o,i){let r=i.get(o);if(r)return r;let a=t0(o,[],!1).filter((c)=>Vi(c)&&j0(c)!=="body"),n=null,w=Hi(o).position==="fixed",b=w?$0(o):o;while(Vi(b)&&!br(b)){let c=Hi(b),m=wr(b),p=n?n.position:w?"fixed":"";if(!m&&(p==="fixed"||p==="absolute"&&c.position==="static"))a=a.filter((s)=>s!==b);else n=c;b=$0(b)}return i.set(o,a),a}function Yt(o){let{element:i,boundary:r,rootBoundary:a,strategy:n}=o,b=[...r==="clippingAncestors"?Zr(i)?[]:$t(i,this._c):[].concat(r),a],c=Pf(i,b[0],n),m=c.top,p=c.right,d=c.bottom,s=c.left;for(let z=1;z<b.length;z++){let u=Pf(i,b[z],n);m=Mi(u.top,m),p=Si(u.right,p),d=Si(u.bottom,d),s=Mi(u.left,s)}return{width:p-s,height:d-m,x:s,y:m}}function qt(o){let{width:i,height:r}=_f(o);return{width:i,height:r}}function Lt(o,i,r){let a=c0(i),n=Pi(i),w=r==="fixed",b=I0(o,!0,w,i),c={scrollLeft:0,scrollTop:0},m=Ri(0);if(a||!w){if(j0(i)!=="body"||Jr(n))c=Qr(i);if(a){let z=I0(i,!0,w,i);m.x=z.x+i.clientLeft,m.y=z.y+i.clientTop}}if(!a&&n)m.x=Y2(n);let p=n&&!a&&!w?o3(n,c):Ri(0),d=b.left+c.scrollLeft-m.x-p.x,s=b.top+c.scrollTop-m.y-p.y;return{x:d,y:s,width:b.width,height:b.height}}function C1(o){return Hi(o).position==="static"}function Wf(o,i){if(!c0(o)||Hi(o).position==="fixed")return null;if(i)return i(o);let r=o.offsetParent;if(Pi(o)===r)r=r.ownerDocument.body;return r}function i3(o,i){let r=ai(o);if(Zr(o))return r;if(!c0(o)){let n=$0(o);while(n&&!br(n)){if(Vi(n)&&!C1(n))return n;n=$0(n)}return r}let a=Wf(o,i);while(a&&Sf(a)&&C1(a))a=Wf(a,i);if(a&&br(a)&&C1(a)&&!wr(a))return r;return a||Rf(o)||r}var Ut=async function(o){let i=this.getOffsetParent||i3,r=this.getDimensions,a=await r(o.floating);return{reference:Lt(o.reference,await i(o.floating),o.strategy),floating:{x:0,y:0,width:a.width,height:a.height}}};function Xt(o){return Hi(o).direction==="rtl"}var Kr={convertOffsetParentRelativeRectToViewportRelativeRect:zt,getDocumentElement:Pi,getClippingRect:Yt,getOffsetParent:i3,getElementRects:Ut,getClientRects:yt,getDimensions:qt,getScale:tr,isElement:Vi,isRTL:Xt};function r3(o,i){return o.x===i.x&&o.y===i.y&&o.width===i.width&&o.height===i.height}function Jt(o,i,r){let a=null,n,w=Pi(o);function b(){var d;clearTimeout(n),(d=a)==null||d.disconnect(),a=null}function c(d,s){if(d===void 0)d=!1;if(s===void 0)s=1;b();let z=o.getBoundingClientRect(),{left:u,top:y,width:g,height:q}=z;if(!d)i();if(!g||!q)return;let l=Xr(y),x=Xr(w.clientWidth-(u+g)),X=Xr(w.clientHeight-(y+q)),U=Xr(u),O={rootMargin:-l+"px "+-x+"px "+-X+"px "+-U+"px",threshold:Mi(0,Si(1,s))||1},S=!0;function T(to){let ao=to[0].intersectionRatio;if(!r3(z,o.getBoundingClientRect()))return c();if(ao!==s){if(!S)return c();if(!ao)n=setTimeout(()=>{c(!1,0.0000001)},1000);else c(!1,ao)}S=!1}try{a=new IntersectionObserver(T,{...O,root:w.ownerDocument})}catch(to){a=new IntersectionObserver(T,O)}a.observe(o)}let m=ai(o),p=()=>c(r);return m.addEventListener("resize",p),c(!0),()=>{m.removeEventListener("resize",p),b()}}function q2(o,i,r,a){if(a===void 0)a={};let{ancestorScroll:n=!0,ancestorResize:w=!0,elementResize:b=typeof ResizeObserver==="function",layoutShift:c=typeof IntersectionObserver==="function",animationFrame:m=!1}=a,p=P1(o),d=n||w?[...p?t0(p):[],...i?t0(i):[]]:[];d.forEach((l)=>{n&&l.addEventListener("scroll",r),w&&l.addEventListener("resize",r)});let s=p&&c?Jt(p,r,w):null,z=-1,u=null;if(b){if(u=new ResizeObserver((l)=>{let[x]=l;if(x&&x.target===p&&u&&i)u.unobserve(i),cancelAnimationFrame(z),z=requestAnimationFrame(()=>{var X;(X=u)==null||X.observe(i)});r()}),p&&!m)u.observe(p);if(i)u.observe(i)}let y,g=m?I0(o):null;if(m)q();function q(){let l=I0(o);if(g&&!r3(g,l))r();g=l,y=requestAnimationFrame(q)}return r(),()=>{var l;if(d.forEach((x)=>{n&&x.removeEventListener("scroll",r),w&&x.removeEventListener("resize",r)}),s==null||s(),(l=u)==null||l.disconnect(),u=null,m)cancelAnimationFrame(y)}}var L2=Df;var U2=kf,X2=Ef,W1=Tf;var a3=Af;var J2=(o,i,r)=>{let a=new Map,n=r!=null?r:{},w={...Kr,...n.platform,_c:a};return Of(o,i,{...n,platform:w})};function n3(o){return Zt(o)}function _1(o){if(o.assignedSlot)return o.assignedSlot;if(o.parentNode instanceof ShadowRoot)return o.parentNode.host;return o.parentNode}function Zt(o){for(let i=o;i;i=_1(i)){if(!(i instanceof Element))continue;if(getComputedStyle(i).display==="none")return null}for(let i=_1(o);i;i=_1(i)){if(!(i instanceof Element))continue;let r=getComputedStyle(i);if(r.display==="contents")continue;if(r.position!=="static"||wr(r))return i;if(i.tagName==="BODY")return i}return null}/*! Copyright 2026 Fonticons, Inc. - https://webawesome.com/license */function f3(o){return o!==null&&typeof o==="object"&&"getBoundingClientRect"in o&&("contextElement"in o?o instanceof Element:!0)}var Qt=Boolean(globalThis?.HTMLElement?.prototype.hasOwnProperty("popover")),bo=class extends L{constructor(){super(...arguments);this.localize=new B(this),this.SUPPORTS_POPOVER=!1,this.active=!1,this.placement="top",this.boundary="viewport",this.distance=0,this.skidding=0,this.arrow=!1,this.arrowPlacement="anchor",this.arrowPadding=10,this.flip=!1,this.flipFallbackPlacements="",this.flipFallbackStrategy="best-fit",this.flipPadding=0,this.shift=!1,this.shiftPadding=0,this.autoSizePadding=0,this.hoverBridge=!1,this.updateHoverBridge=()=>{if(this.hoverBridge&&this.anchorEl&&this.popup){let o=this.anchorEl.getBoundingClientRect(),i=this.popup.getBoundingClientRect(),r=this.placement.includes("top")||this.placement.includes("bottom"),a=0,n=0,w=0,b=0,c=0,m=0,p=0,d=0;if(r)if(o.top<i.top)a=o.left,n=o.bottom,w=o.right,b=o.bottom,c=i.left,m=i.top,p=i.right,d=i.top;else a=i.left,n=i.bottom,w=i.right,b=i.bottom,c=o.left,m=o.top,p=o.right,d=o.top;else if(o.left<i.left)a=o.right,n=o.top,w=i.left,b=i.top,c=o.right,m=o.bottom,p=i.left,d=i.bottom;else a=i.right,n=i.top,w=o.left,b=o.top,c=i.right,m=i.bottom,p=o.left,d=o.bottom;this.style.setProperty("--hover-bridge-top-left-x",`${a}px`),this.style.setProperty("--hover-bridge-top-left-y",`${n}px`),this.style.setProperty("--hover-bridge-top-right-x",`${w}px`),this.style.setProperty("--hover-bridge-top-right-y",`${b}px`),this.style.setProperty("--hover-bridge-bottom-left-x",`${c}px`),this.style.setProperty("--hover-bridge-bottom-left-y",`${m}px`),this.style.setProperty("--hover-bridge-bottom-right-x",`${p}px`),this.style.setProperty("--hover-bridge-bottom-right-y",`${d}px`)}}}async connectedCallback(){super.connectedCallback(),await this.updateComplete,this.SUPPORTS_POPOVER=Qt,this.start()}disconnectedCallback(){super.disconnectedCallback(),this.stop()}async updated(o){if(super.updated(o),o.has("active"))if(this.active)this.start();else this.stop();if(o.has("anchor"))this.handleAnchorChange();if(this.active)await this.updateComplete,this.reposition()}async handleAnchorChange(){if(await this.stop(),this.anchor&&typeof this.anchor==="string"){let o=this.getRootNode();this.anchorEl=o.getElementById(this.anchor)}else if(this.anchor instanceof Element||f3(this.anchor))this.anchorEl=this.anchor;else this.anchorEl=this.querySelector('[slot="anchor"]');if(this.anchorEl instanceof HTMLSlotElement)this.anchorEl=this.anchorEl.assignedElements({flatten:!0})[0];if(this.anchorEl)this.start()}start(){if(!this.anchorEl||!this.active||!this.isConnected)return;this.popup?.showPopover?.(),this.cleanup=q2(this.anchorEl,this.popup,()=>{this.reposition()})}async stop(){return new Promise((o)=>{if(this.popup?.hidePopover?.(),this.cleanup)this.cleanup(),this.cleanup=void 0,this.removeAttribute("data-current-placement"),this.style.removeProperty("--auto-size-available-width"),this.style.removeProperty("--auto-size-available-height"),requestAnimationFrame(()=>o());else o()})}reposition(){if(!this.active||!this.anchorEl||!this.popup)return;let o=[L2({mainAxis:this.distance,crossAxis:this.skidding})];if(this.sync)o.push(W1({apply:({rects:a})=>{let n=this.sync==="width"||this.sync==="both",w=this.sync==="height"||this.sync==="both";this.popup.style.width=n?`${a.reference.width}px`:"",this.popup.style.height=w?`${a.reference.height}px`:""}}));else this.popup.style.width="",this.popup.style.height="";let i;if(this.SUPPORTS_POPOVER&&!f3(this.anchor)&&this.boundary==="scroll")i=t0(this.anchorEl).filter((a)=>a instanceof Element);if(this.flip)o.push(X2({boundary:this.flipBoundary||i,fallbackPlacements:this.flipFallbackPlacements,fallbackStrategy:this.flipFallbackStrategy==="best-fit"?"bestFit":"initialPlacement",padding:this.flipPadding}));if(this.shift)o.push(U2({boundary:this.shiftBoundary||i,padding:this.shiftPadding}));if(this.autoSize)o.push(W1({boundary:this.autoSizeBoundary||i,padding:this.autoSizePadding,apply:({availableWidth:a,availableHeight:n})=>{if(this.autoSize==="vertical"||this.autoSize==="both")this.style.setProperty("--auto-size-available-height",`${n}px`);else this.style.removeProperty("--auto-size-available-height");if(this.autoSize==="horizontal"||this.autoSize==="both")this.style.setProperty("--auto-size-available-width",`${a}px`);else this.style.removeProperty("--auto-size-available-width")}}));else this.style.removeProperty("--auto-size-available-width"),this.style.removeProperty("--auto-size-available-height");if(this.arrow)o.push(a3({element:this.arrowEl,padding:this.arrowPadding}));let r=this.SUPPORTS_POPOVER?(a)=>Kr.getOffsetParent(a,n3):Kr.getOffsetParent;J2(this.anchorEl,this.popup,{placement:this.placement,middleware:o,strategy:this.SUPPORTS_POPOVER?"absolute":"fixed",platform:{...Kr,getOffsetParent:r}}).then(({x:a,y:n,middlewareData:w,placement:b})=>{let c=this.localize.dir()==="rtl",m={top:"bottom",right:"left",bottom:"top",left:"right"}[b.split("-")[0]];if(this.setAttribute("data-current-placement",b),Object.assign(this.popup.style,{left:`${a}px`,top:`${n}px`}),this.arrow){let p=w.arrow.x,d=w.arrow.y,s="",z="",u="",y="";if(this.arrowPlacement==="start"){let g=typeof p==="number"?`calc(${this.arrowPadding}px - var(--arrow-padding-offset))`:"";s=typeof d==="number"?`calc(${this.arrowPadding}px - var(--arrow-padding-offset))`:"",z=c?g:"",y=c?"":g}else if(this.arrowPlacement==="end"){let g=typeof p==="number"?`calc(${this.arrowPadding}px - var(--arrow-padding-offset))`:"";z=c?"":g,y=c?g:"",u=typeof d==="number"?`calc(${this.arrowPadding}px - var(--arrow-padding-offset))`:""}else if(this.arrowPlacement==="center")y=typeof p==="number"?"calc(50% - var(--arrow-size-diagonal))":"",s=typeof d==="number"?"calc(50% - var(--arrow-size-diagonal))":"";else y=typeof p==="number"?`${p}px`:"",s=typeof d==="number"?`${d}px`:"";Object.assign(this.arrowEl.style,{top:s,right:z,bottom:u,left:y,[m]:"calc(var(--arrow-base-offset) - var(--arrow-size-diagonal))"})}}),requestAnimationFrame(()=>this.updateHoverBridge()),this.dispatchEvent(new z2)}render(){return h`
      <slot name="anchor" @slotchange=${this.handleAnchorChange}></slot>

      <span
        part="hover-bridge"
        class=${Z({"popup-hover-bridge":!0,"popup-hover-bridge-visible":this.hoverBridge&&this.active})}
      ></span>

      <div
        popover="manual"
        part="popup"
        class=${Z({popup:!0,"popup-active":this.active,"popup-fixed":!this.SUPPORTS_POPOVER,"popup-has-arrow":this.arrow})}
      >
        <slot></slot>
        ${this.arrow?h`<div part="arrow" class="arrow" role="presentation"></div>`:""}
      </div>
    `}};bo.css=Qf;f([Y(".popup")],bo.prototype,"popup",2);f([Y(".arrow")],bo.prototype,"arrowEl",2);f([t({attribute:!1,type:Boolean})],bo.prototype,"SUPPORTS_POPOVER",2);f([t()],bo.prototype,"anchor",2);f([t({type:Boolean,reflect:!0})],bo.prototype,"active",2);f([t({reflect:!0})],bo.prototype,"placement",2);f([t()],bo.prototype,"boundary",2);f([t({type:Number})],bo.prototype,"distance",2);f([t({type:Number})],bo.prototype,"skidding",2);f([t({type:Boolean})],bo.prototype,"arrow",2);f([t({attribute:"arrow-placement"})],bo.prototype,"arrowPlacement",2);f([t({attribute:"arrow-padding",type:Number})],bo.prototype,"arrowPadding",2);f([t({type:Boolean})],bo.prototype,"flip",2);f([t({attribute:"flip-fallback-placements",converter:{fromAttribute:(o)=>{return o.split(" ").map((i)=>i.trim()).filter((i)=>i!=="")},toAttribute:(o)=>{return o.join(" ")}}})],bo.prototype,"flipFallbackPlacements",2);f([t({attribute:"flip-fallback-strategy"})],bo.prototype,"flipFallbackStrategy",2);f([t({type:Object})],bo.prototype,"flipBoundary",2);f([t({attribute:"flip-padding",type:Number})],bo.prototype,"flipPadding",2);f([t({type:Boolean})],bo.prototype,"shift",2);f([t({type:Object})],bo.prototype,"shiftBoundary",2);f([t({attribute:"shift-padding",type:Number})],bo.prototype,"shiftPadding",2);f([t({attribute:"auto-size"})],bo.prototype,"autoSize",2);f([t()],bo.prototype,"sync",2);f([t({type:Object})],bo.prototype,"autoSizeBoundary",2);f([t({attribute:"auto-size-padding",type:Number})],bo.prototype,"autoSizePadding",2);f([t({attribute:"hover-bridge",type:Boolean})],bo.prototype,"hoverBridge",2);bo=f([$("wa-popup")],bo);/*! Copyright 2026 Fonticons, Inc. - https://webawesome.com/license *//*! Copyright 2026 Fonticons, Inc. - https://webawesome.com/license */var w3=F`
  :host {
    --divider-width: 0.125rem;
    --handle-size: 2.5rem;

    display: block;
    position: relative;
    max-width: 100%;
    max-height: 100%;
    overflow: hidden;
  }

  .before,
  .after {
    display: block;

    &::slotted(img),
    &::slotted(svg) {
      display: block;
      max-width: 100% !important;
      height: auto;
    }

    &::slotted(:not(img, svg)) {
      isolation: isolate;
    }
  }

  .after {
    position: absolute;
    top: 0;
    left: 0;
    height: 100%;
    width: 100%;
  }

  /* Disable pointer-events while dragging. This is especially important for iframes. */
  :host(:state(dragging)) {
    .before,
    .after {
      pointer-events: none;
    }
  }

  .divider {
    display: flex;
    align-items: center;
    justify-content: center;
    position: absolute;
    top: 0;
    width: var(--divider-width);
    height: 100%;
    background-color: var(--wa-color-surface-default);
    translate: calc(var(--divider-width) / -2);
    cursor: ew-resize;
  }

  .handle {
    display: flex;
    align-items: center;
    justify-content: center;
    position: absolute;
    top: calc(50% - (var(--handle-size) / 2));
    width: var(--handle-size);
    height: var(--handle-size);
    background-color: var(--wa-color-surface-default);
    border-radius: var(--wa-border-radius-circle);
    font-size: calc(var(--handle-size) * 0.4);
    color: var(--wa-color-neutral-on-quiet);
    cursor: inherit;
    z-index: 10;
  }

  .handle:focus-visible {
    outline: var(--wa-focus-ring);
    outline-offset: var(--wa-focus-ring-offset);
  }
`;/*! Copyright 2026 Fonticons, Inc. - https://webawesome.com/license */var S0=class extends L{constructor(){super(...arguments);this.localize=new B(this),this.position=50}handleDrag(o){let{width:i}=this.getBoundingClientRect(),r=this.localize.dir()==="rtl";o.preventDefault(),z0(this,{onMove:(a)=>{if(this.customStates.set("dragging",!0),this.position=parseFloat(D(a/i*100,0,100).toFixed(2)),r)this.position=100-this.position},onStop:()=>{this.customStates.set("dragging",!1)},initialEvent:o})}handleKeyDown(o){let i=this.matches(":dir(ltr)"),r=this.localize.dir()==="rtl";if(["ArrowLeft","ArrowRight","Home","End"].includes(o.key)){let a=o.shiftKey?10:1,n=this.position;if(o.preventDefault(),i&&o.key==="ArrowLeft"||r&&o.key==="ArrowRight")n-=a;if(i&&o.key==="ArrowRight"||r&&o.key==="ArrowLeft")n+=a;if(o.key==="Home")n=0;if(o.key==="End")n=100;n=D(n,0,100),this.position=n}}handlePositionChange(){this.dispatchEvent(new Event("change",{bubbles:!0,composed:!0}))}render(){let o=this.hasUpdated?this.localize.dir()==="rtl":this.dir==="rtl";return h`
      <div id="comparison" class="image" part="base comparison">
        <div part="before" class="before">
          <slot name="before"></slot>
        </div>

        <div
          part="after"
          class="after"
          style=${mo({clipPath:o?`inset(0 0 0 ${100-this.position}%)`:`inset(0 ${100-this.position}% 0 0)`})}
        >
          <slot name="after"></slot>
        </div>
      </div>

      <div
        part="divider"
        class="divider"
        style=${mo({left:o?`${100-this.position}%`:`${this.position}%`})}
        @keydown=${this.handleKeyDown}
        @mousedown=${this.handleDrag}
        @touchstart=${this.handleDrag}
      >
        <div
          part="handle"
          class="handle"
          role="scrollbar"
          aria-valuenow=${this.position}
          aria-valuemin="0"
          aria-valuemax="100"
          aria-controls="comparison"
          tabindex="0"
        >
          <slot name="handle">
            <wa-icon library="system" name="grip-vertical" variant="solid"></wa-icon>
          </slot>
        </div>
      </div>
    `}};S0.css=w3;f([Y(".handle")],S0.prototype,"handle",2);f([t({type:Number,reflect:!0})],S0.prototype,"position",2);f([v("position",{waitUntilFirstUpdate:!0})],S0.prototype,"handlePositionChange",1);S0=f([$("wa-comparison")],S0);/*! Copyright 2026 Fonticons, Inc. - https://webawesome.com/license *//*! Copyright 2026 Fonticons, Inc. - https://webawesome.com/license */var b3=class extends Event{constructor(o){super("wa-copy",{bubbles:!0,cancelable:!1,composed:!0});this.detail=o}};/*! Copyright 2026 Fonticons, Inc. - https://webawesome.com/license */var e1=null,oa=null,Kt=7000;function t3(o){let i=document.createElement("div");return i.setAttribute("role","log"),i.setAttribute("aria-live",o),i.setAttribute("aria-relevant","additions"),Object.assign(i.style,{position:"absolute",width:"1px",height:"1px",margin:"-1px",padding:"0",border:"0",overflow:"hidden",clip:"rect(0 0 0 0)",clipPath:"inset(50%)",whiteSpace:"nowrap"}),i}function Bt(o){if(o==="assertive")return oa??(oa=document.body.appendChild(t3("assertive"))),oa;return e1??(e1=document.body.appendChild(t3("polite"))),e1}function Z2(o,i="polite"){if(!o)return;let r=Bt(i),a=document.createElement("div");a.textContent=o,r.appendChild(a),setTimeout(()=>a.remove(),Kt)}/*! Copyright 2026 Fonticons, Inc. - https://webawesome.com/license */var c3=F`
  :host {
    display: inline-block;
    color: var(--wa-color-neutral-on-quiet);
  }

  .copy-button__trigger {
    position: relative;
  }

  .button {
    display: inline-flex;
    align-items: center;
    justify-content: center;
    background-color: transparent;
    border: none;
    border-radius: var(--wa-form-control-border-radius);
    color: inherit;
    font-size: inherit;
    height: calc(var(--wa-form-control-height) * 0.8);
    aspect-ratio: 1;
    cursor: pointer;
    transition-property: background-color, color;
    transition-duration: var(--wa-transition-fast);
    transition-timing-function: var(--wa-transition-easing);
  }

  @media (hover: hover) {
    .button:hover:not([disabled]) {
      background-color: var(--wa-color-neutral-fill-quiet);
      color: color-mix(in oklab, currentColor, var(--wa-color-mix-hover));
    }
  }

  .button:focus-visible:not([disabled]) {
    background-color: var(--wa-color-neutral-fill-quiet);
    color: color-mix(in oklab, currentColor, var(--wa-color-mix-hover));
  }

  .button:active:not([disabled]) {
    color: color-mix(in oklab, currentColor, var(--wa-color-mix-active));
  }

  .button:focus-visible {
    outline: var(--wa-focus-ring);
    outline-offset: var(--wa-focus-ring-offset);
  }

  .button[disabled] {
    opacity: 0.5;
    cursor: not-allowed !important;
  }

  slot {
    display: inline-flex;
  }

  /* Icon swap animation */
  .show {
    animation: copy-button-icon-show var(--wa-transition-fast) var(--wa-transition-easing);
  }

  .hide {
    animation: copy-button-icon-show var(--wa-transition-fast) var(--wa-transition-easing) reverse;
  }

  @keyframes copy-button-icon-show {
    from {
      scale: 0.25;
      opacity: 0.25;
    }
    to {
      scale: 1;
      opacity: 1;
    }
  }

  @media (prefers-reduced-motion: reduce) {
    .show,
    .hide {
      animation-duration: 1ms;
    }
  }
`;/*! Copyright 2026 Fonticons, Inc. - https://webawesome.com/license */var m3="wa-internal-tooltip",ia="__waCopyButtonAssignedId",lo=class extends L{constructor(){super(...arguments);this.localize=new B(this),this.isCopying=!1,this.status="rest",this.hasCustomTrigger=!1,this.customTriggerEl=null,this.lightTooltip=null,this.feedbackTimeout=null,this.value="",this.from="",this.disabled=!1,this.copyLabel="",this.successLabel="",this.errorLabel="",this.feedbackDuration=1000,this.tooltipPlacement="top",this.tooltip="full",this.handleDefaultSlotChange=()=>{let i=(this.defaultSlot?.assignedElements({flatten:!0})??[]).find((r)=>r instanceof HTMLElement)??null;if(i!==this.customTriggerEl)this.releaseAssignedId(this.customTriggerEl),this.customTriggerEl=i;if(this.hasCustomTrigger=i!==null,i&&this.tooltip!=="none"){if(!i.id)i.id=bi("wa-copy-button-trigger-"),i[ia]=!0;this.ensureLightTooltip()}else this.removeLightTooltip()}}get activeTooltip(){return this.lightTooltip??this.shadowTooltip??null}get currentLabel(){if(this.status==="success")return this.successLabel||this.localize.term("copied");if(this.status==="error")return this.errorLabel||this.localize.term("error");return this.copyLabel||this.localize.term("copy")}firstUpdated(o){if(super.firstUpdated(o),this.didSSR)this.updateComplete.then(()=>{this.handleDefaultSlotChange()});else this.handleDefaultSlotChange()}disconnectedCallback(){super.disconnectedCallback(),this.removeLightTooltip()}handleStatusChange(){if(this.customStates.set("success",this.status==="success"),this.customStates.set("error",this.status==="error"),this.syncTooltipText(),this.status==="success"||this.status==="error")Z2(this.currentLabel,"polite")}handleLabelChange(){this.syncTooltipText()}handleTooltipOptionsChange(){if(this.lightTooltip)this.lightTooltip.placement=this.tooltipPlacement,this.lightTooltip.disabled=this.disabled}handleTooltipModeChange(o){if(this.tooltip==="none")this.removeLightTooltip();else if(o==="none")this.handleDefaultSlotChange();else if(this.lightTooltip)this.lightTooltip.setAttribute("trigger",this.tooltip==="copy"?"manual":"hover focus")}releaseAssignedId(o){if(o&&o[ia])o.removeAttribute("id"),delete o[ia]}ensureLightTooltip(){if(!this.customTriggerEl)return;let o=this.tooltip==="copy"?"manual":"hover focus";if(!this.lightTooltip){let i=document.createElement("wa-tooltip");i.setAttribute("slot",m3),i.setAttribute("part","feedback"),i.setAttribute("trigger",o),i.dataset.copyButtonTooltip="",i.setAttribute("for",this.customTriggerEl.id),i.placement=this.tooltipPlacement,i.disabled=this.disabled,i.textContent=this.currentLabel,this.appendChild(i),this.lightTooltip=i}else this.lightTooltip.setAttribute("for",this.customTriggerEl.id),this.lightTooltip.setAttribute("trigger",o),this.lightTooltip.placement=this.tooltipPlacement,this.lightTooltip.disabled=this.disabled,this.lightTooltip.textContent=this.currentLabel}removeLightTooltip(){if(this.lightTooltip)this.releaseAssignedId(this.customTriggerEl),this.lightTooltip.remove(),this.lightTooltip=null}syncTooltipText(){if(this.lightTooltip)this.lightTooltip.textContent=this.currentLabel}async handleCopy(){if(this.disabled||this.isCopying)return;this.isCopying=!0;let o=this.value;if(this.from){let i=this.getRootNode(),r=this.from.includes("."),a=this.from.includes("[")&&this.from.includes("]"),n=this.from,w="";if(r)[n,w]=this.from.trim().split(".");else if(a)[n,w]=this.from.trim().replace(/\]$/,"").split("[");let b="getElementById"in i?i.getElementById(n):null;if(b)if(a)o=b.getAttribute(w)||"";else if(r)o=b[w]||"";else o=b.textContent||"";else this.showStatus("error"),this.dispatchEvent(new ki)}if(!o)this.showStatus("error"),this.dispatchEvent(new ki);else try{await navigator.clipboard.writeText(o),this.showStatus("success"),this.dispatchEvent(new b3({value:o}))}catch(i){this.showStatus("error"),this.dispatchEvent(new ki)}}async showStatus(o){if(this.status=o,this.copyIcon){let a=o==="success"?this.successIcon:this.errorIcon;await P(this.copyIcon,"hide"),this.copyIcon.hidden=!0,a.hidden=!1,await P(a,"show")}await this.updateComplete;let i=this.tooltip==="none"?null:this.activeTooltip,r=null;if(i)i.show(),r=new Promise((a)=>{i.addEventListener("wa-after-hide",()=>{if(this.feedbackTimeout!==null)clearTimeout(this.feedbackTimeout),this.feedbackTimeout=null;a()},{once:!0})}),this.feedbackTimeout=window.setTimeout(async()=>{this.feedbackTimeout=null,await i.hide()},this.feedbackDuration);setTimeout(async()=>{if(r)await r;if(this.copyIcon){let a=o==="success"?this.successIcon:this.errorIcon;await P(a,"hide"),a.hidden=!0,this.copyIcon.hidden=!1,await P(this.copyIcon,"show")}this.status="rest",this.isCopying=!1},this.feedbackDuration)}render(){let i=!this.hasCustomTrigger&&this.tooltip!=="none",r=this.tooltip==="copy"?"manual":"hover focus";if(this.didSSR&&!this.hasUpdated)i=!1;return h`
      <div class="copy-button__trigger" @click=${this.handleCopy}>
        <slot @slotchange=${this.handleDefaultSlotChange}></slot>
        <button
          class="button"
          part="button"
          type="button"
          id="copy-button"
          aria-label=${this.currentLabel}
          ?disabled=${this.disabled}
          ?hidden=${this.hasCustomTrigger}
        >
          <slot part="copy-icon" name="copy-icon">
            <wa-icon library="system" name="copy" variant="regular"></wa-icon>
          </slot>
          <slot part="success-icon" name="success-icon" variant="solid" hidden>
            <wa-icon library="system" name="check"></wa-icon>
          </slot>
          <slot part="error-icon" name="error-icon" variant="solid" hidden>
            <wa-icon library="system" name="xmark"></wa-icon>
          </slot>
        </button>

        ${i?h`
              <wa-tooltip
                part="feedback"
                for="copy-button"
                placement=${this.tooltipPlacement}
                trigger=${r}
                class=${Z({"copy-button-tooltip":!0,"copy-button-tooltip-success":this.status==="success","copy-button-tooltip-error":this.status==="error"})}
                ?disabled=${this.disabled}
                >${this.currentLabel}</wa-tooltip
              >
            `:""}
        <slot name="${m3}"></slot>
      </div>
    `}};lo.css=[Z1,Ii,c3];f([Y('slot[name="copy-icon"]')],lo.prototype,"copyIcon",2);f([Y('slot[name="success-icon"]')],lo.prototype,"successIcon",2);f([Y('slot[name="error-icon"]')],lo.prototype,"errorIcon",2);f([Y("slot:not([name])")],lo.prototype,"defaultSlot",2);f([Y('wa-tooltip[part="feedback"]')],lo.prototype,"shadowTooltip",2);f([J()],lo.prototype,"isCopying",2);f([J()],lo.prototype,"status",2);f([J()],lo.prototype,"hasCustomTrigger",2);f([t()],lo.prototype,"value",2);f([t()],lo.prototype,"from",2);f([t({type:Boolean,reflect:!0})],lo.prototype,"disabled",2);f([t({attribute:"copy-label"})],lo.prototype,"copyLabel",2);f([t({attribute:"success-label"})],lo.prototype,"successLabel",2);f([t({attribute:"error-label"})],lo.prototype,"errorLabel",2);f([t({attribute:"feedback-duration",type:Number})],lo.prototype,"feedbackDuration",2);f([t({attribute:"tooltip-placement",reflect:!0})],lo.prototype,"tooltipPlacement",2);f([t({reflect:!0})],lo.prototype,"tooltip",2);f([v("status")],lo.prototype,"handleStatusChange",1);f([v(["copyLabel","successLabel","errorLabel"])],lo.prototype,"handleLabelChange",1);f([v(["tooltipPlacement","disabled"],{waitUntilFirstUpdate:!0})],lo.prototype,"handleTooltipOptionsChange",1);f([v("tooltip",{waitUntilFirstUpdate:!0})],lo.prototype,"handleTooltipModeChange",1);lo=f([$("wa-copy-button")],lo);/*! Copyright 2026 Fonticons, Inc. - https://webawesome.com/license */var p3=F`
  :host {
    --max-width: 30ch;

    /** These styles are added so we don't interfere in the DOM. */
    display: inline-block;
    position: absolute;

    /** Defaults for inherited CSS properties */
    color: var(--wa-tooltip-content-color);
    font-size: var(--wa-tooltip-font-size);
    line-height: var(--wa-tooltip-line-height);
    text-align: start;
    white-space: normal;
  }

  .tooltip {
    --arrow-size: var(--wa-tooltip-arrow-size);
    --arrow-color: var(--wa-tooltip-background-color);
  }

  .tooltip::part(popup) {
    z-index: 1000;
  }

  .tooltip[placement^='top']::part(popup) {
    transform-origin: bottom;
  }

  .tooltip[placement^='bottom']::part(popup) {
    transform-origin: top;
  }

  .tooltip[placement^='left']::part(popup) {
    transform-origin: right;
  }

  .tooltip[placement^='right']::part(popup) {
    transform-origin: left;
  }

  .body {
    display: block;
    width: max-content;
    max-width: var(--max-width);
    border-radius: var(--wa-tooltip-border-radius);
    background-color: var(--wa-tooltip-background-color);
    border: var(--wa-tooltip-border-width) var(--wa-tooltip-border-style) var(--wa-tooltip-border-color);
    padding: 0.25em 0.5em;
    user-select: none;
    -webkit-user-select: none;
  }

  .tooltip {
    --popup-border-width: var(--wa-tooltip-border-width);

    /* Inset box-shadow, not a border: Safari seams a clip-path edge that runs along a border. */
    &::part(arrow) {
      box-shadow: inset calc(-1 * var(--wa-tooltip-border-width)) calc(-1 * var(--wa-tooltip-border-width)) 0 0
        var(--wa-tooltip-border-color);
    }
  }
`;/*! Copyright 2026 Fonticons, Inc. - https://webawesome.com/license */var ko=class extends Event{constructor(){super("wa-show",{bubbles:!0,cancelable:!0,composed:!0})}};/*! Copyright 2026 Fonticons, Inc. - https://webawesome.com/license */var To=class extends Event{constructor(o){super("wa-hide",{bubbles:!0,cancelable:!0,composed:!0});this.detail=o}};/*! Copyright 2026 Fonticons, Inc. - https://webawesome.com/license */var jo=class extends Event{constructor(){super("wa-after-show",{bubbles:!0,cancelable:!1,composed:!0})}};/*! Copyright 2026 Fonticons, Inc. - https://webawesome.com/license */var Io=class extends Event{constructor(){super("wa-after-hide",{bubbles:!0,cancelable:!1,composed:!0})}};/*! Copyright 2026 Fonticons, Inc. - https://webawesome.com/license */var Lo=class extends L{constructor(){super(...arguments);this.dismissedByPress=!1,this.placement="top",this.disabled=!1,this.distance=8,this.open=!1,this.skidding=0,this.showDelay=150,this.hideDelay=0,this.trigger="hover focus",this.withoutArrow=!1,this.for=null,this.anchor=null,this.eventController=new AbortController,this.handleBlur=()=>{if(this.dismissedByPress=!1,this.hasTrigger("focus"))this.hide()},this.handleClick=()=>{if(this.hasTrigger("click")){if(this.open)this.hide();else this.show();return}if(this.hasTrigger("manual"))return;this.lightDismiss()},this.handleFocus=()=>{if(this.dismissedByPress)return;if(this.hasTrigger("focus"))this.show()},this.handleMouseDown=()=>{if(this.hasTrigger("click")||this.hasTrigger("manual"))return;this.lightDismiss()},this.handleDocumentKeyDown=(o)=>{if(this.hasTrigger("manual"))return;if(o.key==="Escape"&&this.open&&Ao(this))o.preventDefault(),o.stopPropagation(),this.hide()},this.handleDocumentClick=(o)=>{if(this.hasTrigger("manual"))return;if(this.anchor&&o.composedPath().includes(this.anchor))return;this.hide()},this.handleMouseOver=()=>{if(this.dismissedByPress)return;if(this.hasTrigger("hover"))clearTimeout(this.hoverTimeout),this.hoverTimeout=window.setTimeout(()=>this.show(),this.showDelay)},this.handleMouseOut=(o)=>{let i=o.relatedTarget,r=Boolean(i&&this.anchor?.contains(i)),a=Boolean(i&&this.contains(i));if(r||a)return;if(this.dismissedByPress=!1,this.hasTrigger("hover"))clearTimeout(this.hoverTimeout),this.hoverTimeout=window.setTimeout(()=>{this.hide()},this.hideDelay)}}connectedCallback(){if(super.connectedCallback(),typeof document<"u"){if(this.eventController.signal.aborted)this.eventController=new AbortController;if(this.addEventListener("mouseout",this.handleMouseOut),this.dismissedByPress=!1,this.open)this.open=!1,this.updateComplete.then(()=>{this.open=!0});if(!this.id)this.id=bi("wa-tooltip-");if(this.for&&this.anchor)this.anchor=null,this.handleForChange();else if(this.for)this.handleForChange()}}disconnectedCallback(){if(super.disconnectedCallback(),document.removeEventListener("keydown",this.handleDocumentKeyDown),document.removeEventListener("click",this.handleDocumentClick),Mo(this),this.eventController.abort(),this.anchor)this.removeFromAriaLabelledBy(this.anchor,this.id)}firstUpdated(o){if(this.body.hidden=!this.open,this.open)this.popup.active=!0,this.popup.reposition();super.firstUpdated(o)}lightDismiss(){clearTimeout(this.hoverTimeout),this.dismissedByPress=!0,this.hide()}hasTrigger(o){return this.trigger.split(" ").includes(o)}addToAriaLabelledBy(o,i){let a=(o.getAttribute("aria-labelledby")||"").split(/\s+/).filter(Boolean);if(!a.includes(i))a.push(i),o.setAttribute("aria-labelledby",a.join(" "))}removeFromAriaLabelledBy(o,i){let n=(o.getAttribute("aria-labelledby")||"").split(/\s+/).filter(Boolean).filter((w)=>w!==i);if(n.length>0)o.setAttribute("aria-labelledby",n.join(" "));else o.removeAttribute("aria-labelledby")}async handleOpenChange(){if(this.open){if(this.disabled)return;let o=new ko;if(this.dispatchEvent(o),o.defaultPrevented){this.open=!1;return}if(!this.hasTrigger("manual"))document.addEventListener("keydown",this.handleDocumentKeyDown,{signal:this.eventController.signal}),document.addEventListener("click",this.handleDocumentClick,{signal:this.eventController.signal}),_o(this);this.body.hidden=!1,this.popup.active=!0,await P(this.popup.popup,"show-with-scale"),this.popup.reposition(),this.dispatchEvent(new jo)}else{let o=new To;if(this.dispatchEvent(o),o.defaultPrevented){this.open=!0;return}document.removeEventListener("keydown",this.handleDocumentKeyDown),document.removeEventListener("click",this.handleDocumentClick),Mo(this),await P(this.popup.popup,"hide-with-scale"),this.popup.active=!1,this.body.hidden=!0,this.dispatchEvent(new Io)}}handleForChange(){let o=this.getRootNode?.();if(!o)return;let i=this.for?o.getElementById?.(this.for):null,r=this.anchor;if(i===r)return;this.dismissedByPress=!1;let{signal:a}=this.eventController;if(i)this.addToAriaLabelledBy(i,this.id),i.addEventListener("blur",this.handleBlur,{capture:!0,signal:a}),i.addEventListener("focus",this.handleFocus,{capture:!0,signal:a}),i.addEventListener("click",this.handleClick,{signal:a}),i.addEventListener("mousedown",this.handleMouseDown,{signal:a}),i.addEventListener("mouseover",this.handleMouseOver,{signal:a}),i.addEventListener("mouseout",this.handleMouseOut,{signal:a});if(r)this.removeFromAriaLabelledBy(r,this.id),r.removeEventListener("blur",this.handleBlur,{capture:!0}),r.removeEventListener("focus",this.handleFocus,{capture:!0}),r.removeEventListener("click",this.handleClick),r.removeEventListener("mousedown",this.handleMouseDown),r.removeEventListener("mouseover",this.handleMouseOver),r.removeEventListener("mouseout",this.handleMouseOut);this.anchor=i}async handleOptionsChange(){if(this.hasUpdated)await this.updateComplete,this.popup.reposition()}handleDisabledChange(){if(this.disabled&&this.open)this.hide()}async show(){if(this.open)return;return this.open=!0,Yo(this,"wa-after-show")}async hide(){if(!this.open)return;return this.open=!1,Yo(this,"wa-after-hide")}render(){return h`
      <wa-popup
        part="base tooltip"
        exportparts="
          popup:base__popup,
          arrow:base__arrow
        "
        class=${Z({tooltip:!0,"tooltip-open":this.open})}
        placement=${this.placement}
        distance=${this.distance}
        skidding=${this.skidding}
        flip
        shift
        ?arrow=${!this.withoutArrow}
        hover-bridge
        .anchor=${this.anchor}
      >
        <div part="body" class="body">
          <slot></slot>
        </div>
      </wa-popup>
    `}};Lo.css=p3;Lo.dependencies={"wa-popup":bo};f([Y("slot:not([name])")],Lo.prototype,"defaultSlot",2);f([Y(".body")],Lo.prototype,"body",2);f([Y("wa-popup")],Lo.prototype,"popup",2);f([t()],Lo.prototype,"placement",2);f([t({type:Boolean,reflect:!0})],Lo.prototype,"disabled",2);f([t({type:Number})],Lo.prototype,"distance",2);f([t({type:Boolean,reflect:!0})],Lo.prototype,"open",2);f([t({type:Number})],Lo.prototype,"skidding",2);f([t({attribute:"show-delay",type:Number})],Lo.prototype,"showDelay",2);f([t({attribute:"hide-delay",type:Number})],Lo.prototype,"hideDelay",2);f([t()],Lo.prototype,"trigger",2);f([t({attribute:"without-arrow",type:Boolean,reflect:!0})],Lo.prototype,"withoutArrow",2);f([t()],Lo.prototype,"for",2);f([J()],Lo.prototype,"anchor",2);f([v("open",{waitUntilFirstUpdate:!0})],Lo.prototype,"handleOpenChange",1);f([v("for")],Lo.prototype,"handleForChange",1);f([v(["distance","placement","skidding"])],Lo.prototype,"handleOptionsChange",1);f([v("disabled")],Lo.prototype,"handleDisabledChange",1);Lo=f([$("wa-tooltip")],Lo);/*! Copyright 2026 Fonticons, Inc. - https://webawesome.com/license *//*! Copyright 2026 Fonticons, Inc. - https://webawesome.com/license */var h3=F`
  :host {
    --spacing: var(--wa-space-m);
    --show-duration: var(--wa-transition-normal);
    --hide-duration: var(--wa-transition-normal);

    display: block;
  }

  details {
    display: block;
    overflow-anchor: none;
    border: var(--wa-panel-border-width) var(--wa-color-surface-border) var(--wa-panel-border-style);
    background-color: var(--wa-color-surface-default);
    border-radius: var(--wa-panel-border-radius);
    color: var(--wa-color-text-normal);

    /* Print styles */
    @media print {
      background: none;
      border: solid var(--wa-border-width-s) var(--wa-color-surface-border);

      summary {
        list-style: none;
      }
    }
  }

  /* Appearance modifiers */
  :host([appearance='plain']) details {
    background-color: transparent;
    border-color: transparent;
    border-radius: 0;
  }

  :host([appearance='outlined']) details {
    background-color: var(--wa-color-surface-default);
    border-color: var(--wa-color-surface-border);
  }

  :host([appearance='filled']) details {
    background-color: var(--wa-color-neutral-fill-quiet);
    border-color: transparent;
  }

  :host([appearance='filled-outlined']) details {
    background-color: var(--wa-color-neutral-fill-quiet);
    border-color: var(--wa-color-neutral-border-quiet);
  }

  :host([disabled]) details {
    opacity: 0.5;
    cursor: not-allowed;
  }

  summary {
    display: flex;
    align-items: center;
    justify-content: space-between;
    gap: var(--spacing);
    padding: var(--spacing); /* Add padding here */
    border-radius: calc(var(--wa-panel-border-radius) - var(--wa-panel-border-width));
    user-select: none;
    -webkit-user-select: none;
    cursor: pointer;

    &::marker,
    &::-webkit-details-marker {
      display: none;
    }

    &:focus {
      outline: none;
    }

    &:focus-visible {
      outline: var(--wa-focus-ring);
      outline-offset: calc(var(--wa-panel-border-width) + var(--wa-focus-ring-offset));
    }
  }

  :host([open]) summary {
    border-end-start-radius: 0;
    border-end-end-radius: 0;
  }

  /* 'Start' icon placement */
  :host([icon-placement='start']) summary {
    flex-direction: row-reverse;
    justify-content: start;
  }

  [part~='icon'] {
    flex: 0 0 auto;
    display: flex;
    align-items: center;
    color: var(--wa-color-text-quiet);
    transition: rotate var(--wa-transition-normal) var(--wa-transition-easing);
  }

  :host([open]) [part~='icon'] {
    rotate: 90deg;
  }

  :host([open]:dir(rtl)) [part~='icon'] {
    rotate: -90deg;
  }

  :host([open]) slot[name='expand-icon'],
  :host(:not([open])) slot[name='collapse-icon'] {
    display: none;
  }

  .body.animating {
    overflow: hidden;
  }

  .content {
    display: block;
    box-sizing: border-box; /* Ensure contents don't overflow */
    padding-block-start: var(--spacing);
    padding-inline: var(--spacing); /* Add horizontal padding */
    padding-block-end: var(--spacing); /* Add bottom padding */
  }
`;/*! Copyright 2026 Fonticons, Inc. - https://webawesome.com/license */var eo=class extends L{constructor(){super(...arguments);this.localize=new B(this),this.animationGeneration=0,this.isAnimating=!1,this.open=!1,this.disabled=!1,this.appearance="outlined",this.iconPlacement="end"}disconnectedCallback(){super.disconnectedCallback(),this.detailsObserver?.disconnect()}firstUpdated(o){if(super.firstUpdated(o),this.body.style.height=this.open?"auto":"0",this.open)this.details.open=!0;this.detailsObserver=new MutationObserver((i)=>{for(let r of i)if(r.type==="attributes"&&r.attributeName==="open")if(this.details.open)this.show();else this.hide()}),this.detailsObserver.observe(this.details,{attributes:!0})}updated(o){if(o.has("isAnimating"))this.customStates.set("animating",this.isAnimating)}handleSummaryClick(o){if(o.composedPath().some((a)=>{if(!(a instanceof HTMLElement))return!1;let n=a.tagName?.toLowerCase();if(["a","button","input","textarea","select"].includes(n))return!0;if(a instanceof E)return!("disabled"in a)||!a.disabled;return!1}))return;if(o.preventDefault(),!this.disabled){if(this.open)this.hide();else this.show();this.header.focus()}}handleSummaryKeyDown(o){if(o.key==="Enter"||o.key===" ")if(o.preventDefault(),this.open)this.hide();else this.show();if(o.key==="ArrowUp"||o.key==="ArrowLeft")o.preventDefault(),this.hide();if(o.key==="ArrowDown"||o.key==="ArrowRight")o.preventDefault(),this.show()}closeOthersWithSameName(){if(!this.name)return;this.getRootNode().querySelectorAll(`wa-details[name="${this.name}"]`).forEach((r)=>{if(r!==this&&r.open)r.open=!1})}async handleOpenChange(){this.animationGeneration++;let o=this.animationGeneration;if(this.open){this.details.open=!0;let i=new ko;if(this.dispatchEvent(i),i.defaultPrevented){this.open=!1,this.details.open=!1;return}this.closeOthersWithSameName(),this.isAnimating=!0;let r=w0(getComputedStyle(this.body).getPropertyValue("--show-duration"));if(await Bi(this.body,[{height:"0",opacity:"0"},{height:`${this.body.scrollHeight}px`,opacity:"1"}],{duration:r,easing:"linear"}),this.animationGeneration!==o)return;this.body.style.height="auto",this.isAnimating=!1,this.dispatchEvent(new jo)}else{let i=new To;if(this.dispatchEvent(i),i.defaultPrevented){this.details.open=!0,this.open=!0;return}this.isAnimating=!0;let r=w0(getComputedStyle(this.body).getPropertyValue("--hide-duration"));if(await Bi(this.body,[{height:`${this.body.scrollHeight}px`,opacity:"1"},{height:"0",opacity:"0"}],{duration:r,easing:"linear"}),this.animationGeneration!==o)return;this.body.style.height="0",this.isAnimating=!1,this.details.open=!1,this.dispatchEvent(new Io)}}async show(){if(this.open||this.disabled)return;return this.open=!0,Yo(this,"wa-after-show")}async hide(){if(!this.open||this.disabled)return;return this.open=!1,Yo(this,"wa-after-hide")}render(){let o=!this.hasUpdated?this.dir==="rtl":this.localize.dir()==="rtl";return h`
      <details part="base details">
        <summary
          part="header"
          role="button"
          aria-expanded=${this.open?"true":"false"}
          aria-controls="content"
          aria-disabled=${this.disabled?"true":"false"}
          tabindex=${this.disabled?"-1":"0"}
          @click=${this.handleSummaryClick}
          @keydown=${this.handleSummaryKeyDown}
        >
          <slot name="summary" part="summary">${this.summary}</slot>

          <span part="icon">
            <slot name="expand-icon">
              <wa-icon library="system" variant="solid" name=${o?"chevron-left":"chevron-right"}></wa-icon>
            </slot>
            <slot name="collapse-icon">
              <wa-icon library="system" variant="solid" name=${o?"chevron-left":"chevron-right"}></wa-icon>
            </slot>
          </span>
        </summary>

        <div
          class=${Z({body:!0,animating:this.isAnimating})}
          role="region"
          aria-labelledby="header"
        >
          <slot part="content" id="content" class="content"></slot>
        </div>
      </details>
    `}};eo.css=h3;f([Y("details")],eo.prototype,"details",2);f([Y("summary")],eo.prototype,"header",2);f([Y(".body")],eo.prototype,"body",2);f([Y(".expand-icon-slot")],eo.prototype,"expandIconSlot",2);f([J()],eo.prototype,"isAnimating",2);f([t({type:Boolean,reflect:!0})],eo.prototype,"open",2);f([t()],eo.prototype,"summary",2);f([t({reflect:!0})],eo.prototype,"name",2);f([t({type:Boolean,reflect:!0})],eo.prototype,"disabled",2);f([t({reflect:!0})],eo.prototype,"appearance",2);f([t({attribute:"icon-placement",reflect:!0})],eo.prototype,"iconPlacement",2);f([v("open",{waitUntilFirstUpdate:!0})],eo.prototype,"handleOpenChange",1);eo=f([$("wa-details")],eo);/*! Copyright 2026 Fonticons, Inc. - https://webawesome.com/license *//*! Copyright 2026 Fonticons, Inc. - https://webawesome.com/license */var Q2=class{constructor(o,i){this.element=o,this.callback=i}start(...o){if(M)return;this.observer??(this.observer=new ResizeObserver(()=>this.check())),this.observer.observe(this.element);for(let i of o)this.observer.observe(i);this.initialCheckHandle??(this.initialCheckHandle=requestAnimationFrame(()=>{this.initialCheckHandle=void 0,this.check()}))}stop(){if(this.initialCheckHandle!==void 0)cancelAnimationFrame(this.initialCheckHandle),this.initialCheckHandle=void 0;this.observer?.disconnect()}check(){this.callback(this.element.getClientRects().length>0)}};/*! Copyright 2026 Fonticons, Inc. - https://webawesome.com/license */function Gt(o,i){return{top:Math.round(o.getBoundingClientRect().top-i.getBoundingClientRect().top),left:Math.round(o.getBoundingClientRect().left-i.getBoundingClientRect().left)}}var ra=new Set;function Mt(){let o=document.documentElement.clientWidth;return Math.abs(window.innerWidth-o)}function Vt(){let o=Number(getComputedStyle(document.body).paddingRight.replace(/px/,""));if(isNaN(o)||!o)return 0;return o}function Y0(o){if(ra.add(o),!document.documentElement.classList.contains("wa-scroll-lock")){let i=Mt()+Vt(),r=getComputedStyle(document.documentElement).scrollbarGutter;if(!r||r==="auto")r="stable";if(i<2)r="";document.documentElement.style.setProperty("--wa-scroll-lock-gutter",r),document.documentElement.classList.add("wa-scroll-lock"),document.documentElement.style.setProperty("--wa-scroll-lock-size",`${i}px`)}}function q0(o){if(ra.delete(o),ra.size===0)document.documentElement.classList.remove("wa-scroll-lock"),document.documentElement.style.removeProperty("--wa-scroll-lock-size")}function L0(o,i,r="vertical",a="smooth"){let n=Gt(o,i),w=n.top+i.scrollTop,b=n.left+i.scrollLeft,c=i.scrollLeft,m=i.scrollLeft+i.offsetWidth,p=i.scrollTop,d=i.scrollTop+i.offsetHeight;if(r==="horizontal"||r==="both"){if(b<c)i.scrollTo({left:b,behavior:a});else if(b+o.clientWidth>m)i.scrollTo({left:b-i.offsetWidth+o.clientWidth,behavior:a})}if(r==="vertical"||r==="both"){if(w<p)i.scrollTo({top:w,behavior:a});else if(w+o.clientHeight>d)i.scrollTo({top:w-i.offsetHeight+o.clientHeight,behavior:a})}}/*! Copyright 2026 Fonticons, Inc. - https://webawesome.com/license */function U0(o){return o.split(" ").map((i)=>i.trim()).filter((i)=>i!=="")}/*! Copyright 2026 Fonticons, Inc. - https://webawesome.com/license */var d3=F`
  :host {
    --width: 31rem;
    --spacing: var(--wa-space-l);
    --backdrop-filter: none;
    --show-duration: var(--wa-transition-normal);
    --hide-duration: var(--wa-transition-normal);

    display: none;
  }

  :host([open]) {
    display: block;
  }

  .dialog {
    display: flex;
    flex-direction: column;
    top: 0;
    right: 0;
    bottom: 0;
    left: 0;
    width: var(--width);
    max-width: calc(100% - var(--wa-space-2xl));
    max-height: calc(100% - var(--wa-space-2xl));
    color: inherit;
    background-color: var(--wa-color-surface-raised);
    border-radius: var(--wa-panel-border-radius);
    border: none;
    box-shadow: var(--wa-shadow-l);
    padding: 0;
    margin: auto;

    &.show {
      animation: show-dialog var(--show-duration) ease;

      &::backdrop {
        animation: show-backdrop var(--show-duration, 200ms) ease;
      }
    }

    &.hide {
      animation: show-dialog var(--hide-duration) ease reverse;

      &::backdrop {
        animation: show-backdrop var(--hide-duration, 200ms) ease reverse;
      }
    }

    &.pulse {
      animation: pulse 250ms ease;
    }
  }

  .dialog:focus {
    outline: none;
  }

  /* Ensure there's enough vertical padding for phones that don't update vh when chrome appears (e.g. iPhone) */
  @media screen and (max-width: 420px) {
    .dialog {
      max-height: 80vh;
    }
  }

  .open {
    display: flex;
    opacity: 1;
  }

  .header {
    flex: 0 0 auto;
    display: flex;
    flex-wrap: nowrap;

    padding-inline-start: var(--spacing);
    padding-block-end: 0;

    /* Subtract the close button's padding so that the X is visually aligned with the edges of the dialog content */
    padding-inline-end: calc(var(--spacing) - var(--wa-form-control-padding-block));
    padding-block-start: calc(var(--spacing) - var(--wa-form-control-padding-block));
  }

  .title {
    align-self: center;
    flex: 1 1 auto;
    font-family: inherit;
    font-size: var(--wa-font-size-l);
    font-weight: var(--wa-font-weight-heading);
    line-height: var(--wa-line-height-condensed);
    margin: 0;
  }

  .header-actions {
    align-self: start;
    display: flex;
    flex-shrink: 0;
    flex-wrap: wrap;
    justify-content: end;
    gap: var(--wa-space-2xs);
    padding-inline-start: var(--spacing);
  }

  .header-actions wa-button,
  .header-actions ::slotted(wa-button) {
    flex: 0 0 auto;
    display: flex;
    align-items: center;
  }

  .body {
    flex: 1 1 auto;
    display: block;
    padding: var(--spacing);
    overflow: auto;
    -webkit-overflow-scrolling: touch;

    &:focus {
      outline: none;
    }

    &:focus-visible {
      outline: var(--wa-focus-ring);
      outline-offset: var(--wa-focus-ring-offset);
    }
  }

  .footer {
    flex: 0 0 auto;
    display: flex;
    flex-wrap: wrap;
    gap: var(--wa-space-xs);
    justify-content: end;
    padding: var(--spacing);
    padding-block-start: 0;
  }

  .footer ::slotted(wa-button:not(:first-of-type)) {
    margin-inline-start: var(--wa-spacing-xs);
  }

  .dialog::backdrop {
    /*
      NOTE: the ::backdrop element doesn't inherit properly in Safari yet, but it will in 17.4! At that time, we can
      remove the fallback values here.
    */
    background-color: var(--wa-color-overlay-modal, rgb(0 0 0 / 0.25));
    backdrop-filter: var(--backdrop-filter);
  }

  @keyframes pulse {
    0% {
      scale: 1;
    }
    50% {
      scale: 1.02;
    }
    100% {
      scale: 1;
    }
  }

  @keyframes show-dialog {
    from {
      opacity: 0;
      scale: 0.8;
    }
    to {
      opacity: 1;
      scale: 1;
    }
  }

  @keyframes show-backdrop {
    from {
      opacity: 0;
    }
    to {
      opacity: 1;
    }
  }

  @media (forced-colors: active) {
    .dialog {
      border: solid 1px white;
    }
  }
`;/*! Copyright 2026 Fonticons, Inc. - https://webawesome.com/license */var Ni=class extends L{constructor(){super(...arguments);this.localize=new B(this),this.hasSlotController=new W(this,"footer","header-actions","label"),this.renderedWatcher=new Q2(this,(o)=>this.handleRenderedChange(o)),this.open=!1,this.label="",this.withoutHeader=!1,this.lightDismiss=!1,this.withFooter=!1,this.handleDocumentKeyDown=(o)=>{if(o.key==="Escape"&&this.open&&Ao(this))o.preventDefault(),o.stopPropagation(),this.requestClose(this.dialog)}}firstUpdated(o){if(super.firstUpdated(o),this.open)this.addOpenListeners(),this.dialog.showModal(),Y0(this),this.renderedWatcher.start(this.dialog)}disconnectedCallback(){super.disconnectedCallback(),this.renderedWatcher.stop(),q0(this),this.removeOpenListeners()}async requestClose(o){let i=new To({source:o});if(this.dispatchEvent(i),i.defaultPrevented){this.open=!0,P(this.dialog,"pulse");return}this.removeOpenListeners(),await P(this.dialog,"hide"),this.open=!1,this.dialog.close(),q0(this),this.renderedWatcher.stop();let r=this.originalTrigger;if(typeof r?.focus==="function")setTimeout(()=>r.focus());this.dispatchEvent(new Io)}addOpenListeners(){document.addEventListener("keydown",this.handleDocumentKeyDown),_o(this)}removeOpenListeners(){document.removeEventListener("keydown",this.handleDocumentKeyDown),Mo(this)}handleDialogCancel(o){if(o.preventDefault(),!this.dialog.classList.contains("hide")&&o.target===this.dialog&&Ao(this))this.requestClose(this.dialog)}handleDialogClick(o){let r=o.target.closest('[data-dialog="close"]');if(r)o.stopPropagation(),this.requestClose(r)}async handleDialogPointerDown(o){if(o.target===this.dialog)if(this.lightDismiss)this.requestClose(this.dialog);else await P(this.dialog,"pulse")}handleRenderedChange(o){if(!this.open){this.renderedWatcher.stop();return}if(!o&&this.dialog.open)this.removeOpenListeners(),this.dialog.close(),q0(this);else if(o&&!this.dialog.open)this.addOpenListeners(),this.dialog.showModal(),Y0(this)}handleOpenChange(){if(this.open&&!this.dialog.open)this.show();else if(!this.open&&this.dialog.open)this.open=!0,this.requestClose(this.dialog);else if(!this.open)this.renderedWatcher.stop()}async show(){let o=new ko;if(this.dispatchEvent(o),o.defaultPrevented){this.open=!1;return}this.addOpenListeners(),this.originalTrigger=document.activeElement,this.open=!0,this.dialog.showModal(),Y0(this),this.renderedWatcher.start(this.dialog),requestAnimationFrame(()=>{let i=this.querySelector("[autofocus]");if(i&&typeof i.focus==="function")i.focus();else this.dialog.focus()}),await P(this.dialog,"show"),this.dispatchEvent(new jo)}render(){let o=!this.withoutHeader,i=this.hasSlotController.test("footer","withFooter");return h`
      <dialog
        part="dialog"
        class=${Z({dialog:!0,open:this.open})}
        @cancel=${this.handleDialogCancel}
        @click=${this.handleDialogClick}
        @pointerdown=${this.handleDialogPointerDown}
      >
        ${o?h`
              <div part="header" class="header">
                <h2 part="title" class="title" id="title">
                  <!-- If there's no label, use an invisible character to prevent the header from collapsing -->
                  <slot name="label"> ${this.label.length>0?this.label:String.fromCharCode(8203)} </slot>
                </h2>
                <div part="header-actions" class="header-actions">
                  <slot name="header-actions"></slot>
                  <wa-button
                    part="close-button"
                    exportparts="base:close-button__base"
                    class="close"
                    appearance="plain"
                    @click="${(r)=>this.requestClose(r.target)}"
                  >
                    <wa-icon
                      name="xmark"
                      label=${this.localize.term("close")}
                      library="system"
                      variant="solid"
                    ></wa-icon>
                  </wa-button>
                </div>
              </div>
            `:""}

        <div part="body" class="body"><slot></slot></div>

        <!-- Use a hidden element so we still get "slotchange" events. -->
        <div part="footer" class="footer" ?hidden=${!i}>
          <slot name="footer"></slot>
        </div>
      </dialog>
    `}};Ni.css=d3;f([Y(".dialog")],Ni.prototype,"dialog",2);f([t({type:Boolean,reflect:!0})],Ni.prototype,"open",2);f([t({reflect:!0})],Ni.prototype,"label",2);f([t({attribute:"without-header",type:Boolean,reflect:!0})],Ni.prototype,"withoutHeader",2);f([t({attribute:"light-dismiss",type:Boolean})],Ni.prototype,"lightDismiss",2);f([t({attribute:"with-footer",type:Boolean})],Ni.prototype,"withFooter",2);f([v("open",{waitUntilFirstUpdate:!0})],Ni.prototype,"handleOpenChange",1);Ni=f([$("wa-dialog")],Ni);if(!M)document.addEventListener("click",(o)=>{let i=o.target.closest("[data-dialog]");if(i instanceof Element){let[r,a]=U0(i.getAttribute("data-dialog")||"");if(r==="open"&&a?.length){let w=i.getRootNode().getElementById(a);if(w?.localName==="wa-dialog")w.open=!0;else console.warn(`A dialog with an ID of "${a}" could not be found in this document.`)}}}),document.addEventListener("pointerdown",()=>{});/*! Copyright 2026 Fonticons, Inc. - https://webawesome.com/license *//*! Copyright 2026 Fonticons, Inc. - https://webawesome.com/license */var g3=F`
  :host {
    --color: var(--wa-color-surface-border);
    --width: var(--wa-border-width-s);
    --spacing: var(--wa-space-m);
  }

  :host(:not([orientation='vertical'])) {
    display: block;
    border-top: solid var(--width) var(--color);
    margin: var(--spacing) 0;
  }

  :host([orientation='vertical']) {
    display: inline-block;
    height: 100%;
    border-inline-start: solid var(--width) var(--color);
    margin: 0 var(--spacing);
    min-block-size: 1lh;
  }
`;/*! Copyright 2026 Fonticons, Inc. - https://webawesome.com/license */var cr=class extends L{constructor(){super(...arguments);this.orientation="horizontal"}connectedCallback(){super.connectedCallback(),this.setAttribute("role","separator")}handleVerticalChange(){this.setAttribute("aria-orientation",this.orientation)}};cr.css=g3;f([t({reflect:!0})],cr.prototype,"orientation",2);f([v("orientation")],cr.prototype,"handleVerticalChange",1);cr=f([$("wa-divider")],cr);/*! Copyright 2026 Fonticons, Inc. - https://webawesome.com/license *//*! Copyright 2026 Fonticons, Inc. - https://webawesome.com/license */var s3=F`
  :host {
    --size: 25rem;
    --spacing: var(--wa-space-l);
    --backdrop-filter: none;
    --show-duration: var(--wa-transition-normal);
    --hide-duration: var(--wa-transition-normal);

    display: none;
  }

  :host([open]) {
    display: block;
  }

  .drawer {
    display: flex;
    flex-direction: column;
    top: 0;
    inset-inline-start: 0;
    width: 100%;
    height: 100%;
    max-width: 100%;
    max-height: 100%;
    overflow: hidden;
    color: inherit;
    background-color: var(--wa-color-surface-raised);
    border: none;
    box-shadow: var(--wa-shadow-l);
    overflow: auto;
    padding: 0;
    margin: 0;
    animation-duration: var(--show-duration);
    animation-timing-function: ease;

    &.show::backdrop {
      animation: show-backdrop var(--show-duration, 200ms) ease;
    }

    &.hide::backdrop {
      animation: show-backdrop var(--hide-duration, 200ms) ease reverse;
    }

    &.show.top {
      animation: show-drawer-from-top var(--show-duration) ease;
    }

    &.hide.top {
      animation: show-drawer-from-top var(--hide-duration) ease reverse;
    }

    &.show.end {
      animation: show-drawer-from-end var(--show-duration) ease;

      &:dir(rtl) {
        animation-name: show-drawer-from-start;
      }
    }

    &.hide.end {
      animation: show-drawer-from-end var(--hide-duration) ease reverse;

      &:dir(rtl) {
        animation-name: show-drawer-from-start;
      }
    }

    &.show.bottom {
      animation: show-drawer-from-bottom var(--show-duration) ease;
    }

    &.hide.bottom {
      animation: show-drawer-from-bottom var(--hide-duration) ease reverse;
    }

    &.show.start {
      animation: show-drawer-from-start var(--show-duration) ease;

      &:dir(rtl) {
        animation-name: show-drawer-from-end;
      }
    }

    &.hide.start {
      animation: show-drawer-from-start var(--hide-duration) ease reverse;

      &:dir(rtl) {
        animation-name: show-drawer-from-end;
      }
    }

    &.pulse {
      animation: pulse 250ms ease;
    }
  }

  .drawer:focus {
    outline: none;
  }

  .top {
    top: 0;
    inset-inline-end: auto;
    bottom: auto;
    inset-inline-start: 0;
    width: 100%;
    height: var(--size);
  }

  .end {
    top: 0;
    inset-inline-end: 0;
    bottom: auto;
    inset-inline-start: auto;
    width: var(--size);
    height: 100%;
  }

  .bottom {
    top: auto;
    inset-inline-end: auto;
    bottom: 0;
    inset-inline-start: 0;
    width: 100%;
    height: var(--size);
  }

  .start {
    top: 0;
    inset-inline-end: auto;
    bottom: auto;
    inset-inline-start: 0;
    width: var(--size);
    height: 100%;
  }

  .header {
    display: flex;
    flex-wrap: nowrap;
    padding-inline-start: var(--spacing);
    padding-block-end: 0;

    /* Subtract the close button's padding so that the X is visually aligned with the edges of the dialog content */
    padding-inline-end: calc(var(--spacing) - var(--wa-form-control-padding-block));
    padding-block-start: calc(var(--spacing) - var(--wa-form-control-padding-block));
  }

  .title {
    align-self: center;
    flex: 1 1 auto;
    font: inherit;
    font-size: var(--wa-font-size-l);
    font-weight: var(--wa-font-weight-heading);
    line-height: var(--wa-line-height-condensed);
    margin: 0;
  }

  .header-actions {
    align-self: start;
    display: flex;
    flex-shrink: 0;
    flex-wrap: wrap;
    justify-content: end;
    gap: var(--wa-space-2xs);
    padding-inline-start: var(--spacing);
  }

  .header-actions wa-button,
  .header-actions ::slotted(wa-button) {
    flex: 0 0 auto;
    display: flex;
    align-items: center;
  }

  .body {
    flex: 1 1 auto;
    display: block;
    padding: var(--spacing);
    overflow: auto;
    -webkit-overflow-scrolling: touch;

    &:focus {
      outline: none;
    }

    &:focus-visible {
      outline: var(--wa-focus-ring);
      outline-offset: var(--wa-focus-ring-offset);
    }
  }

  .footer {
    display: flex;
    flex-wrap: wrap;
    gap: var(--wa-space-xs);
    justify-content: end;
    padding: var(--spacing);
    padding-block-start: 0;
  }

  .footer ::slotted(wa-button:not(:last-of-type)) {
    margin-inline-end: var(--wa-spacing-xs);
  }

  .drawer::backdrop {
    /*
        NOTE: the ::backdrop element doesn't inherit properly in Safari yet, but it will in 17.4! At that time, we can
        remove the fallback values here.
      */
    background-color: var(--wa-color-overlay-modal, rgb(0 0 0 / 0.25));
    backdrop-filter: var(--backdrop-filter);
  }

  @keyframes pulse {
    0% {
      scale: 1;
    }
    50% {
      scale: 1.01;
    }
    100% {
      scale: 1;
    }
  }

  @keyframes show-drawer {
    from {
      opacity: 0;
      scale: 0.8;
    }
    to {
      opacity: 1;
      scale: 1;
    }
  }

  @keyframes show-drawer-from-top {
    from {
      opacity: 0;
      translate: 0 -100%;
    }
    to {
      opacity: 1;
      translate: 0 0;
    }
  }

  @keyframes show-drawer-from-end {
    from {
      opacity: 0;
      translate: 100%;
    }
    to {
      opacity: 1;
      translate: 0 0;
    }
  }

  @keyframes show-drawer-from-bottom {
    from {
      opacity: 0;
      translate: 0 100%;
    }
    to {
      opacity: 1;
      translate: 0 0;
    }
  }

  @keyframes show-drawer-from-start {
    from {
      opacity: 0;
      translate: -100% 0;
    }
    to {
      opacity: 1;
      translate: 0 0;
    }
  }

  @keyframes show-backdrop {
    from {
      opacity: 0;
    }
    to {
      opacity: 1;
    }
  }

  @media (forced-colors: active) {
    .drawer {
      border: solid 1px white;
    }
  }
`;/*! Copyright 2026 Fonticons, Inc. - https://webawesome.com/license */var Ui=class extends L{constructor(){super(...arguments);this.localize=new B(this),this.hasSlotController=new W(this,"footer","header-actions","label"),this.renderedWatcher=new Q2(this,(o)=>this.handleRenderedChange(o)),this.open=!1,this.label="",this.placement="end",this.withoutHeader=!1,this.lightDismiss=!1,this.withFooter=!1,this.handleDocumentKeyDown=(o)=>{if(o.key==="Escape"&&this.open&&Ao(this))o.preventDefault(),o.stopPropagation(),this.requestClose(this.drawer)}}firstUpdated(o){if(super.firstUpdated(o),this.open)this.addOpenListeners(),this.drawer.showModal(),Y0(this),this.renderedWatcher.start(this.drawer)}disconnectedCallback(){super.disconnectedCallback(),this.renderedWatcher.stop(),q0(this),this.removeOpenListeners()}async requestClose(o){let i=new To({source:o});if(this.dispatchEvent(i),i.defaultPrevented){this.open=!0,P(this.drawer,"pulse");return}this.removeOpenListeners(),await P(this.drawer,"hide"),this.open=!1,this.drawer.close(),q0(this),this.renderedWatcher.stop();let r=this.originalTrigger;if(typeof r?.focus==="function")setTimeout(()=>r.focus());this.dispatchEvent(new Io)}addOpenListeners(){document.addEventListener("keydown",this.handleDocumentKeyDown),_o(this)}removeOpenListeners(){document.removeEventListener("keydown",this.handleDocumentKeyDown),Mo(this)}handleDialogCancel(o){if(o.preventDefault(),!this.drawer.classList.contains("hide")&&o.target===this.drawer&&Ao(this))this.requestClose(this.drawer)}handleDialogClick(o){let r=o.target.closest('[data-drawer="close"]');if(r)o.stopPropagation(),this.requestClose(r)}async handleDialogPointerDown(o){if(o.target===this.drawer)if(this.lightDismiss)this.requestClose(this.drawer);else await P(this.drawer,"pulse")}handleRenderedChange(o){if(!this.open){this.renderedWatcher.stop();return}if(!o&&this.drawer.open)this.removeOpenListeners(),this.drawer.close(),q0(this);else if(o&&!this.drawer.open)this.addOpenListeners(),this.drawer.showModal(),Y0(this)}handleOpenChange(){if(this.open&&!this.drawer.open)this.show();else if(this.drawer.open)this.open=!0,this.requestClose(this.drawer);else if(!this.open)this.renderedWatcher.stop()}async show(){let o=new ko;if(this.dispatchEvent(o),o.defaultPrevented){this.open=!1;return}this.addOpenListeners(),this.originalTrigger=document.activeElement,this.open=!0,this.drawer.showModal(),Y0(this),this.renderedWatcher.start(this.drawer),requestAnimationFrame(()=>{let i=this.querySelector("[autofocus]");if(i&&typeof i.focus==="function")i.focus();else this.drawer.focus()}),await P(this.drawer,"show"),this.dispatchEvent(new jo)}render(){let o=!this.withoutHeader,i=this.hasSlotController.test("footer","withFooter");return h`
      <dialog
        part="dialog"
        class=${Z({drawer:!0,open:this.open,top:this.placement==="top",end:this.placement==="end",bottom:this.placement==="bottom",start:this.placement==="start"})}
        @cancel=${this.handleDialogCancel}
        @click=${this.handleDialogClick}
        @pointerdown=${this.handleDialogPointerDown}
      >
        ${o?h`
              <div part="header" class="header">
                <h2 part="title" class="title" id="title">
                  <!-- If there's no label, use an invisible character to prevent the header from collapsing -->
                  <slot name="label"> ${this.label.length>0?this.label:String.fromCharCode(8203)} </slot>
                </h2>
                <div part="header-actions" class="header-actions">
                  <slot name="header-actions"></slot>
                  <wa-button
                    part="close-button"
                    exportparts="base:close-button__base"
                    class="close"
                    appearance="plain"
                    @click="${(r)=>this.requestClose(r.target)}"
                  >
                    <wa-icon
                      name="xmark"
                      label=${this.localize.term("close")}
                      library="system"
                      variant="solid"
                    ></wa-icon>
                  </wa-button>
                </div>
              </div>
            `:""}

        <div part="body" class="body"><slot></slot></div>

        <div part="footer" class="footer" ?hidden=${!i}>
          <slot name="footer"></slot>
        </div>
      </dialog>
    `}};Ui.css=s3;f([Y(".drawer")],Ui.prototype,"drawer",2);f([t({type:Boolean,reflect:!0})],Ui.prototype,"open",2);f([t({reflect:!0})],Ui.prototype,"label",2);f([t({reflect:!0})],Ui.prototype,"placement",2);f([t({attribute:"without-header",type:Boolean,reflect:!0})],Ui.prototype,"withoutHeader",2);f([t({attribute:"light-dismiss",type:Boolean})],Ui.prototype,"lightDismiss",2);f([t({attribute:"with-footer",type:Boolean})],Ui.prototype,"withFooter",2);f([v("open",{waitUntilFirstUpdate:!0})],Ui.prototype,"handleOpenChange",1);Ui=f([$("wa-drawer")],Ui);if(!M)document.addEventListener("click",(o)=>{let i=o.target.closest("[data-drawer]");if(i instanceof Element){let[r,a]=U0(i.getAttribute("data-drawer")||"");if(r==="open"&&a?.length){let w=i.getRootNode().getElementById(a);if(w?.localName==="wa-drawer")w.open=!0;else console.warn(`A drawer with an ID of "${a}" could not be found in this document.`)}}}),document.addEventListener("pointerdown",()=>{});/*! Copyright 2026 Fonticons, Inc. - https://webawesome.com/license *//*! Copyright 2026 Fonticons, Inc. - https://webawesome.com/license */var u3=class extends Event{constructor(o){super("wa-select",{bubbles:!0,cancelable:!0,composed:!0});this.detail=o}};/*! Copyright 2026 Fonticons, Inc. - https://webawesome.com/license */function*mr(o=document.activeElement){if(o===null||o===void 0)return;if(yield o,"shadowRoot"in o&&o.shadowRoot&&o.shadowRoot.mode!=="closed")yield*mr(o.shadowRoot.activeElement)}function z3(){return[...mr()].pop()}/*! Copyright 2026 Fonticons, Inc. - https://webawesome.com/license */var y3=F`
  :host {
    --show-duration: var(--wa-transition-fast);
    --hide-duration: var(--wa-transition-fast);
    display: contents;
  }

  #menu {
    display: flex;
    flex-direction: column;
    width: max-content;
    margin: 0;
    padding: 0.25em;
    border: var(--wa-border-style) var(--wa-border-width-s) var(--wa-color-surface-border);
    border-radius: var(--wa-border-radius-m);
    background-color: var(--wa-color-surface-raised);
    box-shadow: var(--wa-shadow-m);
    color: var(--wa-color-text-normal);
    text-align: start;
    user-select: none;
    overflow: auto;
    max-width: var(--auto-size-available-width) !important;
    max-height: var(--auto-size-available-height) !important;

    &.show {
      animation: show var(--show-duration) ease;
    }

    &.hide {
      animation: show var(--hide-duration) ease reverse;
    }

    ::slotted(h1),
    ::slotted(h2),
    ::slotted(h3),
    ::slotted(h4),
    ::slotted(h5),
    ::slotted(h6) {
      display: block !important;
      margin: 0.25em 0 !important;
      padding: 0.25em 0.75em !important;
      color: var(--wa-color-text-quiet);
      font-family: var(--wa-font-family-body) !important;
      font-weight: var(--wa-font-weight-semibold) !important;
      font-size: var(--wa-font-size-smaller) !important;
    }

    ::slotted(wa-divider) {
      --spacing: 0.25em; /* Component-specific, left as-is */
    }
  }

  wa-popup[data-current-placement^='top'] #menu {
    transform-origin: bottom;
  }

  wa-popup[data-current-placement^='bottom'] #menu {
    transform-origin: top;
  }

  wa-popup[data-current-placement^='left'] #menu {
    transform-origin: right;
  }

  wa-popup[data-current-placement^='right'] #menu {
    transform-origin: left;
  }

  wa-popup[data-current-placement='left-start'] #menu {
    transform-origin: right top;
  }

  wa-popup[data-current-placement='left-end'] #menu {
    transform-origin: right bottom;
  }

  wa-popup[data-current-placement='right-start'] #menu {
    transform-origin: left top;
  }

  wa-popup[data-current-placement='right-end'] #menu {
    transform-origin: left bottom;
  }

  @keyframes show {
    from {
      scale: 0.9;
      opacity: 0;
    }
    to {
      scale: 1;
      opacity: 1;
    }
  }
`;/*! Copyright 2026 Fonticons, Inc. - https://webawesome.com/license */var aa=new Set,oi=class extends L{constructor(){super(...arguments);this.submenuCleanups=new Map,this.localize=new B(this),this.userTypedQuery="",this.openSubmenuStack=[],this.open=!1,this.size="m",this.placement="bottom-start",this.distance=0,this.skidding=0,this.handleDocumentKeyDown=async(o)=>{let i=this.localize.dir()==="rtl";if(o.key==="Escape"&&this.open&&Ao(this)){let d=this.getTrigger();o.preventDefault(),o.stopPropagation(),this.open=!1,d?.focus({preventScroll:!0});return}let r=[...mr()].find((d)=>d.localName==="wa-dropdown-item"),a=r?.localName==="wa-dropdown-item",n=this.getCurrentSubmenuItem(),w=!!n,b,c,m;if(w)b=this.getSubmenuItems(n),c=b.find((d)=>d.active||d===r),m=c?b.indexOf(c):-1;else b=this.getItems(),c=b.find((d)=>d.active||d===r),m=c?b.indexOf(c):-1;let p;if(o.key==="ArrowUp")if(o.preventDefault(),o.stopPropagation(),m>0)p=b[m-1];else p=b[b.length-1];if(o.key==="ArrowDown")if(o.preventDefault(),o.stopPropagation(),m!==-1&&m<b.length-1)p=b[m+1];else p=b[0];if(o.key===(i?"ArrowLeft":"ArrowRight")&&a&&c){if(c.hasSubmenu){o.preventDefault(),o.stopPropagation(),c.submenuOpen=!0,this.addToSubmenuStack(c),setTimeout(()=>{let d=this.getSubmenuItems(c);if(d.length>0)d.forEach((s,z)=>s.active=z===0),d[0].focus({preventScroll:!0})},0);return}}if(o.key===(i?"ArrowRight":"ArrowLeft")&&w){o.preventDefault(),o.stopPropagation();let d=this.removeFromSubmenuStack();if(d)d.submenuOpen=!1,setTimeout(()=>{d.focus({preventScroll:!0}),d.active=!0,(d.slot==="submenu"?this.getSubmenuItems(d.parentElement):this.getItems()).forEach((z)=>{if(z!==d)z.active=!1})},0);return}if(o.key==="Home"||o.key==="End")o.preventDefault(),o.stopPropagation(),p=o.key==="Home"?b[0]:b[b.length-1];if(o.key==="Tab")await this.hideMenu();if(o.key.length===1&&!(o.metaKey||o.ctrlKey||o.altKey)&&!(o.key===" "&&this.userTypedQuery===""))clearTimeout(this.userTypedTimeout),this.userTypedTimeout=setTimeout(()=>{this.userTypedQuery=""},1000),this.userTypedQuery+=o.key,b.some((d)=>{let s=(d.textContent||"").trim().toLowerCase(),z=this.userTypedQuery.trim().toLowerCase();if(s.startsWith(z))return p=d,!0;return!1});if(p){o.preventDefault(),o.stopPropagation(),b.forEach((d)=>d.active=d===p),p.focus({preventScroll:!0}),p.scrollIntoView({block:"nearest"});return}if((o.key==="Enter"||o.key===" "&&this.userTypedQuery==="")&&a&&c)if(o.preventDefault(),o.stopPropagation(),c.hasSubmenu)c.submenuOpen=!0,this.addToSubmenuStack(c),setTimeout(()=>{let d=this.getSubmenuItems(c);if(d.length>0)d.forEach((s,z)=>s.active=z===0),d[0].focus({preventScroll:!0})},0);else this.makeSelection(c,o)},this.handleDocumentPointerDown=(o)=>{if(!o.composedPath().some((a)=>{if(a instanceof HTMLElement)return a===this||a.closest('wa-dropdown, [part="submenu"]');return!1}))this.open=!1},this.handleGlobalMouseMove=(o)=>{let i=this.getCurrentSubmenuItem();if(!i?.submenuOpen||!i.submenuElement)return;let r=i.submenuElement.getBoundingClientRect(),a=this.localize.dir()==="rtl",n=a?r.right:r.left,w=a?Math.max(o.clientX,n):Math.min(o.clientX,n),b=Math.max(r.top,Math.min(o.clientY,r.bottom));i.submenuElement.style.setProperty("--safe-triangle-cursor-x",`${w}px`),i.submenuElement.style.setProperty("--safe-triangle-cursor-y",`${b}px`);let c=o.composedPath(),m=i.matches(":hover"),p=Boolean(i.submenuElement?.matches(":hover")),d=m||!!c.find((z)=>z===i),s=p||!!c.find((z)=>z instanceof HTMLElement&&z.closest('[part="submenu"]')===i.submenuElement);if(!d&&!s)setTimeout(()=>{if(!m&&!p)i.submenuOpen=!1},100)}}handleSizeChange(){j(this.localName,this.size)}disconnectedCallback(){super.disconnectedCallback(),clearInterval(this.userTypedTimeout),this.closeAllSubmenus(),this.submenuCleanups.forEach((o)=>o()),this.submenuCleanups.clear(),document.removeEventListener("mousemove",this.handleGlobalMouseMove),document.removeEventListener("keydown",this.handleDocumentKeyDown),document.removeEventListener("pointerdown",this.handleDocumentPointerDown),Mo(this)}firstUpdated(o){super.firstUpdated(o),this.syncAriaAttributes()}async updated(o){if(o.has("open")){let i=o.get("open");if(i===this.open)return;if(i===void 0&&this.open===!1)return;if(this.customStates.set("open",this.open),this.open)await this.showMenu();else this.closeAllSubmenus(),await this.hideMenu()}if(o.has("size"))this.syncItemSizes()}getItems(o=!1){let i=(this.defaultSlot?.assignedElements({flatten:!0})??[]).filter((r)=>r.localName==="wa-dropdown-item");return o?i:i.filter((r)=>!r.disabled)}getSubmenuItems(o,i=!1){let r=o.shadowRoot?.querySelector('slot[name="submenu"]')||o.querySelector('slot[name="submenu"]');if(!r)return[];let a=r.assignedElements({flatten:!0}).filter((n)=>n.localName==="wa-dropdown-item");return i?a:a.filter((n)=>!n.disabled)}syncItemSizes(){(this.defaultSlot?.assignedElements({flatten:!0})??[]).filter((i)=>i.localName==="wa-dropdown-item").forEach((i)=>i.size=this.size)}addToSubmenuStack(o){let i=this.openSubmenuStack.indexOf(o);if(i!==-1)this.openSubmenuStack=this.openSubmenuStack.slice(0,i+1);else this.openSubmenuStack.push(o)}removeFromSubmenuStack(){return this.openSubmenuStack.pop()}getCurrentSubmenuItem(){return this.openSubmenuStack.length>0?this.openSubmenuStack[this.openSubmenuStack.length-1]:void 0}closeAllSubmenus(){this.getItems(!0).forEach((i)=>{i.submenuOpen=!1}),this.openSubmenuStack=[]}closeSiblingSubmenus(o){let i=o.closest('wa-dropdown-item:not([slot="submenu"])'),r;if(i)r=this.getSubmenuItems(i,!0);else r=this.getItems(!0);if(r.forEach((a)=>{if(a!==o&&a.submenuOpen)a.submenuOpen=!1}),!this.openSubmenuStack.includes(o))this.openSubmenuStack.push(o)}getTrigger(){return this.querySelector('[slot="trigger"]')}async showMenu(){if(!this.getTrigger()||!this.popup||!this.menu)return;let i=new ko;if(this.dispatchEvent(i),i.defaultPrevented){this.open=!1;return}if(this.popup.active)return;aa.forEach((a)=>a.open=!1),this.popup.active=!0,this.open=!0,aa.add(this),_o(this),this.syncAriaAttributes(),document.addEventListener("keydown",this.handleDocumentKeyDown),document.addEventListener("pointerdown",this.handleDocumentPointerDown),document.addEventListener("mousemove",this.handleGlobalMouseMove),this.menu.classList.remove("hide"),await P(this.menu,"show");let r=this.getItems();if(r.length>0)r.forEach((a,n)=>a.active=n===0),r[0].focus({preventScroll:!0});this.dispatchEvent(new jo)}async hideMenu(){if(!this.popup||!this.menu)return;let o=new To({source:this});if(this.dispatchEvent(o),o.defaultPrevented){this.open=!0;return}this.open=!1,aa.delete(this),Mo(this),this.syncAriaAttributes(),document.removeEventListener("keydown",this.handleDocumentKeyDown),document.removeEventListener("pointerdown",this.handleDocumentPointerDown),document.removeEventListener("mousemove",this.handleGlobalMouseMove),this.menu.classList.remove("show"),await P(this.menu,"hide"),this.popup.active=this.open,this.dispatchEvent(new Io)}handleMenuClick(o){let i=o.target.closest("wa-dropdown-item");if(!i||i.disabled)return;if(i.hasSubmenu){if(!i.submenuOpen)this.closeSiblingSubmenus(i),this.addToSubmenuStack(i),i.submenuOpen=!0;o.stopPropagation();return}this.makeSelection(i,o)}async handleMenuSlotChange(){let o=this.getItems(!0);await Promise.all(o.map((a)=>a.updateComplete)),this.syncItemSizes();let i=o.some((a)=>a.type==="checkbox"),r=o.some((a)=>a.hasSubmenu);o.forEach((a,n)=>{a.setAttribute("aria-posinset",String(n+1)),a.setAttribute("aria-setsize",String(o.length)),a.active=n===0,a.checkboxAdjacent=i,a.submenuAdjacent=r})}handleTriggerClick(){this.open=!this.open}handleSubmenuOpening(o){let i=o.detail.item;this.closeSiblingSubmenus(i),this.addToSubmenuStack(i),this.setupSubmenuPosition(i),this.processSubmenuItems(i)}setupSubmenuPosition(o){if(!o.submenuElement)return;this.cleanupSubmenuPosition(o);let i=q2(o,o.submenuElement,()=>{this.positionSubmenu(o),this.updateSafeTriangleCoordinates(o)});this.submenuCleanups.set(o,i);let r=o.submenuElement.querySelector('slot[name="submenu"]');if(r)r.removeEventListener("slotchange",oi.handleSubmenuSlotChange),r.addEventListener("slotchange",oi.handleSubmenuSlotChange),oi.handleSubmenuSlotChange({target:r})}static handleSubmenuSlotChange(o){let i=o.target;if(!i)return;let r=i.assignedElements().filter((w)=>w.localName==="wa-dropdown-item");if(r.length===0)return;let a=r.some((w)=>w.hasSubmenu),n=r.some((w)=>w.type==="checkbox");r.forEach((w)=>{w.submenuAdjacent=a,w.checkboxAdjacent=n})}processSubmenuItems(o){if(!o.submenuElement)return;let i=this.getSubmenuItems(o,!0),r=i.some((a)=>a.hasSubmenu);i.forEach((a)=>{a.submenuAdjacent=r})}cleanupSubmenuPosition(o){let i=this.submenuCleanups.get(o);if(i)i(),this.submenuCleanups.delete(o)}positionSubmenu(o){if(!o.submenuElement)return;let r=this.localize.dir()==="rtl"?"left-start":"right-start";J2(o,o.submenuElement,{placement:r,middleware:[L2({mainAxis:0,crossAxis:-5}),X2({fallbackStrategy:"bestFit"}),U2({padding:8,crossAxis:!0})]}).then(({x:a,y:n,placement:w})=>{o.submenuElement.setAttribute("data-placement",w),Object.assign(o.submenuElement.style,{left:`${a}px`,top:`${n}px`})})}updateSafeTriangleCoordinates(o){if(!o.submenuElement||!o.submenuOpen)return;if(document.activeElement?.matches(":focus-visible")){o.submenuElement.style.setProperty("--safe-triangle-visible","none");return}o.submenuElement.style.setProperty("--safe-triangle-visible","block");let r=o.submenuElement.getBoundingClientRect(),a=this.localize.dir()==="rtl";o.submenuElement.style.setProperty("--safe-triangle-submenu-start-x",`${a?r.right:r.left}px`),o.submenuElement.style.setProperty("--safe-triangle-submenu-start-y",`${r.top}px`),o.submenuElement.style.setProperty("--safe-triangle-submenu-end-x",`${a?r.right:r.left}px`),o.submenuElement.style.setProperty("--safe-triangle-submenu-end-y",`${r.bottom}px`)}makeSelection(o,i){let r=this.getTrigger();if(o.disabled)return;if(o.type==="checkbox")o.checked=!o.checked;let a=new u3({item:o});if(this.dispatchEvent(a),!a.defaultPrevented)o.navigate(i),this.open=!1,r?.focus({preventScroll:!0})}async syncAriaAttributes(){let o=this.getTrigger(),i;if(!o)return;if(o.localName==="wa-button")await customElements.whenDefined("wa-button"),await o.updateComplete,i=o.shadowRoot.querySelector('[part~="base"]');else i=o;if(!i.hasAttribute("id"))i.setAttribute("id",bi("wa-dropdown-trigger-"));i.setAttribute("aria-haspopup","menu"),i.setAttribute("aria-expanded",this.open?"true":"false"),this.menu?.setAttribute("aria-expanded","false")}render(){let o=this.didSSR&&!this.hasUpdated?this.open:this.popup?.active;return h`
      <wa-popup
        placement=${this.placement}
        distance=${this.distance}
        skidding=${this.skidding}
        ?active=${o}
        flip
        flip-fallback-strategy="best-fit"
        shift
        shift-padding="10"
        auto-size="vertical"
        auto-size-padding="10"
      >
        <slot
          name="trigger"
          slot="anchor"
          @click=${this.handleTriggerClick}
          @slotchange=${this.syncAriaAttributes}
        ></slot>
        <div
          id="menu"
          part="menu"
          role="menu"
          tabindex="-1"
          aria-orientation="vertical"
          @click=${this.handleMenuClick}
          @submenu-opening=${this.handleSubmenuOpening}
        >
          <slot @slotchange=${this.handleMenuSlotChange}></slot>
        </div>
      </wa-popup>
    `}};oi.css=[I,y3];f([Y("slot:not([name])")],oi.prototype,"defaultSlot",2);f([Y("#menu")],oi.prototype,"menu",2);f([Y("wa-popup")],oi.prototype,"popup",2);f([t({type:Boolean,reflect:!0})],oi.prototype,"open",2);f([t({reflect:!0})],oi.prototype,"size",2);f([v("size")],oi.prototype,"handleSizeChange",1);f([t({reflect:!0})],oi.prototype,"placement",2);f([t({type:Number})],oi.prototype,"distance",2);f([t({type:Number})],oi.prototype,"skidding",2);oi=f([$("wa-dropdown")],oi);/*! Copyright 2026 Fonticons, Inc. - https://webawesome.com/license */var l3=F`
  :host {
    display: flex;
    position: relative;
    align-items: center;
    padding: 0.5em 1em;
    border-radius: var(--wa-border-radius-s);
    isolation: isolate;
    color: var(--wa-color-text-normal);
    line-height: var(--wa-line-height-condensed);
    cursor: pointer;
    transition:
      var(--wa-transition-fast) background-color var(--wa-transition-easing),
      var(--wa-transition-fast) color var(--wa-transition-easing);
  }

  @media (hover: hover) {
    :host(:hover:not(:state(disabled))) {
      background-color: var(--wa-color-neutral-fill-normal);
    }
  }

  :host(:state(submenu-open)) {
    background-color: var(--wa-color-neutral-fill-normal);
  }

  :host(:focus-visible) {
    z-index: 1;
    outline: var(--wa-focus-ring);
    background-color: var(--wa-color-neutral-fill-normal);
  }

  :host(:state(disabled)),
  :host([disabled]) {
    opacity: 0.5;
    cursor: not-allowed;
  }

  /* Danger variant */
  :host([variant='danger']),
  :host([variant='danger']) #details {
    color: var(--wa-color-danger-on-quiet);
  }

  @media (hover: hover) {
    :host([variant='danger']:hover) {
      background-color: var(--wa-color-danger-fill-normal);
      color: var(--wa-color-danger-on-normal);
    }
  }

  :host([variant='danger']:state(submenu-open)),
  :host([variant='danger']:focus-visible) {
    background-color: var(--wa-color-danger-fill-normal);
    color: var(--wa-color-danger-on-normal);
  }

  :host([checkbox-adjacent]) {
    padding-inline-start: 2em;
  }

  /* Only add padding when item actually has a submenu */
  :host([submenu-adjacent]:not(:state(has-submenu))) #details {
    padding-inline-end: 0;
  }

  :host(:state(has-submenu)[submenu-adjacent]) #details {
    padding-inline-end: 1.75em;
  }

  /* The link only exists to be clicked programmatically. */
  #link {
    display: none;
  }

  #check {
    visibility: hidden;
    margin-inline-start: -1.5em;
    margin-inline-end: 0.5em;
    font-size: var(--wa-font-size-smaller);
  }

  :host(:state(checked)) #check {
    visibility: visible;
  }

  #icon ::slotted(*) {
    display: flex;
    flex: 0 0 auto;
    align-items: center;
    margin-inline-end: 0.75em !important;
    font-size: var(--wa-font-size-smaller);
  }

  #label {
    flex: 1 1 auto;
    min-width: 0;
  }

  #details {
    display: flex;
    flex: 0 0 auto;
    align-items: center;
    justify-content: end;
    color: var(--wa-color-text-quiet);
    font-size: var(--wa-font-size-smaller) !important;
  }

  #details ::slotted(*) {
    margin-inline-start: 2em !important;
  }

  /* Submenu indicator icon */
  #submenu-indicator {
    position: absolute;
    inset-inline-end: 1em;
    color: var(--wa-color-neutral-on-quiet);
    font-size: var(--wa-font-size-smaller);
  }

  /* Flip chevron icon when RTL */
  :host(:dir(rtl)) #submenu-indicator {
    transform: scaleX(-1);
  }

  /* Submenu styles */
  #submenu {
    display: flex;
    z-index: 10;
    position: absolute;
    top: 0;
    left: 0;
    flex-direction: column;
    width: max-content;
    margin: 0;
    padding: 0.25em;
    border: var(--wa-border-style) var(--wa-border-width-s) var(--wa-color-surface-border);
    border-radius: var(--wa-border-radius-m);
    background-color: var(--wa-color-surface-raised);
    box-shadow: var(--wa-shadow-m);
    color: var(--wa-color-text-normal);
    text-align: start;
    user-select: none;

    /* Override default popover styles */
    &[popover] {
      margin: 0;
      inset: auto;
      padding: 0.25em;
      overflow: visible;
      border-radius: var(--wa-border-radius-m);
    }

    &.show {
      animation: submenu-show var(--show-duration, var(--wa-transition-fast)) ease;
    }

    &.hide {
      animation: submenu-show var(--show-duration, var(--wa-transition-fast)) ease reverse;
    }

    /* Submenu placement transform origins */
    &[data-placement^='top'] {
      transform-origin: bottom;
    }

    &[data-placement^='bottom'] {
      transform-origin: top;
    }

    &[data-placement^='left'] {
      transform-origin: right;
    }

    &[data-placement^='right'] {
      transform-origin: left;
    }

    &[data-placement='left-start'] {
      transform-origin: right top;
    }

    &[data-placement='left-end'] {
      transform-origin: right bottom;
    }

    &[data-placement='right-start'] {
      transform-origin: left top;
    }

    &[data-placement='right-end'] {
      transform-origin: left bottom;
    }

    /* Safe triangle styling */
    &::before {
      display: none;
      z-index: 9;
      position: fixed;
      top: 0;
      right: 0;
      bottom: 0;
      left: 0;
      background-color: transparent;
      content: '';
      clip-path: polygon(
        var(--safe-triangle-cursor-x, 0) var(--safe-triangle-cursor-y, 0),
        var(--safe-triangle-submenu-start-x, 0) var(--safe-triangle-submenu-start-y, 0),
        var(--safe-triangle-submenu-end-x, 0) var(--safe-triangle-submenu-end-y, 0)
      );
      pointer-events: auto; /* Enable mouse events on the triangle */
    }

    &[data-visible]::before {
      display: block;
    }
  }

  ::slotted(wa-dropdown-item) {
    font-size: inherit;
  }

  ::slotted(wa-divider) {
    --spacing: 0.25em;
  }

  @keyframes submenu-show {
    from {
      scale: 0.9;
      opacity: 0;
    }
    to {
      scale: 1;
      opacity: 1;
    }
  }
`;/*! Copyright 2026 Fonticons, Inc. - https://webawesome.com/license */var Zo=class extends L{constructor(){super(...arguments);this.hasSlotController=new W(this,"[default]","start","end"),this.active=!1,this.variant="default",this.size="m",this.checkboxAdjacent=!1,this.submenuAdjacent=!1,this.type="normal",this.checked=!1,this.disabled=!1,this.submenuOpen=!1,this.hasSubmenu=!1,this.handleSlotChange=()=>{if(this.hasSubmenu=this.hasSlotController.test("submenu"),this.updateHasSubmenuState(),this.hasSubmenu)this.setAttribute("aria-haspopup","menu"),this.setAttribute("aria-expanded",this.submenuOpen?"true":"false");else this.removeAttribute("aria-haspopup"),this.removeAttribute("aria-expanded")},this.handleHostClick=(o)=>{if(this.disabled)o.preventDefault(),o.stopImmediatePropagation()},this.handleClick=(o)=>{if(this.disabled)o.preventDefault(),o.stopImmediatePropagation()},this.handlePointerEnter=(o)=>{if(o.pointerType==="mouse"&&this.hasSubmenu&&!this.disabled)this.notifyParentOfOpening(),this.submenuOpen=!0}}handleSizeChange(){j(this.localName,this.size)}connectedCallback(){super.connectedCallback(),this.addEventListener?.("click",this.handleHostClick),this.addEventListener?.("pointerenter",this.handlePointerEnter),this.shadowRoot?.addEventListener?.("click",this.handleClick,{capture:!0}),this.shadowRoot?.addEventListener?.("slotchange",this.handleSlotChange)}disconnectedCallback(){super.disconnectedCallback(),this.closeSubmenu(),this.removeEventListener?.("click",this.handleHostClick),this.removeEventListener?.("pointerenter",this.handlePointerEnter),this.shadowRoot?.removeEventListener?.("click",this.handleClick,{capture:!0}),this.shadowRoot?.removeEventListener?.("slotchange",this.handleSlotChange)}firstUpdated(o){super.firstUpdated(o),this.setAttribute("tabindex","-1"),this.hasSubmenu=this.hasSlotController.test("submenu"),this.updateHasSubmenuState()}updated(o){if(o.has("active"))this.setAttribute("tabindex",this.active?"0":"-1"),this.customStates.set("active",this.active);if(o.has("checked")){if(this.type==="checkbox")this.setAttribute("aria-checked",this.checked?"true":"false");else this.removeAttribute("aria-checked");this.customStates.set("checked",this.checked)}if(o.has("disabled"))this.setAttribute("aria-disabled",this.disabled?"true":"false"),this.customStates.set("disabled",this.disabled);if(o.has("type"))if(this.type==="checkbox")this.setAttribute("role","menuitemcheckbox"),this.setAttribute("aria-checked",this.checked?"true":"false");else this.setAttribute("role","menuitem"),this.removeAttribute("aria-checked");if(o.has("href")||o.has("hasSubmenu"))this.customStates.set("link",this.isLink());if(o.has("submenuOpen"))if(this.customStates.set("submenu-open",this.submenuOpen),this.submenuOpen)this.openSubmenu();else this.closeSubmenu()}updateHasSubmenuState(){this.customStates.set("has-submenu",this.hasSubmenu)}async openSubmenu(){let o=this.submenuElement;if(!this.hasSubmenu||!o||!this.isConnected)return;this.notifyParentOfOpening(),o.showPopover?.(),o.hidden=!1,o.setAttribute("data-visible",""),this.submenuOpen=!0,this.setAttribute("aria-expanded","true"),await P(o,"show"),setTimeout(()=>{let i=this.getSubmenuItems();if(i.length>0)i.forEach((r,a)=>r.active=a===0),i[0].focus({preventScroll:!0})},0)}notifyParentOfOpening(){let o=new CustomEvent("submenu-opening",{bubbles:!0,composed:!0,detail:{item:this}});this.dispatchEvent(o);let i=this.parentElement;if(i)[...i.children].filter((a)=>a!==this&&a.localName==="wa-dropdown-item"&&a.getAttribute("slot")===this.getAttribute("slot")&&a.submenuOpen).forEach((a)=>{a.submenuOpen=!1})}async closeSubmenu(){let o=this.submenuElement;if(!this.hasSubmenu||!o)return;if(this.submenuOpen=!1,this.setAttribute("aria-expanded","false"),!o.hidden){if(await P(o,"hide"),o?.isConnected)o.hidden=!0,o.removeAttribute("data-visible"),o.hidePopover?.()}}isLink(){return Boolean(this.href)&&!this.hasSubmenu}navigate(o){let i=this.linkElement;if(!this.isLink()||this.disabled||!i)return;i.dispatchEvent(new MouseEvent("click",{bubbles:!1,cancelable:!0,composed:!1,altKey:o?.altKey??!1,ctrlKey:o?.ctrlKey??!1,metaKey:o?.metaKey??!1,shiftKey:o?.shiftKey??!1}))}getSubmenuItems(){return[...this.children].filter((o)=>o.localName==="wa-dropdown-item"&&o.getAttribute("slot")==="submenu"&&!o.hasAttribute("disabled"))}render(){return h`
      ${this.href?h`
            <a
              id="link"
              href=${this.href}
              target=${Q(this.target)}
              rel=${Q(this.rel)}
              download=${Q(this.download)}
              tabindex="-1"
              aria-hidden="true"
            ></a>
          `:""}
      ${this.type==="checkbox"?h`
            <wa-icon
              id="check"
              part="checkmark"
              exportparts="svg:checkmark__svg"
              library="system"
              name="check"
            ></wa-icon>
          `:""}

      <span id="icon" part="icon">
        <slot name="icon"></slot>
      </span>

      <span id="label" part="label">
        <slot></slot>
      </span>

      <span id="details" part="details">
        <slot name="details"></slot>
      </span>

      ${this.hasSubmenu?h`
            <wa-icon
              id="submenu-indicator"
              part="submenu-icon"
              exportparts="svg:submenu-icon__svg"
              library="system"
              name="chevron-right"
            ></wa-icon>
          `:""}
      ${this.hasSubmenu?h`
            <div
              id="submenu"
              part="submenu"
              popover="manual"
              role="menu"
              tabindex="-1"
              aria-orientation="vertical"
              hidden
            >
              <slot name="submenu"></slot>
            </div>
          `:""}
    `}};Zo.css=l3;f([Y("#submenu")],Zo.prototype,"submenuElement",2);f([Y("#link")],Zo.prototype,"linkElement",2);f([t({type:Boolean})],Zo.prototype,"active",2);f([t({reflect:!0})],Zo.prototype,"variant",2);f([t({reflect:!0})],Zo.prototype,"size",2);f([v("size")],Zo.prototype,"handleSizeChange",1);f([t({attribute:"checkbox-adjacent",type:Boolean,reflect:!0})],Zo.prototype,"checkboxAdjacent",2);f([t({attribute:"submenu-adjacent",type:Boolean,reflect:!0})],Zo.prototype,"submenuAdjacent",2);f([t()],Zo.prototype,"value",2);f([t({reflect:!0})],Zo.prototype,"type",2);f([t({type:Boolean})],Zo.prototype,"checked",2);f([t({type:Boolean,reflect:!0})],Zo.prototype,"disabled",2);f([t({type:Boolean,reflect:!0})],Zo.prototype,"submenuOpen",2);f([t({reflect:!0})],Zo.prototype,"href",2);f([t()],Zo.prototype,"target",2);f([t()],Zo.prototype,"rel",2);f([t()],Zo.prototype,"download",2);f([J()],Zo.prototype,"hasSubmenu",2);Zo=f([$("wa-dropdown-item")],Zo);/*! Copyright 2026 Fonticons, Inc. - https://webawesome.com/license *//*! Copyright 2026 Fonticons, Inc. - https://webawesome.com/license *//*! Copyright 2026 Fonticons, Inc. - https://webawesome.com/license */var pr=class extends L{constructor(){super(...arguments);this.localize=new B(this),this.value=0,this.unit="byte",this.display="short"}static get styles(){return[]}render(){if(isNaN(this.value))return"";let o=["","kilo","mega","giga","tera"],i=["","kilo","mega","giga","tera","peta"],r=this.unit==="bit"?o:i,a=Math.max(0,Math.min(Math.floor(Math.log10(this.value)/3),r.length-1)),n=r[a]+this.unit,w=parseFloat((this.value/Math.pow(1000,a)).toPrecision(3));return this.localize.number(w,{style:"unit",unit:n,unitDisplay:this.display})}};f([t({type:Number})],pr.prototype,"value",2);f([t()],pr.prototype,"unit",2);f([t()],pr.prototype,"display",2);pr=f([$("wa-format-bytes")],pr);/*! Copyright 2026 Fonticons, Inc. - https://webawesome.com/license *//*! Copyright 2026 Fonticons, Inc. - https://webawesome.com/license */var ni=class extends L{constructor(){super(...arguments);this.localize=new B(this),this.date=new Date,this.hourFormat="auto"}static get styles(){return[]}render(){let o=new Date(this.date),i=this.hourFormat==="auto"?void 0:this.hourFormat==="12";if(isNaN(o.getMilliseconds()))return;let r=this.localize.date(o,{weekday:this.weekday,era:this.era,year:this.year,month:this.month,day:this.day,hour:this.hour,minute:this.minute,second:this.second,timeZoneName:this.timeZoneName,timeZone:this.timeZone,hour12:i});return h`<time datetime=${o.toISOString()}>${r}</time>`}};f([t()],ni.prototype,"date",2);f([t()],ni.prototype,"weekday",2);f([t()],ni.prototype,"era",2);f([t()],ni.prototype,"year",2);f([t()],ni.prototype,"month",2);f([t()],ni.prototype,"day",2);f([t()],ni.prototype,"hour",2);f([t()],ni.prototype,"minute",2);f([t()],ni.prototype,"second",2);f([t({attribute:"time-zone-name"})],ni.prototype,"timeZoneName",2);f([t({attribute:"time-zone"})],ni.prototype,"timeZone",2);f([t({attribute:"hour-format"})],ni.prototype,"hourFormat",2);ni=f([$("wa-format-date")],ni);/*! Copyright 2026 Fonticons, Inc. - https://webawesome.com/license *//*! Copyright 2026 Fonticons, Inc. - https://webawesome.com/license */var zi=class extends L{constructor(){super(...arguments);this.localize=new B(this),this.value=0,this.type="decimal",this.withoutGrouping=!1,this.currency="USD",this.currencyDisplay="symbol"}static get styles(){return[]}render(){if(isNaN(this.value))return"";return this.localize.number(this.value,{style:this.type,currency:this.currency,currencyDisplay:this.currencyDisplay,useGrouping:!this.withoutGrouping,minimumIntegerDigits:this.minimumIntegerDigits,minimumFractionDigits:this.minimumFractionDigits,maximumFractionDigits:this.maximumFractionDigits,minimumSignificantDigits:this.minimumSignificantDigits,maximumSignificantDigits:this.maximumSignificantDigits})}};f([t({type:Number})],zi.prototype,"value",2);f([t()],zi.prototype,"type",2);f([t({attribute:"without-grouping",type:Boolean})],zi.prototype,"withoutGrouping",2);f([t()],zi.prototype,"currency",2);f([t({attribute:"currency-display"})],zi.prototype,"currencyDisplay",2);f([t({attribute:"minimum-integer-digits",type:Number})],zi.prototype,"minimumIntegerDigits",2);f([t({attribute:"minimum-fraction-digits",type:Number})],zi.prototype,"minimumFractionDigits",2);f([t({attribute:"maximum-fraction-digits",type:Number})],zi.prototype,"maximumFractionDigits",2);f([t({attribute:"minimum-significant-digits",type:Number})],zi.prototype,"minimumSignificantDigits",2);f([t({attribute:"maximum-significant-digits",type:Number})],zi.prototype,"maximumSignificantDigits",2);zi=f([$("wa-format-number")],zi);/*! Copyright 2026 Fonticons, Inc. - https://webawesome.com/license *//*! Copyright 2026 Fonticons, Inc. - https://webawesome.com/license *//*! Copyright 2026 Fonticons, Inc. - https://webawesome.com/license */var K2=class extends Event{constructor(o){super("wa-include-error",{bubbles:!0,cancelable:!1,composed:!0});this.detail=o}};/*! Copyright 2026 Fonticons, Inc. - https://webawesome.com/license */var v3=F`
  :host {
    display: block;
  }
`;/*! Copyright 2026 Fonticons, Inc. - https://webawesome.com/license */var na=new Map;function x3(o,i="cors"){let r=na.get(o);if(r!==void 0)return Promise.resolve(r);let a=fetch(o,{mode:i}).then(async(n)=>{let w={ok:n.ok,status:n.status,html:await n.text()};return na.set(o,w),w});return na.set(o,a),a}/*! Copyright 2026 Fonticons, Inc. - https://webawesome.com/license */var X0=class extends L{constructor(){super(...arguments);this.mode="cors",this.allowScripts=!1}executeScript(o){let i=document.createElement("script");[...o.attributes].forEach((r)=>i.setAttribute(r.name,r.value)),i.textContent=o.textContent,o.parentNode.replaceChild(i,o)}cloneFragment(o,i){let r=o.localName==="template"?o.content:this.childNodesToFragment(o);return i.importNode(r,!0)}childNodesToFragment(o){let i=o.ownerDocument.createDocumentFragment();return o.childNodes.forEach((r)=>i.append(r.cloneNode(!0))),i}async handleSrcChange(){try{let o=this.src,i=new URL(o,document.baseURI),r=i.hash.slice(1);if(o.startsWith("#")){let w=r?document.getElementById(decodeURIComponent(r)):null;if(w)this.replaceChildren(this.cloneFragment(w,document));else this.replaceChildren();this.dispatchEvent(new N0);return}let a=o;if(r)i.hash="",a=i.href;let n=await x3(a,this.mode);if(o!==this.src)return;if(!n.ok){this.dispatchEvent(new K2({status:n.status}));return}if(r){let b=new DOMParser().parseFromString(n.html,"text/html").getElementById(decodeURIComponent(r));if(!b){this.dispatchEvent(new K2({status:n.status}));return}this.replaceChildren(this.cloneFragment(b,document))}else this.innerHTML=n.html;if(this.allowScripts)[...this.querySelectorAll("script")].forEach((w)=>this.executeScript(w));this.dispatchEvent(new N0)}catch{this.dispatchEvent(new K2({status:-1}))}}render(){return h`<slot></slot>`}};X0.css=v3;f([t()],X0.prototype,"src",2);f([t()],X0.prototype,"mode",2);f([t({attribute:"allow-scripts",type:Boolean})],X0.prototype,"allowScripts",2);f([v("src")],X0.prototype,"handleSrcChange",1);X0=f([$("wa-include")],X0);/*! Copyright 2026 Fonticons, Inc. - https://webawesome.com/license *//*! Copyright 2026 Fonticons, Inc. - https://webawesome.com/license *//*! Copyright 2026 Fonticons, Inc. - https://webawesome.com/license */var F3=class extends Event{constructor(o){super("wa-intersect",{bubbles:!1,cancelable:!1,composed:!0});this.detail=o}};/*! Copyright 2026 Fonticons, Inc. - https://webawesome.com/license */var $3=F`
  :host {
    display: contents;
  }
`;/*! Copyright 2026 Fonticons, Inc. - https://webawesome.com/license */var Xi=class extends L{constructor(){super(...arguments);this.intersectionObserver=null,this.observedElements=new Map,this.root=null,this.rootMargin="0px",this.threshold="0",this.intersectClass="",this.once=!1,this.disabled=!1}connectedCallback(){if(super.connectedCallback(),!this.disabled)this.updateComplete.then(()=>{this.startObserver()})}disconnectedCallback(){super.disconnectedCallback(),this.stopObserver()}handleSlotChange(){if(!this.disabled)this.startObserver()}parseThreshold(){return U0(this.threshold).map((i)=>{let r=parseFloat(i);return isNaN(r)?0:D(r,0,1)})}resolveRoot(){if(!this.root)return null;try{let i=this.getRootNode().getElementById(this.root);if(!i)console.warn(`Root element with ID "${this.root}" could not be found.`,this);return i}catch{return console.warn(`Invalid selector for root: "${this.root}"`,this),null}}startObserver(){if(this.stopObserver(),this.disabled)return;let o=this.parseThreshold(),i=this.resolveRoot();this.intersectionObserver=new IntersectionObserver((a)=>{a.forEach((n)=>{let w=this.observedElements.get(n.target)??!1,b=n.isIntersecting;if(this.observedElements.set(n.target,b),this.intersectClass)if(b)n.target.classList.add(this.intersectClass);else n.target.classList.remove(this.intersectClass);let c=new F3({entry:n});if(this.dispatchEvent(c),b&&!w){if(this.once)this.intersectionObserver?.unobserve(n.target),this.observedElements.delete(n.target)}})},{root:i,rootMargin:this.rootMargin,threshold:o});let r=this.shadowRoot.querySelector("slot");if(r!==null)r.assignedElements({flatten:!0}).forEach((n)=>{this.intersectionObserver?.observe(n),this.observedElements.set(n,!1)})}stopObserver(){if(this.intersectClass)this.observedElements.forEach((o,i)=>{i.classList.remove(this.intersectClass)});this.intersectionObserver?.disconnect(),this.intersectionObserver=null,this.observedElements.clear()}handleDisabledChange(){if(this.disabled)this.stopObserver();else this.startObserver()}handleOptionsChange(){this.startObserver()}render(){return h` <slot @slotchange=${this.handleSlotChange}></slot> `}};Xi.css=$3;f([t()],Xi.prototype,"root",2);f([t({attribute:"root-margin"})],Xi.prototype,"rootMargin",2);f([t()],Xi.prototype,"threshold",2);f([t({attribute:"intersect-class"})],Xi.prototype,"intersectClass",2);f([t({type:Boolean,reflect:!0})],Xi.prototype,"once",2);f([t({type:Boolean,reflect:!0})],Xi.prototype,"disabled",2);f([v("disabled",{waitUntilFirstUpdate:!0})],Xi.prototype,"handleDisabledChange",1);f([v("root",{waitUntilFirstUpdate:!0}),v("rootMargin",{waitUntilFirstUpdate:!0}),v("threshold",{waitUntilFirstUpdate:!0})],Xi.prototype,"handleOptionsChange",1);Xi=f([$("wa-intersection-observer")],Xi);/*! Copyright 2026 Fonticons, Inc. - https://webawesome.com/license *//*! Copyright 2026 Fonticons, Inc. - https://webawesome.com/license */var Y3=new Map;function q3(o){let i=o||"en",r=Y3.get(i);if(r)return r;let n=new Intl.DateTimeFormat(i,{year:"numeric",month:"2-digit",day:"2-digit",calendar:"gregory",numberingSystem:"latn"}).formatToParts(new Date(2026,0,23)),w=[];for(let c of n)if(c.type==="year"||c.type==="month"||c.type==="day")w.push(c.type);let b=w.length===3?w:["month","day","year"];return Y3.set(i,b),b}/*! Copyright 2026 Fonticons, Inc. - https://webawesome.com/license */var L3=()=>{return{checkValidity(o){let i=o,r=i.parts;if(r.day===""&&r.month===""&&r.year==="")return{isValid:!0,invalidKeys:[],message:""};if(i.value===""){let n=i.localize?.term("incompleteDate")||"Enter a valid date.";return{isValid:!1,invalidKeys:["badInput"],message:n}}return{isValid:!0,invalidKeys:[],message:""}}}};/*! Copyright 2026 Fonticons, Inc. - https://webawesome.com/license */var B2={day:"",month:"",year:""};function Ht(o){return o.day!==""&&o.month!==""&&o.year!==""}function fa(o){if(!Ht(o))return"";let i=Number(o.year),r=Number(o.month),a=Number(o.day);if(!Number.isInteger(i)||i<1||i>9999)return"";if(!Number.isInteger(r)||r<1||r>12)return"";if(!Number.isInteger(a)||a<1||a>31)return"";let n=new Date(2000,r-1,a);if(n.setFullYear(i),n.getFullYear()!==i||n.getMonth()!==r-1||n.getDate()!==a)return"";return`${String(i).padStart(4,"0")}-${String(r).padStart(2,"0")}-${String(a).padStart(2,"0")}`}function wa(o){if(!o)return{...B2};let i=/^(\d{4})-(\d{2})-(\d{2})$/.exec(o);if(!i)return{...B2};return{year:i[1],month:i[2],day:i[3]}}/*! Copyright 2026 Fonticons, Inc. - https://webawesome.com/license */var U3=F`
  :host {
    display: block;
    container-type: inline-size;
    container-name: known-date;
  }

  [part~='fieldset'],
  .fieldset {
    border: 0;
    padding: 0;
    margin: 0;
    min-inline-size: 0;
  }

  legend[part~='legend'] {
    padding: 0;
    display: block;
  }

  /* The legend's inner span carries the form-control-label part so the existing form-control styles
     (including the required asterisk) apply consistently across browsers. */
  .label {
    display: inline-block;
  }

  [part~='fields'] {
    display: flex;
    gap: var(--wa-space-xs);
    align-items: start;
    inline-size: 100%;
    min-inline-size: 0;
  }

  [part~='field'] {
    display: flex;
    flex-direction: column;
    flex: 1 1 0;
    min-inline-size: 0;
  }

  /* Day and month each hold two digits; year holds four. Bias the flex distribution so the year
     field gets roughly twice the share of the row but all three still grow and shrink together. */
  [part~='field-month'],
  [part~='field-day'] {
    min-inline-size: 2.5em;
  }

  [part~='field-year'] {
    flex-grow: 2;
    min-inline-size: 6em;
  }

  /* Per-field labels match the hint's typography and spacing exactly (the same 0.5em offset other
     form controls use between their input and hint) so the gap below each input reads as native. */
  [part~='field-label'] {
    color: var(--wa-form-control-hint-color);
    font-weight: var(--wa-form-control-hint-font-weight);
    line-height: var(--wa-form-control-hint-line-height);
    font-size: var(--wa-font-size-smaller);
    margin-block-start: 0.5em;
  }

  /* Each input is styled to match wa-input's .text-field wrapper directly — same border, height,
     padding, focus ring, and appearance variants. The host doesn't compose wa-input instances because
     we want three discrete native inputs (no clear/password slots, simpler DOM), but the visual contract
     is identical. */
  [part~='field-input'] {
    -webkit-appearance: none;
    appearance: none;
    box-sizing: border-box;
    height: var(--wa-form-control-height);
    inline-size: 100%;
    min-inline-size: 0;
    border-style: var(--wa-form-control-border-style);
    border-width: var(--wa-form-control-border-width);
    border-color: var(--wa-form-control-border-color);
    border-radius: var(--wa-form-control-border-radius);
    background-color: var(--wa-form-control-background-color);
    color: var(--wa-form-control-value-color);
    font-family: inherit;
    font-size: var(--wa-form-control-value-font-size);
    font-weight: var(--wa-form-control-value-font-weight);
    line-height: var(--wa-form-control-value-line-height);
    padding: 0 var(--wa-form-control-padding-inline);
    outline: var(--wa-focus-ring-style) var(--wa-focus-ring-width) transparent;
    outline-offset: var(--wa-focus-ring-offset);
    transition:
      background-color var(--wa-transition-normal),
      border-color var(--wa-transition-normal),
      outline-color var(--wa-transition-fast);
    transition-timing-function: var(--wa-transition-easing);
  }

  [part~='field-input']:focus {
    outline-color: var(--wa-color-focus);
  }

  /* When the fields row gets too narrow to comfortably hold three side-by-side inputs, stack them
     vertically. The threshold reflects the smallest width at which all three inputs still fit a
     four-digit year plus padding without truncation. */
  @container known-date (inline-size < 300px) {
    [part~='fields'] {
      flex-direction: column;
      align-items: stretch;
    }
  }

  /* Suppress the native number spin buttons so a paste that briefly looks like a number can't show them. */
  [part~='field-input']::-webkit-outer-spin-button,
  [part~='field-input']::-webkit-inner-spin-button {
    -webkit-appearance: none;
    margin: 0;
  }

  /* Hide the mirror used for native form-data + constraint validation. */
  .value-input {
    position: absolute;
    inline-size: 1px;
    block-size: 1px;
    opacity: 0;
    pointer-events: none;
    border: 0;
    padding: 0;
    margin: 0;
    clip: rect(0 0 0 0);
    overflow: hidden;
  }

  /* Appearances — mirror wa-input's .text-field appearance variants exactly. */
  :host([appearance='outlined']) [part~='field-input'] {
    background-color: var(--wa-form-control-background-color);
    border-color: var(--wa-form-control-border-color);
  }

  :host([appearance='filled']) [part~='field-input'] {
    background-color: var(--wa-color-neutral-fill-quiet);
    border-color: var(--wa-color-neutral-fill-quiet);
  }

  :host([appearance='filled-outlined']) [part~='field-input'] {
    background-color: var(--wa-color-neutral-fill-quiet);
    border-color: var(--wa-form-control-border-color);
  }

  :host([pill]) [part~='field-input'] {
    border-radius: var(--wa-border-radius-pill) !important;
  }

  /* Disabled — mirror wa-input's :has(:disabled) opacity treatment. */
  :host(:state(disabled)) [part~='field'],
  [part~='field-input']:disabled {
    cursor: not-allowed;
    opacity: 0.5;
  }
`;/*! Copyright 2026 Fonticons, Inc. - https://webawesome.com/license */var Nt=()=>bi("wa-known-date-"),vo=class extends E{constructor(){super(...arguments);this.assumeInteractionOn=["input"],this.localize=new B(this),this.hasSlotController=new W(this,"hint","label"),this.groupId=Nt(),this.hintId=`${this.groupId}-hint`,this.lastEmittedValue="",this.pendingValue=null,this.parts={...B2},this.name="",this._value="",this.defaultValue=this.getAttribute("value")??"",this.disabled=!1,this.required=!1,this.readonly=!1,this.size="m",this.appearance="outlined",this.pill=!1,this.label="",this.hint="",this.autocomplete="",this.min="",this.max="",this.locale="",this.withLabel=!1,this.withHint=!1,this.handleFieldInput=(o)=>{if(this.readonly)return;let i=o.currentTarget,r=i.dataset.field,a=r==="year"?4:2,n=i.value.replace(/\D/g,"").slice(0,a);if(n!==i.value)i.value=n;this.parts={...this.parts,[r]:n},this.recomputeValue(),this.requestUpdate()}}static get validators(){let o=M?[]:[L3(),ti({validationElement:Object.assign(document.createElement("input"),{required:!0})}),Wo()];return[...super.validators,...o]}get value(){if(this.valueHasChanged)return this._value;return this._value||this.defaultValue||""}set value(o){let i=this.normalizeIncomingValue(o);if(i===this._value)return;let r=this._value;if(this._value=i,this.valueHasChanged=!0,this.hasUpdated)this.syncPartsFromCanonical();else this.pendingValue=this._value;this.requestUpdate("value",r)}handleSizeChange(){j(this.localName,this.size)}firstUpdated(o){if(super.firstUpdated(o),this.pendingValue!=null)this._value=this.pendingValue,this.pendingValue=null;else if(!this._value&&this.defaultValue)this._value=this.defaultValue;this.syncPartsFromCanonical(),this.input=this.valueInput,this.updateValidity(),this.lastEmittedValue=this._value}updated(o){if(super.updated?.(o),o.has("value"))this.customStates.set("blank",!this._value)}focus(o){this.firstFocusableInput()?.focus(o)}blur(){this.shadowRoot?.activeElement?.blur()}get valueAsDate(){if(!this._value)return null;let o=/^(\d{4})-(\d{2})-(\d{2})$/.exec(this._value);if(!o)return null;return new Date(Number(o[1]),Number(o[2])-1,Number(o[3]))}get validationTarget(){if(!this.shadowRoot)return;let o=Array.from(this.shadowRoot.querySelectorAll('input[part~="field-input"]'));if(o.length===0)return;let i=this.firstInvalidField();if(i){let r=o.find((a)=>a.dataset.field===i);if(r)return r}return o[0]}formResetCallback(){this._value=this.defaultValue,this.valueHasChanged=!1,this.syncPartsFromCanonical(),super.formResetCallback(),this.lastEmittedValue=this._value,this.requestUpdate()}formStateRestoreCallback(o){if(typeof o==="string")this.value=o;this.updateValidity()}get resolvedLocale(){return this.locale||this.localize.lang()||"en"}fieldOrder(){return q3(this.resolvedLocale)}normalizeIncomingValue(o){if(o==null)return"";if(o instanceof Date){let i=String(o.getFullYear()).padStart(4,"0"),r=String(o.getMonth()+1).padStart(2,"0"),a=String(o.getDate()).padStart(2,"0");return`${i}-${r}-${a}`}if(typeof o==="string"){let i=wa(o);return fa(i)}return""}syncPartsFromCanonical(){this.parts=wa(this._value),this.updateHiddenInput()}updateHiddenInput(){if(this.valueInput)this.valueInput.value=this._value;this.setValue(this._value||null)}recomputeValue(){let o=this._value,i=fa(this.parts);if(i!==o)this._value=i,this.valueHasChanged=!0,this.updateHiddenInput(),this.updateValidity();if(this.dispatchEvent(new InputEvent("input",{bubbles:!0,composed:!0})),i!==this.lastEmittedValue)this.lastEmittedValue=i,this.dispatchEvent(new Event("change",{bubbles:!0,composed:!0}))}firstFocusableInput(){if(!this.shadowRoot)return;let o=Array.from(this.shadowRoot.querySelectorAll('input[part~="field-input"]'));for(let i of this.fieldOrder())if(this.parts[i]===""){let r=o.find((a)=>a.dataset.field===i);if(r)return r}return o[0]}firstInvalidField(){if(this._value)return null;let o=this.fieldOrder(),i=o.find((n)=>this.parts[n]==="");if(i)return i;let r={year:(n)=>Number.isInteger(n)&&n>=1&&n<=9999,month:(n)=>Number.isInteger(n)&&n>=1&&n<=12,day:(n)=>Number.isInteger(n)&&n>=1&&n<=31},a=o.find((n)=>!r[n](Number(this.parts[n])));if(a)return a;return"day"}autocompleteFor(o){let i=this.autocomplete.trim();if(!i)return;if(i==="bday"){if(o==="day")return"bday-day";if(o==="month")return"bday-month";return"bday-year"}if(i==="off"||i==="on")return i;return o==="year"?i:void 0}render(){let o=this.hasUpdated?this.hasSlotController.test("label"):this.withLabel,i=this.hasUpdated?this.hasSlotController.test("hint"):this.withHint,r=!!this.label||!!o,a=!!this.hint||!!i,n=this.label||this.localize.term("date")||"Date",w=!M&&this.customStates.has("user-invalid"),b=a?this.hintId:"",c=this.fieldOrder().map((p)=>this.renderField(p,b,w)),m=h`
      <div part="base known-date form-control-input fields" class="fields">${c}</div>

      <slot
        name="hint"
        part="hint"
        id=${this.hintId}
        class=${Z({hint:!0,"has-slotted":a})}
        aria-hidden=${a?"false":"true"}
      >
        ${this.hint}
      </slot>
    `;return h`
      <div
        part="form-control"
        class=${Z({"form-control":!0,"form-control-has-label":r})}
      >
        ${r?h`<fieldset part="fieldset" class="fieldset">
              <legend part="legend">
                <span part="form-control-label label" class="label">
                  <slot name="label">${this.label}</slot>
                </span>
              </legend>
              ${m}
            </fieldset>`:h`<div part="fieldset" class="fieldset" role="group" aria-label=${n}>${m}</div>`}

        <input
          class="value-input"
          type="date"
          tabindex="-1"
          aria-hidden="true"
          .value=${this._value}
          min=${Q(this.min||void 0)}
          max=${Q(this.max||void 0)}
          ?disabled=${this.disabled}
          ?required=${this.required}
        />
      </div>
    `}renderField(o,i,r){let a=`${this.groupId}-${o}`,n=this.parts[o],w=this.autocompleteFor(o),b=r?"true":void 0,c=this.localize.term(o)||(o==="day"?"Day":o==="month"?"Month":"Year");return h`
      <div part="field field-${o}" class=${Z({field:!0,[`field-${o}`]:!0})}>
        <input
          id=${a}
          part="field-input"
          class="field-input"
          type="text"
          inputmode="numeric"
          pattern="[0-9]*"
          maxlength=${o==="year"?4:2}
          data-field=${o}
          autocomplete=${Q(w)}
          aria-describedby=${Q(i||void 0)}
          aria-invalid=${Q(b)}
          aria-required=${this.required?"true":"false"}
          .value=${Oo(n)}
          ?disabled=${this.disabled}
          ?readonly=${this.readonly}
          @input=${this.handleFieldInput}
        />
        <label part="field-label" class="field-label" for=${a}>${c}</label>
      </div>
    `}};vo.css=[I,go,U3];vo.shadowRootOptions={...E.shadowRootOptions,delegatesFocus:!0};f([Y(".value-input")],vo.prototype,"valueInput",2);f([J()],vo.prototype,"parts",2);f([t({reflect:!0})],vo.prototype,"name",2);f([J()],vo.prototype,"value",1);f([t({attribute:"value",reflect:!0})],vo.prototype,"defaultValue",2);f([t({type:Boolean})],vo.prototype,"disabled",2);f([t({type:Boolean,reflect:!0})],vo.prototype,"required",2);f([t({type:Boolean,reflect:!0})],vo.prototype,"readonly",2);f([t({reflect:!0})],vo.prototype,"size",2);f([v("size")],vo.prototype,"handleSizeChange",1);f([t({reflect:!0})],vo.prototype,"appearance",2);f([t({type:Boolean,reflect:!0})],vo.prototype,"pill",2);f([t()],vo.prototype,"label",2);f([t({attribute:"hint"})],vo.prototype,"hint",2);f([t()],vo.prototype,"autocomplete",2);f([t({reflect:!0})],vo.prototype,"min",2);f([t({reflect:!0})],vo.prototype,"max",2);f([t({reflect:!0})],vo.prototype,"locale",2);f([t({attribute:"with-label",type:Boolean})],vo.prototype,"withLabel",2);f([t({attribute:"with-hint",type:Boolean})],vo.prototype,"withHint",2);vo=f([$("wa-known-date")],vo);/*! Copyright 2026 Fonticons, Inc. - https://webawesome.com/license *//*! Copyright 2026 Fonticons, Inc. - https://webawesome.com/license */var X3=F`
  :host {
    display: contents;
  }
`;function ta(){return{async:!1,breaks:!1,extensions:null,gfm:!0,hooks:null,pedantic:!1,renderer:null,silent:!1,tokenizer:null,walkTokens:null}}var C0=ta();function G3(o){C0=o}var M3=/[&<>"']/,Ot=new RegExp(M3.source,"g"),V3=/[<>"']|&(?!(#\d{1,7}|#[Xx][a-fA-F0-9]{1,6}|\w+);)/,At=new RegExp(V3.source,"g"),Et={"&":"&amp;","<":"&lt;",">":"&gt;",'"':"&quot;","'":"&#39;"},J3=(o)=>Et[o];function yi(o,i){if(i){if(M3.test(o))return o.replace(Ot,J3)}else if(V3.test(o))return o.replace(At,J3);return o}var Dt=/&(#(?:\d+)|(?:#x[0-9A-Fa-f]+)|(?:\w+));?/ig;function kt(o){return o.replace(Dt,(i,r)=>{if(r=r.toLowerCase(),r==="colon")return":";if(r.charAt(0)==="#")return r.charAt(1)==="x"?String.fromCharCode(parseInt(r.substring(2),16)):String.fromCharCode(+r.substring(1));return""})}var Tt=/(^|[^\[])\^/g;function uo(o,i){let r=typeof o==="string"?o:o.source;i=i||"";let a={replace:(n,w)=>{let b=typeof w==="string"?w:w.source;return b=b.replace(Tt,"$1"),r=r.replace(n,b),a},getRegex:()=>{return new RegExp(r,i)}};return a}function Z3(o){try{o=encodeURI(o).replace(/%25/g,"%")}catch(i){return null}return o}var Gr={exec:()=>null};function Q3(o,i){let r=o.replace(/\|/g,(w,b,c)=>{let m=!1,p=b;while(--p>=0&&c[p]==="\\")m=!m;if(m)return"|";else return" |"}),a=r.split(/ \|/),n=0;if(!a[0].trim())a.shift();if(a.length>0&&!a[a.length-1].trim())a.pop();if(i)if(a.length>i)a.splice(i);else while(a.length<i)a.push("");for(;n<a.length;n++)a[n]=a[n].trim().replace(/\\\|/g,"|");return a}function G2(o,i,r){let a=o.length;if(a===0)return"";let n=0;while(n<a){let w=o.charAt(a-n-1);if(w===i&&!r)n++;else if(w!==i&&r)n++;else break}return o.slice(0,a-n)}function jt(o,i){if(o.indexOf(i[1])===-1)return-1;let r=0;for(let a=0;a<o.length;a++)if(o[a]==="\\")a++;else if(o[a]===i[0])r++;else if(o[a]===i[1]){if(r--,r<0)return a}return-1}function K3(o,i,r,a){let n=i.href,w=i.title?yi(i.title):null,b=o[1].replace(/\\([\[\]])/g,"$1");if(o[0].charAt(0)!=="!"){a.state.inLink=!0;let c={type:"link",raw:r,href:n,title:w,text:b,tokens:a.inlineTokens(b)};return a.state.inLink=!1,c}return{type:"image",raw:r,href:n,title:w,text:yi(b)}}function It(o,i){let r=o.match(/^(\s+)(?:```)/);if(r===null)return i;let a=r[1];return i.split(`
`).map((n)=>{let w=n.match(/^\s+/);if(w===null)return n;let[b]=w;if(b.length>=a.length)return n.slice(a.length);return n}).join(`
`)}class Vr{options;rules;lexer;constructor(o){this.options=o||C0}space(o){let i=this.rules.block.newline.exec(o);if(i&&i[0].length>0)return{type:"space",raw:i[0]}}code(o){let i=this.rules.block.code.exec(o);if(i){let r=i[0].replace(/^ {1,4}/gm,"");return{type:"code",raw:i[0],codeBlockStyle:"indented",text:!this.options.pedantic?G2(r,`
`):r}}}fences(o){let i=this.rules.block.fences.exec(o);if(i){let r=i[0],a=It(r,i[3]||"");return{type:"code",raw:r,lang:i[2]?i[2].trim().replace(this.rules.inline.anyPunctuation,"$1"):i[2],text:a}}}heading(o){let i=this.rules.block.heading.exec(o);if(i){let r=i[2].trim();if(/#$/.test(r)){let a=G2(r,"#");if(this.options.pedantic)r=a.trim();else if(!a||/ $/.test(a))r=a.trim()}return{type:"heading",raw:i[0],depth:i[1].length,text:r,tokens:this.lexer.inline(r)}}}hr(o){let i=this.rules.block.hr.exec(o);if(i)return{type:"hr",raw:i[0]}}blockquote(o){let i=this.rules.block.blockquote.exec(o);if(i){let r=G2(i[0].replace(/^ *>[ \t]?/gm,""),`
`),a=this.lexer.state.top;this.lexer.state.top=!0;let n=this.lexer.blockTokens(r);return this.lexer.state.top=a,{type:"blockquote",raw:i[0],tokens:n,text:r}}}list(o){let i=this.rules.block.list.exec(o);if(i){let r=i[1].trim(),a=r.length>1,n={type:"list",raw:"",ordered:a,start:a?+r.slice(0,-1):"",loose:!1,items:[]};if(r=a?`\\d{1,9}\\${r.slice(-1)}`:`\\${r}`,this.options.pedantic)r=a?r:"[*+-]";let w=new RegExp(`^( {0,3}${r})((?:[	 ][^\\n]*)?(?:\\n|$))`),b="",c="",m=!1;while(o){let p=!1;if(!(i=w.exec(o)))break;if(this.rules.block.hr.test(o))break;b=i[0],o=o.substring(b.length);let d=i[2].split(`
`,1)[0].replace(/^\t+/,(q)=>" ".repeat(3*q.length)),s=o.split(`
`,1)[0],z=0;if(this.options.pedantic)z=2,c=d.trimStart();else z=i[2].search(/[^ ]/),z=z>4?1:z,c=d.slice(z),z+=i[1].length;let u=!1;if(!d&&/^ *$/.test(s))b+=s+`
`,o=o.substring(s.length+1),p=!0;if(!p){let q=new RegExp(`^ {0,${Math.min(3,z-1)}}(?:[*+-]|\\d{1,9}[.)])((?:[ 	][^\\n]*)?(?:\\n|$))`),l=new RegExp(`^ {0,${Math.min(3,z-1)}}((?:- *){3,}|(?:_ *){3,}|(?:\\* *){3,})(?:\\n+|$)`),x=new RegExp(`^ {0,${Math.min(3,z-1)}}(?:\`\`\`|~~~)`),X=new RegExp(`^ {0,${Math.min(3,z-1)}}#`);while(o){let U=o.split(`
`,1)[0];if(s=U,this.options.pedantic)s=s.replace(/^ {1,4}(?=( {4})*[^ ])/g,"  ");if(x.test(s))break;if(X.test(s))break;if(q.test(s))break;if(l.test(o))break;if(s.search(/[^ ]/)>=z||!s.trim())c+=`
`+s.slice(z);else{if(u)break;if(d.search(/[^ ]/)>=4)break;if(x.test(d))break;if(X.test(d))break;if(l.test(d))break;c+=`
`+s}if(!u&&!s.trim())u=!0;b+=U+`
`,o=o.substring(U.length+1),d=s.slice(z)}}if(!n.loose){if(m)n.loose=!0;else if(/\n *\n *$/.test(b))m=!0}let y=null,g;if(this.options.gfm){if(y=/^\[[ xX]\] /.exec(c),y)g=y[0]!=="[ ] ",c=c.replace(/^\[[ xX]\] +/,"")}n.items.push({type:"list_item",raw:b,task:!!y,checked:g,loose:!1,text:c,tokens:[]}),n.raw+=b}n.items[n.items.length-1].raw=b.trimEnd(),n.items[n.items.length-1].text=c.trimEnd(),n.raw=n.raw.trimEnd();for(let p=0;p<n.items.length;p++)if(this.lexer.state.top=!1,n.items[p].tokens=this.lexer.blockTokens(n.items[p].text,[]),!n.loose){let d=n.items[p].tokens.filter((z)=>z.type==="space"),s=d.length>0&&d.some((z)=>/\n.*\n/.test(z.raw));n.loose=s}if(n.loose)for(let p=0;p<n.items.length;p++)n.items[p].loose=!0;return n}}html(o){let i=this.rules.block.html.exec(o);if(i)return{type:"html",block:!0,raw:i[0],pre:i[1]==="pre"||i[1]==="script"||i[1]==="style",text:i[0]}}def(o){let i=this.rules.block.def.exec(o);if(i){let r=i[1].toLowerCase().replace(/\s+/g," "),a=i[2]?i[2].replace(/^<(.*)>$/,"$1").replace(this.rules.inline.anyPunctuation,"$1"):"",n=i[3]?i[3].substring(1,i[3].length-1).replace(this.rules.inline.anyPunctuation,"$1"):i[3];return{type:"def",tag:r,raw:i[0],href:a,title:n}}}table(o){let i=this.rules.block.table.exec(o);if(!i)return;if(!/[:|]/.test(i[2]))return;let r=Q3(i[1]),a=i[2].replace(/^\||\| *$/g,"").split("|"),n=i[3]&&i[3].trim()?i[3].replace(/\n[ \t]*$/,"").split(`
`):[],w={type:"table",raw:i[0],header:[],align:[],rows:[]};if(r.length!==a.length)return;for(let b of a)if(/^ *-+: *$/.test(b))w.align.push("right");else if(/^ *:-+: *$/.test(b))w.align.push("center");else if(/^ *:-+ *$/.test(b))w.align.push("left");else w.align.push(null);for(let b of r)w.header.push({text:b,tokens:this.lexer.inline(b)});for(let b of n)w.rows.push(Q3(b,w.header.length).map((c)=>{return{text:c,tokens:this.lexer.inline(c)}}));return w}lheading(o){let i=this.rules.block.lheading.exec(o);if(i)return{type:"heading",raw:i[0],depth:i[2].charAt(0)==="="?1:2,text:i[1],tokens:this.lexer.inline(i[1])}}paragraph(o){let i=this.rules.block.paragraph.exec(o);if(i){let r=i[1].charAt(i[1].length-1)===`
`?i[1].slice(0,-1):i[1];return{type:"paragraph",raw:i[0],text:r,tokens:this.lexer.inline(r)}}}text(o){let i=this.rules.block.text.exec(o);if(i)return{type:"text",raw:i[0],text:i[0],tokens:this.lexer.inline(i[0])}}escape(o){let i=this.rules.inline.escape.exec(o);if(i)return{type:"escape",raw:i[0],text:yi(i[1])}}tag(o){let i=this.rules.inline.tag.exec(o);if(i){if(!this.lexer.state.inLink&&/^<a /i.test(i[0]))this.lexer.state.inLink=!0;else if(this.lexer.state.inLink&&/^<\/a>/i.test(i[0]))this.lexer.state.inLink=!1;if(!this.lexer.state.inRawBlock&&/^<(pre|code|kbd|script)(\s|>)/i.test(i[0]))this.lexer.state.inRawBlock=!0;else if(this.lexer.state.inRawBlock&&/^<\/(pre|code|kbd|script)(\s|>)/i.test(i[0]))this.lexer.state.inRawBlock=!1;return{type:"html",raw:i[0],inLink:this.lexer.state.inLink,inRawBlock:this.lexer.state.inRawBlock,block:!1,text:i[0]}}}link(o){let i=this.rules.inline.link.exec(o);if(i){let r=i[2].trim();if(!this.options.pedantic&&/^</.test(r)){if(!/>$/.test(r))return;let w=G2(r.slice(0,-1),"\\");if((r.length-w.length)%2===0)return}else{let w=jt(i[2],"()");if(w>-1){let c=(i[0].indexOf("!")===0?5:4)+i[1].length+w;i[2]=i[2].substring(0,w),i[0]=i[0].substring(0,c).trim(),i[3]=""}}let a=i[2],n="";if(this.options.pedantic){let w=/^([^'"]*[^\s])\s+(['"])(.*)\2/.exec(a);if(w)a=w[1],n=w[3]}else n=i[3]?i[3].slice(1,-1):"";if(a=a.trim(),/^</.test(a))if(this.options.pedantic&&!/>$/.test(r))a=a.slice(1);else a=a.slice(1,-1);return K3(i,{href:a?a.replace(this.rules.inline.anyPunctuation,"$1"):a,title:n?n.replace(this.rules.inline.anyPunctuation,"$1"):n},i[0],this.lexer)}}reflink(o,i){let r;if((r=this.rules.inline.reflink.exec(o))||(r=this.rules.inline.nolink.exec(o))){let a=(r[2]||r[1]).replace(/\s+/g," "),n=i[a.toLowerCase()];if(!n){let w=r[0].charAt(0);return{type:"text",raw:w,text:w}}return K3(r,n,r[0],this.lexer)}}emStrong(o,i,r=""){let a=this.rules.inline.emStrongLDelim.exec(o);if(!a)return;if(a[3]&&r.match(/[\p{L}\p{N}]/u))return;if(!(a[1]||a[2])||!r||this.rules.inline.punctuation.exec(r)){let w=[...a[0]].length-1,b,c,m=w,p=0,d=a[0][0]==="*"?this.rules.inline.emStrongRDelimAst:this.rules.inline.emStrongRDelimUnd;d.lastIndex=0,i=i.slice(-1*o.length+w);while((a=d.exec(i))!=null){if(b=a[1]||a[2]||a[3]||a[4]||a[5]||a[6],!b)continue;if(c=[...b].length,a[3]||a[4]){m+=c;continue}else if(a[5]||a[6]){if(w%3&&!((w+c)%3)){p+=c;continue}}if(m-=c,m>0)continue;c=Math.min(c,c+m+p);let s=[...a[0]][0].length,z=o.slice(0,w+a.index+s+c);if(Math.min(w,c)%2){let y=z.slice(1,-1);return{type:"em",raw:z,text:y,tokens:this.lexer.inlineTokens(y)}}let u=z.slice(2,-2);return{type:"strong",raw:z,text:u,tokens:this.lexer.inlineTokens(u)}}}}codespan(o){let i=this.rules.inline.code.exec(o);if(i){let r=i[2].replace(/\n/g," "),a=/[^ ]/.test(r),n=/^ /.test(r)&&/ $/.test(r);if(a&&n)r=r.substring(1,r.length-1);return r=yi(r,!0),{type:"codespan",raw:i[0],text:r}}}br(o){let i=this.rules.inline.br.exec(o);if(i)return{type:"br",raw:i[0]}}del(o){let i=this.rules.inline.del.exec(o);if(i)return{type:"del",raw:i[0],text:i[2],tokens:this.lexer.inlineTokens(i[2])}}autolink(o){let i=this.rules.inline.autolink.exec(o);if(i){let r,a;if(i[2]==="@")r=yi(i[1]),a="mailto:"+r;else r=yi(i[1]),a=r;return{type:"link",raw:i[0],text:r,href:a,tokens:[{type:"text",raw:r,text:r}]}}}url(o){let i;if(i=this.rules.inline.url.exec(o)){let r,a;if(i[2]==="@")r=yi(i[0]),a="mailto:"+r;else{let n;do n=i[0],i[0]=this.rules.inline._backpedal.exec(i[0])?.[0]??"";while(n!==i[0]);if(r=yi(i[0]),i[1]==="www.")a="http://"+i[0];else a=i[0]}return{type:"link",raw:i[0],text:r,href:a,tokens:[{type:"text",raw:r,text:r}]}}}inlineText(o){let i=this.rules.inline.text.exec(o);if(i){let r;if(this.lexer.state.inRawBlock)r=i[0];else r=yi(i[0]);return{type:"text",raw:i[0],text:r}}}}var St=/^(?: *(?:\n|$))+/,Rt=/^( {4}[^\n]+(?:\n(?: *(?:\n|$))*)?)+/,Ct=/^ {0,3}(`{3,}(?=[^`\n]*(?:\n|$))|~{3,})([^\n]*)(?:\n|$)(?:|([\s\S]*?)(?:\n|$))(?: {0,3}\1[~`]* *(?=\n|$)|$)/,Nr=/^ {0,3}((?:-[\t ]*){3,}|(?:_[ \t]*){3,}|(?:\*[ \t]*){3,})(?:\n+|$)/,Pt=/^ {0,3}(#{1,6})(?=\s|$)(.*)(?:\n+|$)/,H3=/(?:[*+-]|\d{1,9}[.)])/,N3=uo(/^(?!bull )((?:.|\n(?!\s*?\n|bull ))+?)\n {0,3}(=+|-+) *(?:\n+|$)/).replace(/bull/g,H3).getRegex(),ca=/^([^\n]+(?:\n(?!hr|heading|lheading|blockquote|fences|list|html|table| +\n)[^\n]+)*)/,Wt=/^[^\n]+/,ma=/(?!\s*\])(?:\\.|[^\[\]\\])+/,_t=uo(/^ {0,3}\[(label)\]: *(?:\n *)?([^<\s][^\s]*|<.*?>)(?:(?: +(?:\n *)?| *\n *)(title))? *(?:\n+|$)/).replace("label",ma).replace("title",/(?:"(?:\\"?|[^"\\])*"|'[^'\n]*(?:\n[^'\n]+)*\n?'|\([^()]*\))/).getRegex(),et=uo(/^( {0,3}bull)([ \t][^\n]+?)?(?:\n|$)/).replace(/bull/g,H3).getRegex(),H2="address|article|aside|base|basefont|blockquote|body|caption|center|col|colgroup|dd|details|dialog|dir|div|dl|dt|fieldset|figcaption|figure|footer|form|frame|frameset|h[1-6]|head|header|hr|html|iframe|legend|li|link|main|menu|menuitem|meta|nav|noframes|ol|optgroup|option|p|param|section|source|summary|table|tbody|td|tfoot|th|thead|title|tr|track|ul",pa=/<!--(?!-?>)[\s\S]*?(?:-->|$)/,o6=uo("^ {0,3}(?:<(script|pre|style|textarea)[\\s>][\\s\\S]*?(?:</\\1>[^\\n]*\\n+|$)|comment[^\\n]*(\\n+|$)|<\\?[\\s\\S]*?(?:\\?>\\n*|$)|<![A-Z][\\s\\S]*?(?:>\\n*|$)|<!\\[CDATA\\[[\\s\\S]*?(?:\\]\\]>\\n*|$)|</?(tag)(?: +|\\n|/?>)[\\s\\S]*?(?:(?:\\n *)+\\n|$)|<(?!script|pre|style|textarea)([a-z][\\w-]*)(?:attribute)*? */?>(?=[ \\t]*(?:\\n|$))[\\s\\S]*?(?:(?:\\n *)+\\n|$)|</(?!script|pre|style|textarea)[a-z][\\w-]*\\s*>(?=[ \\t]*(?:\\n|$))[\\s\\S]*?(?:(?:\\n *)+\\n|$))","i").replace("comment",pa).replace("tag",H2).replace("attribute",/ +[a-zA-Z:_][\w.:-]*(?: *= *"[^"\n]*"| *= *'[^'\n]*'| *= *[^\s"'=<>`]+)?/).getRegex(),O3=uo(ca).replace("hr",Nr).replace("heading"," {0,3}#{1,6}(?:\\s|$)").replace("|lheading","").replace("|table","").replace("blockquote"," {0,3}>").replace("fences"," {0,3}(?:`{3,}(?=[^`\\n]*\\n)|~{3,})[^\\n]*\\n").replace("list"," {0,3}(?:[*+-]|1[.)]) ").replace("html","</?(?:tag)(?: +|\\n|/?>)|<(?:script|pre|style|textarea|!--)").replace("tag",H2).getRegex(),i6=uo(/^( {0,3}> ?(paragraph|[^\n]*)(?:\n|$))+/).replace("paragraph",O3).getRegex(),ha={blockquote:i6,code:Rt,def:_t,fences:Ct,heading:Pt,hr:Nr,html:o6,lheading:N3,list:et,newline:St,paragraph:O3,table:Gr,text:Wt},B3=uo("^ *([^\\n ].*)\\n {0,3}((?:\\| *)?:?-+:? *(?:\\| *:?-+:? *)*(?:\\| *)?)(?:\\n((?:(?! *\\n|hr|heading|blockquote|code|fences|list|html).*(?:\\n|$))*)\\n*|$)").replace("hr",Nr).replace("heading"," {0,3}#{1,6}(?:\\s|$)").replace("blockquote"," {0,3}>").replace("code"," {4}[^\\n]").replace("fences"," {0,3}(?:`{3,}(?=[^`\\n]*\\n)|~{3,})[^\\n]*\\n").replace("list"," {0,3}(?:[*+-]|1[.)]) ").replace("html","</?(?:tag)(?: +|\\n|/?>)|<(?:script|pre|style|textarea|!--)").replace("tag",H2).getRegex(),r6={...ha,table:B3,paragraph:uo(ca).replace("hr",Nr).replace("heading"," {0,3}#{1,6}(?:\\s|$)").replace("|lheading","").replace("table",B3).replace("blockquote"," {0,3}>").replace("fences"," {0,3}(?:`{3,}(?=[^`\\n]*\\n)|~{3,})[^\\n]*\\n").replace("list"," {0,3}(?:[*+-]|1[.)]) ").replace("html","</?(?:tag)(?: +|\\n|/?>)|<(?:script|pre|style|textarea|!--)").replace("tag",H2).getRegex()},a6={...ha,html:uo(`^ *(?:comment *(?:\\n|\\s*$)|<(tag)[\\s\\S]+?</\\1> *(?:\\n{2,}|\\s*$)|<tag(?:"[^"]*"|'[^']*'|\\s[^'"/>\\s]*)*?/?> *(?:\\n{2,}|\\s*$))`).replace("comment",pa).replace(/tag/g,"(?!(?:a|em|strong|small|s|cite|q|dfn|abbr|data|time|code|var|samp|kbd|sub|sup|i|b|u|mark|ruby|rt|rp|bdi|bdo|span|br|wbr|ins|del|img)\\b)\\w+(?!:|[^\\w\\s@]*@)\\b").getRegex(),def:/^ *\[([^\]]+)\]: *<?([^\s>]+)>?(?: +(["(][^\n]+[")]))? *(?:\n+|$)/,heading:/^(#{1,6})(.*)(?:\n+|$)/,fences:Gr,lheading:/^(.+?)\n {0,3}(=+|-+) *(?:\n+|$)/,paragraph:uo(ca).replace("hr",Nr).replace("heading",` *#{1,6} *[^
]`).replace("lheading",N3).replace("|table","").replace("blockquote"," {0,3}>").replace("|fences","").replace("|list","").replace("|html","").replace("|tag","").getRegex()},A3=/^\\([!"#$%&'()*+,\-./:;<=>?@\[\]\\^_`{|}~])/,n6=/^(`+)([^`]|[^`][\s\S]*?[^`])\1(?!`)/,E3=/^( {2,}|\\)\n(?!\s*$)/,f6=/^(`+|[^`])(?:(?= {2,}\n)|[\s\S]*?(?:(?=[\\<!\[`*_]|\b_|$)|[^ ](?= {2,}\n)))/,Or="\\p{P}$+<=>`^|~",w6=uo(/^((?![*_])[\spunctuation])/,"u").replace(/punctuation/g,Or).getRegex(),b6=/\[[^[\]]*?\]\([^\(\)]*?\)|`[^`]*?`|<[^<>]*?>/g,t6=uo(/^(?:\*+(?:((?!\*)[punct])|[^\s*]))|^_+(?:((?!_)[punct])|([^\s_]))/,"u").replace(/punct/g,Or).getRegex(),c6=uo("^[^_*]*?__[^_*]*?\\*[^_*]*?(?=__)|[^*]+(?=[^*])|(?!\\*)[punct](\\*+)(?=[\\s]|$)|[^punct\\s](\\*+)(?!\\*)(?=[punct\\s]|$)|(?!\\*)[punct\\s](\\*+)(?=[^punct\\s])|[\\s](\\*+)(?!\\*)(?=[punct])|(?!\\*)[punct](\\*+)(?!\\*)(?=[punct])|[^punct\\s](\\*+)(?=[^punct\\s])","gu").replace(/punct/g,Or).getRegex(),m6=uo("^[^_*]*?\\*\\*[^_*]*?_[^_*]*?(?=\\*\\*)|[^_]+(?=[^_])|(?!_)[punct](_+)(?=[\\s]|$)|[^punct\\s](_+)(?!_)(?=[punct\\s]|$)|(?!_)[punct\\s](_+)(?=[^punct\\s])|[\\s](_+)(?!_)(?=[punct])|(?!_)[punct](_+)(?!_)(?=[punct])","gu").replace(/punct/g,Or).getRegex(),p6=uo(/\\([punct])/,"gu").replace(/punct/g,Or).getRegex(),h6=uo(/^<(scheme:[^\s\x00-\x1f<>]*|email)>/).replace("scheme",/[a-zA-Z][a-zA-Z0-9+.-]{1,31}/).replace("email",/[a-zA-Z0-9.!#$%&'*+/=?^_`{|}~-]+(@)[a-zA-Z0-9](?:[a-zA-Z0-9-]{0,61}[a-zA-Z0-9])?(?:\.[a-zA-Z0-9](?:[a-zA-Z0-9-]{0,61}[a-zA-Z0-9])?)+(?![-_])/).getRegex(),d6=uo(pa).replace("(?:-->|$)","-->").getRegex(),g6=uo("^comment|^</[a-zA-Z][\\w:-]*\\s*>|^<[a-zA-Z][\\w-]*(?:attribute)*?\\s*/?>|^<\\?[\\s\\S]*?\\?>|^<![a-zA-Z]+\\s[\\s\\S]*?>|^<!\\[CDATA\\[[\\s\\S]*?\\]\\]>").replace("comment",d6).replace("attribute",/\s+[a-zA-Z:_][\w.:-]*(?:\s*=\s*"[^"]*"|\s*=\s*'[^']*'|\s*=\s*[^\s"'=<>`]+)?/).getRegex(),V2=/(?:\[(?:\\.|[^\[\]\\])*\]|\\.|`[^`]*`|[^\[\]\\`])*?/,s6=uo(/^!?\[(label)\]\(\s*(href)(?:\s+(title))?\s*\)/).replace("label",V2).replace("href",/<(?:\\.|[^\n<>\\])+>|[^\s\x00-\x1f]*/).replace("title",/"(?:\\"?|[^"\\])*"|'(?:\\'?|[^'\\])*'|\((?:\\\)?|[^)\\])*\)/).getRegex(),D3=uo(/^!?\[(label)\]\[(ref)\]/).replace("label",V2).replace("ref",ma).getRegex(),k3=uo(/^!?\[(ref)\](?:\[\])?/).replace("ref",ma).getRegex(),u6=uo("reflink|nolink(?!\\()","g").replace("reflink",D3).replace("nolink",k3).getRegex(),da={_backpedal:Gr,anyPunctuation:p6,autolink:h6,blockSkip:b6,br:E3,code:n6,del:Gr,emStrongLDelim:t6,emStrongRDelimAst:c6,emStrongRDelimUnd:m6,escape:A3,link:s6,nolink:k3,punctuation:w6,reflink:D3,reflinkSearch:u6,tag:g6,text:f6,url:Gr},z6={...da,link:uo(/^!?\[(label)\]\((.*?)\)/).replace("label",V2).getRegex(),reflink:uo(/^!?\[(label)\]\s*\[([^\]]*)\]/).replace("label",V2).getRegex()},ba={...da,escape:uo(A3).replace("])","~|])").getRegex(),url:uo(/^((?:ftp|https?):\/\/|www\.)(?:[a-zA-Z0-9\-]+\.?)+[^\s<]*|^email/,"i").replace("email",/[A-Za-z0-9._+-]+(@)[a-zA-Z0-9-_]+(?:\.[a-zA-Z0-9-_]*[a-zA-Z0-9])+(?![-_])/).getRegex(),_backpedal:/(?:[^?!.,:;*_'"~()&]+|\([^)]*\)|&(?![a-zA-Z0-9]+;$)|[?!.,:;*_'"~)]+(?!$))+/,del:/^(~~?)(?=[^\s~])([\s\S]*?[^\s~])\1(?=[^~]|$)/,text:/^([`~]+|[^`~])(?:(?= {2,}\n)|(?=[a-zA-Z0-9.!#$%&'*+\/=?_`{\|}~-]+@)|[\s\S]*?(?:(?=[\\<!\[`*~_]|\b_|https?:\/\/|ftp:\/\/|www\.|$)|[^ ](?= {2,}\n)|[^a-zA-Z0-9.!#$%&'*+\/=?_`{\|}~-](?=[a-zA-Z0-9.!#$%&'*+\/=?_`{\|}~-]+@)))/},y6={...ba,br:uo(E3).replace("{2,}","*").getRegex(),text:uo(ba.text).replace("\\b_","\\b_| {2,}\\n").replace(/\{2,\}/g,"*").getRegex()},M2={normal:ha,gfm:r6,pedantic:a6},Br={normal:da,gfm:ba,breaks:y6,pedantic:z6};class Wi{tokens;options;state;tokenizer;inlineQueue;constructor(o){this.tokens=[],this.tokens.links=Object.create(null),this.options=o||C0,this.options.tokenizer=this.options.tokenizer||new Vr,this.tokenizer=this.options.tokenizer,this.tokenizer.options=this.options,this.tokenizer.lexer=this,this.inlineQueue=[],this.state={inLink:!1,inRawBlock:!1,top:!0};let i={block:M2.normal,inline:Br.normal};if(this.options.pedantic)i.block=M2.pedantic,i.inline=Br.pedantic;else if(this.options.gfm)if(i.block=M2.gfm,this.options.breaks)i.inline=Br.breaks;else i.inline=Br.gfm;this.tokenizer.rules=i}static get rules(){return{block:M2,inline:Br}}static lex(o,i){return new Wi(i).lex(o)}static lexInline(o,i){return new Wi(i).inlineTokens(o)}lex(o){o=o.replace(/\r\n|\r/g,`
`),this.blockTokens(o,this.tokens);for(let i=0;i<this.inlineQueue.length;i++){let r=this.inlineQueue[i];this.inlineTokens(r.src,r.tokens)}return this.inlineQueue=[],this.tokens}blockTokens(o,i=[]){if(this.options.pedantic)o=o.replace(/\t/g,"    ").replace(/^ +$/gm,"");else o=o.replace(/^( *)(\t+)/gm,(b,c,m)=>{return c+"    ".repeat(m.length)});let r,a,n,w;while(o){if(this.options.extensions&&this.options.extensions.block&&this.options.extensions.block.some((b)=>{if(r=b.call({lexer:this},o,i))return o=o.substring(r.raw.length),i.push(r),!0;return!1}))continue;if(r=this.tokenizer.space(o)){if(o=o.substring(r.raw.length),r.raw.length===1&&i.length>0)i[i.length-1].raw+=`
`;else i.push(r);continue}if(r=this.tokenizer.code(o)){if(o=o.substring(r.raw.length),a=i[i.length-1],a&&(a.type==="paragraph"||a.type==="text"))a.raw+=`
`+r.raw,a.text+=`
`+r.text,this.inlineQueue[this.inlineQueue.length-1].src=a.text;else i.push(r);continue}if(r=this.tokenizer.fences(o)){o=o.substring(r.raw.length),i.push(r);continue}if(r=this.tokenizer.heading(o)){o=o.substring(r.raw.length),i.push(r);continue}if(r=this.tokenizer.hr(o)){o=o.substring(r.raw.length),i.push(r);continue}if(r=this.tokenizer.blockquote(o)){o=o.substring(r.raw.length),i.push(r);continue}if(r=this.tokenizer.list(o)){o=o.substring(r.raw.length),i.push(r);continue}if(r=this.tokenizer.html(o)){o=o.substring(r.raw.length),i.push(r);continue}if(r=this.tokenizer.def(o)){if(o=o.substring(r.raw.length),a=i[i.length-1],a&&(a.type==="paragraph"||a.type==="text"))a.raw+=`
`+r.raw,a.text+=`
`+r.raw,this.inlineQueue[this.inlineQueue.length-1].src=a.text;else if(!this.tokens.links[r.tag])this.tokens.links[r.tag]={href:r.href,title:r.title};continue}if(r=this.tokenizer.table(o)){o=o.substring(r.raw.length),i.push(r);continue}if(r=this.tokenizer.lheading(o)){o=o.substring(r.raw.length),i.push(r);continue}if(n=o,this.options.extensions&&this.options.extensions.startBlock){let b=1/0,c=o.slice(1),m;if(this.options.extensions.startBlock.forEach((p)=>{if(m=p.call({lexer:this},c),typeof m==="number"&&m>=0)b=Math.min(b,m)}),b<1/0&&b>=0)n=o.substring(0,b+1)}if(this.state.top&&(r=this.tokenizer.paragraph(n))){if(a=i[i.length-1],w&&a.type==="paragraph")a.raw+=`
`+r.raw,a.text+=`
`+r.text,this.inlineQueue.pop(),this.inlineQueue[this.inlineQueue.length-1].src=a.text;else i.push(r);w=n.length!==o.length,o=o.substring(r.raw.length);continue}if(r=this.tokenizer.text(o)){if(o=o.substring(r.raw.length),a=i[i.length-1],a&&a.type==="text")a.raw+=`
`+r.raw,a.text+=`
`+r.text,this.inlineQueue.pop(),this.inlineQueue[this.inlineQueue.length-1].src=a.text;else i.push(r);continue}if(o){let b="Infinite loop on byte: "+o.charCodeAt(0);if(this.options.silent){console.error(b);break}else throw Error(b)}}return this.state.top=!0,i}inline(o,i=[]){return this.inlineQueue.push({src:o,tokens:i}),i}inlineTokens(o,i=[]){let r,a,n,w=o,b,c,m;if(this.tokens.links){let p=Object.keys(this.tokens.links);if(p.length>0){while((b=this.tokenizer.rules.inline.reflinkSearch.exec(w))!=null)if(p.includes(b[0].slice(b[0].lastIndexOf("[")+1,-1)))w=w.slice(0,b.index)+"["+"a".repeat(b[0].length-2)+"]"+w.slice(this.tokenizer.rules.inline.reflinkSearch.lastIndex)}}while((b=this.tokenizer.rules.inline.blockSkip.exec(w))!=null)w=w.slice(0,b.index)+"["+"a".repeat(b[0].length-2)+"]"+w.slice(this.tokenizer.rules.inline.blockSkip.lastIndex);while((b=this.tokenizer.rules.inline.anyPunctuation.exec(w))!=null)w=w.slice(0,b.index)+"++"+w.slice(this.tokenizer.rules.inline.anyPunctuation.lastIndex);while(o){if(!c)m="";if(c=!1,this.options.extensions&&this.options.extensions.inline&&this.options.extensions.inline.some((p)=>{if(r=p.call({lexer:this},o,i))return o=o.substring(r.raw.length),i.push(r),!0;return!1}))continue;if(r=this.tokenizer.escape(o)){o=o.substring(r.raw.length),i.push(r);continue}if(r=this.tokenizer.tag(o)){if(o=o.substring(r.raw.length),a=i[i.length-1],a&&r.type==="text"&&a.type==="text")a.raw+=r.raw,a.text+=r.text;else i.push(r);continue}if(r=this.tokenizer.link(o)){o=o.substring(r.raw.length),i.push(r);continue}if(r=this.tokenizer.reflink(o,this.tokens.links)){if(o=o.substring(r.raw.length),a=i[i.length-1],a&&r.type==="text"&&a.type==="text")a.raw+=r.raw,a.text+=r.text;else i.push(r);continue}if(r=this.tokenizer.emStrong(o,w,m)){o=o.substring(r.raw.length),i.push(r);continue}if(r=this.tokenizer.codespan(o)){o=o.substring(r.raw.length),i.push(r);continue}if(r=this.tokenizer.br(o)){o=o.substring(r.raw.length),i.push(r);continue}if(r=this.tokenizer.del(o)){o=o.substring(r.raw.length),i.push(r);continue}if(r=this.tokenizer.autolink(o)){o=o.substring(r.raw.length),i.push(r);continue}if(!this.state.inLink&&(r=this.tokenizer.url(o))){o=o.substring(r.raw.length),i.push(r);continue}if(n=o,this.options.extensions&&this.options.extensions.startInline){let p=1/0,d=o.slice(1),s;if(this.options.extensions.startInline.forEach((z)=>{if(s=z.call({lexer:this},d),typeof s==="number"&&s>=0)p=Math.min(p,s)}),p<1/0&&p>=0)n=o.substring(0,p+1)}if(r=this.tokenizer.inlineText(n)){if(o=o.substring(r.raw.length),r.raw.slice(-1)!=="_")m=r.raw.slice(-1);if(c=!0,a=i[i.length-1],a&&a.type==="text")a.raw+=r.raw,a.text+=r.text;else i.push(r);continue}if(o){let p="Infinite loop on byte: "+o.charCodeAt(0);if(this.options.silent){console.error(p);break}else throw Error(p)}}return i}}class Hr{options;constructor(o){this.options=o||C0}code(o,i,r){let a=(i||"").match(/^\S*/)?.[0];if(o=o.replace(/\n$/,"")+`
`,!a)return"<pre><code>"+(r?o:yi(o,!0))+`</code></pre>
`;return'<pre><code class="language-'+yi(a)+'">'+(r?o:yi(o,!0))+`</code></pre>
`}blockquote(o){return`<blockquote>
${o}</blockquote>
`}html(o,i){return o}heading(o,i,r){return`<h${i}>${o}</h${i}>
`}hr(){return`<hr>
`}list(o,i,r){let a=i?"ol":"ul",n=i&&r!==1?' start="'+r+'"':"";return"<"+a+n+`>
`+o+"</"+a+`>
`}listitem(o,i,r){return`<li>${o}</li>
`}checkbox(o){return"<input "+(o?'checked="" ':"")+'disabled="" type="checkbox">'}paragraph(o){return`<p>${o}</p>
`}table(o,i){if(i)i=`<tbody>${i}</tbody>`;return`<table>
<thead>
`+o+`</thead>
`+i+`</table>
`}tablerow(o){return`<tr>
${o}</tr>
`}tablecell(o,i){let r=i.header?"th":"td";return(i.align?`<${r} align="${i.align}">`:`<${r}>`)+o+`</${r}>
`}strong(o){return`<strong>${o}</strong>`}em(o){return`<em>${o}</em>`}codespan(o){return`<code>${o}</code>`}br(){return"<br>"}del(o){return`<del>${o}</del>`}link(o,i,r){let a=Z3(o);if(a===null)return r;o=a;let n='<a href="'+o+'"';if(i)n+=' title="'+i+'"';return n+=">"+r+"</a>",n}image(o,i,r){let a=Z3(o);if(a===null)return r;o=a;let n=`<img src="${o}" alt="${r}"`;if(i)n+=` title="${i}"`;return n+=">",n}text(o){return o}}class N2{strong(o){return o}em(o){return o}codespan(o){return o}del(o){return o}html(o){return o}text(o){return o}link(o,i,r){return""+r}image(o,i,r){return""+r}br(){return""}}class _i{options;renderer;textRenderer;constructor(o){this.options=o||C0,this.options.renderer=this.options.renderer||new Hr,this.renderer=this.options.renderer,this.renderer.options=this.options,this.textRenderer=new N2}static parse(o,i){return new _i(i).parse(o)}static parseInline(o,i){return new _i(i).parseInline(o)}parse(o,i=!0){let r="";for(let a=0;a<o.length;a++){let n=o[a];if(this.options.extensions&&this.options.extensions.renderers&&this.options.extensions.renderers[n.type]){let w=n,b=this.options.extensions.renderers[w.type].call({parser:this},w);if(b!==!1||!["space","hr","heading","code","table","blockquote","list","html","paragraph","text"].includes(w.type)){r+=b||"";continue}}switch(n.type){case"space":continue;case"hr":{r+=this.renderer.hr();continue}case"heading":{let w=n;r+=this.renderer.heading(this.parseInline(w.tokens),w.depth,kt(this.parseInline(w.tokens,this.textRenderer)));continue}case"code":{let w=n;r+=this.renderer.code(w.text,w.lang,!!w.escaped);continue}case"table":{let w=n,b="",c="";for(let p=0;p<w.header.length;p++)c+=this.renderer.tablecell(this.parseInline(w.header[p].tokens),{header:!0,align:w.align[p]});b+=this.renderer.tablerow(c);let m="";for(let p=0;p<w.rows.length;p++){let d=w.rows[p];c="";for(let s=0;s<d.length;s++)c+=this.renderer.tablecell(this.parseInline(d[s].tokens),{header:!1,align:w.align[s]});m+=this.renderer.tablerow(c)}r+=this.renderer.table(b,m);continue}case"blockquote":{let w=n,b=this.parse(w.tokens);r+=this.renderer.blockquote(b);continue}case"list":{let w=n,b=w.ordered,c=w.start,m=w.loose,p="";for(let d=0;d<w.items.length;d++){let s=w.items[d],z=s.checked,u=s.task,y="";if(s.task){let g=this.renderer.checkbox(!!z);if(m)if(s.tokens.length>0&&s.tokens[0].type==="paragraph"){if(s.tokens[0].text=g+" "+s.tokens[0].text,s.tokens[0].tokens&&s.tokens[0].tokens.length>0&&s.tokens[0].tokens[0].type==="text")s.tokens[0].tokens[0].text=g+" "+s.tokens[0].tokens[0].text}else s.tokens.unshift({type:"text",text:g+" "});else y+=g+" "}y+=this.parse(s.tokens,m),p+=this.renderer.listitem(y,u,!!z)}r+=this.renderer.list(p,b,c);continue}case"html":{let w=n;r+=this.renderer.html(w.text,w.block);continue}case"paragraph":{let w=n;r+=this.renderer.paragraph(this.parseInline(w.tokens));continue}case"text":{let w=n,b=w.tokens?this.parseInline(w.tokens):w.text;while(a+1<o.length&&o[a+1].type==="text")w=o[++a],b+=`
`+(w.tokens?this.parseInline(w.tokens):w.text);r+=i?this.renderer.paragraph(b):b;continue}default:{let w='Token with "'+n.type+'" type was not found.';if(this.options.silent)return console.error(w),"";else throw Error(w)}}}return r}parseInline(o,i){i=i||this.renderer;let r="";for(let a=0;a<o.length;a++){let n=o[a];if(this.options.extensions&&this.options.extensions.renderers&&this.options.extensions.renderers[n.type]){let w=this.options.extensions.renderers[n.type].call({parser:this},n);if(w!==!1||!["escape","html","link","image","strong","em","codespan","br","del","text"].includes(n.type)){r+=w||"";continue}}switch(n.type){case"escape":{let w=n;r+=i.text(w.text);break}case"html":{let w=n;r+=i.html(w.text);break}case"link":{let w=n;r+=i.link(w.href,w.title,this.parseInline(w.tokens,i));break}case"image":{let w=n;r+=i.image(w.href,w.title,w.text);break}case"strong":{let w=n;r+=i.strong(this.parseInline(w.tokens,i));break}case"em":{let w=n;r+=i.em(this.parseInline(w.tokens,i));break}case"codespan":{let w=n;r+=i.codespan(w.text);break}case"br":{r+=i.br();break}case"del":{let w=n;r+=i.del(this.parseInline(w.tokens,i));break}case"text":{let w=n;r+=i.text(w.text);break}default:{let w='Token with "'+n.type+'" type was not found.';if(this.options.silent)return console.error(w),"";else throw Error(w)}}}return r}}class Mr{options;constructor(o){this.options=o||C0}static passThroughHooks=new Set(["preprocess","postprocess","processAllTokens"]);preprocess(o){return o}postprocess(o){return o}processAllTokens(o){return o}}class O2{defaults=ta();options=this.setOptions;parse=this.#o(Wi.lex,_i.parse);parseInline=this.#o(Wi.lexInline,_i.parseInline);Parser=_i;Renderer=Hr;TextRenderer=N2;Lexer=Wi;Tokenizer=Vr;Hooks=Mr;constructor(...o){this.use(...o)}walkTokens(o,i){let r=[];for(let a of o)switch(r=r.concat(i.call(this,a)),a.type){case"table":{let n=a;for(let w of n.header)r=r.concat(this.walkTokens(w.tokens,i));for(let w of n.rows)for(let b of w)r=r.concat(this.walkTokens(b.tokens,i));break}case"list":{let n=a;r=r.concat(this.walkTokens(n.items,i));break}default:{let n=a;if(this.defaults.extensions?.childTokens?.[n.type])this.defaults.extensions.childTokens[n.type].forEach((w)=>{let b=n[w].flat(1/0);r=r.concat(this.walkTokens(b,i))});else if(n.tokens)r=r.concat(this.walkTokens(n.tokens,i))}}return r}use(...o){let i=this.defaults.extensions||{renderers:{},childTokens:{}};return o.forEach((r)=>{let a={...r};if(a.async=this.defaults.async||a.async||!1,r.extensions)r.extensions.forEach((n)=>{if(!n.name)throw Error("extension name required");if("renderer"in n){let w=i.renderers[n.name];if(w)i.renderers[n.name]=function(...b){let c=n.renderer.apply(this,b);if(c===!1)c=w.apply(this,b);return c};else i.renderers[n.name]=n.renderer}if("tokenizer"in n){if(!n.level||n.level!=="block"&&n.level!=="inline")throw Error("extension level must be 'block' or 'inline'");let w=i[n.level];if(w)w.unshift(n.tokenizer);else i[n.level]=[n.tokenizer];if(n.start){if(n.level==="block")if(i.startBlock)i.startBlock.push(n.start);else i.startBlock=[n.start];else if(n.level==="inline")if(i.startInline)i.startInline.push(n.start);else i.startInline=[n.start]}}if("childTokens"in n&&n.childTokens)i.childTokens[n.name]=n.childTokens}),a.extensions=i;if(r.renderer){let n=this.defaults.renderer||new Hr(this.defaults);for(let w in r.renderer){if(!(w in n))throw Error(`renderer '${w}' does not exist`);if(w==="options")continue;let b=w,c=r.renderer[b],m=n[b];n[b]=(...p)=>{let d=c.apply(n,p);if(d===!1)d=m.apply(n,p);return d||""}}a.renderer=n}if(r.tokenizer){let n=this.defaults.tokenizer||new Vr(this.defaults);for(let w in r.tokenizer){if(!(w in n))throw Error(`tokenizer '${w}' does not exist`);if(["options","rules","lexer"].includes(w))continue;let b=w,c=r.tokenizer[b],m=n[b];n[b]=(...p)=>{let d=c.apply(n,p);if(d===!1)d=m.apply(n,p);return d}}a.tokenizer=n}if(r.hooks){let n=this.defaults.hooks||new Mr;for(let w in r.hooks){if(!(w in n))throw Error(`hook '${w}' does not exist`);if(w==="options")continue;let b=w,c=r.hooks[b],m=n[b];if(Mr.passThroughHooks.has(w))n[b]=(p)=>{if(this.defaults.async)return Promise.resolve(c.call(n,p)).then((s)=>{return m.call(n,s)});let d=c.call(n,p);return m.call(n,d)};else n[b]=(...p)=>{let d=c.apply(n,p);if(d===!1)d=m.apply(n,p);return d}}a.hooks=n}if(r.walkTokens){let n=this.defaults.walkTokens,w=r.walkTokens;a.walkTokens=function(b){let c=[];if(c.push(w.call(this,b)),n)c=c.concat(n.call(this,b));return c}}this.defaults={...this.defaults,...a}}),this}setOptions(o){return this.defaults={...this.defaults,...o},this}lexer(o,i){return Wi.lex(o,i??this.defaults)}parser(o,i){return _i.parse(o,i??this.defaults)}#o(o,i){return(r,a)=>{let n={...a},w={...this.defaults,...n};if(this.defaults.async===!0&&n.async===!1){if(!w.silent)console.warn("marked(): The async option was set to true by an extension. The async: false option sent to parse will be ignored.");w.async=!0}let b=this.#i(!!w.silent,!!w.async);if(typeof r>"u"||r===null)return b(Error("marked(): input parameter is undefined or null"));if(typeof r!=="string")return b(Error("marked(): input parameter is of type "+Object.prototype.toString.call(r)+", string expected"));if(w.hooks)w.hooks.options=w;if(w.async)return Promise.resolve(w.hooks?w.hooks.preprocess(r):r).then((c)=>o(c,w)).then((c)=>w.hooks?w.hooks.processAllTokens(c):c).then((c)=>w.walkTokens?Promise.all(this.walkTokens(c,w.walkTokens)).then(()=>c):c).then((c)=>i(c,w)).then((c)=>w.hooks?w.hooks.postprocess(c):c).catch(b);try{if(w.hooks)r=w.hooks.preprocess(r);let c=o(r,w);if(w.hooks)c=w.hooks.processAllTokens(c);if(w.walkTokens)this.walkTokens(c,w.walkTokens);let m=i(c,w);if(w.hooks)m=w.hooks.postprocess(m);return m}catch(c){return b(c)}}}#i(o,i){return(r)=>{if(r.message+=`
Please report this to https://github.com/markedjs/marked.`,o){let a="<p>An error occurred:</p><pre>"+yi(r.message+"",!0)+"</pre>";if(i)return Promise.resolve(a);return a}if(i)return Promise.reject(r);throw r}}}var R0=new O2;function so(o,i){return R0.parse(o,i)}so.options=so.setOptions=function(o){return R0.setOptions(o),so.defaults=R0.defaults,G3(so.defaults),so};so.getDefaults=ta;so.defaults=C0;so.use=function(...o){return R0.use(...o),so.defaults=R0.defaults,G3(so.defaults),so};so.walkTokens=function(o,i){return R0.walkTokens(o,i)};so.parseInline=R0.parseInline;so.Parser=_i;so.parser=_i.parse;so.Renderer=Hr;so.TextRenderer=N2;so.Lexer=Wi;so.lexer=Wi.lex;so.Tokenizer=Vr;so.Hooks=Mr;so.parse=so;var{options:NG,setOptions:OG,use:AG,walkTokens:EG,parseInline:DG}=so;var kG=_i.parse,TG=Wi.lex;/*! Copyright 2026 Fonticons, Inc. - https://webawesome.com/license */var ga=new O2,sa=new Set,Ar=class extends L{constructor(){super(...arguments);this.renderGeneration=0,this.suppressSlotChange=!1,this.tabSize=4}static getMarked(){return ga}static updateAll(){for(let o of sa)o.renderMarkdown()}get marked(){return ga}connectedCallback(){super.connectedCallback(),sa.add(this)}disconnectedCallback(){sa.delete(this),super.disconnectedCallback()}dedent(o){let r=o.replace(/\r\n/g,`
`).split(`
`).map((m)=>{let p="",d=0;for(let s=0;s<m.length;s++){let z=m[s];if(z==="\t"){let u=this.tabSize-d%this.tabSize;p+=" ".repeat(u),d+=u}else if(z===" ")p+=" ",d++;else{p+=m.slice(s);break}}return p}),a=0;while(a<r.length&&r[a].trim()==="")a++;let n=r.length-1;while(n>=a&&r[n].trim()==="")n--;let w=r.slice(a,n+1);if(w.length===0)return"";let b=1/0;for(let m of w){if(m.trim()==="")continue;let p=m.match(/^( *)/),d=p?p[1].length:0;b=Math.min(b,d)}if(b===1/0)b=0;return w.map((m)=>{if(m.trim()==="")return"";return m.slice(b)}).join(`
`)}getSourceScript(){return this.querySelector('script[type="text/markdown"]')}renderMarkdown(){let o=this.getSourceScript();if(!o){console.warn('No <script type="text/markdown"> found. Provide markdown content inside a <script type="text/markdown"> element.',this);return}let i=++this.renderGeneration,r=o.textContent??"",a=this.dedent(r),n;try{n=ga.parse(a)}catch(b){console.error("Failed to parse markdown content.",b,this);return}let w=(b)=>{if(i!==this.renderGeneration)return;this.suppressSlotChange=!0;for(let m of[...this.childNodes])if(m!==o)m.remove();let c=document.createRange().createContextualFragment(b);this.appendChild(c),queueMicrotask(()=>{this.suppressSlotChange=!1})};if(typeof n==="string")w(n);else n.then(w).catch((b)=>{console.error("Failed to parse markdown content.",b,this)})}handleSlotChange(){if(this.suppressSlotChange)return;if(this.didSSR&&!this.hasUpdated)return;this.renderMarkdown()}render(){return h`<slot @slotchange=${this.handleSlotChange}></slot>`}};Ar.css=X3;f([t({type:Number,attribute:"tab-size"})],Ar.prototype,"tabSize",2);Ar=f([$("wa-markdown")],Ar);/*! Copyright 2026 Fonticons, Inc. - https://webawesome.com/license *//*! Copyright 2026 Fonticons, Inc. - https://webawesome.com/license */var T3=class extends Event{constructor(o){super("wa-mutation",{bubbles:!0,cancelable:!1,composed:!0});this.detail=o}};/*! Copyright 2026 Fonticons, Inc. - https://webawesome.com/license */var j3=F`
  :host {
    display: contents;
  }
`;/*! Copyright 2026 Fonticons, Inc. - https://webawesome.com/license */var Ji=class extends L{constructor(){super(...arguments);this.attrOldValue=!1,this.charData=!1,this.charDataOldValue=!1,this.childList=!1,this.disabled=!1,this.handleMutation=(o)=>{this.dispatchEvent(new T3({mutationList:o}))}}connectedCallback(){if(super.connectedCallback(),typeof MutationObserver<"u"){if(this.mutationObserver=new MutationObserver(this.handleMutation),!this.disabled)this.startObserver()}}disconnectedCallback(){super.disconnectedCallback(),this.stopObserver()}startObserver(){let o=typeof this.attr==="string"&&this.attr.length>0,i=o&&this.attr!=="*"?this.attr.split(" "):void 0;try{this.mutationObserver.observe(this,{subtree:!0,childList:this.childList,attributes:o,attributeFilter:i,attributeOldValue:this.attrOldValue,characterData:this.charData,characterDataOldValue:this.charDataOldValue})}catch{}}stopObserver(){this.mutationObserver.disconnect()}handleDisabledChange(){if(this.disabled)this.stopObserver();else this.startObserver()}handleChange(){this.stopObserver(),this.startObserver()}render(){return h` <slot></slot> `}};Ji.css=j3;f([t({reflect:!0})],Ji.prototype,"attr",2);f([t({attribute:"attr-old-value",type:Boolean,reflect:!0})],Ji.prototype,"attrOldValue",2);f([t({attribute:"char-data",type:Boolean,reflect:!0})],Ji.prototype,"charData",2);f([t({attribute:"char-data-old-value",type:Boolean,reflect:!0})],Ji.prototype,"charDataOldValue",2);f([t({attribute:"child-list",type:Boolean,reflect:!0})],Ji.prototype,"childList",2);f([t({type:Boolean,reflect:!0})],Ji.prototype,"disabled",2);f([v("disabled")],Ji.prototype,"handleDisabledChange",1);f([v("attr",{waitUntilFirstUpdate:!0}),v("attr-old-value",{waitUntilFirstUpdate:!0}),v("char-data",{waitUntilFirstUpdate:!0}),v("char-data-old-value",{waitUntilFirstUpdate:!0}),v("childList",{waitUntilFirstUpdate:!0})],Ji.prototype,"handleChange",1);Ji=f([$("wa-mutation-observer")],Ji);/*! Copyright 2026 Fonticons, Inc. - https://webawesome.com/license *//*! Copyright 2026 Fonticons, Inc. - https://webawesome.com/license */var I3=F`
  :host(:focus) {
    outline: none;
  }

  .number-field {
    display: flex;
    align-items: stretch;
    justify-content: start;
    position: relative;
    height: var(--wa-form-control-height);
    border-color: var(--wa-form-control-border-color);
    border-radius: var(--wa-form-control-border-radius);
    border-style: var(--wa-form-control-border-style);
    border-width: var(--wa-form-control-border-width);
    cursor: text;
    color: var(--wa-form-control-value-color);
    font-size: inherit;
    font-family: inherit;
    font-weight: var(--wa-form-control-value-font-weight);
    line-height: var(--wa-form-control-value-line-height);
    vertical-align: middle;
    width: 100%;
    transition:
      background-color var(--wa-transition-normal),
      border-color var(--wa-transition-normal),
      outline-color var(--wa-transition-fast);
    transition-timing-function: var(--wa-transition-easing);
    background-color: var(--wa-form-control-background-color);
    padding: 0;
    outline: var(--wa-focus-ring-style) var(--wa-focus-ring-width) transparent;
    outline-offset: var(--wa-focus-ring-offset);

    &:focus-within {
      outline-color: var(--wa-color-focus);
    }

    /* Style disabled inputs */
    &:has(input:disabled) {
      cursor: not-allowed;
      opacity: 0.5;
    }
  }

  /* Appearance modifiers */
  :host([appearance='outlined']) {
    .number-field {
      background-color: var(--wa-form-control-background-color);
      border-color: var(--wa-form-control-border-color);
    }

    .stepper {
      color: var(--wa-color-neutral-on-quiet);

      @media (hover: hover) {
        &:hover:not(:disabled) {
          color: var(--wa-color-neutral-on-quiet);
          background-color: var(--wa-color-neutral-fill-quiet);
        }
      }

      &:active:not(:disabled) {
        color: color-mix(in oklab, var(--wa-color-neutral-on-quiet), var(--wa-color-mix-active));
        background-color: color-mix(in oklab, var(--wa-color-neutral-fill-quiet), var(--wa-color-mix-active));
      }
    }
  }

  :host([appearance='filled']) {
    .number-field {
      background-color: var(--wa-color-neutral-fill-quiet);
      border-color: var(--wa-color-neutral-fill-quiet);
    }

    .stepper {
      color: var(--wa-color-neutral-on-quiet);

      @media (hover: hover) {
        &:hover:not(:disabled) {
          color: var(--wa-color-neutral-on-normal);
          background-color: var(--wa-color-neutral-fill-normal);
        }
      }

      &:active:not(:disabled) {
        color: color-mix(in oklab, var(--wa-color-neutral-on-normal), var(--wa-color-mix-active));
        background-color: color-mix(in oklab, var(--wa-color-neutral-fill-normal), var(--wa-color-mix-active));
      }
    }
  }

  :host([appearance='filled-outlined']) {
    .number-field {
      background-color: var(--wa-color-neutral-fill-quiet);
      border-color: var(--wa-form-control-border-color);
    }

    .stepper {
      color: var(--wa-color-neutral-on-quiet);

      @media (hover: hover) {
        &:hover:not(:disabled) {
          color: var(--wa-color-neutral-on-normal);
          background-color: var(--wa-color-neutral-fill-normal);
        }
      }

      &:active:not(:disabled) {
        color: color-mix(in oklab, var(--wa-color-neutral-on-normal), var(--wa-color-mix-active));
        background-color: color-mix(in oklab, var(--wa-color-neutral-fill-normal), var(--wa-color-mix-active));
      }
    }
  }

  :host([pill]) {
    .number-field,
    .stepper {
      border-radius: var(--wa-border-radius-pill);
    }
  }

  .number-field {
    /* Show autofill styles over the entire number field, not just the native <input> */
    &:has(:autofill),
    &:has(:-webkit-autofill) {
      background-color: var(--wa-color-brand-fill-quiet) !important;
    }

    input {
      flex: auto;
      height: 100%;
      width: auto;
      min-width: 0;
      margin: 0;
      padding: 0 var(--wa-form-control-padding-inline);
      outline: none;
      box-shadow: none;
      border: none;
      background-color: transparent;
      font: inherit;
      transition: inherit;
      cursor: inherit;
      -webkit-appearance: none;

      /* Center-align and use tabular numbers for better alignment */
      text-align: center;
      font-variant-numeric: tabular-nums;

      /* Hide the number spinners in Firefox */
      -moz-appearance: textfield;

      /* Hide the number spinners in Chrome/Safari */
      &::-webkit-outer-spin-button,
      &::-webkit-inner-spin-button {
        -webkit-appearance: none;
        margin: 0;
        display: none;
      }

      /* Turn off Safari's autofill styles */
      &:-webkit-autofill,
      &:-webkit-autofill:hover,
      &:-webkit-autofill:focus,
      &:-webkit-autofill:active {
        -webkit-background-clip: text;
        background-color: transparent;
        -webkit-text-fill-color: inherit;
      }
    }

    &:autofill {
      &,
      &:hover,
      &:focus,
      &:active {
        box-shadow: none;
        caret-color: var(--wa-form-control-value-color);
      }
    }

    &::placeholder {
      color: var(--wa-form-control-placeholder-color);
      user-select: none;
      -webkit-user-select: none;
    }

    &:focus {
      outline: none;
    }
  }

  .start,
  .end {
    display: inline-flex;
    flex: 1;
    align-items: center;
    cursor: default;

    &::slotted(wa-icon) {
      color: var(--wa-color-neutral-on-quiet);
    }
  }

  .start {
    justify-content: start;
    margin-inline-start: var(--wa-form-control-padding-inline);
  }

  .end {
    justify-content: end;
    margin-inline-end: var(--wa-form-control-padding-inline);
  }

  /*
   * Steppers - horizontal layout with minus on start, plus on end
   */

  .stepper {
    display: flex;
    align-items: center;
    justify-content: center;
    aspect-ratio: 1 / 1;
    height: calc(100% - var(--wa-form-control-border-width) * 2);
    flex: 0 0 auto;
    border: none;
    border-radius: calc(var(--wa-form-control-border-radius) - var(--wa-form-control-border-width) * 2);
    background: transparent;
    cursor: pointer;
    margin: var(--wa-form-control-border-width);
    padding: 0;
    font-size: inherit;
    transition-property: background-color, color;
    transition-duration: var(--wa-transition-fast);
    transition-timing-function: var(--wa-transition-easing);

    &:disabled {
      opacity: 0.5;
      cursor: not-allowed;
    }

    &:focus {
      outline: none;
    }
  }

  :host([without-steppers]) .stepper {
    display: none;
  }
`;/*! Copyright 2026 Fonticons, Inc. - https://webawesome.com/license */var po=class extends E{constructor(){super(...arguments);this.assumeInteractionOn=["blur","input"],this.hasSlotController=new W(this,"hint","label"),this.localize=new B(this),this.title="",this._value=null,this.defaultValue=this.getAttribute("value")||null,this.size="m",this.appearance="outlined",this.pill=!1,this.label="",this.hint="",this.placeholder="",this.readonly=!1,this.required=!1,this.step=1,this.withoutSteppers=!1,this.inputmode="numeric",this.withLabel=!1,this.withHint=!1}static get validators(){return[...super.validators,Wo()]}get value(){if(this.valueHasChanged)return this._value;return this._value??this.defaultValue}set value(o){if(this._value===o)return;this.valueHasChanged=!0,this._value=o}handleSizeChange(){j(this.localName,this.size)}updateFormValue(o){if(o==null){this.setValue("",null);return}super.updateFormValue(o)}get isAtMin(){if(this.min===void 0)return!1;let o=parseFloat(this.value||"");return!isNaN(o)&&o<=this.min}get isAtMax(){if(this.max===void 0)return!1;let o=parseFloat(this.value||"");return!isNaN(o)&&o>=this.max}handleChange(o){this.value=this.input.value,this.relayNativeEvent(o,{bubbles:!0,composed:!0})}handleInput(){this.value=this.input.value}handleKeyDown(o){if(x0(o,this),o.key==="ArrowUp"||o.key==="ArrowDown")requestAnimationFrame(()=>{if(this.value!==this.input.value)this.value=this.input.value})}handleStepperPointerUp(o,i){if(this.disabled||this.readonly)return;let r=new InputEvent("beforeinput",{bubbles:!0,cancelable:!0,composed:!0});if(this.dispatchEvent(r),r.defaultPrevented)return;if(o==="up")this.input.stepUp();else this.input.stepDown();if(this.value!==this.input.value)this.value=this.input.value;if(this.dispatchEvent(new InputEvent("input",{bubbles:!0,composed:!0})),this.dispatchEvent(new Event("change",{bubbles:!0,composed:!0})),i.pointerType!=="touch")this.input.focus()}handleStepperPointerDown(o){if(o.pointerType==="touch")return;o.preventDefault(),this.input.focus()}updated(o){if(super.updated(o),o.has("value")||o.has("defaultValue")){if(this.input&&this.value&&this.input.value!==this.value)this._value=this.input.value;this.customStates.set("blank",!this.value)}}handleStepChange(){this.input.step=String(this.step),this.updateValidity()}focus(o){this.input.focus(o)}blur(){this.input.blur()}select(){this.input.select()}stepUp(){if(this.input.stepUp(),this.value!==this.input.value)this.value=this.input.value}stepDown(){if(this.input.stepDown(),this.value!==this.input.value)this.value=this.input.value}formResetCallback(){this.value=this.defaultValue,super.formResetCallback()}render(){let o=this.hasSlotController.test("label","withLabel"),i=this.hasSlotController.test("hint","withHint"),r=this.label?!0:!!o,a=this.hint?!0:!!i;return h`
      <label
        part="form-control-label label"
        class=${Z({label:!0,"has-label":r})}
        for="input"
        aria-hidden=${r?"false":"true"}
      >
        <slot name="label">${this.label}</slot>
      </label>

      <div part="base number-input" class="number-field">
        ${!this.withoutSteppers?h`
              <button
                part="stepper stepper-decrement"
                class="stepper stepper-decrement"
                type="button"
                tabindex="-1"
                aria-label=${this.localize.term("decrement")}
                ?disabled=${this.disabled||this.readonly||this.isAtMin}
                @pointerdown=${this.handleStepperPointerDown}
                @pointerup=${(n)=>this.handleStepperPointerUp("down",n)}
              >
                <slot name="decrement-icon">
                  <wa-icon name="minus" library="system"></wa-icon>
                </slot>
              </button>
            `:""}

        <slot name="start" part="start" class="start"></slot>

        <input
          part="input"
          id="input"
          class="control"
          type="number"
          inputmode=${Q(this.inputmode)}
          title=${this.title}
          name=${Q(this.name)}
          ?disabled=${this.disabled}
          ?readonly=${this.readonly}
          ?required=${this.required}
          placeholder=${Q(this.placeholder)}
          min=${Q(this.min)}
          max=${Q(this.max)}
          step=${Q(this.step)}
          .value=${Oo(this.value??"")}
          autocomplete=${Q(this.autocomplete)}
          ?autofocus=${this.autofocus}
          enterkeyhint=${Q(this.enterkeyhint)}
          aria-describedby="hint"
          @change=${this.handleChange}
          @input=${this.handleInput}
          @keydown=${this.handleKeyDown}
        />

        <slot name="end" part="end" class="end"></slot>

        ${!this.withoutSteppers?h`
              <button
                part="stepper stepper-increment"
                class="stepper stepper-increment"
                type="button"
                tabindex="-1"
                aria-label=${this.localize.term("increment")}
                ?disabled=${this.disabled||this.readonly||this.isAtMax}
                @pointerdown=${this.handleStepperPointerDown}
                @pointerup=${(n)=>this.handleStepperPointerUp("up",n)}
              >
                <slot name="increment-icon">
                  <wa-icon name="plus" library="system"></wa-icon>
                </slot>
              </button>
            `:""}
      </div>

      <slot
        id="hint"
        part="hint"
        name="hint"
        class=${Z({"has-slotted":a})}
        aria-hidden=${a?"false":"true"}
        >${this.hint}</slot
      >
    `}};po.css=[I,go,I3];po.shadowRootOptions={...E.shadowRootOptions,delegatesFocus:!0};f([Y("input")],po.prototype,"input",2);f([t()],po.prototype,"title",2);f([J()],po.prototype,"value",1);f([t({attribute:"value",reflect:!0})],po.prototype,"defaultValue",2);f([t({reflect:!0})],po.prototype,"size",2);f([v("size")],po.prototype,"handleSizeChange",1);f([t({reflect:!0})],po.prototype,"appearance",2);f([t({type:Boolean,reflect:!0})],po.prototype,"pill",2);f([t()],po.prototype,"label",2);f([t({attribute:"hint"})],po.prototype,"hint",2);f([t()],po.prototype,"placeholder",2);f([t({type:Boolean,reflect:!0})],po.prototype,"readonly",2);f([t({type:Boolean,reflect:!0})],po.prototype,"required",2);f([t({type:Number})],po.prototype,"min",2);f([t({type:Number})],po.prototype,"max",2);f([t()],po.prototype,"step",2);f([t({attribute:"without-steppers",type:Boolean})],po.prototype,"withoutSteppers",2);f([t()],po.prototype,"autocomplete",2);f([t({type:Boolean})],po.prototype,"autofocus",2);f([t()],po.prototype,"enterkeyhint",2);f([t()],po.prototype,"inputmode",2);f([t({attribute:"with-label",type:Boolean})],po.prototype,"withLabel",2);f([t({attribute:"with-hint",type:Boolean})],po.prototype,"withHint",2);f([v("step",{waitUntilFirstUpdate:!0})],po.prototype,"handleStepChange",1);po=f([$("wa-number-input")],po);po.disableWarning?.("change-in-update");/*! Copyright 2026 Fonticons, Inc. - https://webawesome.com/license *//*! Copyright 2026 Fonticons, Inc. - https://webawesome.com/license */var S3=F`
  :host {
    --current-text-color: var(--wa-color-brand-on-loud);

    display: block;
    color: var(--wa-color-text-normal);
    -webkit-user-select: none;
    user-select: none;

    position: relative;
    display: flex;
    align-items: center;
    font: inherit;
    padding: 0.5em 1em 0.5em 0.25em;
    border-radius: var(--wa-border-radius-s);
    line-height: var(--wa-line-height-condensed);
    transition: var(--wa-transition-fast) background-color var(--wa-transition-easing);
    cursor: pointer;
  }

  :host(:focus) {
    outline: none;
  }

  @media (hover: hover) {
    :host(:not(:state(disabled), :state(current)):is(:state(hover), :hover)) {
      background-color: var(--wa-color-neutral-fill-normal);
      color: var(--wa-color-neutral-on-normal);
    }
  }

  :host(:state(current)),
  :host(:state(disabled):state(current)) {
    background-color: var(--wa-form-control-activated-color);
    color: var(--current-text-color);
    opacity: 1;
  }

  :host(:state(disabled)) {
    outline: none;
    opacity: 0.5;
    cursor: not-allowed;
  }

  .label {
    flex: 1 1 auto;
    display: inline-block;
  }

  .check {
    flex: 0 0 auto;
    display: flex;
    align-items: center;
    justify-content: center;
    font-size: var(--wa-font-size-smaller);
    visibility: hidden;
    width: 2em;
  }

  :host(:state(selected)) .check {
    visibility: visible;
  }

  .start,
  .end {
    flex: 0 0 auto;
    display: flex;
    align-items: center;
  }

  .start::slotted(*) {
    margin-inline-end: 0.5em;
  }

  .end::slotted(*) {
    margin-inline-start: 0.5em;
  }

  @media (forced-colors: active) {
    :host(:hover:not([aria-disabled='true'])) {
      outline: dashed 1px SelectedItem;
      outline-offset: -1px;
    }
  }
`;/*! Copyright 2026 Fonticons, Inc. - https://webawesome.com/license */function Er(o,i=0){if(!o||!globalThis.Node)return"";if(typeof o[Symbol.iterator]==="function")return(Array.isArray(o)?o:[...o]).map((n)=>Er(n,--i)).join("");let r=o;if(r.nodeType===Node.TEXT_NODE)return r.textContent??"";if(r.nodeType===Node.ELEMENT_NODE){let a=r;if(a.hasAttribute("slot")||a.matches("style, script"))return"";if(a instanceof HTMLSlotElement){let n=a.assignedNodes({flatten:!0});if(n.length>0)return Er(n,--i)}return i>-1?Er(a,--i):a.textContent??""}return r.hasChildNodes()?Er(r.childNodes,--i):""}var Oi=class extends L{constructor(){super(...arguments);this.localize=new B(this),this.cachedDefaultLabel="",this.isInitialized=!1,this.isDefaultLabelDirty=!0,this.current=!1,this.value="",this.disabled=!1,this.selected=!1,this.defaultSelected=!1,this._label="",this.handleHover=(o)=>{if(o.type==="mouseenter")this.customStates.set("hover",!0);else if(o.type==="mouseleave")this.customStates.set("hover",!1)}}set label(o){let i=this._label;if(this._label=o||"",this._label!==i)this.requestUpdate("label",i)}get label(){if(this._label)return this._label;return this.defaultLabel}get defaultLabel(){if(this.isDefaultLabelDirty||!this.cachedDefaultLabel)this.updateDefaultLabel();return this.cachedDefaultLabel}connectedCallback(){super.connectedCallback(),this.setAttribute("role","option"),this.setAttribute("aria-selected","false"),this.addEventListener("mouseenter",this.handleHover),this.addEventListener("mouseleave",this.handleHover)}disconnectedCallback(){super.disconnectedCallback(),this.removeEventListener("mouseenter",this.handleHover),this.removeEventListener("mouseleave",this.handleHover)}handleDefaultSlotChange(){if(this.isDefaultLabelDirty=!0,this.isInitialized)customElements.whenDefined("wa-select").then(()=>{let o=this.closest("wa-select");if(o)o.handleDefaultSlotChange?.()}),customElements.whenDefined("wa-combobox").then(()=>{let o=this.closest("wa-combobox");if(o)o.handleDefaultSlotChange?.()});else this.isInitialized=!0}willUpdate(o){if(o.has("defaultSelected")){if(this.didSSR&&this.hasUpdated||!this.didSSR)this.syncDefaultSelected()}super.willUpdate(o)}syncDefaultSelected(){if("closest"in this){if(!this.closest("wa-combobox, wa-select")?.hasInteracted){if(this.defaultSelected){let o=this.selected;this.selected=this.defaultSelected,this.requestUpdate("selected",o)}}}}updated(o){if(o.has("disabled"))this.setAttribute("aria-disabled",this.disabled?"true":"false"),this.customStates.set("disabled",this.disabled);if(o.has("selected"))this.setAttribute("aria-selected",this.selected?"true":"false"),this.customStates.set("selected",this.selected);if(o.has("value")){if(typeof this.value!=="string")this.value=String(this.value);this.handleDefaultSlotChange()}if(o.has("current"))this.customStates.set("current",this.current);super.updated(o)}async firstUpdated(o){if(super.firstUpdated(o),this.didSSR&&!this.hasUpdated)await this.updateComplete,this.syncDefaultSelected();else this.syncDefaultSelected();if(this.selected&&!this.defaultSelected){let i=this.closest("wa-select, wa-combobox");if(i&&!i.hasInteracted)await customElements.whenDefined(i?.localName),await i.updateComplete,i.selectionChanged?.()}}updateDefaultLabel(){let o=this.cachedDefaultLabel;this.cachedDefaultLabel=Er(this).trim(),this.isDefaultLabelDirty=!1;let i=this.cachedDefaultLabel!==o;if(!this._label&&i)this.requestUpdate("label",o);return i}render(){let o=this.selected;if(this.didSSR&&!this.hasUpdated)return this.updateComplete.then(()=>{this.requestUpdate()}),wo;return h`
      ${o?h`<wa-icon
            part="checked-icon"
            class="check"
            name="check"
            library="system"
            variant="solid"
            aria-hidden="true"
          ></wa-icon>`:h`<span part="checked-icon" class="check" aria-hidden="true"></span>`}
      <slot part="start" name="start" class="start"></slot>
      <slot part="label" class="label" @slotchange=${this.handleDefaultSlotChange}></slot>
      <slot part="end" name="end" class="end"></slot>
    `}};Oi.css=S3;f([Y(".label")],Oi.prototype,"defaultSlot",2);f([J()],Oi.prototype,"current",2);f([t({reflect:!0})],Oi.prototype,"value",2);f([t({type:Boolean})],Oi.prototype,"disabled",2);f([t({type:Boolean,attribute:!1})],Oi.prototype,"selected",2);f([t({type:Boolean,attribute:"selected"})],Oi.prototype,"defaultSelected",2);f([t()],Oi.prototype,"label",1);Oi=f([$("wa-option")],Oi);/*! Copyright 2026 Fonticons, Inc. - https://webawesome.com/license *//*! Copyright 2026 Fonticons, Inc. - https://webawesome.com/license */var R3=class extends Event{constructor(){super("wa-complete",{bubbles:!0,cancelable:!0,composed:!0})}};/*! Copyright 2026 Fonticons, Inc. - https://webawesome.com/license */var C3=F`
  :host(:focus) {
    outline: none;
  }

  /* Segments container */
  .segments {
    position: relative;
    /* Codes read left-to-right regardless of locale — keep segment order and caret movement LTR
       even when the surrounding page is RTL. */
    direction: ltr;
    display: inline-flex;
    align-items: center;
    align-self: start;
    gap: var(--segment-gap, var(--wa-space-xs));
    cursor: text;
    /* Never grow past the host's available width — long values or large segment sizes scroll
       horizontally instead of overflowing the page. */
    max-width: 100%;
    overflow-x: auto;
    scrollbar-width: none;
    /* Setting overflow-x forces overflow-y to also compute to non-visible, which would otherwise
       clip the focus ring's bleed around the active segment — above/below for any segment, and
       left/right for the first/last segment specifically. Reserve room for it with padding, then
       cancel the layout impact with an equal negative margin on both axes. */
    padding: calc(var(--wa-focus-ring-offset) + var(--wa-focus-ring-width));
    margin: calc(-1 * (var(--wa-focus-ring-offset) + var(--wa-focus-ring-width)));
  }

  .segments::-webkit-scrollbar {
    width: 0;
    height: 0;
  }

  :host(:state(disabled)) .segments {
    cursor: not-allowed;
    opacity: 0.5;
  }

  :host(:state(readonly)) .segments {
    cursor: default;
  }

  /* Focus ring on the active segment, and on every segment in a multi-character selection */
  .segments:focus-within .segment--active,
  .segments:focus-within .segment--selected {
    outline-color: var(--wa-color-focus);
  }

  /* Readonly has no per-segment active/selected state (see render()), so every segment rings
     at once to show the control as a whole has focus. */
  :host(:state(readonly)) .segments:focus-within .segment {
    outline-color: var(--wa-color-focus);
  }

  /* Hidden real input — off-screen but focusable.
     Chromium mishandles typing over a full selection (drops the inserted character) when a
     text input has zero layout size, so this stays a non-zero 1x1px box instead of 0x0. */
  .hidden-input {
    position: absolute;
    width: 1px;
    height: 1px;
    opacity: 0;
    overflow: hidden;
    pointer-events: none;
    border: none;
    padding: 0;
    margin: 0;
  }

  /* Individual visual segment */
  .segment {
    display: inline-flex;
    align-items: center;
    justify-content: center;
    flex-shrink: 0;
    width: var(--segment-size, 2.5em);
    height: var(--segment-size, 2.5em);
    border-radius: var(--segment-border-radius, var(--wa-form-control-border-radius));
    font-size: 1em;
    font-family: inherit;
    font-variant-numeric: tabular-nums;
    position: relative;
    user-select: none;
    outline: var(--wa-focus-ring-style) var(--wa-focus-ring-width) transparent;
    outline-offset: var(--wa-focus-ring-offset);
    transition:
      background-color var(--wa-transition-normal),
      border-color var(--wa-transition-normal),
      outline-color var(--wa-transition-fast);
    transition-timing-function: var(--wa-transition-easing);
  }

  /* Blinking caret in the active segment */
  .caret {
    position: absolute;
    width: 1.5px;
    height: 60%;
    background-color: currentColor;
    animation: wa-otp-caret-blink 1s step-end infinite;
  }

  @keyframes wa-otp-caret-blink {
    0%,
    100% {
      opacity: 1;
    }
    50% {
      opacity: 0;
    }
  }

  /* Literal separator character between segment groups */
  .segment-literal {
    display: inline-block;
    flex-shrink: 0;
    color: var(--wa-color-text-quiet);
    white-space: pre;
    user-select: none;
  }

  /* Appearance: outlined (default) */
  :host([appearance='outlined']) .segment,
  :host(:not([appearance])) .segment {
    background-color: var(--wa-form-control-background-color);
    border: var(--wa-form-control-border-width) var(--wa-form-control-border-style) var(--wa-form-control-border-color);
  }

  /* Appearance: filled */
  :host([appearance='filled']) .segment {
    background-color: var(--wa-color-neutral-fill-quiet);
    border: var(--wa-form-control-border-width) var(--wa-form-control-border-style) transparent;
  }

  /* Appearance: filled-outlined */
  :host([appearance='filled-outlined']) .segment {
    background-color: var(--wa-color-neutral-fill-quiet);
    border: var(--wa-form-control-border-width) var(--wa-form-control-border-style) var(--wa-form-control-border-color);
  }

  /* Appearance: contained */
  :host([appearance='contained']) .segments {
    gap: 0;
    border: var(--wa-form-control-border-width) var(--wa-form-control-border-style) var(--wa-form-control-border-color);
    border-radius: var(--segment-border-radius, var(--wa-form-control-border-radius));
    background-color: var(--wa-form-control-background-color);
    overflow: hidden;
    /* The focus ring is drawn inward here (see outline-offset below), so there's no outward bleed
       to reserve room for. .segments is also the visible bordered box in this appearance, so the
       padding/negative-margin bleed trick from the base rule would visibly shift and inflate it. */
    padding: 0;
    margin: 0;
  }

  :host([appearance='contained']) .segment {
    border: none;
    border-radius: 0;
    /* Contained segments sit flush with zero gap and have no border of their own, so a ring drawn
       outside the segment edge (the default, positive offset) bleeds into the neighboring segment.
       Draw it inward instead so it stays within this segment's own box. */
    outline-offset: calc(-1 * var(--wa-focus-ring-width));
  }

  /* Dividers between contained segments */
  :host([appearance='contained']) .segment + .segment,
  :host([appearance='contained']) .segment-literal + .segment {
    border-left: var(--wa-form-control-border-width) var(--wa-form-control-border-style)
      var(--wa-form-control-border-color);
  }

  /* ── Active segment (where next char will go), and every segment in a multi-character
     selection (e.g. from Cmd/Ctrl+A) — same border + focus-ring treatment for both.
     :host(...) wrapper matches the specificity of the appearance rules above so this
     border-color isn't silently lost to the cascade. ── */
  :host(:not(:state(readonly))) .segment--active,
  :host(:not(:state(readonly))) .segment--selected {
    border-color: var(--wa-color-focus);
  }

  /* Masked filled character, and the empty-segment hint shown when with-mask is set, both draw
     --mask-char via a pseudo-element instead of real text, so a masked value never touches the
     DOM as plain text (nothing to find via view-source or copy). */
  .segment--masked::before,
  .segment--mask-hint::before {
    content: var(--mask-char, '•');
  }

  .segment--mask-hint::before {
    opacity: 0.35;
  }
`;/*! Copyright 2026 Fonticons, Inc. - https://webawesome.com/license */var zo=class extends E{constructor(){super(...arguments);this.hasSlotController=new W(this,"label","hint"),this._focused=!1,this._activeIndex=-1,this._selectionAnchor=-1,this._pendingClickIndex=null,this._value="",this.defaultValue=this.getAttribute("value")??null,this.length=6,this.appearance="outlined",this.type="numeric",this.mask=!1,this.case="preserve",this.size="m",this.label="",this.hint="",this.format="",this.autocomplete="one-time-code",this.required=!1,this.readonly=!1,this.autosubmit=!1,this.autofocus=!1,this.withMask=!1,this.assumeInteractionOn=["blur","input"],this._lastChangeValue=""}static get validators(){return M?[]:[...super.validators,Wo()]}get validationTarget(){return this.segmentsContainer}get hasSelection(){return this._selectionAnchor>=0&&this._selectionAnchor!==this._activeIndex}setCaretIndex(o){this._activeIndex=o,this._selectionAnchor=-1}get value(){return this._value}set value(o){let i=this.filterAndTransform(o).slice(0,this.effectiveLength);if(this._value===i)return;let r=this._value;if(this._value=i,this.setValue(i),this.input)this.input.value=i;if(this._focused)this.setCaretIndex(Math.min(i.length,this.effectiveLength-1));this.requestUpdate("value",r)}handleSizeChange(){j(this.localName,this.size)}get effectiveLength(){return this.format?[...this.format].filter((o)=>o==="#").length:this.length}get parsedFormat(){return[...this.format||"#".repeat(this.length)].map((i)=>({type:i==="#"?"segment":"separator",char:i}))}filterAndTransform(o){let i=o;if(this.type==="numeric")i=i.replace(/\D/g,"");else if(this.type==="alpha")i=i.replace(/[^a-zA-Z]/g,"");else if(this.type==="alphanumeric")i=i.replace(/[^a-zA-Z0-9]/g,"");if(this.case==="upper")i=i.toUpperCase();else if(this.case==="lower")i=i.toLowerCase();return i}willUpdate(o){if(super.willUpdate(o),!this.hasUpdated){let i=this.filterAndTransform(this.defaultValue??"").slice(0,this.effectiveLength);if(this._value!==i)this._value=i,this.setValue(i),this._lastChangeValue=i}if(this.hasUpdated&&(o.has("type")||o.has("case")||o.has("length")||o.has("format"))){let i=this.filterAndTransform(this._value).slice(0,this.effectiveLength);if(i!==this._value){if(this._value=i,this.setValue(i),this.input)this.input.value=i}}}updated(o){super.updated(o);let i=this._value;if(this.customStates.set("--blank",i.length===0),this.customStates.set("--filled",i.length===this.effectiveLength),this.customStates.set("readonly",this.readonly),o.has("value")||o.has("required")||o.has("length")||o.has("format"))this.updateValidity();this.syncCursor();let r=this.segmentsContainer?.querySelector(".segment--active, .segment--selected");if(r&&this.segmentsContainer)L0(r,this.segmentsContainer,"horizontal","auto")}syncCursor(){if(!this._focused||!this.input||this._activeIndex<0)return;if(this.hasSelection)return;let o=this._value.length,i=Math.min(this._activeIndex,o),r=this._activeIndex<o?i+1:i;this.input.setSelectionRange(i,r)}formResetCallback(){super.formResetCallback();let o=this.filterAndTransform(this.defaultValue??"").slice(0,this.effectiveLength),i=this._value;if(this._value=o,this.setValue(o),this._lastChangeValue=o,this.input)this.input.value=o;this.requestUpdate("value",i)}handleInput(o){if(this.readonly)return;let i=o.target,r=i.value,a=i.selectionStart??r.length,n=this.filterAndTransform(r).slice(0,this.effectiveLength),w=a;if(r!==n){i.value=n;let m=r.slice(0,a);w=Math.min(this.filterAndTransform(m).length,this.effectiveLength)}this.setCaretIndex(Math.min(w,this.effectiveLength-1));let b=this._value.length,c=this._value;this._value=n,this.setValue(n),this.maybeDispatchComplete(n.length===this.effectiveLength&&b<this.effectiveLength),this.requestUpdate("value",c)}maybeDispatchComplete(o){if(!o)return;let i=this.dispatchEvent(new R3);if(this.autosubmit&&i)setTimeout(()=>T1(this))}handleKeyDown(o){if(o.isComposing)return;let i=this.effectiveLength;if(o.key==="Enter")x0(o,this);else if(this.readonly){if(o.key==="Backspace"||o.key==="Delete")o.preventDefault()}else if(o.key==="ArrowRight")if(o.preventDefault(),this.hasSelection)this.setCaretIndex(Math.min(Math.max(this._selectionAnchor,this._activeIndex),i-1));else this._activeIndex=Math.min(this._activeIndex+1,i-1);else if(o.key==="ArrowLeft")if(o.preventDefault(),this.hasSelection)this.setCaretIndex(Math.max(Math.min(this._selectionAnchor,this._activeIndex),0));else this._activeIndex=Math.max(this._activeIndex-1,0);else if(o.key==="Backspace")if(o.preventDefault(),this.hasSelection){let r=Math.min(this._selectionAnchor,this._activeIndex),a=Math.max(this._selectionAnchor,this._activeIndex);this.spliceValue(r,a),this.setCaretIndex(Math.min(r,i-1))}else{let r=this._activeIndex;if(r<this._value.length)this.spliceValue(r);this.setCaretIndex(Math.max(r-1,0))}else if(o.key==="Delete")if(o.preventDefault(),this.hasSelection){let r=Math.min(this._selectionAnchor,this._activeIndex),a=Math.max(this._selectionAnchor,this._activeIndex);this.spliceValue(r,a),this.setCaretIndex(Math.min(r,i-1))}else{let r=this._activeIndex;if(r<this._value.length)this.spliceValue(r)}}spliceValue(o,i=o+1){let r=this._value.slice(0,o)+this._value.slice(i),a=this._value;if(this._value=r,this.setValue(r),this.input)this.input.value=r;this.dispatchEvent(new InputEvent("input",{bubbles:!0,composed:!0})),this.requestUpdate("value",a)}handlePaste(o){if(o.preventDefault(),this.readonly)return;let i=o.clipboardData?.getData("text/plain")??"",r=this.filterAndTransform(i);if(!r)return;let a=this._activeIndex,n=this.effectiveLength,w=Array.from({length:n},(d,s)=>this._value[s]??"");for(let d=0;d<r.length&&a+d<n;d++)w[a+d]=r[d];let b=n-1;while(b>=0&&!w[b])b--;let c=b>=0?w.slice(0,b+1).join(""):"",m=this._value.length,p=this._value;if(this._value=c,this.setValue(c),this.input)this.input.value=c;this.setCaretIndex(Math.min(a+r.length,n-1)),this.dispatchEvent(new InputEvent("input",{bubbles:!0,composed:!0})),this.maybeDispatchComplete(c.length===n&&m<n),this.requestUpdate("value",p)}handleFocus(){this._focused=!0,this.setCaretIndex(this._pendingClickIndex??Math.min(this._value.length,this.effectiveLength-1))}handleSelect(){if(!this.input)return;let o=this.input.selectionStart??0,i=this.input.selectionEnd??o;if(i-o>1)this._selectionAnchor=o,this._activeIndex=i;else if(this._selectionAnchor!==-1)this._selectionAnchor=-1}handleBlur(){if(this._focused=!1,this.setCaretIndex(-1),this._value!==this._lastChangeValue)this._lastChangeValue=this._value,this.dispatchEvent(new Event("change",{bubbles:!0,composed:!0}))}segmentIndexAt(o){let i=o.closest('[part~="segment"]');if(!i||!this.shadowRoot)return null;let a=[...this.shadowRoot.querySelectorAll('[part~="segment"]')].indexOf(i);return a>=0?Math.min(a,this._value.length):null}handleSegmentsPointerDown(o){if(this.disabled)return;this._pendingClickIndex=this.segmentIndexAt(o.target)}handleSegmentsClick(o){if(this.disabled)return;this.input?.focus();let i=this.segmentIndexAt(o.target);if(i!==null)this.setCaretIndex(i);this._pendingClickIndex=null}clear(){this.value="",this.dispatchEvent(new v0),this.focus()}focus(o){this.input?.focus(o)}blur(){this.input?.blur()}select(){this.input?.select()}render(){let o=this.hasSlotController.test("label"),i=this.hasSlotController.test("hint"),r=this.label?!0:!!o,a=this.hint?!0:!!i,n=[...this._value],w=this.parsedFormat,b=this._activeIndex,c=this.hasSelection?[Math.min(this._selectionAnchor,b),Math.max(this._selectionAnchor,b)]:null,m=0;return h`
      <label
        id="label"
        part="label"
        class=${Z({label:!0,"has-label":r})}
        for="hidden-input"
        aria-hidden=${r?"false":"true"}
      >
        <slot name="label">${this.label}</slot>
      </label>

      <div
        part="segments"
        class="segments"
        role="group"
        aria-labelledby="label"
        @pointerdown=${this.handleSegmentsPointerDown}
        @click=${this.handleSegmentsClick}
      >
        ${w.map((p)=>{if(p.type==="separator")return h`<span part="segment-literal" class="segment-literal" aria-hidden="true">${p.char}</span>`;let d=m++,s=n[d]??"",z=Boolean(s),u=!this.readonly&&c!==null&&d>=c[0]&&d<c[1],y=!this.readonly&&c===null&&d===b,g=z&&this.mask;return h`
            <div
              part="segment"
              class=${Z({segment:!0,"segment--active":y,"segment--selected":u,"segment--filled":z,"segment--masked":g,"segment--mask-hint":!z&&this.withMask})}
              aria-hidden="true"
            >
              ${g?"":s} ${y&&!s?h`<span class="caret"></span>`:""}
            </div>
          `})}

        <input
          id="hidden-input"
          class="hidden-input"
          type="text"
          .value=${Oo(this._value)}
          minlength=${this.effectiveLength}
          autocomplete=${this.autocomplete}
          inputmode=${this.type==="numeric"?"numeric":"text"}
          aria-describedby="hint"
          ?required=${this.required}
          ?disabled=${this.disabled}
          ?readonly=${this.readonly}
          ?autofocus=${this.autofocus}
          @input=${this.handleInput}
          @keydown=${this.handleKeyDown}
          @paste=${this.handlePaste}
          @focus=${this.handleFocus}
          @blur=${this.handleBlur}
          @select=${this.handleSelect}
        />
      </div>

      <slot
        id="hint"
        part="hint"
        name="hint"
        class=${Z({hint:!0,"has-slotted":a})}
        aria-hidden=${a?"false":"true"}
        >${this.hint}</slot
      >
    `}};zo.shadowRootOptions={...E.shadowRootOptions,delegatesFocus:!0};zo.css=[I,go,C3];f([Y(".hidden-input")],zo.prototype,"input",2);f([Y(".segments")],zo.prototype,"segmentsContainer",2);f([J()],zo.prototype,"_focused",2);f([J()],zo.prototype,"_activeIndex",2);f([J()],zo.prototype,"_selectionAnchor",2);f([t({attribute:"value",reflect:!0})],zo.prototype,"defaultValue",2);f([t({type:Number,reflect:!0})],zo.prototype,"length",2);f([t({reflect:!0})],zo.prototype,"appearance",2);f([t({reflect:!0})],zo.prototype,"type",2);f([t({type:Boolean,reflect:!0})],zo.prototype,"mask",2);f([t({reflect:!0})],zo.prototype,"case",2);f([t({reflect:!0})],zo.prototype,"size",2);f([v("size")],zo.prototype,"handleSizeChange",1);f([t()],zo.prototype,"label",2);f([t()],zo.prototype,"hint",2);f([t()],zo.prototype,"format",2);f([t({reflect:!0})],zo.prototype,"autocomplete",2);f([t({type:Boolean,reflect:!0})],zo.prototype,"required",2);f([t({type:Boolean,reflect:!0})],zo.prototype,"readonly",2);f([t({type:Boolean,reflect:!0})],zo.prototype,"autosubmit",2);f([t({type:Boolean})],zo.prototype,"autofocus",2);f([t({type:Boolean,attribute:"with-mask",reflect:!0})],zo.prototype,"withMask",2);zo=f([$("wa-otp-input")],zo);zo.disableWarning?.("change-in-update");/*! Copyright 2026 Fonticons, Inc. - https://webawesome.com/license *//*! Copyright 2026 Fonticons, Inc. - https://webawesome.com/license */var P3=(o="768px")=>`
  @media screen and (width < ${o}) {
    [part~='navigation'] {
      display: none;
    }

    :host(:not([disable-navigation-toggle])) slot[name~='navigation-toggle'] {
      display: contents;
    }
  }
`;/*! Copyright 2026 Fonticons, Inc. - https://webawesome.com/license */var W3=F`
  :host {
    display: block;
    background-color: var(--wa-color-surface-default);
    box-sizing: border-box;
    min-height: 100%;
    --menu-width: auto;
    --main-width: 1fr;
    --aside-width: auto;
    --banner-height: 0px;
    --header-height: 0px;
    --subheader-height: 0px;
    --scroll-margin-top: calc(var(--header-height, 0px) + var(--subheader-height, 0px) + 0.5em);

    --banner-top: var(--banner-height);
    --header-top: var(--header-height);
    --subheader-top: var(--subheader-height);
  }

  slot[name]:not([name='skip-to-content'], [name='navigation-toggle'])::slotted(*) {
    display: flex;
    background-color: var(--wa-color-surface-default);
  }

  ::slotted([slot='banner']) {
    align-items: center;
    justify-content: center;
    gap: var(--wa-space-m);
    padding: var(--wa-space-xs) var(--wa-space-m);
  }

  ::slotted([slot='header']) {
    align-items: center;
    justify-content: space-between;
    flex-wrap: wrap;
    gap: var(--wa-space-m);
    padding: var(--wa-space-m);
    flex: auto;
  }

  ::slotted([slot='subheader']) {
    align-items: center;
    justify-content: space-between;
    flex-wrap: wrap;
    gap: var(--wa-space-m);
    padding: var(--wa-space-xs) var(--wa-space-m);
  }

  ::slotted([slot*='navigation']),
  ::slotted([slot='menu']),
  ::slotted([slot='aside']) {
    flex-direction: column;
    gap: var(--wa-space-m);
    padding: var(--wa-space-m);
  }

  ::slotted([slot='main-header']) {
    align-items: center;
    justify-content: space-between;
    flex-wrap: wrap;
    gap: var(--wa-space-m);
    padding: var(--wa-space-m) var(--wa-space-3xl);
  }

  slot:not([name]) {
    /* See #331 */
    &::slotted(main),
    &::slotted(section) {
      padding: var(--wa-space-3xl);
    }
  }

  ::slotted([slot='main-footer']),
  ::slotted([slot='footer']) {
    align-items: start;
    justify-content: space-between;
    flex-wrap: wrap;
    gap: var(--wa-space-m);
    padding: var(--wa-space-3xl);
  }

  :host([disable-sticky~='banner']) {
    --banner-top: 0px;
  }
  :host([disable-sticky~='header']) {
    --header-top: 0px;
  }
  :host([disable-sticky~='subheader']) {
    --subheader-top: 0px;
  }

  /* Nothing else depends on subheader-height. */
  :host([disable-sticky~='subheader']) {
  }
  :host([disable-sticky~='aside']) [part~='aside'],
  :host([disable-sticky~='menu']) [part~='menu'] {
    height: unset;
    max-height: unset;
  }

  :host([disable-sticky~='banner']) [part~='banner'],
  :host([disable-sticky~='header']) [part~='header'],
  :host([disable-sticky~='subheader']) [part~='subheader'],
  :host([disable-sticky~='aside']) [part~='aside'],
  :host([disable-sticky~='menu']) [part~='menu'] {
    position: static;
    overflow: unset;
    z-index: unset;
  }

  :host([disable-sticky~='aside']) [part~='aside'],
  :host([disable-sticky~='menu']) [part~='menu'] {
    height: auto;
    max-height: auto;
  }

  [part~='base'] {
    min-height: 100dvh;
    display: grid;
    grid-template-rows: repeat(3, minmax(0, auto)) minmax(0, 1fr) minmax(0, auto);
    grid-template-columns: 100%;
    width: 100%;
    grid-template-areas:
      'banner'
      'header'
      'subheader'
      'body'
      'footer';
  }

  /* Grid areas */
  [part~='banner'] {
    grid-area: banner;
  }
  [part~='header'] {
    grid-area: header;
  }
  [part~='subheader'] {
    grid-area: subheader;
  }
  [part~='menu'] {
    grid-area: menu;
  }
  [part~='body'] {
    grid-area: body;
  }
  [part~='main'] {
    grid-area: main;
  }
  [part~='aside'] {
    grid-area: aside;
  }
  [part~='footer'] {
    grid-area: footer;
  }

  /* Z-indexes */
  [part~='banner'],
  [part~='header'],
  [part~='subheader'] {
    position: sticky;
    z-index: 5;
  }
  [part~='banner'] {
    top: 0px;
  }
  [part~='header'] {
    top: var(--banner-top);

    /** Make the header flex so that you don't unexpectedly have the default toggle button appearing above a slotted div because block elements are fun. */
    display: flex;
    flex-wrap: wrap;
    align-items: center;
    justify-content: space-between;
  }
  [part~='subheader'] {
    top: calc(var(--header-top) + var(--banner-top));
  }
  [part~='body'] {
    display: grid;
    min-height: 100%;
    align-items: start;
    grid-template-columns: minmax(0, var(--menu-width)) minmax(0, var(--main-width)) minmax(0, var(--aside-width));
    grid-template-rows: minmax(0, 1fr);
    grid-template-areas: 'menu main aside';
  }
  [part~='main'] {
    display: grid;
    min-height: 100%;
    grid-template-columns: minmax(0, 1fr);
    grid-template-rows: minmax(0, auto) minmax(0, 1fr) minmax(0, auto);
    grid-template-areas:
      'main-header'
      'main-content'
      'main-footer';
  }
  [part~='main-header'] {
    grid-area: main-header;
  }
  [part~='main-content'] {
    grid-area: main-content;
  }
  [part~='main-footer'] {
    grid-area: main-footer;
  }

  .skip-to-content {
    position: absolute;
    top: var(--wa-space-m);
    left: var(--wa-space-m);
    z-index: 6;
    border-radius: var(--wa-corners-1x);
    background-color: var(--wa-color-surface-default);
    color: var(--wa-color-text-link);
    text-decoration: none;
    padding: var(--wa-space-s) var(--wa-space-m);
    box-shadow: var(--wa-shadow-l);
    outline: var(--wa-focus-ring);
    outline-offset: var(--wa-focus-ring-offset);
  }

  [part~='menu'],
  [part~='aside'] {
    position: sticky;
    top: calc(var(--banner-top) + var(--header-top) + var(--subheader-top));
    z-index: 4;
    min-height: 0;
    /** Allows the menu / aside to always be 100% of the height of the main content area */
    align-self: stretch;
    max-height: calc(100dvh - var(--header-top) - var(--banner-top) - var(--subheader-top));
    overflow: auto;
  }

  [part~='navigation'] {
    height: 100%;
    display: grid;
    grid-template-columns: minmax(0, 1fr);
    grid-template-rows: minmax(0, auto) minmax(0, 1fr) minmax(0, auto);
  }

  [part~='drawer']::part(dialog) {
    background-color: var(--wa-color-surface-default);
  }

  /* Set these on the slot because we don't always control the navigation-toggle since that may be slotted. */
  slot[name~='navigation-toggle'],
  :host([disable-navigation-toggle]) slot[name~='navigation-toggle'] {
    display: none;
  }

  /* Sometimes the media query in the viewport is stubborn in iframes. This is an extra check to make it behave properly. */
  :host(:not([disable-navigation-toggle])[view='mobile']) slot[name~='navigation-toggle'] {
    display: contents;
  }

  [part~='navigation-toggle'] {
    /* Use only a margin-inline-start because the slotted header is expected to have default padding
        so it looks really awkward if this sets a margin-inline-end and the slotted header has a padding-inline-start. */
    margin-inline-start: var(--wa-space-m);
  }
`;var l6=1;class A2 extends a0{constructor(o){super(o);if(this._value=wo,o.type!==Ho.CHILD)throw Error(`${this.constructor.directiveName}() can only be used in child bindings`)}render(o){if(o===wo||o==null)return this._templateResult=void 0,this._value=o;if(o===Jo)return o;if(typeof o!="string")throw Error(`${this.constructor.directiveName}() called with a non-string value`);if(o===this._value)return this._templateResult;this._value=o;let i=[o];return i.raw=i,this._templateResult={["_$litType$"]:this.constructor.resultType,strings:i,values:[]}}}A2.directiveName="unsafeHTML";A2.resultType=l6;var J0=h0(A2);function ei(o,i,r){return o?i(o):r?.(o)}/*! Copyright 2026 Fonticons, Inc. - https://webawesome.com/license */function v6(o,i=document.documentElement){if(!Number.isNaN(Number(o)))return Number(o);if(!window.CSS||!CSS.registerProperty){if(typeof o==="string"&&o.endsWith("px"))return parseFloat(o);return Number(o)||0}let r="--wa-length-resolver";if(!CSS.registerProperty.toString().includes(r))try{CSS.registerProperty({name:r,syntax:"<length>",inherits:!1,initialValue:"0px"})}catch(w){}let a=i.style.getPropertyValue(r);i.style.setProperty(r,o);let n=getComputedStyle(i)?.getPropertyValue(r);if(i.style.setProperty(r,a),n?.endsWith("px"))return parseFloat(n);return Number(n)||0}function x6(o){return Number.isNaN(Number(o))?o:`${o}px`}var So=class extends L{constructor(){super();if(this.headerResizeObserver=!M?this.slotResizeObserver("header"):null,this.subheaderResizeObserver=!M?this.slotResizeObserver("subheader"):null,this.bannerResizeObserver=!M?this.slotResizeObserver("banner"):null,this.footerResizeObserver=!M?this.slotResizeObserver("footer"):null,this.handleNavigationToggle=(o)=>{if(this.view==="desktop"){this.hideNavigation();return}let i=o.composedPath(),r=this.navigationToggleSlot;if(i.find((a)=>{return a.hasAttribute?.("data-toggle-nav")||a.assignedSlot===r||a===r}))o.preventDefault(),this.toggleNavigation()},this.view="desktop",this.navOpen=!1,this.mobileBreakpoint="768px",this.navigationPlacement="start",this.disableNavigationToggle=!1,this.pageResizeObserver=typeof ResizeObserver<"u"?new ResizeObserver((o)=>{requestAnimationFrame(()=>{for(let i of o)if(i.contentBoxSize){let a=i.borderBoxSize[0].inlineSize,n=this.view;if(a>=v6(this.mobileBreakpoint))this.view="desktop";else this.view="mobile";this.requestUpdate("view",n)}})}):null,this.updateNavigationToggleState=(o)=>{if(o){let a=o.target.name;if(!["navigation","navigation-header","navigation-footer"].includes(a))return}let i=Boolean(this.querySelector(":not([slot='navigation-toggle']) [data-toggle-nav]")),r=Boolean(this.querySelector('[slot="navigation"]'))||Boolean(this.querySelector('[slot="navigation-header"]'))||Boolean(this.querySelector('[slot="navigation-footer"]'));this.disableNavigationToggle=i||!r},!M)this.addEventListener("click",this.handleNavigationToggle)}slotResizeObserver(o){return new ResizeObserver((i)=>{requestAnimationFrame(()=>{for(let r of i)if(r.contentBoxSize){let a=r.borderBoxSize[0];this.style.setProperty(`--${o}-height`,`${Math.round(a.blockSize)}px`)}})})}updated(o){if(o.has("view"))this.hideNavigation();super.updated(o)}connectedCallback(){if(super.connectedCallback(),!M)setTimeout(()=>{requestAnimationFrame(()=>{this.pageResizeObserver?.observe(this),this.headerResizeObserver?.observe(this.header),this.subheaderResizeObserver?.observe(this.subheader),this.bannerResizeObserver?.observe(this.banner),this.footerResizeObserver?.observe(this.footer)})})}visiblePixelsInViewport(o){if(!o)return null;let i=o.clientHeight,r=window.innerHeight,a=o.getBoundingClientRect?.();if(!a)return null;let{top:n,bottom:w}=a;return Math.max(0,n>0?Math.min(i,r-n):Math.min(w,r))}firstUpdated(o){if(!document.getElementById("main-content")){let i=document.createElement("div");i.id="main-content",i.slot="skip-to-content-target",this.prepend(i)}this.shadowRoot.addEventListener("slotchange",this.updateNavigationToggleState),this.updateNavigationToggleState(),super.firstUpdated(o)}disconnectedCallback(){super.disconnectedCallback(),this.pageResizeObserver?.unobserve(this),this.headerResizeObserver?.unobserve(this.header),this.subheaderResizeObserver?.unobserve(this.subheader),this.footerResizeObserver?.unobserve(this.footer),this.bannerResizeObserver?.unobserve(this.banner)}showNavigation(){this.navOpen=!0}hideNavigation(){this.navOpen=!1}toggleNavigation(){this.navOpen=!this.navOpen}render(){return h`
      <a href="#main-content" part="skip-to-content" class="wa-visually-hidden">
        <slot name="skip-to-content">Skip to content</slot>
      </a>

      <!-- unsafeHTML needed for SSR until this is solved: https://github.com/lit/lit/issues/4696 -->
      ${J0(`
        <style id="mobile-styles">
          ${P3(x6(this.mobileBreakpoint))}
        </style>
      `)}

      <div class="base" part="base page">
        <div class="banner" part="banner">
          <slot name="banner"></slot>
        </div>
        <div class="header" part="header">
          <slot name="navigation-toggle">
            <wa-button part="navigation-toggle" size="s" appearance="plain" variant="neutral">
              <slot name="navigation-toggle-icon">
                <wa-icon name="bars" part="navigation-toggle-icon" label="Toggle navigation drawer"></wa-icon>
              </slot>
            </wa-button>
          </slot>
          <slot name="header"></slot>
        </div>
        <div class="subheader" part="subheader">
          <slot name="subheader"></slot>
        </div>
        <div class="body" part="body">
          <div class="menu" part="menu">
            <slot name="menu">
              <nav name="navigation" class="navigation" part="navigation navigation-desktop">
                <!-- Add fallback divs so that CSS grid works properly. -->
                <slot name="desktop-navigation-header">
                  ${ei(this.view==="desktop",()=>h`<slot name="navigation-header"><div></div></slot>`,()=>h`<div></div>`)}
                </slot>
                <slot name="desktop-navigation">
                  ${ei(this.view==="desktop",()=>h`<slot name="navigation"><div></div></slot>`,()=>h`<div></div>`)}
                </slot>
                <slot name="desktop-navigation-footer">
                  ${ei(this.view==="desktop",()=>h`<slot name="navigation-footer"><div></div></slot>`,()=>h`<div></div>`)}
                </slot>
              </nav>
            </slot>
          </div>
          <div class="main" part="main">
            <div class="main-header" part="main-header">
              <slot name="main-header"></slot>
            </div>
            <div class="main-content" part="main-content">
              <slot name="skip-to-content-target"></slot>
              <slot></slot>
            </div>
            <div class="main-footer" part="main-footer">
              <slot name="main-footer"></slot>
            </div>
          </div>
          <div class="aside" part="aside">
            <slot name="aside"></slot>
          </div>
        </div>
        <div class="footer" part="footer">
          <slot name="footer"></slot>
        </div>
      </div>
      <wa-drawer
        part="drawer"
        placement=${this.navigationPlacement}
        light-dismiss
        ?open=${Oo(this.navOpen)}
        @wa-after-show=${()=>this.navOpen=this.navigationDrawer.open}
        @wa-after-hide=${()=>this.navOpen=this.navigationDrawer.open}
        exportparts="
          dialog:drawer__dialog,
          overlay:drawer__overlay,
          panel:drawer__panel,
          header:drawer__header,
          header-actions:drawer__header-actions,
          title:drawer__title,
          close-button:drawer__close-button,
          close-button__base:drawer__close-button__base,
          body:drawer__body,
          footer:drawer__footer
        "
        class="navigation-drawer"
      >
        <slot slot="label" part="navigation-header" name="mobile-navigation-header">
          ${ei(this.view==="mobile",()=>h`<slot name="navigation-header"><div></div></slot>`,()=>h`<div></div>`)}
        </slot>
        <slot name="mobile-navigation">
          ${ei(this.view==="mobile",()=>h`<slot name="navigation"><div></div></slot>`,()=>h`<div></div>`)}
        </slot>

        <slot slot="footer" name="mobile-navigation-footer">
          ${ei(this.view==="mobile",()=>h`<slot part="navigation-footer" name="navigation-footer"><div></div></slot>`,()=>h`<div></div>`)}
        </slot>
      </wa-drawer>
    `}};So.css=[Ii,W3];f([Y("[part~='header']")],So.prototype,"header",2);f([Y("[part~='menu']")],So.prototype,"menu",2);f([Y("[part~='main']")],So.prototype,"main",2);f([Y("[part~='aside']")],So.prototype,"aside",2);f([Y("[part~='subheader']")],So.prototype,"subheader",2);f([Y("[part~='footer']")],So.prototype,"footer",2);f([Y("[part~='banner']")],So.prototype,"banner",2);f([Y("[part~='drawer']")],So.prototype,"navigationDrawer",2);f([Y("slot[name~='navigation-toggle']")],So.prototype,"navigationToggleSlot",2);f([t({attribute:"view",reflect:!0})],So.prototype,"view",2);f([t({attribute:"nav-open",reflect:!0,type:Boolean})],So.prototype,"navOpen",2);f([t({attribute:"mobile-breakpoint",type:String})],So.prototype,"mobileBreakpoint",2);f([t({attribute:"navigation-placement",reflect:!0})],So.prototype,"navigationPlacement",2);f([t({attribute:"disable-navigation-toggle",reflect:!0,type:Boolean})],So.prototype,"disableNavigationToggle",2);So=f([$("wa-page")],So);/*! Copyright 2026 Fonticons, Inc. - https://webawesome.com/license *//*! Copyright 2026 Fonticons, Inc. - https://webawesome.com/license */var _3=class extends Event{constructor(o){super("wa-page-change",{bubbles:!0,cancelable:!1,composed:!0});this.detail=o}};/*! Copyright 2026 Fonticons, Inc. - https://webawesome.com/license */var e3=class extends Event{constructor(o){super("wa-before-page-change",{bubbles:!0,cancelable:!0,composed:!0});this.detail=o}};/*! Copyright 2026 Fonticons, Inc. - https://webawesome.com/license */var o4=F`
  @layer wa-component {
    :host {
      display: contents;
    }
  }

  .container {
    display: flex;
    align-items: center;
    flex-wrap: wrap;
    /* Sizing is relative to the current font size, so we use em rather than spacing tokens */
    gap: 1em;
  }

  .summary {
    font-size: 0.875em;
    color: var(--wa-color-text-quiet);
    white-space: nowrap;
  }

  /* Compact layout */
  .label {
    display: inline-flex;
    align-items: center;
    min-height: max(2.16em, 24px);
    padding-inline: 0.75em;
    color: var(--wa-color-text-normal);
    white-space: nowrap;
  }

  .pagination {
    display: flex;
  }

  .pages {
    display: flex;
    align-items: center;
    flex-wrap: wrap;
    gap: 0.25em;
    margin: 0;
    padding: 0;
    list-style: none;
  }

  .pages li {
    display: flex;
  }

  .button {
    display: inline-flex;
    align-items: center;
    justify-content: center;
    box-sizing: border-box;

    /* Guarantee a minimum 24×24px target (WCAG 2.5.8) while still scaling with font-size. */
    min-width: max(2.16em, 24px);
    min-height: max(2.16em, 24px);
    padding-inline: 0.25em;

    font: inherit;
    font-size: inherit;
    line-height: 1;
    color: var(--wa-color-text-normal);
    text-decoration: none;

    background-color: transparent;
    /* Default (outlined) appearance */
    border: solid var(--wa-border-width-s) var(--wa-color-neutral-border-quiet);
    border-radius: var(--wa-border-radius-m);
    cursor: pointer;
    user-select: none;
    -webkit-user-select: none;
    transition:
      background-color var(--wa-transition-fast),
      border-color var(--wa-transition-fast),
      color var(--wa-transition-fast);
  }

  /* Ellipsis */
  .button.ellipsis {
    color: var(--wa-color-text-quiet);
    position: relative;
  }

  .button.ellipsis:hover,
  .button.ellipsis:focus-visible {
    color: var(--wa-color-text-normal);
  }

  .button:hover {
    background-color: var(--wa-color-neutral-fill-quiet);
  }

  .button:focus {
    outline: none;
  }

  .button:focus-visible {
    outline: var(--wa-focus-ring);
    outline-offset: var(--wa-focus-ring-offset);
  }

  /* Current page */
  .button.current {
    font-weight: var(--wa-font-weight-bold);
    color: var(--wa-color-brand-on-loud);
    background-color: var(--wa-form-control-activated-color);
    /* Read as a solid chip: drop the outlined border so it doesn't double up against the fill. */
    border-color: transparent;
  }

  .button.current:hover {
    background-color: var(--wa-form-control-activated-color);
  }

  /* Disabled (pagination buttons use aria-disabled so they stay focusable) */
  .button[aria-disabled='true'] {
    opacity: 0.5;
    cursor: not-allowed;
  }

  .button[aria-disabled='true']:hover {
    background-color: transparent;
  }

  wa-icon {
    font-size: 0.875em;
  }

  /* Filled */
  :host([appearance='filled']) .button {
    background-color: var(--wa-color-neutral-fill-quiet);
    border-color: transparent;
  }

  :host([appearance='filled']) .button:hover {
    background-color: var(--wa-color-neutral-fill-normal);
  }

  :host([appearance='filled']) .button.current,
  :host([appearance='filled']) .button.current:hover {
    background-color: var(--wa-form-control-activated-color);
  }

  /* Plain */
  :host([appearance='plain']) .button {
    background-color: transparent;
    border-color: transparent;
  }

  :host([appearance='plain']) .button:hover {
    background-color: transparent;
  }

  :host([appearance='plain']) .button.current {
    color: var(--wa-color-brand-on-loud);
    background-color: var(--wa-form-control-activated-color);
  }
`;/*! Copyright 2026 Fonticons, Inc. - https://webawesome.com/license */function E2(o,i){let r=i-o+1;return r>0?Array.from({length:r},(a,n)=>o+n):[]}function F6(o){let i=Math.max(1,Math.trunc(o.totalPages)),r=Math.min(Math.max(1,Math.trunc(o.page)),i),a=Math.max(0,Math.trunc(o.siblingCount)),n=Math.max(0,Math.trunc(o.boundaryCount));if(a*2+n*2+3>=i)return E2(1,i).map((y)=>({type:"page",value:y}));let b=n+1,c=i-n,m=r-a,p=r+a;if(m<b)p+=b-m,m=b;if(p>c)m-=p-c,p=c;m=Math.max(m,b),p=Math.min(p,c);let d=(m>b?0:1)+(p<c?0:1);while(d>0){if(p<c)p++;else if(m>b)m--;else break;d--}let s=m>b,z=p<c,u=[];if(E2(1,n).forEach((y)=>u.push({type:"page",value:y})),s)u.push({type:"ellipsis",position:"start"});if(E2(m,p).forEach((y)=>u.push({type:"page",value:y})),z)u.push({type:"ellipsis",position:"end"});return E2(i-n+1,i).forEach((y)=>u.push({type:"page",value:y})),u}var Uo=class extends L{constructor(){super(...arguments);this.localize=new B(this),this.total=0,this.pageSize=10,this.page=1,this.siblingCount=2,this.boundaryCount=1,this.withoutNav=!1,this.withEdges=!1,this.withSummary=!1,this.format="standard",this.hrefTemplate="",this.hideSinglePage=!1,this.label="",this.appearance="outlined",this.disabled=!1,this.shouldRestoreFocus=!1}get totalPages(){if(this.pageSize<=0)return 1;return Math.max(1,Math.ceil(this.total/this.pageSize))}handleDisabledChange(){this.customStates.set("disabled",this.disabled)}handlePageBoundsChange(){let o=D(Math.trunc(this.page)||1,1,this.totalPages);if(o!==this.page)this.page=o}getHref(o){if(!this.hrefTemplate)return;if(typeof this.hrefTemplate==="function")return this.hrefTemplate(o);return this.hrefTemplate.split("{page}").join(String(o))}async requestPage(o,i){let r=D(o,1,this.totalPages);if(this.disabled||r===this.page)return;let a=new e3({page:r,pageSize:this.pageSize});if(this.dispatchEvent(a),a.defaultPrevented)return;this.shouldRestoreFocus=i,this.page=r,await this.updateComplete,this.dispatchEvent(new _3({page:this.page,pageSize:this.pageSize})),this.announcePage()}restoreFocusToCurrentPage(){let o=this.shadowRoot?.querySelector('[part~="page-current"]'),i=z3();if(o&&i&&this.shadowRoot?.contains(i))o.focus()}announcePage(){Z2(this.localize.term("pageXOfY",this.page,this.totalPages),"polite")}updated(){if(this.shouldRestoreFocus)this.shouldRestoreFocus=!1,this.restoreFocusToCurrentPage()}renderNavButton(o){let{part:i,targetPage:r,enabled:a,label:n,icon:w,slotName:b}=o,c=this.disabled||!a,m=this.getHref(r);if(m!==void 0)return h`
        <li role="listitem">
          <a
            part="button ${i}"
            class="button nav-button"
            href=${Q(c?void 0:m)}
            aria-label=${n}
            aria-disabled=${c?"true":"false"}
          >
            <slot name=${b}><wa-icon library="system" name=${w}></wa-icon></slot>
          </a>
        </li>
      `;return h`
      <li role="listitem">
        <button
          part="button ${i}"
          class="button nav-button"
          type="button"
          aria-label=${n}
          aria-disabled=${c?"true":"false"}
          @click=${c?null:()=>this.requestPage(r,!0)}
        >
          <slot name=${b}><wa-icon library="system" name=${w}></wa-icon></slot>
        </button>
      </li>
    `}renderPage(o){let i=o===this.page,r=this.getHref(o),a=this.localize.number(o),n=`button page${i?" page-current":""}`;if(r!==void 0)return h`
        <li role="listitem">
          <a
            part=${n}
            class=${Z({button:!0,page:!0,current:i})}
            href=${Q(i||this.disabled?void 0:r)}
            aria-current=${Q(i?"page":void 0)}
            aria-disabled=${Q(this.disabled?"true":void 0)}
            >${a}</a
          >
        </li>
      `;return h`
      <li role="listitem">
        <button
          part=${n}
          class=${Z({button:!0,page:!0,current:i})}
          type="button"
          aria-current=${Q(i?"page":void 0)}
          aria-disabled=${Q(this.disabled?"true":void 0)}
          @click=${this.disabled||i?null:()=>this.requestPage(o,!0)}
        >
          ${a}
        </button>
      </li>
    `}renderEllipsis(o,i){let r=Uo.jumpDistance,a=o==="start",n=D(a?this.page-r:this.page+r,1,this.totalPages),w=this.localize.term(a?"jumpBackwardX":"jumpForwardX",r),b=this.getHref(n),c=h`
      <wa-icon class="ellipsis-default" library="system" name="ellipsis" label=${w}></wa-icon>
    `;if(b!==void 0)return h`
        <li role="listitem">
          <a
            part="ellipsis"
            class="button ellipsis"
            data-ellipsis=${i}
            href=${Q(this.disabled?void 0:b)}
            aria-label=${w}
            aria-disabled=${Q(this.disabled?"true":void 0)}
          >
            ${c}
          </a>
        </li>
      `;return h`
      <li role="listitem">
        <button
          part="ellipsis"
          class="button ellipsis"
          data-ellipsis=${i}
          type="button"
          aria-label=${w}
          aria-disabled=${Q(this.disabled?"true":void 0)}
          @click=${this.disabled?null:()=>this.requestPage(n,!0)}
        >
          ${c}
        </button>
      </li>
    `}render(){let o=this.totalPages;if(this.hideSinglePage&&o<=1)return h``;let i=this.localize.dir()==="rtl",r=this.page<=1,a=this.page>=o;if(this.format==="compact")return h`
        <div class="container">
          ${this.renderSummary()}
          <nav part="base pagination" class="pagination" aria-label=${this.label||this.localize.term("pagination")}>
            <ul part="pages" class="pages" role="list">
              ${this.renderNavButton({part:"previous-button",targetPage:this.page-1,enabled:!r,label:this.localize.term("previousPage"),icon:i?"chevron-right":"chevron-left",slotName:"previous-icon"})}
              <li role="listitem">
                <span part="label" class="label" aria-current="page">
                  ${this.localize.term("compactPageXOfY",this.page,o)}
                </span>
              </li>
              ${this.renderNavButton({part:"next-button",targetPage:this.page+1,enabled:!a,label:this.localize.term("nextPage"),icon:i?"chevron-left":"chevron-right",slotName:"next-icon"})}
            </ul>
          </nav>
        </div>
      `;let n=F6({page:this.page,totalPages:o,siblingCount:this.siblingCount,boundaryCount:this.boundaryCount}),w=0;return h`
      <div class="container">
        ${this.renderSummary()}
        <nav part="base pagination" class="pagination" aria-label=${this.label||this.localize.term("pagination")}>
          <ul part="pages" class="pages" role="list">
            ${this.withEdges?this.renderNavButton({part:"first-button",targetPage:1,enabled:!r,label:this.localize.term("firstPage"),icon:i?"angles-right":"angles-left",slotName:"first-icon"}):""}
            ${this.withoutNav?"":this.renderNavButton({part:"previous-button",targetPage:this.page-1,enabled:!r,label:this.localize.term("previousPage"),icon:i?"chevron-right":"chevron-left",slotName:"previous-icon"})}
            ${n.map((b)=>{if(b.type==="ellipsis")return w++,this.renderEllipsis(b.position,w);return this.renderPage(b.value)})}
            ${this.withoutNav?"":this.renderNavButton({part:"next-button",targetPage:this.page+1,enabled:!a,label:this.localize.term("nextPage"),icon:i?"chevron-left":"chevron-right",slotName:"next-icon"})}
            ${this.withEdges?this.renderNavButton({part:"last-button",targetPage:o,enabled:!a,label:this.localize.term("lastPage"),icon:i?"angles-left":"angles-right",slotName:"last-icon"}):""}
          </ul>
        </nav>
      </div>
    `}renderSummary(){if(!this.withSummary)return"";let o=this.total===0?0:(this.page-1)*this.pageSize+1,i=Math.min(this.page*this.pageSize,this.total);return h`
      <span part="summary" class="summary"> ${this.localize.term("showingXtoYofZ",o,i,this.total)} </span>
    `}};Uo.css=o4;Uo.jumpDistance=5;f([t({type:Number})],Uo.prototype,"total",2);f([t({attribute:"page-size",type:Number})],Uo.prototype,"pageSize",2);f([t({type:Number,reflect:!0})],Uo.prototype,"page",2);f([t({attribute:"sibling-count",type:Number})],Uo.prototype,"siblingCount",2);f([t({attribute:"boundary-count",type:Number})],Uo.prototype,"boundaryCount",2);f([t({attribute:"without-nav",type:Boolean})],Uo.prototype,"withoutNav",2);f([t({attribute:"with-edges",type:Boolean})],Uo.prototype,"withEdges",2);f([t({attribute:"with-summary",type:Boolean})],Uo.prototype,"withSummary",2);f([t({reflect:!0})],Uo.prototype,"format",2);f([t({attribute:"href-template"})],Uo.prototype,"hrefTemplate",2);f([t({attribute:"hide-single-page",type:Boolean})],Uo.prototype,"hideSinglePage",2);f([t()],Uo.prototype,"label",2);f([t({reflect:!0})],Uo.prototype,"appearance",2);f([t({type:Boolean,reflect:!0})],Uo.prototype,"disabled",2);f([J()],Uo.prototype,"shouldRestoreFocus",2);f([v("disabled",{waitUntilFirstUpdate:!0})],Uo.prototype,"handleDisabledChange",1);f([v("page"),v("total"),v("pageSize")],Uo.prototype,"handlePageBoundsChange",1);Uo=f([$("wa-pagination")],Uo);/*! Copyright 2026 Fonticons, Inc. - https://webawesome.com/license *//*! Copyright 2026 Fonticons, Inc. - https://webawesome.com/license */var i4=F`
  :host {
    --arrow-size: 0.375rem;
    --max-width: 25rem;
    --show-duration: var(--wa-transition-fast);
    --hide-duration: var(--wa-transition-fast);

    display: contents;

    /** Defaults for inherited CSS properties */
    font-size: var(--wa-font-size-m);
    line-height: var(--wa-line-height-normal);
    text-align: start;
    white-space: normal;
  }

  /* The native dialog element */
  .dialog {
    display: none;
    position: fixed;
    inset: 0;
    width: 100%;
    height: 100%;
    margin: 0;
    padding: 0;
    border: none;
    background: transparent;
    overflow: visible;
    pointer-events: none;

    &:focus {
      outline: none;
    }

    &[open] {
      display: block;
    }
  }

  /* The <wa-popup> element */
  .popover {
    --arrow-size: inherit;
    --popup-border-width: var(--wa-panel-border-width);
    --show-duration: inherit;
    --hide-duration: inherit;

    pointer-events: auto;

    /* Inset box-shadow, not a border: Safari seams a clip-path edge that runs along a border. */
    &::part(arrow) {
      background-color: var(--wa-color-surface-default);
      border: none;
      box-shadow: inset calc(-1 * var(--wa-panel-border-width)) calc(-1 * var(--wa-panel-border-width)) 0 0
        var(--wa-color-surface-border);
    }
  }

  .popover[placement^='top']::part(popup) {
    transform-origin: bottom;
  }

  .popover[placement^='bottom']::part(popup) {
    transform-origin: top;
  }

  .popover[placement^='left']::part(popup) {
    transform-origin: right;
  }

  .popover[placement^='right']::part(popup) {
    transform-origin: left;
  }

  /* Body */
  .body {
    display: flex;
    flex-direction: column;
    width: auto;
    max-width: min(var(--max-width), 100vw);
    padding: var(--wa-space-l);
    background-color: var(--wa-color-surface-default);
    border: var(--wa-panel-border-width) solid var(--wa-color-surface-border);
    border-radius: var(--wa-panel-border-radius);
    border-style: var(--wa-panel-border-style);
    box-shadow: var(--wa-shadow-l);
    color: var(--wa-color-text-normal);
    user-select: none;
    -webkit-user-select: none;
  }
`;/*! Copyright 2026 Fonticons, Inc. - https://webawesome.com/license */var ua=new Set,Ro=class extends L{constructor(){super(...arguments);this.anchor=null,this.placement="top",this.open=!1,this.distance=8,this.skidding=0,this.for=null,this.withoutArrow=!1,this.eventController=new AbortController,this.handleAnchorClick=()=>{this.open=!this.open},this.handleBodyClick=(o)=>{if(o.target.closest('[data-popover="close"]'))o.stopPropagation(),this.open=!1},this.handleDocumentKeyDown=(o)=>{if(o.key==="Escape"&&this.open&&Ao(this)){if(o.preventDefault(),o.stopPropagation(),this.open=!1,this.anchor&&typeof this.anchor.focus==="function")this.anchor.focus({preventScroll:!0})}},this.handleDocumentClick=(o)=>{if(this.anchor&&o.composedPath().includes(this.anchor))return;if(!o.composedPath().includes(this))this.open=!1}}connectedCallback(){if(super.connectedCallback(),!this.id)this.id=bi("wa-popover-");if(this.eventController.signal.aborted)this.eventController=new AbortController;if(this.for&&this.anchor)this.anchor=null,this.handleForChange()}disconnectedCallback(){super.disconnectedCallback(),document.removeEventListener("keydown",this.handleDocumentKeyDown),Mo(this),this.eventController.abort()}firstUpdated(o){if(super.firstUpdated(o),this.open)this.dialog.show(),this.popup.active=!0,this.popup.reposition()}updated(o){if(o.has("open"))this.customStates.set("open",this.open)}async handleOpenChange(){if(this.open){let o=new ko;if(this.dispatchEvent(o),o.defaultPrevented){this.open=!1;return}ua.forEach((i)=>i.open=!1),document.addEventListener("keydown",this.handleDocumentKeyDown,{signal:this.eventController.signal}),document.addEventListener("click",this.handleDocumentClick,{signal:this.eventController.signal}),this.dialog.setAttribute("open",""),this.popup.active=!0,ua.add(this),_o(this),requestAnimationFrame(()=>{let i=this.querySelector("[autofocus]");if(i&&typeof i.focus==="function")i.focus({preventScroll:!0});else this.dialog.focus({preventScroll:!0})}),await P(this.popup.popup,"show-with-scale"),this.popup.reposition(),this.dispatchEvent(new jo)}else{let o=new To;if(this.dispatchEvent(o),o.defaultPrevented){this.open=!0;return}document.removeEventListener("keydown",this.handleDocumentKeyDown),document.removeEventListener("click",this.handleDocumentClick),ua.delete(this),Mo(this),await P(this.popup.popup,"hide-with-scale"),this.popup.active=!1,this.dialog.close(),this.dispatchEvent(new Io)}}handleForChange(){let o=this.getRootNode();if(!o)return;let i=this.for?o.getElementById(this.for):null,r=this.anchor;if(i===r)return;let{signal:a}=this.eventController;if(i)i.addEventListener("click",this.handleAnchorClick,{signal:a});if(r)r.removeEventListener("click",this.handleAnchorClick);if(this.anchor=i,this.for&&!i)console.warn(`A popover was assigned to an element with an ID of "${this.for}" but the element could not be found.`,this)}async handleOptionsChange(){if(this.hasUpdated)await this.updateComplete,this.popup.reposition()}async show(){if(this.open)return;return this.open=!0,Yo(this,"wa-after-show")}async hide(){if(!this.open)return;return this.open=!1,Yo(this,"wa-after-hide")}render(){return h`
      <dialog part="dialog" class="dialog">
        <wa-popup
          part="popup"
          exportparts="
            popup:popup__popup,
            arrow:popup__arrow
          "
          class=${Z({popover:!0,"popover-open":this.open})}
          placement=${this.placement}
          distance=${this.distance}
          skidding=${this.skidding}
          flip
          shift
          shift-padding="8"
          ?arrow=${!this.withoutArrow}
          .anchor=${this.anchor}
        >
          <div part="body" class="body" @click=${this.handleBodyClick}>
            <slot></slot>
          </div>
        </wa-popup>
      </dialog>
    `}};Ro.css=i4;Ro.dependencies={"wa-popup":bo};f([Y("dialog")],Ro.prototype,"dialog",2);f([Y(".body")],Ro.prototype,"body",2);f([Y("wa-popup")],Ro.prototype,"popup",2);f([J()],Ro.prototype,"anchor",2);f([t()],Ro.prototype,"placement",2);f([t({type:Boolean,reflect:!0})],Ro.prototype,"open",2);f([t({type:Number})],Ro.prototype,"distance",2);f([t({type:Number})],Ro.prototype,"skidding",2);f([t()],Ro.prototype,"for",2);f([t({attribute:"without-arrow",type:Boolean,reflect:!0})],Ro.prototype,"withoutArrow",2);f([v("open",{waitUntilFirstUpdate:!0})],Ro.prototype,"handleOpenChange",1);f([v("for")],Ro.prototype,"handleForChange",1);f([v(["distance","placement","skidding"])],Ro.prototype,"handleOptionsChange",1);Ro=f([$("wa-popover")],Ro);/*! Copyright 2026 Fonticons, Inc. - https://webawesome.com/license *//*! Copyright 2026 Fonticons, Inc. - https://webawesome.com/license *//*! Copyright 2026 Fonticons, Inc. - https://webawesome.com/license */var r4=F`
  :host {
    --track-height: 1rem;
    --track-color: var(--wa-color-neutral-fill-normal);
    --indicator-color: var(--wa-color-brand-fill-loud);

    display: flex;
  }

  .progress-bar {
    flex: 1 1 auto;
    display: flex;
    position: relative;
    overflow: hidden;
    height: var(--track-height);
    border-radius: var(--wa-border-radius-pill);
    background-color: var(--track-color);
    color: var(--wa-color-brand-on-loud);
    font-size: var(--wa-font-size-s);
  }

  .indicator {
    width: var(--percentage);
    display: flex;
    align-items: center;
    justify-content: center;
    background-color: var(--indicator-color);
    text-align: center;
    white-space: nowrap;
    overflow: hidden;
    line-height: 1;
    font-weight: var(--wa-font-weight-semibold);
    transition: all var(--wa-transition-slow, 200ms) var(--wa-transition-easing, ease);
    user-select: none;
    -webkit-user-select: none;
  }

  /* Indeterminate */
  :host([indeterminate]) .indicator {
    position: absolute;
    inset-block: 0;
    inline-size: 50%;
    animation: wa-progress-indeterminate 2.5s infinite cubic-bezier(0.37, 0, 0.63, 1);
  }

  @media (forced-colors: active) {
    .progress-bar {
      outline: solid 1px SelectedItem;
      background-color: var(--wa-color-surface-default);
    }

    .indicator {
      outline: solid 1px SelectedItem;
      background-color: SelectedItem;
    }
  }

  @keyframes wa-progress-indeterminate {
    0% {
      inset-inline-start: -50%;
    }

    75%,
    100% {
      inset-inline-start: 100%;
    }
  }
`;/*! Copyright 2026 Fonticons, Inc. - https://webawesome.com/license */var P0=class extends L{constructor(){super(...arguments);this.localize=new B(this),this.value=0,this.indeterminate=!1,this.label=""}willUpdate(o){if(this.style==null)this.setStyleProperty("--percentage",`${D(this.value,0,100)}%`);super.willUpdate(o)}updated(o){if(o.has("value"))requestAnimationFrame(()=>{this.style.setProperty("--percentage",`${D(this.value,0,100)}%`)});super.updated(o)}render(){return h`
      <div
        part="base progress-bar"
        class="progress-bar"
        role="progressbar"
        title=${Q(this.title)}
        aria-label=${this.label.length>0?this.label:this.localize.term("progress")}
        aria-valuemin="0"
        aria-valuemax="100"
        aria-valuenow=${this.indeterminate?"0":this.value}
      >
        <div part="indicator" class="indicator">
          ${!this.indeterminate?h` <slot part="label" class="label"></slot> `:""}
        </div>
      </div>
    `}};P0.css=r4;f([t({type:Number,reflect:!0})],P0.prototype,"value",2);f([t({type:Boolean,reflect:!0})],P0.prototype,"indeterminate",2);f([t()],P0.prototype,"label",2);P0=f([$("wa-progress-bar")],P0);/*! Copyright 2026 Fonticons, Inc. - https://webawesome.com/license *//*! Copyright 2026 Fonticons, Inc. - https://webawesome.com/license */var a4=F`
  :host {
    --size: 8rem;
    --track-width: 0.25em; /* avoid using rems here */
    --track-color: var(--wa-color-neutral-fill-normal);
    --indicator-width: var(--track-width);
    --indicator-color: var(--wa-color-brand-fill-loud);
    --indicator-transition-duration: 0.35s;

    display: inline-flex;
  }

  .progress-ring {
    display: inline-flex;
    align-items: center;
    justify-content: center;
    position: relative;
  }

  .image {
    width: var(--size);
    height: var(--size);
    rotate: -90deg;
    transform-origin: 50% 50%;
  }

  .track,
  .indicator {
    --radius: calc(var(--size) / 2 - max(var(--track-width), var(--indicator-width)) * 0.5);
    --circumference: calc(var(--radius) * 2 * 3.141592654);

    fill: none;
    r: var(--radius);
    cx: calc(var(--size) / 2);
    cy: calc(var(--size) / 2);
  }

  .track {
    stroke: var(--track-color);
    stroke-width: var(--track-width);
  }

  .indicator {
    stroke: var(--indicator-color);
    stroke-width: var(--indicator-width);
    stroke-linecap: round;
    transition-property: stroke-dashoffset;
    transition-duration: var(--indicator-transition-duration);
    stroke-dasharray: var(--circumference) var(--circumference);
    stroke-dashoffset: calc(var(--circumference) - var(--percentage) * var(--circumference));
  }

  .label {
    display: flex;
    align-items: center;
    justify-content: center;
    position: absolute;
    top: 0;
    left: 0;
    width: 100%;
    height: 100%;
    text-align: center;
    user-select: none;
    -webkit-user-select: none;
  }
`;/*! Copyright 2026 Fonticons, Inc. - https://webawesome.com/license */var m0=class extends L{constructor(){super(...arguments);this.localize=new B(this),this.value=0,this.label=""}updated(o){if(super.updated(o),o.has("value")){let i=parseFloat(getComputedStyle(this.indicator).getPropertyValue("r")),r=2*Math.PI*i,a=r-this.value/100*r;this.indicatorOffset=`${a}px`}}render(){return h`
      <div
        part="base progress-ring"
        class="progress-ring"
        role="progressbar"
        aria-label=${this.label.length>0?this.label:this.localize.term("progress")}
        aria-describedby="label"
        aria-valuemin="0"
        aria-valuemax="100"
        aria-valuenow="${this.value}"
        style=${mo({"--percentage":this.value/100})}
      >
        <svg class="image">
          <circle part="track" class="track"></circle>
          <circle
            part="indicator"
            class="indicator"
            style=${mo({"stroke-dashoffset":this.indicatorOffset})}
          ></circle>
        </svg>

        <slot id="label" part="label" class="label"></slot>
      </div>
    `}};m0.css=a4;f([Y(".indicator")],m0.prototype,"indicator",2);f([J()],m0.prototype,"indicatorOffset",2);f([t({type:Number,reflect:!0})],m0.prototype,"value",2);f([t()],m0.prototype,"label",2);m0=f([$("wa-progress-ring")],m0);m0.disableWarning?.("change-in-update");/*! Copyright 2026 Fonticons, Inc. - https://webawesome.com/license *//*! Copyright 2026 Fonticons, Inc. - https://webawesome.com/license */var n4=F`
  :host {
    display: inline-flex;
    align-items: center;
    justify-content: center;
    aspect-ratio: 1;
  }

  canvas {
    width: 100%;
    height: 100%;
    /* We force a near-instant transition so we can listen for transitionend when the color changes */
    transition: color 1ms;
  }

  span {
    /* We force a near-instant transition so we can listen for transitionend when the color changes */
    transition: color 1ms;
  }
`;var f4=function(o,i,r){};class za{static render(o,i,r){f4(o,i,r)}}/*! jquery-qrcode v0.14.0 - https://larsjung.de/jquery-qrcode/ */(function(o){function i(z,u,y,g){var q=o(y,u);q.addData(z),q.make(),g=g||0;var l=q.getModuleCount(),x=q.getModuleCount()+2*g;function X(U,K){if(U-=g,K-=g,U<0||U>=l||K<0||K>=l)return!1;return q.isDark(U,K)}return{text:z,level:u,version:y,moduleCount:x,isDark:X}}function r(z,u,y,g,q){y=Math.max(1,y||1),g=Math.min(40,g||40);for(var l=y;l<=g;l+=1)try{return i(z,u,l,q)}catch(x){}return}function a(z,u,y){if(y.background)u.fillStyle=y.background,u.fillRect(y.left,y.top,y.size,y.size)}function n(z,u,y,g,q,l,x,X,U,K){if(x)z.moveTo(u+l,y);else z.moveTo(u,y);function O(S,T,to,ao,Fo,xo,Ko){if(S)z.lineTo(T+xo,to+Ko),z.arcTo(T,to,ao,Fo,l);else z.lineTo(T,to)}O(X,g,y,g,q,-l,0),O(U,g,q,u,q,0,-l),O(K,u,q,u,y,l,0),O(x,u,y,g,y,0,l)}function w(z,u,y,g,q,l,x,X,U,K){function O(S,T,to,ao){z.moveTo(S+to,T),z.lineTo(S,T),z.lineTo(S,T+ao),z.arcTo(S,T,S+to,T,l)}if(x)O(u,y,l,l);if(X)O(g,y,-l,l);if(U)O(g,q,-l,-l);if(K)O(u,q,l,-l)}function b(z,u,y,g,q,l,x,X){var U=z.isDark,K=g+l,O=q+l,S=x-1,T=x+1,to=X-1,ao=X+1,Fo=Math.floor(Math.min(0.5,Math.max(0,y.radius))*l),xo=U(x,X),Ko=U(S,to),Xo=U(S,X),pi=U(S,ao),V=U(x,ao),H=U(T,ao),G=U(T,X),N=U(T,to),A=U(x,to);if(g=Math.round(g),q=Math.round(q),K=Math.round(K),O=Math.round(O),xo)n(u,g,q,K,O,Fo,!Xo&&!A,!Xo&&!V,!G&&!V,!G&&!A);else w(u,g,q,K,O,Fo,Xo&&A&&Ko,Xo&&V&&pi,G&&V&&H,G&&A&&N)}function c(z,u,y,g){var q=z.moduleCount,l=y.size/q,x=0,X=0;u.beginPath();let U=7+y.quiet;for(x=0;x<q;x+=1)for(X=0;X<q;X+=1){if((X<U&&x<U||X>=q-U&&x<U||X<U&&x>=q-U)!==g)continue;var K=y.left+X*l,O=y.top+x*l,S=l;b(z,u,y,K,O,S,x,X)}m(u,y,g),u.fill()}function m(z,u,y){let g=y?u.cornerFill||u.fill:u.fill;if(typeof g==="string"){z.fillStyle=g;return}let{type:q,position:l,colorStops:x}=g,X;if(q==="linear-gradient"){let U=l.slice(0,4).map((K)=>Math.round(K*u.size));X=z.createLinearGradient.apply(z,U)}else if(q==="radial-gradient"){let U=l.slice(0,6).map((K)=>Math.round(K*u.size));X=z.createRadialGradient.apply(z,U)}else throw Error("Unsupported fill");x.forEach(([U,K])=>{X.addColorStop(U,K)}),z.fillStyle=X}function p(z,u,y){if(z=r(y.text,y.ecLevel,y.minVersion,y.maxVersion,y.quiet),!z)return null;var g=y.context||u?.getContext("2d");if(!g)return u;return a(z,g,y),c(z,g,y,!0),c(z,g,y,!1),u}function d(z,u){var y=document.createElement("canvas");return y.width=u.size,y.height=u.size,p(z,y,u)}var s={minVersion:1,maxVersion:40,ecLevel:"L",left:0,top:0,size:200,fill:"#000",cornerFill:null,background:null,text:"no text",radius:0.5,quiet:0,image:null,imageEcCover:0.5};f4=function(z,u,y){var g=Object.assign({},s,z);g.minVersion=g.minVersion,g.maxVersion=g.maxVersion,g.ecLevel=g.ecLevel,g.left=g.left,g.top=g.top,g.size=g.size,g.fill=g.fill,g.background=g.background,g.text=g.text,g.radius=g.radius,g.quiet=g.quiet,g.cornerFill=g.cornerFill||g.fill,g.image=g.image,g.imageBackground=g.imageBackground,g.imageEcCover=g.imageEcCover,g.imagePadding=g.imagePadding;var q=r(g.text,g.ecLevel,g.minVersion,g.maxVersion,g.quiet);if(!q)return;y=y||function(){};let l=function(){var x=u;if(u instanceof HTMLCanvasElement){if(u.width!==g.size||u.height!==g.size)u.width=g.size,u.height=g.size;let X=u.getContext("2d");if(X)X.clearRect(0,0,u.width,u.height);p(q,u,g)}else if(g.context)g.context.clearRect(0,0,g.size,g.size),p(q,null,g);else if(q){let X=d(q,g);if(X)x=X,u.appendChild(x)}return x};if(g.image){let x=new Image;x.onload=function(){if(!q)return;let X=g.imageEcCover??s.imageEcCover,U=q.moduleCount-g.quiet*2,K=g.size/U,O=x.naturalWidth/x.naturalHeight,S=g.size*X;S=Math.min(S,S*O);let T=g.size*X;T=Math.min(T,T/O);let to=U*U-172,ao={L:0.07,M:0.15,Q:0.25,H:0.3}[g.ecLevel]*X*to|0;var Fo=Math.min(U,Math.sqrt(ao*O)|0,S),xo=Fo/O|0;if(xo>U)xo=U,Fo=xo*O|0;xo=Math.min(xo,T);let Ko=q.moduleCount/2-Fo/2|0,Xo=q.moduleCount/2-xo/2|0,pi=q.isDark;q.isDark=function(ho,Q0){if(Ko<=Q0&&Q0<Ko+Fo&&Xo<=ho&&ho<Xo+xo)return!1;return pi(ho,Q0)};let V=Math.min(Fo,xo*O)-g.quiet,H=Math.min(xo,Fo/O)-g.quiet,G=Ko+(Fo-V)/2-g.quiet,N=Xo+(xo-H)/2-g.quiet,A=G*K,no=N*K,$o=V*K,R=H*K;var xi=l();let Fi=xi.getContext("2d");if(Fi)Fi.fillStyle=g.imageBackground||"transparent",Fi.fillRect(A-4,no-4,$o+8,R+8),Fi.drawImage(x,A,no,$o,R);y()},x.onerror=()=>{l(),y()},x.src=g.image}else l(),y()}})(function(){var o=function(){function i(s,z){var u=236,y=17,g=s,q=a[z],l=null,x=0,X=null,U=[],K={},O=function(V,H){if(x=g*4+17,l=function(G){var N=Array(G);for(var A=0;A<G;A+=1){N[A]=Array(G);for(var no=0;no<G;no+=1)N[A][no]=null}return N}(x),S(0,0),S(x-7,0),S(0,x-7),ao(),to(),xo(V,H),g>=7)Fo(V);if(X==null)X=pi(g,q,U);Ko(X,H)},S=function(V,H){if(l==null)return;for(var G=-1;G<=7;G+=1){if(V+G<=-1||x<=V+G)continue;for(var N=-1;N<=7;N+=1){if(H+N<=-1||x<=H+N)continue;if(0<=G&&G<=6&&(N==0||N==6)||0<=N&&N<=6&&(G==0||G==6)||2<=G&&G<=4&&2<=N&&N<=4)l[V+G][H+N]=!0;else l[V+G][H+N]=!1}}},T=function(){var V=0,H=0;for(var G=0;G<8;G+=1){O(!0,G);var N=w.getLostPoint(K);if(G==0||V>N)V=N,H=G}return H},to=function(){if(!l)return;for(var V=8;V<x-8;V+=1){if(l[V][6]!=null)continue;l[V][6]=V%2==0}for(var H=8;H<x-8;H+=1){if(l[6][H]!=null)continue;l[6][H]=H%2==0}},ao=function(){if(!l)return;var V=w.getPatternPosition(g);for(var H=0;H<V.length;H+=1)for(var G=0;G<V.length;G+=1){var N=V[H],A=V[G];if(l[N][A]!=null)continue;for(var no=-2;no<=2;no+=1)for(var $o=-2;$o<=2;$o+=1)l[N+no][A+$o]=no==-2||no==2||$o==-2||$o==2||no==0&&$o==0}},Fo=function(V){if(!l)return;var H=w.getBCHTypeNumber(g);for(var G=0;G<18;G+=1){var N=!V&&(H>>G&1)==1;l[Math.floor(G/3)][G%3+x-8-3]=N}for(var G=0;G<18;G+=1){var N=!V&&(H>>G&1)==1;l[G%3+x-8-3][Math.floor(G/3)]=N}},xo=function(V,H){var G=q<<3|H,N=w.getBCHTypeInfo(G);if(!l)return;for(var A=0;A<15;A+=1){let no=!V&&(N>>A&1)==1;l[A<6?A:A<8?A+1:x-15+A][8]=no,l[8][A<8?x-A-1:A<9?15-A:14-A]=no}l[x-8][8]=!V},Ko=function(V,H){var G=-1,N=x-1,A=7,no=0,$o=w.getMaskFunction(H);for(var R=x-1;R>0;R-=2){if(R==6)R-=1;while(!0){for(var xi=0;xi<2;xi+=1)if(l&&l[N][R-xi]==null){var Fi=!1;if(no<V.length)Fi=(V[no]>>>A&1)==1;var ho=$o(N,R-xi);if(ho)Fi=!Fi;if(l[N][R-xi]=Fi,A-=1,A==-1)no+=1,A=7}if(N+=G,N<0||x<=N){N-=G,G=-G;break}}}},Xo=function(V,H){var G=0,N=0,A=0,no=Array(H.length),$o=Array(H.length);for(var R=0;R<H.length;R+=1){var xi=H[R].dataCount,Fi=H[R].totalCount-xi;N=Math.max(N,xi),A=Math.max(A,Fi),no[R]=Array(xi);for(var ho=0;ho<no[R].length;ho+=1)no[R][ho]=255&V.getBuffer()[ho+G];G+=xi;var Q0=w.getErrorCorrectPolynomial(Fi),W4=c(no[R],Q0.getLength()-1),Xa=W4.mod(Q0);$o[R]=Array(Q0.getLength()-1);for(var ho=0;ho<$o[R].length;ho+=1){var Ja=ho+Xa.getLength()-$o[R].length;$o[R][ho]=Ja>=0?Xa.getAt(Ja):0}}var Za=0;for(var ho=0;ho<H.length;ho+=1)Za+=H[ho].totalCount;var I2=Array(Za),Sr=0;for(var ho=0;ho<N;ho+=1)for(var R=0;R<H.length;R+=1)if(ho<no[R].length)I2[Sr]=no[R][ho],Sr+=1;for(var ho=0;ho<A;ho+=1)for(var R=0;R<H.length;R+=1)if(ho<$o[R].length)I2[Sr]=$o[R][ho],Sr+=1;return I2},pi=function(V,H,G){var N=m.getRSBlocks(V,H),A=p();for(var no=0;no<G.length;no+=1){var $o=G[no];A.put($o.getMode(),4),A.put($o.getLength(),w.getLengthInBits($o.getMode(),V)),$o.write(A)}var R=0;for(var no=0;no<N.length;no+=1)R+=N[no].dataCount;if(A.getLengthInBits()>R*8)throw Error("code length overflow. ("+A.getLengthInBits()+">"+R*8+")");if(A.getLengthInBits()+4<=R*8)A.put(0,4);while(A.getLengthInBits()%8!=0)A.putBit(!1);while(!0){if(A.getLengthInBits()>=R*8)break;if(A.put(u,8),A.getLengthInBits()>=R*8)break;A.put(y,8)}return Xo(A,N)};return K.addData=function(V){var H=d(V);U.push(H),X=null},K.isDark=function(V,H){if(!l)throw Error("_modules is null");if(V<0||x<=V||H<0||x<=H)throw Error(V+","+H);return l[V][H]},K.getModuleCount=function(){return x},K.make=function(){O(!1,T())},K}i.stringToBytes=function(s){return new TextEncoder().encode(s)};var r={MODE_8BIT_BYTE:4},a={L:1,M:0,Q:3,H:2},n={PATTERN000:0,PATTERN001:1,PATTERN010:2,PATTERN011:3,PATTERN100:4,PATTERN101:5,PATTERN110:6,PATTERN111:7},w=function(){var s=[[],[6,18],[6,22],[6,26],[6,30],[6,34],[6,22,38],[6,24,42],[6,26,46],[6,28,50],[6,30,54],[6,32,58],[6,34,62],[6,26,46,66],[6,26,48,70],[6,26,50,74],[6,30,54,78],[6,30,56,82],[6,30,58,86],[6,34,62,90],[6,28,50,72,94],[6,26,50,74,98],[6,30,54,78,102],[6,28,54,80,106],[6,32,58,84,110],[6,30,58,86,114],[6,34,62,90,118],[6,26,50,74,98,122],[6,30,54,78,102,126],[6,26,52,78,104,130],[6,30,56,82,108,134],[6,34,60,86,112,138],[6,30,58,86,114,142],[6,34,62,90,118,146],[6,30,54,78,102,126,150],[6,24,50,76,102,128,154],[6,28,54,80,106,132,158],[6,32,58,84,110,136,162],[6,26,54,82,110,138,166],[6,30,58,86,114,142,170]],z=1335,u=7973,y=21522,g={},q=function(l){var x=0;while(l!=0)x+=1,l>>>=1;return x};return g.getBCHTypeInfo=function(l){var x=l<<10;while(q(x)-q(z)>=0)x^=z<<q(x)-q(z);return(l<<10|x)^y},g.getBCHTypeNumber=function(l){var x=l<<12;while(q(x)-q(u)>=0)x^=u<<q(x)-q(u);return l<<12|x},g.getPatternPosition=function(l){return s[l-1]},g.getMaskFunction=function(l){switch(l){case n.PATTERN000:return function(x,X){return(x+X)%2==0};case n.PATTERN001:return function(x,X){return x%2==0};case n.PATTERN010:return function(x,X){return X%3==0};case n.PATTERN011:return function(x,X){return(x+X)%3==0};case n.PATTERN100:return function(x,X){return(Math.floor(x/2)+Math.floor(X/3))%2==0};case n.PATTERN101:return function(x,X){return x*X%2+x*X%3==0};case n.PATTERN110:return function(x,X){return(x*X%2+x*X%3)%2==0};case n.PATTERN111:return function(x,X){return(x*X%3+(x+X)%2)%2==0};default:throw Error("bad maskPattern:"+l)}},g.getErrorCorrectPolynomial=function(l){var x=c([1],0);for(var X=0;X<l;X+=1)x=x.multiply(c([1,b.gexp(X)],0));return x},g.getLengthInBits=function(l,x){if(l!=r.MODE_8BIT_BYTE||x<1||x>40)throw Error("mode: "+l+"; type: "+x);return x<10?8:16},g.getLostPoint=function(l){var x=l.getModuleCount(),X=0;for(var U=0;U<x;U+=1)for(var K=0;K<x;K+=1){var O=0,S=l.isDark(U,K);for(var T=-1;T<=1;T+=1){if(U+T<0||x<=U+T)continue;for(var to=-1;to<=1;to+=1){if(K+to<0||x<=K+to)continue;if(T==0&&to==0)continue;if(S==l.isDark(U+T,K+to))O+=1}}if(O>5)X+=3+O-5}for(var U=0;U<x-1;U+=1)for(var K=0;K<x-1;K+=1){var ao=0;if(l.isDark(U,K))ao+=1;if(l.isDark(U+1,K))ao+=1;if(l.isDark(U,K+1))ao+=1;if(l.isDark(U+1,K+1))ao+=1;if(ao==0||ao==4)X+=3}for(var U=0;U<x;U+=1)for(var K=0;K<x-6;K+=1)if(l.isDark(U,K)&&!l.isDark(U,K+1)&&l.isDark(U,K+2)&&l.isDark(U,K+3)&&l.isDark(U,K+4)&&!l.isDark(U,K+5)&&l.isDark(U,K+6))X+=40;for(var K=0;K<x;K+=1)for(var U=0;U<x-6;U+=1)if(l.isDark(U,K)&&!l.isDark(U+1,K)&&l.isDark(U+2,K)&&l.isDark(U+3,K)&&l.isDark(U+4,K)&&!l.isDark(U+5,K)&&l.isDark(U+6,K))X+=40;var Fo=0;for(var K=0;K<x;K+=1)for(var U=0;U<x;U+=1)if(l.isDark(U,K))Fo+=1;var xo=Math.abs(100*Fo/x/x-50)/5;return X+=xo*10,X},g}(),b=function(){var s=Array(256),z=Array(256);for(var u=0;u<8;u+=1)z[u]=1<<u;for(var u=8;u<256;u+=1)z[u]=z[u-4]^z[u-5]^z[u-6]^z[u-8];for(var u=0;u<255;u+=1)s[z[u]]=u;var y={};return y.glog=function(g){if(g<1)throw Error("glog("+g+")");return s[g]},y.gexp=function(g){while(g<0)g+=255;while(g>=256)g-=255;return z[g]},y}();function c(s,z){if(typeof s.length>"u")throw Error(s.length+"/"+z);var u=function(){var g=0;while(g<s.length&&s[g]==0)g+=1;var q=Array(s.length-g+z);for(var l=0;l<s.length-g;l+=1)q[l]=s[l+g];return q}(),y={};return y.getAt=function(g){return u[g]},y.getLength=function(){return u.length},y.multiply=function(g){var q=Array(y.getLength()+g.getLength()-1);for(var l=0;l<y.getLength();l+=1)for(var x=0;x<g.getLength();x+=1)q[l+x]^=b.gexp(b.glog(y.getAt(l))+b.glog(g.getAt(x)));return c(q,0)},y.mod=function(g){if(y.getLength()-g.getLength()<0)return y;var q=b.glog(y.getAt(0))-b.glog(g.getAt(0)),l=Array(y.getLength());for(var x=0;x<y.getLength();x+=1)l[x]=y.getAt(x);for(var x=0;x<g.getLength();x+=1)l[x]^=b.gexp(b.glog(g.getAt(x))+q);return c(l,0).mod(g)},y}var m=function(){var s=[[1,26,19],[1,26,16],[1,26,13],[1,26,9],[1,44,34],[1,44,28],[1,44,22],[1,44,16],[1,70,55],[1,70,44],[2,35,17],[2,35,13],[1,100,80],[2,50,32],[2,50,24],[4,25,9],[1,134,108],[2,67,43],[2,33,15,2,34,16],[2,33,11,2,34,12],[2,86,68],[4,43,27],[4,43,19],[4,43,15],[2,98,78],[4,49,31],[2,32,14,4,33,15],[4,39,13,1,40,14],[2,121,97],[2,60,38,2,61,39],[4,40,18,2,41,19],[4,40,14,2,41,15],[2,146,116],[3,58,36,2,59,37],[4,36,16,4,37,17],[4,36,12,4,37,13],[2,86,68,2,87,69],[4,69,43,1,70,44],[6,43,19,2,44,20],[6,43,15,2,44,16],[4,101,81],[1,80,50,4,81,51],[4,50,22,4,51,23],[3,36,12,8,37,13],[2,116,92,2,117,93],[6,58,36,2,59,37],[4,46,20,6,47,21],[7,42,14,4,43,15],[4,133,107],[8,59,37,1,60,38],[8,44,20,4,45,21],[12,33,11,4,34,12],[3,145,115,1,146,116],[4,64,40,5,65,41],[11,36,16,5,37,17],[11,36,12,5,37,13],[5,109,87,1,110,88],[5,65,41,5,66,42],[5,54,24,7,55,25],[11,36,12,7,37,13],[5,122,98,1,123,99],[7,73,45,3,74,46],[15,43,19,2,44,20],[3,45,15,13,46,16],[1,135,107,5,136,108],[10,74,46,1,75,47],[1,50,22,15,51,23],[2,42,14,17,43,15],[5,150,120,1,151,121],[9,69,43,4,70,44],[17,50,22,1,51,23],[2,42,14,19,43,15],[3,141,113,4,142,114],[3,70,44,11,71,45],[17,47,21,4,48,22],[9,39,13,16,40,14],[3,135,107,5,136,108],[3,67,41,13,68,42],[15,54,24,5,55,25],[15,43,15,10,44,16],[4,144,116,4,145,117],[17,68,42],[17,50,22,6,51,23],[19,46,16,6,47,17],[2,139,111,7,140,112],[17,74,46],[7,54,24,16,55,25],[34,37,13],[4,151,121,5,152,122],[4,75,47,14,76,48],[11,54,24,14,55,25],[16,45,15,14,46,16],[6,147,117,4,148,118],[6,73,45,14,74,46],[11,54,24,16,55,25],[30,46,16,2,47,17],[8,132,106,4,133,107],[8,75,47,13,76,48],[7,54,24,22,55,25],[22,45,15,13,46,16],[10,142,114,2,143,115],[19,74,46,4,75,47],[28,50,22,6,51,23],[33,46,16,4,47,17],[8,152,122,4,153,123],[22,73,45,3,74,46],[8,53,23,26,54,24],[12,45,15,28,46,16],[3,147,117,10,148,118],[3,73,45,23,74,46],[4,54,24,31,55,25],[11,45,15,31,46,16],[7,146,116,7,147,117],[21,73,45,7,74,46],[1,53,23,37,54,24],[19,45,15,26,46,16],[5,145,115,10,146,116],[19,75,47,10,76,48],[15,54,24,25,55,25],[23,45,15,25,46,16],[13,145,115,3,146,116],[2,74,46,29,75,47],[42,54,24,1,55,25],[23,45,15,28,46,16],[17,145,115],[10,74,46,23,75,47],[10,54,24,35,55,25],[19,45,15,35,46,16],[17,145,115,1,146,116],[14,74,46,21,75,47],[29,54,24,19,55,25],[11,45,15,46,46,16],[13,145,115,6,146,116],[14,74,46,23,75,47],[44,54,24,7,55,25],[59,46,16,1,47,17],[12,151,121,7,152,122],[12,75,47,26,76,48],[39,54,24,14,55,25],[22,45,15,41,46,16],[6,151,121,14,152,122],[6,75,47,34,76,48],[46,54,24,10,55,25],[2,45,15,64,46,16],[17,152,122,4,153,123],[29,74,46,14,75,47],[49,54,24,10,55,25],[24,45,15,46,46,16],[4,152,122,18,153,123],[13,74,46,32,75,47],[48,54,24,14,55,25],[42,45,15,32,46,16],[20,147,117,4,148,118],[40,75,47,7,76,48],[43,54,24,22,55,25],[10,45,15,67,46,16],[19,148,118,6,149,119],[18,75,47,31,76,48],[34,54,24,34,55,25],[20,45,15,61,46,16]],z=function(g,q){var l={};return l.totalCount=g,l.dataCount=q,l},u={},y=function(g,q){switch(q){case a.L:return s[(g-1)*4+0];case a.M:return s[(g-1)*4+1];case a.Q:return s[(g-1)*4+2];case a.H:return s[(g-1)*4+3];default:return}};return u.getRSBlocks=function(g,q){var l=y(g,q);if(typeof l>"u")throw Error("bad rs block @ typeNumber:"+g+"/errorCorrectLevel:"+q);var x=l.length/3,X=[];for(var U=0;U<x;U+=1){var K=l[U*3+0],O=l[U*3+1],S=l[U*3+2];for(var T=0;T<K;T+=1)X.push(z(O,S))}return X},u}(),p=function(){var s=[],z=0,u={};return u.getBuffer=function(){return s},u.getAt=function(y){var g=Math.floor(y/8);return(s[g]>>>7-y%8&1)==1},u.put=function(y,g){for(var q=0;q<g;q+=1)u.putBit((y>>>g-q-1&1)==1)},u.getLengthInBits=function(){return z},u.putBit=function(y){var g=Math.floor(z/8);if(s.length<=g)s.push(0);if(y)s[g]|=128>>>z%8;z+=1},u},d=function(s){var z=r.MODE_8BIT_BYTE,u=i.stringToBytes(s),y={};return y.getMode=function(){return z},y.getLength=function(g){return u.length},y.write=function(g){for(var q=0;q<u.length;q+=1)g.put(u[q],8)},y};return i}();return o}());/*! Copyright 2026 Fonticons, Inc. - https://webawesome.com/license */var ii=class extends L{constructor(){super(...arguments);this.value="",this.label="",this.size=128,this.fill="",this.background="",this.radius=0,this.errorCorrection="H",this.image=null,this.imageBackground=null,this.imageCoverage=null,this.imagePadding=null,this.computedStyle=null}updated(o){super.updated(o),this.generate()}generate(){if(!this.hasUpdated)return;this.canvas.style.maxWidth=`${this.size}px`,this.canvas.style.maxHeight=`${this.size}px`,this.computedStyle||(this.computedStyle=getComputedStyle(this));let o=this.computedStyle,i=this.shadowRoot?.querySelector("span");if(i)this.spanComputedStyle||(this.spanComputedStyle=getComputedStyle(i));za.render({text:this.value,radius:this.radius,ecLevel:this.errorCorrection,fill:this.fill||o.color,background:this.background||null,size:this.size*2,image:this.image,imageEcCover:this.imageCoverage,imagePadding:this.imagePadding,imageBackground:this.imageBackground||this.background,cornerFill:this.spanComputedStyle?.color},this.canvas)}render(){return h`
      <canvas
        part="base qr-code"
        class="qr-code"
        role="img"
        aria-label=${this.label?.length>0?this.label:this.value}
        style=${mo({maxWidth:`${this.size}px`,maxHeight:`${this.size}px`,minWidth:`${this.size}px`,minHeight:`${this.size}px`})}
        @transitionend=${(o)=>{if(o.propertyName==="color")this.generate()}}
      >
        <span style="color: var(--corner-color);"></span>
      </canvas>
    `}};ii.css=n4;f([Y("canvas")],ii.prototype,"canvas",2);f([t()],ii.prototype,"value",2);f([t()],ii.prototype,"label",2);f([t({type:Number})],ii.prototype,"size",2);f([t()],ii.prototype,"fill",2);f([t()],ii.prototype,"background",2);f([t({type:Number})],ii.prototype,"radius",2);f([t({attribute:"error-correction"})],ii.prototype,"errorCorrection",2);f([t()],ii.prototype,"image",2);f([t({attribute:"image-background"})],ii.prototype,"imageBackground",2);f([t({attribute:"image-coverage",type:Number})],ii.prototype,"imageCoverage",2);f([t({attribute:"image-padding",type:Number})],ii.prototype,"imagePadding",2);ii=f([$("wa-qr-code")],ii);/*! Copyright 2026 Fonticons, Inc. - https://webawesome.com/license *//*! Copyright 2026 Fonticons, Inc. - https://webawesome.com/license */var w4=F`
  :host {
    --checked-icon-color: var(--wa-form-control-activated-color);
    --checked-icon-scale: 0.7;

    color: var(--wa-form-control-value-color);
    display: inline-flex;
    flex-direction: row;
    align-items: top;
    font-family: inherit;
    font-weight: var(--wa-form-control-value-font-weight);
    line-height: var(--wa-form-control-value-line-height);
    cursor: pointer;
    user-select: none;
    -webkit-user-select: none;
  }

  :host(:focus) {
    outline: none;
  }

  /* When the control isn't checked, hide the circle for Windows High Contrast mode a11y */
  :host(:not(:state(checked))) svg circle {
    opacity: 0;
  }

  [part~='label'] {
    display: inline;
  }

  [part~='hint'] {
    margin-block-start: 0.5em;
  }

  /* Default spacing for default appearance radios */
  :host([appearance='default']) {
    margin-block: 0.375em; /* Half of the original 0.75em gap on each side */
  }

  :host([appearance='default'][data-wa-radio-horizontal]) {
    margin-block: 0;
    margin-inline: 0.5em; /* Half of the original 1em gap on each side */
  }

  /* Remove margin from first/last items to prevent extra space */
  :host([appearance='default'][data-wa-radio-first]) {
    margin-block-start: 0;
    margin-inline-start: 0;
  }

  :host([appearance='default'][data-wa-radio-last]) {
    margin-block-end: 0;
    margin-inline-end: 0;
  }

  /* Button appearance have no spacing, they get handled by the overlap margins below */
  :host([appearance='button']) {
    margin: 0;
    align-items: center;
    min-height: var(--wa-form-control-height);
    background-color: var(--wa-color-surface-default);
    border: var(--wa-form-control-border-width) var(--wa-form-control-border-style) var(--wa-form-control-border-color);
    border-radius: var(--wa-border-radius-m);
    padding: 0 var(--wa-form-control-padding-inline);
    transition:
      background-color var(--wa-transition-fast),
      border-color var(--wa-transition-fast);
  }

  /* Default appearance */
  :host([appearance='default']) {
    .control {
      flex: 0 0 auto;
      position: relative;
      display: inline-flex;
      align-items: center;
      justify-content: center;
      width: var(--wa-form-control-toggle-size);
      height: var(--wa-form-control-toggle-size);
      border-color: var(--wa-form-control-border-color);
      border-radius: 50%;
      border-style: var(--wa-form-control-border-style);
      border-width: var(--wa-form-control-border-width);
      background-color: var(--wa-form-control-background-color);
      color: transparent;
      transition:
        background var(--wa-transition-normal),
        border-color var(--wa-transition-fast),
        box-shadow var(--wa-transition-fast),
        color var(--wa-transition-fast);
      transition-timing-function: var(--wa-transition-easing);

      margin-inline-end: 0.5em;
    }

    .checked-icon {
      display: flex;
      fill: currentColor;
      width: var(--wa-form-control-toggle-size);
      height: var(--wa-form-control-toggle-size);
      scale: var(--checked-icon-scale);
    }
  }

  /* Button appearance */
  :host([appearance='button']) {
    .control {
      display: none;
    }
  }

  /* Checked */
  :host(:state(checked)) .control {
    color: var(--checked-icon-color);
    border-color: var(--wa-form-control-activated-color);
    background-color: var(--wa-form-control-background-color);
  }

  /* Focus */
  :host(:focus-visible) .control {
    outline: var(--wa-focus-ring);
    outline-offset: var(--wa-focus-ring-offset);
  }

  /* Disabled */
  :host(:state(disabled)) {
    opacity: 0.5;
    cursor: not-allowed;
  }

  /* Horizontal grouping - remove inner border radius */
  :host([appearance='button'][data-wa-radio-horizontal][data-wa-radio-inner]) {
    border-radius: 0;
  }

  :host([appearance='button'][data-wa-radio-horizontal][data-wa-radio-first]) {
    border-start-end-radius: 0;
    border-end-end-radius: 0;
  }

  :host([appearance='button'][data-wa-radio-horizontal][data-wa-radio-last]) {
    border-start-start-radius: 0;
    border-end-start-radius: 0;
  }

  /* Vertical grouping - remove inner border radius */
  :host([appearance='button'][data-wa-radio-vertical][data-wa-radio-inner]) {
    border-radius: 0;
  }

  :host([appearance='button'][data-wa-radio-vertical][data-wa-radio-first]) {
    border-end-start-radius: 0;
    border-end-end-radius: 0;
  }

  :host([appearance='button'][data-wa-radio-vertical][data-wa-radio-last]) {
    border-start-start-radius: 0;
    border-start-end-radius: 0;
  }

  @media (hover: hover) {
    :host([appearance='button']:hover:not(:state(disabled), :state(checked))) {
      background-color: color-mix(in srgb, var(--wa-color-surface-default) 95%, var(--wa-color-mix-hover));
    }
  }

  :host([appearance='button']:focus-visible) {
    outline: var(--wa-focus-ring);
    outline-offset: var(--wa-focus-ring-offset);
  }

  :host([appearance='button']:state(checked)) {
    border-color: var(--wa-form-control-activated-color);
    background-color: var(--wa-color-brand-fill-quiet);
  }

  :host([appearance='button']:state(checked):focus-visible) {
    outline: var(--wa-focus-ring);
    outline-offset: var(--wa-focus-ring-offset);
  }

  /* Button overlap margins */
  :host([appearance='button'][data-wa-radio-horizontal]:not([data-wa-radio-first])) {
    margin-inline-start: calc(-1 * var(--wa-form-control-border-width));
  }

  :host([appearance='button'][data-wa-radio-vertical]:not([data-wa-radio-first])) {
    margin-block-start: calc(-1 * var(--wa-form-control-border-width));
  }

  /* Ensure interactive states are visible above adjacent buttons */
  :host([appearance='button']:hover),
  :host([appearance='button']:state(checked)) {
    position: relative;
    z-index: 1;
  }

  :host([appearance='button']:focus-visible) {
    z-index: 2;
  }
`;/*! Copyright 2026 Fonticons, Inc. - https://webawesome.com/license */var Zi=class extends E{constructor(){super();if(this.checked=!1,this.forceDisabled=!1,this.appearance="default",this.disabled=!1,this.handleClick=()=>{if(!this.disabled&&!this.forceDisabled)this.checked=!0},!M)this.addEventListener("click",this.handleClick)}handleSizeChange(){j(this.localName,this.size)}connectedCallback(){super.connectedCallback(),this.setInitialAttributes()}setInitialAttributes(){this.setAttribute("role","radio"),this.tabIndex=0,this.setAttribute("aria-disabled",this.disabled||this.forceDisabled?"true":"false")}updated(o){if(super.updated(o),o.has("checked")){if(this.customStates.set("checked",this.checked),this.setAttribute("aria-checked",this.checked?"true":"false"),!this.disabled&&!this.forceDisabled)this.tabIndex=this.checked?0:-1}if(o.has("disabled")||o.has("forceDisabled")){let i=this.disabled||this.forceDisabled;if(this.customStates.set("disabled",i),this.setAttribute("aria-disabled",i?"true":"false"),i)this.tabIndex=-1;else this.tabIndex=this.checked?0:-1}}setValue(){}render(){return h`
      <span part="control" class="control">
        ${this.checked?h`
              <svg viewBox="0 0 16 16" xmlns="http://www.w3.org/2000/svg" part="checked-icon" class="checked-icon">
                <circle cx="8" cy="8" r="8" />
              </svg>
            `:""}
      </span>

      <slot part="label" class="label"></slot>
    `}};Zi.css=[go,I,w4];f([J()],Zi.prototype,"checked",2);f([J()],Zi.prototype,"forceDisabled",2);f([t({reflect:!0})],Zi.prototype,"value",2);f([t({reflect:!0})],Zi.prototype,"appearance",2);f([t({reflect:!0})],Zi.prototype,"size",2);f([v("size")],Zi.prototype,"handleSizeChange",1);f([t({type:Boolean})],Zi.prototype,"disabled",2);Zi=f([$("wa-radio")],Zi);Zi.disableWarning?.("change-in-update");/*! Copyright 2026 Fonticons, Inc. - https://webawesome.com/license *//*! Copyright 2026 Fonticons, Inc. - https://webawesome.com/license */var b4=F`
  .form-control {
    position: relative;
    border: none;
    padding: 0;
    margin: 0;
  }

  .label {
    padding: 0;
  }

  .radio-group-required .label::after {
    content: var(--wa-form-control-required-content);
    margin-inline-start: var(--wa-form-control-required-content-offset);
  }

  [part~='form-control-input'] {
    display: flex;
    flex-direction: column;
    flex-wrap: wrap;
    gap: 0; /* Radios handle their own spacing */
  }

  /* Horizontal */
  :host([orientation='horizontal']) [part~='form-control-input'] {
    flex-direction: row;
  }

  /* Help text */
  [part~='hint'] {
    margin-block-start: 0.5em;
  }
`;/*! Copyright 2026 Fonticons, Inc. - https://webawesome.com/license */var Do=class extends E{constructor(){super();if(this.hasSlotController=new W(this,"hint","label"),this.label="",this.hint="",this.name=null,this.disabled=!1,this.orientation="vertical",this._value=null,this.defaultValue=this.getAttribute("value")||null,this.required=!1,this.withLabel=!1,this.withHint=!1,this.handleRadioClick=(o)=>{let i=o.target.closest("wa-radio");if(!i||i.disabled||i.forceDisabled||this.disabled)return;let r=this.value;this.value=i.value,i.checked=!0;let a=this.getAllRadios();for(let n of a){if(i===n)continue;n.checked=!1,n.setAttribute("tabindex","-1")}if(this.value!==r)this.updateComplete.then(()=>{this.dispatchEvent(new InputEvent("input",{bubbles:!0,composed:!0})),this.dispatchEvent(new Event("change",{bubbles:!0,composed:!0}))})},!M)this.addEventListener("keydown",this.handleKeyDown),this.addEventListener("click",this.handleRadioClick)}static get validators(){let o=M?[]:[ti({validationElement:Object.assign(document.createElement("input"),{required:!0,type:"radio",name:bi("__wa-radio")})})];return[...super.validators,...o]}get value(){if(this.valueHasChanged)return this._value;return this._value??this.defaultValue}set value(o){if(typeof o==="number")o=String(o);this.valueHasChanged=!0,this._value=o}handleSizeChange(){j(this.localName,this.size)}get validationTarget(){if(M)return;let o=this.querySelector(":is(wa-radio):not([disabled])");if(!o)return;return o}updated(o){if(o.has("disabled")||o.has("size")||o.has("value")||o.has("defaultValue"))this.syncRadioElements()}formResetCallback(...o){this._value=null,super.formResetCallback(...o),this.syncRadioElements()}getAllRadios(){return[...this.querySelectorAll("wa-radio")]}handleLabelClick(){this.focus()}async syncRadioElements(){let o=this.getAllRadios();if(o.forEach((i,r)=>{if(this.size)i.setAttribute("size",this.size);i.toggleAttribute("data-wa-radio-horizontal",this.orientation!=="vertical"),i.toggleAttribute("data-wa-radio-vertical",this.orientation==="vertical"),i.toggleAttribute("data-wa-radio-first",r===0),i.toggleAttribute("data-wa-radio-inner",r!==0&&r!==o.length-1),i.toggleAttribute("data-wa-radio-last",r===o.length-1),i.forceDisabled=this.disabled}),await Promise.all(o.map(async(i)=>{if(await i.updateComplete,!i.disabled&&i.value===this.value)i.checked=!0;else i.checked=!1})),this.disabled)o.forEach((i)=>{i.tabIndex=-1});else{let i=o.filter((a)=>!a.disabled),r=i.find((a)=>a.checked);if(i.length>0)if(r)i.forEach((a)=>{a.tabIndex=a.checked?0:-1});else i.forEach((a,n)=>{a.tabIndex=n===0?0:-1});o.filter((a)=>a.disabled).forEach((a)=>{a.tabIndex=-1})}}handleKeyDown(o){if(!["ArrowUp","ArrowDown","ArrowLeft","ArrowRight"," "].includes(o.key)||this.disabled)return;let i=this.getAllRadios().filter((c)=>!c.disabled);if(i.length<=0)return;o.preventDefault();let r=this.value,a=i.find((c)=>c.checked)??i[0],n=o.key===" "?0:["ArrowUp","ArrowLeft"].includes(o.key)?-1:1,w=i.indexOf(a)+n;if(!w)w=0;if(w<0)w=i.length-1;if(w>i.length-1)w=0;let b=i.some((c)=>c.tagName.toLowerCase()==="wa-radio-button");if(this.getAllRadios().forEach((c)=>{if(c.checked=!1,!b)c.setAttribute("tabindex","-1")}),this.value=i[w].value,i[w].checked=!0,!b)i[w].setAttribute("tabindex","0"),i[w].focus();else i[w].shadowRoot.querySelector("button").focus();if(this.value!==r)this.updateComplete.then(()=>{this.dispatchEvent(new InputEvent("input",{bubbles:!0,composed:!0})),this.dispatchEvent(new Event("change",{bubbles:!0,composed:!0}))});o.preventDefault()}focus(o){if(this.disabled)return;let i=this.getAllRadios(),r=i.find((w)=>w.checked),a=i.find((w)=>!w.disabled),n=r||a;if(n)n.focus(o)}render(){let o=this.hasSlotController.test("label","withLabel"),i=this.hasSlotController.test("hint","withHint"),r=this.label?!0:!!o,a=this.hint?!0:!!i;return h`
      <fieldset
        part="form-control"
        class=${Z({"form-control":!0,"form-control-radio-group":!0,"form-control-has-label":r})}
        role="radiogroup"
        aria-labelledby="label"
        aria-describedby="hint"
        aria-errormessage="error-message"
        aria-orientation=${this.orientation}
      >
        <label
          part="form-control-label"
          id="label"
          class=${Z({label:!0,"has-label":r})}
          aria-hidden=${r?"false":"true"}
          @click=${this.handleLabelClick}
        >
          <slot name="label">${this.label}</slot>
        </label>

        <slot part="form-control-input" @slotchange=${this.syncRadioElements}></slot>

        <slot
          id="hint"
          name="hint"
          part="hint"
          class=${Z({"has-slotted":a})}
          aria-hidden=${a?"false":"true"}
          >${this.hint}</slot
        >
      </fieldset>
    `}};Do.css=[I,go,b4];Do.shadowRootOptions={...E.shadowRootOptions,delegatesFocus:!0};f([Y("slot:not([name])")],Do.prototype,"defaultSlot",2);f([t()],Do.prototype,"label",2);f([t({attribute:"hint"})],Do.prototype,"hint",2);f([t({reflect:!0})],Do.prototype,"name",2);f([t({type:Boolean,reflect:!0})],Do.prototype,"disabled",2);f([t({reflect:!0})],Do.prototype,"orientation",2);f([J()],Do.prototype,"value",1);f([t({attribute:"value",reflect:!0})],Do.prototype,"defaultValue",2);f([t({reflect:!0})],Do.prototype,"size",2);f([v("size")],Do.prototype,"handleSizeChange",1);f([t({type:Boolean,reflect:!0})],Do.prototype,"required",2);f([t({type:Boolean,attribute:"with-label"})],Do.prototype,"withLabel",2);f([t({type:Boolean,attribute:"with-hint"})],Do.prototype,"withHint",2);Do=f([$("wa-radio-group")],Do);Do.disableWarning?.("change-in-update");/*! Copyright 2026 Fonticons, Inc. - https://webawesome.com/license *//*! Copyright 2026 Fonticons, Inc. - https://webawesome.com/license */var t4=class extends Event{constructor(o){super("wa-content-change",{bubbles:!0,cancelable:!1,composed:!0});this.detail=o}};/*! Copyright 2026 Fonticons, Inc. - https://webawesome.com/license */var c4=F`
  :host {
    display: contents;
  }

  /*
   * Force-hide unselected children. A bare [hidden] (display: none from the UA sheet) loses to any
   * author display set on the child — a utility class like .wa-flank, or a component's own
   * :host display — so children with their own layout wouldn't actually hide without this.
   */
  ::slotted([hidden]) {
    display: none !important;
  }

  /*
   * @keyframes are defined in both document scope (random-content.ts) and here:
   * Chromium resolves animation-name from the document for slotted elements;
   * WebKit resolves it from the shadow root. Both copies are needed.
   */

  @keyframes wa-rc-fade {
    from {
      opacity: 0;
    }
    to {
      opacity: 1;
    }
  }

  @keyframes wa-rc-fade-up {
    from {
      opacity: 0;
      transform: translateY(var(--animation-translate, 0.5em));
    }
    to {
      opacity: 1;
      transform: translateY(0);
    }
  }

  @keyframes wa-rc-fade-down {
    from {
      opacity: 0;
      transform: translateY(calc(-1 * var(--animation-translate, 0.5em)));
    }
    to {
      opacity: 1;
      transform: translateY(0);
    }
  }

  @keyframes wa-rc-fade-left {
    from {
      opacity: 0;
      transform: translateX(var(--animation-translate, 0.5em));
    }
    to {
      opacity: 1;
      transform: translateX(0);
    }
  }

  @keyframes wa-rc-fade-right {
    from {
      opacity: 0;
      transform: translateX(calc(-1 * var(--animation-translate, 0.5em)));
    }
    to {
      opacity: 1;
      transform: translateX(0);
    }
  }

  /* The JS already skips animations under reduced motion; this guards CSS-only consumers too. */
  @media (prefers-reduced-motion: no-preference) {
    ::slotted([data-wa-animation]) {
      animation-duration: var(--animation-duration, 300ms);
      animation-timing-function: var(--animation-easing, ease);
      animation-fill-mode: both;
    }

    ::slotted([data-wa-animation='fade']) {
      animation-name: wa-rc-fade;
    }

    ::slotted([data-wa-animation='fade-up']) {
      animation-name: wa-rc-fade-up;
    }

    ::slotted([data-wa-animation='fade-down']) {
      animation-name: wa-rc-fade-down;
    }

    ::slotted([data-wa-animation='fade-left']) {
      animation-name: wa-rc-fade-left;
    }

    ::slotted([data-wa-animation='fade-right']) {
      animation-name: wa-rc-fade-right;
    }
  }
`;/*! Copyright 2026 Fonticons, Inc. - https://webawesome.com/license */if(typeof document<"u"){let o=new CSSStyleSheet;o.replaceSync(`
    @keyframes wa-rc-fade {
      from { opacity: 0; }
      to { opacity: 1; }
    }
    @keyframes wa-rc-fade-up {
      from { opacity: 0; transform: translateY(var(--animation-translate, 0.5em)); }
      to { opacity: 1; transform: translateY(0); }
    }
    @keyframes wa-rc-fade-down {
      from { opacity: 0; transform: translateY(calc(-1 * var(--animation-translate, 0.5em))); }
      to { opacity: 1; transform: translateY(0); }
    }
    @keyframes wa-rc-fade-left {
      from { opacity: 0; transform: translateX(var(--animation-translate, 0.5em)); }
      to { opacity: 1; transform: translateX(0); }
    }
    @keyframes wa-rc-fade-right {
      from { opacity: 0; transform: translateX(calc(-1 * var(--animation-translate, 0.5em))); }
      to { opacity: 1; transform: translateX(0); }
    }
  `),document.adoptedStyleSheets=[...document.adoptedStyleSheets,o]}var li=class extends L{constructor(){super(...arguments);this.sequenceCursor=0,this.uniqueQueue=[],this.currentSelection=new Set,this.isInitialSelection=!0,this.autoplayController=new d2(this,()=>this.randomize()),this.animationCleanups=new WeakMap,this.liveAnnouncement="",this.items=1,this.mode="unique",this.autoplay=!1,this.autoplayInterval=3000,this.animation="none"}connectedCallback(){if(super.connectedCallback(),this.hasUpdated)this.syncAutoplay()}firstUpdated(o){super.firstUpdated(o),this.syncAutoplay()}handleAutoplayChange(){this.syncAutoplay()}handleModeChange(){this.sequenceCursor=0,this.uniqueQueue=[],this.currentSelection.clear(),this.randomize()}handleItemsChange(){this.uniqueQueue=[],this.randomize()}randomize(){let o=this.assignedChildren();if(!o.length)return[];let i=Math.min(Math.max(1,this.items),o.length),r;if(this.mode==="sequence")r=[],Array.from({length:i}).forEach((w,b)=>{r.push(o[(this.sequenceCursor+b)%o.length])}),this.sequenceCursor=(this.sequenceCursor+i)%o.length;else if(this.mode==="unique"){if(this.uniqueQueue.length<i){let w=new Set(this.uniqueQueue),b=o.filter((m)=>!this.currentSelection.has(m)&&!w.has(m)),c=o.filter((m)=>this.currentSelection.has(m)&&!w.has(m));if(this.uniqueQueue.push(...this.sample(b,b.length),...this.sample(c,c.length)),this.uniqueQueue.length<i)this.uniqueQueue=this.sample([...o],o.length)}r=this.uniqueQueue.splice(0,i),this.currentSelection=new Set(r)}else{let w=o.filter((b)=>!this.currentSelection.has(b));r=this.sample(w.length>=i?w:o,i),this.currentSelection=new Set(r)}let a=r[0],n=r[r.length-1];if(o.forEach((w)=>{let b=w,c=r.includes(w);delete b.dataset.waAnimation,b.style.display="",b.hidden=!c,b.style.marginBlockStart=c&&w===a?"0":"",b.style.marginBlockEnd=c&&w===n?"0":""}),this.animation!=="none"&&!H0())r.forEach((w)=>{let b=w;if(this.animation!=="fade"&&getComputedStyle(w).display==="inline")b.style.display="inline-block";w.getAnimations().forEach((m)=>m.cancel()),b.dataset.waAnimation=this.animation,this.animationCleanups.get(w)?.abort();let c=new AbortController;this.animationCleanups.set(w,c),b.addEventListener("animationend",()=>delete b.dataset.waAnimation,{once:!0,signal:c.signal})});if(this.isInitialSelection)this.isInitialSelection=!1;else this.liveAnnouncement=r.map((w)=>w.textContent?.trim()).filter(Boolean).join(", ");return this.dispatchEvent(new t4({items:r})),r}syncAutoplay(){if(this.autoplayController.stop(),this.autoplay&&this.autoplayInterval>0)this.autoplayController.start(this.autoplayInterval)}assignedChildren(){return this.shadowRoot?.querySelector("slot")?.assignedElements()??[]}sample(o,i){let r=[...o];return Array.from({length:i}).forEach((a,n)=>{let w=n+Math.floor(Math.random()*(r.length-n));[r[n],r[w]]=[r[w],r[n]]}),r.slice(0,i)}handleSlotChange(){this.randomize()}render(){return h`
      <slot @slotchange=${this.handleSlotChange}></slot>
      <div class="wa-visually-hidden" role="status" aria-live="polite" aria-atomic="true">${this.liveAnnouncement}</div>
    `}};li.css=[c4,Ii];f([J()],li.prototype,"liveAnnouncement",2);f([t({type:Number})],li.prototype,"items",2);f([t({reflect:!0})],li.prototype,"mode",2);f([t({type:Boolean,reflect:!0})],li.prototype,"autoplay",2);f([t({type:Number,attribute:"autoplay-interval"})],li.prototype,"autoplayInterval",2);f([t({reflect:!0})],li.prototype,"animation",2);f([v(["autoplay","autoplayInterval"],{waitUntilFirstUpdate:!0})],li.prototype,"handleAutoplayChange",1);f([v("mode",{waitUntilFirstUpdate:!0})],li.prototype,"handleModeChange",1);f([v("items",{waitUntilFirstUpdate:!0})],li.prototype,"handleItemsChange",1);li=f([$("wa-random-content")],li);/*! Copyright 2026 Fonticons, Inc. - https://webawesome.com/license *//*! Copyright 2026 Fonticons, Inc. - https://webawesome.com/license */var ya=class extends Event{constructor(o){super("wa-hover",{bubbles:!0,cancelable:!1,composed:!0});this.detail=o}};/*! Copyright 2026 Fonticons, Inc. - https://webawesome.com/license */var m4=F`
  :host {
    --symbol-color: var(--wa-color-neutral-on-quiet);
    --symbol-color-active: var(--wa-color-yellow-70);
    --symbol-spacing: 0.125em;

    display: inline-flex;
    border-radius: var(--wa-border-radius-m);
    vertical-align: middle;
    touch-action: none;
  }

  :host(:focus) {
    outline: none;
  }

  :host(:focus-visible) {
    outline: var(--wa-focus-ring);
    outline-offset: var(--wa-focus-ring-offset);
  }

  .rating {
    position: relative;
    display: inline-flex;
  }

  .symbols {
    display: inline-flex;
    gap: 0.125em;
    position: relative;
    line-height: 0;
    color: var(--symbol-color);
    white-space: nowrap;
    cursor: pointer;
  }

  .symbols > * {
    padding: var(--symbol-spacing);
  }

  .symbol-active,
  .partial-filled {
    color: var(--symbol-color-active);
  }

  .partial-symbol-container {
    position: relative;
  }

  .partial-filled {
    position: absolute;
    top: var(--symbol-spacing);
    left: var(--symbol-spacing);
  }

  .symbol {
    transition: scale var(--wa-transition-normal) var(--wa-transition-easing);
    pointer-events: none;
  }

  .symbol-hover {
    scale: 1.2;
  }

  .rating-readonly .symbols {
    cursor: default;
  }

  :host([disabled]) .symbol-hover,
  .rating-readonly .symbol-hover {
    scale: none;
  }

  :host([disabled]) {
    opacity: 0.5;
  }

  :host([disabled]) .symbols {
    cursor: not-allowed;
  }

  /* Forced colors mode */
  @media (forced-colors: active) {
    .symbol-active {
      color: SelectedItem;
    }
  }
`;/*! Copyright 2026 Fonticons, Inc. - https://webawesome.com/license */var Qo=class extends E{constructor(){super(...arguments);this.assumeInteractionOn=["change"],this.localize=new B(this),this.role="slider",this.hoverValue=0,this.isHovering=!1,this.name=null,this.label="",this.value=0,this.defaultValue=0,this.max=5,this.precision=1,this.readonly=!1,this.required=!1,this.getSymbol=(o,i)=>{return i?'<wa-icon name="star" library="system" variant="solid"></wa-icon>':'<wa-icon name="star" library="system" variant="regular"></wa-icon>'},this.size="m",this.handleClick=(o)=>{if(this.disabled)return;this.setRatingValue(this.getValueFromXCoordinate(o.clientX)),this.updateComplete.then(()=>{this.dispatchEvent(new Event("change",{bubbles:!0,composed:!0}))})},this.handleKeyDown=(o)=>{let i=this.matches(":dir(ltr)"),r=this.localize.dir()==="rtl",a=this.value;if(this.disabled||this.readonly)return;if(o.key==="ArrowDown"||i&&o.key==="ArrowLeft"||r&&o.key==="ArrowRight"){let n=o.shiftKey?1:this.precision;this.value=Math.max(0,this.value-n),o.preventDefault()}if(o.key==="ArrowUp"||i&&o.key==="ArrowRight"||r&&o.key==="ArrowLeft"){let n=o.shiftKey?1:this.precision;this.value=Math.min(this.max,this.value+n),o.preventDefault()}if(o.key==="Home")this.value=0,o.preventDefault();if(o.key==="End")this.value=this.max,o.preventDefault();if(this.value!==a)this.updateComplete.then(()=>{this.dispatchEvent(new Event("change",{bubbles:!0,composed:!0}))})},this.handlePointerEnter=(o)=>{this.isHovering=!0,this.hoverValue=this.getValueFromPointerPosition(o)},this.handlePointerMove=(o)=>{this.hoverValue=this.getValueFromPointerPosition(o)},this.handlePointerLeave=()=>{this.isHovering=!1},this.handlePointerDown=(o)=>{if(o.button!==0)return;this.isHovering=!0,this.hoverValue=this.getValueFromPointerPosition(o),this.setPointerCapture(o.pointerId),o.preventDefault()},this.handlePointerUp=(o)=>{this.releasePointerCapture(o.pointerId),this.isHovering=!1}}static get validators(){return[...super.validators,ti()]}connectedCallback(){if(super.connectedCallback(),this.setAttribute("aria-valuenow",String(this.value)),this.setAttribute("aria-valuemin","0"),this.setAttribute("aria-valuemax",String(this.max)),this.setAttribute("aria-disabled",this.disabled?"true":"false"),this.setAttribute("aria-readonly",this.readonly?"true":"false"),this.label)this.setAttribute("aria-label",this.label);if(!this.disabled&&!this.readonly)this.tabIndex=0;else this.tabIndex=-1;this.addEventListener("click",this.handleClick),this.addEventListener("keydown",this.handleKeyDown),this.addEventListener("pointerenter",this.handlePointerEnter),this.addEventListener("pointermove",this.handlePointerMove),this.addEventListener("pointerleave",this.handlePointerLeave),this.addEventListener("pointerdown",this.handlePointerDown),this.addEventListener("pointerup",this.handlePointerUp)}disconnectedCallback(){super.disconnectedCallback(),this.removeEventListener("click",this.handleClick),this.removeEventListener("keydown",this.handleKeyDown),this.removeEventListener("pointerenter",this.handlePointerEnter),this.removeEventListener("pointermove",this.handlePointerMove),this.removeEventListener("pointerleave",this.handlePointerLeave),this.removeEventListener("pointerdown",this.handlePointerDown),this.removeEventListener("pointerup",this.handlePointerUp)}updated(o){if(super.updated(o),o.has("value"))this.setAttribute("aria-valuenow",String(this.value));if(o.has("max"))this.setAttribute("aria-valuemax",String(this.max));if(o.has("disabled"))this.setAttribute("aria-disabled",this.disabled?"true":"false"),this.tabIndex=this.disabled||this.readonly?-1:0;if(o.has("readonly"))this.setAttribute("aria-readonly",this.readonly?"true":"false"),this.tabIndex=this.disabled||this.readonly?-1:0;if(o.has("label"))if(this.label)this.setAttribute("aria-label",this.label);else this.removeAttribute("aria-label")}handleSizeChange(){j(this.localName,this.size)}getValueFromPointerPosition(o){return this.getValueFromXCoordinate(o.clientX)}getValueFromXCoordinate(o){let i=this.localize.dir()==="rtl",{left:r,right:a,width:n}=this.getBoundingClientRect(),w=i?this.roundToPrecision((a-o)/n*this.max,this.precision):this.roundToPrecision((o-r)/n*this.max,this.precision);return D(w,0,this.max)}setRatingValue(o){if(this.disabled||this.readonly)return;this.value=o===this.value?0:o,this.isHovering=!1}roundToPrecision(o,i=0.5){let r=1/i;return Math.ceil(o*r)/r}handleHoverValueChange(){this.dispatchEvent(new ya({phase:"move",value:this.hoverValue}))}handleIsHoveringChange(){this.dispatchEvent(new ya({phase:this.isHovering?"start":"end",value:this.hoverValue}))}formResetCallback(){this.value=this.defaultValue,super.formResetCallback()}render(){let o=this.didSSR&&!this.hasUpdated?this.dir:this.localize.dir()==="rtl",i=Array.from(Array(this.max).keys()),r=0;if(this.disabled||this.readonly)r=this.value;else r=this.isHovering?this.hoverValue:this.value;return h`
      <div
        part="base rating"
        class=${Z({rating:!0,"rating-readonly":this.readonly,"rating-disabled":this.disabled})}
      >
        <span class="symbols">
          ${i.map((a)=>{let n=r>=a+1;if(r>a&&r<a+1)return h`
                <span
                  class=${Z({symbol:!0,"partial-symbol-container":!0,"symbol-hover":this.isHovering&&Math.ceil(r)===a+1})}
                  role="presentation"
                >
                  <div
                    style=${mo({clipPath:o?`inset(0 ${(r-a)*100}% 0 0)`:`inset(0 0 0 ${(r-a)*100}%)`})}
                  >
                    ${J0(this.getSymbol(a+1,!1))}
                  </div>
                  <div
                    class="partial-filled"
                    style=${mo({clipPath:o?`inset(0 0 0 ${100-(r-a)*100}%)`:`inset(0 ${100-(r-a)*100}% 0 0)`})}
                  >
                    ${J0(this.getSymbol(a+1,!0))}
                  </div>
                </span>
              `;return h`
              <span
                class=${Z({symbol:!0,"symbol-hover":this.isHovering&&Math.ceil(r)===a+1,"symbol-active":r>=a+1})}
                role="presentation"
              >
                ${J0(this.getSymbol(a+1,n))}
              </span>
            `})}
        </span>
      </div>
    `}};Qo.css=[I,m4];f([t({reflect:!0})],Qo.prototype,"role",2);f([J()],Qo.prototype,"hoverValue",2);f([J()],Qo.prototype,"isHovering",2);f([t()],Qo.prototype,"name",2);f([t()],Qo.prototype,"label",2);f([t({type:Number})],Qo.prototype,"value",2);f([t({type:Number,attribute:"default-value"})],Qo.prototype,"defaultValue",2);f([t({type:Number})],Qo.prototype,"max",2);f([t({type:Number})],Qo.prototype,"precision",2);f([t({type:Boolean,reflect:!0})],Qo.prototype,"readonly",2);f([t({type:Boolean})],Qo.prototype,"disabled",2);f([t({type:Boolean,reflect:!0})],Qo.prototype,"required",2);f([t()],Qo.prototype,"getSymbol",2);f([t({reflect:!0})],Qo.prototype,"size",2);f([v("size")],Qo.prototype,"handleSizeChange",1);f([v("hoverValue")],Qo.prototype,"handleHoverValueChange",1);f([v("isHovering")],Qo.prototype,"handleIsHoveringChange",1);Qo=f([$("wa-rating")],Qo);/*! Copyright 2026 Fonticons, Inc. - https://webawesome.com/license *//*! Copyright 2026 Fonticons, Inc. - https://webawesome.com/license */var $6=[{max:2760000,value:60000,unit:"minute"},{max:72000000,value:3600000,unit:"hour"},{max:518400000,value:86400000,unit:"day"},{max:2419200000,value:604800000,unit:"week"},{max:28512000000,value:2592000000,unit:"month"},{max:1/0,value:31536000000,unit:"year"}],o0=class extends L{constructor(){super(...arguments);this.localize=new B(this),this.isoTime="",this.relativeTime="",this.date=new Date,this.format="long",this.numeric="auto",this.sync=!1,this.referenceDate=null}disconnectedCallback(){super.disconnectedCallback(),clearTimeout(this.updateTimeout)}willUpdate(o){let i=this.referenceDate||new Date,r=new Date(this.date);if(isNaN(r.getMilliseconds()))return this.relativeTime="",this.isoTime="",super.willUpdate(o);let a=r.getTime()-i.getTime(),{unit:n,value:w}=$6.find((b)=>Math.abs(a)<b.max);if(this.isoTime=r.toISOString(),this.relativeTime=this.localize.relativeTime(Math.round(a/w),n,{numeric:this.numeric,style:this.format}),clearTimeout(this.updateTimeout),this.sync){let b;if(n==="minute")b=D2("second");else if(n==="hour")b=D2("minute");else if(n==="day")b=D2("hour");else b=D2("day");this.updateTimeout=setTimeout(()=>this.requestUpdate(),b)}}render(){if(this.relativeTime===""&&this.isoTime==="")return"";return h`<time datetime=${this.isoTime}>${this.relativeTime}</time>`}};f([J()],o0.prototype,"isoTime",2);f([J()],o0.prototype,"relativeTime",2);f([t()],o0.prototype,"date",2);f([t()],o0.prototype,"format",2);f([t()],o0.prototype,"numeric",2);f([t({type:Boolean})],o0.prototype,"sync",2);f([J()],o0.prototype,"referenceDate",2);o0=f([$("wa-relative-time")],o0);function D2(o){let r={second:1000,minute:60000,hour:3600000,day:86400000}[o];return r-Date.now()%r}/*! Copyright 2026 Fonticons, Inc. - https://webawesome.com/license *//*! Copyright 2026 Fonticons, Inc. - https://webawesome.com/license */var p4=class extends Event{constructor(o){super("wa-resize",{bubbles:!0,cancelable:!1,composed:!0});this.detail=o}};/*! Copyright 2026 Fonticons, Inc. - https://webawesome.com/license */var h4=F`
  :host {
    display: contents;
  }
`;/*! Copyright 2026 Fonticons, Inc. - https://webawesome.com/license */var hr=class extends L{constructor(){super(...arguments);this.observedElements=[],this.disabled=!1}connectedCallback(){if(super.connectedCallback(),!M){if(this.resizeObserver=new ResizeObserver((o)=>{this.dispatchEvent(new p4({entries:o}))}),!this.disabled)this.updateComplete.then(()=>{this.startObserver()})}}disconnectedCallback(){super.disconnectedCallback(),this.stopObserver()}handleSlotChange(){if(!this.disabled)this.startObserver()}startObserver(){let o=this.shadowRoot.querySelector("slot");if(o!==null){let i=o.assignedElements({flatten:!0});this.observedElements.forEach((r)=>this.resizeObserver.unobserve(r)),this.observedElements=[],i.forEach((r)=>{this.resizeObserver.observe(r),this.observedElements.push(r)})}}stopObserver(){this.resizeObserver.disconnect()}handleDisabledChange(){if(this.disabled)this.stopObserver();else this.startObserver()}render(){return h` <slot @slotchange=${this.handleSlotChange}></slot> `}};hr.css=h4;f([t({type:Boolean,reflect:!0})],hr.prototype,"disabled",2);f([v("disabled",{waitUntilFirstUpdate:!0})],hr.prototype,"handleDisabledChange",1);hr=f([$("wa-resize-observer")],hr);/*! Copyright 2026 Fonticons, Inc. - https://webawesome.com/license *//*! Copyright 2026 Fonticons, Inc. - https://webawesome.com/license */var d4=F`
  :host {
    --shadow-color: var(--wa-color-surface-default);
    --shadow-size: 2rem;

    /* private (defined dynamically) */
    --start-shadow-opacity: 0;
    --end-shadow-opacity: 0;

    display: block;
    position: relative;
    max-width: 100%;
    overflow: hidden;
    isolation: isolate;
  }

  :host([orientation='vertical']) {
    display: flex;
    flex-direction: column;
    height: 100%;
  }

  #content {
    z-index: 1; /* below shadows */
    border-radius: inherit;
    scroll-behavior: smooth;
    scrollbar-width: thin;

    /* Prevent text in mobile Safari from being larger when the container width larger than the viewport */
    -webkit-text-size-adjust: 100%;

    &:focus {
      outline: none;
    }

    &:focus-visible {
      outline: var(--wa-focus-ring);
      outline-offset: var(--wa-focus-ring-offset);
    }
  }

  :host([without-scrollbar]) #content {
    scrollbar-width: none;
  }

  :host([orientation='horizontal']) #content {
    overflow-x: auto;
    overflow-y: hidden;
  }

  :host([orientation='vertical']) #content {
    flex: 1 1 auto;
    min-height: 0; /* This is crucial for flex children to respect overflow */
    overflow-x: hidden;
    overflow-y: auto;
  }

  #start-shadow,
  #end-shadow {
    z-index: 2;
  }

  #start-shadow {
    opacity: var(--start-shadow-opacity);
  }

  #end-shadow {
    opacity: var(--end-shadow-opacity);
  }

  /* Horizontal shadows */
  :host([orientation='horizontal']) {
    #start-shadow,
    #end-shadow {
      position: absolute;
      top: 0;
      bottom: 0;
      width: var(--shadow-size);
      pointer-events: none;
    }

    #start-shadow {
      &:dir(ltr) {
        left: 0;
        background: linear-gradient(to right, var(--shadow-color), transparent 100%);
      }

      &:dir(rtl) {
        right: 0;
        background: linear-gradient(to left, var(--shadow-color), transparent 100%);
      }
    }

    #end-shadow {
      &:dir(ltr) {
        right: 0;
        background: linear-gradient(to left, var(--shadow-color), transparent 100%);
      }

      &:dir(rtl) {
        left: 0;
        background: linear-gradient(to right, var(--shadow-color), transparent 100%);
      }
    }
  }

  /* Vertical shadows */
  :host([orientation='vertical']) {
    #start-shadow,
    #end-shadow {
      position: absolute;
      right: 0;
      left: 0;
      height: var(--shadow-size);
      pointer-events: none;
    }

    #start-shadow {
      top: 0;
      background: linear-gradient(to bottom, var(--shadow-color), transparent 100%);
    }

    #end-shadow {
      bottom: 0;
      background: linear-gradient(to top, var(--shadow-color), transparent 100%);
    }
  }
`;/*! Copyright 2026 Fonticons, Inc. - https://webawesome.com/license */var i0=class extends L{constructor(){super(...arguments);this.localize=new B(this),this.resizeObserver=null,this.canScroll=!1,this.orientation="horizontal",this.withoutScrollbar=!1,this.withoutShadow=!1}connectedCallback(){if(super.connectedCallback(),!M)this.resizeObserver=new ResizeObserver(()=>this.updateScroll()),this.resizeObserver.observe(this)}disconnectedCallback(){super.disconnectedCallback(),this.resizeObserver?.disconnect()}handleKeyDown(o){if(o.key==="Home")o.preventDefault(),this.content.scrollTo({left:this.orientation==="horizontal"?0:void 0,top:this.orientation==="vertical"?0:void 0});if(o.key==="End")o.preventDefault(),this.content.scrollTo({left:this.orientation==="horizontal"?this.content.scrollWidth:void 0,top:this.orientation==="vertical"?this.content.scrollHeight:void 0})}handleSlotChange(){this.updateScroll()}updateScroll(){if(this.orientation==="horizontal"){let o=Math.ceil(this.content.clientWidth),i=Math.abs(Math.ceil(this.content.scrollLeft)),a=Math.ceil(this.content.scrollWidth)-o;this.canScroll=a>0;let n=Math.min(1,i/(a*0.05)),w=Math.min(1,(a-i)/(a*0.05));this.style.setProperty("--start-shadow-opacity",String(n||0)),this.style.setProperty("--end-shadow-opacity",String(w||0))}else{let o=Math.ceil(this.content.clientHeight),i=Math.abs(Math.ceil(this.content.scrollTop)),a=Math.ceil(this.content.scrollHeight)-o;this.canScroll=a>0;let n=Math.min(1,i/(a*0.05)),w=Math.min(1,(a-i)/(a*0.05));this.style.setProperty("--start-shadow-opacity",String(n||0)),this.style.setProperty("--end-shadow-opacity",String(w||0))}}render(){return h`
      ${this.withoutShadow?"":h`
            <div id="start-shadow" part="start-shadow" aria-hidden="true"></div>
            <div id="end-shadow" part="end-shadow" aria-hidden="true"></div>
          `}

      <div
        id="content"
        part="content"
        role="region"
        aria-label=${this.localize.term("scrollableRegion")}
        tabindex=${this.canScroll?"0":"-1"}
        @keydown=${this.handleKeyDown}
        @scroll=${this.updateScroll}
      >
        <slot @slotchange=${this.handleSlotChange}></slot>
      </div>
    `}};i0.css=[d4];f([Y("#content")],i0.prototype,"content",2);f([J()],i0.prototype,"canScroll",2);f([t({reflect:!0})],i0.prototype,"orientation",2);f([t({attribute:"without-scrollbar",type:Boolean,reflect:!0})],i0.prototype,"withoutScrollbar",2);f([t({attribute:"without-shadow",type:Boolean,reflect:!0})],i0.prototype,"withoutShadow",2);f([nr({passive:!0})],i0.prototype,"updateScroll",1);i0=f([$("wa-scroller")],i0);/*! Copyright 2026 Fonticons, Inc. - https://webawesome.com/license *//*! Copyright 2026 Fonticons, Inc. - https://webawesome.com/license */var g4=F`
  :host {
    --tag-max-size: 10ch;
    --show-duration: var(--wa-transition-fast);
    --hide-duration: var(--wa-transition-fast);
  }

  /* Add ellipses to multi select options */
  :host wa-tag::part(content) {
    display: initial;
    white-space: nowrap;
    text-overflow: ellipsis;
    overflow: hidden;
    max-width: var(--tag-max-size);
  }

  :host .disabled [part~='combobox'] {
    opacity: 0.5;
    cursor: not-allowed;
    outline: none;
  }

  :host .enabled:is(.open, :focus-within) [part~='combobox'] {
    outline-color: var(--wa-color-focus);
  }

  /** The popup */
  .select {
    flex: 1 1 auto;
    display: inline-flex;
    width: 100%;
    position: relative;
    vertical-align: middle;

    /* Pass through from select to the popup */
    --show-duration: inherit;
    --hide-duration: inherit;

    &::part(popup) {
      z-index: 900;
    }

    &[data-current-placement^='top']::part(popup) {
      transform-origin: bottom;
    }

    &[data-current-placement^='bottom']::part(popup) {
      transform-origin: top;
    }
  }

  /* Combobox */
  .combobox {
    flex: 1;
    display: flex;
    width: 100%;
    min-width: 0;
    align-items: center;
    justify-content: start;

    min-height: var(--wa-form-control-height);

    background-color: var(--wa-form-control-background-color);
    border-color: var(--wa-form-control-border-color);
    border-radius: var(--wa-form-control-border-radius);
    border-style: var(--wa-form-control-border-style);
    border-width: var(--wa-form-control-border-width);
    color: var(--wa-form-control-value-color);
    cursor: pointer;
    font-family: inherit;
    font-weight: var(--wa-form-control-value-font-weight);
    line-height: var(--wa-form-control-value-line-height);
    overflow: hidden;
    padding: 0 var(--wa-form-control-padding-inline);
    position: relative;
    vertical-align: middle;
    transition:
      background-color var(--wa-transition-normal),
      border-color var(--wa-transition-normal),
      outline-color var(--wa-transition-fast);
    transition-timing-function: var(--wa-transition-easing);
    outline: var(--wa-focus-ring-style) var(--wa-focus-ring-width) transparent;
    outline-offset: var(--wa-focus-ring-offset);

    /* Pills */
    :host([pill]) & {
      border-radius: var(--wa-border-radius-pill);
    }
  }

  /* Appearance modifiers */
  :host([appearance='outlined']) .combobox {
    background-color: var(--wa-form-control-background-color);
    border-color: var(--wa-form-control-border-color);
  }

  :host([appearance='filled']) .combobox {
    background-color: var(--wa-color-neutral-fill-quiet);
    border-color: var(--wa-color-neutral-fill-quiet);
  }

  :host([appearance='filled-outlined']) .combobox {
    background-color: var(--wa-color-neutral-fill-quiet);
    border-color: var(--wa-form-control-border-color);
  }

  .display-input {
    position: relative;
    width: 100%;
    font: inherit;
    border: none;
    background: none;
    line-height: var(--wa-form-control-value-line-height);
    color: var(--wa-form-control-value-color);
    cursor: inherit;
    overflow: hidden;
    padding: 0;
    margin: 0;
    -webkit-appearance: none;

    &:focus {
      outline: none;
    }

    &::placeholder {
      color: var(--wa-form-control-placeholder-color);
    }
  }

  /* Manage spacing when tags are present */
  :host([multiple]) {
    --_padding-with-tags: calc(var(--wa-form-control-height) * 0.1 - var(--wa-form-control-border-width));

    & .combobox:has(.tags wa-tag) {
      padding-block: var(--_padding-with-tags);
      padding-inline-start: var(--_padding-with-tags);
    }
  }

  /* Visually hide the display input when multiple is enabled */
  :host([multiple]) .combobox:has(.tags wa-tag) .display-input {
    position: absolute;
    z-index: -1;
    top: 0;
    left: 0;
    width: 100%;
    height: 100%;
    opacity: 0;
  }

  .value-input {
    position: absolute;
    z-index: -1;
    top: 0;
    left: 0;
    width: 100%;
    height: 100%;
    opacity: 0;
    padding: 0;
    margin: 0;
  }

  .tags {
    display: flex;
    flex: 1;
    align-items: center;
    flex-wrap: wrap;
    gap: 0.25em;

    &::slotted(wa-tag) {
      cursor: pointer !important;
    }

    .disabled &,
    .disabled &::slotted(wa-tag) {
      cursor: not-allowed !important;
    }
  }

  /* Start and End */

  .start,
  .end {
    flex: 0;
    display: inline-flex;
    align-items: center;
    color: var(--wa-color-neutral-on-quiet);
  }

  .end::slotted(*) {
    margin-inline-start: var(--wa-form-control-padding-inline);
  }

  .start::slotted(*) {
    margin-inline-end: var(--wa-form-control-padding-inline);
  }

  :host([multiple]) .combobox:has(.tags wa-tag) .start::slotted(*) {
    margin-inline-start: calc(var(--wa-form-control-padding-inline) - var(--_padding-with-tags));
  }

  /* Clear button */
  [part~='clear-button'] {
    flex: 0 0 auto;
    display: inline-flex;
    align-self: stretch;
    align-items: center;
    justify-content: center;
    inline-size: 1.5em;
    font-size: inherit;
    color: var(--wa-color-neutral-on-quiet);
    border: none;
    background: none;
    padding: 0;
    transition: color var(--wa-transition-normal);
    cursor: pointer;
    /* The box is wider than the glyph, so overhang half that growth on each side. Keeps the glyph
       on the same trailing axis as the segmented-field pickers' clear buttons. */
    margin-inline-start: calc(var(--wa-form-control-padding-inline) - 0.125em);
    margin-inline-end: -0.125em;

    &:focus {
      outline: none;
    }

    @media (hover: hover) {
      &:hover {
        color: color-mix(in oklab, currentColor, var(--wa-color-mix-hover));
      }
    }

    &:active {
      color: color-mix(in oklab, currentColor, var(--wa-color-mix-active));
    }
  }

  /* Expand icon */
  .expand-icon {
    flex: 0 0 auto;
    display: flex;
    align-items: center;
    color: var(--wa-color-neutral-on-quiet);
    transition: rotate var(--wa-transition-slow) var(--wa-transition-easing);
    rotate: 0deg;
    margin-inline-start: var(--wa-form-control-padding-inline);

    .open & {
      rotate: -180deg;
    }
  }

  /* Listbox */
  .listbox {
    display: block;
    position: relative;
    font: inherit;
    box-shadow: var(--wa-shadow-m);
    background: var(--wa-color-surface-raised);
    border-color: var(--wa-color-surface-border);
    border-radius: var(--wa-border-radius-m);
    border-style: var(--wa-border-style);
    border-width: var(--wa-border-width-s);
    padding: 0.25em;
    overflow: auto;
    overscroll-behavior: none;

    /* Make sure it adheres to the popup's auto size */
    max-width: var(--auto-size-available-width);
    max-height: var(--auto-size-available-height);

    &::slotted(wa-divider) {
      --spacing: 0.5em;
    }
  }

  /* Space options with half the listbox's padding */
  .listbox slot:not([name]) {
    display: flex;
    flex-direction: column;
    gap: 0.125em;
  }

  slot:not([name])::slotted(small) {
    display: block;
    font-size: var(--wa-font-size-smaller);
    font-weight: var(--wa-font-weight-semibold);
    color: var(--wa-color-text-quiet);
    padding-block: 0.5em;
    padding-inline: 2.25em;
  }
`;/*! Copyright 2026 Fonticons, Inc. - https://webawesome.com/license */var ro=class extends E{constructor(){super(...arguments);this.assumeInteractionOn=["blur","input"],this.cachedOptions=null,this.hasSlotController=new W(this,"hint","label"),this.localize=new B(this),this.selectionOrder=new Map,this.typeToSelectString="",this.slotChangePending=!1,this.displayLabel="",this.selectedOptions=[],this.name="",this._defaultValue=null,this.size="m",this.placeholder="",this.multiple=!1,this.maxOptionsVisible=3,this.disabled=!1,this.withClear=!1,this.open=!1,this.appearance="outlined",this.pill=!1,this.label="",this.placement="bottom",this.hint="",this.withLabel=!1,this.withHint=!1,this.required=!1,this.getTag=(o)=>{return h`
        <wa-tag
          part="tag"
          exportparts="
            base:tag__base,
            content:tag__content,
            remove-button:tag__remove-button,
            remove-button__base:tag__remove-button__base
          "
          ?pill=${this.pill}
          size=${this.size}
          with-remove
          data-value=${o.value}
          @wa-remove=${(i)=>this.handleTagRemove(i,o)}
        >
          ${o.label}
        </wa-tag>
      `},this.handleDocumentFocusIn=(o)=>{let i=o.composedPath();if(this&&!i.includes(this))this.hide()},this.handleDocumentKeyDown=(o)=>{let i=o.target,r=i.closest('[part~="clear-button"]')!==null,a=i.closest("wa-button")!==null;if(r||a)return;if(o.key==="Escape"&&this.open&&Ao(this))o.preventDefault(),o.stopPropagation(),this.hide(),this.displayInput.focus({preventScroll:!0});if(o.key==="Enter"||o.key===" "&&this.typeToSelectString===""){if(o.preventDefault(),o.stopImmediatePropagation(),!this.open){this.show();return}if(this.currentOption&&!this.currentOption.disabled){if(this.valueHasChanged=!0,this.hasInteracted=!0,this.multiple)this.toggleOptionSelection(this.currentOption);else this.setSelectedOptions(this.currentOption);if(this.updateComplete.then(()=>{this.dispatchEvent(new InputEvent("input",{bubbles:!0,composed:!0})),this.dispatchEvent(new Event("change",{bubbles:!0,composed:!0}))}),!this.multiple)this.hide(),this.displayInput.focus({preventScroll:!0})}return}if(["ArrowUp","ArrowDown","Home","End"].includes(o.key)){let n=this.getAllOptions(),w=n.indexOf(this.currentOption),b=Math.max(0,w);if(o.preventDefault(),!this.open){if(this.show(),this.currentOption)return}if(o.key==="ArrowDown"){if(b=w+1,b>n.length-1)b=0}else if(o.key==="ArrowUp"){if(b=w-1,b<0)b=n.length-1}else if(o.key==="Home")b=0;else if(o.key==="End")b=n.length-1;this.setCurrentOption(n[b])}if(o.key?.length===1||o.key==="Backspace"){let n=this.getAllOptions();if(o.metaKey||o.ctrlKey||o.altKey)return;if(!this.open){if(o.key==="Backspace")return;this.show()}if(o.stopPropagation(),o.preventDefault(),clearTimeout(this.typeToSelectTimeout),this.typeToSelectTimeout=window.setTimeout(()=>this.typeToSelectString="",1000),o.key==="Backspace")this.typeToSelectString=this.typeToSelectString.slice(0,-1);else this.typeToSelectString+=o.key.toLowerCase();for(let w of n)if(w.label.toLowerCase().startsWith(this.typeToSelectString)){this.setCurrentOption(w);break}}},this.handleDocumentMouseDown=(o)=>{let i=o.composedPath();if(this&&!i.includes(this))this.hide()}}static get validators(){let o=M?[]:[ti({validationElement:Object.assign(document.createElement("select"),{required:!0})})];return[...super.validators,...o]}get validationTarget(){return this.valueInput}set defaultValue(o){this._defaultValue=this.convertDefaultValue(o)}get defaultValue(){return this.convertDefaultValue(this._defaultValue)}rawValuesEqual(o,i){if(o==null&&i==null)return!0;if(o==null||i==null)return!1;if(o.length!==i.length)return!1;return o.every((r,a)=>r===i[a])}convertDefaultValue(o){if(!(this.multiple||this.hasAttribute("multiple"))&&Array.isArray(o))o=o[0];return o}set value(o){let i=this.value;if(o instanceof FormData)o=o.getAll(this.name);if(o!=null&&!Array.isArray(o))o=[o];let r=this._value;if(this._value=o??null,!this.rawValuesEqual(r,this._value))this.valueHasChanged=!0,this.requestUpdate("value",i)}get value(){let o=this._value??this.defaultValue??null;if(o!=null)o=Array.isArray(o)?o:[o];this.optionValues=new Set(this.getAllOptions().filter((r)=>!r.disabled).map((r)=>r.value));let i=o;if(o!=null)i=o.filter((r)=>this.optionValues.has(r)),i=this.multiple?i:i[0],i=i??null;return i}handleSizeChange(){j(this.localName,this.size)}connectedCallback(){super.connectedCallback(),this.processSlotChange(),this.open=!1}disconnectedCallback(){super.disconnectedCallback(),this.removeOpenListeners(),this.cachedOptions=null}updateDefaultValue(){let i=this.getAllOptions().filter((r)=>r.hasAttribute("selected")||r.defaultSelected);if(i.length>0){let r=i.map((a)=>a.value);this._defaultValue=this.multiple?r:r[0]}if(this.hasAttribute("value"))this._defaultValue=this.getAttribute("value")||null}addOpenListeners(){if(document.addEventListener("focusin",this.handleDocumentFocusIn),document.addEventListener("keydown",this.handleDocumentKeyDown),document.addEventListener("mousedown",this.handleDocumentMouseDown),_o(this),this.getRootNode()!==document)this.getRootNode().addEventListener("focusin",this.handleDocumentFocusIn)}removeOpenListeners(){if(document.removeEventListener("focusin",this.handleDocumentFocusIn),document.removeEventListener("keydown",this.handleDocumentKeyDown),document.removeEventListener("mousedown",this.handleDocumentMouseDown),Mo(this),this.getRootNode()!==document)this.getRootNode().removeEventListener("focusin",this.handleDocumentFocusIn)}handleFocus(){this.displayInput.setSelectionRange(0,0)}handleLabelClick(){this.displayInput.focus()}handleComboboxClick(o){o.preventDefault()}handleComboboxMouseDown(o){let r=o.composedPath().some((a)=>a instanceof Element&&a.tagName.toLowerCase()==="wa-button");if(this.disabled||r)return;o.preventDefault(),this.displayInput.focus({preventScroll:!0}),this.open=!this.open}handleComboboxKeyDown(o){o.stopPropagation(),this.handleDocumentKeyDown(o)}handleClearClick(o){if(o.stopPropagation(),this.hasInteracted=!0,this.valueHasChanged=!0,this.value!==null)this.displayLabel="",this.selectionOrder.clear(),this.setSelectedOptions([]),this.displayInput.focus({preventScroll:!0}),this.updateComplete.then(()=>{this.dispatchEvent(new v0),this.dispatchEvent(new InputEvent("input",{bubbles:!0,composed:!0})),this.dispatchEvent(new Event("change",{bubbles:!0,composed:!0}))})}handleClearMouseDown(o){o.stopPropagation(),o.preventDefault()}handleOptionClick(o){let r=o.target.closest("wa-option");if(r&&!r.disabled){if(this.hasInteracted=!0,this.valueHasChanged=!0,this.multiple)this.toggleOptionSelection(r);else this.setSelectedOptions(r);if(this.updateComplete.then(()=>this.displayInput.focus({preventScroll:!0})),this.requestUpdate("value"),this.updateComplete.then(()=>{this.dispatchEvent(new InputEvent("input",{bubbles:!0,composed:!0})),this.dispatchEvent(new Event("change",{bubbles:!0,composed:!0}))}),!this.multiple)this.hide(),this.displayInput.focus({preventScroll:!0})}}handleDefaultSlotChange(){if(this.slotChangePending)return;this.slotChangePending=!0,queueMicrotask(()=>{this.slotChangePending=!1,this.processSlotChange()})}processSlotChange(){if(!customElements.get("wa-option"))customElements.whenDefined("wa-option").then(()=>this.handleDefaultSlotChange());if(this.didSSR&&!this.hasUpdated){this.updateComplete.then(()=>{this.handleDefaultSlotChange()});return}this.cachedOptions=null;let o=this.getAllOptions();this.updateDefaultValue();let i=this.value;if(i==null||!this.valueHasChanged&&!this.hasInteracted){this.selectionChanged();return}if(!Array.isArray(i))i=[i];let r=o.filter((a)=>i.includes(a.value));this.setSelectedOptions(r)}handleTagRemove(o,i){if(o.stopPropagation(),this.disabled)return;this.hasInteracted=!0,this.valueHasChanged=!0;let r=i;if(!r){let a=o.target.closest("wa-tag[data-value]");if(a){let n=a.dataset.value;r=this.selectedOptions.find((w)=>w.value===n)}}if(r)this.toggleOptionSelection(r,!1),this.updateComplete.then(()=>{this.dispatchEvent(new InputEvent("input",{bubbles:!0,composed:!0})),this.dispatchEvent(new Event("change",{bubbles:!0,composed:!0}))})}getAllOptions(){if(this.cachedOptions)return this.cachedOptions;if(!this?.querySelectorAll)return[];return this.cachedOptions=[...this.querySelectorAll("wa-option")],this.cachedOptions}getFirstOption(){return this.querySelector("wa-option")}setCurrentOption(o){if(this.getAllOptions().forEach((r)=>{r.current=!1,r.tabIndex=-1}),o){if(this.currentOption=o,o.current=!0,o.tabIndex=0,o.focus({preventScroll:!0}),this.open&&!this.listbox.hidden)L0(o,this.listbox,"vertical","auto")}}setSelectedOptions(o){let i=this.getAllOptions(),r=Array.isArray(o)?o:[o];if(i.forEach((a)=>{if(r.includes(a))return;a.selected=!1}),r.length)r.forEach((a)=>a.selected=!0);this.selectionChanged()}toggleOptionSelection(o,i){if(i===!0||i===!1)o.selected=i;else o.selected=!o.selected;this.selectionChanged()}selectionChanged(){let i=this.getAllOptions().filter((b)=>{if(!this.hasInteracted&&!this.valueHasChanged){let c=this.defaultValue,m=Array.isArray(c)?c:[c];return b.hasAttribute("selected")||b.defaultSelected||b.selected||m?.includes(b.value)}return b.selected}),r=new Set(i.map((b)=>b.value));for(let b of this.selectionOrder.keys())if(!r.has(b))this.selectionOrder.delete(b);let n=(this.selectionOrder.size>0?Math.max(...this.selectionOrder.values()):-1)+1;for(let b of i)if(!this.selectionOrder.has(b.value))this.selectionOrder.set(b.value,n++);this.selectedOptions=i.sort((b,c)=>{let m=this.selectionOrder.get(b.value)??0,p=this.selectionOrder.get(c.value)??0;return m-p});let w=new Set(this.selectedOptions.map((b)=>b.value));if(w.size>0||this._value){let b=this._value;if(this._value==null){let c=this.defaultValue??[];this._value=Array.isArray(c)?c:[c]}this._value=this._value?.filter((c)=>!this.optionValues?.has(c))??null,this._value?.unshift(...w),this.requestUpdate("value",b)}if(this.multiple)if(this.placeholder&&!this.value?.length)this.displayLabel="";else this.displayLabel=this.localize.term("numOptionsSelected",this.selectedOptions.length);else{let b=this.selectedOptions[0];this.displayLabel=b?.label??""}this.updateComplete.then(()=>{this.updateValidity()})}get tags(){return this.selectedOptions.map((o,i)=>{if(i<this.maxOptionsVisible||this.maxOptionsVisible<=0){let r=this.getTag(o,i);if(!r)return null;return typeof r==="string"?J0(r):r}else if(i===this.maxOptionsVisible)return h`
          <wa-tag
            part="tag"
            exportparts="
              base:tag__base,
              content:tag__content,
              remove-button:tag__remove-button,
              remove-button__base:tag__remove-button__base
            "
            >+${this.selectedOptions.length-i}</wa-tag
          >
        `;return null})}updated(o){if(super.updated(o),o.has("value")||o.has("displayLabel"))this.customStates.set("blank",!this.value&&!this.displayLabel)}handleDisabledChange(){if(this.disabled&&this.open)this.open=!1}handleValueChange(){let o=this.getAllOptions(),i=Array.isArray(this.value)?this.value:[this.value],r=o.filter((a)=>i.includes(a.value));this.setSelectedOptions(r),this.updateValidity()}async handleOpenChange(){if(this.open&&!this.disabled){this.setCurrentOption(this.selectedOptions[0]||this.getFirstOption());let o=new ko;if(this.dispatchEvent(o),o.defaultPrevented){this.open=!1;return}if(this.addOpenListeners(),this.listbox.hidden=!1,this.popup.active=!0,requestAnimationFrame(()=>{this.setCurrentOption(this.currentOption)}),await P(this.popup.popup,"show"),this.currentOption)L0(this.currentOption,this.listbox,"vertical","auto");this.dispatchEvent(new jo)}else{let o=new To;if(this.dispatchEvent(o),o.defaultPrevented){this.open=!1;return}this.removeOpenListeners(),await P(this.popup.popup,"hide"),this.listbox.hidden=!0,this.popup.active=!1,this.dispatchEvent(new Io)}}async show(){if(this.open||this.disabled){this.open=!1;return}return this.open=!0,Yo(this,"wa-after-show")}async hide(){if(!this.open||this.disabled){this.open=!1;return}return this.open=!1,Yo(this,"wa-after-hide")}focus(o){this.displayInput.focus(o)}blur(){this.displayInput.blur()}formResetCallback(){this.selectionOrder.clear(),this.value=this.defaultValue,super.formResetCallback(),this.handleValueChange(),this.updateComplete.then(()=>{this.dispatchEvent(new InputEvent("input",{bubbles:!0,composed:!0})),this.dispatchEvent(new Event("change",{bubbles:!0,composed:!0}))})}render(){let o=this.hasSlotController.test("label","withLabel"),i=this.hasSlotController.test("hint","withHint"),r=this.label?!0:!!o,a=this.hint?!0:!!i,n=(this.hasUpdated||M)&&this.withClear&&!this.disabled&&(this.displayLabel||this.value&&this.value.length>0);return h`
      <div
        part="form-control"
        class=${Z({"form-control":!0,"form-control-has-label":r})}
      >
        <label
          id="label"
          part="form-control-label label"
          class=${Z({label:!0,"has-label":r})}
          aria-hidden=${r?"false":"true"}
          @click=${this.handleLabelClick}
        >
          <slot name="label">${this.label}</slot>
        </label>

        <div part="form-control-input" class="form-control-input">
          <wa-popup
            class=${Z({select:!0,open:this.open,disabled:this.disabled,enabled:!this.disabled,multiple:this.multiple})}
            placement=${this.placement}
            flip
            shift
            sync="width"
            auto-size="vertical"
            auto-size-padding="10"
          >
            <div
              part="combobox"
              class="combobox"
              slot="anchor"
              @keydown=${this.handleComboboxKeyDown}
              @mousedown=${this.handleComboboxMouseDown}
              @click=${this.handleComboboxClick}
            >
              <slot part="start" name="start" class="start"></slot>

              <input
                part="display-input"
                class="display-input"
                type="text"
                placeholder=${this.placeholder}
                .disabled=${this.disabled}
                .value=${this.displayLabel}
                ?required=${this.required}
                autocomplete="off"
                spellcheck="false"
                autocapitalize="off"
                readonly
                aria-invalid=${!this.validity.valid}
                aria-controls="listbox"
                aria-expanded=${this.open?"true":"false"}
                aria-haspopup="listbox"
                aria-labelledby="label"
                aria-disabled=${this.disabled?"true":"false"}
                aria-describedby="hint"
                role="combobox"
                tabindex="0"
                @focus=${this.handleFocus}
              />

              <!-- Tags need to wait for first hydration before populating otherwise it will create a hydration mismatch. -->
              ${this.multiple&&this.hasUpdated?h`<div part="tags" class="tags" @wa-remove=${this.handleTagRemove}>${this.tags}</div>`:""}

              <input
                class="value-input"
                type="text"
                ?disabled=${this.disabled}
                ?required=${this.required}
                .value=${Array.isArray(this.value)?this.value.join(", "):this.value}
                tabindex="-1"
                aria-hidden="true"
                @focus=${()=>this.focus()}
              />

              ${n?h`
                    <button
                      part="clear-button"
                      type="button"
                      aria-label=${this.localize.term("clearEntry")}
                      @mousedown=${this.handleClearMouseDown}
                      @click=${this.handleClearClick}
                      tabindex="-1"
                    >
                      <slot name="clear-icon">
                        <wa-icon name="circle-xmark" library="system" variant="regular"></wa-icon>
                      </slot>
                    </button>
                  `:""}

              <slot name="end" part="end" class="end"></slot>

              <slot name="expand-icon" part="expand-icon" class="expand-icon">
                <wa-icon library="system" name="chevron-down" variant="solid"></wa-icon>
              </slot>
            </div>

            <div
              id="listbox"
              role="listbox"
              aria-expanded=${this.open?"true":"false"}
              aria-multiselectable=${this.multiple?"true":"false"}
              aria-labelledby="label"
              part="listbox"
              class="listbox"
              tabindex="-1"
              @mouseup=${this.handleOptionClick}
            >
              <slot @slotchange=${this.handleDefaultSlotChange}></slot>
            </div>
          </wa-popup>
        </div>

        <slot
          id="hint"
          name="hint"
          part="hint"
          class=${Z({"has-slotted":a})}
          aria-hidden=${a?"false":"true"}
          >${this.hint}</slot
        >
      </div>
    `}};ro.css=[g4,go,I];f([Y(".select")],ro.prototype,"popup",2);f([Y(".combobox")],ro.prototype,"combobox",2);f([Y(".display-input")],ro.prototype,"displayInput",2);f([Y(".value-input")],ro.prototype,"valueInput",2);f([Y(".listbox")],ro.prototype,"listbox",2);f([J()],ro.prototype,"displayLabel",2);f([J()],ro.prototype,"currentOption",2);f([J()],ro.prototype,"selectedOptions",2);f([t({reflect:!0})],ro.prototype,"name",2);f([t({attribute:!1})],ro.prototype,"defaultValue",1);f([t({attribute:"value",reflect:!1})],ro.prototype,"value",1);f([t({reflect:!0})],ro.prototype,"size",2);f([v("size")],ro.prototype,"handleSizeChange",1);f([t()],ro.prototype,"placeholder",2);f([t({type:Boolean,reflect:!0})],ro.prototype,"multiple",2);f([t({attribute:"max-options-visible",type:Number})],ro.prototype,"maxOptionsVisible",2);f([t({type:Boolean})],ro.prototype,"disabled",2);f([t({attribute:"with-clear",type:Boolean})],ro.prototype,"withClear",2);f([t({type:Boolean,reflect:!0})],ro.prototype,"open",2);f([t({reflect:!0})],ro.prototype,"appearance",2);f([t({type:Boolean,reflect:!0})],ro.prototype,"pill",2);f([t()],ro.prototype,"label",2);f([t({reflect:!0})],ro.prototype,"placement",2);f([t({attribute:"hint"})],ro.prototype,"hint",2);f([t({attribute:"with-label",type:Boolean})],ro.prototype,"withLabel",2);f([t({attribute:"with-hint",type:Boolean})],ro.prototype,"withHint",2);f([t({type:Boolean,reflect:!0})],ro.prototype,"required",2);f([t({attribute:!1})],ro.prototype,"getTag",2);f([v("disabled",{waitUntilFirstUpdate:!0})],ro.prototype,"handleDisabledChange",1);f([v("value",{waitUntilFirstUpdate:!0})],ro.prototype,"handleValueChange",1);f([v("open",{waitUntilFirstUpdate:!0})],ro.prototype,"handleOpenChange",1);ro=f([$("wa-select")],ro);ro.disableWarning?.("change-in-update");/*! Copyright 2026 Fonticons, Inc. - https://webawesome.com/license */var s4=class extends Event{constructor(){super("wa-remove",{bubbles:!0,cancelable:!1,composed:!0})}};/*! Copyright 2026 Fonticons, Inc. - https://webawesome.com/license */var u4=F`
  @layer wa-component {
    :host {
      display: inline-flex;
      gap: 0.5em;
      border-radius: var(--wa-border-radius-m);
      align-items: center;
      background-color: var(--wa-color-fill-quiet, var(--wa-color-neutral-fill-quiet));
      border-color: var(--wa-color-border-normal, var(--wa-color-neutral-border-normal));
      border-style: var(--wa-border-style);
      border-width: var(--wa-border-width-s);
      color: var(--wa-color-on-quiet, var(--wa-color-neutral-on-quiet));
      font-size: inherit;
      line-height: 1;
      white-space: nowrap;
      user-select: none;
      -webkit-user-select: none;
      height: calc(var(--wa-form-control-height) * 0.8);
      line-height: calc(var(--wa-form-control-height) - var(--wa-form-control-border-width) * 2);
      padding: 0 0.75em;
    }

    /* Appearance modifiers */
    :host([appearance='outlined']) {
      color: var(--wa-color-on-quiet, var(--wa-color-neutral-on-quiet));
      background-color: transparent;
      border-color: var(--wa-color-border-loud, var(--wa-color-neutral-border-loud));
    }

    :host([appearance='filled']) {
      color: var(--wa-color-on-quiet, var(--wa-color-neutral-on-quiet));
      background-color: var(--wa-color-fill-quiet, var(--wa-color-neutral-fill-quiet));
      border-color: transparent;
    }

    :host([appearance='filled-outlined']) {
      color: var(--wa-color-on-quiet, var(--wa-color-neutral-on-quiet));
      background-color: var(--wa-color-fill-quiet, var(--wa-color-neutral-fill-quiet));
      border-color: var(--wa-color-border-normal, var(--wa-color-neutral-border-normal));
    }

    :host([appearance='accent']) {
      color: var(--wa-color-on-loud, var(--wa-color-neutral-on-loud));
      background-color: var(--wa-color-fill-loud, var(--wa-color-neutral-fill-loud));
      border-color: transparent;
    }
  }

  .content {
    font-size: var(--wa-font-size-smaller);
  }

  [part='remove-button'] {
    line-height: 1;
  }

  [part='remove-button']::part(base) {
    padding: 0;
    height: 1em;
    width: 1em;
    color: currentColor;
  }

  @media (hover: hover) {
    :host(:hover) > [part='remove-button']::part(base) {
      background-color: transparent;
      color: color-mix(in oklab, currentColor, var(--wa-color-mix-hover));
    }
  }

  :host(:active) > [part='remove-button']::part(base) {
    background-color: transparent;
    color: color-mix(in oklab, currentColor, var(--wa-color-mix-active));
  }

  /*
   * Pill modifier
   */
  :host([pill]) {
    border-radius: var(--wa-border-radius-pill);
  }
`;/*! Copyright 2026 Fonticons, Inc. - https://webawesome.com/license */var r0=class extends L{constructor(){super(...arguments);this.localize=new B(this),this.variant="neutral",this.appearance="filled-outlined",this.size="m",this.pill=!1,this.withRemove=!1}handleSizeChange(){j(this.localName,this.size)}handleRemoveClick(){this.dispatchEvent(new s4)}render(){return h`
      <slot part="content" class="content"></slot>

      ${this.withRemove?h`
            <wa-button
              part="remove-button"
              exportparts="base:remove-button__base"
              class="remove"
              appearance="plain"
              size=${this.size}
              @click=${this.handleRemoveClick}
              tabindex="-1"
            >
              <wa-icon name="xmark" library="system" variant="solid" label=${this.localize.term("remove")}></wa-icon>
            </wa-button>
          `:""}
    `}};r0.css=[u4,Ti,I];f([t({reflect:!0})],r0.prototype,"variant",2);f([t({reflect:!0})],r0.prototype,"appearance",2);f([t({reflect:!0})],r0.prototype,"size",2);f([v("size")],r0.prototype,"handleSizeChange",1);f([t({type:Boolean,reflect:!0})],r0.prototype,"pill",2);f([t({attribute:"with-remove",type:Boolean})],r0.prototype,"withRemove",2);r0=f([$("wa-tag")],r0);/*! Copyright 2026 Fonticons, Inc. - https://webawesome.com/license *//*! Copyright 2026 Fonticons, Inc. - https://webawesome.com/license */var z4=F`
  :host {
    --color: var(--wa-color-neutral-fill-normal);
    --sheen-color: color-mix(in oklab, var(--color), var(--wa-color-surface-raised));

    display: flex;
    position: relative;
    width: 100%;
    height: 100%;
    min-height: 1rem;
  }

  .indicator {
    flex: 1 1 auto;
    background: var(--color);
    border-radius: var(--wa-border-radius-pill);
  }

  :host([effect='sheen']) .indicator {
    background: linear-gradient(270deg, var(--sheen-color), var(--color), var(--color), var(--sheen-color));
    background-size: 400% 100%;
    animation: sheen 8s ease-in-out infinite;
  }

  :host([effect='pulse']) .indicator {
    animation: pulse 2s ease-in-out 0.5s infinite;
  }

  /* Forced colors mode */
  @media (forced-colors: active) {
    :host {
      --color: GrayText;
    }
  }

  @keyframes sheen {
    0% {
      background-position: 200% 0;
    }
    to {
      background-position: -200% 0;
    }
  }

  @keyframes pulse {
    0% {
      opacity: 1;
    }
    50% {
      opacity: 0.4;
    }
    100% {
      opacity: 1;
    }
  }
`;/*! Copyright 2026 Fonticons, Inc. - https://webawesome.com/license */var Dr=class extends L{constructor(){super(...arguments);this.effect="none"}render(){return h` <div part="indicator" class="indicator"></div> `}};Dr.css=z4;f([t({reflect:!0})],Dr.prototype,"effect",2);Dr=f([$("wa-skeleton")],Dr);/*! Copyright 2026 Fonticons, Inc. - https://webawesome.com/license *//*! Copyright 2026 Fonticons, Inc. - https://webawesome.com/license */var y4=F`
  :host {
    --track-size: 0.5em;
    --thumb-width: 1.4em;
    --thumb-height: 1.4em;
    --marker-width: 0.1875em;
    --marker-height: 0.1875em;
  }

  :host([orientation='vertical']) {
    width: auto;
  }

  #label:has(~ .vertical) {
    display: block;
    order: 2;
    max-width: none;
    text-align: center;
  }

  #description:has(~ .vertical) {
    order: 3;
    text-align: center;
  }

  /* Add extra space between slider and label, when present */
  #label.has-label ~ #slider {
    &.horizontal {
      margin-block-start: 0.5em;
    }
    &.vertical {
      margin-block-end: 0.5em;
    }
  }

  #slider {
    touch-action: none;

    &:focus {
      outline: none;
    }

    &:focus-visible:not(.disabled) #thumb,
    &:focus-visible:not(.disabled) #thumb-min,
    &:focus-visible:not(.disabled) #thumb-max {
      outline: var(--wa-focus-ring);
      /* intentionally no offset due to border */
    }
  }

  #track {
    position: relative;
    border-radius: 9999px;
    background: var(--wa-color-neutral-fill-normal);
    isolation: isolate;
  }

  /* Orientation */
  .horizontal #track {
    height: var(--track-size);
  }

  .vertical #track {
    order: 1;
    width: var(--track-size);
    height: 200px;
  }

  /* Disabled */
  .disabled #track {
    cursor: not-allowed;
    opacity: 0.5;
  }

  /* Indicator */
  #indicator {
    position: absolute;
    border-radius: inherit;
    background-color: var(--wa-form-control-activated-color);

    &:dir(ltr) {
      right: calc(100% - max(var(--start), var(--end)));
      left: min(var(--start), var(--end));
    }

    &:dir(rtl) {
      right: min(var(--start), var(--end));
      left: calc(100% - max(var(--start), var(--end)));
    }
  }

  .horizontal #indicator {
    top: 0;
    height: 100%;
  }

  .vertical #indicator {
    top: calc(100% - var(--end));
    bottom: var(--start);
    left: 0;
    width: 100%;
  }

  /* Thumbs */
  #thumb,
  #thumb-min,
  #thumb-max {
    z-index: 3;
    position: absolute;
    width: var(--thumb-width);
    height: var(--thumb-height);
    border: solid 0.125em var(--wa-color-surface-default);
    border-radius: 50%;
    background-color: var(--wa-form-control-activated-color);
    cursor: pointer;
  }

  .disabled #thumb,
  .disabled #thumb-min,
  .disabled #thumb-max {
    cursor: inherit;
  }

  .horizontal #thumb,
  .horizontal #thumb-min,
  .horizontal #thumb-max {
    top: calc(50% - var(--thumb-height) / 2);

    &:dir(ltr) {
      right: auto;
      left: calc(var(--position) - var(--thumb-width) / 2);
    }

    &:dir(rtl) {
      right: calc(var(--position) - var(--thumb-width) / 2);
      left: auto;
    }
  }

  .vertical #thumb,
  .vertical #thumb-min,
  .vertical #thumb-max {
    bottom: calc(var(--position) - var(--thumb-height) / 2);
    left: calc(50% - var(--thumb-width) / 2);
  }

  /* Range-specific thumb styles */
  :host([range]) {
    #thumb-min:focus-visible,
    #thumb-max:focus-visible {
      z-index: 4; /* Ensure focused thumb appears on top */
      outline: var(--wa-focus-ring);
      /* intentionally no offset due to border */
    }
  }

  /* Markers */
  #markers {
    pointer-events: none;
  }

  .marker {
    z-index: 2;
    position: absolute;
    width: var(--marker-width);
    height: var(--marker-height);
    border-radius: 50%;
    background-color: var(--wa-color-surface-default);
  }

  .marker:first-of-type,
  .marker:last-of-type {
    display: none;
  }

  .horizontal .marker {
    top: calc(50% - var(--marker-height) / 2);
    left: calc(var(--position) - var(--marker-width) / 2);
  }

  .vertical .marker {
    top: calc(var(--position) - var(--marker-height) / 2);
    left: calc(50% - var(--marker-width) / 2);
  }

  /* Marker labels */
  #references {
    position: relative;

    slot {
      display: flex;
      justify-content: space-between;
      height: 100%;
    }

    ::slotted(*) {
      color: var(--wa-color-text-quiet);
      font-size: 0.875em;
      line-height: 1;
    }
  }

  .horizontal {
    #references {
      margin-block-start: 0.5em;
    }
  }

  .vertical {
    display: flex;
    margin-inline: auto;

    #track {
      order: 1;
    }

    #references {
      order: 2;
      width: min-content;
      margin-inline-start: 0.75em;

      slot {
        flex-direction: column;
      }
    }
  }

  .vertical #references slot {
    flex-direction: column;
  }
`;/*! Copyright 2026 Fonticons, Inc. - https://webawesome.com/license */function la(o,i,r){let a=(o-i)/r;return Math.abs(a-Math.round(a))>0.000000001}var Y6=()=>{return{observedAttributes:["min","max","step"],checkValidity(o){let i={message:"",isValid:!0,invalidKeys:[]},r=(a,n,w,b)=>{if(typeof document>"u")return"";let c=document.createElement("input");return c.type="range",c.min=String(n),c.max=String(w),c.step=String(b),c.value=String(a),c.checkValidity(),c.validationMessage};if(o.isRange){let{minValue:a,maxValue:n}=o;if(a<o.min)return i.isValid=!1,i.invalidKeys.push("rangeUnderflow"),i.message=r(a,o.min,o.max,o.step)||`Value must be greater than or equal to ${o.min}.`,i;if(n>o.max)return i.isValid=!1,i.invalidKeys.push("rangeOverflow"),i.message=r(n,o.min,o.max,o.step)||`Value must be less than or equal to ${o.max}.`,i;if(o.step&&o.step!==1){let w=la(a,o.min,o.step),b=la(n,o.min,o.step);if(w||b){i.isValid=!1,i.invalidKeys.push("stepMismatch");let c=w?a:n;return i.message=r(c,o.min,o.max,o.step)||`Value must be a multiple of ${o.step}.`,i}}}else{let a=o.value;if(a<o.min)return i.isValid=!1,i.invalidKeys.push("rangeUnderflow"),i.message=r(a,o.min,o.max,o.step)||`Value must be greater than or equal to ${o.min}.`,i;if(a>o.max)return i.isValid=!1,i.invalidKeys.push("rangeOverflow"),i.message=r(a,o.min,o.max,o.step)||`Value must be less than or equal to ${o.max}.`,i;if(o.step&&o.step!==1&&la(a,o.min,o.step))return i.isValid=!1,i.invalidKeys.push("stepMismatch"),i.message=r(a,o.min,o.max,o.step)||`Value must be a multiple of ${o.step}.`,i}return i}}},oo=class extends E{constructor(){super(...arguments);this.draggableThumbMin=null,this.draggableThumbMax=null,this.hasSlotController=new W(this,"hint","label"),this.localize=new B(this),this.activeThumb=null,this.lastTrackPosition=null,this.label="",this.hint="",this.minValue=0,this.maxValue=50,this.defaultValue=this.getAttribute("value")==null?this.minValue:Number(this.getAttribute("value")),this._value=null,this.range=!1,this.disabled=!1,this.readonly=!1,this.orientation="horizontal",this.size="m",this.min=0,this.max=100,this.step=1,this.tooltipDistance=8,this.tooltipPlacement="top",this.withMarkers=!1,this.withTooltip=!1,this.withLabel=!1,this.withHint=!1}static get validators(){return M?[]:[...super.validators,Y6()]}get focusableAnchor(){return this.isRange?this.thumbMin||this.slider:this.slider}get validationTarget(){return this.focusableAnchor}get value(){if(this.valueHasChanged){let i=this._value??this.minValue??0;return D(i,this.min,this.max)}let o=this._value??this.defaultValue;return D(o,this.min,this.max)}set value(o){if(o=Number(o)??this.minValue,this._value===o)return;this.valueHasChanged=!0,this._value=o}get isRange(){return this.range}handleSizeChange(){j(this.localName,this.size)}firstUpdated(o){if(super.firstUpdated(o),this.isRange)this.draggableThumbMin=new Fr(this.thumbMin,{start:()=>{this.activeThumb="min",this.trackBoundingClientRect=this.track.getBoundingClientRect(),this.valueWhenDraggingStarted=this.minValue,this.customStates.set("dragging",!0),this.showRangeTooltips()},move:(i,r)=>{this.setThumbValueFromCoordinates(i,r,"min")},stop:()=>{if(this.minValue!==this.valueWhenDraggingStarted)this.updateComplete.then(()=>{this.dispatchEvent(new Event("change",{bubbles:!0,composed:!0}))}),this.hasInteracted=!0;this.hideRangeTooltips(),this.customStates.set("dragging",!1),this.valueWhenDraggingStarted=void 0,this.activeThumb=null}}),this.draggableThumbMax=new Fr(this.thumbMax,{start:()=>{this.activeThumb="max",this.trackBoundingClientRect=this.track.getBoundingClientRect(),this.valueWhenDraggingStarted=this.maxValue,this.customStates.set("dragging",!0),this.showRangeTooltips()},move:(i,r)=>{this.setThumbValueFromCoordinates(i,r,"max")},stop:()=>{if(this.maxValue!==this.valueWhenDraggingStarted)this.updateComplete.then(()=>{this.dispatchEvent(new Event("change",{bubbles:!0,composed:!0}))}),this.hasInteracted=!0;this.hideRangeTooltips(),this.customStates.set("dragging",!1),this.valueWhenDraggingStarted=void 0,this.activeThumb=null}}),this.draggableTrack=new Fr(this.track,{start:(i,r)=>{if(this.trackBoundingClientRect=this.track.getBoundingClientRect(),this.activeThumb)this.valueWhenDraggingStarted=this.activeThumb==="min"?this.minValue:this.maxValue;else{let a=this.getValueFromCoordinates(i,r),n=Math.abs(a-this.minValue),w=Math.abs(a-this.maxValue);if(n===w)if(a>this.maxValue)this.activeThumb="max";else if(a<this.minValue)this.activeThumb="min";else{let b=this.localize.dir()==="rtl",c=this.orientation==="vertical",m=c?r:i,p=this.lastTrackPosition||m;this.lastTrackPosition=m;let d=m>p!==b&&!c||m<p&&c;this.activeThumb=d?"max":"min"}else this.activeThumb=n<=w?"min":"max";this.valueWhenDraggingStarted=this.activeThumb==="min"?this.minValue:this.maxValue}this.customStates.set("dragging",!0),this.setThumbValueFromCoordinates(i,r,this.activeThumb),this.showRangeTooltips()},move:(i,r)=>{if(this.activeThumb)this.setThumbValueFromCoordinates(i,r,this.activeThumb)},stop:()=>{if(this.activeThumb){if((this.activeThumb==="min"?this.minValue:this.maxValue)!==this.valueWhenDraggingStarted)this.updateComplete.then(()=>{this.dispatchEvent(new Event("change",{bubbles:!0,composed:!0}))}),this.hasInteracted=!0}this.hideRangeTooltips(),this.customStates.set("dragging",!1),this.valueWhenDraggingStarted=void 0,this.activeThumb=null}});else this.draggableTrack=new Fr(this.slider,{start:(i,r)=>{this.trackBoundingClientRect=this.track.getBoundingClientRect(),this.valueWhenDraggingStarted=this.value,this.customStates.set("dragging",!0),this.setValueFromCoordinates(i,r),this.showTooltip()},move:(i,r)=>{this.setValueFromCoordinates(i,r)},stop:()=>{if(this.value!==this.valueWhenDraggingStarted)this.updateComplete.then(()=>{this.dispatchEvent(new Event("change",{bubbles:!0,composed:!0}))}),this.hasInteracted=!0;this.hideTooltip(),this.customStates.set("dragging",!1),this.valueWhenDraggingStarted=void 0}})}willUpdate(o){if(this.isRange){if(o.has("minValue")||o.has("maxValue")||o.has("min")||o.has("max"))this.minValue=D(this.minValue,this.min,this.maxValue),this.maxValue=D(this.maxValue,this.minValue,this.max)}super.willUpdate(o)}updated(o){if(this.isRange){if(o.has("minValue")||o.has("maxValue"))this.updateFormValue()}if(o.has("disabled")||o.has("readonly")){let i=!(this.disabled||this.readonly);if(this.isRange){if(this.draggableThumbMin)this.draggableThumbMin.toggle(i);if(this.draggableThumbMax)this.draggableThumbMax.toggle(i)}if(this.draggableTrack)this.draggableTrack.toggle(i)}super.updated(o)}formDisabledCallback(o){this.disabled=o}formResetCallback(){if(this.isRange)this.minValue=parseFloat(this.getAttribute("min-value")??String(this.min)),this.maxValue=parseFloat(this.getAttribute("max-value")??String(this.max));else this._value=null,this.defaultValue=this.defaultValue??parseFloat(this.getAttribute("value")??String(this.min));this.valueHasChanged=!1,this.hasInteracted=!1,super.formResetCallback()}clampAndRoundToStep(o){let i=(String(this.step).split(".")[1]||"").replace(/0+$/g,"").length,r=Number(this.step),a=Number(this.min),n=Number(this.max);return o=Math.round(o/r)*r,o=D(o,a,n),parseFloat(o.toFixed(i))}getPercentageFromValue(o){return(o-this.min)/(this.max-this.min)*100}getValueFromCoordinates(o,i){let r=this.localize.dir()==="rtl",a=this.orientation==="vertical",{top:n,right:w,bottom:b,left:c,height:m,width:p}=this.trackBoundingClientRect,d=a?i:o,s=a?{start:n,end:b,size:m}:{start:c,end:w,size:p},u=(a?s.end-d:r?s.end-d:d-s.start)/s.size;return this.clampAndRoundToStep(this.min+(this.max-this.min)*u)}handleBlur(){if(this.isRange)requestAnimationFrame(()=>{let o=this.shadowRoot?.activeElement;if(!(o===this.thumbMin||o===this.thumbMax))this.hideRangeTooltips()});else this.hideTooltip();this.customStates.set("focused",!1),this.dispatchEvent(new FocusEvent("blur",{bubbles:!0,composed:!0}))}handleFocus(o){let i=o.target;if(this.isRange){if(i===this.thumbMin)this.activeThumb="min";else if(i===this.thumbMax)this.activeThumb="max";this.showRangeTooltips()}else this.showTooltip();this.customStates.set("focused",!0),this.dispatchEvent(new FocusEvent("focus",{bubbles:!0,composed:!0}))}handleKeyDown(o){let i=this.localize.dir()==="rtl",r=o.target;if(this.disabled||this.readonly)return;if(this.isRange){if(r===this.thumbMin)this.activeThumb="min";else if(r===this.thumbMax)this.activeThumb="max";if(!this.activeThumb)return}let a=this.isRange?this.activeThumb==="min"?this.minValue:this.maxValue:this.value,n=a;switch(o.key){case"ArrowUp":case(i?"ArrowLeft":"ArrowRight"):o.preventDefault(),n=this.clampAndRoundToStep(a+this.step);break;case"ArrowDown":case(i?"ArrowRight":"ArrowLeft"):o.preventDefault(),n=this.clampAndRoundToStep(a-this.step);break;case"Home":o.preventDefault(),n=this.isRange&&this.activeThumb==="min"?this.min:this.isRange?this.minValue:this.min;break;case"End":o.preventDefault(),n=this.isRange&&this.activeThumb==="max"?this.max:this.isRange?this.maxValue:this.max;break;case"PageUp":o.preventDefault();let w=Math.max(a+(this.max-this.min)/10,a+this.step);n=this.clampAndRoundToStep(w);break;case"PageDown":o.preventDefault();let b=Math.min(a-(this.max-this.min)/10,a-this.step);n=this.clampAndRoundToStep(b);break;case"Enter":x0(o,this);return}if(n===a)return;if(this.isRange){if(this.activeThumb==="min")if(n>this.maxValue)this.maxValue=n,this.minValue=n;else this.minValue=Math.max(this.min,n);else if(n<this.minValue)this.minValue=n,this.maxValue=n;else this.maxValue=Math.min(this.max,n);this.updateFormValue()}else this.value=D(n,this.min,this.max);this.updateComplete.then(()=>{this.dispatchEvent(new InputEvent("input",{bubbles:!0,composed:!0})),this.dispatchEvent(new Event("change",{bubbles:!0,composed:!0}))}),this.hasInteracted=!0}handleLabelPointerDown(o){if(o.preventDefault(),!this.disabled)if(this.isRange)this.thumbMin?.focus();else this.slider.focus()}setValueFromCoordinates(o,i){let r=this.value;if(this.value=this.getValueFromCoordinates(o,i),this.value!==r)this.updateComplete.then(()=>{this.dispatchEvent(new InputEvent("input",{bubbles:!0,composed:!0}))})}setThumbValueFromCoordinates(o,i,r){let a=this.getValueFromCoordinates(o,i),n=r==="min"?this.minValue:this.maxValue;if(r==="min")if(a>this.maxValue)this.maxValue=a,this.minValue=a;else this.minValue=Math.max(this.min,a);else if(a<this.minValue)this.minValue=a,this.maxValue=a;else this.maxValue=Math.min(this.max,a);if(n!==(r==="min"?this.minValue:this.maxValue))this.updateFormValue(),this.updateComplete.then(()=>{this.dispatchEvent(new InputEvent("input",{bubbles:!0,composed:!0}))})}showTooltip(){if(this.withTooltip&&this.tooltip)this.tooltip.open=!0}hideTooltip(){if(this.withTooltip&&this.tooltip)this.tooltip.open=!1}showRangeTooltips(){if(!this.withTooltip)return;let o=this.shadowRoot?.getElementById("tooltip-thumb-min"),i=this.shadowRoot?.getElementById("tooltip-thumb-max");if(this.activeThumb==="min"){if(o)o.open=!0;if(i)i.open=!1}else if(this.activeThumb==="max"){if(i)i.open=!0;if(o)o.open=!1}}hideRangeTooltips(){if(!this.withTooltip)return;let o=this.shadowRoot?.getElementById("tooltip-thumb-min"),i=this.shadowRoot?.getElementById("tooltip-thumb-max");if(o)o.open=!1;if(i)i.open=!1}updateFormValue(o){if(this.isRange){let i=new FormData;i.append(this.name||"",String(this.minValue)),i.append(this.name||"",String(this.maxValue)),this.setValue(i,i);return}super.updateFormValue(o)}focus(){if(this.isRange)this.thumbMin?.focus();else this.slider.focus()}blur(){if(this.isRange){for(let o of mr())if(o===this.thumbMin){this.thumbMin.blur();break}else if(o===this.thumbMax){this.thumbMax.blur();break}}else this.slider.blur()}stepDown(){if(this.isRange){let o=this.clampAndRoundToStep(this.minValue-this.step);this.minValue=D(o,this.min,this.maxValue),this.updateFormValue()}else{let o=this.clampAndRoundToStep(this.value-this.step);this.value=o}}stepUp(){if(this.isRange){let o=this.clampAndRoundToStep(this.maxValue+this.step);this.maxValue=D(o,this.minValue,this.max),this.updateFormValue()}else{let o=this.clampAndRoundToStep(this.value+this.step);this.value=o}}render(){let o=this.hasSlotController.test("label","withLabel"),i=this.hasSlotController.test("hint","withHint"),r=this.label?!0:!!o,a=this.hint?!0:!!i,n=this.hasSlotController.test("reference"),w=Z({xs:this.size==="xs",s:this.size==="s"||this.size==="small",m:this.size==="m"||this.size==="medium",l:this.size==="l"||this.size==="large",xl:this.size==="xl",small:this.size==="small"||this.size==="s",medium:this.size==="medium"||this.size==="m",large:this.size==="large"||this.size==="l",horizontal:this.orientation==="horizontal",vertical:this.orientation==="vertical",disabled:this.disabled}),b=[];if(this.withMarkers)for(let z=this.min;z<=this.max;z+=this.step)b.push(this.getPercentageFromValue(z));let c=h`
      <label
        id="label"
        part="label"
        for=${this.isRange?"thumb-min":"text-box"}
        class=${Z({vh:!r,"has-label":r})}
        @pointerdown=${this.handleLabelPointerDown}
      >
        <slot name="label">${this.label}</slot>
      </label>
    `,m=h`
      <div
        id="hint"
        part="hint"
        class=${Z({"has-slotted":a})}
      >
        <slot name="hint">${this.hint}</slot>
      </div>
    `,p=this.withMarkers?h`
          <div id="markers" part="markers">
            ${b.map((z)=>h`<span part="marker" class="marker" style=${mo({"--position":`${z}%`})}></span>`)}
          </div>
        `:"",d=n?h`
          <div id="references" part="references" aria-hidden="true">
            <slot name="reference"></slot>
          </div>
        `:"",s=(z,u)=>this.withTooltip?h`
            <wa-tooltip
              id=${`tooltip${z!=="thumb"?"-"+z:""}`}
              part="tooltip"
              exportparts="
                base:tooltip__base,
                tooltip:tooltip__tooltip,
                body:tooltip__body,
                arrow:tooltip__arrow
              "
              trigger="manual"
              distance=${this.tooltipDistance}
              placement=${this.tooltipPlacement}
              for=${z}
              activation="manual"
              dir=${this.localize.dir()}
            >
              <span aria-hidden="true">
                ${typeof this.valueFormatter==="function"?this.valueFormatter(u):this.localize.number(u)}
              </span>
            </wa-tooltip>
          `:"";if(this.isRange){let z=D(this.getPercentageFromValue(this.minValue),0,100),u=D(this.getPercentageFromValue(this.maxValue),0,100);return h`
        ${c}

        <div id="slider" part="slider" class=${w}>
          <div id="track" part="track">
            <div
              id="indicator"
              part="indicator"
              style=${mo({"--start":`${Math.min(z,u)}%`,"--end":`${Math.max(z,u)}%`})}
            ></div>

            ${p}

            <span
              id="thumb-min"
              part="thumb thumb-min"
              style=${mo({"--position":`${z}%`})}
              role="slider"
              aria-valuemin=${this.min}
              aria-valuenow=${this.minValue}
              aria-valuetext=${typeof this.valueFormatter==="function"?this.valueFormatter(this.minValue):this.localize.number(this.minValue)}
              aria-valuemax=${this.max}
              aria-label="${this.label?`${this.label} (minimum value)`:"Minimum value"}"
              aria-orientation=${this.orientation}
              aria-disabled=${this.disabled?"true":"false"}
              aria-readonly=${this.readonly?"true":"false"}
              tabindex=${this.disabled?-1:0}
              @blur=${this.handleBlur}
              @focus=${this.handleFocus}
              @keydown=${this.handleKeyDown}
            ></span>

            <span
              id="thumb-max"
              part="thumb thumb-max"
              style=${mo({"--position":`${u}%`})}
              role="slider"
              aria-valuemin=${this.min}
              aria-valuenow=${this.maxValue}
              aria-valuetext=${typeof this.valueFormatter==="function"?this.valueFormatter(this.maxValue):this.localize.number(this.maxValue)}
              aria-valuemax=${this.max}
              aria-label="${this.label?`${this.label} (maximum value)`:"Maximum value"}"
              aria-orientation=${this.orientation}
              aria-disabled=${this.disabled?"true":"false"}
              aria-readonly=${this.readonly?"true":"false"}
              tabindex=${this.disabled?-1:0}
              @blur=${this.handleBlur}
              @focus=${this.handleFocus}
              @keydown=${this.handleKeyDown}
            ></span>
          </div>

          ${d} ${m}
        </div>

        ${s("thumb-min",this.minValue)} ${s("thumb-max",this.maxValue)}
      `}else{let z=D(this.getPercentageFromValue(this.value),0,100),u=D(this.getPercentageFromValue(typeof this.indicatorOffset==="number"?this.indicatorOffset:this.min),0,100);return h`
        ${c}

        <div
          id="slider"
          part="slider"
          class=${w}
          role="slider"
          aria-disabled=${this.disabled?"true":"false"}
          aria-readonly=${this.disabled?"true":"false"}
          aria-orientation=${this.orientation}
          aria-valuemin=${this.min}
          aria-valuenow=${this.value}
          aria-valuetext=${typeof this.valueFormatter==="function"?this.valueFormatter(this.value):this.localize.number(this.value)}
          aria-valuemax=${this.max}
          aria-labelledby="label"
          aria-describedby="hint"
          tabindex=${this.disabled?-1:0}
          @blur=${this.handleBlur}
          @focus=${this.handleFocus}
          @keydown=${this.handleKeyDown}
        >
          <div id="track" part="track">
            <div
              id="indicator"
              part="indicator"
              style=${mo({"--start":`${u}%`,"--end":`${z}%`})}
            ></div>

            ${p}
            <span id="thumb" part="thumb" style=${mo({"--position":`${z}%`})}></span>
          </div>

          ${d} ${m}
        </div>

        ${s("thumb",this.value)}
      `}}};oo.formAssociated=!0;oo.observeSlots=!0;oo.css=[I,go,y4];f([Y("#slider")],oo.prototype,"slider",2);f([Y("#thumb")],oo.prototype,"thumb",2);f([Y("#thumb-min")],oo.prototype,"thumbMin",2);f([Y("#thumb-max")],oo.prototype,"thumbMax",2);f([Y("#track")],oo.prototype,"track",2);f([Y("#tooltip")],oo.prototype,"tooltip",2);f([t()],oo.prototype,"label",2);f([t({attribute:"hint"})],oo.prototype,"hint",2);f([t({reflect:!0})],oo.prototype,"name",2);f([t({type:Number,attribute:"min-value"})],oo.prototype,"minValue",2);f([t({type:Number,attribute:"max-value"})],oo.prototype,"maxValue",2);f([t({attribute:"value",reflect:!0,type:Number})],oo.prototype,"defaultValue",2);f([J()],oo.prototype,"value",1);f([t({type:Boolean,reflect:!0})],oo.prototype,"range",2);f([t({type:Boolean})],oo.prototype,"disabled",2);f([t({type:Boolean,reflect:!0})],oo.prototype,"readonly",2);f([t({reflect:!0})],oo.prototype,"orientation",2);f([t({reflect:!0})],oo.prototype,"size",2);f([v("size")],oo.prototype,"handleSizeChange",1);f([t({attribute:"indicator-offset",type:Number})],oo.prototype,"indicatorOffset",2);f([t({type:Number})],oo.prototype,"min",2);f([t({type:Number})],oo.prototype,"max",2);f([t({type:Number})],oo.prototype,"step",2);f([t({type:Boolean})],oo.prototype,"autofocus",2);f([t({attribute:"tooltip-distance",type:Number})],oo.prototype,"tooltipDistance",2);f([t({attribute:"tooltip-placement",reflect:!0})],oo.prototype,"tooltipPlacement",2);f([t({attribute:"with-markers",type:Boolean})],oo.prototype,"withMarkers",2);f([t({attribute:"with-tooltip",type:Boolean})],oo.prototype,"withTooltip",2);f([t({attribute:"with-label",type:Boolean})],oo.prototype,"withLabel",2);f([t({attribute:"with-hint",type:Boolean})],oo.prototype,"withHint",2);f([t({attribute:!1})],oo.prototype,"valueFormatter",2);oo=f([$("wa-slider")],oo);/*! Copyright 2026 Fonticons, Inc. - https://webawesome.com/license *//*! Copyright 2026 Fonticons, Inc. - https://webawesome.com/license *//*! Copyright 2026 Fonticons, Inc. - https://webawesome.com/license */var l4=F`
  :host {
    --divider-width: 0.25rem;
    --divider-hit-area: 0.75rem;
    --min: 0%;
    --max: 100%;

    display: grid;
  }

  .start,
  .end {
    overflow: hidden;
  }

  .divider {
    flex: 0 0 var(--divider-width);
    display: flex;
    position: relative;
    align-items: center;
    justify-content: center;
    background-color: var(--wa-color-neutral-border-normal);
    color: var(--wa-color-neutral-on-normal);
    z-index: 1;
  }

  .divider:focus {
    outline: none;
  }

  :host(:not([disabled])) .divider:focus-visible {
    outline: var(--wa-focus-ring);
  }

  :host([disabled]) .divider {
    cursor: not-allowed;
  }

  /* Horizontal */
  :host(:not([orientation='vertical'], [disabled])) .divider {
    cursor: col-resize;
  }

  :host(:not([orientation='vertical'])) .divider::after {
    display: flex;
    content: '';
    position: absolute;
    height: 100%;
    left: calc(var(--divider-hit-area) / -2 + var(--divider-width) / 2);
    width: var(--divider-hit-area);
  }

  /* Vertical */
  :host([orientation='vertical']) {
    flex-direction: column;
  }

  :host([orientation='vertical']:not([disabled])) .divider {
    cursor: row-resize;
  }

  :host([orientation='vertical']) .divider::after {
    content: '';
    position: absolute;
    width: 100%;
    top: calc(var(--divider-hit-area) / -2 + var(--divider-width) / 2);
    height: var(--divider-hit-area);
  }

  @media (forced-colors: active) {
    .divider {
      outline: solid 1px transparent;
    }
  }
`;/*! Copyright 2026 Fonticons, Inc. - https://webawesome.com/license */var fi=class extends L{constructor(){super(...arguments);this.isCollapsed=!1,this.localize=new B(this),this.positionBeforeCollapsing=0,this.position=50,this.orientation="horizontal",this.disabled=!1,this.snapThreshold=12}connectedCallback(){if(super.connectedCallback(),!M)this.resizeObserver=new ResizeObserver((o)=>this.handleResize(o)),this.updateComplete.then(()=>this.resizeObserver.observe(this)),this.detectSize(),this.cachedPositionInPixels=this.percentageToPixels(this.position)}disconnectedCallback(){super.disconnectedCallback(),this.resizeObserver?.unobserve(this)}detectSize(){let{width:o,height:i}=this.getBoundingClientRect();this.size=this.orientation==="vertical"?i:o}percentageToPixels(o){return this.size*(o/100)}pixelsToPercentage(o){return o/this.size*100}handleDrag(o){let i=this.didSSR&&!this.hasUpdated?this.dir==="rtl":this.localize.dir()==="rtl";if(this.disabled)return;if(o.cancelable)o.preventDefault();z0(this,{onMove:(r,a)=>{let n=this.orientation==="vertical"?a:r;if(this.primary==="end")n=this.size-n;if(this.snap)this.snap.split(" ").forEach((b)=>{let c;if(b.endsWith("%"))c=this.size*(parseFloat(b)/100);else c=parseFloat(b);if(i&&this.orientation==="horizontal")c=this.size-c;if(n>=c-this.snapThreshold&&n<=c+this.snapThreshold)n=c});this.position=D(this.pixelsToPercentage(n),0,100)},initialEvent:o})}handleKeyDown(o){if(this.disabled)return;if(["ArrowLeft","ArrowRight","ArrowUp","ArrowDown","Home","End","Enter"].includes(o.key)){let i=this.position,r=(o.shiftKey?10:1)*(this.primary==="end"?-1:1);if(o.preventDefault(),o.key==="ArrowLeft"&&this.orientation==="horizontal"||o.key==="ArrowUp"&&this.orientation==="vertical")i-=r;if(o.key==="ArrowRight"&&this.orientation==="horizontal"||o.key==="ArrowDown"&&this.orientation==="vertical")i+=r;if(o.key==="Home")i=this.primary==="end"?100:0;if(o.key==="End")i=this.primary==="end"?0:100;if(o.key==="Enter")if(this.isCollapsed)i=this.positionBeforeCollapsing,this.isCollapsed=!1;else{let a=this.position;i=0,requestAnimationFrame(()=>{this.isCollapsed=!0,this.positionBeforeCollapsing=a})}this.position=D(i,0,100)}}handleResize(o){let{width:i,height:r}=o[0].contentRect;if(this.size=this.orientation==="vertical"?r:i,isNaN(this.cachedPositionInPixels)||this.position===1/0)this.cachedPositionInPixels=Number(this.getAttribute("position-in-pixels")),this.positionInPixels=Number(this.getAttribute("position-in-pixels")),this.position=this.pixelsToPercentage(this.positionInPixels);if(this.primary){let a=this.pixelsToPercentage(this.cachedPositionInPixels);if(this.position!==a)this.position=a}}handlePositionChange(){this.cachedPositionInPixels=this.percentageToPixels(this.position);let o=this.percentageToPixels(this.position);if(this.positionInPixels!==o)this.positionInPixels=o;this.isCollapsed=!1,this.positionBeforeCollapsing=0,this.dispatchEvent(new z2)}handlePositionInPixelsChange(){let o=this.pixelsToPercentage(this.positionInPixels);if(this.position!==o)this.position=o}handleVerticalChange(){this.detectSize()}updateStyles(){let o=this.orientation==="vertical"?"gridTemplateRows":"gridTemplateColumns",i=this.orientation==="vertical"?"gridTemplateColumns":"gridTemplateRows",r=this.hasUpdated?this.localize.dir()==="rtl":this.dir==="rtl",a=`
      clamp(
        0%,
        clamp(
          var(--min),
          ${this.position}% - var(--divider-width) / 2,
          var(--max)
        ),
        calc(100% - var(--divider-width))
      )
    `,n="auto";if(this.primary==="end")if(r&&this.orientation==="horizontal")this.setStyle(o,`${a} var(--divider-width) auto`);else this.setStyle(o,`auto var(--divider-width) ${a}`);else if(r&&this.orientation==="horizontal")this.setStyle(o,`auto var(--divider-width) ${a}`);else this.setStyle(o,`${a} var(--divider-width) auto`);this.setStyle(i,"unset")}willUpdate(o){if(!this.style)this.updateStyles();super.willUpdate(o)}updated(o){super.updated(o)}render(){if(this.style)this.updateStyles();return h`
      <slot name="start" part="panel start" class="start"></slot>

      <div
        part="divider"
        class="divider"
        tabindex=${Q(this.disabled?void 0:"0")}
        role="separator"
        aria-valuenow=${this.position}
        aria-valuemin="0"
        aria-valuemax="100"
        aria-label=${this.localize.term("resize")}
        @keydown=${this.handleKeyDown}
        @mousedown=${this.handleDrag}
        @touchstart=${this.handleDrag}
      >
        <slot name="divider"></slot>
      </div>

      <slot name="end" part="panel end" class="end"></slot>
    `}};fi.css=l4;f([Y(".divider")],fi.prototype,"divider",2);f([t({type:Number,reflect:!0})],fi.prototype,"position",2);f([t({attribute:"position-in-pixels",type:Number})],fi.prototype,"positionInPixels",2);f([t({reflect:!0})],fi.prototype,"orientation",2);f([t({type:Boolean,reflect:!0})],fi.prototype,"disabled",2);f([t()],fi.prototype,"primary",2);f([t()],fi.prototype,"snap",2);f([t({type:Number,attribute:"snap-threshold"})],fi.prototype,"snapThreshold",2);f([v("position")],fi.prototype,"handlePositionChange",1);f([v("positionInPixels")],fi.prototype,"handlePositionInPixelsChange",1);f([v("vertical")],fi.prototype,"handleVerticalChange",1);fi=f([$("wa-split-panel")],fi);/*! Copyright 2026 Fonticons, Inc. - https://webawesome.com/license *//*! Copyright 2026 Fonticons, Inc. - https://webawesome.com/license */var v4=F`
  :host {
    --height: var(--wa-form-control-toggle-size);
    --width: calc(var(--height) * 1.75);
    --thumb-size: 0.75em;

    display: inline-flex;
    line-height: var(--wa-form-control-value-line-height);
  }

  label {
    position: relative;
    display: flex;
    align-items: center;
    font: inherit;
    color: var(--wa-form-control-value-color);
    vertical-align: middle;
    cursor: pointer;
  }

  .switch {
    flex: 0 0 auto;
    position: relative;
    display: flex;
    align-items: center;
    justify-content: center;
    width: var(--width);
    height: var(--height);
    background-color: var(--wa-form-control-background-color);
    border-color: var(--wa-form-control-border-color);
    border-radius: var(--height);
    border-style: var(--wa-form-control-border-style);
    border-width: var(--wa-form-control-border-width);
    transition-property: translate, background, border-color, box-shadow;
    transition-duration: var(--wa-transition-normal);
    transition-timing-function: var(--wa-transition-easing);
  }

  :host([did-ssr]:not(:defined)) .switch {
    transition-property: unset;
    transition-duration: unset;
    transition-timing-function: unset;
  }

  .switch .thumb {
    aspect-ratio: 1 / 1;
    width: var(--thumb-size);
    height: var(--thumb-size);
    background-color: var(--wa-form-control-border-color);
    border-radius: 50%;
    translate: calc((var(--width) - var(--height)) / -2);
    transition: inherit;
  }
  .switch .thumb:dir(rtl) {
    translate: calc((var(--width) - var(--height)) / 2);
  }

  .input {
    position: absolute;
    opacity: 0;
    padding: 0;
    margin: 0;
    pointer-events: none;
  }

  /* Focus */
  label:not(.disabled) .input:focus-visible ~ [part~='control'] {
    outline: var(--wa-focus-ring);
    outline-offset: var(--wa-focus-ring-offset);
  }

  /* Checked */
  .checked .switch {
    background-color: var(--wa-form-control-activated-color);
    border-color: var(--wa-form-control-activated-color);
  }

  .checked .switch .thumb {
    background-color: var(--wa-color-surface-default);
    translate: calc((var(--width) - var(--height)) / 2);
  }
  .checked .switch .thumb:dir(rtl) {
    translate: calc((var(--width) - var(--height)) / -2);
  }

  /* Disabled */
  label:has(> :disabled) {
    opacity: 0.5;
    cursor: not-allowed;
  }

  [part~='label'] {
    display: inline-block;
    line-height: var(--height);
    margin-inline-start: 0.5em;
    user-select: none;
    -webkit-user-select: none;
  }

  :host([required]) [part~='label']::after {
    content: var(--wa-form-control-required-content);
    color: var(--wa-form-control-required-content-color);
    margin-inline-start: var(--wa-form-control-required-content-offset);
  }

  @media (forced-colors: active) {
    :checked:enabled + .switch:hover .thumb,
    :checked + .switch .thumb {
      background-color: ButtonText;
    }
  }
`;/*! Copyright 2026 Fonticons, Inc. - https://webawesome.com/license */var Vo=class extends E{constructor(){super(...arguments);this.hasSlotController=new W(this,"hint"),this.localize=new B(this),this.title="",this.name=null,this._value=this.getAttribute("value")??null,this.size="m",this.disabled=!1,this._checked=null,this.defaultChecked=this.hasAttribute("checked"),this.required=!1,this.hint="",this.withHint=!1}static get validators(){return M?[]:[...super.validators,Wo()]}get value(){return this._value??"on"}set value(o){this._value=o}handleSizeChange(){j(this.localName,this.size)}get checked(){if(this.valueHasChanged)return Boolean(this._checked);return this._checked??this.defaultChecked}set checked(o){this._checked=Boolean(o),this.valueHasChanged=!0}handleClick(){this.hasInteracted=!0,this.checked=!this.checked,this.updateComplete.then(()=>{this.dispatchEvent(new Event("change",{bubbles:!0,composed:!0}))})}handleKeyDown(o){let i=this.localize.dir()==="rtl";if(o.key==="ArrowLeft")o.preventDefault(),this.checked=i,this.updateComplete.then(()=>{this.dispatchEvent(new Event("change",{bubbles:!0,composed:!0})),this.dispatchEvent(new InputEvent("input",{bubbles:!0,composed:!0}))});if(o.key==="ArrowRight")o.preventDefault(),this.checked=!i,this.updateComplete.then(()=>{this.dispatchEvent(new Event("change",{bubbles:!0,composed:!0})),this.dispatchEvent(new InputEvent("input",{bubbles:!0,composed:!0}))})}willUpdate(o){if(super.willUpdate(o),o.has("value")||o.has("checked")||o.has("defaultChecked")||o.has("disabled"))this.handleValueOrCheckedChange()}handleValueOrCheckedChange(){if(this.didSSR&&!this.hasUpdated){this.updateComplete.then(()=>{this.handleValueOrCheckedChange()});return}this.setValue(this.checked?this.value:null,this._value),this.updateValidity()}handleStateChange(){if(this.hasUpdated)this.input.checked=this.checked;this.customStates.set("checked",this.checked),this.updateValidity()}handleDisabledChange(){this.updateValidity()}click(){this.input.click()}focus(o){this.input.focus(o)}blur(){this.input.blur()}setValue(o,i){if(!this.checked){this.internals.setFormValue(null,null);return}this.internals.setFormValue(o??"on",i)}formResetCallback(){this._checked=null,super.formResetCallback(),this.handleValueOrCheckedChange()}render(){let o=this.hasSlotController.test("hint","withHint"),i=this.hint?!0:!!o,r=this.didSSR&&!this.hasUpdated?this.checked:this.defaultChecked,a=this.didSSR&&!this.hasUpdated?null:Oo(this.checked);return h`
      <label
        part="base switch"
        class=${Z({checked:this.checked,disabled:this.disabled})}
      >
        <input
          class="input"
          type="checkbox"
          title=${this.title}
          name=${Q(this.name)}
          value=${Q(this.value)}
          .checked=${Q(a)}
          ?checked=${r}
          ?disabled=${this.disabled}
          ?required=${this.required}
          role="switch"
          aria-checked=${this.checked?"true":"false"}
          aria-describedby="hint"
          @click=${this.handleClick}
          @keydown=${this.handleKeyDown}
        />

        <span part="control" class="switch">
          <span part="thumb" class="thumb"></span>
        </span>

        <slot part="label" class="label"></slot>
      </label>

      <slot
        id="hint"
        name="hint"
        part="hint"
        class=${Z({"has-slotted":i})}
        aria-hidden=${i?"false":"true"}
        >${this.hint}</slot
      >
    `}};Vo.shadowRootOptions={...E.shadowRootOptions,delegatesFocus:!0};Vo.css=[go,I,v4];f([Y('input[type="checkbox"]')],Vo.prototype,"input",2);f([t()],Vo.prototype,"title",2);f([t({reflect:!0})],Vo.prototype,"name",2);f([t({reflect:!0})],Vo.prototype,"value",1);f([t({reflect:!0})],Vo.prototype,"size",2);f([v("size")],Vo.prototype,"handleSizeChange",1);f([t({type:Boolean})],Vo.prototype,"disabled",2);f([t({type:Boolean,attribute:!1})],Vo.prototype,"checked",1);f([t({type:Boolean,attribute:"checked",reflect:!0})],Vo.prototype,"defaultChecked",2);f([t({type:Boolean,reflect:!0})],Vo.prototype,"required",2);f([t({attribute:"hint"})],Vo.prototype,"hint",2);f([t({attribute:"with-hint",type:Boolean})],Vo.prototype,"withHint",2);f([v(["checked","defaultChecked"])],Vo.prototype,"handleStateChange",1);f([v("disabled",{waitUntilFirstUpdate:!0})],Vo.prototype,"handleDisabledChange",1);Vo=f([$("wa-switch")],Vo);Vo.disableWarning?.("change-in-update");/*! Copyright 2026 Fonticons, Inc. - https://webawesome.com/license *//*! Copyright 2026 Fonticons, Inc. - https://webawesome.com/license */var x4=F`
  :host {
    display: inline-block;
    color: var(--wa-color-neutral-on-quiet);
    font-weight: var(--wa-font-weight-action);
  }

  .tab {
    display: inline-flex;
    align-items: center;
    font: inherit;
    padding: 1em 1.5em;
    white-space: nowrap;
    user-select: none;
    -webkit-user-select: none;
    cursor: pointer;
    transition: color var(--wa-transition-fast) var(--wa-transition-easing);

    ::slotted(wa-icon:first-child) {
      margin-inline-end: 0.5em;
    }

    ::slotted(wa-icon:last-child) {
      margin-inline-start: 0.5em;
    }
  }

  @media (hover: hover) {
    :host(:hover:not([disabled])) .tab {
      color: currentColor;
    }
  }

  :host(:focus) {
    outline: transparent;
  }

  :host(:focus-visible) .tab {
    outline: var(--wa-focus-ring);
    outline-offset: calc(-1 * var(--wa-border-width-l) - var(--wa-focus-ring-offset));
  }

  :host([active]:not([disabled])) {
    color: var(--wa-color-brand-on-quiet);
  }

  :host([disabled]) .tab {
    opacity: 0.5;
    cursor: not-allowed;
  }

  @media (forced-colors: active) {
    :host([active]:not([disabled])) {
      outline: solid 1px transparent;
      outline-offset: -3px;
    }
  }
`;/*! Copyright 2026 Fonticons, Inc. - https://webawesome.com/license */var q6=0,vi=class extends L{constructor(){super(...arguments);this.attrId=++q6,this.componentId=`wa-tab-${this.attrId}`,this.panel="",this.active=!1,this.disabled=!1,this.tabIndex=0,this.slot="nav",this.role="tab"}handleActiveChange(){this.setAttribute("aria-selected",this.active?"true":"false")}handleDisabledChange(){if(this.setAttribute("aria-disabled",this.disabled?"true":"false"),this.disabled&&!this.active)this.tabIndex=-1;else this.tabIndex=0}render(){return this.id=this.id?.length>0?this.id:this.componentId,h`
      <div
        part="base tab"
        class=${Z({tab:!0,"tab-active":this.active})}
      >
        <slot></slot>
      </div>
    `}};vi.css=x4;f([Y(".tab")],vi.prototype,"tab",2);f([t({reflect:!0})],vi.prototype,"panel",2);f([t({type:Boolean,reflect:!0})],vi.prototype,"active",2);f([t({type:Boolean,reflect:!0})],vi.prototype,"disabled",2);f([t({type:Number,reflect:!0})],vi.prototype,"tabIndex",2);f([t({reflect:!0})],vi.prototype,"slot",2);f([t({reflect:!0})],vi.prototype,"role",2);f([v("active")],vi.prototype,"handleActiveChange",1);f([v("disabled")],vi.prototype,"handleDisabledChange",1);vi=f([$("wa-tab")],vi);/*! Copyright 2026 Fonticons, Inc. - https://webawesome.com/license *//*! Copyright 2026 Fonticons, Inc. - https://webawesome.com/license */var F4=class extends Event{constructor(o){super("wa-tab-hide",{bubbles:!0,cancelable:!1,composed:!0});this.detail=o}};/*! Copyright 2026 Fonticons, Inc. - https://webawesome.com/license */var $4=class extends Event{constructor(o){super("wa-tab-show",{bubbles:!0,cancelable:!1,composed:!0});this.detail=o}};/*! Copyright 2026 Fonticons, Inc. - https://webawesome.com/license */var Y4=F`
  :host {
    --indicator-color: var(--wa-color-brand-fill-loud);
    --track-color: var(--wa-color-neutral-fill-normal);
    --track-width: 0.125rem;

    /* Private */
    --safe-track-width: max(0.5px, round(var(--track-width), 0.5px));

    display: block;
  }

  .tab-group {
    display: flex;
    border-radius: 0;
  }

  .tabs {
    display: flex;
    position: relative;
  }

  .indicator {
    position: absolute;
  }

  .tab-group-has-scroll-controls .nav-container {
    position: relative;
    padding: 0 1.5em;
  }

  .body {
    display: block;
  }

  .scroll-button {
    display: flex;
    align-items: center;
    justify-content: center;
    position: absolute;
    top: 0;
    bottom: 0;
    width: 1.5em;
  }

  .scroll-button-start {
    inset-inline-start: 0;
  }

  .scroll-button-end {
    inset-inline-end: 0;
  }

  /*
    * Top
    */

  .tab-group-top {
    flex-direction: column;
  }

  .tab-group-top .nav-container {
    order: 1;
  }

  .tab-group-top .nav {
    display: flex;
    overflow-x: auto;

    /* Hide scrollbar in Firefox */
    scrollbar-width: none;
  }

  /* Hide scrollbar in Chrome/Safari */
  .tab-group-top .nav::-webkit-scrollbar {
    width: 0;
    height: 0;
  }

  .tab-group-top .tabs {
    flex: 1 1 auto;
    position: relative;
    flex-direction: row;
    border-bottom: solid var(--safe-track-width) var(--track-color);
  }

  .tab-group-top .indicator {
    bottom: calc(-1 * var(--safe-track-width));
    border-bottom: solid var(--safe-track-width) var(--indicator-color);
  }

  .tab-group-top .body {
    order: 2;
  }

  .tab-group-top ::slotted(wa-tab[active]) {
    border-block-end: solid var(--safe-track-width) var(--indicator-color);
    margin-block-end: calc(-1 * var(--safe-track-width));
  }

  .tab-group-top .body slot::slotted(wa-tab-panel) {
    --padding: var(--wa-space-xl) 0;
  }

  /*
    * Bottom
    */

  .tab-group-bottom {
    flex-direction: column;
  }

  .tab-group-bottom .nav-container {
    order: 2;
  }

  .tab-group-bottom .nav {
    display: flex;
    overflow-x: auto;

    /* Hide scrollbar in Firefox */
    scrollbar-width: none;
  }

  /* Hide scrollbar in Chrome/Safari */
  .tab-group-bottom .nav::-webkit-scrollbar {
    width: 0;
    height: 0;
  }

  .tab-group-bottom .tabs {
    flex: 1 1 auto;
    position: relative;
    flex-direction: row;
    border-top: solid var(--safe-track-width) var(--track-color);
  }

  .tab-group-bottom .indicator {
    top: calc(-1 * var(--safe-track-width));
    border-top: solid var(--safe-track-width) var(--indicator-color);
  }

  .tab-group-bottom .body {
    order: 1;
  }

  .tab-group-bottom ::slotted(wa-tab[active]) {
    border-block-start: solid var(--safe-track-width) var(--indicator-color);
    margin-block-start: calc(-1 * var(--safe-track-width));
  }

  .tab-group-bottom .body slot::slotted(wa-tab-panel) {
    --padding: var(--wa-space-xl) 0;
  }

  /*
    * Start
    */

  .tab-group-start {
    flex-direction: row;
  }

  .tab-group-start .nav-container {
    order: 1;
  }

  .tab-group-start .tabs {
    flex: 0 0 auto;
    flex-direction: column;
    border-inline-end: solid var(--safe-track-width) var(--track-color);
  }

  .tab-group-start .indicator {
    inset-inline-end: calc(-1 * var(--safe-track-width));
    border-right: solid var(--safe-track-width) var(--indicator-color);
  }

  .tab-group-start .body {
    flex: 1 1 auto;
    order: 2;
  }

  .tab-group-start ::slotted(wa-tab[active]) {
    border-inline-end: solid var(--safe-track-width) var(--indicator-color);
    margin-inline-end: calc(-1 * var(--safe-track-width));
  }

  .tab-group-start .body slot::slotted(wa-tab-panel) {
    --padding: 0 var(--wa-space-xl);
  }

  /*
    * End
    */

  .tab-group-end {
    flex-direction: row;
  }

  .tab-group-end .nav-container {
    order: 2;
  }

  .tab-group-end .tabs {
    flex: 0 0 auto;
    flex-direction: column;
    border-left: solid var(--safe-track-width) var(--track-color);
  }

  .tab-group-end .indicator {
    inset-inline-start: calc(-1 * var(--safe-track-width));
    border-inline-start: solid var(--safe-track-width) var(--indicator-color);
  }

  .tab-group-end .body {
    flex: 1 1 auto;
    order: 1;
  }

  .tab-group-end ::slotted(wa-tab[active]) {
    border-inline-start: solid var(--safe-track-width) var(--indicator-color);
    margin-inline-start: calc(-1 * var(--safe-track-width));
  }

  .tab-group-end .body slot::slotted(wa-tab-panel) {
    --padding: 0 var(--wa-space-xl);
  }
`;/*! Copyright 2026 Fonticons, Inc. - https://webawesome.com/license */var mi=class extends L{constructor(){super(...arguments);this.tabs=[],this.focusableTabs=[],this.panels=[],this.localize=new B(this),this.hasScrollControls=!1,this.active="",this.placement="top",this.activation="auto",this.withoutScrollControls=!1}connectedCallback(){if(super.connectedCallback(),M)return;this.resizeObserver=new ResizeObserver(()=>{this.updateScrollControls()}),this.mutationObserver=new MutationObserver((o)=>{if(o.some((r)=>!["aria-labelledby","aria-controls"].includes(r.attributeName)))setTimeout(()=>this.setAriaLabels());let i=o.filter((r)=>{return r.target.closest("wa-tab-group")===this});if(i.some((r)=>r.attributeName==="disabled"))this.syncTabsAndPanels();else if(i.some((r)=>r.attributeName==="active")){let a=i.filter((n)=>n.attributeName==="active"&&n.target.tagName.toLowerCase()==="wa-tab").map((n)=>n.target).find((n)=>n.active);if(a&&a.closest("wa-tab-group")===this)this.setActiveTab(a)}}),this.updateComplete.then(()=>{this.syncTabsAndPanels(),this.mutationObserver.observe(this,{attributes:!0,childList:!0,subtree:!0}),this.resizeObserver.observe(this.nav),new IntersectionObserver((i,r)=>{if(i[0].intersectionRatio>0){if(this.setAriaLabels(),this.active){let a=this.tabs.find((n)=>n.panel===this.active);if(a)this.setActiveTab(a)}else this.setActiveTab(this.getActiveTab()??this.tabs[0],{emitEvents:!1});r.unobserve(i[0].target)}}).observe(this.tabGroup)})}disconnectedCallback(){if(super.disconnectedCallback(),this.mutationObserver?.disconnect(),this.nav)this.resizeObserver?.unobserve(this.nav)}getAllTabs(){return[...this.shadowRoot.querySelector('slot[name="nav"]').assignedElements()].filter((i)=>{return i.tagName.toLowerCase()==="wa-tab"})}getAllPanels(){return[...this.defaultSlot.assignedElements()].filter((o)=>o.tagName.toLowerCase()==="wa-tab-panel")}getActiveTab(){return this.tabs.find((o)=>o.active)}handleClick(o){let r=o.target.closest("wa-tab");if(r?.closest("wa-tab-group")!==this)return;if(r!==null)this.setActiveTab(r,{scrollBehavior:"smooth"})}handleKeyDown(o){let r=o.target.closest("wa-tab");if(r?.closest("wa-tab-group")!==this)return;if(["Enter"," "].includes(o.key)){if(r!==null)this.setActiveTab(r,{scrollBehavior:"smooth"}),o.preventDefault();return}if(["ArrowLeft","ArrowRight","ArrowUp","ArrowDown","Home","End"].includes(o.key)){let n=this.tabs.find((c)=>c.matches(":focus")),w=this.localize.dir()==="rtl",b=null;if(n?.tagName.toLowerCase()==="wa-tab"){if(o.key==="Home")b=this.focusableTabs[0];else if(o.key==="End")b=this.focusableTabs[this.focusableTabs.length-1];else if(["top","bottom"].includes(this.placement)&&o.key===(w?"ArrowRight":"ArrowLeft")||["start","end"].includes(this.placement)&&o.key==="ArrowUp"){let c=this.tabs.findIndex((m)=>m===n);b=this.findNextFocusableTab(c,"backward")}else if(["top","bottom"].includes(this.placement)&&o.key===(w?"ArrowLeft":"ArrowRight")||["start","end"].includes(this.placement)&&o.key==="ArrowDown"){let c=this.tabs.findIndex((m)=>m===n);b=this.findNextFocusableTab(c,"forward")}if(!b)return;if(b.tabIndex=0,b.focus({preventScroll:!0}),this.activation==="auto")this.setActiveTab(b,{scrollBehavior:"smooth"});else this.tabs.forEach((c)=>{c.tabIndex=c===b?0:-1});if(["top","bottom"].includes(this.placement))L0(b,this.nav,"horizontal");o.preventDefault()}}}findNextFocusableTab(o,i){let r=null,a=i==="forward"?1:-1,n=o+a;while(o<this.tabs.length){if(r=this.tabs[n]||null,r===null){if(i==="forward")r=this.focusableTabs[0];else r=this.focusableTabs[this.focusableTabs.length-1];break}if(!r.disabled)break;n+=a}return r}handleScrollToStart(){this.nav.scroll({left:this.localize.dir()==="rtl"?this.nav.scrollLeft+this.nav.clientWidth:this.nav.scrollLeft-this.nav.clientWidth,behavior:"smooth"})}handleScrollToEnd(){this.nav.scroll({left:this.localize.dir()==="rtl"?this.nav.scrollLeft-this.nav.clientWidth:this.nav.scrollLeft+this.nav.clientWidth,behavior:"smooth"})}setActiveTab(o,i){if(i={emitEvents:!0,scrollBehavior:"auto",...i},o.closest("wa-tab-group")!==this)return;if(o!==this.activeTab&&!o.disabled){let r=this.activeTab;if(this.active=o.panel,this.activeTab=o,this.tabs.forEach((a)=>{a.active=a===this.activeTab,a.tabIndex=a===this.activeTab?0:-1}),this.panels.forEach((a)=>a.active=a.name===this.activeTab?.panel),["top","bottom"].includes(this.placement))L0(this.activeTab,this.nav,"horizontal",i.scrollBehavior);if(i.emitEvents){if(r)this.dispatchEvent(new F4({name:r.panel}));this.dispatchEvent(new $4({name:this.activeTab.panel}))}}}setAriaLabels(){this.tabs.forEach((o)=>{let i=this.panels.find((r)=>r.name===o.panel);if(i)o.setAttribute("aria-controls",i.getAttribute("id")),i.setAttribute("aria-labelledby",o.getAttribute("id"))})}syncTabsAndPanels(){this.tabs=this.getAllTabs(),this.focusableTabs=this.tabs.filter((o)=>!o.disabled),this.panels=this.getAllPanels(),this.updateComplete.then(()=>this.updateScrollControls())}updateActiveTab(){let o=this.tabs.find((i)=>i.panel===this.active);if(o)this.setActiveTab(o,{scrollBehavior:"smooth"})}updateScrollControls(){if(this.withoutScrollControls)this.hasScrollControls=!1;else this.hasScrollControls=["top","bottom"].includes(this.placement)&&this.nav.scrollWidth>this.nav.clientWidth+1}render(){let o=this.hasUpdated?this.localize.dir()==="rtl":this.dir==="rtl";return h`
      <div
        part="base tab-group"
        class=${Z({"tab-group":!0,"tab-group-top":this.placement==="top","tab-group-bottom":this.placement==="bottom","tab-group-start":this.placement==="start","tab-group-end":this.placement==="end","tab-group-has-scroll-controls":this.hasScrollControls})}
        @click=${this.handleClick}
        @keydown=${this.handleKeyDown}
      >
        <div class="nav-container" part="nav">
          ${this.hasScrollControls?h`
                <wa-button
                  part="scroll-button scroll-button-start"
                  exportparts="base:scroll-button__base"
                  class="scroll-button scroll-button-start"
                  appearance="plain"
                  @click=${this.handleScrollToStart}
                >
                  <wa-icon
                    name=${o?"chevron-right":"chevron-left"}
                    library="system"
                    variant="solid"
                    label=${this.localize.term("scrollToStart")}
                  ></wa-icon>
                </wa-button>
              `:""}

          <!-- We have a focus listener because in Firefox (and soon to be Chrome) overflow containers are focusable. -->
          <div class="nav" @focus=${()=>this.activeTab?.focus({preventScroll:!0})}>
            <div part="tabs" class="tabs" role="tablist">
              <slot name="nav" @slotchange=${this.syncTabsAndPanels}></slot>
            </div>
          </div>

          ${this.hasScrollControls?h`
                <wa-button
                  part="scroll-button scroll-button-end"
                  class="scroll-button scroll-button-end"
                  exportparts="base:scroll-button__base"
                  appearance="plain"
                  @click=${this.handleScrollToEnd}
                >
                  <wa-icon
                    name=${o?"chevron-left":"chevron-right"}
                    library="system"
                    variant="solid"
                    label=${this.localize.term("scrollToEnd")}
                  ></wa-icon>
                </wa-button>
              `:""}
        </div>

        <div part="body" class="body"><slot @slotchange=${this.syncTabsAndPanels}></slot></div>
      </div>
    `}};mi.css=Y4;f([Y(".tab-group")],mi.prototype,"tabGroup",2);f([Y(".body slot")],mi.prototype,"defaultSlot",2);f([Y(".nav")],mi.prototype,"nav",2);f([J()],mi.prototype,"hasScrollControls",2);f([t({reflect:!0})],mi.prototype,"active",2);f([t()],mi.prototype,"placement",2);f([t()],mi.prototype,"activation",2);f([t({attribute:"without-scroll-controls",type:Boolean})],mi.prototype,"withoutScrollControls",2);f([v("active")],mi.prototype,"updateActiveTab",1);f([v("withoutScrollControls",{waitUntilFirstUpdate:!0})],mi.prototype,"updateScrollControls",1);mi=f([$("wa-tab-group")],mi);/*! Copyright 2026 Fonticons, Inc. - https://webawesome.com/license */var q4=F`
  :host {
    --padding: 0;

    display: none;
  }

  :host([active]) {
    display: block;
  }

  .tab-panel {
    display: block;
    padding: var(--padding);
  }
`;/*! Copyright 2026 Fonticons, Inc. - https://webawesome.com/license */var L6=0,Z0=class extends L{constructor(){super(...arguments);this.attrId=++L6,this.componentId=`wa-tab-panel-${this.attrId}`,this.name="",this.active=!1,this.role="tabpanel"}connectedCallback(){super.connectedCallback(),this.id=(this.id||"").length>0?this.id:this.componentId}handleActiveChange(){this.setAttribute("aria-hidden",this.active?"false":"true")}render(){return h`
      <slot
        part="base"
        class=${Z({"tab-panel":!0,"tab-panel-active":this.active})}
      ></slot>
    `}};Z0.css=q4;f([t({reflect:!0})],Z0.prototype,"name",2);f([t({type:Boolean,reflect:!0})],Z0.prototype,"active",2);f([t({reflect:!0})],Z0.prototype,"role",2);f([v("active")],Z0.prototype,"handleActiveChange",1);Z0=f([$("wa-tab-panel")],Z0);/*! Copyright 2026 Fonticons, Inc. - https://webawesome.com/license *//*! Copyright 2026 Fonticons, Inc. - https://webawesome.com/license *//*! Copyright 2026 Fonticons, Inc. - https://webawesome.com/license *//*! Copyright 2026 Fonticons, Inc. - https://webawesome.com/license */var L4=F`
  :host {
    border-width: 0;
  }

  .textarea {
    display: grid;
    align-items: center;
    margin: 0;
    border: none;
    outline: none;
    cursor: inherit;
    font: inherit;
    background-color: var(--wa-form-control-background-color);
    border-color: var(--wa-form-control-border-color);
    border-radius: var(--wa-form-control-border-radius);
    border-style: var(--wa-form-control-border-style);
    border-width: var(--wa-form-control-border-width);
    -webkit-appearance: none;
    outline: var(--wa-focus-ring-style) var(--wa-focus-ring-width) transparent;
    outline-offset: var(--wa-focus-ring-offset);

    &:focus-within {
      outline-color: var(--wa-color-focus);
    }

    /* Style disabled textareas */
    &:has(:disabled) {
      cursor: not-allowed;
      opacity: 0.5;
    }
  }

  /* Appearance modifiers */
  :host([appearance='outlined']) .textarea {
    background-color: var(--wa-form-control-background-color);
    border-color: var(--wa-form-control-border-color);
  }

  :host([appearance='filled']) .textarea {
    background-color: var(--wa-color-neutral-fill-quiet);
    border-color: var(--wa-color-neutral-fill-quiet);
  }

  :host([appearance='filled-outlined']) .textarea {
    background-color: var(--wa-color-neutral-fill-quiet);
    border-color: var(--wa-form-control-border-color);
  }

  textarea {
    display: block;
    width: 100%;
    border: none;
    background: transparent;
    font: inherit;
    color: inherit;
    cursor: inherit;
    scroll-padding-block: var(--wa-form-control-padding-block);
    padding: calc(var(--wa-form-control-padding-block) - ((1lh - 1em) / 2)) var(--wa-form-control-padding-inline); /* accounts for the larger line height of textarea content */
    min-height: calc(var(--wa-form-control-height) - var(--border-width) * 2);
    box-shadow: none;
    margin: 0;

    &::placeholder {
      color: var(--wa-form-control-placeholder-color);
      user-select: none;
      -webkit-user-select: none;
    }

    &:autofill {
      &,
      &:hover,
      &:focus,
      &:active {
        box-shadow: none;
        caret-color: var(--wa-form-control-value-color);
      }
    }

    &:focus {
      outline: none;
    }
  }

  /* Shared textarea and size-adjuster positioning */
  .control,
  .size-adjuster {
    grid-area: 1 / 1 / 2 / 2;
  }

  .size-adjuster {
    visibility: hidden;
    pointer-events: none;
    opacity: 0;
    padding: 0;
  }

  textarea::-webkit-search-decoration,
  textarea::-webkit-search-cancel-button,
  textarea::-webkit-search-results-button,
  textarea::-webkit-search-results-decoration {
    -webkit-appearance: none;
  }

  /*
   * Resize types
   */

  :host([resize='none']) textarea {
    resize: none;
  }

  textarea,
  :host([resize='vertical']) textarea {
    resize: vertical;
  }

  :host([resize='horizontal']) textarea {
    resize: horizontal;
  }

  :host([resize='both']) textarea {
    resize: both;
  }

  :host([resize='auto']) textarea {
    height: auto;
    resize: none;
    overflow-y: hidden;
  }

  /*
   * Footer (hint + character count)
   */

  /*
   * This element carries the hint part, so the shared form control styles apply to it. Those styles set display:block
   * and hide the element when it has no hint, both of which have to be undone when a character count is present.
   */
  .footer.has-slotted,
  .footer.has-count {
    display: flex;
    align-items: baseline;
    gap: 1em;
  }

  /* Slots default to display:contents, which would leave the hint unable to shrink below its content */
  .footer.has-count .hint {
    display: block;
    flex: 1 1 auto;
    min-width: 0;
  }

  .count {
    flex: 0 0 auto;
    color: var(--wa-form-control-hint-color);
    font-weight: var(--wa-form-control-hint-font-weight);
    line-height: var(--wa-form-control-hint-line-height);
    margin-block-start: 0.5em;
    font-size: var(--wa-font-size-smaller);
    margin-inline-start: auto;
  }
`;/*! Copyright 2026 Fonticons, Inc. - https://webawesome.com/license */var _=class extends E{constructor(){super(...arguments);this.assumeInteractionOn=["blur","input"],this.hasSlotController=new W(this,"hint","label"),this.localize=new B(this),this.announcedCountText="",this.title="",this.name=null,this._value=null,this.defaultValue=this.getAttribute("value")??"",this.size="m",this.appearance="outlined",this.label="",this.hint="",this.placeholder="",this.rows=4,this.resize="vertical",this.disabled=!1,this.readonly=!1,this.required=!1,this.spellcheck=!0,this.withLabel=!1,this.withHint=!1,this.withCount=!1,this.lastObservedWidth=0}static get validators(){return[...super.validators,Wo()]}get value(){if(this.valueHasChanged)return this._value;return this._value??this.defaultValue}set value(o){if(this._value===o)return;this.valueHasChanged=!0,this._value=o}handleSizeChange(){j(this.localName,this.size)}connectedCallback(){super.connectedCallback(),this.updateComplete.then(()=>{if(this.setTextareaDimensions(),this.updateResizeObserver(),this.didSSR&&this.input&&this.value!==this.input.value){let o=this.input.value;this.value=o}})}disconnectedCallback(){super.disconnectedCallback(),clearTimeout(this.countAnnounceTimeout),this.resizeObserver?.disconnect(),this.resizeObserver=void 0}updateFormValue(o){if(o==null){this.setValue("",null);return}super.updateFormValue(o)}updateResizeObserver(){let o=this.resize!=="none";if(this.resizeObserver)this.resizeObserver.disconnect(),this.resizeObserver=void 0;if(o&&this.input)if(this.resize==="auto")this.resizeObserver=new ResizeObserver((i)=>{let r=i[0]?.contentRect.width??0;if(r!==this.lastObservedWidth)this.lastObservedWidth=r,requestAnimationFrame(()=>this.setTextareaDimensions())}),this.resizeObserver.observe(this);else this.resizeObserver=new ResizeObserver(()=>this.setTextareaDimensions()),this.resizeObserver.observe(this.input)}handleBlur(){this.checkValidity()}handleChange(o){this.valueHasChanged=!0,this.value=this.input.value,this.setTextareaDimensions(),this.checkValidity(),this.relayNativeEvent(o,{bubbles:!0,composed:!0})}handleInput(o){this.valueHasChanged=!0,this.value=this.input.value,this.relayNativeEvent(o,{bubbles:!0,composed:!0}),this.scheduleCountAnnouncement()}scheduleCountAnnouncement(){clearTimeout(this.countAnnounceTimeout),this.countAnnounceTimeout=setTimeout(()=>{let o=(this.value??"").length;this.announcedCountText=this.maxlength!=null?this.localize.term("numCharactersRemaining",this.maxlength-o):this.localize.term("numCharacters",o)},1000)}setTextareaDimensions(){if(this.resize==="none"){this.base.style.width="",this.base.style.height="";return}if(this.resize==="auto"){this.sizeAdjuster.style.height=`${this.input.clientHeight}px`,this.input.style.height="auto";let o=this.input.scrollHeight;this.input.style.height=`${o}px`,this.sizeAdjuster.style.height=`${o}px`,this.base.style.width="",this.base.style.height="";return}if(this.input.style.width){let o=Number(this.input.style.width.split(/px/)[0])+2;this.base.style.width=`${o}px`}if(this.input.style.height){let o=Number(this.input.style.height.split(/px/)[0])+2;this.base.style.height=`${o}px`}}handleRowsChange(){this.setTextareaDimensions()}async handleValueChange(){await this.updateComplete,this.checkValidity(),this.setTextareaDimensions()}updated(o){if(o.has("resize"))this.setTextareaDimensions(),this.updateResizeObserver();if(super.updated(o),o.has("value"))this.customStates.set("blank",!this.value)}focus(o){this.input.focus(o)}blur(){this.input.blur()}select(){this.input.select()}scrollPosition(o){if(o){if(typeof o.top==="number")this.input.scrollTop=o.top;if(typeof o.left==="number")this.input.scrollLeft=o.left;return}return{top:this.input.scrollTop,left:this.input.scrollTop}}setSelectionRange(o,i,r="none"){this.input.setSelectionRange(o,i,r)}setRangeText(o,i,r,a="preserve"){let n=i??this.input.selectionStart,w=r??this.input.selectionEnd;if(this.input.setRangeText(o,n,w,a),this.value!==this.input.value)this.value=this.input.value,this.setTextareaDimensions()}formResetCallback(){if(this._value=null,this.input)this.input.value=this.value||"";super.formResetCallback()}render(){let o=this.hasSlotController.test("label","withLabel"),i=this.hasSlotController.test("hint","withHint"),r=this.label?!0:!!o,a=this.hint?!0:!!i,n=(this.value??"").length,w=this.maxlength!=null?this.localize.term("numCharactersRemaining",this.maxlength-n):this.localize.term("numCharacters",n);return h`
      <label
        part="form-control-label label"
        class=${Z({label:!0,"has-label":r})}
        for="input"
        aria-hidden=${r?"false":"true"}
      >
        <slot name="label">${this.label}</slot>
      </label>

      <div part="base textarea-wrapper" class="textarea">
        <textarea
          part="textarea"
          id="input"
          class="control"
          title=${this.title}
          name=${Q(this.name)}
          .value=${Oo(this.value)}
          ?disabled=${this.disabled}
          ?readonly=${this.readonly}
          ?required=${this.required}
          placeholder=${Q(this.placeholder)}
          rows=${Q(this.rows)}
          minlength=${Q(this.minlength)}
          maxlength=${Q(this.maxlength)}
          autocapitalize=${Q(this.autocapitalize)}
          autocorrect=${Q(this.autocorrect)}
          ?autofocus=${this.autofocus}
          spellcheck=${Q(this.spellcheck)}
          enterkeyhint=${Q(this.enterkeyhint)}
          inputmode=${Q(this.inputmode)}
          aria-describedby="hint"
          @change=${this.handleChange}
          @input=${this.handleInput}
          @blur=${this.handleBlur}
        ></textarea>

        <!-- This "adjuster" exists to prevent layout shifting. https://github.com/shoelace-style/shoelace/issues/2180 -->
        <div part="textarea-adjuster" class="size-adjuster" ?hidden=${this.resize!=="auto"}></div>
      </div>

      <div
        part="hint"
        class=${Z({footer:!0,"has-count":this.withCount,"has-slotted":a})}
      >
        <slot id="hint" name="hint" class="hint" aria-hidden=${a?"false":"true"}>${this.hint}</slot>

        ${this.withCount?h`
              <div part="count" class="count" aria-hidden="true">${w}</div>
              <div class="wa-visually-hidden-force" aria-live="polite">${this.announcedCountText}</div>
            `:""}
      </div>
    `}};_.css=[L4,go,I,Ii];f([J()],_.prototype,"announcedCountText",2);f([Y(".control")],_.prototype,"input",2);f([Y('[part~="base"]')],_.prototype,"base",2);f([Y(".size-adjuster")],_.prototype,"sizeAdjuster",2);f([t()],_.prototype,"title",2);f([t({reflect:!0})],_.prototype,"name",2);f([J()],_.prototype,"value",1);f([t({attribute:"value",reflect:!0})],_.prototype,"defaultValue",2);f([t({reflect:!0})],_.prototype,"size",2);f([v("size")],_.prototype,"handleSizeChange",1);f([t({reflect:!0})],_.prototype,"appearance",2);f([t()],_.prototype,"label",2);f([t({attribute:"hint"})],_.prototype,"hint",2);f([t()],_.prototype,"placeholder",2);f([t({type:Number})],_.prototype,"rows",2);f([t({reflect:!0})],_.prototype,"resize",2);f([t({type:Boolean})],_.prototype,"disabled",2);f([t({type:Boolean,reflect:!0})],_.prototype,"readonly",2);f([t({type:Boolean,reflect:!0})],_.prototype,"required",2);f([t({type:Number})],_.prototype,"minlength",2);f([t({type:Number})],_.prototype,"maxlength",2);f([t()],_.prototype,"autocapitalize",2);f([t({type:Boolean,converter:{fromAttribute:(o)=>!o||o==="off"?!1:!0,toAttribute:(o)=>o?"on":"off"}})],_.prototype,"autocorrect",2);f([t()],_.prototype,"autocomplete",2);f([t({type:Boolean})],_.prototype,"autofocus",2);f([t()],_.prototype,"enterkeyhint",2);f([t({type:Boolean,converter:{fromAttribute:(o)=>!o||o==="false"?!1:!0,toAttribute:(o)=>o?"true":"false"}})],_.prototype,"spellcheck",2);f([t()],_.prototype,"inputmode",2);f([t({attribute:"with-label",type:Boolean})],_.prototype,"withLabel",2);f([t({attribute:"with-hint",type:Boolean})],_.prototype,"withHint",2);f([t({attribute:"with-count",type:Boolean,reflect:!0})],_.prototype,"withCount",2);f([v("rows",{waitUntilFirstUpdate:!0})],_.prototype,"handleRowsChange",1);f([v("value",{waitUntilFirstUpdate:!0})],_.prototype,"handleValueChange",1);_=f([$("wa-textarea")],_);_.disableWarning?.("change-in-update");/*! Copyright 2026 Fonticons, Inc. - https://webawesome.com/license *//*! Copyright 2026 Fonticons, Inc. - https://webawesome.com/license */var va=new Map;function U4(o,i){let r=`${o||"en"}|${i.hour12?12:24}|${i.withSeconds?1:0}`,a=va.get(r);if(a)return a;let n=new Intl.DateTimeFormat(o||"en",{hour:"2-digit",minute:"2-digit",second:i.withSeconds?"2-digit":void 0,hour12:i.hour12,calendar:"gregory",numberingSystem:"latn"}),w=new Date(2026,0,1,13,45,30),b=n.formatToParts(w),c=[],m=[];for(let s of b)if(s.type==="hour")c.push({kind:"segment",field:"hour"}),m.push("hour");else if(s.type==="minute")c.push({kind:"segment",field:"minute"}),m.push("minute");else if(s.type==="second")c.push({kind:"segment",field:"second"}),m.push("second");else if(s.type==="dayPeriod")c.push({kind:"segment",field:"dayPeriod"}),m.push("dayPeriod");else if(s.type==="literal")c.push({kind:"literal",text:s.value});let p=2+(i.withSeconds?1:0)+(i.hour12?1:0);if(m.length!==p){let s=[{kind:"segment",field:"hour"},{kind:"literal",text:":"},{kind:"segment",field:"minute"}],z=["hour","minute"];if(i.withSeconds)s.push({kind:"literal",text:":"}),s.push({kind:"segment",field:"second"}),z.push("second");if(i.hour12)s.push({kind:"literal",text:" "}),s.push({kind:"segment",field:"dayPeriod"}),z.push("dayPeriod");let u={tokens:s,order:z};return va.set(r,u),u}let d={tokens:c,order:m};return va.set(r,d),d}function X4(o){try{return new Intl.DateTimeFormat(o||"en",{hour:"numeric"}).resolvedOptions().hour12??!1}catch{return!1}}function T2(o,i){try{let r=new Intl.DateTimeFormat(o||"en",{hour:"numeric",hour12:!0}),a=new Date(2026,0,1,i===0?9:15);return r.formatToParts(a).find((b)=>b.type==="dayPeriod")?.value||(i===0?"AM":"PM")}catch{return i===0?"AM":"PM"}}function J4(o,i){if(o==="hour")return i?{min:1,max:12}:{min:0,max:23};if(o==="minute"||o==="second")return{min:0,max:59};return{min:0,max:1}}function U6(o,i,r,a,n=new Date){let w={...o},b=o[i];if(i==="dayPeriod"){let s=b==null?n.getHours()<12?0:1:b;return w.dayPeriod=s===0?1:0,w}let{min:c,max:m}=J4(i,a);if(b==null){if(i==="hour"){let s=n.getHours();w.hour=a?s%12||12:s}else if(i==="minute")w.minute=n.getMinutes();else w.second=n.getSeconds();return w}let p=m-c+1,d=((b-c+r)%p+p)%p+c;if(i==="hour")w.hour=d;else if(i==="minute")w.minute=d;else w.second=d;return w}function X6(o,i,r,a){if(!/^[0-9]$/.test(r))return{value:xa(i),buffer:i,advance:!1};if(o==="dayPeriod")return{value:xa(i),buffer:i,advance:!1};if(o==="hour"){if(a)return k2(i,r,1,12);return k2(i,r,0,23)}return k2(i,r,0,59)}function k2(o,i,r,a){let n=Number(i);if(o===""){if(n===0&&r===0)return{value:0,buffer:"0",advance:!1};if(n===0)return{value:null,buffer:"0",advance:!1};if(n*10>a)return{value:J6(n,r,a),buffer:"",advance:!0};return{value:n,buffer:i,advance:!1}}let w=Number(o+i);if(w>=r&&w<=a)return{value:w,buffer:"",advance:!0};if(o==="0"&&n===0)return{value:r===0?0:null,buffer:"0",advance:!1};return k2("",i,r,a)}function J6(o,i,r){return Math.min(r,Math.max(i,o))}function xa(o){if(!o)return null;let i=Number(o);return Number.isFinite(i)?i:null}function Z4(o){if(o==="a"||o==="A")return 0;if(o==="p"||o==="P")return 1;return null}function Q4(o,i,r,a,n){if(o==="dayPeriod"){if(i==null)return a;return T2(n,i)}if(r)return r.padStart(2,"0");if(i==null)return a;return String(i).padStart(2,"0")}function Z6(o,i){if(o.hour==null||o.minute==null)return!1;if(i.withSeconds&&o.second==null)return!1;if(i.hour12&&o.dayPeriod==null)return!1;return!0}function K4(o){return o.hour==null&&o.minute==null&&o.second==null&&o.dayPeriod==null}function B4(o,i){if(!Z6(o,i))return"";let r=o.hour;if(i.hour12){let m=o.dayPeriod;r=r===12?m===0?0:12:m===1?r+12:r}if(r<0||r>23)return"";let a=o.minute;if(a<0||a>59)return"";let n=String(r).padStart(2,"0"),w=String(a).padStart(2,"0");if(!i.withSeconds)return`${n}:${w}`;let b=o.second;if(b<0||b>59)return"";let c=String(b).padStart(2,"0");return`${n}:${w}:${c}`}function Fa(o,i){let r={hour:null,minute:null,second:null,dayPeriod:null};if(!o)return r;let a=/^(\d{1,2}):(\d{2})(?::(\d{2}(?:\.\d+)?))?$/.exec(o);if(!a)return r;let n=Number(a[1]),w=Number(a[2]),b=a[3]!=null?Math.trunc(Number(a[3])):null;if(!Number.isFinite(n)||!Number.isFinite(w))return r;if(n<0||n>23||w<0||w>59)return r;if(b!=null&&(b<0||b>59))return r;let c,m=null;if(i.hour12)m=n>=12?1:0,c=n%12||12;else c=n;return{hour:c,minute:w,second:i.withSeconds?b??0:null,dayPeriod:i.hour12?m:null}}function G4(o){if(o==="any")return!0;if(!Number.isFinite(o)||o<=0)return!1;return o<60||o%60!==0}function M4(o){let i=o.now??(()=>new Date);return{typeDigit:(r,a,n,w)=>{let b=X6(a,n,w,o.hour12()),m={...o.getSegments(r),[a]:b.value};return o.setSegments(r,m),b},step:(r,a,n)=>{let w=U6(o.getSegments(r),a,n,o.hour12(),i());return o.setSegments(r,w),{value:w[a]}},bounds:(r,a)=>J4(a,o.hour12()),commitBuffer:(r,a,n)=>{let w=xa(n),b=o.getSegments(r);return o.setSegments(r,{...b,[a]:w}),w},clear:(r,a)=>{let n=o.getSegments(r);if(n[a]==null)return!1;return o.setSegments(r,{...n,[a]:null}),!0}}}/*! Copyright 2026 Fonticons, Inc. - https://webawesome.com/license */var V4=F`
  :host {
    --show-duration: var(--wa-transition-fast);
    --hide-duration: var(--wa-transition-fast);
    --column-item-height: 2.25em;
    --column-width: 3em;
  }

  :host(:state(disabled)) {
    cursor: not-allowed;
  }

  /* Popup */
  .time-input-popup {
    flex: 1 1 auto;
    display: inline-flex;
    width: 100%;
    position: relative;
    vertical-align: middle;
    --show-duration: inherit;
    --hide-duration: inherit;

    &::part(popup) {
      z-index: 900;
    }

    &[data-current-placement^='top']::part(popup) {
      transform-origin: bottom;
    }

    &[data-current-placement^='bottom']::part(popup) {
      transform-origin: top;
    }
  }

  /* Popup body — bordered card with the column listboxes. */
  .popup-body {
    display: inline-flex;
    flex-direction: column;
    background-color: var(--wa-color-surface-raised);
    border: var(--wa-border-style) var(--wa-border-width-s) var(--wa-color-surface-border);
    border-radius: var(--wa-border-radius-m);
    box-shadow: var(--wa-shadow-m);
    color: var(--wa-color-text-normal);
    font-size: inherit;
    padding: var(--wa-space-2xs);
  }

  .columns {
    display: inline-flex;
    gap: var(--wa-space-2xs);
    align-items: stretch;
  }

  .column {
    display: flex;
    flex-direction: column;
    width: var(--column-width);
    max-height: calc(var(--column-item-height) * 7);
    overflow-y: auto;
    scroll-snap-type: y mandatory;
    scrollbar-width: none;
    /* Don't let column scroll bubble to the page. */
    overscroll-behavior: contain;
    outline: none;
    border-radius: var(--wa-border-radius-s);
  }

  .column::-webkit-scrollbar {
    display: none;
  }

  .column:focus-visible {
    outline: var(--wa-focus-ring-style) var(--wa-focus-ring-width) var(--wa-color-focus);
    outline-offset: 2px;
  }

  .column-item {
    flex: 0 0 var(--column-item-height);
    display: inline-flex;
    align-items: center;
    justify-content: center;
    font: inherit;
    font-variant-numeric: tabular-nums;
    cursor: pointer;
    scroll-snap-align: center;
    border-radius: var(--wa-border-radius-s);
    color: var(--wa-color-text-normal);
    background: transparent;
    border: none;
    padding: 0;
    user-select: none;
    transition:
      background-color var(--wa-transition-fast),
      color var(--wa-transition-fast);
  }

  .column-item:hover:not([aria-disabled='true']):not([aria-selected='true']) {
    background-color: var(--wa-color-neutral-fill-quiet);
  }

  .column-item[aria-selected='true'] {
    background-color: var(--wa-color-brand-fill-loud);
    color: var(--wa-color-brand-on-loud);
  }

  .column-item[aria-disabled='true'] {
    color: var(--wa-color-text-quiet);
    cursor: not-allowed;
  }

  /* Footer / Now button */
  .popup-footer {
    display: flex;
    align-items: center;
    justify-content: flex-end;
    gap: var(--wa-space-xs);
    margin-top: var(--wa-space-xs);
    padding-top: var(--wa-space-xs);
    border-top: var(--wa-border-style) var(--wa-border-width-s) var(--wa-color-surface-border);
  }

  .now-button {
    appearance: none;
    background: transparent;
    border: var(--wa-border-style) var(--wa-border-width-s) var(--wa-color-surface-border);
    border-radius: var(--wa-border-radius-s);
    padding: var(--wa-space-2xs) var(--wa-space-s);
    font: inherit;
    color: inherit;
    cursor: pointer;
    transition: background-color var(--wa-transition-fast);
  }

  .now-button:hover {
    background-color: var(--wa-color-neutral-fill-quiet);
  }

  .now-button:focus-visible {
    outline: var(--wa-focus-ring-style) var(--wa-focus-ring-width) var(--wa-color-focus);
    outline-offset: 2px;
  }

  /* Input wrapper */
  .input-wrapper {
    flex: 1;
    display: flex;
    width: 100%;
    min-width: 0;
    align-items: center;
    min-height: var(--wa-form-control-height);
    background-color: var(--wa-form-control-background-color);
    border-color: var(--wa-form-control-border-color);
    border-radius: var(--wa-form-control-border-radius);
    border-style: var(--wa-form-control-border-style);
    border-width: var(--wa-form-control-border-width);
    color: var(--wa-form-control-value-color);
    cursor: text;
    font-family: inherit;
    font-weight: var(--wa-form-control-value-font-weight);
    line-height: var(--wa-form-control-value-line-height);
    padding: 0 var(--wa-form-control-padding-inline);
    transition:
      background-color var(--wa-transition-normal),
      border-color var(--wa-transition-normal),
      outline-color var(--wa-transition-fast);
    transition-timing-function: var(--wa-transition-easing);
    outline: var(--wa-focus-ring-style) var(--wa-focus-ring-width) transparent;
    outline-offset: var(--wa-focus-ring-offset);
  }

  :host([pill]) .input-wrapper {
    border-radius: var(--wa-border-radius-pill);
  }

  :host(:focus-within) .input-wrapper {
    outline-color: var(--wa-color-focus);
  }

  :host(:state(disabled)) .input-wrapper {
    opacity: 0.5;
    cursor: not-allowed;
  }

  /* Appearance variants */
  :host([appearance='filled']) .input-wrapper,
  :host([appearance='filled-outlined']) .input-wrapper {
    background-color: var(--wa-color-surface-lowered);
  }

  :host([appearance='filled']) .input-wrapper {
    border-color: transparent;
  }

  /* Segmented input — same patterns as wa-date-input. */
  .segments {
    flex: 1;
    min-width: 0;
    display: inline-flex;
    align-items: center;
    flex-wrap: nowrap;
    color: inherit;
    font: inherit;
    font-variant-numeric: tabular-nums;
    caret-color: transparent;
  }

  .segment {
    display: inline-block;
    padding: 0 0.15em;
    margin: 0;
    background: transparent;
    border: none;
    outline: none;
    color: inherit;
    font: inherit;
    text-align: center;
    cursor: text;
    user-select: none;
    white-space: nowrap;
    border-radius: var(--wa-border-radius-s);
    transition:
      background-color var(--wa-transition-fast),
      color var(--wa-transition-fast);
  }

  .segment.empty {
    color: var(--wa-color-text-quiet);
  }

  /* Focus style — applies to keyboard *and* pointer focus so a click always shows the selection. Soft brand fill
     reads as "selected" without competing with the popup's loud selected items. */
  .segment:focus {
    background-color: var(--wa-color-brand-fill-quiet);
    color: var(--wa-color-brand-on-quiet);
    outline: none;
  }

  .segment.empty:focus {
    color: var(--wa-color-brand-on-quiet);
  }

  .segment-literal {
    display: inline-block;
    color: var(--wa-color-text-quiet);
    white-space: pre;
    user-select: none;
  }

  :host([disabled]) .segment,
  :host([readonly]) .segment {
    cursor: inherit;
  }

  /* Hidden form-value input (anchored under the wrapper for native validity tooltips). */
  .value-input {
    position: absolute;
    inset-inline-start: var(--wa-form-control-padding-inline);
    inset-block-start: 50%;
    transform: translateY(-50%);
    width: 1px;
    height: 1px;
    opacity: 0;
    pointer-events: none;
    border: none;
    padding: 0;
    margin: 0;
  }

  /* Trailing buttons (.clear-button, .expand-button), the .expand-icon box, and the start/end
     decoration slots are shared with <wa-date-input> via segmentedFieldStyles so both pickers
     stay on <wa-select>'s trailing optical axis. See segmented-field.styles.ts. */

  /* Animations */
  .time-input-popup::part(popup).show {
    animation: wa-time-input-show var(--show-duration) var(--wa-transition-easing);
  }

  .time-input-popup::part(popup).hide {
    animation: wa-time-input-hide var(--hide-duration) var(--wa-transition-easing);
  }

  @keyframes wa-time-input-show {
    from {
      opacity: 0;
      transform: scale(0.97);
    }
    to {
      opacity: 1;
      transform: scale(1);
    }
  }

  @keyframes wa-time-input-hide {
    from {
      opacity: 1;
      transform: scale(1);
    }
    to {
      opacity: 0;
      transform: scale(0.97);
    }
  }

  @media (prefers-reduced-motion: reduce) {
    :host {
      --show-duration: 0ms;
      --hide-duration: 0ms;
    }
    .column {
      scroll-behavior: auto;
    }
  }

  /* Visually hidden helper */
  .visually-hidden {
    position: absolute;
    width: 1px;
    height: 1px;
    padding: 0;
    margin: -1px;
    overflow: hidden;
    clip: rect(0, 0, 0, 0);
    white-space: nowrap;
    border: 0;
  }
`;/*! Copyright 2026 Fonticons, Inc. - https://webawesome.com/license */var Q6=["/",".","-",":",","," "],K6=class{constructor(o,i){this.buffers=new Map,this.active=null,this.handleFocus=(r)=>{let a=r.currentTarget,n=a.dataset.group,w=a.dataset.segment;this.active={group:n,field:w};for(let b of this.segmentElements())b.tabIndex=b===a?0:-1},this.handleBlur=(r)=>{let a=r.currentTarget,n=a.dataset.group,w=a.dataset.segment;if(this.getBuffer(n,w))this.flushBuffer(n,w)},this.handleKeyDown=(r)=>{let a=r.currentTarget??r.composedPath().find((c)=>{return c instanceof HTMLElement&&c.dataset.group&&c.dataset.segment})??null;if(!a)return;let n=a.dataset.group,w=a.dataset.segment;if(!n||!w)return;if(r.key==="ArrowUp"||r.key==="ArrowDown"){if(r.preventDefault(),this.isReadonlyOrDisabled())return;if(this.getBuffer(n,w))this.flushBuffer(n,w);let c=r.key==="ArrowUp"?1:-1,m=this.config.rules.step(n,w,c);if(m)this.config.onCommit?.(n,w,m.value);return}if(r.key==="ArrowLeft"||r.key==="ArrowRight"){if(r.preventDefault(),this.getBuffer(n,w))this.flushBuffer(n,w);let c=r.key==="ArrowLeft",m=this.config.isRtl()?!c:c;this.moveFocus(a,m?-1:1);return}if(r.key==="Home"){r.preventDefault(),this.segmentElements()[0]?.focus({preventScroll:!0});return}if(r.key==="End"){r.preventDefault();let c=this.segmentElements();c[c.length-1]?.focus({preventScroll:!0});return}if(r.key==="Tab"){if(this.getBuffer(n,w))this.flushBuffer(n,w);return}if(r.key==="Backspace"||r.key==="Delete"){if(r.preventDefault(),this.isReadonlyOrDisabled())return;if(this.getBuffer(n,w))this.setBuffer(n,w,""),this.config.onCommit?.(n,w,null);else if(this.config.rules.clear(n,w))this.config.onCommit?.(n,w,null);else if(r.key==="Backspace")this.moveFocus(a,-1);return}if(/^[0-9]$/.test(r.key)){if(r.preventDefault(),this.isReadonlyOrDisabled())return;let c=this.getBuffer(n,w),m=this.config.rules.typeDigit(n,w,c,r.key);if(this.setBuffer(n,w,m.buffer),this.config.onCommit?.(n,w,m.value),m.advance)this.moveFocus(a,1);return}if((this.config.separatorKeys??Q6).includes(r.key)){if(r.preventDefault(),this.getBuffer(n,w))this.flushBuffer(n,w);this.moveFocus(a,1);return}},this.host=o,this.config=i,o.addController(this)}hostConnected(){}hostDisconnected(){this.buffers.clear(),this.active=null}getBuffer(o,i){return this.buffers.get(this.key(o,i))??""}setBuffer(o,i,r){let a=this.key(o,i);if(r)this.buffers.set(a,r);else this.buffers.delete(a)}clearBuffers(){this.buffers.clear()}getActiveSegment(){return this.active}setActiveSegment(o,i){this.active={group:o,field:i}}segmentElements(){let o=this.host.shadowRoot;if(!o)return[];return Array.from(o.querySelectorAll("[data-segment][data-group]"))}segmentElementFor(o,i){let r=this.host.shadowRoot;if(!r)return null;return r.querySelector(`[data-group="${o}"][data-segment="${i}"]`)}findFocusableSegment(o){let i=this.segmentElements();if(i.length===0)return null;return i.find((a)=>{let n=a.dataset.group,w=a.dataset.segment;return o(n,w)&&!this.getBuffer(n,w)})??i[0]}focusActiveSegment(o){if(this.active){let i=this.segmentElementFor(this.active.group,this.active.field);if(i){i.focus({preventScroll:!0,...o});return}}this.segmentElements()[0]?.focus({preventScroll:!0,...o})}moveFocus(o,i,r){let a=this.segmentElements(),n=a.indexOf(o);if(n<0)return;let w=a[n+i];if(w)w.focus({preventScroll:!0,...r})}flushBuffer(o,i){let r=this.getBuffer(o,i);if(!r)return!1;let a=this.config.rules.commitBuffer(o,i,r);return this.setBuffer(o,i,""),this.config.onCommit?.(o,i,a),!0}flushAllBuffers(){for(let[o,i]of this.buffers){if(!i)continue;let[r,a]=o.split(":"),n=this.config.rules.commitBuffer(r,a,i);this.config.onCommit?.(r,a,n)}this.buffers.clear()}eventHandlers(){return{keydown:this.handleKeyDown,focus:this.handleFocus,blur:this.handleBlur}}handleKeyDownEvent(o){let i=o.defaultPrevented;return this.handleKeyDown(o),o.defaultPrevented&&!i}key(o,i){return`${o}:${i}`}isReadonlyOrDisabled(){return!!(this.config.isReadonly?.()||this.config.isDisabled?.())}},B6=F`
  /* font: inherit lifts the UA default button font-size so children that size with em
     (e.g. the expand icon) resolve against the host size-driven font-size instead of ~13px. */
  [part~='clear-button'],
  [part~='expand-button'] {
    flex: 0 0 auto;
    display: inline-flex;
    align-items: center;
    justify-content: center;
    background: transparent;
    border: none;
    cursor: pointer;
    color: var(--wa-color-text-quiet);
    font: inherit;
    padding: 0.25em;
    /* Trailing padding overhangs the content edge rather than displacing the glyph. */
    margin-inline-end: -0.25em;
    border-radius: var(--wa-border-radius-s);
    transition: color var(--wa-transition-fast);
  }

  /* Fixed widths (= glyph + 2×0.25em padding) keep each glyph centered on the trailing axis
     regardless of the slotted icon's intrinsic width. */
  [part~='expand-button'] {
    inline-size: 1.75em;
    /* Leading gap that lands the clear button on <wa-select>'s clear axis. Scales with the
       form-control padding token (like select's own spacing) so it holds across themes; the
       0.125em offset accounts for the fixed button widths. */
    margin-inline-start: calc(var(--wa-form-control-padding-inline) - 0.125em);
  }

  [part~='clear-button'] {
    inline-size: 1.5em;
    margin-inline-start: var(--wa-form-control-padding-inline);
  }

  [part~='clear-button']:hover,
  [part~='expand-button']:hover {
    color: var(--wa-color-text-loud);
  }

  [part~='expand-button']:focus-visible {
    outline: var(--wa-focus-ring-style) var(--wa-focus-ring-width) var(--wa-color-focus);
    outline-offset: 2px;
  }

  /* font-size scales the glyph with the host size attribute; the button width handles centering. */
  [part~='expand-icon'] {
    display: inline-flex;
    align-items: center;
    justify-content: center;
    color: var(--wa-color-text-quiet);
    font-size: 1.25em;
  }

  /* Start / end decoration slots. Spaced with the same --wa-form-control-padding-inline gap as
     <wa-input>/<wa-select> so slotted icons line up with the rest of the form controls, rather
     than the tighter 0.25em the pickers used before. */
  [part~='start'],
  [part~='end'] {
    display: inline-flex;
    align-items: center;
    color: var(--wa-color-text-quiet);
  }

  [part~='start']::slotted(*) {
    margin-inline-end: var(--wa-form-control-padding-inline);
  }

  [part~='end']::slotted(*) {
    margin-inline-start: var(--wa-form-control-padding-inline);
  }
`,G6=0,M6=()=>`wa-time-input-${++G6}`,kr="single",fo=class extends E{constructor(){super(...arguments);this.assumeInteractionOn=["input"],this.hasSlotController=new W(this,"hint","label","footer"),this.localize=new B(this),this.popupId=M6(),this.keyboardHelpId=`${this.popupId}-help`,this.pendingValue=null,this.moveFocusToColumnOnShow=!1,this.lastEmittedValue="",this.segments={hour:null,minute:null,second:null,dayPeriod:null},this.segmentsController=new K6(this,{getLayout:()=>this.getLayout(),isRtl:()=>this.isRtl,isReadonly:()=>this.readonly,isDisabled:()=>this.disabled,rules:M4({getSegments:()=>this.segments,setSegments:(o,i)=>{this.segments=i},hour12:()=>this.resolvedHour12}),onCommit:()=>{this.recomputeValue(),this.requestUpdate()}}),this.name="",this._value="",this.defaultValue=this.getAttribute("value")??"",this.disabled=!1,this.required=!1,this.readonly=!1,this.size="m",this.appearance="outlined",this.pill=!1,this.label="",this.hint="",this.autocomplete="",this.withClear=!1,this.withNow=!1,this.withLabel=!1,this.withHint=!1,this.min="",this.max="",this.step=60,this.hourFormat="auto",this.open=!1,this.placement="bottom-start",this.distance=0,this.handleDocumentFocusIn=(o)=>{if(!o.composedPath().includes(this))this.hide()},this.handleDocumentKeyDown=(o)=>{if(o.key==="Escape"&&this.open&&Ao(this))o.stopPropagation(),o.preventDefault(),this.hide()},this.handleDocumentMouseDown=(o)=>{if(!o.composedPath().includes(this))this.hide()},this.handleSegmentFocus=(o)=>{this.segmentsController.eventHandlers().focus(o)},this.handleSegmentBlur=(o)=>{this.segmentsController.eventHandlers().blur(o)},this.handleInputWrapperPointerDown=(o)=>{if(this.disabled||this.readonly||this.open)return;for(let i of o.composedPath()){if(i===this)break;if(!(i instanceof Element))continue;let r=i.tagName;if(r==="BUTTON"||r==="A"||i.getAttribute("role")==="button")return}this.show()},this.handleSegmentKeyDown=(o)=>{let i=o.currentTarget,r=i.dataset.segment;if(o.altKey&&o.key==="ArrowDown"){if(o.preventDefault(),this.moveFocusToColumnOnShow=!0,this.open)this.focusFirstColumn();else this.show();return}if(o.altKey&&o.key==="ArrowUp"){o.preventDefault(),this.hide();return}if(o.key==="Enter"){if(o.preventDefault(),this.segmentsController.getBuffer(kr,r))this.segmentsController.flushBuffer(kr,r),this.recomputeValue();if(this.open)this.hide();return}if(r==="dayPeriod"){let a=Z4(o.key);if(a!=null){if(o.preventDefault(),this.readonly)return;this.segments={...this.segments,dayPeriod:a},this.recomputeValue(),this.requestUpdate(),this.segmentsController.moveFocus(i,1);return}}this.segmentsController.eventHandlers().keydown(o)},this.handleExpandButtonClick=()=>{if(this.open)this.hide();else this.moveFocusToColumnOnShow=!0,this.show()},this.handleClearClick=(o)=>{if(o.stopPropagation(),!this._value&&K4(this.segments))return;this._value="",this.valueHasChanged=!0,this.segmentsController.clearBuffers(),this.syncSegmentsFromCanonical(),this.updateValidity(),this.dispatchEvent(new v0),this.dispatchEvent(new InputEvent("input",{bubbles:!0,composed:!0})),this.dispatchEvent(new Event("change",{bubbles:!0,composed:!0})),this.lastEmittedValue="",this.focus()},this.handleClearMouseDown=(o)=>{o.preventDefault(),o.stopPropagation()},this.handleNowClick=()=>{let o=new Date;this.value=o,this.dispatchEvent(new InputEvent("input",{bubbles:!0,composed:!0})),this.dispatchEvent(new Event("change",{bubbles:!0,composed:!0})),this.lastEmittedValue=this._value,this.hide()},this.handleColumnItemClick=(o)=>{let i=o.target.closest(".column-item");if(!i||i.getAttribute("aria-disabled")==="true")return;let r=i.dataset.field,a=Number(i.dataset.value);if(Number.isNaN(a))return;this.segments={...this.segments,[r]:a},this.recomputeValue(),this.requestUpdate()},this.handleColumnKeyDown=(o)=>{let i=o.currentTarget,r=i.dataset.field;if(o.key==="Escape"){o.preventDefault(),this.hide();return}if(o.key==="Enter"){o.preventDefault(),this.hide();return}if(o.key==="ArrowLeft"||o.key==="ArrowRight"){o.preventDefault();let a=this.columnFields;if(a.length<2)return;let n=o.key==="ArrowLeft"?-1:1,b=((a.indexOf(r)+n)%a.length+a.length)%a.length,c=a[b];this.shadowRoot?.querySelector(`.column[data-field="${c}"]`)?.focus({preventScroll:!0});return}if(o.key==="ArrowUp"||o.key==="ArrowDown"||o.key==="PageUp"||o.key==="PageDown"){o.preventDefault();let a=o.key==="ArrowUp"||o.key==="PageUp"?-1:1,n=o.key==="PageUp"||o.key==="PageDown"?5:1,w=this.columnItemsFor(r);if(w.length===0)return;let b=this.segments[r],m=(((b==null?0:Math.max(0,w.findIndex((d)=>d.value===b)))+a*n)%w.length+w.length)%w.length,p=w[m];this.segments={...this.segments,[r]:p.value},this.recomputeValue(),this.requestUpdate(),requestAnimationFrame(()=>{let d=i.querySelector(`[data-value="${p.value}"]`);if(d)this.keepItemInView(i,d)});return}if(o.key==="Home"){o.preventDefault();let a=this.columnItemsFor(r);if(a.length===0)return;this.segments={...this.segments,[r]:a[0].value},this.recomputeValue(),this.requestUpdate();return}if(o.key==="End"){o.preventDefault();let a=this.columnItemsFor(r);if(a.length===0)return;let n=a[a.length-1];this.segments={...this.segments,[r]:n.value},this.recomputeValue(),this.requestUpdate();return}}}static get validators(){let o=M?[]:[ti({validationElement:Object.assign(document.createElement("input"),{required:!0})}),Wo()];return[...super.validators,...o]}term(o,i){return this.localize.term(o)||i}get validationTarget(){return this.valueInput}get value(){if(this.valueHasChanged)return this._value;return this._value||this.defaultValue||""}set value(o){let i=this.normalizeIncomingValue(o);if(i===this._value)return;let r=this._value;if(this._value=i,this.valueHasChanged=!0,this.hasUpdated)this.syncSegmentsFromCanonical();else this.pendingValue=this._value;this.requestUpdate("value",r)}handleSizeChange(){j(this.localName,this.size)}disconnectedCallback(){super.disconnectedCallback(),this.removeOpenListeners()}firstUpdated(o){if(super.firstUpdated(o),this.pendingValue!=null)this._value=this.pendingValue,this.pendingValue=null;else if(!this._value&&this.defaultValue)this._value=this.defaultValue;this.syncSegmentsFromCanonical(),this.input=this.valueInput,this.updateValidity(),this.lastEmittedValue=this._value}updated(o){if(super.updated?.(o),o.has("value"))this.customStates.set("blank",!this.value);if(o.has("disabled"))this.customStates.set("disabled",this.disabled);if(o.has("open"))this.customStates.set("open",this.open);if(o.has("step")||o.has("hourFormat"))this.syncSegmentsFromCanonical();if(o.has("min")||o.has("max")||o.has("step"))this.updateValidity()}handleDisabledChange(){if(this.disabled&&this.open)this.open=!1}async handleOpenChange(){if(this.open&&!this.disabled){let o=new ko;if(this.dispatchEvent(o),o.defaultPrevented){this.open=!1;return}if(this.addOpenListeners(),this.popup.active=!0,await this.updateComplete,await P(this.popup.popup,"show"),this.scrollColumnsToCurrent(),this.moveFocusToColumnOnShow)this.moveFocusToColumnOnShow=!1,this.focusFirstColumn();this.dispatchEvent(new jo)}else{let o=new To;if(this.dispatchEvent(o),o.defaultPrevented){this.open=!0;return}this.removeOpenListeners(),await P(this.popup.popup,"hide"),this.popup.active=!1,this.dispatchEvent(new Io);let i=this.shadowRoot?.activeElement;if(i&&this.popup?.contains(i))this.focusActiveSegment()}}focus(o){this.segmentsController.findFocusableSegment((r,a)=>this.segments[a]==null)?.focus(o)}blur(){this.shadowRoot?.activeElement?.blur()}async show(){if(this.open||this.disabled)return;this.open=!0,await Yo(this,"wa-after-show")}async hide(){if(!this.open||this.disabled)return;this.open=!1,await Yo(this,"wa-after-hide")}get valueAsDate(){let o=this.value;if(!o)return null;let i=Fa(o,{hour12:!1,withSeconds:this.resolvedWithSeconds});if(i.hour==null||i.minute==null)return null;let r=new Date;return r.setHours(i.hour,i.minute,i.second??0,0),r}get valueAsNumber(){let o=this.valueAsDate;if(!o)return Number.NaN;return o.getHours()*3600000+o.getMinutes()*60000+o.getSeconds()*1000}formResetCallback(){this._value=this.defaultValue,this.valueHasChanged=!1,this.segmentsController.clearBuffers(),this.syncSegmentsFromCanonical(),super.formResetCallback(),this.lastEmittedValue=this._value,this.requestUpdate()}formStateRestoreCallback(o){if(typeof o==="string"){if(this._value=o,this.hasUpdated)this.syncSegmentsFromCanonical();else this.pendingValue=o;this.requestUpdate()}this.updateValidity()}get resolvedLocale(){return this.localize.lang()||"en"}get isRtl(){return this.localize.dir()==="rtl"}get resolvedHour12(){if(this.hourFormat==="12")return!0;if(this.hourFormat==="24")return!1;return X4(this.resolvedLocale)}get resolvedWithSeconds(){return G4(this.step)}getLayout(){return U4(this.resolvedLocale,{hour12:this.resolvedHour12,withSeconds:this.resolvedWithSeconds})}normalizeIncomingValue(o){if(o==null)return"";if(typeof o==="string")return o;if(o instanceof Date){let i=String(o.getHours()).padStart(2,"0"),r=String(o.getMinutes()).padStart(2,"0"),a=String(o.getSeconds()).padStart(2,"0");return this.resolvedWithSeconds?`${i}:${r}:${a}`:`${i}:${r}`}return""}syncSegmentsFromCanonical(){this.segmentsController.clearBuffers(),this.segments=Fa(this._value,{hour12:this.resolvedHour12,withSeconds:this.resolvedWithSeconds}),this.updateHiddenInput()}updateHiddenInput(){if(this.valueInput)this.valueInput.value=this._value;this.setValue(this._value||null)}recomputeValue(){let o=this._value,i=B4(this.segments,{hour12:this.resolvedHour12,withSeconds:this.resolvedWithSeconds});if(i!==o)this._value=i,this.valueHasChanged=!0,this.updateHiddenInput(),this.updateValidity();if(this.dispatchEvent(new InputEvent("input",{bubbles:!0,composed:!0})),i!==this.lastEmittedValue)this.lastEmittedValue=i,this.dispatchEvent(new Event("change",{bubbles:!0,composed:!0}))}addOpenListeners(){document.addEventListener("focusin",this.handleDocumentFocusIn),document.addEventListener("keydown",this.handleDocumentKeyDown),document.addEventListener("mousedown",this.handleDocumentMouseDown),_o(this)}removeOpenListeners(){document.removeEventListener("focusin",this.handleDocumentFocusIn),document.removeEventListener("keydown",this.handleDocumentKeyDown),document.removeEventListener("mousedown",this.handleDocumentMouseDown),Mo(this)}focusActiveSegment(){let o=this.segmentsController.getActiveSegment();if(o){let i=this.segmentsController.segmentElementFor(o.group,o.field);if(i){i.focus({preventScroll:!0});return}}this.segmentsController.findFocusableSegment((i,r)=>this.segments[r]==null)?.focus({preventScroll:!0})}get columnFields(){return this.getLayout().order.filter((o)=>o!==void 0)}columnItemsFor(o){if(o==="dayPeriod")return[{label:this.term("am",T2(this.resolvedLocale,0)),value:0,disabled:!1},{label:this.term("pm",T2(this.resolvedLocale,1)),value:1,disabled:!1}];if(o==="hour"){let n=[];if(this.resolvedHour12)for(let w=1;w<=12;w++)n.push({label:String(w).padStart(2,"0"),value:w,disabled:!1});else for(let w=0;w<=23;w++)n.push({label:String(w).padStart(2,"0"),value:w,disabled:!1});return n}let i=typeof this.step==="number"&&Number.isFinite(this.step)&&this.step>0?this.step:1,r=o==="minute"?i<60?1:Math.max(1,Math.floor(i/60)):Math.max(1,Math.floor(i)),a=[];for(let n=0;n<60;n+=r)a.push({label:String(n).padStart(2,"0"),value:n,disabled:!1});return a}focusFirstColumn(){if(!this.shadowRoot)return;this.shadowRoot.querySelector(".column")?.focus({preventScroll:!0})}scrollColumnsToCurrent(){if(!this.shadowRoot)return;for(let o of this.shadowRoot.querySelectorAll(".column")){let i=o.dataset.field,r=this.segments[i];if(r==null)continue;let a=o.querySelector(`[data-value="${r}"]`);if(a)this.keepItemInView(o,a)}}keepItemInView(o,i){let r=o.getBoundingClientRect(),a=i.getBoundingClientRect();if(a.top<r.top)o.scrollTop+=a.top-r.top;else if(a.bottom>r.bottom)o.scrollTop+=a.bottom-r.bottom}placeholderFor(o){return"--"}fieldLabelFor(o){let i=o==="hour"?"Hour":o==="minute"?"Minute":o==="second"?"Second":"AM/PM";return this.term(o,i)}segmentAriaValueText(o){let i=this.segments[o],r=this.segmentsController.getBuffer(kr,o);if(r)return r;if(i==null)return this.term("empty","Empty");if(o==="dayPeriod")return i===0?this.term("am","AM"):this.term("pm","PM");return String(i)}render(){let o=this.hasUpdated?this.hasSlotController.test("label"):this.withLabel,i=this.hasUpdated?this.hasSlotController.test("hint"):this.withHint,r=this.hasUpdated?this.hasSlotController.test("footer"):!1,a=!!this.label||!!o,n=!!this.hint||!!i,w=!!this._value,b=this.getLayout(),c=this.label||this.term("time","Time");return h`
      <div
        part="form-control"
        class=${Z({"form-control":!0,"form-control-has-label":a})}
      >
        <label
          id="label"
          part="form-control-label label"
          class=${Z({label:!0,"has-label":a})}
          aria-hidden=${a?"false":"true"}
          @click=${()=>this.focus()}
        >
          <slot name="label">${this.label}</slot>
        </label>

        <div part="form-control-input" class="form-control-input">
          <wa-popup
            class=${Z({"time-input-popup":!0,open:this.open})}
            placement=${this.placement}
            distance=${this.distance}
            ?active=${this.open}
            flip
            shift
          >
            <div
              part="base time-input input-wrapper"
              class="input-wrapper"
              slot="anchor"
              @pointerdown=${this.handleInputWrapperPointerDown}
            >
              <slot name="start" part="start" class="start"></slot>

              <div
                part="input"
                class="segments"
                role="group"
                aria-labelledby=${a?"label":wo}
                aria-label=${a?wo:c}
              >
                ${this.renderSegmentGroup(b)}
              </div>

              <span id=${this.keyboardHelpId} class="visually-hidden">
                ${this.term("timeInputKeyboardHelp","Use arrow keys to change values; press Alt+Down Arrow to open the time picker.")}
              </span>

              <input
                class="value-input"
                type="time"
                tabindex="-1"
                aria-hidden="true"
                .value=${this._value}
                min=${Q(this.min||void 0)}
                max=${Q(this.max||void 0)}
                step=${Q(this.step==="any"?"any":String(this.step))}
                ?disabled=${this.disabled}
                ?required=${this.required}
                autocomplete=${Q(this.autocomplete||void 0)}
              />

              ${this.withClear&&w?h`<button
                    part="clear-button"
                    type="button"
                    class="clear-button"
                    aria-label=${this.localize.term("clearEntry")}
                    tabindex="-1"
                    @mousedown=${this.handleClearMouseDown}
                    @click=${this.handleClearClick}
                  >
                    <slot name="clear-icon">
                      <wa-icon name="circle-xmark" library="system" variant="regular"></wa-icon>
                    </slot>
                  </button>`:wo}

              <slot name="end" part="end" class="end"></slot>

              <button
                part="expand-button"
                type="button"
                class="expand-button"
                aria-label=${this.open?this.term("closeTimeInput","Close time picker"):this.term("chooseTime","Choose time")}
                aria-haspopup="dialog"
                aria-expanded=${this.open?"true":"false"}
                aria-controls=${this.popupId}
                ?disabled=${this.disabled}
                @click=${this.handleExpandButtonClick}
              >
                <slot name="expand-icon" part="expand-icon" class="expand-icon">
                  <wa-icon library="system" name="clock"></wa-icon>
                </slot>
              </button>
            </div>

            <div
              id=${this.popupId}
              part="popup"
              class="popup-body"
              role="dialog"
              aria-modal="true"
              aria-label=${this.term("chooseTime","Choose time")}
            >
              <div part="columns" class="columns">${this.columnFields.map((m)=>this.renderColumn(m))}</div>
              ${r?h`<div class="popup-footer"><slot name="footer"></slot></div>`:this.withNow?h`<div class="popup-footer">
                      <button part="now-button" type="button" class="now-button" @click=${this.handleNowClick}>
                        ${this.term("now","Now")}
                      </button>
                    </div>`:wo}
            </div>
          </wa-popup>
        </div>

        <slot
          id="hint"
          name="hint"
          part="hint"
          class=${Z({"has-slotted":n})}
          aria-hidden=${n?"false":"true"}
        >
          ${this.hint}
        </slot>
      </div>
    `}renderSegmentGroup(o){let i=this.segmentsController.getActiveSegment(),r=!1,a=[];for(let n of o.tokens)if(n.kind==="literal")a.push(h`<span part="segment-literal" class="segment-literal" aria-hidden="true">${n.text}</span>`);else{let w=n.field,b=!r&&(i==null||i.field===w);if(b)r=!0;a.push(this.renderSegment(w,b))}return a}renderSegment(o,i){let r=this.segments[o],a=this.segmentsController.getBuffer(kr,o),n=this.placeholderFor(o),w=Q4(o,r,a,n,this.resolvedLocale),b=r==null&&!a,c=o==="hour"?this.resolvedHour12?{min:1,max:12}:{min:0,max:23}:o==="minute"||o==="second"?{min:0,max:59}:{min:0,max:1},m=this.segmentAriaValueText(o);return h`<span
      part="segment"
      class=${Z({segment:!0,empty:b,[`segment-${o}`]:!0})}
      data-group=${kr}
      data-segment=${o}
      role="spinbutton"
      tabindex=${this.disabled?-1:i?0:-1}
      aria-label=${this.fieldLabelFor(o)}
      aria-valuemin=${c.min}
      aria-valuemax=${c.max}
      aria-valuenow=${Q(r==null?void 0:r)}
      aria-valuetext=${m}
      aria-readonly=${this.readonly?"true":"false"}
      aria-disabled=${this.disabled?"true":"false"}
      aria-describedby=${this.keyboardHelpId}
      inputmode=${o==="dayPeriod"?"text":"numeric"}
      @keydown=${this.handleSegmentKeyDown}
      @focus=${this.handleSegmentFocus}
      @blur=${this.handleSegmentBlur}
      >${w}</span
    >`}renderColumn(o){let i=this.columnItemsFor(o),r=this.segments[o],a=r!=null?`${this.popupId}-${o}-${r}`:void 0;return h`<div
      part="column column-${o}"
      class=${Z({column:!0,[`column-${o}`]:!0})}
      data-field=${o}
      role="listbox"
      tabindex="0"
      aria-label=${this.fieldLabelFor(o)}
      aria-orientation="vertical"
      aria-activedescendant=${Q(a)}
      @click=${this.handleColumnItemClick}
      @keydown=${this.handleColumnKeyDown}
    >
      ${i.map((n)=>{let w=`${this.popupId}-${o}-${n.value}`,b=n.value===r;return h`<button
          id=${w}
          part="column-item ${b?"column-item-selected":""}"
          class="column-item"
          data-field=${o}
          data-value=${n.value}
          type="button"
          role="option"
          aria-selected=${b?"true":"false"}
          aria-disabled=${n.disabled?"true":"false"}
          tabindex="-1"
        >
          ${n.label}
        </button>`})}
    </div>`}};fo.css=[I,go,B6,V4];fo.shadowRootOptions={...E.shadowRootOptions,delegatesFocus:!0};f([Y(".time-input-popup")],fo.prototype,"popup",2);f([Y(".value-input")],fo.prototype,"valueInput",2);f([J()],fo.prototype,"segments",2);f([t({reflect:!0})],fo.prototype,"name",2);f([J()],fo.prototype,"value",1);f([t({attribute:"value",reflect:!0})],fo.prototype,"defaultValue",2);f([t({type:Boolean})],fo.prototype,"disabled",2);f([t({type:Boolean,reflect:!0})],fo.prototype,"required",2);f([t({type:Boolean,reflect:!0})],fo.prototype,"readonly",2);f([t({reflect:!0})],fo.prototype,"size",2);f([v("size")],fo.prototype,"handleSizeChange",1);f([t({reflect:!0})],fo.prototype,"appearance",2);f([t({type:Boolean,reflect:!0})],fo.prototype,"pill",2);f([t()],fo.prototype,"label",2);f([t({attribute:"hint"})],fo.prototype,"hint",2);f([t()],fo.prototype,"autocomplete",2);f([t({attribute:"with-clear",type:Boolean})],fo.prototype,"withClear",2);f([t({attribute:"with-now",type:Boolean})],fo.prototype,"withNow",2);f([t({attribute:"with-label",type:Boolean})],fo.prototype,"withLabel",2);f([t({attribute:"with-hint",type:Boolean})],fo.prototype,"withHint",2);f([t({reflect:!0})],fo.prototype,"min",2);f([t({reflect:!0})],fo.prototype,"max",2);f([t({converter:{fromAttribute:V6,toAttribute:H6}})],fo.prototype,"step",2);f([t({attribute:"hour-format",reflect:!0})],fo.prototype,"hourFormat",2);f([t({type:Boolean,reflect:!0})],fo.prototype,"open",2);f([t({reflect:!0})],fo.prototype,"placement",2);f([t({type:Number,reflect:!0})],fo.prototype,"distance",2);f([v("disabled",{waitUntilFirstUpdate:!0})],fo.prototype,"handleDisabledChange",1);f([v("open",{waitUntilFirstUpdate:!0})],fo.prototype,"handleOpenChange",1);fo=f([$("wa-time-input")],fo);function V6(o){if(o==null)return 60;if(o==="any")return"any";let i=Number(o);return Number.isFinite(i)&&i>0?i:60}function H6(o){if(o==="any")return"any";return String(o)}/*! Copyright 2026 Fonticons, Inc. - https://webawesome.com/license *//*! Copyright 2026 Fonticons, Inc. - https://webawesome.com/license */var H4=F`
  :host {
    --gap: var(--wa-space-s);
    --width: 28rem;
    --reorder-duration: var(--wa-transition-normal);

    display: flex;
    flex-direction: column;
    position: fixed;
    width: var(--width);
    height: 100dvh;
    max-height: 100dvh;
    margin: 0;
    padding: var(--wa-space-m);
    overflow-y: auto;
    gap: var(--gap);
    border: none;
    background: transparent;
    pointer-events: none;
    scrollbar-width: thin;

    /* Reset inset properties so placement changes work correctly */
    inset-block-start: auto;
    inset-block-end: auto;
    inset-inline-start: auto;
    inset-inline-end: auto;
    translate: none;
    align-content: normal;
    justify-content: normal;
  }

  :host(:not(:popover-open)) {
    display: none;
  }

  /* Placement positioning using logical properties for RTL support */
  :host([placement='top-start']) {
    inset-block-start: 0;
    inset-inline-start: 0;
  }

  :host([placement='top-center']) {
    inset-block-start: 0;
    inset-inline-start: 50%;
    translate: -50% 0;
  }

  :host([placement='top-end']) {
    inset-block-start: 0;
    inset-inline-start: auto;
    inset-inline-end: 0;
  }

  :host([placement='bottom-start']) {
    inset-block-end: 0;
    inset-inline-start: 0;
    align-content: end;
  }

  :host([placement='bottom-center']) {
    inset-block-end: 0;
    inset-inline-start: 50%;
    translate: -50% 0;
    align-content: end;
  }

  :host([placement='bottom-end']) {
    inset-block-end: 0;
    inset-inline-start: auto;
    inset-inline-end: 0;
    align-content: end;
  }

  /* Bottom placements: justify content to end */
  :host([placement^='bottom']) {
    justify-content: end;
  }

  .stack {
    display: flex;
    flex-direction: column;
    gap: var(--gap);
    width: 100%;
    pointer-events: auto;
  }

  /* Bottom placements: reverse stack order so newest appears at bottom */
  :host([placement^='bottom']) .stack {
    flex-direction: column-reverse;
  }

  /* Mobile: full width */
  @media (max-width: 480px) {
    :host {
      width: 100%;
      padding: var(--wa-space-s);
    }
  }
`;/*! Copyright 2026 Fonticons, Inc. - https://webawesome.com/license */var Tr=null,j2=0;function N6(){if(j2+=1,Tr||typeof document>"u")return;let o=document.createElement("div");o.id=bi("wa-toast-live-region-"),o.setAttribute("data-wa-toast-live-region",""),o.style.cssText=`
    position: absolute;
    width: 1px;
    height: 1px;
    overflow: hidden;
    white-space: nowrap;
    clip-path: inset(50%);
    pointer-events: none;
    top: 0;
    left: 0;
  `,document.body.append(o),Tr=o}function O6(){if(j2=Math.max(0,j2-1),j2>0)return;Tr?.remove(),Tr=null}function A6(o,i){if(typeof document>"u")return;let r=Tr;if(!r)return;let a=o.trim();if(!a)return;let n=document.createElement("div");n.setAttribute("role",i==="danger"?"alert":"status"),n.setAttribute("aria-live",i==="danger"?"assertive":"polite"),n.setAttribute("aria-atomic","true"),r.append(n),requestAnimationFrame(()=>{requestAnimationFrame(()=>{n.textContent=a})}),setTimeout(()=>n.remove(),1000)}var dr=class extends L{constructor(){super(...arguments);this.activatedToastItems=new WeakSet,this.positionCache=new Map,this.placement="top-end",this.handleDocumentKeyDown=async(o)=>{if(await new Promise((i)=>setTimeout(i)),o.key==="Escape"&&!o.defaultPrevented){let i=this.getToastItems();if(i.length>0)o.preventDefault(),i[i.length-1]?.hide()}},this.handleAfterHide=async(o)=>{let i=o.target;if(i.parentElement===this)this.capturePositions(),i.remove(),await this.animatePositions();if(this.getToastItems().length===0)this.hideStack()}}connectedCallback(){if(super.connectedCallback(),!M)this.popover="manual",N6(),document.addEventListener("keydown",this.handleDocumentKeyDown)}disconnectedCallback(){super.disconnectedCallback(),document.removeEventListener?.("keydown",this.handleDocumentKeyDown),O6()}handleSlotChange(){let o=this.getToastItems(),i=[];if(o.forEach((r)=>{if(!this.activatedToastItems.has(r))i.push(r)}),i.length>0)this.capturePositions(),i.forEach((r)=>{this.activatedToastItems.add(r),this.showStack(),r.startTimer(),this.announceToastItem(r)}),requestAnimationFrame(()=>this.animatePositions())}announceToastItem(o){A6(o.textContent??"",o.variant)}getToastItems(){return[...this.querySelectorAll(":scope > wa-toast-item")]}capturePositions(){this.positionCache.clear();for(let o of this.getToastItems())this.positionCache.set(o,o.getBoundingClientRect())}async animatePositions(){if(H0()){this.positionCache.clear();return}let o=[];for(let i of this.getToastItems()){let r=this.positionCache.get(i);if(!r)continue;let a=i.getBoundingClientRect(),n=r.top-a.top;if(Math.abs(n)>1){let w=Bi(i,[{transform:`translateY(${n}px)`},{transform:"translateY(0)"}],{duration:200,easing:"cubic-bezier(0.2, 0, 0, 1)"});o.push(w)}}this.positionCache.clear(),await Promise.all(o)}showStack(){if(!this.matches(":popover-open"))this.showPopover(),this.customStates.set("visible",!0)}hideStack(){if(this.matches(":popover-open"))this.hidePopover(),this.customStates.set("visible",!1)}async create(o,i){let r={allowHtml:!1,duration:5000,variant:"neutral",size:"m",...i},a=document.createElement("wa-toast-item");if(a.variant=r.variant,a.size=r.size,a.duration=r.duration,r.allowHtml)a.innerHTML=o;else a.textContent=o;if(r.icon){let n=document.createElement("wa-icon");if(n.setAttribute("slot","icon"),typeof r.icon==="string")n.setAttribute("name",r.icon);else{if(n.setAttribute("name",r.icon.name),r.icon.library)n.setAttribute("library",r.icon.library);if(r.icon.family)n.setAttribute("family",r.icon.family);if(r.icon.variant)n.setAttribute("variant",r.icon.variant)}a.prepend(n)}return this.activatedToastItems.add(a),this.capturePositions(),this.showStack(),this.prepend(a),await a.updateComplete,this.animatePositions(),a.startTimer(),this.announceToastItem(a),a}render(){return h`
      <div part="stack" class="stack" @wa-after-hide=${this.handleAfterHide}>
        <slot @slotchange=${this.handleSlotChange}></slot>
      </div>
    `}};dr.css=H4;f([Y(".stack")],dr.prototype,"stack",2);f([t({reflect:!0})],dr.prototype,"placement",2);dr=f([$("wa-toast")],dr);/*! Copyright 2026 Fonticons, Inc. - https://webawesome.com/license */var N4=F`
  :host {
    --accent-width: 4px;
    --show-duration: var(--wa-transition-normal);
    --hide-duration: var(--wa-transition-normal);
    --accent-color: var(--wa-color-fill-loud);

    display: block;
    pointer-events: auto;
  }

  /* Sizes */
  :host([size='xs']) {
    --padding: var(--wa-space-xs);
  }
  :host([size='s']),
  :host([size='small']) {
    --padding: var(--wa-space-s);
  }
  :host([size='m']),
  :host([size='medium']) {
    --padding: var(--wa-space-m);
  }
  :host([size='l']),
  :host([size='large']) {
    --padding: var(--wa-space-l);
  }
  :host([size='xl']) {
    --padding: var(--wa-space-xl);
  }

  .toast-item {
    display: flex;
    align-items: stretch;
    background: var(--wa-color-surface-raised);
    border: var(--wa-border-width-s) solid var(--wa-color-surface-border);
    border-radius: var(--wa-border-radius-m);
    box-shadow: var(--wa-shadow-l);
    overflow: hidden;
  }

  /* Animations */
  .toast-item.show {
    animation: toast-show var(--show-duration) var(--wa-transition-easing) forwards;
  }

  .toast-item.hide {
    animation: toast-hide var(--hide-duration) var(--wa-transition-easing) forwards;
  }

  @keyframes toast-show {
    from {
      opacity: 0;
      translate: 0 -0.5rem;
    }
    to {
      opacity: 1;
      translate: 0;
    }
  }

  @keyframes toast-hide {
    from {
      opacity: 1;
      translate: 0;
    }
    to {
      opacity: 0;
      translate: 0 -0.5rem;
    }
  }

  /* Accent line */
  .accent {
    flex: 0 0 auto;
    width: var(--accent-width);
    background: var(--accent-color);
  }

  /* Icon - only show if slot has content */
  .icon {
    display: flex;
    align-items: center;
    padding: var(--padding);
    padding-inline-end: 0;
    color: var(--accent-color);
    font-size: 1.25em;
  }

  .toast-item:not(.toast-item--has-icon) .icon {
    display: none;
  }

  /* Content */
  .content {
    flex: 1 1 auto;
    align-self: center;
    min-width: 0;
    padding: var(--padding);
    color: var(--wa-color-text-normal);
  }

  /* Close button */
  .close-button {
    flex: 0 0 auto;
    display: flex;
    align-items: center;
    justify-content: center;
    align-self: stretch;
    padding-inline: var(--padding);
    background: transparent;
    border: none;
    border-start-end-radius: var(--border-radius);
    border-end-end-radius: var(--border-radius);
    color: var(--wa-color-neutral-on-quiet);
    font-size: inherit;
    cursor: pointer;
    transition: background-color var(--wa-transition-fast);

    @media (hover: hover) {
      &:hover {
        color: color-mix(in oklab, currentColor, var(--wa-color-mix-hover));
      }
    }

    &:focus {
      outline: none;
    }

    &:focus-visible {
      outline: var(--wa-focus-ring);
      outline-offset: calc(var(--wa-focus-ring-width) * -1);
    }
  }

  /* Progress ring styling */
  wa-progress-ring {
    --size: var(--wa-form-control-height);
    --track-width: 0.125rem;
    --indicator-width: 0.125rem;
    --track-color: var(--wa-color-neutral-fill-quiet);
    --indicator-color: var(--accent-color);
    --indicator-transition-duration: 50ms;
  }

  /* Hide progress ring indicator when no duration */
  .toast-item:not(.toast-item--has-duration) wa-progress-ring {
    --track-color: transparent;
    --indicator-color: transparent;
  }

  /* Reduced motion */
  @media (prefers-reduced-motion: reduce) {
    .toast-item.show,
    .toast-item.hide {
      animation: none;
    }
  }
`;/*! Copyright 2026 Fonticons, Inc. - https://webawesome.com/license */var Ai=class extends L{constructor(){super(...arguments);this.hasSlotController=new W(this,"icon"),this.localize=new B(this),this.animationFrame=null,this.startTime=null,this.isHovering=!1,this.isFocused=!1,this.timeLeft=100,this.variant="neutral",this.size="m",this.duration=5000,this.withIcon=!1,this.tick=()=>{if(!this.startTime)return;let o=performance.now()-this.startTime,i=Math.min(o/this.duration,1);if(this.timeLeft=100*(1-i),i<1)this.animationFrame=requestAnimationFrame(this.tick);else this.hide()},this.handlePointerEnter=(o)=>{if(o.pointerType==="mouse"||o.pointerType==="pen")this.isHovering=!0,this.pauseTimer()},this.handlePointerLeave=()=>{if(this.isHovering)this.isHovering=!1,this.resumeTimer()},this.handleFocusIn=()=>{this.isFocused=!0,this.pauseTimer()},this.handleFocusOut=()=>{this.isFocused=!1,this.resumeTimer()}}handleSizeChange(){j(this.localName,this.size)}connectedCallback(){super.connectedCallback(),this.addEventListener("pointerenter",this.handlePointerEnter),this.addEventListener("pointerleave",this.handlePointerLeave)}disconnectedCallback(){super.disconnectedCallback(),this.stopTimer(),this.removeEventListener("pointerenter",this.handlePointerEnter),this.removeEventListener("pointerleave",this.handlePointerLeave)}async startTimer(){let o=new ko;if(this.dispatchEvent(o),o.defaultPrevented)return;if(await this.updateComplete,await P(this.toastItemElement,"show"),this.dispatchEvent(new jo),this.duration>0&&Number.isFinite(this.duration))this.startTime=performance.now(),this.timeLeft=100,this.tick()}stopTimer(){if(this.animationFrame!==null)cancelAnimationFrame(this.animationFrame),this.animationFrame=null}async hide(){this.stopTimer();let o=new To;if(this.dispatchEvent(o),o.defaultPrevented)return;await P(this.toastItemElement,"hide"),this.dispatchEvent(new Io),this.remove()}handleCloseClick(){this.hide()}pauseTimer(){this.stopTimer(),this.timeLeft=100}resumeTimer(){if(!this.isHovering&&!this.isFocused&&this.duration>0)this.startTime=performance.now(),this.tick()}render(){let o=this.hasUpdated?this.hasSlotController.test("icon"):this.withIcon,i=this.duration>0;return h`
      <div
        part="toast-item"
        class=${Z({"toast-item":!0,"toast-item--has-icon":o,"toast-item--has-duration":i})}
      >
        <div part="accent" class="accent"></div>

        <div part="icon" class="icon">
          <slot name="icon"></slot>
        </div>

        <div part="content" class="content">
          <slot></slot>
        </div>

        <button
          part="close-button"
          class="close-button"
          type="button"
          aria-label=${this.localize.term("close")}
          @click=${this.handleCloseClick}
          @focusin=${this.handleFocusIn}
          @focusout=${this.handleFocusOut}
        >
          <wa-progress-ring
            part="progress-ring"
            exportparts="
              base:progress-ring__base,
              label:progress-ring__label,
              track:progress-ring__track,
              indicator:progress-ring__indicator
            "
            value=${this.timeLeft}
            aria-hidden="true"
          >
            <wa-icon
              part="close-icon"
              exportparts="svg:close-icon__svg"
              name="xmark"
              library="system"
              variant="solid"
            ></wa-icon>
          </wa-progress-ring>
        </button>
      </div>
    `}};Ai.css=[N4,Ti,I];f([Y(".toast-item")],Ai.prototype,"toastItemElement",2);f([J()],Ai.prototype,"timeLeft",2);f([t({reflect:!0})],Ai.prototype,"variant",2);f([t({reflect:!0})],Ai.prototype,"size",2);f([v("size")],Ai.prototype,"handleSizeChange",1);f([t({type:Number})],Ai.prototype,"duration",2);f([t({attribute:"with-icon",type:Boolean})],Ai.prototype,"withIcon",2);Ai=f([$("wa-toast-item")],Ai);/*! Copyright 2026 Fonticons, Inc. - https://webawesome.com/license *//*! Copyright 2026 Fonticons, Inc. - https://webawesome.com/license *//*! Copyright 2026 Fonticons, Inc. - https://webawesome.com/license *//*! Copyright 2026 Fonticons, Inc. - https://webawesome.com/license */var O4=class extends Event{constructor(o){super("wa-selection-change",{bubbles:!0,cancelable:!1,composed:!0});this.detail=o}};/*! Copyright 2026 Fonticons, Inc. - https://webawesome.com/license */var A4=class extends Event{constructor(){super("wa-lazy-change",{bubbles:!0,cancelable:!1,composed:!0})}};/*! Copyright 2026 Fonticons, Inc. - https://webawesome.com/license */var E4=class extends Event{constructor(){super("wa-lazy-load",{bubbles:!0,cancelable:!1,composed:!0})}};/*! Copyright 2026 Fonticons, Inc. - https://webawesome.com/license */var D4=class extends Event{constructor(){super("wa-expand",{bubbles:!0,cancelable:!1,composed:!0})}};/*! Copyright 2026 Fonticons, Inc. - https://webawesome.com/license */var k4=class extends Event{constructor(){super("wa-collapse",{bubbles:!0,cancelable:!1,composed:!0})}};/*! Copyright 2026 Fonticons, Inc. - https://webawesome.com/license */var T4=class extends Event{constructor(){super("wa-after-collapse",{bubbles:!0,cancelable:!1,composed:!0})}};/*! Copyright 2026 Fonticons, Inc. - https://webawesome.com/license */var j4=class extends Event{constructor(){super("wa-after-expand",{bubbles:!0,cancelable:!1,composed:!0})}};/*! Copyright 2026 Fonticons, Inc. - https://webawesome.com/license */var I4=F`
  :host {
    /* Private - set by the component to control indentation depth */
    --indent: 0px;
    --show-duration: var(--wa-transition-normal);
    --hide-duration: var(--wa-transition-normal);

    display: block;
    color: var(--wa-color-text-normal);
    outline: 0;
    z-index: 0;
  }

  :host(:focus) {
    outline: none;
  }

  slot:not([name])::slotted(wa-icon) {
    margin-inline-end: 0.5em;
  }

  .tree-item {
    position: relative;
    display: flex;
    align-items: stretch;
    flex-direction: column;
    cursor: default;
    user-select: none;
    -webkit-user-select: none;
  }

  .checkbox {
    line-height: var(--wa-form-control-value-line-height);
    pointer-events: none;
  }

  .expand-button,
  .checkbox,
  .label {
    font-family: inherit;
    font-size: inherit;
    font-weight: inherit;
  }

  .checkbox::part(base) {
    display: flex;
    align-items: center;
  }

  .indentation {
    display: block;
    width: var(--indent);
    flex-shrink: 0;
  }

  .expand-button {
    display: flex;
    align-items: center;
    justify-content: center;
    color: var(--wa-color-text-quiet);
    width: 2em;
    height: 2em;
    flex-shrink: 0;
    cursor: pointer;
  }

  .expand-button {
    transition: rotate var(--wa-transition-normal) var(--wa-transition-easing);
  }

  .tree-item-expanded .expand-button {
    rotate: 90deg;
  }

  .tree-item-expanded:dir(rtl) .expand-button {
    rotate: -90deg;
  }

  .tree-item-expanded:not(.tree-item-loading) slot[name='expand-icon'],
  .tree-item:not(.tree-item-expanded) slot[name='collapse-icon'] {
    display: none;
  }

  .tree-item:not(.tree-item-has-expand-button):not(.tree-item-loading) .expand-icon-slot {
    display: none;
  }

  .tree-item:not(.tree-item-has-expand-button):not(.tree-item-loading) .expand-button {
    cursor: default;
  }

  .tree-item-loading .expand-icon-slot wa-icon {
    display: none;
  }

  .expand-button-visible {
    cursor: pointer;
  }

  .item {
    display: flex;
    align-items: center;
    border-inline-start: solid 0.1875em transparent;
  }

  :host([disabled]) .item {
    opacity: 0.5;
    outline: none;
    cursor: not-allowed;
  }

  :host(:focus-visible) .item {
    outline: var(--wa-focus-ring);
    outline-offset: var(--wa-focus-ring-offset);
    z-index: 2;
  }

  :host(:not([aria-disabled='true'])) .tree-item-selected .item {
    background-color: var(--wa-color-neutral-fill-quiet);
    border-inline-start-color: var(--wa-color-brand-fill-loud);
  }

  :host(:not([aria-disabled='true'])) .expand-button {
    color: var(--wa-color-text-quiet);
  }

  .label {
    display: flex;
    align-items: center;
    transition: color var(--wa-transition-normal) var(--wa-transition-easing);
  }

  .children {
    display: block;
  }

  /* Indentation lines */
  .children {
    position: relative;
  }

  .children::before {
    content: '';
    position: absolute;
    top: var(--indent-guide-offset);
    bottom: var(--indent-guide-offset);
    inset-inline-start: calc(0.1875em + var(--indent) + 1em - (var(--indent-guide-width) / 2));
    border-inline-end: var(--indent-guide-width) var(--indent-guide-style) var(--indent-guide-color);
    z-index: 1;
  }

  @media (forced-colors: active) {
    :host(:not([aria-disabled='true'])) .tree-item-selected .item {
      outline: dashed 1px SelectedItem;
    }
  }
`;class W0 extends Event{constructor(o,i,r,a){super("context-request",{bubbles:!0,composed:!0});this.context=o,this.contextTarget=i,this.callback=r,this.subscribe=a??!1}}function $a(o){return o}class jr{constructor(o,i,r,a){if(this.subscribe=!1,this.provided=!1,this.value=void 0,this._callback=(n,w)=>{if(this.unsubscribe){if(this.unsubscribe!==w)this.provided=!1,this.unsubscribe();if(!this.subscribe)this.unsubscribe()}if(this.value=n,this.host.requestUpdate(),!this.provided||this.subscribe){if(this.provided=!0,this.callback)this.callback(n,w)}this.unsubscribe=w},this.host=o,i.context!==void 0){let n=i;this.context=n.context,this.callback=n.callback,this.subscribe=n.subscribe??!1}else this.context=i,this.callback=r,this.subscribe=a??!1;this.host.addController(this)}hostConnected(){this.dispatchRequest()}hostDisconnected(){if(this.unsubscribe)this.unsubscribe(),this.unsubscribe=void 0}dispatchRequest(){this.host.dispatchEvent(new W0(this.context,this.host,this._callback,this.subscribe))}}class Ya{get value(){return this._value}set value(o){this.setValue(o)}setValue(o,i=!1){let r=i||!Object.is(o,this._value);if(this._value=o,r)this.updateObservers()}constructor(o){if(this.subscriptions=new Map,this.updateObservers=()=>{for(let[i,{disposer:r}]of this.subscriptions)i(this._value,r)},o!==void 0)this.value=o}addCallback(o,i,r){if(!r){o(this.value);return}if(!this.subscriptions.has(o))this.subscriptions.set(o,{disposer:()=>{this.subscriptions.delete(o)},consumerHost:i});let{disposer:a}=this.subscriptions.get(o);o(this.value,a)}clearCallbacks(){this.subscriptions.clear()}}class S4 extends Event{constructor(o,i){super("context-provider",{bubbles:!0,composed:!0});this.context=o,this.contextTarget=i}}class Ir extends Ya{constructor(o,i,r){super(i.context!==void 0?i.initialValue:r);if(this.onContextRequest=(a)=>{if(a.context!==this.context)return;let n=a.contextTarget??a.composedPath()[0];if(n===this.host)return;a.stopPropagation(),this.addCallback(a.callback,n,a.subscribe)},this.onProviderRequest=(a)=>{if(a.context!==this.context)return;if((a.contextTarget??a.composedPath()[0])===this.host)return;let w=new Set;for(let[b,{consumerHost:c}]of this.subscriptions){if(w.has(b))continue;w.add(b),c.dispatchEvent(new W0(this.context,c,b,!0))}a.stopPropagation()},this.host=o,i.context!==void 0)this.context=i.context;else this.context=i;this.attachListeners(),this.host.addController?.(this)}attachListeners(){this.host.addEventListener("context-request",this.onContextRequest),this.host.addEventListener("context-provider",this.onProviderRequest)}hostConnected(){this.host.dispatchEvent(new S4(this.context,this.host))}}function qa({context:o}){return(i,r)=>{let a=new WeakMap;if(typeof r==="object")return{get(){return i.get.call(this)},set(n){return a.get(this).setValue(n),i.set.call(this,n)},init(n){return a.set(this,new Ir(this,{context:o,initialValue:n})),n}};else{i.constructor.addInitializer((b)=>{a.set(b,new Ir(b,{context:o}))});let n=Object.getOwnPropertyDescriptor(i,r),w;if(n===void 0){let b=new WeakMap;w={get(){return b.get(this)},set(c){a.get(this).setValue(c),b.set(this,c)},configurable:!0,enumerable:!0}}else{let b=n.set;w={...n,set(c){a.get(this).setValue(c),b?.call(this,c)}}}Object.defineProperty(i,r,w);return}}}function La({context:o,subscribe:i}){return(r,a)=>{if(typeof a==="object")a.addInitializer(function(){new jr(this,{context:o,callback:(n)=>{r.set.call(this,n)},subscribe:i})});else r.constructor.addInitializer((n)=>{new jr(n,{context:o,callback:(w)=>{n[a]=w},subscribe:i})})}}/*! Copyright 2026 Fonticons, Inc. - https://webawesome.com/license */var Ua=$a("wa-tree-item"),e=class extends L{constructor(){super(...arguments);this.localize=new B(this),this.indeterminate=!1,this.isLeaf=!1,this.loading=!1,this.selectable=!1,this.expanded=!1,this.selected=!1,this.disabled=!1,this.lazy=!1,this._treeItemContext={depth:0,expanded:this.expanded},this._parentTreeContext=null,this.animationGeneration=0,this.tabIndex=-1,this.role="treeitem"}static isTreeItem(o){let i=o;return i&&(i.role==="treeitem"||i.getAttribute?.("role")==="treeitem")}connectedCallback(){if(super.connectedCallback(),this.setAttribute("role","treeitem"),this.setAttribute("tabIndex",this.tabIndex.toString()),this.isNestedItem()){if(this.setAttribute("slot","children"),!this._parentTreeContext?.expanded)this.expanded=!1}if(this._parentTreeContext)this._treeItemContext={depth:this._parentTreeContext.depth+1,expanded:this.expanded};this.updateIndentation()}firstUpdated(o){super.firstUpdated(o),this.childrenContainer.hidden=!this.expanded,this.childrenContainer.style.height=this.expanded?"auto":"0",this.isLeaf=!this.lazy&&this.getChildrenItems().length===0,this.handleExpandedChange()}async animateCollapse(o){this.dispatchEvent(new k4);let i=w0(getComputedStyle(this.childrenContainer).getPropertyValue("--hide-duration"));if(await Bi(this.childrenContainer,[{height:`${this.childrenContainer.scrollHeight}px`,opacity:"1",overflow:"hidden"},{height:"0",opacity:"0",overflow:"hidden"}],{duration:i,easing:"cubic-bezier(0.4, 0.0, 0.2, 1)"}),this.animationGeneration!==o)return;this.childrenContainer.hidden=!0,this.dispatchEvent(new T4)}isNestedItem(){if(this._parentTreeContext!==null)return!0;let o=this.parentElement;return!!o&&e.isTreeItem(o)}updateIndentation(){let o=Math.max(this._treeItemContext?.depth||0,this.getDepth());this.setStyleProperty("--indent",`calc(${o} * var(--indent-size, 2em))`)}getDepth(){let o=0,i=this.parentElement;while(i){if(e.isTreeItem(i))o++;i=i.parentElement}return o}handleChildrenSlotChange(){this.loading=!1,this.isLeaf=!this.lazy&&this.getChildrenItems().length===0}willUpdate(o){if(o.has("selected")&&!o.has("indeterminate"))this.indeterminate=!1;super.willUpdate(o)}async animateExpand(o){this.dispatchEvent(new D4),this.childrenContainer.hidden=!1;let i=w0(getComputedStyle(this.childrenContainer).getPropertyValue("--show-duration"));if(await Bi(this.childrenContainer,[{height:"0",opacity:"0",overflow:"hidden"},{height:`${this.childrenContainer.scrollHeight}px`,opacity:"1",overflow:"hidden"}],{duration:i,easing:"cubic-bezier(0.4, 0.0, 0.2, 1)"}),this.animationGeneration!==o)return;this.childrenContainer.style.height="auto",this.dispatchEvent(new j4)}handleLoadingChange(){if(this.setAttribute("aria-busy",this.loading?"true":"false"),!this.loading)this.animateExpand(this.animationGeneration)}handleDisabledChange(){this.customStates.set("disabled",this.disabled),this.setAttribute("aria-disabled",this.disabled?"true":"false")}handleExpandedState(){this.customStates.set("expanded",this.expanded)}handleIndeterminateStateChange(){this.customStates.set("indeterminate",this.indeterminate)}handleSelectedChange(){this.customStates.set("selected",this.selected),this.setAttribute("aria-selected",this.selected?"true":"false")}handleExpandedChange(){if(!this.isLeaf)this.setAttribute("aria-expanded",this.expanded?"true":"false");else this.removeAttribute("aria-expanded")}handleExpandAnimation(){this.animationGeneration++;let o=this.animationGeneration;if(this.expanded)if(this.lazy)this.loading=!0,this.dispatchEvent(new E4);else this.animateExpand(o);else this.animateCollapse(o)}handleLazyChange(){this.dispatchEvent(new A4)}getChildrenItems({includeDisabled:o=!0}={}){return this.childrenSlot?[...this.childrenSlot.assignedElements({flatten:!0})].filter((i)=>e.isTreeItem(i)&&(o||!i.disabled)):[]}render(){let o=this.localize.dir()==="rtl",i=!this.loading&&(!this.isLeaf||this.lazy);return h`
      <div
        part="base tree-item"
        class="${Z({"tree-item":!0,"tree-item-expanded":this.expanded,"tree-item-selected":this.selected,"tree-item-leaf":this.isLeaf,"tree-item-loading":this.loading,"tree-item-has-expand-button":i})}"
      >
        <div class="item" part="item">
          <div class="indentation" part="indentation"></div>

          <div
            part="expand-button"
            class=${Z({"expand-button":!0,"expand-button-visible":i})}
            aria-hidden="true"
          >
            <slot class="expand-icon-slot" name="expand-icon">
              ${ei(this.loading,()=>h` <wa-spinner part="spinner" exportparts="base:spinner__base"></wa-spinner> `,()=>h`
                  <wa-icon name=${o?"chevron-left":"chevron-right"} library="system" variant="solid"></wa-icon>
                `)}
            </slot>
            <slot class="expand-icon-slot" name="collapse-icon">
              <wa-icon name=${o?"chevron-left":"chevron-right"} library="system" variant="solid"></wa-icon>
            </slot>
          </div>

          ${ei(this.selectable,()=>h`
              <wa-checkbox
                part="checkbox"
                exportparts="
                    base:checkbox__base,
                    control:checkbox__control,
                    checked-icon:checkbox__checked-icon,
                    indeterminate-icon:checkbox__indeterminate-icon,
                    label:checkbox__label
                  "
                class="checkbox"
                ?disabled="${this.disabled}"
                ?checked="${Oo(this.selected)}"
                ?indeterminate="${this.indeterminate}"
                tabindex="-1"
              ></wa-checkbox>
            `)}

          <slot class="label" part="label"></slot>
        </div>

        <div class="children" part="children" role="group" ?hidden=${!this.expanded&&!this.isConnected}>
          <slot name="children" @slotchange="${this.handleChildrenSlotChange}"></slot>
        </div>
      </div>
    `}};e.css=I4;f([J()],e.prototype,"indeterminate",2);f([J()],e.prototype,"isLeaf",2);f([J()],e.prototype,"loading",2);f([J()],e.prototype,"selectable",2);f([t({type:Boolean,reflect:!0})],e.prototype,"expanded",2);f([t({type:Boolean,reflect:!0})],e.prototype,"selected",2);f([t({type:Boolean,reflect:!0})],e.prototype,"disabled",2);f([t({type:Boolean,reflect:!0})],e.prototype,"lazy",2);f([qa({context:Ua})],e.prototype,"_treeItemContext",2);f([La({context:Ua,subscribe:!1})],e.prototype,"_parentTreeContext",2);f([Y("slot:not([name])")],e.prototype,"defaultSlot",2);f([Y("slot[name=children]")],e.prototype,"childrenSlot",2);f([Y(".item")],e.prototype,"itemElement",2);f([Y(".children")],e.prototype,"childrenContainer",2);f([Y(".expand-button slot")],e.prototype,"expandButtonSlot",2);f([t({reflect:!0,type:Number,attribute:"tabindex"})],e.prototype,"tabIndex",2);f([t({reflect:!0})],e.prototype,"role",2);f([v("loading",{waitUntilFirstUpdate:!0})],e.prototype,"handleLoadingChange",1);f([v("disabled")],e.prototype,"handleDisabledChange",1);f([v("expanded")],e.prototype,"handleExpandedState",1);f([v("indeterminate")],e.prototype,"handleIndeterminateStateChange",1);f([v("selected")],e.prototype,"handleSelectedChange",1);f([v("expanded",{waitUntilFirstUpdate:!0})],e.prototype,"handleExpandedChange",1);f([v("expanded",{waitUntilFirstUpdate:!0})],e.prototype,"handleExpandAnimation",1);f([v("lazy",{waitUntilFirstUpdate:!0})],e.prototype,"handleLazyChange",1);e=f([$("wa-tree-item")],e);e.disableWarning?.("change-in-update");/*! Copyright 2026 Fonticons, Inc. - https://webawesome.com/license */var R4=F`
  :host {
    /*
     * These are actually used by tree item, but we define them here so they can more easily be set and all tree items
     * stay consistent.
     */
    --indent-guide-color: var(--wa-color-surface-border);
    --indent-guide-offset: 0;
    --indent-guide-style: solid;
    --indent-guide-width: 0;
    --indent-size: 2em;

    display: block;
  }
`;/*! Copyright 2026 Fonticons, Inc. - https://webawesome.com/license */function C4(o,i=!1){function r(w){let b=w.getChildrenItems({includeDisabled:!1});if(b.length){let c=b.every((p)=>p.selected),m=b.every((p)=>!p.selected&&!p.indeterminate);w.selected=c,w.indeterminate=!c&&!m}}function a(w){let b=w.parentElement;if(e.isTreeItem(b))r(b),a(b)}function n(w){for(let b of w.getChildrenItems())b.selected=i?w.selected||b.selected:!b.disabled&&w.selected,n(b);if(i)r(w)}n(o),a(o)}var Ei=class extends L{constructor(){super();if(this.selection="single",this.clickTarget=null,this.localize=new B(this),this.tabIndex=0,this.role="tree",this.initTreeItem=(o)=>{o.updateComplete.then(()=>{o.selectable=this.selection==="multiple"||this.selection==="leaf-multiple"&&o.isLeaf,["expand","collapse"].filter((i)=>!!this.querySelector(`[slot="${i}-icon"]`)).forEach((i)=>{let r=o.querySelector(`[slot="${i}-icon"]`),a=this.getExpandButtonIcon(i);if(!a)return;if(r===null)o.append(a);else if(r.hasAttribute("data-default"))r.replaceWith(a)})})},this.handleTreeChanged=(o)=>{for(let i of o){let r=[...i.addedNodes].filter(e.isTreeItem),a=[...i.removedNodes].filter(e.isTreeItem);if(r.forEach(this.initTreeItem),this.lastFocusedItem&&a.includes(this.lastFocusedItem))this.lastFocusedItem=null}},this.handleFocusOut=(o)=>{let i=o.relatedTarget;if(!i||!this.contains(i))this.tabIndex=0},this.handleFocusIn=(o)=>{let i=o.target;if(o.target===this)this.focusItem(this.lastFocusedItem||this.getAllTreeItems()[0]);if(e.isTreeItem(i)&&!i.disabled){if(this.lastFocusedItem)this.lastFocusedItem.tabIndex=-1;this.lastFocusedItem=i,this.tabIndex=-1,i.tabIndex=0}},"addEventListener"in this)this.addEventListener("focusin",this.handleFocusIn),this.addEventListener("focusout",this.handleFocusOut),this.addEventListener("wa-lazy-change",this.handleSlotChange)}async connectedCallback(){if(super.connectedCallback(),typeof MutationObserver<"u")await this.updateComplete,this.mutationObserver=new MutationObserver(this.handleTreeChanged),this.mutationObserver.observe(this,{childList:!0,subtree:!0});this.setAttribute("tabindex","0"),this.setAttribute("role","tree")}disconnectedCallback(){super.disconnectedCallback(),this.mutationObserver?.disconnect()}getExpandButtonIcon(o){let r=(o==="expand"?this.expandedIconSlot:this.collapsedIconSlot).assignedElements({flatten:!0})[0];if(r){let a=r.cloneNode(!0);return[a,...a.querySelectorAll("[id]")].forEach((n)=>n.removeAttribute("id")),a.setAttribute("data-default",""),a.slot=`${o}-icon`,a}return null}selectItem(o){let i=[...this.selectedItems];if(this.selection==="multiple"){if(o.selected=!o.selected,o.lazy)o.expanded=!0;C4(o)}else if(this.selection==="leaf-multiple")if(o.isLeaf)o.selected=!o.selected;else o.expanded=!o.expanded;else if(this.selection==="single"||o.isLeaf){let a=this.getAllTreeItems();for(let n of a)n.selected=n===o}else if(this.selection==="leaf")o.expanded=!o.expanded;let r=this.selectedItems;if(i.length!==r.length||r.some((a)=>!i.includes(a)))Promise.all(r.map((a)=>a.updateComplete)).then(()=>{this.dispatchEvent(new O4({selection:r}))})}getAllTreeItems(){return[...this.querySelectorAll("wa-tree-item")]}focusItem(o){o?.focus()}handleKeyDown(o){if(!["ArrowDown","ArrowUp","ArrowRight","ArrowLeft","Home","End","Enter"," "].includes(o.key))return;if(o.composedPath().some((n)=>["input","textarea"].includes(n?.tagName?.toLowerCase())))return;let i=this.getFocusableItems(),r=this.matches(":dir(ltr)"),a=this.localize.dir()==="rtl";if(i.length>0){let n=i.findIndex((m)=>m.matches(":focus")),w=i[n];if(!w&&(o.key==="Enter"||o.key===" "))return;o.preventDefault();let b=(m)=>{let p=i[D(m,0,i.length-1)];this.focusItem(p)},c=(m)=>{w.expanded=m};if(o.key==="ArrowDown")b(n+1);else if(o.key==="ArrowUp")b(n-1);else if(r&&o.key==="ArrowRight"||a&&o.key==="ArrowLeft")if(!w||w.disabled||w.expanded||w.isLeaf&&!w.lazy)b(n+1);else c(!0);else if(r&&o.key==="ArrowLeft"||a&&o.key==="ArrowRight")if(!w||w.disabled||w.isLeaf||!w.expanded)b(n-1);else c(!1);else if(o.key==="Home")b(0);else if(o.key==="End")b(i.length-1);else if(o.key==="Enter"||o.key===" "){if(w&&!w.disabled)this.selectItem(w)}}}handleClick(o){let i=o.target,r=i.closest("wa-tree-item"),a=o.composedPath().some((n)=>n?.classList?.contains("expand-button"));if(!r||r.disabled||i!==this.clickTarget)return;if(a)r.expanded=!r.expanded;else this.selectItem(r)}handleMouseDown(o){this.clickTarget=o.target}handleSlotChange(){this.getAllTreeItems().forEach(this.initTreeItem)}async handleSelectionChange(){let o=this.selection==="multiple",i=this.selection==="leaf-multiple",r=this.getAllTreeItems();this.setAttribute("aria-multiselectable",o||i?"true":"false");for(let a of r)a.updateComplete.then(()=>{a.selectable=o||i&&a.isLeaf});if(o)await this.updateComplete,[...this.querySelectorAll(":scope > wa-tree-item")].forEach((a)=>{a.updateComplete.then(()=>{C4(a,!0)})})}get selectedItems(){let o=this.getAllTreeItems(),i=(r)=>r.selected;return o.filter(i)}getFocusableItems(){let o=this.getAllTreeItems(),i=new Set;return o.filter((r)=>{if(r.disabled)return!1;let a=r.parentElement?.closest("[role=treeitem]");if(a&&(!a.expanded||a.loading||i.has(a)))i.add(r);return!i.has(r)})}render(){return h`
      <div
        part="base tree"
        class="tree"
        @click=${this.handleClick}
        @keydown=${this.handleKeyDown}
        @mousedown=${this.handleMouseDown}
      >
        <slot @slotchange=${this.handleSlotChange}></slot>
        <span hidden aria-hidden="true"><slot name="expand-icon"></slot></span>
        <span hidden aria-hidden="true"><slot name="collapse-icon"></slot></span>
      </div>
    `}};Ei.css=R4;f([Y("slot:not([name])")],Ei.prototype,"defaultSlot",2);f([Y("slot[name=expand-icon]")],Ei.prototype,"expandedIconSlot",2);f([Y("slot[name=collapse-icon]")],Ei.prototype,"collapsedIconSlot",2);f([t()],Ei.prototype,"selection",2);f([t({attribute:"tabindex",reflect:!0,type:Number})],Ei.prototype,"tabIndex",2);f([t({reflect:!0})],Ei.prototype,"role",2);f([v("selection")],Ei.prototype,"handleSelectionChange",1);Ei=f([$("wa-tree")],Ei);/*! Copyright 2026 Fonticons, Inc. - https://webawesome.com/license *//*! Copyright 2026 Fonticons, Inc. - https://webawesome.com/license *//*! Copyright 2026 Fonticons, Inc. - https://webawesome.com/license */var P4=F`
  :host {
    display: block;
    position: relative;
    aspect-ratio: 16 / 9;
    width: 100%;
    overflow: hidden;
    border-radius: var(--wa-border-radius-m);
  }

  #frame-container {
    position: absolute;
    top: 0;
    left: 0;
    width: calc(100% / var(--zoom));
    height: calc(100% / var(--zoom));
    transform: scale(var(--zoom));
    transform-origin: 0 0;
  }

  #iframe {
    width: 100%;
    height: 100%;
    border: none;
    border-radius: inherit;
    /* Prevent the iframe from being selected, e.g. by a double click. Doesn't affect selection withing the iframe. */
    user-select: none;
    -webkit-user-select: none;
  }

  #controls {
    display: flex;
    position: absolute;
    bottom: 0.5em;
    align-items: center;
    font-weight: var(--wa-font-weight-semibold);
    padding: 0.25em 0.5em;
    gap: 0.5em;
    border-radius: var(--wa-border-radius-s);
    background: #000b;
    color: white;
    font-size: min(12px, 0.75em);
    user-select: none;
    -webkit-user-select: none;

    &:dir(ltr) {
      right: 0.5em;
    }

    &:dir(rtl) {
      left: 0.5em;
    }

    button {
      display: flex;
      align-items: center;
      padding: 0.25em;
      border: none;
      background: none;
      color: inherit;
      cursor: pointer;

      &:focus {
        outline: none;
      }

      &:focus-visible {
        outline: var(--wa-focus-ring);
        outline-offset: var(--wa-focus-ring-offset);
      }

      &:disabled {
        cursor: not-allowed;
        opacity: 0.5;
      }
    }

    span {
      min-width: 4.5ch; /* extra space so numbers don't shift */
      font-variant-numeric: tabular-nums;
      text-align: center;
    }
  }
`;/*! Copyright 2026 Fonticons, Inc. - https://webawesome.com/license */var E6=class{constructor(o,i){if(this.handleTransitionEnd=()=>{this.onThemeChange()},(this.host=o).addController(this),this.onThemeChange=i,typeof document<"u")this.hiddenElement=document.createElement("div"),this.hiddenElement.setAttribute("aria-hidden","true"),Object.assign(this.hiddenElement.style,{position:"absolute",width:"0",height:"0",overflow:"hidden",pointerEvents:"none",opacity:"0",color:"var(--wa-color-surface-default, transparent)",transition:"color 0.001ms"})}hostConnected(){if(this.hiddenElement)this.host.appendChild(this.hiddenElement),this.hiddenElement.addEventListener("transitionend",this.handleTransitionEnd)}hostDisconnected(){if(this.hiddenElement)this.hiddenElement.removeEventListener("transitionend",this.handleTransitionEnd),this.hiddenElement.remove()}},Co=class extends L{constructor(){super();this.localize=new B(this),this.themeObserver=!M?new MutationObserver(()=>this.syncTheme()):null,this.availableZoomLevels=[],this.allowfullscreen=!1,this.loading="eager",this.zoom=1,this.zoomLevels="25% 50% 75% 100% 125% 150% 175% 200%",this.withoutControls=!1,this.withoutInteraction=!1,this.withThemeSync=!1,new E6(this,()=>this.syncTheme())}get contentWindow(){return this.iframe?.contentWindow||null}get contentDocument(){return this.iframe?.contentDocument||null}parseZoomLevels(o){let i=U0(o),r=[];for(let a of i){let n;if(a.endsWith("%")){let w=parseFloat(a.slice(0,-1));if(!isNaN(w))n=Math.max(0,w/100);else continue}else if(n=parseFloat(a),!isNaN(n))n=Math.max(0,n);else continue;r.push(n)}return[...new Set(r)].sort((a,n)=>a-n)}getCurrentZoomIndex(){if(this.availableZoomLevels.length===0)return-1;let o=0,i=Math.abs(this.availableZoomLevels[0]-this.zoom);for(let r=1;r<this.availableZoomLevels.length;r++){let a=Math.abs(this.availableZoomLevels[r]-this.zoom);if(a<i)i=a,o=r}return o}isZoomInDisabled(){if(this.availableZoomLevels.length===0)return!1;return this.getCurrentZoomIndex()>=this.availableZoomLevels.length-1}isZoomOutDisabled(){if(this.availableZoomLevels.length===0)return!1;return this.getCurrentZoomIndex()<=0}willUpdate(o){if(o.has("zoom"))this.setStyleProperty("--zoom",`${this.zoom}`);super.willUpdate(o)}updated(o){if(o.has("zoomLevels")){if(this.availableZoomLevels=this.parseZoomLevels(this.zoomLevels),this.availableZoomLevels.length>0){let i=this.getCurrentZoomIndex();if(Math.abs(this.availableZoomLevels[i]-this.zoom)>0.001)this.zoom=this.availableZoomLevels[i]}}if(o.has("withThemeSync"))if(this.withThemeSync)this.themeObserver?.observe(document.documentElement,{attributes:!0,attributeFilter:["class"]}),this.syncTheme();else this.themeObserver?.disconnect();super.updated(o)}zoomIn(){if(this.availableZoomLevels.length===0){this.zoom=Math.min(this.zoom+0.05,2);return}let o=this.getCurrentZoomIndex();if(o<this.availableZoomLevels.length-1)this.zoom=this.availableZoomLevels[o+1]}zoomOut(){if(this.availableZoomLevels.length===0){this.zoom=Math.max(this.zoom-0.05,0);return}let o=this.getCurrentZoomIndex();if(o>0)this.zoom=this.availableZoomLevels[o-1]}disconnectedCallback(){super.disconnectedCallback(),this.themeObserver?.disconnect()}syncTheme(){if(!this.withThemeSync)return;try{let o=this.contentDocument?.documentElement;if(!o)return;let i=["wa-theme-","wa-brand-","wa-palette-"],r=new Set,a=new Set,n=this,w=!1;while(n){if(!w){if(n.classList.contains("wa-dark"))r.add("wa-dark"),w=!0;else if(n.classList.contains("wa-light"))r.add("wa-light"),w=!0}for(let c of n.classList)if(i.some((m)=>c.startsWith(m)))a.add(c);n=n.parentElement}o.classList.toggle("wa-dark",r.has("wa-dark")),o.classList.toggle("wa-light",r.has("wa-light"));let b=Array.from(o.classList).filter((c)=>i.some((m)=>c.startsWith(m)));o.classList.remove(...b),o.classList.add(...a)}catch{}}handleLoad(){if(this.withThemeSync)this.syncTheme();this.dispatchEvent(new Event("load",{bubbles:!1,cancelable:!1,composed:!0}))}handleError(){this.dispatchEvent(new Event("error",{bubbles:!1,cancelable:!1,composed:!0}))}render(){return h`
      <div id="frame-container">
        <iframe
          id="iframe"
          part="iframe"
          ?inert=${this.withoutInteraction}
          ?allowfullscreen=${this.allowfullscreen}
          loading=${this.loading}
          referrerpolicy=${this.referrerpolicy}
          sandbox=${Q(this.sandbox??void 0)}
          src=${Q(this.src??void 0)}
          srcdoc=${Q(this.srcdoc??void 0)}
          @load=${this.handleLoad}
          @error=${this.handleError}
        ></iframe>
      </div>

      ${!this.withoutControls?h`
            <div id="controls" part="controls">
              <button
                part="zoom-out-button"
                aria-label=${this.localize.term("zoomOut")}
                @click=${this.zoomOut}
                ?disabled=${this.isZoomOutDisabled()}
              >
                <slot name="zoom-out-icon">
                  <wa-icon name="minus" label="Zoom out"></wa-icon>
                </slot>
              </button>
              <span>${this.localize.number(this.zoom,{style:"percent",maximumFractionDigits:1})}</span>
              <button
                part="zoom-in-button"
                aria-label=${this.localize.term("zoomIn")}
                @click=${this.zoomIn}
                ?disabled=${this.isZoomInDisabled()}
              >
                <slot name="zoom-in-icon">
                  <wa-icon name="plus" label="Zoom in"></wa-icon>
                </slot>
              </button>
            </div>
          `:""}
    `}};Co.css=P4;f([J()],Co.prototype,"availableZoomLevels",2);f([Y("#iframe")],Co.prototype,"iframe",2);f([t()],Co.prototype,"src",2);f([t()],Co.prototype,"srcdoc",2);f([t({type:Boolean})],Co.prototype,"allowfullscreen",2);f([t()],Co.prototype,"loading",2);f([t()],Co.prototype,"referrerpolicy",2);f([t()],Co.prototype,"sandbox",2);f([t({type:Number,reflect:!0})],Co.prototype,"zoom",2);f([t({attribute:"zoom-levels"})],Co.prototype,"zoomLevels",2);f([t({type:Boolean,attribute:"without-controls",reflect:!0})],Co.prototype,"withoutControls",2);f([t({type:Boolean,attribute:"without-interaction",reflect:!0})],Co.prototype,"withoutInteraction",2);f([t({type:Boolean,attribute:"with-theme-sync",reflect:!0})],Co.prototype,"withThemeSync",2);Co=f([$("wa-zoomable-frame")],Co);/*! Copyright 2026 Fonticons, Inc. - https://webawesome.com/license */s1("https://cdn.jsdelivr.net/npm/@fortawesome/fontawesome-free@7.3.1/svgs");export{sn as unregisterIconLibrary,Xw as stopLoader,Uw as startLoader,on as setKitCode,s1 as setIconPath,Jb as setDefaultIconFamily,d1 as setBasePath,Lw as serialize,rr as registerTranslation,Xb as registerIconLibrary,Zw as preventTurboFouce,z1 as getKitCode,u1 as getIconPath,cn as getIconFolder,$b as getEasingNames,$1 as getDefaultIconFamily,g1 as getBasePath,Fb as getAnimationNames,i2 as discover,qw as allDefined};
