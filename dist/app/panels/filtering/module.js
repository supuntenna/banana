/*! banana-fusion - v1.6.9 - 2016-05-27
 * https://github.com/LucidWorks/banana/wiki
 * Copyright (c) 2016 Andrew Thanalertvisuti; Licensed Apache License */

define("panels/filtering/module",["angular","app","underscore"],function(a,b,c){"use strict";var d=a.module("kibana.panels.filtering",[]);b.useModule(d),d.controller("filtering",["$scope","filterSrv","$rootScope","$location","dashboard",function(b,d,e,f,g){b.panelMeta={modals:[{description:"Inspect",icon:"icon-info-sign",partial:"app/partials/inspector.html",show:!0}],status:"Stable",description:"A controllable list of all filters currently applied to the dashboard. You need one of these on your dashboard somewhere in order for all the panels to work properly while you are interacting with your data."};var h={spyable:!0};c.defaults(b.panel,h),b.init=function(){b.filterSrv=d;var c=f.search(),e={"+":"must","-":"mustNot"};c.q&&(a.forEach(c.q.split(" "),function(a){if(a){var b=null!==a[0].match(/\+|-/),c=b?e[a[0]]:"either";d.set({editing:!1,type:"querystring",query:b?a.substr(1,a.length):a,mandate:c},void 0,!0)}}),b.refresh())},b.remove=function(a){d.remove(a),g.refresh()},b.add=function(a){a=a||"*",d.set({editing:!0,type:"querystring",query:a,mandate:"must"},void 0,!0)},b.toggle=function(a){d.list[a].active=!d.list[a].active,g.refresh()},b.refresh=function(){e.$broadcast("refresh")},b.render=function(){e.$broadcast("render")},b.show_key=function(a){return!c.contains(["type","id","alias","mandate","active","editing"],a)},b.isEditable=function(a){var b=["time","range"];return c.contains(b,a.type)?!1:!0}}]),d.filter("truncate",function(){return function(a,b){return b=b||200,!c.isUndefined(a)&&!c.isNull(a)&&a.toString().length>0?a.length>b?a.substr(0,b)+"...":a:""}})});