"use strict";(self["webpackChunktutor_pro"]=self["webpackChunktutor_pro"]||[]).push([["745"],{1128:function(e,t,r){r.d(t,{A:()=>l});/* import */var n=r(1601);/* import */var o=/*#__PURE__*/r.n(n);/* import */var a=r(6314);/* import */var i=/*#__PURE__*/r.n(a);// Imports
var s=i()(o());// Module
s.push([e.id,`/* Variables declaration */
.rdp-root {
  --rdp-accent-color: blue; /* The accent color used for selected days and UI elements. */
  --rdp-accent-background-color: #f0f0ff; /* The accent background color used for selected days and UI elements. */

  --rdp-day-height: 44px; /* The height of the day cells. */
  --rdp-day-width: 44px; /* The width of the day cells. */

  --rdp-day_button-border-radius: 100%; /* The border radius of the day cells. */
  --rdp-day_button-border: 2px solid transparent; /* The border of the day cells. */
  --rdp-day_button-height: 42px; /* The height of the day cells. */
  --rdp-day_button-width: 42px; /* The width of the day cells. */

  --rdp-selected-border: 2px solid var(--rdp-accent-color); /* The border of the selected days. */
  --rdp-disabled-opacity: 0.5; /* The opacity of the disabled days. */
  --rdp-outside-opacity: 0.75; /* The opacity of the days outside the current month. */
  --rdp-today-color: var(--rdp-accent-color); /* The color of the today's date. */

  --rdp-dropdown-gap: 0.5rem; /* The gap between the dropdowns used in the month captons. */

  --rdp-months-gap: 2rem; /* The gap between the months in the multi-month view. */

  --rdp-nav_button-disabled-opacity: 0.5; /* The opacity of the disabled navigation buttons. */
  --rdp-nav_button-height: 2.25rem; /* The height of the navigation buttons. */
  --rdp-nav_button-width: 2.25rem; /* The width of the navigation buttons. */
  --rdp-nav-height: 2.75rem; /* The height of the navigation bar. */

  --rdp-range_middle-background-color: var(--rdp-accent-background-color); /* The color of the background for days in the middle of a range. */
  --rdp-range_middle-color: inherit; /* The color of the range text. */

  --rdp-range_start-color: white; /* The color of the range text. */
  --rdp-range_start-background: linear-gradient(
    var(--rdp-gradient-direction),
    transparent 50%,
    var(--rdp-range_middle-background-color) 50%
  ); /* Used for the background of the start of the selected range. */
  --rdp-range_start-date-background-color: var(--rdp-accent-color); /* The background color of the date when at the start of the selected range. */

  --rdp-range_end-background: linear-gradient(
    var(--rdp-gradient-direction),
    var(--rdp-range_middle-background-color) 50%,
    transparent 50%
  ); /* Used for the background of the end of the selected range. */
  --rdp-range_end-color: white; /* The color of the range text. */
  --rdp-range_end-date-background-color: var(--rdp-accent-color); /* The background color of the date when at the end of the selected range. */

  --rdp-week_number-border-radius: 100%; /* The border radius of the week number. */
  --rdp-week_number-border: 2px solid transparent; /* The border of the week number. */

  --rdp-week_number-height: var(--rdp-day-height); /* The height of the week number cells. */
  --rdp-week_number-opacity: 0.75; /* The opacity of the week number. */
  --rdp-week_number-width: var(--rdp-day-width); /* The width of the week number cells. */
  --rdp-weeknumber-text-align: center; /* The text alignment of the weekday cells. */

  --rdp-weekday-opacity: 0.75; /* The opacity of the weekday. */
  --rdp-weekday-padding: 0.5rem 0rem; /* The padding of the weekday. */
  --rdp-weekday-text-align: center; /* The text alignment of the weekday cells. */

  --rdp-gradient-direction: 90deg;

  --rdp-animation_duration: 0.3s;
  --rdp-animation_timing: cubic-bezier(0.4, 0, 0.2, 1);
}

.rdp-root[dir="rtl"] {
  --rdp-gradient-direction: -90deg;
}

.rdp-root[data-broadcast-calendar="true"] {
  --rdp-outside-opacity: unset;
}

/* Root of the component. */
.rdp-root {
  position: relative; /* Required to position the navigation toolbar. */
  box-sizing: border-box;
}

.rdp-root * {
  box-sizing: border-box;
}

.rdp-day {
  width: var(--rdp-day-width);
  height: var(--rdp-day-height);
  text-align: center;
}

.rdp-day_button {
  background: none;
  padding: 0;
  margin: 0;
  cursor: pointer;
  font: inherit;
  color: inherit;
  justify-content: center;
  align-items: center;
  display: flex;

  width: var(--rdp-day_button-width);
  height: var(--rdp-day_button-height);
  border: var(--rdp-day_button-border);
  border-radius: var(--rdp-day_button-border-radius);
}

.rdp-day_button:disabled {
  cursor: revert;
}

.rdp-caption_label {
  z-index: 1;

  position: relative;
  display: inline-flex;
  align-items: center;

  white-space: nowrap;
  border: 0;
}

.rdp-dropdown:focus-visible ~ .rdp-caption_label {
  outline: 5px auto Highlight;
  /* biome-ignore lint/suspicious/noDuplicateProperties: backward compatibility */
  outline: 5px auto -webkit-focus-ring-color;
}

.rdp-button_next,
.rdp-button_previous {
  border: none;
  background: none;
  padding: 0;
  margin: 0;
  cursor: pointer;
  font: inherit;
  color: inherit;
  -moz-appearance: none;
  -webkit-appearance: none;
  display: inline-flex;
  align-items: center;
  justify-content: center;
  position: relative;
  appearance: none;

  width: var(--rdp-nav_button-width);
  height: var(--rdp-nav_button-height);
}

.rdp-button_next:disabled,
.rdp-button_next[aria-disabled="true"],
.rdp-button_previous:disabled,
.rdp-button_previous[aria-disabled="true"] {
  cursor: revert;

  opacity: var(--rdp-nav_button-disabled-opacity);
}

.rdp-chevron {
  display: inline-block;
  fill: var(--rdp-accent-color);
}

.rdp-root[dir="rtl"] .rdp-nav .rdp-chevron {
  transform: rotate(180deg);
  transform-origin: 50%;
}

.rdp-dropdowns {
  position: relative;
  display: inline-flex;
  align-items: center;
  gap: var(--rdp-dropdown-gap);
}
.rdp-dropdown {
  z-index: 2;

  /* Reset */
  opacity: 0;
  appearance: none;
  position: absolute;
  inset-block-start: 0;
  inset-block-end: 0;
  inset-inline-start: 0;
  width: 100%;
  margin: 0;
  padding: 0;
  cursor: inherit;
  border: none;
  line-height: inherit;
}

.rdp-dropdown_root {
  position: relative;
  display: inline-flex;
  align-items: center;
}

.rdp-dropdown_root[data-disabled="true"] .rdp-chevron {
  opacity: var(--rdp-disabled-opacity);
}

.rdp-month_caption {
  display: flex;
  align-content: center;
  height: var(--rdp-nav-height);
  font-weight: bold;
  font-size: large;
}

.rdp-root[data-nav-layout="around"] .rdp-month,
.rdp-root[data-nav-layout="after"] .rdp-month {
  position: relative;
}

.rdp-root[data-nav-layout="around"] .rdp-month_caption {
  justify-content: center;
  margin-inline-start: var(--rdp-nav_button-width);
  margin-inline-end: var(--rdp-nav_button-width);
  position: relative;
}

.rdp-root[data-nav-layout="around"] .rdp-button_previous {
  position: absolute;
  inset-inline-start: 0;
  top: 0;
  height: var(--rdp-nav-height);
  display: inline-flex;
}

.rdp-root[data-nav-layout="around"] .rdp-button_next {
  position: absolute;
  inset-inline-end: 0;
  top: 0;
  height: var(--rdp-nav-height);
  display: inline-flex;
  justify-content: center;
}

.rdp-months {
  position: relative;
  display: flex;
  flex-wrap: wrap;
  gap: var(--rdp-months-gap);
  max-width: fit-content;
}

.rdp-month_grid {
  border-collapse: collapse;
}

.rdp-nav {
  position: absolute;
  inset-block-start: 0;
  inset-inline-end: 0;

  display: flex;
  align-items: center;

  height: var(--rdp-nav-height);
}

.rdp-weekday {
  opacity: var(--rdp-weekday-opacity);
  padding: var(--rdp-weekday-padding);
  font-weight: 500;
  font-size: smaller;
  text-align: var(--rdp-weekday-text-align);
  text-transform: var(--rdp-weekday-text-transform);
}

.rdp-week_number {
  opacity: var(--rdp-week_number-opacity);
  font-weight: 400;
  font-size: small;
  height: var(--rdp-week_number-height);
  width: var(--rdp-week_number-width);
  border: var(--rdp-week_number-border);
  border-radius: var(--rdp-week_number-border-radius);
  text-align: var(--rdp-weeknumber-text-align);
}

/* DAY MODIFIERS */
.rdp-today:not(.rdp-outside) {
  color: var(--rdp-today-color);
}

.rdp-selected {
  font-weight: bold;
  font-size: large;
}

.rdp-selected .rdp-day_button {
  border: var(--rdp-selected-border);
}

.rdp-outside {
  opacity: var(--rdp-outside-opacity);
}

.rdp-disabled {
  opacity: var(--rdp-disabled-opacity);
}

.rdp-hidden {
  visibility: hidden;
  color: var(--rdp-range_start-color);
}

.rdp-range_start {
  background: var(--rdp-range_start-background);
}

.rdp-range_start .rdp-day_button {
  background-color: var(--rdp-range_start-date-background-color);
  color: var(--rdp-range_start-color);
}

.rdp-range_middle {
  background-color: var(--rdp-range_middle-background-color);
}

.rdp-range_middle .rdp-day_button {
  border: unset;
  border-radius: unset;
  color: var(--rdp-range_middle-color);
}

.rdp-range_end {
  background: var(--rdp-range_end-background);
  color: var(--rdp-range_end-color);
}

.rdp-range_end .rdp-day_button {
  color: var(--rdp-range_start-color);
  background-color: var(--rdp-range_end-date-background-color);
}

.rdp-range_start.rdp-range_end {
  background: revert;
}

.rdp-focusable {
  cursor: pointer;
}

@keyframes rdp-slide_in_left {
  0% {
    transform: translateX(-100%);
  }
  100% {
    transform: translateX(0);
  }
}

@keyframes rdp-slide_in_right {
  0% {
    transform: translateX(100%);
  }
  100% {
    transform: translateX(0);
  }
}

@keyframes rdp-slide_out_left {
  0% {
    transform: translateX(0);
  }
  100% {
    transform: translateX(-100%);
  }
}

@keyframes rdp-slide_out_right {
  0% {
    transform: translateX(0);
  }
  100% {
    transform: translateX(100%);
  }
}

.rdp-weeks_before_enter {
  animation: rdp-slide_in_left var(--rdp-animation_duration)
    var(--rdp-animation_timing) forwards;
}

.rdp-weeks_before_exit {
  animation: rdp-slide_out_left var(--rdp-animation_duration)
    var(--rdp-animation_timing) forwards;
}

.rdp-weeks_after_enter {
  animation: rdp-slide_in_right var(--rdp-animation_duration)
    var(--rdp-animation_timing) forwards;
}

.rdp-weeks_after_exit {
  animation: rdp-slide_out_right var(--rdp-animation_duration)
    var(--rdp-animation_timing) forwards;
}

.rdp-root[dir="rtl"] .rdp-weeks_after_enter {
  animation: rdp-slide_in_left var(--rdp-animation_duration)
    var(--rdp-animation_timing) forwards;
}

.rdp-root[dir="rtl"] .rdp-weeks_before_exit {
  animation: rdp-slide_out_right var(--rdp-animation_duration)
    var(--rdp-animation_timing) forwards;
}

.rdp-root[dir="rtl"] .rdp-weeks_before_enter {
  animation: rdp-slide_in_right var(--rdp-animation_duration)
    var(--rdp-animation_timing) forwards;
}

.rdp-root[dir="rtl"] .rdp-weeks_after_exit {
  animation: rdp-slide_out_left var(--rdp-animation_duration)
    var(--rdp-animation_timing) forwards;
}

@keyframes rdp-fade_in {
  from {
    opacity: 0;
  }
  to {
    opacity: 1;
  }
}

@keyframes rdp-fade_out {
  from {
    opacity: 1;
  }
  to {
    opacity: 0;
  }
}

.rdp-caption_after_enter {
  animation: rdp-fade_in var(--rdp-animation_duration)
    var(--rdp-animation_timing) forwards;
}

.rdp-caption_after_exit {
  animation: rdp-fade_out var(--rdp-animation_duration)
    var(--rdp-animation_timing) forwards;
}

.rdp-caption_before_enter {
  animation: rdp-fade_in var(--rdp-animation_duration)
    var(--rdp-animation_timing) forwards;
}

.rdp-caption_before_exit {
  animation: rdp-fade_out var(--rdp-animation_duration)
    var(--rdp-animation_timing) forwards;
}
`,""]);// Exports
/* export default */const l=s},6314:function(e){/*
  MIT License http://www.opensource.org/licenses/mit-license.php
  Author Tobias Koppers @sokra
*/e.exports=function(e){var t=[];// return the list of modules as css string
t.toString=function t(){return this.map(function(t){var r="";var n=typeof t[5]!=="undefined";if(t[4]){r+="@supports (".concat(t[4],") {")}if(t[2]){r+="@media ".concat(t[2]," {")}if(n){r+="@layer".concat(t[5].length>0?" ".concat(t[5]):""," {")}r+=e(t);if(n){r+="}"}if(t[2]){r+="}"}if(t[4]){r+="}"}return r}).join("")};// import a list of modules into the list
t.i=function e(e,r,n,o,a){if(typeof e==="string"){e=[[null,e,undefined]]}var i={};if(n){for(var s=0;s<this.length;s++){var l=this[s][0];if(l!=null){i[l]=true}}}for(var c=0;c<e.length;c++){var d=[].concat(e[c]);if(n&&i[d[0]]){continue}if(typeof a!=="undefined"){if(typeof d[5]==="undefined"){d[5]=a}else{d[1]="@layer".concat(d[5].length>0?" ".concat(d[5]):""," {").concat(d[1],"}");d[5]=a}}if(r){if(!d[2]){d[2]=r}else{d[1]="@media ".concat(d[2]," {").concat(d[1],"}");d[2]=r}}if(o){if(!d[4]){d[4]="".concat(o)}else{d[1]="@supports (".concat(d[4],") {").concat(d[1],"}");d[4]=o}}t.push(d)}};return t}},1601:function(e){e.exports=function(e){return e[1]}},5072:function(e){var t=[];function r(e){var r=-1;for(var n=0;n<t.length;n++){if(t[n].identifier===e){r=n;break}}return r}function n(e,n){var a={};var i=[];for(var s=0;s<e.length;s++){var l=e[s];var c=n.base?l[0]+n.base:l[0];var d=a[c]||0;var u="".concat(c," ").concat(d);a[c]=d+1;var f=r(u);var p={css:l[1],media:l[2],sourceMap:l[3],supports:l[4],layer:l[5]};if(f!==-1){t[f].references++;t[f].updater(p)}else{var h=o(p,n);n.byIndex=s;t.splice(s,0,{identifier:u,updater:h,references:1})}i.push(u)}return i}function o(e,t){var r=t.domAPI(t);r.update(e);var n=function t(t){if(t){if(t.css===e.css&&t.media===e.media&&t.sourceMap===e.sourceMap&&t.supports===e.supports&&t.layer===e.layer){return}r.update(e=t)}else{r.remove()}};return n}e.exports=function(e,o){o=o||{};e=e||[];var a=n(e,o);return function e(e){e=e||[];for(var i=0;i<a.length;i++){var s=a[i];var l=r(s);t[l].references--}var c=n(e,o);for(var d=0;d<a.length;d++){var u=a[d];var f=r(u);if(t[f].references===0){t[f].updater();t.splice(f,1)}}a=c}}},7659:function(e){var t={};/* istanbul ignore next  */function r(e){if(typeof t[e]==="undefined"){var r=document.querySelector(e);// Special case to return head of iframe instead of iframe itself
if(window.HTMLIFrameElement&&r instanceof window.HTMLIFrameElement){try{// This will throw an exception if access to iframe is blocked
// due to cross-origin restrictions
r=r.contentDocument.head}catch(e){// istanbul ignore next
r=null}}t[e]=r}return t[e]}/* istanbul ignore next  */function n(e,t){var n=r(e);if(!n){throw new Error("Couldn't find a style target. This probably means that the value for the 'insert' parameter is invalid.")}n.appendChild(t)}e.exports=n},540:function(e){/* istanbul ignore next  */function t(e){var t=document.createElement("style");e.setAttributes(t,e.attributes);e.insert(t,e.options);return t}e.exports=t},5056:function(e,t,r){/* istanbul ignore next  */function n(e){var t=true?r.nc:0;if(t){e.setAttribute("nonce",t)}}e.exports=n},7825:function(e){/* istanbul ignore next  */function t(e,t,r){var n="";if(r.supports){n+="@supports (".concat(r.supports,") {")}if(r.media){n+="@media ".concat(r.media," {")}var o=typeof r.layer!=="undefined";if(o){n+="@layer".concat(r.layer.length>0?" ".concat(r.layer):""," {")}n+=r.css;if(o){n+="}"}if(r.media){n+="}"}if(r.supports){n+="}"}var a=r.sourceMap;if(a&&typeof btoa!=="undefined"){n+="\n/*# sourceMappingURL=data:application/json;base64,".concat(btoa(unescape(encodeURIComponent(JSON.stringify(a))))," */")}// For old IE
/* istanbul ignore if  */t.styleTagTransform(n,e,t.options)}function r(e){// istanbul ignore if
if(e.parentNode===null){return false}e.parentNode.removeChild(e)}/* istanbul ignore next  */function n(e){if(typeof document==="undefined"){return{update:function e(){},remove:function e(){}}}var n=e.insertStyleElement(e);return{update:function r(r){t(n,e,r)},remove:function e(){r(n)}}}e.exports=n},1113:function(e){/* istanbul ignore next  */function t(e,t){if(t.styleSheet){t.styleSheet.cssText=e}else{while(t.firstChild){t.removeChild(t.firstChild)}t.appendChild(document.createTextNode(e))}}e.exports=t},543:function(e,t,r){// ESM COMPAT FLAG
r.r(t);// EXPORTS
r.d(t,{"default":()=>/* binding */cG});// NAMESPACE OBJECT: ../tutor/node_modules/react-day-picker/dist/esm/components/custom-components.js
var n={};r.r(n);r.d(n,{Button:()=>nn,CaptionLabel:()=>no,Chevron:()=>na,Day:()=>ni,DayButton:()=>ns,Dropdown:()=>nl,DropdownNav:()=>nc,Footer:()=>nd,Month:()=>nu,MonthCaption:()=>nf,MonthGrid:()=>np,Months:()=>nh,MonthsDropdown:()=>nv,Nav:()=>nb,NextMonthButton:()=>ny,Option:()=>n_,PreviousMonthButton:()=>nw,Root:()=>nx,Select:()=>nC,Week:()=>nk,WeekNumber:()=>nM,WeekNumberHeader:()=>nD,Weekday:()=>nA,Weekdays:()=>nY,Weeks:()=>nI,YearsDropdown:()=>nS});// NAMESPACE OBJECT: ../tutor/node_modules/react-day-picker/dist/esm/formatters/index.js
var o={};r.r(o);r.d(o,{formatCaption:()=>nH,formatDay:()=>nO,formatMonthCaption:()=>nN,formatMonthDropdown:()=>nL,formatWeekNumber:()=>nW,formatWeekNumberHeader:()=>nP,formatWeekdayName:()=>nV,formatYearCaption:()=>nB,formatYearDropdown:()=>nK});// NAMESPACE OBJECT: ../tutor/node_modules/react-day-picker/dist/esm/labels/index.js
var a={};r.r(a);r.d(a,{labelCaption:()=>n$,labelDay:()=>nQ,labelDayButton:()=>nZ,labelGrid:()=>nG,labelGridcell:()=>nX,labelMonthDropdown:()=>nJ,labelNav:()=>n0,labelNext:()=>n1,labelPrevious:()=>n2,labelWeekNumber:()=>n6,labelWeekNumberHeader:()=>n9,labelWeekday:()=>n5,labelYearDropdown:()=>n8});// EXTERNAL MODULE: ./node_modules/@swc/helpers/esm/_object_spread.js + 1 modules
var i=r(2822);// EXTERNAL MODULE: ./node_modules/@swc/helpers/esm/_object_spread_props.js
var s=r(5456);// EXTERNAL MODULE: ./node_modules/@emotion/react/jsx-runtime/dist/emotion-react-jsx-runtime.esm.js
var l=r(3747);// EXTERNAL MODULE: ./node_modules/@emotion/react/dist/emotion-react.esm.js
var c=r(1699);// EXTERNAL MODULE: external "wp.i18n"
var d=r(2470);// EXTERNAL MODULE: ./node_modules/react-hook-form/dist/index.esm.mjs
var u=r(9785);// EXTERNAL MODULE: ../tutor/node_modules/@swc/helpers/esm/_object_spread.js + 1 modules
var f=r(9973);// EXTERNAL MODULE: ../tutor/node_modules/@swc/helpers/esm/_object_spread_props.js
var p=r(343);// EXTERNAL MODULE: ../tutor/node_modules/@swc/helpers/esm/_object_without_properties.js + 1 modules
var h=r(6840);// EXTERNAL MODULE: ../tutor/node_modules/@swc/helpers/esm/_tagged_template_literal.js
var g=r(4034);// EXTERNAL MODULE: ../tutor/assets/react/v3/shared/config/styles.ts
var m=r(9769);// EXTERNAL MODULE: ../tutor/assets/react/v3/shared/config/typography.ts
var v=r(3910);// EXTERNAL MODULE: ../tutor/assets/react/v3/shared/utils/util.ts + 4 modules
var b=r(8475);// EXTERNAL MODULE: external "React"
var y=r(1594);var _=/*#__PURE__*/r.n(y);// CONCATENATED MODULE: ../tutor/assets/react/v3/shared/atoms/CheckBox.tsx
function w(){var e=(0,g._)(["\n      cursor: not-allowed;\n    "]);w=function t(){return e};return e}function x(){var e=(0,g._)(["\n      color: ",";\n    "]);x=function t(){return e};return e}function C(){var e=(0,g._)(["\n        margin-right: ",";\n      "]);C=function t(){return e};return e}function k(){var e=(0,g._)(["\n        background-color: ",";\n      "]);k=function t(){return e};return e}function A(){var e=(0,g._)(["\n      & + span::before {\n        background-image: url(\"data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' width='10' height='2' fill='none'%3E%3Crect width='10' height='1.5' y='.25' fill='%23fff' rx='.75'/%3E%3C/svg%3E\");\n        background-repeat: no-repeat;\n        background-size: 10px;\n        background-position: center center;\n        background-color: ",";\n        border: 0.5px solid ",";\n      }\n    "]);A=function t(){return e};return e}function Y(){var e=(0,g._)(["\n      & + span {\n        cursor: not-allowed;\n\n        &::before {\n          border-color: ",";\n        }\n      }\n    "]);Y=function t(){return e};return e}var M=/*#__PURE__*/_().forwardRef((e,t)=>{var{id:r=(0,b/* .nanoid */.Ak)(),name:n,labelCss:o,inputCss:a,label:i="",checked:s,value:c,disabled:d=false,onChange:u,onBlur:h,isIndeterminate:g=false}=e;var m=e=>{u===null||u===void 0?void 0:u(!g?e.target.checked:true,e)};var v=e=>{if(typeof e==="string"){return e}if(typeof e==="number"||typeof e==="boolean"||e===null){return String(e)}if(e===undefined){return""}if(/*#__PURE__*/_().isValidElement(e)){var t;var r=(t=e.props)===null||t===void 0?void 0:t.children;if(typeof r==="string"){return r}if(Array.isArray(r)){return r.map(e=>typeof e==="string"?e:"").filter(Boolean).join(" ")}}return""};return/*#__PURE__*/(0,l/* .jsxs */.FD)("label",{htmlFor:r,css:[D.container({disabled:d}),o],children:[/*#__PURE__*/(0,l/* .jsx */.Y)("input",(0,p._)((0,f._)({},e),{ref:t,id:r,name:n,type:"checkbox",value:c,checked:!!s,disabled:d,"aria-invalid":e["aria-invalid"],onChange:m,onBlur:h,css:[a,D.checkbox({label:!!i,isIndeterminate:g,disabled:d})]})),/*#__PURE__*/(0,l/* .jsx */.Y)("span",{}),/*#__PURE__*/(0,l/* .jsx */.Y)("span",{css:[D.label({isDisabled:d}),o],title:v(i),children:i})]})});var D={container:e=>{var{disabled:t=false}=e;return/*#__PURE__*/(0,c/* .css */.AH)("position:relative;display:flex;align-items:center;cursor:pointer;user-select:none;color:",m/* .colorTokens.text.title */.I6.text.title,";",t&&(0,c/* .css */.AH)(w()))},label:e=>{var{isDisabled:t=false}=e;return/*#__PURE__*/(0,c/* .css */.AH)(v/* .typography.caption */.I.caption(),";color:",m/* .colorTokens.text.title */.I6.text.title,";",t&&(0,c/* .css */.AH)(x(),m/* .colorTokens.text.disable */.I6.text.disable))},checkbox:e=>{var{label:t,isIndeterminate:r,disabled:n}=e;return/*#__PURE__*/(0,c/* .css */.AH)("position:absolute;opacity:0 !important;height:0;width:0;& + span{position:relative;cursor:pointer;display:inline-flex;align-items:center;",t&&(0,c/* .css */.AH)(C(),m/* .spacing["10"] */.YK["10"]),"}& + span::before{content:'';background-color:",m/* .colorTokens.background.white */.I6.background.white,";border:1px solid ",m/* .colorTokens.stroke["default"] */.I6.stroke["default"],";border-radius:3px;width:20px;height:20px;}&:checked + span::before{background-image:url('data:image/svg+xml;base64,PHN2ZyB3aWR0aD0iMTIiIGhlaWdodD0iOSIgdmlld0JveD0iMCAwIDEyIDkiIGZpbGw9Im5vbmUiIHhtbG5zPSJodHRwOi8vd3d3LnczLm9yZy8yMDAwL3N2ZyI+CjxwYXRoIGQ9Ik0wLjE2NTM0NCA0Ljg5OTQ2QzAuMTEzMjM1IDQuODQ0OTcgMC4wNzE3MzQ2IDQuNzgxMTUgMC4wNDI5ODg3IDQuNzExM0MtMC4wMTQzMjk2IDQuNTU1NjQgLTAuMDE0MzI5NiA0LjM4NDQ5IDAuMDQyOTg4NyA0LjIyODg0QzAuMDcxMTU0OSA0LjE1ODY4IDAuMTEyNzIzIDQuMDk0NzUgMC4xNjUzNDQgNC4wNDA2OEwxLjAzMzgyIDMuMjAzNkMxLjA4NDkzIDMuMTQzNCAxLjE0ODkgMy4wOTU1NyAxLjIyMDk2IDMuMDYzNjlDMS4yOTAzMiAzLjAzMjEzIDEuMzY1NTQgMy4wMTU2OSAxLjQ0MTY3IDMuMDE1NDRDMS41MjQxOCAzLjAxMzgzIDEuNjA2MDUgMy4wMzAyOSAxLjY4MTU5IDMuMDYzNjlDMS43NTYyNiAzLjA5NzA3IDEuODIzODYgMy4xNDQ1NyAxLjg4MDcxIDMuMjAzNkw0LjUwMDU1IDUuODQyNjhMMTAuMTI0MSAwLjE4ODIwNUMxMC4xNzk0IDAuMTI5NTQ0IDEwLjI0NTQgMC4wODIwNTQyIDEwLjMxODQgMC4wNDgyOTA4QzEwLjM5NDEgMC4wMTU0NjYxIDEwLjQ3NTkgLTAuMDAwOTcyMDU3IDEwLjU1ODMgNC40NDIyOGUtMDVDMTAuNjM1NyAwLjAwMDQ3NTMxOCAxMC43MTIxIDAuMDE3NDc5NSAxMC43ODI0IDAuMDQ5OTI0MkMxMC44NTI3IDAuMDgyMzY4OSAxMC45MTU0IDAuMTI5NTA5IDEwLjk2NjIgMC4xODgyMDVMMTEuODM0NyAxLjAzNzM0QzExLjg4NzMgMS4wOTE0MiAxMS45Mjg4IDEuMTU1MzQgMTEuOTU3IDEuMjI1NUMxMi4wMTQzIDEuMzgxMTYgMTIuMDE0MyAxLjU1MjMxIDExLjk1NyAxLjcwNzk2QzExLjkyODMgMS43Nzc4MSAxMS44ODY4IDEuODQxNjMgMTEuODM0NyAxLjg5NjEzTDQuOTIyOCA4LjgwOTgyQzQuODcxMjkgOC44NzAyMSA0LjgwNzQ3IDguOTE4NzUgNC43MzU2NiA4Ljk1MjE1QzQuNTgyMDIgOS4wMTU5NSA0LjQwOTQ5IDkuMDE1OTUgNC4yNTU4NCA4Ljk1MjE1QzQuMTg0MDQgOC45MTg3NSA0LjEyMDIyIDguODcwMjEgNC4wNjg3MSA4LjgwOTgyTDAuMTY1MzQ0IDQuODk5NDZaIiBmaWxsPSJ3aGl0ZSIvPgo8L3N2Zz4K');background-repeat:no-repeat;background-size:10px 10px;background-position:center center;border-color:transparent;background-color:",m/* .colorTokens.icon.brand */.I6.icon.brand,";border-radius:",m/* .borderRadius["4"] */.Vq["4"],";",n&&(0,c/* .css */.AH)(k(),m/* .colorTokens.icon.disable["default"] */.I6.icon.disable["default"]),"}",r&&(0,c/* .css */.AH)(A(),m/* .colorTokens.brand.blue */.I6.brand.blue,m/* .colorTokens.stroke.white */.I6.stroke.white)," ",n&&(0,c/* .css */.AH)(Y(),m/* .colorTokens.stroke.disable */.I6.stroke.disable),"    &:focus-visible{& + span{border-radius:",m/* .borderRadius["2"] */.Vq["2"],";outline:2px solid ",m/* .colorTokens.stroke.brand */.I6.stroke.brand,";outline-offset:1px;}}")}};/* export default */const I=M;// EXTERNAL MODULE: ../tutor/assets/react/v3/shared/atoms/SVGIcon.tsx
var S=r(4606);// EXTERNAL MODULE: ../tutor/assets/react/v3/shared/atoms/Tooltip.tsx + 56 modules
var T=r(3426);// EXTERNAL MODULE: ../tutor/assets/react/v3/shared/components/fields/FormFieldWrapper.tsx
var F=r(7814);// CONCATENATED MODULE: ../tutor/assets/react/v3/shared/components/fields/FormCheckbox.tsx
var E=e=>{var{field:t,fieldState:r,disabled:n,value:o,onChange:a,label:i,description:s,helpText:c,isHidden:d,labelCss:u}=e;return/*#__PURE__*/(0,l/* .jsx */.Y)(F/* ["default"] */.A,{field:t,fieldState:r,isHidden:d,children:e=>{var{css:r}=e,d=(0,h._)(e,["css"]);return/*#__PURE__*/(0,l/* .jsxs */.FD)("div",{children:[/*#__PURE__*/(0,l/* .jsxs */.FD)("div",{css:N.wrapper,children:[/*#__PURE__*/(0,l/* .jsx */.Y)(I,(0,p._)((0,f._)({},t,d),{inputCss:r,labelCss:u,value:o,disabled:n,checked:t.value,label:i,onChange:()=>{t.onChange(!t.value);if(a){a(!t.value)}}})),c&&/*#__PURE__*/(0,l/* .jsx */.Y)(T/* ["default"] */.A,{content:c,placement:"top",allowHTML:true,children:/*#__PURE__*/(0,l/* .jsx */.Y)(S/* ["default"] */.A,{name:"info",width:20,height:20})})]}),s&&/*#__PURE__*/(0,l/* .jsx */.Y)("p",{css:N.description,children:s})]})}})};/* export default */const H=E;var N={wrapper:/*#__PURE__*/(0,c/* .css */.AH)("display:flex;align-items:center;gap:",m/* .spacing["6"] */.YK["6"],";& > div{display:flex;color:",m/* .colorTokens.icon["default"] */.I6.icon["default"],";}"),description:/*#__PURE__*/(0,c/* .css */.AH)(v/* .typography.small */.I.small(),"    color:",m/* .colorTokens.text.hints */.I6.text.hints,";padding-left:30px;margin-top:",m/* .spacing["6"] */.YK["6"],";")};// EXTERNAL MODULE: ../tutor/node_modules/date-fns/esm/isValid/index.js + 1 modules
var O=r(2605);// EXTERNAL MODULE: ../tutor/node_modules/date-fns/esm/format/index.js + 28 modules
var L=r(9784);// CONCATENATED MODULE: ../tutor/node_modules/@date-fns/tz/constants/index.js
/**
 * The symbol to access the `TZDate`'s function to construct a new instance from
 * the provided value. It helps date-fns to inherit the time zone.
 */const V=Symbol.for("constructDateFrom");// CONCATENATED MODULE: ../tutor/node_modules/@date-fns/tz/tzName/index.js
/**
 * Time zone name format.
 *//**
 * The function returns the time zone name for the given date in the specified
 * time zone.
 *
 * It uses the `Intl.DateTimeFormat` API and by default outputs the time zone
 * name in a long format, e.g. "Pacific Standard Time" or
 * "Singapore Standard Time".
 *
 * It is possible to specify the format as the third argument using one of the following options
 *
 * - "short": e.g. "EDT" or "GMT+8".
 * - "long": e.g. "Eastern Daylight Time".
 * - "shortGeneric": e.g. "ET" or "Singapore Time".
 * - "longGeneric": e.g. "Eastern Time" or "Singapore Standard Time".
 *
 * These options correspond to TR35 tokens `z..zzz`, `zzzz`, `v`, and `vvvv` respectively: https://www.unicode.org/reports/tr35/tr35-dates.html#dfst-zone
 *
 * @param timeZone - Time zone name (IANA or UTC offset)
 * @param date - Date object to get the time zone name for
 * @param format - Optional format of the time zone name. Defaults to "long". Can be "short", "long", "shortGeneric", or "longGeneric".
 *
 * @returns Time zone name (e.g. "Singapore Standard Time")
 */function W(e,t,r="long"){return new Intl.DateTimeFormat("en-US",{// Enforces engine to render the time. Without the option JavaScriptCore omits it.
hour:"numeric",timeZone:e,timeZoneName:r}).format(t).split(/\s/g)// Format.JS uses non-breaking spaces
.slice(2)// Skip the hour and AM/PM parts
.join(" ")};// CONCATENATED MODULE: ../tutor/node_modules/@date-fns/tz/tzOffset/index.js
const P={};const K={};/**
 * The function extracts UTC offset in minutes from the given date in specified
 * time zone.
 *
 * Unlike `Date.prototype.getTimezoneOffset`, this function returns the value
 * mirrored to the sign of the offset in the time zone. For Asia/Singapore
 * (UTC+8), `tzOffset` returns 480, while `getTimezoneOffset` returns -480.
 *
 * @param timeZone - Time zone name (IANA or UTC offset)
 * @param date - Date to check the offset for
 *
 * @returns UTC offset in minutes
 */function B(e,t){try{const r=P[e]||=new Intl.DateTimeFormat("en-US",{timeZone:e,timeZoneName:"longOffset"}).format;const n=r(t).split("GMT")[1];if(n in K)return K[n];return z(n,n.split(":"))}catch{// Fallback to manual parsing if the runtime doesn't support ±HH:MM/±HHMM/±HH
// See: https://github.com/nodejs/node/issues/53419
if(e in K)return K[e];const t=e?.match(j);if(t)return z(e,t.slice(1));return NaN}}const j=/([+-]\d\d):?(\d\d)?/;function z(e,t){const r=+(t[0]||0);const n=+(t[1]||0);// Convert seconds to minutes by dividing by 60 to keep the function return in minutes.
const o=+(t[2]||0)/60;return K[e]=r*60+n>0?r*60+n+o:r*60-n-o};// CONCATENATED MODULE: ../tutor/node_modules/@date-fns/tz/date/mini.js
class R extends Date{//#region static
constructor(...e){super();if(e.length>1&&typeof e[e.length-1]==="string"){this.timeZone=e.pop()}this.internal=new Date;if(isNaN(B(this.timeZone,this))){this.setTime(NaN)}else{if(!e.length){this.setTime(Date.now())}else if(typeof e[0]==="number"&&(e.length===1||e.length===2&&typeof e[1]!=="number")){this.setTime(e[0])}else if(typeof e[0]==="string"){this.setTime(+new Date(e[0]))}else if(e[0]instanceof Date){this.setTime(+e[0])}else{this.setTime(+new Date(...e));Q(this,NaN);U(this)}}}static tz(e,...t){return t.length?new R(...t,e):new R(Date.now(),e)}//#endregion
//#region time zone
withTimeZone(e){return new R(+this,e)}getTimezoneOffset(){const e=-B(this.timeZone,this);// Remove the seconds offset
// use Math.floor for negative GMT timezones and Math.ceil for positive GMT timezones.
return e>0?Math.floor(e):Math.ceil(e)}//#endregion
//#region time
setTime(e){Date.prototype.setTime.apply(this,arguments);U(this);return+this}//#endregion
//#region date-fns integration
[Symbol.for("constructDateFrom")](e){return new R(+new Date(e),this.timeZone)}}// Assign getters and setters
const q=/^(get|set)(?!UTC)/;Object.getOwnPropertyNames(Date.prototype).forEach(e=>{if(!q.test(e))return;const t=e.replace(q,"$1UTC");// Filter out methods without UTC counterparts
if(!R.prototype[t])return;if(e.startsWith("get")){// Delegate to internal date's UTC method
R.prototype[e]=function(){return this.internal[t]()}}else{// Assign regular setter
R.prototype[e]=function(){Date.prototype[t].apply(this.internal,arguments);Z(this);return+this};// Assign UTC setter
R.prototype[t]=function(){Date.prototype[t].apply(this,arguments);U(this);return+this}}});/**
 * Function syncs time to internal date, applying the time zone offset.
 *
 * @param {Date} date - Date to sync
 */function U(e){e.internal.setTime(+e);e.internal.setUTCSeconds(e.internal.getUTCSeconds()-Math.round(-B(e.timeZone,e)*60))}/**
 * Function syncs the internal date UTC values to the date. It allows to get
 * accurate timestamp value.
 *
 * @param {Date} date - The date to sync
 */function Z(e){// First we transpose the internal values
Date.prototype.setFullYear.call(e,e.internal.getUTCFullYear(),e.internal.getUTCMonth(),e.internal.getUTCDate());Date.prototype.setHours.call(e,e.internal.getUTCHours(),e.internal.getUTCMinutes(),e.internal.getUTCSeconds(),e.internal.getUTCMilliseconds());// Now we have to adjust the date to the system time zone
Q(e)}/**
 * Function adjusts the date to the system time zone. It uses the time zone
 * differences to calculate the offset and adjust the date.
 *
 * @param {Date} date - Date to adjust
 */function Q(e){// Save the time zone offset before all the adjustments
const t=B(e.timeZone,e);// Remove the seconds offset
// use Math.floor for negative GMT timezones and Math.ceil for positive GMT timezones.
const r=t>0?Math.floor(t):Math.ceil(t);//#region System DST adjustment
// The biggest problem with using the system time zone is that when we create
// a date from internal values stored in UTC, the system time zone might end
// up on the DST hour:
//
//   $ TZ=America/New_York node
//   > new Date(2020, 2, 8, 1).toString()
//   'Sun Mar 08 2020 01:00:00 GMT-0500 (Eastern Standard Time)'
//   > new Date(2020, 2, 8, 2).toString()
//   'Sun Mar 08 2020 03:00:00 GMT-0400 (Eastern Daylight Time)'
//   > new Date(2020, 2, 8, 3).toString()
//   'Sun Mar 08 2020 03:00:00 GMT-0400 (Eastern Daylight Time)'
//   > new Date(2020, 2, 8, 4).toString()
//   'Sun Mar 08 2020 04:00:00 GMT-0400 (Eastern Daylight Time)'
//
// Here we get the same hour for both 2 and 3, because the system time zone
// has DST beginning at 8 March 2020, 2 a.m. and jumps to 3 a.m. So we have
// to adjust the internal date to reflect that.
//
// However we want to adjust only if that's the DST hour the change happenes,
// not the hour where DST moves to.
// We calculate the previous hour to see if the time zone offset has changed
// and we have landed on the DST hour.
const n=new Date(+e);// We use UTC methods here as we don't want to land on the same hour again
// in case of DST.
n.setUTCHours(n.getUTCHours()-1);// Calculate if we are on the system DST hour.
const o=-new Date(+e).getTimezoneOffset();const a=-new Date(+n).getTimezoneOffset();const i=o-a;// Detect the DST shift. System DST change will occur both on
const s=Date.prototype.getHours.apply(e)!==e.internal.getUTCHours();// Move the internal date when we are on the system DST hour.
if(i&&s)e.internal.setUTCMinutes(e.internal.getUTCMinutes()+i);//#endregion
//#region System diff adjustment
// Now we need to adjust the date, since we just applied internal values.
// We need to calculate the difference between the system and date time zones
// and apply it to the date.
const l=o-r;if(l)Date.prototype.setUTCMinutes.call(e,Date.prototype.getUTCMinutes.call(e)+l);//#endregion
//#region Seconds System diff adjustment
const c=new Date(+e);// Set the UTC seconds to 0 to isolate the timezone offset in seconds.
c.setUTCSeconds(0);// For negative systemOffset, invert the seconds.
const d=o>0?c.getSeconds():(c.getSeconds()-60)%60;// Calculate the seconds offset based on the timezone offset.
const u=Math.round(-(B(e.timeZone,e)*60))%60;if(u||d){e.internal.setUTCSeconds(e.internal.getUTCSeconds()+u);Date.prototype.setUTCSeconds.call(e,Date.prototype.getUTCSeconds.call(e)+u+d)}//#endregion
//#region Post-adjustment DST fix
const f=B(e.timeZone,e);// Remove the seconds offset
// use Math.floor for negative GMT timezones and Math.ceil for positive GMT timezones.
const p=f>0?Math.floor(f):Math.ceil(f);const h=-new Date(+e).getTimezoneOffset();const g=h-p;const m=p!==r;const v=g-l;if(m&&v){Date.prototype.setUTCMinutes.call(e,Date.prototype.getUTCMinutes.call(e)+v);// Now we need to check if got offset change during the post-adjustment.
// If so, we also need both dates to reflect that.
const t=B(e.timeZone,e);// Remove the seconds offset
// use Math.floor for negative GMT timezones and Math.ceil for positive GMT timezones.
const r=t>0?Math.floor(t):Math.ceil(t);const n=p-r;if(n){e.internal.setUTCMinutes(e.internal.getUTCMinutes()+n);Date.prototype.setUTCMinutes.call(e,Date.prototype.getUTCMinutes.call(e)+n)}}//#endregion
};// CONCATENATED MODULE: ../tutor/node_modules/@date-fns/tz/date/index.js
class G extends R{//#region static
static tz(e,...t){return t.length?new G(...t,e):new G(Date.now(),e)}//#endregion
//#region representation
toISOString(){const[e,t,r]=this.tzComponents();const n=`${e}${t}:${r}`;return this.internal.toISOString().slice(0,-1)+n}toString(){// "Tue Aug 13 2024 07:50:19 GMT+0800 (Singapore Standard Time)";
return`${this.toDateString()} ${this.toTimeString()}`}toDateString(){// toUTCString returns RFC 7231 ("Mon, 12 Aug 2024 23:36:08 GMT")
const[e,t,r,n]=this.internal.toUTCString().split(" ");// "Tue Aug 13 2024"
return`${e?.slice(0,-1)} ${r} ${t} ${n}`}toTimeString(){// toUTCString returns RFC 7231 ("Mon, 12 Aug 2024 23:36:08 GMT")
const e=this.internal.toUTCString().split(" ")[4];const[t,r,n]=this.tzComponents();// "07:42:23 GMT+0800 (Singapore Standard Time)"
return`${e} GMT${t}${r}${n} (${W(this.timeZone,this)})`}toLocaleString(e,t){return Date.prototype.toLocaleString.call(this,e,{...t,timeZone:t?.timeZone||this.timeZone})}toLocaleDateString(e,t){return Date.prototype.toLocaleDateString.call(this,e,{...t,timeZone:t?.timeZone||this.timeZone})}toLocaleTimeString(e,t){return Date.prototype.toLocaleTimeString.call(this,e,{...t,timeZone:t?.timeZone||this.timeZone})}//#endregion
//#region private
tzComponents(){const e=this.getTimezoneOffset();const t=e>0?"-":"+";const r=String(Math.floor(Math.abs(e)/60)).padStart(2,"0");const n=String(Math.abs(e)%60).padStart(2,"0");return[t,r,n]}//#endregion
withTimeZone(e){return new G(+this,e)}//#region date-fns integration
[Symbol.for("constructDateFrom")](e){return new G(+new Date(e),this.timeZone)}};// CONCATENATED MODULE: ../tutor/node_modules/@date-fns/tz/tz/index.js
/**
 * The function creates accepts a time zone and returns a function that creates
 * a new `TZDate` instance in the time zone from the provided value. Use it to
 * provide the context for the date-fns functions, via the `in` option.
 *
 * @param timeZone - Time zone name (IANA or UTC offset)
 *
 * @returns Function that creates a new `TZDate` instance in the time zone
 */const $=e=>t=>TZDate.tz(e,+new Date(t));// CONCATENATED MODULE: ../tutor/node_modules/@date-fns/tz/index.js
;// CONCATENATED MODULE: ../tutor/node_modules/react-day-picker/node_modules/date-fns/locale/en-US/_lib/formatDistance.js
const X={lessThanXSeconds:{one:"less than a second",other:"less than {{count}} seconds"},xSeconds:{one:"1 second",other:"{{count}} seconds"},halfAMinute:"half a minute",lessThanXMinutes:{one:"less than a minute",other:"less than {{count}} minutes"},xMinutes:{one:"1 minute",other:"{{count}} minutes"},aboutXHours:{one:"about 1 hour",other:"about {{count}} hours"},xHours:{one:"1 hour",other:"{{count}} hours"},xDays:{one:"1 day",other:"{{count}} days"},aboutXWeeks:{one:"about 1 week",other:"about {{count}} weeks"},xWeeks:{one:"1 week",other:"{{count}} weeks"},aboutXMonths:{one:"about 1 month",other:"about {{count}} months"},xMonths:{one:"1 month",other:"{{count}} months"},aboutXYears:{one:"about 1 year",other:"about {{count}} years"},xYears:{one:"1 year",other:"{{count}} years"},overXYears:{one:"over 1 year",other:"over {{count}} years"},almostXYears:{one:"almost 1 year",other:"almost {{count}} years"}};const J=(e,t,r)=>{let n;const o=X[e];if(typeof o==="string"){n=o}else if(t===1){n=o.one}else{n=o.other.replace("{{count}}",t.toString())}if(r?.addSuffix){if(r.comparison&&r.comparison>0){return"in "+n}else{return n+" ago"}}return n};// CONCATENATED MODULE: ../tutor/node_modules/react-day-picker/node_modules/date-fns/locale/_lib/buildFormatLongFn.js
function ee(e){return (t={})=>{// TODO: Remove String()
const r=t.width?String(t.width):e.defaultWidth;const n=e.formats[r]||e.formats[e.defaultWidth];return n}};// CONCATENATED MODULE: ../tutor/node_modules/react-day-picker/node_modules/date-fns/locale/en-US/_lib/formatLong.js
const et={full:"EEEE, MMMM do, y",long:"MMMM do, y",medium:"MMM d, y",short:"MM/dd/yyyy"};const er={full:"h:mm:ss a zzzz",long:"h:mm:ss a z",medium:"h:mm:ss a",short:"h:mm a"};const en={full:"{{date}} 'at' {{time}}",long:"{{date}} 'at' {{time}}",medium:"{{date}}, {{time}}",short:"{{date}}, {{time}}"};const eo={date:ee({formats:et,defaultWidth:"full"}),time:ee({formats:er,defaultWidth:"full"}),dateTime:ee({formats:en,defaultWidth:"full"})};// CONCATENATED MODULE: ../tutor/node_modules/react-day-picker/node_modules/date-fns/locale/en-US/_lib/formatRelative.js
const ea={lastWeek:"'last' eeee 'at' p",yesterday:"'yesterday at' p",today:"'today at' p",tomorrow:"'tomorrow at' p",nextWeek:"eeee 'at' p",other:"P"};const ei=(e,t,r,n)=>ea[e];// CONCATENATED MODULE: ../tutor/node_modules/react-day-picker/node_modules/date-fns/locale/_lib/buildLocalizeFn.js
/**
 * The localize function argument callback which allows to convert raw value to
 * the actual type.
 *
 * @param value - The value to convert
 *
 * @returns The converted value
 *//**
 * The map of localized values for each width.
 *//**
 * The index type of the locale unit value. It types conversion of units of
 * values that don't start at 0 (i.e. quarters).
 *//**
 * Converts the unit value to the tuple of values.
 *//**
 * The tuple of localized era values. The first element represents BC,
 * the second element represents AD.
 *//**
 * The tuple of localized quarter values. The first element represents Q1.
 *//**
 * The tuple of localized day values. The first element represents Sunday.
 *//**
 * The tuple of localized month values. The first element represents January.
 */function es(e){return(t,r)=>{const n=r?.context?String(r.context):"standalone";let o;if(n==="formatting"&&e.formattingValues){const t=e.defaultFormattingWidth||e.defaultWidth;const n=r?.width?String(r.width):t;o=e.formattingValues[n]||e.formattingValues[t]}else{const t=e.defaultWidth;const n=r?.width?String(r.width):e.defaultWidth;o=e.values[n]||e.values[t]}const a=e.argumentCallback?e.argumentCallback(t):t;// @ts-expect-error - For some reason TypeScript just don't want to match it, no matter how hard we try. I challenge you to try to remove it!
return o[a]}};// CONCATENATED MODULE: ../tutor/node_modules/react-day-picker/node_modules/date-fns/locale/en-US/_lib/localize.js
const el={narrow:["B","A"],abbreviated:["BC","AD"],wide:["Before Christ","Anno Domini"]};const ec={narrow:["1","2","3","4"],abbreviated:["Q1","Q2","Q3","Q4"],wide:["1st quarter","2nd quarter","3rd quarter","4th quarter"]};// Note: in English, the names of days of the week and months are capitalized.
// If you are making a new locale based on this one, check if the same is true for the language you're working on.
// Generally, formatted dates should look like they are in the middle of a sentence,
// e.g. in Spanish language the weekdays and months should be in the lowercase.
const ed={narrow:["J","F","M","A","M","J","J","A","S","O","N","D"],abbreviated:["Jan","Feb","Mar","Apr","May","Jun","Jul","Aug","Sep","Oct","Nov","Dec"],wide:["January","February","March","April","May","June","July","August","September","October","November","December"]};const eu={narrow:["S","M","T","W","T","F","S"],short:["Su","Mo","Tu","We","Th","Fr","Sa"],abbreviated:["Sun","Mon","Tue","Wed","Thu","Fri","Sat"],wide:["Sunday","Monday","Tuesday","Wednesday","Thursday","Friday","Saturday"]};const ef={narrow:{am:"a",pm:"p",midnight:"mi",noon:"n",morning:"morning",afternoon:"afternoon",evening:"evening",night:"night"},abbreviated:{am:"AM",pm:"PM",midnight:"midnight",noon:"noon",morning:"morning",afternoon:"afternoon",evening:"evening",night:"night"},wide:{am:"a.m.",pm:"p.m.",midnight:"midnight",noon:"noon",morning:"morning",afternoon:"afternoon",evening:"evening",night:"night"}};const ep={narrow:{am:"a",pm:"p",midnight:"mi",noon:"n",morning:"in the morning",afternoon:"in the afternoon",evening:"in the evening",night:"at night"},abbreviated:{am:"AM",pm:"PM",midnight:"midnight",noon:"noon",morning:"in the morning",afternoon:"in the afternoon",evening:"in the evening",night:"at night"},wide:{am:"a.m.",pm:"p.m.",midnight:"midnight",noon:"noon",morning:"in the morning",afternoon:"in the afternoon",evening:"in the evening",night:"at night"}};const eh=(e,t)=>{const r=Number(e);// If ordinal numbers depend on context, for example,
// if they are different for different grammatical genders,
// use `options.unit`.
//
// `unit` can be 'year', 'quarter', 'month', 'week', 'date', 'dayOfYear',
// 'day', 'hour', 'minute', 'second'.
const n=r%100;if(n>20||n<10){switch(n%10){case 1:return r+"st";case 2:return r+"nd";case 3:return r+"rd"}}return r+"th"};const eg={ordinalNumber:eh,era:es({values:el,defaultWidth:"wide"}),quarter:es({values:ec,defaultWidth:"wide",argumentCallback:e=>e-1}),month:es({values:ed,defaultWidth:"wide"}),day:es({values:eu,defaultWidth:"wide"}),dayPeriod:es({values:ef,defaultWidth:"wide",formattingValues:ep,defaultFormattingWidth:"wide"})};// CONCATENATED MODULE: ../tutor/node_modules/react-day-picker/node_modules/date-fns/locale/_lib/buildMatchFn.js
function em(e){return(t,r={})=>{const n=r.width;const o=n&&e.matchPatterns[n]||e.matchPatterns[e.defaultMatchWidth];const a=t.match(o);if(!a){return null}const i=a[0];const s=n&&e.parsePatterns[n]||e.parsePatterns[e.defaultParseWidth];const l=Array.isArray(s)?eb(s,e=>e.test(i)):ev(s,e=>e.test(i));let c;c=e.valueCallback?e.valueCallback(l):l;c=r.valueCallback?r.valueCallback(c):c;const d=t.slice(i.length);return{value:c,rest:d}}}function ev(e,t){for(const r in e){if(Object.prototype.hasOwnProperty.call(e,r)&&t(e[r])){return r}}return undefined}function eb(e,t){for(let r=0;r<e.length;r++){if(t(e[r])){return r}}return undefined};// CONCATENATED MODULE: ../tutor/node_modules/react-day-picker/node_modules/date-fns/locale/_lib/buildMatchPatternFn.js
function ey(e){return(t,r={})=>{const n=t.match(e.matchPattern);if(!n)return null;const o=n[0];const a=t.match(e.parsePattern);if(!a)return null;let i=e.valueCallback?e.valueCallback(a[0]):a[0];// [TODO] I challenge you to fix the type
i=r.valueCallback?r.valueCallback(i):i;const s=t.slice(o.length);return{value:i,rest:s}}};// CONCATENATED MODULE: ../tutor/node_modules/react-day-picker/node_modules/date-fns/locale/en-US/_lib/match.js
const e_=/^(\d+)(th|st|nd|rd)?/i;const ew=/\d+/i;const ex={narrow:/^(b|a)/i,abbreviated:/^(b\.?\s?c\.?|b\.?\s?c\.?\s?e\.?|a\.?\s?d\.?|c\.?\s?e\.?)/i,wide:/^(before christ|before common era|anno domini|common era)/i};const eC={any:[/^b/i,/^(a|c)/i]};const ek={narrow:/^[1234]/i,abbreviated:/^q[1234]/i,wide:/^[1234](th|st|nd|rd)? quarter/i};const eA={any:[/1/i,/2/i,/3/i,/4/i]};const eY={narrow:/^[jfmasond]/i,abbreviated:/^(jan|feb|mar|apr|may|jun|jul|aug|sep|oct|nov|dec)/i,wide:/^(january|february|march|april|may|june|july|august|september|october|november|december)/i};const eM={narrow:[/^j/i,/^f/i,/^m/i,/^a/i,/^m/i,/^j/i,/^j/i,/^a/i,/^s/i,/^o/i,/^n/i,/^d/i],any:[/^ja/i,/^f/i,/^mar/i,/^ap/i,/^may/i,/^jun/i,/^jul/i,/^au/i,/^s/i,/^o/i,/^n/i,/^d/i]};const eD={narrow:/^[smtwf]/i,short:/^(su|mo|tu|we|th|fr|sa)/i,abbreviated:/^(sun|mon|tue|wed|thu|fri|sat)/i,wide:/^(sunday|monday|tuesday|wednesday|thursday|friday|saturday)/i};const eI={narrow:[/^s/i,/^m/i,/^t/i,/^w/i,/^t/i,/^f/i,/^s/i],any:[/^su/i,/^m/i,/^tu/i,/^w/i,/^th/i,/^f/i,/^sa/i]};const eS={narrow:/^(a|p|mi|n|(in the|at) (morning|afternoon|evening|night))/i,any:/^([ap]\.?\s?m\.?|midnight|noon|(in the|at) (morning|afternoon|evening|night))/i};const eT={any:{am:/^a/i,pm:/^p/i,midnight:/^mi/i,noon:/^no/i,morning:/morning/i,afternoon:/afternoon/i,evening:/evening/i,night:/night/i}};const eF={ordinalNumber:ey({matchPattern:e_,parsePattern:ew,valueCallback:e=>parseInt(e,10)}),era:em({matchPatterns:ex,defaultMatchWidth:"wide",parsePatterns:eC,defaultParseWidth:"any"}),quarter:em({matchPatterns:ek,defaultMatchWidth:"wide",parsePatterns:eA,defaultParseWidth:"any",valueCallback:e=>e+1}),month:em({matchPatterns:eY,defaultMatchWidth:"wide",parsePatterns:eM,defaultParseWidth:"any"}),day:em({matchPatterns:eD,defaultMatchWidth:"wide",parsePatterns:eI,defaultParseWidth:"any"}),dayPeriod:em({matchPatterns:eS,defaultMatchWidth:"any",parsePatterns:eT,defaultParseWidth:"any"})};// CONCATENATED MODULE: ../tutor/node_modules/react-day-picker/node_modules/date-fns/locale/en-US.js
/**
 * @category Locales
 * @summary English locale (United States).
 * @language English
 * @iso-639-2 eng
 * @author Sasha Koss [@kossnocorp](https://github.com/kossnocorp)
 * @author Lesha Koss [@leshakoss](https://github.com/leshakoss)
 */const eE={code:"en-US",formatDistance:J,formatLong:eo,formatRelative:ei,localize:eg,match:eF,options:{weekStartsOn:0/* Sunday */,firstWeekContainsDate:1}};// Fallback for modularized imports:
/* export default */const eH=/* unused pure expression or super */null&&eE;// CONCATENATED MODULE: ../tutor/node_modules/react-day-picker/node_modules/date-fns/constants.js
/**
 * @module constants
 * @summary Useful constants
 * @description
 * Collection of useful date constants.
 *
 * The constants could be imported from `date-fns/constants`:
 *
 * ```ts
 * import { maxTime, minTime } from "./constants/date-fns/constants";
 *
 * function isAllowedTime(time) {
 *   return time <= maxTime && time >= minTime;
 * }
 * ```
 *//**
 * @constant
 * @name daysInWeek
 * @summary Days in 1 week.
 */const eN=7;/**
 * @constant
 * @name daysInYear
 * @summary Days in 1 year.
 *
 * @description
 * How many days in a year.
 *
 * One years equals 365.2425 days according to the formula:
 *
 * > Leap year occurs every 4 years, except for years that are divisible by 100 and not divisible by 400.
 * > 1 mean year = (365+1/4-1/100+1/400) days = 365.2425 days
 */const eO=365.2425;/**
 * @constant
 * @name maxTime
 * @summary Maximum allowed time.
 *
 * @example
 * import { maxTime } from "./constants/date-fns/constants";
 *
 * const isValid = 8640000000000001 <= maxTime;
 * //=> false
 *
 * new Date(8640000000000001);
 * //=> Invalid Date
 */const eL=Math.pow(10,8)*24*60*60*1e3;/**
 * @constant
 * @name minTime
 * @summary Minimum allowed time.
 *
 * @example
 * import { minTime } from "./constants/date-fns/constants";
 *
 * const isValid = -8640000000000001 >= minTime;
 * //=> false
 *
 * new Date(-8640000000000001)
 * //=> Invalid Date
 */const eV=/* unused pure expression or super */null&&-eL;/**
 * @constant
 * @name millisecondsInWeek
 * @summary Milliseconds in 1 week.
 */const eW=6048e5;/**
 * @constant
 * @name millisecondsInDay
 * @summary Milliseconds in 1 day.
 */const eP=864e5;/**
 * @constant
 * @name millisecondsInMinute
 * @summary Milliseconds in 1 minute
 */const eK=6e4;/**
 * @constant
 * @name millisecondsInHour
 * @summary Milliseconds in 1 hour
 */const eB=36e5;/**
 * @constant
 * @name millisecondsInSecond
 * @summary Milliseconds in 1 second
 */const ej=1e3;/**
 * @constant
 * @name minutesInYear
 * @summary Minutes in 1 year.
 */const ez=525600;/**
 * @constant
 * @name minutesInMonth
 * @summary Minutes in 1 month.
 */const eR=43200;/**
 * @constant
 * @name minutesInDay
 * @summary Minutes in 1 day.
 */const eq=1440;/**
 * @constant
 * @name minutesInHour
 * @summary Minutes in 1 hour.
 */const eU=60;/**
 * @constant
 * @name monthsInQuarter
 * @summary Months in 1 quarter.
 */const eZ=3;/**
 * @constant
 * @name monthsInYear
 * @summary Months in 1 year.
 */const eQ=12;/**
 * @constant
 * @name quartersInYear
 * @summary Quarters in 1 year
 */const eG=4;/**
 * @constant
 * @name secondsInHour
 * @summary Seconds in 1 hour.
 */const e$=3600;/**
 * @constant
 * @name secondsInMinute
 * @summary Seconds in 1 minute.
 */const eX=60;/**
 * @constant
 * @name secondsInDay
 * @summary Seconds in 1 day.
 */const eJ=/* unused pure expression or super */null&&e$*24;/**
 * @constant
 * @name secondsInWeek
 * @summary Seconds in 1 week.
 */const e0=/* unused pure expression or super */null&&eJ*7;/**
 * @constant
 * @name secondsInYear
 * @summary Seconds in 1 year.
 */const e1=/* unused pure expression or super */null&&eJ*eO;/**
 * @constant
 * @name secondsInMonth
 * @summary Seconds in 1 month
 */const e2=/* unused pure expression or super */null&&e1/12;/**
 * @constant
 * @name secondsInQuarter
 * @summary Seconds in 1 quarter.
 */const e5=/* unused pure expression or super */null&&e2*3;/**
 * @constant
 * @name constructFromSymbol
 * @summary Symbol enabling Date extensions to inherit properties from the reference date.
 *
 * The symbol is used to enable the `constructFrom` function to construct a date
 * using a reference date and a value. It allows to transfer extra properties
 * from the reference date to the new date. It's useful for extensions like
 * [`TZDate`](https://github.com/date-fns/tz) that accept a time zone as
 * a constructor argument.
 */const e6=Symbol.for("constructDateFrom");// CONCATENATED MODULE: ../tutor/node_modules/react-day-picker/node_modules/date-fns/constructFrom.js
/**
 * @name constructFrom
 * @category Generic Helpers
 * @summary Constructs a date using the reference date and the value
 *
 * @description
 * The function constructs a new date using the constructor from the reference
 * date and the given value. It helps to build generic functions that accept
 * date extensions.
 *
 * It defaults to `Date` if the passed reference date is a number or a string.
 *
 * Starting from v3.7.0, it allows to construct a date using `[Symbol.for("constructDateFrom")]`
 * enabling to transfer extra properties from the reference date to the new date.
 * It's useful for extensions like [`TZDate`](https://github.com/date-fns/tz)
 * that accept a time zone as a constructor argument.
 *
 * @typeParam DateType - The `Date` type, the function operates on. Gets inferred from passed arguments. Allows to use extensions like [`UTCDate`](https://github.com/date-fns/utc).
 *
 * @param date - The reference date to take constructor from
 * @param value - The value to create the date
 *
 * @returns Date initialized using the given date and value
 *
 * @example
 * import { constructFrom } from "./constructFrom/date-fns";
 *
 * // A function that clones a date preserving the original type
 * function cloneDate<DateType extends Date>(date: DateType): DateType {
 *   return constructFrom(
 *     date, // Use constructor from the given date
 *     date.getTime() // Use the date value to create a new date
 *   );
 * }
 */function e9(e,t){if(typeof e==="function")return e(t);if(e&&typeof e==="object"&&e6 in e)return e[e6](t);if(e instanceof Date)return new e.constructor(t);return new Date(t)}// Fallback for modularized imports:
/* export default */const e8=/* unused pure expression or super */null&&e9;// CONCATENATED MODULE: ../tutor/node_modules/react-day-picker/node_modules/date-fns/toDate.js
/**
 * @name toDate
 * @category Common Helpers
 * @summary Convert the given argument to an instance of Date.
 *
 * @description
 * Convert the given argument to an instance of Date.
 *
 * If the argument is an instance of Date, the function returns its clone.
 *
 * If the argument is a number, it is treated as a timestamp.
 *
 * If the argument is none of the above, the function returns Invalid Date.
 *
 * Starting from v3.7.0, it clones a date using `[Symbol.for("constructDateFrom")]`
 * enabling to transfer extra properties from the reference date to the new date.
 * It's useful for extensions like [`TZDate`](https://github.com/date-fns/tz)
 * that accept a time zone as a constructor argument.
 *
 * **Note**: *all* Date arguments passed to any *date-fns* function is processed by `toDate`.
 *
 * @typeParam DateType - The `Date` type, the function operates on. Gets inferred from passed arguments. Allows to use extensions like [`UTCDate`](https://github.com/date-fns/utc).
 * @typeParam ResultDate - The result `Date` type, it is the type returned from the context function if it is passed, or inferred from the arguments.
 *
 * @param argument - The value to convert
 *
 * @returns The parsed date in the local time zone
 *
 * @example
 * // Clone the date:
 * const result = toDate(new Date(2014, 1, 11, 11, 30, 30))
 * //=> Tue Feb 11 2014 11:30:30
 *
 * @example
 * // Convert the timestamp to date:
 * const result = toDate(1392098430000)
 * //=> Tue Feb 11 2014 11:30:30
 */function e3(e,t){// [TODO] Get rid of `toDate` or `constructFrom`?
return e9(t||e,e)}// Fallback for modularized imports:
/* export default */const e7=/* unused pure expression or super */null&&e3;// CONCATENATED MODULE: ../tutor/node_modules/react-day-picker/node_modules/date-fns/addDays.js
/**
 * The {@link addDays} function options.
 *//**
 * @name addDays
 * @category Day Helpers
 * @summary Add the specified number of days to the given date.
 *
 * @description
 * Add the specified number of days to the given date.
 *
 * @typeParam DateType - The `Date` type, the function operates on. Gets inferred from passed arguments. Allows to use extensions like [`UTCDate`](https://github.com/date-fns/utc).
 * @typeParam ResultDate - The result `Date` type, it is the type returned from the context function if it is passed, or inferred from the arguments.
 *
 * @param date - The date to be changed
 * @param amount - The amount of days to be added.
 * @param options - An object with options
 *
 * @returns The new date with the days added
 *
 * @example
 * // Add 10 days to 1 September 2014:
 * const result = addDays(new Date(2014, 8, 1), 10)
 * //=> Thu Sep 11 2014 00:00:00
 */function e4(e,t,r){const n=e3(e,r?.in);if(isNaN(t))return e9(r?.in||e,NaN);// If 0 days, no-op to avoid changing times in the hour before end of DST
if(!t)return n;n.setDate(n.getDate()+t);return n}// Fallback for modularized imports:
/* export default */const te=/* unused pure expression or super */null&&e4;// CONCATENATED MODULE: ../tutor/node_modules/react-day-picker/node_modules/date-fns/addMonths.js
/**
 * The {@link addMonths} function options.
 *//**
 * @name addMonths
 * @category Month Helpers
 * @summary Add the specified number of months to the given date.
 *
 * @description
 * Add the specified number of months to the given date.
 *
 * @typeParam DateType - The `Date` type, the function operates on. Gets inferred from passed arguments. Allows to use extensions like [`UTCDate`](https://github.com/date-fns/utc).
 * @typeParam ResultDate - The result `Date` type, it is the type returned from the context function if it is passed, or inferred from the arguments.
 *
 * @param date - The date to be changed
 * @param amount - The amount of months to be added.
 * @param options - The options object
 *
 * @returns The new date with the months added
 *
 * @example
 * // Add 5 months to 1 September 2014:
 * const result = addMonths(new Date(2014, 8, 1), 5)
 * //=> Sun Feb 01 2015 00:00:00
 *
 * // Add one month to 30 January 2023:
 * const result = addMonths(new Date(2023, 0, 30), 1)
 * //=> Tue Feb 28 2023 00:00:00
 */function tt(e,t,r){const n=e3(e,r?.in);if(isNaN(t))return e9(r?.in||e,NaN);if(!t){// If 0 months, no-op to avoid changing times in the hour before end of DST
return n}const o=n.getDate();// The JS Date object supports date math by accepting out-of-bounds values for
// month, day, etc. For example, new Date(2020, 0, 0) returns 31 Dec 2019 and
// new Date(2020, 13, 1) returns 1 Feb 2021.  This is *almost* the behavior we
// want except that dates will wrap around the end of a month, meaning that
// new Date(2020, 13, 31) will return 3 Mar 2021 not 28 Feb 2021 as desired. So
// we'll default to the end of the desired month by adding 1 to the desired
// month and using a date of 0 to back up one day to the end of the desired
// month.
const a=e9(r?.in||e,n.getTime());a.setMonth(n.getMonth()+t+1,0);const i=a.getDate();if(o>=i){// If we're already at the end of the month, then this is the correct date
// and we're done.
return a}else{// Otherwise, we now know that setting the original day-of-month value won't
// cause an overflow, so set the desired day-of-month. Note that we can't
// just set the date of `endOfDesiredMonth` because that object may have had
// its time changed in the unusual case where where a DST transition was on
// the last day of the month and its local time was in the hour skipped or
// repeated next to a DST transition.  So we use `date` instead which is
// guaranteed to still have the original time.
n.setFullYear(a.getFullYear(),a.getMonth(),o);return n}}// Fallback for modularized imports:
/* export default */const tr=/* unused pure expression or super */null&&tt;// CONCATENATED MODULE: ../tutor/node_modules/react-day-picker/node_modules/date-fns/addWeeks.js
/**
 * The {@link addWeeks} function options.
 *//**
 * @name addWeeks
 * @category Week Helpers
 * @summary Add the specified number of weeks to the given date.
 *
 * @description
 * Add the specified number of weeks to the given date.
 *
 * @typeParam DateType - The `Date` type, the function operates on. Gets inferred from passed arguments. Allows to use extensions like [`UTCDate`](https://github.com/date-fns/utc).
 * @typeParam ResultDate - The result `Date` type, it is the type returned from the context function if it is passed, or inferred from the arguments.
 *
 * @param date - The date to be changed
 * @param amount - The amount of weeks to be added.
 * @param options - An object with options
 *
 * @returns The new date with the weeks added
 *
 * @example
 * // Add 4 weeks to 1 September 2014:
 * const result = addWeeks(new Date(2014, 8, 1), 4)
 * //=> Mon Sep 29 2014 00:00:00
 */function tn(e,t,r){return e4(e,t*7,r)}// Fallback for modularized imports:
/* export default */const to=/* unused pure expression or super */null&&tn;// CONCATENATED MODULE: ../tutor/node_modules/react-day-picker/node_modules/date-fns/addYears.js
/**
 * The {@link addYears} function options.
 *//**
 * @name addYears
 * @category Year Helpers
 * @summary Add the specified number of years to the given date.
 *
 * @description
 * Add the specified number of years to the given date.
 *
 * @typeParam DateType - The `Date` type, the function operates on. Gets inferred from passed arguments. Allows to use extensions like [`UTCDate`](https://github.com/date-fns/utc).
 * @typeParam ResultDate - The result `Date` type.
 *
 * @param date - The date to be changed
 * @param amount - The amount of years to be added.
 * @param options - The options
 *
 * @returns The new date with the years added
 *
 * @example
 * // Add 5 years to 1 September 2014:
 * const result = addYears(new Date(2014, 8, 1), 5)
 * //=> Sun Sep 01 2019 00:00:00
 */function ta(e,t,r){return tt(e,t*12,r)}// Fallback for modularized imports:
/* export default */const ti=/* unused pure expression or super */null&&ta;// CONCATENATED MODULE: ../tutor/node_modules/react-day-picker/node_modules/date-fns/_lib/getTimezoneOffsetInMilliseconds.js
/**
 * Google Chrome as of 67.0.3396.87 introduced timezones with offset that includes seconds.
 * They usually appear for dates that denote time before the timezones were introduced
 * (e.g. for 'Europe/Prague' timezone the offset is GMT+00:57:44 before 1 October 1891
 * and GMT+01:00:00 after that date)
 *
 * Date#getTimezoneOffset returns the offset in minutes and would return 57 for the example above,
 * which would lead to incorrect calculations.
 *
 * This function returns the timezone offset in milliseconds that takes seconds in account.
 */function ts(e){const t=e3(e);const r=new Date(Date.UTC(t.getFullYear(),t.getMonth(),t.getDate(),t.getHours(),t.getMinutes(),t.getSeconds(),t.getMilliseconds()));r.setUTCFullYear(t.getFullYear());return+e-+r};// CONCATENATED MODULE: ../tutor/node_modules/react-day-picker/node_modules/date-fns/_lib/normalizeDates.js
function tl(e,...t){const r=e9.bind(null,e||t.find(e=>typeof e==="object"));return t.map(r)};// CONCATENATED MODULE: ../tutor/node_modules/react-day-picker/node_modules/date-fns/startOfDay.js
/**
 * The {@link startOfDay} function options.
 *//**
 * @name startOfDay
 * @category Day Helpers
 * @summary Return the start of a day for the given date.
 *
 * @description
 * Return the start of a day for the given date.
 * The result will be in the local timezone.
 *
 * @typeParam DateType - The `Date` type, the function operates on. Gets inferred from passed arguments. Allows to use extensions like [`UTCDate`](https://github.com/date-fns/utc).
 * @typeParam ResultDate - The result `Date` type, it is the type returned from the context function if it is passed, or inferred from the arguments.
 *
 * @param date - The original date
 * @param options - The options
 *
 * @returns The start of a day
 *
 * @example
 * // The start of a day for 2 September 2014 11:55:00:
 * const result = startOfDay(new Date(2014, 8, 2, 11, 55, 0))
 * //=> Tue Sep 02 2014 00:00:00
 */function tc(e,t){const r=e3(e,t?.in);r.setHours(0,0,0,0);return r}// Fallback for modularized imports:
/* export default */const td=/* unused pure expression or super */null&&tc;// CONCATENATED MODULE: ../tutor/node_modules/react-day-picker/node_modules/date-fns/differenceInCalendarDays.js
/**
 * The {@link differenceInCalendarDays} function options.
 *//**
 * @name differenceInCalendarDays
 * @category Day Helpers
 * @summary Get the number of calendar days between the given dates.
 *
 * @description
 * Get the number of calendar days between the given dates. This means that the times are removed
 * from the dates and then the difference in days is calculated.
 *
 * @param laterDate - The later date
 * @param earlierDate - The earlier date
 * @param options - The options object
 *
 * @returns The number of calendar days
 *
 * @example
 * // How many calendar days are between
 * // 2 July 2011 23:00:00 and 2 July 2012 00:00:00?
 * const result = differenceInCalendarDays(
 *   new Date(2012, 6, 2, 0, 0),
 *   new Date(2011, 6, 2, 23, 0)
 * )
 * //=> 366
 * // How many calendar days are between
 * // 2 July 2011 23:59:00 and 3 July 2011 00:01:00?
 * const result = differenceInCalendarDays(
 *   new Date(2011, 6, 3, 0, 1),
 *   new Date(2011, 6, 2, 23, 59)
 * )
 * //=> 1
 */function tu(e,t,r){const[n,o]=tl(r?.in,e,t);const a=tc(n);const i=tc(o);const s=+a-ts(a);const l=+i-ts(i);// Round the number of days to the nearest integer because the number of
// milliseconds in a day is not constant (e.g. it's different in the week of
// the daylight saving time clock shift).
return Math.round((s-l)/eP)}// Fallback for modularized imports:
/* export default */const tf=/* unused pure expression or super */null&&tu;// CONCATENATED MODULE: ../tutor/node_modules/react-day-picker/node_modules/date-fns/differenceInCalendarMonths.js
/**
 * The {@link differenceInCalendarMonths} function options.
 *//**
 * @name differenceInCalendarMonths
 * @category Month Helpers
 * @summary Get the number of calendar months between the given dates.
 *
 * @description
 * Get the number of calendar months between the given dates.
 *
 * @param laterDate - The later date
 * @param earlierDate - The earlier date
 * @param options - An object with options
 *
 * @returns The number of calendar months
 *
 * @example
 * // How many calendar months are between 31 January 2014 and 1 September 2014?
 * const result = differenceInCalendarMonths(
 *   new Date(2014, 8, 1),
 *   new Date(2014, 0, 31)
 * )
 * //=> 8
 */function tp(e,t,r){const[n,o]=tl(r?.in,e,t);const a=n.getFullYear()-o.getFullYear();const i=n.getMonth()-o.getMonth();return a*12+i}// Fallback for modularized imports:
/* export default */const th=/* unused pure expression or super */null&&tp;// CONCATENATED MODULE: ../tutor/node_modules/react-day-picker/node_modules/date-fns/_lib/normalizeInterval.js
function tg(e,t){const[r,n]=tl(e,t.start,t.end);return{start:r,end:n}};// CONCATENATED MODULE: ../tutor/node_modules/react-day-picker/node_modules/date-fns/eachMonthOfInterval.js
/**
 * The {@link eachMonthOfInterval} function options.
 *//**
 * The {@link eachMonthOfInterval} function result type. It resolves the proper data type.
 *//**
 * @name eachMonthOfInterval
 * @category Interval Helpers
 * @summary Return the array of months within the specified time interval.
 *
 * @description
 * Return the array of months within the specified time interval.
 *
 * @typeParam IntervalType - Interval type.
 * @typeParam Options - Options type.
 *
 * @param interval - The interval.
 * @param options - An object with options.
 *
 * @returns The array with starts of months from the month of the interval start to the month of the interval end
 *
 * @example
 * // Each month between 6 February 2014 and 10 August 2014:
 * const result = eachMonthOfInterval({
 *   start: new Date(2014, 1, 6),
 *   end: new Date(2014, 7, 10)
 * })
 * //=> [
 * //   Sat Feb 01 2014 00:00:00,
 * //   Sat Mar 01 2014 00:00:00,
 * //   Tue Apr 01 2014 00:00:00,
 * //   Thu May 01 2014 00:00:00,
 * //   Sun Jun 01 2014 00:00:00,
 * //   Tue Jul 01 2014 00:00:00,
 * //   Fri Aug 01 2014 00:00:00
 * // ]
 */function tm(e,t){const{start:r,end:n}=tg(t?.in,e);let o=+r>+n;const a=o?+r:+n;const i=o?n:r;i.setHours(0,0,0,0);i.setDate(1);let s=t?.step??1;if(!s)return[];if(s<0){s=-s;o=!o}const l=[];while(+i<=a){l.push(e9(r,i));i.setMonth(i.getMonth()+s)}return o?l.reverse():l}// Fallback for modularized imports:
/* export default */const tv=/* unused pure expression or super */null&&tm;// CONCATENATED MODULE: ../tutor/node_modules/react-day-picker/node_modules/date-fns/eachYearOfInterval.js
/**
 * The {@link eachYearOfInterval} function options.
 *//**
 * The {@link eachYearOfInterval} function result type. It resolves the proper data type.
 * It uses the first argument date object type, starting from the date argument,
 * then the start interval date, and finally the end interval date. If
 * a context function is passed, it uses the context function return type.
 *//**
 * @name eachYearOfInterval
 * @category Interval Helpers
 * @summary Return the array of yearly timestamps within the specified time interval.
 *
 * @description
 * Return the array of yearly timestamps within the specified time interval.
 *
 * @typeParam IntervalType - Interval type.
 * @typeParam Options - Options type.
 *
 * @param interval - The interval.
 * @param options - An object with options.
 *
 * @returns The array with starts of yearly timestamps from the month of the interval start to the month of the interval end
 *
 * @example
 * // Each year between 6 February 2014 and 10 August 2017:
 * const result = eachYearOfInterval({
 *   start: new Date(2014, 1, 6),
 *   end: new Date(2017, 7, 10)
 * })
 * //=> [
 * //   Wed Jan 01 2014 00:00:00,
 * //   Thu Jan 01 2015 00:00:00,
 * //   Fri Jan 01 2016 00:00:00,
 * //   Sun Jan 01 2017 00:00:00
 * // ]
 */function tb(e,t){const{start:r,end:n}=tg(t?.in,e);let o=+r>+n;const a=o?+r:+n;const i=o?n:r;i.setHours(0,0,0,0);i.setMonth(0,1);let s=t?.step??1;if(!s)return[];if(s<0){s=-s;o=!o}const l=[];while(+i<=a){l.push(e9(r,i));i.setFullYear(i.getFullYear()+s)}return o?l.reverse():l}// Fallback for modularized imports:
/* export default */const ty=/* unused pure expression or super */null&&tb;// CONCATENATED MODULE: ../tutor/node_modules/react-day-picker/node_modules/date-fns/_lib/defaultOptions.js
let t_={};function tw(){return t_}function tx(e){t_=e};// CONCATENATED MODULE: ../tutor/node_modules/react-day-picker/node_modules/date-fns/endOfWeek.js
/**
 * The {@link endOfWeek} function options.
 *//**
 * @name endOfWeek
 * @category Week Helpers
 * @summary Return the end of a week for the given date.
 *
 * @description
 * Return the end of a week for the given date.
 * The result will be in the local timezone.
 *
 * @typeParam DateType - The `Date` type, the function operates on. Gets inferred from passed arguments. Allows to use extensions like [`UTCDate`](https://github.com/date-fns/utc).
 * @typeParam ResultDate - The result `Date` type, it is the type returned from the context function if it is passed, or inferred from the arguments.
 *
 * @param date - The original date
 * @param options - An object with options
 *
 * @returns The end of a week
 *
 * @example
 * // The end of a week for 2 September 2014 11:55:00:
 * const result = endOfWeek(new Date(2014, 8, 2, 11, 55, 0))
 * //=> Sat Sep 06 2014 23:59:59.999
 *
 * @example
 * // If the week starts on Monday, the end of the week for 2 September 2014 11:55:00:
 * const result = endOfWeek(new Date(2014, 8, 2, 11, 55, 0), { weekStartsOn: 1 })
 * //=> Sun Sep 07 2014 23:59:59.999
 */function tC(e,t){const r=tw();const n=t?.weekStartsOn??t?.locale?.options?.weekStartsOn??r.weekStartsOn??r.locale?.options?.weekStartsOn??0;const o=e3(e,t?.in);const a=o.getDay();const i=(a<n?-7:0)+6-(a-n);o.setDate(o.getDate()+i);o.setHours(23,59,59,999);return o}// Fallback for modularized imports:
/* export default */const tk=/* unused pure expression or super */null&&tC;// CONCATENATED MODULE: ../tutor/node_modules/react-day-picker/node_modules/date-fns/endOfISOWeek.js
/**
 * The {@link endOfISOWeek} function options.
 *//**
 * @name endOfISOWeek
 * @category ISO Week Helpers
 * @summary Return the end of an ISO week for the given date.
 *
 * @description
 * Return the end of an ISO week for the given date.
 * The result will be in the local timezone.
 *
 * ISO week-numbering year: http://en.wikipedia.org/wiki/ISO_week_date
 *
 * @typeParam DateType - The `Date` type, the function operates on. Gets inferred from passed arguments. Allows to use extensions like [`UTCDate`](https://github.com/date-fns/utc).
 * @typeParam ResultDate - The result `Date` type, it is the type returned from the context function if it is passed, or inferred from the arguments.
 *
 * @param date - The original date
 * @param options - An object with options
 *
 * @returns The end of an ISO week
 *
 * @example
 * // The end of an ISO week for 2 September 2014 11:55:00:
 * const result = endOfISOWeek(new Date(2014, 8, 2, 11, 55, 0))
 * //=> Sun Sep 07 2014 23:59:59.999
 */function tA(e,t){return tC(e,{...t,weekStartsOn:1})}// Fallback for modularized imports:
/* export default */const tY=/* unused pure expression or super */null&&tA;// CONCATENATED MODULE: ../tutor/node_modules/react-day-picker/node_modules/date-fns/endOfMonth.js
/**
 * The {@link endOfMonth} function options.
 *//**
 * @name endOfMonth
 * @category Month Helpers
 * @summary Return the end of a month for the given date.
 *
 * @description
 * Return the end of a month for the given date.
 * The result will be in the local timezone.
 *
 * @typeParam DateType - The `Date` type, the function operates on. Gets inferred from passed arguments. Allows to use extensions like [`UTCDate`](https://github.com/date-fns/utc).
 * @typeParam ResultDate - The result `Date` type, it is the type returned from the context function if it is passed, or inferred from the arguments.
 *
 * @param date - The original date
 * @param options - An object with options
 *
 * @returns The end of a month
 *
 * @example
 * // The end of a month for 2 September 2014 11:55:00:
 * const result = endOfMonth(new Date(2014, 8, 2, 11, 55, 0))
 * //=> Tue Sep 30 2014 23:59:59.999
 */function tM(e,t){const r=e3(e,t?.in);const n=r.getMonth();r.setFullYear(r.getFullYear(),n+1,0);r.setHours(23,59,59,999);return r}// Fallback for modularized imports:
/* export default */const tD=/* unused pure expression or super */null&&tM;// CONCATENATED MODULE: ../tutor/node_modules/react-day-picker/node_modules/date-fns/endOfYear.js
/**
 * The {@link endOfYear} function options.
 *//**
 * @name endOfYear
 * @category Year Helpers
 * @summary Return the end of a year for the given date.
 *
 * @description
 * Return the end of a year for the given date.
 * The result will be in the local timezone.
 *
 * @typeParam DateType - The `Date` type, the function operates on. Gets inferred from passed arguments. Allows to use extensions like [`UTCDate`](https://github.com/date-fns/utc).
 * @typeParam ResultDate - The result `Date` type, it is the type returned from the context function if it is passed, or inferred from the arguments.
 *
 * @param date - The original date
 * @param options - The options
 *
 * @returns The end of a year
 *
 * @example
 * // The end of a year for 2 September 2014 11:55:00:
 * const result = endOfYear(new Date(2014, 8, 2, 11, 55, 0))
 * //=> Wed Dec 31 2014 23:59:59.999
 */function tI(e,t){const r=e3(e,t?.in);const n=r.getFullYear();r.setFullYear(n+1,0,0);r.setHours(23,59,59,999);return r}// Fallback for modularized imports:
/* export default */const tS=/* unused pure expression or super */null&&tI;// CONCATENATED MODULE: ../tutor/node_modules/react-day-picker/node_modules/date-fns/startOfYear.js
/**
 * The {@link startOfYear} function options.
 *//**
 * @name startOfYear
 * @category Year Helpers
 * @summary Return the start of a year for the given date.
 *
 * @description
 * Return the start of a year for the given date.
 * The result will be in the local timezone.
 *
 * @typeParam DateType - The `Date` type, the function operates on. Gets inferred from passed arguments. Allows to use extensions like [`UTCDate`](https://github.com/date-fns/utc).
 * @typeParam ResultDate - The result `Date` type, it is the type returned from the context function if it is passed, or inferred from the arguments.
 *
 * @param date - The original date
 * @param options - The options
 *
 * @returns The start of a year
 *
 * @example
 * // The start of a year for 2 September 2014 11:55:00:
 * const result = startOfYear(new Date(2014, 8, 2, 11, 55, 00))
 * //=> Wed Jan 01 2014 00:00:00
 */function tT(e,t){const r=e3(e,t?.in);r.setFullYear(r.getFullYear(),0,1);r.setHours(0,0,0,0);return r}// Fallback for modularized imports:
/* export default */const tF=/* unused pure expression or super */null&&tT;// CONCATENATED MODULE: ../tutor/node_modules/react-day-picker/node_modules/date-fns/getDayOfYear.js
/**
 * The {@link getDayOfYear} function options.
 *//**
 * @name getDayOfYear
 * @category Day Helpers
 * @summary Get the day of the year of the given date.
 *
 * @description
 * Get the day of the year of the given date.
 *
 * @param date - The given date
 * @param options - The options
 *
 * @returns The day of year
 *
 * @example
 * // Which day of the year is 2 July 2014?
 * const result = getDayOfYear(new Date(2014, 6, 2))
 * //=> 183
 */function tE(e,t){const r=e3(e,t?.in);const n=tu(r,tT(r));const o=n+1;return o}// Fallback for modularized imports:
/* export default */const tH=/* unused pure expression or super */null&&tE;// CONCATENATED MODULE: ../tutor/node_modules/react-day-picker/node_modules/date-fns/startOfWeek.js
/**
 * The {@link startOfWeek} function options.
 *//**
 * @name startOfWeek
 * @category Week Helpers
 * @summary Return the start of a week for the given date.
 *
 * @description
 * Return the start of a week for the given date.
 * The result will be in the local timezone.
 *
 * @typeParam DateType - The `Date` type, the function operates on. Gets inferred from passed arguments. Allows to use extensions like [`UTCDate`](https://github.com/date-fns/utc).
 * @typeParam ResultDate - The result `Date` type, it is the type returned from the context function if it is passed, or inferred from the arguments.
 *
 * @param date - The original date
 * @param options - An object with options
 *
 * @returns The start of a week
 *
 * @example
 * // The start of a week for 2 September 2014 11:55:00:
 * const result = startOfWeek(new Date(2014, 8, 2, 11, 55, 0))
 * //=> Sun Aug 31 2014 00:00:00
 *
 * @example
 * // If the week starts on Monday, the start of the week for 2 September 2014 11:55:00:
 * const result = startOfWeek(new Date(2014, 8, 2, 11, 55, 0), { weekStartsOn: 1 })
 * //=> Mon Sep 01 2014 00:00:00
 */function tN(e,t){const r=tw();const n=t?.weekStartsOn??t?.locale?.options?.weekStartsOn??r.weekStartsOn??r.locale?.options?.weekStartsOn??0;const o=e3(e,t?.in);const a=o.getDay();const i=(a<n?7:0)+a-n;o.setDate(o.getDate()-i);o.setHours(0,0,0,0);return o}// Fallback for modularized imports:
/* export default */const tO=/* unused pure expression or super */null&&tN;// CONCATENATED MODULE: ../tutor/node_modules/react-day-picker/node_modules/date-fns/startOfISOWeek.js
/**
 * The {@link startOfISOWeek} function options.
 *//**
 * @name startOfISOWeek
 * @category ISO Week Helpers
 * @summary Return the start of an ISO week for the given date.
 *
 * @description
 * Return the start of an ISO week for the given date.
 * The result will be in the local timezone.
 *
 * ISO week-numbering year: http://en.wikipedia.org/wiki/ISO_week_date
 *
 * @typeParam DateType - The `Date` type, the function operates on. Gets inferred from passed arguments. Allows to use extensions like [`UTCDate`](https://github.com/date-fns/utc).
 * @typeParam ResultDate - The result `Date` type, it is the type returned from the context function if it is passed, or inferred from the arguments.
 *
 * @param date - The original date
 * @param options - An object with options
 *
 * @returns The start of an ISO week
 *
 * @example
 * // The start of an ISO week for 2 September 2014 11:55:00:
 * const result = startOfISOWeek(new Date(2014, 8, 2, 11, 55, 0))
 * //=> Mon Sep 01 2014 00:00:00
 */function tL(e,t){return tN(e,{...t,weekStartsOn:1})}// Fallback for modularized imports:
/* export default */const tV=/* unused pure expression or super */null&&tL;// CONCATENATED MODULE: ../tutor/node_modules/react-day-picker/node_modules/date-fns/getISOWeekYear.js
/**
 * The {@link getISOWeekYear} function options.
 *//**
 * @name getISOWeekYear
 * @category ISO Week-Numbering Year Helpers
 * @summary Get the ISO week-numbering year of the given date.
 *
 * @description
 * Get the ISO week-numbering year of the given date,
 * which always starts 3 days before the year's first Thursday.
 *
 * ISO week-numbering year: http://en.wikipedia.org/wiki/ISO_week_date
 *
 * @param date - The given date
 *
 * @returns The ISO week-numbering year
 *
 * @example
 * // Which ISO-week numbering year is 2 January 2005?
 * const result = getISOWeekYear(new Date(2005, 0, 2))
 * //=> 2004
 */function tW(e,t){const r=e3(e,t?.in);const n=r.getFullYear();const o=e9(r,0);o.setFullYear(n+1,0,4);o.setHours(0,0,0,0);const a=tL(o);const i=e9(r,0);i.setFullYear(n,0,4);i.setHours(0,0,0,0);const s=tL(i);if(r.getTime()>=a.getTime()){return n+1}else if(r.getTime()>=s.getTime()){return n}else{return n-1}}// Fallback for modularized imports:
/* export default */const tP=/* unused pure expression or super */null&&tW;// CONCATENATED MODULE: ../tutor/node_modules/react-day-picker/node_modules/date-fns/startOfISOWeekYear.js
/**
 * The {@link startOfISOWeekYear} function options.
 *//**
 * @name startOfISOWeekYear
 * @category ISO Week-Numbering Year Helpers
 * @summary Return the start of an ISO week-numbering year for the given date.
 *
 * @description
 * Return the start of an ISO week-numbering year,
 * which always starts 3 days before the year's first Thursday.
 * The result will be in the local timezone.
 *
 * ISO week-numbering year: http://en.wikipedia.org/wiki/ISO_week_date
 *
 * @typeParam DateType - The `Date` type, the function operates on. Gets inferred from passed arguments. Allows to use extensions like [`UTCDate`](https://github.com/date-fns/utc).
 * @typeParam ResultDate - The result `Date` type, it is the type returned from the context function if it is passed, or inferred from the arguments.
 *
 * @param date - The original date
 * @param options - An object with options
 *
 * @returns The start of an ISO week-numbering year
 *
 * @example
 * // The start of an ISO week-numbering year for 2 July 2005:
 * const result = startOfISOWeekYear(new Date(2005, 6, 2))
 * //=> Mon Jan 03 2005 00:00:00
 */function tK(e,t){const r=tW(e,t);const n=e9(t?.in||e,0);n.setFullYear(r,0,4);n.setHours(0,0,0,0);return tL(n)}// Fallback for modularized imports:
/* export default */const tB=/* unused pure expression or super */null&&tK;// CONCATENATED MODULE: ../tutor/node_modules/react-day-picker/node_modules/date-fns/getISOWeek.js
/**
 * The {@link getISOWeek} function options.
 *//**
 * @name getISOWeek
 * @category ISO Week Helpers
 * @summary Get the ISO week of the given date.
 *
 * @description
 * Get the ISO week of the given date.
 *
 * ISO week-numbering year: http://en.wikipedia.org/wiki/ISO_week_date
 *
 * @param date - The given date
 * @param options - The options
 *
 * @returns The ISO week
 *
 * @example
 * // Which week of the ISO-week numbering year is 2 January 2005?
 * const result = getISOWeek(new Date(2005, 0, 2))
 * //=> 53
 */function tj(e,t){const r=e3(e,t?.in);const n=+tL(r)-+tK(r);// Round the number of weeks to the nearest integer because the number of
// milliseconds in a week is not constant (e.g. it's different in the week of
// the daylight saving time clock shift).
return Math.round(n/eW)+1}// Fallback for modularized imports:
/* export default */const tz=/* unused pure expression or super */null&&tj;// CONCATENATED MODULE: ../tutor/node_modules/react-day-picker/node_modules/date-fns/getWeekYear.js
/**
 * The {@link getWeekYear} function options.
 *//**
 * @name getWeekYear
 * @category Week-Numbering Year Helpers
 * @summary Get the local week-numbering year of the given date.
 *
 * @description
 * Get the local week-numbering year of the given date.
 * The exact calculation depends on the values of
 * `options.weekStartsOn` (which is the index of the first day of the week)
 * and `options.firstWeekContainsDate` (which is the day of January, which is always in
 * the first week of the week-numbering year)
 *
 * Week numbering: https://en.wikipedia.org/wiki/Week#The_ISO_week_date_system
 *
 * @param date - The given date
 * @param options - An object with options.
 *
 * @returns The local week-numbering year
 *
 * @example
 * // Which week numbering year is 26 December 2004 with the default settings?
 * const result = getWeekYear(new Date(2004, 11, 26))
 * //=> 2005
 *
 * @example
 * // Which week numbering year is 26 December 2004 if week starts on Saturday?
 * const result = getWeekYear(new Date(2004, 11, 26), { weekStartsOn: 6 })
 * //=> 2004
 *
 * @example
 * // Which week numbering year is 26 December 2004 if the first week contains 4 January?
 * const result = getWeekYear(new Date(2004, 11, 26), { firstWeekContainsDate: 4 })
 * //=> 2004
 */function tR(e,t){const r=e3(e,t?.in);const n=r.getFullYear();const o=tw();const a=t?.firstWeekContainsDate??t?.locale?.options?.firstWeekContainsDate??o.firstWeekContainsDate??o.locale?.options?.firstWeekContainsDate??1;const i=e9(t?.in||e,0);i.setFullYear(n+1,0,a);i.setHours(0,0,0,0);const s=tN(i,t);const l=e9(t?.in||e,0);l.setFullYear(n,0,a);l.setHours(0,0,0,0);const c=tN(l,t);if(+r>=+s){return n+1}else if(+r>=+c){return n}else{return n-1}}// Fallback for modularized imports:
/* export default */const tq=/* unused pure expression or super */null&&tR;// CONCATENATED MODULE: ../tutor/node_modules/react-day-picker/node_modules/date-fns/startOfWeekYear.js
/**
 * The {@link startOfWeekYear} function options.
 *//**
 * @name startOfWeekYear
 * @category Week-Numbering Year Helpers
 * @summary Return the start of a local week-numbering year for the given date.
 *
 * @description
 * Return the start of a local week-numbering year.
 * The exact calculation depends on the values of
 * `options.weekStartsOn` (which is the index of the first day of the week)
 * and `options.firstWeekContainsDate` (which is the day of January, which is always in
 * the first week of the week-numbering year)
 *
 * Week numbering: https://en.wikipedia.org/wiki/Week#The_ISO_week_date_system
 *
 * @typeParam DateType - The `Date` type, the function operates on. Gets inferred from passed arguments. Allows to use extensions like [`UTCDate`](https://github.com/date-fns/utc).
 * @typeParam ResultDate - The result `Date` type.
 *
 * @param date - The original date
 * @param options - An object with options
 *
 * @returns The start of a week-numbering year
 *
 * @example
 * // The start of an a week-numbering year for 2 July 2005 with default settings:
 * const result = startOfWeekYear(new Date(2005, 6, 2))
 * //=> Sun Dec 26 2004 00:00:00
 *
 * @example
 * // The start of a week-numbering year for 2 July 2005
 * // if Monday is the first day of week
 * // and 4 January is always in the first week of the year:
 * const result = startOfWeekYear(new Date(2005, 6, 2), {
 *   weekStartsOn: 1,
 *   firstWeekContainsDate: 4
 * })
 * //=> Mon Jan 03 2005 00:00:00
 */function tU(e,t){const r=tw();const n=t?.firstWeekContainsDate??t?.locale?.options?.firstWeekContainsDate??r.firstWeekContainsDate??r.locale?.options?.firstWeekContainsDate??1;const o=tR(e,t);const a=e9(t?.in||e,0);a.setFullYear(o,0,n);a.setHours(0,0,0,0);const i=tN(a,t);return i}// Fallback for modularized imports:
/* export default */const tZ=/* unused pure expression or super */null&&tU;// CONCATENATED MODULE: ../tutor/node_modules/react-day-picker/node_modules/date-fns/getWeek.js
/**
 * The {@link getWeek} function options.
 *//**
 * @name getWeek
 * @category Week Helpers
 * @summary Get the local week index of the given date.
 *
 * @description
 * Get the local week index of the given date.
 * The exact calculation depends on the values of
 * `options.weekStartsOn` (which is the index of the first day of the week)
 * and `options.firstWeekContainsDate` (which is the day of January, which is always in
 * the first week of the week-numbering year)
 *
 * Week numbering: https://en.wikipedia.org/wiki/Week#The_ISO_week_date_system
 *
 * @param date - The given date
 * @param options - An object with options
 *
 * @returns The week
 *
 * @example
 * // Which week of the local week numbering year is 2 January 2005 with default options?
 * const result = getWeek(new Date(2005, 0, 2))
 * //=> 2
 *
 * @example
 * // Which week of the local week numbering year is 2 January 2005,
 * // if Monday is the first day of the week,
 * // and the first week of the year always contains 4 January?
 * const result = getWeek(new Date(2005, 0, 2), {
 *   weekStartsOn: 1,
 *   firstWeekContainsDate: 4
 * })
 * //=> 53
 */function tQ(e,t){const r=e3(e,t?.in);const n=+tN(r,t)-+tU(r,t);// Round the number of weeks to the nearest integer because the number of
// milliseconds in a week is not constant (e.g. it's different in the week of
// the daylight saving time clock shift).
return Math.round(n/eW)+1}// Fallback for modularized imports:
/* export default */const tG=/* unused pure expression or super */null&&tQ;// CONCATENATED MODULE: ../tutor/node_modules/react-day-picker/node_modules/date-fns/_lib/addLeadingZeros.js
function t$(e,t){const r=e<0?"-":"";const n=Math.abs(e).toString().padStart(t,"0");return r+n};// CONCATENATED MODULE: ../tutor/node_modules/react-day-picker/node_modules/date-fns/_lib/format/lightFormatters.js
/*
 * |     | Unit                           |     | Unit                           |
 * |-----|--------------------------------|-----|--------------------------------|
 * |  a  | AM, PM                         |  A* |                                |
 * |  d  | Day of month                   |  D  |                                |
 * |  h  | Hour [1-12]                    |  H  | Hour [0-23]                    |
 * |  m  | Minute                         |  M  | Month                          |
 * |  s  | Second                         |  S  | Fraction of second             |
 * |  y  | Year (abs)                     |  Y  |                                |
 *
 * Letters marked by * are not implemented but reserved by Unicode standard.
 */const tX={// Year
y(e,t){// From http://www.unicode.org/reports/tr35/tr35-31/tr35-dates.html#Date_Format_tokens
// | Year     |     y | yy |   yyy |  yyyy | yyyyy |
// |----------|-------|----|-------|-------|-------|
// | AD 1     |     1 | 01 |   001 |  0001 | 00001 |
// | AD 12    |    12 | 12 |   012 |  0012 | 00012 |
// | AD 123   |   123 | 23 |   123 |  0123 | 00123 |
// | AD 1234  |  1234 | 34 |  1234 |  1234 | 01234 |
// | AD 12345 | 12345 | 45 | 12345 | 12345 | 12345 |
const r=e.getFullYear();// Returns 1 for 1 BC (which is year 0 in JavaScript)
const n=r>0?r:1-r;return t$(t==="yy"?n%100:n,t.length)},// Month
M(e,t){const r=e.getMonth();return t==="M"?String(r+1):t$(r+1,2)},// Day of the month
d(e,t){return t$(e.getDate(),t.length)},// AM or PM
a(e,t){const r=e.getHours()/12>=1?"pm":"am";switch(t){case"a":case"aa":return r.toUpperCase();case"aaa":return r;case"aaaaa":return r[0];case"aaaa":default:return r==="am"?"a.m.":"p.m."}},// Hour [1-12]
h(e,t){return t$(e.getHours()%12||12,t.length)},// Hour [0-23]
H(e,t){return t$(e.getHours(),t.length)},// Minute
m(e,t){return t$(e.getMinutes(),t.length)},// Second
s(e,t){return t$(e.getSeconds(),t.length)},// Fraction of second
S(e,t){const r=t.length;const n=e.getMilliseconds();const o=Math.trunc(n*Math.pow(10,r-3));return t$(o,t.length)}};// CONCATENATED MODULE: ../tutor/node_modules/react-day-picker/node_modules/date-fns/_lib/format/formatters.js
const tJ={am:"am",pm:"pm",midnight:"midnight",noon:"noon",morning:"morning",afternoon:"afternoon",evening:"evening",night:"night"};/*
 * |     | Unit                           |     | Unit                           |
 * |-----|--------------------------------|-----|--------------------------------|
 * |  a  | AM, PM                         |  A* | Milliseconds in day            |
 * |  b  | AM, PM, noon, midnight         |  B  | Flexible day period            |
 * |  c  | Stand-alone local day of week  |  C* | Localized hour w/ day period   |
 * |  d  | Day of month                   |  D  | Day of year                    |
 * |  e  | Local day of week              |  E  | Day of week                    |
 * |  f  |                                |  F* | Day of week in month           |
 * |  g* | Modified Julian day            |  G  | Era                            |
 * |  h  | Hour [1-12]                    |  H  | Hour [0-23]                    |
 * |  i! | ISO day of week                |  I! | ISO week of year               |
 * |  j* | Localized hour w/ day period   |  J* | Localized hour w/o day period  |
 * |  k  | Hour [1-24]                    |  K  | Hour [0-11]                    |
 * |  l* | (deprecated)                   |  L  | Stand-alone month              |
 * |  m  | Minute                         |  M  | Month                          |
 * |  n  |                                |  N  |                                |
 * |  o! | Ordinal number modifier        |  O  | Timezone (GMT)                 |
 * |  p! | Long localized time            |  P! | Long localized date            |
 * |  q  | Stand-alone quarter            |  Q  | Quarter                        |
 * |  r* | Related Gregorian year         |  R! | ISO week-numbering year        |
 * |  s  | Second                         |  S  | Fraction of second             |
 * |  t! | Seconds timestamp              |  T! | Milliseconds timestamp         |
 * |  u  | Extended year                  |  U* | Cyclic year                    |
 * |  v* | Timezone (generic non-locat.)  |  V* | Timezone (location)            |
 * |  w  | Local week of year             |  W* | Week of month                  |
 * |  x  | Timezone (ISO-8601 w/o Z)      |  X  | Timezone (ISO-8601)            |
 * |  y  | Year (abs)                     |  Y  | Local week-numbering year      |
 * |  z  | Timezone (specific non-locat.) |  Z* | Timezone (aliases)             |
 *
 * Letters marked by * are not implemented but reserved by Unicode standard.
 *
 * Letters marked by ! are non-standard, but implemented by date-fns:
 * - `o` modifies the previous token to turn it into an ordinal (see `format` docs)
 * - `i` is ISO day of week. For `i` and `ii` is returns numeric ISO week days,
 *   i.e. 7 for Sunday, 1 for Monday, etc.
 * - `I` is ISO week of year, as opposed to `w` which is local week of year.
 * - `R` is ISO week-numbering year, as opposed to `Y` which is local week-numbering year.
 *   `R` is supposed to be used in conjunction with `I` and `i`
 *   for universal ISO week-numbering date, whereas
 *   `Y` is supposed to be used in conjunction with `w` and `e`
 *   for week-numbering date specific to the locale.
 * - `P` is long localized date format
 * - `p` is long localized time format
 */const t0={// Era
G:function(e,t,r){const n=e.getFullYear()>0?1:0;switch(t){// AD, BC
case"G":case"GG":case"GGG":return r.era(n,{width:"abbreviated"});// A, B
case"GGGGG":return r.era(n,{width:"narrow"});// Anno Domini, Before Christ
case"GGGG":default:return r.era(n,{width:"wide"})}},// Year
y:function(e,t,r){// Ordinal number
if(t==="yo"){const t=e.getFullYear();// Returns 1 for 1 BC (which is year 0 in JavaScript)
const n=t>0?t:1-t;return r.ordinalNumber(n,{unit:"year"})}return tX.y(e,t)},// Local week-numbering year
Y:function(e,t,r,n){const o=tR(e,n);// Returns 1 for 1 BC (which is year 0 in JavaScript)
const a=o>0?o:1-o;// Two digit year
if(t==="YY"){const e=a%100;return t$(e,2)}// Ordinal number
if(t==="Yo"){return r.ordinalNumber(a,{unit:"year"})}// Padding
return t$(a,t.length)},// ISO week-numbering year
R:function(e,t){const r=tW(e);// Padding
return t$(r,t.length)},// Extended year. This is a single number designating the year of this calendar system.
// The main difference between `y` and `u` localizers are B.C. years:
// | Year | `y` | `u` |
// |------|-----|-----|
// | AC 1 |   1 |   1 |
// | BC 1 |   1 |   0 |
// | BC 2 |   2 |  -1 |
// Also `yy` always returns the last two digits of a year,
// while `uu` pads single digit years to 2 characters and returns other years unchanged.
u:function(e,t){const r=e.getFullYear();return t$(r,t.length)},// Quarter
Q:function(e,t,r){const n=Math.ceil((e.getMonth()+1)/3);switch(t){// 1, 2, 3, 4
case"Q":return String(n);// 01, 02, 03, 04
case"QQ":return t$(n,2);// 1st, 2nd, 3rd, 4th
case"Qo":return r.ordinalNumber(n,{unit:"quarter"});// Q1, Q2, Q3, Q4
case"QQQ":return r.quarter(n,{width:"abbreviated",context:"formatting"});// 1, 2, 3, 4 (narrow quarter; could be not numerical)
case"QQQQQ":return r.quarter(n,{width:"narrow",context:"formatting"});// 1st quarter, 2nd quarter, ...
case"QQQQ":default:return r.quarter(n,{width:"wide",context:"formatting"})}},// Stand-alone quarter
q:function(e,t,r){const n=Math.ceil((e.getMonth()+1)/3);switch(t){// 1, 2, 3, 4
case"q":return String(n);// 01, 02, 03, 04
case"qq":return t$(n,2);// 1st, 2nd, 3rd, 4th
case"qo":return r.ordinalNumber(n,{unit:"quarter"});// Q1, Q2, Q3, Q4
case"qqq":return r.quarter(n,{width:"abbreviated",context:"standalone"});// 1, 2, 3, 4 (narrow quarter; could be not numerical)
case"qqqqq":return r.quarter(n,{width:"narrow",context:"standalone"});// 1st quarter, 2nd quarter, ...
case"qqqq":default:return r.quarter(n,{width:"wide",context:"standalone"})}},// Month
M:function(e,t,r){const n=e.getMonth();switch(t){case"M":case"MM":return tX.M(e,t);// 1st, 2nd, ..., 12th
case"Mo":return r.ordinalNumber(n+1,{unit:"month"});// Jan, Feb, ..., Dec
case"MMM":return r.month(n,{width:"abbreviated",context:"formatting"});// J, F, ..., D
case"MMMMM":return r.month(n,{width:"narrow",context:"formatting"});// January, February, ..., December
case"MMMM":default:return r.month(n,{width:"wide",context:"formatting"})}},// Stand-alone month
L:function(e,t,r){const n=e.getMonth();switch(t){// 1, 2, ..., 12
case"L":return String(n+1);// 01, 02, ..., 12
case"LL":return t$(n+1,2);// 1st, 2nd, ..., 12th
case"Lo":return r.ordinalNumber(n+1,{unit:"month"});// Jan, Feb, ..., Dec
case"LLL":return r.month(n,{width:"abbreviated",context:"standalone"});// J, F, ..., D
case"LLLLL":return r.month(n,{width:"narrow",context:"standalone"});// January, February, ..., December
case"LLLL":default:return r.month(n,{width:"wide",context:"standalone"})}},// Local week of year
w:function(e,t,r,n){const o=tQ(e,n);if(t==="wo"){return r.ordinalNumber(o,{unit:"week"})}return t$(o,t.length)},// ISO week of year
I:function(e,t,r){const n=tj(e);if(t==="Io"){return r.ordinalNumber(n,{unit:"week"})}return t$(n,t.length)},// Day of the month
d:function(e,t,r){if(t==="do"){return r.ordinalNumber(e.getDate(),{unit:"date"})}return tX.d(e,t)},// Day of year
D:function(e,t,r){const n=tE(e);if(t==="Do"){return r.ordinalNumber(n,{unit:"dayOfYear"})}return t$(n,t.length)},// Day of week
E:function(e,t,r){const n=e.getDay();switch(t){// Tue
case"E":case"EE":case"EEE":return r.day(n,{width:"abbreviated",context:"formatting"});// T
case"EEEEE":return r.day(n,{width:"narrow",context:"formatting"});// Tu
case"EEEEEE":return r.day(n,{width:"short",context:"formatting"});// Tuesday
case"EEEE":default:return r.day(n,{width:"wide",context:"formatting"})}},// Local day of week
e:function(e,t,r,n){const o=e.getDay();const a=(o-n.weekStartsOn+8)%7||7;switch(t){// Numerical value (Nth day of week with current locale or weekStartsOn)
case"e":return String(a);// Padded numerical value
case"ee":return t$(a,2);// 1st, 2nd, ..., 7th
case"eo":return r.ordinalNumber(a,{unit:"day"});case"eee":return r.day(o,{width:"abbreviated",context:"formatting"});// T
case"eeeee":return r.day(o,{width:"narrow",context:"formatting"});// Tu
case"eeeeee":return r.day(o,{width:"short",context:"formatting"});// Tuesday
case"eeee":default:return r.day(o,{width:"wide",context:"formatting"})}},// Stand-alone local day of week
c:function(e,t,r,n){const o=e.getDay();const a=(o-n.weekStartsOn+8)%7||7;switch(t){// Numerical value (same as in `e`)
case"c":return String(a);// Padded numerical value
case"cc":return t$(a,t.length);// 1st, 2nd, ..., 7th
case"co":return r.ordinalNumber(a,{unit:"day"});case"ccc":return r.day(o,{width:"abbreviated",context:"standalone"});// T
case"ccccc":return r.day(o,{width:"narrow",context:"standalone"});// Tu
case"cccccc":return r.day(o,{width:"short",context:"standalone"});// Tuesday
case"cccc":default:return r.day(o,{width:"wide",context:"standalone"})}},// ISO day of week
i:function(e,t,r){const n=e.getDay();const o=n===0?7:n;switch(t){// 2
case"i":return String(o);// 02
case"ii":return t$(o,t.length);// 2nd
case"io":return r.ordinalNumber(o,{unit:"day"});// Tue
case"iii":return r.day(n,{width:"abbreviated",context:"formatting"});// T
case"iiiii":return r.day(n,{width:"narrow",context:"formatting"});// Tu
case"iiiiii":return r.day(n,{width:"short",context:"formatting"});// Tuesday
case"iiii":default:return r.day(n,{width:"wide",context:"formatting"})}},// AM or PM
a:function(e,t,r){const n=e.getHours();const o=n/12>=1?"pm":"am";switch(t){case"a":case"aa":return r.dayPeriod(o,{width:"abbreviated",context:"formatting"});case"aaa":return r.dayPeriod(o,{width:"abbreviated",context:"formatting"}).toLowerCase();case"aaaaa":return r.dayPeriod(o,{width:"narrow",context:"formatting"});case"aaaa":default:return r.dayPeriod(o,{width:"wide",context:"formatting"})}},// AM, PM, midnight, noon
b:function(e,t,r){const n=e.getHours();let o;if(n===12){o=tJ.noon}else if(n===0){o=tJ.midnight}else{o=n/12>=1?"pm":"am"}switch(t){case"b":case"bb":return r.dayPeriod(o,{width:"abbreviated",context:"formatting"});case"bbb":return r.dayPeriod(o,{width:"abbreviated",context:"formatting"}).toLowerCase();case"bbbbb":return r.dayPeriod(o,{width:"narrow",context:"formatting"});case"bbbb":default:return r.dayPeriod(o,{width:"wide",context:"formatting"})}},// in the morning, in the afternoon, in the evening, at night
B:function(e,t,r){const n=e.getHours();let o;if(n>=17){o=tJ.evening}else if(n>=12){o=tJ.afternoon}else if(n>=4){o=tJ.morning}else{o=tJ.night}switch(t){case"B":case"BB":case"BBB":return r.dayPeriod(o,{width:"abbreviated",context:"formatting"});case"BBBBB":return r.dayPeriod(o,{width:"narrow",context:"formatting"});case"BBBB":default:return r.dayPeriod(o,{width:"wide",context:"formatting"})}},// Hour [1-12]
h:function(e,t,r){if(t==="ho"){let t=e.getHours()%12;if(t===0)t=12;return r.ordinalNumber(t,{unit:"hour"})}return tX.h(e,t)},// Hour [0-23]
H:function(e,t,r){if(t==="Ho"){return r.ordinalNumber(e.getHours(),{unit:"hour"})}return tX.H(e,t)},// Hour [0-11]
K:function(e,t,r){const n=e.getHours()%12;if(t==="Ko"){return r.ordinalNumber(n,{unit:"hour"})}return t$(n,t.length)},// Hour [1-24]
k:function(e,t,r){let n=e.getHours();if(n===0)n=24;if(t==="ko"){return r.ordinalNumber(n,{unit:"hour"})}return t$(n,t.length)},// Minute
m:function(e,t,r){if(t==="mo"){return r.ordinalNumber(e.getMinutes(),{unit:"minute"})}return tX.m(e,t)},// Second
s:function(e,t,r){if(t==="so"){return r.ordinalNumber(e.getSeconds(),{unit:"second"})}return tX.s(e,t)},// Fraction of second
S:function(e,t){return tX.S(e,t)},// Timezone (ISO-8601. If offset is 0, output is always `'Z'`)
X:function(e,t,r){const n=e.getTimezoneOffset();if(n===0){return"Z"}switch(t){// Hours and optional minutes
case"X":return t2(n);// Hours, minutes and optional seconds without `:` delimiter
// Note: neither ISO-8601 nor JavaScript supports seconds in timezone offsets
// so this token always has the same output as `XX`
case"XXXX":case"XX":return t5(n);// Hours, minutes and optional seconds with `:` delimiter
// Note: neither ISO-8601 nor JavaScript supports seconds in timezone offsets
// so this token always has the same output as `XXX`
case"XXXXX":case"XXX":default:return t5(n,":")}},// Timezone (ISO-8601. If offset is 0, output is `'+00:00'` or equivalent)
x:function(e,t,r){const n=e.getTimezoneOffset();switch(t){// Hours and optional minutes
case"x":return t2(n);// Hours, minutes and optional seconds without `:` delimiter
// Note: neither ISO-8601 nor JavaScript supports seconds in timezone offsets
// so this token always has the same output as `xx`
case"xxxx":case"xx":return t5(n);// Hours, minutes and optional seconds with `:` delimiter
// Note: neither ISO-8601 nor JavaScript supports seconds in timezone offsets
// so this token always has the same output as `xxx`
case"xxxxx":case"xxx":default:return t5(n,":")}},// Timezone (GMT)
O:function(e,t,r){const n=e.getTimezoneOffset();switch(t){// Short
case"O":case"OO":case"OOO":return"GMT"+t1(n,":");// Long
case"OOOO":default:return"GMT"+t5(n,":")}},// Timezone (specific non-location)
z:function(e,t,r){const n=e.getTimezoneOffset();switch(t){// Short
case"z":case"zz":case"zzz":return"GMT"+t1(n,":");// Long
case"zzzz":default:return"GMT"+t5(n,":")}},// Seconds timestamp
t:function(e,t,r){const n=Math.trunc(+e/1e3);return t$(n,t.length)},// Milliseconds timestamp
T:function(e,t,r){return t$(+e,t.length)}};function t1(e,t=""){const r=e>0?"-":"+";const n=Math.abs(e);const o=Math.trunc(n/60);const a=n%60;if(a===0){return r+String(o)}return r+String(o)+t+t$(a,2)}function t2(e,t){if(e%60===0){const t=e>0?"-":"+";return t+t$(Math.abs(e)/60,2)}return t5(e,t)}function t5(e,t=""){const r=e>0?"-":"+";const n=Math.abs(e);const o=t$(Math.trunc(n/60),2);const a=t$(n%60,2);return r+o+t+a};// CONCATENATED MODULE: ../tutor/node_modules/react-day-picker/node_modules/date-fns/_lib/format/longFormatters.js
const t6=(e,t)=>{switch(e){case"P":return t.date({width:"short"});case"PP":return t.date({width:"medium"});case"PPP":return t.date({width:"long"});case"PPPP":default:return t.date({width:"full"})}};const t9=(e,t)=>{switch(e){case"p":return t.time({width:"short"});case"pp":return t.time({width:"medium"});case"ppp":return t.time({width:"long"});case"pppp":default:return t.time({width:"full"})}};const t8=(e,t)=>{const r=e.match(/(P+)(p+)?/)||[];const n=r[1];const o=r[2];if(!o){return t6(e,t)}let a;switch(n){case"P":a=t.dateTime({width:"short"});break;case"PP":a=t.dateTime({width:"medium"});break;case"PPP":a=t.dateTime({width:"long"});break;case"PPPP":default:a=t.dateTime({width:"full"});break}return a.replace("{{date}}",t6(n,t)).replace("{{time}}",t9(o,t))};const t3={p:t9,P:t8};// CONCATENATED MODULE: ../tutor/node_modules/react-day-picker/node_modules/date-fns/_lib/protectedTokens.js
const t7=/^D+$/;const t4=/^Y+$/;const re=["D","DD","YY","YYYY"];function rt(e){return t7.test(e)}function rr(e){return t4.test(e)}function rn(e,t,r){const n=ro(e,t,r);console.warn(n);if(re.includes(e))throw new RangeError(n)}function ro(e,t,r){const n=e[0]==="Y"?"years":"days of the month";return`Use \`${e.toLowerCase()}\` instead of \`${e}\` (in \`${t}\`) for formatting ${n} to the input \`${r}\`; see: https://github.com/date-fns/date-fns/blob/master/docs/unicodeTokens.md`};// CONCATENATED MODULE: ../tutor/node_modules/react-day-picker/node_modules/date-fns/isDate.js
/**
 * @name isDate
 * @category Common Helpers
 * @summary Is the given value a date?
 *
 * @description
 * Returns true if the given value is an instance of Date. The function works for dates transferred across iframes.
 *
 * @param value - The value to check
 *
 * @returns True if the given value is a date
 *
 * @example
 * // For a valid date:
 * const result = isDate(new Date())
 * //=> true
 *
 * @example
 * // For an invalid date:
 * const result = isDate(new Date(NaN))
 * //=> true
 *
 * @example
 * // For some value:
 * const result = isDate('2014-02-31')
 * //=> false
 *
 * @example
 * // For an object:
 * const result = isDate({})
 * //=> false
 */function ra(e){return e instanceof Date||typeof e==="object"&&Object.prototype.toString.call(e)==="[object Date]"}// Fallback for modularized imports:
/* export default */const ri=/* unused pure expression or super */null&&ra;// CONCATENATED MODULE: ../tutor/node_modules/react-day-picker/node_modules/date-fns/isValid.js
/**
 * @name isValid
 * @category Common Helpers
 * @summary Is the given date valid?
 *
 * @description
 * Returns false if argument is Invalid Date and true otherwise.
 * Argument is converted to Date using `toDate`. See [toDate](https://date-fns.org/docs/toDate)
 * Invalid Date is a Date, whose time value is NaN.
 *
 * Time value of Date: http://es5.github.io/#x15.9.1.1
 *
 * @param date - The date to check
 *
 * @returns The date is valid
 *
 * @example
 * // For the valid date:
 * const result = isValid(new Date(2014, 1, 31))
 * //=> true
 *
 * @example
 * // For the value, convertible into a date:
 * const result = isValid(1393804800000)
 * //=> true
 *
 * @example
 * // For the invalid date:
 * const result = isValid(new Date(''))
 * //=> false
 */function rs(e){return!(!ra(e)&&typeof e!=="number"||isNaN(+e3(e)))}// Fallback for modularized imports:
/* export default */const rl=/* unused pure expression or super */null&&rs;// CONCATENATED MODULE: ../tutor/node_modules/react-day-picker/node_modules/date-fns/format.js
// Rexports of internal for libraries to use.
// See: https://github.com/date-fns/date-fns/issues/3638#issuecomment-1877082874
// This RegExp consists of three parts separated by `|`:
// - [yYQqMLwIdDecihHKkms]o matches any available ordinal number token
//   (one of the certain letters followed by `o`)
// - (\w)\1* matches any sequences of the same letter
// - '' matches two quote characters in a row
// - '(''|[^'])+('|$) matches anything surrounded by two quote characters ('),
//   except a single quote symbol, which ends the sequence.
//   Two quote characters do not end the sequence.
//   If there is no matching single quote
//   then the sequence will continue until the end of the string.
// - . matches any single character unmatched by previous parts of the RegExps
const rc=/[yYQqMLwIdDecihHKkms]o|(\w)\1*|''|'(''|[^'])+('|$)|./g;// This RegExp catches symbols escaped by quotes, and also
// sequences of symbols P, p, and the combinations like `PPPPPPPppppp`
const rd=/P+p+|P+|p+|''|'(''|[^'])+('|$)|./g;const ru=/^'([^]*?)'?$/;const rf=/''/g;const rp=/[a-zA-Z]/;/**
 * The {@link format} function options.
 *//**
 * @name format
 * @alias formatDate
 * @category Common Helpers
 * @summary Format the date.
 *
 * @description
 * Return the formatted date string in the given format. The result may vary by locale.
 *
 * > ⚠️ Please note that the `format` tokens differ from Moment.js and other libraries.
 * > See: https://github.com/date-fns/date-fns/blob/master/docs/unicodeTokens.md
 *
 * The characters wrapped between two single quotes characters (') are escaped.
 * Two single quotes in a row, whether inside or outside a quoted sequence, represent a 'real' single quote.
 * (see the last example)
 *
 * Format of the string is based on Unicode Technical Standard #35:
 * https://www.unicode.org/reports/tr35/tr35-dates.html#Date_Field_Symbol_Table
 * with a few additions (see note 7 below the table).
 *
 * Accepted patterns:
 * | Unit                            | Pattern | Result examples                   | Notes |
 * |---------------------------------|---------|-----------------------------------|-------|
 * | Era                             | G..GGG  | AD, BC                            |       |
 * |                                 | GGGG    | Anno Domini, Before Christ        | 2     |
 * |                                 | GGGGG   | A, B                              |       |
 * | Calendar year                   | y       | 44, 1, 1900, 2017                 | 5     |
 * |                                 | yo      | 44th, 1st, 0th, 17th              | 5,7   |
 * |                                 | yy      | 44, 01, 00, 17                    | 5     |
 * |                                 | yyy     | 044, 001, 1900, 2017              | 5     |
 * |                                 | yyyy    | 0044, 0001, 1900, 2017            | 5     |
 * |                                 | yyyyy   | ...                               | 3,5   |
 * | Local week-numbering year       | Y       | 44, 1, 1900, 2017                 | 5     |
 * |                                 | Yo      | 44th, 1st, 1900th, 2017th         | 5,7   |
 * |                                 | YY      | 44, 01, 00, 17                    | 5,8   |
 * |                                 | YYY     | 044, 001, 1900, 2017              | 5     |
 * |                                 | YYYY    | 0044, 0001, 1900, 2017            | 5,8   |
 * |                                 | YYYYY   | ...                               | 3,5   |
 * | ISO week-numbering year         | R       | -43, 0, 1, 1900, 2017             | 5,7   |
 * |                                 | RR      | -43, 00, 01, 1900, 2017           | 5,7   |
 * |                                 | RRR     | -043, 000, 001, 1900, 2017        | 5,7   |
 * |                                 | RRRR    | -0043, 0000, 0001, 1900, 2017     | 5,7   |
 * |                                 | RRRRR   | ...                               | 3,5,7 |
 * | Extended year                   | u       | -43, 0, 1, 1900, 2017             | 5     |
 * |                                 | uu      | -43, 01, 1900, 2017               | 5     |
 * |                                 | uuu     | -043, 001, 1900, 2017             | 5     |
 * |                                 | uuuu    | -0043, 0001, 1900, 2017           | 5     |
 * |                                 | uuuuu   | ...                               | 3,5   |
 * | Quarter (formatting)            | Q       | 1, 2, 3, 4                        |       |
 * |                                 | Qo      | 1st, 2nd, 3rd, 4th                | 7     |
 * |                                 | QQ      | 01, 02, 03, 04                    |       |
 * |                                 | QQQ     | Q1, Q2, Q3, Q4                    |       |
 * |                                 | QQQQ    | 1st quarter, 2nd quarter, ...     | 2     |
 * |                                 | QQQQQ   | 1, 2, 3, 4                        | 4     |
 * | Quarter (stand-alone)           | q       | 1, 2, 3, 4                        |       |
 * |                                 | qo      | 1st, 2nd, 3rd, 4th                | 7     |
 * |                                 | qq      | 01, 02, 03, 04                    |       |
 * |                                 | qqq     | Q1, Q2, Q3, Q4                    |       |
 * |                                 | qqqq    | 1st quarter, 2nd quarter, ...     | 2     |
 * |                                 | qqqqq   | 1, 2, 3, 4                        | 4     |
 * | Month (formatting)              | M       | 1, 2, ..., 12                     |       |
 * |                                 | Mo      | 1st, 2nd, ..., 12th               | 7     |
 * |                                 | MM      | 01, 02, ..., 12                   |       |
 * |                                 | MMM     | Jan, Feb, ..., Dec                |       |
 * |                                 | MMMM    | January, February, ..., December  | 2     |
 * |                                 | MMMMM   | J, F, ..., D                      |       |
 * | Month (stand-alone)             | L       | 1, 2, ..., 12                     |       |
 * |                                 | Lo      | 1st, 2nd, ..., 12th               | 7     |
 * |                                 | LL      | 01, 02, ..., 12                   |       |
 * |                                 | LLL     | Jan, Feb, ..., Dec                |       |
 * |                                 | LLLL    | January, February, ..., December  | 2     |
 * |                                 | LLLLL   | J, F, ..., D                      |       |
 * | Local week of year              | w       | 1, 2, ..., 53                     |       |
 * |                                 | wo      | 1st, 2nd, ..., 53th               | 7     |
 * |                                 | ww      | 01, 02, ..., 53                   |       |
 * | ISO week of year                | I       | 1, 2, ..., 53                     | 7     |
 * |                                 | Io      | 1st, 2nd, ..., 53th               | 7     |
 * |                                 | II      | 01, 02, ..., 53                   | 7     |
 * | Day of month                    | d       | 1, 2, ..., 31                     |       |
 * |                                 | do      | 1st, 2nd, ..., 31st               | 7     |
 * |                                 | dd      | 01, 02, ..., 31                   |       |
 * | Day of year                     | D       | 1, 2, ..., 365, 366               | 9     |
 * |                                 | Do      | 1st, 2nd, ..., 365th, 366th       | 7     |
 * |                                 | DD      | 01, 02, ..., 365, 366             | 9     |
 * |                                 | DDD     | 001, 002, ..., 365, 366           |       |
 * |                                 | DDDD    | ...                               | 3     |
 * | Day of week (formatting)        | E..EEE  | Mon, Tue, Wed, ..., Sun           |       |
 * |                                 | EEEE    | Monday, Tuesday, ..., Sunday      | 2     |
 * |                                 | EEEEE   | M, T, W, T, F, S, S               |       |
 * |                                 | EEEEEE  | Mo, Tu, We, Th, Fr, Sa, Su        |       |
 * | ISO day of week (formatting)    | i       | 1, 2, 3, ..., 7                   | 7     |
 * |                                 | io      | 1st, 2nd, ..., 7th                | 7     |
 * |                                 | ii      | 01, 02, ..., 07                   | 7     |
 * |                                 | iii     | Mon, Tue, Wed, ..., Sun           | 7     |
 * |                                 | iiii    | Monday, Tuesday, ..., Sunday      | 2,7   |
 * |                                 | iiiii   | M, T, W, T, F, S, S               | 7     |
 * |                                 | iiiiii  | Mo, Tu, We, Th, Fr, Sa, Su        | 7     |
 * | Local day of week (formatting)  | e       | 2, 3, 4, ..., 1                   |       |
 * |                                 | eo      | 2nd, 3rd, ..., 1st                | 7     |
 * |                                 | ee      | 02, 03, ..., 01                   |       |
 * |                                 | eee     | Mon, Tue, Wed, ..., Sun           |       |
 * |                                 | eeee    | Monday, Tuesday, ..., Sunday      | 2     |
 * |                                 | eeeee   | M, T, W, T, F, S, S               |       |
 * |                                 | eeeeee  | Mo, Tu, We, Th, Fr, Sa, Su        |       |
 * | Local day of week (stand-alone) | c       | 2, 3, 4, ..., 1                   |       |
 * |                                 | co      | 2nd, 3rd, ..., 1st                | 7     |
 * |                                 | cc      | 02, 03, ..., 01                   |       |
 * |                                 | ccc     | Mon, Tue, Wed, ..., Sun           |       |
 * |                                 | cccc    | Monday, Tuesday, ..., Sunday      | 2     |
 * |                                 | ccccc   | M, T, W, T, F, S, S               |       |
 * |                                 | cccccc  | Mo, Tu, We, Th, Fr, Sa, Su        |       |
 * | AM, PM                          | a..aa   | AM, PM                            |       |
 * |                                 | aaa     | am, pm                            |       |
 * |                                 | aaaa    | a.m., p.m.                        | 2     |
 * |                                 | aaaaa   | a, p                              |       |
 * | AM, PM, noon, midnight          | b..bb   | AM, PM, noon, midnight            |       |
 * |                                 | bbb     | am, pm, noon, midnight            |       |
 * |                                 | bbbb    | a.m., p.m., noon, midnight        | 2     |
 * |                                 | bbbbb   | a, p, n, mi                       |       |
 * | Flexible day period             | B..BBB  | at night, in the morning, ...     |       |
 * |                                 | BBBB    | at night, in the morning, ...     | 2     |
 * |                                 | BBBBB   | at night, in the morning, ...     |       |
 * | Hour [1-12]                     | h       | 1, 2, ..., 11, 12                 |       |
 * |                                 | ho      | 1st, 2nd, ..., 11th, 12th         | 7     |
 * |                                 | hh      | 01, 02, ..., 11, 12               |       |
 * | Hour [0-23]                     | H       | 0, 1, 2, ..., 23                  |       |
 * |                                 | Ho      | 0th, 1st, 2nd, ..., 23rd          | 7     |
 * |                                 | HH      | 00, 01, 02, ..., 23               |       |
 * | Hour [0-11]                     | K       | 1, 2, ..., 11, 0                  |       |
 * |                                 | Ko      | 1st, 2nd, ..., 11th, 0th          | 7     |
 * |                                 | KK      | 01, 02, ..., 11, 00               |       |
 * | Hour [1-24]                     | k       | 24, 1, 2, ..., 23                 |       |
 * |                                 | ko      | 24th, 1st, 2nd, ..., 23rd         | 7     |
 * |                                 | kk      | 24, 01, 02, ..., 23               |       |
 * | Minute                          | m       | 0, 1, ..., 59                     |       |
 * |                                 | mo      | 0th, 1st, ..., 59th               | 7     |
 * |                                 | mm      | 00, 01, ..., 59                   |       |
 * | Second                          | s       | 0, 1, ..., 59                     |       |
 * |                                 | so      | 0th, 1st, ..., 59th               | 7     |
 * |                                 | ss      | 00, 01, ..., 59                   |       |
 * | Fraction of second              | S       | 0, 1, ..., 9                      |       |
 * |                                 | SS      | 00, 01, ..., 99                   |       |
 * |                                 | SSS     | 000, 001, ..., 999                |       |
 * |                                 | SSSS    | ...                               | 3     |
 * | Timezone (ISO-8601 w/ Z)        | X       | -08, +0530, Z                     |       |
 * |                                 | XX      | -0800, +0530, Z                   |       |
 * |                                 | XXX     | -08:00, +05:30, Z                 |       |
 * |                                 | XXXX    | -0800, +0530, Z, +123456          | 2     |
 * |                                 | XXXXX   | -08:00, +05:30, Z, +12:34:56      |       |
 * | Timezone (ISO-8601 w/o Z)       | x       | -08, +0530, +00                   |       |
 * |                                 | xx      | -0800, +0530, +0000               |       |
 * |                                 | xxx     | -08:00, +05:30, +00:00            | 2     |
 * |                                 | xxxx    | -0800, +0530, +0000, +123456      |       |
 * |                                 | xxxxx   | -08:00, +05:30, +00:00, +12:34:56 |       |
 * | Timezone (GMT)                  | O...OOO | GMT-8, GMT+5:30, GMT+0            |       |
 * |                                 | OOOO    | GMT-08:00, GMT+05:30, GMT+00:00   | 2     |
 * | Timezone (specific non-locat.)  | z...zzz | GMT-8, GMT+5:30, GMT+0            | 6     |
 * |                                 | zzzz    | GMT-08:00, GMT+05:30, GMT+00:00   | 2,6   |
 * | Seconds timestamp               | t       | 512969520                         | 7     |
 * |                                 | tt      | ...                               | 3,7   |
 * | Milliseconds timestamp          | T       | 512969520900                      | 7     |
 * |                                 | TT      | ...                               | 3,7   |
 * | Long localized date             | P       | 04/29/1453                        | 7     |
 * |                                 | PP      | Apr 29, 1453                      | 7     |
 * |                                 | PPP     | April 29th, 1453                  | 7     |
 * |                                 | PPPP    | Friday, April 29th, 1453          | 2,7   |
 * | Long localized time             | p       | 12:00 AM                          | 7     |
 * |                                 | pp      | 12:00:00 AM                       | 7     |
 * |                                 | ppp     | 12:00:00 AM GMT+2                 | 7     |
 * |                                 | pppp    | 12:00:00 AM GMT+02:00             | 2,7   |
 * | Combination of date and time    | Pp      | 04/29/1453, 12:00 AM              | 7     |
 * |                                 | PPpp    | Apr 29, 1453, 12:00:00 AM         | 7     |
 * |                                 | PPPppp  | April 29th, 1453 at ...           | 7     |
 * |                                 | PPPPpppp| Friday, April 29th, 1453 at ...   | 2,7   |
 * Notes:
 * 1. "Formatting" units (e.g. formatting quarter) in the default en-US locale
 *    are the same as "stand-alone" units, but are different in some languages.
 *    "Formatting" units are declined according to the rules of the language
 *    in the context of a date. "Stand-alone" units are always nominative singular:
 *
 *    `format(new Date(2017, 10, 6), 'do LLLL', {locale: cs}) //=> '6. listopad'`
 *
 *    `format(new Date(2017, 10, 6), 'do MMMM', {locale: cs}) //=> '6. listopadu'`
 *
 * 2. Any sequence of the identical letters is a pattern, unless it is escaped by
 *    the single quote characters (see below).
 *    If the sequence is longer than listed in table (e.g. `EEEEEEEEEEE`)
 *    the output will be the same as default pattern for this unit, usually
 *    the longest one (in case of ISO weekdays, `EEEE`). Default patterns for units
 *    are marked with "2" in the last column of the table.
 *
 *    `format(new Date(2017, 10, 6), 'MMM') //=> 'Nov'`
 *
 *    `format(new Date(2017, 10, 6), 'MMMM') //=> 'November'`
 *
 *    `format(new Date(2017, 10, 6), 'MMMMM') //=> 'N'`
 *
 *    `format(new Date(2017, 10, 6), 'MMMMMM') //=> 'November'`
 *
 *    `format(new Date(2017, 10, 6), 'MMMMMMM') //=> 'November'`
 *
 * 3. Some patterns could be unlimited length (such as `yyyyyyyy`).
 *    The output will be padded with zeros to match the length of the pattern.
 *
 *    `format(new Date(2017, 10, 6), 'yyyyyyyy') //=> '00002017'`
 *
 * 4. `QQQQQ` and `qqqqq` could be not strictly numerical in some locales.
 *    These tokens represent the shortest form of the quarter.
 *
 * 5. The main difference between `y` and `u` patterns are B.C. years:
 *
 *    | Year | `y` | `u` |
 *    |------|-----|-----|
 *    | AC 1 |   1 |   1 |
 *    | BC 1 |   1 |   0 |
 *    | BC 2 |   2 |  -1 |
 *
 *    Also `yy` always returns the last two digits of a year,
 *    while `uu` pads single digit years to 2 characters and returns other years unchanged:
 *
 *    | Year | `yy` | `uu` |
 *    |------|------|------|
 *    | 1    |   01 |   01 |
 *    | 14   |   14 |   14 |
 *    | 376  |   76 |  376 |
 *    | 1453 |   53 | 1453 |
 *
 *    The same difference is true for local and ISO week-numbering years (`Y` and `R`),
 *    except local week-numbering years are dependent on `options.weekStartsOn`
 *    and `options.firstWeekContainsDate` (compare [getISOWeekYear](https://date-fns.org/docs/getISOWeekYear)
 *    and [getWeekYear](https://date-fns.org/docs/getWeekYear)).
 *
 * 6. Specific non-location timezones are currently unavailable in `date-fns`,
 *    so right now these tokens fall back to GMT timezones.
 *
 * 7. These patterns are not in the Unicode Technical Standard #35:
 *    - `i`: ISO day of week
 *    - `I`: ISO week of year
 *    - `R`: ISO week-numbering year
 *    - `t`: seconds timestamp
 *    - `T`: milliseconds timestamp
 *    - `o`: ordinal number modifier
 *    - `P`: long localized date
 *    - `p`: long localized time
 *
 * 8. `YY` and `YYYY` tokens represent week-numbering years but they are often confused with years.
 *    You should enable `options.useAdditionalWeekYearTokens` to use them. See: https://github.com/date-fns/date-fns/blob/master/docs/unicodeTokens.md
 *
 * 9. `D` and `DD` tokens represent days of the year but they are often confused with days of the month.
 *    You should enable `options.useAdditionalDayOfYearTokens` to use them. See: https://github.com/date-fns/date-fns/blob/master/docs/unicodeTokens.md
 *
 * @param date - The original date
 * @param format - The string of tokens
 * @param options - An object with options
 *
 * @returns The formatted date string
 *
 * @throws `date` must not be Invalid Date
 * @throws `options.locale` must contain `localize` property
 * @throws `options.locale` must contain `formatLong` property
 * @throws use `yyyy` instead of `YYYY` for formatting years using [format provided] to the input [input provided]; see: https://github.com/date-fns/date-fns/blob/master/docs/unicodeTokens.md
 * @throws use `yy` instead of `YY` for formatting years using [format provided] to the input [input provided]; see: https://github.com/date-fns/date-fns/blob/master/docs/unicodeTokens.md
 * @throws use `d` instead of `D` for formatting days of the month using [format provided] to the input [input provided]; see: https://github.com/date-fns/date-fns/blob/master/docs/unicodeTokens.md
 * @throws use `dd` instead of `DD` for formatting days of the month using [format provided] to the input [input provided]; see: https://github.com/date-fns/date-fns/blob/master/docs/unicodeTokens.md
 * @throws format string contains an unescaped latin alphabet character
 *
 * @example
 * // Represent 11 February 2014 in middle-endian format:
 * const result = format(new Date(2014, 1, 11), 'MM/dd/yyyy')
 * //=> '02/11/2014'
 *
 * @example
 * // Represent 2 July 2014 in Esperanto:
 * import { eoLocale } from 'date-fns/locale/eo'
 * const result = format(new Date(2014, 6, 2), "do 'de' MMMM yyyy", {
 *   locale: eoLocale
 * })
 * //=> '2-a de julio 2014'
 *
 * @example
 * // Escape string by single quote characters:
 * const result = format(new Date(2014, 6, 2, 15), "h 'o''clock'")
 * //=> "3 o'clock"
 */function rh(e,t,r){const n=tw();const o=r?.locale??n.locale??eE;const a=r?.firstWeekContainsDate??r?.locale?.options?.firstWeekContainsDate??n.firstWeekContainsDate??n.locale?.options?.firstWeekContainsDate??1;const i=r?.weekStartsOn??r?.locale?.options?.weekStartsOn??n.weekStartsOn??n.locale?.options?.weekStartsOn??0;const s=e3(e,r?.in);if(!rs(s)){throw new RangeError("Invalid time value")}let l=t.match(rd).map(e=>{const t=e[0];if(t==="p"||t==="P"){const r=t3[t];return r(e,o.formatLong)}return e}).join("").match(rc).map(e=>{// Replace two single quote characters with one single quote character
if(e==="''"){return{isToken:false,value:"'"}}const t=e[0];if(t==="'"){return{isToken:false,value:rg(e)}}if(t0[t]){return{isToken:true,value:e}}if(t.match(rp)){throw new RangeError("Format string contains an unescaped latin alphabet character `"+t+"`")}return{isToken:false,value:e}});// invoke localize preprocessor (only for french locales at the moment)
if(o.localize.preprocessor){l=o.localize.preprocessor(s,l)}const c={firstWeekContainsDate:a,weekStartsOn:i,locale:o};return l.map(n=>{if(!n.isToken)return n.value;const a=n.value;if(!r?.useAdditionalWeekYearTokens&&rr(a)||!r?.useAdditionalDayOfYearTokens&&rt(a)){rn(a,t,String(e))}const i=t0[a[0]];return i(s,a,o.localize,c)}).join("")}function rg(e){const t=e.match(ru);if(!t){return e}return t[1].replace(rf,"'")}// Fallback for modularized imports:
/* export default */const rm=/* unused pure expression or super */null&&rh;// CONCATENATED MODULE: ../tutor/node_modules/react-day-picker/node_modules/date-fns/getMonth.js
/**
 * The {@link getMonth} function options.
 *//**
 * @name getMonth
 * @category Month Helpers
 * @summary Get the month of the given date.
 *
 * @description
 * Get the month of the given date.
 *
 * @param date - The given date
 * @param options - An object with options
 *
 * @returns The month index (0-11)
 *
 * @example
 * // Which month is 29 February 2012?
 * const result = getMonth(new Date(2012, 1, 29))
 * //=> 1
 */function rv(e,t){return e3(e,t?.in).getMonth()}// Fallback for modularized imports:
/* export default */const rb=/* unused pure expression or super */null&&rv;// CONCATENATED MODULE: ../tutor/node_modules/react-day-picker/node_modules/date-fns/getYear.js
/**
 * The {@link getYear} function options.
 *//**
 * @name getYear
 * @category Year Helpers
 * @summary Get the year of the given date.
 *
 * @description
 * Get the year of the given date.
 *
 * @param date - The given date
 * @param options - An object with options
 *
 * @returns The year
 *
 * @example
 * // Which year is 2 July 2014?
 * const result = getYear(new Date(2014, 6, 2))
 * //=> 2014
 */function ry(e,t){return e3(e,t?.in).getFullYear()}// Fallback for modularized imports:
/* export default */const r_=/* unused pure expression or super */null&&ry;// CONCATENATED MODULE: ../tutor/node_modules/react-day-picker/node_modules/date-fns/isAfter.js
/**
 * @name isAfter
 * @category Common Helpers
 * @summary Is the first date after the second one?
 *
 * @description
 * Is the first date after the second one?
 *
 * @param date - The date that should be after the other one to return true
 * @param dateToCompare - The date to compare with
 *
 * @returns The first date is after the second date
 *
 * @example
 * // Is 10 July 1989 after 11 February 1987?
 * const result = isAfter(new Date(1989, 6, 10), new Date(1987, 1, 11))
 * //=> true
 */function rw(e,t){return+e3(e)>+e3(t)}// Fallback for modularized imports:
/* export default */const rx=/* unused pure expression or super */null&&rw;// CONCATENATED MODULE: ../tutor/node_modules/react-day-picker/node_modules/date-fns/isBefore.js
/**
 * @name isBefore
 * @category Common Helpers
 * @summary Is the first date before the second one?
 *
 * @description
 * Is the first date before the second one?
 *
 * @param date - The date that should be before the other one to return true
 * @param dateToCompare - The date to compare with
 *
 * @returns The first date is before the second date
 *
 * @example
 * // Is 10 July 1989 before 11 February 1987?
 * const result = isBefore(new Date(1989, 6, 10), new Date(1987, 1, 11))
 * //=> false
 */function rC(e,t){return+e3(e)<+e3(t)}// Fallback for modularized imports:
/* export default */const rk=/* unused pure expression or super */null&&rC;// CONCATENATED MODULE: ../tutor/node_modules/react-day-picker/node_modules/date-fns/isSameDay.js
/**
 * The {@link isSameDay} function options.
 *//**
 * @name isSameDay
 * @category Day Helpers
 * @summary Are the given dates in the same day (and year and month)?
 *
 * @description
 * Are the given dates in the same day (and year and month)?
 *
 * @param laterDate - The first date to check
 * @param earlierDate - The second date to check
 * @param options - An object with options
 *
 * @returns The dates are in the same day (and year and month)
 *
 * @example
 * // Are 4 September 06:00:00 and 4 September 18:00:00 in the same day?
 * const result = isSameDay(new Date(2014, 8, 4, 6, 0), new Date(2014, 8, 4, 18, 0))
 * //=> true
 *
 * @example
 * // Are 4 September and 4 October in the same day?
 * const result = isSameDay(new Date(2014, 8, 4), new Date(2014, 9, 4))
 * //=> false
 *
 * @example
 * // Are 4 September, 2014 and 4 September, 2015 in the same day?
 * const result = isSameDay(new Date(2014, 8, 4), new Date(2015, 8, 4))
 * //=> false
 */function rA(e,t,r){const[n,o]=tl(r?.in,e,t);return+tc(n)===+tc(o)}// Fallback for modularized imports:
/* export default */const rY=/* unused pure expression or super */null&&rA;// CONCATENATED MODULE: ../tutor/node_modules/react-day-picker/node_modules/date-fns/isSameMonth.js
/**
 * The {@link isSameMonth} function options.
 *//**
 * @name isSameMonth
 * @category Month Helpers
 * @summary Are the given dates in the same month (and year)?
 *
 * @description
 * Are the given dates in the same month (and year)?
 *
 * @param laterDate - The first date to check
 * @param earlierDate - The second date to check
 * @param options - An object with options
 *
 * @returns The dates are in the same month (and year)
 *
 * @example
 * // Are 2 September 2014 and 25 September 2014 in the same month?
 * const result = isSameMonth(new Date(2014, 8, 2), new Date(2014, 8, 25))
 * //=> true
 *
 * @example
 * // Are 2 September 2014 and 25 September 2015 in the same month?
 * const result = isSameMonth(new Date(2014, 8, 2), new Date(2015, 8, 25))
 * //=> false
 */function rM(e,t,r){const[n,o]=tl(r?.in,e,t);return n.getFullYear()===o.getFullYear()&&n.getMonth()===o.getMonth()}// Fallback for modularized imports:
/* export default */const rD=/* unused pure expression or super */null&&rM;// CONCATENATED MODULE: ../tutor/node_modules/react-day-picker/node_modules/date-fns/isSameYear.js
/**
 * The {@link isSameYear} function options.
 *//**
 * @name isSameYear
 * @category Year Helpers
 * @summary Are the given dates in the same year?
 *
 * @description
 * Are the given dates in the same year?
 *
 * @param laterDate - The first date to check
 * @param earlierDate - The second date to check
 * @param options - An object with options
 *
 * @returns The dates are in the same year
 *
 * @example
 * // Are 2 September 2014 and 25 September 2014 in the same year?
 * const result = isSameYear(new Date(2014, 8, 2), new Date(2014, 8, 25))
 * //=> true
 */function rI(e,t,r){const[n,o]=tl(r?.in,e,t);return n.getFullYear()===o.getFullYear()}// Fallback for modularized imports:
/* export default */const rS=/* unused pure expression or super */null&&rI;// CONCATENATED MODULE: ../tutor/node_modules/react-day-picker/node_modules/date-fns/max.js
/**
 * The {@link max} function options.
 *//**
 * @name max
 * @category Common Helpers
 * @summary Return the latest of the given dates.
 *
 * @description
 * Return the latest of the given dates.
 *
 * @typeParam DateType - The `Date` type, the function operates on. Gets inferred from passed arguments. Allows to use extensions like [`UTCDate`](https://github.com/date-fns/utc).
 * @typeParam ResultDate - The result `Date` type, it is the type returned from the context function if it is passed, or inferred from the arguments.
 *
 * @param dates - The dates to compare
 *
 * @returns The latest of the dates
 *
 * @example
 * // Which of these dates is the latest?
 * const result = max([
 *   new Date(1989, 6, 10),
 *   new Date(1987, 1, 11),
 *   new Date(1995, 6, 2),
 *   new Date(1990, 0, 1)
 * ])
 * //=> Sun Jul 02 1995 00:00:00
 */function rT(e,t){let r;let n=t?.in;e.forEach(e=>{// Use the first date object as the context function
if(!n&&typeof e==="object")n=e9.bind(null,e);const t=e3(e,n);if(!r||r<t||isNaN(+t))r=t});return e9(n,r||NaN)}// Fallback for modularized imports:
/* export default */const rF=/* unused pure expression or super */null&&rT;// CONCATENATED MODULE: ../tutor/node_modules/react-day-picker/node_modules/date-fns/min.js
/**
 * The {@link min} function options.
 *//**
 * @name min
 * @category Common Helpers
 * @summary Returns the earliest of the given dates.
 *
 * @description
 * Returns the earliest of the given dates.
 *
 * @typeParam DateType - The `Date` type, the function operates on. Gets inferred from passed arguments. Allows to use extensions like [`UTCDate`](https://github.com/date-fns/utc).
 * @typeParam ResultDate - The result `Date` type, it is the type returned from the context function if it is passed, or inferred from the arguments.
 *
 * @param dates - The dates to compare
 *
 * @returns The earliest of the dates
 *
 * @example
 * // Which of these dates is the earliest?
 * const result = min([
 *   new Date(1989, 6, 10),
 *   new Date(1987, 1, 11),
 *   new Date(1995, 6, 2),
 *   new Date(1990, 0, 1)
 * ])
 * //=> Wed Feb 11 1987 00:00:00
 */function rE(e,t){let r;let n=t?.in;e.forEach(e=>{// Use the first date object as the context function
if(!n&&typeof e==="object")n=e9.bind(null,e);const t=e3(e,n);if(!r||r>t||isNaN(+t))r=t});return e9(n,r||NaN)}// Fallback for modularized imports:
/* export default */const rH=/* unused pure expression or super */null&&rE;// CONCATENATED MODULE: ../tutor/node_modules/react-day-picker/node_modules/date-fns/getDaysInMonth.js
/**
 * The {@link getDaysInMonth} function options.
 *//**
 * @name getDaysInMonth
 * @category Month Helpers
 * @summary Get the number of days in a month of the given date.
 *
 * @description
 * Get the number of days in a month of the given date, considering the context if provided.
 *
 * @param date - The given date
 * @param options - An object with options
 *
 * @returns The number of days in a month
 *
 * @example
 * // How many days are in February 2000?
 * const result = getDaysInMonth(new Date(2000, 1))
 * //=> 29
 */function rN(e,t){const r=e3(e,t?.in);const n=r.getFullYear();const o=r.getMonth();const a=e9(r,0);a.setFullYear(n,o+1,0);a.setHours(0,0,0,0);return a.getDate()}// Fallback for modularized imports:
/* export default */const rO=/* unused pure expression or super */null&&rN;// CONCATENATED MODULE: ../tutor/node_modules/react-day-picker/node_modules/date-fns/setMonth.js
/**
 * The {@link setMonth} function options.
 *//**
 * @name setMonth
 * @category Month Helpers
 * @summary Set the month to the given date.
 *
 * @description
 * Set the month to the given date.
 *
 * @typeParam DateType - The `Date` type, the function operates on. Gets inferred from passed arguments. Allows to use extensions like [`UTCDate`](https://github.com/date-fns/utc).
 * @typeParam ResultDate - The result `Date` type, it is the type returned from the context function if it is passed, or inferred from the arguments.
 *
 * @param date - The date to be changed
 * @param month - The month index to set (0-11)
 * @param options - The options
 *
 * @returns The new date with the month set
 *
 * @example
 * // Set February to 1 September 2014:
 * const result = setMonth(new Date(2014, 8, 1), 1)
 * //=> Sat Feb 01 2014 00:00:00
 */function rL(e,t,r){const n=e3(e,r?.in);const o=n.getFullYear();const a=n.getDate();const i=e9(r?.in||e,0);i.setFullYear(o,t,15);i.setHours(0,0,0,0);const s=rN(i);// Set the earlier date, allows to wrap Jan 31 to Feb 28
n.setMonth(t,Math.min(a,s));return n}// Fallback for modularized imports:
/* export default */const rV=/* unused pure expression or super */null&&rL;// CONCATENATED MODULE: ../tutor/node_modules/react-day-picker/node_modules/date-fns/setYear.js
/**
 * The {@link setYear} function options.
 *//**
 * @name setYear
 * @category Year Helpers
 * @summary Set the year to the given date.
 *
 * @description
 * Set the year to the given date.
 *
 * @typeParam DateType - The `Date` type, the function operates on. Gets inferred from passed arguments. Allows to use extensions like [`UTCDate`](https://github.com/date-fns/utc).
 * @typeParam ResultDate - The result `Date` type, it is the type returned from the context function if it is passed, or inferred from the arguments.
 *
 * @param date - The date to be changed
 * @param year - The year of the new date
 * @param options - An object with options.
 *
 * @returns The new date with the year set
 *
 * @example
 * // Set year 2013 to 1 September 2014:
 * const result = setYear(new Date(2014, 8, 1), 2013)
 * //=> Sun Sep 01 2013 00:00:00
 */function rW(e,t,r){const n=e3(e,r?.in);// Check if date is Invalid Date because Date.prototype.setFullYear ignores the value of Invalid Date
if(isNaN(+n))return e9(r?.in||e,NaN);n.setFullYear(t);return n}// Fallback for modularized imports:
/* export default */const rP=/* unused pure expression or super */null&&rW;// CONCATENATED MODULE: ../tutor/node_modules/react-day-picker/node_modules/date-fns/startOfMonth.js
/**
 * The {@link startOfMonth} function options.
 *//**
 * @name startOfMonth
 * @category Month Helpers
 * @summary Return the start of a month for the given date.
 *
 * @description
 * Return the start of a month for the given date. The result will be in the local timezone.
 *
 * @typeParam DateType - The `Date` type, the function operates on. Gets inferred from passed arguments.
 * Allows to use extensions like [`UTCDate`](https://github.com/date-fns/utc).
 * @typeParam ResultDate - The result `Date` type, it is the type returned from the context function if it is passed,
 * or inferred from the arguments.
 *
 * @param date - The original date
 * @param options - An object with options
 *
 * @returns The start of a month
 *
 * @example
 * // The start of a month for 2 September 2014 11:55:00:
 * const result = startOfMonth(new Date(2014, 8, 2, 11, 55, 0))
 * //=> Mon Sep 01 2014 00:00:00
 */function rK(e,t){const r=e3(e,t?.in);r.setDate(1);r.setHours(0,0,0,0);return r}// Fallback for modularized imports:
/* export default */const rB=/* unused pure expression or super */null&&rK;// CONCATENATED MODULE: ../tutor/node_modules/react-day-picker/dist/esm/helpers/getBroadcastWeeksInMonth.js
const rj=5;const rz=4;/**
 * Returns the number of weeks to display in the broadcast calendar for a given
 * month.
 *
 * The broadcast calendar may have either 4 or 5 weeks in a month, depending on
 * the start and end dates of the broadcast weeks.
 *
 * @since 9.4.0
 * @param month The month for which to calculate the number of weeks.
 * @param dateLib The date library to use for date manipulation.
 * @returns The number of weeks in the broadcast calendar (4 or 5).
 */function rR(e,t){// Get the first day of the month
const r=t.startOfMonth(e);// Get the day of the week for the first day of the month (1-7, where 1 is Monday)
const n=r.getDay()>0?r.getDay():7;const o=t.addDays(e,-n+1);const a=t.addDays(o,rj*7-1);const i=t.getMonth(e)===t.getMonth(a)?rj:rz;return i};// CONCATENATED MODULE: ../tutor/node_modules/react-day-picker/dist/esm/helpers/startOfBroadcastWeek.js
/**
 * Returns the start date of the week in the broadcast calendar.
 *
 * The broadcast week starts on Monday. If the first day of the month is not a
 * Monday, this function calculates the previous Monday as the start of the
 * broadcast week.
 *
 * @since 9.4.0
 * @param date The date for which to calculate the start of the broadcast week.
 * @param dateLib The date library to use for date manipulation.
 * @returns The start date of the broadcast week.
 */function rq(e,t){const r=t.startOfMonth(e);const n=r.getDay();if(n===1){return r}else if(n===0){return t.addDays(r,-1*6)}else{return t.addDays(r,-1*(n-1))}};// CONCATENATED MODULE: ../tutor/node_modules/react-day-picker/dist/esm/helpers/endOfBroadcastWeek.js
/**
 * Returns the end date of the week in the broadcast calendar.
 *
 * The broadcast week ends on the last day of the last broadcast week for the
 * given date.
 *
 * @since 9.4.0
 * @param date The date for which to calculate the end of the broadcast week.
 * @param dateLib The date library to use for date manipulation.
 * @returns The end date of the broadcast week.
 */function rU(e,t){const r=rq(e,t);const n=rR(e,t);const o=t.addDays(r,n*7-1);return o};// CONCATENATED MODULE: ../tutor/node_modules/react-day-picker/dist/esm/classes/DateLib.js
/**
 * A wrapper class around [date-fns](http://date-fns.org) that provides utility
 * methods for date manipulation and formatting.
 *
 * @since 9.2.0
 * @example
 *   const dateLib = new DateLib({ locale: es });
 *   const newDate = dateLib.addDays(new Date(), 5);
 */class rZ{/**
     * Creates an instance of `DateLib`.
     *
     * @param options Configuration options for the date library.
     * @param overrides Custom overrides for the date library functions.
     */constructor(e,t){/**
         * Reference to the built-in Date constructor.
         *
         * @deprecated Use `newDate()` or `today()`.
         */this.Date=Date;/**
         * Creates a new `Date` object representing today's date.
         *
         * @since 9.5.0
         * @returns A `Date` object for today's date.
         */this.today=()=>{if(this.overrides?.today){return this.overrides.today()}if(this.options.timeZone){return G.tz(this.options.timeZone)}return new this.Date};/**
         * Creates a new `Date` object with the specified year, month, and day.
         *
         * @since 9.5.0
         * @param year The year.
         * @param monthIndex The month (0-11).
         * @param date The day of the month.
         * @returns A new `Date` object.
         */this.newDate=(e,t,r)=>{if(this.overrides?.newDate){return this.overrides.newDate(e,t,r)}if(this.options.timeZone){return new G(e,t,r,this.options.timeZone)}return new Date(e,t,r)};/**
         * Adds the specified number of days to the given date.
         *
         * @param date The date to add days to.
         * @param amount The number of days to add.
         * @returns The new date with the days added.
         */this.addDays=(e,t)=>{return this.overrides?.addDays?this.overrides.addDays(e,t):e4(e,t)};/**
         * Adds the specified number of months to the given date.
         *
         * @param date The date to add months to.
         * @param amount The number of months to add.
         * @returns The new date with the months added.
         */this.addMonths=(e,t)=>{return this.overrides?.addMonths?this.overrides.addMonths(e,t):tt(e,t)};/**
         * Adds the specified number of weeks to the given date.
         *
         * @param date The date to add weeks to.
         * @param amount The number of weeks to add.
         * @returns The new date with the weeks added.
         */this.addWeeks=(e,t)=>{return this.overrides?.addWeeks?this.overrides.addWeeks(e,t):tn(e,t)};/**
         * Adds the specified number of years to the given date.
         *
         * @param date The date to add years to.
         * @param amount The number of years to add.
         * @returns The new date with the years added.
         */this.addYears=(e,t)=>{return this.overrides?.addYears?this.overrides.addYears(e,t):ta(e,t)};/**
         * Returns the number of calendar days between the given dates.
         *
         * @param dateLeft The later date.
         * @param dateRight The earlier date.
         * @returns The number of calendar days between the dates.
         */this.differenceInCalendarDays=(e,t)=>{return this.overrides?.differenceInCalendarDays?this.overrides.differenceInCalendarDays(e,t):tu(e,t)};/**
         * Returns the number of calendar months between the given dates.
         *
         * @param dateLeft The later date.
         * @param dateRight The earlier date.
         * @returns The number of calendar months between the dates.
         */this.differenceInCalendarMonths=(e,t)=>{return this.overrides?.differenceInCalendarMonths?this.overrides.differenceInCalendarMonths(e,t):tp(e,t)};/**
         * Returns the months between the given dates.
         *
         * @param interval The interval to get the months for.
         */this.eachMonthOfInterval=e=>{return this.overrides?.eachMonthOfInterval?this.overrides.eachMonthOfInterval(e):tm(e)};/**
         * Returns the years between the given dates.
         *
         * @since 9.11.1
         * @param interval The interval to get the years for.
         * @returns The array of years in the interval.
         */this.eachYearOfInterval=e=>{const t=this.overrides?.eachYearOfInterval?this.overrides.eachYearOfInterval(e):tb(e);// Remove duplicates that may happen across DST transitions (e.g., "America/Sao_Paulo")
// See https://github.com/date-fns/tz/issues/72
const r=new Set(t.map(e=>this.getYear(e)));if(r.size===t.length){// No duplicates, return as is
return t}// Rebuild the array to ensure one date per year
const n=[];r.forEach(e=>{n.push(new Date(e,0,1))});return n};/**
         * Returns the end of the broadcast week for the given date.
         *
         * @param date The original date.
         * @returns The end of the broadcast week.
         */this.endOfBroadcastWeek=e=>{return this.overrides?.endOfBroadcastWeek?this.overrides.endOfBroadcastWeek(e):rU(e,this)};/**
         * Returns the end of the ISO week for the given date.
         *
         * @param date The original date.
         * @returns The end of the ISO week.
         */this.endOfISOWeek=e=>{return this.overrides?.endOfISOWeek?this.overrides.endOfISOWeek(e):tA(e)};/**
         * Returns the end of the month for the given date.
         *
         * @param date The original date.
         * @returns The end of the month.
         */this.endOfMonth=e=>{return this.overrides?.endOfMonth?this.overrides.endOfMonth(e):tM(e)};/**
         * Returns the end of the week for the given date.
         *
         * @param date The original date.
         * @returns The end of the week.
         */this.endOfWeek=(e,t)=>{return this.overrides?.endOfWeek?this.overrides.endOfWeek(e,t):tC(e,this.options)};/**
         * Returns the end of the year for the given date.
         *
         * @param date The original date.
         * @returns The end of the year.
         */this.endOfYear=e=>{return this.overrides?.endOfYear?this.overrides.endOfYear(e):tI(e)};/**
         * Formats the given date using the specified format string.
         *
         * @param date The date to format.
         * @param formatStr The format string.
         * @returns The formatted date string.
         */this.format=(e,t,r)=>{const n=this.overrides?.format?this.overrides.format(e,t,this.options):rh(e,t,this.options);if(this.options.numerals&&this.options.numerals!=="latn"){return this.replaceDigits(n)}return n};/**
         * Returns the ISO week number for the given date.
         *
         * @param date The date to get the ISO week number for.
         * @returns The ISO week number.
         */this.getISOWeek=e=>{return this.overrides?.getISOWeek?this.overrides.getISOWeek(e):tj(e)};/**
         * Returns the month of the given date.
         *
         * @param date The date to get the month for.
         * @returns The month.
         */this.getMonth=(e,t)=>{return this.overrides?.getMonth?this.overrides.getMonth(e,this.options):rv(e,this.options)};/**
         * Returns the year of the given date.
         *
         * @param date The date to get the year for.
         * @returns The year.
         */this.getYear=(e,t)=>{return this.overrides?.getYear?this.overrides.getYear(e,this.options):ry(e,this.options)};/**
         * Returns the local week number for the given date.
         *
         * @param date The date to get the week number for.
         * @returns The week number.
         */this.getWeek=(e,t)=>{return this.overrides?.getWeek?this.overrides.getWeek(e,this.options):tQ(e,this.options)};/**
         * Checks if the first date is after the second date.
         *
         * @param date The date to compare.
         * @param dateToCompare The date to compare with.
         * @returns True if the first date is after the second date.
         */this.isAfter=(e,t)=>{return this.overrides?.isAfter?this.overrides.isAfter(e,t):rw(e,t)};/**
         * Checks if the first date is before the second date.
         *
         * @param date The date to compare.
         * @param dateToCompare The date to compare with.
         * @returns True if the first date is before the second date.
         */this.isBefore=(e,t)=>{return this.overrides?.isBefore?this.overrides.isBefore(e,t):rC(e,t)};/**
         * Checks if the given value is a Date object.
         *
         * @param value The value to check.
         * @returns True if the value is a Date object.
         */this.isDate=e=>{return this.overrides?.isDate?this.overrides.isDate(e):ra(e)};/**
         * Checks if the given dates are on the same day.
         *
         * @param dateLeft The first date to compare.
         * @param dateRight The second date to compare.
         * @returns True if the dates are on the same day.
         */this.isSameDay=(e,t)=>{return this.overrides?.isSameDay?this.overrides.isSameDay(e,t):rA(e,t)};/**
         * Checks if the given dates are in the same month.
         *
         * @param dateLeft The first date to compare.
         * @param dateRight The second date to compare.
         * @returns True if the dates are in the same month.
         */this.isSameMonth=(e,t)=>{return this.overrides?.isSameMonth?this.overrides.isSameMonth(e,t):rM(e,t)};/**
         * Checks if the given dates are in the same year.
         *
         * @param dateLeft The first date to compare.
         * @param dateRight The second date to compare.
         * @returns True if the dates are in the same year.
         */this.isSameYear=(e,t)=>{return this.overrides?.isSameYear?this.overrides.isSameYear(e,t):rI(e,t)};/**
         * Returns the latest date in the given array of dates.
         *
         * @param dates The array of dates to compare.
         * @returns The latest date.
         */this.max=e=>{return this.overrides?.max?this.overrides.max(e):rT(e)};/**
         * Returns the earliest date in the given array of dates.
         *
         * @param dates The array of dates to compare.
         * @returns The earliest date.
         */this.min=e=>{return this.overrides?.min?this.overrides.min(e):rE(e)};/**
         * Sets the month of the given date.
         *
         * @param date The date to set the month on.
         * @param month The month to set (0-11).
         * @returns The new date with the month set.
         */this.setMonth=(e,t)=>{return this.overrides?.setMonth?this.overrides.setMonth(e,t):rL(e,t)};/**
         * Sets the year of the given date.
         *
         * @param date The date to set the year on.
         * @param year The year to set.
         * @returns The new date with the year set.
         */this.setYear=(e,t)=>{return this.overrides?.setYear?this.overrides.setYear(e,t):rW(e,t)};/**
         * Returns the start of the broadcast week for the given date.
         *
         * @param date The original date.
         * @returns The start of the broadcast week.
         */this.startOfBroadcastWeek=(e,t)=>{return this.overrides?.startOfBroadcastWeek?this.overrides.startOfBroadcastWeek(e,this):rq(e,this)};/**
         * Returns the start of the day for the given date.
         *
         * @param date The original date.
         * @returns The start of the day.
         */this.startOfDay=e=>{return this.overrides?.startOfDay?this.overrides.startOfDay(e):tc(e)};/**
         * Returns the start of the ISO week for the given date.
         *
         * @param date The original date.
         * @returns The start of the ISO week.
         */this.startOfISOWeek=e=>{return this.overrides?.startOfISOWeek?this.overrides.startOfISOWeek(e):tL(e)};/**
         * Returns the start of the month for the given date.
         *
         * @param date The original date.
         * @returns The start of the month.
         */this.startOfMonth=e=>{return this.overrides?.startOfMonth?this.overrides.startOfMonth(e):rK(e)};/**
         * Returns the start of the week for the given date.
         *
         * @param date The original date.
         * @returns The start of the week.
         */this.startOfWeek=(e,t)=>{return this.overrides?.startOfWeek?this.overrides.startOfWeek(e,this.options):tN(e,this.options)};/**
         * Returns the start of the year for the given date.
         *
         * @param date The original date.
         * @returns The start of the year.
         */this.startOfYear=e=>{return this.overrides?.startOfYear?this.overrides.startOfYear(e):tT(e)};this.options={locale:eE,...e};this.overrides=t}/**
     * Generates a mapping of Arabic digits (0-9) to the target numbering system
     * digits.
     *
     * @since 9.5.0
     * @returns A record mapping Arabic digits to the target numerals.
     */getDigitMap(){const{numerals:e="latn"}=this.options;// Use Intl.NumberFormat to create a formatter with the specified numbering system
const t=new Intl.NumberFormat("en-US",{numberingSystem:e});// Map Arabic digits (0-9) to the target numerals
const r={};for(let e=0;e<10;e++){r[e.toString()]=t.format(e)}return r}/**
     * Replaces Arabic digits in a string with the target numbering system digits.
     *
     * @since 9.5.0
     * @param input The string containing Arabic digits.
     * @returns The string with digits replaced.
     */replaceDigits(e){const t=this.getDigitMap();return e.replace(/\d/g,e=>t[e]||e)}/**
     * Formats a number using the configured numbering system.
     *
     * @since 9.5.0
     * @param value The number to format.
     * @returns The formatted number as a string.
     */formatNumber(e){return this.replaceDigits(e.toString())}/**
     * Returns the preferred ordering for month and year labels for the current
     * locale.
     */getMonthYearOrder(){const e=this.options.locale?.code;if(!e){return"month-first"}return rZ.yearFirstLocales.has(e)?"year-first":"month-first"}/**
     * Formats the month/year pair respecting locale conventions.
     *
     * @since 9.11.0
     */formatMonthYear(e){const{locale:t,timeZone:r,numerals:n}=this.options;const o=t?.code;if(o&&rZ.yearFirstLocales.has(o)){try{const t=new Intl.DateTimeFormat(o,{month:"long",year:"numeric",timeZone:r,numberingSystem:n});const a=t.format(e);return a}catch{// Fallback to date-fns formatting below.
}}const a=this.getMonthYearOrder()==="year-first"?"y LLLL":"LLLL y";return this.format(e,a)}}rZ.yearFirstLocales=new Set(["eu","hu","ja","ja-Hira","ja-JP","ko","ko-KR","lt","lt-LT","lv","lv-LV","mn","mn-MN","zh","zh-CN","zh-HK","zh-TW"]);/** The default locale (English). *//**
 * The default date library with English locale.
 *
 * @since 9.2.0
 */const rQ=new rZ;/**
 * @ignore
 * @deprecated Use `defaultDateLib`.
 */const rG=/* unused pure expression or super */null&&rQ;// CONCATENATED MODULE: ../tutor/node_modules/react-day-picker/dist/esm/UI.js
/**
 * Enum representing the UI elements composing DayPicker. These elements are
 * mapped to {@link CustomComponents}, {@link ClassNames}, and {@link Styles}.
 *
 * Some elements are extended by flags and modifiers.
 */var r$;(function(e){/** The root component displaying the months and the navigation bar. */e["Root"]="root";/** The Chevron SVG element used by navigation buttons and dropdowns. */e["Chevron"]="chevron";/**
     * The grid cell with the day's date. Extended by {@link DayFlag} and
     * {@link SelectionState}.
     */e["Day"]="day";/** The button containing the formatted day's date, inside the grid cell. */e["DayButton"]="day_button";/** The caption label of the month (when not showing the dropdown navigation). */e["CaptionLabel"]="caption_label";/** The container of the dropdown navigation (when enabled). */e["Dropdowns"]="dropdowns";/** The dropdown element to select for years and months. */e["Dropdown"]="dropdown";/** The container element of the dropdown. */e["DropdownRoot"]="dropdown_root";/** The root element of the footer. */e["Footer"]="footer";/** The month grid. */e["MonthGrid"]="month_grid";/** Contains the dropdown navigation or the caption label. */e["MonthCaption"]="month_caption";/** The dropdown with the months. */e["MonthsDropdown"]="months_dropdown";/** Wrapper of the month grid. */e["Month"]="month";/** The container of the displayed months. */e["Months"]="months";/** The navigation bar with the previous and next buttons. */e["Nav"]="nav";/**
     * The next month button in the navigation. *
     *
     * @since 9.1.0
     */e["NextMonthButton"]="button_next";/**
     * The previous month button in the navigation.
     *
     * @since 9.1.0
     */e["PreviousMonthButton"]="button_previous";/** The row containing the week. */e["Week"]="week";/** The group of row weeks in a month (`tbody`). */e["Weeks"]="weeks";/** The column header with the weekday. */e["Weekday"]="weekday";/** The row grouping the weekdays in the column headers. */e["Weekdays"]="weekdays";/** The cell containing the week number. */e["WeekNumber"]="week_number";/** The cell header of the week numbers column. */e["WeekNumberHeader"]="week_number_header";/** The dropdown with the years. */e["YearsDropdown"]="years_dropdown"})(r$||(r$={}));/** Enum representing flags for the {@link UI.Day} element. */var rX;(function(e){/** The day is disabled. */e["disabled"]="disabled";/** The day is hidden. */e["hidden"]="hidden";/** The day is outside the current month. */e["outside"]="outside";/** The day is focused. */e["focused"]="focused";/** The day is today. */e["today"]="today"})(rX||(rX={}));/**
 * Enum representing selection states that can be applied to the {@link UI.Day}
 * element in selection mode.
 */var rJ;(function(e){/** The day is at the end of a selected range. */e["range_end"]="range_end";/** The day is at the middle of a selected range. */e["range_middle"]="range_middle";/** The day is at the start of a selected range. */e["range_start"]="range_start";/** The day is selected. */e["selected"]="selected"})(rJ||(rJ={}));/**
 * Enum representing different animation states for transitioning between
 * months.
 */var r0;(function(e){/** The entering weeks when they appear before the exiting month. */e["weeks_before_enter"]="weeks_before_enter";/** The exiting weeks when they disappear before the entering month. */e["weeks_before_exit"]="weeks_before_exit";/** The entering weeks when they appear after the exiting month. */e["weeks_after_enter"]="weeks_after_enter";/** The exiting weeks when they disappear after the entering month. */e["weeks_after_exit"]="weeks_after_exit";/** The entering caption when it appears after the exiting month. */e["caption_after_enter"]="caption_after_enter";/** The exiting caption when it disappears after the entering month. */e["caption_after_exit"]="caption_after_exit";/** The entering caption when it appears before the exiting month. */e["caption_before_enter"]="caption_before_enter";/** The exiting caption when it disappears before the entering month. */e["caption_before_exit"]="caption_before_exit"})(r0||(r0={}));// CONCATENATED MODULE: ../tutor/node_modules/react-day-picker/dist/esm/utils/rangeIncludesDate.js
/**
 * Checks if a given date is within a specified date range.
 *
 * @since 9.0.0
 * @param range - The date range to check against.
 * @param date - The date to check.
 * @param excludeEnds - If `true`, the range's start and end dates are excluded.
 * @param dateLib - The date utility library instance.
 * @returns `true` if the date is within the range, otherwise `false`.
 * @group Utilities
 */function r1(e,t,r=false,n=rQ){let{from:o,to:a}=e;const{differenceInCalendarDays:i,isSameDay:s}=n;if(o&&a){const e=i(a,o)<0;if(e){[o,a]=[a,o]}const n=i(t,o)>=(r?1:0)&&i(a,t)>=(r?1:0);return n}if(!r&&a){return s(a,t)}if(!r&&o){return s(o,t)}return false}/**
 * @private
 * @deprecated Use {@link rangeIncludesDate} instead.
 */const r2=(e,t)=>r1(e,t,false,defaultDateLib);// CONCATENATED MODULE: ../tutor/node_modules/react-day-picker/dist/esm/utils/typeguards.js
/**
 * Checks if the given value is of type {@link DateInterval}.
 *
 * @param matcher - The value to check.
 * @returns `true` if the value is a {@link DateInterval}, otherwise `false`.
 * @group Utilities
 */function r5(e){return Boolean(e&&typeof e==="object"&&"before"in e&&"after"in e)}/**
 * Checks if the given value is of type {@link DateRange}.
 *
 * @param value - The value to check.
 * @returns `true` if the value is a {@link DateRange}, otherwise `false`.
 * @group Utilities
 */function r6(e){return Boolean(e&&typeof e==="object"&&"from"in e)}/**
 * Checks if the given value is of type {@link DateAfter}.
 *
 * @param value - The value to check.
 * @returns `true` if the value is a {@link DateAfter}, otherwise `false`.
 * @group Utilities
 */function r9(e){return Boolean(e&&typeof e==="object"&&"after"in e)}/**
 * Checks if the given value is of type {@link DateBefore}.
 *
 * @param value - The value to check.
 * @returns `true` if the value is a {@link DateBefore}, otherwise `false`.
 * @group Utilities
 */function r8(e){return Boolean(e&&typeof e==="object"&&"before"in e)}/**
 * Checks if the given value is of type {@link DayOfWeek}.
 *
 * @param value - The value to check.
 * @returns `true` if the value is a {@link DayOfWeek}, otherwise `false`.
 * @group Utilities
 */function r3(e){return Boolean(e&&typeof e==="object"&&"dayOfWeek"in e)}/**
 * Checks if the given value is an array of valid dates.
 *
 * @private
 * @param value - The value to check.
 * @param dateLib - The date utility library instance.
 * @returns `true` if the value is an array of valid dates, otherwise `false`.
 */function r7(e,t){return Array.isArray(e)&&e.every(t.isDate)};// CONCATENATED MODULE: ../tutor/node_modules/react-day-picker/dist/esm/utils/dateMatchModifiers.js
/**
 * Checks if a given date matches at least one of the specified {@link Matcher}.
 *
 * @param date - The date to check.
 * @param matchers - The matchers to check against.
 * @param dateLib - The date utility library instance.
 * @returns `true` if the date matches any of the matchers, otherwise `false`.
 * @group Utilities
 */function r4(e,t,r=rQ){const n=!Array.isArray(t)?[t]:t;const{isSameDay:o,differenceInCalendarDays:a,isAfter:i}=r;return n.some(t=>{if(typeof t==="boolean"){return t}if(r.isDate(t)){return o(e,t)}if(r7(t,r)){return t.includes(e)}if(r6(t)){return r1(t,e,false,r)}if(r3(t)){if(!Array.isArray(t.dayOfWeek)){return t.dayOfWeek===e.getDay()}return t.dayOfWeek.includes(e.getDay())}if(r5(t)){const r=a(t.before,e);const n=a(t.after,e);const o=r>0;const s=n<0;const l=i(t.before,t.after);if(l){return s&&o}else{return o||s}}if(r9(t)){return a(e,t.after)>0}if(r8(t)){return a(t.before,e)>0}if(typeof t==="function"){return t(e)}return false})}/**
 * @private
 * @deprecated Use {@link dateMatchModifiers} instead.
 */const ne=/* unused pure expression or super */null&&r4;// CONCATENATED MODULE: ../tutor/node_modules/react-day-picker/dist/esm/helpers/createGetModifiers.js
/**
 * Creates a function to retrieve the modifiers for a given day.
 *
 * This function calculates both internal and custom modifiers for each day
 * based on the provided calendar days and DayPicker props.
 *
 * @private
 * @param days The array of `CalendarDay` objects to process.
 * @param props The DayPicker props, including modifiers and configuration
 *   options.
 * @param dateLib The date library to use for date manipulation.
 * @returns A function that retrieves the modifiers for a given `CalendarDay`.
 */function nt(e,t,r,n,o){const{disabled:a,hidden:i,modifiers:s,showOutsideDays:l,broadcastCalendar:c,today:d}=t;const{isSameDay:u,isSameMonth:f,startOfMonth:p,isBefore:h,endOfMonth:g,isAfter:m}=o;const v=r&&p(r);const b=n&&g(n);const y={[rX.focused]:[],[rX.outside]:[],[rX.disabled]:[],[rX.hidden]:[],[rX.today]:[]};const _={};for(const t of e){const{date:e,displayMonth:r}=t;const n=Boolean(r&&!f(e,r));const p=Boolean(v&&h(e,v));const g=Boolean(b&&m(e,b));const w=Boolean(a&&r4(e,a,o));const x=Boolean(i&&r4(e,i,o))||p||g||// Broadcast calendar will show outside days as default
!c&&!l&&n||c&&l===false&&n;const C=u(e,d??o.today());if(n)y.outside.push(t);if(w)y.disabled.push(t);if(x)y.hidden.push(t);if(C)y.today.push(t);// Add custom modifiers
if(s){Object.keys(s).forEach(r=>{const n=s?.[r];const a=n?r4(e,n,o):false;if(!a)return;if(_[r]){_[r].push(t)}else{_[r]=[t]}})}}return e=>{// Initialize all the modifiers to false
const t={[rX.focused]:false,[rX.disabled]:false,[rX.hidden]:false,[rX.outside]:false,[rX.today]:false};const r={};// Find the modifiers for the given day
for(const r in y){const n=y[r];t[r]=n.some(t=>t===e)}for(const t in _){r[t]=_[t].some(t=>t===e)}return{...t,// custom modifiers should override all the previous ones
...r}}};// CONCATENATED MODULE: ../tutor/node_modules/react-day-picker/dist/esm/helpers/getClassNamesForModifiers.js
/**
 * Returns the class names for a day based on its modifiers.
 *
 * This function combines the base class name for the day with any class names
 * associated with active modifiers.
 *
 * @param modifiers The modifiers applied to the day.
 * @param classNames The base class names for the calendar elements.
 * @param modifiersClassNames The class names associated with specific
 *   modifiers.
 * @returns An array of class names for the day.
 */function nr(e,t,r={}){const n=Object.entries(e).filter(([,e])=>e===true).reduce((e,[n])=>{if(r[n]){e.push(r[n])}else if(t[rX[n]]){e.push(t[rX[n]])}else if(t[rJ[n]]){e.push(t[rJ[n]])}return e},[t[r$.Day]]);return n};// CONCATENATED MODULE: ../tutor/node_modules/react-day-picker/dist/esm/components/Button.js
/**
 * Render the button elements in the calendar.
 *
 * @private
 * @deprecated Use `PreviousMonthButton` or `@link NextMonthButton` instead.
 */function nn(e){return y.createElement("button",{...e})};// CONCATENATED MODULE: ../tutor/node_modules/react-day-picker/dist/esm/components/CaptionLabel.js
/**
 * Render the label in the month caption.
 *
 * @group Components
 * @see https://daypicker.dev/guides/custom-components
 */function no(e){return y.createElement("span",{...e})};// CONCATENATED MODULE: ../tutor/node_modules/react-day-picker/dist/esm/components/Chevron.js
/**
 * Render the chevron icon used in the navigation buttons and dropdowns.
 *
 * @group Components
 * @see https://daypicker.dev/guides/custom-components
 */function na(e){const{size:t=24,orientation:r="left",className:n}=e;return(// biome-ignore lint/a11y/noSvgWithoutTitle: handled by the parent component
y.createElement("svg",{className:n,width:t,height:t,viewBox:"0 0 24 24"},r==="up"&&y.createElement("polygon",{points:"6.77 17 12.5 11.43 18.24 17 20 15.28 12.5 8 5 15.28"}),r==="down"&&y.createElement("polygon",{points:"6.77 8 12.5 13.57 18.24 8 20 9.72 12.5 17 5 9.72"}),r==="left"&&y.createElement("polygon",{points:"16 18.112 9.81111111 12 16 5.87733333 14.0888889 4 6 12 14.0888889 20"}),r==="right"&&y.createElement("polygon",{points:"8 18.112 14.18888889 12 8 5.87733333 9.91111111 4 18 12 9.91111111 20"})))};// CONCATENATED MODULE: ../tutor/node_modules/react-day-picker/dist/esm/components/Day.js
/**
 * Render a grid cell for a specific day in the calendar.
 *
 * Handles interaction and focus for the day. If you only need to change the
 * content of the day cell, consider swapping the `DayButton` component
 * instead.
 *
 * @group Components
 * @see https://daypicker.dev/guides/custom-components
 */function ni(e){const{day:t,modifiers:r,...n}=e;return y.createElement("td",{...n})};// CONCATENATED MODULE: ../tutor/node_modules/react-day-picker/dist/esm/components/DayButton.js
/**
 * Render a button for a specific day in the calendar.
 *
 * @group Components
 * @see https://daypicker.dev/guides/custom-components
 */function ns(e){const{day:t,modifiers:r,...n}=e;const o=y.useRef(null);y.useEffect(()=>{if(r.focused)o.current?.focus()},[r.focused]);return y.createElement("button",{ref:o,...n})};// CONCATENATED MODULE: ../tutor/node_modules/react-day-picker/dist/esm/components/Dropdown.js
/**
 * Render a dropdown component for navigation in the calendar.
 *
 * @group Components
 * @see https://daypicker.dev/guides/custom-components
 */function nl(e){const{options:t,className:r,components:n,classNames:o,...a}=e;const i=[o[r$.Dropdown],r].join(" ");const s=t?.find(({value:e})=>e===a.value);return y.createElement("span",{"data-disabled":a.disabled,className:o[r$.DropdownRoot]},y.createElement(n.Select,{className:i,...a},t?.map(({value:e,label:t,disabled:r})=>y.createElement(n.Option,{key:e,value:e,disabled:r},t))),y.createElement("span",{className:o[r$.CaptionLabel],"aria-hidden":true},s?.label,y.createElement(n.Chevron,{orientation:"down",size:18,className:o[r$.Chevron]})))};// CONCATENATED MODULE: ../tutor/node_modules/react-day-picker/dist/esm/components/DropdownNav.js
/**
 * Render the navigation dropdowns for the calendar.
 *
 * @group Components
 * @see https://daypicker.dev/guides/custom-components
 */function nc(e){return y.createElement("div",{...e})};// CONCATENATED MODULE: ../tutor/node_modules/react-day-picker/dist/esm/components/Footer.js
/**
 * Render the footer of the calendar.
 *
 * @group Components
 * @see https://daypicker.dev/guides/custom-components
 */function nd(e){return y.createElement("div",{...e})};// CONCATENATED MODULE: ../tutor/node_modules/react-day-picker/dist/esm/components/Month.js
/**
 * Render the grid with the weekday header row and the weeks for a specific
 * month.
 *
 * @group Components
 * @see https://daypicker.dev/guides/custom-components
 */function nu(e){const{calendarMonth:t,displayIndex:r,...n}=e;return y.createElement("div",{...n},e.children)};// CONCATENATED MODULE: ../tutor/node_modules/react-day-picker/dist/esm/components/MonthCaption.js
/**
 * Render the caption for a month in the calendar.
 *
 * @group Components
 * @see https://daypicker.dev/guides/custom-components
 */function nf(e){const{calendarMonth:t,displayIndex:r,...n}=e;return y.createElement("div",{...n})};// CONCATENATED MODULE: ../tutor/node_modules/react-day-picker/dist/esm/components/MonthGrid.js
/**
 * Render the grid of days for a specific month.
 *
 * @group Components
 * @see https://daypicker.dev/guides/custom-components
 */function np(e){return y.createElement("table",{...e})};// CONCATENATED MODULE: ../tutor/node_modules/react-day-picker/dist/esm/components/Months.js
/**
 * Render a container wrapping the month grids.
 *
 * @group Components
 * @see https://daypicker.dev/guides/custom-components
 */function nh(e){return y.createElement("div",{...e})};// CONCATENATED MODULE: ../tutor/node_modules/react-day-picker/dist/esm/useDayPicker.js
/** @ignore */const ng=(0,y.createContext)(undefined);/**
 * Provides access to the DayPicker context, which includes properties and
 * methods to interact with the DayPicker component. This hook must be used
 * within a custom component.
 *
 * @template T - Use this type to refine the returned context type with a
 *   specific selection mode.
 * @returns The context to work with DayPicker.
 * @throws {Error} If the hook is used outside of a DayPicker provider.
 * @group Hooks
 * @see https://daypicker.dev/guides/custom-components
 */function nm(){const e=(0,y.useContext)(ng);if(e===undefined){throw new Error("useDayPicker() must be used within a custom component.")}return e};// CONCATENATED MODULE: ../tutor/node_modules/react-day-picker/dist/esm/components/MonthsDropdown.js
/**
 * Render a dropdown to navigate between months in the calendar.
 *
 * @group Components
 * @see https://daypicker.dev/guides/custom-components
 */function nv(e){const{components:t}=nm();return y.createElement(t.Dropdown,{...e})};// CONCATENATED MODULE: ../tutor/node_modules/react-day-picker/dist/esm/components/Nav.js
/**
 * Render the navigation toolbar with buttons to navigate between months.
 *
 * @group Components
 * @see https://daypicker.dev/guides/custom-components
 */function nb(e){const{onPreviousClick:t,onNextClick:r,previousMonth:n,nextMonth:o,...a}=e;const{components:i,classNames:s,labels:{labelPrevious:l,labelNext:c}}=nm();const d=(0,y.useCallback)(e=>{if(o){r?.(e)}},[o,r]);const u=(0,y.useCallback)(e=>{if(n){t?.(e)}},[n,t]);return y.createElement("nav",{...a},y.createElement(i.PreviousMonthButton,{type:"button",className:s[r$.PreviousMonthButton],tabIndex:n?undefined:-1,"aria-disabled":n?undefined:true,"aria-label":l(n),onClick:u},y.createElement(i.Chevron,{disabled:n?undefined:true,className:s[r$.Chevron],orientation:"left"})),y.createElement(i.NextMonthButton,{type:"button",className:s[r$.NextMonthButton],tabIndex:o?undefined:-1,"aria-disabled":o?undefined:true,"aria-label":c(o),onClick:d},y.createElement(i.Chevron,{disabled:o?undefined:true,orientation:"right",className:s[r$.Chevron]})))};// CONCATENATED MODULE: ../tutor/node_modules/react-day-picker/dist/esm/components/NextMonthButton.js
/**
 * Render the button to navigate to the next month in the calendar.
 *
 * @group Components
 * @see https://daypicker.dev/guides/custom-components
 */function ny(e){const{components:t}=nm();return y.createElement(t.Button,{...e})};// CONCATENATED MODULE: ../tutor/node_modules/react-day-picker/dist/esm/components/Option.js
/**
 * Render an `option` element.
 *
 * @group Components
 * @see https://daypicker.dev/guides/custom-components
 */function n_(e){return y.createElement("option",{...e})};// CONCATENATED MODULE: ../tutor/node_modules/react-day-picker/dist/esm/components/PreviousMonthButton.js
/**
 * Render the button to navigate to the previous month in the calendar.
 *
 * @group Components
 * @see https://daypicker.dev/guides/custom-components
 */function nw(e){const{components:t}=nm();return y.createElement(t.Button,{...e})};// CONCATENATED MODULE: ../tutor/node_modules/react-day-picker/dist/esm/components/Root.js
/**
 * Render the root element of the calendar.
 *
 * @group Components
 * @see https://daypicker.dev/guides/custom-components
 */function nx(e){const{rootRef:t,...r}=e;return y.createElement("div",{...r,ref:t})};// CONCATENATED MODULE: ../tutor/node_modules/react-day-picker/dist/esm/components/Select.js
/**
 * Render a `select` element.
 *
 * @group Components
 * @see https://daypicker.dev/guides/custom-components
 */function nC(e){return y.createElement("select",{...e})};// CONCATENATED MODULE: ../tutor/node_modules/react-day-picker/dist/esm/components/Week.js
/**
 * Render a table row representing a week in the calendar.
 *
 * @group Components
 * @see https://daypicker.dev/guides/custom-components
 */function nk(e){const{week:t,...r}=e;return y.createElement("tr",{...r})};// CONCATENATED MODULE: ../tutor/node_modules/react-day-picker/dist/esm/components/Weekday.js
/**
 * Render a table header cell with the name of a weekday (e.g., "Mo", "Tu").
 *
 * @group Components
 * @see https://daypicker.dev/guides/custom-components
 */function nA(e){return y.createElement("th",{...e})};// CONCATENATED MODULE: ../tutor/node_modules/react-day-picker/dist/esm/components/Weekdays.js
/**
 * Render the table row containing the weekday names.
 *
 * @group Components
 * @see https://daypicker.dev/guides/custom-components
 */function nY(e){return y.createElement("thead",{"aria-hidden":true},y.createElement("tr",{...e}))};// CONCATENATED MODULE: ../tutor/node_modules/react-day-picker/dist/esm/components/WeekNumber.js
/**
 * Render a table cell displaying the number of the week.
 *
 * @group Components
 * @see https://daypicker.dev/guides/custom-components
 */function nM(e){const{week:t,...r}=e;return y.createElement("th",{...r})};// CONCATENATED MODULE: ../tutor/node_modules/react-day-picker/dist/esm/components/WeekNumberHeader.js
/**
 * Render the header cell for the week numbers column.
 *
 * @group Components
 * @see https://daypicker.dev/guides/custom-components
 */function nD(e){return y.createElement("th",{...e})};// CONCATENATED MODULE: ../tutor/node_modules/react-day-picker/dist/esm/components/Weeks.js
/**
 * Render the container for the weeks in the month grid.
 *
 * @group Components
 * @see https://daypicker.dev/guides/custom-components
 */function nI(e){return y.createElement("tbody",{...e})};// CONCATENATED MODULE: ../tutor/node_modules/react-day-picker/dist/esm/components/YearsDropdown.js
/**
 * Render a dropdown to navigate between years in the calendar.
 *
 * @group Components
 * @see https://daypicker.dev/guides/custom-components
 */function nS(e){const{components:t}=nm();return y.createElement(t.Dropdown,{...e})};// CONCATENATED MODULE: ../tutor/node_modules/react-day-picker/dist/esm/components/custom-components.js
;// CONCATENATED MODULE: ../tutor/node_modules/react-day-picker/dist/esm/helpers/getComponents.js
/**
 * Merges custom components from the props with the default components.
 *
 * This function ensures that any custom components provided in the props
 * override the default components.
 *
 * @param customComponents The custom components provided in the DayPicker
 *   props.
 * @returns An object containing the merged components.
 */function nT(e){return{...n,...e}};// CONCATENATED MODULE: ../tutor/node_modules/react-day-picker/dist/esm/helpers/getDataAttributes.js
/**
 * Extracts `data-` attributes from the DayPicker props.
 *
 * This function collects all `data-` attributes from the props and adds
 * additional attributes based on the DayPicker configuration.
 *
 * @param props The DayPicker props.
 * @returns An object containing the `data-` attributes.
 */function nF(e){const t={"data-mode":e.mode??undefined,"data-required":"required"in e?e.required:undefined,"data-multiple-months":e.numberOfMonths&&e.numberOfMonths>1||undefined,"data-week-numbers":e.showWeekNumber||undefined,"data-broadcast-calendar":e.broadcastCalendar||undefined,"data-nav-layout":e.navLayout||undefined};Object.entries(e).forEach(([e,r])=>{if(e.startsWith("data-")){t[e]=r}});return t};// CONCATENATED MODULE: ../tutor/node_modules/react-day-picker/dist/esm/helpers/getDefaultClassNames.js
/**
 * Returns the default class names for the UI elements.
 *
 * This function generates a mapping of default class names for various UI
 * elements, day flags, selection states, and animations.
 *
 * @returns An object containing the default class names.
 * @group Utilities
 */function nE(){const e={};for(const t in r$){e[r$[t]]=`rdp-${r$[t]}`}for(const t in rX){e[rX[t]]=`rdp-${rX[t]}`}for(const t in rJ){e[rJ[t]]=`rdp-${rJ[t]}`}for(const t in r0){e[r0[t]]=`rdp-${r0[t]}`}return e};// CONCATENATED MODULE: ../tutor/node_modules/react-day-picker/dist/esm/formatters/formatCaption.js
/**
 * Formats the caption of the month.
 *
 * @defaultValue Locale-specific month/year order (e.g., "November 2022").
 * @param month The date representing the month.
 * @param options Configuration options for the date library.
 * @param dateLib The date library to use for formatting. If not provided, a new
 *   instance is created.
 * @returns The formatted caption as a string.
 * @group Formatters
 * @see https://daypicker.dev/docs/translation#custom-formatters
 */function nH(e,t,r){const n=r??new rZ(t);return n.formatMonthYear(e)}/**
 * @private
 * @deprecated Use {@link formatCaption} instead.
 * @group Formatters
 */const nN=nH;// CONCATENATED MODULE: ../tutor/node_modules/react-day-picker/dist/esm/formatters/formatDay.js
/**
 * Formats the day date shown in the day cell.
 *
 * @defaultValue `d` (e.g., "1").
 * @param date The date to format.
 * @param options Configuration options for the date library.
 * @param dateLib The date library to use for formatting. If not provided, a new
 *   instance is created.
 * @returns The formatted day as a string.
 * @group Formatters
 * @see https://daypicker.dev/docs/translation#custom-formatters
 */function nO(e,t,r){return(r??new rZ(t)).format(e,"d")};// CONCATENATED MODULE: ../tutor/node_modules/react-day-picker/dist/esm/formatters/formatMonthDropdown.js
/**
 * Formats the month for the dropdown option label.
 *
 * @defaultValue The localized full month name.
 * @param month The date representing the month.
 * @param dateLib The date library to use for formatting. Defaults to
 *   `defaultDateLib`.
 * @returns The formatted month name as a string.
 * @group Formatters
 * @see https://daypicker.dev/docs/translation#custom-formatters
 */function nL(e,t=rQ){return t.format(e,"LLLL")};// CONCATENATED MODULE: ../tutor/node_modules/react-day-picker/dist/esm/formatters/formatWeekdayName.js
/**
 * Formats the name of a weekday to be displayed in the weekdays header.
 *
 * @defaultValue `cccccc` (e.g., "Mo" for Monday).
 * @param weekday The date representing the weekday.
 * @param options Configuration options for the date library.
 * @param dateLib The date library to use for formatting. If not provided, a new
 *   instance is created.
 * @returns The formatted weekday name as a string.
 * @group Formatters
 * @see https://daypicker.dev/docs/translation#custom-formatters
 */function nV(e,t,r){return(r??new rZ(t)).format(e,"cccccc")};// CONCATENATED MODULE: ../tutor/node_modules/react-day-picker/dist/esm/formatters/formatWeekNumber.js
/**
 * Formats the week number.
 *
 * @defaultValue The week number as a string, with a leading zero for single-digit numbers.
 * @param weekNumber The week number to format.
 * @param dateLib The date library to use for formatting. Defaults to
 *   `defaultDateLib`.
 * @returns The formatted week number as a string.
 * @group Formatters
 * @see https://daypicker.dev/docs/translation#custom-formatters
 */function nW(e,t=rQ){if(e<10){return t.formatNumber(`0${e.toLocaleString()}`)}return t.formatNumber(`${e.toLocaleString()}`)};// CONCATENATED MODULE: ../tutor/node_modules/react-day-picker/dist/esm/formatters/formatWeekNumberHeader.js
/**
 * Formats the header for the week number column.
 *
 * @defaultValue An empty string `""`.
 * @returns The formatted week number header as a string.
 * @group Formatters
 * @see https://daypicker.dev/docs/translation#custom-formatters
 */function nP(){return``};// CONCATENATED MODULE: ../tutor/node_modules/react-day-picker/dist/esm/formatters/formatYearDropdown.js
/**
 * Formats the year for the dropdown option label.
 *
 * @param year The year to format.
 * @param dateLib The date library to use for formatting. Defaults to
 *   `defaultDateLib`.
 * @returns The formatted year as a string.
 * @group Formatters
 * @see https://daypicker.dev/docs/translation#custom-formatters
 */function nK(e,t=rQ){return t.format(e,"yyyy")}/**
 * @private
 * @deprecated Use `formatYearDropdown` instead.
 * @group Formatters
 */const nB=nK;// CONCATENATED MODULE: ../tutor/node_modules/react-day-picker/dist/esm/formatters/index.js
;// CONCATENATED MODULE: ../tutor/node_modules/react-day-picker/dist/esm/helpers/getFormatters.js
/**
 * Merges custom formatters from the props with the default formatters.
 *
 * @param customFormatters The custom formatters provided in the DayPicker
 *   props.
 * @returns The merged formatters object.
 */function nj(e){if(e?.formatMonthCaption&&!e.formatCaption){e.formatCaption=e.formatMonthCaption}if(e?.formatYearCaption&&!e.formatYearDropdown){e.formatYearDropdown=e.formatYearCaption}return{...o,...e}};// CONCATENATED MODULE: ../tutor/node_modules/react-day-picker/dist/esm/helpers/getMonthOptions.js
/**
 * Returns the months to show in the dropdown.
 *
 * This function generates a list of months for the current year, formatted
 * using the provided formatter, and determines whether each month should be
 * disabled based on the navigation range.
 *
 * @param displayMonth The currently displayed month.
 * @param navStart The start date for navigation.
 * @param navEnd The end date for navigation.
 * @param formatters The formatters to use for formatting the month labels.
 * @param dateLib The date library to use for date manipulation.
 * @returns An array of dropdown options representing the months, or `undefined`
 *   if no months are available.
 */function nz(e,t,r,n,o){const{startOfMonth:a,startOfYear:i,endOfYear:s,eachMonthOfInterval:l,getMonth:c}=o;const d=l({start:i(e),end:s(e)});const u=d.map(e=>{const i=n.formatMonthDropdown(e,o);const s=c(e);const l=t&&e<a(t)||r&&e>a(r)||false;return{value:s,label:i,disabled:l}});return u};// CONCATENATED MODULE: ../tutor/node_modules/react-day-picker/dist/esm/helpers/getStyleForModifiers.js
/**
 * Returns the computed style for a day based on its modifiers.
 *
 * This function merges the base styles for the day with any styles associated
 * with active modifiers.
 *
 * @param dayModifiers The modifiers applied to the day.
 * @param styles The base styles for the calendar elements.
 * @param modifiersStyles The styles associated with specific modifiers.
 * @returns The computed style for the day.
 */function nR(e,t={},r={}){let n={...t?.[r$.Day]};Object.entries(e).filter(([,e])=>e===true).forEach(([e])=>{n={...n,...r?.[e]}});return n};// CONCATENATED MODULE: ../tutor/node_modules/react-day-picker/dist/esm/helpers/getWeekdays.js
/**
 * Generates a series of 7 days, starting from the beginning of the week, to use
 * for formatting weekday names (e.g., Monday, Tuesday, etc.).
 *
 * @param dateLib The date library to use for date manipulation.
 * @param ISOWeek Whether to use ISO week numbering (weeks start on Monday).
 * @param broadcastCalendar Whether to use the broadcast calendar (weeks start
 *   on Monday, but may include adjustments for broadcast-specific rules).
 * @returns An array of 7 dates representing the weekdays.
 */function nq(e,t,r){const n=e.today();const o=r?e.startOfBroadcastWeek(n,e):t?e.startOfISOWeek(n):e.startOfWeek(n);const a=[];for(let t=0;t<7;t++){const r=e.addDays(o,t);a.push(r)}return a};// CONCATENATED MODULE: ../tutor/node_modules/react-day-picker/dist/esm/helpers/getYearOptions.js
/**
 * Returns the years to display in the dropdown.
 *
 * This function generates a list of years between the navigation start and end
 * dates, formatted using the provided formatter.
 *
 * @param navStart The start date for navigation.
 * @param navEnd The end date for navigation.
 * @param formatters The formatters to use for formatting the year labels.
 * @param dateLib The date library to use for date manipulation.
 * @param reverse If true, reverses the order of the years (descending).
 * @returns An array of dropdown options representing the years, or `undefined`
 *   if `navStart` or `navEnd` is not provided.
 */function nU(e,t,r,n,o=false){if(!e)return undefined;if(!t)return undefined;const{startOfYear:a,endOfYear:i,eachYearOfInterval:s,getYear:l}=n;const c=a(e);const d=i(t);const u=s({start:c,end:d});if(o)u.reverse();return u.map(e=>{const t=r.formatYearDropdown(e,n);return{value:l(e),label:t,disabled:false}})};// CONCATENATED MODULE: ../tutor/node_modules/react-day-picker/dist/esm/labels/labelDayButton.js
/**
 * Generates the ARIA label for a day button.
 *
 * Use the `modifiers` argument to provide additional context for the label,
 * such as indicating if the day is "today" or "selected."
 *
 * @defaultValue The formatted date.
 * @param date - The date to format.
 * @param modifiers - The modifiers providing context for the day.
 * @param options - Optional configuration for the date formatting library.
 * @param dateLib - An optional instance of the date formatting library.
 * @returns The ARIA label for the day button.
 * @group Labels
 * @see https://daypicker.dev/docs/translation#aria-labels
 */function nZ(e,t,r,n){let o=(n??new rZ(r)).format(e,"PPPP");if(t.today)o=`Today, ${o}`;if(t.selected)o=`${o}, selected`;return o}/**
 * @ignore
 * @deprecated Use `labelDayButton` instead.
 */const nQ=nZ;// CONCATENATED MODULE: ../tutor/node_modules/react-day-picker/dist/esm/labels/labelGrid.js
/**
 * Generates the ARIA label for the month grid, which is announced when entering
 * the grid.
 *
 * @defaultValue Locale-specific month/year order (e.g., "November 2022").
 * @param date - The date representing the month.
 * @param options - Optional configuration for the date formatting library.
 * @param dateLib - An optional instance of the date formatting library.
 * @returns The ARIA label for the month grid.
 * @group Labels
 * @see https://daypicker.dev/docs/translation#aria-labels
 */function nG(e,t,r){const n=r??new rZ(t);return n.formatMonthYear(e)}/**
 * @ignore
 * @deprecated Use {@link labelGrid} instead.
 */const n$=nG;// CONCATENATED MODULE: ../tutor/node_modules/react-day-picker/dist/esm/labels/labelGridcell.js
/**
 * Generates the label for a day grid cell when the calendar is not interactive.
 *
 * @param date - The date to format.
 * @param modifiers - Optional modifiers providing context for the day.
 * @param options - Optional configuration for the date formatting library.
 * @param dateLib - An optional instance of the date formatting library.
 * @returns The label for the day grid cell.
 * @group Labels
 * @see https://daypicker.dev/docs/translation#aria-labels
 */function nX(e,t,r,n){let o=(n??new rZ(r)).format(e,"PPPP");if(t?.today){o=`Today, ${o}`}return o};// CONCATENATED MODULE: ../tutor/node_modules/react-day-picker/dist/esm/labels/labelMonthDropdown.js
/**
 * Generates the ARIA label for the months dropdown.
 *
 * @defaultValue `"Choose the Month"`
 * @param options - Optional configuration for the date formatting library.
 * @returns The ARIA label for the months dropdown.
 * @group Labels
 * @see https://daypicker.dev/docs/translation#aria-labels
 */function nJ(e){return"Choose the Month"};// CONCATENATED MODULE: ../tutor/node_modules/react-day-picker/dist/esm/labels/labelNav.js
/**
 * Generates the ARIA label for the navigation toolbar.
 *
 * @defaultValue `""`
 * @returns The ARIA label for the navigation toolbar.
 * @group Labels
 * @see https://daypicker.dev/docs/translation#aria-labels
 */function n0(){return""};// CONCATENATED MODULE: ../tutor/node_modules/react-day-picker/dist/esm/labels/labelNext.js
/**
 * Generates the ARIA label for the "next month" button.
 *
 * @defaultValue `"Go to the Next Month"`
 * @param month - The date representing the next month, or `undefined` if there
 *   is no next month.
 * @returns The ARIA label for the "next month" button.
 * @group Labels
 * @see https://daypicker.dev/docs/translation#aria-labels
 */function n1(e){return"Go to the Next Month"};// CONCATENATED MODULE: ../tutor/node_modules/react-day-picker/dist/esm/labels/labelPrevious.js
/**
 * Generates the ARIA label for the "previous month" button.
 *
 * @defaultValue `"Go to the Previous Month"`
 * @param month - The date representing the previous month, or `undefined` if
 *   there is no previous month.
 * @returns The ARIA label for the "previous month" button.
 * @group Labels
 * @see https://daypicker.dev/docs/translation#aria-labels
 */function n2(e){return"Go to the Previous Month"};// CONCATENATED MODULE: ../tutor/node_modules/react-day-picker/dist/esm/labels/labelWeekday.js
/**
 * Generates the ARIA label for a weekday column header.
 *
 * @defaultValue `"Monday", "Tuesday", "Wednesday", "Thursday", "Friday", "Saturday", "Sunday"`
 * @param date - The date representing the weekday.
 * @param options - Optional configuration for the date formatting library.
 * @param dateLib - An optional instance of the date formatting library.
 * @returns The ARIA label for the weekday column header.
 * @group Labels
 * @see https://daypicker.dev/docs/translation#aria-labels
 */function n5(e,t,r){return(r??new rZ(t)).format(e,"cccc")};// CONCATENATED MODULE: ../tutor/node_modules/react-day-picker/dist/esm/labels/labelWeekNumber.js
/**
 * Generates the ARIA label for the week number cell (the first cell in a row).
 *
 * @defaultValue `Week ${weekNumber}`
 * @param weekNumber - The number of the week.
 * @param options - Optional configuration for the date formatting library.
 * @returns The ARIA label for the week number cell.
 * @group Labels
 * @see https://daypicker.dev/docs/translation#aria-labels
 */function n6(e,t){return`Week ${e}`};// CONCATENATED MODULE: ../tutor/node_modules/react-day-picker/dist/esm/labels/labelWeekNumberHeader.js
/**
 * Generates the ARIA label for the week number header element.
 *
 * @defaultValue `"Week Number"`
 * @param options - Optional configuration for the date formatting library.
 * @returns The ARIA label for the week number header.
 * @group Labels
 * @see https://daypicker.dev/docs/translation#aria-labels
 */function n9(e){return"Week Number"};// CONCATENATED MODULE: ../tutor/node_modules/react-day-picker/dist/esm/labels/labelYearDropdown.js
/**
 * Generates the ARIA label for the years dropdown.
 *
 * @defaultValue `"Choose the Year"`
 * @param options - Optional configuration for the date formatting library.
 * @returns The ARIA label for the years dropdown.
 * @group Labels
 * @see https://daypicker.dev/docs/translation#aria-labels
 */function n8(e){return"Choose the Year"};// CONCATENATED MODULE: ../tutor/node_modules/react-day-picker/dist/esm/labels/index.js
;// CONCATENATED MODULE: ../tutor/node_modules/react-day-picker/dist/esm/useAnimation.js
const n3=e=>{if(e instanceof HTMLElement)return e;return null};const n7=e=>[...e.querySelectorAll("[data-animated-month]")??[]];const n4=e=>n3(e.querySelector("[data-animated-month]"));const oe=e=>n3(e.querySelector("[data-animated-caption]"));const ot=e=>n3(e.querySelector("[data-animated-weeks]"));const or=e=>n3(e.querySelector("[data-animated-nav]"));const on=e=>n3(e.querySelector("[data-animated-weekdays]"));/**
 * Handles animations for transitioning between months in the DayPicker
 * component.
 *
 * @private
 * @param rootElRef - A reference to the root element of the DayPicker
 *   component.
 * @param enabled - Whether animations are enabled.
 * @param options - Configuration options for the animation, including class
 *   names, months, focused day, and the date utility library.
 */function oo(e,t,{classNames:r,months:n,focused:o,dateLib:a}){const i=(0,y.useRef)(null);const s=(0,y.useRef)(n);const l=(0,y.useRef)(false);(0,y.useLayoutEffect)(()=>{// get previous months before updating the previous months ref
const c=s.current;// update previous months ref for next effect trigger
s.current=n;if(!t||!e.current||// safety check because the ref can be set to anything by consumers
!(e.current instanceof HTMLElement)||// validation required for the animation to work as expected
n.length===0||c.length===0||n.length!==c.length){return}const d=a.isSameMonth(n[0].date,c[0].date);const u=a.isAfter(n[0].date,c[0].date);const f=u?r[r0.caption_after_enter]:r[r0.caption_before_enter];const p=u?r[r0.weeks_after_enter]:r[r0.weeks_before_enter];// get previous root element snapshot before updating the snapshot ref
const h=i.current;// update snapshot for next effect trigger
const g=e.current.cloneNode(true);if(g instanceof HTMLElement){// if this effect is triggered while animating, we need to clean up the new root snapshot
// to put it in the same state as when not animating, to correctly animate the next month change
const e=n7(g);e.forEach(e=>{if(!(e instanceof HTMLElement))return;// remove the old month snapshots from the new root snapshot
const t=n4(e);if(t&&e.contains(t)){e.removeChild(t)}// remove animation classes from the new month snapshots
const r=oe(e);if(r){r.classList.remove(f)}const n=ot(e);if(n){n.classList.remove(p)}});i.current=g}else{i.current=null}if(l.current||d||// skip animation if a day is focused because it can cause issues to the animation and is better for a11y
o){return}const m=h instanceof HTMLElement?n7(h):[];const v=n7(e.current);if(v?.every(e=>e instanceof HTMLElement)&&m&&m.every(e=>e instanceof HTMLElement)){l.current=true;const t=[];// set isolation to isolate to isolate the stacking context during animation
e.current.style.isolation="isolate";// set z-index to 1 to ensure the nav is clickable over the other elements being animated
const n=or(e.current);if(n){n.style.zIndex="1"}v.forEach((o,a)=>{const i=m[a];if(!i){return}// animate new displayed month
o.style.position="relative";o.style.overflow="hidden";const s=oe(o);if(s){s.classList.add(f)}const c=ot(o);if(c){c.classList.add(p)}// animate new displayed month end
const d=()=>{l.current=false;if(e.current){e.current.style.isolation=""}if(n){n.style.zIndex=""}if(s){s.classList.remove(f)}if(c){c.classList.remove(p)}o.style.position="";o.style.overflow="";if(o.contains(i)){o.removeChild(i)}};t.push(d);// animate old displayed month
i.style.pointerEvents="none";i.style.position="absolute";i.style.overflow="hidden";i.setAttribute("aria-hidden","true");// hide the weekdays container of the old month and only the new one
const h=on(i);if(h){h.style.opacity="0"}const g=oe(i);if(g){g.classList.add(u?r[r0.caption_before_exit]:r[r0.caption_after_exit]);g.addEventListener("animationend",d)}const v=ot(i);if(v){v.classList.add(u?r[r0.weeks_before_exit]:r[r0.weeks_after_exit])}o.insertBefore(i,o.firstChild)})}})};// CONCATENATED MODULE: ../tutor/node_modules/react-day-picker/dist/esm/helpers/getDates.js
/**
 * Returns all the dates to display in the calendar.
 *
 * This function calculates the range of dates to display based on the provided
 * display months, constraints, and calendar configuration.
 *
 * @param displayMonths The months to display in the calendar.
 * @param maxDate The maximum date to include in the range.
 * @param props The DayPicker props, including calendar configuration options.
 * @param dateLib The date library to use for date manipulation.
 * @returns An array of dates to display in the calendar.
 */function oa(e,t,r,n){const o=e[0];const a=e[e.length-1];const{ISOWeek:i,fixedWeeks:s,broadcastCalendar:l}=r??{};const{addDays:c,differenceInCalendarDays:d,differenceInCalendarMonths:u,endOfBroadcastWeek:f,endOfISOWeek:p,endOfMonth:h,endOfWeek:g,isAfter:m,startOfBroadcastWeek:v,startOfISOWeek:b,startOfWeek:y}=n;const _=l?v(o,n):i?b(o):y(o);const w=l?f(a):i?p(h(a)):g(h(a));const x=d(w,_);const C=u(a,o)+1;const k=[];for(let e=0;e<=x;e++){const r=c(_,e);if(t&&m(r,t)){break}k.push(r)}// If fixed weeks is enabled, add the extra dates to the array
const A=l?35:42;const Y=A*C;if(s&&k.length<Y){const e=Y-k.length;for(let t=0;t<e;t++){const e=c(k[k.length-1],1);k.push(e)}}return k};// CONCATENATED MODULE: ../tutor/node_modules/react-day-picker/dist/esm/helpers/getDays.js
/**
 * Returns all the days belonging to the calendar by merging the days in the
 * weeks for each month.
 *
 * @param calendarMonths The array of calendar months.
 * @returns An array of `CalendarDay` objects representing all the days in the
 *   calendar.
 */function oi(e){const t=[];return e.reduce((e,r)=>{const n=r.weeks.reduce((e,t)=>{return e.concat(t.days.slice())},t.slice());return e.concat(n.slice())},t.slice())};// CONCATENATED MODULE: ../tutor/node_modules/react-day-picker/dist/esm/helpers/getDisplayMonths.js
/**
 * Returns the months to display in the calendar.
 *
 * @param firstDisplayedMonth The first month currently displayed in the
 *   calendar.
 * @param calendarEndMonth The latest month the user can navigate to.
 * @param props The DayPicker props, including `numberOfMonths`.
 * @param dateLib The date library to use for date manipulation.
 * @returns An array of dates representing the months to display.
 */function os(e,t,r,n){const{numberOfMonths:o=1}=r;const a=[];for(let r=0;r<o;r++){const o=n.addMonths(e,r);if(t&&o>t){break}a.push(o)}return a};// CONCATENATED MODULE: ../tutor/node_modules/react-day-picker/dist/esm/helpers/getInitialMonth.js
/**
 * Determines the initial month to display in the calendar based on the provided
 * props.
 *
 * This function calculates the starting month, considering constraints such as
 * `startMonth`, `endMonth`, and the number of months to display.
 *
 * @param props The DayPicker props, including navigation and date constraints.
 * @param dateLib The date library to use for date manipulation.
 * @returns The initial month to display.
 */function ol(e,t,r,n){const{month:o,defaultMonth:a,today:i=n.today(),numberOfMonths:s=1}=e;let l=o||a||i;const{differenceInCalendarMonths:c,addMonths:d,startOfMonth:u}=n;if(r&&c(r,l)<s-1){const e=-1*(s-1);l=d(r,e)}if(t&&c(l,t)<0){l=t}return u(l)};// CONCATENATED MODULE: ../tutor/node_modules/react-day-picker/dist/esm/classes/CalendarDay.js
/**
 * Represents a day displayed in the calendar.
 *
 * In DayPicker, a `CalendarDay` is a wrapper around a `Date` object that
 * provides additional information about the day, such as whether it belongs to
 * the displayed month.
 */class oc{constructor(e,t,r=rQ){this.date=e;this.displayMonth=t;this.outside=Boolean(t&&!r.isSameMonth(e,t));this.dateLib=r}/**
     * Checks if this day is equal to another `CalendarDay`, considering both the
     * date and the displayed month.
     *
     * @param day The `CalendarDay` to compare with.
     * @returns `true` if the days are equal, otherwise `false`.
     */isEqualTo(e){return this.dateLib.isSameDay(e.date,this.date)&&this.dateLib.isSameMonth(e.displayMonth,this.displayMonth)}};// CONCATENATED MODULE: ../tutor/node_modules/react-day-picker/dist/esm/classes/CalendarWeek.js
/**
 * Represents a week in a calendar month.
 *
 * A `CalendarWeek` contains the days within the week and the week number.
 */class od{constructor(e,t){this.days=t;this.weekNumber=e}};// CONCATENATED MODULE: ../tutor/node_modules/react-day-picker/dist/esm/classes/CalendarMonth.js
/**
 * Represents a month in a calendar year.
 *
 * A `CalendarMonth` contains the weeks within the month and the date of the
 * month.
 */class ou{constructor(e,t){this.date=e;this.weeks=t}};// CONCATENATED MODULE: ../tutor/node_modules/react-day-picker/dist/esm/helpers/getMonths.js
/**
 * Returns the months to display in the calendar.
 *
 * This function generates `CalendarMonth` objects for each month to be
 * displayed, including their weeks and days, based on the provided display
 * months and dates.
 *
 * @param displayMonths The months (as dates) to display in the calendar.
 * @param dates The dates to display in the calendar.
 * @param props Options from the DayPicker props context.
 * @param dateLib The date library to use for date manipulation.
 * @returns An array of `CalendarMonth` objects representing the months to
 *   display.
 */function of(e,t,r,n){const{addDays:o,endOfBroadcastWeek:a,endOfISOWeek:i,endOfMonth:s,endOfWeek:l,getISOWeek:c,getWeek:d,startOfBroadcastWeek:u,startOfISOWeek:f,startOfWeek:p}=n;const h=e.reduce((e,h)=>{const g=r.broadcastCalendar?u(h,n):r.ISOWeek?f(h):p(h);const m=r.broadcastCalendar?a(h):r.ISOWeek?i(s(h)):l(s(h));/** The dates to display in the month. */const v=t.filter(e=>{return e>=g&&e<=m});const b=r.broadcastCalendar?35:42;if(r.fixedWeeks&&v.length<b){const e=t.filter(e=>{const t=b-v.length;return e>m&&e<=o(m,t)});v.push(...e)}const y=v.reduce((e,t)=>{const o=r.ISOWeek?c(t):d(t);const a=e.find(e=>e.weekNumber===o);const i=new oc(t,h,n);if(!a){e.push(new od(o,[i]))}else{a.days.push(i)}return e},[]);const _=new ou(h,y);e.push(_);return e},[]);if(!r.reverseMonths){return h}else{return h.reverse()}};// CONCATENATED MODULE: ../tutor/node_modules/react-day-picker/dist/esm/helpers/getNavMonth.js
/**
 * Returns the start and end months for calendar navigation.
 *
 * @param props The DayPicker props, including navigation and layout options.
 * @param dateLib The date library to use for date manipulation.
 * @returns A tuple containing the start and end months for navigation.
 */function op(e,t){let{startMonth:r,endMonth:n}=e;const{startOfYear:o,startOfDay:a,startOfMonth:i,endOfMonth:s,addYears:l,endOfYear:c,newDate:d,today:u}=t;// Handle deprecated code
const{fromYear:f,toYear:p,fromMonth:h,toMonth:g}=e;if(!r&&h){r=h}if(!r&&f){r=t.newDate(f,0,1)}if(!n&&g){n=g}if(!n&&p){n=d(p,11,31)}const m=e.captionLayout==="dropdown"||e.captionLayout==="dropdown-years";if(r){r=i(r)}else if(f){r=d(f,0,1)}else if(!r&&m){r=o(l(e.today??u(),-100))}if(n){n=s(n)}else if(p){n=d(p,11,31)}else if(!n&&m){n=c(e.today??u())}return[r?a(r):r,n?a(n):n]};// CONCATENATED MODULE: ../tutor/node_modules/react-day-picker/dist/esm/helpers/getNextMonth.js
/**
 * Returns the next month the user can navigate to, based on the given options.
 *
 * The next month is not always the next calendar month:
 *
 * - If it is after the `calendarEndMonth`, it returns `undefined`.
 * - If paged navigation is enabled, it skips forward by the number of displayed
 *   months.
 *
 * @param firstDisplayedMonth The first month currently displayed in the
 *   calendar.
 * @param calendarEndMonth The latest month the user can navigate to.
 * @param options Navigation options, including `numberOfMonths` and
 *   `pagedNavigation`.
 * @param dateLib The date library to use for date manipulation.
 * @returns The next month, or `undefined` if navigation is not possible.
 */function oh(e,t,r,n){if(r.disableNavigation){return undefined}const{pagedNavigation:o,numberOfMonths:a=1}=r;const{startOfMonth:i,addMonths:s,differenceInCalendarMonths:l}=n;const c=o?a:1;const d=i(e);if(!t){return s(d,c)}const u=l(t,e);if(u<a){return undefined}return s(d,c)};// CONCATENATED MODULE: ../tutor/node_modules/react-day-picker/dist/esm/helpers/getPreviousMonth.js
/**
 * Returns the previous month the user can navigate to, based on the given
 * options.
 *
 * The previous month is not always the previous calendar month:
 *
 * - If it is before the `calendarStartMonth`, it returns `undefined`.
 * - If paged navigation is enabled, it skips back by the number of displayed
 *   months.
 *
 * @param firstDisplayedMonth The first month currently displayed in the
 *   calendar.
 * @param calendarStartMonth The earliest month the user can navigate to.
 * @param options Navigation options, including `numberOfMonths` and
 *   `pagedNavigation`.
 * @param dateLib The date library to use for date manipulation.
 * @returns The previous month, or `undefined` if navigation is not possible.
 */function og(e,t,r,n){if(r.disableNavigation){return undefined}const{pagedNavigation:o,numberOfMonths:a}=r;const{startOfMonth:i,addMonths:s,differenceInCalendarMonths:l}=n;const c=o?a??1:1;const d=i(e);if(!t){return s(d,-c)}const u=l(d,t);if(u<=0){return undefined}return s(d,-c)};// CONCATENATED MODULE: ../tutor/node_modules/react-day-picker/dist/esm/helpers/getWeeks.js
/**
 * Returns an array of calendar weeks from an array of calendar months.
 *
 * @param months The array of calendar months.
 * @returns An array of calendar weeks.
 */function om(e){const t=[];return e.reduce((e,t)=>{return e.concat(t.weeks.slice())},t.slice())};// CONCATENATED MODULE: ../tutor/node_modules/react-day-picker/dist/esm/helpers/useControlledValue.js
/**
 * A custom hook for managing both controlled and uncontrolled component states.
 *
 * This hook allows a component to support both controlled and uncontrolled
 * states by determining whether the `controlledValue` is provided. If it is
 * undefined, the hook falls back to using the internal state.
 *
 * @example
 *   // Uncontrolled usage
 *   const [value, setValue] = useControlledValue(0, undefined);
 *
 *   // Controlled usage
 *   const [value, setValue] = useControlledValue(0, props.value);
 *
 * @template T - The type of the value.
 * @param defaultValue The initial value for the uncontrolled state.
 * @param controlledValue The value for the controlled state. If undefined, the
 *   component will use the uncontrolled state.
 * @returns A tuple where the first element is the current value (either
 *   controlled or uncontrolled) and the second element is a setter function to
 *   update the value.
 */function ov(e,t){const[r,n]=(0,y.useState)(e);const o=t===undefined?r:t;return[o,n]};// CONCATENATED MODULE: ../tutor/node_modules/react-day-picker/dist/esm/useCalendar.js
/**
 * Provides the calendar object to work with the calendar in custom components.
 *
 * @private
 * @param props - The DayPicker props related to calendar configuration.
 * @param dateLib - The date utility library instance.
 * @returns The calendar object containing displayed days, weeks, months, and
 *   navigation methods.
 */function ob(e,t){const[r,n]=op(e,t);const{startOfMonth:o,endOfMonth:a}=t;const i=ol(e,r,n,t);const[s,l]=ov(i,// initialMonth is always computed from props.month if provided
e.month?i:undefined);// biome-ignore lint/correctness/useExhaustiveDependencies: change the initial month when the time zone changes.
(0,y.useEffect)(()=>{const o=ol(e,r,n,t);l(o)},[e.timeZone]);/** The months displayed in the calendar. */const c=os(s,n,e,t);/** The dates displayed in the calendar. */const d=oa(c,e.endMonth?a(e.endMonth):undefined,e,t);/** The Months displayed in the calendar. */const u=of(c,d,e,t);/** The Weeks displayed in the calendar. */const f=om(u);/** The Days displayed in the calendar. */const p=oi(u);const h=og(s,r,e,t);const g=oh(s,n,e,t);const{disableNavigation:m,onMonthChange:v}=e;const b=e=>f.some(t=>t.days.some(t=>t.isEqualTo(e)));const _=e=>{if(m){return}let t=o(e);// if month is before start, use the first month instead
if(r&&t<o(r)){t=o(r)}// if month is after endMonth, use the last month instead
if(n&&t>o(n)){t=o(n)}l(t);v?.(t)};const w=e=>{// is this check necessary?
if(b(e)){return}_(e.date)};const x={months:u,weeks:f,days:p,navStart:r,navEnd:n,previousMonth:h,nextMonth:g,goToMonth:_,goToDay:w};return x};// CONCATENATED MODULE: ../tutor/node_modules/react-day-picker/dist/esm/helpers/calculateFocusTarget.js
var oy;(function(e){e[e["Today"]=0]="Today";e[e["Selected"]=1]="Selected";e[e["LastFocused"]=2]="LastFocused";e[e["FocusedModifier"]=3]="FocusedModifier"})(oy||(oy={}));/**
 * Determines if a day is focusable based on its modifiers.
 *
 * A day is considered focusable if it is not disabled, hidden, or outside the
 * displayed month.
 *
 * @param modifiers The modifiers applied to the day.
 * @returns `true` if the day is focusable, otherwise `false`.
 */function o_(e){return!e[rX.disabled]&&!e[rX.hidden]&&!e[rX.outside]}/**
 * Calculates the focus target day based on priority.
 *
 * This function determines the day that should receive focus in the calendar,
 * prioritizing days with specific modifiers (e.g., "focused", "today") or
 * selection states.
 *
 * @param days The array of `CalendarDay` objects to evaluate.
 * @param getModifiers A function to retrieve the modifiers for a given day.
 * @param isSelected A function to determine if a day is selected.
 * @param lastFocused The last focused day, if any.
 * @returns The `CalendarDay` that should receive focus, or `undefined` if no
 *   focusable day is found.
 */function ow(e,t,r,n){let o;let a=-1;for(const i of e){const e=t(i);if(o_(e)){if(e[rX.focused]&&a<oy.FocusedModifier){o=i;a=oy.FocusedModifier}else if(n?.isEqualTo(i)&&a<oy.LastFocused){o=i;a=oy.LastFocused}else if(r(i.date)&&a<oy.Selected){o=i;a=oy.Selected}else if(e[rX.today]&&a<oy.Today){o=i;a=oy.Today}}}if(!o){// Return the first day that is focusable
o=e.find(e=>o_(t(e)))}return o};// CONCATENATED MODULE: ../tutor/node_modules/react-day-picker/dist/esm/helpers/getFocusableDate.js
/**
 * Calculates the next date that should be focused in the calendar.
 *
 * This function determines the next focusable date based on the movement
 * direction, constraints, and calendar configuration.
 *
 * @param moveBy The unit of movement (e.g., "day", "week").
 * @param moveDir The direction of movement ("before" or "after").
 * @param refDate The reference date from which to calculate the next focusable
 *   date.
 * @param navStart The earliest date the user can navigate to.
 * @param navEnd The latest date the user can navigate to.
 * @param props The DayPicker props, including calendar configuration options.
 * @param dateLib The date library to use for date manipulation.
 * @returns The next focusable date.
 */function ox(e,t,r,n,o,a,i){const{ISOWeek:s,broadcastCalendar:l}=a;const{addDays:c,addMonths:d,addWeeks:u,addYears:f,endOfBroadcastWeek:p,endOfISOWeek:h,endOfWeek:g,max:m,min:v,startOfBroadcastWeek:b,startOfISOWeek:y,startOfWeek:_}=i;const w={day:c,week:u,month:d,year:f,startOfWeek:e=>l?b(e,i):s?y(e):_(e),endOfWeek:e=>l?p(e):s?h(e):g(e)};let x=w[e](r,t==="after"?1:-1);if(t==="before"&&n){x=m([n,x])}else if(t==="after"&&o){x=v([o,x])}return x};// CONCATENATED MODULE: ../tutor/node_modules/react-day-picker/dist/esm/helpers/getNextFocus.js
/**
 * Determines the next focusable day in the calendar.
 *
 * This function recursively calculates the next focusable day based on the
 * movement direction and modifiers applied to the days.
 *
 * @param moveBy The unit of movement (e.g., "day", "week").
 * @param moveDir The direction of movement ("before" or "after").
 * @param refDay The currently focused day.
 * @param calendarStartMonth The earliest month the user can navigate to.
 * @param calendarEndMonth The latest month the user can navigate to.
 * @param props The DayPicker props, including modifiers and configuration
 *   options.
 * @param dateLib The date library to use for date manipulation.
 * @param attempt The current recursion attempt (used to limit recursion depth).
 * @returns The next focusable day, or `undefined` if no focusable day is found.
 */function oC(e,t,r,n,o,a,i,s=0){if(s>365){// Limit the recursion to 365 attempts
return undefined}const l=ox(e,t,r.date,n,o,a,i);const c=Boolean(a.disabled&&r4(l,a.disabled,i));const d=Boolean(a.hidden&&r4(l,a.hidden,i));const u=l;const f=new oc(l,u,i);if(!c&&!d){return f}// Recursively attempt to find the next focusable date
return oC(e,t,f,n,o,a,i,s+1)};// CONCATENATED MODULE: ../tutor/node_modules/react-day-picker/dist/esm/useFocus.js
/**
 * Manages focus behavior for the DayPicker component, including setting,
 * moving, and blurring focus on calendar days.
 *
 * @template T - The type of DayPicker props.
 * @param props - The DayPicker props.
 * @param calendar - The calendar object containing the displayed days and
 *   months.
 * @param getModifiers - A function to retrieve modifiers for a given day.
 * @param isSelected - A function to check if a date is selected.
 * @param dateLib - The date utility library instance.
 * @returns An object containing focus-related methods and the currently focused
 *   day.
 */function ok(e,t,r,n,o){const{autoFocus:a}=e;const[i,s]=(0,y.useState)();const l=ow(t.days,r,n||(()=>false),i);const[c,d]=(0,y.useState)(a?l:undefined);const u=()=>{s(c);d(undefined)};const f=(r,n)=>{if(!c)return;const a=oC(r,n,c,t.navStart,t.navEnd,e,o);if(!a)return;if(e.disableNavigation){const e=t.days.some(e=>e.isEqualTo(a));if(!e){return}}t.goToDay(a);d(a)};const p=e=>{return Boolean(l?.isEqualTo(e))};const h={isFocusTarget:p,setFocused:d,focused:c,blur:u,moveFocus:f};return h};// CONCATENATED MODULE: ../tutor/node_modules/react-day-picker/dist/esm/selection/useMulti.js
/**
 * Hook to manage multiple-date selection in the DayPicker component.
 *
 * @template T - The type of DayPicker props.
 * @param props - The DayPicker props.
 * @param dateLib - The date utility library instance.
 * @returns An object containing the selected dates, a function to select dates,
 *   and a function to check if a date is selected.
 */function oA(e,t){const{selected:r,required:n,onSelect:o}=e;const[a,i]=ov(r,o?r:undefined);const s=!o?a:r;const{isSameDay:l}=t;const c=e=>{return s?.some(t=>l(t,e))??false};const{min:d,max:u}=e;const f=(e,t,r)=>{let a=[...s??[]];if(c(e)){if(s?.length===d){// Min value reached, do nothing
return}if(n&&s?.length===1){// Required value already selected do nothing
return}a=s?.filter(t=>!l(t,e))}else{if(s?.length===u){// Max value reached, reset the selection to date
a=[e]}else{// Add the date to the selection
a=[...a,e]}}if(!o){i(a)}o?.(a,e,t,r);return a};return{selected:s,select:f,isSelected:c}};// CONCATENATED MODULE: ../tutor/node_modules/react-day-picker/dist/esm/utils/addToRange.js
/**
 * Adds a date to an existing range, considering constraints like minimum and
 * maximum range size.
 *
 * @param date - The date to add to the range.
 * @param initialRange - The initial range to which the date will be added.
 * @param min - The minimum number of days in the range.
 * @param max - The maximum number of days in the range.
 * @param required - Whether the range must always include at least one date.
 * @param dateLib - The date utility library instance.
 * @returns The updated date range, or `undefined` if the range is cleared.
 * @group Utilities
 */function oY(e,t,r=0,n=0,o=false,a=rQ){const{from:i,to:s}=t||{};const{isSameDay:l,isAfter:c,isBefore:d}=a;let u;if(!i&&!s){// the range is empty, add the date
u={from:e,to:r>0?undefined:e}}else if(i&&!s){// adding date to an incomplete range
if(l(i,e)){// adding a date equal to the start of the range
if(r===0){u={from:i,to:e}}else if(o){u={from:i,to:undefined}}else{u=undefined}}else if(d(e,i)){// adding a date before the start of the range
u={from:e,to:i}}else{// adding a date after the start of the range
u={from:i,to:e}}}else if(i&&s){// adding date to a complete range
if(l(i,e)&&l(s,e)){// adding a date that is equal to both start and end of the range
if(o){u={from:i,to:s}}else{u=undefined}}else if(l(i,e)){// adding a date equal to the the start of the range
u={from:i,to:r>0?undefined:e}}else if(l(s,e)){// adding a dare equal to the end of the range
u={from:e,to:r>0?undefined:e}}else if(d(e,i)){// adding a date before the start of the range
u={from:e,to:s}}else if(c(e,i)){// adding a date after the start of the range
u={from:i,to:e}}else if(c(e,s)){// adding a date after the end of the range
u={from:i,to:e}}else{throw new Error("Invalid range")}}// check for min / max
if(u?.from&&u?.to){const t=a.differenceInCalendarDays(u.to,u.from);if(n>0&&t>n){u={from:e,to:undefined}}else if(r>1&&t<r){u={from:e,to:undefined}}}return u};// CONCATENATED MODULE: ../tutor/node_modules/react-day-picker/dist/esm/utils/rangeContainsDayOfWeek.js
/**
 * Checks if a date range contains one or more specified days of the week.
 *
 * @since 9.2.2
 * @param range - The date range to check.
 * @param dayOfWeek - The day(s) of the week to check for (`0-6`, where `0` is
 *   Sunday).
 * @param dateLib - The date utility library instance.
 * @returns `true` if the range contains the specified day(s) of the week,
 *   otherwise `false`.
 * @group Utilities
 */function oM(e,t,r=rQ){const n=!Array.isArray(t)?[t]:t;let o=e.from;const a=r.differenceInCalendarDays(e.to,e.from);// iterate at maximum one week or the total days if the range is shorter than one week
const i=Math.min(a,6);for(let e=0;e<=i;e++){if(n.includes(o.getDay())){return true}o=r.addDays(o,1)}return false};// CONCATENATED MODULE: ../tutor/node_modules/react-day-picker/dist/esm/utils/rangeOverlaps.js
/**
 * Determines if two date ranges overlap.
 *
 * @since 9.2.2
 * @param rangeLeft - The first date range.
 * @param rangeRight - The second date range.
 * @param dateLib - The date utility library instance.
 * @returns `true` if the ranges overlap, otherwise `false`.
 * @group Utilities
 */function oD(e,t,r=rQ){return r1(e,t.from,false,r)||r1(e,t.to,false,r)||r1(t,e.from,false,r)||r1(t,e.to,false,r)};// CONCATENATED MODULE: ../tutor/node_modules/react-day-picker/dist/esm/utils/rangeContainsModifiers.js
/**
 * Checks if a date range contains dates that match the given modifiers.
 *
 * @since 9.2.2
 * @param range - The date range to check.
 * @param modifiers - The modifiers to match against.
 * @param dateLib - The date utility library instance.
 * @returns `true` if the range contains matching dates, otherwise `false`.
 * @group Utilities
 */function oI(e,t,r=rQ){const n=Array.isArray(t)?t:[t];// Defer function matchers evaluation as they are the least performant.
const o=n.filter(e=>typeof e!=="function");const a=o.some(t=>{if(typeof t==="boolean")return t;if(r.isDate(t)){return r1(e,t,false,r)}if(r7(t,r)){return t.some(t=>r1(e,t,false,r))}if(r6(t)){if(t.from&&t.to){return oD(e,{from:t.from,to:t.to},r)}return false}if(r3(t)){return oM(e,t.dayOfWeek,r)}if(r5(t)){const n=r.isAfter(t.before,t.after);if(n){return oD(e,{from:r.addDays(t.after,1),to:r.addDays(t.before,-1)},r)}return r4(e.from,t,r)||r4(e.to,t,r)}if(r9(t)||r8(t)){return r4(e.from,t,r)||r4(e.to,t,r)}return false});if(a){return true}const i=n.filter(e=>typeof e==="function");if(i.length){let t=e.from;const n=r.differenceInCalendarDays(e.to,e.from);for(let e=0;e<=n;e++){if(i.some(e=>e(t))){return true}t=r.addDays(t,1)}}return false};// CONCATENATED MODULE: ../tutor/node_modules/react-day-picker/dist/esm/selection/useRange.js
/**
 * Hook to manage range selection in the DayPicker component.
 *
 * @template T - The type of DayPicker props.
 * @param props - The DayPicker props.
 * @param dateLib - The date utility library instance.
 * @returns An object containing the selected range, a function to select a
 *   range, and a function to check if a date is within the range.
 */function oS(e,t){const{disabled:r,excludeDisabled:n,selected:o,required:a,onSelect:i}=e;const[s,l]=ov(o,i?o:undefined);const c=!i?s:o;const d=e=>c&&r1(c,e,false,t);const u=(o,s,d)=>{const{min:u,max:f}=e;const p=o?oY(o,c,u,f,a,t):undefined;if(n&&r&&p?.from&&p.to){if(oI({from:p.from,to:p.to},r,t)){// if a disabled days is found, the range is reset
p.from=o;p.to=undefined}}if(!i){l(p)}i?.(p,o,s,d);return p};return{selected:c,select:u,isSelected:d}};// CONCATENATED MODULE: ../tutor/node_modules/react-day-picker/dist/esm/selection/useSingle.js
/**
 * Hook to manage single-date selection in the DayPicker component.
 *
 * @template T - The type of DayPicker props.
 * @param props - The DayPicker props.
 * @param dateLib - The date utility library instance.
 * @returns An object containing the selected date, a function to select a date,
 *   and a function to check if a date is selected.
 */function oT(e,t){const{selected:r,required:n,onSelect:o}=e;const[a,i]=ov(r,o?r:undefined);const s=!o?a:r;const{isSameDay:l}=t;const c=e=>{return s?l(s,e):false};const d=(e,t,r)=>{let a=e;if(!n&&s&&s&&l(e,s)){// If the date is the same, clear the selection.
a=undefined}if(!o){i(a)}if(n){o?.(a,e,t,r)}else{o?.(a,e,t,r)}return a};return{selected:s,select:d,isSelected:c}};// CONCATENATED MODULE: ../tutor/node_modules/react-day-picker/dist/esm/useSelection.js
/**
 * Determines the appropriate selection hook to use based on the selection mode
 * and returns the corresponding selection object.
 *
 * @template T - The type of DayPicker props.
 * @param props - The DayPicker props.
 * @param dateLib - The date utility library instance.
 * @returns The selection object for the specified mode, or `undefined` if no
 *   mode is set.
 */function oF(e,t){const r=oT(e,t);const n=oA(e,t);const o=oS(e,t);switch(e.mode){case"single":return r;case"multiple":return n;case"range":return o;default:return undefined}};// CONCATENATED MODULE: ../tutor/node_modules/react-day-picker/dist/esm/DayPicker.js
/**
 * Renders the DayPicker calendar component.
 *
 * @param initialProps - The props for the DayPicker component.
 * @returns The rendered DayPicker component.
 * @group DayPicker
 * @see https://daypicker.dev
 */function oE(e){let t=e;if(t.timeZone){t={...e};if(t.today){t.today=new G(t.today,t.timeZone)}if(t.month){t.month=new G(t.month,t.timeZone)}if(t.defaultMonth){t.defaultMonth=new G(t.defaultMonth,t.timeZone)}if(t.startMonth){t.startMonth=new G(t.startMonth,t.timeZone)}if(t.endMonth){t.endMonth=new G(t.endMonth,t.timeZone)}if(t.mode==="single"&&t.selected){t.selected=new G(t.selected,t.timeZone)}else if(t.mode==="multiple"&&t.selected){t.selected=t.selected?.map(e=>new G(e,t.timeZone))}else if(t.mode==="range"&&t.selected){t.selected={from:t.selected.from?new G(t.selected.from,t.timeZone):undefined,to:t.selected.to?new G(t.selected.to,t.timeZone):undefined}}}const{components:r,formatters:n,labels:o,dateLib:i,locale:s,classNames:l}=(0,y.useMemo)(()=>{const e={...eE,...t.locale};const r=new rZ({locale:e,weekStartsOn:t.broadcastCalendar?1:t.weekStartsOn,firstWeekContainsDate:t.firstWeekContainsDate,useAdditionalWeekYearTokens:t.useAdditionalWeekYearTokens,useAdditionalDayOfYearTokens:t.useAdditionalDayOfYearTokens,timeZone:t.timeZone,numerals:t.numerals},t.dateLib);return{dateLib:r,components:nT(t.components),formatters:nj(t.formatters),labels:{...a,...t.labels},locale:e,classNames:{...nE(),...t.classNames}}},[t.locale,t.broadcastCalendar,t.weekStartsOn,t.firstWeekContainsDate,t.useAdditionalWeekYearTokens,t.useAdditionalDayOfYearTokens,t.timeZone,t.numerals,t.dateLib,t.components,t.formatters,t.labels,t.classNames]);const{captionLayout:c,mode:d,navLayout:u,numberOfMonths:f=1,onDayBlur:p,onDayClick:h,onDayFocus:g,onDayKeyDown:m,onDayMouseEnter:v,onDayMouseLeave:b,onNextClick:_,onPrevClick:w,showWeekNumber:x,styles:C}=t;const{formatCaption:k,formatDay:A,formatMonthDropdown:Y,formatWeekNumber:M,formatWeekNumberHeader:D,formatWeekdayName:I,formatYearDropdown:S}=n;const T=ob(t,i);const{days:F,months:E,navStart:H,navEnd:N,previousMonth:O,nextMonth:L,goToMonth:V}=T;const W=nt(F,t,H,N,i);const{isSelected:P,select:K,selected:B}=oF(t,i)??{};const{blur:j,focused:z,isFocusTarget:R,moveFocus:q,setFocused:U}=ok(t,T,W,P??(()=>false),i);const{labelDayButton:Z,labelGridcell:Q,labelGrid:$,labelMonthDropdown:X,labelNav:J,labelPrevious:ee,labelNext:et,labelWeekday:er,labelWeekNumber:en,labelWeekNumberHeader:eo,labelYearDropdown:ea}=o;const ei=(0,y.useMemo)(()=>nq(i,t.ISOWeek),[i,t.ISOWeek]);const es=d!==undefined||h!==undefined;const el=(0,y.useCallback)(()=>{if(!O)return;V(O);w?.(O)},[O,V,w]);const ec=(0,y.useCallback)(()=>{if(!L)return;V(L);_?.(L)},[V,L,_]);const ed=(0,y.useCallback)((e,t)=>r=>{r.preventDefault();r.stopPropagation();U(e);K?.(e.date,t,r);h?.(e.date,t,r)},[K,h,U]);const eu=(0,y.useCallback)((e,t)=>r=>{U(e);g?.(e.date,t,r)},[g,U]);const ef=(0,y.useCallback)((e,t)=>r=>{j();p?.(e.date,t,r)},[j,p]);const ep=(0,y.useCallback)((e,r)=>n=>{const o={ArrowLeft:[n.shiftKey?"month":"day",t.dir==="rtl"?"after":"before"],ArrowRight:[n.shiftKey?"month":"day",t.dir==="rtl"?"before":"after"],ArrowDown:[n.shiftKey?"year":"week","after"],ArrowUp:[n.shiftKey?"year":"week","before"],PageUp:[n.shiftKey?"year":"month","before"],PageDown:[n.shiftKey?"year":"month","after"],Home:["startOfWeek","before"],End:["endOfWeek","after"]};if(o[n.key]){n.preventDefault();n.stopPropagation();const[e,t]=o[n.key];q(e,t)}m?.(e.date,r,n)},[q,m,t.dir]);const eh=(0,y.useCallback)((e,t)=>r=>{v?.(e.date,t,r)},[v]);const eg=(0,y.useCallback)((e,t)=>r=>{b?.(e.date,t,r)},[b]);const em=(0,y.useCallback)(e=>t=>{const r=Number(t.target.value);const n=i.setMonth(i.startOfMonth(e),r);V(n)},[i,V]);const ev=(0,y.useCallback)(e=>t=>{const r=Number(t.target.value);const n=i.setYear(i.startOfMonth(e),r);V(n)},[i,V]);const{className:eb,style:ey}=(0,y.useMemo)(()=>({className:[l[r$.Root],t.className].filter(Boolean).join(" "),style:{...C?.[r$.Root],...t.style}}),[l,t.className,t.style,C]);const e_=nF(t);const ew=(0,y.useRef)(null);oo(ew,Boolean(t.animate),{classNames:l,months:E,focused:z,dateLib:i});const ex={dayPickerProps:t,selected:B,select:K,isSelected:P,months:E,nextMonth:L,previousMonth:O,goToMonth:V,getModifiers:W,components:r,classNames:l,styles:C,labels:o,formatters:n};return y.createElement(ng.Provider,{value:ex},y.createElement(r.Root,{rootRef:t.animate?ew:undefined,className:eb,style:ey,dir:t.dir,id:t.id,lang:t.lang,nonce:t.nonce,title:t.title,role:t.role,"aria-label":t["aria-label"],"aria-labelledby":t["aria-labelledby"],...e_},y.createElement(r.Months,{className:l[r$.Months],style:C?.[r$.Months]},!t.hideNavigation&&!u&&y.createElement(r.Nav,{"data-animated-nav":t.animate?"true":undefined,className:l[r$.Nav],style:C?.[r$.Nav],"aria-label":J(),onPreviousClick:el,onNextClick:ec,previousMonth:O,nextMonth:L}),E.map((e,o)=>{return y.createElement(r.Month,{"data-animated-month":t.animate?"true":undefined,className:l[r$.Month],style:C?.[r$.Month],// biome-ignore lint/suspicious/noArrayIndexKey: breaks animation
key:o,displayIndex:o,calendarMonth:e},u==="around"&&!t.hideNavigation&&o===0&&y.createElement(r.PreviousMonthButton,{type:"button",className:l[r$.PreviousMonthButton],tabIndex:O?undefined:-1,"aria-disabled":O?undefined:true,"aria-label":ee(O),onClick:el,"data-animated-button":t.animate?"true":undefined},y.createElement(r.Chevron,{disabled:O?undefined:true,className:l[r$.Chevron],orientation:t.dir==="rtl"?"right":"left"})),y.createElement(r.MonthCaption,{"data-animated-caption":t.animate?"true":undefined,className:l[r$.MonthCaption],style:C?.[r$.MonthCaption],calendarMonth:e,displayIndex:o},c?.startsWith("dropdown")?y.createElement(r.DropdownNav,{className:l[r$.Dropdowns],style:C?.[r$.Dropdowns]},(()=>{const o=c==="dropdown"||c==="dropdown-months"?y.createElement(r.MonthsDropdown,{key:"month",className:l[r$.MonthsDropdown],"aria-label":X(),classNames:l,components:r,disabled:Boolean(t.disableNavigation),onChange:em(e.date),options:nz(e.date,H,N,n,i),style:C?.[r$.Dropdown],value:i.getMonth(e.date)}):y.createElement("span",{key:"month"},Y(e.date,i));const a=c==="dropdown"||c==="dropdown-years"?y.createElement(r.YearsDropdown,{key:"year",className:l[r$.YearsDropdown],"aria-label":ea(i.options),classNames:l,components:r,disabled:Boolean(t.disableNavigation),onChange:ev(e.date),options:nU(H,N,n,i,Boolean(t.reverseYears)),style:C?.[r$.Dropdown],value:i.getYear(e.date)}):y.createElement("span",{key:"year"},S(e.date,i));const s=i.getMonthYearOrder()==="year-first"?[a,o]:[o,a];return s})(),y.createElement("span",{role:"status","aria-live":"polite",style:{border:0,clip:"rect(0 0 0 0)",height:"1px",margin:"-1px",overflow:"hidden",padding:0,position:"absolute",width:"1px",whiteSpace:"nowrap",wordWrap:"normal"}},k(e.date,i.options,i))):// biome-ignore lint/a11y/useSemanticElements: breaking change
y.createElement(r.CaptionLabel,{className:l[r$.CaptionLabel],role:"status","aria-live":"polite"},k(e.date,i.options,i))),u==="around"&&!t.hideNavigation&&o===f-1&&y.createElement(r.NextMonthButton,{type:"button",className:l[r$.NextMonthButton],tabIndex:L?undefined:-1,"aria-disabled":L?undefined:true,"aria-label":et(L),onClick:ec,"data-animated-button":t.animate?"true":undefined},y.createElement(r.Chevron,{disabled:L?undefined:true,className:l[r$.Chevron],orientation:t.dir==="rtl"?"left":"right"})),o===f-1&&u==="after"&&!t.hideNavigation&&y.createElement(r.Nav,{"data-animated-nav":t.animate?"true":undefined,className:l[r$.Nav],style:C?.[r$.Nav],"aria-label":J(),onPreviousClick:el,onNextClick:ec,previousMonth:O,nextMonth:L}),y.createElement(r.MonthGrid,{role:"grid","aria-multiselectable":d==="multiple"||d==="range","aria-label":$(e.date,i.options,i)||undefined,className:l[r$.MonthGrid],style:C?.[r$.MonthGrid]},!t.hideWeekdays&&y.createElement(r.Weekdays,{"data-animated-weekdays":t.animate?"true":undefined,className:l[r$.Weekdays],style:C?.[r$.Weekdays]},x&&y.createElement(r.WeekNumberHeader,{"aria-label":eo(i.options),className:l[r$.WeekNumberHeader],style:C?.[r$.WeekNumberHeader],scope:"col"},D()),ei.map(e=>y.createElement(r.Weekday,{"aria-label":er(e,i.options,i),className:l[r$.Weekday],key:String(e),style:C?.[r$.Weekday],scope:"col"},I(e,i.options,i)))),y.createElement(r.Weeks,{"data-animated-weeks":t.animate?"true":undefined,className:l[r$.Weeks],style:C?.[r$.Weeks]},e.weeks.map(e=>{return y.createElement(r.Week,{className:l[r$.Week],key:e.weekNumber,style:C?.[r$.Week],week:e},x&&// biome-ignore lint/a11y/useSemanticElements: react component
y.createElement(r.WeekNumber,{week:e,style:C?.[r$.WeekNumber],"aria-label":en(e.weekNumber,{locale:s}),className:l[r$.WeekNumber],scope:"row",role:"rowheader"},M(e.weekNumber,i)),e.days.map(e=>{const{date:n}=e;const o=W(e);o[rX.focused]=!o.hidden&&Boolean(z?.isEqualTo(e));o[rJ.selected]=P?.(n)||o.selected;if(r6(B)){// add range modifiers
const{from:e,to:t}=B;o[rJ.range_start]=Boolean(e&&t&&i.isSameDay(n,e));o[rJ.range_end]=Boolean(e&&t&&i.isSameDay(n,t));o[rJ.range_middle]=r1(B,n,true,i)}const a=nR(o,C,t.modifiersStyles);const s=nr(o,l,t.modifiersClassNames);const c=!es&&!o.hidden?Q(n,o,i.options,i):undefined;return(// biome-ignore lint/a11y/useSemanticElements: react component
y.createElement(r.Day,{key:`${i.format(n,"yyyy-MM-dd")}_${i.format(e.displayMonth,"yyyy-MM")}`,day:e,modifiers:o,className:s.join(" "),style:a,role:"gridcell","aria-selected":o.selected||undefined,"aria-label":c,"data-day":i.format(n,"yyyy-MM-dd"),"data-month":e.outside?i.format(n,"yyyy-MM"):undefined,"data-selected":o.selected||undefined,"data-disabled":o.disabled||undefined,"data-hidden":o.hidden||undefined,"data-outside":e.outside||undefined,"data-focused":o.focused||undefined,"data-today":o.today||undefined},!o.hidden&&es?y.createElement(r.DayButton,{className:l[r$.DayButton],style:C?.[r$.DayButton],type:"button",day:e,modifiers:o,disabled:o.disabled||undefined,tabIndex:R(e)?0:-1,"aria-label":Z(n,o,i.options,i),onClick:ed(e,o),onBlur:ef(e,o),onFocus:eu(e,o),onKeyDown:ep(e,o),onMouseEnter:eh(e,o),onMouseLeave:eg(e,o)},A(n,i.options,i)):!o.hidden&&A(e.date,i.options,i)))}))}))))})),t.footer&&// biome-ignore lint/a11y/useSemanticElements: react component
y.createElement(r.Footer,{className:l[r$.Footer],style:C?.[r$.Footer],role:"status","aria-live":"polite"},t.footer)))}// EXTERNAL MODULE: ../tutor/assets/react/v3/shared/atoms/Button.tsx
var oH=r(2967);// EXTERNAL MODULE: ../tutor/assets/react/v3/shared/config/constants.ts
var oN=r(3854);// EXTERNAL MODULE: ../tutor/assets/react/v3/shared/hooks/usePortalPopover.tsx
var oO=r(7423);// EXTERNAL MODULE: ../tutor/assets/react/v3/shared/utils/style-utils.ts
var oL=r(5683);// EXTERNAL MODULE: ./node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js
var oV=r(5072);var oW=/*#__PURE__*/r.n(oV);// EXTERNAL MODULE: ./node_modules/style-loader/dist/runtime/styleDomAPI.js
var oP=r(7825);var oK=/*#__PURE__*/r.n(oP);// EXTERNAL MODULE: ./node_modules/style-loader/dist/runtime/insertBySelector.js
var oB=r(7659);var oj=/*#__PURE__*/r.n(oB);// EXTERNAL MODULE: ./node_modules/style-loader/dist/runtime/setAttributesWithoutAttributes.js
var oz=r(5056);var oR=/*#__PURE__*/r.n(oz);// EXTERNAL MODULE: ./node_modules/style-loader/dist/runtime/insertStyleElement.js
var oq=r(540);var oU=/*#__PURE__*/r.n(oq);// EXTERNAL MODULE: ./node_modules/style-loader/dist/runtime/styleTagTransform.js
var oZ=r(1113);var oQ=/*#__PURE__*/r.n(oZ);// EXTERNAL MODULE: ./node_modules/css-loader/dist/cjs.js!../tutor/node_modules/react-day-picker/src/style.css
var oG=r(1128);// CONCATENATED MODULE: ../tutor/node_modules/react-day-picker/src/style.css
var o$={};o$.styleTagTransform=oQ();o$.setAttributes=oR();o$.insert=oj().bind(null,"head");o$.domAPI=oK();o$.insertStyleElement=oU();var oX=oW()(oG/* ["default"] */.A,o$);/* export default */const oJ=oG/* ["default"] */.A&&oG/* ["default"].locals */.A.locals?oG/* ["default"].locals */.A.locals:undefined;// CONCATENATED MODULE: ../tutor/assets/react/v3/shared/components/fields/FormDateInput.tsx
// Create DayPicker formatters based on WordPress locale
var o0=()=>{if(typeof window==="undefined"||!window.wp||!window.wp.date){return}var{format:e}=wp.date;return{formatMonthDropdown:t=>e("F",t),formatMonthCaption:t=>e("F",t),formatCaption:t=>e("F",t),formatWeekdayName:t=>e("D",t)}};var o1=e=>{if(!e)return undefined;return(0,O/* ["default"] */.A)(new Date(e))?new Date(e.length===10?e+"T00:00:00":e):undefined};var o2=e=>{var{label:t,field:r,fieldState:n,disabled:o,disabledBefore:a,disabledAfter:i,loading:s,placeholder:c,helpText:u,isClearable:g=true,onChange:m,dateFormat:v=oN/* .DateFormats.monthDayYear */.UA.monthDayYear}=e;var b=(0,y.useRef)(null);var[_,w]=(0,y.useState)(false);var x=o1(r.value);var C=typeof window!=="undefined"&&window.wp&&window.wp.date;var k=x?C?window.wp.date.format("F j, Y",x):(0,L/* ["default"] */.A)(x,v):"";var{triggerRef:A,position:Y,popoverRef:M}=(0,oO/* .usePortalPopover */.tP)({isOpen:_,placement:oO/* .POPOVER_PLACEMENTS.BOTTOM_LEFT */.zA.BOTTOM_LEFT});var D=()=>{var e;w(false);(e=b.current)===null||e===void 0?void 0:e.focus()};var I=o1(a);var T=o1(i);return/*#__PURE__*/(0,l/* .jsx */.Y)(F/* ["default"] */.A,{label:t,field:r,fieldState:n,disabled:o,loading:s,placeholder:c,helpText:u,children:e=>{var{css:t}=e,n=(0,h._)(e,["css"]);return/*#__PURE__*/(0,l/* .jsxs */.FD)("div",{children:[/*#__PURE__*/(0,l/* .jsxs */.FD)("div",{css:o6.wrapper,ref:A,children:[/*#__PURE__*/(0,l/* .jsx */.Y)("input",(0,p._)((0,f._)({},n),{css:[t,o6.input],title:k,ref:e=>{r.ref(e);// @ts-ignore
b.current=e},type:"text",value:k,onClick:e=>{e.stopPropagation();w(e=>!e)},onKeyDown:e=>{if(e.key==="Enter"){e.preventDefault();w(e=>!e)}},autoComplete:"off","data-input":true})),/*#__PURE__*/(0,l/* .jsx */.Y)(S/* ["default"] */.A,{name:"calendarLine",width:30,height:32,style:o6.icon}),g&&r.value&&/*#__PURE__*/(0,l/* .jsx */.Y)(oH/* ["default"] */.A,{isIconOnly:true,"aria-label":(0,d.__)("Clear","tutor-pro"),size:"small",variant:"text",buttonCss:oL/* .styleUtils.inputClearButton */.x.inputClearButton,onClick:()=>{r.onChange("")},icon:/*#__PURE__*/(0,l/* .jsx */.Y)(S/* ["default"] */.A,{name:"times",width:12,height:12})})]}),/*#__PURE__*/(0,l/* .jsx */.Y)(oO/* .Portal */.ZL,{isOpen:_,onClickOutside:D,onEscape:D,children:/*#__PURE__*/(0,l/* .jsx */.Y)("div",{css:o6.pickerWrapper,style:{left:Y.left,top:Y.top},ref:M,children:/*#__PURE__*/(0,l/* .jsx */.Y)(oE,{dir:oN/* .isRTL */.V8?"rtl":"ltr",animate:true,mode:"single",formatters:o0(),disabled:[!!I&&{before:I},!!T&&{after:T}],selected:x,onSelect:e=>{if(e){var t=(0,L/* ["default"] */.A)(e,oN/* .DateFormats.yearMonthDay */.UA.yearMonthDay);r.onChange(t);D();if(m){m(t)}}},showOutsideDays:true,captionLayout:"dropdown",autoFocus:true,defaultMonth:x||new Date,startMonth:I||new Date(new Date().getFullYear()-10,0),endMonth:T||new Date(new Date().getFullYear()+10,11),weekStartsOn:C?window.wp.date.getSettings().l10n.startOfWeek:0})})})]})}})};/* export default */const o5=o2;var o6={wrapper:/*#__PURE__*/(0,c/* .css */.AH)("position:relative;&:hover,&:focus-within{& > button{opacity:1;}}"),input:/*#__PURE__*/(0,c/* .css */.AH)("&[data-input]{padding-left:",m/* .spacing["40"] */.YK["40"],";}"),icon:/*#__PURE__*/(0,c/* .css */.AH)("position:absolute;top:50%;left:",m/* .spacing["8"] */.YK["8"],";transform:translateY(-50%);color:",m/* .colorTokens.icon["default"] */.I6.icon["default"],";"),pickerWrapper:/*#__PURE__*/(0,c/* .css */.AH)(v/* .typography.body */.I.body("regular"),";position:absolute;background-color:",m/* .colorTokens.background.white */.I6.background.white,";box-shadow:",m/* .shadow.popover */.r7.popover,";border-radius:",m/* .borderRadius["6"] */.Vq["6"],";.rdp-root{--rdp-day-height:40px;--rdp-day-width:40px;--rdp-day_button-height:40px;--rdp-day_button-width:40px;--rdp-nav-height:40px;--rdp-today-color:",m/* .colorTokens.text.title */.I6.text.title,";--rdp-caption-font-size:",m/* .fontSize["18"] */.J["18"],";--rdp-accent-color:",m/* .colorTokens.action.primary["default"] */.I6.action.primary["default"],";--rdp-background-color:",m/* .colorTokens.background.hover */.I6.background.hover,";--rdp-accent-color-dark:",m/* .colorTokens.action.primary.active */.I6.action.primary.active,";--rdp-background-color-dark:",m/* .colorTokens.action.primary.hover */.I6.action.primary.hover,";--rdp-selected-color:",m/* .colorTokens.text.white */.I6.text.white,";--rdp-day_button-border-radius:",m/* .borderRadius.circle */.Vq.circle,";--rdp-outside-opacity:0.5;--rdp-disabled-opacity:0.25;}.rdp-months{margin:",m/* .spacing["16"] */.YK["16"],";}.rdp-month_grid{margin:0px;}.rdp-day{padding:0px;}.rdp-nav{--rdp-accent-color:",m/* .colorTokens.text.primary */.I6.text.primary,";button{border-radius:",m/* .borderRadius.circle */.Vq.circle,";&:hover,&:focus,&:active{background-color:",m/* .colorTokens.background.hover */.I6.background.hover,";color:",m/* .colorTokens.text.primary */.I6.text.primary,";}&:focus-visible:not(:disabled){--rdp-accent-color:",m/* .colorTokens.text.white */.I6.text.white,";background-color:",m/* .colorTokens.background.brand */.I6.background.brand,";}}}.rdp-dropdown_root{.rdp-caption_label{padding:",m/* .spacing["8"] */.YK["8"],";}}.rdp-today{.rdp-day_button{font-weight:",m/* .fontWeight.bold */.Wy.bold,";}}.rdp-selected{color:var(--rdp-selected-color);background-color:var(--rdp-accent-color);border-radius:",m/* .borderRadius.circle */.Vq.circle,";font-weight:",m/* .fontWeight.regular */.Wy.regular,";.rdp-day_button{&:hover,&:focus,&:active{background-color:var(--rdp-accent-color);color:",m/* .colorTokens.text.primary */.I6.text.primary,";}&:focus-visible{outline:2px solid var(--rdp-accent-color);outline-offset:2px;}&:not(.rdp-outside){color:var(--rdp-selected-color);}}}.rdp-day_button{&:hover,&:focus,&:active{background-color:var(--rdp-background-color);color:",m/* .colorTokens.text.primary */.I6.text.primary,";}&:focus-visible:not([disabled]){color:var(--rdp-selected-color);opacity:1;background-color:var(--rdp-accent-color);}}")};// CONCATENATED MODULE: ../tutor/node_modules/@swc/helpers/esm/_async_to_generator.js
function o9(e,t,r,n,o,a,i){try{var s=e[a](i);var l=s.value}catch(e){r(e);return}if(s.done)t(l);else Promise.resolve(l).then(n,o)}function o8(e){return function(){var t=this,r=arguments;return new Promise(function(n,o){var a=e.apply(t,r);function i(e){o9(a,n,o,i,s,"next",e)}function s(e){o9(a,n,o,i,s,"throw",e)}i(undefined)})}};// CONCATENATED MODULE: ../tutor/node_modules/react-hook-form/dist/index.esm.mjs
var o3=e=>e.type==="checkbox";var o7=e=>e instanceof Date;var o4=e=>e==null;const ae=e=>typeof e==="object";var at=e=>!o4(e)&&!Array.isArray(e)&&ae(e)&&!o7(e);var ar=e=>at(e)&&e.target?o3(e.target)?e.target.checked:e.target.value:e;var an=e=>e.substring(0,e.search(/\.\d+(\.|$)/))||e;var ao=(e,t)=>e.has(an(t));var aa=e=>{const t=e.constructor&&e.constructor.prototype;return at(t)&&t.hasOwnProperty("isPrototypeOf")};var ai=typeof window!=="undefined"&&typeof window.HTMLElement!=="undefined"&&typeof document!=="undefined";function as(e){let t;const r=Array.isArray(e);const n=typeof FileList!=="undefined"?e instanceof FileList:false;if(e instanceof Date){t=new Date(e)}else if(!(ai&&(e instanceof Blob||n))&&(r||at(e))){t=r?[]:Object.create(Object.getPrototypeOf(e));if(!r&&!aa(e)){t=e}else{for(const r in e){if(e.hasOwnProperty(r)){t[r]=as(e[r])}}}}else{return e}return t}var al=e=>/^\w*$/.test(e);var ac=e=>e===undefined;var ad=e=>Array.isArray(e)?e.filter(Boolean):[];var au=e=>ad(e.replace(/["|']|\]/g,"").split(/\.|\[/));var af=(e,t,r)=>{if(!t||!at(e)){return r}const n=(al(t)?[t]:au(t)).reduce((e,t)=>o4(e)?e:e[t],e);return ac(n)||n===e?ac(e[t])?r:e[t]:n};var ap=e=>typeof e==="boolean";var ah=(e,t,r)=>{let n=-1;const o=al(t)?[t]:au(t);const a=o.length;const i=a-1;while(++n<a){const t=o[n];let a=r;if(n!==i){const r=e[t];a=at(r)||Array.isArray(r)?r:!isNaN(+o[n+1])?[]:{}}if(t==="__proto__"||t==="constructor"||t==="prototype"){return}e[t]=a;e=e[t]}};const ag={BLUR:"blur",FOCUS_OUT:"focusout",CHANGE:"change"};const am={onBlur:"onBlur",onChange:"onChange",onSubmit:"onSubmit",onTouched:"onTouched",all:"all"};const av={max:"max",min:"min",maxLength:"maxLength",minLength:"minLength",pattern:"pattern",required:"required",validate:"validate"};const ab=y.createContext(null);ab.displayName="HookFormContext";/**
 * This custom hook allows you to access the form context. useFormContext is intended to be used in deeply nested structures, where it would become inconvenient to pass the context as a prop. To be used with {@link FormProvider}.
 *
 * @remarks
 * [API](https://react-hook-form.com/docs/useformcontext) • [Demo](https://codesandbox.io/s/react-hook-form-v7-form-context-ytudi)
 *
 * @returns return all useForm methods
 *
 * @example
 * ```tsx
 * function App() {
 *   const methods = useForm();
 *   const onSubmit = data => console.log(data);
 *
 *   return (
 *     <FormProvider {...methods} >
 *       <form onSubmit={methods.handleSubmit(onSubmit)}>
 *         <NestedInput />
 *         <input type="submit" />
 *       </form>
 *     </FormProvider>
 *   );
 * }
 *
 *  function NestedInput() {
 *   const { register } = useFormContext(); // retrieve all hook methods
 *   return <input {...register("test")} />;
 * }
 * ```
 */const ay=()=>y.useContext(ab);/**
 * A provider component that propagates the `useForm` methods to all children components via [React Context](https://react.dev/reference/react/useContext) API. To be used with {@link useFormContext}.
 *
 * @remarks
 * [API](https://react-hook-form.com/docs/useformcontext) • [Demo](https://codesandbox.io/s/react-hook-form-v7-form-context-ytudi)
 *
 * @param props - all useForm methods
 *
 * @example
 * ```tsx
 * function App() {
 *   const methods = useForm();
 *   const onSubmit = data => console.log(data);
 *
 *   return (
 *     <FormProvider {...methods} >
 *       <form onSubmit={methods.handleSubmit(onSubmit)}>
 *         <NestedInput />
 *         <input type="submit" />
 *       </form>
 *     </FormProvider>
 *   );
 * }
 *
 *  function NestedInput() {
 *   const { register } = useFormContext(); // retrieve all hook methods
 *   return <input {...register("test")} />;
 * }
 * ```
 */const a_=e=>{const{children:t,...r}=e;return React.createElement(ab.Provider,{value:r},t)};var aw=(e,t,r,n=true)=>{const o={defaultValues:t._defaultValues};for(const a in e){Object.defineProperty(o,a,{get:()=>{const o=a;if(t._proxyFormState[o]!==am.all){t._proxyFormState[o]=!n||am.all}r&&(r[o]=true);return e[o]}})}return o};const ax=typeof window!=="undefined"?y.useLayoutEffect:y.useEffect;/**
 * This custom hook allows you to subscribe to each form state, and isolate the re-render at the custom hook level. It has its scope in terms of form state subscription, so it would not affect other useFormState and useForm. Using this hook can reduce the re-render impact on large and complex form application.
 *
 * @remarks
 * [API](https://react-hook-form.com/docs/useformstate) • [Demo](https://codesandbox.io/s/useformstate-75xly)
 *
 * @param props - include options on specify fields to subscribe. {@link UseFormStateReturn}
 *
 * @example
 * ```tsx
 * function App() {
 *   const { register, handleSubmit, control } = useForm({
 *     defaultValues: {
 *     firstName: "firstName"
 *   }});
 *   const { dirtyFields } = useFormState({
 *     control
 *   });
 *   const onSubmit = (data) => console.log(data);
 *
 *   return (
 *     <form onSubmit={handleSubmit(onSubmit)}>
 *       <input {...register("firstName")} placeholder="First Name" />
 *       {dirtyFields.firstName && <p>Field is dirty.</p>}
 *       <input type="submit" />
 *     </form>
 *   );
 * }
 * ```
 */function aC(e){const t=ay();const{control:r=t.control,disabled:n,name:o,exact:a}=e||{};const[i,s]=y.useState(r._formState);const l=y.useRef({isDirty:false,isLoading:false,dirtyFields:false,touchedFields:false,validatingFields:false,isValidating:false,isValid:false,errors:false});ax(()=>r._subscribe({name:o,formState:l.current,exact:a,callback:e=>{!n&&s({...r._formState,...e})}}),[o,n,a]);y.useEffect(()=>{l.current.isValid&&r._setValid(true)},[r]);return y.useMemo(()=>aw(i,r,l.current,false),[i,r])}var ak=e=>typeof e==="string";var aA=(e,t,r,n,o)=>{if(ak(e)){n&&t.watch.add(e);return af(r,e,o)}if(Array.isArray(e)){return e.map(e=>(n&&t.watch.add(e),af(r,e)))}n&&(t.watchAll=true);return r};var aY=e=>o4(e)||!ae(e);function aM(e,t,r=new WeakSet){if(aY(e)||aY(t)){return Object.is(e,t)}if(o7(e)&&o7(t)){return e.getTime()===t.getTime()}const n=Object.keys(e);const o=Object.keys(t);if(n.length!==o.length){return false}if(r.has(e)||r.has(t)){return true}r.add(e);r.add(t);for(const a of n){const n=e[a];if(!o.includes(a)){return false}if(a!=="ref"){const e=t[a];if(o7(n)&&o7(e)||at(n)&&at(e)||Array.isArray(n)&&Array.isArray(e)?!aM(n,e,r):!Object.is(n,e)){return false}}}return true}/**
 * Custom hook to subscribe to field change and isolate re-rendering at the component level.
 *
 * @remarks
 *
 * [API](https://react-hook-form.com/docs/usewatch) • [Demo](https://codesandbox.io/s/react-hook-form-v7-ts-usewatch-h9i5e)
 *
 * @example
 * ```tsx
 * const { control } = useForm();
 * const values = useWatch({
 *   name: "fieldName"
 *   control,
 * })
 * ```
 */function aD(e){const t=ay();const{control:r=t.control,name:n,defaultValue:o,disabled:a,exact:i,compute:s}=e||{};const l=y.useRef(o);const c=y.useRef(s);const d=y.useRef(undefined);const u=y.useRef(r);const f=y.useRef(n);c.current=s;const[p,h]=y.useState(()=>{const e=r._getWatch(n,l.current);return c.current?c.current(e):e});const g=y.useCallback(e=>{const t=aA(n,r._names,e||r._formValues,false,l.current);return c.current?c.current(t):t},[r._formValues,r._names,n]);const m=y.useCallback(e=>{if(!a){const t=aA(n,r._names,e||r._formValues,false,l.current);if(c.current){const e=c.current(t);if(!aM(e,d.current)){h(e);d.current=e}}else{h(t)}}},[r._formValues,r._names,a,n]);ax(()=>{if(u.current!==r||!aM(f.current,n)){u.current=r;f.current=n;m()}return r._subscribe({name:n,formState:{values:true},exact:i,callback:e=>{m(e.values)}})},[r,i,n,m]);y.useEffect(()=>r._removeUnmounted());// If name or control changed for this render, synchronously reflect the
// latest value so callers (like useController) see the correct value
// immediately on the same render.
// Optimize: Check control reference first before expensive deepEqual
const v=u.current!==r;const b=f.current;// Cache the computed output to avoid duplicate calls within the same render
// We include shouldReturnImmediate in deps to ensure proper recomputation
const _=y.useMemo(()=>{if(a){return null}const e=!v&&!aM(b,n);const t=v||e;return t?g():null},[a,v,n,b,g]);return _!==null?_:p}/**
 * Custom hook to work with controlled component, this function provide you with both form and field level state. Re-render is isolated at the hook level.
 *
 * @remarks
 * [API](https://react-hook-form.com/docs/usecontroller) • [Demo](https://codesandbox.io/s/usecontroller-0o8px)
 *
 * @param props - the path name to the form field value, and validation rules.
 *
 * @returns field properties, field and form state. {@link UseControllerReturn}
 *
 * @example
 * ```tsx
 * function Input(props) {
 *   const { field, fieldState, formState } = useController(props);
 *   return (
 *     <div>
 *       <input {...field} placeholder={props.name} />
 *       <p>{fieldState.isTouched && "Touched"}</p>
 *       <p>{formState.isSubmitted ? "submitted" : ""}</p>
 *     </div>
 *   );
 * }
 * ```
 */function aI(e){const t=ay();const{name:r,disabled:n,control:o=t.control,shouldUnregister:a,defaultValue:i}=e;const s=ao(o._names.array,r);const l=y.useMemo(()=>af(o._formValues,r,af(o._defaultValues,r,i)),[o,r,i]);const c=aD({control:o,name:r,defaultValue:l,exact:true});const d=aC({control:o,name:r,exact:true});const u=y.useRef(e);const f=y.useRef(undefined);const p=y.useRef(o.register(r,{...e.rules,value:c,...ap(e.disabled)?{disabled:e.disabled}:{}}));u.current=e;const h=y.useMemo(()=>Object.defineProperties({},{invalid:{enumerable:true,get:()=>!!af(d.errors,r)},isDirty:{enumerable:true,get:()=>!!af(d.dirtyFields,r)},isTouched:{enumerable:true,get:()=>!!af(d.touchedFields,r)},isValidating:{enumerable:true,get:()=>!!af(d.validatingFields,r)},error:{enumerable:true,get:()=>af(d.errors,r)}}),[d,r]);const g=y.useCallback(e=>p.current.onChange({target:{value:ar(e),name:r},type:ag.CHANGE}),[r]);const m=y.useCallback(()=>p.current.onBlur({target:{value:af(o._formValues,r),name:r},type:ag.BLUR}),[r,o._formValues]);const v=y.useCallback(e=>{const t=af(o._fields,r);if(t&&e){t._f.ref={focus:()=>e.focus&&e.focus(),select:()=>e.select&&e.select(),setCustomValidity:t=>e.setCustomValidity(t),reportValidity:()=>e.reportValidity()}}},[o._fields,r]);const b=y.useMemo(()=>({name:r,value:c,...ap(n)||d.disabled?{disabled:d.disabled||n}:{},onChange:g,onBlur:m,ref:v}),[r,n,d.disabled,g,m,v,c]);y.useEffect(()=>{const e=o._options.shouldUnregister||a;const t=f.current;if(t&&t!==r&&!s){o.unregister(t)}o.register(r,{...u.current.rules,...ap(u.current.disabled)?{disabled:u.current.disabled}:{}});const n=(e,t)=>{const r=af(o._fields,e);if(r&&r._f){r._f.mount=t}};n(r,true);if(e){const e=as(af(o._options.defaultValues,r,u.current.defaultValue));ah(o._defaultValues,r,e);if(ac(af(o._formValues,r))){ah(o._formValues,r,e)}}!s&&o.register(r);f.current=r;return()=>{(s?e&&!o._state.action:e)?o.unregister(r):n(r,false)}},[r,o,s,a]);y.useEffect(()=>{o._setDisabledField({disabled:n,name:r})},[n,r,o]);return y.useMemo(()=>({field:b,formState:d,fieldState:h}),[b,d,h])}/**
 * Component based on `useController` hook to work with controlled component.
 *
 * @remarks
 * [API](https://react-hook-form.com/docs/usecontroller/controller) • [Demo](https://codesandbox.io/s/react-hook-form-v6-controller-ts-jwyzw) • [Video](https://www.youtube.com/watch?v=N2UNk_UCVyA)
 *
 * @param props - the path name to the form field value, and validation rules.
 *
 * @returns provide field handler functions, field and form state.
 *
 * @example
 * ```tsx
 * function App() {
 *   const { control } = useForm<FormValues>({
 *     defaultValues: {
 *       test: ""
 *     }
 *   });
 *
 *   return (
 *     <form>
 *       <Controller
 *         control={control}
 *         name="test"
 *         render={({ field: { onChange, onBlur, value, ref }, formState, fieldState }) => (
 *           <>
 *             <input
 *               onChange={onChange} // send value to hook form
 *               onBlur={onBlur} // notify when input is touched
 *               value={value} // return updated value
 *               ref={ref} // set ref for focus management
 *             />
 *             <p>{formState.isSubmitted ? "submitted" : ""}</p>
 *             <p>{fieldState.isTouched ? "touched" : ""}</p>
 *           </>
 *         )}
 *       />
 *     </form>
 *   );
 * }
 * ```
 */const aS=e=>e.render(aI(e));const aT=e=>{const t={};for(const r of Object.keys(e)){if(ae(e[r])&&e[r]!==null){const n=aT(e[r]);for(const e of Object.keys(n)){t[`${r}.${e}`]=n[e]}}else{t[r]=e[r]}}return t};const aF="post";/**
 * Form component to manage submission.
 *
 * @param props - to setup submission detail. {@link FormProps}
 *
 * @returns form component or headless render prop.
 *
 * @example
 * ```tsx
 * function App() {
 *   const { control, formState: { errors } } = useForm();
 *
 *   return (
 *     <Form action="/api" control={control}>
 *       <input {...register("name")} />
 *       <p>{errors?.root?.server && 'Server error'}</p>
 *       <button>Submit</button>
 *     </Form>
 *   );
 * }
 * ```
 */function aE(e){const t=ay();const[r,n]=React.useState(false);const{control:o=t.control,onSubmit:a,children:i,action:s,method:l=aF,headers:c,encType:d,onError:u,render:f,onSuccess:p,validateStatus:h,...g}=e;const m=async t=>{let r=false;let n="";await o.handleSubmit(async e=>{const i=new FormData;let f="";try{f=JSON.stringify(e)}catch(e){}const g=aT(o._formValues);for(const e in g){i.append(e,g[e])}if(a){await a({data:e,event:t,method:l,formData:i,formDataJson:f})}if(s){try{const e=[c&&c["Content-Type"],d].some(e=>e&&e.includes("json"));const t=await fetch(String(s),{method:l,headers:{...c,...d&&d!=="multipart/form-data"?{"Content-Type":d}:{}},body:e?f:i});if(t&&(h?!h(t.status):t.status<200||t.status>=300)){r=true;u&&u({response:t});n=String(t.status)}else{p&&p({response:t})}}catch(e){r=true;u&&u({error:e})}}})(t);if(r&&e.control){e.control._subjects.state.next({isSubmitSuccessful:false});e.control.setError("root.server",{type:n})}};React.useEffect(()=>{n(true)},[]);return f?React.createElement(React.Fragment,null,f({submit:m})):React.createElement("form",{noValidate:r,action:s,method:l,encType:d,onSubmit:m,...g},i)}var aH=(e,t,r,n,o)=>t?{...r[e],types:{...r[e]&&r[e].types?r[e].types:{},[n]:o||true}}:{};var aN=e=>Array.isArray(e)?e:[e];var aO=()=>{let e=[];const t=t=>{for(const r of e){r.next&&r.next(t)}};const r=t=>{e.push(t);return{unsubscribe:()=>{e=e.filter(e=>e!==t)}}};const n=()=>{e=[]};return{get observers(){return e},next:t,subscribe:r,unsubscribe:n}};function aL(e,t){const r={};for(const n in e){if(e.hasOwnProperty(n)){const o=e[n];const a=t[n];if(o&&at(o)&&a){const e=aL(o,a);if(at(e)){r[n]=e}}else if(e[n]){r[n]=a}}}return r}var aV=e=>at(e)&&!Object.keys(e).length;var aW=e=>e.type==="file";var aP=e=>typeof e==="function";var aK=e=>{if(!ai){return false}const t=e?e.ownerDocument:0;return e instanceof(t&&t.defaultView?t.defaultView.HTMLElement:HTMLElement)};var aB=e=>e.type===`select-multiple`;var aj=e=>e.type==="radio";var az=e=>aj(e)||o3(e);var aR=e=>aK(e)&&e.isConnected;function aq(e,t){const r=t.slice(0,-1).length;let n=0;while(n<r){e=ac(e)?n++:e[t[n++]]}return e}function aU(e){for(const t in e){if(e.hasOwnProperty(t)&&!ac(e[t])){return false}}return true}function aZ(e,t){const r=Array.isArray(t)?t:al(t)?[t]:au(t);const n=r.length===1?e:aq(e,r);const o=r.length-1;const a=r[o];if(n){delete n[a]}if(o!==0&&(at(n)&&aV(n)||Array.isArray(n)&&aU(n))){aZ(e,r.slice(0,-1))}return e}var aQ=e=>{for(const t in e){if(aP(e[t])){return true}}return false};function aG(e){return Array.isArray(e)||at(e)&&!aQ(e)}function a$(e,t={}){for(const r in e){const n=e[r];if(aG(n)){t[r]=Array.isArray(n)?[]:{};a$(n,t[r])}else if(!ac(n)){t[r]=true}}return t}function aX(e,t,r){if(!r){r=a$(t)}for(const n in e){const o=e[n];if(aG(o)){if(ac(t)||aY(r[n])){r[n]=a$(o,Array.isArray(o)?[]:{})}else{aX(o,o4(t)?{}:t[n],r[n])}}else{const e=t[n];r[n]=!aM(o,e)}}return r}const aJ={value:false,isValid:false};const a0={value:true,isValid:true};var a1=e=>{if(Array.isArray(e)){if(e.length>1){const t=e.filter(e=>e&&e.checked&&!e.disabled).map(e=>e.value);return{value:t,isValid:!!t.length}}return e[0].checked&&!e[0].disabled?e[0].attributes&&!ac(e[0].attributes.value)?ac(e[0].value)||e[0].value===""?a0:{value:e[0].value,isValid:true}:a0:aJ}return aJ};var a2=(e,{valueAsNumber:t,valueAsDate:r,setValueAs:n})=>ac(e)?e:t?e===""?NaN:e?+e:e:r&&ak(e)?new Date(e):n?n(e):e;const a5={isValid:false,value:null};var a6=e=>Array.isArray(e)?e.reduce((e,t)=>t&&t.checked&&!t.disabled?{isValid:true,value:t.value}:e,a5):a5;function a9(e){const t=e.ref;if(aW(t)){return t.files}if(aj(t)){return a6(e.refs).value}if(aB(t)){return[...t.selectedOptions].map(({value:e})=>e)}if(o3(t)){return a1(e.refs).value}return a2(ac(t.value)?e.ref.value:t.value,e)}var a8=(e,t,r,n)=>{const o={};for(const r of e){const e=af(t,r);e&&ah(o,r,e._f)}return{criteriaMode:r,names:[...e],fields:o,shouldUseNativeValidation:n}};var a3=e=>e instanceof RegExp;var a7=e=>ac(e)?e:a3(e)?e.source:at(e)?a3(e.value)?e.value.source:e.value:e;var a4=e=>({isOnSubmit:!e||e===am.onSubmit,isOnBlur:e===am.onBlur,isOnChange:e===am.onChange,isOnAll:e===am.all,isOnTouch:e===am.onTouched});const ie="AsyncFunction";var it=e=>!!e&&!!e.validate&&!!(aP(e.validate)&&e.validate.constructor.name===ie||at(e.validate)&&Object.values(e.validate).find(e=>e.constructor.name===ie));var ir=e=>e.mount&&(e.required||e.min||e.max||e.maxLength||e.minLength||e.pattern||e.validate);var io=(e,t,r)=>!r&&(t.watchAll||t.watch.has(e)||[...t.watch].some(t=>e.startsWith(t)&&/^\.\w+/.test(e.slice(t.length))));const ia=(e,t,r,n)=>{for(const o of r||Object.keys(e)){const r=af(e,o);if(r){const{_f:e,...a}=r;if(e){if(e.refs&&e.refs[0]&&t(e.refs[0],o)&&!n){return true}else if(e.ref&&t(e.ref,e.name)&&!n){return true}else{if(ia(a,t)){break}}}else if(at(a)){if(ia(a,t)){break}}}}return};function ii(e,t,r){const n=af(e,r);if(n||al(r)){return{error:n,name:r}}const o=r.split(".");while(o.length){const n=o.join(".");const a=af(t,n);const i=af(e,n);if(a&&!Array.isArray(a)&&r!==n){return{name:r}}if(i&&i.type){return{name:n,error:i}}if(i&&i.root&&i.root.type){return{name:`${n}.root`,error:i.root}}o.pop()}return{name:r}}var is=(e,t,r,n)=>{r(e);const{name:o,...a}=e;return aV(a)||Object.keys(a).length>=Object.keys(t).length||Object.keys(a).find(e=>t[e]===(!n||am.all))};var il=(e,t,r)=>!e||!t||e===t||aN(e).some(e=>e&&(r?e===t:e.startsWith(t)||t.startsWith(e)));var ic=(e,t,r,n,o)=>{if(o.isOnAll){return false}else if(!r&&o.isOnTouch){return!(t||e)}else if(r?n.isOnBlur:o.isOnBlur){return!e}else if(r?n.isOnChange:o.isOnChange){return e}return true};var id=(e,t)=>!ad(af(e,t)).length&&aZ(e,t);var iu=(e,t,r)=>{const n=aN(af(e,r));ah(n,"root",t[r]);ah(e,r,n);return e};function ip(e,t,r="validate"){if(ak(e)||Array.isArray(e)&&e.every(ak)||ap(e)&&!e){return{type:r,message:ak(e)?e:"",ref:t}}}var ih=e=>at(e)&&!a3(e)?e:{value:e,message:""};var ig=async(e,t,r,n,o,a)=>{const{ref:i,refs:s,required:l,maxLength:c,minLength:d,min:u,max:f,pattern:p,validate:h,name:g,valueAsNumber:m,mount:v}=e._f;const b=af(r,g);if(!v||t.has(g)){return{}}const y=s?s[0]:i;const _=e=>{if(o&&y.reportValidity){y.setCustomValidity(ap(e)?"":e||"");y.reportValidity()}};const w={};const x=aj(i);const C=o3(i);const k=x||C;const A=(m||aW(i))&&ac(i.value)&&ac(b)||aK(i)&&i.value===""||b===""||Array.isArray(b)&&!b.length;const Y=aH.bind(null,g,n,w);const M=(e,t,r,n=av.maxLength,o=av.minLength)=>{const a=e?t:r;w[g]={type:e?n:o,message:a,ref:i,...Y(e?n:o,a)}};if(a?!Array.isArray(b)||!b.length:l&&(!k&&(A||o4(b))||ap(b)&&!b||C&&!a1(s).isValid||x&&!a6(s).isValid)){const{value:e,message:t}=ak(l)?{value:!!l,message:l}:ih(l);if(e){w[g]={type:av.required,message:t,ref:y,...Y(av.required,t)};if(!n){_(t);return w}}}if(!A&&(!o4(u)||!o4(f))){let e;let t;const r=ih(f);const o=ih(u);if(!o4(b)&&!isNaN(b)){const n=i.valueAsNumber||(b?+b:b);if(!o4(r.value)){e=n>r.value}if(!o4(o.value)){t=n<o.value}}else{const n=i.valueAsDate||new Date(b);const a=e=>new Date(new Date().toDateString()+" "+e);const s=i.type=="time";const l=i.type=="week";if(ak(r.value)&&b){e=s?a(b)>a(r.value):l?b>r.value:n>new Date(r.value)}if(ak(o.value)&&b){t=s?a(b)<a(o.value):l?b<o.value:n<new Date(o.value)}}if(e||t){M(!!e,r.message,o.message,av.max,av.min);if(!n){_(w[g].message);return w}}}if((c||d)&&!A&&(ak(b)||a&&Array.isArray(b))){const e=ih(c);const t=ih(d);const r=!o4(e.value)&&b.length>+e.value;const o=!o4(t.value)&&b.length<+t.value;if(r||o){M(r,e.message,t.message);if(!n){_(w[g].message);return w}}}if(p&&!A&&ak(b)){const{value:e,message:t}=ih(p);if(a3(e)&&!b.match(e)){w[g]={type:av.pattern,message:t,ref:i,...Y(av.pattern,t)};if(!n){_(t);return w}}}if(h){if(aP(h)){const e=await h(b,r);const t=ip(e,y);if(t){w[g]={...t,...Y(av.validate,t.message)};if(!n){_(t.message);return w}}}else if(at(h)){let e={};for(const t in h){if(!aV(e)&&!n){break}const o=ip(await h[t](b,r),y,t);if(o){e={...o,...Y(t,o.message)};_(o.message);if(n){w[g]=e}}}if(!aV(e)){w[g]={ref:y,...e};if(!n){return w}}}}_(true);return w};const im={mode:am.onSubmit,reValidateMode:am.onChange,shouldFocusError:true};function iv(e={}){let t={...im,...e};let r={submitCount:0,isDirty:false,isReady:false,isLoading:aP(t.defaultValues),isValidating:false,isSubmitted:false,isSubmitting:false,isSubmitSuccessful:false,isValid:false,touchedFields:{},dirtyFields:{},validatingFields:{},errors:t.errors||{},disabled:t.disabled||false};let n={};let o=at(t.defaultValues)||at(t.values)?as(t.defaultValues||t.values)||{}:{};let a=t.shouldUnregister?{}:as(o);let i={action:false,mount:false,watch:false};let s={mount:new Set,disabled:new Set,unMount:new Set,array:new Set,watch:new Set};let l;let c=0;const d={isDirty:false,dirtyFields:false,validatingFields:false,touchedFields:false,isValidating:false,isValid:false,errors:false};let u={...d};const f={array:aO(),state:aO()};const p=t.criteriaMode===am.all;const h=e=>t=>{clearTimeout(c);c=setTimeout(e,t)};const g=async e=>{if(!t.disabled&&(d.isValid||u.isValid||e)){const e=t.resolver?aV((await C()).errors):await A(n,true);if(e!==r.isValid){f.state.next({isValid:e})}}};const m=(e,n)=>{if(!t.disabled&&(d.isValidating||d.validatingFields||u.isValidating||u.validatingFields)){(e||Array.from(s.mount)).forEach(e=>{if(e){n?ah(r.validatingFields,e,n):aZ(r.validatingFields,e)}});f.state.next({validatingFields:r.validatingFields,isValidating:!aV(r.validatingFields)})}};const v=(e,s=[],l,c,p=true,h=true)=>{if(c&&l&&!t.disabled){i.action=true;if(h&&Array.isArray(af(n,e))){const t=l(af(n,e),c.argA,c.argB);p&&ah(n,e,t)}if(h&&Array.isArray(af(r.errors,e))){const t=l(af(r.errors,e),c.argA,c.argB);p&&ah(r.errors,e,t);id(r.errors,e)}if((d.touchedFields||u.touchedFields)&&h&&Array.isArray(af(r.touchedFields,e))){const t=l(af(r.touchedFields,e),c.argA,c.argB);p&&ah(r.touchedFields,e,t)}if(d.dirtyFields||u.dirtyFields){r.dirtyFields=aX(o,a)}f.state.next({name:e,isDirty:M(e,s),dirtyFields:r.dirtyFields,errors:r.errors,isValid:r.isValid})}else{ah(a,e,s)}};const b=(e,t)=>{ah(r.errors,e,t);f.state.next({errors:r.errors})};const y=e=>{r.errors=e;f.state.next({errors:r.errors,isValid:false})};const _=(e,t,r,s)=>{const l=af(n,e);if(l){const n=af(a,e,ac(r)?af(o,e):r);ac(n)||s&&s.defaultChecked||t?ah(a,e,t?n:a9(l._f)):S(e,n);i.mount&&!i.action&&g()}};const w=(e,n,a,i,s)=>{let l=false;let c=false;const p={name:e};if(!t.disabled){if(!a||i){if(d.isDirty||u.isDirty){c=r.isDirty;r.isDirty=p.isDirty=M();l=c!==p.isDirty}const t=aM(af(o,e),n);c=!!af(r.dirtyFields,e);t?aZ(r.dirtyFields,e):ah(r.dirtyFields,e,true);p.dirtyFields=r.dirtyFields;l=l||(d.dirtyFields||u.dirtyFields)&&c!==!t}if(a){const t=af(r.touchedFields,e);if(!t){ah(r.touchedFields,e,a);p.touchedFields=r.touchedFields;l=l||(d.touchedFields||u.touchedFields)&&t!==a}}l&&s&&f.state.next(p)}return l?p:{}};const x=(e,n,o,a)=>{const i=af(r.errors,e);const s=(d.isValid||u.isValid)&&ap(n)&&r.isValid!==n;if(t.delayError&&o){l=h(()=>b(e,o));l(t.delayError)}else{clearTimeout(c);l=null;o?ah(r.errors,e,o):aZ(r.errors,e)}if((o?!aM(i,o):i)||!aV(a)||s){const t={...a,...s&&ap(n)?{isValid:n}:{},errors:r.errors,name:e};r={...r,...t};f.state.next(t)}};const C=async e=>{m(e,true);const r=await t.resolver(a,t.context,a8(e||s.mount,n,t.criteriaMode,t.shouldUseNativeValidation));m(e);return r};const k=async e=>{const{errors:t}=await C(e);if(e){for(const n of e){const e=af(t,n);e?ah(r.errors,n,e):aZ(r.errors,n)}}else{r.errors=t}return t};const A=async(e,n,o={valid:true})=>{for(const i in e){const l=e[i];if(l){const{_f:e,...i}=l;if(e){const i=s.array.has(e.name);const c=l._f&&it(l._f);if(c&&d.validatingFields){m([e.name],true)}const u=await ig(l,s.disabled,a,p,t.shouldUseNativeValidation&&!n,i);if(c&&d.validatingFields){m([e.name])}if(u[e.name]){o.valid=false;if(n){break}}!n&&(af(u,e.name)?i?iu(r.errors,u,e.name):ah(r.errors,e.name,u[e.name]):aZ(r.errors,e.name))}!aV(i)&&await A(i,n,o)}}return o.valid};const Y=()=>{for(const e of s.unMount){const t=af(n,e);t&&(t._f.refs?t._f.refs.every(e=>!aR(e)):!aR(t._f.ref))&&j(e)}s.unMount=new Set};const M=(e,r)=>!t.disabled&&(e&&r&&ah(a,e,r),!aM(O(),o));const D=(e,t,r)=>aA(e,s,{...i.mount?a:ac(t)?o:ak(e)?{[e]:t}:t},r,t);const I=e=>ad(af(i.mount?a:o,e,t.shouldUnregister?af(o,e,[]):[]));const S=(e,t,r={})=>{const o=af(n,e);let i=t;if(o){const r=o._f;if(r){!r.disabled&&ah(a,e,a2(t,r));i=aK(r.ref)&&o4(t)?"":t;if(aB(r.ref)){[...r.ref.options].forEach(e=>e.selected=i.includes(e.value))}else if(r.refs){if(o3(r.ref)){r.refs.forEach(e=>{if(!e.defaultChecked||!e.disabled){if(Array.isArray(i)){e.checked=!!i.find(t=>t===e.value)}else{e.checked=i===e.value||!!i}}})}else{r.refs.forEach(e=>e.checked=e.value===i)}}else if(aW(r.ref)){r.ref.value=""}else{r.ref.value=i;if(!r.ref.type){f.state.next({name:e,values:as(a)})}}}}(r.shouldDirty||r.shouldTouch)&&w(e,i,r.shouldTouch,r.shouldDirty,true);r.shouldValidate&&N(e)};const T=(e,t,r)=>{for(const o in t){if(!t.hasOwnProperty(o)){return}const a=t[o];const i=e+"."+o;const l=af(n,i);(s.array.has(e)||at(a)||l&&!l._f)&&!o7(a)?T(i,a,r):S(i,a,r)}};const F=(e,t,l={})=>{const c=af(n,e);const p=s.array.has(e);const h=as(t);ah(a,e,h);if(p){f.array.next({name:e,values:as(a)});if((d.isDirty||d.dirtyFields||u.isDirty||u.dirtyFields)&&l.shouldDirty){f.state.next({name:e,dirtyFields:aX(o,a),isDirty:M(e,h)})}}else{c&&!c._f&&!o4(h)?T(e,h,l):S(e,h,l)}io(e,s)&&f.state.next({...r,name:e});f.state.next({name:i.mount?e:undefined,values:as(a)})};const E=async e=>{i.mount=true;const o=e.target;let c=o.name;let h=true;const v=af(n,c);const b=e=>{h=Number.isNaN(e)||o7(e)&&isNaN(e.getTime())||aM(e,af(a,c,e))};const y=a4(t.mode);const _=a4(t.reValidateMode);if(v){let i;let k;const Y=o.type?a9(v._f):ar(e);const M=e.type===ag.BLUR||e.type===ag.FOCUS_OUT;const D=!ir(v._f)&&!t.resolver&&!af(r.errors,c)&&!v._f.deps||ic(M,af(r.touchedFields,c),r.isSubmitted,_,y);const I=io(c,s,M);ah(a,c,Y);if(M){if(!o||!o.readOnly){v._f.onBlur&&v._f.onBlur(e);l&&l(0)}}else if(v._f.onChange){v._f.onChange(e)}const S=w(c,Y,M);const T=!aV(S)||I;!M&&f.state.next({name:c,type:e.type,values:as(a)});if(D){if(d.isValid||u.isValid){if(t.mode==="onBlur"){if(M){g()}}else if(!M){g()}}return T&&f.state.next({name:c,...I?{}:S})}!M&&I&&f.state.next({...r});if(t.resolver){const{errors:e}=await C([c]);b(Y);if(h){const t=ii(r.errors,n,c);const o=ii(e,n,t.name||c);i=o.error;c=o.name;k=aV(e)}}else{m([c],true);i=(await ig(v,s.disabled,a,p,t.shouldUseNativeValidation))[c];m([c]);b(Y);if(h){if(i){k=false}else if(d.isValid||u.isValid){k=await A(n,true)}}}if(h){v._f.deps&&(!Array.isArray(v._f.deps)||v._f.deps.length>0)&&N(v._f.deps);x(c,k,i,S)}}};const H=(e,t)=>{if(af(r.errors,t)&&e.focus){e.focus();return 1}return};const N=async(e,o={})=>{let a;let i;const l=aN(e);if(t.resolver){const t=await k(ac(e)?e:l);a=aV(t);i=e?!l.some(e=>af(t,e)):a}else if(e){i=(await Promise.all(l.map(async e=>{const t=af(n,e);return await A(t&&t._f?{[e]:t}:t)}))).every(Boolean);!(!i&&!r.isValid)&&g()}else{i=a=await A(n)}f.state.next({...!ak(e)||(d.isValid||u.isValid)&&a!==r.isValid?{}:{name:e},...t.resolver||!e?{isValid:a}:{},errors:r.errors});o.shouldFocus&&!i&&ia(n,H,e?l:s.mount);return i};const O=(e,t)=>{let n={...i.mount?a:o};if(t){n=aL(t.dirtyFields?r.dirtyFields:r.touchedFields,n)}return ac(e)?n:ak(e)?af(n,e):e.map(e=>af(n,e))};const L=(e,t)=>({invalid:!!af((t||r).errors,e),isDirty:!!af((t||r).dirtyFields,e),error:af((t||r).errors,e),isValidating:!!af(r.validatingFields,e),isTouched:!!af((t||r).touchedFields,e)});const V=e=>{e&&aN(e).forEach(e=>aZ(r.errors,e));f.state.next({errors:e?r.errors:{}})};const W=(e,t,o)=>{const a=(af(n,e,{_f:{}})._f||{}).ref;const i=af(r.errors,e)||{};// Don't override existing error messages elsewhere in the object tree.
const{ref:s,message:l,type:c,...d}=i;ah(r.errors,e,{...d,...t,ref:a});f.state.next({name:e,errors:r.errors,isValid:false});o&&o.shouldFocus&&a&&a.focus&&a.focus()};const P=(e,t)=>aP(e)?f.state.subscribe({next:r=>"values"in r&&e(D(undefined,t),r)}):D(e,t,true);const K=e=>f.state.subscribe({next:t=>{if(il(e.name,t.name,e.exact)&&is(t,e.formState||d,J,e.reRenderRoot)){e.callback({values:{...a},...r,...t,defaultValues:o})}}}).unsubscribe;const B=e=>{i.mount=true;u={...u,...e.formState};return K({...e,formState:u})};const j=(e,i={})=>{for(const l of e?aN(e):s.mount){s.mount.delete(l);s.array.delete(l);if(!i.keepValue){aZ(n,l);aZ(a,l)}!i.keepError&&aZ(r.errors,l);!i.keepDirty&&aZ(r.dirtyFields,l);!i.keepTouched&&aZ(r.touchedFields,l);!i.keepIsValidating&&aZ(r.validatingFields,l);!t.shouldUnregister&&!i.keepDefaultValue&&aZ(o,l)}f.state.next({values:as(a)});f.state.next({...r,...!i.keepDirty?{}:{isDirty:M()}});!i.keepIsValid&&g()};const z=({disabled:e,name:t})=>{if(ap(e)&&i.mount||!!e||s.disabled.has(t)){e?s.disabled.add(t):s.disabled.delete(t)}};const R=(e,r={})=>{let a=af(n,e);const l=ap(r.disabled)||ap(t.disabled);ah(n,e,{...a||{},_f:{...a&&a._f?a._f:{ref:{name:e}},name:e,mount:true,...r}});s.mount.add(e);if(a){z({disabled:ap(r.disabled)?r.disabled:t.disabled,name:e})}else{_(e,true,r.value)}return{...l?{disabled:r.disabled||t.disabled}:{},...t.progressive?{required:!!r.required,min:a7(r.min),max:a7(r.max),minLength:a7(r.minLength),maxLength:a7(r.maxLength),pattern:a7(r.pattern)}:{},name:e,onChange:E,onBlur:E,ref:l=>{if(l){R(e,r);a=af(n,e);const t=ac(l.value)?l.querySelectorAll?l.querySelectorAll("input,select,textarea")[0]||l:l:l;const i=az(t);const s=a._f.refs||[];if(i?s.find(e=>e===t):t===a._f.ref){return}ah(n,e,{_f:{...a._f,...i?{refs:[...s.filter(aR),t,...Array.isArray(af(o,e))?[{}]:[]],ref:{type:t.type,name:e}}:{ref:t}}});_(e,false,undefined,t)}else{a=af(n,e,{});if(a._f){a._f.mount=false}(t.shouldUnregister||r.shouldUnregister)&&!(ao(s.array,e)&&i.action)&&s.unMount.add(e)}}}};const q=()=>t.shouldFocusError&&ia(n,H,s.mount);const U=e=>{if(ap(e)){f.state.next({disabled:e});ia(n,(t,r)=>{const o=af(n,r);if(o){t.disabled=o._f.disabled||e;if(Array.isArray(o._f.refs)){o._f.refs.forEach(t=>{t.disabled=o._f.disabled||e})}}},0,false)}};const Z=(e,o)=>async i=>{let l=undefined;if(i){i.preventDefault&&i.preventDefault();i.persist&&i.persist()}let c=as(a);f.state.next({isSubmitting:true});if(t.resolver){const{errors:e,values:t}=await C();r.errors=e;c=as(t)}else{await A(n)}if(s.disabled.size){for(const e of s.disabled){aZ(c,e)}}aZ(r.errors,"root");if(aV(r.errors)){f.state.next({errors:{}});try{await e(c,i)}catch(e){l=e}}else{if(o){await o({...r.errors},i)}q();setTimeout(q)}f.state.next({isSubmitted:true,isSubmitting:false,isSubmitSuccessful:aV(r.errors)&&!l,submitCount:r.submitCount+1,errors:r.errors});if(l){throw l}};const Q=(e,t={})=>{if(af(n,e)){if(ac(t.defaultValue)){F(e,as(af(o,e)))}else{F(e,t.defaultValue);ah(o,e,as(t.defaultValue))}if(!t.keepTouched){aZ(r.touchedFields,e)}if(!t.keepDirty){aZ(r.dirtyFields,e);r.isDirty=t.defaultValue?M(e,as(af(o,e))):M()}if(!t.keepError){aZ(r.errors,e);d.isValid&&g()}f.state.next({...r})}};const G=(e,l={})=>{const c=e?as(e):o;const u=as(c);const p=aV(e);const h=p?o:u;if(!l.keepDefaultValues){o=c}if(!l.keepValues){if(l.keepDirtyValues){const e=new Set([...s.mount,...Object.keys(aX(o,a))]);for(const t of Array.from(e)){af(r.dirtyFields,t)?ah(h,t,af(a,t)):F(t,af(h,t))}}else{if(ai&&ac(e)){for(const e of s.mount){const t=af(n,e);if(t&&t._f){const e=Array.isArray(t._f.refs)?t._f.refs[0]:t._f.ref;if(aK(e)){const t=e.closest("form");if(t){t.reset();break}}}}}if(l.keepFieldsRef){for(const e of s.mount){F(e,af(h,e))}}else{n={}}}a=t.shouldUnregister?l.keepDefaultValues?as(o):{}:as(h);f.array.next({values:{...h}});f.state.next({values:{...h}})}s={mount:l.keepDirtyValues?s.mount:new Set,unMount:new Set,array:new Set,disabled:new Set,watch:new Set,watchAll:false,focus:""};i.mount=!d.isValid||!!l.keepIsValid||!!l.keepDirtyValues||!t.shouldUnregister&&!aV(h);i.watch=!!t.shouldUnregister;f.state.next({submitCount:l.keepSubmitCount?r.submitCount:0,isDirty:p?false:l.keepDirty?r.isDirty:!!(l.keepDefaultValues&&!aM(e,o)),isSubmitted:l.keepIsSubmitted?r.isSubmitted:false,dirtyFields:p?{}:l.keepDirtyValues?l.keepDefaultValues&&a?aX(o,a):r.dirtyFields:l.keepDefaultValues&&e?aX(o,e):l.keepDirty?r.dirtyFields:{},touchedFields:l.keepTouched?r.touchedFields:{},errors:l.keepErrors?r.errors:{},isSubmitSuccessful:l.keepIsSubmitSuccessful?r.isSubmitSuccessful:false,isSubmitting:false,defaultValues:o})};const $=(e,t)=>G(aP(e)?e(a):e,t);const X=(e,t={})=>{const r=af(n,e);const o=r&&r._f;if(o){const e=o.refs?o.refs[0]:o.ref;if(e.focus){e.focus();t.shouldSelect&&aP(e.select)&&e.select()}}};const J=e=>{r={...r,...e}};const ee=()=>aP(t.defaultValues)&&t.defaultValues().then(e=>{$(e,t.resetOptions);f.state.next({isLoading:false})});const et={control:{register:R,unregister:j,getFieldState:L,handleSubmit:Z,setError:W,_subscribe:K,_runSchema:C,_focusError:q,_getWatch:D,_getDirty:M,_setValid:g,_setFieldArray:v,_setDisabledField:z,_setErrors:y,_getFieldArray:I,_reset:G,_resetDefaultValues:ee,_removeUnmounted:Y,_disableForm:U,_subjects:f,_proxyFormState:d,get _fields(){return n},get _formValues(){return a},get _state(){return i},set _state(value){i=value},get _defaultValues(){return o},get _names(){return s},set _names(value){s=value},get _formState(){return r},get _options(){return t},set _options(value){t={...t,...value}}},subscribe:B,trigger:N,register:R,handleSubmit:Z,watch:P,setValue:F,getValues:O,reset:$,resetField:Q,clearErrors:V,unregister:j,setError:W,setFocus:X,getFieldState:L};return{...et,formControl:et}}var ib=()=>{if(typeof crypto!=="undefined"&&crypto.randomUUID){return crypto.randomUUID()}const e=typeof performance==="undefined"?Date.now():performance.now()*1e3;return"xxxxxxxx-xxxx-4xxx-yxxx-xxxxxxxxxxxx".replace(/[xy]/g,t=>{const r=(Math.random()*16+e)%16|0;return(t=="x"?r:r&3|8).toString(16)})};var iy=(e,t,r={})=>r.shouldFocus||ac(r.shouldFocus)?r.focusName||`${e}.${ac(r.focusIndex)?t:r.focusIndex}.`:"";var i_=(e,t)=>[...e,...aN(t)];var iw=e=>Array.isArray(e)?e.map(()=>undefined):undefined;function ix(e,t,r){return[...e.slice(0,t),...aN(r),...e.slice(t)]}var iC=(e,t,r)=>{if(!Array.isArray(e)){return[]}if(ac(e[r])){e[r]=undefined}e.splice(r,0,e.splice(t,1)[0]);return e};var ik=(e,t)=>[...aN(t),...aN(e)];function iA(e,t){let r=0;const n=[...e];for(const e of t){n.splice(e-r,1);r++}return ad(n).length?n:[]}var iY=(e,t)=>ac(t)?[]:iA(e,aN(t).sort((e,t)=>e-t));var iM=(e,t,r)=>{[e[t],e[r]]=[e[r],e[t]]};var iD=(e,t,r)=>{e[t]=r;return e};/**
 * A custom hook that exposes convenient methods to perform operations with a list of dynamic inputs that need to be appended, updated, removed etc. • [Demo](https://codesandbox.io/s/react-hook-form-usefieldarray-ssugn) • [Video](https://youtu.be/4MrbfGSFY2A)
 *
 * @remarks
 * [API](https://react-hook-form.com/docs/usefieldarray) • [Demo](https://codesandbox.io/s/react-hook-form-usefieldarray-ssugn)
 *
 * @param props - useFieldArray props
 *
 * @returns methods - functions to manipulate with the Field Arrays (dynamic inputs) {@link UseFieldArrayReturn}
 *
 * @example
 * ```tsx
 * function App() {
 *   const { register, control, handleSubmit, reset, trigger, setError } = useForm({
 *     defaultValues: {
 *       test: []
 *     }
 *   });
 *   const { fields, append } = useFieldArray({
 *     control,
 *     name: "test"
 *   });
 *
 *   return (
 *     <form onSubmit={handleSubmit(data => console.log(data))}>
 *       {fields.map((item, index) => (
 *          <input key={item.id} {...register(`test.${index}.firstName`)}  />
 *       ))}
 *       <button type="button" onClick={() => append({ firstName: "bill" })}>
 *         append
 *       </button>
 *       <input type="submit" />
 *     </form>
 *   );
 * }
 * ```
 */function iI(e){const t=ay();const{control:r=t.control,name:n,keyName:o="id",shouldUnregister:a,rules:i}=e;const[s,l]=React.useState(r._getFieldArray(n));const c=React.useRef(r._getFieldArray(n).map(ib));const d=React.useRef(false);r._names.array.add(n);React.useMemo(()=>i&&s.length>=0&&r.register(n,i),[r,n,s.length,i]);ax(()=>r._subjects.array.subscribe({next:({values:e,name:t})=>{if(t===n||!t){const t=af(e,n);if(Array.isArray(t)){l(t);c.current=t.map(ib)}}}}).unsubscribe,[r,n]);const u=React.useCallback(e=>{d.current=true;r._setFieldArray(n,e)},[r,n]);const f=(e,t)=>{const o=aN(as(e));const a=i_(r._getFieldArray(n),o);r._names.focus=iy(n,a.length-1,t);c.current=i_(c.current,o.map(ib));u(a);l(a);r._setFieldArray(n,a,i_,{argA:iw(e)})};const p=(e,t)=>{const o=aN(as(e));const a=ik(r._getFieldArray(n),o);r._names.focus=iy(n,0,t);c.current=ik(c.current,o.map(ib));u(a);l(a);r._setFieldArray(n,a,ik,{argA:iw(e)})};const h=e=>{const t=iY(r._getFieldArray(n),e);c.current=iY(c.current,e);u(t);l(t);!Array.isArray(af(r._fields,n))&&ah(r._fields,n,undefined);r._setFieldArray(n,t,iY,{argA:e})};const g=(e,t,o)=>{const a=aN(as(t));const i=ix(r._getFieldArray(n),e,a);r._names.focus=iy(n,e,o);c.current=ix(c.current,e,a.map(ib));u(i);l(i);r._setFieldArray(n,i,ix,{argA:e,argB:iw(t)})};const m=(e,t)=>{const o=r._getFieldArray(n);iM(o,e,t);iM(c.current,e,t);u(o);l(o);r._setFieldArray(n,o,iM,{argA:e,argB:t},false)};const v=(e,t)=>{const o=r._getFieldArray(n);iC(o,e,t);iC(c.current,e,t);u(o);l(o);r._setFieldArray(n,o,iC,{argA:e,argB:t},false)};const b=(e,t)=>{const o=as(t);const a=iD(r._getFieldArray(n),e,o);c.current=[...a].map((t,r)=>!t||r===e?ib():c.current[r]);u(a);l([...a]);r._setFieldArray(n,a,iD,{argA:e,argB:o},true,false)};const y=e=>{const t=aN(as(e));c.current=t.map(ib);u([...t]);l([...t]);r._setFieldArray(n,[...t],e=>e,{},true,false)};React.useEffect(()=>{r._state.action=false;io(n,r._names)&&r._subjects.state.next({...r._formState});if(d.current&&(!a4(r._options.mode).isOnSubmit||r._formState.isSubmitted)&&!a4(r._options.reValidateMode).isOnSubmit){if(r._options.resolver){r._runSchema([n]).then(e=>{const t=af(e.errors,n);const o=af(r._formState.errors,n);if(o?!t&&o.type||t&&(o.type!==t.type||o.message!==t.message):t&&t.type){t?ah(r._formState.errors,n,t):aZ(r._formState.errors,n);r._subjects.state.next({errors:r._formState.errors})}})}else{const e=af(r._fields,n);if(e&&e._f&&!(a4(r._options.reValidateMode).isOnSubmit&&a4(r._options.mode).isOnSubmit)){ig(e,r._names.disabled,r._formValues,r._options.criteriaMode===am.all,r._options.shouldUseNativeValidation,true).then(e=>!aV(e)&&r._subjects.state.next({errors:iu(r._formState.errors,e,n)}))}}}r._subjects.state.next({name:n,values:as(r._formValues)});r._names.focus&&ia(r._fields,(e,t)=>{if(r._names.focus&&t.startsWith(r._names.focus)&&e.focus){e.focus();return 1}return});r._names.focus="";r._setValid();d.current=false},[s,n,r]);React.useEffect(()=>{!af(r._formValues,n)&&r._setFieldArray(n);return()=>{const e=(e,t)=>{const n=af(r._fields,e);if(n&&n._f){n._f.mount=t}};r._options.shouldUnregister||a?r.unregister(n):e(n,false)}},[n,r,o,a]);return{swap:React.useCallback(m,[u,n,r]),move:React.useCallback(v,[u,n,r]),prepend:React.useCallback(p,[u,n,r]),append:React.useCallback(f,[u,n,r]),remove:React.useCallback(h,[u,n,r]),insert:React.useCallback(g,[u,n,r]),update:React.useCallback(b,[u,n,r]),replace:React.useCallback(y,[u,n,r]),fields:React.useMemo(()=>s.map((e,t)=>({...e,[o]:c.current[t]||ib()})),[s,o])}}/**
 * Custom hook to manage the entire form.
 *
 * @remarks
 * [API](https://react-hook-form.com/docs/useform) • [Demo](https://codesandbox.io/s/react-hook-form-get-started-ts-5ksmm) • [Video](https://www.youtube.com/watch?v=RkXv4AXXC_4)
 *
 * @param props - form configuration and validation parameters.
 *
 * @returns methods - individual functions to manage the form state. {@link UseFormReturn}
 *
 * @example
 * ```tsx
 * function App() {
 *   const { register, handleSubmit, watch, formState: { errors } } = useForm();
 *   const onSubmit = data => console.log(data);
 *
 *   console.log(watch("example"));
 *
 *   return (
 *     <form onSubmit={handleSubmit(onSubmit)}>
 *       <input defaultValue="test" {...register("example")} />
 *       <input {...register("exampleRequired", { required: true })} />
 *       {errors.exampleRequired && <span>This field is required</span>}
 *       <button>Submit</button>
 *     </form>
 *   );
 * }
 * ```
 */function iS(e={}){const t=y.useRef(undefined);const r=y.useRef(undefined);const[n,o]=y.useState({isDirty:false,isValidating:false,isLoading:aP(e.defaultValues),isSubmitted:false,isSubmitting:false,isSubmitSuccessful:false,isValid:false,submitCount:0,dirtyFields:{},touchedFields:{},validatingFields:{},errors:e.errors||{},disabled:e.disabled||false,isReady:false,defaultValues:aP(e.defaultValues)?undefined:e.defaultValues});if(!t.current){if(e.formControl){t.current={...e.formControl,formState:n};if(e.defaultValues&&!aP(e.defaultValues)){e.formControl.reset(e.defaultValues,e.resetOptions)}}else{const{formControl:r,...o}=iv(e);t.current={...o,formState:n}}}const a=t.current.control;a._options=e;ax(()=>{const e=a._subscribe({formState:a._proxyFormState,callback:()=>o({...a._formState}),reRenderRoot:true});o(e=>({...e,isReady:true}));a._formState.isReady=true;return e},[a]);y.useEffect(()=>a._disableForm(e.disabled),[a,e.disabled]);y.useEffect(()=>{if(e.mode){a._options.mode=e.mode}if(e.reValidateMode){a._options.reValidateMode=e.reValidateMode}},[a,e.mode,e.reValidateMode]);y.useEffect(()=>{if(e.errors){a._setErrors(e.errors);a._focusError()}},[a,e.errors]);y.useEffect(()=>{e.shouldUnregister&&a._subjects.state.next({values:a._getWatch()})},[a,e.shouldUnregister]);y.useEffect(()=>{if(a._proxyFormState.isDirty){const e=a._getDirty();if(e!==n.isDirty){a._subjects.state.next({isDirty:e})}}},[a,n.isDirty]);y.useEffect(()=>{var t;if(e.values&&!aM(e.values,r.current)){a._reset(e.values,{keepFieldsRef:true,...a._options.resetOptions});if(!((t=a._options.resetOptions)===null||t===void 0?void 0:t.keepIsValid)){a._setValid()}r.current=e.values;o(e=>({...e}))}else{a._resetDefaultValues()}},[a,e.values]);y.useEffect(()=>{if(!a._state.mount){a._setValid();a._state.mount=true}if(a._state.watch){a._state.watch=false;a._subjects.state.next({...a._formState})}a._removeUnmounted()});t.current.formState=aw(n,a);return t.current}/**
 * Watch component that subscribes to form field changes and re-renders when watched fields update.
 *
 * @param control - The form control object from useForm
 * @param names - Array of field names to watch for changes
 * @param render - The function that receives watched values and returns ReactNode
 * @returns The result of calling render function with watched values
 *
 * @example
 * The `Watch` component only re-render when the values of `foo`, `bar`, and `baz.qux` change.
 * The types of `foo`, `bar`, and `baz.qux` are precisely inferred.
 *
 * ```tsx
 * const { control } = useForm();
 *
 * <Watch
 *   control={control}
 *   names={['foo', 'bar', 'baz.qux']}
 *   render={([foo, bar, baz_qux]) => <div>{foo}{bar}{baz_qux}</div>}
 * />
 * ```
 */const iT=({control:e,names:t,render:r})=>r(aD({control:e,name:t}));//# sourceMappingURL=index.esm.mjs.map
// EXTERNAL MODULE: ../tutor/assets/react/v3/shared/utils/create-variation.ts
var iF=r(8572);// EXTERNAL MODULE: ../tutor/assets/react/v3/shared/atoms/LoadingSpinner.tsx
var iE=r(592);// CONCATENATED MODULE: ../tutor/assets/react/v3/shared/atoms/MagicButton.tsx
var iH=/*#__PURE__*/_().forwardRef((e,t)=>{var{className:r,variant:n,size:o,children:a,type:i="button",disabled:s=false,roundedFull:c=true,loading:d}=e,u=(0,h._)(e,["className","variant","size","children","type","disabled","roundedFull","loading"]);return/*#__PURE__*/(0,l/* .jsx */.Y)("button",(0,p._)((0,f._)({type:i,ref:t,css:iL({variant:n,size:o,rounded:c?"true":"false"}),className:r,disabled:s},u),{children:/*#__PURE__*/(0,l/* .jsx */.Y)("span",{css:iO.buttonSpan,children:d?/*#__PURE__*/(0,l/* .jsx */.Y)(iE/* ["default"] */.Ay,{size:24}):a})}))});/* export default */const iN=iH;var iO={buttonSpan:/*#__PURE__*/(0,c/* .css */.AH)(oL/* .styleUtils.flexCenter */.x.flexCenter(),";z-index:",m/* .zIndex.positive */.fE.positive,";"),base:/*#__PURE__*/(0,c/* .css */.AH)(oL/* .styleUtils.resetButton */.x.resetButton,";",v/* .typography.small */.I.small("medium"),";display:flex;gap:",m/* .spacing["4"] */.YK["4"],";width:100%;justify-content:center;align-items:center;white-space:nowrap;position:relative;overflow:hidden;transition:box-shadow 0.5s ease;&:focus-visible{outline:2px solid ",m/* .colorTokens.stroke.brand */.I6.stroke.brand,";outline-offset:1px;}&:disabled{cursor:not-allowed;background:",m/* .colorTokens.action.primary.disable */.I6.action.primary.disable,";pointer-events:none;color:",m/* .colorTokens.text.disable */.I6.text.disable,";border-color:",m/* .colorTokens.stroke.disable */.I6.stroke.disable,";}"),default:e=>/*#__PURE__*/(0,c/* .css */.AH)("background:",!e?m/* .colorTokens.ai.gradient_1 */.I6.ai.gradient_1:m/* .colorTokens.ai.gradient_1_rtl */.I6.ai.gradient_1_rtl,";color:",m/* .colorTokens.text.white */.I6.text.white,";&::before{content:'';position:absolute;inset:0;background:",!e?m/* .colorTokens.ai.gradient_2 */.I6.ai.gradient_2:m/* .colorTokens.ai.gradient_2_rtl */.I6.ai.gradient_2_rtl,";opacity:0;transition:opacity 0.5s ease;}&:hover::before{opacity:1;}"),secondary:/*#__PURE__*/(0,c/* .css */.AH)("background-color:",m/* .colorTokens.action.secondary["default"] */.I6.action.secondary["default"],";color:",m/* .colorTokens.text.brand */.I6.text.brand,";border-radius:",m/* .borderRadius["6"] */.Vq["6"],";&:hover{background-color:",m/* .colorTokens.action.secondary.hover */.I6.action.secondary.hover,";}"),outline:/*#__PURE__*/(0,c/* .css */.AH)("position:relative;&::before{content:'';position:absolute;inset:0;background:",m/* .colorTokens.ai.gradient_1 */.I6.ai.gradient_1,";color:",m/* .colorTokens.text.primary */.I6.text.primary,";border:1px solid transparent;-webkit-mask:linear-gradient(#fff 0 0) padding-box,linear-gradient(#fff 0 0);mask:linear-gradient(#fff 0 0) padding-box,linear-gradient(#fff 0 0);-webkit-mask-composite:xor;mask-composite:exclude;}&:hover{&::before{background:",m/* .colorTokens.ai.gradient_2 */.I6.ai.gradient_2,";}}"),primaryOutline:/*#__PURE__*/(0,c/* .css */.AH)("border:1px solid ",m/* .colorTokens.brand.blue */.I6.brand.blue,";color:",m/* .colorTokens.brand.blue */.I6.brand.blue,";&:hover{background-color:",m/* .colorTokens.brand.blue */.I6.brand.blue,";color:",m/* .colorTokens.text.white */.I6.text.white,";}"),primary:/*#__PURE__*/(0,c/* .css */.AH)("background-color:",m/* .colorTokens.brand.blue */.I6.brand.blue,";color:",m/* .colorTokens.text.white */.I6.text.white,";"),ghost:/*#__PURE__*/(0,c/* .css */.AH)("background-color:transparent;color:",m/* .colorTokens.text.subdued */.I6.text.subdued,";border-radius:",m/* .borderRadius["4"] */.Vq["4"],";&:hover{color:",m/* .colorTokens.text.primary */.I6.text.primary,";}"),plain:/*#__PURE__*/(0,c/* .css */.AH)("span{background:",!oN/* .isRTL */.V8?m/* .colorTokens.text.ai.gradient */.I6.text.ai.gradient:m/* .colorTokens.ai.gradient_1_rtl */.I6.ai.gradient_1_rtl,";background-clip:text;-webkit-background-clip:text;-webkit-text-fill-color:transparent;&:hover{background:",!oN/* .isRTL */.V8?m/* .colorTokens.ai.gradient_2 */.I6.ai.gradient_2:m/* .colorTokens.ai.gradient_2_rtl */.I6.ai.gradient_2_rtl,";background-clip:text;-webkit-background-clip:text;-webkit-text-fill-color:transparent;}}"),size:{default:/*#__PURE__*/(0,c/* .css */.AH)("height:32px;padding-inline:",m/* .spacing["12"] */.YK["12"],";padding-block:",m/* .spacing["4"] */.YK["4"],";"),sm:/*#__PURE__*/(0,c/* .css */.AH)("height:24px;padding-inline:",m/* .spacing["10"] */.YK["10"],";"),icon:/*#__PURE__*/(0,c/* .css */.AH)("width:32px;height:32px;")},rounded:{true:/*#__PURE__*/(0,c/* .css */.AH)("border-radius:",m/* .borderRadius["54"] */.Vq["54"],";&::before{border-radius:",m/* .borderRadius["54"] */.Vq["54"],";}"),false:/*#__PURE__*/(0,c/* .css */.AH)("border-radius:",m/* .borderRadius["4"] */.Vq["4"],";&::before{border-radius:",m/* .borderRadius["4"] */.Vq["4"],";}")}};var iL=(0,iF/* .createVariation */.s)({variants:{variant:{default:iO.default(oN/* .isRTL */.V8),primary:iO.primary,secondary:iO.secondary,outline:iO.outline,primary_outline:iO.primaryOutline,ghost:iO.ghost,plain:iO.plain},size:{default:iO.size.default,sm:iO.size.sm,icon:iO.size.icon},rounded:{true:iO.rounded.true,false:iO.rounded.false}},defaultVariants:{variant:"default",size:"default",rounded:"true"}},iO.base);// EXTERNAL MODULE: ../tutor/assets/react/v3/shared/molecules/Popover.tsx
var iV=r(9429);// EXTERNAL MODULE: ../tutor/assets/react/v3/shared/hoc/withVisibilityControl.tsx + 1 modules
var iW=r(4525);// CONCATENATED MODULE: ../tutor/assets/react/v3/shared/components/fields/FormTextareaInput.tsx
function iP(){var e=(0,g._)(["\n        resize: vertical;\n      "]);iP=function t(){return e};return e}var iK=6;var iB=e=>{var{label:t,rows:r=iK,columns:n,maxLimit:o,field:a,fieldState:i,disabled:s,readOnly:c,loading:d,placeholder:u,helpText:h,onChange:g,onKeyDown:m,isHidden:v,enableResize:b=true,isSecondary:_=false,isMagicAi:w=false,inputCss:x,maxHeight:C,autoResize:k=false}=e;var A;var Y=(A=a.value)!==null&&A!==void 0?A:"";var M=(0,y.useRef)(null);var D=undefined;if(o){D={maxLimit:o,inputCharacter:Y.toString().length}}var I=()=>{if(M.current){if(C){M.current.style.maxHeight="".concat(C,"px")}M.current.style.height="auto";M.current.style.height="".concat(M.current.scrollHeight,"px")}};(0,y.useLayoutEffect)(()=>{if(k){I()}// eslint-disable-next-line react-hooks/exhaustive-deps
},[]);return/*#__PURE__*/(0,l/* .jsx */.Y)(F/* ["default"] */.A,{label:t,field:a,fieldState:i,disabled:s,readOnly:c,loading:d,placeholder:u,helpText:h,isHidden:v,characterCount:D,isSecondary:_,isMagicAi:w,children:e=>{return/*#__PURE__*/(0,l/* .jsx */.Y)(l/* .Fragment */.FK,{children:/*#__PURE__*/(0,l/* .jsx */.Y)("div",{css:iz.container(b,x),children:/*#__PURE__*/(0,l/* .jsx */.Y)("textarea",(0,p._)((0,f._)({},a,e),{ref:e=>{a.ref(e);// @ts-ignore
M.current=e;// this is not ideal but it is the only way to set ref to the input element
},style:{maxHeight:C?"".concat(C,"px"):"none"},className:"tutor-input-field",value:Y,onChange:e=>{var{value:t}=e.target;if(o&&t.trim().length>o){return}a.onChange(t);if(g){g(t)}if(k){I()}},onKeyDown:e=>{m===null||m===void 0?void 0:m(e.key)},autoComplete:"off",rows:r,cols:n}))})})}})};/* export default */const ij=(0,iW/* .withVisibilityControl */.M)(iB);var iz={container:function(){var e=arguments.length>0&&arguments[0]!==void 0?arguments[0]:false,t=arguments.length>1?arguments[1]:void 0;return/*#__PURE__*/(0,c/* .css */.AH)("position:relative;display:flex;textarea{",v/* .typography.body */.I.body(),";height:auto;padding:",m/* .spacing["8"] */.YK["8"]," ",m/* .spacing["12"] */.YK["12"],";resize:none;",oL/* .styleUtils.overflowYAuto */.x.overflowYAuto,";&.tutor-input-field{",t,";}",e&&(0,c/* .css */.AH)(iP()),"}")}};// EXTERNAL MODULE: ../tutor/assets/react/v3/shared/controls/For.tsx
var iR=r(3088);// CONCATENATED MODULE: ../tutor/assets/react/v3/shared/components/magic-ai-content/OptionList.tsx
var iq=e=>{var{options:t,onChange:r}=e;return/*#__PURE__*/(0,l/* .jsx */.Y)("div",{css:iU.wrapper,children:/*#__PURE__*/(0,l/* .jsx */.Y)(iR/* ["default"] */.A,{each:t,children:(e,t)=>{return/*#__PURE__*/(0,l/* .jsx */.Y)("button",{type:"button",onClick:()=>r(e.value),css:iU.item,children:e.label},t)}})})};var iU={wrapper:/*#__PURE__*/(0,c/* .css */.AH)("display:flex;flex-direction:column;padding-block:",m/* .spacing["8"] */.YK["8"],";max-height:400px;overflow-y:auto;"),item:/*#__PURE__*/(0,c/* .css */.AH)(oL/* .styleUtils.resetButton */.x.resetButton,";",v/* .typography.caption */.I.caption(),";width:100%;padding:",m/* .spacing["4"] */.YK["4"]," ",m/* .spacing["16"] */.YK["16"],";color:",m/* .colorTokens.text.subdued */.I6.text.subdued,";display:flex;align-items:center;&:hover{background-color:",m/* .colorTokens.background.hover */.I6.background.hover,";color:",m/* .colorTokens.text.title */.I6.text.title,";}")};// EXTERNAL MODULE: ../tutor/assets/react/v3/shared/controls/Show.tsx
var iZ=r(8338);// EXTERNAL MODULE: ../tutor/assets/react/v3/shared/hooks/useAnimation.tsx + 1 modules
var iQ=r(2712);// CONCATENATED MODULE: ../tutor/assets/react/v3/shared/hooks/useSelectKeyboardNavigation.ts
var iG=e=>{var{options:t,isOpen:r,onSelect:n,onClose:o,selectedValue:a}=e;var[i,s]=(0,y.useState)(-1);var l=(0,y.useCallback)(e=>{if(!r)return;var a=(e,r)=>{var n;var o=e;var a=r==="down"?1:-1;do{o+=a;if(o<0)o=t.length-1;if(o>=t.length)o=0}while(o>=0&&o<t.length&&t[o].disabled)if((n=t[o])===null||n===void 0?void 0:n.disabled){return e}return o};switch(e.key){case"ArrowDown":e.preventDefault();s(e=>{var t=a(e===-1?0:e,"down");return t});break;case"ArrowUp":e.preventDefault();s(e=>{var t=a(e===-1?0:e,"up");return t});break;case"Enter":e.preventDefault();e.stopPropagation();if(i>=0&&i<t.length){var l=t[i];if(!l.disabled){o();n(l)}}break;case"Escape":e.preventDefault();e.stopPropagation();o();break;default:break}},[r,t,i,n,o]);(0,y.useEffect)(()=>{if(r){if(i===-1){var e=t.findIndex(e=>e.value===a);var n=e>=0?e:t.findIndex(e=>!e.disabled);s(n)}document.addEventListener("keydown",l,true);return()=>document.removeEventListener("keydown",l,true)}},[r,l,t,a,i]);(0,y.useEffect)(()=>{if(!r){s(-1)}},[r]);var c=(0,y.useCallback)(e=>{var r;if(!((r=t[e])===null||r===void 0?void 0:r.disabled)){s(e)}},[t]);return{activeIndex:i,setActiveIndex:c}};// EXTERNAL MODULE: ../tutor/assets/react/v3/shared/utils/types.ts
var i$=r(723);// CONCATENATED MODULE: ../tutor/assets/react/v3/shared/components/fields/FormSelectInput.tsx
function iX(){var e=(0,g._)(["\n      &::before {\n        content: '';\n        position: absolute;\n        inset: 0;\n        background: ",";\n        color: ",";\n        border: 1px solid transparent;\n        -webkit-mask:\n          linear-gradient(#fff 0 0) padding-box,\n          linear-gradient(#fff 0 0);\n        -webkit-mask-composite: xor;\n        mask-composite: exclude;\n        border-radius: 6px;\n      }\n    "]);iX=function t(){return e};return e}function iJ(){var e=(0,g._)(["\n        padding-left: ",";\n      "]);iJ=function t(){return e};return e}function i0(){var e=(0,g._)(["\n        &.tutor-input-field {\n          height: 56px;\n          padding-bottom: ",";\n        }\n      "]);i0=function t(){return e};return e}function i1(){var e=(0,g._)(["\n        background-color: ",";\n      "]);i1=function t(){return e};return e}function i2(){var e=(0,g._)(["\n        position: relative;\n        border: none;\n        background: transparent;\n      "]);i2=function t(){return e};return e}function i5(){var e=(0,g._)(["\n          outline-color: ",";\n          background-color: ",";\n        "]);i5=function t(){return e};return e}function i6(){var e=(0,g._)(["\n          border-color: ",";\n          background-color: ",";\n        "]);i6=function t(){return e};return e}function i9(){var e=(0,g._)(["\n      padding-left: calc("," + 1px);\n    "]);i9=function t(){return e};return e}function i8(){var e=(0,g._)(["\n        color: ",";\n\n        &:hover {\n          text-decoration: underline;\n        }\n      "]);i8=function t(){return e};return e}function i3(){var e=(0,g._)(["\n      min-width: 200px;\n    "]);i3=function t(){return e};return e}function i7(){var e=(0,g._)(["\n      background-color: ",";\n    "]);i7=function t(){return e};return e}function i4(){var e=(0,g._)(["\n      background-color: ",";\n      position: relative;\n\n      &::before {\n        content: '';\n        position: absolute;\n        top: 0;\n        left: 0;\n        width: 3px;\n        height: 100%;\n        background-color: ",";\n        border-radius: 0 "," "," 0;\n      }\n    "]);i4=function t(){return e};return e}function se(){var e=(0,g._)(["\n      transform: rotate(180deg);\n    "]);se=function t(){return e};return e}var st=e=>{var{options:t,field:r,fieldState:n,onChange:o=b/* .noop */.lQ,label:a,placeholder:i="",disabled:s,readOnly:c,loading:u,isSearchable:g=false,isInlineLabel:m,hideCaret:v,listLabel:_,isClearable:w=false,helpText:x,removeOptionsMinWidth:C=false,leftIcon:k,removeBorder:A,dataAttribute:Y,isSecondary:M=false,isMagicAi:D=false,isAiOutline:I=false,selectOnFocus:T,optionItemCss:E}=e;var H;var N=(0,y.useCallback)(()=>t.find(e=>e.value===r.value)||{label:"",value:"",description:""},[r.value,t]);var O=(0,y.useMemo)(()=>t.some(e=>(0,i$/* .isDefined */.O9)(e.description)),[t]);var[L,V]=(0,y.useState)((H=N())===null||H===void 0?void 0:H.label);var[W,P]=(0,y.useState)(false);var[K,B]=(0,y.useState)("");var[j,z]=(0,y.useState)(false);var R=(0,y.useRef)(null);var q=(0,y.useRef)(null);var U=(0,y.useRef)(null);var Z=(0,y.useRef)(null);var Q=(0,y.useMemo)(()=>{if(g){return t.filter(e=>{var{label:t}=e;return t.toLowerCase().includes(K.toLowerCase())})}return t},[K,g,t]);var G=(0,y.useMemo)(()=>{return t.find(e=>e.value===r.value)},[r.value,t]);var $=(0,f._)({},(0,i$/* .isDefined */.O9)(Y)&&{[Y]:true});(0,y.useEffect)(()=>{var e;V((e=N())===null||e===void 0?void 0:e.label)},[r.value,N]);(0,y.useEffect)(()=>{if(j){var e;V((e=N())===null||e===void 0?void 0:e.label)}},[N,j]);var X=(e,t)=>{t===null||t===void 0?void 0:t.stopPropagation();if(!e.disabled){r.onChange(e.value);o(e);B("");P(false);z(false)}};var{activeIndex:J,setActiveIndex:ee}=iG({options:Q,isOpen:j,selectedValue:r.value,onSelect:X,onClose:()=>{z(false);P(false);B("")}});(0,y.useEffect)(()=>{if(j&&J>=0&&Z.current){Z.current.scrollIntoView({block:"nearest",behavior:"smooth"})}},[j,J]);return/*#__PURE__*/(0,l/* .jsx */.Y)(F/* ["default"] */.A,{fieldState:n,field:r,label:a,disabled:s||t.length===0,readOnly:c,loading:u,isInlineLabel:m,helpText:x,removeBorder:A,isSecondary:M,isMagicAi:D,children:e=>{var o,a;var{css:m}=e,b=(0,h._)(e,["css"]);return/*#__PURE__*/(0,l/* .jsxs */.FD)("div",{css:sn.mainWrapper,children:[/*#__PURE__*/(0,l/* .jsxs */.FD)("div",{css:sn.inputWrapper(I),ref:q,children:[/*#__PURE__*/(0,l/* .jsxs */.FD)("div",{css:sn.leftIcon,children:[/*#__PURE__*/(0,l/* .jsx */.Y)(iZ/* ["default"] */.A,{when:k,children:k}),/*#__PURE__*/(0,l/* .jsx */.Y)(iZ/* ["default"] */.A,{when:G===null||G===void 0?void 0:G.icon,children:e=>/*#__PURE__*/(0,l/* .jsx */.Y)(S/* ["default"] */.A,{name:e,width:32,height:32})})]}),/*#__PURE__*/(0,l/* .jsxs */.FD)("div",{css:{width:"100%"},children:[/*#__PURE__*/(0,l/* .jsx */.Y)("input",(0,p._)((0,f._)({},b,$),{ref:e=>{r.ref(e);// @ts-ignore
R.current=e;// this is not ideal but it is the only way to set ref to the input element
},className:"tutor-input-field",css:[m,sn.input({hasLeftIcon:!!k||!!(G===null||G===void 0?void 0:G.icon),hasDescription:O,hasError:!!n.error,isMagicAi:D,isAiOutline:I})],autoComplete:"off",readOnly:c||!g,placeholder:i,value:W?K:L,title:L,onClick:e=>{var t;e.stopPropagation();z(e=>!e);(t=R.current)===null||t===void 0?void 0:t.focus()},onKeyDown:e=>{if(e.key==="Enter"){var t;e.preventDefault();z(e=>!e);(t=R.current)===null||t===void 0?void 0:t.focus()}if(e.key==="Tab"){z(false)}},onFocus:T&&g?e=>{e.target.select()}:undefined,onChange:e=>{V(e.target.value);if(g){P(true);B(e.target.value)}},"data-select":true})),/*#__PURE__*/(0,l/* .jsx */.Y)(iZ/* ["default"] */.A,{when:O,children:/*#__PURE__*/(0,l/* .jsx */.Y)("span",{css:sn.description({hasLeftIcon:!!k}),title:(o=N())===null||o===void 0?void 0:o.description,children:(a=N())===null||a===void 0?void 0:a.description})})]}),!v&&!u&&/*#__PURE__*/(0,l/* .jsx */.Y)("button",{tabIndex:-1,type:"button",css:sn.caretButton({isOpen:j}),onClick:()=>{var e;z(e=>!e);(e=R.current)===null||e===void 0?void 0:e.focus()},disabled:s||c||t.length===0,children:/*#__PURE__*/(0,l/* .jsx */.Y)(S/* ["default"] */.A,{name:"chevronDown",width:20,height:20})})]}),/*#__PURE__*/(0,l/* .jsx */.Y)(iV/* ["default"] */.A,{triggerRef:q,isOpen:j,dependencies:[Q.length],animationType:iQ/* .AnimationType.slideDown */.J6.slideDown,closePopover:()=>{z(false);P(false);B("")},children:/*#__PURE__*/(0,l/* .jsxs */.FD)("ul",{css:[sn.options(C)],children:[!!_&&/*#__PURE__*/(0,l/* .jsx */.Y)("li",{css:sn.listLabel,children:_}),/*#__PURE__*/(0,l/* .jsx */.Y)(iZ/* ["default"] */.A,{when:Q.length>0,fallback:/*#__PURE__*/(0,l/* .jsx */.Y)("li",{css:sn.emptyState,children:(0,d.__)("No options available","tutor-pro")}),children:Q.map((e,t)=>/*#__PURE__*/(0,l/* .jsx */.Y)("li",{ref:e.value===r.value?U:J===t?Z:null,css:[sn.optionItem({isSelected:e.value===r.value,isActive:t===J,isDisabled:!!e.disabled}),E],children:/*#__PURE__*/(0,l/* .jsxs */.FD)("button",{type:"button",css:sn.label,onClick:t=>{if(!e.disabled){X(e,t)}},disabled:e.disabled,title:e.label,onMouseOver:()=>ee(t),onMouseLeave:()=>t!==J&&ee(-1),onFocus:()=>ee(t),"aria-selected":J===t,children:[/*#__PURE__*/(0,l/* .jsx */.Y)(iZ/* ["default"] */.A,{when:e.icon,children:/*#__PURE__*/(0,l/* .jsx */.Y)(S/* ["default"] */.A,{name:e.icon,width:32,height:32})}),/*#__PURE__*/(0,l/* .jsx */.Y)("span",{children:e.label})]})},String(e.value)))}),w&&/*#__PURE__*/(0,l/* .jsx */.Y)("div",{css:sn.clearButton({isDisabled:L===""}),children:/*#__PURE__*/(0,l/* .jsx */.Y)(oH/* ["default"] */.A,{variant:"text",disabled:L==="",icon:/*#__PURE__*/(0,l/* .jsx */.Y)(S/* ["default"] */.A,{name:"delete"}),onClick:()=>{r.onChange(null);V("");B("");z(false)},children:(0,d.__)("Clear","tutor-pro")})})]})})]})}})};/* export default */const sr=st;var sn={mainWrapper:/*#__PURE__*/(0,c/* .css */.AH)("width:100%;"),inputWrapper:function(){var e=arguments.length>0&&arguments[0]!==void 0?arguments[0]:false;return/*#__PURE__*/(0,c/* .css */.AH)("width:100%;display:flex;justify-content:space-between;align-items:center;position:relative;",e&&(0,c/* .css */.AH)(iX(),m/* .colorTokens.ai.gradient_1 */.I6.ai.gradient_1,m/* .colorTokens.text.primary */.I6.text.primary))},leftIcon:/*#__PURE__*/(0,c/* .css */.AH)("position:absolute;left:",m/* .spacing["8"] */.YK["8"],";",oL/* .styleUtils.display.flex */.x.display.flex(),";align-items:center;height:100%;color:",m/* .colorTokens.icon["default"] */.I6.icon["default"],";"),input:e=>{var{hasLeftIcon:t,hasDescription:r,hasError:n=false,isMagicAi:o=false,isAiOutline:a=false}=e;return/*#__PURE__*/(0,c/* .css */.AH)("&[data-select]{",v/* .typography.body */.I.body(),";width:100%;cursor:pointer;padding-right:",m/* .spacing["32"] */.YK["32"],";",oL/* .styleUtils.textEllipsis */.x.textEllipsis,";background-color:transparent;background-color:",m/* .colorTokens.background.white */.I6.background.white,";",t&&(0,c/* .css */.AH)(iJ(),m/* .spacing["48"] */.YK["48"])," ",r&&(0,c/* .css */.AH)(i0(),m/* .spacing["24"] */.YK["24"])," ",n&&(0,c/* .css */.AH)(i1(),m/* .colorTokens.background.status.errorFail */.I6.background.status.errorFail)," ",a&&(0,c/* .css */.AH)(i2()),":focus{",oL/* .styleUtils.inputFocus */.x.inputFocus,";",o&&(0,c/* .css */.AH)(i5(),m/* .colorTokens.stroke.magicAi */.I6.stroke.magicAi,m/* .colorTokens.background.magicAi["8"] */.I6.background.magicAi["8"])," ",n&&(0,c/* .css */.AH)(i6(),m/* .colorTokens.stroke.danger */.I6.stroke.danger,m/* .colorTokens.background.status.errorFail */.I6.background.status.errorFail),"}}")},description:e=>{var{hasLeftIcon:t}=e;return/*#__PURE__*/(0,c/* .css */.AH)(v/* .typography.small */.I.small(),";",oL/* .styleUtils.text.ellipsis */.x.text.ellipsis(1),"    color:",m/* .colorTokens.text.hints */.I6.text.hints,";position:absolute;bottom:",m/* .spacing["8"] */.YK["8"],";padding-inline:calc(",m/* .spacing["16"] */.YK["16"]," + 1px) ",m/* .spacing["32"] */.YK["32"],";",t&&(0,c/* .css */.AH)(i9(),m/* .spacing["48"] */.YK["48"]))},listLabel:/*#__PURE__*/(0,c/* .css */.AH)(v/* .typography.body */.I.body(),";color:",m/* .colorTokens.text.subdued */.I6.text.subdued,";min-height:40px;display:flex;align-items:center;padding-left:",m/* .spacing["16"] */.YK["16"],";"),clearButton:e=>{var{isDisabled:t=false}=e;return/*#__PURE__*/(0,c/* .css */.AH)("padding:",m/* .spacing["4"] */.YK["4"]," ",m/* .spacing["8"] */.YK["8"],";border-top:1px solid ",m/* .colorTokens.stroke["default"] */.I6.stroke["default"],";& > button{padding:0;width:100%;font-size:",m/* .fontSize["12"] */.J["12"],";> span{justify-content:center;}",!t&&(0,c/* .css */.AH)(i8(),m/* .colorTokens.text.title */.I6.text.title),"}")},options:e=>/*#__PURE__*/(0,c/* .css */.AH)("z-index:",m/* .zIndex.dropdown */.fE.dropdown,";background-color:",m/* .colorTokens.background.white */.I6.background.white,";list-style-type:none;box-shadow:",m/* .shadow.popover */.r7.popover,";padding:",m/* .spacing["4"] */.YK["4"]," 0;margin:0;max-height:500px;border-radius:",m/* .borderRadius["6"] */.Vq["6"],";",oL/* .styleUtils.overflowYAuto */.x.overflowYAuto,";scrollbar-gutter:auto;",!e&&(0,c/* .css */.AH)(i3())),optionItem:e=>{var{isSelected:t=false,isActive:r=false,isDisabled:n=false}=e;return/*#__PURE__*/(0,c/* .css */.AH)(v/* .typography.body */.I.body(),";min-height:36px;height:100%;width:100%;display:flex;align-items:center;transition:background-color 0.3s ease-in-out;cursor:",n?"not-allowed":"pointer",";opacity:",n?.5:1,";",r&&(0,c/* .css */.AH)(i7(),m/* .colorTokens.background.hover */.I6.background.hover),"    &:hover{background-color:",!n&&m/* .colorTokens.background.hover */.I6.background.hover,";}",!n&&t&&(0,c/* .css */.AH)(i4(),m/* .colorTokens.background.active */.I6.background.active,m/* .colorTokens.action.primary["default"] */.I6.action.primary["default"],m/* .borderRadius["6"] */.Vq["6"],m/* .borderRadius["6"] */.Vq["6"]))},label:/*#__PURE__*/(0,c/* .css */.AH)(oL/* .styleUtils.resetButton */.x.resetButton,";",oL/* .styleUtils.text.ellipsis */.x.text.ellipsis(1),";color:",m/* .colorTokens.text.title */.I6.text.title,";width:100%;height:100%;display:flex;align-items:center;gap:",m/* .spacing["8"] */.YK["8"],";margin:0 ",m/* .spacing["12"] */.YK["12"],";padding:",m/* .spacing["6"] */.YK["6"]," 0;text-align:left;line-height:",m/* .lineHeight["24"] */.K_["24"],";word-break:break-all;cursor:pointer;&:hover,&:focus,&:active{background-color:transparent;color:",m/* .colorTokens.text.title */.I6.text.title,";}span{flex-shrink:0;",oL/* .styleUtils.text.ellipsis */.x.text.ellipsis(1),"      width:100%;}"),arrowUpDown:/*#__PURE__*/(0,c/* .css */.AH)("color:",m/* .colorTokens.icon["default"] */.I6.icon["default"],";display:flex;justify-content:center;align-items:center;margin-top:",m/* .spacing["2"] */.YK["2"],";"),optionsContainer:/*#__PURE__*/(0,c/* .css */.AH)("position:absolute;overflow:hidden auto;min-width:16px;max-width:calc(100% - 32px);"),caretButton:e=>{var{isOpen:t=false}=e;return/*#__PURE__*/(0,c/* .css */.AH)(oL/* .styleUtils.resetButton */.x.resetButton,";position:absolute;right:",m/* .spacing["4"] */.YK["4"],";display:flex;align-items:center;transition:transform 0.3s ease-in-out;color:",m/* .colorTokens.icon["default"] */.I6.icon["default"],";border-radius:",m/* .borderRadius["4"] */.Vq["4"],";padding:",m/* .spacing["6"] */.YK["6"],";height:100%;&:focus,&:active,&:hover{background:none;color:",m/* .colorTokens.icon["default"] */.I6.icon["default"],";}&:focus-visible{outline:2px solid ",m/* .colorTokens.stroke.brand */.I6.stroke.brand,";}",t&&(0,c/* .css */.AH)(se()))},emptyState:/*#__PURE__*/(0,c/* .css */.AH)(oL/* .styleUtils.flexCenter */.x.flexCenter(),";padding:",m/* .spacing["8"] */.YK["8"],";")};// CONCATENATED MODULE: ../tutor/assets/react/v3/shared/config/magic-ai.ts
var so=[{label:"English",value:"english"},{label:"简体中文",value:"simplified-chinese"},{label:"繁體中文",value:"traditional-chinese"},{label:"Español",value:"spanish"},{label:"Français",value:"french"},{label:"日本語",value:"japanese"},{label:"Deutsch",value:"german"},{label:"Português",value:"portuguese"},{label:"العربية",value:"arabic"},{label:"Русский",value:"russian"},{label:"Italiano",value:"italian"},{label:"한국어",value:"korean"},{label:"हिन्दी",value:"hindi"},{label:"Nederlands",value:"dutch"},{label:"Polski",value:"polish"},{label:"አማርኛ",value:"amharic"},{label:"Български",value:"bulgarian"},{label:"বাংলা",value:"bengali"},{label:"Čeština",value:"czech"},{label:"Dansk",value:"danish"},{label:"Ελληνικά",value:"greek"},{label:"Eesti",value:"estonian"},{label:"فارسی",value:"persian"},{label:"Filipino",value:"filipino"},{label:"Hrvatski",value:"croatian"},{label:"Magyar",value:"hungarian"},{label:"Bahasa Indonesia",value:"indonesian"},{label:"Lietuvių",value:"lithuanian"},{label:"Latviešu",value:"latvian"},{label:"Melayu",value:"malay"},{label:"Norsk",value:"norwegian"},{label:"Română",value:"romanian"},{label:"Slovenčina",value:"slovak"},{label:"Slovenščina",value:"slovenian"},{label:"Српски",value:"serbian"},{label:"Svenska",value:"swedish"},{label:"ภาษาไทย",value:"thai"},{label:"Türkçe",value:"turkish"},{label:"Українська",value:"ukrainian"},{label:"اردو",value:"urdu"},{label:"Tiếng Việt",value:"vietnamese"}];var sa=[{label:(0,d.__)("Formal","tutor-pro"),value:"formal"},{label:(0,d.__)("Casual","tutor-pro"),value:"casual"},{label:(0,d.__)("Professional","tutor-pro"),value:"professional"},{label:(0,d.__)("Enthusiastic","tutor-pro"),value:"enthusiastic"},{label:(0,d.__)("Informational","tutor-pro"),value:"informational"},{label:(0,d.__)("Funny","tutor-pro"),value:"funny"}];var si=[{label:(0,d.__)("Title","tutor-pro"),value:"title"},{label:(0,d.__)("Essay","tutor-pro"),value:"essay"},{label:(0,d.__)("Paragraph","tutor-pro"),value:"paragraph"},{label:(0,d.__)("Outline","tutor-pro"),value:"outline"}];// CONCATENATED MODULE: ../tutor/assets/react/v3/shared/components/magic-ai-content/PromptControls.tsx
var ss=e=>{var{form:t}=e;return/*#__PURE__*/(0,l/* .jsxs */.FD)("div",{css:sl.wrapper,children:[/*#__PURE__*/(0,l/* .jsx */.Y)(aS,{control:t.control,name:"characters",render:e=>/*#__PURE__*/(0,l/* .jsx */.Y)(ly,(0,p._)((0,f._)({},e),{isMagicAi:true,label:(0,d.__)("Character Limit","tutor-pro"),type:"number"}))}),/*#__PURE__*/(0,l/* .jsx */.Y)(aS,{control:t.control,name:"language",render:e=>/*#__PURE__*/(0,l/* .jsx */.Y)(sr,(0,p._)((0,f._)({},e),{isMagicAi:true,label:(0,d.__)("Language","tutor-pro"),options:so}))}),/*#__PURE__*/(0,l/* .jsx */.Y)(aS,{control:t.control,name:"tone",render:e=>/*#__PURE__*/(0,l/* .jsx */.Y)(sr,(0,p._)((0,f._)({},e),{isMagicAi:true,options:sa,label:(0,d.__)("Tone","tutor-pro")}))}),/*#__PURE__*/(0,l/* .jsx */.Y)(aS,{control:t.control,name:"format",render:e=>/*#__PURE__*/(0,l/* .jsx */.Y)(sr,(0,p._)((0,f._)({},e),{isMagicAi:true,label:(0,d.__)("Format","tutor-pro"),options:si}))})]})};var sl={wrapper:/*#__PURE__*/(0,c/* .css */.AH)("display:grid;grid-template-columns:repeat(2,1fr);gap:",m/* .spacing["16"] */.YK["16"],";")};// CONCATENATED MODULE: ../tutor/assets/react/v3/shared/atoms/Skeleton.tsx
function sc(){var e=(0,g._)(["\n      border-radius: ",";\n    "]);sc=function t(){return e};return e}function sd(){var e=(0,g._)(["\n          background: linear-gradient(89.17deg, #fef4ff 0.2%, #f9d3ff 50.09%, #fef4ff 96.31%);\n        "]);sd=function t(){return e};return e}function su(){var e=(0,g._)(["\n      :after {\n        content: '';\n        background: linear-gradient(90deg, transparent, rgba(0, 0, 0, 0.05), transparent);\n        position: absolute;\n        transform: translateX(-100%);\n        inset: 0;\n        ","\n\n        animation: ","s linear 0.5s infinite normal none running ",";\n      }\n    "]);su=function t(){return e};return e}var sf=/*#__PURE__*/(0,y.forwardRef)((e,t)=>{var{width:r="100%",height:n=16,animation:o=false,isMagicAi:a=false,isRound:i=false,animationDuration:s=1.6,className:c}=e;return/*#__PURE__*/(0,l/* .jsx */.Y)("span",{ref:t,css:sg.skeleton(r,n,o,a,i,s),className:c})});/* export default */const sp=sf;var sh={wave:/*#__PURE__*/(0,c/* .keyframes */.i7)("0%{transform:translateX(-100%);}50%{transform:translateX(0%);}100%{transform:translateX(100%);}")};var sg={skeleton:(e,t,r,n,o,a)=>/*#__PURE__*/(0,c/* .css */.AH)("display:block;width:",(0,i$/* .isNumber */.Et)(e)?"".concat(e,"px"):e,";height:",(0,i$/* .isNumber */.Et)(t)?"".concat(t,"px"):t,";border-radius:",m/* .borderRadius["6"] */.Vq["6"],";background-color:",!n?"rgba(0, 0, 0, 0.11)":m/* .colorTokens.background.magicAi.skeleton */.I6.background.magicAi.skeleton,";position:relative;-webkit-mask-image:-webkit-radial-gradient(center,white,black);overflow:hidden;",o&&(0,c/* .css */.AH)(sc(),m/* .borderRadius.circle */.Vq.circle)," ",r&&(0,c/* .css */.AH)(su(),n&&(0,c/* .css */.AH)(sd()),a,sh.wave))};// CONCATENATED MODULE: ../tutor/assets/react/v3/shared/components/magic-ai-content/SkeletonLoader.tsx
var sm=()=>{return/*#__PURE__*/(0,l/* .jsxs */.FD)("div",{css:sb.container,children:[/*#__PURE__*/(0,l/* .jsxs */.FD)("div",{css:sb.wrapper,children:[/*#__PURE__*/(0,l/* .jsx */.Y)(sp,{animation:true,isMagicAi:true,width:"20%",height:"12px"}),/*#__PURE__*/(0,l/* .jsx */.Y)(sp,{animation:true,isMagicAi:true,width:"100%",height:"12px"}),/*#__PURE__*/(0,l/* .jsx */.Y)(sp,{animation:true,isMagicAi:true,width:"100%",height:"12px"}),/*#__PURE__*/(0,l/* .jsx */.Y)(sp,{animation:true,isMagicAi:true,width:"40%",height:"12px"})]}),/*#__PURE__*/(0,l/* .jsxs */.FD)("div",{css:sb.wrapper,children:[/*#__PURE__*/(0,l/* .jsx */.Y)(sp,{animation:true,isMagicAi:true,width:"80%",height:"12px"}),/*#__PURE__*/(0,l/* .jsx */.Y)(sp,{animation:true,isMagicAi:true,width:"100%",height:"12px"}),/*#__PURE__*/(0,l/* .jsx */.Y)(sp,{animation:true,isMagicAi:true,width:"80%",height:"12px"})]})]})};/* export default */const sv=sm;var sb={wrapper:/*#__PURE__*/(0,c/* .css */.AH)("display:flex;flex-direction:column;gap:",m/* .spacing["8"] */.YK["8"],";"),container:/*#__PURE__*/(0,c/* .css */.AH)("display:flex;flex-direction:column;gap:",m/* .spacing["32"] */.YK["32"],";")};// CONCATENATED MODULE: ../tutor/assets/react/v3/shared/hooks/useFormWithGlobalError.ts
var sy=e=>{var[t,r]=(0,y.useState)();var n=iS(e);return(0,p._)((0,f._)({},n),{submitError:t,setSubmitError:r})};// EXTERNAL MODULE: ./node_modules/@tanstack/react-query/build/legacy/useMutation.js + 1 modules
var s_=r(8582);// EXTERNAL MODULE: ../tutor/assets/react/v3/shared/atoms/Toast.tsx
var sw=r(6218);// EXTERNAL MODULE: ../tutor/assets/react/v3/shared/utils/api.ts + 50 modules
var sx=r(9433);// EXTERNAL MODULE: ../tutor/assets/react/v3/shared/utils/endpoints.ts
var sC=r(2020);// CONCATENATED MODULE: ../tutor/assets/react/v3/shared/services/magic-ai.ts
var sk=e=>{return wpAjaxInstance.post(endpoints.GENERATE_AI_IMAGE,e)};var sA=()=>{return useMutation({mutationFn:sk})};var sY=e=>{return wpAjaxInstance.post(endpoints.MAGIC_FILL_AI_IMAGE,e).then(e=>e.data.data[0].b64_json)};var sM=()=>{var{showToast:e}=useToast();return useMutation({mutationFn:sY,onError:t=>{e({type:"danger",message:convertToErrorMessage(t)})}})};var sD=e=>{return sx/* .wpAjaxInstance.post */.b.post(sC/* ["default"].MAGIC_TEXT_GENERATION */.A.MAGIC_TEXT_GENERATION,e)};var sI=()=>{var{showToast:e}=(0,sw/* .useToast */.d)();return(0,s_/* .useMutation */.n)({mutationFn:sD,onError:t=>{e({type:"danger",message:(0,b/* .convertToErrorMessage */.EL)(t)})}})};var sS=e=>{return sx/* .wpAjaxInstance.post */.b.post(sC/* ["default"].MAGIC_AI_MODIFY_CONTENT */.A.MAGIC_AI_MODIFY_CONTENT,e)};var sT=()=>{var{showToast:e}=(0,sw/* .useToast */.d)();return(0,s_/* .useMutation */.n)({mutationFn:sS,onError:t=>{e({type:"danger",message:(0,b/* .convertToErrorMessage */.EL)(t)})}})};var sF=e=>{return wpAjaxInstance.post(endpoints.USE_AI_GENERATED_IMAGE,e)};var sE=()=>{var{showToast:e}=useToast();return useMutation({mutationFn:sF,onError:t=>{e({type:"danger",message:convertToErrorMessage(t)})}})};var sH=e=>{return wpAjaxInstance.post(endpoints.GENERATE_COURSE_CONTENT,e,{signal:e.signal})};var sN=e=>{var{showToast:t}=useToast();return useMutation({mutationKey:["GenerateCourseContent",e],mutationFn:sH,onError:e=>{t({type:"danger",message:convertToErrorMessage(e)})}})};var sO=e=>{return wpAjaxInstance.post(endpoints.GENERATE_COURSE_CONTENT,e,{signal:e.signal})};var sL=()=>{var{showToast:e}=useToast();return useMutation({mutationFn:sO,onError:t=>{e({type:"danger",message:convertToErrorMessage(t)})}})};var sV=e=>{return wpAjaxInstance.post(endpoints.GENERATE_COURSE_TOPIC_CONTENT,e,{signal:e.signal})};var sW=()=>{var{showToast:e}=useToast();return useMutation({mutationFn:sV,onError:t=>{e({type:"danger",message:convertToErrorMessage(t)})}})};var sP=e=>{return wpAjaxInstance.post(endpoints.SAVE_AI_GENERATED_COURSE_CONTENT,e)};var sK=()=>{var{showToast:e}=useToast();var t=useQueryClient();return useMutation({mutationFn:sP,onSuccess(){t.invalidateQueries({queryKey:["CourseDetails"]})},onError:t=>{e({type:"danger",message:convertToErrorMessage(t)})}})};var sB=e=>{return wpAjaxInstance.post(endpoints.GENERATE_QUIZ_QUESTIONS,e,{signal:e.signal})};var sj=()=>{var{showToast:e}=useToast();return useMutation({mutationFn:sB,onError:t=>{e({type:"danger",message:convertToErrorMessage(t)})}})};var sz=e=>{return sx/* .wpAjaxInstance.post */.b.post(sC/* ["default"].OPEN_AI_SAVE_SETTINGS */.A.OPEN_AI_SAVE_SETTINGS,(0,f._)({},e))};var sR=()=>{var{showToast:e}=(0,sw/* .useToast */.d)();return(0,s_/* .useMutation */.n)({mutationFn:sz,onSuccess:t=>{e({type:"success",message:t.message})},onError:t=>{e({type:"danger",message:(0,b/* .convertToErrorMessage */.EL)(t)})}})};// EXTERNAL MODULE: ../tutor/assets/react/v3/shared/components/modals/BasicModalWrapper.tsx
var sq=r(3086);// CONCATENATED MODULE: ../tutor/assets/react/v3/shared/components/modals/AITextModal.tsx
var sU=[(0,d.__)("Mastering Digital Marketing: A Complete Guide","tutor-pro"),(0,d.__)("The Ultimate Photoshop Course for Beginners","tutor-pro"),(0,d.__)("Python Programming: From Zero to Hero","tutor-pro"),(0,d.__)("Creative Writing Essentials: Unlock Your Storytelling Potential","tutor-pro"),(0,d.__)("The Complete Guide to Web Development with React","tutor-pro"),(0,d.__)("Master Public Speaking: Deliver Powerful Presentations","tutor-pro"),(0,d.__)("Excel for Business: From Basics to Advanced Analytics","tutor-pro"),(0,d.__)("Fitness Fundamentals: Build Strength and Confidence","tutor-pro"),(0,d.__)("Photography Made Simple: Capture Stunning Shots","tutor-pro"),(0,d.__)("Financial Freedom: Learn the Basics of Investing","tutor-pro")];var sZ=e=>{var{title:t,icon:r,closeModal:n,field:o,format:a="essay",characters:i=250,is_html:s=false,fieldLabel:u="",fieldPlaceholder:h=""}=e;var g=sy({defaultValues:{prompt:"",characters:i,language:"english",tone:"formal",format:a}});var v=sI();var _=sT();var[w,x]=(0,y.useState)([]);var[C,k]=(0,y.useState)(0);var[A,Y]=(0,y.useState)(false);var[M,D]=(0,y.useState)(null);var I=(0,y.useRef)(null);var T=(0,y.useRef)(null);var F=(0,y.useMemo)(()=>{return w[C]},[w,C]);var E=g.watch("prompt");function H(e){x(t=>[e,...t]);k(0)}function N(e,t){return o8(function*(){if(w.length===0){return}var r=w[C];if(e==="translation"&&!!t){var n=yield _.mutateAsync({type:"translation",content:r,language:t,is_html:s});if(n.data){H(n.data)}return}if(e==="change_tone"&&!!t){var o=yield _.mutateAsync({type:"change_tone",content:r,tone:t,is_html:s});if(o.data){H(o.data)}return}var a=yield _.mutateAsync({type:e,content:r,is_html:s});if(a.data){H(a.data)}})()}(0,y.useEffect)(()=>{g.setFocus("prompt");// eslint-disable-next-line react-hooks/exhaustive-deps
},[]);return/*#__PURE__*/(0,l/* .jsx */.Y)(sq/* ["default"] */.A,{onClose:n,title:t,icon:r,maxWidth:524,children:/*#__PURE__*/(0,l/* .jsxs */.FD)("form",{onSubmit:g.handleSubmit(e=>o8(function*(){var t=yield v.mutateAsync((0,p._)((0,f._)({},e),{is_html:s}));if(t.data){H(t.data)}})()),children:[/*#__PURE__*/(0,l/* .jsxs */.FD)("div",{css:sG.container,children:[/*#__PURE__*/(0,l/* .jsxs */.FD)("div",{css:sG.fieldsWrapper,children:[/*#__PURE__*/(0,l/* .jsx */.Y)(aS,{control:g.control,name:"prompt",render:e=>/*#__PURE__*/(0,l/* .jsx */.Y)(ij,(0,p._)((0,f._)({},e),{label:u||(0,d.__)("Craft Your Course Description","tutor-pro"),placeholder:h||(0,d.__)("Provide a brief overview of your course topic, target audience, and key takeaways","tutor-pro"),rows:4,isMagicAi:true}))}),/*#__PURE__*/(0,l/* .jsxs */.FD)("button",{type:"button",css:sG.inspireButton,onClick:()=>{var e=sU.length;var t=Math.floor(Math.random()*e);g.reset((0,p._)((0,f._)({},g.getValues()),{prompt:sU[t]}))},children:[/*#__PURE__*/(0,l/* .jsx */.Y)(S/* ["default"] */.A,{name:"bulbLine"}),(0,d.__)("Inspire Me","tutor-pro")]})]}),/*#__PURE__*/(0,l/* .jsx */.Y)(iZ/* ["default"] */.A,{when:!v.isPending&&!_.isPending,fallback:/*#__PURE__*/(0,l/* .jsx */.Y)(sv,{}),children:/*#__PURE__*/(0,l/* .jsxs */.FD)(iZ/* ["default"] */.A,{when:w.length>0,fallback:/*#__PURE__*/(0,l/* .jsx */.Y)(ss,{form:g}),children:[/*#__PURE__*/(0,l/* .jsxs */.FD)("div",{children:[/*#__PURE__*/(0,l/* .jsxs */.FD)("div",{css:sG.actionBar,children:[/*#__PURE__*/(0,l/* .jsx */.Y)("div",{css:sG.navigation,children:/*#__PURE__*/(0,l/* .jsxs */.FD)(iZ/* ["default"] */.A,{when:w.length>1,children:[/*#__PURE__*/(0,l/* .jsx */.Y)(oH/* ["default"] */.A,{variant:"text",onClick:()=>k(e=>Math.max(0,e-1)),disabled:C===0,children:/*#__PURE__*/(0,l/* .jsx */.Y)(S/* ["default"] */.A,{name:!oN/* .isRTL */.V8?"chevronLeft":"chevronRight",width:20,height:20})}),/*#__PURE__*/(0,l/* .jsxs */.FD)("div",{css:sG.pageInfo,children:[/*#__PURE__*/(0,l/* .jsx */.Y)("span",{children:C+1})," / ",w.length]}),/*#__PURE__*/(0,l/* .jsx */.Y)(oH/* ["default"] */.A,{variant:"text",onClick:()=>k(e=>Math.min(w.length-1,e+1)),disabled:C===w.length-1,children:/*#__PURE__*/(0,l/* .jsx */.Y)(S/* ["default"] */.A,{name:!oN/* .isRTL */.V8?"chevronRight":"chevronLeft",width:20,height:20})})]})}),/*#__PURE__*/(0,l/* .jsx */.Y)(oH/* ["default"] */.A,{variant:"text",onClick:()=>o8(function*(){if(w.length===0){return}var e=w[C];yield(0,b/* .copyToClipboard */.lW)(e);Y(true);setTimeout(()=>{Y(false)},1500)})(),children:/*#__PURE__*/(0,l/* .jsx */.Y)(iZ/* ["default"] */.A,{when:A,fallback:/*#__PURE__*/(0,l/* .jsx */.Y)(S/* ["default"] */.A,{name:"copy",width:20,height:20}),children:/*#__PURE__*/(0,l/* .jsx */.Y)(S/* ["default"] */.A,{name:"checkFilled",width:20,height:20,style:/*#__PURE__*/(0,c/* .css */.AH)("color:",m/* .colorTokens.text.success */.I6.text.success," !important;")})})})]}),/*#__PURE__*/(0,l/* .jsx */.Y)("div",{css:sG.content,dangerouslySetInnerHTML:{__html:F}})]}),/*#__PURE__*/(0,l/* .jsxs */.FD)("div",{css:sG.otherActions,children:[/*#__PURE__*/(0,l/* .jsx */.Y)(iN,{variant:"outline",roundedFull:false,onClick:()=>N("rephrase"),children:(0,d.__)("Rephrase","tutor-pro")}),/*#__PURE__*/(0,l/* .jsx */.Y)(iN,{variant:"outline",roundedFull:false,onClick:()=>N("make_shorter"),children:(0,d.__)("Make Shorter","tutor-pro")}),/*#__PURE__*/(0,l/* .jsxs */.FD)(iN,{variant:"outline",roundedFull:false,ref:I,onClick:()=>D("tone"),children:[(0,d.__)("Change Tone","tutor-pro"),/*#__PURE__*/(0,l/* .jsx */.Y)(S/* ["default"] */.A,{name:"chevronDown",width:16,height:16})]}),/*#__PURE__*/(0,l/* .jsxs */.FD)(iN,{variant:"outline",roundedFull:false,ref:T,onClick:()=>D("translate"),children:[(0,d.__)("Translate to","tutor-pro"),/*#__PURE__*/(0,l/* .jsx */.Y)(S/* ["default"] */.A,{name:"chevronDown",width:16,height:16})]}),/*#__PURE__*/(0,l/* .jsx */.Y)(iN,{variant:"outline",roundedFull:false,onClick:()=>N("write_as_bullets"),children:(0,d.__)("Write as Bullets","tutor-pro")}),/*#__PURE__*/(0,l/* .jsx */.Y)(iN,{variant:"outline",roundedFull:false,onClick:()=>N("make_longer"),children:(0,d.__)("Make Longer","tutor-pro")}),/*#__PURE__*/(0,l/* .jsx */.Y)(iN,{variant:"outline",roundedFull:false,onClick:()=>N("simplify_language"),children:(0,d.__)("Simplify Language","tutor-pro")})]})]})})]}),/*#__PURE__*/(0,l/* .jsx */.Y)(iV/* ["default"] */.A,{isOpen:M==="tone",triggerRef:I,arrow:true,closePopover:()=>D(null),maxWidth:"160px",animationType:iQ/* .AnimationType.slideDown */.J6.slideDown,children:/*#__PURE__*/(0,l/* .jsx */.Y)(iq,{options:sa,onChange:e=>o8(function*(){D(null);yield N("change_tone",e)})()})}),/*#__PURE__*/(0,l/* .jsx */.Y)(iV/* ["default"] */.A,{isOpen:M==="translate",triggerRef:T,closePopover:()=>D(null),maxWidth:"160px",animationType:iQ/* .AnimationType.slideDown */.J6.slideDown,children:/*#__PURE__*/(0,l/* .jsx */.Y)(iq,{options:so,onChange:e=>o8(function*(){D(null);yield N("translation",e)})()})}),/*#__PURE__*/(0,l/* .jsx */.Y)("div",{css:sG.footer,children:/*#__PURE__*/(0,l/* .jsxs */.FD)(iZ/* ["default"] */.A,{when:w.length>0,fallback:/*#__PURE__*/(0,l/* .jsxs */.FD)(iN,{type:"submit",disabled:v.isPending||!E||_.isPending,children:[/*#__PURE__*/(0,l/* .jsx */.Y)(S/* ["default"] */.A,{name:"magicWand",width:24,height:24}),(0,d.__)("Generate Now","tutor-pro")]}),children:[/*#__PURE__*/(0,l/* .jsx */.Y)(iN,{variant:"outline",type:"submit",disabled:v.isPending||!E||_.isPending,children:(0,d.__)("Generate Again","tutor-pro")}),/*#__PURE__*/(0,l/* .jsx */.Y)(iN,{variant:"primary",disabled:v.isPending||w.length===0||_.isPending,onClick:()=>{o.onChange(w[C]);n()},children:(0,d.__)("Use This","tutor-pro")})]})})]})})};/* export default */const sQ=sZ;var sG={container:/*#__PURE__*/(0,c/* .css */.AH)("padding:",m/* .spacing["20"] */.YK["20"],";display:flex;flex-direction:column;gap:",m/* .spacing["16"] */.YK["16"],";"),fieldsWrapper:/*#__PURE__*/(0,c/* .css */.AH)("position:relative;textarea{padding-bottom:",m/* .spacing["40"] */.YK["40"]," !important;}"),footer:/*#__PURE__*/(0,c/* .css */.AH)("padding:",m/* .spacing["12"] */.YK["12"]," ",m/* .spacing["16"] */.YK["16"],";display:flex;align-items:center;justify-content:end;gap:",m/* .spacing["10"] */.YK["10"],";box-shadow:0px 1px 0px 0px #e4e5e7 inset;button{width:fit-content;}"),pageInfo:/*#__PURE__*/(0,c/* .css */.AH)(v/* .typography.caption */.I.caption(),";color:",m/* .colorTokens.text.hints */.I6.text.hints,";& > span{font-weight:",m/* .fontWeight.medium */.Wy.medium,";color:",m/* .colorTokens.text.primary */.I6.text.primary,";}"),inspireButton:/*#__PURE__*/(0,c/* .css */.AH)(oL/* .styleUtils.resetButton */.x.resetButton,";",v/* .typography.small */.I.small(),";position:absolute;height:28px;bottom:",m/* .spacing["12"] */.YK["12"],";left:",m/* .spacing["12"] */.YK["12"],";border:1px solid ",m/* .colorTokens.stroke.brand */.I6.stroke.brand,";border-radius:",m/* .borderRadius["4"] */.Vq["4"],";display:flex;align-items:center;gap:",m/* .spacing["4"] */.YK["4"],";color:",m/* .colorTokens.text.brand */.I6.text.brand,";padding-inline:",m/* .spacing["12"] */.YK["12"],";background-color:",m/* .colorTokens.background.white */.I6.background.white,";&:hover{background-color:",m/* .colorTokens.background.brand */.I6.background.brand,";color:",m/* .colorTokens.text.white */.I6.text.white,";}&:focus-visible{outline:2px solid ",m/* .colorTokens.stroke.brand */.I6.stroke.brand,";outline-offset:1px;}&:disabled{background-color:",m/* .colorTokens.background.disable */.I6.background.disable,";color:",m/* .colorTokens.text.disable */.I6.text.disable,";}"),navigation:/*#__PURE__*/(0,c/* .css */.AH)("margin-left:-",m/* .spacing["8"] */.YK["8"],";display:flex;align-items:center;"),content:/*#__PURE__*/(0,c/* .css */.AH)(v/* .typography.caption */.I.caption(),";height:180px;overflow-y:auto;background-color:",m/* .colorTokens.background.magicAi["default"] */.I6.background.magicAi["default"],";border-radius:",m/* .borderRadius["6"] */.Vq["6"],";padding:",m/* .spacing["6"] */.YK["6"]," ",m/* .spacing["12"] */.YK["12"],";color:",m/* .colorTokens.text.magicAi */.I6.text.magicAi,";"),actionBar:/*#__PURE__*/(0,c/* .css */.AH)("display:flex;align-items:center;justify-content:space-between;"),otherActions:/*#__PURE__*/(0,c/* .css */.AH)("display:flex;gap:",m/* .spacing["10"] */.YK["10"],";flex-wrap:wrap;& > button{width:fit-content;}")};// EXTERNAL MODULE: ../tutor/assets/react/v3/shared/components/modals/Modal.tsx
var s$=r(4259);// EXTERNAL MODULE: ../tutor/assets/react/v3/shared/config/config.ts
var sX=r(2929);// CONCATENATED MODULE: ../tutor/assets/react/v3/shared/components/modals/ProIdentifierModal.tsx
var sJ={title:/*#__PURE__*/(0,l/* .jsxs */.FD)(l/* .Fragment */.FK,{children:[(0,d.__)("Upgrade to Tutor LMS Pro today and experience the power of ","tutor-pro"),/*#__PURE__*/(0,l/* .jsx */.Y)("span",{css:oL/* .styleUtils.aiGradientText */.x.aiGradientText,children:(0,d.__)("AI Studio","tutor-pro")})]}),message:(0,d.__)("Upgrade your plan to access the AI feature","tutor-pro"),featuresTitle:(0,d.__)("Don’t miss out on this game-changing feature!","tutor-pro"),features:[(0,d.__)("Generate a complete course outline in seconds!","tutor-pro"),(0,d.__)("Let the AI Studio create Quizzes on your behalf and give your brain a well-deserved break.","tutor-pro"),(0,d.__)("Generate images, customize backgrounds, and even remove unwanted objects with ease.","tutor-pro"),(0,d.__)("Say goodbye to typos and grammar errors with AI-powered copy editing.","tutor-pro")],footer:/*#__PURE__*/(0,l/* .jsx */.Y)(oH/* ["default"] */.A,{onClick:()=>window.open(sX/* ["default"].TUTOR_PRICING_PAGE */.A.TUTOR_PRICING_PAGE,"_blank","noopener"),icon:/*#__PURE__*/(0,l/* .jsx */.Y)(S/* ["default"] */.A,{name:"crown",width:24,height:24}),children:(0,d.__)("Get Tutor LMS Pro","tutor-pro")})};var s0=e=>{var{title:t=sJ.title,message:r=sJ.message,featuresTitle:n=sJ.featuresTitle,features:o=sJ.features,closeModal:a,image:i,image2x:s,footer:c=sJ.footer}=e;return/*#__PURE__*/(0,l/* .jsx */.Y)(sq/* ["default"] */.A,{onClose:a,entireHeader:/*#__PURE__*/(0,l/* .jsx */.Y)("span",{css:s2.message,children:r}),maxWidth:496,children:/*#__PURE__*/(0,l/* .jsxs */.FD)("div",{css:s2.wrapper,children:[/*#__PURE__*/(0,l/* .jsx */.Y)(iZ/* ["default"] */.A,{when:t,children:/*#__PURE__*/(0,l/* .jsx */.Y)("h4",{css:s2.title,children:t})}),/*#__PURE__*/(0,l/* .jsx */.Y)(iZ/* ["default"] */.A,{when:i,children:/*#__PURE__*/(0,l/* .jsx */.Y)("img",{css:s2.image,src:i,alt:typeof t==="string"?t:(0,d.__)("Illustration","tutor-pro"),srcSet:s?"".concat(i," ").concat(s," 2x"):undefined})}),/*#__PURE__*/(0,l/* .jsx */.Y)(iZ/* ["default"] */.A,{when:n,children:/*#__PURE__*/(0,l/* .jsx */.Y)("h6",{css:s2.featuresTiTle,children:n})}),/*#__PURE__*/(0,l/* .jsx */.Y)(iZ/* ["default"] */.A,{when:o.length,children:/*#__PURE__*/(0,l/* .jsx */.Y)("div",{css:s2.features,children:/*#__PURE__*/(0,l/* .jsx */.Y)(iR/* ["default"] */.A,{each:o,children:(e,t)=>/*#__PURE__*/(0,l/* .jsxs */.FD)("div",{css:s2.feature,children:[/*#__PURE__*/(0,l/* .jsx */.Y)(S/* ["default"] */.A,{name:"materialCheck",width:20,height:20,style:s2.checkIcon}),/*#__PURE__*/(0,l/* .jsx */.Y)("span",{children:e})]},t)})})}),/*#__PURE__*/(0,l/* .jsx */.Y)(iZ/* ["default"] */.A,{when:c,children:c})]})})};/* export default */const s1=s0;var s2={wrapper:/*#__PURE__*/(0,c/* .css */.AH)("padding:0 ",m/* .spacing["24"] */.YK["24"]," ",m/* .spacing["32"] */.YK["32"]," ",m/* .spacing["24"] */.YK["24"],";",oL/* .styleUtils.display.flex */.x.display.flex("column"),";gap:",m/* .spacing["16"] */.YK["16"],";"),message:/*#__PURE__*/(0,c/* .css */.AH)(v/* .typography.small */.I.small(),";color:",m/* .colorTokens.text.subdued */.I6.text.subdued,";padding-left:",m/* .spacing["8"] */.YK["8"],";padding-top:",m/* .spacing["24"] */.YK["24"],";padding-bottom:",m/* .spacing["4"] */.YK["4"],";"),title:/*#__PURE__*/(0,c/* .css */.AH)(v/* .typography.heading6 */.I.heading6("medium"),";color:",m/* .colorTokens.text.primary */.I6.text.primary,";text-wrap:pretty;"),image:/*#__PURE__*/(0,c/* .css */.AH)("height:270px;width:100%;object-fit:cover;object-position:center;border-radius:",m/* .borderRadius["8"] */.Vq["8"],";"),featuresTiTle:/*#__PURE__*/(0,c/* .css */.AH)(v/* .typography.body */.I.body("medium"),";color:",m/* .colorTokens.text.primary */.I6.text.primary,";text-wrap:pretty;"),features:/*#__PURE__*/(0,c/* .css */.AH)(oL/* .styleUtils.display.flex */.x.display.flex("column"),";gap:",m/* .spacing["4"] */.YK["4"],";padding-right:",m/* .spacing["48"] */.YK["48"],";"),feature:/*#__PURE__*/(0,c/* .css */.AH)(oL/* .styleUtils.display.flex */.x.display.flex(),";gap:",m/* .spacing["12"] */.YK["12"],";",v/* .typography.small */.I.small(),";color:",m/* .colorTokens.text.title */.I6.text.title,";span{text-wrap:pretty;}"),checkIcon:/*#__PURE__*/(0,c/* .css */.AH)("flex-shrink:0;color:",m/* .colorTokens.text.success */.I6.text.success,";")};// CONCATENATED MODULE: ../tutor/assets/react/v3/shared/atoms/Alert.tsx
var s5={text:{warning:"#D47E00",success:"#D47E00",danger:"#f44337",info:"#D47E00",primary:"#D47E00"},icon:{warning:"#FAB000",success:"#FAB000",danger:"#f55e53",info:"#FAB000",primary:"#FAB000"},background:{warning:"#FBFAE9",success:"#FBFAE9",danger:"#fdd9d7",info:"#FBFAE9",primary:"#FBFAE9"}};var s6=e=>{var{children:t,type:r="warning",icon:n}=e;return/*#__PURE__*/(0,l/* .jsxs */.FD)("div",{css:s8.wrapper({type:r}),children:[/*#__PURE__*/(0,l/* .jsx */.Y)(iZ/* ["default"] */.A,{when:n,children:e=>/*#__PURE__*/(0,l/* .jsx */.Y)(S/* ["default"] */.A,{style:s8.icon({type:r}),name:e,height:24,width:24})}),/*#__PURE__*/(0,l/* .jsx */.Y)("span",{children:t})]})};/* export default */const s9=s6;var s8={wrapper:e=>{var{type:t}=e;return/*#__PURE__*/(0,c/* .css */.AH)(v/* .typography.caption */.I.caption(),";display:flex;align-items:start;padding:",m/* .spacing["8"] */.YK["8"]," ",m/* .spacing["12"] */.YK["12"],";width:100%;border-radius:",m/* .borderRadius.card */.Vq.card,";gap:",m/* .spacing["4"] */.YK["4"],";background-color:",s5.background[t],";color:",s5.text[t],";")},icon:e=>{var{type:t}=e;return/*#__PURE__*/(0,c/* .css */.AH)("color:",s5.icon[t],";flex-shrink:0;")}};// EXTERNAL MODULE: ../tutor/assets/react/v3/shared/components/fields/FormSwitch.tsx + 1 modules
var s3=r(2779);// CONCATENATED MODULE: ../tutor/assets/react/v3/shared/utils/validation.ts
var s7=()=>({required:{value:true,message:(0,d.__)("This field is required","tutor-pro")}});var s4=e=>{var{maxValue:t,message:r}=e;return{maxLength:{value:t,message:r||__("Max. value should be ".concat(t),"tutor-pro")}}};var le=()=>({validate:e=>{if((e===null||e===void 0?void 0:e.amount)===undefined){return __("The field is required","tutor-pro")}return undefined}});var lt=e=>{if(!isValid(new Date(e||""))){return __("Invalid date entered!","tutor-pro")}return undefined};var lr=e=>({validate:t=>{if(t&&e<t.length){return __("Maximum ".concat(e," character supported"),"tutor-pro")}return undefined}});var ln=e=>{if(!e){return undefined}var t=__("Invalid time entered!","tutor-pro");var[r,n]=e.split(":");if(!r||!n){return t}var[o,a]=n.split(" ");if(!o||!a){return t}if(r.length!==2||o.length!==2){return t}if(Number(r)<1||Number(r)>12){return t}if(Number(o)<0||Number(o)>59){return t}if(!["am","pm"].includes(a.toLowerCase())){return t}return undefined};// CONCATENATED MODULE: ../tutor/assets/react/v3/shared/components/modals/SetupOpenAiModal.tsx
function lo(){var e=(0,g._)(["\n      padding: ",";\n      padding-top: ",";\n    "]);lo=function t(){return e};return e}var la,li;var ls=((la=sX/* .tutorConfig.settings */.P.settings)===null||la===void 0?void 0:la.chatgpt_enable)==="on";var ll=(li=sX/* .tutorConfig.current_user.roles */.P.current_user.roles)===null||li===void 0?void 0:li.includes(oN/* .TutorRoles.ADMINISTRATOR */.gt.ADMINISTRATOR);var lc=e=>{var{closeModal:t,image:r,image2x:n}=e;var o=sy({defaultValues:{openAIApiKey:"",enable_open_ai:ls},shouldFocusError:true});var a=sR();var i=e=>o8(function*(){var r=yield a.mutateAsync({chatgpt_api_key:e.openAIApiKey,chatgpt_enable:e.enable_open_ai?1:0});if(r.status_code===200){t({action:"CONFIRM"});window.location.reload()}})();(0,y.useEffect)(()=>{o.setFocus("openAIApiKey");// eslint-disable-next-line react-hooks/exhaustive-deps
},[]);return/*#__PURE__*/(0,l/* .jsx */.Y)(sq/* ["default"] */.A,{onClose:()=>t({action:"CLOSE"}),title:ll?(0,d.__)("Set OpenAI API key","tutor-pro"):undefined,entireHeader:ll?undefined:/*#__PURE__*/(0,l/* .jsx */.Y)(l/* .Fragment */.FK,{children:" "}),maxWidth:560,children:/*#__PURE__*/(0,l/* .jsx */.Y)("div",{css:lu.wrapper({isCurrentUserAdmin:ll}),children:/*#__PURE__*/(0,l/* .jsx */.Y)(iZ/* ["default"] */.A,{when:ll,fallback:/*#__PURE__*/(0,l/* .jsxs */.FD)(l/* .Fragment */.FK,{children:[/*#__PURE__*/(0,l/* .jsx */.Y)("img",{css:lu.image,src:r,srcSet:n?"".concat(r," 1x, ").concat(n," 2x"):"".concat(r," 1x"),alt:(0,d.__)("Connect API KEY","tutor-pro")}),/*#__PURE__*/(0,l/* .jsxs */.FD)("div",{children:[/*#__PURE__*/(0,l/* .jsx */.Y)("div",{css:lu.message,children:(0,d.__)("API is not connected","tutor-pro")}),/*#__PURE__*/(0,l/* .jsx */.Y)("div",{css:lu.title,children:(0,d.__)("Please, ask your Admin to connect the API with Tutor LMS Pro.","tutor-pro")})]})]}),children:/*#__PURE__*/(0,l/* .jsxs */.FD)(l/* .Fragment */.FK,{children:[/*#__PURE__*/(0,l/* .jsxs */.FD)("form",{css:lu.formWrapper,onSubmit:o.handleSubmit(i),children:[/*#__PURE__*/(0,l/* .jsxs */.FD)("div",{css:lu.infoText,children:[/*#__PURE__*/(0,l/* .jsx */.Y)("div",{dangerouslySetInnerHTML:{/* translators: %1$s and %2$s are opening and closing anchor tags for the "OpenAI User settings" link */__html:(0,d.sprintf)((0,d.__)("Find your Secret API key in your %1$sOpenAI User settings%2$s and paste it here to connect OpenAI with your Tutor LMS website.","tutor-pro"),'<a href="'.concat(sX/* ["default"].CHATGPT_PLATFORM_URL */.A.CHATGPT_PLATFORM_URL,'" target="_blank" rel="noopener noreferrer">'),"</a>")}}),/*#__PURE__*/(0,l/* .jsx */.Y)(s9,{type:"info",icon:"warning",children:(0,d.__)("The page will reload after submission. Make sure to save the course information.","tutor-pro")})]}),/*#__PURE__*/(0,l/* .jsx */.Y)(aS,{name:"openAIApiKey",control:o.control,rules:s7(),render:e=>/*#__PURE__*/(0,l/* .jsx */.Y)(ly,(0,p._)((0,f._)({},e),{type:"password",isPassword:true,label:(0,d.__)("OpenAI API key","tutor-pro"),placeholder:(0,d.__)("Enter your OpenAI API key","tutor-pro")}))}),/*#__PURE__*/(0,l/* .jsx */.Y)(aS,{name:"enable_open_ai",control:o.control,render:e=>/*#__PURE__*/(0,l/* .jsx */.Y)(s3/* ["default"] */.A,(0,p._)((0,f._)({},e),{label:(0,d.__)("Enable OpenAI","tutor-pro")}))})]}),/*#__PURE__*/(0,l/* .jsxs */.FD)("div",{css:lu.formFooter,children:[/*#__PURE__*/(0,l/* .jsx */.Y)(oH/* ["default"] */.A,{onClick:()=>t({action:"CLOSE"}),variant:"text",size:"small",children:(0,d.__)("Cancel","tutor-pro")}),/*#__PURE__*/(0,l/* .jsx */.Y)(oH/* ["default"] */.A,{size:"small",onClick:o.handleSubmit(i),loading:a.isPending,children:(0,d.__)("Save","tutor-pro")})]})]})})})})};/* export default */const ld=lc;var lu={wrapper:e=>{var{isCurrentUserAdmin:t}=e;return/*#__PURE__*/(0,c/* .css */.AH)(oL/* .styleUtils.display.flex */.x.display.flex("column"),";gap:",m/* .spacing["20"] */.YK["20"],";",!t&&(0,c/* .css */.AH)(lo(),m/* .spacing["24"] */.YK["24"],m/* .spacing["6"] */.YK["6"]))},formWrapper:/*#__PURE__*/(0,c/* .css */.AH)(oL/* .styleUtils.display.flex */.x.display.flex("column"),";gap:",m/* .spacing["20"] */.YK["20"],";padding:",m/* .spacing["16"] */.YK["16"]," ",m/* .spacing["16"] */.YK["16"]," 0 ",m/* .spacing["16"] */.YK["16"],";"),infoText:/*#__PURE__*/(0,c/* .css */.AH)(v/* .typography.small */.I.small(),";",oL/* .styleUtils.display.flex */.x.display.flex("column"),";gap:",m/* .spacing["8"] */.YK["8"],";color:",m/* .colorTokens.text.subdued */.I6.text.subdued,";a{",oL/* .styleUtils.resetButton */.x.resetButton,"      color:",m/* .colorTokens.text.brand */.I6.text.brand,";}"),formFooter:/*#__PURE__*/(0,c/* .css */.AH)(oL/* .styleUtils.display.flex */.x.display.flex(),";justify-content:flex-end;gap:",m/* .spacing["16"] */.YK["16"],";border-top:1px solid ",m/* .colorTokens.stroke.divider */.I6.stroke.divider,";padding:",m/* .spacing["16"] */.YK["16"],";"),image:/*#__PURE__*/(0,c/* .css */.AH)("height:310px;width:100%;object-fit:cover;object-position:center;border-radius:",m/* .borderRadius["8"] */.Vq["8"],";"),message:/*#__PURE__*/(0,c/* .css */.AH)(v/* .typography.small */.I.small(),";color:",m/* .colorTokens.text.subdued */.I6.text.subdued,";"),title:/*#__PURE__*/(0,c/* .css */.AH)(v/* .typography.heading4 */.I.heading4("medium"),";color:",m/* .colorTokens.text.primary */.I6.text.primary,";margin-top:",m/* .spacing["4"] */.YK["4"],";text-wrap:pretty;")};// CONCATENATED MODULE: ../tutor/assets/react/v3/public/images/pro-placeholders/generate-text-2x.webp
const lf=r.p+"images/generate-text-2x-45983f4c.webp";// CONCATENATED MODULE: ../tutor/assets/react/v3/public/images/pro-placeholders/generate-text.webp
const lp=r.p+"images/generate-text-269f7e17.webp";// CONCATENATED MODULE: ../tutor/assets/react/v3/shared/components/fields/FormInput.tsx
function lh(){var e=(0,g._)(["\n      svg {\n        color: ",";\n      }\n    "]);lh=function t(){return e};return e}var lg;var lm=!!sX/* .tutorConfig.tutor_pro_url */.P.tutor_pro_url;var lv=(lg=sX/* .tutorConfig.settings */.P.settings)===null||lg===void 0?void 0:lg.chatgpt_key_exist;var lb=e=>{var{label:t,type:r="text",maxLimit:n,field:o,fieldState:a,disabled:i,readOnly:s,loading:c,placeholder:u,helpText:h,onChange:g,onKeyDown:m,isHidden:v,isClearable:_=false,isSecondary:w=false,removeBorder:x,dataAttribute:C,isInlineLabel:k=false,isPassword:A=false,style:Y,selectOnFocus:M=false,autoFocus:D=false,generateWithAi:I=false,isMagicAi:T=false,allowNegative:E=false,onClickAiButton:H}=e;var[N,O]=(0,y.useState)(r);var{showModal:L}=(0,s$/* .useModal */.h)();var V=(0,y.useRef)(null);var W;var P=(W=o.value)!==null&&W!==void 0?W:"";var K=undefined;if(N==="number"){P=(0,b/* .parseNumberOnly */.TW)("".concat(P),E).replace(/(\..*)\./g,"$1")}if(n){K={maxLimit:n,inputCharacter:P.toString().length}}var B=(0,f._)({},(0,i$/* .isDefined */.O9)(C)&&{[C]:true});var j=()=>{if(!lm){L({component:s1,props:{image:lp,image2x:lf}})}else if(!lv){L({component:ld,props:{image:lp,image2x:lf}})}else{L({component:sQ,isMagicAi:true,props:{title:(0,d.__)("AI Studio","tutor-pro"),icon:/*#__PURE__*/(0,l/* .jsx */.Y)(S/* ["default"] */.A,{name:"magicAiColorize",width:24,height:24}),characters:120,field:o,fieldState:a,format:"title",is_html:false,fieldLabel:(0,d.__)("Create a Compelling Title","tutor-pro"),fieldPlaceholder:(0,d.__)("Describe the main focus of your course in a few words","tutor-pro")}});H===null||H===void 0?void 0:H()}};return/*#__PURE__*/(0,l/* .jsx */.Y)(F/* ["default"] */.A,{label:t,field:o,fieldState:a,disabled:i,readOnly:s,loading:c,placeholder:u,helpText:h,isHidden:v,characterCount:K,isSecondary:w,removeBorder:x,isInlineLabel:k,inputStyle:Y,generateWithAi:I,onClickAiButton:j,isMagicAi:T,children:e=>{return/*#__PURE__*/(0,l/* .jsx */.Y)(l/* .Fragment */.FK,{children:/*#__PURE__*/(0,l/* .jsxs */.FD)("div",{css:l_.container(_||A),children:[/*#__PURE__*/(0,l/* .jsx */.Y)("input",(0,p._)((0,f._)({},o,e,B),{type:N==="number"?"text":N,value:P,autoFocus:D,onChange:e=>{var{value:t}=e.target;var r=N==="number"?(0,b/* .parseNumberOnly */.TW)(t):t;o.onChange(r);if(g){g(r)}},onClick:e=>{e.stopPropagation()},onKeyDown:e=>{e.stopPropagation();m===null||m===void 0?void 0:m(e.key)},autoComplete:"off",ref:e=>{o.ref(e);// @ts-ignore
V.current=e;// this is not ideal but it is the only way to set ref to the input element
},onFocus:()=>{if(!M||!V.current){return}V.current.select()}})),/*#__PURE__*/(0,l/* .jsx */.Y)(iZ/* ["default"] */.A,{when:A,children:/*#__PURE__*/(0,l/* .jsx */.Y)(oH/* ["default"] */.A,{isIconOnly:true,variant:"text",size:"small",onClick:()=>O(e=>e==="password"?"text":"password"),icon:/*#__PURE__*/(0,l/* .jsx */.Y)(S/* ["default"] */.A,{name:"eye",width:24,height:24}),"aria-label":(0,d.__)("Show/Hide Password","tutor-pro"),buttonCss:l_.eyeButton({type:N})})}),/*#__PURE__*/(0,l/* .jsx */.Y)(iZ/* ["default"] */.A,{when:_&&!!o.value&&N!=="password",children:/*#__PURE__*/(0,l/* .jsx */.Y)(oH/* ["default"] */.A,{isIconOnly:true,variant:"text",size:"small",onClick:()=>o.onChange(""),buttonCss:oL/* .styleUtils.inputClearButton */.x.inputClearButton,icon:/*#__PURE__*/(0,l/* .jsx */.Y)(S/* ["default"] */.A,{name:"cross",width:24,height:24}),"aria-label":(0,d.__)("Clear","tutor-pro")})})]})})}})};/* export default */const ly=(0,iW/* .withVisibilityControl */.M)(lb);var l_={container:e=>/*#__PURE__*/(0,c/* .css */.AH)("position:relative;display:flex;input{&.tutor-input-field{",e&&"padding-right: ".concat(m/* .spacing["36"] */.YK["36"],";"),";}}"),eyeButton:e=>{var{type:t}=e;return/*#__PURE__*/(0,c/* .css */.AH)(oL/* .styleUtils.inputClearButton */.x.inputClearButton,";",t!=="password"&&(0,c/* .css */.AH)(lh(),m/* .colorTokens.icon.brand */.I6.icon.brand))}};// CONCATENATED MODULE: ../tutor/assets/react/v3/shared/components/fields/FormInputWithContent.tsx
function lw(){var e=(0,g._)(["\n      border: 1px solid ",";\n      border-radius: ",";\n      box-shadow: ",";\n      background-color: ",";\n    "]);lw=function t(){return e};return e}function lx(){var e=(0,g._)(["\n      border-color: ",";\n      background-color: ",";\n    "]);lx=function t(){return e};return e}function lC(){var e=(0,g._)(["\n        border-color: ",";\n      "]);lC=function t(){return e};return e}function lk(){var e=(0,g._)(["\n          padding-",": ",";\n        "]);lk=function t(){return e};return e}function lA(){var e=(0,g._)(["\n            padding-",": ",";\n          "]);lA=function t(){return e};return e}function lY(){var e=(0,g._)(["\n          font-size: ",";\n          font-weight: ",";\n          height: 34px;\n          ",";\n        "]);lY=function t(){return e};return e}function lM(){var e=(0,g._)(["\n      ","\n    "]);lM=function t(){return e};return e}function lD(){var e=(0,g._)(["\n      border-right: 1px solid ",";\n    "]);lD=function t(){return e};return e}function lI(){var e=(0,g._)(["\n      ","\n    "]);lI=function t(){return e};return e}function lS(){var e=(0,g._)(["\n      border-left: 1px solid ",";\n    "]);lS=function t(){return e};return e}var lT=e=>{var{label:t,content:r,contentPosition:n="left",showVerticalBar:o=true,size:a="regular",type:i="text",field:s,fieldState:c,disabled:d,readOnly:u,loading:g,placeholder:m,helpText:v,onChange:b,onKeyDown:_,isHidden:w,wrapperCss:x,contentCss:C,removeBorder:k=false,selectOnFocus:A=false}=e;var Y=(0,y.useRef)(null);return/*#__PURE__*/(0,l/* .jsx */.Y)(F/* ["default"] */.A,{label:t,field:s,fieldState:c,disabled:d,readOnly:u,loading:g,placeholder:m,helpText:v,isHidden:w,removeBorder:k,children:e=>{var{css:t}=e,d=(0,h._)(e,["css"]);var u;return/*#__PURE__*/(0,l/* .jsxs */.FD)("div",{css:[lE.inputWrapper(!!c.error,k),x],children:[n==="left"&&/*#__PURE__*/(0,l/* .jsx */.Y)("div",{css:[lE.inputLeftContent(o,a),C],children:r}),/*#__PURE__*/(0,l/* .jsx */.Y)("input",(0,p._)((0,f._)({},s,d),{type:"text",value:(u=s.value)!==null&&u!==void 0?u:"",onChange:e=>{var t=i==="number"?e.target.value.replace(/[^0-9.]/g,"").replace(/(\..*)\./g,"$1"):e.target.value;s.onChange(t);if(b){b(t)}},onKeyDown:e=>_===null||_===void 0?void 0:_(e.key),css:[t,lE.input(n,o,a)],autoComplete:"off",ref:e=>{s.ref(e);// @ts-ignore
Y.current=e;// this is not ideal but it is the only way to set ref to the input element
},onFocus:()=>{if(!A||!Y.current){return}Y.current.select()},"data-input":true})),n==="right"&&/*#__PURE__*/(0,l/* .jsx */.Y)("div",{css:[lE.inputRightContent(o,a),C],children:r})]})}})};/* export default */const lF=(0,iW/* .withVisibilityControl */.M)(lT);var lE={inputWrapper:(e,t)=>/*#__PURE__*/(0,c/* .css */.AH)("display:flex;align-items:center;",!t&&(0,c/* .css */.AH)(lw(),m/* .colorTokens.stroke["default"] */.I6.stroke["default"],m/* .borderRadius["6"] */.Vq["6"],m/* .shadow.input */.r7.input,m/* .colorTokens.background.white */.I6.background.white)," ",e&&(0,c/* .css */.AH)(lx(),m/* .colorTokens.stroke.danger */.I6.stroke.danger,m/* .colorTokens.background.status.errorFail */.I6.background.status.errorFail),";&:focus-within{",oL/* .styleUtils.inputFocus */.x.inputFocus,";",e&&(0,c/* .css */.AH)(lC(),m/* .colorTokens.stroke.danger */.I6.stroke.danger),"}"),input:(e,t,r)=>/*#__PURE__*/(0,c/* .css */.AH)("&[data-input]{",v/* .typography.body */.I.body(),";border:none;box-shadow:none;background-color:transparent;padding-",e,":0;",t&&(0,c/* .css */.AH)(lk(),e,m/* .spacing["10"] */.YK["10"]),";",r==="large"&&(0,c/* .css */.AH)(lY(),m/* .fontSize["24"] */.J["24"],m/* .fontWeight.medium */.Wy.medium,t&&(0,c/* .css */.AH)(lA(),e,m/* .spacing["12"] */.YK["12"])),"  \n      &:focus{box-shadow:none;outline:none;}}"),inputLeftContent:(e,t)=>/*#__PURE__*/(0,c/* .css */.AH)(v/* .typography.small */.I.small()," ",oL/* .styleUtils.flexCenter */.x.flexCenter(),"    height:40px;min-width:48px;color:",m/* .colorTokens.icon.subdued */.I6.icon.subdued,";padding-inline:",m/* .spacing["12"] */.YK["12"],";",t==="large"&&(0,c/* .css */.AH)(lM(),v/* .typography.body */.I.body())," ",e&&(0,c/* .css */.AH)(lD(),m/* .colorTokens.stroke["default"] */.I6.stroke["default"])),inputRightContent:(e,t)=>/*#__PURE__*/(0,c/* .css */.AH)(v/* .typography.small */.I.small()," ",oL/* .styleUtils.flexCenter */.x.flexCenter(),"    height:40px;min-width:48px;color:",m/* .colorTokens.icon.subdued */.I6.icon.subdued,";padding-inline:",m/* .spacing["12"] */.YK["12"],";",t==="large"&&(0,c/* .css */.AH)(lI(),v/* .typography.body */.I.body())," ",e&&(0,c/* .css */.AH)(lS(),m/* .colorTokens.stroke["default"] */.I6.stroke["default"]))};// CONCATENATED MODULE: ../tutor/assets/react/v3/shared/components/fields/FormInputWithPresets.tsx
function lH(){var e=(0,g._)(["\n      border: 1px solid ",";\n      border-radius: ",";\n      box-shadow: ",";\n      background-color: ",";\n    "]);lH=function t(){return e};return e}function lN(){var e=(0,g._)(["\n      border-color: ",";\n      background-color: ",";\n    "]);lN=function t(){return e};return e}function lO(){var e=(0,g._)(["\n        border-color: ",";\n      "]);lO=function t(){return e};return e}function lL(){var e=(0,g._)(["\n          padding-",": ",";\n        "]);lL=function t(){return e};return e}function lV(){var e=(0,g._)(["\n              padding-",": ",";\n            "]);lV=function t(){return e};return e}function lW(){var e=(0,g._)(["\n        font-size: ",";\n        font-weight: ",";\n        height: 34px;\n        ",";\n      "]);lW=function t(){return e};return e}function lP(){var e=(0,g._)(["\n      min-width: 200px;\n    "]);lP=function t(){return e};return e}function lK(){var e=(0,g._)(["\n      background-color: ",";\n      position: relative;\n\n      &::before {\n        content: '';\n        position: absolute;\n        top: 0;\n        left: 0;\n        width: 3px;\n        height: 100%;\n        background-color: ",";\n        border-radius: 0 "," "," 0;\n      }\n    "]);lK=function t(){return e};return e}function lB(){var e=(0,g._)(["\n      ","\n    "]);lB=function t(){return e};return e}function lj(){var e=(0,g._)(["\n      border-right: 1px solid ",";\n    "]);lj=function t(){return e};return e}function lz(){var e=(0,g._)(["\n      ","\n    "]);lz=function t(){return e};return e}function lR(){var e=(0,g._)(["\n      border-left: 1px solid ",";\n    "]);lR=function t(){return e};return e}var lq=e=>{var{field:t,fieldState:r,content:n,contentPosition:o="left",showVerticalBar:a=true,type:i="text",size:s="regular",label:c,placeholder:d="",disabled:u,readOnly:g,loading:m,helpText:v,removeOptionsMinWidth:b=true,onChange:_,presetOptions:w=[],selectOnFocus:x=false,wrapperCss:C,contentCss:k,removeBorder:A=false}=e;var Y;var M=(Y=t.value)!==null&&Y!==void 0?Y:"";var D=(0,y.useRef)(null);var I=(0,y.useRef)(null);var[T,E]=(0,y.useState)(false);return/*#__PURE__*/(0,l/* .jsx */.Y)(F/* ["default"] */.A,{fieldState:r,field:t,label:c,disabled:u,readOnly:g,loading:m,helpText:v,removeBorder:A,placeholder:d,children:e=>{var{css:c}=e,d=(0,h._)(e,["css"]);return/*#__PURE__*/(0,l/* .jsxs */.FD)(l/* .Fragment */.FK,{children:[/*#__PURE__*/(0,l/* .jsxs */.FD)("div",{css:[lZ.inputWrapper(!!r.error,A),C],ref:I,children:[n&&o==="left"&&/*#__PURE__*/(0,l/* .jsx */.Y)("div",{css:[lZ.inputLeftContent(a,s),k],children:n}),/*#__PURE__*/(0,l/* .jsx */.Y)("input",(0,p._)((0,f._)({},d),{css:[c,lZ.input(o,a,s)],onClick:()=>E(true),autoComplete:"off",readOnly:g,ref:e=>{t.ref(e);// @ts-ignore
D.current=e;// this is not ideal but it is the only way to set ref to the input element
},onFocus:()=>{if(!x||!D.current){return}D.current.select()},value:M,onChange:e=>{var r=i==="number"?e.target.value.replace(/[^0-9.]/g,"").replace(/(\..*)\./g,"$1"):e.target.value;t.onChange(r);if(_){_(r)}},"data-input":true})),n&&o==="right"&&/*#__PURE__*/(0,l/* .jsx */.Y)("div",{css:lZ.inputRightContent(a,s),children:n})]}),/*#__PURE__*/(0,l/* .jsx */.Y)(iV/* ["default"] */.A,{triggerRef:I,isOpen:T,closePopover:()=>E(false),animationType:iQ/* .AnimationType.slideDown */.J6.slideDown,children:/*#__PURE__*/(0,l/* .jsx */.Y)("div",{css:[lZ.optionsWrapper],children:/*#__PURE__*/(0,l/* .jsx */.Y)("ul",{css:[lZ.options(b)],children:w.map(e=>/*#__PURE__*/(0,l/* .jsx */.Y)("li",{css:lZ.optionItem({isSelected:e.value===t.value}),children:/*#__PURE__*/(0,l/* .jsxs */.FD)("button",{type:"button",css:lZ.label,onClick:()=>{t.onChange(e.value);_===null||_===void 0?void 0:_(e.value);E(false)},children:[/*#__PURE__*/(0,l/* .jsx */.Y)(iZ/* ["default"] */.A,{when:e.icon,children:/*#__PURE__*/(0,l/* .jsx */.Y)(S/* ["default"] */.A,{name:e.icon,width:32,height:32})}),/*#__PURE__*/(0,l/* .jsx */.Y)("span",{children:e.label})]})},String(e.value)))})})})]})}})};/* export default */const lU=lq;var lZ={mainWrapper:/*#__PURE__*/(0,c/* .css */.AH)("width:100%;"),inputWrapper:(e,t)=>/*#__PURE__*/(0,c/* .css */.AH)("display:flex;align-items:center;",!t&&(0,c/* .css */.AH)(lH(),m/* .colorTokens.stroke["default"] */.I6.stroke["default"],m/* .borderRadius["6"] */.Vq["6"],m/* .shadow.input */.r7.input,m/* .colorTokens.background.white */.I6.background.white)," ",e&&(0,c/* .css */.AH)(lN(),m/* .colorTokens.stroke.danger */.I6.stroke.danger,m/* .colorTokens.background.status.errorFail */.I6.background.status.errorFail),";&:focus-within{",oL/* .styleUtils.inputFocus */.x.inputFocus,";",e&&(0,c/* .css */.AH)(lO(),m/* .colorTokens.stroke.danger */.I6.stroke.danger),"}"),input:(e,t,r)=>/*#__PURE__*/(0,c/* .css */.AH)("&[data-input]{",v/* .typography.body */.I.body(),";border:none;box-shadow:none;background-color:transparent;","padding-".concat(e),":0;",t&&(0,c/* .css */.AH)(lL(),e,m/* .spacing["10"] */.YK["10"]),";",r==="large"&&(0,c/* .css */.AH)(lW(),m/* .fontSize["24"] */.J["24"],m/* .fontWeight.medium */.Wy.medium,t&&(0,c/* .css */.AH)(lV(),e,m/* .spacing["12"] */.YK["12"])),"      &:focus{box-shadow:none;outline:none;}}"),label:/*#__PURE__*/(0,c/* .css */.AH)(oL/* .styleUtils.resetButton */.x.resetButton,";width:100%;height:100%;display:flex;align-items:center;gap:",m/* .spacing["8"] */.YK["8"],";margin:0 ",m/* .spacing["12"] */.YK["12"],";padding:",m/* .spacing["6"] */.YK["6"]," 0;text-align:left;line-height:",m/* .lineHeight["24"] */.K_["24"],";word-break:break-all;cursor:pointer;span{flex-shrink:0;}"),optionsWrapper:/*#__PURE__*/(0,c/* .css */.AH)("position:absolute;width:100%;"),options:e=>/*#__PURE__*/(0,c/* .css */.AH)("z-index:",m/* .zIndex.dropdown */.fE.dropdown,";background-color:",m/* .colorTokens.background.white */.I6.background.white,";list-style-type:none;box-shadow:",m/* .shadow.popover */.r7.popover,";padding:",m/* .spacing["4"] */.YK["4"]," 0;margin:0;max-height:500px;border-radius:",m/* .borderRadius["6"] */.Vq["6"],";",oL/* .styleUtils.overflowYAuto */.x.overflowYAuto,";",!e&&(0,c/* .css */.AH)(lP())),optionItem:e=>{var{isSelected:t=false}=e;return/*#__PURE__*/(0,c/* .css */.AH)(v/* .typography.body */.I.body(),";min-height:36px;height:100%;width:100%;display:flex;align-items:center;transition:background-color 0.3s ease-in-out;cursor:pointer;&:hover{background-color:",m/* .colorTokens.background.hover */.I6.background.hover,";}",t&&(0,c/* .css */.AH)(lK(),m/* .colorTokens.background.active */.I6.background.active,m/* .colorTokens.action.primary["default"] */.I6.action.primary["default"],m/* .borderRadius["6"] */.Vq["6"],m/* .borderRadius["6"] */.Vq["6"]))},inputLeftContent:(e,t)=>/*#__PURE__*/(0,c/* .css */.AH)(v/* .typography.small */.I.small()," ",oL/* .styleUtils.flexCenter */.x.flexCenter(),"    height:40px;min-width:48px;color:",m/* .colorTokens.icon.subdued */.I6.icon.subdued,";padding-inline:",m/* .spacing["12"] */.YK["12"],";",t==="large"&&(0,c/* .css */.AH)(lB(),v/* .typography.body */.I.body())," ",e&&(0,c/* .css */.AH)(lj(),m/* .colorTokens.stroke["default"] */.I6.stroke["default"])),inputRightContent:(e,t)=>/*#__PURE__*/(0,c/* .css */.AH)(v/* .typography.small */.I.small()," ",oL/* .styleUtils.flexCenter */.x.flexCenter(),"    height:40px;min-width:48px;color:",m/* .colorTokens.icon.subdued */.I6.icon.subdued,";padding-inline:",m/* .spacing["12"] */.YK["12"],";",t==="large"&&(0,c/* .css */.AH)(lz(),v/* .typography.body */.I.body())," ",e&&(0,c/* .css */.AH)(lR(),m/* .colorTokens.stroke["default"] */.I6.stroke["default"]))};// CONCATENATED MODULE: ../tutor/assets/react/v3/shared/atoms/Radio.tsx
function lQ(){var e=(0,g._)(["\n      color: ",";\n    "]);lQ=function t(){return e};return e}function lG(){var e=(0,g._)(["\n        margin-right: ",";\n      "]);lG=function t(){return e};return e}var l$=/*#__PURE__*/_().forwardRef((e,t)=>{var{name:r,checked:n,readOnly:o,disabled:a=false,labelCss:i,label:s,icon:c,value:d,onChange:u,onBlur:f,description:p}=e;var h=(0,b/* .nanoid */.Ak)();return/*#__PURE__*/(0,l/* .jsxs */.FD)("div",{css:lX.wrapper,children:[/*#__PURE__*/(0,l/* .jsxs */.FD)("label",{htmlFor:h,css:[lX.container(a),i],children:[/*#__PURE__*/(0,l/* .jsx */.Y)("input",{ref:t,id:h,name:r,type:"radio",checked:n,readOnly:o,value:d,disabled:a,onChange:u,onBlur:f,css:[lX.radio(s)]}),/*#__PURE__*/(0,l/* .jsx */.Y)("span",{}),c,s]}),p&&/*#__PURE__*/(0,l/* .jsx */.Y)("p",{css:lX.description,children:p})]})});var lX={wrapper:/*#__PURE__*/(0,c/* .css */.AH)(oL/* .styleUtils.display.flex */.x.display.flex("column"),";gap:",m/* .spacing["8"] */.YK["8"],";"),container:e=>/*#__PURE__*/(0,c/* .css */.AH)(v/* .typography.caption */.I.caption(),";display:flex;align-items:center;cursor:pointer;user-select:none;",e&&(0,c/* .css */.AH)(lQ(),m/* .colorTokens.text.disable */.I6.text.disable)),radio:function(){var e=arguments.length>0&&arguments[0]!==void 0?arguments[0]:"";return/*#__PURE__*/(0,c/* .css */.AH)("position:absolute;opacity:0;height:0;width:0;cursor:pointer;& + span{position:relative;cursor:pointer;height:18px;width:18px;background-color:",m/* .colorTokens.background.white */.I6.background.white,";border:2px solid ",m/* .colorTokens.stroke["default"] */.I6.stroke["default"],";border-radius:100%;",e&&(0,c/* .css */.AH)(lG(),m/* .spacing["10"] */.YK["10"]),"}& + span::before{content:'';position:absolute;left:3px;top:3px;background-color:",m/* .colorTokens.background.white */.I6.background.white,";width:8px;height:8px;border-radius:100%;}&:checked + span{border-color:",m/* .colorTokens.action.primary["default"] */.I6.action.primary["default"],";}&:checked + span::before{background-color:",m/* .colorTokens.action.primary["default"] */.I6.action.primary["default"],";}&:focus-visible{& + span{outline:2px solid ",m/* .colorTokens.stroke.brand */.I6.stroke.brand,";outline-offset:1px;}}")},description:/*#__PURE__*/(0,c/* .css */.AH)(v/* .typography.small */.I.small(),";color:",m/* .colorTokens.text.hints */.I6.text.hints,";padding-left:30px;")};/* export default */const lJ=l$;// CONCATENATED MODULE: ../tutor/assets/react/v3/shared/components/fields/FormRadioGroup.tsx
var l0=e=>{var{field:t,fieldState:r,label:n,options:o=[],disabled:a,wrapperCss:i,onSelect:s,onSelectRender:c}=e;return/*#__PURE__*/(0,l/* .jsx */.Y)(F/* ["default"] */.A,{field:t,fieldState:r,label:n,disabled:a,children:e=>{var{css:r}=e,n=(0,h._)(e,["css"]);return/*#__PURE__*/(0,l/* .jsx */.Y)("div",{css:i,children:o.map((e,o)=>/*#__PURE__*/(0,l/* .jsxs */.FD)("div",{children:[/*#__PURE__*/(0,l/* .jsx */.Y)(lJ,(0,p._)((0,f._)({},n),{inputCss:r,value:e.value,label:e.label,disabled:e.disabled||a,labelCss:e.labelCss,checked:t.value===e.value,description:e.description,onChange:()=>{t.onChange(e.value);if(s){s(e)}}})),c&&t.value===e.value&&c(e),e.legend&&/*#__PURE__*/(0,l/* .jsx */.Y)("span",{css:l2.radioLegend,children:e.legend})]},o))})}})};/* export default */const l1=l0;var l2={radioLegend:/*#__PURE__*/(0,c/* .css */.AH)("margin-left:",m/* .spacing["28"] */.YK["28"],";",v/* .typography.body */.I.body(),";color:",m/* .colorTokens.text.subdued */.I6.text.subdued,";")};// EXTERNAL MODULE: ../tutor/node_modules/date-fns/esm/_lib/toInteger/index.js
var l5=r(7801);// EXTERNAL MODULE: ../tutor/node_modules/date-fns/esm/toDate/index.js
var l6=r(3298);// EXTERNAL MODULE: ../tutor/node_modules/date-fns/esm/_lib/requiredArgs/index.js
var l9=r(8672);// CONCATENATED MODULE: ../tutor/node_modules/date-fns/esm/setMinutes/index.js
/**
 * @name setMinutes
 * @category Minute Helpers
 * @summary Set the minutes to the given date.
 *
 * @description
 * Set the minutes to the given date.
 *
 * @param {Date|Number} date - the date to be changed
 * @param {Number} minutes - the minutes of the new date
 * @returns {Date} the new date with the minutes set
 * @throws {TypeError} 2 arguments required
 *
 * @example
 * // Set 45 minutes to 1 September 2014 11:30:40:
 * const result = setMinutes(new Date(2014, 8, 1, 11, 30, 40), 45)
 * //=> Mon Sep 01 2014 11:45:40
 */function l8(e,t){(0,l9/* ["default"] */.A)(2,arguments);var r=(0,l6/* ["default"] */.A)(e);var n=(0,l5/* ["default"] */.A)(t);r.setMinutes(n);return r};// CONCATENATED MODULE: ../tutor/node_modules/date-fns/esm/setHours/index.js
/**
 * @name setHours
 * @category Hour Helpers
 * @summary Set the hours to the given date.
 *
 * @description
 * Set the hours to the given date.
 *
 * @param {Date|Number} date - the date to be changed
 * @param {Number} hours - the hours of the new date
 * @returns {Date} the new date with the hours set
 * @throws {TypeError} 2 arguments required
 *
 * @example
 * // Set 4 hours to 1 September 2014 11:30:00:
 * const result = setHours(new Date(2014, 8, 1, 11, 30), 4)
 * //=> Mon Sep 01 2014 04:30:00
 */function l3(e,t){(0,l9/* ["default"] */.A)(2,arguments);var r=(0,l6/* ["default"] */.A)(e);var n=(0,l5/* ["default"] */.A)(t);r.setHours(n);return r}// EXTERNAL MODULE: ../tutor/node_modules/date-fns/esm/addMinutes/index.js
var l7=r(8443);// CONCATENATED MODULE: ../tutor/node_modules/date-fns/esm/startOfMinute/index.js
/**
 * @name startOfMinute
 * @category Minute Helpers
 * @summary Return the start of a minute for the given date.
 *
 * @description
 * Return the start of a minute for the given date.
 * The result will be in the local timezone.
 *
 * @param {Date|Number} date - the original date
 * @returns {Date} the start of a minute
 * @throws {TypeError} 1 argument required
 *
 * @example
 * // The start of a minute for 1 December 2014 22:15:45.400:
 * const result = startOfMinute(new Date(2014, 11, 1, 22, 15, 45, 400))
 * //=> Mon Dec 01 2014 22:15:00
 */function l4(e){(0,l9/* ["default"] */.A)(1,arguments);var t=(0,l6/* ["default"] */.A)(e);t.setSeconds(0,0);return t};// CONCATENATED MODULE: ../tutor/node_modules/date-fns/esm/eachMinuteOfInterval/index.js
/**
 * @name eachMinuteOfInterval
 * @category Interval Helpers
 * @summary Return the array of minutes within the specified time interval.
 *
 * @description
 * Returns the array of minutes within the specified time interval.
 *
 * @param {Interval} interval - the interval. See [Interval]{@link https://date-fns.org/docs/Interval}
 * @param {Object} [options] - an object with options.
 * @param {Number} [options.step=1] - the step to increment by. The step must be equal to or greater than 1
 * @throws {TypeError} 1 argument required
 * @returns {Date[]} the array with starts of minutes from the minute of the interval start to the minute of the interval end
 * @throws {RangeError} `options.step` must be a number equal to or greater than 1
 * @throws {RangeError} The start of an interval cannot be after its end
 * @throws {RangeError} Date in interval cannot be `Invalid Date`
 *
 * @example
 * // Each minute between 14 October 2020, 13:00 and 14 October 2020, 13:03
 * const result = eachMinuteOfInterval({
 *   start: new Date(2014, 9, 14, 13),
 *   end: new Date(2014, 9, 14, 13, 3)
 * })
 * //=> [
 * //   Wed Oct 14 2014 13:00:00,
 * //   Wed Oct 14 2014 13:01:00,
 * //   Wed Oct 14 2014 13:02:00,
 * //   Wed Oct 14 2014 13:03:00
 * // ]
 */function ce(e,t){var r;(0,l9/* ["default"] */.A)(1,arguments);var n=l4((0,l6/* ["default"] */.A)(e.start));var o=(0,l6/* ["default"] */.A)(e.end);var a=n.getTime();var i=o.getTime();if(a>=i){throw new RangeError("Invalid interval")}var s=[];var l=n;var c=Number((r=t===null||t===void 0?void 0:t.step)!==null&&r!==void 0?r:1);if(c<1||isNaN(c))throw new RangeError("`options.step` must be a number equal to or greater than 1");while(l.getTime()<=i){s.push((0,l6/* ["default"] */.A)(l));l=(0,l7/* ["default"] */.A)(l,c)}return s};// CONCATENATED MODULE: ../tutor/assets/react/v3/shared/components/fields/FormTimeInput.tsx
var ct=e=>{var{label:t,field:r,fieldState:n,interval:o=30,disabled:a,loading:i,placeholder:s,helpText:c,isClearable:u=true}=e;var[g,m]=(0,y.useState)(false);var v=(0,y.useRef)(null);var b=(0,y.useRef)(null);var _=(0,y.useMemo)(()=>{var e=l8(l3(new Date,0),0);var t=l8(l3(new Date,23),59);var r=ce({start:e,end:t},{step:o});return r.map(e=>(0,L/* ["default"] */.A)(e,oN/* .DateFormats.hoursMinutes */.UA.hoursMinutes))},[o]);var{activeIndex:w,setActiveIndex:x}=iG({options:_.map(e=>({label:e,value:e})),isOpen:g,selectedValue:r.value,onSelect:e=>{r.onChange(e.value);m(false)},onClose:()=>m(false)});(0,y.useEffect)(()=>{if(g&&w>=0&&b.current){b.current.scrollIntoView({block:"nearest",behavior:"smooth"})}},[g,w]);return/*#__PURE__*/(0,l/* .jsx */.Y)(F/* ["default"] */.A,{label:t,field:r,fieldState:n,disabled:a,loading:i,placeholder:s,helpText:c,children:e=>{var{css:t}=e,n=(0,h._)(e,["css"]);var o;return/*#__PURE__*/(0,l/* .jsxs */.FD)("div",{children:[/*#__PURE__*/(0,l/* .jsxs */.FD)("div",{css:cn.wrapper,ref:v,children:[/*#__PURE__*/(0,l/* .jsx */.Y)("input",(0,p._)((0,f._)({},n),{ref:r.ref,css:[t,cn.input],type:"text",onClick:e=>{e.stopPropagation();m(e=>!e)},onKeyDown:e=>{if(e.key==="Enter"){e.preventDefault();m(e=>!e)}if(e.key==="Tab"){m(false)}},value:(o=r.value)!==null&&o!==void 0?o:"",onChange:e=>{var{value:t}=e.target;r.onChange(t)},autoComplete:"off","data-input":true})),/*#__PURE__*/(0,l/* .jsx */.Y)(S/* ["default"] */.A,{name:"clock",width:32,height:32,style:cn.icon}),u&&r.value&&/*#__PURE__*/(0,l/* .jsx */.Y)(oH/* ["default"] */.A,{isIconOnly:true,"aria-label":(0,d.__)("Clear","tutor-pro"),size:"small",variant:"text",buttonCss:oL/* .styleUtils.inputClearButton */.x.inputClearButton,onClick:()=>r.onChange(""),icon:/*#__PURE__*/(0,l/* .jsx */.Y)(S/* ["default"] */.A,{name:"times",width:12,height:12})})]}),/*#__PURE__*/(0,l/* .jsx */.Y)(iV/* ["default"] */.A,{triggerRef:v,isOpen:g,closePopover:()=>m(false),animationType:iQ/* .AnimationType.slideDown */.J6.slideDown,children:/*#__PURE__*/(0,l/* .jsx */.Y)("ul",{css:cn.list,children:_.map((e,t)=>{return/*#__PURE__*/(0,l/* .jsx */.Y)("li",{css:cn.listItem,ref:w===t?b:null,"data-active":w===t,children:/*#__PURE__*/(0,l/* .jsx */.Y)("button",{type:"button",css:cn.itemButton,onClick:()=>{r.onChange(e);m(false)},onMouseOver:()=>x(t),onMouseLeave:()=>t!==w&&x(-1),onFocus:()=>x(t),children:e})},t)})})})]})}})};/* export default */const cr=ct;var cn={wrapper:/*#__PURE__*/(0,c/* .css */.AH)("position:relative;&:hover,&:focus-within{& > button{opacity:1;}}"),input:/*#__PURE__*/(0,c/* .css */.AH)("&[data-input]{padding-left:",m/* .spacing["40"] */.YK["40"],";}"),icon:/*#__PURE__*/(0,c/* .css */.AH)("position:absolute;top:50%;left:",m/* .spacing["8"] */.YK["8"],";transform:translateY(-50%);color:",m/* .colorTokens.icon["default"] */.I6.icon["default"],";"),list:/*#__PURE__*/(0,c/* .css */.AH)("height:380px;list-style:none;padding:0;margin:0;",oL/* .styleUtils.overflowYAuto */.x.overflowYAuto,";"),listItem:/*#__PURE__*/(0,c/* .css */.AH)("width:100%;height:40px;cursor:pointer;display:flex;align-items:center;transition:background-color 0.3s ease-in-out;&[data-active='true']{background-color:",m/* .colorTokens.background.hover */.I6.background.hover,";}:hover{background-color:",m/* .colorTokens.background.hover */.I6.background.hover,";}"),itemButton:/*#__PURE__*/(0,c/* .css */.AH)(oL/* .styleUtils.resetButton */.x.resetButton,";",v/* .typography.body */.I.body(),";margin:",m/* .spacing["4"] */.YK["4"]," ",m/* .spacing["12"] */.YK["12"],";width:100%;height:100%;&:focus,&:active,&:hover{background:none;color:",m/* .colorTokens.text.primary */.I6.text.primary,";}")};// CONCATENATED MODULE: ../tutor/assets/react/v3/shared/hooks/usePaginatedTable.ts
var co=function(){var{limit:e=oN/* .ITEMS_PER_PAGE */.re}=arguments.length>0&&arguments[0]!==void 0?arguments[0]:{};var[t,r]=(0,y.useState)({page:1,sortProperty:"",sortDirection:undefined,filter:{}});var n=t;var o=e*Math.max(0,n.page-1);var a=(0,y.useCallback)(e=>{r(t=>(0,f._)({},t,e))},[r]);var i=e=>a({page:e});var s=(0,y.useCallback)(e=>a({page:1,filter:e}),[a]);var l=e=>{var t={};if(e!==n.sortProperty){t={sortDirection:"asc",sortProperty:e}}else{t={sortDirection:n.sortDirection==="asc"?"desc":"asc",sortProperty:e}}a(t)};return{pageInfo:n,onPageChange:i,onColumnSort:l,offset:o,itemsPerPage:e,onFilterItems:s}};// CONCATENATED MODULE: ../tutor/assets/react/v3/shared/molecules/Paginator.tsx
var ca=e=>{var{currentPage:t,onPageChange:r,totalItems:n,itemsPerPage:o}=e;var a=Math.max(Math.ceil(n/o),1);var[i,s]=(0,y.useState)("");(0,y.useEffect)(()=>{s(t.toString())},[t]);var c=e=>{if(e<1||e>a){return}r(e)};return/*#__PURE__*/(0,l/* .jsxs */.FD)("div",{css:cs.wrapper,children:[/*#__PURE__*/(0,l/* .jsxs */.FD)("div",{css:cs.pageStatus,children:[(0,d.__)("Page","tutor-pro"),/*#__PURE__*/(0,l/* .jsx */.Y)("span",{children:/*#__PURE__*/(0,l/* .jsx */.Y)("input",{type:"text",css:cs.paginationInput,value:i,onChange:e=>{var{value:t}=e.currentTarget;var n=t.replace(/[^0-9]/g,"");var o=Number(n);if(o>0&&o<=a){s(n);r(o)}else if(!n){s(n)}},autoComplete:"off"})}),(0,d.__)("of","tutor-pro")," ",/*#__PURE__*/(0,l/* .jsx */.Y)("span",{children:a})]}),/*#__PURE__*/(0,l/* .jsxs */.FD)("div",{css:cs.pageController,children:[/*#__PURE__*/(0,l/* .jsx */.Y)("button",{type:"button",css:cs.paginationButton,onClick:()=>c(t-1),disabled:t===1,children:/*#__PURE__*/(0,l/* .jsx */.Y)(S/* ["default"] */.A,{name:!oN/* .isRTL */.V8?"chevronLeft":"chevronRight",width:32,height:32})}),/*#__PURE__*/(0,l/* .jsx */.Y)("button",{type:"button",css:cs.paginationButton,onClick:()=>c(t+1),disabled:t===a,children:/*#__PURE__*/(0,l/* .jsx */.Y)(S/* ["default"] */.A,{name:!oN/* .isRTL */.V8?"chevronRight":"chevronLeft",width:32,height:32})})]})]})};/* export default */const ci=ca;var cs={wrapper:/*#__PURE__*/(0,c/* .css */.AH)("display:flex;justify-content:end;align-items:center;flex-wrap:wrap;gap:",m/* .spacing["8"] */.YK["8"],";height:36px;"),pageStatus:/*#__PURE__*/(0,c/* .css */.AH)(v/* .typography.body */.I.body(),"    color:",m/* .colorTokens.text.title */.I6.text.title,";min-width:100px;"),paginationInput:/*#__PURE__*/(0,c/* .css */.AH)("outline:0;border:1px solid ",m/* .colorTokens.stroke["default"] */.I6.stroke["default"],";border-radius:",m/* .borderRadius["6"] */.Vq["6"],";margin:0 ",m/* .spacing["8"] */.YK["8"],";color:",m/* .colorTokens.text.subdued */.I6.text.subdued,";padding:8px 12px;width:72px;&::-webkit-outer-spin-button,&::-webkit-inner-spin-button{-webkit-appearance:none;margin:",m/* .spacing["0"] */.YK["0"],";}&[type='number']{-moz-appearance:textfield;}"),pageController:/*#__PURE__*/(0,c/* .css */.AH)("gap:",m/* .spacing["8"] */.YK["8"],";display:flex;justify-content:center;align-items:center;height:100%;"),paginationButton:/*#__PURE__*/(0,c/* .css */.AH)(oL/* .styleUtils.resetButton */.x.resetButton,";background:",m/* .colorTokens.background.white */.I6.background.white,";color:",m/* .colorTokens.icon["default"] */.I6.icon["default"],";border-radius:",m/* .borderRadius["6"] */.Vq["6"],";height:32px;width:32px;display:grid;place-items:center;transition:background-color 0.2s ease-in-out,color 0.3s ease-in-out;svg{color:",m/* .colorTokens.icon["default"] */.I6.icon["default"],";}&:hover{background:",m/* .colorTokens.background["default"] */.I6.background["default"],";& > svg{color:",m/* .colorTokens.icon.brand */.I6.icon.brand,";}}&:disabled{background:",m/* .colorTokens.background.white */.I6.background.white,";& > svg{color:",m/* .colorTokens.icon.disable["default"] */.I6.icon.disable["default"],";}}")};// CONCATENATED MODULE: ../tutor/assets/react/v3/shared/molecules/Table.tsx
function cl(){var e=(0,g._)(["\n      border: 1px solid ",";\n      border-radius: ",";\n    "]);cl=function t(){return e};return e}function cc(){var e=(0,g._)(["\n      border-bottom: 1px solid ",";\n    "]);cc=function t(){return e};return e}function cd(){var e=(0,g._)(["\n      &:nth-of-type(even) {\n        background-color: ",";\n      }\n    "]);cd=function t(){return e};return e}function cu(){var e=(0,g._)(["\n        background-color: ",";\n      "]);cu=function t(){return e};return e}function cf(){var e=(0,g._)(["\n        background-color: ",";\n      "]);cf=function t(){return e};return e}function cp(){var e=(0,g._)(["\n        :last-of-type {\n          border-bottom: none;\n        }\n      "]);cp=function t(){return e};return e}var ch={bodyRowSelected:m/* .colorTokens.background.active */.I6.background.active,bodyRowHover:m/* .colorTokens.background.hover */.I6.background.hover};var cg=e=>{var{columns:t,data:r,entireHeader:n=null,headerHeight:o=60,noHeader:a=false,isStriped:i=false,isRounded:s=false,stripedBySelectedIndex:d=[],colors:u={},isBordered:f=true,loading:p=false,itemsPerPage:h=1,querySortProperties:g,querySortDirections:m={},onSortClick:v,renderInLastRow:y,rowStyle:_,sortIcons:w={asc:/*#__PURE__*/(0,l/* .jsx */.Y)(S/* ["default"] */.A,{name:"sortASC",height:16,width:16}),desc:/*#__PURE__*/(0,l/* .jsx */.Y)(S/* ["default"] */.A,{name:"sortDESC",height:16,width:16})}}=e;var x=(e,r)=>{return/*#__PURE__*/(0,l/* .jsx */.Y)("tr",{css:[cv.tableRow({isBordered:f,isStriped:i}),cv.bodyTr({colors:u,isSelected:d.includes(e),isRounded:s}),_],children:t.map((e,t)=>{return/*#__PURE__*/(0,l/* .jsx */.Y)("td",{css:[cv.td,{width:e.width}],children:r(e)},t)})},e)};var C=e=>{var t=null;var r=e.sortProperty;if(!r){return e.Header}if(g===null||g===void 0?void 0:g.includes(r)){if((m===null||m===void 0?void 0:m[r])==="asc"){t=w.asc}else{t=w.desc}}return/*#__PURE__*/(0,l/* .jsxs */.FD)("button",{type:"button",css:cv.headerWithIcon,onClick:()=>v===null||v===void 0?void 0:v(r),children:[e.Header,t&&t]})};var k=()=>{if(n){return/*#__PURE__*/(0,l/* .jsx */.Y)("th",{css:cv.th,colSpan:t.length,children:n})}return t.map((e,t)=>{if(e.Header!==null){return/*#__PURE__*/(0,l/* .jsx */.Y)("th",{css:[cv.th,e.css,{width:e.width}],colSpan:e.headerColSpan,children:C(e)},t)}})};var A=()=>{if(p){return(0,b/* .range */.y1)(h).map(e=>x(e,()=>/*#__PURE__*/(0,l/* .jsx */.Y)(sp,{animation:true,height:20,width:"".concat((0,b/* .getRandom */.G0)(40,80),"%")})))}if(!r.length){return/*#__PURE__*/(0,l/* .jsx */.Y)("tr",{css:cv.tableRow({isBordered:false,isStriped:false}),children:/*#__PURE__*/(0,l/* .jsx */.Y)("td",{colSpan:t.length,css:[cv.td,/*#__PURE__*/(0,c/* .css */.AH)("text-align:center;")],children:"No Data!"})})}var e=r.map((e,t)=>{return x(t,r=>{return"Cell"in r?r.Cell(e,t):r.accessor(e,t)})});if(y){y=/*#__PURE__*/(0,l/* .jsx */.Y)("tr",{children:/*#__PURE__*/(0,l/* .jsx */.Y)("td",{css:cv.td,children:y})},e.length);e.push(y)}return e};return/*#__PURE__*/(0,l/* .jsx */.Y)("div",{css:cv.tableContainer({isRounded:s}),children:/*#__PURE__*/(0,l/* .jsxs */.FD)("table",{css:cv.table,children:[!a&&/*#__PURE__*/(0,l/* .jsx */.Y)("thead",{children:/*#__PURE__*/(0,l/* .jsx */.Y)("tr",{css:[cv.tableRow({isBordered:f,isStriped:i}),{height:o}],children:k()})}),/*#__PURE__*/(0,l/* .jsx */.Y)("tbody",{children:A()})]})})};/* export default */const cm=cg;var cv={tableContainer:e=>{var{isRounded:t}=e;return/*#__PURE__*/(0,c/* .css */.AH)("display:block;width:100%;overflow-x:auto;",t&&(0,c/* .css */.AH)(cl(),m/* .colorTokens.stroke.divider */.I6.stroke.divider,m/* .borderRadius["6"] */.Vq["6"]))},headerWithIcon:/*#__PURE__*/(0,c/* .css */.AH)(oL/* .styleUtils.resetButton */.x.resetButton,";",v/* .typography.body */.I.body(),";color:",m/* .colorTokens.text.subdued */.I6.text.subdued,";display:flex;gap:",m/* .spacing["8"] */.YK["8"],";align-items:center;svg{color:",m/* .colorTokens.text.primary */.I6.text.primary,";}"),table:/*#__PURE__*/(0,c/* .css */.AH)("width:100%;border-collapse:collapse;border:none;"),tableRow:e=>{var{isBordered:t,isStriped:r}=e;return/*#__PURE__*/(0,c/* .css */.AH)(t&&(0,c/* .css */.AH)(cc(),m/* .colorTokens.stroke.divider */.I6.stroke.divider)," ",r&&(0,c/* .css */.AH)(cd(),m/* .colorTokens.background.active */.I6.background.active))},th:/*#__PURE__*/(0,c/* .css */.AH)(v/* .typography.body */.I.body(),";background-color:",m/* .colorTokens.background.white */.I6.background.white,";color:",m/* .colorTokens.text.primary */.I6.text.primary,";padding:0 ",m/* .spacing["16"] */.YK["16"],";border:none;"),bodyTr:e=>{var{colors:t,isSelected:r,isRounded:n}=e;var{bodyRowDefault:o,bodyRowSelectedHover:a,bodyRowHover:i=ch.bodyRowHover,bodyRowSelected:s=ch.bodyRowSelected}=t;return/*#__PURE__*/(0,c/* .css */.AH)(o&&(0,c/* .css */.AH)(cu(),o),"      &:hover{background-color:",r&&a?a:i,";}",r&&(0,c/* .css */.AH)(cf(),s)," ",n&&(0,c/* .css */.AH)(cp()))},td:/*#__PURE__*/(0,c/* .css */.AH)(v/* .typography.body */.I.body(),";padding:",m/* .spacing["16"] */.YK["16"],";border:none;")};// CONCATENATED MODULE: ../tutor/assets/react/v3/public/images/course-placeholder.png
const cb=r.p+"images/course-placeholder-3ae4bdaf.png";// EXTERNAL MODULE: ./node_modules/@tanstack/react-query/build/legacy/useQuery.js + 6 modules
var cy=r(3903);// EXTERNAL MODULE: ./node_modules/@tanstack/query-core/build/modern/utils.js
var c_=r(4880);// CONCATENATED MODULE: ../tutor/assets/react/v3/shared/services/course_category.ts
var cw=e=>{return sx/* .wpAjaxInstance.get */.b.get(sC/* ["default"].COUPON_APPLIES_TO */.A.COUPON_APPLIES_TO,{params:(0,f._)({},e)})};var cx=e=>{return(0,cy/* .useQuery */.I)({queryKey:["CourseCategory",e],placeholderData:c_/* .keepPreviousData */.rX,queryFn:()=>{return cw(e).then(e=>{return e.data})}})};// CONCATENATED MODULE: ../tutor/assets/react/v3/shared/hooks/useDebounce.ts
var cC=function(e){var t=arguments.length>1&&arguments[1]!==void 0?arguments[1]:300;var[r,n]=(0,y.useState)(e);(0,y.useEffect)(()=>{var r=setTimeout(()=>{n(e)},t);return()=>{clearTimeout(r)}},[e,t]);return r};// CONCATENATED MODULE: ../tutor/assets/react/v3/shared/components/modals/CourseCategorySelectModal/SearchField.tsx
var ck=e=>{var{onFilterItems:t}=e;var r=sy({defaultValues:{search:""}});var n=cC(r.watch("search"));(0,y.useEffect)(()=>{t((0,f._)({},n.length>0&&{search:n}))},[t,n]);return/*#__PURE__*/(0,l/* .jsx */.Y)(aS,{control:r.control,name:"search",render:e=>/*#__PURE__*/(0,l/* .jsx */.Y)(lF,(0,p._)((0,f._)({},e),{content:/*#__PURE__*/(0,l/* .jsx */.Y)(S/* ["default"] */.A,{name:"search",width:24,height:24}),placeholder:(0,d.__)("Search...","tutor-pro"),showVerticalBar:false}))})};/* export default */const cA=ck;// CONCATENATED MODULE: ../tutor/assets/react/v3/shared/components/modals/CourseCategorySelectModal/CategoryListTable.tsx
var cY=e=>{var{form:t}=e;var r,n;var o;var a=(o=t.watch("categories"))!==null&&o!==void 0?o:[];var{pageInfo:i,onPageChange:s,itemsPerPage:c,offset:u,onFilterItems:f}=co();var p=cx({applies_to:"specific_category",offset:u,limit:c,filter:i.filter});var h;var g=(h=(r=p.data)===null||r===void 0?void 0:r.results)!==null&&h!==void 0?h:[];function m(){var e=arguments.length>0&&arguments[0]!==void 0?arguments[0]:false;var r=a.map(e=>e.id);var n=g.map(e=>e.id);if(e){var o=g.filter(e=>!r.includes(e.id));t.setValue("categories",[...a,...o]);return}var i=a.filter(e=>!n.includes(e.id));t.setValue("categories",i)}function v(){return g.every(e=>a.map(e=>e.id).includes(e.id))}var b=[{Header:((n=p.data)===null||n===void 0?void 0:n.results.length)?/*#__PURE__*/(0,l/* .jsx */.Y)(I,{onChange:m,checked:p.isLoading||p.isRefetching?false:v(),label:(0,d.__)("Category","tutor-pro")}):(0,d.__)("Category","tutor-pro"),Cell:e=>{return/*#__PURE__*/(0,l/* .jsxs */.FD)("div",{css:cD.checkboxWrapper,children:[/*#__PURE__*/(0,l/* .jsx */.Y)(I,{onChange:()=>{var r=a.filter(t=>t.id!==e.id);var n=(r===null||r===void 0?void 0:r.length)===a.length;if(n){t.setValue("categories",[...r,e])}else{t.setValue("categories",r)}},checked:a.map(e=>e.id).includes(e.id)}),/*#__PURE__*/(0,l/* .jsx */.Y)("img",{src:e.image||cb,css:cD.thumbnail,alt:(0,d.__)("category item","tutor-pro")}),/*#__PURE__*/(0,l/* .jsxs */.FD)("div",{css:cD.courseItem,children:[/*#__PURE__*/(0,l/* .jsx */.Y)("div",{children:e.title}),/*#__PURE__*/(0,l/* .jsx */.Y)("p",{children:"".concat(e.total_courses," ").concat((0,d.__)("Courses","tutor-pro"))})]})]})},width:720}];if(p.isLoading){return/*#__PURE__*/(0,l/* .jsx */.Y)(iE/* .LoadingSection */.YE,{})}if(!p.data){return/*#__PURE__*/(0,l/* .jsx */.Y)("div",{css:cD.errorMessage,children:(0,d.__)("Something went wrong","tutor-pro")})}var y;return/*#__PURE__*/(0,l/* .jsxs */.FD)(l/* .Fragment */.FK,{children:[/*#__PURE__*/(0,l/* .jsx */.Y)("div",{css:cD.tableActions,children:/*#__PURE__*/(0,l/* .jsx */.Y)(cA,{onFilterItems:f})}),/*#__PURE__*/(0,l/* .jsx */.Y)("div",{css:cD.tableWrapper,children:/*#__PURE__*/(0,l/* .jsx */.Y)(cm,{columns:b,data:(y=p.data.results)!==null&&y!==void 0?y:[],itemsPerPage:c,loading:p.isFetching||p.isRefetching})}),/*#__PURE__*/(0,l/* .jsx */.Y)("div",{css:cD.paginatorWrapper,children:/*#__PURE__*/(0,l/* .jsx */.Y)(ci,{currentPage:i.page,onPageChange:s,totalItems:p.data.total_items,itemsPerPage:c})})]})};/* export default */const cM=cY;var cD={tableActions:/*#__PURE__*/(0,c/* .css */.AH)("padding:",m/* .spacing["20"] */.YK["20"],";"),tableWrapper:/*#__PURE__*/(0,c/* .css */.AH)("max-height:calc(100vh - 350px);overflow:auto;"),paginatorWrapper:/*#__PURE__*/(0,c/* .css */.AH)("margin:",m/* .spacing["20"] */.YK["20"]," ",m/* .spacing["16"] */.YK["16"],";"),checkboxWrapper:/*#__PURE__*/(0,c/* .css */.AH)("display:flex;align-items:center;gap:",m/* .spacing["12"] */.YK["12"],";"),courseItem:/*#__PURE__*/(0,c/* .css */.AH)(v/* .typography.caption */.I.caption(),";margin-left:",m/* .spacing["4"] */.YK["4"],";"),thumbnail:/*#__PURE__*/(0,c/* .css */.AH)("width:48px;height:48px;border-radius:",m/* .borderRadius["4"] */.Vq["4"],";object-fit:cover;object-position:center;"),errorMessage:/*#__PURE__*/(0,c/* .css */.AH)("height:100px;display:flex;align-items:center;justify-content:center;")};// CONCATENATED MODULE: ../tutor/assets/react/v3/shared/components/modals/CourseCategorySelectModal/CourseListTable.tsx
var cI=e=>{var{type:t,form:r}=e;var n,o;var a=r.watch(t)||[];var{pageInfo:i,onPageChange:s,itemsPerPage:c,offset:u,onFilterItems:f}=co();var p=cx({applies_to:t==="courses"?"specific_courses":"specific_bundles",offset:u,limit:c,filter:i.filter});var h;var g=(h=(n=p.data)===null||n===void 0?void 0:n.results)!==null&&h!==void 0?h:[];function m(){var e=arguments.length>0&&arguments[0]!==void 0?arguments[0]:false;var n=a.map(e=>e.id);var o=g.map(e=>e.id);if(e){var i=g.filter(e=>!n.includes(e.id));r.setValue(t,[...a,...i]);return}var s=a.filter(e=>!o.includes(e.id));r.setValue(t,s)}function v(){return g.every(e=>a.map(e=>e.id).includes(e.id))}var b=[{Header:((o=p.data)===null||o===void 0?void 0:o.results.length)?/*#__PURE__*/(0,l/* .jsx */.Y)(I,{onChange:m,checked:p.isLoading||p.isRefetching?false:v(),label:t==="courses"?(0,d.__)("Courses","tutor-pro"):(0,d.__)("Bundles","tutor-pro"),labelCss:cT.checkboxLabel}):"#",Cell:e=>{return/*#__PURE__*/(0,l/* .jsxs */.FD)("div",{css:cT.checkboxWrapper,children:[/*#__PURE__*/(0,l/* .jsx */.Y)(I,{onChange:()=>{var n=a.filter(t=>t.id!==e.id);var o=(n===null||n===void 0?void 0:n.length)===a.length;if(o){r.setValue(t,[...n,e])}else{r.setValue(t,n)}},checked:a.map(e=>e.id).includes(e.id)}),/*#__PURE__*/(0,l/* .jsx */.Y)("img",{src:e.image||cb,css:cT.thumbnail,alt:(0,d.__)("course item","tutor-pro")}),/*#__PURE__*/(0,l/* .jsxs */.FD)("div",{css:cT.courseItem,children:[/*#__PURE__*/(0,l/* .jsx */.Y)("div",{children:e.title}),/*#__PURE__*/(0,l/* .jsx */.Y)("p",{children:e.author})]})]})}},{Header:(0,d.__)("Price","tutor-pro"),Cell:e=>{return/*#__PURE__*/(0,l/* .jsx */.Y)("div",{css:cT.price,children:e.plan_start_price?/*#__PURE__*/(0,l/* .jsx */.Y)("span",{css:cT.startingFrom,children:/* translators: %s is the starting price. */(0,d.sprintf)((0,d.__)("Starting from %s","tutor-pro"),e.plan_start_price)}):/*#__PURE__*/(0,l/* .jsxs */.FD)(l/* .Fragment */.FK,{children:[/*#__PURE__*/(0,l/* .jsx */.Y)("span",{children:e.sale_price?e.sale_price:e.regular_price}),e.sale_price&&/*#__PURE__*/(0,l/* .jsx */.Y)("span",{css:cT.discountPrice,children:e.regular_price})]})})}}];if(p.isLoading){return/*#__PURE__*/(0,l/* .jsx */.Y)(iE/* .LoadingSection */.YE,{})}if(!p.data){return/*#__PURE__*/(0,l/* .jsx */.Y)("div",{css:cT.errorMessage,children:(0,d.__)("Something went wrong","tutor-pro")})}var y;return/*#__PURE__*/(0,l/* .jsxs */.FD)(l/* .Fragment */.FK,{children:[/*#__PURE__*/(0,l/* .jsx */.Y)("div",{css:cT.tableActions,children:/*#__PURE__*/(0,l/* .jsx */.Y)(cA,{onFilterItems:f})}),/*#__PURE__*/(0,l/* .jsx */.Y)("div",{css:cT.tableWrapper,children:/*#__PURE__*/(0,l/* .jsx */.Y)(cm,{columns:b,data:(y=p.data.results)!==null&&y!==void 0?y:[],itemsPerPage:c,loading:p.isFetching||p.isRefetching})}),/*#__PURE__*/(0,l/* .jsx */.Y)("div",{css:cT.paginatorWrapper,children:/*#__PURE__*/(0,l/* .jsx */.Y)(ci,{currentPage:i.page,onPageChange:s,totalItems:p.data.total_items,itemsPerPage:c})})]})};/* export default */const cS=cI;var cT={tableActions:/*#__PURE__*/(0,c/* .css */.AH)("padding:",m/* .spacing["20"] */.YK["20"],";"),tableWrapper:/*#__PURE__*/(0,c/* .css */.AH)("max-height:calc(100vh - 350px);overflow:auto;"),paginatorWrapper:/*#__PURE__*/(0,c/* .css */.AH)("margin:",m/* .spacing["20"] */.YK["20"]," ",m/* .spacing["16"] */.YK["16"],";"),checkboxWrapper:/*#__PURE__*/(0,c/* .css */.AH)("display:flex;align-items:center;gap:",m/* .spacing["12"] */.YK["12"],";"),courseItem:/*#__PURE__*/(0,c/* .css */.AH)(v/* .typography.caption */.I.caption(),";margin-left:",m/* .spacing["4"] */.YK["4"],";"),thumbnail:/*#__PURE__*/(0,c/* .css */.AH)("width:76px;height:48px;border-radius:",m/* .borderRadius["4"] */.Vq["4"],";object-fit:cover;object-position:center;"),checkboxLabel:/*#__PURE__*/(0,c/* .css */.AH)(v/* .typography.body */.I.body(),";color:",m/* .colorTokens.text.primary */.I6.text.primary,";"),price:/*#__PURE__*/(0,c/* .css */.AH)("display:flex;gap:",m/* .spacing["4"] */.YK["4"],";justify-content:end;"),discountPrice:/*#__PURE__*/(0,c/* .css */.AH)("text-decoration:line-through;color:",m/* .colorTokens.text.subdued */.I6.text.subdued,";"),errorMessage:/*#__PURE__*/(0,c/* .css */.AH)("height:100px;display:flex;align-items:center;justify-content:center;"),startingFrom:/*#__PURE__*/(0,c/* .css */.AH)("color:",m/* .colorTokens.text.hints */.I6.text.hints,";")};// CONCATENATED MODULE: ../tutor/assets/react/v3/shared/components/modals/CourseCategorySelectModal/index.tsx
function cF(e){var{title:t,closeModal:r,actions:n,form:o,type:a,onSelect:i}=e;var s=sy({defaultValues:o.getValues()});var c=s.watch(a)||[];function u(){o.setValue(a,c,{shouldDirty:true});i===null||i===void 0?void 0:i(c);r({action:"CONFIRM"})}return/*#__PURE__*/(0,l/* .jsxs */.FD)(sq/* ["default"] */.A,{onClose:()=>r({action:"CLOSE"}),title:c.length?(0,d.sprintf)((0,d.__)("%d Selected","tutor-pro"),c.length):t,actions:n,maxWidth:720,children:[/*#__PURE__*/(0,l/* .jsx */.Y)(iZ/* ["default"] */.A,{when:a==="categories",fallback:/*#__PURE__*/(0,l/* .jsx */.Y)(cS,{form:s,type:a==="bundles"?"bundles":"courses"}),children:/*#__PURE__*/(0,l/* .jsx */.Y)(cM,{form:s})}),/*#__PURE__*/(0,l/* .jsxs */.FD)("div",{css:cH.footer,children:[/*#__PURE__*/(0,l/* .jsx */.Y)(oH/* ["default"] */.A,{size:"small",variant:"text",onClick:()=>r({action:"CLOSE"}),children:(0,d.__)("Cancel","tutor-pro")}),/*#__PURE__*/(0,l/* .jsx */.Y)(oH/* ["default"] */.A,{size:"small",variant:"primary",onClick:u,children:(0,d.__)("Apply","tutor-pro")})]})]})}/* export default */const cE=cF;var cH={footer:/*#__PURE__*/(0,c/* .css */.AH)("box-shadow:0px 1px 0px 0px #e4e5e7 inset;height:56px;display:flex;align-items:center;justify-content:end;gap:",m/* .spacing["16"] */.YK["16"],";padding-inline:",m/* .spacing["16"] */.YK["16"],";")};// CONCATENATED MODULE: ./addons/subscription/assets/react/membership-settings/components/CategoryItem.tsx
function cN(e){var{image:t,title:r,subTitle:n,handleDeleteClick:o}=e;return/*#__PURE__*/(0,l/* .jsxs */.FD)("div",{css:cO.selectedItem,children:[/*#__PURE__*/(0,l/* .jsx */.Y)("div",{css:cO.selectedThumb,children:/*#__PURE__*/(0,l/* .jsx */.Y)("img",{src:t||cb,css:cO.thumbnail,alt:"course item"})}),/*#__PURE__*/(0,l/* .jsxs */.FD)("div",{css:cO.selectedContent,children:[/*#__PURE__*/(0,l/* .jsx */.Y)("div",{css:cO.selectedTitle,children:r}),/*#__PURE__*/(0,l/* .jsx */.Y)("div",{css:cO.selectedSubTitle,children:n})]}),/*#__PURE__*/(0,l/* .jsx */.Y)("div",{children:/*#__PURE__*/(0,l/* .jsx */.Y)(oH/* ["default"] */.A,{variant:"text",onClick:o,children:/*#__PURE__*/(0,l/* .jsx */.Y)(S/* ["default"] */.A,{name:"delete",width:24,height:24})})})]})}var cO={selectedItem:/*#__PURE__*/(0,c/* .css */.AH)("padding:",m/* .spacing["12"] */.YK["12"],";display:flex;align-items:center;gap:",m/* .spacing["16"] */.YK["16"],";&:not(:last-child){border-bottom:1px solid ",m/* .colorTokens.stroke.divider */.I6.stroke.divider,";}"),selectedContent:/*#__PURE__*/(0,c/* .css */.AH)("width:100%;"),selectedTitle:/*#__PURE__*/(0,c/* .css */.AH)(v/* .typography.small */.I.small(),";color:",m/* .colorTokens.text.primary */.I6.text.primary,";margin-bottom:",m/* .spacing["4"] */.YK["4"],";"),selectedSubTitle:/*#__PURE__*/(0,c/* .css */.AH)(v/* .typography.small */.I.small(),";color:",m/* .colorTokens.text.hints */.I6.text.hints,";"),selectedThumb:/*#__PURE__*/(0,c/* .css */.AH)("height:48px;"),thumbnail:/*#__PURE__*/(0,c/* .css */.AH)("width:48px;height:48px;border-radius:",m/* .borderRadius["4"] */.Vq["4"],";object-fit:cover;")};// CONCATENATED MODULE: ./addons/subscription/assets/react/membership-settings/components/Categories.tsx
function cL(e){var{form:t}=e;var{showModal:r}=(0,s$/* .useModal */.h)();var n=t.watch("categories");return/*#__PURE__*/(0,l/* .jsxs */.FD)(l/* .Fragment */.FK,{children:[/*#__PURE__*/(0,l/* .jsx */.Y)(iZ/* ["default"] */.A,{when:n.length,children:/*#__PURE__*/(0,l/* .jsx */.Y)("div",{css:cV.categoriesWrapper,children:/*#__PURE__*/(0,l/* .jsx */.Y)(iR/* ["default"] */.A,{each:n,children:e=>/*#__PURE__*/(0,l/* .jsx */.Y)(cN,{title:e.title,subTitle:(0,d.sprintf)((0,d.__)("%s Courses","tutor-pro"),e.total_courses),image:e.image,handleDeleteClick:()=>{t.setValue("categories",n.filter(t=>t.id!==e.id),{shouldDirty:true})}})})})}),/*#__PURE__*/(0,l/* .jsx */.Y)(oH/* ["default"] */.A,{variant:"tertiary",isOutlined:true,buttonCss:cV.addCategoriesButton,icon:/*#__PURE__*/(0,l/* .jsx */.Y)(S/* ["default"] */.A,{name:"plusSquareBrand",width:24,height:25}),onClick:()=>{r({component:cE,props:{title:(0,d.__)("Selected items","tutor-pro"),type:"categories",form:t},closeOnOutsideClick:true,depthIndex:m/* .zIndex.highest */.fE.highest})},children:(0,d.__)("Add Categories","tutor-pro")})]})}var cV={categoriesWrapper:/*#__PURE__*/(0,c/* .css */.AH)("background-color:",m/* .colorTokens.background.white */.I6.background.white,";border:1px solid ",m/* .colorTokens.stroke.divider */.I6.stroke.divider,";border-radius:",m/* .borderRadius["6"] */.Vq["6"],";"),addCategoriesButton:/*#__PURE__*/(0,c/* .css */.AH)("width:fit-content;background-color:",m/* .colorTokens.background.white */.I6.background.white,";color:",m/* .colorTokens.text.brand */.I6.text.brand,";svg,:active svg{color:",m/* .colorTokens.text.brand */.I6.text.brand," !important;}")};// EXTERNAL MODULE: ./node_modules/@dnd-kit/core/dist/core.esm.js + 1 modules
var cW=r(8668);// EXTERNAL MODULE: ./node_modules/@dnd-kit/modifiers/dist/modifiers.esm.js
var cP=r(8831);// EXTERNAL MODULE: ./node_modules/@dnd-kit/sortable/dist/sortable.esm.js
var cK=r(3627);// EXTERNAL MODULE: ./node_modules/@dnd-kit/utilities/dist/utilities.esm.js
var cB=r(4979);// EXTERNAL MODULE: ../tutor/assets/react/v3/shared/utils/dndkit.ts
var cj=r(9362);// CONCATENATED MODULE: ./addons/subscription/assets/react/membership-settings/config/constants.ts
var cz={tick_circle:'<svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg"><path d="M16.2806 9.21937C16.3504 9.28903 16.4057 9.37175 16.4434 9.46279C16.4812 9.55384 16.5006 9.65144 16.5006 9.75C16.5006 9.84856 16.4812 9.94616 16.4434 10.0372C16.4057 10.1283 16.3504 10.211 16.2806 10.2806L11.0306 15.5306C10.961 15.6004 10.8783 15.6557 10.7872 15.6934C10.6962 15.7312 10.5986 15.7506 10.5 15.7506C10.4014 15.7506 10.3038 15.7312 10.2128 15.6934C10.1218 15.6557 10.039 15.6004 9.96938 15.5306L7.71938 13.2806C7.57865 13.1399 7.49959 12.949 7.49959 12.75C7.49959 12.551 7.57865 12.3601 7.71938 12.2194C7.86011 12.0786 8.05098 11.9996 8.25 11.9996C8.44903 11.9996 8.6399 12.0786 8.78063 12.2194L10.5 13.9397L15.2194 9.21937C15.289 9.14964 15.3718 9.09432 15.4628 9.05658C15.5538 9.01884 15.6514 8.99941 15.75 8.99941C15.8486 8.99941 15.9462 9.01884 16.0372 9.05658C16.1283 9.09432 16.211 9.14964 16.2806 9.21937ZM21.75 12C21.75 13.9284 21.1782 15.8134 20.1068 17.4168C19.0355 19.0202 17.5127 20.2699 15.7312 21.0078C13.9496 21.7458 11.9892 21.9389 10.0979 21.5627C8.20656 21.1865 6.46928 20.2579 5.10571 18.8943C3.74215 17.5307 2.81355 15.7934 2.43735 13.9021C2.06114 12.0108 2.25422 10.0504 2.99218 8.26884C3.73013 6.48726 4.97982 4.96451 6.58319 3.89317C8.18657 2.82183 10.0716 2.25 12 2.25C14.585 2.25273 17.0634 3.28084 18.8913 5.10872C20.7192 6.93661 21.7473 9.41498 21.75 12ZM20.25 12C20.25 10.3683 19.7661 8.77325 18.8596 7.41655C17.9531 6.05984 16.6646 5.00242 15.1571 4.37799C13.6497 3.75357 11.9909 3.59019 10.3905 3.90852C8.79017 4.22685 7.32016 5.01259 6.16637 6.16637C5.01259 7.32015 4.22685 8.79016 3.90853 10.3905C3.5902 11.9908 3.75358 13.6496 4.378 15.1571C5.00242 16.6646 6.05984 17.9531 7.41655 18.8596C8.77326 19.7661 10.3683 20.25 12 20.25C14.1873 20.2475 16.2843 19.3775 17.8309 17.8309C19.3775 16.2843 20.2475 14.1873 20.25 12Z" fill="currentColor"/></svg>',cross_circle:'<svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg"><path d="M15.5306 9.53063L13.0603 12L15.5306 14.4694C15.6003 14.5391 15.6556 14.6218 15.6933 14.7128C15.731 14.8039 15.7504 14.9015 15.7504 15C15.7504 15.0985 15.731 15.1961 15.6933 15.2872C15.6556 15.3782 15.6003 15.4609 15.5306 15.5306C15.4609 15.6003 15.3782 15.6556 15.2872 15.6933C15.1961 15.731 15.0986 15.7504 15 15.7504C14.9015 15.7504 14.8039 15.731 14.7128 15.6933C14.6218 15.6556 14.5391 15.6003 14.4694 15.5306L12 13.0603L9.53063 15.5306C9.46095 15.6003 9.37822 15.6556 9.28718 15.6933C9.19613 15.731 9.09855 15.7504 9 15.7504C8.90146 15.7504 8.80388 15.731 8.71283 15.6933C8.62179 15.6556 8.53906 15.6003 8.46938 15.5306C8.3997 15.4609 8.34442 15.3782 8.30671 15.2872C8.269 15.1961 8.24959 15.0985 8.24959 15C8.24959 14.9015 8.269 14.8039 8.30671 14.7128C8.34442 14.6218 8.3997 14.5391 8.46938 14.4694L10.9397 12L8.46938 9.53063C8.32865 9.38989 8.24959 9.19902 8.24959 9C8.24959 8.80098 8.32865 8.61011 8.46938 8.46937C8.61011 8.32864 8.80098 8.24958 9 8.24958C9.19903 8.24958 9.3899 8.32864 9.53063 8.46937L12 10.9397L14.4694 8.46937C14.5391 8.39969 14.6218 8.34442 14.7128 8.3067C14.8039 8.26899 14.9015 8.24958 15 8.24958C15.0986 8.24958 15.1961 8.26899 15.2872 8.3067C15.3782 8.34442 15.4609 8.39969 15.5306 8.46937C15.6003 8.53906 15.6556 8.62178 15.6933 8.71283C15.731 8.80387 15.7504 8.90145 15.7504 9C15.7504 9.09855 15.731 9.19613 15.6933 9.28717C15.6556 9.37822 15.6003 9.46094 15.5306 9.53063ZM21.75 12C21.75 13.9284 21.1782 15.8134 20.1068 17.4168C19.0355 19.0202 17.5127 20.2699 15.7312 21.0078C13.9496 21.7458 11.9892 21.9389 10.0979 21.5627C8.20656 21.1865 6.46928 20.2579 5.10571 18.8943C3.74215 17.5307 2.81355 15.7934 2.43735 13.9021C2.06114 12.0108 2.25422 10.0504 2.99218 8.26884C3.73013 6.48726 4.97982 4.96451 6.58319 3.89317C8.18657 2.82183 10.0716 2.25 12 2.25C14.585 2.25273 17.0634 3.28084 18.8913 5.10872C20.7192 6.93661 21.7473 9.41498 21.75 12ZM20.25 12C20.25 10.3683 19.7661 8.77325 18.8596 7.41655C17.9531 6.05984 16.6646 5.00242 15.1571 4.37799C13.6497 3.75357 11.9909 3.59019 10.3905 3.90852C8.79017 4.22685 7.32016 5.01259 6.16637 6.16637C5.01259 7.32015 4.22685 8.79016 3.90853 10.3905C3.5902 11.9908 3.75358 13.6496 4.378 15.1571C5.00242 16.6646 6.05984 17.9531 7.41655 18.8596C8.77326 19.7661 10.3683 20.25 12 20.25C14.1873 20.2475 16.2843 19.3775 17.8309 17.8309C19.3775 16.2843 20.2475 14.1873 20.25 12Z" fill="currentColor"/></svg>',tick:'<svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg"><path d="M5 14.5C5 14.5 6.5 14.5 8.5 18C8.5 18 14.059 8.833 19 7" stroke="currentColor" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"/></svg>',cross:'<svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg"><path fill-rule="evenodd" clip-rule="evenodd" d="M5.47032 5.46934C5.61094 5.32889 5.80157 5.25 6.00032 5.25C6.19907 5.25 6.38969 5.32889 6.53032 5.46934L18.5303 17.4693C18.604 17.538 18.6631 17.6208 18.7041 17.7128C18.7451 17.8048 18.7671 17.9041 18.7689 18.0048C18.7707 18.1055 18.7522 18.2055 18.7144 18.2989C18.6767 18.3923 18.6206 18.4772 18.5494 18.5484C18.4781 18.6196 18.3933 18.6757 18.2999 18.7135C18.2065 18.7512 18.1065 18.7697 18.0058 18.7679C17.9051 18.7662 17.8058 18.7441 17.7138 18.7031C17.6218 18.6621 17.539 18.603 17.4703 18.5293L5.47032 6.52934C5.32987 6.38871 5.25098 6.19809 5.25098 5.99934C5.25098 5.80059 5.32987 5.60997 5.47032 5.46934Z" fill="currentColor"/><path fill-rule="evenodd" clip-rule="evenodd" d="M18.5298 5.46934C18.6703 5.60997 18.7492 5.80059 18.7492 5.99934C18.7492 6.19809 18.6703 6.38871 18.5298 6.52934L6.52985 18.5293C6.38767 18.6618 6.19963 18.7339 6.00532 18.7305C5.81102 18.7271 5.62564 18.6484 5.48822 18.511C5.35081 18.3735 5.2721 18.1882 5.26867 17.9939C5.26524 17.7996 5.33737 17.6115 5.46985 17.4693L17.4698 5.46934C17.6105 5.32889 17.8011 5.25 17.9998 5.25C18.1986 5.25 18.3892 5.32889 18.5298 5.46934Z" fill="currentColor"/></svg>',plus_square:'<svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg"><path d="M19.5 3H4.5C4.10218 3 3.72064 3.15804 3.43934 3.43934C3.15804 3.72064 3 4.10218 3 4.5V19.5C3 19.8978 3.15804 20.2794 3.43934 20.5607C3.72064 20.842 4.10218 21 4.5 21H19.5C19.8978 21 20.2794 20.842 20.5607 20.5607C20.842 20.2794 21 19.8978 21 19.5V4.5C21 4.10218 20.842 3.72064 20.5607 3.43934C20.2794 3.15804 19.8978 3 19.5 3ZM19.5 19.5H4.5V4.5H19.5V19.5ZM16.5 12C16.5 12.1989 16.421 12.3897 16.2803 12.5303C16.1397 12.671 15.9489 12.75 15.75 12.75H12.75V15.75C12.75 15.9489 12.671 16.1397 12.5303 16.2803C12.3897 16.421 12.1989 16.5 12 16.5C11.8011 16.5 11.6103 16.421 11.4697 16.2803C11.329 16.1397 11.25 15.9489 11.25 15.75V12.75H8.25C8.05109 12.75 7.86032 12.671 7.71967 12.5303C7.57902 12.3897 7.5 12.1989 7.5 12C7.5 11.8011 7.57902 11.6103 7.71967 11.4697C7.86032 11.329 8.05109 11.25 8.25 11.25H11.25V8.25C11.25 8.05109 11.329 7.86032 11.4697 7.71967C11.6103 7.57902 11.8011 7.5 12 7.5C12.1989 7.5 12.3897 7.57902 12.5303 7.71967C12.671 7.86032 12.75 8.05109 12.75 8.25V11.25H15.75C15.9489 11.25 16.1397 11.329 16.2803 11.4697C16.421 11.6103 16.5 11.8011 16.5 12Z" fill="currentColor"/></svg>',minus_square:'<svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg"><path d="M19.5 3H4.5C4.10218 3 3.72064 3.15804 3.43934 3.43934C3.15804 3.72064 3 4.10218 3 4.5V19.5C3 19.8978 3.15804 20.2794 3.43934 20.5607C3.72064 20.842 4.10218 21 4.5 21H19.5C19.8978 21 20.2794 20.842 20.5607 20.5607C20.842 20.2794 21 19.8978 21 19.5V4.5C21 4.10218 20.842 3.72064 20.5607 3.43934C20.2794 3.15804 19.8978 3 19.5 3ZM19.5 19.5H4.5V4.5H19.5V19.5ZM16.5 12C16.5 12.1989 16.421 12.3897 16.2803 12.5303C16.1397 12.671 15.9489 12.75 15.75 12.75H8.25C8.05109 12.75 7.86032 12.671 7.71967 12.5303C7.57902 12.3897 7.5 12.1989 7.5 12C7.5 11.8011 7.57902 11.6103 7.71967 11.4697C7.86032 11.329 8.05109 11.25 8.25 11.25H15.75C15.9489 11.25 16.1397 11.329 16.2803 11.4697C16.421 11.6103 16.5 11.8011 16.5 12Z" fill="currentColor"/></svg>',plus_circle:'<svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg"><path d="M12 2.25C10.0716 2.25 8.18657 2.82183 6.58319 3.89317C4.97982 4.96451 3.73013 6.48726 2.99218 8.26884C2.25422 10.0504 2.06114 12.0108 2.43735 13.9021C2.81355 15.7934 3.74215 17.5307 5.10571 18.8943C6.46928 20.2579 8.20656 21.1865 10.0979 21.5627C11.9892 21.9389 13.9496 21.7458 15.7312 21.0078C17.5127 20.2699 19.0355 19.0202 20.1068 17.4168C21.1782 15.8134 21.75 13.9284 21.75 12C21.7473 9.41498 20.7192 6.93661 18.8913 5.10872C17.0634 3.28084 14.585 2.25273 12 2.25ZM12 20.25C10.3683 20.25 8.77326 19.7661 7.41655 18.8596C6.05984 17.9531 5.00242 16.6646 4.378 15.1571C3.75358 13.6496 3.5902 11.9908 3.90853 10.3905C4.22685 8.79016 5.01259 7.32015 6.16637 6.16637C7.32016 5.01259 8.79017 4.22685 10.3905 3.90852C11.9909 3.59019 13.6497 3.75357 15.1571 4.37799C16.6646 5.00242 17.9531 6.05984 18.8596 7.41655C19.7661 8.77325 20.25 10.3683 20.25 12C20.2475 14.1873 19.3775 16.2843 17.8309 17.8309C16.2843 19.3775 14.1873 20.2475 12 20.25ZM16.5 12C16.5 12.1989 16.421 12.3897 16.2803 12.5303C16.1397 12.671 15.9489 12.75 15.75 12.75H12.75V15.75C12.75 15.9489 12.671 16.1397 12.5303 16.2803C12.3897 16.421 12.1989 16.5 12 16.5C11.8011 16.5 11.6103 16.421 11.4697 16.2803C11.329 16.1397 11.25 15.9489 11.25 15.75V12.75H8.25C8.05109 12.75 7.86033 12.671 7.71967 12.5303C7.57902 12.3897 7.5 12.1989 7.5 12C7.5 11.8011 7.57902 11.6103 7.71967 11.4697C7.86033 11.329 8.05109 11.25 8.25 11.25H11.25V8.25C11.25 8.05109 11.329 7.86032 11.4697 7.71967C11.6103 7.57902 11.8011 7.5 12 7.5C12.1989 7.5 12.3897 7.57902 12.5303 7.71967C12.671 7.86032 12.75 8.05109 12.75 8.25V11.25H15.75C15.9489 11.25 16.1397 11.329 16.2803 11.4697C16.421 11.6103 16.5 11.8011 16.5 12Z" fill="currentColor"/></svg>',minus_circle:'<svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg"><path d="M16.5 12C16.5 12.1989 16.421 12.3897 16.2803 12.5303C16.1397 12.671 15.9489 12.75 15.75 12.75H8.25C8.05109 12.75 7.86033 12.671 7.71967 12.5303C7.57902 12.3897 7.5 12.1989 7.5 12C7.5 11.8011 7.57902 11.6103 7.71967 11.4697C7.86033 11.329 8.05109 11.25 8.25 11.25H15.75C15.9489 11.25 16.1397 11.329 16.2803 11.4697C16.421 11.6103 16.5 11.8011 16.5 12ZM21.75 12C21.75 13.9284 21.1782 15.8134 20.1068 17.4168C19.0355 19.0202 17.5127 20.2699 15.7312 21.0078C13.9496 21.7458 11.9892 21.9389 10.0979 21.5627C8.20656 21.1865 6.46928 20.2579 5.10571 18.8943C3.74215 17.5307 2.81355 15.7934 2.43735 13.9021C2.06114 12.0108 2.25422 10.0504 2.99218 8.26884C3.73013 6.48726 4.97982 4.96451 6.58319 3.89317C8.18657 2.82183 10.0716 2.25 12 2.25C14.585 2.25273 17.0634 3.28084 18.8913 5.10872C20.7192 6.93661 21.7473 9.41498 21.75 12ZM20.25 12C20.25 10.3683 19.7661 8.77325 18.8596 7.41655C17.9531 6.05984 16.6646 5.00242 15.1571 4.37799C13.6497 3.75357 11.9909 3.59019 10.3905 3.90852C8.79017 4.22685 7.32016 5.01259 6.16637 6.16637C5.01259 7.32015 4.22685 8.79016 3.90853 10.3905C3.5902 11.9908 3.75358 13.6496 4.378 15.1571C5.00242 16.6646 6.05984 17.9531 7.41655 18.8596C8.77326 19.7661 10.3683 20.25 12 20.25C14.1873 20.2475 16.2843 19.3775 17.8309 17.8309C19.3775 16.2843 20.2475 14.1873 20.25 12Z" fill="currentColor"/></svg>',tick_circle_fill:'<svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg"><path d="M12 2.25C10.0716 2.25 8.18657 2.82183 6.58319 3.89317C4.97982 4.96451 3.73013 6.48726 2.99218 8.26884C2.25422 10.0504 2.06114 12.0108 2.43735 13.9021C2.81355 15.7934 3.74215 17.5307 5.10571 18.8943C6.46928 20.2579 8.20656 21.1865 10.0979 21.5627C11.9892 21.9389 13.9496 21.7458 15.7312 21.0078C17.5127 20.2699 19.0355 19.0202 20.1068 17.4168C21.1782 15.8134 21.75 13.9284 21.75 12C21.7473 9.41498 20.7192 6.93661 18.8913 5.10872C17.0634 3.28084 14.585 2.25273 12 2.25ZM16.2806 10.2806L11.0306 15.5306C10.961 15.6004 10.8783 15.6557 10.7872 15.6934C10.6962 15.7312 10.5986 15.7506 10.5 15.7506C10.4014 15.7506 10.3038 15.7312 10.2128 15.6934C10.1218 15.6557 10.039 15.6004 9.96938 15.5306L7.71938 13.2806C7.57865 13.1399 7.49959 12.949 7.49959 12.75C7.49959 12.551 7.57865 12.3601 7.71938 12.2194C7.86011 12.0786 8.05098 11.9996 8.25 11.9996C8.44903 11.9996 8.6399 12.0786 8.78063 12.2194L10.5 13.9397L15.2194 9.21937C15.2891 9.14969 15.3718 9.09442 15.4628 9.0567C15.5539 9.01899 15.6515 8.99958 15.75 8.99958C15.8486 8.99958 15.9461 9.01899 16.0372 9.0567C16.1282 9.09442 16.2109 9.14969 16.2806 9.21937C16.3503 9.28906 16.4056 9.37178 16.4433 9.46283C16.481 9.55387 16.5004 9.65145 16.5004 9.75C16.5004 9.84855 16.481 9.94613 16.4433 10.0372C16.4056 10.1282 16.3503 10.2109 16.2806 10.2806Z" fill="currentColor"/></svg>',cross_circle_fill:'<svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg"><path d="M12 2.25C10.0716 2.25 8.18657 2.82183 6.58319 3.89317C4.97982 4.96451 3.73013 6.48726 2.99218 8.26884C2.25422 10.0504 2.06114 12.0108 2.43735 13.9021C2.81355 15.7934 3.74215 17.5307 5.10571 18.8943C6.46928 20.2579 8.20656 21.1865 10.0979 21.5627C11.9892 21.9389 13.9496 21.7458 15.7312 21.0078C17.5127 20.2699 19.0355 19.0202 20.1068 17.4168C21.1782 15.8134 21.75 13.9284 21.75 12C21.7473 9.41498 20.7192 6.93661 18.8913 5.10872C17.0634 3.28084 14.585 2.25273 12 2.25ZM15.5306 14.4694C15.6003 14.5391 15.6556 14.6218 15.6933 14.7128C15.731 14.8039 15.7504 14.9015 15.7504 15C15.7504 15.0985 15.731 15.1961 15.6933 15.2872C15.6556 15.3782 15.6003 15.4609 15.5306 15.5306C15.4609 15.6003 15.3782 15.6556 15.2872 15.6933C15.1961 15.731 15.0986 15.7504 15 15.7504C14.9015 15.7504 14.8039 15.731 14.7128 15.6933C14.6218 15.6556 14.5391 15.6003 14.4694 15.5306L12 13.0603L9.53063 15.5306C9.46095 15.6003 9.37822 15.6556 9.28718 15.6933C9.19613 15.731 9.09855 15.7504 9 15.7504C8.90146 15.7504 8.80388 15.731 8.71283 15.6933C8.62179 15.6556 8.53906 15.6003 8.46938 15.5306C8.3997 15.4609 8.34442 15.3782 8.30671 15.2872C8.269 15.1961 8.24959 15.0985 8.24959 15C8.24959 14.9015 8.269 14.8039 8.30671 14.7128C8.34442 14.6218 8.3997 14.5391 8.46938 14.4694L10.9397 12L8.46938 9.53063C8.32865 9.38989 8.24959 9.19902 8.24959 9C8.24959 8.80098 8.32865 8.61011 8.46938 8.46937C8.61011 8.32864 8.80098 8.24958 9 8.24958C9.19903 8.24958 9.3899 8.32864 9.53063 8.46937L12 10.9397L14.4694 8.46937C14.5391 8.39969 14.6218 8.34442 14.7128 8.3067C14.8039 8.26899 14.9015 8.24958 15 8.24958C15.0986 8.24958 15.1961 8.26899 15.2872 8.3067C15.3782 8.34442 15.4609 8.39969 15.5306 8.46937C15.6003 8.53906 15.6556 8.62178 15.6933 8.71283C15.731 8.80387 15.7504 8.90145 15.7504 9C15.7504 9.09855 15.731 9.19613 15.6933 9.28717C15.6556 9.37822 15.6003 9.46094 15.5306 9.53063L13.0603 12L15.5306 14.4694Z" fill="currentColor"/></svg>',plus_circle_fill:'<svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg"><path d="M12 2.25C10.0716 2.25 8.18657 2.82183 6.58319 3.89317C4.97982 4.96451 3.73013 6.48726 2.99218 8.26884C2.25422 10.0504 2.06114 12.0108 2.43735 13.9021C2.81355 15.7934 3.74215 17.5307 5.10571 18.8943C6.46928 20.2579 8.20656 21.1865 10.0979 21.5627C11.9892 21.9389 13.9496 21.7458 15.7312 21.0078C17.5127 20.2699 19.0355 19.0202 20.1068 17.4168C21.1782 15.8134 21.75 13.9284 21.75 12C21.7468 9.41513 20.7185 6.93705 18.8907 5.10927C17.063 3.28149 14.5849 2.25323 12 2.25ZM15.75 12.75H12.75V15.75C12.75 15.9489 12.671 16.1397 12.5303 16.2803C12.3897 16.421 12.1989 16.5 12 16.5C11.8011 16.5 11.6103 16.421 11.4697 16.2803C11.329 16.1397 11.25 15.9489 11.25 15.75V12.75H8.25C8.05109 12.75 7.86033 12.671 7.71967 12.5303C7.57902 12.3897 7.5 12.1989 7.5 12C7.5 11.8011 7.57902 11.6103 7.71967 11.4697C7.86033 11.329 8.05109 11.25 8.25 11.25H11.25V8.25C11.25 8.05109 11.329 7.86032 11.4697 7.71967C11.6103 7.57902 11.8011 7.5 12 7.5C12.1989 7.5 12.3897 7.57902 12.5303 7.71967C12.671 7.86032 12.75 8.05109 12.75 8.25V11.25H15.75C15.9489 11.25 16.1397 11.329 16.2803 11.4697C16.421 11.6103 16.5 11.8011 16.5 12C16.5 12.1989 16.421 12.3897 16.2803 12.5303C16.1397 12.671 15.9489 12.75 15.75 12.75Z" fill="currentColor"/></svg>',minus_circle_fill:'<svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg"><path d="M12 2.25C10.0716 2.25 8.18657 2.82183 6.58319 3.89317C4.97982 4.96451 3.73013 6.48726 2.99218 8.26884C2.25422 10.0504 2.06114 12.0108 2.43735 13.9021C2.81355 15.7934 3.74215 17.5307 5.10571 18.8943C6.46928 20.2579 8.20656 21.1865 10.0979 21.5627C11.9892 21.9389 13.9496 21.7458 15.7312 21.0078C17.5127 20.2699 19.0355 19.0202 20.1068 17.4168C21.1782 15.8134 21.75 13.9284 21.75 12C21.7473 9.41498 20.7192 6.93661 18.8913 5.10872C17.0634 3.28084 14.585 2.25273 12 2.25ZM15.75 12.75H8.25C8.05109 12.75 7.86033 12.671 7.71967 12.5303C7.57902 12.3897 7.5 12.1989 7.5 12C7.5 11.8011 7.57902 11.6103 7.71967 11.4697C7.86033 11.329 8.05109 11.25 8.25 11.25H15.75C15.9489 11.25 16.1397 11.329 16.2803 11.4697C16.421 11.6103 16.5 11.8011 16.5 12C16.5 12.1989 16.421 12.3897 16.2803 12.5303C16.1397 12.671 15.9489 12.75 15.75 12.75Z" fill="currentColor"/></svg>',plus_square_fill:'<svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg"><path d="M19.5 3H4.5C4.10218 3 3.72064 3.15804 3.43934 3.43934C3.15804 3.72064 3 4.10218 3 4.5V19.5C3 19.8978 3.15804 20.2794 3.43934 20.5607C3.72064 20.842 4.10218 21 4.5 21H19.5C19.8978 21 20.2794 20.842 20.5607 20.5607C20.842 20.2794 21 19.8978 21 19.5V4.5C21 4.10218 20.842 3.72064 20.5607 3.43934C20.2794 3.15804 19.8978 3 19.5 3ZM15.75 12.75H12.75V15.75C12.75 15.9489 12.671 16.1397 12.5303 16.2803C12.3897 16.421 12.1989 16.5 12 16.5C11.8011 16.5 11.6103 16.421 11.4697 16.2803C11.329 16.1397 11.25 15.9489 11.25 15.75V12.75H8.25C8.05109 12.75 7.86032 12.671 7.71967 12.5303C7.57902 12.3897 7.5 12.1989 7.5 12C7.5 11.8011 7.57902 11.6103 7.71967 11.4697C7.86032 11.329 8.05109 11.25 8.25 11.25H11.25V8.25C11.25 8.05109 11.329 7.86032 11.4697 7.71967C11.6103 7.57902 11.8011 7.5 12 7.5C12.1989 7.5 12.3897 7.57902 12.5303 7.71967C12.671 7.86032 12.75 8.05109 12.75 8.25V11.25H15.75C15.9489 11.25 16.1397 11.329 16.2803 11.4697C16.421 11.6103 16.5 11.8011 16.5 12C16.5 12.1989 16.421 12.3897 16.2803 12.5303C16.1397 12.671 15.9489 12.75 15.75 12.75Z" fill="currentColor"/></svg>',minus_square_fill:'<svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg"><path d="M19.5 3H4.5C4.10218 3 3.72064 3.15804 3.43934 3.43934C3.15804 3.72064 3 4.10218 3 4.5V19.5C3 19.8978 3.15804 20.2794 3.43934 20.5607C3.72064 20.842 4.10218 21 4.5 21H19.5C19.8978 21 20.2794 20.842 20.5607 20.5607C20.842 20.2794 21 19.8978 21 19.5V4.5C21 4.10218 20.842 3.72064 20.5607 3.43934C20.2794 3.15804 19.8978 3 19.5 3ZM15.75 12.75H8.25C8.05109 12.75 7.86032 12.671 7.71967 12.5303C7.57902 12.3897 7.5 12.1989 7.5 12C7.5 11.8011 7.57902 11.6103 7.71967 11.4697C7.86032 11.329 8.05109 11.25 8.25 11.25H15.75C15.9489 11.25 16.1397 11.329 16.2803 11.4697C16.421 11.6103 16.5 11.8011 16.5 12C16.5 12.1989 16.421 12.3897 16.2803 12.5303C16.1397 12.671 15.9489 12.75 15.75 12.75Z" fill="currentColor"/></svg>'};// CONCATENATED MODULE: ./addons/subscription/assets/react/membership-settings/components/fields/FormFeatureItem.tsx
function cR(e){var{id:t,field:r,fieldState:n,handleDeleteClick:o}=e;var[a,c]=(0,y.useState)(false);var u=(0,y.useRef)(null);var{attributes:f,listeners:p,setNodeRef:h,transform:g,transition:m,isDragging:v}=(0,cK/* .useSortable */.gl)({id:t,animateLayoutChanges:cj/* .animateLayoutChanges */.J});var b={transform:cB/* .CSS.Transform.toString */.Ks.Transform.toString(g?(0,s._)((0,i._)({},g),{scaleX:1,scaleY:1}):null),transition:m,zIndex:v?1:0};function _(e){r.onChange((0,s._)((0,i._)({},r.value),{icon:e}))}function w(e){r.onChange((0,s._)((0,i._)({},r.value),{content:e}))}return/*#__PURE__*/(0,l/* .jsx */.Y)("div",{ref:h,style:b,children:/*#__PURE__*/(0,l/* .jsx */.Y)(F/* ["default"] */.A,{field:r,fieldState:n,inputStyle:cq.input,children:e=>{return/*#__PURE__*/(0,l/* .jsxs */.FD)(l/* .Fragment */.FK,{children:[/*#__PURE__*/(0,l/* .jsxs */.FD)("div",{css:cq.featureItem,children:[/*#__PURE__*/(0,l/* .jsx */.Y)("button",(0,s._)((0,i._)({type:"button"},f,p),{css:cq.dragButton,children:/*#__PURE__*/(0,l/* .jsx */.Y)(S/* ["default"] */.A,{name:"dragVertical",width:24,height:24})})),/*#__PURE__*/(0,l/* .jsx */.Y)("button",{ref:u,type:"button",css:cq.iconSelector,onClick:()=>c(!a),dangerouslySetInnerHTML:{__html:cz[r.value.icon]}}),/*#__PURE__*/(0,l/* .jsx */.Y)("input",(0,s._)((0,i._)({},e),{value:r.value.content,onChange:e=>w(e.target.value)})),/*#__PURE__*/(0,l/* .jsx */.Y)("button",{css:cq.deleteButton,type:"button",onClick:o,"data-delete-button":true,children:/*#__PURE__*/(0,l/* .jsx */.Y)(S/* ["default"] */.A,{name:"delete",width:24,height:24})})]}),/*#__PURE__*/(0,l/* .jsx */.Y)(iV/* ["default"] */.A,{triggerRef:u,isOpen:a,closePopover:()=>{c(false)},maxWidth:"208px",children:/*#__PURE__*/(0,l/* .jsxs */.FD)("div",{css:cq.popoverWrapper,children:[/*#__PURE__*/(0,l/* .jsxs */.FD)("div",{css:cq.popoverHeader,children:[/*#__PURE__*/(0,l/* .jsx */.Y)("label",{children:(0,d.__)("Icons","tutor-pro")}),/*#__PURE__*/(0,l/* .jsx */.Y)(oH/* ["default"] */.A,{variant:"text",size:"small",isIconOnly:true,"aria-label":(0,d.__)("Close","tutor-pro"),onClick:()=>c(false),icon:/*#__PURE__*/(0,l/* .jsx */.Y)(S/* ["default"] */.A,{name:"cross",width:24,height:24})})]}),/*#__PURE__*/(0,l/* .jsx */.Y)("div",{css:cq.popoverContent,children:/*#__PURE__*/(0,l/* .jsx */.Y)(iR/* ["default"] */.A,{each:Object.getOwnPropertyNames(cz),children:e=>{return/*#__PURE__*/(0,l/* .jsx */.Y)("button",{css:cq.popoverContentButton,type:"button",onClick:()=>{_(e);c(false)},dangerouslySetInnerHTML:{__html:cz[e]}})}})})]})})]})}})})}var cq={featureItem:/*#__PURE__*/(0,c/* .css */.AH)("position:relative;display:flex;&:hover{button[data-delete-button]{opacity:1;}}"),input:/*#__PURE__*/(0,c/* .css */.AH)("&.tutor-input-field{border-top-left-radius:0;border-bottom-left-radius:0;padding:",m/* .spacing["4"] */.YK["4"]," ",m/* .spacing["36"] */.YK["36"]," ",m/* .spacing["4"] */.YK["4"]," ",m/* .spacing["8"] */.YK["8"],";&:focus{border-radius:",m/* .borderRadius["6"] */.Vq["6"],";}}"),iconSelector:/*#__PURE__*/(0,c/* .css */.AH)("height:40px;display:flex;align-items:center;background-color:",m/* .colorTokens.background.white */.I6.background.white,";color:",m/* .colorTokens.icon.hover */.I6.icon.hover,";border:1px solid ",m/* .colorTokens.stroke["default"] */.I6.stroke["default"],";border-right:none;border-top-left-radius:",m/* .borderRadius["6"] */.Vq["6"],";border-bottom-left-radius:",m/* .borderRadius["6"] */.Vq["6"],";cursor:pointer;transition:background-color 0.25s;:hover{background-color:",m/* .colorTokens.background.hover */.I6.background.hover,";}:focus-visible{border-radius:",m/* .borderRadius["4"] */.Vq["4"],";outline:2px solid ",m/* .colorTokens.stroke.brand */.I6.stroke.brand,";outline-offset:2px;z-index:1;}"),dragButton:/*#__PURE__*/(0,c/* .css */.AH)("display:flex;align-items:center;padding:0;color:",m/* .colorTokens.icon["default"] */.I6.icon["default"],";background:transparent;border:none;cursor:grab;:focus-visible{border-radius:",m/* .borderRadius["4"] */.Vq["4"],";outline:2px solid ",m/* .colorTokens.stroke.brand */.I6.stroke.brand,";}"),deleteButton:/*#__PURE__*/(0,c/* .css */.AH)("display:flex;position:absolute;right:",m/* .spacing["12"] */.YK["12"],";top:",m/* .spacing["8"] */.YK["8"],";padding:0;color:",m/* .colorTokens.icon["default"] */.I6.icon["default"],";background:transparent;border:none;cursor:pointer;opacity:0;transition:opacity 0.25s;:focus-visible{border-radius:",m/* .borderRadius["2"] */.Vq["2"],";outline:2px solid ",m/* .colorTokens.stroke.brand */.I6.stroke.brand,";outline-offset:2px;opacity:1;}",m/* .Breakpoint.mobile */.EA.mobile,"{opacity:1;}"),popoverWrapper:/*#__PURE__*/(0,c/* .css */.AH)("max-height:300px;overflow-y:auto;"),popoverHeader:/*#__PURE__*/(0,c/* .css */.AH)("display:flex;justify-content:space-between;align-items:center;border-bottom:1px solid ",m/* .colorTokens.stroke.divider */.I6.stroke.divider,";padding:",m/* .spacing["8"] */.YK["8"],";label{",v/* .typography.caption */.I.caption("medium"),";color:",m/* .colorTokens.text.title */.I6.text.title,";}button{padding:0px;}"),popoverContent:/*#__PURE__*/(0,c/* .css */.AH)("display:flex;flex-wrap:wrap;gap:",m/* .spacing["8"] */.YK["8"],";padding:",m/* .spacing["12"] */.YK["12"],";"),popoverContentButton:/*#__PURE__*/(0,c/* .css */.AH)("display:flex;background-color:",m/* .colorTokens.background["default"] */.I6.background["default"],";color:",m/* .colorTokens.icon.hover */.I6.icon.hover,";border:none;border-radius:",m/* .borderRadius["4"] */.Vq["4"],";padding:",m/* .spacing["8"] */.YK["8"],";cursor:pointer;transition:background-color 0.25s,box-shadow 0.25s;:hover{background-color:",m/* .colorTokens.background.hover */.I6.background.hover,";box-shadow:inset 0px 0px 0px 1px ",m/* .colorTokens.action.primary.hover */.I6.action.primary.hover,";}:focus-visible{border-radius:",m/* .borderRadius["6"] */.Vq["6"],";outline:2px solid ",m/* .colorTokens.stroke.brand */.I6.stroke.brand,";outline-offset:2px;z-index:1;}")};// CONCATENATED MODULE: ./addons/subscription/assets/react/membership-settings/components/IconsAndFeatures.tsx
function cU(){var e=(0,u/* .useFormContext */.xW)();var{fields:t,append:r,remove:n,move:o}=(0,u/* .useFieldArray */.jz)({control:e.control,name:"features"});var a=(0,cW/* .useSensors */.FR)((0,cW/* .useSensor */.MS)(cW/* .PointerSensor */.AN),(0,cW/* .useSensor */.MS)(cW/* .KeyboardSensor */.uN,{coordinateGetter:cK/* .sortableKeyboardCoordinates */.JR}));return/*#__PURE__*/(0,l/* .jsxs */.FD)("div",{css:cZ.wrapper,children:[/*#__PURE__*/(0,l/* .jsxs */.FD)("div",{css:cZ.header,children:[/*#__PURE__*/(0,l/* .jsx */.Y)("label",{children:(0,d.__)("Features","tutor-pro")}),/*#__PURE__*/(0,l/* .jsx */.Y)(oH/* ["default"] */.A,{variant:"tertiary",size:"small","aria-label":(0,d.__)("Add Feature","tutor-pro"),isIconOnly:true,onClick:()=>r({id:(0,b/* .nanoid */.Ak)(),icon:"tick_circle_fill",content:""}),icon:/*#__PURE__*/(0,l/* .jsx */.Y)(S/* ["default"] */.A,{name:"plus",width:24,height:24})})]}),/*#__PURE__*/(0,l/* .jsx */.Y)(iZ/* ["default"] */.A,{when:t.length>0,children:/*#__PURE__*/(0,l/* .jsx */.Y)("div",{css:cZ.features,children:/*#__PURE__*/(0,l/* .jsx */.Y)(cW/* .DndContext */.Mp,{sensors:a,modifiers:[cP/* .restrictToParentElement */.gj],onDragEnd:e=>{var{active:r,over:n}=e;if(!n){return}if(r.id!==n.id){var a=t.findIndex(e=>e.id===r.id);var i=t.findIndex(e=>e.id===n.id);o(a,i)}},children:/*#__PURE__*/(0,l/* .jsx */.Y)(cK/* .SortableContext */.gB,{items:t,strategy:cK/* .verticalListSortingStrategy */._G,children:/*#__PURE__*/(0,l/* .jsx */.Y)(iR/* ["default"] */.A,{each:t,children:(t,r)=>/*#__PURE__*/(0,l/* .jsx */.Y)(u/* .Controller */.xI,{control:e.control,name:"features.".concat(r),rules:{validate:e=>!!(e===null||e===void 0?void 0:e.content)||(0,d.__)("Content is required","tutor-pro")},render:e=>/*#__PURE__*/(0,l/* .jsx */.Y)(cR,(0,s._)((0,i._)({id:t.id},e),{handleDeleteClick:()=>n(r)}))},t.id)})})})})})]})}var cZ={wrapper:/*#__PURE__*/(0,c/* .css */.AH)("background-color:",m/* .colorTokens.background.white */.I6.background.white,";border:1px solid ",m/* .colorTokens.stroke.divider */.I6.stroke.divider,";border-radius:",m/* .borderRadius["6"] */.Vq["6"],";padding:",m/* .spacing["12"] */.YK["12"]," ",m/* .spacing["16"] */.YK["16"],";"),header:/*#__PURE__*/(0,c/* .css */.AH)("display:flex;align-items:center;justify-content:space-between;label{",v/* .typography.caption */.I.caption(),";color:",m/* .colorTokens.text.title */.I6.text.title,";}"),features:/*#__PURE__*/(0,c/* .css */.AH)("display:flex;flex-direction:column;gap:",m/* .spacing["8"] */.YK["8"],";padding:",m/* .spacing["12"] */.YK["12"]," 0 ",m/* .spacing["8"] */.YK["8"],";")};// CONCATENATED MODULE: ./addons/subscription/assets/react/membership-settings/components/MembershipFormFields.tsx
var{tutor_currency:cQ}=sX/* .tutorConfig */.P;function cG(e){var{hasIndividualTaxControl:t}=e;var r,n;var o=(0,u/* .useFormContext */.xW)();var a=o.watch("charge_enrollment_fee");var c=o.watch("offer_sale_price");var f=o.watch("regular_price");var p=!!o.watch("schedule_sale_price");var h=!!o.watch("is_featured");var g=!!o.watch("enable_trial");var m=!!o.watch("tax_collection");var v=[3,6,9,12];var b=[...v.map(e=>({label:(0,d.sprintf)((0,d.__)("%s times","tutor-pro"),e.toString()),value:String(e)})),{label:(0,d.__)("Until cancelled","tutor-pro"),value:"Until cancelled"}];var y=o.watch("plan_type");var _=[{label:(0,d.__)("Full Site","tutor-pro"),value:"full_site"},{label:(0,d.__)("Specific Categories","tutor-pro"),value:"category"}];var w=!!((r=sX/* .tutorConfig.settings */.P.settings)===null||r===void 0?void 0:r.enable_tax);var x=!!((n=sX/* .tutorConfig.settings */.P.settings)===null||n===void 0?void 0:n.is_tax_included_in_price);var C=()=>{if(!w){return false}if(!x){return false}return!m};return/*#__PURE__*/(0,l/* .jsxs */.FD)("div",{css:c$.container,children:[/*#__PURE__*/(0,l/* .jsx */.Y)(u/* .Controller */.xI,{control:o.control,name:"plan_name",rules:(0,s._)((0,i._)({},s7()),{maxLength:{value:100,message:(0,d.__)("Plan name should be less than 100 characters","tutor-pro")}}),render:e=>/*#__PURE__*/(0,l/* .jsx */.Y)(ly,(0,s._)((0,i._)({},e),{label:(0,d.__)("Title","tutor-pro"),placeholder:(0,d.__)("e.g., Silver Membership","tutor-pro")}))}),/*#__PURE__*/(0,l/* .jsx */.Y)(u/* .Controller */.xI,{control:o.control,name:"short_description",rules:(0,s._)((0,i._)({},s7()),{maxLength:{value:200,message:(0,d.__)("Short description should be less than 200 characters","tutor-pro")}}),render:e=>/*#__PURE__*/(0,l/* .jsx */.Y)(ly,(0,s._)((0,i._)({},e),{label:(0,d.__)("Short Description","tutor-pro"),placeholder:(0,d.__)("e.g., Perfect for beginners looking for weekly classes","tutor-pro")}))}),/*#__PURE__*/(0,l/* .jsxs */.FD)("div",{css:c$.inputGroup({numberOfColumn:4}),children:[/*#__PURE__*/(0,l/* .jsx */.Y)(u/* .Controller */.xI,{control:o.control,name:"regular_price",rules:(0,s._)((0,i._)({},s7()),{validate:e=>{if(Number(e)<1){return(0,d.__)("This value must be equal to or greater than 1","tutor-pro")}return true}}),render:e=>/*#__PURE__*/(0,l/* .jsx */.Y)(lF,(0,s._)((0,i._)({},e),{label:(0,d.__)("Price","tutor-pro"),content:(cQ===null||cQ===void 0?void 0:cQ.symbol)||"$",placeholder:(0,d.__)("Plan price","tutor-pro"),selectOnFocus:true,contentCss:oL/* .styleUtils.inputCurrencyStyle */.x.inputCurrencyStyle,type:"number"}))}),/*#__PURE__*/(0,l/* .jsx */.Y)(u/* .Controller */.xI,{control:o.control,name:"recurring_value",rules:(0,s._)((0,i._)({},s7()),{validate:e=>{if(Number(e)<1){return(0,d.__)("This value must be equal to or greater than 1","tutor-pro")}if(Number(e)%1!==0){return(0,d.__)("This value can not be fractional","tutor-pro")}return true}}),render:e=>/*#__PURE__*/(0,l/* .jsx */.Y)(ly,(0,s._)((0,i._)({},e),{label:(0,d.__)("Billing Interval","tutor-pro"),placeholder:(0,d.__)("12","tutor-pro"),selectOnFocus:true,type:"number",onChange:t=>{var r=String(t).includes(".");if(r){e.field.onChange(String(t).replace(".",""))}}}))}),/*#__PURE__*/(0,l/* .jsx */.Y)(u/* .Controller */.xI,{control:o.control,name:"recurring_interval",render:e=>/*#__PURE__*/(0,l/* .jsx */.Y)(sr,(0,s._)((0,i._)({},e),{label:oN/* .CURRENT_VIEWPORT.isAboveMobile */.vN.isAboveMobile?/*#__PURE__*/(0,l/* .jsx */.Y)("div",{children:" "}):(0,d.__)("Recurring Options","tutor-pro"),options:[{label:(0,d.__)("Day(s)","tutor-pro"),value:"day"},{label:(0,d.__)("Week(s)","tutor-pro"),value:"week"},{label:(0,d.__)("Month(s)","tutor-pro"),value:"month"},{label:(0,d.__)("Year(s)","tutor-pro"),value:"year"}],removeOptionsMinWidth:true}))}),/*#__PURE__*/(0,l/* .jsx */.Y)(u/* .Controller */.xI,{control:o.control,name:"recurring_limit",rules:(0,s._)((0,i._)({},s7()),{validate:e=>{if(e==="Until cancelled"){return true}if(Number(e)<=0){return(0,d.__)("Renew plan must be greater than 0","tutor-pro")}return true}}),render:e=>/*#__PURE__*/(0,l/* .jsx */.Y)(lU,(0,s._)((0,i._)({},e),{label:(0,d.__)("Billing Cycles","tutor-pro"),placeholder:(0,d.__)("Select or type times to renewing the plan","tutor-pro"),content:e.field.value!=="Until cancelled"&&(0,d.__)("Times","tutor-pro"),contentPosition:"right",type:"number",presetOptions:b,selectOnFocus:true}))})]}),/*#__PURE__*/(0,l/* .jsx */.Y)(iZ/* ["default"] */.A,{when:t,children:/*#__PURE__*/(0,l/* .jsxs */.FD)("div",{css:c$.taxWrapper,children:[/*#__PURE__*/(0,l/* .jsxs */.FD)("div",{css:c$.taxFieldWrapper,children:[/*#__PURE__*/(0,l/* .jsx */.Y)("label",{children:(0,d.__)("Tax Collection","tutor-pro")}),/*#__PURE__*/(0,l/* .jsx */.Y)(u/* .Controller */.xI,{control:o.control,name:"tax_collection",render:e=>/*#__PURE__*/(0,l/* .jsx */.Y)(H,(0,s._)((0,i._)({},e),{label:(0,d.__)("Charge tax on this plan","tutor-pro")}))})]}),/*#__PURE__*/(0,l/* .jsx */.Y)(iZ/* ["default"] */.A,{when:C(),children:/*#__PURE__*/(0,l/* .jsxs */.FD)("div",{css:c$.taxAlert,children:[/*#__PURE__*/(0,l/* .jsxs */.FD)("div",{css:c$.alertTitle,children:[/*#__PURE__*/(0,l/* .jsx */.Y)(S/* ["default"] */.A,{name:"warning",width:24,height:24}),/*#__PURE__*/(0,l/* .jsx */.Y)("span",{children:(0,d.__)("Tax is Disabled.","tutor-pro")})]}),/*#__PURE__*/(0,l/* .jsx */.Y)("div",{css:c$.alertDescription,children:(0,d.__)("You have unchecked the Tax Collection option. Please review your pricing, as your tax settings currently indicate that prices are inclusive of tax.","tutor-pro")})]})})]})}),/*#__PURE__*/(0,l/* .jsx */.Y)(u/* .Controller */.xI,{control:o.control,name:"plan_type",render:e=>/*#__PURE__*/(0,l/* .jsx */.Y)(l1,(0,s._)((0,i._)({},e),{label:(0,d.__)("Membership Type","tutor-pro"),options:_,wrapperCss:c$.planTypeWrapper}))}),/*#__PURE__*/(0,l/* .jsx */.Y)(iZ/* ["default"] */.A,{when:y==="category",children:/*#__PURE__*/(0,l/* .jsx */.Y)(cL,{form:o})}),/*#__PURE__*/(0,l/* .jsx */.Y)(cU,{}),/*#__PURE__*/(0,l/* .jsx */.Y)(u/* .Controller */.xI,{control:o.control,name:"charge_enrollment_fee",render:e=>/*#__PURE__*/(0,l/* .jsx */.Y)(H,(0,s._)((0,i._)({},e),{label:(0,d.__)("Charge enrollment fee","tutor-pro")}))}),/*#__PURE__*/(0,l/* .jsx */.Y)(iZ/* ["default"] */.A,{when:a,children:/*#__PURE__*/(0,l/* .jsx */.Y)(u/* .Controller */.xI,{control:o.control,name:"enrollment_fee",rules:(0,s._)((0,i._)({},s7()),{validate:e=>{if(Number(e)<=0){return(0,d.__)("Enrollment fee must be greater than 0","tutor-pro")}return true}}),render:e=>/*#__PURE__*/(0,l/* .jsx */.Y)(lF,(0,s._)((0,i._)({},e),{label:(0,d.__)("Enrollment Fee","tutor-pro"),content:(cQ===null||cQ===void 0?void 0:cQ.symbol)||"$",placeholder:(0,d.__)("Enter enrollment fee","tutor-pro"),selectOnFocus:true,contentCss:oL/* .styleUtils.inputCurrencyStyle */.x.inputCurrencyStyle,type:"number"}))})}),/*#__PURE__*/(0,l/* .jsx */.Y)(u/* .Controller */.xI,{control:o.control,name:"enable_trial",render:e=>/*#__PURE__*/(0,l/* .jsx */.Y)(H,(0,s._)((0,i._)({},e),{label:(0,d.__)("Offer a trial period","tutor-pro")}))}),/*#__PURE__*/(0,l/* .jsx */.Y)(iZ/* ["default"] */.A,{when:g,children:/*#__PURE__*/(0,l/* .jsxs */.FD)("div",{css:c$.inputGroup({numberOfColumn:2}),children:[/*#__PURE__*/(0,l/* .jsx */.Y)(u/* .Controller */.xI,{control:o.control,name:"trial_value",rules:(0,s._)((0,i._)({},s7()),{validate:e=>{if(Number(e)<=0){return(0,d.__)("Trial duration must be greater than 0","tutor-pro")}if(Number(e)%1!==0){return(0,d.__)("Trial duration can not be fractional","tutor-pro")}return true}}),render:e=>/*#__PURE__*/(0,l/* .jsx */.Y)(lF,(0,s._)((0,i._)({},e),{label:(0,d.__)("Length of Trial","tutor-pro"),placeholder:(0,d.__)("Enter trial duration","tutor-pro"),selectOnFocus:true,type:"number",contentPosition:"right",showVerticalBar:false,content:Number(e.field.value)>1?(0,d.__)("Days","tutor-pro"):(0,d.__)("Day","tutor-pro"),onChange:t=>{var r=String(t).includes(".");if(r){e.field.onChange(String(t).replace(".",""))}}}))}),/*#__PURE__*/(0,l/* .jsx */.Y)(u/* .Controller */.xI,{control:o.control,name:"trial_fee",render:e=>/*#__PURE__*/(0,l/* .jsx */.Y)(lF,(0,s._)((0,i._)({},e),{label:(0,d.__)("Price","tutor-pro"),placeholder:(0,d.__)("Price","tutor-pro"),contentPosition:Number(e.field.value)>0?"left":"right",content:Number(e.field.value)>0?(cQ===null||cQ===void 0?void 0:cQ.symbol)||"$":"Free",selectOnFocus:true,contentCss:Number(e.field.value)>0?oL/* .styleUtils.inputCurrencyStyle */.x.inputCurrencyStyle:undefined,showVerticalBar:Number(e.field.value)>0,type:"number"}))})]})}),/*#__PURE__*/(0,l/* .jsx */.Y)(u/* .Controller */.xI,{control:o.control,name:"do_not_provide_certificate",render:e=>/*#__PURE__*/(0,l/* .jsx */.Y)(H,(0,s._)((0,i._)({},e),{label:(0,d.__)("Do not provide certificate","tutor-pro")}))}),/*#__PURE__*/(0,l/* .jsx */.Y)(u/* .Controller */.xI,{control:o.control,name:"is_featured",render:e=>/*#__PURE__*/(0,l/* .jsx */.Y)(H,(0,s._)((0,i._)({},e),{label:(0,d.__)("Mark as featured","tutor-pro")}))}),/*#__PURE__*/(0,l/* .jsx */.Y)(iZ/* ["default"] */.A,{when:h,children:/*#__PURE__*/(0,l/* .jsx */.Y)(u/* .Controller */.xI,{control:o.control,name:"featured_text",rules:{maxLength:{value:100,message:(0,d.__)("Feature text should be less than 100 characters","tutor-pro")}},render:e=>/*#__PURE__*/(0,l/* .jsx */.Y)(ly,(0,s._)((0,i._)({},e),{label:(0,d.__)("Feature Text","tutor-pro")}))})}),/*#__PURE__*/(0,l/* .jsxs */.FD)("div",{css:c$.salePriceWrapper,children:[/*#__PURE__*/(0,l/* .jsx */.Y)("div",{children:/*#__PURE__*/(0,l/* .jsx */.Y)(u/* .Controller */.xI,{control:o.control,name:"offer_sale_price",render:e=>/*#__PURE__*/(0,l/* .jsx */.Y)(s3/* ["default"] */.A,(0,s._)((0,i._)({},e),{label:(0,d.__)("Offer sale price","tutor-pro")}))})}),/*#__PURE__*/(0,l/* .jsx */.Y)(iZ/* ["default"] */.A,{when:c,children:/*#__PURE__*/(0,l/* .jsxs */.FD)("div",{css:c$.salePriceInputs,children:[/*#__PURE__*/(0,l/* .jsx */.Y)(u/* .Controller */.xI,{control:o.control,name:"sale_price",rules:(0,s._)((0,i._)({},s7()),{validate:e=>{if(e&&f&&Number(e)>=Number(f)){return(0,d.__)("Sale price should be less than regular price","tutor-pro")}if(e&&f&&Number(e)<=0){return(0,d.__)("Sale price should be greater than 0","tutor-pro")}return undefined}}),render:e=>/*#__PURE__*/(0,l/* .jsx */.Y)(lF,(0,s._)((0,i._)({},e),{type:"number",label:(0,d.__)("Sale Price","tutor-pro"),content:(cQ===null||cQ===void 0?void 0:cQ.symbol)||"$",selectOnFocus:true,contentCss:oL/* .styleUtils.inputCurrencyStyle */.x.inputCurrencyStyle}))}),/*#__PURE__*/(0,l/* .jsx */.Y)(u/* .Controller */.xI,{control:o.control,name:"schedule_sale_price",render:e=>/*#__PURE__*/(0,l/* .jsx */.Y)(H,(0,s._)((0,i._)({},e),{label:(0,d.__)("Schedule the sale price","tutor-pro")}))}),/*#__PURE__*/(0,l/* .jsxs */.FD)(iZ/* ["default"] */.A,{when:p,children:[/*#__PURE__*/(0,l/* .jsxs */.FD)("div",{css:c$.datetimeWrapper,children:[/*#__PURE__*/(0,l/* .jsx */.Y)("label",{children:(0,d.__)("Sale Starts From","tutor-pro")}),/*#__PURE__*/(0,l/* .jsxs */.FD)("div",{css:oL/* .styleUtils.dateAndTimeWrapper */.x.dateAndTimeWrapper,children:[/*#__PURE__*/(0,l/* .jsx */.Y)(u/* .Controller */.xI,{name:"sale_price_from_date",control:o.control,rules:{required:(0,d.__)("Schedule date is required","tutor-pro")},render:e=>/*#__PURE__*/(0,l/* .jsx */.Y)(o5,(0,s._)((0,i._)({},e),{isClearable:false,placeholder:"yyyy-mm-dd",disabledBefore:new Date().toISOString()}))}),/*#__PURE__*/(0,l/* .jsx */.Y)(u/* .Controller */.xI,{name:"sale_price_from_time",control:o.control,rules:{required:(0,d.__)("Schedule time is required","tutor-pro")},render:e=>/*#__PURE__*/(0,l/* .jsx */.Y)(cr,(0,s._)((0,i._)({},e),{interval:60,isClearable:false,placeholder:"hh:mm A"}))})]})]}),/*#__PURE__*/(0,l/* .jsxs */.FD)("div",{css:c$.datetimeWrapper,children:[/*#__PURE__*/(0,l/* .jsx */.Y)("label",{children:(0,d.__)("Sale Ends To","tutor-pro")}),/*#__PURE__*/(0,l/* .jsxs */.FD)("div",{css:oL/* .styleUtils.dateAndTimeWrapper */.x.dateAndTimeWrapper,children:[/*#__PURE__*/(0,l/* .jsx */.Y)(u/* .Controller */.xI,{name:"sale_price_to_date",control:o.control,rules:{required:(0,d.__)("Schedule date is required","tutor-pro"),validate:{checkEndDate:e=>{var t=o.watch("sale_price_from_date");var r=e;if(t&&r){return new Date(t)>new Date(r)?(0,d.__)("Sales End date should be greater than start date","tutor-pro"):undefined}return undefined}},deps:["sale_price_from_date"]},render:e=>/*#__PURE__*/(0,l/* .jsx */.Y)(o5,(0,s._)((0,i._)({},e),{isClearable:false,placeholder:"yyyy-mm-dd",disabledBefore:o.watch("sale_price_from_date")||undefined}))}),/*#__PURE__*/(0,l/* .jsx */.Y)(u/* .Controller */.xI,{name:"sale_price_to_time",control:o.control,rules:{required:(0,d.__)("Schedule time is required","tutor-pro"),validate:{checkEndTime:e=>{var t=o.watch("sale_price_from_date");var r=o.watch("sale_price_from_time");var n=o.watch("sale_price_to_date");var a=e;if(t&&n&&r&&a){return new Date("".concat(t," ").concat(r))>new Date("".concat(n," ").concat(a))?(0,d.__)("Sales End time should be greater than start time","tutor-pro"):undefined}return undefined}},deps:["sale_price_from_date","sale_price_from_time","sale_price_to_date"]},render:e=>/*#__PURE__*/(0,l/* .jsx */.Y)(cr,(0,s._)((0,i._)({},e),{interval:60,isClearable:false,placeholder:"hh:mm A"}))})]})]})]})]})})]})]})}var c$={container:/*#__PURE__*/(0,c/* .css */.AH)("width:100%;max-width:640px;margin:0 auto;border:1px solid ",m/* .colorTokens.stroke["default"] */.I6.stroke["default"],";border-radius:",m/* .borderRadius.card */.Vq.card,";padding:",m/* .spacing["16"] */.YK["16"],";",oL/* .styleUtils.display.flex */.x.display.flex("column"),"    gap:",m/* .spacing["12"] */.YK["12"],";"),salePriceWrapper:/*#__PURE__*/(0,c/* .css */.AH)("background-color:",m/* .colorTokens.background.white */.I6.background.white,";",oL/* .styleUtils.display.flex */.x.display.flex("column"),"    gap:",m/* .spacing["20"] */.YK["20"],";padding:",m/* .spacing["12"] */.YK["12"],";border:1px solid ",m/* .colorTokens.stroke["default"] */.I6.stroke["default"],";border-radius:",m/* .borderRadius.card */.Vq.card,";"),salePriceInputs:/*#__PURE__*/(0,c/* .css */.AH)(oL/* .styleUtils.display.flex */.x.display.flex("column"),"    gap:",m/* .spacing["8"] */.YK["8"],";"),inputGroup:e=>{var{numberOfColumn:t=4}=e;return/*#__PURE__*/(0,c/* .css */.AH)("display:grid;grid-template-columns:",t===4?"1fr 0.7fr 1fr 1fr":"repeat(".concat(t,", 1fr)"),";align-items:start;gap:",m/* .spacing["8"] */.YK["8"],";",m/* .Breakpoint.mobile */.EA.mobile,"{grid-template-columns:1fr;}")},datetimeWrapper:/*#__PURE__*/(0,c/* .css */.AH)("label{",v/* .typography.caption */.I.caption(),";color:",m/* .colorTokens.text.title */.I6.text.title,";}"),planTypeWrapper:/*#__PURE__*/(0,c/* .css */.AH)(oL/* .styleUtils.display.flex */.x.display.flex(),"    gap:",m/* .spacing["8"] */.YK["8"],";"),taxWrapper:/*#__PURE__*/(0,c/* .css */.AH)("padding:",m/* .spacing["12"] */.YK["12"],";border:1px solid ",m/* .colorTokens.stroke.divider */.I6.stroke.divider,";border-radius:",m/* .borderRadius.card */.Vq.card,";background-color:",m/* .colorTokens.background.white */.I6.background.white,";label{",v/* .typography.body */.I.body(),";color:",m/* .colorTokens.text.title */.I6.text.title,";}"),taxFieldWrapper:/*#__PURE__*/(0,c/* .css */.AH)(oL/* .styleUtils.display.flex */.x.display.flex("column"),"    gap:",m/* .spacing["8"] */.YK["8"],";"),taxAlert:/*#__PURE__*/(0,c/* .css */.AH)(oL/* .styleUtils.display.flex */.x.display.flex("column"),"    gap:",m/* .spacing["8"] */.YK["8"],";margin-top:",m/* .spacing["8"] */.YK["8"],";padding:",m/* .spacing["12"] */.YK["12"],";background-color:",m/* .colorTokens.color.warning["40"] */.I6.color.warning["40"],";border:1px solid ",m/* .colorTokens.color.warning["50"] */.I6.color.warning["50"],";border-radius:",m/* .borderRadius["6"] */.Vq["6"],";"),alertTitle:/*#__PURE__*/(0,c/* .css */.AH)(oL/* .styleUtils.display.flex */.x.display.flex(),"    gap:",m/* .spacing["4"] */.YK["4"],";align-items:center;",v/* .typography.caption */.I.caption("medium"),";color:",m/* .colorTokens.color.warning["100"] */.I6.color.warning["100"],";svg{color:",m/* .colorTokens.design.warning */.I6.design.warning,";flex-shrink:0;}"),alertDescription:/*#__PURE__*/(0,c/* .css */.AH)(v/* .typography.caption */.I.caption(),"    color:",m/* .colorTokens.color.warning["100"] */.I6.color.warning["100"],";")}}}]);