/*! For license information please see 5.ba2a2cbef316158020c4.manager.bundle.js.LICENSE.txt */
(window.webpackJsonp=window.webpackJsonp||[]).push([[5],{831:function(module,exports,__webpack_require__){"use strict";var $=__webpack_require__(18),flattenIntoArray=__webpack_require__(832),toObject=__webpack_require__(61),toLength=__webpack_require__(58),toInteger=__webpack_require__(132),arraySpeciesCreate=__webpack_require__(275);$({target:"Array",proto:!0},{flat:function flat(){var depthArg=arguments.length?arguments[0]:void 0,O=toObject(this),sourceLen=toLength(O.length),A=arraySpeciesCreate(O,0);return A.length=flattenIntoArray(A,O,O,sourceLen,0,void 0===depthArg?1:toInteger(depthArg)),A}})},832:function(module,exports,__webpack_require__){"use strict";var isArray=__webpack_require__(133),toLength=__webpack_require__(58),bind=__webpack_require__(113),flattenIntoArray=function(target,original,source,sourceLen,start,depth,mapper,thisArg){for(var element,targetIndex=start,sourceIndex=0,mapFn=!!mapper&&bind(mapper,thisArg,3);sourceIndex<sourceLen;){if(sourceIndex in source){if(element=mapFn?mapFn(source[sourceIndex],sourceIndex,original):source[sourceIndex],depth>0&&isArray(element))targetIndex=flattenIntoArray(target,original,element,toLength(element.length),targetIndex,depth-1)-1;else{if(targetIndex>=9007199254740991)throw TypeError("Exceed the acceptable array length");target[targetIndex]=element}targetIndex++}sourceIndex++}return targetIndex};module.exports=flattenIntoArray},833:function(module,__webpack_exports__,__webpack_require__){"use strict";__webpack_require__.d(__webpack_exports__,"b",(function(){return es2015_FigspecFrameViewer})),__webpack_require__.d(__webpack_exports__,"a",(function(){return es2015_FigspecFileViewer}));const isCEPolyfill="undefined"!=typeof window&&null!=window.customElements&&void 0!==window.customElements.polyfillWrapFlushCallback,removeNodes=(container,start,end=null)=>{for(;start!==end;){const n=start.nextSibling;container.removeChild(start),start=n}},marker=`{{lit-${String(Math.random()).slice(2)}}}`,nodeMarker=`\x3c!--${marker}--\x3e`,markerRegex=new RegExp(`${marker}|${nodeMarker}`);class Template{constructor(result,element){this.parts=[],this.element=element;const nodesToRemove=[],stack=[],walker=document.createTreeWalker(element.content,133,null,!1);let lastPartIndex=0,index=-1,partIndex=0;const{strings:strings,values:{length:length}}=result;for(;partIndex<length;){const node=walker.nextNode();if(null!==node){if(index++,1===node.nodeType){if(node.hasAttributes()){const attributes=node.attributes,{length:length}=attributes;let count=0;for(let i=0;i<length;i++)endsWith(attributes[i].name,"$lit$")&&count++;for(;count-- >0;){const stringForPart=strings[partIndex],name=lastAttributeNameRegex.exec(stringForPart)[2],attributeLookupName=name.toLowerCase()+"$lit$",attributeValue=node.getAttribute(attributeLookupName);node.removeAttribute(attributeLookupName);const statics=attributeValue.split(markerRegex);this.parts.push({type:"attribute",index:index,name:name,strings:statics}),partIndex+=statics.length-1}}"TEMPLATE"===node.tagName&&(stack.push(node),walker.currentNode=node.content)}else if(3===node.nodeType){const data=node.data;if(data.indexOf(marker)>=0){const parent=node.parentNode,strings=data.split(markerRegex),lastIndex=strings.length-1;for(let i=0;i<lastIndex;i++){let insert,s=strings[i];if(""===s)insert=createMarker();else{const match=lastAttributeNameRegex.exec(s);null!==match&&endsWith(match[2],"$lit$")&&(s=s.slice(0,match.index)+match[1]+match[2].slice(0,-"$lit$".length)+match[3]),insert=document.createTextNode(s)}parent.insertBefore(insert,node),this.parts.push({type:"node",index:++index})}""===strings[lastIndex]?(parent.insertBefore(createMarker(),node),nodesToRemove.push(node)):node.data=strings[lastIndex],partIndex+=lastIndex}}else if(8===node.nodeType)if(node.data===marker){const parent=node.parentNode;null!==node.previousSibling&&index!==lastPartIndex||(index++,parent.insertBefore(createMarker(),node)),lastPartIndex=index,this.parts.push({type:"node",index:index}),null===node.nextSibling?node.data="":(nodesToRemove.push(node),index--),partIndex++}else{let i=-1;for(;-1!==(i=node.data.indexOf(marker,i+1));)this.parts.push({type:"node",index:-1}),partIndex++}}else walker.currentNode=stack.pop()}for(const n of nodesToRemove)n.parentNode.removeChild(n)}}const endsWith=(str,suffix)=>{const index=str.length-suffix.length;return index>=0&&str.slice(index)===suffix},isTemplatePartActive=part=>-1!==part.index,createMarker=()=>document.createComment(""),lastAttributeNameRegex=/([ \x09\x0a\x0c\x0d])([^\0-\x1F\x7F-\x9F "'>=/]+)([ \x09\x0a\x0c\x0d]*=[ \x09\x0a\x0c\x0d]*(?:[^ \x09\x0a\x0c\x0d"'`<>=]*|"[^"]*|'[^']*))$/;function removeNodesFromTemplate(template,nodesToRemove){const{element:{content:content},parts:parts}=template,walker=document.createTreeWalker(content,133,null,!1);let partIndex=nextActiveIndexInTemplateParts(parts),part=parts[partIndex],nodeIndex=-1,removeCount=0;const nodesToRemoveInTemplate=[];let currentRemovingNode=null;for(;walker.nextNode();){nodeIndex++;const node=walker.currentNode;for(node.previousSibling===currentRemovingNode&&(currentRemovingNode=null),nodesToRemove.has(node)&&(nodesToRemoveInTemplate.push(node),null===currentRemovingNode&&(currentRemovingNode=node)),null!==currentRemovingNode&&removeCount++;void 0!==part&&part.index===nodeIndex;)part.index=null!==currentRemovingNode?-1:part.index-removeCount,partIndex=nextActiveIndexInTemplateParts(parts,partIndex),part=parts[partIndex]}nodesToRemoveInTemplate.forEach((n=>n.parentNode.removeChild(n)))}const countNodes=node=>{let count=11===node.nodeType?0:1;const walker=document.createTreeWalker(node,133,null,!1);for(;walker.nextNode();)count++;return count},nextActiveIndexInTemplateParts=(parts,startIndex=-1)=>{for(let i=startIndex+1;i<parts.length;i++){const part=parts[i];if(isTemplatePartActive(part))return i}return-1};const directives=new WeakMap,isDirective=o=>"function"==typeof o&&directives.has(o),noChange={},nothing={};class template_instance_TemplateInstance{constructor(template,processor,options){this.__parts=[],this.template=template,this.processor=processor,this.options=options}update(values){let i=0;for(const part of this.__parts)void 0!==part&&part.setValue(values[i]),i++;for(const part of this.__parts)void 0!==part&&part.commit()}_clone(){const fragment=isCEPolyfill?this.template.element.content.cloneNode(!0):document.importNode(this.template.element.content,!0),stack=[],parts=this.template.parts,walker=document.createTreeWalker(fragment,133,null,!1);let part,partIndex=0,nodeIndex=0,node=walker.nextNode();for(;partIndex<parts.length;)if(part=parts[partIndex],isTemplatePartActive(part)){for(;nodeIndex<part.index;)nodeIndex++,"TEMPLATE"===node.nodeName&&(stack.push(node),walker.currentNode=node.content),null===(node=walker.nextNode())&&(walker.currentNode=stack.pop(),node=walker.nextNode());if("node"===part.type){const part=this.processor.handleTextExpression(this.options);part.insertAfterNode(node.previousSibling),this.__parts.push(part)}else this.__parts.push(...this.processor.handleAttributeExpressions(node,part.name,part.strings,this.options));partIndex++}else this.__parts.push(void 0),partIndex++;return isCEPolyfill&&(document.adoptNode(fragment),customElements.upgrade(fragment)),fragment}}const policy=window.trustedTypes&&trustedTypes.createPolicy("lit-html",{createHTML:s=>s}),commentMarker=` ${marker} `;class template_result_TemplateResult{constructor(strings,values,type,processor){this.strings=strings,this.values=values,this.type=type,this.processor=processor}getHTML(){const l=this.strings.length-1;let html="",isCommentBinding=!1;for(let i=0;i<l;i++){const s=this.strings[i],commentOpen=s.lastIndexOf("\x3c!--");isCommentBinding=(commentOpen>-1||isCommentBinding)&&-1===s.indexOf("--\x3e",commentOpen+1);const attributeMatch=lastAttributeNameRegex.exec(s);html+=null===attributeMatch?s+(isCommentBinding?commentMarker:nodeMarker):s.substr(0,attributeMatch.index)+attributeMatch[1]+attributeMatch[2]+"$lit$"+attributeMatch[3]+marker}return html+=this.strings[l],html}getTemplateElement(){const template=document.createElement("template");let value=this.getHTML();return void 0!==policy&&(value=policy.createHTML(value)),template.innerHTML=value,template}}class template_result_SVGTemplateResult extends template_result_TemplateResult{getHTML(){return`<svg>${super.getHTML()}</svg>`}getTemplateElement(){const template=super.getTemplateElement(),content=template.content,svgElement=content.firstChild;return content.removeChild(svgElement),((container,start,end=null,before=null)=>{for(;start!==end;){const n=start.nextSibling;container.insertBefore(start,before),start=n}})(content,svgElement.firstChild),template}}const isPrimitive=value=>null===value||!("object"==typeof value||"function"==typeof value),isIterable=value=>Array.isArray(value)||!(!value||!value[Symbol.iterator]);class AttributeCommitter{constructor(element,name,strings){this.dirty=!0,this.element=element,this.name=name,this.strings=strings,this.parts=[];for(let i=0;i<strings.length-1;i++)this.parts[i]=this._createPart()}_createPart(){return new parts_AttributePart(this)}_getValue(){const strings=this.strings,l=strings.length-1,parts=this.parts;if(1===l&&""===strings[0]&&""===strings[1]){const v=parts[0].value;if("symbol"==typeof v)return String(v);if("string"==typeof v||!isIterable(v))return v}let text="";for(let i=0;i<l;i++){text+=strings[i];const part=parts[i];if(void 0!==part){const v=part.value;if(isPrimitive(v)||!isIterable(v))text+="string"==typeof v?v:String(v);else for(const t of v)text+="string"==typeof t?t:String(t)}}return text+=strings[l],text}commit(){this.dirty&&(this.dirty=!1,this.element.setAttribute(this.name,this._getValue()))}}class parts_AttributePart{constructor(committer){this.value=void 0,this.committer=committer}setValue(value){value===noChange||isPrimitive(value)&&value===this.value||(this.value=value,isDirective(value)||(this.committer.dirty=!0))}commit(){for(;isDirective(this.value);){const directive=this.value;this.value=noChange,directive(this)}this.value!==noChange&&this.committer.commit()}}class parts_NodePart{constructor(options){this.value=void 0,this.__pendingValue=void 0,this.options=options}appendInto(container){this.startNode=container.appendChild(createMarker()),this.endNode=container.appendChild(createMarker())}insertAfterNode(ref){this.startNode=ref,this.endNode=ref.nextSibling}appendIntoPart(part){part.__insert(this.startNode=createMarker()),part.__insert(this.endNode=createMarker())}insertAfterPart(ref){ref.__insert(this.startNode=createMarker()),this.endNode=ref.endNode,ref.endNode=this.startNode}setValue(value){this.__pendingValue=value}commit(){if(null===this.startNode.parentNode)return;for(;isDirective(this.__pendingValue);){const directive=this.__pendingValue;this.__pendingValue=noChange,directive(this)}const value=this.__pendingValue;value!==noChange&&(isPrimitive(value)?value!==this.value&&this.__commitText(value):value instanceof template_result_TemplateResult?this.__commitTemplateResult(value):value instanceof Node?this.__commitNode(value):isIterable(value)?this.__commitIterable(value):value===nothing?(this.value=nothing,this.clear()):this.__commitText(value))}__insert(node){this.endNode.parentNode.insertBefore(node,this.endNode)}__commitNode(value){this.value!==value&&(this.clear(),this.__insert(value),this.value=value)}__commitText(value){const node=this.startNode.nextSibling,valueAsString="string"==typeof(value=null==value?"":value)?value:String(value);node===this.endNode.previousSibling&&3===node.nodeType?node.data=valueAsString:this.__commitNode(document.createTextNode(valueAsString)),this.value=value}__commitTemplateResult(value){const template=this.options.templateFactory(value);if(this.value instanceof template_instance_TemplateInstance&&this.value.template===template)this.value.update(value.values);else{const instance=new template_instance_TemplateInstance(template,value.processor,this.options),fragment=instance._clone();instance.update(value.values),this.__commitNode(fragment),this.value=instance}}__commitIterable(value){Array.isArray(this.value)||(this.value=[],this.clear());const itemParts=this.value;let itemPart,partIndex=0;for(const item of value)itemPart=itemParts[partIndex],void 0===itemPart&&(itemPart=new parts_NodePart(this.options),itemParts.push(itemPart),0===partIndex?itemPart.appendIntoPart(this):itemPart.insertAfterPart(itemParts[partIndex-1])),itemPart.setValue(item),itemPart.commit(),partIndex++;partIndex<itemParts.length&&(itemParts.length=partIndex,this.clear(itemPart&&itemPart.endNode))}clear(startNode=this.startNode){removeNodes(this.startNode.parentNode,startNode.nextSibling,this.endNode)}}class parts_BooleanAttributePart{constructor(element,name,strings){if(this.value=void 0,this.__pendingValue=void 0,2!==strings.length||""!==strings[0]||""!==strings[1])throw new Error("Boolean attributes can only contain a single expression");this.element=element,this.name=name,this.strings=strings}setValue(value){this.__pendingValue=value}commit(){for(;isDirective(this.__pendingValue);){const directive=this.__pendingValue;this.__pendingValue=noChange,directive(this)}if(this.__pendingValue===noChange)return;const value=!!this.__pendingValue;this.value!==value&&(value?this.element.setAttribute(this.name,""):this.element.removeAttribute(this.name),this.value=value),this.__pendingValue=noChange}}class PropertyCommitter extends AttributeCommitter{constructor(element,name,strings){super(element,name,strings),this.single=2===strings.length&&""===strings[0]&&""===strings[1]}_createPart(){return new PropertyPart(this)}_getValue(){return this.single?this.parts[0].value:super._getValue()}commit(){this.dirty&&(this.dirty=!1,this.element[this.name]=this._getValue())}}class PropertyPart extends parts_AttributePart{}let eventOptionsSupported=!1;(()=>{try{const options={get capture(){return eventOptionsSupported=!0,!1}};window.addEventListener("test",options,options),window.removeEventListener("test",options,options)}catch(_e){}})();class parts_EventPart{constructor(element,eventName,eventContext){this.value=void 0,this.__pendingValue=void 0,this.element=element,this.eventName=eventName,this.eventContext=eventContext,this.__boundHandleEvent=e=>this.handleEvent(e)}setValue(value){this.__pendingValue=value}commit(){for(;isDirective(this.__pendingValue);){const directive=this.__pendingValue;this.__pendingValue=noChange,directive(this)}if(this.__pendingValue===noChange)return;const newListener=this.__pendingValue,oldListener=this.value,shouldRemoveListener=null==newListener||null!=oldListener&&(newListener.capture!==oldListener.capture||newListener.once!==oldListener.once||newListener.passive!==oldListener.passive),shouldAddListener=null!=newListener&&(null==oldListener||shouldRemoveListener);shouldRemoveListener&&this.element.removeEventListener(this.eventName,this.__boundHandleEvent,this.__options),shouldAddListener&&(this.__options=getOptions(newListener),this.element.addEventListener(this.eventName,this.__boundHandleEvent,this.__options)),this.value=newListener,this.__pendingValue=noChange}handleEvent(event){"function"==typeof this.value?this.value.call(this.eventContext||this.element,event):this.value.handleEvent(event)}}const getOptions=o=>o&&(eventOptionsSupported?{capture:o.capture,passive:o.passive,once:o.once}:o.capture);function templateFactory(result){let templateCache=templateCaches.get(result.type);void 0===templateCache&&(templateCache={stringsArray:new WeakMap,keyString:new Map},templateCaches.set(result.type,templateCache));let template=templateCache.stringsArray.get(result.strings);if(void 0!==template)return template;const key=result.strings.join(marker);return template=templateCache.keyString.get(key),void 0===template&&(template=new Template(result,result.getTemplateElement()),templateCache.keyString.set(key,template)),templateCache.stringsArray.set(result.strings,template),template}const templateCaches=new Map,render_parts=new WeakMap;const defaultTemplateProcessor=new class default_template_processor_DefaultTemplateProcessor{handleAttributeExpressions(element,name,strings,options){const prefix=name[0];if("."===prefix){return new PropertyCommitter(element,name.slice(1),strings).parts}if("@"===prefix)return[new parts_EventPart(element,name.slice(1),options.eventContext)];if("?"===prefix)return[new parts_BooleanAttributePart(element,name.slice(1),strings)];return new AttributeCommitter(element,name,strings).parts}handleTextExpression(options){return new parts_NodePart(options)}};"undefined"!=typeof window&&(window.litHtmlVersions||(window.litHtmlVersions=[])).push("1.3.0");const lit_html_html=(strings,...values)=>new template_result_TemplateResult(strings,values,"html",defaultTemplateProcessor),svg=(strings,...values)=>new template_result_SVGTemplateResult(strings,values,"svg",defaultTemplateProcessor),getTemplateCacheKey=(type,scopeName)=>`${type}--${scopeName}`;let compatibleShadyCSSVersion=!0;void 0===window.ShadyCSS?compatibleShadyCSSVersion=!1:void 0===window.ShadyCSS.prepareTemplateDom&&(console.warn("Incompatible ShadyCSS version detected. Please update to at least @webcomponents/webcomponentsjs@2.0.2 and @webcomponents/shadycss@1.3.1."),compatibleShadyCSSVersion=!1);const shadyTemplateFactory=scopeName=>result=>{const cacheKey=getTemplateCacheKey(result.type,scopeName);let templateCache=templateCaches.get(cacheKey);void 0===templateCache&&(templateCache={stringsArray:new WeakMap,keyString:new Map},templateCaches.set(cacheKey,templateCache));let template=templateCache.stringsArray.get(result.strings);if(void 0!==template)return template;const key=result.strings.join(marker);if(template=templateCache.keyString.get(key),void 0===template){const element=result.getTemplateElement();compatibleShadyCSSVersion&&window.ShadyCSS.prepareTemplateDom(element,scopeName),template=new Template(result,element),templateCache.keyString.set(key,template)}return templateCache.stringsArray.set(result.strings,template),template},TEMPLATE_TYPES=["html","svg"],shadyRenderSet=new Set,prepareTemplateStyles=(scopeName,renderedDOM,template)=>{shadyRenderSet.add(scopeName);const templateElement=template?template.element:document.createElement("template"),styles=renderedDOM.querySelectorAll("style"),{length:length}=styles;if(0===length)return void window.ShadyCSS.prepareTemplateStyles(templateElement,scopeName);const condensedStyle=document.createElement("style");for(let i=0;i<length;i++){const style=styles[i];style.parentNode.removeChild(style),condensedStyle.textContent+=style.textContent}(scopeName=>{TEMPLATE_TYPES.forEach((type=>{const templates=templateCaches.get(getTemplateCacheKey(type,scopeName));void 0!==templates&&templates.keyString.forEach((template=>{const{element:{content:content}}=template,styles=new Set;Array.from(content.querySelectorAll("style")).forEach((s=>{styles.add(s)})),removeNodesFromTemplate(template,styles)}))}))})(scopeName);const content=templateElement.content;template?function insertNodeIntoTemplate(template,node,refNode=null){const{element:{content:content},parts:parts}=template;if(null==refNode)return void content.appendChild(node);const walker=document.createTreeWalker(content,133,null,!1);let partIndex=nextActiveIndexInTemplateParts(parts),insertCount=0,walkerIndex=-1;for(;walker.nextNode();)for(walkerIndex++,walker.currentNode===refNode&&(insertCount=countNodes(node),refNode.parentNode.insertBefore(node,refNode));-1!==partIndex&&parts[partIndex].index===walkerIndex;){if(insertCount>0){for(;-1!==partIndex;)parts[partIndex].index+=insertCount,partIndex=nextActiveIndexInTemplateParts(parts,partIndex);return}partIndex=nextActiveIndexInTemplateParts(parts,partIndex)}}(template,condensedStyle,content.firstChild):content.insertBefore(condensedStyle,content.firstChild),window.ShadyCSS.prepareTemplateStyles(templateElement,scopeName);const style=content.querySelector("style");if(window.ShadyCSS.nativeShadow&&null!==style)renderedDOM.insertBefore(style.cloneNode(!0),renderedDOM.firstChild);else if(template){content.insertBefore(condensedStyle,content.firstChild);const removes=new Set;removes.add(condensedStyle),removeNodesFromTemplate(template,removes)}};window.JSCompiler_renameProperty=(prop,_obj)=>prop;const defaultConverter={toAttribute(value,type){switch(type){case Boolean:return value?"":null;case Object:case Array:return null==value?value:JSON.stringify(value)}return value},fromAttribute(value,type){switch(type){case Boolean:return null!==value;case Number:return null===value?null:Number(value);case Object:case Array:return JSON.parse(value)}return value}},notEqual=(value,old)=>old!==value&&(old==old||value==value),defaultPropertyDeclaration={attribute:!0,type:String,converter:defaultConverter,reflect:!1,hasChanged:notEqual};class UpdatingElement extends HTMLElement{constructor(){super(),this.initialize()}static get observedAttributes(){this.finalize();const attributes=[];return this._classProperties.forEach(((v,p)=>{const attr=this._attributeNameForProperty(p,v);void 0!==attr&&(this._attributeToPropertyMap.set(attr,p),attributes.push(attr))})),attributes}static _ensureClassProperties(){if(!this.hasOwnProperty(JSCompiler_renameProperty("_classProperties",this))){this._classProperties=new Map;const superProperties=Object.getPrototypeOf(this)._classProperties;void 0!==superProperties&&superProperties.forEach(((v,k)=>this._classProperties.set(k,v)))}}static createProperty(name,options=defaultPropertyDeclaration){if(this._ensureClassProperties(),this._classProperties.set(name,options),options.noAccessor||this.prototype.hasOwnProperty(name))return;const key="symbol"==typeof name?Symbol():`__${name}`,descriptor=this.getPropertyDescriptor(name,key,options);void 0!==descriptor&&Object.defineProperty(this.prototype,name,descriptor)}static getPropertyDescriptor(name,key,options){return{get(){return this[key]},set(value){const oldValue=this[name];this[key]=value,this.requestUpdateInternal(name,oldValue,options)},configurable:!0,enumerable:!0}}static getPropertyOptions(name){return this._classProperties&&this._classProperties.get(name)||defaultPropertyDeclaration}static finalize(){const superCtor=Object.getPrototypeOf(this);if(superCtor.hasOwnProperty("finalized")||superCtor.finalize(),this.finalized=!0,this._ensureClassProperties(),this._attributeToPropertyMap=new Map,this.hasOwnProperty(JSCompiler_renameProperty("properties",this))){const props=this.properties,propKeys=[...Object.getOwnPropertyNames(props),..."function"==typeof Object.getOwnPropertySymbols?Object.getOwnPropertySymbols(props):[]];for(const p of propKeys)this.createProperty(p,props[p])}}static _attributeNameForProperty(name,options){const attribute=options.attribute;return!1===attribute?void 0:"string"==typeof attribute?attribute:"string"==typeof name?name.toLowerCase():void 0}static _valueHasChanged(value,old,hasChanged=notEqual){return hasChanged(value,old)}static _propertyValueFromAttribute(value,options){const type=options.type,converter=options.converter||defaultConverter,fromAttribute="function"==typeof converter?converter:converter.fromAttribute;return fromAttribute?fromAttribute(value,type):value}static _propertyValueToAttribute(value,options){if(void 0===options.reflect)return;const type=options.type,converter=options.converter;return(converter&&converter.toAttribute||defaultConverter.toAttribute)(value,type)}initialize(){this._updateState=0,this._updatePromise=new Promise((res=>this._enableUpdatingResolver=res)),this._changedProperties=new Map,this._saveInstanceProperties(),this.requestUpdateInternal()}_saveInstanceProperties(){this.constructor._classProperties.forEach(((_v,p)=>{if(this.hasOwnProperty(p)){const value=this[p];delete this[p],this._instanceProperties||(this._instanceProperties=new Map),this._instanceProperties.set(p,value)}}))}_applyInstanceProperties(){this._instanceProperties.forEach(((v,p)=>this[p]=v)),this._instanceProperties=void 0}connectedCallback(){this.enableUpdating()}enableUpdating(){void 0!==this._enableUpdatingResolver&&(this._enableUpdatingResolver(),this._enableUpdatingResolver=void 0)}disconnectedCallback(){}attributeChangedCallback(name,old,value){old!==value&&this._attributeToProperty(name,value)}_propertyToAttribute(name,value,options=defaultPropertyDeclaration){const ctor=this.constructor,attr=ctor._attributeNameForProperty(name,options);if(void 0!==attr){const attrValue=ctor._propertyValueToAttribute(value,options);if(void 0===attrValue)return;this._updateState=8|this._updateState,null==attrValue?this.removeAttribute(attr):this.setAttribute(attr,attrValue),this._updateState=-9&this._updateState}}_attributeToProperty(name,value){if(8&this._updateState)return;const ctor=this.constructor,propName=ctor._attributeToPropertyMap.get(name);if(void 0!==propName){const options=ctor.getPropertyOptions(propName);this._updateState=16|this._updateState,this[propName]=ctor._propertyValueFromAttribute(value,options),this._updateState=-17&this._updateState}}requestUpdateInternal(name,oldValue,options){let shouldRequestUpdate=!0;if(void 0!==name){const ctor=this.constructor;options=options||ctor.getPropertyOptions(name),ctor._valueHasChanged(this[name],oldValue,options.hasChanged)?(this._changedProperties.has(name)||this._changedProperties.set(name,oldValue),!0!==options.reflect||16&this._updateState||(void 0===this._reflectingProperties&&(this._reflectingProperties=new Map),this._reflectingProperties.set(name,options))):shouldRequestUpdate=!1}!this._hasRequestedUpdate&&shouldRequestUpdate&&(this._updatePromise=this._enqueueUpdate())}requestUpdate(name,oldValue){return this.requestUpdateInternal(name,oldValue),this.updateComplete}async _enqueueUpdate(){this._updateState=4|this._updateState;try{await this._updatePromise}catch(e){}const result=this.performUpdate();return null!=result&&await result,!this._hasRequestedUpdate}get _hasRequestedUpdate(){return 4&this._updateState}get hasUpdated(){return 1&this._updateState}performUpdate(){if(!this._hasRequestedUpdate)return;this._instanceProperties&&this._applyInstanceProperties();let shouldUpdate=!1;const changedProperties=this._changedProperties;try{shouldUpdate=this.shouldUpdate(changedProperties),shouldUpdate?this.update(changedProperties):this._markUpdated()}catch(e){throw shouldUpdate=!1,this._markUpdated(),e}shouldUpdate&&(1&this._updateState||(this._updateState=1|this._updateState,this.firstUpdated(changedProperties)),this.updated(changedProperties))}_markUpdated(){this._changedProperties=new Map,this._updateState=-5&this._updateState}get updateComplete(){return this._getUpdateComplete()}_getUpdateComplete(){return this._updatePromise}shouldUpdate(_changedProperties){return!0}update(_changedProperties){void 0!==this._reflectingProperties&&this._reflectingProperties.size>0&&(this._reflectingProperties.forEach(((v,k)=>this._propertyToAttribute(k,this[k],v))),this._reflectingProperties=void 0),this._markUpdated()}updated(_changedProperties){}firstUpdated(_changedProperties){}}UpdatingElement.finalized=!0;const standardProperty=(options,element)=>"method"===element.kind&&element.descriptor&&!("value"in element.descriptor)?Object.assign(Object.assign({},element),{finisher(clazz){clazz.createProperty(element.key,options)}}):{kind:"field",key:Symbol(),placement:"own",descriptor:{},initializer(){"function"==typeof element.initializer&&(this[element.key]=element.initializer.call(this))},finisher(clazz){clazz.createProperty(element.key,options)}};function decorators_property(options){return(protoOrDescriptor,name)=>void 0!==name?((options,proto,name)=>{proto.constructor.createProperty(name,options)})(options,protoOrDescriptor,name):standardProperty(options,protoOrDescriptor)}const ElementProto=Element.prototype;ElementProto.msMatchesSelector||ElementProto.webkitMatchesSelector;const supportsAdoptingStyleSheets=window.ShadowRoot&&(void 0===window.ShadyCSS||window.ShadyCSS.nativeShadow)&&"adoptedStyleSheets"in Document.prototype&&"replace"in CSSStyleSheet.prototype,constructionToken=Symbol();class CSSResult{constructor(cssText,safeToken){if(safeToken!==constructionToken)throw new Error("CSSResult is not constructable. Use `unsafeCSS` or `css` instead.");this.cssText=cssText}get styleSheet(){return void 0===this._styleSheet&&(supportsAdoptingStyleSheets?(this._styleSheet=new CSSStyleSheet,this._styleSheet.replaceSync(this.cssText)):this._styleSheet=null),this._styleSheet}toString(){return this.cssText}}const css=(strings,...values)=>{const cssText=values.reduce(((acc,v,idx)=>acc+(value=>{if(value instanceof CSSResult)return value.cssText;if("number"==typeof value)return value;throw new Error(`Value passed to 'css' function must be a 'css' function result: ${value}. Use 'unsafeCSS' to pass non-literal values, but\n            take care to ensure page security.`)})(v)+strings[idx+1]),strings[0]);return new CSSResult(cssText,constructionToken)};(window.litElementVersions||(window.litElementVersions=[])).push("2.4.0");const renderNotImplemented={};class lit_element_LitElement extends UpdatingElement{static getStyles(){return this.styles}static _getUniqueStyles(){if(this.hasOwnProperty(JSCompiler_renameProperty("_styles",this)))return;const userStyles=this.getStyles();if(Array.isArray(userStyles)){const addStyles=(styles,set)=>styles.reduceRight(((set,s)=>Array.isArray(s)?addStyles(s,set):(set.add(s),set)),set),set=addStyles(userStyles,new Set),styles=[];set.forEach((v=>styles.unshift(v))),this._styles=styles}else this._styles=void 0===userStyles?[]:[userStyles];this._styles=this._styles.map((s=>{if(s instanceof CSSStyleSheet&&!supportsAdoptingStyleSheets){const cssText=Array.prototype.slice.call(s.cssRules).reduce(((css,rule)=>css+rule.cssText),"");return new CSSResult(String(cssText),constructionToken)}return s}))}initialize(){super.initialize(),this.constructor._getUniqueStyles(),this.renderRoot=this.createRenderRoot(),window.ShadowRoot&&this.renderRoot instanceof window.ShadowRoot&&this.adoptStyles()}createRenderRoot(){return this.attachShadow({mode:"open"})}adoptStyles(){const styles=this.constructor._styles;0!==styles.length&&(void 0===window.ShadyCSS||window.ShadyCSS.nativeShadow?supportsAdoptingStyleSheets?this.renderRoot.adoptedStyleSheets=styles.map((s=>s instanceof CSSStyleSheet?s:s.styleSheet)):this._needsShimAdoptedStyleSheets=!0:window.ShadyCSS.ScopingShim.prepareAdoptedCssText(styles.map((s=>s.cssText)),this.localName))}connectedCallback(){super.connectedCallback(),this.hasUpdated&&void 0!==window.ShadyCSS&&window.ShadyCSS.styleElement(this)}update(changedProperties){const templateResult=this.render();super.update(changedProperties),templateResult!==renderNotImplemented&&this.constructor.render(templateResult,this.renderRoot,{scopeName:this.localName,eventContext:this}),this._needsShimAdoptedStyleSheets&&(this._needsShimAdoptedStyleSheets=!1,this.constructor._styles.forEach((s=>{const style=document.createElement("style");style.textContent=s.cssText,this.renderRoot.appendChild(style)})))}render(){return renderNotImplemented}}lit_element_LitElement.finalized=!0,lit_element_LitElement.render=(result,container,options)=>{if(!options||"object"!=typeof options||!options.scopeName)throw new Error("The `scopeName` option is required.");const scopeName=options.scopeName,hasRendered=render_parts.has(container),needsScoping=compatibleShadyCSSVersion&&11===container.nodeType&&!!container.host,firstScopeRender=needsScoping&&!shadyRenderSet.has(scopeName),renderContainer=firstScopeRender?document.createDocumentFragment():container;if(((result,container,options)=>{let part=render_parts.get(container);void 0===part&&(removeNodes(container,container.firstChild),render_parts.set(container,part=new parts_NodePart(Object.assign({templateFactory:templateFactory},options))),part.appendInto(container)),part.setValue(result),part.commit()})(result,renderContainer,Object.assign({templateFactory:shadyTemplateFactory(scopeName)},options)),firstScopeRender){const part=render_parts.get(renderContainer);render_parts.delete(renderContainer);const template=part.value instanceof template_instance_TemplateInstance?part.value.template:void 0;prepareTemplateStyles(scopeName,renderContainer,template),removeNodes(container,container.firstChild),container.appendChild(renderContainer),render_parts.set(container,part)}!hasRendered&&needsScoping&&window.ShadyCSS.styleElement(container.host)};const ErrorMessage=({title:title,children:children})=>lit_html_html`
  <div class="error-background">
    <div class="error-container">
      <span class="error-title"
        ><span class="error-badge">Error</span>${title}</span
      >
      <span class="error-description">${children}</span>
    </div>
  </div>
`,ErrorMessage_styles=css`
  .error-background {
    position: absolute;
    top: 0;
    left: 0;
    width: 100%;
    height: 100%;

    background: var(--error-bg);
    color: var(--error-fg);
  }

  .error-container {
    max-width: 800px;
    margin: auto;
    padding: 1em;
  }

  .error-badge {
    display: inline-block;
    font-size: 0.8em;
    padding: 0.2em 0.5em;
    margin-inline-end: 0.5em;

    background: var(--error-color);
    border-radius: 2px;
    color: var(--error-bg);
    text-transform: uppercase;
  }

  .error-title {
    display: block;
    font-size: 1.2em;

    font-weight: bold;
    text-transform: capitalize;
  }

  .error-description {
    display: block;
    margin-block-start: 1em;
  }
`,previousStylePropertyCache=new WeakMap,styleMap=(f=styleInfo=>part=>{if(!(part instanceof parts_AttributePart)||part instanceof PropertyPart||"style"!==part.committer.name||part.committer.parts.length>1)throw new Error("The `styleMap` directive must be used in the style attribute and must be the only part in the attribute.");const{committer:committer}=part,{style:style}=committer.element;let previousStyleProperties=previousStylePropertyCache.get(part);void 0===previousStyleProperties&&(style.cssText=committer.strings.join(" "),previousStylePropertyCache.set(part,previousStyleProperties=new Set)),previousStyleProperties.forEach((name=>{name in styleInfo||(previousStyleProperties.delete(name),-1===name.indexOf("-")?style[name]=null:style.removeProperty(name))}));for(const name in styleInfo)previousStyleProperties.add(name),-1===name.indexOf("-")?style[name]=styleInfo[name]:style.setProperty(name,styleInfo[name])},(...args)=>{const d=f(...args);return directives.set(d,!0),d});var f;function absRect(rect){return{top:rect.y,right:rect.x+rect.width,bottom:rect.y+rect.height,left:rect.x}}function round(n){return Math.round(100*n)/100}function extendStyles(left,right){return[...stylesToArray(left),...stylesToArray(right)]}function stylesToArray(styles){return styles?styles instanceof Array?styles:[styles]:[]}var __decorate=function(decorators,target,key,desc){var d,c=arguments.length,r=c<3?target:null===desc?desc=Object.getOwnPropertyDescriptor(target,key):desc;if("object"==typeof Reflect&&"function"==typeof Reflect.decorate)r=Reflect.decorate(decorators,target,key,desc);else for(var i=decorators.length-1;i>=0;i--)(d=decorators[i])&&(r=(c<3?d(r):c>3?d(target,key,r):d(target,key))||r);return c>3&&r&&Object.defineProperty(target,key,r),r};const NodeSelectableMixin=superClass=>{class NodeSelectable extends superClass{constructor(...args){super(...args),this.selectedNode=null}updated(changedProperties){super.updated(changedProperties),changedProperties.has("selectedNode")&&this.dispatchEvent(new CustomEvent("nodeselect",{detail:{selectedNode:this.selectedNode}}))}}return __decorate([decorators_property({attribute:!1})],NodeSelectable.prototype,"selectedNode",void 0),NodeSelectable};var PositionedMixin_decorate=function(decorators,target,key,desc){var d,c=arguments.length,r=c<3?target:null===desc?desc=Object.getOwnPropertyDescriptor(target,key):desc;if("object"==typeof Reflect&&"function"==typeof Reflect.decorate)r=Reflect.decorate(decorators,target,key,desc);else for(var i=decorators.length-1;i>=0;i--)(d=decorators[i])&&(r=(c<3?d(r):c>3?d(target,key,r):d(target,key))||r);return c>3&&r&&Object.defineProperty(target,key,r),r},__classPrivateFieldGet=function(receiver,privateMap){if(!privateMap.has(receiver))throw new TypeError("attempted to get private field on non-instance");return privateMap.get(receiver)},__classPrivateFieldSet=function(receiver,privateMap,value){if(!privateMap.has(receiver))throw new TypeError("attempted to set private field on non-instance");return privateMap.set(receiver,value),value};const PositionedMixin=superClass=>{var _isDragModeOn,_movePanel,_keyDown,_keyUp,_listenToKeyboardEvents;class Positioned extends superClass{constructor(...args){super(...args),this.panX=0,this.panY=0,this.scale=1,this.zoomSpeed=500,this.panSpeed=500,_isDragModeOn.set(this,!1),_movePanel.set(this,((shiftX,shiftY)=>{this.panX+=shiftX/this.scale/window.devicePixelRatio,this.panY+=shiftY/this.scale/window.devicePixelRatio})),_keyDown.set(this,(event=>{"Space"!==event.code||__classPrivateFieldGet(this,_isDragModeOn)||(__classPrivateFieldSet(this,_isDragModeOn,!0),document.body.style.cursor="grab")})),_keyUp.set(this,(event=>{"Space"===event.code&&__classPrivateFieldGet(this,_isDragModeOn)&&(__classPrivateFieldSet(this,_isDragModeOn,!1),document.body.style.cursor="auto")})),_listenToKeyboardEvents.set(this,(()=>{document.addEventListener("keyup",__classPrivateFieldGet(this,_keyUp)),document.addEventListener("keydown",__classPrivateFieldGet(this,_keyDown))})),this.addEventListener("wheel",(ev=>{if(this.isMovable)if(ev.preventDefault(),ev.ctrlKey){let{deltaY:deltaY}=ev;1===ev.deltaMode&&(deltaY*=15);const prevScale=this.scale;this.scale*=1-deltaY/(.5*(1e3-this.zoomSpeed));const offsetX=ev.offsetX-this.offsetWidth/2,offsetY=ev.offsetY-this.offsetHeight/2;this.panX+=offsetX/this.scale-offsetX/prevScale,this.panY+=offsetY/this.scale-offsetY/prevScale}else{const speed=.002*this.panSpeed;this.panX-=ev.deltaX*speed/this.scale,this.panY-=ev.deltaY*speed/this.scale}}),{passive:!1});let gestureStartScale=1;this.addEventListener("gesturestart",(ev=>{ev.preventDefault(),gestureStartScale=this.scale})),this.addEventListener("gesturechange",(_ev=>{const ev=_ev;ev.preventDefault(),this.scale=gestureStartScale*ev.scale})),this.addEventListener("pointermove",(ev=>{4&ev.buttons&&(ev.preventDefault(),__classPrivateFieldGet(this,_movePanel).call(this,ev.movementX,ev.movementY))})),__classPrivateFieldGet(this,_listenToKeyboardEvents).call(this),this.onmousedown=()=>{__classPrivateFieldGet(this,_isDragModeOn)&&(document.body.style.cursor="grabbing",this.onmousemove=({movementX:movementX,movementY:movementY})=>{__classPrivateFieldGet(this,_movePanel).call(this,movementX,movementY)},this.onmouseup=()=>{document.body.style.cursor="grab",this.onmousemove=null,this.onmouseup=null})}}get isMovable(){return!0}get canvasTransform(){return[`scale(${this.scale})`,`translate(${this.panX}px, ${this.panY}px)`]}disconnectedCallback(){document.removeEventListener("keyup",__classPrivateFieldGet(this,_keyUp)),document.removeEventListener("keydown",__classPrivateFieldGet(this,_keyDown)),super.disconnectedCallback()}updated(changedProperties){super.updated(changedProperties),changedProperties.has("scale")&&this.dispatchEvent(new CustomEvent("scalechange",{detail:{scale:this.scale}})),(changedProperties.has("panX")||changedProperties.has("panY"))&&this.dispatchEvent(new CustomEvent("positionchange",{detail:{x:this.panX,y:this.panY}}))}}return _isDragModeOn=new WeakMap,_movePanel=new WeakMap,_keyDown=new WeakMap,_keyUp=new WeakMap,_listenToKeyboardEvents=new WeakMap,PositionedMixin_decorate([decorators_property({attribute:!1})],Positioned.prototype,"panX",void 0),PositionedMixin_decorate([decorators_property({attribute:!1})],Positioned.prototype,"panY",void 0),PositionedMixin_decorate([decorators_property({attribute:!1})],Positioned.prototype,"scale",void 0),PositionedMixin_decorate([decorators_property({type:Number,attribute:"zoom-speed"})],Positioned.prototype,"zoomSpeed",void 0),PositionedMixin_decorate([decorators_property({type:Number,attribute:"pan-speed"})],Positioned.prototype,"panSpeed",void 0),Positioned},guidesCache=new Map,Guides=({node:node,distanceTo:distanceTo,reverseScale:reverseScale,fontSize:fontSize})=>{const combinedId=node.id+"\n"+distanceTo.id;let guides=guidesCache.get(combinedId);return guides||(guides=function getDistanceGuides(selected,compared){const a=absRect(selected),b=absRect(compared),isYIntersecting=!(a.top>b.bottom||a.bottom<b.top),isXIntersecting=!(a.left>b.right||a.right<b.left);if(isXIntersecting&&isYIntersecting){const intersectCenter={x:(Math.max(a.left,b.left)+Math.min(a.right,b.right))/2,y:(Math.max(a.top,b.top)+Math.min(a.bottom,b.bottom))/2};return[{points:[{x:a.left,y:intersectCenter.y},{x:b.left,y:intersectCenter.y}]},{points:[{x:a.right,y:intersectCenter.y},{x:b.right,y:intersectCenter.y}]},{points:[{y:a.top,x:intersectCenter.x},{y:b.top,x:intersectCenter.x}]},{points:[{y:a.bottom,x:intersectCenter.x},{y:b.bottom,x:intersectCenter.x}]}]}const isALeft=a.left>b.right,isABelow=a.top>b.bottom,selectedCenter={x:selected.x+selected.width/2,y:selected.y+selected.height/2};return[isXIntersecting?null:{points:[{x:isALeft?a.left:a.right,y:selectedCenter.y},{x:isALeft?b.right:b.left,y:selectedCenter.y}],bisector:isYIntersecting?void 0:[{x:isALeft?b.right:b.left,y:selectedCenter.y},{x:isALeft?b.right:b.left,y:isABelow?b.bottom:b.top}]},isYIntersecting?null:{points:[{y:isABelow?a.top:a.bottom,x:selectedCenter.x},{y:isABelow?b.bottom:b.top,x:selectedCenter.x}],bisector:isXIntersecting?void 0:[{y:isABelow?b.bottom:b.top,x:selectedCenter.x},{y:isABelow?b.bottom:b.top,x:isALeft?b.right:b.left}]}].filter((x=>!!x))}(node.absoluteBoundingBox,distanceTo.absoluteBoundingBox),guidesCache.set(combinedId,guides)),[...guides.map((guide=>(({guide:guide,reverseScale:reverseScale})=>{const xLength=Math.abs(guide.points[0].x-guide.points[1].x),yLength=Math.abs(guide.points[0].y-guide.points[1].y);return 0===xLength&&0===yLength?null:svg`
    <line
      class="distance-line"
      x1=${guide.points[0].x}
      y1=${guide.points[0].y}
      x2=${guide.points[1].x}
      y2=${guide.points[1].y}
    />

    ${guide.bisector&&svg`
        <line
          class="distance-line"
          x1=${guide.bisector[0].x}
          y1=${guide.bisector[0].y}
          x2=${guide.bisector[1].x}
          y2=${guide.bisector[1].y}
          style=${styleMap({strokeDasharray:""+4*reverseScale})}
          shape-rendering="geometricPrecision"
          fill="none"
        />
      `}
  `})({guide:guide,reverseScale:reverseScale}))),...guides.map((guide=>(({guide:guide,reverseScale:reverseScale,fontSize:fontSize})=>{const xLength=Math.abs(guide.points[0].x-guide.points[1].x),yLength=Math.abs(guide.points[0].y-guide.points[1].y);if(0===xLength&&0===yLength)return null;const text=round(Math.max(xLength,yLength)).toString(10),width=text.length*fontSize*.5,startMargin=.25*fontSize,vPadding=.25*fontSize,hPadding=.5*fontSize,x=xLength>yLength?(guide.points[0].x+guide.points[1].x)/2-width/2:guide.points[0].x,y=xLength>yLength?guide.points[0].y:(guide.points[0].y+guide.points[1].y)/2-fontSize/2,transform=[`scale(${reverseScale})`,xLength>yLength?`translate(0, ${startMargin+vPadding})`:`translate(${startMargin+hPadding}, 0)`].join(" "),cx=x+width/2,transformOrigin=xLength>yLength?`${cx} ${y}`:`${x} ${y+fontSize/2}`;return svg`
    <g class="distance-tooltip">
      <rect
        x=${x-hPadding}
        y=${y-vPadding}
        rx="2"
        width=${width+2*hPadding}
        height=${fontSize+2*vPadding}
        transform=${transform}
        transform-origin=${transformOrigin}
        stroke="none"
      />

      <text
        x=${cx}
        y=${y+fontSize-vPadding/2}
        text-anchor="middle"
        transform=${transform}
        transform-origin=${transformOrigin}
        stroke="none"
        fill="white"
        style="font-size: ${fontSize}px"
      >
        ${text}
      </text>
    </g>
  `})({guide:guide,reverseScale:reverseScale,fontSize:fontSize})))]},DistanceGuide_styles=css`
  .distance-line {
    shape-rendering: geometricPrecision;
    fill: none;
    opacity: 0;
  }

  .distance-tooltip {
    opacity: 0;
  }

  .guide:hover ~ .distance-line,
  .guide:hover ~ .distance-tooltip {
    opacity: 1;
  }
`;var copy_to_clipboard=__webpack_require__(378);const CopyIcon=({onClick:onClick=(()=>{})})=>svg`
  <svg @click=${onClick} title="copy icon" width="14" height="14" viewBox="0 0 30 30" fill="none">
  <path d="M21 25.5C21 24.9477 20.5523 24.5 20 24.5C19.4477 24.5 19 24.9477 19 25.5H21ZM13 2H25V0H13V2ZM28 5V21H30V5H28ZM25 24H13V26H25V24ZM10 21V5H8V21H10ZM13 24C11.3431 24 10 22.6569 10 21H8C8 23.7614 10.2386 26 13 26V24ZM28 21C28 22.6569 26.6569 24 25 24V26C27.7614 26 30 23.7614 30 21H28ZM25 2C26.6569 2 28 3.34315 28 5H30C30 2.23858 27.7614 0 25 0V2ZM13 0C10.2386 0 8 2.23858 8 5H10C10 3.34315 11.3431 2 13 2V0ZM16.5 28H5V30H16.5V28ZM2 25V10H0V25H2ZM5 28C3.34315 28 2 26.6569 2 25H0C0 27.7614 2.23858 30 5 30V28ZM5 7H8V5H5V7ZM2 10C2 8.34315 3.34315 7 5 7V5C2.23858 5 0 7.23858 0 10H2ZM16.5 30C18.9853 30 21 27.9853 21 25.5H19C19 26.8807 17.8807 28 16.5 28V30Z" fill="#B3B3B3"/>
</svg>
`,extractColorStyle=color=>0===color.a?"transparent":color.a<1?`rgba(${rgbToIntArray(color).join(", ")}, ${color.a.toFixed(2)})`:rgbToHex(color);class Gradient{constructor(data){this.gradientHandles={start:data.gradientHandlePositions[0],end:data.gradientHandlePositions[1]},this.colors=data.gradientStops,this.colorObjects=this.createColorObjects(this.colors),this.angle=this.calculateAngle(this.gradientHandles.start,this.gradientHandles.end)}get cssGradientArray(){return this.colorObjects.map(((color,index)=>color+" "+this.floatToPercent(this.colors[index].position)))}get cssColor(){const cssGradientArray=this.cssGradientArray;return cssGradientArray.unshift(this.angle+"deg"),`linear-gradient(${cssGradientArray.join(", ")})`}createColorObjects(colors){return colors.map((({color:color})=>extractColorStyle(color)))}floatToPercent(value){return(value*=100).toFixed(0)+"%"}calculateAngle(startHandle,endHandle){const radians=Math.atan(this.calculateGradient(startHandle,endHandle));return parseInt(this.radToDeg(radians).toFixed(1))}calculateGradient(startHandle,endHandle){return(endHandle.y-startHandle.y)/(endHandle.x-startHandle.x)*-1}radToDeg(radian){return 180*radian/Math.PI}}class NodeStyles{constructor(node){var _a,_b,_c;if(this.hasPadding=!1,this.height=`${Math.trunc(node.absoluteBoundingBox.height)}px`,this.width=`${Math.trunc(node.absoluteBoundingBox.width)}px`,(node.horizontalPadding||node.verticalPadding)&&(this.hasPadding=!0,this.horizontalPadding=`${node.horizontalPadding}px`,this.verticalPadding=`${node.verticalPadding}px`),node.style&&(this.fontFamily=node.style.fontFamily,this.fontPostScriptName=null===(_a=node.style.fontPostScriptName)||void 0===_a?void 0:_a.replace("-"," "),this.fontWeight=node.style.fontWeight,this.fontSize=`${Math.ceil(node.style.fontSize)}px`,this.lineHeight=`${Math.trunc(node.style.lineHeightPx)}px`),node.rectangleCornerRadii&&(this.borderRadius=node.rectangleCornerRadii.filter((radius=>radius===node.cornerRadius)).length<4?`${node.rectangleCornerRadii.join("px ")}px`:`${node.cornerRadius}px`),node.backgroundColor||node.backgroundColor){const color=node.backgroundColor||(null===(_b=node.background)||void 0===_b?void 0:_b[0].color);this.background=extractColorStyle(color)}const fillColor=null===(_c=node.fills)||void 0===_c?void 0:_c[0];if(fillColor&&!1!==fillColor.visible&&("TEXT"===node.type?this.color=extractColorStyle(fillColor.color):fillColor.type.includes("GRADIENT")?this.backgroundImage=new Gradient(fillColor).cssColor:"SOLID"===fillColor.type&&(this.background=extractColorStyle(fillColor.color))),node.strokes&&node.strokes.length>0&&(this.borderColor=extractColorStyle(node.strokes[0].color),this.border=`${node.strokeWeight}px solid ${this.borderColor}`),node.effects&&node.effects.length>0){const{offset:offset,radius:radius,color:color}=node.effects[0];this.boxShadowColor=extractColorStyle(color),this.boxShadow=`${(null==offset?void 0:offset.x)||0}px ${(null==offset?void 0:offset.y)||0}px 0 ${radius} ${this.boxShadowColor}`}}getStyles(){return[this.height&&{property:"height",value:this.height},this.width&&{property:"width",value:this.width},this.fontFamily&&{property:"font-family",value:this.fontFamily},this.fontSize&&{property:"font-size",value:this.fontSize},this.fontWeight&&{property:"font-weight",value:this.fontWeight},this.lineHeight&&{property:"line-height",value:this.lineHeight},this.borderRadius&&{property:"border-radius",value:this.borderRadius},this.backgroundImage&&{property:"background-image",value:this.backgroundImage},this.boxShadow&&{property:"box-shadow",value:this.boxShadow,color:this.boxShadowColor},this.border&&{property:"border",value:this.border,color:this.borderColor},this.background&&{property:"background",value:this.background,color:this.background},this.color&&{property:"color",value:this.color,color:this.color}].filter(Boolean)}getStyleSheet(){return this.getStyles().map(getStyleRule).join("\n")}}const rgbToIntArray=color=>[Math.trunc(255*color.r),Math.trunc(255*color.g),Math.trunc(255*color.b)],rgbToHex=color=>{const[r,g,b]=rgbToIntArray(color);return"#"+((1<<24)+(r<<16)+(g<<8)+b).toString(16).slice(1)},getStyleRule=({property:property,value:value})=>`${property}: ${value};`,View=({node:node,onClose:onClose})=>{if(!node)return null;const nodeStyles=new NodeStyles(node),stopPropagation=ev=>ev.stopPropagation();return lit_html_html`
    <div
      class="inspector-view"
      @click=${stopPropagation}
      @wheel=${stopPropagation}
      @keydown=${stopPropagation}
      @keyup=${stopPropagation}
      @pointermove=${stopPropagation}
    >
      <div class="inspector-section selectable-content">
        <div class="title-section">
          <h4>${node.name}</h4>
          ${(({onClick:onClick=(()=>{})})=>svg`
  <svg @click=${onClick} title="close icon" width="14" height="14" viewBox="0 0 20 20" fill="none">
    <path d="M1 19L19 1M19 19L1 1" stroke="#B3B3B3" stroke-width="2"/>
  </svg>
`)({onClick:onClose})}
        </div>
        <div class="properties-overview">
          <div class="title-section">
            <p class="inspector-property">
              <span>W: </span>${nodeStyles.width}
            </p>
            <p class="inspector-property" style="margin-left: 16px;">
              <span>H: </span>${nodeStyles.height}
            </p>
          </div>
          ${nodeStyles.fontPostScriptName?lit_html_html`<p class="inspector-property">
                <span>Font:</span>
                ${nodeStyles.fontPostScriptName}
              </p>`:null}
        </div>
      </div>
      ${nodeStyles.hasPadding?lit_html_html`<div class="inspector-section">
            <h4>Layout</h4>
            ${nodeStyles.horizontalPadding&&lit_html_html`<p class="inspector-property">
              ${svg`
  <svg title="horizontal padding" width="14" height="14" viewBox="0 0 29 28" fill="none">
    <rect x="7" y="8" width="14" height="14" stroke="#B3B3B3" stroke-width="2"/>
    <path d="M27 1V28" stroke="#B3B3B3" stroke-width="2"/>
    <path d="M1 0V28" stroke="#B3B3B3" stroke-width="2"/>
  </svg>
`} ${nodeStyles.horizontalPadding}
            </p>`}
            ${nodeStyles.verticalPadding&&lit_html_html`<p class="inspector-property">
              ${svg`
  <svg title="vertical padding" width="14" height="14" viewBox="0 0 29 28" fill="none" xmlns="http://www.w3.org/2000/svg">
    <rect x="8" y="21" width="14" height="14" transform="rotate(-90 8 21)" stroke="#B3B3B3" stroke-width="2"/>
    <path d="M1 1L28 0.999999" stroke="#B3B3B3" stroke-width="2"/>
    <path d="M0 27L28 27" stroke="#B3B3B3" stroke-width="2"/>
  </svg>
`} ${nodeStyles.verticalPadding}
            </p>`}
          </div>`:null}
      ${node.characters?lit_html_html`<div class="inspector-section">
            <div class="title-section">
              <h4>Content</h4>
              ${CopyIcon({onClick:()=>copy_to_clipboard(node.characters)})}
            </div>
            <p class="node-content code-section selectable-content">
              ${node.characters}
            </p>
          </div>`:null}
      ${StylesSection(nodeStyles)}
    </div>
  `},StylesSection=nodeStyles=>{const styles=nodeStyles.getStyles();return lit_html_html`<div class="inspector-section">
    <div class="title-section style-section">
      <h4>CSS</h4>
      ${CopyIcon({onClick:()=>copy_to_clipboard(nodeStyles.getStyleSheet())})}
    </div>
    <div class="code-section selectable-content">
      ${styles.map(CSSProperty)}
    </div>
  </div>`},CSSProperty=cssProperty=>{const{property:property,value:value,color:color}=cssProperty;let coloredSquare=null;switch(property){case"background":case"fill":case"border":case"box-shadow":case"color":coloredSquare=lit_html_html`<span
        class="color-preview"
        style="background-color: ${color}"
      ></span>`;break;case"background-image":coloredSquare=lit_html_html`<span
        class="color-preview"
        style="background-image: ${value}"
      ></span>`}return lit_html_html`<div class="css-property" @click=${()=>copy_to_clipboard(getStyleRule(cssProperty))}>
    <span>${property}:</span>${coloredSquare}<span class="css-value">${value}</span>;</span>
  </div>`},InspectorView_styles=css`
  .inspector-view {
    height: 100%;
    width: 300px;
    position: absolute;
    right: 0;
    background: white;
    border-left: 1px solid #ccc;
    overflow-y: auto;
  }

  .inspector-view h4 {
    font-size: 16px;
    margin: 0;
  }

  .style-section {
    margin-bottom: 12px;
  }

  .title-section {
    display: flex;
    align-items: center;
  }

  .code-section {
    padding: 8px;
    background: #f3f3f3;
    font-family: monospace;
  }

  .title-section svg {
    cursor: pointer;
    margin-left: auto;
  }

  .inspector-section {
    padding: 16px;
    border-bottom: 1px solid #eee;
  }

  .properties-overview {
    font-family: monospace;
    color: #518785;
  }

  .properties-overview p span {
    color: #121212;
  }

  .inspector-property {
    display: flex;
    align-items: center;
    margin-bottom: 0;
  }

  .inspector-property span {
    color: #b3b3b3;
    margin-right: 4px;
  }

  .inspector-property svg {
    margin-right: 8px;
  }

  .css-property {
    margin: 8px;
    transition: background-color ease-in-out 100ms;
  }

  .css-property:hover {
    cursor: pointer;
    background-color: #e8e8e8;
  }

  .css-value {
    color: #518785;
    margin-left: 4px;
  }

  .color-preview {
    display: inline-block;
    width: 12px;
    height: 12px;
    border: 1px solid #ccc;
    margin-left: 4px;
    vertical-align: middle;
  }

  .selectable-content {
    cursor: text;
    user-select: text;
  }
`,Outline=({node:node,selected:selected=!1,computedThickness:computedThickness,onClick:onClick})=>{const{x:x,y:y,width:width,height:height}=node.absoluteBoundingBox,radius="cornerRadius"in node&&node.cornerRadius?{topLeft:node.cornerRadius,topRight:node.cornerRadius,bottomRight:node.cornerRadius,bottomLeft:node.cornerRadius}:"rectangleCornerRadii"in node&&node.rectangleCornerRadii?{topLeft:node.rectangleCornerRadii[0],topRight:node.rectangleCornerRadii[1],bottomRight:node.rectangleCornerRadii[2],bottomLeft:node.rectangleCornerRadii[3]}:{topLeft:0,topRight:0,bottomRight:0,bottomLeft:0},shift=computedThickness/2,lineTo=(x,y)=>`L${x},${y}`,arcTo=(r,x,y)=>`A${r},${r} 0 0 1 ${x},${y}`,boxPath=[((x,y)=>`M${x},${y}`)(radius.topLeft+shift,shift),lineTo(width-radius.topRight,shift),arcTo(radius.topRight-shift,width-shift,radius.topRight),lineTo(width-shift,height-radius.bottomRight),arcTo(radius.bottomRight-shift,width-radius.bottomRight,height-shift),lineTo(radius.bottomLeft,height-shift),arcTo(radius.bottomLeft-shift,shift,height-radius.bottomLeft),lineTo(shift,radius.topLeft),arcTo(radius.topLeft-shift,radius.topLeft,shift),"Z"].join(" ");return svg`
    <path
      class="guide"
      d=${boxPath}
      shape-rendering="geometricPrecision"
      fill="none"
      transform="translate(${x}, ${y})"
      ?data-selected=${selected}
      @click=${onClick}
    />
  `},Node_styles=css`
  .guide {
    /*
     * SVGs cannot be pixel perfect, especially floating values.
     * Since many platform renders them visually incorrectly (probably they
     * are following the spec), it's safe to set overflow to visible.
     * Cropped borders are hard to visible and ugly.
     */
    overflow: visible;

    pointer-events: all;

    opacity: 0;
  }
  .guide:hover {
    opacity: 1;
  }
  .guide[data-selected] {
    opacity: 1;
    stroke: var(--guide-selected-color);
  }

  .tooltip {
    position: absolute;
    padding: 0.25em 0.5em;
    font-size: var(--guide-tooltip-font-size);

    color: var(--guide-selected-tooltip-fg);
    background-color: var(--guide-selected-tooltip-bg);
    border-radius: 2px;
    pointer-events: none;
    z-index: calc(var(--z-index) + 1);

    transform-origin: top center;
  }
`;var ViewerMixin_decorate=function(decorators,target,key,desc){var d,c=arguments.length,r=c<3?target:null===desc?desc=Object.getOwnPropertyDescriptor(target,key):desc;if("object"==typeof Reflect&&"function"==typeof Reflect.decorate)r=Reflect.decorate(decorators,target,key,desc);else for(var i=decorators.length-1;i>=0;i--)(d=decorators[i])&&(r=(c<3?d(r):c>3?d(target,key,r):d(target,key))||r);return c>3&&r&&Object.defineProperty(target,key,r),r},ViewerMixin_classPrivateFieldGet=function(receiver,privateMap){if(!privateMap.has(receiver))throw new TypeError("attempted to get private field on non-instance");return privateMap.get(receiver)},ViewerMixin_classPrivateFieldSet=function(receiver,privateMap,value){if(!privateMap.has(receiver))throw new TypeError("attempted to set private field on non-instance");return privateMap.set(receiver,value),value};const ViewerMixin=superClass=>{var _canvasSize,_effectMargins,_flattenedNodes,_handleNodeClick,_getNodeById;class Viewer extends(NodeSelectableMixin(PositionedMixin(superClass))){constructor(...args){super(...args),this.zoomMargin=50,_canvasSize.set(this,void 0),_effectMargins.set(this,void 0),_flattenedNodes.set(this,void 0),_handleNodeClick.set(this,(node=>ev=>{ev.preventDefault(),ev.stopPropagation(),this.selectedNode=node})),_getNodeById.set(this,(id=>{var _a,_b;return null!==(_b=null===(_a=ViewerMixin_classPrivateFieldGet(this,_flattenedNodes))||void 0===_a?void 0:_a.find((n=>n.id===id)))&&void 0!==_b?_b:null}))}static get styles(){return extendStyles(super.styles,[css`
          :host {
            --default-error-bg: #fff;
            --default-error-fg: #333;

            --bg: var(--figspec-viewer-bg, #666);
            --z-index: var(--figspec-viewer-z-index, 0);
            --error-bg: var(--figspec-viewer-error-bg, var(--default-error-bg));
            --error-fg: var(--figspec-viewer-error-fg, var(--default-error-fg));
            --error-color: var(--figspec-viewer-error-color, tomato);

            --guide-thickness: var(--figspec-viewer-guide-thickness, 1.5px);
            --guide-color: var(--figspec-viewer-guide-color, tomato);
            --guide-selected-color: var(
              --figspec-viewer-guide-selected-color,
              dodgerblue
            );
            --guide-tooltip-fg: var(--figspec-viewer-guide-tooltip-fg, white);
            --guide-selected-tooltip-fg: var(
              --figspec-viewer-guide-selected-tooltip-fg,
              white
            );
            --guide-tooltip-bg: var(
              --figspec-viewer-guide-tooltip-bg,
              var(--guide-color)
            );
            --guide-selected-tooltip-bg: var(
              --figspec-viewer-guide-selected-tooltip-bg,
              var(--guide-selected-color)
            );
            --guide-tooltip-font-size: var(
              --figspec-viewer-guide-tooltip-font-size,
              12px
            );

            position: relative;
            display: block;

            background-color: var(--bg);
            user-select: none;
            overflow: hidden;
            z-index: var(--z-index);
          }

          @media (prefers-color-scheme: dark) {
            :host {
              --default-error-bg: #222;
              --default-error-fg: #fff;
            }
          }

          .spec-canvas-wrapper {
            position: absolute;
            top: 0;
            left: 0;
            width: 100%;
            height: 100%;
          }

          .canvas {
            position: absolute;
            top: 50%;
            left: 50%;
          }

          .rendered-image {
            position: absolute;
            top: 0;
            left: 0;
          }

          .guides {
            position: absolute;

            overflow: visible;
            stroke: var(--guide-color);
            fill: var(--guide-color);
            pointer-events: none;
            z-index: calc(var(--z-index) + 2);
          }
        `,Node_styles,ErrorMessage_styles,DistanceGuide_styles,InspectorView_styles])}get __images(){return{}}deselectNode(){this.selectedNode=null}get error(){return ViewerMixin_classPrivateFieldGet(this,_canvasSize)&&ViewerMixin_classPrivateFieldGet(this,_flattenedNodes)?null:ErrorMessage({title:"Error",children:"Please call `__updateTree/1` method with a valid parameter."})}render(){if(this.error)return this.error instanceof Error?ErrorMessage({title:this.error.name||"Error",children:this.error.message}):"string"==typeof this.error?ErrorMessage({title:"Error",children:this.error}):this.error;const canvasSize=ViewerMixin_classPrivateFieldGet(this,_canvasSize),reverseScale=1/this.scale,guideThickness=`calc(var(--guide-thickness) * ${reverseScale})`,computedGuideThickness=parseFloat(getComputedStyle(this).getPropertyValue("--guide-thickness")),computedGuideTooltipFontSize=parseFloat(getComputedStyle(this).getPropertyValue("--guide-tooltip-font-size"));return lit_html_html`
        <div class="spec-canvas-wrapper" @click=${this.deselectNode}>
          <div
            class="canvas"
            style="
          width: ${canvasSize.width}px;
          height: ${canvasSize.height}px;

          transform: translate(-50%, -50%) ${this.canvasTransform.join(" ")}
        "
          >
            ${Object.entries(this.__images).map((([nodeId,uri])=>{var _a;const node=ViewerMixin_classPrivateFieldGet(this,_getNodeById).call(this,nodeId);if(!node||!("absoluteBoundingBox"in node)||!(null===(_a=ViewerMixin_classPrivateFieldGet(this,_effectMargins))||void 0===_a?void 0:_a[node.id]))return null;const margin=ViewerMixin_classPrivateFieldGet(this,_effectMargins)[node.id];return lit_html_html`
                <img class="rendered-image" src="${uri}"
                style=${styleMap({top:node.absoluteBoundingBox.y-canvasSize.y+"px",left:node.absoluteBoundingBox.x-canvasSize.x+"px",marginTop:-margin.top+"px",marginLeft:-margin.left+"px",width:node.absoluteBoundingBox.width+margin.left+margin.right+"px",height:node.absoluteBoundingBox.height+margin.top+margin.bottom+"px"})}"
                " />
              `}))}
            ${this.selectedNode&&(({nodeSize:{x:x,y:y,width:width,height:height},offsetX:offsetX,offsetY:offsetY,reverseScale:reverseScale})=>lit_html_html`
    <div class="tooltip" style="${styleMap({top:`${offsetY+y+height}px`,left:`${offsetX+x+width/2}px`,transform:`translateX(-50%) scale(${reverseScale}) translateY(0.25em)`})}">
      ${round(width)} x ${round(height)}
    </div>
  `)({nodeSize:this.selectedNode.absoluteBoundingBox,offsetX:-canvasSize.x,offsetY:-canvasSize.y,reverseScale:reverseScale})}
            ${svg`
            <svg
              class="guides"
              viewBox="0 0 5 5"
              width="5"
              height="5"
              style=${styleMap({left:-canvasSize.x+"px",top:-canvasSize.y+"px",strokeWidth:guideThickness})}
            >
              ${this.selectedNode&&Outline({node:this.selectedNode,selected:!0,computedThickness:computedGuideThickness*reverseScale})}

              ${ViewerMixin_classPrivateFieldGet(this,_flattenedNodes).map((node=>{var _a;return node.id===(null===(_a=this.selectedNode)||void 0===_a?void 0:_a.id)?null:svg`
                  <g>
                    ${Outline({node:node,computedThickness:computedGuideThickness*reverseScale,onClick:ViewerMixin_classPrivateFieldGet(this,_handleNodeClick).call(this,node)})}
                    ${this.selectedNode&&Guides({node:node,distanceTo:this.selectedNode,reverseScale:reverseScale,fontSize:computedGuideTooltipFontSize})}
                  </g>
                `}))}
            </svg>
          `}
          </div>
          ${View({node:this.selectedNode,onClose:this.deselectNode})}
        </div>
      `}connectedCallback(){super.connectedCallback(),this.resetZoom()}updated(changedProperties){super.updated(changedProperties)}__updateTree(node){if("CANVAS"!==node.type&&"FRAME"!==node.type&&"COMPONENT"!==node.type)throw new Error("Cannot update node tree: Top level node MUST be one of CANVAS, FRAME, or COMPONENT");ViewerMixin_classPrivateFieldSet(this,_canvasSize,"CANVAS"===node.type?function getCanvasSize(node){const left=[],right=[],top=[],bottom=[];for(const child of node.children){if("FRAME"!==child.type&&"COMPONENT"!==child.type)continue;const{x:x,y:y,width:width,height:height}=child.absoluteBoundingBox;left.push(x),right.push(x+width),top.push(y),bottom.push(y+height)}const minX=Math.min(...left),minY=Math.min(...top);return{x:minX,y:minY,width:Math.abs(Math.max(...right)-minX),height:Math.abs(Math.min(...bottom)-minY)}}(node):node.absoluteBoundingBox),ViewerMixin_classPrivateFieldSet(this,_flattenedNodes,flattenNode(node)),this.requestUpdate()}__updateEffectMargins(){if(!this.__images)return;const containers=Object.keys(this.__images).map(ViewerMixin_classPrivateFieldGet(this,_getNodeById)).filter((n=>!!n));ViewerMixin_classPrivateFieldSet(this,_effectMargins,containers.reduce(((margin,node)=>"absoluteBoundingBox"in node?Object.assign(Object.assign({},margin),{[node.id]:getEffectMargin(node,flattenNode(node))}):margin),{})),this.requestUpdate()}resetZoom(){if(ViewerMixin_classPrivateFieldGet(this,_canvasSize)){const{width:width,height:height}=ViewerMixin_classPrivateFieldGet(this,_canvasSize),{width:elementWidth,height:elementHeight}=this.getBoundingClientRect(),wDiff=elementWidth/(width+2*this.zoomMargin),hDiff=elementHeight/(height+2*this.zoomMargin);this.scale=Math.min(wDiff,hDiff,1)}}}return _canvasSize=new WeakMap,_effectMargins=new WeakMap,_flattenedNodes=new WeakMap,_handleNodeClick=new WeakMap,_getNodeById=new WeakMap,ViewerMixin_decorate([decorators_property({type:Number,attribute:"zoom-margin"})],Viewer.prototype,"zoomMargin",void 0),Viewer};function getEffectMargin(container,nodes){const points=nodes.map((node=>{if(!("effects"in node))return{top:node.absoluteBoundingBox.y,right:node.absoluteBoundingBox.x+node.absoluteBoundingBox.width,bottom:node.absoluteBoundingBox.y+node.absoluteBoundingBox.height,left:node.absoluteBoundingBox.x};const blurRadiuses=node.effects.filter((effect=>effect.visible&&"LAYER_BLUR"===effect.type)).map((effect=>effect.radius)),shadowMargins=node.effects.filter((effect=>effect.visible&&"DROP_SHADOW"===effect.type&&!!effect.offset)).map((effect=>({left:effect.radius-effect.offset.x,top:effect.radius-effect.offset.y,right:effect.radius+effect.offset.x,bottom:effect.radius+effect.offset.y}))),margin_top=Math.max(0,...blurRadiuses,...shadowMargins.map((margin=>margin.top))),margin_right=Math.max(0,...blurRadiuses,...shadowMargins.map((margin=>margin.right))),margin_bottom=Math.max(0,...blurRadiuses,...shadowMargins.map((margin=>margin.bottom))),margin_left=Math.max(0,...blurRadiuses,...shadowMargins.map((margin=>margin.left)));return{top:node.absoluteBoundingBox.y-margin_top,right:node.absoluteBoundingBox.x+node.absoluteBoundingBox.width+margin_right,bottom:node.absoluteBoundingBox.y+node.absoluteBoundingBox.height+margin_bottom,left:node.absoluteBoundingBox.x-margin_left}})),bounds_top=Math.min(...points.map((p=>p.top))),bounds_right=Math.max(...points.map((p=>p.right))),bounds_bottom=Math.max(...points.map((p=>p.bottom))),bounds_left=Math.min(...points.map((p=>p.left)));return{top:container.absoluteBoundingBox.y-bounds_top,right:bounds_right-container.absoluteBoundingBox.x-container.absoluteBoundingBox.width,bottom:bounds_bottom-container.absoluteBoundingBox.y-container.absoluteBoundingBox.height,left:container.absoluteBoundingBox.x-bounds_left}}function flattenNode(node,depth=0){return"absoluteBoundingBox"in node?"children"in node&&0!==node.children.length?[Object.assign(Object.assign({},node),{depth:depth}),...node.children.map((child=>flattenNode(child,depth+1))).flat()]:[Object.assign(Object.assign({},node),{depth:depth})]:node.children.map((child=>flattenNode(child,depth+1))).flat()}var FigspecFrameViewer_decorate=function(decorators,target,key,desc){var d,c=arguments.length,r=c<3?target:null===desc?desc=Object.getOwnPropertyDescriptor(target,key):desc;if("object"==typeof Reflect&&"function"==typeof Reflect.decorate)r=Reflect.decorate(decorators,target,key,desc);else for(var i=decorators.length-1;i>=0;i--)(d=decorators[i])&&(r=(c<3?d(r):c>3?d(target,key,r):d(target,key))||r);return c>3&&r&&Object.defineProperty(target,key,r),r};class FigspecFrameViewer_FigspecFrameViewer extends(ViewerMixin(lit_element_LitElement)){constructor(){super(...arguments),this.nodes=null,this.renderedImage=null}get isMovable(){return!!(this.nodes&&this.renderedImage&&this.documentNode)}get documentNode(){if(!this.nodes)return null;const documentNode=Object.values(this.nodes.nodes)[0];return documentNode&&"absoluteBoundingBox"in documentNode.document?documentNode.document:null}get __images(){return this.documentNode&&this.renderedImage?{[this.documentNode.id]:this.renderedImage}:{}}get error(){return this.nodes&&this.renderedImage?this.documentNode?super.error?super.error:void 0:ErrorMessage({title:"Parameter Error",children:lit_html_html`
          <span> Document node is empty or does not have size. </span>
        `}):ErrorMessage({title:"Parameter error",children:lit_html_html`<span>
          Both <code>nodes</code> and <code>rendered-image</code> are required.
        </span>`})}connectedCallback(){super.connectedCallback(),this.documentNode&&(this.__updateTree(this.documentNode),this.__updateEffectMargins(),this.resetZoom())}updated(changedProperties){if(super.updated(changedProperties),changedProperties.has("nodes")){if(!this.documentNode)return;this.__updateTree(this.documentNode),this.resetZoom()}changedProperties.has("renderedImage")&&this.__updateEffectMargins()}}FigspecFrameViewer_decorate([decorators_property({type:Object})],FigspecFrameViewer_FigspecFrameViewer.prototype,"nodes",void 0),FigspecFrameViewer_decorate([decorators_property({type:String,attribute:"rendered-image"})],FigspecFrameViewer_FigspecFrameViewer.prototype,"renderedImage",void 0);var _selectFirstPage,_handlePageChange,FigspecFileViewer_decorate=function(decorators,target,key,desc){var d,c=arguments.length,r=c<3?target:null===desc?desc=Object.getOwnPropertyDescriptor(target,key):desc;if("object"==typeof Reflect&&"function"==typeof Reflect.decorate)r=Reflect.decorate(decorators,target,key,desc);else for(var i=decorators.length-1;i>=0;i--)(d=decorators[i])&&(r=(c<3?d(r):c>3?d(target,key,r):d(target,key))||r);return c>3&&r&&Object.defineProperty(target,key,r),r},FigspecFileViewer_classPrivateFieldGet=function(receiver,privateMap){if(!privateMap.has(receiver))throw new TypeError("attempted to get private field on non-instance");return privateMap.get(receiver)};class FigspecFileViewer_FigspecFileViewer extends(ViewerMixin(lit_element_LitElement)){constructor(){super(...arguments),this.documentNode=null,this.renderedImages=null,this.selectedPage=null,_selectFirstPage.set(this,(()=>{var _a;this.documentNode?this.selectedPage=null!==(_a=this.documentNode.document.children.filter((c=>"CANVAS"===c.type))[0])&&void 0!==_a?_a:null:this.selectedPage=null})),_handlePageChange.set(this,(ev=>{var _a,_b;const target=ev.currentTarget;this.selectedPage=null!==(_b=null===(_a=this.documentNode)||void 0===_a?void 0:_a.document.children.find((c=>c.id===target.value)))&&void 0!==_b?_b:null,this.selectedPage&&(this.__updateTree(this.selectedPage),this.resetZoom(),this.__updateEffectMargins(),this.panX=0,this.panY=0)}))}get isMovable(){return!(!this.renderedImages||!this.documentNode)}get __images(){return this.renderedImages||{}}get error(){return this.documentNode&&this.renderedImages?super.error?super.error:void 0:ErrorMessage({title:"Parameter error",children:lit_html_html`<span>
          Both <code>document-node</code> and <code>rendered-images</code> are
          required.
        </span>`})}static get styles(){return extendStyles(super.styles,[css`
        :host {
          --figspec-control-bg-default: #fcfcfc;
          --figspec-control-fg-default: #333;

          --control-bg: var(
            --figspec-control-bg,
            var(--figspec-control-bg-default)
          );
          --control-fg: var(
            --figspec-control-bg,
            var(--figspec-control-fg-default)
          );
          --control-shadow: var(
            --figspec-control-shadow,
            0 2px 4px rgba(0, 0, 0, 0.3)
          );
          --padding: var(--figspec-control-padding, 8px 16px);

          display: flex;
          flex-direction: column;
        }

        @media (prefers-color-scheme: dark) {
          :host {
            --figspec-control-bg-default: #222;
            --figspec-control-fg-default: #fff;
          }
        }

        .controls {
          flex-shrink: 0;
          padding: var(--padding);

          background-color: var(--control-bg);
          box-shadow: var(--control-shadow);
          color: var(--control-fg);
          z-index: 1;
        }

        .view {
          position: relative;
          flex-grow: 1;
          flex-shrink: 1;
        }
      `])}render(){var _a;return lit_html_html`
      <div class="controls">
        <select @change=${FigspecFileViewer_classPrivateFieldGet(this,_handlePageChange)}>
          ${null===(_a=this.documentNode)||void 0===_a?void 0:_a.document.children.map((c=>lit_html_html`<option value=${c.id}>${c.name}</option>`))}
        </select>
      </div>

      <div class="view">${super.render()}</div>
    `}connectedCallback(){super.connectedCallback(),this.documentNode&&(FigspecFileViewer_classPrivateFieldGet(this,_selectFirstPage).call(this),this.selectedPage&&(this.__updateTree(this.selectedPage),this.resetZoom()))}updated(changedProperties){super.updated(changedProperties),changedProperties.has("documentNode")&&(FigspecFileViewer_classPrivateFieldGet(this,_selectFirstPage).call(this),this.selectedPage&&(this.__updateTree(this.selectedPage),this.resetZoom())),changedProperties.has("renderedImages")&&this.__updateEffectMargins()}}_selectFirstPage=new WeakMap,_handlePageChange=new WeakMap,FigspecFileViewer_decorate([decorators_property({type:Object,attribute:"document-node"})],FigspecFileViewer_FigspecFileViewer.prototype,"documentNode",void 0),FigspecFileViewer_decorate([decorators_property({type:Object,attribute:"rendered-images"})],FigspecFileViewer_FigspecFileViewer.prototype,"renderedImages",void 0),customElements.get("figspec-file-viewer")||customElements.define("figspec-file-viewer",FigspecFileViewer_FigspecFileViewer),customElements.get("figspec-frame-viewer")||customElements.define("figspec-frame-viewer",FigspecFrameViewer_FigspecFrameViewer);var react=__webpack_require__(0),__rest=function(s,e){var t={};for(var p in s)Object.prototype.hasOwnProperty.call(s,p)&&e.indexOf(p)<0&&(t[p]=s[p]);if(null!=s&&"function"==typeof Object.getOwnPropertySymbols){var i=0;for(p=Object.getOwnPropertySymbols(s);i<p.length;i++)e.indexOf(p[i])<0&&Object.prototype.propertyIsEnumerable.call(s,p[i])&&(t[p[i]]=s[p[i]])}return t};const bindEvent=(element,event,cb)=>{const listener=ev=>{cb(ev)};return element.addEventListener(event,listener),()=>element.removeEventListener(event,listener)},es2015_FigspecFrameViewer=Object(react.forwardRef)(((_a,ref)=>{var{nodes:nodes,renderedImage:renderedImage,className:className,panSpeed:panSpeed,zoomMargin:zoomMargin,zoomSpeed:zoomSpeed,onNodeSelect:onNodeSelect,onPositionChange:onPositionChange,onScaleChange:onScaleChange}=_a,rest=__rest(_a,["nodes","renderedImage","className","panSpeed","zoomMargin","zoomSpeed","onNodeSelect","onPositionChange","onScaleChange"]);const[refNode,setNode]=Object(react.useState)(null);Object(react.useImperativeHandle)(ref,(()=>refNode),[refNode]);const refCb=Object(react.useCallback)((node=>{node&&(setNode(node),node.nodes=nodes,node.renderedImage=renderedImage)}),[]);return Object(react.useEffect)((()=>{refNode&&(refNode.nodes=nodes,refNode.renderedImage=renderedImage)}),[refNode,nodes,renderedImage]),Object(react.useEffect)((()=>{if(refNode&&onNodeSelect)return bindEvent(refNode,"nodeselect",onNodeSelect)}),[refNode,onNodeSelect]),Object(react.useEffect)((()=>{if(refNode&&onPositionChange)return bindEvent(refNode,"positionchange",onPositionChange)}),[refNode,onPositionChange]),Object(react.useEffect)((()=>{if(refNode&&onScaleChange)return bindEvent(refNode,"scalechange",onScaleChange)}),[refNode,onScaleChange]),Object(react.createElement)("figspec-frame-viewer",Object.assign({ref:refCb,class:className,"pan-speed":panSpeed,"zoom-margin":zoomMargin,"zoom-speed":zoomSpeed},rest))})),es2015_FigspecFileViewer=Object(react.forwardRef)(((_a,ref)=>{var{documentNode:documentNode,renderedImages:renderedImages,className:className,panSpeed:panSpeed,zoomMargin:zoomMargin,zoomSpeed:zoomSpeed,onNodeSelect:onNodeSelect,onPositionChange:onPositionChange,onScaleChange:onScaleChange}=_a,rest=__rest(_a,["documentNode","renderedImages","className","panSpeed","zoomMargin","zoomSpeed","onNodeSelect","onPositionChange","onScaleChange"]);const[refNode,setNode]=Object(react.useState)(null);Object(react.useImperativeHandle)(ref,(()=>refNode),[refNode]);const refCb=Object(react.useCallback)((node=>{node&&(setNode(node),node.documentNode=documentNode,node.renderedImages=renderedImages)}),[]);return Object(react.useEffect)((()=>{refNode&&(refNode.documentNode=documentNode,refNode.renderedImages=renderedImages)}),[refNode,documentNode,renderedImages]),Object(react.useEffect)((()=>{if(refNode&&onNodeSelect)return bindEvent(refNode,"nodeselect",onNodeSelect)}),[refNode,onNodeSelect]),Object(react.useEffect)((()=>{if(refNode&&onPositionChange)return bindEvent(refNode,"positionchange",onPositionChange)}),[refNode,onPositionChange]),Object(react.useEffect)((()=>{if(refNode&&onScaleChange)return bindEvent(refNode,"scalechange",onScaleChange)}),[refNode,onScaleChange]),Object(react.createElement)("figspec-file-viewer",Object.assign({ref:refCb,class:className,"pan-speed":panSpeed,"zoom-margin":zoomMargin,"zoom-speed":zoomSpeed},rest))}))}}]);