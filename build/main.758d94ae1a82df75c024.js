(window.webpackJsonp=window.webpackJsonp||[]).push([[0],{L1EO:function(t,e,n){},QfWi:function(t,e,n){"use strict";n.r(e);n("L1EO");var o=class{constructor({selector:t,targetDate:e,onTick:n}){this.selector=t,this.targetDate=e,this.onTick=n,this.updateTime()}updateTime(){const t=setInterval(()=>{const e=this.targetDate.getTime()-Date.now();if(e<=0)return clearInterval(t),console.log("Get a party!!!");const n={days:this.getDays(e),hours:this.getHours(e),minutes:this.getMinutes(e),seconds:this.getSeconds(e)};this.onTick(n)},1e3)}getDays(t){return Math.floor(t/864e5)}getHours(t){return this.pad(Math.floor(t%864e5/36e5))}getMinutes(t){return this.pad(Math.floor(t%36e5/6e4))}getSeconds(t){return this.pad(Math.floor(t%6e4/1e3))}pad(t){return String(t).padStart(2,"0")}};const s={day:document.querySelector('[data-value="days"]'),hour:document.querySelector('[data-value="hours"]'),minute:document.querySelector('[data-value="mins"]'),second:document.querySelector('[data-value="secs"]')};new o({selector:"#timer-1",targetDate:new Date("May 25, 2021"),onTick:function({days:t,hours:e,minutes:n,seconds:o}){s.day.textContent=t,s.hour.textContent=e,s.minute.textContent=n,s.second.textContent=o}})}},[["QfWi",1]]]);
//# sourceMappingURL=main.758d94ae1a82df75c024.js.map