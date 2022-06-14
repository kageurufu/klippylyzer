function e(e){return e&&e.__esModule?e.default:e}var t=("undefined"!=typeof globalThis?globalThis:"undefined"!=typeof self?self:"undefined"!=typeof window?window:"undefined"!=typeof global?global:{}).parcelRequire94c2;t.register("l5RaS",(function(o,r){var n,a,s,i,l;n=o.exports,Object.defineProperty(n,"__esModule",{value:!0,configurable:!0}),a=o.exports,s="default",i=function(){return j},Object.defineProperty(a,s,{get:i,set:l,enumerable:!0,configurable:!0});var c=t("bbzbN"),d=t("5PdaA"),m=t("lFsj8"),p=t("fRnim"),h=t("3aDr8"),u=t("7jVw0"),f=t("9GPfD"),b=t("7fPBF"),x=(b=t("7fPBF"),t("6oZBh")),g=t("UBbba"),y=t("3qM3Y");function j({klippyLog:{stats:t,epoch:o}}){const r=b.useRef(null),[n,a]=b.useState(null),[s,i]=b.useState({}),l=b.useMemo((()=>y.statsToTemps(t)),[t]);return b.useEffect((()=>{!async function(){console.time("calc chartData");const e=Object.keys(l[0].temps),t={time:new Array(l.length),legend:e,series:e.map((e=>({name:e,type:"line",data:new Array(l.length)})))};for(let o=0;o<l.length;o++)e.forEach(((e,r)=>{t.series[r].data[o]=[l[o].time,l[o].temps[e]]}));console.timeEnd("calc chartData"),a(t)}()}),[o,l]),b.useEffect((()=>{i({}),async function(){for await(const[e,t]of async function*(e){let t=e[1];for(let o=2;o<e.length;o++){const r=e[o],n=r.time-t.time;for(const[e,a]of Object.entries(r.temps)){if(0===a||0===t.temps[e])continue;const r=a-t.temps[e];Math.abs(r/n)>10&&(yield[e,[{name:`${e} changed ${r.toFixed(1)}C`,xAxis:o-1},{xAxis:o}]])}t=r}}(l))i(f.default((o=>{o[e]||(o[e]=[]),o[e].push(t)})))}()}),[l,i]),c.jsxs("section",{children:[c.jsx("h3",{className:e(g)("text-xl"),children:"Temperatures over time"}),n?c.jsx(e(u),{echarts:p,ref:r,style:{height:s?"600px":"500px"},option:{darkMode:!0,textStyle:{color:"rgb(229, 231, 235)"},toolbox:{feature:{dataZoom:{yAxisIndex:"none"},saveAsImage:{}}},tooltip:{trigger:"axis"},dataZoom:[{type:"slider"},{type:"inside"}],legend:{textStyle:{color:"rgb(229, 231, 235)"},data:n.legend},grid:{top:s?180:80,bottom:100},xAxis:{type:"category",axisLabel:{formatter:e=>new Date(1e3*(parseFloat(e)+o)).toLocaleTimeString()}},yAxis:{type:"value"},series:n.series.map((t=>({...t,...t.name in s?{markArea:{itemStyle:{color:e(x).red[500]},label:{offset:[-20,15],rotate:-60},data:s[t.name]}}:{}})))}}):c.jsx("div",{children:"Loading..."}),s&&n?c.jsxs("div",{className:e(g)("mt-2"),children:[c.jsx("h3",{className:e(g)("text-xl","text-red-400"),children:"Problems were identified"}),c.jsxs("article",{children:[c.jsx("p",{children:"Large jumps in temperature are often indicative of a broken wire, or a thermometer that is not working properly."}),"extruder"in s&&c.jsx("p",{})]}),c.jsx("table",{className:e(g)("table","table-zebra","table-compact","w-full"),children:Object.entries(s).map((([t,r])=>c.jsxs(b.Fragment,{children:[c.jsx("thead",{children:c.jsx("tr",{children:c.jsx("th",{className:e(g)("text-lg"),colSpan:2,children:t})})}),c.jsxs("tbody",{children:[c.jsx("tr",{children:c.jsx("td",{colSpan:2,children:"extruder"===t?"\n                        Your extruder is showing spikes in temperature. There is probably a loose crimp, or a broken\n                        wire in your cable chains.\n                        ":"bed"===t?"\n                        Your bed is showing spikes in temperature. If you have a moving bed, you probably have a loose\n                        crimp or a broken wire. If your bed is static, you have more serious problems.\n                        ":`\n                        Your thermometer ${t} is showing spikes in temperature. If this thermometer moves, such \n                        as a chamber thermistor on a toolhead PCB, you most likely have a bad crimp or broken wire in \n                        your cable chain.\n\n                        If this is a static thermistor, you should check all wiring, crimps, and then verify other \n                        thermistors are working properly. Thermistors can rarely break, although it is also possible\n                        your control board has a problem. Bad wiring causing voltage to leak to ground is also a\n                        possibility.\n                        `})}),r.map((([e])=>c.jsxs("tr",{children:[c.jsx("td",{children:new Date(1e3*(o+e.xAxis)).toLocaleTimeString()}),c.jsx("td",{children:e.name})]},e.xAxis)))]})]},t)))})]}):null]})}p.use([d.LineChart,d.LinesChart,m.GridComponent,m.DatasetComponent,m.LegendComponent,m.TooltipComponent,m.TitleComponent,h.CanvasRenderer,m.MarkAreaComponent,m.DataZoomComponent,m.DataZoomInsideComponent,m.DataZoomSliderComponent,m.ToolboxComponent])}));
//# sourceMappingURL=TempGraph.64a0ec28.js.map
