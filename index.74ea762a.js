function t(t,e){(null==e||e>t.length)&&(e=t.length);for(var r=0,n=Array(e);r<e;r++)n[r]=t[r];return n}document.addEventListener("click",function(e){if("wall"===e.target.className){var r,n=(function(t){if(Array.isArray(t))return t}(r=e.target.children)||function(t,e){var r,n,o=null==t?null:"undefined"!=typeof Symbol&&t[Symbol.iterator]||t["@@iterator"];if(null!=o){var f=[],l=!0,a=!1;try{for(o=o.call(t);!(l=(r=o.next()).done)&&(f.push(r.value),1!==f.length);l=!0);}catch(t){a=!0,n=t}finally{try{l||null==o.return||o.return()}finally{if(a)throw n}}return f}}(r,1)||function(e,r){if(e){if("string"==typeof e)return t(e,1);var n=Object.prototype.toString.call(e).slice(8,-1);if("Object"===n&&e.constructor&&(n=e.constructor.name),"Map"===n||"Set"===n)return Array.from(n);if("Arguments"===n||/^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n))return t(e,1)}}(r,1)||function(){throw TypeError("Invalid attempt to destructure non-iterable instance.\\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.")}())[0],o=n.offsetWidth/2;n.style.left="".concat(e.offsetX-o,"px"),n.style.top="".concat(e.offsetY-o,"px"),(e.offsetX<0||e.offsetX<=o)&&(n.style.left="".concat(0,"px")),(e.offsetY<0||e.offsetY<=o)&&(n.style.top="".concat(0,"px")),(e.offsetX>400||e.offsetX>=400-o)&&(n.style.left="".concat(400-n.offsetWidth,"px")),(e.offsetY>400||e.offsetY>=400-o)&&(n.style.top="".concat(400-n.offsetWidth,"px"))}});
//# sourceMappingURL=index.74ea762a.js.map