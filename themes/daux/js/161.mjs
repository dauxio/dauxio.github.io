export const id=161;export const ids=[161];export const modules={5161:(e,r,t)=>{t.d(r,{diagram:()=>c});var a=t(4611),n=t(8852),s=t(798),o=t(8731),d={parse:(0,s.K2)((async e=>{const r=await(0,o.qg)("info",e);s.Rm.debug(r)}),"parse")},i={version:a.r},p={getVersion:(0,s.K2)((()=>i.version),"getVersion")},g=(0,s.K2)(((e,r,t)=>{s.Rm.debug("rendering info diagram\n"+e);const a=(0,n.D)(r);(0,s.a$)(a,100,400,!0),a.append("g").append("text").attr("x",100).attr("y",40).attr("class","version").attr("font-size",32).style("text-anchor","middle").text(`v${t}`)}),"draw"),c={parser:d,db:p,renderer:{draw:g}}}};