(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([["chunk-0d620108"],{"045c":function(t,e,i){"use strict";var n=i("4520"),s=i.n(n);s.a},4520:function(t,e,i){},"45f5":function(t,e,i){"use strict";var n=i("c612"),s=i.n(n);s.a},"4bd4":function(t,e,i){"use strict";i("8e6e"),i("456d");var n=i("bd86"),s=(i("7514"),i("ac6a"),i("8615"),i("6762"),i("2fdb"),i("3206"));function r(t,e){var i=Object.keys(t);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(t);e&&(n=n.filter(function(e){return Object.getOwnPropertyDescriptor(t,e).enumerable})),i.push.apply(i,n)}return i}function u(t){for(var e=1;e<arguments.length;e++){var i=null!=arguments[e]?arguments[e]:{};e%2?r(i,!0).forEach(function(e){Object(n["a"])(t,e,i[e])}):Object.getOwnPropertyDescriptors?Object.defineProperties(t,Object.getOwnPropertyDescriptors(i)):r(i).forEach(function(e){Object.defineProperty(t,e,Object.getOwnPropertyDescriptor(i,e))})}return t}e["a"]=Object(s["b"])("form").extend({name:"v-form",inheritAttrs:!1,props:{lazyValidation:Boolean,value:Boolean},data:function(){return{inputs:[],watchers:[],errorBag:{}}},watch:{errorBag:{handler:function(t){var e=Object.values(t).includes(!0);this.$emit("input",!e)},deep:!0,immediate:!0}},methods:{watchInput:function(t){var e=this,i=function(t){return t.$watch("hasError",function(i){e.$set(e.errorBag,t._uid,i)},{immediate:!0})},n={_uid:t._uid,valid:function(){},shouldValidate:function(){}};return this.lazyValidation?n.shouldValidate=t.$watch("shouldValidate",function(s){s&&(e.errorBag.hasOwnProperty(t._uid)||(n.valid=i(t)))}):n.valid=i(t),n},validate:function(){return 0===this.inputs.filter(function(t){return!t.validate(!0)}).length},reset:function(){this.inputs.forEach(function(t){return t.reset()}),this.resetErrorBag()},resetErrorBag:function(){var t=this;this.lazyValidation&&setTimeout(function(){t.errorBag={}},0)},resetValidation:function(){this.inputs.forEach(function(t){return t.resetValidation()}),this.resetErrorBag()},register:function(t){this.inputs.push(t),this.watchers.push(this.watchInput(t))},unregister:function(t){var e=this.inputs.find(function(e){return e._uid===t._uid});if(e){var i=this.watchers.find(function(t){return t._uid===e._uid});i&&(i.valid(),i.shouldValidate()),this.watchers=this.watchers.filter(function(t){return t._uid!==e._uid}),this.inputs=this.inputs.filter(function(t){return t._uid!==e._uid}),this.$delete(this.errorBag,e._uid)}}},render:function(t){var e=this;return t("form",{staticClass:"v-form",attrs:u({novalidate:!0},this.$attrs),on:{submit:function(t){return e.$emit("submit",t)}}},this.$slots.default)}})},b146:function(t,e,i){"use strict";i.r(e);var n=function(){var t=this,e=t.$createElement,i=t._self._c||e;return i("div",{attrs:{id:"container"}},[i("p",{staticClass:"overline"},[t._v(t._s(t.verbsCounter))]),i("TyperElement",{attrs:{propText:"",textForTyping:t.pickedVerb[4]},on:{TypingIsFinished:t.showHints}}),i("v-form",{attrs:{id:"verbs_form",autocomplete:"off"}},[i("div",{attrs:{id:"verb-inputs_container"}},[i("v-text-field",{staticClass:"d-inline-block mx-3",attrs:{id:"input-1",label:t.inputs[1].label,hint:t.inputs[1].hint,"persistent-hint":"","error-messages":t.inputs[1].errorMsg,"success-messages":t.inputs[1].successMsg},nativeOn:{input:function(e){return t.dynamicCheck(t.inputs[1],t.pickedVerb[1])}},model:{value:t.inputs[1].value,callback:function(e){t.$set(t.inputs[1],"value",e)},expression:"inputs[1].value"}}),i("v-text-field",{staticClass:"d-inline-block mx-3",attrs:{id:"input-2",label:t.inputs[2].label,hint:t.inputs[2].hint,"persistent-hint":"","error-messages":t.inputs[2].errorMsg,"success-messages":t.inputs[2].successMsg},nativeOn:{input:function(e){return t.dynamicCheck(t.inputs[2],t.pickedVerb[2])}},model:{value:t.inputs[2].value,callback:function(e){t.$set(t.inputs[2],"value",e)},expression:"inputs[2].value"}}),i("v-text-field",{staticClass:"d-inline-block mx-3",attrs:{id:"input-3",label:t.inputs[3].label,hint:t.inputs[3].hint,"persistent-hint":"","error-messages":t.inputs[3].errorMsg,"success-messages":t.inputs[3].successMsg},nativeOn:{input:function(e){return t.dynamicCheck(t.inputs[3],t.pickedVerb[3])}},model:{value:t.inputs[3].value,callback:function(e){t.$set(t.inputs[3],"value",e)},expression:"inputs[3].value"}})],1),i("div",{staticClass:"mt-3",attrs:{id:"btns-container"}},[i("v-btn",{staticClass:"mx-1",attrs:{outlined:""},nativeOn:{click:function(e){return t.$router.push("/")}}},[t._v("\n        Stop\n      ")]),i("v-btn",{staticClass:"mx-1",attrs:{type:"submit",outlined:""},nativeOn:{click:function(e){return e.preventDefault(),t.tryToSubmitVerbs(e)}}},[t._v("\n        Submit\n      ")])],1)])],1)},s=[],r=i("ea19"),u={name:"LearningModeView",props:{verbs:{type:Array,required:!0,default:[["0","null","null","null","Error: the prop-verbs was not received from the parent"]]}},components:{TyperElement:r["a"]},data:function(){return{pickedVerb:[],verbsCounter:0,inputs:{1:{value:"",label:"Infinitive (v1)",hint:"",errorMsg:"",successMsg:""},2:{value:"",label:"Past simple (v2)",hint:"",errorMsg:"",successMsg:""},3:{value:"",label:"Past participle (v3)",hint:"",errorMsg:"",successMsg:""}},isDefeated:!1}},methods:{pickRandomVerb:function(t){var e=t[Math.floor(Math.random()*t.length)];return console.dir(e),e},tryToSubmitVerbs:function(){this.isDefeated=!1,this.checkEachVerb(),this.isDefeated||(this.verbsCounter++,this.continueToPlay())},checkEachVerb:function(){for(var t=1;t<4;t++)this.pickedVerb[t]!==this.inputs[t].value.toLowerCase().trim()?(this.inputs[t].errorMsg=this.pickedVerb[t],this.isDefeated=!0):(this.inputs[t].errorMsg="",this.inputs[t].successMsg=this.pickedVerb[t])},continueToPlay:function(){this.pickedVerb=this.pickRandomVerb(this.verbs),this.resetInputs(),this.resetHints(),this.input_1.focus()},resetInputs:function(){this.inputs[1].value=this.inputs[2].value=this.inputs[3].value=""},resetHints:function(){for(var t=1;t<4;t++)this.inputs[t].hint=this.inputs[t].errorMsg=this.inputs[t].successMsg=""},showHints:function(){this.inputs[1].hint=this.pickedVerb[1],this.inputs[2].hint=this.pickedVerb[2],this.inputs[3].hint=this.pickedVerb[3]},dynamicCheck:function(t,e){t.value=t.value.toLowerCase().trim();var i=t.value.length,n=e.length;t.errorMsg="",i<n&&t.value!==e.slice(0,i)?t.errorMsg=e:i!==n||t.value===e?i>n&&(t.errorMsg=e):t.errorMsg=e}},mounted:function(){this.pickedVerb=this.pickRandomVerb(this.verbs),this.input_1=document.getElementById("input-1"),this.input_2=document.getElementById("input-2"),this.input_3=document.getElementById("input-3")}},a=u,o=(i("045c"),i("2877")),c=i("6544"),l=i.n(c),p=i("8336"),h=i("4bd4"),d=i("8654"),f=Object(o["a"])(a,n,s,!1,null,"87ce351a",null);e["default"]=f.exports;l()(f,{VBtn:p["a"],VForm:h["a"],VTextField:d["a"]})},c612:function(t,e,i){},ea19:function(t,e,i){"use strict";var n=function(){var t=this,e=t.$createElement,i=t._self._c||e;return i("p",[t._v(" "+t._s(t.text)),i("span",[t._v(" ")])])},s=[],r={name:"Typer-Element",props:{propText:String,textForTyping:{type:String,default:"Error: text for typing was not received"}},data:function(){return{text:this.propText,typingSpeed:100,untypingSpeed:70}},methods:{untypeThenType:function(){var t=this,e=this.text,i=this.text.length,n=setInterval(function(){0===i&&(clearInterval(n),t.type(t.textForTyping)),t.text=e.slice(0,i--)},this.untypingSpeed)},untype:function(){var t=this,e=this.text,i=this.text.length,n=setInterval(function(){0===i&&(clearInterval(n),t.$emit("TypingIsFinished")),t.text=e.slice(0,i--)},this.untypingSpeed)},type:function(t){var e=this,i=t.length,n=0,s=setInterval(function(){e.text.length===i&&(clearInterval(s),e.$emit("TypingIsFinished")),e.text=t.slice(0,n++)},this.typingSpeed)}},watch:{textForTyping:function(){this.untypeThenType()}},mounted:function(){this.untypeThenType()}},u=r,a=(i("45f5"),i("2877")),o=Object(a["a"])(u,n,s,!1,null,"6cdecb78",null);e["a"]=o.exports}}]);
//# sourceMappingURL=chunk-0d620108.247c4fb2.js.map