/*!
  * CoreUI Plugins - Chart.js for CoreUI v5 v3.1.2 (https://coreui.io)
  * Copyright 2023 creativeLabs Łukasz Holeczek
  * Licensed under MIT (https://github.com/coreui/coreui-chartjs/blob/main/LICENSE)
  */
!function(e,t){"object"==typeof exports&&"undefined"!=typeof module?module.exports=t():"function"==typeof define&&define.amd?define(t):((e="undefined"!=typeof globalThis?globalThis:e||self).coreui=e.coreui||{},e.coreui.ChartJS=t())}(this,(function(){"use strict";const e="chartjs-tooltip",t="chartjs-tooltip-body",o="chartjs-tooltip-body-item",d="chartjs-tooltip-header",n="chartjs-tooltip-header-item";return{customTooltips:l=>{const{chart:s,tooltip:a}=l,i=(t=>{let o=t.canvas.parentNode.querySelector("div");if(!o){o=document.createElement("div"),o.classList.add(e);const d=document.createElement("table");d.style.margin="0px",o.appendChild(d),t.canvas.parentNode.appendChild(o)}return o})(s);if(0===a.opacity)return void(i.style.opacity=0);if(a.body){const e=a.title||[],l=a.body.map((e=>e.lines)),s=document.createElement("thead");s.classList.add(d),e.forEach((e=>{const t=document.createElement("tr");t.style.borderWidth=0,t.classList.add(n);const o=document.createElement("th");o.style.borderWidth=0;const d=document.createTextNode(e);o.appendChild(d),t.appendChild(o),s.appendChild(t)}));const c=document.createElement("tbody");c.classList.add(t),l.forEach(((e,t)=>{const d=a.labelColors[t],n=document.createElement("span");n.style.background=d.backgroundColor,n.style.borderColor=d.borderColor,n.style.borderWidth="2px",n.style.marginRight="10px",n.style.height="10px",n.style.width="10px",n.style.display="inline-block";const l=document.createElement("tr");l.classList.add(o);const s=document.createElement("td");s.style.borderWidth=0;const i=document.createTextNode(e);s.appendChild(n),s.appendChild(i),l.appendChild(s),c.appendChild(l)}));const r=i.querySelector("table");for(;r.firstChild;)r.firstChild.remove();r.appendChild(s),r.appendChild(c)}const{offsetLeft:c,offsetTop:r}=s.canvas;i.style.opacity=1,i.style.left=c+a.caretX+"px",i.style.top=r+a.caretY+"px",i.style.font=a.options.bodyFont.string,i.style.padding=a.padding+"px "+a.padding+"px"}}}));