(window.webpackJsonp=window.webpackJsonp||[]).push([[36],{lSJ9:function(e,t,o){"use strict";o.r(t),o.d(t,"ion_checkbox",function(){return c});var i=o("3eIi"),n=(o("lSdy"),o("fXh5")),r=o("i1UR"),c=function(){function e(e){var t=this;Object(i.m)(this,e),this.inputId="ion-cb-"+a++,this.name=this.inputId,this.checked=!1,this.indeterminate=!1,this.disabled=!1,this.value="on",this.onClick=function(){t.setFocus(),t.checked=!t.checked,t.indeterminate=!1},this.onFocus=function(){t.ionFocus.emit()},this.onBlur=function(){t.ionBlur.emit()},this.ionChange=Object(i.d)(this,"ionChange",7),this.ionFocus=Object(i.d)(this,"ionFocus",7),this.ionBlur=Object(i.d)(this,"ionBlur",7),this.ionStyle=Object(i.d)(this,"ionStyle",7)}return e.prototype.componentWillLoad=function(){this.emitStyle()},e.prototype.checkedChanged=function(e){this.ionChange.emit({checked:e,value:this.value}),this.emitStyle()},e.prototype.disabledChanged=function(){this.emitStyle()},e.prototype.emitStyle=function(){this.ionStyle.emit({"checkbox-checked":this.checked,"interactive-disabled":this.disabled})},e.prototype.setFocus=function(){this.buttonEl&&this.buttonEl.focus()},e.prototype.render=function(){var e,t=this,o=this,c=o.indeterminate,a=o.disabled,s=o.checked,h=o.value,b=o.color,d=o.el,l=o.inputId+"-lbl",u=Object(i.e)(this),k=Object(r.f)(d);k&&(k.id=l),Object(r.k)(!0,d,this.name,s?h:"",a);var p=c?Object(i.i)("path",{d:"M6 12L18 12"}):Object(i.i)("path",{d:"M5.9,12.5l3.8,3.8l8.8-8.8"});return"md"===u&&(p=c?Object(i.i)("path",{d:"M2 12H22"}):Object(i.i)("path",{d:"M1.73,12.91 8.1,19.28 22.79,4.59"})),Object(i.i)(i.a,{onClick:this.onClick,role:"checkbox","aria-disabled":a?"true":null,"aria-checked":""+s,"aria-labelledby":l,class:Object.assign({},Object(n.a)(b),(e={},e[u]=!0,e["in-item"]=Object(n.c)("ion-item",d),e["checkbox-checked"]=s,e["checkbox-disabled"]=a,e["checkbox-indeterminate"]=c,e.interactive=!0,e))},Object(i.i)("svg",{class:"checkbox-icon",viewBox:"0 0 24 24"},p),Object(i.i)("button",{type:"button",onFocus:this.onFocus,onBlur:this.onBlur,disabled:this.disabled,ref:function(e){return t.buttonEl=e}}))},Object.defineProperty(e.prototype,"el",{get:function(){return Object(i.f)(this)},enumerable:!0,configurable:!0}),Object.defineProperty(e,"watchers",{get:function(){return{checked:["checkedChanged"],disabled:["disabledChanged"]}},enumerable:!0,configurable:!0}),Object.defineProperty(e,"style",{get:function(){return":host{--background-checked:var(--ion-color-primary,#3880ff);--border-color-checked:var(--ion-color-primary,#3880ff);--checkmark-color:var(--ion-color-primary-contrast,#fff);--transition:none;display:inline-block;position:relative;-webkit-user-select:none;-moz-user-select:none;-ms-user-select:none;user-select:none;z-index:2}:host(.ion-color){--background-checked:var(--ion-color-base);--border-color-checked:var(--ion-color-base);--checkmark-color:var(--ion-color-contrast)}button{left:0;top:0;margin-left:0;margin-right:0;margin-top:0;margin-bottom:0;position:absolute;width:100%;height:100%;border:0;background:transparent;cursor:pointer;-webkit-appearance:none;-moz-appearance:none;appearance:none;outline:none}:host-context([dir=rtl]) button,[dir=rtl] button{left:unset;right:unset;right:0}button::-moz-focus-inner{border:0}.checkbox-icon{border-radius:var(--border-radius);display:block;position:relative;width:100%;height:100%;-webkit-transition:var(--transition);transition:var(--transition);border-width:var(--border-width);border-style:var(--border-style);border-color:var(--border-color);background:var(--background);-webkit-box-sizing:border-box;box-sizing:border-box}.checkbox-icon path{fill:none;stroke:var(--checkmark-color);stroke-width:1;opacity:0}:host(.checkbox-checked) .checkbox-icon,:host(.checkbox-indeterminate) .checkbox-icon{border-color:var(--border-color-checked);background:var(--background-checked)}:host(.checkbox-checked) .checkbox-icon path,:host(.checkbox-indeterminate) .checkbox-icon path{opacity:1}:host(.checkbox-disabled){pointer-events:none}:host{--border-radius:calc(var(--size) * .125);--border-width:2px;--border-style:solid;--border-color:rgba(var(--ion-text-color-rgb,0,0,0),0.51);--background:var(--ion-item-background,var(--ion-background-color,#fff));--transition:background 180ms cubic-bezier(0.4,0,0.2,1);--size:18px;width:var(--size);height:var(--size)}.checkbox-icon path{stroke-dasharray:30;stroke-dashoffset:30;stroke-width:3}:host(.checkbox-checked) .checkbox-icon path,:host(.checkbox-indeterminate) .checkbox-icon path{stroke-dashoffset:0;-webkit-transition:stroke-dashoffset 90ms linear 90ms;transition:stroke-dashoffset 90ms linear 90ms}:host(.checkbox-disabled){opacity:.3}:host(.in-item){margin-left:0;margin-right:0;margin-top:18px;margin-bottom:18px;display:block;position:static}:host(.in-item[slot=start]){margin-left:4px;margin-right:36px;margin-top:18px;margin-bottom:18px}@supports ((-webkit-margin-start:0) or (margin-inline-start:0)) or (-webkit-margin-start:0){:host(.in-item[slot=start]){margin-left:unset;margin-right:unset;-webkit-margin-start:4px;margin-inline-start:4px;-webkit-margin-end:36px;margin-inline-end:36px}}"},enumerable:!0,configurable:!0}),e}(),a=0}}]);