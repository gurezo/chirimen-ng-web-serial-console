import{A as me,B as ge,C as ye,Ea as ve,Fa as Ae,Ka as Ie,La as Re,Ma as Oe,Na as Te,Oa as Ce,Q as Ee,R as Se,a as Yt,b as te,c as ee,d as st,e as ie,f as ne,g as ot,h as at,i as re,j as V,l as se,m as oe,n as k,o as z,p as ct,q,r as ae,s as ce,t as ue,u as le,v as ut,w as de,x as he,y as pe,z as fe}from"./chunk-7O5LOUBW.js";import{d as Jt}from"./chunk-FBRWC5RQ.js";import{Ab as Ht,Ba as $t,Cb as Kt,Fa as j,H as nt,I as D,Kc as Wt,L as Pt,Lc as Qt,N as Dt,O as jt,Pa as Bt,Q as kt,Va as B,Wa as G,Zb as Zt,a as x,b as w,bb as Gt,ca as zt,da as Ft,fa as Ut,i as et,ia as rt,ja as $,la as U,ma as _t,n as xt,p as bt,pa as b,q as Nt,r as wt,sa as N,t as it,ua as E,va as O,wb as Vt,x as Mt,y as M,yb as qt,yc as Xt,za as Lt}from"./chunk-SY5ZW7ZF.js";var di="@",hi=(()=>{let t=class t{constructor(e,n,s,a,u){this.doc=e,this.delegate=n,this.zone=s,this.animationType=a,this.moduleImpl=u,this._rendererFactoryPromise=null,this.scheduler=O(qt,{optional:!0})}ngOnDestroy(){this._engine?.flush()}loadImpl(){return(this.moduleImpl??import("./chunk-PAIAXYVI.js").then(n=>n)).catch(n=>{throw new _t(5300,!1)}).then(({\u0275createEngine:n,\u0275AnimationRendererFactory:s})=>{this._engine=n(this.animationType,this.doc);let a=new s(this.delegate,this._engine,this.zone);return this.delegate=a,a})}createRenderer(e,n){let s=this.delegate.createRenderer(e,n);if(s.\u0275type===0)return s;typeof s.throwOnSyntheticProps=="boolean"&&(s.throwOnSyntheticProps=!1);let a=new lt(s);return n?.data?.animation&&!this._rendererFactoryPromise&&(this._rendererFactoryPromise=this.loadImpl()),this._rendererFactoryPromise?.then(u=>{let g=u.createRenderer(e,n);a.use(g),this.scheduler?.notify(9)}).catch(u=>{a.use(s)}),a}begin(){this.delegate.begin?.()}end(){this.delegate.end?.()}whenRenderingDone(){return this.delegate.whenRenderingDone?.()??Promise.resolve()}};t.\u0275fac=function(n){Vt()},t.\u0275prov=b({token:t,factory:t.\u0275fac});let i=t;return i})(),lt=class{constructor(t){this.delegate=t,this.replay=[],this.\u0275type=1}use(t){if(this.delegate=t,this.replay!==null){for(let r of this.replay)r(t);this.replay=null}}get data(){return this.delegate.data}destroy(){this.replay=null,this.delegate.destroy()}createElement(t,r){return this.delegate.createElement(t,r)}createComment(t){return this.delegate.createComment(t)}createText(t){return this.delegate.createText(t)}get destroyNode(){return this.delegate.destroyNode}appendChild(t,r){this.delegate.appendChild(t,r)}insertBefore(t,r,e,n){this.delegate.insertBefore(t,r,e,n)}removeChild(t,r,e){this.delegate.removeChild(t,r,e)}selectRootElement(t,r){return this.delegate.selectRootElement(t,r)}parentNode(t){return this.delegate.parentNode(t)}nextSibling(t){return this.delegate.nextSibling(t)}setAttribute(t,r,e,n){this.delegate.setAttribute(t,r,e,n)}removeAttribute(t,r,e){this.delegate.removeAttribute(t,r,e)}addClass(t,r){this.delegate.addClass(t,r)}removeClass(t,r){this.delegate.removeClass(t,r)}setStyle(t,r,e,n){this.delegate.setStyle(t,r,e,n)}removeStyle(t,r,e){this.delegate.removeStyle(t,r,e)}setProperty(t,r,e){this.shouldReplay(r)&&this.replay.push(n=>n.setProperty(t,r,e)),this.delegate.setProperty(t,r,e)}setValue(t,r){this.delegate.setValue(t,r)}listen(t,r,e){return this.shouldReplay(r)&&this.replay.push(n=>n.listen(t,r,e)),this.delegate.listen(t,r,e)}shouldReplay(t){return this.replay!==null&&t.startsWith(di)}};function xe(i="animations"){return Kt("NgAsyncAnimations"),j([{provide:Ht,useFactory:(t,r,e)=>new hi(t,r,e,i),deps:[Jt,te,B]},{provide:Gt,useValue:i==="noop"?"NoopAnimations":"BrowserAnimations"}])}var Me="@ngrx/router-store/request",Xi=k(Me,z()),Pe="@ngrx/router-store/navigation",Wi=k(Pe,z()),De="@ngrx/router-store/cancel",Qi=k(De,z()),je="@ngrx/router-store/error",Ji=k(je,z()),ke="@ngrx/router-store/navigated",Yi=k(ke,z());var H=class{serialize(t){return{root:this.serializeRoute(t.root),url:t.url}}serializeRoute(t){let r=t.children.map(e=>this.serializeRoute(e));return{params:t.params,data:t.data,url:t.url,outlet:t.outlet,title:t.title,routeConfig:t.routeConfig?{path:t.routeConfig.path,pathMatch:t.routeConfig.pathMatch,redirectTo:t.routeConfig.redirectTo,outlet:t.routeConfig.outlet,title:typeof t.routeConfig.title=="string"?t.routeConfig.title:void 0}:null,queryParams:t.queryParams,fragment:t.fragment,firstChild:r[0],children:r}}},ht=function(i){return i[i.PreActivation=1]="PreActivation",i[i.PostActivation=2]="PostActivation",i}(ht||{}),gi="router",be=new N("@ngrx/router-store Internal Configuration"),ze=new N("@ngrx/router-store Configuration");function yi(i){return x({stateKey:gi,serializer:H,navigationActionTiming:ht.PreActivation},i)}var K=class{serialize(t){return{root:this.serializeRoute(t.root),url:t.url}}serializeRoute(t){let r=t.children.map(e=>this.serializeRoute(e));return{params:t.params,paramMap:t.paramMap,data:t.data,url:t.url,outlet:t.outlet,title:t.title,routeConfig:t.routeConfig?{component:t.routeConfig.component,path:t.routeConfig.path,pathMatch:t.routeConfig.pathMatch,redirectTo:t.routeConfig.redirectTo,outlet:t.routeConfig.outlet,title:t.routeConfig.title}:null,queryParams:t.queryParams,queryParamMap:t.queryParamMap,fragment:t.fragment,component:t.routeConfig?t.routeConfig.component:void 0,root:void 0,parent:void 0,firstChild:r[0],pathFromRoot:void 0,children:r}}},Z=class{},T=function(i){return i[i.NONE=1]="NONE",i[i.ROUTER=2]="ROUTER",i[i.STORE=3]="STORE",i}(T||{}),Ne=(()=>{let t=class t{constructor(e,n,s,a,u,g){this.store=e,this.router=n,this.serializer=s,this.errorHandler=a,this.config=u,this.activeRuntimeChecks=g,this.lastEvent=null,this.routerState=null,this.trigger=T.NONE,this.stateKey=this.config.stateKey,!me()&&Qt()&&(g?.strictActionSerializability||g?.strictStateSerializability)&&this.serializer instanceof K&&console.warn("@ngrx/router-store: The serializability runtime checks cannot be enabled with the FullRouterStateSerializer. The FullRouterStateSerializer has an unserializable router state and actions that are not serializable. To use the serializability runtime checks either use the MinimalRouterStateSerializer or implement a custom router state serializer."),this.setUpStoreStateListener(),this.setUpRouterEventsListener()}setUpStoreStateListener(){this.store.pipe(fe(this.stateKey),U(this.store)).subscribe(([e,n])=>{this.navigateIfNeeded(e,n)})}navigateIfNeeded(e,n){if(!e||!e.state||this.trigger===T.ROUTER||this.lastEvent instanceof st)return;let s=e.state.url;Ei(this.router.url,s)||(this.storeState=n,this.trigger=T.STORE,this.router.navigateByUrl(s).catch(a=>{this.errorHandler.handleError(a)}))}setUpRouterEventsListener(){let e=this.config.navigationActionTiming===ht.PostActivation,n;this.router.events.pipe(U(this.store)).subscribe(([s,a])=>{this.lastEvent=s,s instanceof st?(this.routerState=this.serializer.serialize(this.router.routerState.snapshot),this.trigger!==T.STORE&&(this.storeState=a,this.dispatchRouterRequest(s))):s instanceof at?(n=s,!e&&this.trigger!==T.STORE&&this.dispatchRouterNavigation(s)):s instanceof ne?(this.dispatchRouterCancel(s),this.reset()):s instanceof ot?(this.dispatchRouterError(s),this.reset()):s instanceof ie&&(this.trigger!==T.STORE&&(e&&this.dispatchRouterNavigation(n),this.dispatchRouterNavigated(s)),this.reset())})}dispatchRouterRequest(e){this.dispatchRouterAction(Me,{event:e})}dispatchRouterNavigation(e){let n=this.serializer.serialize(e.state);this.dispatchRouterAction(Pe,{routerState:n,event:new at(e.id,e.url,e.urlAfterRedirects,n)})}dispatchRouterCancel(e){this.dispatchRouterAction(De,{storeState:this.storeState,event:e})}dispatchRouterError(e){this.dispatchRouterAction(je,{storeState:this.storeState,event:new ot(e.id,e.url,`${e}`)})}dispatchRouterNavigated(e){let n=this.serializer.serialize(this.router.routerState.snapshot);this.dispatchRouterAction(ke,{event:e,routerState:n})}dispatchRouterAction(e,n){this.trigger=T.ROUTER;try{this.store.dispatch({type:e,payload:w(x({routerState:this.routerState},n),{event:this.config.routerState===0?n.event:{id:n.event.id,url:n.event.url,urlAfterRedirects:n.event.urlAfterRedirects}})})}finally{this.trigger=T.NONE}}reset(){this.trigger=T.NONE,this.storeState=null,this.routerState=null}};t.\u0275fac=function(n){return new(n||t)(E(pe),E(V),E(Z),E(G),E(ze),E(ce))},t.\u0275prov=b({token:t,factory:t.\u0275fac});let i=t;return i})();function Ei(i,t){return we(i)===we(t)}function we(i){return i?.length>0&&i[i.length-1]==="/"?i.substring(0,i.length-1):i}function Fe(i={}){return j([{provide:be,useValue:i},{provide:ze,useFactory:yi,deps:[be]},{provide:Z,useClass:i.serializer?i.serializer:i.routerState===0?K:H},{provide:Lt,multi:!0,useFactory(){return()=>O(Ne)}},Ne])}var L="PERFORM_ACTION",Si="REFRESH",Ge="RESET",Ve="ROLLBACK",qe="COMMIT",He="SWEEP",Ke="TOGGLE_ACTION",vi="SET_ACTIONS_ACTIVE",Ze="JUMP_TO_STATE",Xe="JUMP_TO_ACTION",Tt="IMPORT_STATE",We="LOCK_CHANGES",Qe="PAUSE_RECORDING",F=class{constructor(t,r){if(this.action=t,this.timestamp=r,this.type=L,typeof t.type>"u")throw new Error('Actions may not have an undefined "type" property. Have you misspelled a constant?')}},pt=class{constructor(){this.type=Si}},ft=class{constructor(t){this.timestamp=t,this.type=Ge}},mt=class{constructor(t){this.timestamp=t,this.type=Ve}},gt=class{constructor(t){this.timestamp=t,this.type=qe}},yt=class{constructor(){this.type=He}},Et=class{constructor(t){this.id=t,this.type=Ke}};var St=class{constructor(t){this.index=t,this.type=Ze}},vt=class{constructor(t){this.actionId=t,this.type=Xe}},At=class{constructor(t){this.nextLiftedState=t,this.type=Tt}},It=class{constructor(t){this.status=t,this.type=We}},Rt=class{constructor(t){this.status=t,this.type=Qe}};var J=new N("@ngrx/store-devtools Options"),Ue=new N("@ngrx/store-devtools Initial Config");function Je(){return null}var Ai="NgRx Store DevTools";function Ii(i){let t={maxAge:!1,monitor:Je,actionSanitizer:void 0,stateSanitizer:void 0,name:Ai,serialize:!1,logOnly:!1,autoPause:!1,trace:!1,traceLimit:75,features:{pause:!0,lock:!0,persist:!0,export:!0,import:"custom",jump:!0,skip:!0,reorder:!0,dispatch:!0,test:!0},connectInZone:!1},r=typeof i=="function"?i():i,e=r.logOnly?{pause:!0,export:!0,test:!0}:!1,n=r.features||e||t.features;n.import===!0&&(n.import="custom");let s=Object.assign({},t,{features:n},r);if(s.maxAge&&s.maxAge<2)throw new Error(`Devtools 'maxAge' cannot be less than 2, got ${s.maxAge}`);return s}function _e(i,t){return i.filter(r=>t.indexOf(r)<0)}function Ye(i){let{computedStates:t,currentStateIndex:r}=i;if(r>=t.length){let{state:n}=t[t.length-1];return n}let{state:e}=t[r];return e}function _(i){return new F(i,+Date.now())}function Ri(i,t){return Object.keys(t).reduce((r,e)=>{let n=Number(e);return r[n]=ti(i,t[n],n),r},{})}function ti(i,t,r){return w(x({},t),{action:i(t.action,r)})}function Oi(i,t){return t.map((r,e)=>({state:ei(i,r.state,e),error:r.error}))}function ei(i,t,r){return i(t,r)}function ii(i){return i.predicate||i.actionsSafelist||i.actionsBlocklist}function Ti(i,t,r,e){let n=[],s={},a=[];return i.stagedActionIds.forEach((u,g)=>{let d=i.actionsById[u];d&&(g&&Ct(i.computedStates[g],d,t,r,e)||(s[u]=d,n.push(u),a.push(i.computedStates[g])))}),w(x({},i),{stagedActionIds:n,actionsById:s,computedStates:a})}function Ct(i,t,r,e,n){let s=r&&!r(i,t.action),a=e&&!t.action.type.match(e.map(g=>Le(g)).join("|")),u=n&&t.action.type.match(n.map(g=>Le(g)).join("|"));return s||a||u}function Le(i){return i.replace(/[.*+?^${}()|[\]\\]/g,"\\$&")}function ni(i){return{ngZone:i?O(B):null,connectInZone:i}}var Y=(()=>{let t=class t extends q{};t.\u0275fac=(()=>{let e;return function(s){return(e||(e=Bt(t)))(s||t)}})(),t.\u0275prov=b({token:t,factory:t.\u0275fac});let i=t;return i})(),X={START:"START",DISPATCH:"DISPATCH",STOP:"STOP",ACTION:"ACTION"},Ot=new N("@ngrx/store-devtools Redux Devtools Extension"),ri=(()=>{let t=class t{constructor(e,n,s){this.config=n,this.dispatcher=s,this.zoneConfig=ni(this.config.connectInZone),this.devtoolsExtension=e,this.createActionStreams()}notify(e,n){if(this.devtoolsExtension)if(e.type===L){if(n.isLocked||n.isPaused)return;let s=Ye(n);if(ii(this.config)&&Ct(s,e,this.config.predicate,this.config.actionsSafelist,this.config.actionsBlocklist))return;let a=this.config.stateSanitizer?ei(this.config.stateSanitizer,s,n.currentStateIndex):s,u=this.config.actionSanitizer?ti(this.config.actionSanitizer,e,n.nextActionId):e;this.sendToReduxDevtools(()=>this.extensionConnection.send(u,a))}else{let s=w(x({},n),{stagedActionIds:n.stagedActionIds,actionsById:this.config.actionSanitizer?Ri(this.config.actionSanitizer,n.actionsById):n.actionsById,computedStates:this.config.stateSanitizer?Oi(this.config.stateSanitizer,n.computedStates):n.computedStates});this.sendToReduxDevtools(()=>this.devtoolsExtension.send(null,s,this.getExtensionConfig(this.config)))}}createChangesObservable(){return this.devtoolsExtension?new et(e=>{let n=this.zoneConfig.connectInZone?this.zoneConfig.ngZone.runOutsideAngular(()=>this.devtoolsExtension.connect(this.getExtensionConfig(this.config))):this.devtoolsExtension.connect(this.getExtensionConfig(this.config));return this.extensionConnection=n,n.init(),n.subscribe(s=>e.next(s)),n.unsubscribe}):Nt}createActionStreams(){let e=this.createChangesObservable().pipe(Ft()),n=e.pipe(D(c=>c.type===X.START)),s=e.pipe(D(c=>c.type===X.STOP)),a=e.pipe(D(c=>c.type===X.DISPATCH),M(c=>this.unwrapAction(c.payload)),Dt(c=>c.type===Tt?this.dispatcher.pipe(D(o=>o.type===ut),Mt(1e3),jt(1e3),M(()=>c),Pt(()=>it(c)),kt(1)):it(c))),g=e.pipe(D(c=>c.type===X.ACTION),M(c=>this.unwrapAction(c.payload))).pipe($(s)),d=a.pipe($(s));this.start$=n.pipe($(s)),this.actions$=this.start$.pipe(rt(()=>g)),this.liftedActions$=this.start$.pipe(rt(()=>d))}unwrapAction(e){return typeof e=="string"?(0,eval)(`(${e})`):e}getExtensionConfig(e){let n={name:e.name,features:e.features,serialize:e.serialize,autoPause:e.autoPause??!1,trace:e.trace??!1,traceLimit:e.traceLimit??75};return e.maxAge!==!1&&(n.maxAge=e.maxAge),n}sendToReduxDevtools(e){try{e()}catch(n){console.warn("@ngrx/store-devtools: something went wrong inside the redux devtools",n)}}};t.\u0275fac=function(n){return new(n||t)(E(Ot),E(J),E(Y))},t.\u0275prov=b({token:t,factory:t.\u0275fac});let i=t;return i})(),Q={type:ct},Ci="@ngrx/store-devtools/recompute",xi={type:Ci};function si(i,t,r,e,n){if(e)return{state:r,error:"Interrupted by an error up the chain"};let s=r,a;try{s=i(r,t)}catch(u){a=u.toString(),n.handleError(u)}return{state:s,error:a}}function W(i,t,r,e,n,s,a,u,g){if(t>=i.length&&i.length===s.length)return i;let d=i.slice(0,t),c=s.length-(g?1:0);for(let o=t;o<c;o++){let f=s[o],v=n[f].action,h=d[o-1],l=h?h.state:e,I=h?h.error:void 0,R=a.indexOf(f)>-1?h:si(r,v,l,I,u);d.push(R)}return g&&d.push(i[i.length-1]),d}function bi(i,t){return{monitorState:t(void 0,{}),nextActionId:1,actionsById:{0:_(Q)},stagedActionIds:[0],skippedActionIds:[],committedState:i,currentStateIndex:0,computedStates:[],isLocked:!1,isPaused:!1}}function Ni(i,t,r,e,n={}){return s=>(a,u)=>{let{monitorState:g,actionsById:d,nextActionId:c,stagedActionIds:o,skippedActionIds:f,committedState:v,currentStateIndex:h,computedStates:l,isLocked:I,isPaused:S}=a||t;a||(d=Object.create(d));function R(y){let m=y,C=o.slice(1,m+1);for(let A=0;A<C.length;A++)if(l[A+1].error){m=A,C=o.slice(1,m+1);break}else delete d[C[A]];f=f.filter(A=>C.indexOf(A)===-1),o=[0,...o.slice(m+1)],v=l[m].state,l=l.slice(m),h=h>m?h-m:0}function P(){d={0:_(Q)},c=1,o=[0],f=[],v=l[h].state,h=0,l=[]}let p=0;switch(u.type){case We:{I=u.status,p=1/0;break}case Qe:{S=u.status,S?(o=[...o,c],d[c]=new F({type:"@ngrx/devtools/pause"},+Date.now()),c++,p=o.length-1,l=l.concat(l[l.length-1]),h===o.length-2&&h++,p=1/0):P();break}case Ge:{d={0:_(Q)},c=1,o=[0],f=[],v=i,h=0,l=[];break}case qe:{P();break}case Ve:{d={0:_(Q)},c=1,o=[0],f=[],h=0,l=[];break}case Ke:{let{id:y}=u;f.indexOf(y)===-1?f=[y,...f]:f=f.filter(C=>C!==y),p=o.indexOf(y);break}case vi:{let{start:y,end:m,active:C}=u,A=[];for(let tt=y;tt<m;tt++)A.push(tt);C?f=_e(f,A):f=[...f,...A],p=o.indexOf(y);break}case Ze:{h=u.index,p=1/0;break}case Xe:{let y=o.indexOf(u.actionId);y!==-1&&(h=y),p=1/0;break}case He:{o=_e(o,f),f=[],h=Math.min(h,o.length-1);break}case L:{if(I)return a||t;if(S||a&&Ct(a.computedStates[h],u,n.predicate,n.actionsSafelist,n.actionsBlocklist)){let m=l[l.length-1];l=[...l.slice(0,-1),si(s,u.action,m.state,m.error,r)],p=1/0;break}n.maxAge&&o.length===n.maxAge&&R(1),h===o.length-1&&h++;let y=c++;d[y]=u,o=[...o,y],p=o.length-1;break}case Tt:{({monitorState:g,actionsById:d,nextActionId:c,stagedActionIds:o,skippedActionIds:f,committedState:v,currentStateIndex:h,computedStates:l,isLocked:I,isPaused:S}=u.nextLiftedState);break}case ct:{p=0,n.maxAge&&o.length>n.maxAge&&(l=W(l,p,s,v,d,o,f,r,S),R(o.length-n.maxAge),p=1/0);break}case ut:{if(l.filter(m=>m.error).length>0)p=0,n.maxAge&&o.length>n.maxAge&&(l=W(l,p,s,v,d,o,f,r,S),R(o.length-n.maxAge),p=1/0);else{if(!S&&!I){h===o.length-1&&h++;let m=c++;d[m]=new F(u,+Date.now()),o=[...o,m],p=o.length-1,l=W(l,p,s,v,d,o,f,r,S)}l=l.map(m=>w(x({},m),{state:s(m.state,xi)})),h=o.length-1,n.maxAge&&o.length>n.maxAge&&R(o.length-n.maxAge),p=1/0}break}default:{p=1/0;break}}return l=W(l,p,s,v,d,o,f,r,S),g=e(g,u),{monitorState:g,actionsById:d,nextActionId:c,stagedActionIds:o,skippedActionIds:f,committedState:v,currentStateIndex:h,computedStates:l,isLocked:I,isPaused:S}}}var $e=(()=>{let t=class t{constructor(e,n,s,a,u,g,d,c){let o=bi(d,c.monitor),f=Ni(d,o,g,c.monitor,c),v=nt(nt(n.asObservable().pipe(Ut(1)),a.actions$).pipe(M(_)),e,a.liftedActions$).pipe(wt(bt)),h=s.pipe(M(f)),l=ni(c.connectInZone),I=new xt(1);this.liftedStateSubscription=v.pipe(U(h),Be(l),zt(({state:P},[p,y])=>{let m=y(P,p);return p.type!==L&&ii(c)&&(m=Ti(m,c.predicate,c.actionsSafelist,c.actionsBlocklist)),a.notify(p,m),{state:m,action:p}},{state:o,action:null})).subscribe(({state:P,action:p})=>{if(I.next(P),p.type===L){let y=p.action;u.next(y)}}),this.extensionStartSubscription=a.start$.pipe(Be(l)).subscribe(()=>{this.refresh()});let S=I.asObservable(),R=S.pipe(M(Ye));Object.defineProperty(R,"state",{value:oe(R,{manualCleanup:!0,requireSync:!0})}),this.dispatcher=e,this.liftedState=S,this.state=R}ngOnDestroy(){this.liftedStateSubscription.unsubscribe(),this.extensionStartSubscription.unsubscribe()}dispatch(e){this.dispatcher.next(e)}next(e){this.dispatcher.next(e)}error(e){}complete(){}performAction(e){this.dispatch(new F(e,+Date.now()))}refresh(){this.dispatch(new pt)}reset(){this.dispatch(new ft(+Date.now()))}rollback(){this.dispatch(new mt(+Date.now()))}commit(){this.dispatch(new gt(+Date.now()))}sweep(){this.dispatch(new yt)}toggleAction(e){this.dispatch(new Et(e))}jumpToAction(e){this.dispatch(new vt(e))}jumpToState(e){this.dispatch(new St(e))}importState(e){this.dispatch(new At(e))}lockChanges(e){this.dispatch(new It(e))}pauseRecording(e){this.dispatch(new Rt(e))}};t.\u0275fac=function(n){return new(n||t)(E(Y),E(q),E(ue),E(ri),E(de),E(G),E(ae),E(J))},t.\u0275prov=b({token:t,factory:t.\u0275fac});let i=t;return i})();function Be({ngZone:i,connectInZone:t}){return r=>t?new et(e=>r.subscribe({next:n=>i.run(()=>e.next(n)),error:n=>i.run(()=>e.error(n)),complete:()=>i.run(()=>e.complete())})):r}var wi=new N("@ngrx/store-devtools Is Devtools Extension or Monitor Present");function Mi(i,t){return!!i||t.monitor!==Je}function Pi(){let i="__REDUX_DEVTOOLS_EXTENSION__";return typeof window=="object"&&typeof window[i]<"u"?window[i]:null}function oi(i={}){return j([ri,Y,$e,{provide:Ue,useValue:i},{provide:wi,deps:[Ot,J],useFactory:Mi},{provide:Ot,useFactory:Pi},{provide:J,deps:[Ue],useFactory:Ii},{provide:he,deps:[$e],useFactory:Di},{provide:le,useExisting:Y}])}function Di(i){return i.state}var ai=()=>{let i=O(V),t=window.navigator.userAgent.toLowerCase(),r=/chrome/.test(t)&&!/edge|opr/.test(t),e=/edg/.test(t),n=/opr/.test(t);return r||e||n?!0:(i.navigate(["/unsupported-browser"]),!1)};var ci=[{path:"",loadComponent:()=>import("./chunk-4MGOXG75.js"),canActivate:[ai]},{path:"unsupported-browser",loadComponent:()=>import("./chunk-P44OCIWO.js")},{path:"**",loadComponent:()=>import("./chunk-AB5SGV2X.js")}];var ui={providers:[Wt({eventCoalescing:!0}),se(ci),xe(),Se({timeOut:2e3,positionClass:"toast-top-center",preventDuplicates:!0}),Yt(),Ee(Ae),ge({[Re]:Oe,[Ce]:Te}),ye([Ie]),oi({maxAge:25,connectInZone:!0,autoPause:!0,trace:!1,traceLimit:75}),Fe()]};var li=(()=>{let t=class t{constructor(){this.title="CHIRIMEN Lite DashBoard",this.iconService=O(ve)}ngOnInit(){this.iconService.registIcons()}};t.\u0275fac=function(n){return new(n||t)},t.\u0275cmp=$t({type:t,selectors:[["app-root"]],standalone:!0,features:[Xt],decls:1,vars:0,template:function(n,s){n&1&&Zt(0,"router-outlet")},dependencies:[re]});let i=t;return i})();ee(li,ui).catch(i=>console.error(i));
