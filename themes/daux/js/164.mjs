export const id=164;export const ids=[164];export const modules={3164:(t,n,e)=>{e.d(n,{diagram:()=>it});var i=e(798),s=e(9163);function r(t,n){let e;if(void 0===n)for(const n of t)null!=n&&(e>n||void 0===e&&n>=n)&&(e=n);else{let i=-1;for(let s of t)null!=(s=n(s,++i,t))&&(e>s||void 0===e&&s>=s)&&(e=s)}return e}function o(t){return t.target.depth}function c(t,n){return t.sourceLinks.length?t.depth:n-1}function l(t,n){let e=0;if(void 0===n)for(let n of t)(n=+n)&&(e+=n);else{let i=-1;for(let s of t)(s=+n(s,++i,t))&&(e+=s)}return e}function a(t,n){let e;if(void 0===n)for(const n of t)null!=n&&(e<n||void 0===e&&n>=n)&&(e=n);else{let i=-1;for(let s of t)null!=(s=n(s,++i,t))&&(e<s||void 0===e&&s>=s)&&(e=s)}return e}function h(t){return function(){return t}}function u(t,n){return y(t.source,n.source)||t.index-n.index}function f(t,n){return y(t.target,n.target)||t.index-n.index}function y(t,n){return t.y0-n.y0}function d(t){return t.value}function p(t){return t.index}function g(t){return t.nodes}function _(t){return t.links}function x(t,n){const e=t.get(n);if(!e)throw new Error("missing: "+n);return e}function k({nodes:t}){for(const n of t){let t=n.y0,e=t;for(const e of n.sourceLinks)e.y0=t+e.width/2,t+=e.width;for(const t of n.targetLinks)t.y1=e+t.width/2,e+=t.width}}var m=Math.PI,v=2*m,b=1e-6,w=v-b;function L(){this._x0=this._y0=this._x1=this._y1=null,this._=""}function S(){return new L}L.prototype=S.prototype={constructor:L,moveTo:function(t,n){this._+="M"+(this._x0=this._x1=+t)+","+(this._y0=this._y1=+n)},closePath:function(){null!==this._x1&&(this._x1=this._x0,this._y1=this._y0,this._+="Z")},lineTo:function(t,n){this._+="L"+(this._x1=+t)+","+(this._y1=+n)},quadraticCurveTo:function(t,n,e,i){this._+="Q"+ +t+","+ +n+","+(this._x1=+e)+","+(this._y1=+i)},bezierCurveTo:function(t,n,e,i,s,r){this._+="C"+ +t+","+ +n+","+ +e+","+ +i+","+(this._x1=+s)+","+(this._y1=+r)},arcTo:function(t,n,e,i,s){t=+t,n=+n,e=+e,i=+i,s=+s;var r=this._x1,o=this._y1,c=e-t,l=i-n,a=r-t,h=o-n,u=a*a+h*h;if(s<0)throw new Error("negative radius: "+s);if(null===this._x1)this._+="M"+(this._x1=t)+","+(this._y1=n);else if(u>b)if(Math.abs(h*c-l*a)>b&&s){var f=e-r,y=i-o,d=c*c+l*l,p=f*f+y*y,g=Math.sqrt(d),_=Math.sqrt(u),x=s*Math.tan((m-Math.acos((d+u-p)/(2*g*_)))/2),k=x/_,v=x/g;Math.abs(k-1)>b&&(this._+="L"+(t+k*a)+","+(n+k*h)),this._+="A"+s+","+s+",0,0,"+ +(h*f>a*y)+","+(this._x1=t+v*c)+","+(this._y1=n+v*l)}else this._+="L"+(this._x1=t)+","+(this._y1=n)},arc:function(t,n,e,i,s,r){t=+t,n=+n,r=!!r;var o=(e=+e)*Math.cos(i),c=e*Math.sin(i),l=t+o,a=n+c,h=1^r,u=r?i-s:s-i;if(e<0)throw new Error("negative radius: "+e);null===this._x1?this._+="M"+l+","+a:(Math.abs(this._x1-l)>b||Math.abs(this._y1-a)>b)&&(this._+="L"+l+","+a),e&&(u<0&&(u=u%v+v),u>w?this._+="A"+e+","+e+",0,1,"+h+","+(t-o)+","+(n-c)+"A"+e+","+e+",0,1,"+h+","+(this._x1=l)+","+(this._y1=a):u>b&&(this._+="A"+e+","+e+",0,"+ +(u>=m)+","+h+","+(this._x1=t+e*Math.cos(s))+","+(this._y1=n+e*Math.sin(s))))},rect:function(t,n,e,i){this._+="M"+(this._x0=this._x1=+t)+","+(this._y0=this._y1=+n)+"h"+ +e+"v"+ +i+"h"+-e+"Z"},toString:function(){return this._}};const E=S;var A=Array.prototype.slice;function K(t){return function(){return t}}function M(t){return t[0]}function I(t){return t[1]}function T(t){return t.source}function D(t){return t.target}function N(t,n,e,i,s){t.moveTo(n,e),t.bezierCurveTo(n=(n+i)/2,e,n,s,i,s)}function P(t){return[t.source.x1,t.y0]}function O(t){return[t.target.x0,t.y1]}function C(){return function(t){var n=T,e=D,i=M,s=I,r=null;function o(){var o,c=A.call(arguments),l=n.apply(this,c),a=e.apply(this,c);if(r||(r=o=E()),t(r,+i.apply(this,(c[0]=l,c)),+s.apply(this,c),+i.apply(this,(c[0]=a,c)),+s.apply(this,c)),o)return r=null,o+""||null}return o.source=function(t){return arguments.length?(n=t,o):n},o.target=function(t){return arguments.length?(e=t,o):e},o.x=function(t){return arguments.length?(i="function"==typeof t?t:K(+t),o):i},o.y=function(t){return arguments.length?(s="function"==typeof t?t:K(+t),o):s},o.context=function(t){return arguments.length?(r=null==t?null:t,o):r},o}(N).source(P).target(O)}var $=function(){var t=(0,i.K2)((function(t,n,e,i){for(e=e||{},i=t.length;i--;e[t[i]]=n);return e}),"o"),n=[1,9],e=[1,10],s=[1,5,10,12],r={trace:(0,i.K2)((function(){}),"trace"),yy:{},symbols_:{error:2,start:3,SANKEY:4,NEWLINE:5,csv:6,opt_eof:7,record:8,csv_tail:9,EOF:10,"field[source]":11,COMMA:12,"field[target]":13,"field[value]":14,field:15,escaped:16,non_escaped:17,DQUOTE:18,ESCAPED_TEXT:19,NON_ESCAPED_TEXT:20,$accept:0,$end:1},terminals_:{2:"error",4:"SANKEY",5:"NEWLINE",10:"EOF",11:"field[source]",12:"COMMA",13:"field[target]",14:"field[value]",18:"DQUOTE",19:"ESCAPED_TEXT",20:"NON_ESCAPED_TEXT"},productions_:[0,[3,4],[6,2],[9,2],[9,0],[7,1],[7,0],[8,5],[15,1],[15,1],[16,3],[17,1]],performAction:(0,i.K2)((function(t,n,e,i,s,r,o){var c=r.length-1;switch(s){case 7:const t=i.findOrCreateNode(r[c-4].trim().replaceAll('""','"')),n=i.findOrCreateNode(r[c-2].trim().replaceAll('""','"')),e=parseFloat(r[c].trim());i.addLink(t,n,e);break;case 8:case 9:case 11:this.$=r[c];break;case 10:this.$=r[c-1]}}),"anonymous"),table:[{3:1,4:[1,2]},{1:[3]},{5:[1,3]},{6:4,8:5,15:6,16:7,17:8,18:n,20:e},{1:[2,6],7:11,10:[1,12]},t(e,[2,4],{9:13,5:[1,14]}),{12:[1,15]},t(s,[2,8]),t(s,[2,9]),{19:[1,16]},t(s,[2,11]),{1:[2,1]},{1:[2,5]},t(e,[2,2]),{6:17,8:5,15:6,16:7,17:8,18:n,20:e},{15:18,16:7,17:8,18:n,20:e},{18:[1,19]},t(e,[2,3]),{12:[1,20]},t(s,[2,10]),{15:21,16:7,17:8,18:n,20:e},t([1,5,10],[2,7])],defaultActions:{11:[2,1],12:[2,5]},parseError:(0,i.K2)((function(t,n){if(!n.recoverable){var e=new Error(t);throw e.hash=n,e}this.trace(t)}),"parseError"),parse:(0,i.K2)((function(t){var n=this,e=[0],s=[],r=[null],o=[],c=this.table,l="",a=0,h=0,u=0,f=o.slice.call(arguments,1),y=Object.create(this.lexer),d={yy:{}};for(var p in this.yy)Object.prototype.hasOwnProperty.call(this.yy,p)&&(d.yy[p]=this.yy[p]);y.setInput(t,d.yy),d.yy.lexer=y,d.yy.parser=this,void 0===y.yylloc&&(y.yylloc={});var g=y.yylloc;o.push(g);var _=y.options&&y.options.ranges;function x(){var t;return"number"!=typeof(t=s.pop()||y.lex()||1)&&(t instanceof Array&&(t=(s=t).pop()),t=n.symbols_[t]||t),t}"function"==typeof d.yy.parseError?this.parseError=d.yy.parseError:this.parseError=Object.getPrototypeOf(this).parseError,(0,i.K2)((function(t){e.length=e.length-2*t,r.length=r.length-t,o.length=o.length-t}),"popStack"),(0,i.K2)(x,"lex");for(var k,m,v,b,w,L,S,E,A,K={};;){if(v=e[e.length-1],this.defaultActions[v]?b=this.defaultActions[v]:(null==k&&(k=x()),b=c[v]&&c[v][k]),void 0===b||!b.length||!b[0]){var M;for(L in A=[],c[v])this.terminals_[L]&&L>2&&A.push("'"+this.terminals_[L]+"'");M=y.showPosition?"Parse error on line "+(a+1)+":\n"+y.showPosition()+"\nExpecting "+A.join(", ")+", got '"+(this.terminals_[k]||k)+"'":"Parse error on line "+(a+1)+": Unexpected "+(1==k?"end of input":"'"+(this.terminals_[k]||k)+"'"),this.parseError(M,{text:y.match,token:this.terminals_[k]||k,line:y.yylineno,loc:g,expected:A})}if(b[0]instanceof Array&&b.length>1)throw new Error("Parse Error: multiple actions possible at state: "+v+", token: "+k);switch(b[0]){case 1:e.push(k),r.push(y.yytext),o.push(y.yylloc),e.push(b[1]),k=null,m?(k=m,m=null):(h=y.yyleng,l=y.yytext,a=y.yylineno,g=y.yylloc,u>0&&u--);break;case 2:if(S=this.productions_[b[1]][1],K.$=r[r.length-S],K._$={first_line:o[o.length-(S||1)].first_line,last_line:o[o.length-1].last_line,first_column:o[o.length-(S||1)].first_column,last_column:o[o.length-1].last_column},_&&(K._$.range=[o[o.length-(S||1)].range[0],o[o.length-1].range[1]]),void 0!==(w=this.performAction.apply(K,[l,h,a,d.yy,b[1],r,o].concat(f))))return w;S&&(e=e.slice(0,-1*S*2),r=r.slice(0,-1*S),o=o.slice(0,-1*S)),e.push(this.productions_[b[1]][0]),r.push(K.$),o.push(K._$),E=c[e[e.length-2]][e[e.length-1]],e.push(E);break;case 3:return!0}}return!0}),"parse")},o=function(){return{EOF:1,parseError:(0,i.K2)((function(t,n){if(!this.yy.parser)throw new Error(t);this.yy.parser.parseError(t,n)}),"parseError"),setInput:(0,i.K2)((function(t,n){return this.yy=n||this.yy||{},this._input=t,this._more=this._backtrack=this.done=!1,this.yylineno=this.yyleng=0,this.yytext=this.matched=this.match="",this.conditionStack=["INITIAL"],this.yylloc={first_line:1,first_column:0,last_line:1,last_column:0},this.options.ranges&&(this.yylloc.range=[0,0]),this.offset=0,this}),"setInput"),input:(0,i.K2)((function(){var t=this._input[0];return this.yytext+=t,this.yyleng++,this.offset++,this.match+=t,this.matched+=t,t.match(/(?:\r\n?|\n).*/g)?(this.yylineno++,this.yylloc.last_line++):this.yylloc.last_column++,this.options.ranges&&this.yylloc.range[1]++,this._input=this._input.slice(1),t}),"input"),unput:(0,i.K2)((function(t){var n=t.length,e=t.split(/(?:\r\n?|\n)/g);this._input=t+this._input,this.yytext=this.yytext.substr(0,this.yytext.length-n),this.offset-=n;var i=this.match.split(/(?:\r\n?|\n)/g);this.match=this.match.substr(0,this.match.length-1),this.matched=this.matched.substr(0,this.matched.length-1),e.length-1&&(this.yylineno-=e.length-1);var s=this.yylloc.range;return this.yylloc={first_line:this.yylloc.first_line,last_line:this.yylineno+1,first_column:this.yylloc.first_column,last_column:e?(e.length===i.length?this.yylloc.first_column:0)+i[i.length-e.length].length-e[0].length:this.yylloc.first_column-n},this.options.ranges&&(this.yylloc.range=[s[0],s[0]+this.yyleng-n]),this.yyleng=this.yytext.length,this}),"unput"),more:(0,i.K2)((function(){return this._more=!0,this}),"more"),reject:(0,i.K2)((function(){return this.options.backtrack_lexer?(this._backtrack=!0,this):this.parseError("Lexical error on line "+(this.yylineno+1)+". You can only invoke reject() in the lexer when the lexer is of the backtracking persuasion (options.backtrack_lexer = true).\n"+this.showPosition(),{text:"",token:null,line:this.yylineno})}),"reject"),less:(0,i.K2)((function(t){this.unput(this.match.slice(t))}),"less"),pastInput:(0,i.K2)((function(){var t=this.matched.substr(0,this.matched.length-this.match.length);return(t.length>20?"...":"")+t.substr(-20).replace(/\n/g,"")}),"pastInput"),upcomingInput:(0,i.K2)((function(){var t=this.match;return t.length<20&&(t+=this._input.substr(0,20-t.length)),(t.substr(0,20)+(t.length>20?"...":"")).replace(/\n/g,"")}),"upcomingInput"),showPosition:(0,i.K2)((function(){var t=this.pastInput(),n=new Array(t.length+1).join("-");return t+this.upcomingInput()+"\n"+n+"^"}),"showPosition"),test_match:(0,i.K2)((function(t,n){var e,i,s;if(this.options.backtrack_lexer&&(s={yylineno:this.yylineno,yylloc:{first_line:this.yylloc.first_line,last_line:this.last_line,first_column:this.yylloc.first_column,last_column:this.yylloc.last_column},yytext:this.yytext,match:this.match,matches:this.matches,matched:this.matched,yyleng:this.yyleng,offset:this.offset,_more:this._more,_input:this._input,yy:this.yy,conditionStack:this.conditionStack.slice(0),done:this.done},this.options.ranges&&(s.yylloc.range=this.yylloc.range.slice(0))),(i=t[0].match(/(?:\r\n?|\n).*/g))&&(this.yylineno+=i.length),this.yylloc={first_line:this.yylloc.last_line,last_line:this.yylineno+1,first_column:this.yylloc.last_column,last_column:i?i[i.length-1].length-i[i.length-1].match(/\r?\n?/)[0].length:this.yylloc.last_column+t[0].length},this.yytext+=t[0],this.match+=t[0],this.matches=t,this.yyleng=this.yytext.length,this.options.ranges&&(this.yylloc.range=[this.offset,this.offset+=this.yyleng]),this._more=!1,this._backtrack=!1,this._input=this._input.slice(t[0].length),this.matched+=t[0],e=this.performAction.call(this,this.yy,this,n,this.conditionStack[this.conditionStack.length-1]),this.done&&this._input&&(this.done=!1),e)return e;if(this._backtrack){for(var r in s)this[r]=s[r];return!1}return!1}),"test_match"),next:(0,i.K2)((function(){if(this.done)return this.EOF;var t,n,e,i;this._input||(this.done=!0),this._more||(this.yytext="",this.match="");for(var s=this._currentRules(),r=0;r<s.length;r++)if((e=this._input.match(this.rules[s[r]]))&&(!n||e[0].length>n[0].length)){if(n=e,i=r,this.options.backtrack_lexer){if(!1!==(t=this.test_match(e,s[r])))return t;if(this._backtrack){n=!1;continue}return!1}if(!this.options.flex)break}return n?!1!==(t=this.test_match(n,s[i]))&&t:""===this._input?this.EOF:this.parseError("Lexical error on line "+(this.yylineno+1)+". Unrecognized text.\n"+this.showPosition(),{text:"",token:null,line:this.yylineno})}),"next"),lex:(0,i.K2)((function(){return this.next()||this.lex()}),"lex"),begin:(0,i.K2)((function(t){this.conditionStack.push(t)}),"begin"),popState:(0,i.K2)((function(){return this.conditionStack.length-1>0?this.conditionStack.pop():this.conditionStack[0]}),"popState"),_currentRules:(0,i.K2)((function(){return this.conditionStack.length&&this.conditionStack[this.conditionStack.length-1]?this.conditions[this.conditionStack[this.conditionStack.length-1]].rules:this.conditions.INITIAL.rules}),"_currentRules"),topState:(0,i.K2)((function(t){return(t=this.conditionStack.length-1-Math.abs(t||0))>=0?this.conditionStack[t]:"INITIAL"}),"topState"),pushState:(0,i.K2)((function(t){this.begin(t)}),"pushState"),stateStackSize:(0,i.K2)((function(){return this.conditionStack.length}),"stateStackSize"),options:{"case-insensitive":!0},performAction:(0,i.K2)((function(t,n,e,i){switch(e){case 0:return this.pushState("csv"),4;case 1:return 10;case 2:return 5;case 3:return 12;case 4:return this.pushState("escaped_text"),18;case 5:return 20;case 6:return this.popState("escaped_text"),18;case 7:return 19}}),"anonymous"),rules:[/^(?:sankey-beta\b)/i,/^(?:$)/i,/^(?:((\u000D\u000A)|(\u000A)))/i,/^(?:(\u002C))/i,/^(?:(\u0022))/i,/^(?:([\u0020-\u0021\u0023-\u002B\u002D-\u007E])*)/i,/^(?:(\u0022)(?!(\u0022)))/i,/^(?:(([\u0020-\u0021\u0023-\u002B\u002D-\u007E])|(\u002C)|(\u000D)|(\u000A)|(\u0022)(\u0022))*)/i],conditions:{csv:{rules:[1,2,3,4,5,6,7],inclusive:!1},escaped_text:{rules:[6,7],inclusive:!1},INITIAL:{rules:[0,1,2,3,4,5,6,7],inclusive:!0}}}}();function c(){this.yy={}}return r.lexer=o,(0,i.K2)(c,"Parser"),c.prototype=r,r.Parser=c,new c}();$.parser=$;var j=$,z=[],U=[],F=new Map,W=(0,i.K2)((()=>{z=[],U=[],F=new Map,(0,i.IU)()}),"clear"),G=class{constructor(t,n,e=0){this.source=t,this.target=n,this.value=e}static{(0,i.K2)(this,"SankeyLink")}},V=(0,i.K2)(((t,n,e)=>{z.push(new G(t,n,e))}),"addLink"),X=class{constructor(t){this.ID=t}static{(0,i.K2)(this,"SankeyNode")}},Y=(0,i.K2)((t=>{t=i.Y2.sanitizeText(t,(0,i.D7)());let n=F.get(t);return void 0===n&&(n=new X(t),F.set(t,n),U.push(n)),n}),"findOrCreateNode"),q=(0,i.K2)((()=>U),"getNodes"),Q=(0,i.K2)((()=>z),"getLinks"),R=(0,i.K2)((()=>({nodes:U.map((t=>({id:t.ID}))),links:z.map((t=>({source:t.source.ID,target:t.target.ID,value:t.value})))})),"getGraph"),B={nodesMap:F,getConfig:(0,i.K2)((()=>(0,i.D7)().sankey),"getConfig"),getNodes:q,getLinks:Q,getGraph:R,addLink:V,findOrCreateNode:Y,getAccTitle:i.iN,setAccTitle:i.SV,getAccDescription:i.m7,setAccDescription:i.EI,getDiagramTitle:i.ab,setDiagramTitle:i.ke,clear:W},Z=class t{static{(0,i.K2)(this,"Uid")}static{this.count=0}static next(n){return new t(n+ ++t.count)}constructor(t){this.id=t,this.href=`#${t}`}toString(){return"url("+this.href+")"}},H={left:function(t){return t.depth},right:function(t,n){return n-1-t.height},center:function(t){return t.targetLinks.length?t.depth:t.sourceLinks.length?r(t.sourceLinks,o)-1:0},justify:c},J=(0,i.K2)((function(t,n,e,o){const{securityLevel:m,sankey:v}=(0,i.D7)(),b=i.ME.sankey;let w;"sandbox"===m&&(w=(0,s.Ltv)("#i"+n));const L="sandbox"===m?(0,s.Ltv)(w.nodes()[0].contentDocument.body):(0,s.Ltv)("body"),S="sandbox"===m?L.select(`[id="${n}"]`):(0,s.Ltv)(`[id="${n}"]`),E=v?.width??b.width,A=v?.height??b.width,K=v?.useMaxWidth??b.useMaxWidth,M=v?.nodeAlignment??b.nodeAlignment,I=v?.prefix??b.prefix,T=v?.suffix??b.suffix,D=v?.showValues??b.showValues,N=o.db.getGraph(),P=H[M];(function(){let t,n,e,i=0,s=0,o=1,m=1,v=24,b=8,w=p,L=c,S=g,E=_,A=6;function K(){const c={nodes:S.apply(null,arguments),links:E.apply(null,arguments)};return function({nodes:t,links:n}){for(const[n,e]of t.entries())e.index=n,e.sourceLinks=[],e.targetLinks=[];const i=new Map(t.map(((n,e)=>[w(n,e,t),n])));for(const[t,e]of n.entries()){e.index=t;let{source:n,target:s}=e;"object"!=typeof n&&(n=e.source=x(i,n)),"object"!=typeof s&&(s=e.target=x(i,s)),n.sourceLinks.push(e),s.targetLinks.push(e)}if(null!=e)for(const{sourceLinks:n,targetLinks:i}of t)n.sort(e),i.sort(e)}(c),function({nodes:t}){for(const n of t)n.value=void 0===n.fixedValue?Math.max(l(n.sourceLinks,d),l(n.targetLinks,d)):n.fixedValue}(c),function({nodes:t}){const n=t.length;let e=new Set(t),i=new Set,s=0;for(;e.size;){for(const t of e){t.depth=s;for(const{target:n}of t.sourceLinks)i.add(n)}if(++s>n)throw new Error("circular link");e=i,i=new Set}}(c),function({nodes:t}){const n=t.length;let e=new Set(t),i=new Set,s=0;for(;e.size;){for(const t of e){t.height=s;for(const{source:n}of t.targetLinks)i.add(n)}if(++s>n)throw new Error("circular link");e=i,i=new Set}}(c),function(e){const c=function({nodes:t}){const e=a(t,(t=>t.depth))+1,s=(o-i-v)/(e-1),r=new Array(e);for(const n of t){const t=Math.max(0,Math.min(e-1,Math.floor(L.call(null,n,e))));n.layer=t,n.x0=i+t*s,n.x1=n.x0+v,r[t]?r[t].push(n):r[t]=[n]}if(n)for(const t of r)t.sort(n);return r}(e);t=Math.min(b,(m-s)/(a(c,(t=>t.length))-1)),function(n){const e=r(n,(n=>(m-s-(n.length-1)*t)/l(n,d)));for(const i of n){let n=s;for(const s of i){s.y0=n,s.y1=n+s.value*e,n=s.y1+t;for(const t of s.sourceLinks)t.width=t.value*e}n=(m-n+t)/(i.length+1);for(let t=0;t<i.length;++t){const e=i[t];e.y0+=n*(t+1),e.y1+=n*(t+1)}O(i)}}(c);for(let t=0;t<A;++t){const n=Math.pow(.99,t),e=Math.max(1-n,(t+1)/A);I(c,n,e),M(c,n,e)}}(c),k(c),c}function M(t,e,i){for(let s=1,r=t.length;s<r;++s){const r=t[s];for(const t of r){let n=0,i=0;for(const{source:e,value:s}of t.targetLinks){let r=s*(t.layer-e.layer);n+=C(e,t)*r,i+=r}if(!(i>0))continue;let s=(n/i-t.y0)*e;t.y0+=s,t.y1+=s,P(t)}void 0===n&&r.sort(y),T(r,i)}}function I(t,e,i){for(let s=t.length-2;s>=0;--s){const r=t[s];for(const t of r){let n=0,i=0;for(const{target:e,value:s}of t.sourceLinks){let r=s*(e.layer-t.layer);n+=$(t,e)*r,i+=r}if(!(i>0))continue;let s=(n/i-t.y0)*e;t.y0+=s,t.y1+=s,P(t)}void 0===n&&r.sort(y),T(r,i)}}function T(n,e){const i=n.length>>1,r=n[i];N(n,r.y0-t,i-1,e),D(n,r.y1+t,i+1,e),N(n,m,n.length-1,e),D(n,s,0,e)}function D(n,e,i,s){for(;i<n.length;++i){const r=n[i],o=(e-r.y0)*s;o>1e-6&&(r.y0+=o,r.y1+=o),e=r.y1+t}}function N(n,e,i,s){for(;i>=0;--i){const r=n[i],o=(r.y1-e)*s;o>1e-6&&(r.y0-=o,r.y1-=o),e=r.y0-t}}function P({sourceLinks:t,targetLinks:n}){if(void 0===e){for(const{source:{sourceLinks:t}}of n)t.sort(f);for(const{target:{targetLinks:n}}of t)n.sort(u)}}function O(t){if(void 0===e)for(const{sourceLinks:n,targetLinks:e}of t)n.sort(f),e.sort(u)}function C(n,e){let i=n.y0-(n.sourceLinks.length-1)*t/2;for(const{target:s,width:r}of n.sourceLinks){if(s===e)break;i+=r+t}for(const{source:t,width:s}of e.targetLinks){if(t===n)break;i-=s}return i}function $(n,e){let i=e.y0-(e.targetLinks.length-1)*t/2;for(const{source:s,width:r}of e.targetLinks){if(s===n)break;i+=r+t}for(const{target:t,width:s}of n.sourceLinks){if(t===e)break;i-=s}return i}return K.update=function(t){return k(t),t},K.nodeId=function(t){return arguments.length?(w="function"==typeof t?t:h(t),K):w},K.nodeAlign=function(t){return arguments.length?(L="function"==typeof t?t:h(t),K):L},K.nodeSort=function(t){return arguments.length?(n=t,K):n},K.nodeWidth=function(t){return arguments.length?(v=+t,K):v},K.nodePadding=function(n){return arguments.length?(b=t=+n,K):b},K.nodes=function(t){return arguments.length?(S="function"==typeof t?t:h(t),K):S},K.links=function(t){return arguments.length?(E="function"==typeof t?t:h(t),K):E},K.linkSort=function(t){return arguments.length?(e=t,K):e},K.size=function(t){return arguments.length?(i=s=0,o=+t[0],m=+t[1],K):[o-i,m-s]},K.extent=function(t){return arguments.length?(i=+t[0][0],o=+t[1][0],s=+t[0][1],m=+t[1][1],K):[[i,s],[o,m]]},K.iterations=function(t){return arguments.length?(A=+t,K):A},K})().nodeId((t=>t.id)).nodeWidth(10).nodePadding(10+(D?15:0)).nodeAlign(P).extent([[0,0],[E,A]])(N);const O=(0,s.UMr)(s.zt);S.append("g").attr("class","nodes").selectAll(".node").data(N.nodes).join("g").attr("class","node").attr("id",(t=>(t.uid=Z.next("node-")).id)).attr("transform",(function(t){return"translate("+t.x0+","+t.y0+")"})).attr("x",(t=>t.x0)).attr("y",(t=>t.y0)).append("rect").attr("height",(t=>t.y1-t.y0)).attr("width",(t=>t.x1-t.x0)).attr("fill",(t=>O(t.id)));const $=(0,i.K2)((({id:t,value:n})=>D?`${t}\n${I}${Math.round(100*n)/100}${T}`:t),"getText");S.append("g").attr("class","node-labels").attr("font-family","sans-serif").attr("font-size",14).selectAll("text").data(N.nodes).join("text").attr("x",(t=>t.x0<E/2?t.x1+6:t.x0-6)).attr("y",(t=>(t.y1+t.y0)/2)).attr("dy",(D?"0":"0.35")+"em").attr("text-anchor",(t=>t.x0<E/2?"start":"end")).text($);const j=S.append("g").attr("class","links").attr("fill","none").attr("stroke-opacity",.5).selectAll(".link").data(N.links).join("g").attr("class","link").style("mix-blend-mode","multiply"),z=v?.linkColor??"gradient";if("gradient"===z){const t=j.append("linearGradient").attr("id",(t=>(t.uid=Z.next("linearGradient-")).id)).attr("gradientUnits","userSpaceOnUse").attr("x1",(t=>t.source.x1)).attr("x2",(t=>t.target.x0));t.append("stop").attr("offset","0%").attr("stop-color",(t=>O(t.source.id))),t.append("stop").attr("offset","100%").attr("stop-color",(t=>O(t.target.id)))}let U;switch(z){case"gradient":U=(0,i.K2)((t=>t.uid),"coloring");break;case"source":U=(0,i.K2)((t=>O(t.source.id)),"coloring");break;case"target":U=(0,i.K2)((t=>O(t.target.id)),"coloring");break;default:U=z}j.append("path").attr("d",C()).attr("stroke",U).attr("stroke-width",(t=>Math.max(1,t.width))),(0,i.ot)(void 0,S,0,K)}),"draw"),tt={draw:J},nt=(0,i.K2)((t=>t.replaceAll(/^[^\S\n\r]+|[^\S\n\r]+$/g,"").replaceAll(/([\n\r])+/g,"\n").trim()),"prepareTextForParsing"),et=j.parse.bind(j);j.parse=t=>et(nt(t));var it={parser:j,db:B,renderer:tt}}};