/*
 Copyright Google Inc. All Rights Reserved.
 Use of this source code is governed by an MIT-style license that can be
 found in the LICENSE file at https://bangular.io/license
*/
/* tslint:disable */
// clang-format off
function $nextRef(){return++refCount}function $el(e,n,r,t){var o={kind:"E",index:n,name:r,ref:t?++refCount:0,children:[],props:NO_PROPS,domNode:null};return e.children[e.children.length]=o,o}function $cg(e,n,r,t){var o=n.children[e];if(o&&o.index===t)return o.childChanges=null,o;var a={kind:"G",index:t,cm:1,props:{},changes:null,childChanges:null,ref:++refCount,children:[],domNode:null,parent:n,$lastChange:refreshCount,$lastRefresh:refreshCount};return r.cm?n.children[n.children.length]=a:(n.children.splice(e,0,a),addChangeInstruction(a,{kind:"CG",node:a,parent:n,position:e,nextSibling:findNextDomSibling(n,e)})),a}function $lg(e,n){addChildChanges(e,n)}function $dg(e,n,r,t){for(var o=n.children[e];o&&o.index<t;){var a={kind:"DG",node:o,parent:n,position:e,nbrOfNextSiblings:n.children.length-1-e};n.children.splice(e,1),addChangeInstruction(o,a),addChildChanges(o,r),o=n.children[e]}}function $dt(e,n,r){var t={kind:"T",index:n,value:r,ref:++refCount,domNode:null};return e.children[e.children.length]=t}function $ct(e){return 0===e?"0":e||""}function $ut(e,n,r){n.value!==e&&(n.value=e,addChangeInstruction(r,{kind:"UT",value:e,node:n}))}function renderCpt(e){var n=$iv.node;if($iv.node=e,e.cpt){var r=e.cpt;if(!(r.$node.$lastRefresh===refreshCount)&&r.shouldUpdate&&!r.shouldUpdate())return;r.render(),r.$node.$lastRefresh=refreshCount}else e.render(e.props),e.$lastRefresh=refreshCount;$iv.node=n}function $refreshTemplate(e,n,r,t){var o=$iv.node,a=$iv.renderer;refreshCount++,r.childChanges=null,$iv.node=r,$iv.renderer=e,n(t),r.$lastRefresh=refreshCount,$iv.node=o,$iv.renderer=a;var i=[];retrieveChanges(r,i),e.processChanges(i)}function retrieveChanges(e,n,r){void 0===r&&(r=!0);var t,o=e.changes;if(t=e.childChanges){for(i=0;t.length>i;i++)retrieveChanges(t[i],n,r);r&&(e.childChanges=null)}if(o&&o.length){for(var a=n.length,i=0;o.length>i;i++,a++)n[a]=o[i];r&&(e.changes=null)}}function addChangeInstruction(e,n){e.changes?e.changes.splice(e.changes.length,0,n):e.changes=[n],e.$lastChange=refreshCount}function addChildChanges(e,n){(e.changes||e.childChanges)&&(n.childChanges?n.childChanges.push(e):n.childChanges=[e],n.$lastChange=refreshCount)}function findNextDomSibling(e,n,r){void 0===r&&(r=!1);var t,o=e.children;if(n+1<o.length)return"E"===(t=o[n+1]).kind?t:"T"===t.kind?t:"G"===t.kind?findNextDomSibling(t,-1,!0):findNextDomSibling(e,n+1);if("E"===e.kind)return null;if("G"===e.kind){var a=e.parent;if(a&&a!==e)for(var i=0;a.children.length>i;i++)if(a.children[i]===e)return findNextDomSibling(a,i)}return null}function htmlRenderer(e,n,r){return new Renderer(e,n,r)}function processChanges(e,n,r){for(var t=0,o=e;t<o.length;t++){var a=o[t];if("CG"===a.kind){var i=a;if(i.parent)insertGroupContent(i.node,i.parent.domNode,i.nextSibling,r);else{var d=r.createDocFragment();createDomNode(i.node,d,r,null),n.appendChild(d),replaceDomNode(d,n,i.node)}}else if("UT"===a.kind)(c=a.node)&&c.domNode&&(c.domNode.textContent=c.value);else if("UP"===a.kind){var l=a,c=l.node,s=l.name;c&&c.domNode&&(c.domNode.namespaceURI.match(RX_HTML)?c.domNode[s]=l.value:c.domNode.setAttribute(s,l.value))}else if("DG"===a.kind){var u=a;removeGroupFromDom(u.node,!0,0===u.position&&0===u.nbrOfNextSiblings)}else if("UA"===a.kind){var h=a;h.node.domNode.setAttribute(h.name,h.value)}else if("RG"===a.kind){var m=a;removeGroupFromDom(m.oldNode,!0,0===m.position&&null===m.nextSibling),insertGroupContent(m.newNode,m.parent?m.parent.domNode:null,m.nextSibling,r)}else if("UM"===a.kind){var f=a,p=f.node.domNode;if(f.names)updateMapValue(p,f.names[0],f.names[1],f.value);else if(f.name){var v=f.value;for(var g in v)"$"!==g[0]&&v.hasOwnProperty(g)&&updateMapValue(p,f.name,g,v[g])}}else console.error("[iv html renderer] Unsupported change kind: "+a.kind)}}function updateMapValue(e,n,r,t){"style"===n?e.style[r]=t:"class"===n||"className"===n||"classList"===n?t?e.classList.add(r):e.classList.remove(r):console.error("[iv html renderer] Unsupported property map:"+n)}function insertGroupContent(e,n,r,t){var o=t.createDocFragment(),a=null;if(n&&(a=n.namespaceURI)&&a.match(RX_HTML)&&(a=null),createDomNode(e,o,t,a),n){var i=!1;r?r.domNode&&(n.insertBefore(o,r.domNode),i=!0):(n.appendChild(o),i=!0),i&&replaceDomNode(o,n,e)}}function createDomNode(e,n,r,t){if(e.domNode){var o=e.domNode;return o.parentNode&&o.parentNode.removeChild(o),void n.appendChild(o)}switch(e.kind){case"E":createElementDomNode(e,n,r,t);break;case"G":e.domNode=n,processChildNodes(e,n,r,t);break;case"T":var a=r.createTextNode(e.value);e.domNode=a,n.appendChild(a);break;case"D":e.domNode=a;break;default:console.error("[iv html renderer] Invalid node kind: "+e.kind)}}function processChildNodes(e,n,r,t){for(var o=e.children,a=o.length,i=0;a>i;i++)createDomNode(o[i],n,r,t)}function createElementDomNode(e,n,r,t){var o,a,i=e.props,d=e.atts;if(d&&d.xmlns&&(t=d.xmlns),a=t?r.createElementNS(t,e.name):r.createElement(e.name),d)for(var l in d)d.hasOwnProperty(l)&&a.setAttribute(l,d[l]);if(i)if(t&&!t.match(RX_HTML))for(var l in i)i.hasOwnProperty(l)&&a.setAttribute(l,i[l]);else for(var l in i)if(i.hasOwnProperty(l)&&void 0!==(o=i[l]))if(o&&o.$isMap)if("classList"===l){var c=[];d&&(d.class?c.push(d.class):d.className&&c.push(d.className));for(var s in o)o.hasOwnProperty(s)&&"$"!==s[0]&&o[s]&&c.push(s);c.length&&(a.className=c.join(" "))}else"style"===l&&setMapProperties(a.style,o);else o.call?"o"===l[0]&&addEvtListener(a,e,l):a[l]=o;e.domNode=a,n.appendChild(a),processChildNodes(e,a,r,t)}function setMapProperties(e,n){for(var r in n)n.hasOwnProperty(r)&&"$"!==r[0]&&(e[r]=n[r])}function addEvtListener(e,n,r){e.addEventListener(r.substring(2),function(e){n.props[r].call(n,e)})}function removeGroupFromDom(e,n,r){var t,o=e.children,a=e.domNode;if(o){var i=o.length;n&&r&&countGroupDomChildren(e)===a.childNodes.length&&(a.textContent="",n=!1);for(var d=0;i>d;d++)"G"===(t=o[d]).kind?removeGroupFromDom(t,n,!1):"T"!==t.kind&&"E"!==t.kind||n&&t.domNode&&t.domNode.parentNode===a&&a.removeChild(t.domNode)}e.domNode=null}function countGroupDomChildren(e){for(var n,r,t=0,o=e.children,a=o.length,i=0;a>i;i++)"G"===(r=(n=o[i]).kind)?t+=countGroupDomChildren(n):"D"!==r&&t++;return t}function replaceDomNode(e,n,r){if(e!==n&&r.domNode===e&&(r.domNode=n,"G"===r.kind))for(var t=r.children,o=0;t.length>o;o++)replaceDomNode(e,n,t[o])}function getIntParameter(e){return parseInt(getStringParameter(e),10)}function getStringParameter(e){for(var n,r,t=document.querySelectorAll('input[name="'+e+'"]'),o=0;o<t.length;o++){var a=(r=t[o]).type;if("radio"!=a&&"checkbox"!=a||r.checked){n=r.value;break}}if(null==n)throw new Error("Could not find and input field with name "+e);return n}function bindAction(e,n){document.querySelector(e).addEventListener("click",n)}function profile(e,n,r){return function(){window.console.profile(r);for(var t=0,o=0;o++<150;){var a=window.performance.now();e(),t+=window.performance.now()-a,n()}window.console.profileEnd(),window.console.log("Iterations: "+o+"; time: "+t/o+" ms / iteration")}}function urlParamsToForm(){for(var e,n=/(\w+)=(\w+)/g,r=decodeURIComponent(location.search);e=n.exec(r);)for(var t=e[1],o=e[2],a=document.querySelectorAll('input[name="'+t+'"]'),i=void 0,d=0;d<a.length;d++)"radio"===(i=a[d]).type||"checkbox"===i.type?i.checked=i.value===o:i.value=o}function init(){maxRow=getIntParameter("rows"),maxCol=getIntParameter("cols"),tableCreateCount=0,numberData=[],charData=[];for(var e=0;e<=maxRow;e++){var n=[];numberData.push(n);var r=[];charData.push(r);for(var t=0;t<=maxCol;t++)n.push(new TableCell(e,t,t+"/"+e)),r.push(new TableCell(e,t,charValue(t)+"/"+charValue(e)))}}function charValue(e){return String.fromCharCode("A".charCodeAt(0)+e%26)}function buildTable(){return++tableCreateCount%2?numberData:charData}function refresh(e){renderer||(renderer=htmlRenderer(document.getElementById("root"),largeTable)),renderer.refresh({data:e})}function destroyDom(){refresh(emptyTable)}function createDom(){refresh(data=buildTable())}function getColor(e){return e%2?"":"grey"}function largeTable(e){var n,r,t,o,a,i,d,l,c=$iv.node,s=e.data;n=c.cm?$el($el(c,1,"table",0),2,"tbody",1):c.children[0].children[0],d=0;for(var u=0;u<s.length;u++){r=$cg(d,n,c,3),d++,0;var h=s[u];t=r.cm?$el(r,4,"tr",1):r.children[0],1,l=0;for(var m=0;m<h.length;m++){o=$cg(l,t,r,5),l++,0;var f=h[m];o.cm?((a=$el(o,6,"td",0)).atts={style:"background-color:"+getColor(f.row)},$dt(a,7,""+$ct(f.value)),o.cm=0):(i=(a=o.children[0]).children[0],$ut(""+$ct(f.value),i,o)),$lg(o,r)}r.cm?r.cm=0:$dg(l,t,r,8),$lg(r,c)}c.cm?c.cm=0:$dg(d,n,c,8)}function noop(){}var EMPTY_PROPS={},NO_PROPS=void 0,refreshCount=0,refCount=0,$iv={node:null,renderer:null,reset:function(e){1===e?refCount=0:2===e&&(refreshCount=0)},get refreshCount(){return refreshCount}},RX_HTML=/html/i,Renderer=function(){function e(e,n,r){this.htmlElement=e,this.vdFunction=n;var t=this.vdom={kind:"G",index:0,ref:$nextRef(),cm:1,changes:null,childChanges:null,children:[],domNode:null,parent:null,$lastChange:$iv.refreshCount,$lastRefresh:$iv.refreshCount},o={kind:"CG",node:t,parent:null,position:-1,nextSibling:null};t.changes=[o],this.doc=r||{createDocFragment:function(){return document.createDocumentFragment()},createTextNode:function(e){return document.createTextNode(e)},createElement:function(e){return document.createElement(e)},createElementNS:function(e,n){return document.createElementNS(e,n)}}}return e.prototype.refresh=function(e){$refreshTemplate(this,this.vdFunction,this.vdom,e)},e.prototype.processChanges=function(e){processChanges(e,this.htmlElement,this.doc)},e}();urlParamsToForm();var TableCell=function(){return function(e,n,r){this.row=e,this.col=n,this.value=r}}(),tableCreateCount,maxRow,maxCol,numberData,charData;init();var emptyTable=[],renderer,data;bindAction("#destroyDom",destroyDom),bindAction("#createDom",createDom),bindAction("#updateDomProfile",profile(createDom,noop,"update")),bindAction("#createDomProfile",profile(createDom,destroyDom,"create"));
// clang-format on
