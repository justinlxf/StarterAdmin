(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([[25],{P1yk:function(e,t,r){"use strict";var a=r("mZ4U");Object.defineProperty(t,"__esModule",{value:!0}),t.default=void 0;var n=a(r("mK77")),u=a(r("Ico4")),s=r("Zy2x"),i={namespace:"userAndregister",state:{status:void 0},effects:{submit:u.default.mark(function e(t,r){var a,n,i,c;return u.default.wrap(function(e){while(1)switch(e.prev=e.next){case 0:return a=t.payload,n=r.call,i=r.put,e.next=4,n(s.fakeRegister,a);case 4:return c=e.sent,e.next=7,i({type:"registerHandle",payload:c});case 7:case"end":return e.stop()}},e)})},reducers:{registerHandle:function(e,t){var r=t.payload;return(0,n.default)({},e,{status:r.status})}}},c=i;t.default=c},Zy2x:function(e,t,r){"use strict";var a=r("mZ4U");Object.defineProperty(t,"__esModule",{value:!0}),t.fakeRegister=i;var n=a(r("Ico4")),u=a(r("UWy3")),s=a(r("t3Un"));function i(e){return c.apply(this,arguments)}function c(){return c=(0,u.default)(n.default.mark(function e(t){return n.default.wrap(function(e){while(1)switch(e.prev=e.next){case 0:return e.abrupt("return",(0,s.default)("/api/register",{method:"POST",data:t}));case 1:case"end":return e.stop()}},e)})),c.apply(this,arguments)}}}]);