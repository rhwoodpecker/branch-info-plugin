!function(t,e){if("object"==typeof exports&&"object"==typeof module)module.exports=e();else if("function"==typeof define&&define.amd)define([],e);else{var o=e();for(var n in o)("object"==typeof exports?exports:t)[n]=o[n]}}(this,(()=>(()=>{"use strict";var t={303:t=>{t.exports=require("child_process")},231:t=>{t.exports=require("fs")},423:t=>{t.exports=require("path")}},e={};function o(n){var r=e[n];if(void 0!==r)return r.exports;var i=e[n]={exports:{}};return t[n](i,i.exports,o),i.exports}o.d=(t,e)=>{for(var n in e)o.o(e,n)&&!o.o(t,n)&&Object.defineProperty(t,n,{enumerable:!0,get:e[n]})},o.o=(t,e)=>Object.prototype.hasOwnProperty.call(t,e),o.r=t=>{"undefined"!=typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(t,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(t,"__esModule",{value:!0})};var n={};return(()=>{o.r(n),o.d(n,{BranchWebpackPlugin:()=>s,vitePluginGitInfo:()=>a});var t=o(303).execSync,e=function(){var e=t("git name-rev --name-only HEAD").toString().trim(),o=t("git show -s --format=%H").toString().trim(),n=t("git show -s --format=%cn").toString().trim(),r=function(t){var e=t.getFullYear(),o=t.getMonth()+1<10?"0".concat(t.getMonth()+1):t.getMonth()+1,n=t.getDate()<10?"0".concat(t.getDate()):t.getDate(),r=t.getHours()<10?"0".concat(t.getHours()):t.getHours(),i=t.getMinutes()<10?"0".concat(t.getMinutes()):t.getMinutes(),c=t.getSeconds()<10?"0".concat(t.getSeconds()):t.getSeconds();return"".concat(e,"-").concat(o,"-").concat(n," ").concat(r,":").concat(i,":").concat(c)}(new Date(t("git show -s --format=%cd").toString())),i=t("git show -s --format=%s").toString().trim();return"\n    当前分支名：".concat(e,"\n\n    提交的hash：").concat(o,"\n\n    提交人姓名：").concat(n,"\n\n    提交日期：").concat(r,"\n\n    提交描述：").concat(i,"\n  ")},r=function(){return r=Object.assign||function(t){for(var e,o=1,n=arguments.length;o<n;o++)for(var r in e=arguments[o])Object.prototype.hasOwnProperty.call(e,r)&&(t[r]=e[r]);return t},r.apply(this,arguments)},i=o(423),c=o(231),a=function(t){void 0===t&&(t={});var o,n=t.outputFile||"lastGitInfo.txt";return{name:"vite-plugin-git-info",configResolved:function(t){o=t.build.outDir},closeBundle:function(){var t=e();c.writeFile(i.join(o,n),t,(function(t){if(t)throw t;console.log("Git info saved to ".concat(i.join(o,n)))}))}}},s=function(){function t(e){void 0===e&&(e={}),this.options=r(r({},t.defaultOptions),e)}return t.prototype.apply=function(o){var n=this,r=t.name;o.hooks.emit.tapAsync(r,(function(t,o){var r=e();t.assets[n.options.outputFile]={source:function(){return r},size:function(){return r.length}},o()}))},t.defaultOptions={outputFile:"lastGitInfo.txt"},t}()})(),n})()));