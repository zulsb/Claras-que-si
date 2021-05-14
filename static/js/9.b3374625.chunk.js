/*! For license information please see 9.b3374625.chunk.js.LICENSE.txt */
(this["webpackJsonpclaras-que-si"]=this["webpackJsonpclaras-que-si"]||[]).push([[9],{77:function(t,e,i){"use strict";i.r(e);var s,r=i(5),n=(i(67),i(0)),o=i(6),a=i(16),c=i(24),u=function(){function t(t,e,i,s){this.client=t,this.storage=e,this.storageCache=i,this.logger=s}return t.prototype.isCachedDataFresh=function(t,e){if(!e)return this.logger.debug("Config fetch cache check. Cache unpopulated."),!1;var i=Date.now()-e,s=i<=t;return this.logger.debug("Config fetch cache check. Cache age millis: "+i+". Cache max age millis (minimumFetchIntervalMillis setting): "+t+". Is cache hit: "+s+"."),s},t.prototype.fetch=function(t){return Object(n.b)(this,void 0,void 0,(function(){var e,i,s,r,o;return Object(n.d)(this,(function(n){switch(n.label){case 0:return[4,Promise.all([this.storage.getLastSuccessfulFetchTimestampMillis(),this.storage.getLastSuccessfulFetchResponse()])];case 1:return e=n.sent(),i=e[0],(s=e[1])&&this.isCachedDataFresh(t.cacheMaxAgeMillis,i)?[2,s]:(t.eTag=s&&s.eTag,[4,this.client.fetch(t)]);case 2:return r=n.sent(),o=[this.storageCache.setLastSuccessfulFetchTimestampMillis(Date.now())],200===r.status&&o.push(this.storage.setLastSuccessfulFetchResponse(r)),[4,Promise.all(o)];case 3:return n.sent(),[2,r]}}))}))},t}(),h=((s={})["registration-window"]="Undefined window object. This SDK only supports usage in a browser environment.",s["registration-project-id"]="Undefined project identifier. Check Firebase app initialization.",s["registration-api-key"]="Undefined API key. Check Firebase app initialization.",s["registration-app-id"]="Undefined app identifier. Check Firebase app initialization.",s["storage-open"]="Error thrown when opening storage. Original error: {$originalErrorMessage}.",s["storage-get"]="Error thrown when reading from storage. Original error: {$originalErrorMessage}.",s["storage-set"]="Error thrown when writing to storage. Original error: {$originalErrorMessage}.",s["storage-delete"]="Error thrown when deleting from storage. Original error: {$originalErrorMessage}.",s["fetch-client-network"]="Fetch client failed to connect to a network. Check Internet connection. Original error: {$originalErrorMessage}.",s["fetch-timeout"]='The config fetch request timed out.  Configure timeout using "fetchTimeoutMillis" SDK setting.',s["fetch-throttle"]='The config fetch request timed out while in an exponential backoff state. Configure timeout using "fetchTimeoutMillis" SDK setting. Unix timestamp in milliseconds when fetch request throttling ends: {$throttleEndTimeMillis}.',s["fetch-client-parse"]="Fetch client could not parse response. Original error: {$originalErrorMessage}.",s["fetch-status"]="Fetch server returned an HTTP error status. HTTP status: {$httpStatus}.",s),l=new o.b("remoteconfig","Remote Config",h);var f=function(){function t(t,e,i,s,r,n){this.firebaseInstallations=t,this.sdkVersion=e,this.namespace=i,this.projectId=s,this.apiKey=r,this.appId=n}return t.prototype.fetch=function(t){return Object(n.b)(this,void 0,void 0,(function(){var e,i,s,r,o,a,c,u,h,f,g,p,d,m,v,b,_,y,w;return Object(n.d)(this,(function(n){switch(n.label){case 0:return[4,Promise.all([this.firebaseInstallations.getId(),this.firebaseInstallations.getToken()])];case 1:e=n.sent(),i=e[0],s=e[1],r=window.FIREBASE_REMOTE_CONFIG_URL_BASE||"https://firebaseremoteconfig.googleapis.com",o=r+"/v1/projects/"+this.projectId+"/namespaces/"+this.namespace+":fetch?key="+this.apiKey,a={"Content-Type":"application/json","Content-Encoding":"gzip","If-None-Match":t.eTag||"*"},c={sdk_version:this.sdkVersion,app_instance_id:i,app_instance_id_token:s,app_id:this.appId,language_code:(void 0===C&&(C=navigator),C.languages&&C.languages[0]||C.language)},u={method:"POST",headers:a,body:JSON.stringify(c)},h=fetch(o,u),f=new Promise((function(e,i){t.signal.addEventListener((function(){var t=new Error("The operation was aborted.");t.name="AbortError",i(t)}))})),n.label=2;case 2:return n.trys.push([2,5,,6]),[4,Promise.race([h,f])];case 3:return n.sent(),[4,h];case 4:return g=n.sent(),[3,6];case 5:throw p=n.sent(),d="fetch-client-network","AbortError"===p.name&&(d="fetch-timeout"),l.create(d,{originalErrorMessage:p.message});case 6:if(m=g.status,v=g.headers.get("ETag")||void 0,200!==g.status)return[3,11];y=void 0,n.label=7;case 7:return n.trys.push([7,9,,10]),[4,g.json()];case 8:return y=n.sent(),[3,10];case 9:throw w=n.sent(),l.create("fetch-client-parse",{originalErrorMessage:w.message});case 10:b=y.entries,_=y.state,n.label=11;case 11:if("INSTANCE_STATE_UNSPECIFIED"===_?m=500:"NO_CHANGE"===_?m=304:"NO_TEMPLATE"!==_&&"EMPTY_CONFIG"!==_||(b={}),304!==m&&200!==m)throw l.create("fetch-status",{httpStatus:m});return[2,{status:m,eTag:v,config:b}]}var C}))}))},t}(),g=function(){function t(){this.listeners=[]}return t.prototype.addEventListener=function(t){this.listeners.push(t)},t.prototype.abort=function(){this.listeners.forEach((function(t){return t()}))},t}(),p=["1","true","t","yes","y","on"],d=function(){function t(t,e){void 0===e&&(e=""),this._source=t,this._value=e}return t.prototype.asString=function(){return this._value},t.prototype.asBoolean=function(){return"static"!==this._source&&p.indexOf(this._value.toLowerCase())>=0},t.prototype.asNumber=function(){if("static"===this._source)return 0;var t=Number(this._value);return isNaN(t)&&(t=0),t},t.prototype.getSource=function(){return this._source},t}(),m=function(){function t(t,e,i,s,r){this.app=t,this._client=e,this._storageCache=i,this._storage=s,this._logger=r,this._isInitializationComplete=!1,this.settings={fetchTimeoutMillis:6e4,minimumFetchIntervalMillis:432e5},this.defaultConfig={}}return t.prototype.setLogLevel=function(t){switch(t){case"debug":this._logger.logLevel=a.a.DEBUG;break;case"silent":this._logger.logLevel=a.a.SILENT;break;default:this._logger.logLevel=a.a.ERROR}},Object.defineProperty(t.prototype,"fetchTimeMillis",{get:function(){return this._storageCache.getLastSuccessfulFetchTimestampMillis()||-1},enumerable:!1,configurable:!0}),Object.defineProperty(t.prototype,"lastFetchStatus",{get:function(){return this._storageCache.getLastFetchStatus()||"no-fetch-yet"},enumerable:!1,configurable:!0}),t.prototype.activate=function(){return Object(n.b)(this,void 0,void 0,(function(){var t,e,i;return Object(n.d)(this,(function(s){switch(s.label){case 0:return[4,Promise.all([this._storage.getLastSuccessfulFetchResponse(),this._storage.getActiveConfigEtag()])];case 1:return t=s.sent(),e=t[0],i=t[1],e&&e.config&&e.eTag&&e.eTag!==i?[4,Promise.all([this._storageCache.setActiveConfig(e.config),this._storage.setActiveConfigEtag(e.eTag)])]:[2,!1];case 2:return s.sent(),[2,!0]}}))}))},t.prototype.ensureInitialized=function(){var t=this;return this._initializePromise||(this._initializePromise=this._storageCache.loadFromStorage().then((function(){t._isInitializationComplete=!0}))),this._initializePromise},t.prototype.fetch=function(){return Object(n.b)(this,void 0,void 0,(function(){var t,e,i,s=this;return Object(n.d)(this,(function(r){switch(r.label){case 0:t=new g,setTimeout((function(){return Object(n.b)(s,void 0,void 0,(function(){return Object(n.d)(this,(function(e){return t.abort(),[2]}))}))}),this.settings.fetchTimeoutMillis),r.label=1;case 1:return r.trys.push([1,4,,6]),[4,this._client.fetch({cacheMaxAgeMillis:this.settings.minimumFetchIntervalMillis,signal:t})];case 2:return r.sent(),[4,this._storageCache.setLastFetchStatus("success")];case 3:return r.sent(),[3,6];case 4:return e=r.sent(),c="fetch-throttle",i=(a=e)instanceof o.c&&-1!==a.code.indexOf(c)?"throttle":"failure",[4,this._storageCache.setLastFetchStatus(i)];case 5:throw r.sent(),e;case 6:return[2]}var a,c}))}))},t.prototype.fetchAndActivate=function(){return Object(n.b)(this,void 0,void 0,(function(){return Object(n.d)(this,(function(t){switch(t.label){case 0:return[4,this.fetch()];case 1:return t.sent(),[2,this.activate()]}}))}))},t.prototype.getAll=function(){var t=this;return function(t,e){void 0===t&&(t={});void 0===e&&(e={});return Object.keys(Object(n.a)(Object(n.a)({},t),e))}(this._storageCache.getActiveConfig(),this.defaultConfig).reduce((function(e,i){return e[i]=t.getValue(i),e}),{})},t.prototype.getBoolean=function(t){return this.getValue(t).asBoolean()},t.prototype.getNumber=function(t){return this.getValue(t).asNumber()},t.prototype.getString=function(t){return this.getValue(t).asString()},t.prototype.getValue=function(t){this._isInitializationComplete||this._logger.debug('A value was requested for key "'+t+'" before SDK initialization completed. Await on ensureInitialized if the intent was to get a previously activated value.');var e=this._storageCache.getActiveConfig();return e&&void 0!==e[t]?new d("remote",e[t]):this.defaultConfig&&void 0!==this.defaultConfig[t]?new d("default",String(this.defaultConfig[t])):(this._logger.debug('Returning static value for key "'+t+'". Define a default or remote value if this is unintentional.'),new d("static"))},t}();function v(t,e){var i=t.target.error||void 0;return l.create(e,{originalErrorMessage:i&&i.message})}var b="app_namespace_store";var _=function(){function t(t,e,i,s){void 0===s&&(s=new Promise((function(t,e){var i=indexedDB.open("firebase_remote_config",1);i.onerror=function(t){e(v(t,"storage-open"))},i.onsuccess=function(e){t(e.target.result)},i.onupgradeneeded=function(t){var e=t.target.result;switch(t.oldVersion){case 0:e.createObjectStore(b,{keyPath:"compositeKey"})}}}))),this.appId=t,this.appName=e,this.namespace=i,this.openDbPromise=s}return t.prototype.getLastFetchStatus=function(){return this.get("last_fetch_status")},t.prototype.setLastFetchStatus=function(t){return this.set("last_fetch_status",t)},t.prototype.getLastSuccessfulFetchTimestampMillis=function(){return this.get("last_successful_fetch_timestamp_millis")},t.prototype.setLastSuccessfulFetchTimestampMillis=function(t){return this.set("last_successful_fetch_timestamp_millis",t)},t.prototype.getLastSuccessfulFetchResponse=function(){return this.get("last_successful_fetch_response")},t.prototype.setLastSuccessfulFetchResponse=function(t){return this.set("last_successful_fetch_response",t)},t.prototype.getActiveConfig=function(){return this.get("active_config")},t.prototype.setActiveConfig=function(t){return this.set("active_config",t)},t.prototype.getActiveConfigEtag=function(){return this.get("active_config_etag")},t.prototype.setActiveConfigEtag=function(t){return this.set("active_config_etag",t)},t.prototype.getThrottleMetadata=function(){return this.get("throttle_metadata")},t.prototype.setThrottleMetadata=function(t){return this.set("throttle_metadata",t)},t.prototype.deleteThrottleMetadata=function(){return this.delete("throttle_metadata")},t.prototype.get=function(t){return Object(n.b)(this,void 0,void 0,(function(){var e,i=this;return Object(n.d)(this,(function(s){switch(s.label){case 0:return[4,this.openDbPromise];case 1:return e=s.sent(),[2,new Promise((function(s,r){var n=e.transaction([b],"readonly").objectStore(b),o=i.createCompositeKey(t);try{var a=n.get(o);a.onerror=function(t){r(v(t,"storage-get"))},a.onsuccess=function(t){var e=t.target.result;s(e?e.value:void 0)}}catch(c){r(l.create("storage-get",{originalErrorMessage:c&&c.message}))}}))]}}))}))},t.prototype.set=function(t,e){return Object(n.b)(this,void 0,void 0,(function(){var i,s=this;return Object(n.d)(this,(function(r){switch(r.label){case 0:return[4,this.openDbPromise];case 1:return i=r.sent(),[2,new Promise((function(r,n){var o=i.transaction([b],"readwrite").objectStore(b),a=s.createCompositeKey(t);try{var c=o.put({compositeKey:a,value:e});c.onerror=function(t){n(v(t,"storage-set"))},c.onsuccess=function(){r()}}catch(u){n(l.create("storage-set",{originalErrorMessage:u&&u.message}))}}))]}}))}))},t.prototype.delete=function(t){return Object(n.b)(this,void 0,void 0,(function(){var e,i=this;return Object(n.d)(this,(function(s){switch(s.label){case 0:return[4,this.openDbPromise];case 1:return e=s.sent(),[2,new Promise((function(s,r){var n=e.transaction([b],"readwrite").objectStore(b),o=i.createCompositeKey(t);try{var a=n.delete(o);a.onerror=function(t){r(v(t,"storage-delete"))},a.onsuccess=function(){s()}}catch(c){r(l.create("storage-delete",{originalErrorMessage:c&&c.message}))}}))]}}))}))},t.prototype.createCompositeKey=function(t){return[this.appId,this.appName,this.namespace,t].join()},t}(),y=function(){function t(t){this.storage=t}return t.prototype.getLastFetchStatus=function(){return this.lastFetchStatus},t.prototype.getLastSuccessfulFetchTimestampMillis=function(){return this.lastSuccessfulFetchTimestampMillis},t.prototype.getActiveConfig=function(){return this.activeConfig},t.prototype.loadFromStorage=function(){return Object(n.b)(this,void 0,void 0,(function(){var t,e,i,s,r,o;return Object(n.d)(this,(function(n){switch(n.label){case 0:return t=this.storage.getLastFetchStatus(),e=this.storage.getLastSuccessfulFetchTimestampMillis(),i=this.storage.getActiveConfig(),[4,t];case 1:return(s=n.sent())&&(this.lastFetchStatus=s),[4,e];case 2:return(r=n.sent())&&(this.lastSuccessfulFetchTimestampMillis=r),[4,i];case 3:return(o=n.sent())&&(this.activeConfig=o),[2]}}))}))},t.prototype.setLastFetchStatus=function(t){return this.lastFetchStatus=t,this.storage.setLastFetchStatus(t)},t.prototype.setLastSuccessfulFetchTimestampMillis=function(t){return this.lastSuccessfulFetchTimestampMillis=t,this.storage.setLastSuccessfulFetchTimestampMillis(t)},t.prototype.setActiveConfig=function(t){return this.activeConfig=t,this.storage.setActiveConfig(t)},t}();function w(t,e){return new Promise((function(i,s){var r=Math.max(e-Date.now(),0),n=setTimeout(i,r);t.addEventListener((function(){clearTimeout(n),s(l.create("fetch-throttle",{throttleEndTimeMillis:e}))}))}))}var C,T=function(){function t(t,e){this.client=t,this.storage=e}return t.prototype.fetch=function(t){return Object(n.b)(this,void 0,void 0,(function(){var e;return Object(n.d)(this,(function(i){switch(i.label){case 0:return[4,this.storage.getThrottleMetadata()];case 1:return e=i.sent()||{backoffCount:0,throttleEndTimeMillis:Date.now()},[2,this.attemptFetch(t,e)]}}))}))},t.prototype.attemptFetch=function(t,e){var i=e.throttleEndTimeMillis,s=e.backoffCount;return Object(n.b)(this,void 0,void 0,(function(){var e,r,a;return Object(n.d)(this,(function(n){switch(n.label){case 0:return[4,w(t.signal,i)];case 1:n.sent(),n.label=2;case 2:return n.trys.push([2,5,,7]),[4,this.client.fetch(t)];case 3:return e=n.sent(),[4,this.storage.deleteThrottleMetadata()];case 4:return n.sent(),[2,e];case 5:if(!function(t){if(!(t instanceof o.c)||!t.customData)return!1;var e=Number(t.customData.httpStatus);return 429===e||500===e||503===e||504===e}(r=n.sent()))throw r;return a={throttleEndTimeMillis:Date.now()+Object(o.j)(s),backoffCount:s+1},[4,this.storage.setThrottleMetadata(a)];case 6:return n.sent(),[2,this.attemptFetch(t,a)];case 7:return[2]}}))}))},t}(),S="@firebase/remote-config";(C=r.a).INTERNAL.registerComponent(new c.a("remoteConfig",(function(t,e){var i=e.instanceIdentifier,s=t.getProvider("app").getImmediate(),r=t.getProvider("installations").getImmediate();if("undefined"===typeof window)throw l.create("registration-window");var n=s.options,o=n.projectId,c=n.apiKey,h=n.appId;if(!o)throw l.create("registration-project-id");if(!c)throw l.create("registration-api-key");if(!h)throw l.create("registration-app-id");i=i||"firebase";var g=new _(h,s.name,i),p=new y(g),d=new a.b(S);d.logLevel=a.a.ERROR;var v=new f(r,C.SDK_VERSION,i,o,c,h),b=new T(v,g),w=new u(b,g,p,d),E=new m(s,w,p,g,d);return E.ensureInitialized(),E}),"PUBLIC").setMultipleInstances(!0)),C.registerVersion(S,"0.1.36")}}]);
//# sourceMappingURL=9.b3374625.chunk.js.map