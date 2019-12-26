define(["lodash","angular","app/core/core","app/plugins/sdk"],(function(e,t,n,i){return function(e){var t={};function n(i){if(t[i])return t[i].exports;var r=t[i]={i:i,l:!1,exports:{}};return e[i].call(r.exports,r,r.exports,n),r.l=!0,r.exports}return n.m=e,n.c=t,n.d=function(e,t,i){n.o(e,t)||Object.defineProperty(e,t,{enumerable:!0,get:i})},n.r=function(e){"undefined"!=typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(e,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(e,"__esModule",{value:!0})},n.t=function(e,t){if(1&t&&(e=n(e)),8&t)return e;if(4&t&&"object"==typeof e&&e&&e.__esModule)return e;var i=Object.create(null);if(n.r(i),Object.defineProperty(i,"default",{enumerable:!0,value:e}),2&t&&"string"!=typeof e)for(var r in e)n.d(i,r,function(t){return e[t]}.bind(null,r));return i},n.n=function(e){var t=e&&e.__esModule?function(){return e.default}:function(){return e};return n.d(t,"a",t),t},n.o=function(e,t){return Object.prototype.hasOwnProperty.call(e,t)},n.p="",n(n.s=12)}([function(t,n){t.exports=e},function(e,t,n){"use strict";n.d(t,"a",(function(){return a})),n.d(t,"b",(function(){return o}));var i=n(3),r=n(0);function a(e){var t="";t+=e.status?"("+e.status+") ":"",t+=e.statusText?e.statusText+": ":"",e.data&&e.data.error?t+=e.data.error:e.err?t+=e.err:r.isString(e)&&(t+=e),i.appEvents.emit("alert-error",["Can't connect to Kentik API",t])}function o(e,t,n){var a="";a+=t.status?"("+t.status+") ":"",a+=t.statusText?t.statusText+": ":"",t.data&&t.data.error?a+=t.data.error:t.err?a+=t.err:r.isString(t)&&(a+=t),i.appEvents.emit("alert-"+n,[e,a])}},function(e,n){e.exports=t},function(e,t){e.exports=n},function(e,t,n){"use strict";n.d(t,"a",(function(){return c}));var i=n(1),r=n(2),a=n.n(r),o=function(e,t,n,i){return new(n||(n=Promise))((function(r,a){function o(e){try{c(i.next(e))}catch(e){a(e)}}function s(e){try{c(i.throw(e))}catch(e){a(e)}}function c(e){e.done?r(e.value):new n((function(t){t(e.value)})).then(o,s)}c((i=i.apply(e,t||[])).next())}))},s=function(e,t){var n,i,r,a,o={label:0,sent:function(){if(1&r[0])throw r[1];return r[1]},trys:[],ops:[]};return a={next:s(0),throw:s(1),return:s(2)},"function"==typeof Symbol&&(a[Symbol.iterator]=function(){return this}),a;function s(a){return function(s){return function(a){if(n)throw new TypeError("Generator is already executing.");for(;o;)try{if(n=1,i&&(r=2&a[0]?i.return:a[0]?i.throw||((r=i.return)&&r.call(i),0):i.next)&&!(r=r.call(i,a[1])).done)return r;switch(i=0,r&&(a=[2&a[0],r.value]),a[0]){case 0:case 1:r=a;break;case 4:return o.label++,{value:a[1],done:!1};case 5:o.label++,i=a[1],a=[0];continue;case 7:a=o.ops.pop(),o.trys.pop();continue;default:if(!(r=(r=o.trys).length>0&&r[r.length-1])&&(6===a[0]||2===a[0])){o=0;continue}if(3===a[0]&&(!r||a[1]>r[0]&&a[1]<r[3])){o.label=a[1];break}if(6===a[0]&&o.label<r[1]){o.label=r[1],r=a;break}if(r&&o.label<r[2]){o.label=r[2],o.ops.push(a);break}r[2]&&o.ops.pop(),o.trys.pop();continue}a=t.call(e,o)}catch(e){a=[6,e],i=0}finally{n=r=0}if(5&a[0])throw a[1];return{value:a[0]?a[1]:void 0,done:!0}}([a,s])}}},c=function(){function e(e,t){this.backendSrv=e,this.$http=t,this.baseUrl="/api/plugin-proxy/kentik-app"}return e.$inject=["backendSrv","$http"],e.prototype.getDevices=function(){return o(this,void 0,void 0,(function(){var e;return s(this,(function(t){switch(t.label){case 0:return[4,this._get("/api/v5/devices")];case 1:return(e=t.sent()).data&&e.data.devices?[2,e.data.devices]:[2,[]]}}))}))},e.prototype.getUsers=function(){return o(this,void 0,void 0,(function(){return s(this,(function(e){return[2,this._get("/api/v5/users")]}))}))},e.prototype.getFieldValues=function(e){return o(this,void 0,void 0,(function(){var t;return s(this,(function(n){return t="SELECT DISTINCT "+e+" FROM all_devices ORDER BY "+e+" ASC",[2,this.invokeSQLQuery(t)]}))}))},e.prototype.getCustomDimensions=function(){return o(this,void 0,void 0,(function(){return s(this,(function(e){switch(e.label){case 0:return[4,this._get("/api/v5/customdimensions")];case 1:return[2,e.sent().data.customDimensions]}}))}))},e.prototype.getSavedFilters=function(){return o(this,void 0,void 0,(function(){return s(this,(function(e){switch(e.label){case 0:return[4,this._get("/api/v5/saved-filters")];case 1:return[2,e.sent().data]}}))}))},e.prototype.invokeTopXDataQuery=function(e){return o(this,void 0,void 0,(function(){var t;return s(this,(function(n){return t={queries:[{query:e,bucketIndex:0}]},[2,this._post("/api/v5/query/topXdata",t)]}))}))},e.prototype.invokeSQLQuery=function(e){return o(this,void 0,void 0,(function(){var t;return s(this,(function(n){return t={query:e},[2,this._post("/api/v5/query/sql",t)]}))}))},e.prototype._get=function(e){return o(this,void 0,void 0,(function(){var t;return s(this,(function(n){switch(n.label){case 0:return n.trys.push([0,2,,3]),[4,this.$http({method:"GET",url:this.baseUrl+e})];case 1:return[2,n.sent()];case 2:throw t=n.sent(),Object(i.a)(t),t.err?t.err:t;case 3:return[2]}}))}))},e.prototype._post=function(e,t){return o(this,void 0,void 0,(function(){var n,r;return s(this,(function(a){switch(a.label){case 0:return a.trys.push([0,2,,3]),[4,this.$http({method:"POST",url:this.baseUrl+e,data:t})];case 1:return(n=a.sent()).data?[2,n.data]:[2,[]];case 2:throw r=a.sent(),Object(i.a)(r),r.err?r.err:r;case 3:return[2]}}))}))},e}();a.a.module("grafana.services").service("kentikAPISrv",c)},function(e,t){e.exports=i},,function(e,t){e.exports='<h3 class="page-heading">Enter your Kentik Credentials</h3>\n<div class="gf-form-group">\n  <div class="gf-form" ng-if="ctrl.apiError && ctrl.appModel.enabled">\n    <i class="fa fa-exclamation-circle" style="color: #ca4333;">\n      <span>Invalid API credentials. This app wont work until the credentials are updated.</span>\n    </i>\n  </div>\n  <div class="gf-form">\n    <label class="gf-form-label width-10">Email</label>\n    \x3c!-- Hidden input to stop chrome from autofilling --\x3e\n    <input style="display:none;" type="text" name="somefakename" />\n    <input type="text" class="gf-form-input width-30 max-width-30" ng-model=\'ctrl.appModel.jsonData.email\' placeholder="email" />\n  </div>\n\n  <div class="gf-form">\n    <label class="gf-form-label width-10">Region\n      <tip>US and EU regions are available. Default is US. A custom url can also be specified.</tip>\n    </label>\n    <div class="gf-form-select-wrapper">\n      <select class="gf-form-input" ng-model="ctrl.appModel.jsonData.region" ng-options="f.value as f.text for f in ctrl.regionTypes"></select>\n    </div>\n  </div>\n\n    \x3c!-- custom endpoint should display the url --\x3e\n  <div ng-if="ctrl.appModel.jsonData.region === \'custom\'" class="gf-form">\n    <label class="gf-form-label width-10">Custom URL\n      <tip>Specify custom url</tip>\n    </label>\n    <div ng-if="ctrl.appModel.jsonData.region === \'custom\'">\n      <input type="text" class="gf-form-input width-30 max-width-30" ng-model=\'ctrl.appModel.jsonData.dynamicUrl\' placeholder="https://grafana-api.kentik.com/api/v5" />\n    </div>\n  </div>\n\n  <div class="gf-form-inline">\n    <div class="gf-form kentik-inline-field-margin--right">\n      <label class="gf-form-label width-10">Api Token</label>\n      \x3c!-- Hidden input to stop chrome from autofilling --\x3e\n      <input style="display:none;" type="password" name="anotherfakename" />\n      <input type="password" class="gf-form-input width-30 max-width-30" ng-model="ctrl.appModel.secureJsonData.token" ng-if="!ctrl.appModel.jsonData.tokenSet"\n        placeholder="api token" />\n      <div ng-if="ctrl.appModel.jsonData.tokenSet" class="gf-form">\n        <input type="text" class="gf-form-input max-width-20" disabled="disabled" value="saved" />\n        <div ng-if="ctrl.appModel.enabled">\n          <i class="fa fa-exclamation-triangle" ng-if="ctrl.apiError" bs-tooltip="\'Could not validate api Token.\'"></i>\n        </div>\n      </div>\n    </div>\n    <div class="gf-form">\n      <a class="btn btn-danger btn-small" href="#" ng-click="ctrl.reset()" ng-if="ctrl.appModel.jsonData.tokenSet">reset</a>\n    </div>\n  </div>\n</div>\n\n<div ng-if="ctrl.appModel.jsonData.tokenSet && ctrl.apiValidated" class="kentik-enabled-box">\n  <i class="icon-gf icon-gf-check icon-gf-check kentik-icon-success"></i> Successfully enabled. <strong>Next up:\n  </strong><a href="dashboard/db/kentik-home" class="external-link">Go to Kentik Home Dashboard</a>\n</div>\n'},,,,,function(e,t,n){"use strict";n.r(t);n(13),n(18);var i,r=n(7),a=n.n(r),o=n(4),s=n(1),c=n(0),u=function(e,t,n,i){return new(n||(n=Promise))((function(r,a){function o(e){try{c(i.next(e))}catch(e){a(e)}}function s(e){try{c(i.throw(e))}catch(e){a(e)}}function c(e){e.done?r(e.value):new n((function(t){t(e.value)})).then(o,s)}c((i=i.apply(e,t||[])).next())}))},l=function(e,t){var n,i,r,a,o={label:0,sent:function(){if(1&r[0])throw r[1];return r[1]},trys:[],ops:[]};return a={next:s(0),throw:s(1),return:s(2)},"function"==typeof Symbol&&(a[Symbol.iterator]=function(){return this}),a;function s(a){return function(s){return function(a){if(n)throw new TypeError("Generator is already executing.");for(;o;)try{if(n=1,i&&(r=2&a[0]?i.return:a[0]?i.throw||((r=i.return)&&r.call(i),0):i.next)&&!(r=r.call(i,a[1])).done)return r;switch(i=0,r&&(a=[2&a[0],r.value]),a[0]){case 0:case 1:r=a;break;case 4:return o.label++,{value:a[1],done:!1};case 5:o.label++,i=a[1],a=[0];continue;case 7:a=o.ops.pop(),o.trys.pop();continue;default:if(!(r=(r=o.trys).length>0&&r[r.length-1])&&(6===a[0]||2===a[0])){o=0;continue}if(3===a[0]&&(!r||a[1]>r[0]&&a[1]<r[3])){o.label=a[1];break}if(6===a[0]&&o.label<r[1]){o.label=r[1],r=a;break}if(r&&o.label<r[2]){o.label=r[2],o.ops.push(a);break}r[2]&&o.ops.pop(),o.trys.pop();continue}a=t.call(e,o)}catch(e){a=[6,e],i=0}finally{n=r=0}if(5&a[0])throw a[1];return{value:a[0]?a[1]:void 0,done:!0}}([a,s])}}};!function(e){e.DEFAULT="default",e.EU="eu",e.CUSTOM="custom"}(i||(i={}));var p=function(){function e(e,t,n){this.$scope=e,this.backendSrv=n,this.apiValidated=!1,this.apiError=!1,this.regionTypes=[{value:i.DEFAULT,text:"US (default)"},{value:i.EU,text:"EU"},{value:i.CUSTOM,text:"Custom"}],this.appEditCtrl.setPreUpdateHook(this.preUpdate.bind(this)),this.appEditCtrl.setPostUpdateHook(this.postUpdate.bind(this)),this.appModel.jsonData||(this.appModel.jsonData={}),this.appModel.secureJsonData||(this.appModel.secureJsonData={}),void 0===this.appModel.jsonData.region&&(this.appModel.jsonData.region=i.DEFAULT),this.kentik=new o.a(this.backendSrv,t),this.appModel.enabled&&this.appModel.jsonData.tokenSet&&this.validateApiConnection()}return e.$inject=["$scope","$http","backendSrv"],e.prototype.preUpdate=function(){return this.appModel.secureJsonData.token&&(this.appModel.jsonData.tokenSet=!0),this.initDatasource()},e.prototype.postUpdate=function(){return u(this,void 0,void 0,(function(){return l(this,(function(e){switch(e.label){case 0:return this.appModel.enabled?[4,this.validateApiConnection()]:[2,Promise.resolve()];case 1:return e.sent(),[2,{url:"dashboard/db/kentik-home",message:"Kentik Connect Pro app installed!"}]}}))}))},e.prototype.validateApiConnection=function(){return u(this,void 0,void 0,(function(){var e;return l(this,(function(t){switch(t.label){case 0:return t.trys.push([0,2,,3]),[4,this.kentik.getUsers()];case 1:e=t.sent();try{e.hasOwnProperty("data")&&(this.apiValidated=!0,Object(s.b)("API working!","","success"))}catch(e){Object(s.a)("Unexpected result from API: "+e),this.apiValidated=!1,this.apiError=!0}return[3,3];case 2:return t.sent(),this.apiValidated=!1,this.apiError=!0,[3,3];case 3:return this.$scope.$digest(),[2]}}))}))},e.prototype.reset=function(){this.appModel.jsonData.email="",this.appModel.jsonData.tokenSet=!1,this.appModel.jsonData.region=i.DEFAULT,this.appModel.jsonData.dynamicUrl="",this.appModel.secureJsonData={},this.apiValidated=!1},e.prototype.initDatasource=function(){return u(this,void 0,void 0,(function(){var e,t,n,i,r,a,o,s,u,p,d=this;return l(this,(function(l){switch(l.label){case 0:return[4,this.backendSrv.get("/api/datasources")];case 1:return e=l.sent(),t=!1,n=!1,i=NaN,c.forEach(e,(function(e){if("kentik-ds"===e.type)return t=!0,i=e.id,n=!0,e.jsonData.region!==d.appModel.jsonData.region&&(n=!0),void(e.jsonData!==d.appModel.jsonData&&(n=!0))})),r=[],t&&!n?[3,5]:(this.appModel.jsonData.url=this._getUrlByRegion(this.appModel.jsonData.region),a={name:"kentik",type:"kentik-ds",access:"proxy",jsonData:this.appModel.jsonData},n?(s=(o=r).push,[4,this.backendSrv.put("/api/datasources/"+i,a)]):[3,3]);case 2:return s.apply(o,[l.sent()]),[3,5];case 3:return p=(u=r).push,[4,this.backendSrv.post("/api/datasources",a)];case 4:p.apply(u,[l.sent()]),l.label=5;case 5:return[2,r]}}))}))},e.prototype._getUrlByRegion=function(e){switch(e){case i.DEFAULT:return"https://grafana-api.kentik.com/api/v5";case i.EU:return"https://api.kentik.eu/api/v5";case i.CUSTOM:return this.appModel.jsonData.dynamicUrl;default:throw new Error('Unknown region type: "'+e+'"')}},e}();p.template=a.a;var d=function(e,t,n,i){return new(n||(n=Promise))((function(r,a){function o(e){try{c(i.next(e))}catch(e){a(e)}}function s(e){try{c(i.throw(e))}catch(e){a(e)}}function c(e){e.done?r(e.value):new n((function(t){t(e.value)})).then(o,s)}c((i=i.apply(e,t||[])).next())}))},h=function(e,t){var n,i,r,a,o={label:0,sent:function(){if(1&r[0])throw r[1];return r[1]},trys:[],ops:[]};return a={next:s(0),throw:s(1),return:s(2)},"function"==typeof Symbol&&(a[Symbol.iterator]=function(){return this}),a;function s(a){return function(s){return function(a){if(n)throw new TypeError("Generator is already executing.");for(;o;)try{if(n=1,i&&(r=2&a[0]?i.return:a[0]?i.throw||((r=i.return)&&r.call(i),0):i.next)&&!(r=r.call(i,a[1])).done)return r;switch(i=0,r&&(a=[2&a[0],r.value]),a[0]){case 0:case 1:r=a;break;case 4:return o.label++,{value:a[1],done:!1};case 5:o.label++,i=a[1],a=[0];continue;case 7:a=o.ops.pop(),o.trys.pop();continue;default:if(!(r=(r=o.trys).length>0&&r[r.length-1])&&(6===a[0]||2===a[0])){o=0;continue}if(3===a[0]&&(!r||a[1]>r[0]&&a[1]<r[3])){o.label=a[1];break}if(6===a[0]&&o.label<r[1]){o.label=r[1],r=a;break}if(r&&o.label<r[2]){o.label=r[2],o.ops.push(a);break}r[2]&&o.ops.pop(),o.trys.pop();continue}a=t.call(e,o)}catch(e){a=[6,e],i=0}finally{n=r=0}if(5&a[0])throw a[1];return{value:a[0]?a[1]:void 0,done:!0}}([a,s])}}},f=function(){function e(e,t,n,i){this.$scope=e,this.$location=t,this.devices=[],this.pageReady=!1,this.kentik=new o.a(i,n),this.fetchDevices()}return e.$inject=["$scope","$location","$http","backendSrv"],e.prototype.fetchDevices=function(){return d(this,void 0,void 0,(function(){var e;return h(this,(function(t){switch(t.label){case 0:return e=this,[4,this.kentik.getDevices()];case 1:return e.devices=t.sent(),this.pageReady=!0,this.$scope.$apply(),[2]}}))}))},e.prototype.refresh=function(){this.fetchDevices()},e.prototype.gotoDashboard=function(e){this.$location.path("/dashboard/db/kentik-top-talkers").search({"var-device":e.device_name})},e.prototype.gotoDeviceDetail=function(e){this.$location.url("/plugins/kentik-app/page/device-details?device="+e.id)},e}();f.templateUrl="components/device_list.html";var v=function(e,t,n,i){return new(n||(n=Promise))((function(r,a){function o(e){try{c(i.next(e))}catch(e){a(e)}}function s(e){try{c(i.throw(e))}catch(e){a(e)}}function c(e){e.done?r(e.value):new n((function(t){t(e.value)})).then(o,s)}c((i=i.apply(e,t||[])).next())}))},b=function(e,t){var n,i,r,a,o={label:0,sent:function(){if(1&r[0])throw r[1];return r[1]},trys:[],ops:[]};return a={next:s(0),throw:s(1),return:s(2)},"function"==typeof Symbol&&(a[Symbol.iterator]=function(){return this}),a;function s(a){return function(s){return function(a){if(n)throw new TypeError("Generator is already executing.");for(;o;)try{if(n=1,i&&(r=2&a[0]?i.return:a[0]?i.throw||((r=i.return)&&r.call(i),0):i.next)&&!(r=r.call(i,a[1])).done)return r;switch(i=0,r&&(a=[2&a[0],r.value]),a[0]){case 0:case 1:r=a;break;case 4:return o.label++,{value:a[1],done:!1};case 5:o.label++,i=a[1],a=[0];continue;case 7:a=o.ops.pop(),o.trys.pop();continue;default:if(!(r=(r=o.trys).length>0&&r[r.length-1])&&(6===a[0]||2===a[0])){o=0;continue}if(3===a[0]&&(!r||a[1]>r[0]&&a[1]<r[3])){o.label=a[1];break}if(6===a[0]&&o.label<r[1]){o.label=r[1],r=a;break}if(r&&o.label<r[2]){o.label=r[2],o.ops.push(a);break}r[2]&&o.ops.pop(),o.trys.pop();continue}a=t.call(e,o)}catch(e){a=[6,e],i=0}finally{n=r=0}if(5&a[0])throw a[1];return{value:a[0]?a[1]:void 0,done:!0}}([a,s])}}},y=function(){function e(e,t,n,i,r){this.$scope=e,this.$http=t,this.$location=n,this.backendSrv=i,this.alertSrv=r,this.kentik={},this.device={},this.deviceDTO={},this.pageReady=!1,this.kentik=new o.a(this.backendSrv,this.$http),this.fetchDevice(this.$location.search().device)}return e.$inject=["$scope","$http","$location","backendSrv","alertSrv"],e.prototype.addIP=function(){this.otherIps.push({ip:""})},e.prototype.removeIP=function(e){this.otherIps.splice(e,1)},e.prototype.fetchDevice=function(e){return v(this,void 0,void 0,(function(){var t;return b(this,(function(n){switch(n.label){case 0:return[4,this.backendSrv.get("/api/plugin-proxy/kentik-app/api/v5/device/"+e)];case 1:return t=n.sent(),this.device=t.device,this.updateDeviceDTO(),this.pageReady=!0,this.$scope.$apply(),[2]}}))}))},e.prototype.gotoDashboard=function(e){this.$location.url("/dashboard/db/kentik-top-talkers?var-device="+e)},e.prototype.updateDeviceDTO=function(){this.deviceDTO={device_id:this.device.id,device_name:this.device.device_name,device_type:this.device.device_type,device_description:this.device.device_description,device_flow_type:this.device.device_flow_type,device_sample_rate:parseInt(this.device.device_sample_rate,10),minimize_snmp:this.device.minimize_snmp,device_snmp_ip:this.device.device_snmp_ip,device_snmp_community:this.device.device_snmp_community,device_bgp_type:this.device.device_bgp_type,device_bgp_password:this.device.device_bgp_password,device_bgp_neighbor_ip:this.device.device_bgp_neighbor_ip,device_bgp_neighbor_asn:parseInt(this.device.device_bgp_neighbor_asn,10)}},e.prototype.update=function(){return v(this,void 0,void 0,(function(){var e,t,n;return b(this,(function(i){switch(i.label){case 0:this.deviceDTO.device_snmp_ip||delete this.deviceDTO.device_snmp_ip,this.deviceDTO.device_snmp_community||delete this.deviceDTO.device_snmp_community,e={device:this.deviceDTO},i.label=1;case 1:return i.trys.push([1,3,,4]),[4,this.backendSrv.put("/api/plugin-proxy/kentik-app/api/v5/device/"+this.deviceDTO.device_id,e)];case 2:return"err"in(t=i.sent())?(Object(s.b)("Device Update failed.",t.err,"error"),[3,4]):(Object(s.b)("Device Updated.",this.deviceDTO.device_name,"success"),[2,this.fetchDevice(this.deviceDTO.device_id)]);case 3:return"error"in(n=i.sent()).data?(Object(s.b)("Device Update failed.",n.data.error,"error"),[2]):(Object(s.b)("Device Update failed.",n,"error"),[2]);case 4:return[2]}}))}))},e}();y.templateUrl="components/device_details.html";var g=n(2),m=n.n(g),k=function(e,t,n,i){return new(n||(n=Promise))((function(r,a){function o(e){try{c(i.next(e))}catch(e){a(e)}}function s(e){try{c(i.throw(e))}catch(e){a(e)}}function c(e){e.done?r(e.value):new n((function(t){t(e.value)})).then(o,s)}c((i=i.apply(e,t||[])).next())}))},w=function(e,t){var n,i,r,a,o={label:0,sent:function(){if(1&r[0])throw r[1];return r[1]},trys:[],ops:[]};return a={next:s(0),throw:s(1),return:s(2)},"function"==typeof Symbol&&(a[Symbol.iterator]=function(){return this}),a;function s(a){return function(s){return function(a){if(n)throw new TypeError("Generator is already executing.");for(;o;)try{if(n=1,i&&(r=2&a[0]?i.return:a[0]?i.throw||((r=i.return)&&r.call(i),0):i.next)&&!(r=r.call(i,a[1])).done)return r;switch(i=0,r&&(a=[2&a[0],r.value]),a[0]){case 0:case 1:r=a;break;case 4:return o.label++,{value:a[1],done:!1};case 5:o.label++,i=a[1],a=[0];continue;case 7:a=o.ops.pop(),o.trys.pop();continue;default:if(!(r=(r=o.trys).length>0&&r[r.length-1])&&(6===a[0]||2===a[0])){o=0;continue}if(3===a[0]&&(!r||a[1]>r[0]&&a[1]<r[3])){o.label=a[1];break}if(6===a[0]&&o.label<r[1]){o.label=r[1],r=a;break}if(r&&o.label<r[2]){o.label=r[2],o.ops.push(a);break}r[2]&&o.ops.pop(),o.trys.pop();continue}a=t.call(e,o)}catch(e){a=[6,e],i=0}finally{n=r=0}if(5&a[0])throw a[1];return{value:a[0]?a[1]:void 0,done:!0}}([a,s])}}},_={device_name:"",device_type:"router",device_description:"",device_flow_type:"sflow",device_sample_rate:5,sending_ips:"",minimize_snmp:!1,device_bgp_type:"none",device_snmp_ip:"",device_snmp_community:""},D=function(){function e(e,t,n){this.$location=e,this.backendSrv=t,this.alertSrv=n,this.device=m.a.copy(_),this.sendingIps=[{ip:""}]}return e.$inject=["$location","backendSrv","alertSrv"],e.prototype.addIP=function(){this.sendingIps.push({ip:""})},e.prototype.removeIP=function(e){this.sendingIps.splice(e,1)},e.prototype.addDevice=function(){return k(this,void 0,void 0,(function(){var e,t;return w(this,(function(n){switch(n.label){case 0:return e=[],c.forEach(this.sendingIps,(function(t){e.push(t.ip)})),this.device.sending_ips=e.join(),[4,this.backendSrv.post("/api/plugin-proxy/kentik-app/api/v5/device",this.device)];case 1:if("err"in(t=n.sent()))throw this.alertSrv.set("Device Add failed.",t.err,"error"),new Error("Device Add failed: "+t.err);return this.$location.url("/plugins/kentik-app/page/device-list"),[2]}}))}))},e}();D.templateUrl="components/add_device.html";var x=n(5);n.d(t,"DeviceListCtrl",(function(){return f})),n.d(t,"DeviceDetailsCtrl",(function(){return y})),n.d(t,"AddDeviceCtrl",(function(){return D})),n.d(t,"ConfigCtrl",(function(){return p})),Object(x.loadPluginCss)({dark:"plugins/kentik-app/styles/dark.css",light:"plugins/kentik-app/styles/light.css"})},function(e,t){},,,,,function(e,t){}])}));