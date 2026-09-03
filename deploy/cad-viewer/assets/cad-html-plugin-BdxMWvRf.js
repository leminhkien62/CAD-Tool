import{V as wa,W as ya,X as He,Y as va,$ as Se,a0 as ka,a1 as xa,A as Qe,a2 as Ca,a3 as Aa,l as Ma}from"./three-renderer-DH0t7iWE.js";import{h as we,o as za,L as La,M as Ha,r as Sa,u as Ia,V as J}from"./three-C_VTlPWI.js";import{a3 as Ea,aF as Zt,w as A,x as vt,y as Y,aG as Ta,aH as Pa,aI as Fa,aE as ja,a2 as Ba}from"./cad-simple-viewer-BA0B4oYv.js";import{l as Hi,o as Si}from"./cad-viewer-BBxALQ-i.js";import{Z as G,B as lt,$ as kt,aF as Je,b as qe,C as ta,aG as Ua,O as Va,aH as $a,aI as Ra,E as Za,F as Da,_ as ye,a7 as Oa,D as Ya,ai as Na,aJ as _a,J as Ka,U as Xa,V as Wa,aK as Ga,aL as Qa,aM as Ja,a3 as qa,aN as tr,aO as er,Q as ar,W as rr,a6 as nr,G as or,a5 as Pt,a8 as ea,aP as ir,I as lr}from"./data-model-Ch5gAHsb.js";const it=3;var M=Uint8Array,Z=Uint16Array,ve=Int32Array,Ft=new M([0,0,0,0,0,0,0,0,1,1,1,1,2,2,2,2,3,3,3,3,4,4,4,4,5,5,5,5,0,0,0,0]),jt=new M([0,0,0,0,1,1,2,2,3,3,4,4,5,5,6,6,7,7,8,8,9,9,10,10,11,11,12,12,13,13,0,0]),Gt=new M([16,17,18,0,8,7,9,6,10,5,11,4,12,3,13,2,14,1,15]),aa=function(t,e){for(var a=new Z(31),r=0;r<31;++r)a[r]=e+=1<<t[r-1];for(var n=new ve(a[30]),r=1;r<30;++r)for(var o=a[r];o<a[r+1];++o)n[o]=o-a[r]<<5|r;return{b:a,r:n}},ra=aa(Ft,2),na=ra.b,Qt=ra.r;na[28]=258,Qt[258]=28;var oa=aa(jt,0),sr=oa.b,Ie=oa.r,Jt=new Z(32768);for(var k=0;k<32768;++k){var rt=(k&43690)>>1|(k&21845)<<1;rt=(rt&52428)>>2|(rt&13107)<<2,rt=(rt&61680)>>4|(rt&3855)<<4,Jt[k]=((rt&65280)>>8|(rt&255)<<8)>>1}var Q=(function(t,e,a){for(var r=t.length,n=0,o=new Z(e);n<r;++n)t[n]&&++o[t[n]-1];var i=new Z(e);for(n=1;n<e;++n)i[n]=i[n-1]+o[n-1]<<1;var l;if(a){l=new Z(1<<e);var s=15-e;for(n=0;n<r;++n)if(t[n])for(var d=n<<4|t[n],c=e-t[n],u=i[t[n]-1]++<<c,m=u|(1<<c)-1;u<=m;++u)l[Jt[u]>>s]=d}else for(l=new Z(r),n=0;n<r;++n)t[n]&&(l[n]=Jt[i[t[n]-1]++]>>15-t[n]);return l}),nt=new M(288);for(var k=0;k<144;++k)nt[k]=8;for(var k=144;k<256;++k)nt[k]=9;for(var k=256;k<280;++k)nt[k]=7;for(var k=280;k<288;++k)nt[k]=8;var Ct=new M(32);for(var k=0;k<32;++k)Ct[k]=5;var cr=Q(nt,9,0),dr=Q(nt,9,1),ur=Q(Ct,5,0),mr=Q(Ct,5,1),Dt=function(t){for(var e=t[0],a=1;a<t.length;++a)t[a]>e&&(e=t[a]);return e},X=function(t,e,a){var r=e/8|0;return(t[r]|t[r+1]<<8)>>(e&7)&a},Ot=function(t,e){var a=e/8|0;return(t[a]|t[a+1]<<8|t[a+2]<<16)>>(e&7)},ke=function(t){return(t+7)/8|0},Bt=function(t,e,a){return(e==null||e<0)&&(e=0),(a==null||a>t.length)&&(a=t.length),new M(t.subarray(e,a))},pr=["unexpected EOF","invalid block type","invalid length/literal","invalid distance","stream finished","no stream handler",,"no callback","invalid UTF-8 data","extra field too long","date not in range 1980-2099","filename too long","stream finishing","invalid zip data"],N=function(t,e,a){var r=new Error(e||pr[t]);if(r.code=t,Error.captureStackTrace&&Error.captureStackTrace(r,N),!a)throw r;return r},hr=function(t,e,a,r){var n=t.length,o=0;if(!n||e.f&&!e.l)return a||new M(0);var i=!a,l=i||e.i!=2,s=e.i;i&&(a=new M(n*3));var d=function(gt){var bt=a.length;if(gt>bt){var dt=new M(Math.max(bt*2,gt));dt.set(a),a=dt}},c=e.f||0,u=e.p||0,m=e.b||0,p=e.l,y=e.d,w=e.m,j=e.n,_=n*8;do{if(!p){c=X(t,u,1);var U=X(t,u+1,3);if(u+=3,U)if(U==1)p=dr,y=mr,w=9,j=5;else if(U==2){var K=X(t,u,31)+257,B=X(t,u+10,15)+4,T=K+X(t,u+5,31)+1;u+=14;for(var H=new M(T),z=new M(19),h=0;h<B;++h)z[Gt[h]]=X(t,u+h*3,7);u+=B*3;for(var f=Dt(z),P=(1<<f)-1,at=Q(z,f,1),h=0;h<T;){var I=at[X(t,u,P)];u+=I&15;var S=I>>4;if(S<16)H[h++]=S;else{var L=0,E=0;for(S==16?(E=3+X(t,u,3),u+=2,L=H[h-1]):S==17?(E=3+X(t,u,7),u+=3):S==18&&(E=11+X(t,u,127),u+=7);E--;)H[h++]=L}}var V=H.subarray(0,K),v=H.subarray(K);w=Dt(V),j=Dt(v),p=Q(V,w,1),y=Q(v,j,1)}else N(1);else{var S=ke(u)+4,F=t[S-4]|t[S-3]<<8,D=S+F;if(D>n){s&&N(0);break}l&&d(m+F),a.set(t.subarray(S,D),m),e.b=m+=F,e.p=u=D*8,e.f=c;continue}if(u>_){s&&N(0);break}}l&&d(m+131072);for(var ft=(1<<w)-1,O=(1<<j)-1,q=u;;q=u){var L=p[Ot(t,u)&ft],$=L>>4;if(u+=L&15,u>_){s&&N(0);break}if(L||N(2),$<256)a[m++]=$;else if($==256){q=u,p=null;break}else{var R=$-254;if($>264){var h=$-257,C=Ft[h];R=X(t,u,(1<<C)-1)+na[h],u+=C}var W=y[Ot(t,u)&O],st=W>>4;W||N(3),u+=W&15;var v=sr[st];if(st>3){var C=jt[st];v+=Ot(t,u)&(1<<C)-1,u+=C}if(u>_){s&&N(0);break}l&&d(m+131072);var ct=m+R;if(m<v){var zt=o-v,Lt=Math.min(v,ct);for(zt+m<0&&N(3);m<Lt;++m)a[m]=r[zt+m]}for(;m<ct;++m)a[m]=a[m-v]}}e.l=p,e.p=q,e.b=m,e.f=c,p&&(c=1,e.m=w,e.d=y,e.n=j)}while(!c);return m!=a.length&&i?Bt(a,0,m):a.subarray(0,m)},tt=function(t,e,a){a<<=e&7;var r=e/8|0;t[r]|=a,t[r+1]|=a>>8},wt=function(t,e,a){a<<=e&7;var r=e/8|0;t[r]|=a,t[r+1]|=a>>8,t[r+2]|=a>>16},Yt=function(t,e){for(var a=[],r=0;r<t.length;++r)t[r]&&a.push({s:r,f:t[r]});var n=a.length,o=a.slice();if(!n)return{t:la,l:0};if(n==1){var i=new M(a[0].s+1);return i[a[0].s]=1,{t:i,l:1}}a.sort(function(T,H){return T.f-H.f}),a.push({s:-1,f:25001});var l=a[0],s=a[1],d=0,c=1,u=2;for(a[0]={s:-1,f:l.f+s.f,l,r:s};c!=n-1;)l=a[a[d].f<a[u].f?d++:u++],s=a[d!=c&&a[d].f<a[u].f?d++:u++],a[c++]={s:-1,f:l.f+s.f,l,r:s};for(var m=o[0].s,r=1;r<n;++r)o[r].s>m&&(m=o[r].s);var p=new Z(m+1),y=qt(a[c-1],p,0);if(y>e){var r=0,w=0,j=y-e,_=1<<j;for(o.sort(function(H,z){return p[z.s]-p[H.s]||H.f-z.f});r<n;++r){var U=o[r].s;if(p[U]>e)w+=_-(1<<y-p[U]),p[U]=e;else break}for(w>>=j;w>0;){var K=o[r].s;p[K]<e?w-=1<<e-p[K]++-1:++r}for(;r>=0&&w;--r){var B=o[r].s;p[B]==e&&(--p[B],++w)}y=e}return{t:new M(p),l:y}},qt=function(t,e,a){return t.s==-1?Math.max(qt(t.l,e,a+1),qt(t.r,e,a+1)):e[t.s]=a},Ee=function(t){for(var e=t.length;e&&!t[--e];);for(var a=new Z(++e),r=0,n=t[0],o=1,i=function(s){a[r++]=s},l=1;l<=e;++l)if(t[l]==n&&l!=e)++o;else{if(!n&&o>2){for(;o>138;o-=138)i(32754);o>2&&(i(o>10?o-11<<5|28690:o-3<<5|12305),o=0)}else if(o>3){for(i(n),--o;o>6;o-=6)i(8304);o>2&&(i(o-3<<5|8208),o=0)}for(;o--;)i(n);o=1,n=t[l]}return{c:a.subarray(0,r),n:e}},yt=function(t,e){for(var a=0,r=0;r<e.length;++r)a+=t[r]*e[r];return a},ia=function(t,e,a){var r=a.length,n=ke(e+2);t[n]=r&255,t[n+1]=r>>8,t[n+2]=t[n]^255,t[n+3]=t[n+1]^255;for(var o=0;o<r;++o)t[n+o+4]=a[o];return(n+4+r)*8},Te=function(t,e,a,r,n,o,i,l,s,d,c){tt(e,c++,a),++n[256];for(var u=Yt(n,15),m=u.t,p=u.l,y=Yt(o,15),w=y.t,j=y.l,_=Ee(m),U=_.c,K=_.n,B=Ee(w),T=B.c,H=B.n,z=new Z(19),h=0;h<U.length;++h)++z[U[h]&31];for(var h=0;h<T.length;++h)++z[T[h]&31];for(var f=Yt(z,7),P=f.t,at=f.l,I=19;I>4&&!P[Gt[I-1]];--I);var S=d+5<<3,L=yt(n,nt)+yt(o,Ct)+i,E=yt(n,m)+yt(o,w)+i+14+3*I+yt(z,P)+2*z[16]+3*z[17]+7*z[18];if(s>=0&&S<=L&&S<=E)return ia(e,c,t.subarray(s,s+d));var V,v,F,D;if(tt(e,c,1+(E<L)),c+=2,E<L){V=Q(m,p,0),v=m,F=Q(w,j,0),D=w;var ft=Q(P,at,0);tt(e,c,K-257),tt(e,c+5,H-1),tt(e,c+10,I-4),c+=14;for(var h=0;h<I;++h)tt(e,c+3*h,P[Gt[h]]);c+=3*I;for(var O=[U,T],q=0;q<2;++q)for(var $=O[q],h=0;h<$.length;++h){var R=$[h]&31;tt(e,c,ft[R]),c+=P[R],R>15&&(tt(e,c,$[h]>>5&127),c+=$[h]>>12)}}else V=cr,v=nt,F=ur,D=Ct;for(var h=0;h<l;++h){var C=r[h];if(C>255){var R=C>>18&31;wt(e,c,V[R+257]),c+=v[R+257],R>7&&(tt(e,c,C>>23&31),c+=Ft[R]);var W=C&31;wt(e,c,F[W]),c+=D[W],W>3&&(wt(e,c,C>>5&8191),c+=jt[W])}else wt(e,c,V[C]),c+=v[C]}return wt(e,c,V[256]),c+v[256]},fr=new ve([65540,131080,131088,131104,262176,1048704,1048832,2114560,2117632]),la=new M(0),gr=function(t,e,a,r,n,o){var i=o.z||t.length,l=new M(r+i+5*(1+Math.ceil(i/7e3))+n),s=l.subarray(r,l.length-n),d=o.l,c=(o.r||0)&7;if(e){c&&(s[0]=o.r>>3);for(var u=fr[e-1],m=u>>13,p=u&8191,y=(1<<a)-1,w=o.p||new Z(32768),j=o.h||new Z(y+1),_=Math.ceil(a/3),U=2*_,K=function(Rt){return(t[Rt]^t[Rt+1]<<_^t[Rt+2]<<U)&y},B=new ve(25e3),T=new Z(288),H=new Z(32),z=0,h=0,f=o.i||0,P=0,at=o.w||0,I=0;f+2<i;++f){var S=K(f),L=f&32767,E=j[S];if(w[L]=E,j[S]=L,at<=f){var V=i-f;if((z>7e3||P>24576)&&(V>423||!d)){c=Te(t,s,0,B,T,H,h,P,I,f-I,c),P=z=h=0,I=f;for(var v=0;v<286;++v)T[v]=0;for(var v=0;v<30;++v)H[v]=0}var F=2,D=0,ft=p,O=L-E&32767;if(V>2&&S==K(f-O))for(var q=Math.min(m,V)-1,$=Math.min(32767,f),R=Math.min(258,V);O<=$&&--ft&&L!=E;){if(t[f+F]==t[f+F-O]){for(var C=0;C<R&&t[f+C]==t[f+C-O];++C);if(C>F){if(F=C,D=O,C>q)break;for(var W=Math.min(O,C-2),st=0,v=0;v<W;++v){var ct=f-O+v&32767,zt=w[ct],Lt=ct-zt&32767;Lt>st&&(st=Lt,E=ct)}}}L=E,E=w[L],O+=L-E&32767}if(D){B[P++]=268435456|Qt[F]<<18|Ie[D];var gt=Qt[F]&31,bt=Ie[D]&31;h+=Ft[gt]+jt[bt],++T[257+gt],++H[bt],at=f+F,++z}else B[P++]=t[f],++T[t[f]]}}for(f=Math.max(f,at);f<i;++f)B[P++]=t[f],++T[t[f]];c=Te(t,s,d,B,T,H,h,P,I,f-I,c),d||(o.r=c&7|s[c/8|0]<<3,c-=7,o.h=j,o.p=w,o.i=f,o.w=at)}else{for(var f=o.w||0;f<i+d;f+=65535){var dt=f+65535;dt>=i&&(s[c/8|0]=d,dt=i),c=ia(s,c+1,t.subarray(f,dt))}o.i=i}return Bt(l,0,r+ke(c)+n)},br=(function(){for(var t=new Int32Array(256),e=0;e<256;++e){for(var a=e,r=9;--r;)a=(a&1&&-306674912)^a>>>1;t[e]=a}return t})(),wr=function(){var t=-1;return{p:function(e){for(var a=t,r=0;r<e.length;++r)a=br[a&255^e[r]]^a>>>8;t=a},d:function(){return~t}}},yr=function(t,e,a,r,n){if(!n&&(n={l:1},e.dictionary)){var o=e.dictionary.subarray(-32768),i=new M(o.length+t.length);i.set(o),i.set(t,o.length),t=i,n.w=o.length}return gr(t,e.level==null?6:e.level,e.mem==null?n.l?Math.ceil(Math.max(8,Math.min(13,Math.log(t.length)))*1.5):20:12+e.mem,a,r,n)},te=function(t,e,a){for(;a;++e)t[e]=a,a>>>=8},vr=function(t,e){var a=e.filename;if(t[0]=31,t[1]=139,t[2]=8,t[8]=e.level<2?4:e.level==9?2:0,t[9]=3,e.mtime!=0&&te(t,4,Math.floor(new Date(e.mtime||Date.now())/1e3)),a){t[3]=8;for(var r=0;r<=a.length;++r)t[r+10]=a.charCodeAt(r)}},kr=function(t){(t[0]!=31||t[1]!=139||t[2]!=8)&&N(6,"invalid gzip data");var e=t[3],a=10;e&4&&(a+=(t[10]|t[11]<<8)+2);for(var r=(e>>3&1)+(e>>4&1);r>0;r-=!t[a++]);return a+(e&2)},xr=function(t){var e=t.length;return(t[e-4]|t[e-3]<<8|t[e-2]<<16|t[e-1]<<24)>>>0},Cr=function(t){return 10+(t.filename?t.filename.length+1:0)};function Ar(t,e){e||(e={});var a=wr(),r=t.length;a.p(t);var n=yr(t,e,Cr(e),8),o=n.length;return vr(n,e),te(n,o-8,a.d()),te(n,o-4,r),n}function Mr(t,e){var a=kr(t);return a+8>t.length&&N(6,"invalid gzip data"),hr(t.subarray(a,-8),{i:2},new M(xr(t)),e)}var Pe=typeof TextEncoder<"u"&&new TextEncoder,ee=typeof TextDecoder<"u"&&new TextDecoder,zr=0;try{ee.decode(la,{stream:!0}),zr=1}catch{}var Lr=function(t){for(var e="",a=0;;){var r=t[a++],n=(r>127)+(r>223)+(r>239);if(a+n>t.length)return{s:e,r:Bt(t,a-1)};n?n==3?(r=((r&15)<<18|(t[a++]&63)<<12|(t[a++]&63)<<6|t[a++]&63)-65536,e+=String.fromCharCode(55296|r>>10,56320|r&1023)):n&1?e+=String.fromCharCode((r&31)<<6|t[a++]&63):e+=String.fromCharCode((r&15)<<12|(t[a++]&63)<<6|t[a++]&63):e+=String.fromCharCode(r)}};function Hr(t,e){var a;if(Pe)return Pe.encode(t);for(var r=t.length,n=new M(t.length+(t.length>>1)),o=0,i=function(c){n[o++]=c},a=0;a<r;++a){if(o+5>n.length){var l=new M(o+8+(r-a<<1));l.set(n),n=l}var s=t.charCodeAt(a);s<128||e?i(s):s<2048?(i(192|s>>6),i(128|s&63)):s>55295&&s<57344?(s=65536+(s&1047552)|t.charCodeAt(++a)&1023,i(240|s>>18),i(128|s>>12&63),i(128|s>>6&63),i(128|s&63)):(i(224|s>>12),i(128|s>>6&63),i(128|s&63))}return Bt(n,0,o)}function Sr(t,e){var n;if(ee)return ee.decode(t);var a=Lr(t),r=a.s,n=a.r;return n.length&&N(8),r}const Ir="gzip";function Er(t){return{bytes:Ar(t),compression:Ir}}function Tr(t){return Mr(t)}const sa=1480934209,ae=1,re=2,ne=4,oe=8,ie=16,le=1,se=2,ce=4,de=8,ue=16,ca=32,me=64;function Pr(t){if(t.version!==it)throw new Error(`Unsupported snapshot version: ${t.version}`);const e=new Zr;e.writeU32(sa),e.writeU8(it),e.writeU8(0),e.writeU8(0),e.writeU8(0),e.writeJson(t.meta),e.writeJson(t.layers),e.writeString(t.activeLayoutBtrId),e.writeU32(t.layouts.length);for(const a of t.layouts)jr(e,a);return e.toUint8Array()}function Fr(t){const e=new Dr(t);if(e.readU32()!==sa)throw new Error("Invalid snapshot magic");const a=e.readU8();if(e.readU8(),e.readU8(),e.readU8(),a!==it)throw new Error(`Unsupported snapshot version: ${a}`);const r=e.readJson(),n=e.readJson(),o=e.readString(),i=e.readU32(),l=[];for(let s=0;s<i;s++)l.push(Br(e));return{version:it,meta:r,layers:n,layouts:l,activeLayoutBtrId:o}}function jr(t,e){t.writeString(e.btrId),t.writeString(e.name),t.writeU8(e.isModelSpace?1:0),t.writeJson(e.osnap??null),t.writeJson(e.viewports??null),t.writeU32(e.lineBatches.length);for(const a of e.lineBatches)Ur(t,a);t.writeU32(e.meshBatches.length);for(const a of e.meshBatches)$r(t,a)}function Br(t){const e=t.readString(),a=t.readString(),r=t.readU8()!==0,n=t.readJson()??void 0,o=t.readJson()??void 0,i=t.readU32(),l=[];for(let c=0;c<i;c++)l.push(Vr(t));const s=t.readU32(),d=[];for(let c=0;c<s;c++)d.push(Rr(t));return{btrId:e,name:a,isModelSpace:r,lineBatches:l,meshBatches:d,osnap:n,viewports:o}}function Ur(t,e){t.writeString(e.layer),t.writeU32(e.color>>>0),t.writeF64(e.offset[0]),t.writeF64(e.offset[1]),t.writeF64(e.offset[2]),t.writeFloat32Array(e.positions);let a=0;e.indices&&e.indices.length>0&&(a|=ae),e.linePattern&&(a|=re),e.lineDistances&&e.lineDistances.length>0&&(a|=ne),e.lineWidth!=null&&e.lineWidth>0&&(a|=oe),e.renderOrder!=null&&e.renderOrder!==0&&(a|=ie),t.writeU8(a),a&ae&&t.writeUint32Array(e.indices),a&re&&t.writeJson(e.linePattern),a&ne&&t.writeFloat32Array(e.lineDistances),a&oe&&t.writeF32(e.lineWidth),a&ie&&t.writeI32(e.renderOrder)}function Vr(t){const e=t.readString(),a=t.readU32(),r=[t.readF64(),t.readF64(),t.readF64()],n=t.readFloat32Array(),o=t.readU8(),i={layer:e,color:a,offset:r,positions:n};return o&ae&&(i.indices=t.readUint32Array()),o&re&&(i.linePattern=t.readJson()),o&ne&&(i.lineDistances=t.readFloat32Array()),o&oe&&(i.lineWidth=t.readF32()),o&ie&&(i.renderOrder=t.readI32()),i}function $r(t,e){t.writeString(e.layer),t.writeU32(e.color>>>0),t.writeF64(e.offset[0]),t.writeF64(e.offset[1]),t.writeF64(e.offset[2]),t.writeFloat32Array(e.positions);let a=0;e.indices&&e.indices.length>0&&(a|=le),e.hatchPattern&&(a|=se),e.gradientFill&&(a|=ce),e.gradientPositions&&e.gradientPositions.length>0&&(a|=de),e.side!=null&&(a|=ue),e.points&&(a|=ca),e.renderOrder!=null&&e.renderOrder!==0&&(a|=me),t.writeU8(a),a&le&&t.writeUint32Array(e.indices),a&se&&t.writeJson(e.hatchPattern),a&ce&&t.writeJson(e.gradientFill),a&de&&t.writeFloat32Array(e.gradientPositions),a&ue&&t.writeU8(e.side),a&me&&t.writeI32(e.renderOrder)}function Rr(t){const e=t.readString(),a=t.readU32(),r=[t.readF64(),t.readF64(),t.readF64()],n=t.readFloat32Array(),o=t.readU8(),i={layer:e,color:a,offset:r,positions:n};return o&le&&(i.indices=t.readUint32Array()),o&se&&(i.hatchPattern=t.readJson()),o&ce&&(i.gradientFill=t.readJson()),o&de&&(i.gradientPositions=t.readFloat32Array()),o&ue&&(i.side=t.readU8()),o&ca&&(i.points=!0),o&me&&(i.renderOrder=t.readI32()),i}class Zr{constructor(){this.chunks=[],this.length=0}writeU8(e){const a=new Uint8Array(1);a[0]=e&255,this.chunks.push(a),this.length+=1}writeU32(e){const a=new Uint8Array(4);new DataView(a.buffer).setUint32(0,e>>>0,!0),this.chunks.push(a),this.length+=4}writeI32(e){const a=new Uint8Array(4);new DataView(a.buffer).setInt32(0,e|0,!0),this.chunks.push(a),this.length+=4}writeF32(e){const a=new Uint8Array(4);new DataView(a.buffer).setFloat32(0,e,!0),this.chunks.push(a),this.length+=4}writeF64(e){const a=new Uint8Array(8);new DataView(a.buffer).setFloat64(0,e,!0),this.chunks.push(a),this.length+=8}writeBytes(e){this.chunks.push(e),this.length+=e.length}writeString(e){const a=Hr(e);this.writeU32(a.length),this.writeBytes(a)}writeJson(e){this.writeString(JSON.stringify(e))}writeFloat32Array(e){this.alignTo(4);const a=new Uint8Array(e.buffer,e.byteOffset,e.byteLength);this.writeU32(a.length),this.writeBytes(a)}writeUint32Array(e){this.alignTo(4);const a=new Uint8Array(e.buffer,e.byteOffset,e.byteLength);this.writeU32(a.length),this.writeBytes(a)}alignTo(e){const a=this.length%e;if(a===0)return;const r=e-a;for(let n=0;n<r;n++)this.writeU8(0)}toUint8Array(){const e=new Uint8Array(this.length);let a=0;for(const r of this.chunks)e.set(r,a),a+=r.length;return e}}class Dr{constructor(e){this.bytes=e,this.offset=0}readU8(){return this.bytes[this.offset++]}readU32(){const e=new DataView(this.bytes.buffer,this.bytes.byteOffset+this.offset,4).getUint32(0,!0);return this.offset+=4,e}readI32(){const e=new DataView(this.bytes.buffer,this.bytes.byteOffset+this.offset,4).getInt32(0,!0);return this.offset+=4,e}readF32(){const e=new DataView(this.bytes.buffer,this.bytes.byteOffset+this.offset,4).getFloat32(0,!0);return this.offset+=4,e}readF64(){const e=new DataView(this.bytes.buffer,this.bytes.byteOffset+this.offset,8).getFloat64(0,!0);return this.offset+=8,e}readBytes(e){const a=this.bytes.subarray(this.offset,this.offset+e);return this.offset+=e,a}readString(){const e=this.readU32();return e===0?"":Sr(this.readBytes(e))}readJson(){const e=this.readString();if(e.length===0)throw new Error("Expected JSON payload");return JSON.parse(e)}alignTo(e){const a=this.offset%e;a!==0&&(this.offset+=e-a)}readFloat32Array(){this.alignTo(4);const e=this.readU32();if(e===0)return new Float32Array(0);if(e%4!==0)throw new Error("Invalid float32 buffer length");const a=this.readBytes(e);if(a.byteOffset%4===0)return new Float32Array(a.buffer,a.byteOffset,e/4);const r=new ArrayBuffer(e);return new Uint8Array(r).set(a),new Float32Array(r)}readUint32Array(){this.alignTo(4);const e=this.readU32();if(e===0)return new Uint32Array(0);if(e%4!==0)throw new Error("Invalid uint32 buffer length");const a=this.readBytes(e);if(a.byteOffset%4===0)return new Uint32Array(a.buffer,a.byteOffset,e/4);const r=new ArrayBuffer(e);return new Uint8Array(r).set(a),new Uint32Array(r)}}const Or="application/vnd.mlightcad.acex-snapshot+binary";function Yr(t){if(t.version!==it)throw new Error(`Unsupported snapshot version: ${t.version}`);const e=Pr(t),a=Er(e);return{payload:_r(a.bytes),compression:a.compression}}function vi(t){const e=Kr(t.trim()),a=Tr(e);return Fr(a)}function Nr(){return Or}function _r(t){let e="";for(let a=0;a<t.length;a++)e+=String.fromCharCode(t[a]);return btoa(e)}function Kr(t){const e=atob(t),a=new Uint8Array(e.length);for(let r=0;r<e.length;r++)a[r]=e.charCodeAt(r);return a}function ht(t,e,a){if(a<=0)return new Float32Array(0);const r=new Float32Array(a);for(let n=0;n<a;n++)r[n]=t[e+n];return r}function Xr(t,e,a){if(a<=0)return new Uint32Array(0);const r=new Uint32Array(a);for(let n=0;n<a;n++)r[n]=t[e+n];return r}function da(t,e){if(e.length===0)return{positions:t,indices:e};let a=0;for(let n=0;n<e.length;n++){const o=e[n];o>a&&(a=o)}const r=(a+1)*3;return r>=t.length?{positions:t,indices:e}:{positions:ht(t,0,r),indices:e}}function Fe(t,e){return t+e}const ut={x:0,y:0,z:0};function Wr(t){t.updateMatrixWorld(!0);const e=t.matrixWorld.elements;return ut.x=e[12],ut.y=e[13],ut.z=e[14],[ut.x,ut.y,ut.z]}function Gr(t,e){const a=e.elements,r=t.positions;if(r.length===0)return{positions:new Float32Array(0),indices:t.indices};const n=new Float32Array(r.length);for(let o=0;o<r.length;o+=3){const i=r[o],l=r[o+1],s=r[o+2];n[o]=a[0]*i+a[4]*l+a[8]*s+a[12],n[o+1]=a[1]*i+a[5]*l+a[9]*s+a[13],n[o+2]=a[2]*i+a[6]*l+a[10]*s+a[14]}return{positions:n,indices:t.indices?new Uint32Array(t.indices):void 0}}function Qr(t){const e=t.positions;if(e.length<3)return{slice:t,offset:[0,0,0]};let a=1/0,r=1/0,n=1/0,o=-1/0,i=-1/0,l=-1/0;for(let c=0;c<e.length;c+=3){const u=e[c],m=e[c+1],p=e[c+2];a=Math.min(a,u),r=Math.min(r,m),n=Math.min(n,p),o=Math.max(o,u),i=Math.max(i,m),l=Math.max(l,p)}const s=[(a+o)/2,(r+i)/2,(n+l)/2],d=new Float32Array(e.length);for(let c=0;c<e.length;c+=3)d[c]=e[c]-s[0],d[c+1]=e[c+1]-s[1],d[c+2]=e[c+2]-s[2];return{slice:{positions:d,indices:t.indices?new Uint32Array(t.indices):void 0},offset:s}}function Jr(t,e,a={}){t.updateMatrixWorld(!0);const r=Gr(e,t.matrixWorld);return a.preserveWorldSpaceForPatternFill?{slice:r,offset:[0,0,0]}:Qr(r)}function xe(t){const e=t;if(e.isShaderMaterial===!0||t.type==="ShaderMaterial")return e}function qr(t){var e;const a=xe(t);if(!a)return;const r=a.uniforms.pattern,n=a.uniforms.patternLength;if(!r||!n)return;const o=r.value;if(!(!Array.isArray(o)||o.length===0))return{pattern:[...o],patternLength:Number(n.value),viewportScale:Number(((e=a.uniforms.u_viewportScale)==null?void 0:e.value)??1)}}function tn(t){var e;const a=xe(t);if(!a)return;const r=a.uniforms.u_patternLines;if(!r)return;const n=r.value;if(!(!Array.isArray(n)||n.length===0))return{patternAngle:Number(((e=a.uniforms.u_patternAngle)==null?void 0:e.value)??0),patternLines:n.map(an)}}function en(t){var e,a,r,n,o;const i=xe(t);if(!i||i.uniforms.u_patternLines)return;const l=(e=i.uniforms.u_startColor)==null?void 0:e.value,s=(a=i.uniforms.u_endColor)==null?void 0:a.value,d=i.uniforms.u_gradientType;if(!(!(l!=null&&l.getHex)||d==null))return{startColor:l.getHex(),endColor:((r=s==null?void 0:s.getHex)==null?void 0:r.call(s))??l.getHex(),angle:Number(((n=i.uniforms.u_angle)==null?void 0:n.value)??0),shift:Number(((o=i.uniforms.u_shift)==null?void 0:o.value)??0),gradientType:Number(d.value)}}function an(t){return{angle:t.angle,base:[t.base.x,t.base.y],offset:[t.offset.x,t.offset.y],dashLengths:[...t.dashLengths],patternLength:t.patternLength}}function ua(t){const e=t.length/3;if(e<2)return new Float32Array(0);const a=new Float32Array(e);for(let r=0;r<e;r+=2){r===0?a[r]=0:a[r]=a[r-1];const n=t[r*3],o=t[r*3+1],i=t[r*3+2]??0,l=t[(r+1)*3],s=t[(r+1)*3+1],d=t[(r+1)*3+2]??0,c=l-n,u=s-o,m=d-i;a[r+1]=a[r]+Math.sqrt(c*c+u*u+m*m)}return a}function rn(t,e){const a=t.getAttribute(e);if(!a||a.count===0)return;const r=a.itemSize;if(t.getIndex()){const c=a.array;return ht(c,0,a.count*r)}const n=t.drawRange,o=a.count,i=Math.max(0,Math.min(Math.floor(n.start),o)),l=Math.max(0,o-i),s=!Number.isFinite(n.count)||n.count<=0?l:Math.min(Math.floor(n.count),l);if(s<=0)return;const d=a.array;return ht(d,i*r,s*r)}function nn(t,e){const a=Math.atan2(e[1],e[0]),r=(o,i)=>[e[0]*o+e[4]*i+e[12],e[1]*o+e[5]*i+e[13]],n=(o,i)=>[e[0]*o+e[4]*i,e[1]*o+e[5]*i];return{patternAngle:t.patternAngle+a,patternLines:t.patternLines.map(o=>({angle:o.angle+a,base:r(o.base[0],o.base[1]),offset:n(o.offset[0],o.offset[1]),dashLengths:[...o.dashLengths],patternLength:o.patternLength}))}}function pe(t,e){return!Number.isFinite(t)||t<0?0:Math.min(Math.floor(t),e)}function he(t,e,a){const r=Math.max(0,e-a);return!Number.isFinite(t)||t<=0?r:Math.min(Math.floor(t),r)}function je(t){const e=t.getAttribute("position");if(!e)return{positions:new Float32Array(0)};const a=t.drawRange,r=e.array,n=e.itemSize,o=t.getIndex();if(o){const s=ht(r,0,e.count*n),d=o.array,c=pe(a.start,o.count),u=he(a.count,o.count,c),m=Xr(d,c,u);return da(s,m)}const i=pe(a.start,e.count),l=he(a.count,e.count,i);return{positions:ht(r,i*n,l*n)}}function fe(t){return Ca(t.flags)&&Aa(t.flags)}function Ce(t,e){const a=e.getAttribute("position");if(!a)return{positions:new Float32Array(0)};const r=a.itemSize,n=a.array,o=e.getIndex(),{count:i}=t.mappingStats;if(o){const s=ht(n,0,a.count*r),d=o.array,c=[];for(let u=0;u<i;u++){let m;try{m=t.getGeometryRangeAt(u)}catch{continue}const p=m.indexStart??0,y=m.indexCount??0;if(!(!fe(m)||y<=0))for(let w=0;w<y;w++)c.push(d[p+w])}return c.length===0?{positions:new Float32Array(0)}:da(s,new Uint32Array(c))}const l=[];for(let s=0;s<i;s++){let d;try{d=t.getGeometryRangeAt(s)}catch{continue}if(!fe(d)||d.vertexCount<=0)continue;const c=d.vertexStart*r,u=d.vertexCount*r;for(let m=0;m<u;m++)l.push(n[c+m])}return{positions:new Float32Array(l)}}function St(t,e,a){t.push(e.getX(a),e.getY(a),e.getZ(a))}function on(t,e){const a=e.getAttribute("instanceStart"),r=e.getAttribute("instanceEnd");if(!a||!r)return{positions:new Float32Array(0)};const{count:n}=t.mappingStats,o=[];for(let i=0;i<n;i++){let l;try{l=t.getGeometryRangeAt(i)}catch{continue}if(!fe(l)||l.vertexCount<=0)continue;const s=l.vertexStart,d=s+l.vertexCount;for(let c=s;c<d;c++)St(o,a,c),St(o,r,c)}return{positions:new Float32Array(o)}}function ln(t,e){const a=t.instanceCount;if(Number.isFinite(a)&&a>=0)return Math.min(Math.floor(a),e);const r=t.drawRange,n=pe(r.start,e);return he(r.count,e,n)}function sn(t){const e=t.getAttribute("instanceStart"),a=t.getAttribute("instanceEnd");if(!e||!a||e.count===0)return{positions:new Float32Array(0)};const r=ln(t,e.count);if(r<=0)return{positions:new Float32Array(0)};const n=[];for(let o=0;o<r;o++)St(n,e,o),St(n,a,o);return{positions:new Float32Array(n)}}function Nt(t){return xa(t)}function ma(t){if(t instanceof Ia)return t.linewidth}function _t(t){if("material"in t){const e=t.userData.originalMaterial??t.material;return Array.isArray(e)?e[0]:e}return t.material}function pt(t){var e;const a=Qe(t),r=a.layer??"0",n=t;let o=n.color!=null?n.color.getHex():a.color??16777215;const i=qr(t),l=tn(t),s=en(t);if(t instanceof Sa||t.type==="ShaderMaterial"){const d=(e=t.uniforms.u_color)==null?void 0:e.value;d!=null&&d.getHex?o=d.getHex():s&&(o=s.startColor)}return{color:o,layer:r,linePattern:i,hatchPattern:l,gradientFill:s,side:l||s?t.side:void 0}}function cn(t,e){const a=Qe(e).drawOrder??t.renderOrder;return a===0?void 0:a}function At(t,e,a){const r=cn(e,a);r!=null&&(t.renderOrder=r)}function dn(t,e){if(!e)return;const a=t.userData.bakedWorldMatrix;return!a||a.length<16?e:nn(e,a)}function Ut(t){return Wr(t)}function Kt(t,e,a={}){const r=Jr(t,e,a);return{...r.slice,offset:r.offset}}function Ae(t,e,a,r,n){const o=pt(e),i=dn(a,o.hatchPattern),l=o.gradientFill?rn(t,"gradientPosition"):void 0,s={layer:o.layer,color:o.color,offset:n,hatchPattern:i,gradientFill:o.gradientFill,gradientPositions:l,side:o.side,...r};return At(s,a,e),s}function un(t){const e=on(t,t.geometry);if(e.positions.length===0)return;const{color:a,layer:r}=pt(t.material),n=ma(t.material),o={layer:r,color:a,offset:Ut(t),lineWidth:n,...e};return At(o,t,t.material),o}function mn(t){const e=Ce(t,t.geometry);if(e.positions.length===0)return;const{color:a,layer:r,linePattern:n}=pt(t.material),o=n?ua(e.positions):void 0,i={layer:r,color:a,offset:Ut(t),linePattern:n,lineDistances:o,...e};return At(i,t,t.material),i}function pn(t){const e=Ce(t,t.geometry);if(e.positions.length!==0)return Ae(t.geometry,t.material,t,e,Ut(t))}function hn(t){const e=Ce(t,t.geometry);if(e.positions.length!==0)return{points:!0,...Ae(t.geometry,t.material,t,e,Ut(t))}}function fn(t){const e=[],a=[];return t.traverse(r=>{if(!(wa(r)||ya(r))){if(r instanceof He){const n=mn(r);n&&e.push(n);return}if(r instanceof va){const n=un(r);n&&e.push(n);return}if(r instanceof Se){const n=pn(r);n&&a.push(n);return}if(r instanceof ka){const n=hn(r);n&&a.push(n);return}if(r instanceof za){if(!Nt(r))return;const n=sn(r.geometry);if(n.positions.length===0)return;const o=_t(r),{color:i,layer:l}=pt(o),{offset:s,...d}=Kt(r,n),c={layer:l,color:i,offset:s,lineWidth:ma(o),...d};At(c,r,o),e.push(c)}else if(r instanceof La&&!(r instanceof He)){if(!Nt(r))return;const n=je(r.geometry);if(n.positions.length===0)return;const o=_t(r),{color:i,layer:l,linePattern:s}=pt(o),{offset:d,...c}=Kt(r,n),u=s?ua(c.positions):void 0,m={layer:l,color:i,offset:d,linePattern:s,lineDistances:u,...c};At(m,r,o),e.push(m)}else if(r instanceof Ha&&!(r instanceof Se)){if(!Nt(r))return;const n=je(r.geometry);if(n.positions.length===0)return;const o=_t(r),i=pt(o),{offset:l,...s}=Kt(r,n,{preserveWorldSpaceForPatternFill:!!i.hatchPattern});a.push(Ae(r.geometry,o,r,s,l))}}}),{lineBatches:e,meshBatches:a}}function Be(t,e){const a=t.extmin,r=t.extmax;return{title:e==null?void 0:e.title,extents:{minX:a.x,minY:a.y,maxX:r.x,maxY:r.y},units:{insunits:t.insunits,lunits:t.lunits,luprec:t.luprec,aunits:t.aunits,auprec:t.auprec,measurement:t.measurement,ltscale:t.ltscale,angbase:t.angbase,angdir:t.angdir},background:(e==null?void 0:e.background)??0}}const ki=["endpoint","midpoint","center","quadrant","intersection","nearest"];function gn(t,e){let a=e-t;for(;a<=0;)a+=kt;for(;a>kt;)a-=kt;return a}function Ue(t,e,a,r,n){const o=n===-1?-1:1;return new qe(t+o*a*Math.cos(r),e+a*Math.sin(r))}function Ve(t,e,a,r,n){return Math.atan2(r-e,n*(a-t))}function bn(t){const e=Ue(t.cx,t.cy,t.r,t.startAngle,t.normalSign),a=Ue(t.cx,t.cy,t.r,t.endAngle,t.normalSign),r=gn(t.startAngle,t.endAngle),n=t.normalSign*Math.tan(r/4);return new lt(e,a,n)}function wn(t){return t.kind==="circle"?new lt({x:t.cx,y:t.cy},t.r,0,kt,t.normalSign===-1):bn(t)}function yn(t){const e=Math.atan2(t.majorY,t.majorX);return new Je({x:t.cx,y:t.cy,z:0},t.majorR,t.minorR,t.startAngle,t.endAngle,t.closed,e)}function vn(t){const e=[];for(let a=0;a+1<t.controlPoints.length;a+=2)e.push({x:t.controlPoints[a],y:t.controlPoints[a+1],z:0});return new Ua(t.degree,t.knots,e,t.weights.length>0?t.weights:void 0)}function xi(t){switch(t.kind){case"line":return{kind:"line",curve:new ta({x:t.x0,y:t.y0},{x:t.x1,y:t.y1})};case"circle":case"arc":return{kind:"circArc",curve:wn(t)};case"ellipse":return{kind:"ellipse",curve:yn(t)};case"spline":return{kind:"spline",curve:vn(t)};case"point":return{kind:"point",point:new qe(t.x,t.y)}}}function Me(t){return t.z>=0?1:-1}function Vt(t,e,a){if(!(a.radius>0)||!Number.isFinite(a.radius))return;const r=a.clockwise?-1:1,n=a.center.x,o=a.center.y;t.push({kind:"arc",layer:e,cx:n,cy:o,r:a.radius,startAngle:Ve(n,o,a.startPoint.x,a.startPoint.y,r),endAngle:Ve(n,o,a.endPoint.x,a.endPoint.y,r),normalSign:r})}const kn=1e6;function x(t,e){const a=new J(e.x,e.y,e.z??0).applyMatrix4(t);return{x:a.x,y:a.y}}function xn(t){const e=t.elements;return new we(e[0],e[4],e[8],e[12],e[1],e[5],e[9],e[13],e[2],e[6],e[10],e[14],e[3],e[7],e[11],e[15])}function It(t,e){return new we().multiplyMatrices(t,xn(e))}function ze(t,e){const a=new J(e.x,e.y,e.z??0).transformDirection(t).normalize();return{x:a.x,y:a.y}}function ge(t){const e=new J(t.elements[0],t.elements[1],t.elements[2]).length(),a=new J(t.elements[4],t.elements[5],t.elements[6]).length();return Pt.equal(e,a,ea*Math.max(e,a,1))}function Cn(t,e){const a=t.tables.blockTable.getIdAt(e);if(a)return a;for(const n of t.tables.blockTable.newIterator())if(n.objectId===e)return n;const r=t.tables.blockTable.modelSpace;if(r.objectId===e)return r}function An(t){if(t instanceof or)return!0;const e=t;return(e.type==="LINE"||e.type==="Line")&&e.startPoint!=null&&e.endPoint!=null}function Mn(t,e,a,r){et(t,e,a,r.startPoint,r.endPoint)}function pa(t,e){return t.blockTableRecord??(t.blockName?e.tables.blockTable.getAt(t.blockName):void 0)}function zn(t,e){const a=t.dimBlockId;return a?e.tables.blockTable.getAt(a):void 0}function Ln(t,e){const a=pa(t,e);if(a)return a;const r=t.owningBlockRecordId;return r?e.tables.blockTable.getAt(r):void 0}function ha(t){return t.getFullInsertionTransform()}function Hn(t){for(const e of t.newIterator())return!0;return!1}function Sn(t){return typeof t.getFullInsertionTransform=="function"&&"blockTableRecord"in t}function et(t,e,a,r,n){const o=x(a,r),i=x(a,n),l={kind:"line",layer:e,x0:o.x,y0:o.y,x1:i.x,y1:i.y};t.push(l)}function $e(t,e,a,r,n,o){const i=x(a,r),l=ze(a,n),s=Math.hypot(l.x,l.y)||1,d=l.x/s,c=l.y/s,u=kn,m=o?i.x-d*u:i.x,p=o?i.y-c*u:i.y,y=i.x+d*u,w=i.y+c*u;t.push({kind:"line",layer:e,x0:m,y0:p,x1:y,y1:w})}function ot(t,e,a,r,n){if(r.length<2)return;const o=n?r.length:r.length-1;for(let i=0;i<o;i++)et(t,e,a,r[i],r[(i+1)%r.length])}function In(t,e,a,r){const n=[r.startPosition];for(const o of r.segments)n.push(o.position);ot(t,e,a,n,r.closed)}function En(t,e,a){if(a.vertices.length>=2)return a.vertices;if(a.vertices.length===0)return[];const r=a.vertices[0],n=e.lastLeaderLinePoint??e.landingPoint??t.landingPoint??t.contentBasePosition;if(!n)return a.vertices;const o=r.x-n.x,i=r.y-n.y,l=(r.z??0)-(n.z??0);return Math.hypot(o,i,l)<=ea?a.vertices:[r,n]}function Tn(t,e,a,r){var n,o;for(const l of r.leaders)for(const s of l.leaderLines){const d=En(r,l,s);ot(t,e,a,d,!1)}const i=l=>{if(!l)return;const s=x(a,l);t.push({kind:"point",layer:e,x:s.x,y:s.y})};i(r.contentBasePosition),i((n=r.mtextContent)==null?void 0:n.anchorPoint),i((o=r.blockContent)==null?void 0:o.position)}function Pn(t,e,a,r){const n=r.numberOfVertices;if(n<2)return;const o=r.elevation,i=r.closed?n:n-1;for(let l=0;l<i;l++){const s=r.getPointAt(l),d=r.getPointAt((l+1)%n),c=r.getBulgeAt(l),u={x:s.x,y:s.y,z:o},m={x:d.x,y:d.y,z:o};if(Pt.isPositive(Math.abs(c))){const p=x(a,u),y=x(a,m);Vt(t,e,new lt(p,y,c))}else et(t,e,a,u,m)}}function Fn(t,e,a,r,n,o){const i=x(a,r),l=new J(a.elements[0],a.elements[1],a.elements[2]).length(),s={kind:"circle",layer:e,cx:i.x,cy:i.y,r:n*l,normalSign:Me(o)};t.push(s)}function jn(t,e,a,r){const n=x(a,r.center),o=new J(a.elements[0],a.elements[1],a.elements[2]).length(),i={kind:"arc",layer:e,cx:n.x,cy:n.y,r:r.radius*o,startAngle:r.startAngle,endAngle:r.endAngle,normalSign:Me(r.normal)};t.push(i)}function Xt(t,e,a,r){const n=x(a,r.center),o=r._geo,i=(o==null?void 0:o.majorAxis)??{x:1,y:0,z:0},l=ze(a,i),s=Math.hypot(l.x,l.y)||1,d=new J(a.elements[0],a.elements[1],a.elements[2]).length(),c=new J(a.elements[4],a.elements[5],a.elements[6]).length(),u={kind:"ellipse",layer:e,cx:n.x,cy:n.y,majorX:l.x/s,majorY:l.y/s,majorR:r.majorAxisRadius*d,minorR:r.minorAxisRadius*c,startAngle:r.startAngle,endAngle:r.endAngle,closed:r.closed,normalSign:Me(r.normal)};t.push(u)}function Bn(t,e,a,r){var n,o;const i=r._geo;if(!((n=i==null?void 0:i.controlPoints)!=null&&n.length))return;const l=[];for(const d of i.controlPoints){const c=x(a,d);l.push(c.x,c.y)}const s={kind:"spline",layer:e,controlPoints:l,degree:i.degree??3,knots:[...i.knots??[]],weights:[...i.weights??[]],closed:i.closed??!1};if((o=i.fitPoints)!=null&&o.length){s.fitPoints=[];for(const d of i.fitPoints){const c=x(a,d);s.fitPoints.push(c.x,c.y)}}t.push(s)}function Un(t,e,a,r){var n;const o=(n=r._geo)==null?void 0:n.vertices,i=o&&o.length>1?o.map(d=>({x:d.x,y:d.y,bulge:d.bulge})):Array.from({length:r.numberOfVertices},(d,c)=>{const u=r.getPoint2dAt(c);return{x:u.x,y:u.y,bulge:0}}),l=i.length;if(l<2)return;const s=r.closed?l:l-1;for(let d=0;d<s;d++){const c=i[d],u=i[(d+1)%l],m=c.bulge??0;if(Pt.isPositive(Math.abs(m))){const p=x(a,{x:c.x,y:c.y,z:0}),y=x(a,{x:u.x,y:u.y,z:0});Vt(t,e,new lt(p,y,m))}else et(t,e,a,{x:c.x,y:c.y,z:0},{x:u.x,y:u.y,z:0})}}function Vn(t,e,a,r,n){if(ge(a)){const o=x(a,{x:r.startPoint.x,y:r.startPoint.y,z:n}),i=x(a,{x:r.endPoint.x,y:r.endPoint.y,z:n}),l=a.elements[0]*a.elements[5]-a.elements[4]*a.elements[1],s=(r.clockwise?-1:1)*Math.tan(r.deltaAngle/4)*(l<0?-1:1);Vt(t,e,new lt(o,i,s));return}et(t,e,a,{x:r.startPoint.x,y:r.startPoint.y,z:n},{x:r.endPoint.x,y:r.endPoint.y,z:n})}function $n(t,e,a,r,n){const o=x(a,{x:r.center.x,y:r.center.y,z:n}),i=ze(a,{x:Math.cos(r.rotation),y:Math.sin(r.rotation),z:0}),l=Math.hypot(i.x,i.y)||1,s=new J(a.elements[0],a.elements[1],a.elements[2]).length(),d=new J(a.elements[4],a.elements[5],a.elements[6]).length();t.push({kind:"ellipse",layer:e,cx:o.x,cy:o.y,majorX:i.x/l,majorY:i.y/l,majorR:r.majorAxisRadius*s,minorR:r.minorAxisRadius*d,startAngle:r.startAngle,endAngle:r.endAngle,closed:!1,normalSign:r.clockwise?-1:1})}function Rn(t,e,a,r,n){var o;const i=r.numberOfVertices;if(i<2)return;const l=r.closed?i:i-1;for(let s=0;s<l;s++){const d=r.getPointAt(s),c=r.getPointAt((s+1)%i),u=((o=r.vertices[s])==null?void 0:o.bulge)??0,m={x:d.x,y:d.y,z:n},p={x:c.x,y:c.y,z:n};if(Pt.isPositive(Math.abs(u))){const y=x(a,m),w=x(a,p);Vt(t,e,new lt(y,w,u))}else et(t,e,a,m,p)}}function Zn(t,e,a,r,n){if(r instanceof ir){Rn(t,e,a,r,n);return}if(r instanceof lr)for(const o of r.curves)o instanceof ta?et(t,e,a,{x:o.startPoint.x,y:o.startPoint.y,z:n},{x:o.endPoint.x,y:o.endPoint.y,z:n}):o instanceof lt?Vn(t,e,a,o,n):o instanceof Je&&$n(t,e,a,o,n)}function Dn(t,e,a,r){var n;const o=(n=r._geo)==null?void 0:n.loops;if(!(o!=null&&o.length))return;const i=r.elevation;for(const l of o)Zn(t,e,a,l,i)}function On(t,e,a,r){const n=It(a,ha(r)),o=[0];for(let d=0;d<r.numColumns;d++)o.push(o[d]+r.columnWidth(d));const i=[0];for(let d=0;d<r.numRows;d++)i.push(i[d]-r.rowHeight(d));const l=o[o.length-1],s=i[i.length-1];for(const d of i)et(t,e,n,{x:0,y:d,z:0},{x:l,y:d,z:0});for(const d of o)et(t,e,n,{x:d,y:0,z:0},{x:d,y:s,z:0})}function Yn(t,e,a,r,n,o,i){const l=be(t.layer,a);if(i&&!i(l))return;const s=Ln(t,o);if(s&&!n.has(s.objectId)&&Hn(s)){n.add(s.objectId);const c=It(e,ha(t));Et(s,c,l,r,n,o,i),n.delete(s.objectId);return}On(r,l,e,t);const d=x(e,t.position);r.push({kind:"point",layer:l,x:d.x,y:d.y})}function Nn(t,e,a,r){let n=r.boundaryPath();if(n.length>1){const i=n[0],l=n[n.length-1];i.x===l.x&&i.y===l.y&&(i.z??0)===(l.z??0)&&(n=n.slice(0,-1))}n.length>=2&&ot(t,e,a,n,!0);const o=x(a,r.position);t.push({kind:"point",layer:e,x:o.x,y:o.y})}function be(t,e){return t==="0"?e:t}function _n(t,e,a,r,n,o,i){if(!t.visibility)return;const l=be(t.layer,a);if(!(i&&!i(l))){if(t instanceof $a){Yn(t,e,a,r,n,o,i);return}if(Sn(t)){const s=pa(t,o);if(!s||n.has(s.objectId))return;n.add(s.objectId);const d=It(e,t.getFullInsertionTransform()),c=be(t.layer,a);Et(s,d,c,r,n,o,i),n.delete(s.objectId);return}if(t instanceof Ra){const s=t,d=zn(s,o);if(!d||n.has(d.objectId))return;n.add(d.objectId);const c=It(e,s.getFullDimBlockTransform());Et(d,c,l,r,n,o,i),n.delete(d.objectId);return}if(An(t)){Mn(r,l,e,t);return}if(t instanceof Za){ge(e)?Fn(r,l,e,t.center,t.radius,t.normal):Xt(r,l,e,Kn(t));return}if(t instanceof Da){ge(e)?jn(r,l,e,t):Xt(r,l,e,Xn(t));return}if(t instanceof ye){Xt(r,l,e,t);return}if(t instanceof Oa){Bn(r,l,e,t);return}if(t instanceof Ya){Un(r,l,e,t);return}if(t instanceof Na){Pn(r,l,e,t);return}if(t instanceof _a){const s=[];for(let d=0;d<t.numberOfVertices;d++)s.push(t.getPointAt(d));ot(r,l,e,s,t.closed);return}if(t instanceof Ka){Dn(r,l,e,t);return}if(t instanceof Xa){$e(r,l,e,t.basePoint,t.unitDir,!1);return}if(t instanceof Wa){$e(r,l,e,t.basePoint,t.unitDir,!0);return}if(t instanceof Ga){const s=[t.getPointAt(0),t.getPointAt(1),t.getPointAt(2),t.getPointAt(3)];ot(r,l,e,s,!0);return}if(t instanceof Qa){const s=t.subGetGripPoints();s.length>=2&&ot(r,l,e,s,s.length>=3);return}if(t instanceof Ja){const s=t.vertices;s.length>=2&&ot(r,l,e,s,!1);return}if(t instanceof qa){In(r,l,e,t);return}if(t instanceof tr){Tn(r,l,e,t);return}if(t instanceof er){const s=x(e,t.position);r.push({kind:"point",layer:l,x:s.x,y:s.y});return}if(t instanceof ar){const s=x(e,t.location);r.push({kind:"point",layer:l,x:s.x,y:s.y});return}if(t instanceof rr){Nn(r,l,e,t);return}if(t instanceof nr){const s=x(e,t.position);r.push({kind:"point",layer:l,x:s.x,y:s.y})}}}function Et(t,e,a,r,n,o,i){for(const l of t.newIterator())_n(l,e,a,r,n,o,i)}function Kn(t){return new ye(t.center,t.normal,{x:1,y:0,z:0},t.radius,t.radius,0,kt)}function Xn(t){return new ye(t.center,t.normal,{x:1,y:0,z:0},t.radius,t.radius,t.startAngle,t.endAngle)}function Wn(t,e,a={}){const r=Cn(t,e);if(!r)return{primitives:[]};const n=[],o=new we;return Et(r,o,"0",n,new Set,t,a.includeLayer),{primitives:n}}const xt=["en","zh","cs","tr"],fa={en:"EN",zh:"中",cs:"CS",tr:"TR"},ga="mlcad-html-locale",Re={en:{toolbar:{viewerTools:"Viewer tools",select:"Select",pan:"Pan",zoom:"Zoom",zoomExtents:"Zoom extents",zoomWindow:"Zoom window",zoomOriginal:"Original view",measureDistance:"Measure distance",measureAngle:"Measure angle",measureArc:"Measure arc length",measureArea:"Measure area",measureCoordinate:"Measure coordinates",clearMeasurements:"Clear measurements",measureHide:"Hide measurements",measureShow:"Show measurements",measureImport:"Import measurements",measureExport:"Export measurements",measure:"Measurement",annotation:"Review",markupCloud:"Cloud",markupCallout:"Callout",markupText:"Text",markupRect:"Rectangle",markupCircle:"Circle",markupArrow:"Arrow",markupStamp:"Stamp",markupHide:"Hide markups",markupShow:"Show markups",clearMarkups:"Clear markups",markupImport:"Import markups",markupExport:"Export markups",snap:"Object snap",layers:"Layers",layout:"Layout",language:"Language",localeEn:"English",localeZh:"中文",localeCs:"Čeština",localeTr:"Türkçe",collapse:"Collapse toolbar",expand:"Expand toolbar"},settings:{ortho:"Toggle orthogonal mode",polar:"Polar tracking angles",polarAngles:"Polar tracking angles"},drawStyle:{color:"Color",lineWeight:"Lineweight",fontSize:"Text height"},layers:{title:"Layers",close:"Close layers",showAll:"Show all",hideAll:"Hide all",zoomTo:"Zoom to {name}"},status:{ready:"Ready",zoomWindowHint:"Click two corners to zoom to a window.",measureDistanceHint:"Click two points to measure distance (object snap enabled).",measureAngleHint:"Click vertex, then two points on each arm (object snap enabled).",measureArcHint:"Click a circle or arc to measure along it, or click start, a point on the arc, then end (object snap enabled). Ctrl (⌘ on Mac) switches major/minor arc.",measureAreaHint:"Click polygon vertices; click near the first point or press Enter to finish.",measureCoordinateHint:"Click a point to read its X/Y coordinates (object snap enabled).",measureExported:"Exported {count} measurement(s).",measureImported:"Imported {count} measurement(s).",measureImportFailed:"Failed to import measurements: {error}",markupCloudHint:"Click two corners to draw a revision cloud.",markupCalloutHint:"Click the leader tip, then the text anchor.",markupTextHint:"Click a point to place text.",markupRectHint:"Click two corners to draw a rectangle.",markupCircleHint:"Click the center, then a point on the circumference.",markupArrowHint:"Click the start point, then the arrow tip.",markupStampHint:"Click to place a stamp (cycles approved / rejected / …).",markupArrowEndHint:"Click the arrow tip.",markupRectCornerHint:"Click the opposite corner.",markupCloudCornerHint:"Click the opposite corner.",markupCalloutAnchorHint:"Click the text bubble position.",markupCircleRadiusHint:"Click a point on the circumference.",markupTextPrompt:"Enter markup text",markupTextEditHint:"Type text on the canvas. Enter to finish, Esc to cancel.",markupShapeCalloutHint:"Click to place the text box (leader attaches to the shape). Esc cancels the callout.",markupDefaultLabel:"Note",markupSelected:"Selected markup: {type}",markupSelectedCount:"Selected markups: {count}",markupCount:"Markups: {count}",markupExported:"Exported {count} markup(s).",markupImported:"Imported {count} markup(s).",markupImportFailed:"Failed to import markups: {error}",distance:"Distance: {value}",coordinates:"X: {x}  Y: {y}",angle:"Angle: {value}",arcLength:"Arc length: {value}",area:"Area: {value}",lengthTotal:"Length total: {value}",areaTotal:"Area total: {value}",zoomLayer:"Zoom: {name}",loadFailed:"Failed to load drawing: {error}",noLayout:"No layout data in snapshot."}},zh:{toolbar:{viewerTools:"查看器工具",select:"选择",pan:"平移",zoom:"缩放",zoomExtents:"范围缩放",zoomWindow:"窗口缩放",zoomOriginal:"原始视口",measureDistance:"测量距离",measureAngle:"测量角度",measureArc:"测量弧长",measureArea:"测量面积",measureCoordinate:"测量坐标",clearMeasurements:"清除测量",measureHide:"隐藏测量",measureShow:"显示测量",measureImport:"导入测量",measureExport:"导出测量",measure:"测量",annotation:"审阅",markupCloud:"云线",markupCallout:"标注",markupText:"文字",markupRect:"矩形",markupCircle:"圆",markupArrow:"箭头",markupStamp:"图章",markupHide:"隐藏批注",markupShow:"显示批注",clearMarkups:"清除批注",markupImport:"导入批注",markupExport:"导出批注",snap:"对象捕捉",layers:"图层",layout:"布局",language:"语言",localeEn:"English",localeZh:"中文",localeCs:"Čeština",localeTr:"Türkçe",collapse:"收起工具栏",expand:"展开工具栏"},settings:{ortho:"切换正交模式",polar:"极轴追踪角度",polarAngles:"极轴追踪角度"},drawStyle:{color:"颜色",lineWeight:"线宽",fontSize:"字高"},layers:{title:"图层",close:"关闭图层",showAll:"全部显示",hideAll:"全部隐藏",zoomTo:"缩放到 {name}"},status:{ready:"就绪",zoomWindowHint:"点击两个角点以窗口缩放。",measureDistanceHint:"点击两点以测量距离（已启用对象捕捉）。",measureAngleHint:"依次点击顶点与两条边上的点（已启用对象捕捉）。",measureArcHint:"点击圆或圆弧可沿其测量；否则依次点击弧起点、弧上一点与弧端点（已启用对象捕捉）。锁定后按 Ctrl（Mac 为 Control 或 ⌘）可在大弧与小弧之间切换。",measureAreaHint:"依次点击多边形顶点；靠近首点或按 Enter 完成。",measureCoordinateHint:"点击一点以读取其 X/Y 坐标（已启用对象捕捉）。",measureExported:"已导出 {count} 条测量。",measureImported:"已导入 {count} 条测量。",measureImportFailed:"导入测量失败：{error}",markupCloudHint:"点击两个对角点绘制修订云线。",markupCalloutHint:"先点击引线端点，再点击文字位置。",markupTextHint:"点击一点放置文字。",markupRectHint:"点击两个对角点绘制矩形。",markupCircleHint:"先点击圆心，再点击圆周上一点。",markupArrowHint:"先点击起点，再点击箭头端点。",markupStampHint:"点击放置图章（在批准/拒绝等之间循环）。",markupArrowEndHint:"点击箭头端点。",markupRectCornerHint:"点击对角点。",markupCloudCornerHint:"点击对角点。",markupCalloutAnchorHint:"点击文字气泡位置。",markupCircleRadiusHint:"点击圆周上一点。",markupTextPrompt:"输入批注文字",markupTextEditHint:"在画布上输入文字。Enter 完成，Esc 取消。",markupShapeCalloutHint:"点击放置文本框（引线自动贴到图形）。Esc 取消引线和文本框。",markupDefaultLabel:"批注",markupSelected:"已选批注：{type}",markupSelectedCount:"已选批注：{count} 个",markupCount:"批注数：{count}",markupExported:"已导出 {count} 条批注。",markupImported:"已导入 {count} 条批注。",markupImportFailed:"导入批注失败：{error}",distance:"距离：{value}",coordinates:"X：{x}  Y：{y}",angle:"角度：{value}",arcLength:"弧长：{value}",area:"面积：{value}",lengthTotal:"长度合计：{value}",areaTotal:"面积合计：{value}",zoomLayer:"缩放：{name}",loadFailed:"无法加载图纸：{error}",noLayout:"快照中没有布局数据。"}},cs:{toolbar:{viewerTools:"Nástroje prohlížeče",select:"Výběr",pan:"Posun",zoom:"Přiblížení",zoomExtents:"Zoom na rozsah",zoomWindow:"Přiblížit oknem",zoomOriginal:"Původní pohled",measureDistance:"Změřit vzdálenost",measureAngle:"Změřit úhel",measureArc:"Změřit délku oblouku",measureArea:"Změřit plochu",measureCoordinate:"Změřit souřadnice",clearMeasurements:"Vymazat měření",measureHide:"Skrýt měření",measureShow:"Zobrazit měření",measureImport:"Importovat měření",measureExport:"Exportovat měření",measure:"Měření",annotation:"Kontrola",markupCloud:"Obláček",markupCallout:"Odkaz",markupText:"Text",markupRect:"Obdélník",markupCircle:"Kružnice",markupArrow:"Šipka",markupStamp:"Razítko",markupHide:"Skrýt poznámky",markupShow:"Zobrazit poznámky",clearMarkups:"Vymazat poznámky",markupImport:"Importovat poznámky",markupExport:"Exportovat poznámky",snap:"Uchopení objektů",layers:"Hladiny",layout:"Rozvržení",language:"Jazyk",localeEn:"English",localeZh:"中文",localeCs:"Čeština",localeTr:"Türkçe",collapse:"Sbalit panel nástrojů",expand:"Rozbalit panel nástrojů"},settings:{ortho:"Přepnout ortogonální režim",polar:"Úhly polárního trasování",polarAngles:"Úhly polárního trasování"},drawStyle:{color:"Barva",lineWeight:"Tloušťka čáry",fontSize:"Výška textu"},layers:{title:"Hladiny",close:"Zavřít hladiny",showAll:"Zobrazit vše",hideAll:"Skrýt vše",zoomTo:"Přiblížit na {name}"},status:{ready:"Připraveno",zoomWindowHint:"Klikněte na dva rohy pro přiblížení oknem.",measureDistanceHint:"Klikněte na dva body pro změření vzdálenosti (uchopení objektů zapnuto).",measureAngleHint:"Klikněte na vrchol, poté na dva body na každém rameni (uchopení objektů zapnuto).",measureArcHint:"Klikněte na kružnici nebo oblouk pro měření podél něj, nebo klikněte na začátek, bod na oblouku a konec (uchopení objektů zapnuto). Ctrl (⌘ na Macu) přepíná velký/malý oblouk.",measureAreaHint:"Klikejte na vrcholy mnohoúhelníku; dokončete kliknutím poblíž prvního bodu nebo stiskem Enter.",measureCoordinateHint:"Klikněte na bod pro zobrazení jeho souřadnic X/Y (uchopení objektů zapnuto).",measureExported:"Exportováno {count} měření.",measureImported:"Importováno {count} měření.",measureImportFailed:"Import měření selhal: {error}",markupCloudHint:"Klikněte na dva rohy pro nakreslení obláčku.",markupCalloutHint:"Klikněte na hrot vodítka a poté na kotvu textu.",markupTextHint:"Klikněte pro umístění textu.",markupRectHint:"Klikněte na dva rohy pro nakreslení obdélníku.",markupCircleHint:"Klikněte na střed a poté na bod na kružnici.",markupArrowHint:"Klikněte na začátek a poté na hrot šipky.",markupStampHint:"Klikněte pro umístění razítka (schváleno / zamítnuto / …).",markupArrowEndHint:"Klikněte na hrot šipky.",markupRectCornerHint:"Klikněte na protilehlý roh.",markupCloudCornerHint:"Klikněte na protilehlý roh.",markupCalloutAnchorHint:"Klikněte na pozici textové bubliny.",markupCircleRadiusHint:"Klikněte na bod na kružnici.",markupTextPrompt:"Zadejte text poznámky",markupTextEditHint:"Pište text přímo na plátno. Enter dokončí, Esc zruší.",markupShapeCalloutHint:"Klikněte pro umístění textového pole (vodítko se připojí k tvaru). Esc zruší odkaz.",markupDefaultLabel:"Poznámka",markupSelected:"Vybraná poznámka: {type}",markupSelectedCount:"Vybrané poznámky: {count}",markupCount:"Poznámky: {count}",markupExported:"Exportováno {count} poznámek.",markupImported:"Importováno {count} poznámek.",markupImportFailed:"Import poznámek selhal: {error}",distance:"Vzdálenost: {value}",coordinates:"X: {x}  Y: {y}",angle:"Úhel: {value}",arcLength:"Délka oblouku: {value}",area:"Plocha: {value}",lengthTotal:"Celková délka: {value}",areaTotal:"Celková plocha: {value}",zoomLayer:"Zoom: {name}",loadFailed:"Nepodařilo se načíst výkres: {error}",noLayout:"Snímek neobsahuje data rozvržení."}},tr:{toolbar:{viewerTools:"Görüntüleyici araçları",select:"Seç",pan:"Kaydır",zoom:"Yakınlaştır",zoomExtents:"Sınırlara yakınlaştır",zoomWindow:"Pencere Yakınlaştır",zoomOriginal:"Orijinal görünüm",measureDistance:"Mesafe ölç",measureAngle:"Açı ölç",measureArc:"Yay uzunluğu ölç",measureArea:"Alan ölç",measureCoordinate:"Koordinat ölç",clearMeasurements:"Ölçümleri temizle",measureHide:"Ölçümleri gizle",measureShow:"Ölçümleri göster",measureImport:"Ölçümleri içe aktar",measureExport:"Ölçümleri dışa aktar",measure:"Ölçüm",annotation:"İnceleme",markupCloud:"Bulut",markupCallout:"Çağrı",markupText:"Metin",markupRect:"Dikdörtgen",markupCircle:"Daire",markupArrow:"Ok",markupStamp:"Damga",markupHide:"İşaretlemeleri gizle",markupShow:"İşaretlemeleri göster",clearMarkups:"İşaretlemeleri temizle",markupImport:"İşaretlemeleri içe aktar",markupExport:"İşaretlemeleri dışa aktar",snap:"Nesne Yakalama",layers:"Katmanlar",layout:"Düzen",language:"Dil",localeEn:"English",localeZh:"中文",localeCs:"Čeština",localeTr:"Türkçe",collapse:"Araç çubuğunu daralt",expand:"Araç çubuğunu genişlet"},settings:{ortho:"Dik modu aç/kapat",polar:"Kutupsal izleme açıları",polarAngles:"Kutupsal izleme açıları"},drawStyle:{color:"Renk",lineWeight:"Çizgi kalınlığı",fontSize:"Yazı yüksekliği"},layers:{title:"Katmanlar",close:"Katmanları kapat",showAll:"Tümünü göster",hideAll:"Tümünü gizle",zoomTo:"{name} katmanına yakınlaştır"},status:{ready:"Hazır",zoomWindowHint:"Pencere yakınlaştırmak için iki köşeyi tıklayın.",measureDistanceHint:"Mesafe ölçmek için iki nokta tıklayın (nesne yakalama etkin).",measureAngleHint:"Önce köşe noktasını, sonra her koldan birer nokta tıklayın (nesne yakalama etkin).",measureArcHint:"Ölçmek için bir çember veya yaya tıklayın; ya da yay başlangıcı, yay üzerindeki bir nokta ve yay sonunu tıklayın (nesne yakalama etkin). Ctrl (Mac’te ⌘) büyük/küçük yay arasında geçiş yapar.",measureAreaHint:"Çokgen köşelerini tıklayın; bitirmek için ilk noktanın yakınına tıklayın veya Enter’a basın.",measureCoordinateHint:"X/Y koordinatlarını okumak için bir nokta tıklayın (nesne yakalama etkin).",measureExported:"{count} ölçüm dışa aktarıldı.",measureImported:"{count} ölçüm içe aktarıldı.",measureImportFailed:"Ölçüm içe aktarılamadı: {error}",markupCloudHint:"Revizyon bulutu çizmek için iki köşe tıklayın.",markupCalloutHint:"Önce lider ucunu, sonra metin konumunu tıklayın.",markupTextHint:"Metin yerleştirmek için bir nokta tıklayın.",markupRectHint:"Dikdörtgen çizmek için iki köşe tıklayın.",markupCircleHint:"Önce merkezi, sonra çevre üzerindeki bir noktayı tıklayın.",markupArrowHint:"Önce başlangıcı, sonra ok ucunu tıklayın.",markupStampHint:"Damga yerleştirmek için tıklayın (onaylandı / reddedildi / …).",markupArrowEndHint:"Ok ucunu tıklayın.",markupRectCornerHint:"Karşı köşeyi tıklayın.",markupCloudCornerHint:"Karşı köşeyi tıklayın.",markupCalloutAnchorHint:"Metin balonu konumunu tıklayın.",markupCircleRadiusHint:"Çevre üzerindeki bir noktayı tıklayın.",markupTextPrompt:"İşaretleme metnini girin",markupTextEditHint:"Metni tuval üzerinde yazın. Enter ile bitirin, Esc ile iptal edin.",markupShapeCalloutHint:"Metin kutusunu yerleştirmek için tıklayın (lider şekle bağlanır). Esc çağrıyı iptal eder.",markupDefaultLabel:"Not",markupSelected:"Seçili işaretleme: {type}",markupSelectedCount:"Seçili işaretlemeler: {count}",markupCount:"İşaretlemeler: {count}",markupExported:"{count} işaretleme dışa aktarıldı.",markupImported:"{count} işaretleme içe aktarıldı.",markupImportFailed:"İşaretleme içe aktarılamadı: {error}",distance:"Mesafe: {value}",coordinates:"X: {x}  Y: {y}",angle:"Açı: {value}",arcLength:"Yay uzunluğu: {value}",area:"Alan: {value}",lengthTotal:"Toplam uzunluk: {value}",areaTotal:"Toplam alan: {value}",zoomLayer:"Yakınlaştır: {name}",loadFailed:"Çizim yüklenemedi: {error}",noLayout:"Anlık görüntüde yerleşim verisi yok."}}};function Le(t){if(t==null||t==="")return null;const e=t.toLowerCase().replace("_","-");for(const a of xt)if(e===a||e.startsWith(`${a}-`))return a;return null}function Gn(){if(typeof navigator>"u")return"en";const t=[...navigator.languages??[],navigator.language].filter(Boolean);for(const e of t){const a=Le(e);if(a)return a}return"en"}function Qn(){if(typeof localStorage<"u")try{const t=localStorage.getItem(ga),e=Le(t);if(e)return e}catch{}return Gn()}function Ze(t,e){const a=e.split(".");let r=t;for(const n of a){if(r==null||typeof r=="string")return;r=r[n]}return typeof r=="string"?r:void 0}function Jn(t,e){return e?t.replace(/\{(\w+)\}/g,(a,r)=>{const n=e[r];return n!=null?String(n):`{${r}}`}):t}class Ci{constructor(e){this._onChange=null,this._locale=e??Qn()}get locale(){return this._locale}get localeBadge(){return fa[this._locale]}setOnChange(e){this._onChange=e}t(e,a){const r=Ze(Re[this._locale],e)??Ze(Re.en,e)??e;return Jn(r,a)}toggleLocale(){const e=xt.indexOf(this._locale),a=xt[(e+1)%xt.length];return this.setLocale(a),a}setLocale(e){var a;if(this._locale!==e){this._locale=e,typeof document<"u"&&(document.documentElement.lang=e);try{typeof localStorage<"u"&&localStorage.setItem(ga,e)}catch{}this.applyToDocument(),(a=this._onChange)==null||a.call(this)}}applyToDocument(e){if(typeof document>"u")return;const a=e??document;document.documentElement.lang=this._locale,a.querySelectorAll("[data-i18n-text]").forEach(o=>{const i=o.dataset.i18nKey;i&&(o.textContent=this.t(i))}),a.querySelectorAll("[data-i18n-attr]").forEach(o=>{var i;const l=o.dataset.i18nKey,s=((i=o.dataset.i18nAttr)==null?void 0:i.split(/\s+/))??[];if(!l||s.length===0)return;const d=this.t(l);for(const c of s)o.setAttribute(c,d)});const r=document.getElementById("mlcad-lang-badge");r&&(r.textContent=this.localeBadge);const n=document.getElementById("mlcad-lang-btn");n&&(n.setAttribute("title",this.t("toolbar.language")),n.setAttribute("aria-label",this.t("toolbar.language")))}}const qn='<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20" aria-hidden="true"><path fill="currentColor" d="M9.3333 14.125 5.875 10.6667V14.125H9.3333Zm4.7917-3.4583-3.4583 3.4583H14.125V10.6667ZM10.6667 5.875 14.125 9.3333V5.875H10.6667ZM5.875 9.3333 9.3333 5.875H5.875V9.3333Zm9.2083 5.475c1.2333-1.3 1.9083-3.0333 1.9083-4.825-.0083-3.325-2.35-6.1833-5.6083-6.8417C8.125 2.4833 4.85 4.2 3.55 7.2583c-1.3 3.0583-.275 6.6083 2.4583 8.5 2.725 1.8917 6.4167 1.6 8.8167-.6917.0917-.0833.175-.175.2583-.2583Zm1.2583.5917 2.575 2.575c-.3167.3167-.625.625-.9417.9417-.8583-.8583-1.7167-1.7167-2.575-2.575-3.4083 2.9-8.4917 2.5917-11.525-.6917S.9417 7.275 4.1083 4.1083C7.2667.9417 12.3667.8417 15.65 3.875s3.5917 8.1167.6917 11.525Z"/></svg>',to='<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20" aria-hidden="true"><path fill="currentColor" d="M10.4379 15.2979h.002l4.86-4.86-9.722-4.86 4.86 9.72Zm7.562-5.298-3.434 3.434 3.2 3.2-1.132 1.132-3.2-3.2-3.434 3.434-7.6-15.6 15.6 7.6Z"/></svg>',eo='<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20" aria-hidden="true"><path fill="currentColor" d="M15.08 12.8537l.002-.002V5.5897c0-.422-.652-.414-.652 0v3.466c0 .938-1.482.95-1.482 0v-4.83c0-.414-.6381-.414-.6381 0h-.014v4.83c.014.95-1.482.95-1.482 0V3.4437c0-.42-.638-.414-.638 0v5.612c0 .95-1.494.95-1.494 0V4.2317c0-.408-.64-.42-.64 0v6.756c0 .802-1.094 1.088-1.494.388-.26-.446-.518-.892-.776-1.338-.338-.482-1.1-.15-.794.38.326.566.652 1.132.978 1.698.006.012.014.026.02.04.552.946 1.106 1.89 1.658 2.834.19.3.422.578.666.802h-.006c.672.61 1.528.964 2.418 1.052.888.06 1.7921-.124 2.5601-.612.3-.19.572-.416.816-.68.326-.368.57-.776.734-1.204.176-.482.258-.97.258-1.494Zm-.91-8.608-.004-.002c.958-.38 2.058.244 2.058 1.346v7.266c0 .652-.108 1.29-.332 1.894-.216.564-.53 1.114-.964 1.576-.318.34-.666.632-1.046.884-.978.612-2.1461.862-3.2601.774-1.128-.102-2.228-.564-3.098-1.352-.326-.292-.612-.646-.87-1.034-.558-.96-1.114-1.92-1.672-2.88l-.012-.028c-.326-.568-.652-1.138-.978-1.706-.59-1.018.068-2.186 1.156-2.336.536-.074 1.126.116 1.562.72.026.028.04.062.054.096.04.074.082.146.122.218V4.2337c0-1.176 1.244-1.788 2.202-1.278.42-1.278 2.378-1.264 2.792-.014.9721-.51 2.2221.102 2.2221 1.284v.06c.022-.014.046-.026.068-.04Z"/></svg>',ao='<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20" aria-hidden="true"><path fill="currentColor" d="M3.75 9.25h12.5v1.5H3.75v-1.5ZM2.25 6.5h1.5v7h-1.5v-7ZM16.25 6.5h1.5v7h-1.5v-7Z"/></svg>',ro='<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20" aria-hidden="true"><polygon fill="currentColor" points="5.74 7.13 7 9.5 4.15 7.72 3.2 7.12 3 7 7 4.5 6.17 6.05 5.67 7 5.74 7.13"/><polygon fill="currentColor" points="16 12.5 13.5 16.5 12.66 15.15 11.92 13.97 11 12.5 12 13.03 12.98 13.55 13.5 13.83 16 12.5"/><rect fill="currentColor" x="2" y="2.5" width="1" height="15"/><rect fill="currentColor" x="3" y="16.5" width="15" height="1"/><path fill="currentColor" d="M14,13c0,.18,0,.37,0,.55v0a6.82,6.82,0,0,1-.32,1.57l-.74-1.18L13,13.5c0-.14,0-.31,0-.47v0a6,6,0,0,0-6-6,6.74,6.74,0,0,0-1.26.13l-.29.07a5.61,5.61,0,0,0-1.3.52l-1-.6a7.07,7.07,0,0,1,2-.88,6.78,6.78,0,0,1,1-.19A7.7,7.7,0,0,1,7,6a7,7,0,0,1,7,7Z"/></svg>',no='<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20" aria-hidden="true"><rect fill="currentColor" x="2" y="16" width="2" height="2"/><rect fill="currentColor" x="16" y="2" width="2" height="2"/><rect fill="currentColor" x="6.1" y="6.11" width="2" height="2"/><path fill="currentColor" d="M4.99,9.11c-1.15,1.74-1.94,3.74-2.24,5.89h.81c.32-2.18,1.16-4.18,2.39-5.89h-.96Z"/><path fill="currentColor" d="M9.1,5v.96c1.71-1.23,3.72-2.07,5.9-2.4v-.81c-2.16,.3-4.16,1.09-5.9,2.24Z"/></svg>',oo='<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20" aria-hidden="true"><path fill="currentColor" fill-rule="evenodd" d="M4 4h12v12H4V4Zm1.5 1.5v9h9v-9h-9Z"/><circle fill="currentColor" cx="4" cy="4" r="1.5"/><circle fill="currentColor" cx="16" cy="4" r="1.5"/><circle fill="currentColor" cx="4" cy="16" r="1.5"/><circle fill="currentColor" cx="16" cy="16" r="1.5"/></svg>',io='<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20" aria-hidden="true"><path fill="currentColor" d="M9.25 2h1.5v5.25H16v1.5h-5.25V16h-1.5v-7.25H4v-1.5h5.25V2Z"/><circle fill="currentColor" cx="10" cy="10" r="1.75"/></svg>';function $t(...t){return`<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 1024 1024" aria-hidden="true">${t.map(e=>`<path fill="currentColor" d="${e}"/>`).join("")}</svg>`}const lo='<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 512 512" aria-hidden="true"><path fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="32" d="m434.8 137.65-149.36-68.1c-16.19-7.4-42.69-7.4-58.88 0L77.3 137.65c-17.6 8-17.6 21.09 0 29.09l148 67.5c16.89 7.7 44.69 7.7 61.58 0l148-67.5c17.52-8 17.52-21.1-.08-29.09M160 308.52l-82.7 37.11c-17.6 8-17.6 21.1 0 29.1l148 67.5c16.89 7.69 44.69 7.69 61.58 0l148-67.5c17.6-8 17.6-21.1 0-29.1l-79.94-38.47"/><path fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="32" d="m160 204.48-82.8 37.16c-17.6 8-17.6 21.1 0 29.1l148 67.49c16.89 7.7 44.69 7.7 61.58 0l148-67.49c17.7-8 17.7-21.1.1-29.1L352 204.48"/></svg>',so='<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20" aria-hidden="true"><rect x="2" y="2" width="8.2" height="5" rx="1.2" fill="currentColor"/><rect x="2" y="8.5" width="8.2" height="9.5" rx="1.2" fill="currentColor"/><rect x="11.7" y="2" width="6.3" height="10" rx="1.2" fill="currentColor"/><rect x="11.7" y="13.5" width="6.3" height="4.5" rx="1.2" fill="currentColor"/></svg>',co='<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20" aria-hidden="true"><path fill="currentColor" d="M15.0833 14.8083c1.2333-1.3 1.9083-3.0333 1.9083-4.825-.0083-3.325-2.35-6.1833-5.6083-6.8417C8.125 2.4833 4.85 4.2 3.55 7.2583c-1.3 3.0583-.275 6.6083 2.4583 8.5 2.725 1.8917 6.4167 1.6 8.8167-.6917.0917-.0833.175-.175.2583-.2583Zm1.2583.5917 2.575 2.575c-.3167.3167-.625.625-.9417.9417-.8583-.8583-1.7167-1.7167-2.575-2.575-3.4083 2.9-8.4917 2.5917-11.525-.6917C.8417 12.3667.9417 7.275 4.1083 4.1083 7.2667.9417 12.3667.8417 15.65 3.875s3.5917 8.1167.6917 11.525Zm-3.55-2.6083V7.2083H7.2083v5.5833h5.5833ZM5.875 5.875h8.25v8.25H5.875V5.875Z"/></svg>',uo='<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20" aria-hidden="true"><path fill="currentColor" d="M10 2.6 18 9.8h-2.1V17h-4.4v-4.4H8.5V17H4.1V9.8H2L10 2.6Zm0 1.8L5.3 9.8V15.8h2V11.4h5.4v4.4h2V9.8L10 4.4Z"/></svg>',mo='<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20" aria-hidden="true"><path fill="currentColor" d="M10.09 3.53 16.09 6.97 10.09 10.29 4.18 7 10.09 3.56M10.09 2.4 2.17 7 3.31 7.65 10.09 11.45 17 7.62 18.17 7 10.08 2.37 10.09 2.4Z"/><path fill="currentColor" d="M10.25 14.83 18.17 10.22 17 9.57 10.22 13.57 3.32 9.59 2.17 10.22 10.25 14.83Z"/><path fill="currentColor" d="M10.25 17.63 18.17 13 17 12.37 10.22 16.37 3.32 12.38 2.17 13 10.25 17.63Z"/></svg>',po='<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20" aria-hidden="true"><path fill="currentColor" d="M10.09 5.15 16.09 8.59 10.09 11.91 4.18 8.59 10.09 5.15ZM10.09 4 2.17 8.61 3.31 9.25 10.09 13.06 17 9.24 18.16 8.61 10.08 4 10.09 4Z"/><path fill="currentColor" d="M10.25 16.46 18.17 11.85 17 11.2 10.22 15.2 3.32 11.21 2.17 11.85 10.25 16.46Z"/><path fill="currentColor" d="M3.5 3.5 16.5 16.5" stroke="currentColor" stroke-width="1.25" stroke-linecap="round"/></svg>',ho='<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" aria-hidden="true"><path fill="currentColor" fill-rule="evenodd" d="M2.25 2.25h4.878v4.878H2.25V2.25Zm.978.978v2.924h2.924V3.228H3.228Z"/><path fill="currentColor" d="M5.175 20.773V7.128H4.204V21.75H21.75V4.204H7.128v.971H20.773v15.598H5.175Z"/></svg>',fo='<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20" aria-hidden="true"><path fill="currentColor" fill-rule="evenodd" d="M3 2H2v16h16v-1H8v-5H3V2zm0 11v4h4v-4H3z"/></svg>',go='<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20" aria-hidden="true"><path fill="currentColor" fill-rule="evenodd" d="M16.98 11L18.5 11L18.5 10L16.98 10C16.86 8.13 16.05 6.44 14.8 5.2L16.88 2.83L16.12 2.17L14.05 4.54C12.79 3.57 11.21 3 9.5 3C5.36 3 2 6.36 2 10.5C2 14.64 5.36 18 9.5 18C13.47 18 16.73 14.91 16.98 11ZM15.98 10C15.86 8.43 15.18 7.01 14.14 5.95L10.6 10L15.98 10ZM13.39 5.29L8.4 11L15.98 11C15.73 14.36 12.92 17 9.5 17C5.91 17 3 14.09 3 10.5C3 6.91 5.91 4 9.5 4C10.96 4 12.31 4.48 13.39 5.29Z"/></svg>',bo='<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20" aria-hidden="true"><path fill="currentColor" d="M10 6.5 5.5 11h9L10 6.5Z"/></svg>',wo='<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20" aria-hidden="true"><path fill="currentColor" fill-rule="evenodd" d="M1.5 7h17v6h-17ZM4.25 7h1v2.5h-1ZM7.5 7h.75v1.5H7.5ZM10.25 7h1v2.5h-1ZM13.5 7h.75v1.5H13.5ZM16.25 7h1v2.5h-1Z"/></svg>',yo='<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20" fill="none" aria-hidden="true"><g fill="none" stroke="currentColor" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"><path d="M12.4 3.25H5.5A2.25 2.25 0 0 0 3.25 5.5v9A2.25 2.25 0 0 0 5.5 16.75h9A2.25 2.25 0 0 0 16.75 14.5V8.6"/><g transform="rotate(45 13.2 6.7)"><rect x="11.7" y="1.55" width="3" height="7.45" rx="1.45"/><path d="M11.7 3.2h3"/><path d="M11.7 9 13.2 12.15 14.7 9"/><rect x="12.8" y="7.05" width="0.8" height="1.2" rx="0.4"/></g></g></svg>',vo='<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 40 40" aria-hidden="true"><path d="M35.29108325386048,15C37.125226253860475,12.309847399999999,36.958467253860476,9.335468299999999,34.79083925386047,7.0296237C32.62321825386047,4.53162557,29.455148253860475,4.33947164,27.120786253860473,6.4531626C24.953160253860474,4.53162512,21.951835253860473,4.53162512,19.950952253860475,6.4531626C17.783325253860475,4.53162512,14.782001253860473,4.53162512,12.781115753860474,6.4531626C10.446751353860474,4.3394711,7.111944153860474,4.53162512,4.944319853860474,7.0296228C2.9434360238604738,9.335468299999999,2.7767065138604736,12.3098459,4.610849853860474,15C2.9434466638604735,17.497998000000003,2.9434466638604735,22.694155,4.610849853860474,25C2.7767063338604734,27.690151,2.9434360238604738,30.664532,5.111060153860474,32.970377C7.278683453860474,35.468374,10.446751353860474,35.660526000000004,12.781114853860474,33.546839C14.013456253860474,34.639273,15.515264253860474,35.110636,16.949504253860475,34.960924L17.384031253860474,33.278093Q15.695761253860473,33.903341,13.886703253860473,32.299662C13.250737453860474,31.735897,12.292436853860474,31.740944,11.662447253860474,32.311378000000005Q10.430524553860474,33.426844,9.001459353860474,33.325500000000005Q7.535682953860474,33.22155,6.369870153860473,31.878052C6.355376453860474,31.861349,6.3405518538604735,31.844936,6.325405153860474,31.828825Q3.8021785638604735,29.144703,5.9879074538604735,25.938877C6.383556653860474,25.358576,6.372957753860474,24.592518,5.961405753860474,24.023384Q5.026963953860474,22.731148,5.026963953860474,20.072058Q5.026963953860474,17.378647,5.997069853860474,15.925296C6.374311253860474,15.360136,6.3706860538604735,14.6225471,5.987907653860473,14.0611229Q3.8149851238604735,10.8740788,6.203129753860473,8.1219487Q7.366510153860474,6.7812542,8.914587753860474,6.6747454Q10.427746053860474,6.570639,11.662447253860474,7.6886220000000005C12.311335753860474,8.2761691,13.304180353860474,8.261601,13.935551253860474,7.655268899999999Q16.267856253860472,5.41545445,18.845364253860474,7.700341C19.495353253860472,8.2765367,20.478888253860475,8.2569213,21.105388253860475,7.6552677Q23.437688253860475,5.41545364,26.015201253860475,7.7003412C26.651166253860474,8.2641058,27.609466253860475,8.2590561,28.239455253860474,7.6886208Q29.471375253860472,6.5731552,30.900443253860473,6.6745013Q32.36622125386047,6.7784510000000004,33.532031253860474,8.1219487C33.546527253860475,8.1386516,33.56135125386047,8.1550651,33.576497253860474,8.1711793Q36.099740253860475,10.8553152,33.91402525386047,14.0611248C33.75512825386048,14.2941837,33.65797725386047,14.5637598,33.631677253860474,14.8446045Q33.79909825386048,14.8235569,33.975852253860474,14.8257475Q34.933356253860474,14.8375826,35.59989625386047,15.52399L35.66519325386047,15.591235C35.550366253860474,15.381103,35.425664253860475,15.183288,35.29108325386048,15ZM35.966336253860476,26.182783L34.676930253860476,27.463251Q35.393826253860475,29.732494,33.53202725386048,31.878052C33.517697253860476,31.894566,33.50369225386048,31.911364,33.490022253860474,31.928431Q32.454415253860475,33.221331,30.964744253860474,33.325373Q30.004237253860474,33.392458000000005,29.149894253860474,32.951971L27.929481253860473,34.163925C30.176993253860473,35.589745,33.01140925386048,35.191897999999995,34.790837253860474,32.970377C36.64204925386047,30.837021,37.033868253860476,28.496355,35.966336253860476,26.182783Z" fill="currentColor"></path><path d="M18.34860205776758,36.08124306176758L19.51047686176758,31.58106006176758C19.601237461767578,31.22952606176758,20.042625161767578,31.109528061767577,20.301013961767577,31.36614306176758L23.55426316176758,34.59704206176758C23.808096861767577,34.84913206176758,23.69668006176758,35.27922206176758,23.35186196176758,35.378357061767574L18.936737541767577,36.647640061767575C18.586058351767576,36.74845306176758,18.257926098767577,36.43245106176758,18.34860205776758,36.08124306176758ZM21.15253496176758,30.02545706176758L24.88609836176758,33.73337206176758C25.07032536176758,33.91633406176758,25.36901856176758,33.91633406176758,25.553247461767576,33.73337206176758L36.52849006176758,22.833516161767577C36.710360061767574,22.65290166176758,36.71303206176758,22.36089566176758,36.534500061767574,22.17702746176758L32.941582061767576,18.47663122176758C32.75926806176758,18.288860715767576,32.45763906176758,18.28513235576758,32.27067206176758,18.46833832176758L21.15478106176758,29.36067706176758C20.96843986176758,29.543269061767578,20.96743176176758,29.84162706176758,21.15253496176758,30.02545706176758Z" fill="currentColor"></path></svg>',ko=$t("M160 826.88 273.536 736H800a64 64 0 0 0 64-64V256a64 64 0 0 0-64-64H224a64 64 0 0 0-64 64zM296 800 147.968 918.4A32 32 0 0 1 96 893.44V256a128 128 0 0 1 128-128h576a128 128 0 0 1 128 128v416a128 128 0 0 1-128 128z","M352 512h320q32 0 32 32t-32 32H352q-32 0-32-32t32-32m0-192h320q32 0 32 32t-32 32H352q-32 0-32-32t32-32"),xo='<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20" aria-hidden="true"><path fill="currentColor" fill-rule="evenodd" d="M10 2.2 17.2 17.6h-2.8l-1.45-4.2H7.05L5.6 17.6H2.8L10 2.2Zm0 4.3L8.2 11.2h3.6L10 6.5Z"/></svg>',Co='<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20" aria-hidden="true"><path d="M1.666717529296875,15.833333L1.666717529296875,4.1666666C1.666717529296875,3.24619204,2.412909569296875,2.5,3.333384129296875,2.5L16.666717529296875,2.5C17.587192529296875,2.5,18.333383529296874,3.24619204,18.333383529296874,4.1666666L18.333383529296874,9.127090500000001L17.500050529296875,8.268899000000001L17.500050529296875,4.1666666Q17.500050529296875,3.33333331,16.666717529296875,3.33333331L3.333384129296875,3.33333331Q2.500050839296875,3.33333331,2.500050839296875,4.1666666L2.500050839296875,15.833333Q2.500050839296875,16.666666,3.333384129296875,16.666666L8.404951129296876,16.666666L8.189774029296874,17.5L3.333384129296875,17.5C2.412909569296875,17.5,1.666717529296875,16.753808,1.666717529296875,15.833333ZM13.575839529296875,17.5L16.666717529296875,17.5C17.587192529296875,17.5,18.333383529296874,16.753808,18.333383529296874,15.833333L18.333383529296874,12.775434L17.500050529296875,13.602991L17.500050529296875,15.833333Q17.500050529296875,16.666666,16.666717529296875,16.666666L14.414989529296875,16.666666L13.575839529296875,17.5Z" fill="currentColor"></path><path d="M9.174291491940625,18.04064271171875L9.755228874140625,15.79055121171875C9.800609174140625,15.61478421171875,10.021303054140626,15.55478481171875,10.150497434140625,15.683092611718749L11.777121994140625,17.29854201171875C11.904038894140625,17.42458721171875,11.848330494140626,17.639632211718748,11.675921394140625,17.68919941171875L9.468359234140625,18.32384111171875C9.293019634140625,18.37424751171875,9.128953513140624,18.216246611718752,9.174291491940625,18.04064271171875ZM10.576257894140625,15.012749711718751L12.443039694140625,16.86670681171875C12.535153194140625,16.95818801171875,12.684499694140625,16.95818801171875,12.776614194140624,16.86670681171875L18.264235494140625,11.41677901171875C18.355170294140628,11.32647181171875,18.356506394140624,11.18046881171875,18.267240494140623,11.08853471171875L16.470781294140625,9.23833659271875C16.379624394140624,9.14445133871875,16.228809794140624,9.14258715871875,16.135326394140627,9.23419014371875L10.577380994140626,14.68035941171875C10.484210394140625,14.77165551171875,10.483706394140626,14.92083451171875,10.576257894140625,15.012749711718751Z" fill="currentColor"></path></svg>',Ao='<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20" aria-hidden="true"><path d="M17.366041494140624,8.13321261171875C16.667592494140624,4.38473101171875,13.396319494140625,1.66668701171875,9.583322994140625,1.66668701171875C5.211068394140625,1.66668701171875,1.666656494140625,5.21109891171875,1.666656494140625,9.58335351171875C1.6666564941406257,13.42974001171875,4.431342794140625,16.71955701171875,8.220290194140624,17.381800011718752L8.429374694140625,16.57206001171875C5.009032494140625,16.00730701171875,2.499989804140625,13.05000701171875,2.499989804140625,9.58335351171875C2.499989804140625,5.67133621171875,5.671305694140625,2.50002032171875,9.583322994140625,2.50002032171875C12.822601494140624,2.50002032171875,15.649155494140626,4.69743511171875,16.447924494140626,7.83668611171875Q16.522337494140626,7.82859321171875,16.600395494140624,7.82956071171875Q17.046328494140624,7.83507251171875,17.366041494140624,8.13321261171875Z" fill="currentColor"></path><path d="M9.174291491940625,18.04064271171875L9.755228874140625,15.79055121171875C9.800609174140625,15.61478421171875,10.021303054140626,15.55478481171875,10.150497434140625,15.683092611718749L11.777121994140625,17.29854201171875C11.904038894140625,17.42458721171875,11.848330494140626,17.639632211718748,11.675921394140625,17.68919941171875L9.468359234140625,18.32384111171875C9.293019634140625,18.37424751171875,9.128953513140624,18.216246611718752,9.174291491940625,18.04064271171875ZM10.576257894140625,15.012749711718751L12.443039694140625,16.86670681171875C12.535153194140625,16.95818801171875,12.684499694140625,16.95818801171875,12.776614194140624,16.86670681171875L18.264235494140625,11.41677901171875C18.355170294140628,11.32647181171875,18.356506394140624,11.18046881171875,18.267240494140623,11.08853471171875L16.470781294140625,9.23833659271875C16.379624394140624,9.14445133871875,16.228809794140624,9.14258715871875,16.135326394140627,9.23419014371875L10.577380994140626,14.68035941171875C10.484210394140625,14.77165551171875,10.483706394140626,14.92083451171875,10.576257894140625,15.012749711718751Z" fill="currentColor"></path></svg>',Mo=$t("M754.752 480H160a32 32 0 1 0 0 64h594.752L521.344 777.344a32 32 0 0 0 45.312 45.312l288-288a32 32 0 0 0 0-45.312l-288-288a32 32 0 1 0-45.312 45.312z"),zo=$t("M624 475.968V640h144a128 128 0 0 1 128 128H128a128 128 0 0 1 128-128h144V475.968a192 192 0 1 1 224 0M128 896v-64h768v64z"),De=$t("M160 256H96a32 32 0 0 1 0-64h256V95.936a32 32 0 0 1 32-32h256a32 32 0 0 1 32 32V192h256a32 32 0 1 1 0 64h-64v672a32 32 0 0 1-32 32H192a32 32 0 0 1-32-32zm448-64v-64H416v64zM224 896h576V256H224zm192-128a32 32 0 0 1-32-32V416a32 32 0 0 1 64 0v320a32 32 0 0 1-32 32m192 0a32 32 0 0 1-32-32V416a32 32 0 0 1 64 0v320a32 32 0 0 1-32 32"),Lo='<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20" fill="none" aria-hidden="true"><path stroke="currentColor" stroke-width="1.5" stroke-linejoin="round" stroke-linecap="round" d="M4.5 2h6.4L15.5 6.6V16.5A1.5 1.5 0 0 1 14 18H4.5A1.5 1.5 0 0 1 3 16.5V3.5A1.5 1.5 0 0 1 4.5 2z"/><path stroke="currentColor" stroke-width="1.5" stroke-linejoin="round" stroke-linecap="round" d="M10.9 2v4.6h4.6"/><path stroke="currentColor" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round" d="M10 5.8v6M7.2 9.6 10 12.5l2.8-2.9"/></svg>',Ho='<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20" fill="none" aria-hidden="true"><path stroke="currentColor" stroke-width="1.5" stroke-linejoin="round" stroke-linecap="round" d="M15.5 2H9.1L4.5 6.6V16.5A1.5 1.5 0 0 0 6 18h9.5A1.5 1.5 0 0 0 17 16.5V3.5A1.5 1.5 0 0 0 15.5 2z"/><path stroke="currentColor" stroke-width="1.5" stroke-linejoin="round" stroke-linecap="round" d="M9.1 2v4.6H4.5"/><path stroke="currentColor" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round" d="M10 14.2V8M7.2 10.4 10 7.5l2.8 2.9"/></svg>',So='<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 1024 1024" aria-hidden="true"><path fill="currentColor" d="M512 160c320 0 512 352 512 352S832 864 512 864 0 512 0 512s192-352 512-352m0 64c-225.28 0-384.128 208.064-436.8 288 52.608 79.872 211.456 288 436.8 288 225.28 0 384.128-208.064 436.8-288-52.608-79.872-211.456-288-436.8-288m0 64a224 224 0 1 1 0 448 224 224 0 0 1 0-448m0 64a160.19 160.19 0 0 0-160 160c0 88.192 71.744 160 160 160s160-71.808 160-160-71.744-160-160-160"/></svg>',g={select:to,pan:eo,zoomExtent:qn,measureDistance:ao,measureAngle:ro,measureArc:no,measureArea:oo,measureCoordinate:io,clearMeasurements:De,layer:lo,layout:so,zoomWindow:co,zoomOriginal:uo,layerOn:mo,layerOff:po,osnap:ho,orthoMode:fo,polarTracking:go,chevronUp:bo,measure:wo,annotation:yo,markupCloud:vo,markupCallout:ko,markupText:xo,markupRect:Co,markupCircle:Ao,markupArrow:Mo,markupStamp:zo,markupImport:Lo,markupExport:Ho,markupShow:So,clearMarkups:De};function b(t,e,a){const r=Object.entries(a).map(([n,o])=>`${n}="${Wt(o)}"`).join(" ");return`<button type="button" class="mlcad-tool-btn" title="${Wt(e)}" aria-label="${Wt(e)}" ${r}>${t}</button>`}function Wt(t){return t.replace(/&/g,"&amp;").replace(/"/g,"&quot;").replace(/</g,"&lt;")}const Io=[90,45,30,23,18,10,5];function Eo(){return'<button type="button" class="mlcad-tool-btn has-children" id="mlcad-lang-btn" aria-haspopup="true" aria-expanded="false" data-children-ui="toolbar" data-i18n-key="toolbar.language" data-i18n-attr="title aria-label" title="Language" aria-label="Language"><span class="mlcad-locale-option-badge" id="mlcad-lang-badge">EN</span></button>'}const To={en:"toolbar.localeEn",zh:"toolbar.localeZh",cs:"toolbar.localeCs",tr:"toolbar.localeTr"},Po={en:"English",zh:"中文",cs:"Čeština",tr:"Türkçe"};function Fo(){return`<div id="mlcad-locale-strip-wrap" hidden>
        <div id="mlcad-locale-strip" role="toolbar" data-i18n-attr="aria-label" data-i18n-key="toolbar.language" aria-label="Language">
          ${xt.map(t=>{const e=Po[t],a=To[t],r=fa[t];return`<button type="button" class="mlcad-tool-btn mlcad-locale-option" data-locale="${t}" data-i18n-key="${a}" data-i18n-attr="title aria-label" title="${e}" aria-label="${e}"><span class="mlcad-locale-option-badge">${r}</span></button>`}).join("")}
        </div>
      </div>`}function jo(){const t=Io.map(e=>`<button type="button" class="mlcad-tool-btn mlcad-settings-option-btn mlcad-polar-angle-btn" data-polar-ang="${e}" title="${e}°" aria-label="${e}°"><span class="mlcad-settings-option-indicator" aria-hidden="true"></span><span class="mlcad-settings-option-text">${e}°</span></button>`).join("");return`
      <div id="mlcad-snap-strip-wrap" hidden>
        <div id="mlcad-snap-strip" role="toolbar" data-i18n-attr="aria-label" data-i18n-key="toolbar.snap" aria-label="Object snap">
          ${b(g.orthoMode,"Orthogonal mode",{id:"mlcad-ortho-btn","data-toggle":"ortho","data-i18n-key":"settings.ortho","data-i18n-attr":"title aria-label"})}
          ${b(g.polarTracking,"Polar tracking",{id:"mlcad-polar-btn","data-toggle":"polar","data-i18n-key":"settings.polar","data-i18n-attr":"title aria-label"})}
        </div>
        <div id="mlcad-polar-angles" role="group" data-i18n-attr="aria-label" data-i18n-key="settings.polarAngles" aria-label="Polar tracking angles" hidden>
          ${t}
        </div>
      </div>`}const Bo=`
  :root {
    --mlcad-ui-bg: rgba(24, 26, 30, 0.94);
    --mlcad-ui-bg-elevated: rgba(32, 35, 40, 0.98);
    --mlcad-ui-border: rgba(255, 255, 255, 0.1);
    --mlcad-ui-text: #e8eaed;
    --mlcad-ui-muted: #9aa0a6;
    --mlcad-accent: #08e8de;
    --mlcad-accent-active: #1a8cff;
    --mlcad-measure-accent: #08e8de;
    --mlcad-measure-accent-border: rgba(8, 232, 222, 0.45);
    --mlcad-measure-accent-fill: rgba(8, 232, 222, 0.2);
    --mlcad-markup-accent: #e53935;
    --mlcad-markup-accent-border: rgba(229, 57, 53, 0.45);
    --mlcad-shadow: 0 8px 28px rgba(0, 0, 0, 0.45);
    --mlcad-toolbar-width: 44px;
    --mlcad-drawer-width: 220px;
    --mlcad-drawer-gap: 8px;
    --mlcad-ui-inset: 12px;
    --mlcad-z-chrome: 7;
    --mlcad-z-measure: 5;
    --mlcad-z-markup: 6;
  }
  html, body {
    margin: 0; height: 100%; overflow: hidden;
    background: #121418;
    font-family: "Segoe UI", system-ui, -apple-system, sans-serif;
    color: var(--mlcad-ui-text);
  }
  #mlcad-root { position: relative; width: 100%; height: 100%; }
  #mlcad-root canvas {
    display: block;
    width: 100%;
    height: 100%;
    touch-action: none;
  }

  #mlcad-sidebar {
    position: absolute;
    left: var(--mlcad-ui-inset);
    top: 50%;
    z-index: var(--mlcad-z-chrome);
    transform: translateY(-50%);
    display: flex;
    align-items: flex-start;
    gap: var(--mlcad-drawer-gap);
    max-width: calc(100% - 2 * var(--mlcad-ui-inset));
    box-sizing: border-box;
    pointer-events: none;
  }
  #mlcad-sidebar > * { pointer-events: auto; }

  #mlcad-toolbar {
    flex-shrink: 0;
    display: flex; flex-direction: column; gap: 4px;
    padding: 6px;
    background: var(--mlcad-ui-bg);
    border: 1px solid var(--mlcad-ui-border);
    border-radius: 8px;
    box-shadow: var(--mlcad-shadow);
    backdrop-filter: blur(12px);
  }
  .mlcad-tool-btn {
    position: relative;
    display: flex; align-items: center; justify-content: center;
    width: var(--mlcad-toolbar-width); height: var(--mlcad-toolbar-width);
    margin: 0; padding: 0;
    border: 1px solid transparent;
    border-radius: 6px;
    background: transparent;
    color: var(--mlcad-ui-text);
    cursor: pointer;
    transition: background 0.15s ease, border-color 0.15s ease, color 0.15s ease;
  }
  .mlcad-tool-btn:hover {
    background: rgba(255, 255, 255, 0.08);
    border-color: var(--mlcad-ui-border);
  }
  .mlcad-tool-btn.active,
  .mlcad-tool-btn.is-menu-open {
    background: rgba(26, 140, 255, 0.22);
    border-color: rgba(26, 140, 255, 0.55);
    color: #fff;
  }
  .mlcad-tool-btn svg {
    width: 20px; height: 20px; display: block; flex-shrink: 0;
  }
  /* Flyout mark: opaque corner triangle (cad-simple-ui-plugin is-left style). */
  .mlcad-tool-btn.has-children::after {
    content: '';
    position: absolute;
    right: 1px;
    bottom: 1px;
    width: 6px;
    height: 6px;
    background: currentColor;
    clip-path: polygon(100% 100%, 0 100%, 100% 0);
    pointer-events: none;
  }
  .mlcad-dropdown {
    position: fixed;
    z-index: 40;
    min-width: 180px;
    max-width: min(280px, calc(100vw - 24px));
    max-height: min(360px, calc(100vh - 24px));
    overflow-y: auto;
    padding: 4px;
    background: var(--mlcad-ui-bg-elevated);
    border: 1px solid var(--mlcad-ui-border);
    border-radius: 8px;
    box-shadow: var(--mlcad-shadow);
    backdrop-filter: blur(12px);
  }
  .mlcad-dropdown-item {
    display: flex;
    align-items: center;
    gap: 8px;
    width: 100%;
    box-sizing: border-box;
    margin: 0;
    padding: 6px 8px;
    border: none;
    border-radius: 5px;
    background: transparent;
    color: var(--mlcad-ui-text);
    font-size: 12px;
    font-weight: 500;
    text-align: left;
    cursor: pointer;
  }
  .mlcad-dropdown-item:hover {
    background: rgba(255, 255, 255, 0.08);
  }
  .mlcad-dropdown-item.active,
  .mlcad-dropdown-item.is-toggled {
    background: rgba(26, 140, 255, 0.22);
    color: #fff;
  }
  .mlcad-dropdown-icon {
    display: inline-flex;
    width: 18px;
    height: 18px;
    flex-shrink: 0;
    align-items: center;
    justify-content: center;
  }
  .mlcad-dropdown-icon svg {
    width: 18px;
    height: 18px;
    display: block;
  }
  .mlcad-dropdown-label {
    overflow: hidden;
    text-overflow: ellipsis;
    white-space: nowrap;
  }
  .mlcad-dropdown-separator {
    height: 1px;
    margin: 4px 6px;
    background: var(--mlcad-ui-border);
  }
  #mlcad-toolbar-toggle {
    height: calc(var(--mlcad-toolbar-width) / 2);
    margin-top: -4px;
    margin-bottom: -4px;
    border-radius: 4px;
  }
  #mlcad-toolbar-toggle svg {
    width: calc(var(--mlcad-toolbar-width) / 2);
    height: calc(var(--mlcad-toolbar-width) / 2);
  }
  .mlcad-tool-separator {
    height: 1px;
    margin: 4px 8px;
    background: var(--mlcad-ui-border);
  }
  .mlcad-locale-option-badge {
    font-size: 10px;
    font-weight: 700;
    line-height: 1;
  }
  #mlcad-lang-btn .mlcad-locale-option-badge {
    font-size: 12px;
  }
  #mlcad-zoom-window-rect {
    position: fixed;
    z-index: 25;
    box-sizing: border-box;
    pointer-events: none;
    border: 1px dashed var(--mlcad-accent, #08e8de);
    background: rgba(8, 232, 222, 0.12);
  }
  #mlcad-zoom-window-rect[hidden] { display: none; }

  #mlcad-layer-drawer {
    flex-shrink: 1;
    min-width: 0;
    width: var(--mlcad-drawer-width);
    max-height: min(420px, calc(100vh - 48px));
    display: flex; flex-direction: column;
    background: var(--mlcad-ui-bg-elevated);
    border: 1px solid var(--mlcad-ui-border);
    border-radius: 8px;
    box-shadow: var(--mlcad-shadow);
    backdrop-filter: blur(12px);
    overflow: hidden;
  }
  #mlcad-layer-drawer[hidden] { display: none; }

  .mlcad-drawer-header {
    display: flex; align-items: center; justify-content: space-between;
    gap: 6px; padding: 8px 10px;
    border-bottom: 1px solid var(--mlcad-ui-border);
    font-size: 13px; font-weight: 600;
  }
  .mlcad-drawer-close {
    width: 28px; height: 28px; padding: 0;
    border: none; border-radius: 4px;
    background: transparent; color: var(--mlcad-ui-muted);
    cursor: pointer; font-size: 18px; line-height: 1;
  }
  .mlcad-drawer-close:hover {
    background: rgba(255, 255, 255, 0.08); color: var(--mlcad-ui-text);
  }

  .mlcad-layer-actions {
    display: flex; gap: 4px; padding: 6px 8px;
    border-bottom: 1px solid var(--mlcad-ui-border);
  }
  .mlcad-layer-action-btn {
    flex: 1; display: inline-flex; align-items: center; justify-content: center; gap: 6px;
    min-height: 30px; padding: 4px 8px;
    border: 1px solid var(--mlcad-ui-border);
    border-radius: 5px;
    background: rgba(255, 255, 255, 0.04);
    color: var(--mlcad-ui-text);
    font-size: 12px; cursor: pointer;
  }
  .mlcad-layer-action-btn:hover { background: rgba(255, 255, 255, 0.1); }
  .mlcad-layer-action-btn svg { width: 14px; height: 14px; flex-shrink: 0; }

  #mlcad-layer-list {
    flex: 1; overflow: auto; padding: 4px 0;
  }
  .mlcad-layer-item {
    display: grid;
    grid-template-columns: auto auto 1fr auto;
    align-items: center; gap: 6px;
    padding: 5px 8px;
    font-size: 12px; cursor: pointer;
  }
  .mlcad-layer-item:hover { background: rgba(255, 255, 255, 0.05); }
  .mlcad-layer-item input { margin: 0; cursor: pointer; }
  .mlcad-layer-swatch {
    width: 12px; height: 12px; border-radius: 2px;
    border: 1px solid rgba(255, 255, 255, 0.28);
  }
  .mlcad-layer-name {
    overflow: hidden; text-overflow: ellipsis; white-space: nowrap;
  }
  .mlcad-layer-zoom {
    display: flex; align-items: center; justify-content: center;
    width: 22px; height: 22px; padding: 0;
    border: 1px solid transparent; border-radius: 4px;
    background: transparent; color: var(--mlcad-ui-muted);
    cursor: pointer;
  }
  .mlcad-layer-zoom svg {
    width: 14px; height: 14px; display: block;
  }
  .mlcad-layer-zoom:hover:not(:disabled) {
    color: var(--mlcad-accent);
    border-color: var(--mlcad-ui-border);
    background: rgba(255, 255, 255, 0.06);
  }
  .mlcad-layer-zoom:disabled { opacity: 0.35; cursor: not-allowed; }

  #mlcad-status-bar {
    position: absolute; left: 12px; right: 12px; bottom: 10px; z-index: var(--mlcad-z-chrome);
    display: flex; align-items: center; min-height: 28px; padding: 0 12px;
    border: 1px solid var(--mlcad-ui-border);
    border-radius: 6px;
    background: var(--mlcad-ui-bg);
    color: var(--mlcad-ui-muted);
    font-size: 12px;
    box-shadow: 0 2px 12px rgba(0, 0, 0, 0.35);
    backdrop-filter: blur(10px);
    pointer-events: none;
  }

  #mlcad-sidebar.mlcad-sidebar--collapsed #mlcad-snap-strip-wrap,
  #mlcad-sidebar.mlcad-sidebar--collapsed #mlcad-measure-strip-wrap,
  #mlcad-sidebar.mlcad-sidebar--collapsed #mlcad-markup-strip-wrap,
  #mlcad-sidebar.mlcad-sidebar--collapsed #mlcad-zoom-strip-wrap,
  #mlcad-sidebar.mlcad-sidebar--collapsed #mlcad-locale-strip-wrap,
  #mlcad-sidebar.mlcad-sidebar--collapsed #mlcad-layer-drawer {
    display: none !important;
  }
  #mlcad-sidebar.mlcad-sidebar--collapsed #mlcad-toolbar .mlcad-tool-btn:not(#mlcad-toolbar-toggle) {
    display: none;
  }
  #mlcad-sidebar.mlcad-sidebar--collapsed #mlcad-toolbar .mlcad-tool-separator {
    display: none;
  }

  #mlcad-snap-strip-wrap,
  #mlcad-measure-strip-wrap,
  #mlcad-markup-strip-wrap,
  #mlcad-zoom-strip-wrap,
  #mlcad-locale-strip-wrap {
    flex-shrink: 0;
    min-width: 0;
    display: flex;
    flex-direction: row;
    align-items: flex-start;
    gap: var(--mlcad-drawer-gap);
  }
  #mlcad-snap-strip-wrap[hidden],
  #mlcad-measure-strip-wrap[hidden],
  #mlcad-markup-strip-wrap[hidden],
  #mlcad-zoom-strip-wrap[hidden],
  #mlcad-locale-strip-wrap[hidden] { display: none; }

  #mlcad-snap-strip,
  #mlcad-measure-strip,
  #mlcad-markup-strip,
  #mlcad-zoom-strip,
  #mlcad-locale-strip {
    flex-shrink: 0;
    display: flex;
    flex-direction: column;
    align-items: stretch;
    gap: 4px;
    padding: 6px;
    background: var(--mlcad-ui-bg);
    border: 1px solid var(--mlcad-ui-border);
    border-radius: 8px;
    box-shadow: var(--mlcad-shadow);
    backdrop-filter: blur(12px);
  }
  #mlcad-measure-strip .mlcad-tool-separator,
  #mlcad-markup-strip .mlcad-tool-separator {
    margin: 2px 4px;
  }

  #mlcad-polar-angles {
    flex-shrink: 0;
    display: inline-flex;
    flex-direction: column;
    align-items: stretch;
    gap: 4px;
    padding: 6px;
    max-width: min(280px, calc(100vw - 2 * var(--mlcad-ui-inset) - 3 * var(--mlcad-toolbar-width) - 3 * var(--mlcad-drawer-gap)));
    background: var(--mlcad-ui-bg);
    border: 1px solid var(--mlcad-ui-border);
    border-radius: 8px;
    box-shadow: var(--mlcad-shadow);
    backdrop-filter: blur(12px);
  }
  #mlcad-polar-angles[hidden] { display: none; }

  .mlcad-color-input {
    position: absolute;
    width: 0;
    height: 0;
    opacity: 0;
    pointer-events: none;
  }
  .mlcad-settings-option-btn {
    width: 100%;
    box-sizing: border-box;
    height: var(--mlcad-toolbar-width);
    justify-content: flex-start;
    gap: 8px;
    padding: 0 10px;
    font-size: 11px;
    font-weight: 500;
  }
  .mlcad-settings-option-indicator {
    flex-shrink: 0;
    width: 10px;
    height: 10px;
    border: 1px solid var(--mlcad-ui-muted);
    border-radius: 2px;
    box-sizing: border-box;
    transition: background 0.15s ease, border-color 0.15s ease;
  }
  .mlcad-settings-option-btn.active .mlcad-settings-option-indicator {
    background: var(--mlcad-accent);
    border-color: var(--mlcad-accent);
  }
  .mlcad-settings-option-text {
    overflow: hidden;
    text-overflow: ellipsis;
    white-space: nowrap;
    pointer-events: none;
    line-height: 1.2;
  }

  #mlcad-measure-overlays {
    position: absolute;
    inset: 0;
    pointer-events: none;
    z-index: var(--mlcad-z-measure);
    overflow: hidden;
  }
  .mlcad-measure-canvas {
    position: absolute;
    left: 0;
    top: 0;
    pointer-events: none;
  }
  .mlcad-measure-dot {
    position: absolute;
    width: 10px;
    height: 10px;
    border-radius: 50%;
    background: var(--mlcad-measure-accent);
    border: 2px solid rgba(255, 255, 255, 0.9);
    box-sizing: border-box;
    transform: translate(-50%, -50%);
    pointer-events: none;
  }
  .mlcad-measure-badge {
    position: absolute;
    padding: 3px 10px;
    border-radius: 14px;
    background: var(--mlcad-ui-bg-elevated);
    border: 1px solid var(--mlcad-measure-accent-border);
    color: var(--mlcad-measure-accent);
    font-size: 12px;
    font-weight: 600;
    white-space: nowrap;
    transform: translate(-50%, -50%);
    box-shadow: 0 2px 8px rgba(0, 0, 0, 0.35);
    pointer-events: none;
  }
  .mlcad-measure-badge--coordinate {
    transform: translate(-50%, calc(-50% - 16px));
  }
  .mlcad-measure-dot.mlcad-measure-selected {
    box-shadow:
      0 0 0 2px rgba(255, 213, 79, 0.75),
      0 0 10px rgba(255, 213, 79, 0.95),
      0 0 18px rgba(255, 213, 79, 0.55);
  }
  .mlcad-measure-badge.mlcad-measure-selected {
    outline: 2px solid rgba(255, 213, 79, 0.85);
    outline-offset: 1px;
    box-shadow:
      0 0 0 2px rgba(255, 213, 79, 0.4),
      0 0 12px rgba(255, 213, 79, 0.75),
      0 2px 8px rgba(0, 0, 0, 0.35);
  }
  .mlcad-measure-canvas.mlcad-measure-selected {
    filter:
      drop-shadow(0 0 1.5px #ffd54f)
      drop-shadow(0 0 4px rgba(255, 213, 79, 0.95))
      drop-shadow(0 0 8px rgba(255, 213, 79, 0.55));
  }
  .mlcad-measure-live-label {
    position: absolute;
    pointer-events: none;
    color: var(--mlcad-measure-accent);
    font-size: 12px;
    font-weight: 600;
    text-shadow: 0 0 4px #000, 0 1px 3px #000;
    transform: translate(-50%, -120%);
    display: none;
  }

  #mlcad-markup-overlays {
    position: absolute;
    inset: 0;
    pointer-events: none;
    z-index: var(--mlcad-z-markup);
    overflow: hidden;
  }
  .mlcad-markup-canvas {
    position: absolute;
    left: 0;
    top: 0;
    pointer-events: none;
  }
  .mlcad-markup-badge,
  .mlcad-markup-stamp {
    position: absolute;
    padding: 3px 10px;
    border-radius: 14px;
    background: var(--mlcad-ui-bg-elevated);
    border: 1px solid var(--mlcad-markup-accent-border);
    color: var(--mlcad-markup-accent);
    font-size: 12px;
    font-weight: 600;
    white-space: pre-wrap;
    max-width: 240px;
    min-width: 80px;
    min-height: 1.75em;
    box-sizing: border-box;
    transform: translate(-50%, -50%);
    box-shadow: 0 2px 8px rgba(0, 0, 0, 0.35);
    pointer-events: auto;
    cursor: grab;
    touch-action: none;
    user-select: none;
  }
  .mlcad-markup-stamp {
    border-radius: 4px;
    border-width: 2px;
    text-transform: uppercase;
    letter-spacing: 0.04em;
    font-size: 11px;
    white-space: nowrap;
    min-width: 0;
  }
  .mlcad-markup-dot {
    position: absolute;
    width: 10px;
    height: 10px;
    border-radius: 50%;
    background: var(--mlcad-markup-accent);
    border: 2px solid rgba(255, 255, 255, 0.9);
    box-sizing: border-box;
    transform: translate(-50%, -50%);
    pointer-events: auto;
    cursor: grab;
    touch-action: none;
  }
  .mlcad-markup-dot.mlcad-markup-selected {
    box-shadow:
      0 0 0 2px rgba(255, 213, 79, 0.75),
      0 0 10px rgba(255, 213, 79, 0.95),
      0 0 18px rgba(255, 213, 79, 0.55);
  }
  .mlcad-markup-badge.mlcad-markup-selected,
  .mlcad-markup-stamp.mlcad-markup-selected {
    outline: 2px solid rgba(255, 213, 79, 0.85);
    outline-offset: 1px;
    box-shadow:
      0 0 0 2px rgba(255, 213, 79, 0.4),
      0 0 12px rgba(255, 213, 79, 0.75),
      0 2px 8px rgba(0, 0, 0, 0.35);
  }
  .mlcad-markup-canvas.mlcad-markup-selected {
    filter:
      drop-shadow(0 0 1.5px #ffd54f)
      drop-shadow(0 0 4px rgba(255, 213, 79, 0.95))
      drop-shadow(0 0 8px rgba(255, 213, 79, 0.55));
  }

  #mlcad-loading {
    position: fixed; inset: 0; z-index: 100;
    display: flex; align-items: center; justify-content: center;
    background: #121418;
    transition: opacity 0.35s ease, visibility 0.35s ease;
  }
  #mlcad-loading.mlcad-loading--done {
    opacity: 0; visibility: hidden; pointer-events: none;
  }
  .mlcad-loading-spinner {
    width: 48px; height: 48px; box-sizing: border-box;
    border: 3px solid rgba(255, 255, 255, 0.12);
    border-top-color: var(--mlcad-accent);
    border-radius: 50%;
    animation: mlcad-spin 0.85s linear infinite;
  }
  @keyframes mlcad-spin { to { transform: rotate(360deg); } }

  @media (max-width: ${ja}px) {
    :root {
      --mlcad-drawer-width: min(200px, calc(100vw - 2 * var(--mlcad-ui-inset) - var(--mlcad-toolbar-width) - var(--mlcad-drawer-gap)));
      --mlcad-ui-inset: 8px;
    }
    #mlcad-sidebar {
      left: var(--mlcad-ui-inset);
      right: var(--mlcad-ui-inset);
      width: auto;
    }
    #mlcad-layer-drawer {
      margin-left: auto;
      max-width: calc(100vw - 2 * var(--mlcad-ui-inset) - var(--mlcad-toolbar-width) - var(--mlcad-drawer-gap));
    }
    .mlcad-layer-action-btn {
      min-height: 28px;
      padding: 3px 6px;
      font-size: 11px;
      gap: 4px;
    }
    .mlcad-layer-action-btn svg { width: 12px; height: 12px; }
    .mlcad-layer-zoom {
      width: 20px;
      height: 20px;
    }
    .mlcad-layer-zoom svg {
      width: 12px;
      height: 12px;
    }
  }
`;function Uo(t,e="measure",a=!0){const r=e==="measure"?Zo():"",n=e==="measure"?Do():"",o=e==="measure"?No():"",i=Eo(),l="",s=`${Ro()}${e==="measure"?`${Oo()}${Yo()}${jo()}`:""}${Fo()}`;return`
  <div id="mlcad-loading" aria-hidden="true" style="background:${t}">
    <div class="mlcad-loading-spinner"></div>
  </div>
  <div id="mlcad-root">
    <aside id="mlcad-sidebar">
      <nav id="mlcad-toolbar" data-i18n-attr="aria-label" data-i18n-key="toolbar.viewerTools" aria-label="Viewer tools">
        ${b(g.select,"Select",{"data-action":"select","aria-pressed":"false","data-i18n-key":"toolbar.select","data-i18n-attr":"title aria-label"})}
        ${b(g.pan,"Pan",{"data-action":"pan","aria-pressed":"true","data-i18n-key":"toolbar.pan","data-i18n-attr":"title aria-label"})}
        ${$o()}
        ${e==="measure"?Tt():""}
        ${r}
        ${n}
        ${e==="measure"?Tt():""}
        ${b(g.layer,"Layers",{id:"mlcad-layers-btn","aria-haspopup":"dialog","aria-expanded":"false","data-i18n-key":"toolbar.layers","data-i18n-attr":"title aria-label"})}
        ${a?Vo():""}
        ${o}
        ${i}
        ${b(g.chevronUp,"Collapse toolbar",{id:"mlcad-toolbar-toggle","aria-expanded":"true","data-i18n-key":"toolbar.collapse","data-i18n-attr":"title aria-label"})}
      </nav>
      ${s}
      <div id="mlcad-layer-drawer" role="dialog" data-i18n-attr="aria-label" data-i18n-key="layers.title" aria-label="Layers" hidden>
        <div class="mlcad-drawer-header">
          <span data-i18n-key="layers.title" data-i18n-text>Layers</span>
          <button type="button" class="mlcad-drawer-close" id="mlcad-layer-close" data-i18n-key="layers.close" data-i18n-attr="aria-label" aria-label="Close layers">×</button>
        </div>
        <div class="mlcad-layer-actions">
          <button type="button" class="mlcad-layer-action-btn" id="mlcad-layer-show-all">
            ${g.layerOn}<span data-i18n-key="layers.showAll" data-i18n-text>Show all</span>
          </button>
          <button type="button" class="mlcad-layer-action-btn" id="mlcad-layer-hide-all">
            ${g.layerOff}<span data-i18n-key="layers.hideAll" data-i18n-text>Hide all</span>
          </button>
        </div>
        <div id="mlcad-layer-list"></div>
      </div>
    </aside>
    <footer id="mlcad-status-bar" aria-live="polite"></footer>
  </div>
  ${l}`}function Tt(){return'<div class="mlcad-tool-separator" aria-hidden="true"></div>'}function Vo(){return b(g.layout,"Layout",{id:"mlcad-layout-menu-btn","aria-haspopup":"menu","aria-expanded":"false","data-action":"layout-menu","data-i18n-key":"toolbar.layout","data-i18n-attr":"title aria-label","data-children-ui":"menu"}).replace('class="mlcad-tool-btn"','class="mlcad-tool-btn has-children"')}function $o(){return b(g.zoomExtent,"Zoom",{id:"mlcad-zoom-menu-btn","aria-haspopup":"true","aria-expanded":"false","data-action":"zoom-menu","data-i18n-key":"toolbar.zoom","data-i18n-attr":"title aria-label","data-children-ui":"toolbar"}).replace('class="mlcad-tool-btn"','class="mlcad-tool-btn has-children"')}function Ro(){return`<div id="mlcad-zoom-strip-wrap" hidden>
        <div id="mlcad-zoom-strip" role="toolbar" data-i18n-attr="aria-label" data-i18n-key="toolbar.zoom" aria-label="Zoom">
          ${b(g.zoomExtent,"Zoom extents",{"data-action":"fit","data-i18n-key":"toolbar.zoomExtents","data-i18n-attr":"title aria-label"})}
          ${b(g.zoomWindow,"Zoom window",{"data-action":"zoom-window","aria-pressed":"false","data-i18n-key":"toolbar.zoomWindow","data-i18n-attr":"title aria-label"})}
          ${b(g.zoomOriginal,"Original view",{"data-action":"zoom-original","data-i18n-key":"toolbar.zoomOriginal","data-i18n-attr":"title aria-label"})}
        </div>
      </div>`}function Zo(){return b(g.measure,"Measurement",{id:"mlcad-measure-menu-btn","aria-haspopup":"true","aria-expanded":"false","data-action":"measure-menu","data-i18n-key":"toolbar.measure","data-i18n-attr":"title aria-label","data-children-ui":"sticky-toolbar"}).replace('class="mlcad-tool-btn"','class="mlcad-tool-btn has-children"')}function Do(){return b(g.annotation,"Review",{id:"mlcad-markup-menu-btn","aria-haspopup":"true","aria-expanded":"false","data-action":"markup-menu","data-i18n-key":"toolbar.annotation","data-i18n-attr":"title aria-label","data-children-ui":"sticky-toolbar"}).replace('class="mlcad-tool-btn"','class="mlcad-tool-btn has-children"')}function Oo(){return`<div id="mlcad-measure-strip-wrap" hidden>
    <div id="mlcad-measure-strip" role="toolbar" data-i18n-attr="aria-label" data-i18n-key="toolbar.measure" aria-label="Measurement">
      ${b(g.measureDistance,"Measure distance",{"data-action":"measure","data-measure-mode":"distance","data-i18n-key":"toolbar.measureDistance","data-i18n-attr":"title aria-label"})}
      ${b(g.measureAngle,"Measure angle",{"data-action":"measure","data-measure-mode":"angle","data-i18n-key":"toolbar.measureAngle","data-i18n-attr":"title aria-label"})}
      ${b(g.measureArc,"Measure arc length",{"data-action":"measure","data-measure-mode":"arc","data-i18n-key":"toolbar.measureArc","data-i18n-attr":"title aria-label"})}
      ${b(g.measureArea,"Measure area",{"data-action":"measure","data-measure-mode":"area","data-i18n-key":"toolbar.measureArea","data-i18n-attr":"title aria-label"})}
      ${b(g.measureCoordinate,"Measure coordinates",{"data-action":"measure","data-measure-mode":"coordinate","data-i18n-key":"toolbar.measureCoordinate","data-i18n-attr":"title aria-label"})}
      ${b(g.markupShow,"Hide measurements",{"data-action":"measure-visibility","data-i18n-key":"toolbar.measureHide","data-i18n-attr":"title aria-label"})}
      ${b(g.clearMeasurements,"Clear measurements",{"data-action":"clear-measurements","data-i18n-key":"toolbar.clearMeasurements","data-i18n-attr":"title aria-label"})}
      ${Tt()}
      ${b(g.markupImport,"Import measurements",{"data-action":"measure-import","data-i18n-key":"toolbar.measureImport","data-i18n-attr":"title aria-label"})}
      ${b(g.markupExport,"Export measurements",{"data-action":"measure-export","data-i18n-key":"toolbar.measureExport","data-i18n-attr":"title aria-label"})}
    </div>
  </div>`}function Yo(){return`<div id="mlcad-markup-strip-wrap" hidden>
    <div id="mlcad-markup-strip" role="toolbar" data-i18n-attr="aria-label" data-i18n-key="toolbar.annotation" aria-label="Review">
      ${b(g.markupCloud,"Cloud",{"data-action":"markup","data-markup-mode":"cloud","data-i18n-key":"toolbar.markupCloud","data-i18n-attr":"title aria-label"})}
      ${b(g.markupCallout,"Callout",{"data-action":"markup","data-markup-mode":"callout","data-i18n-key":"toolbar.markupCallout","data-i18n-attr":"title aria-label"})}
      ${b(g.markupText,"Text",{"data-action":"markup","data-markup-mode":"text","data-i18n-key":"toolbar.markupText","data-i18n-attr":"title aria-label"})}
      ${b(g.markupRect,"Rectangle",{"data-action":"markup","data-markup-mode":"rect","data-i18n-key":"toolbar.markupRect","data-i18n-attr":"title aria-label"})}
      ${b(g.markupCircle,"Circle",{"data-action":"markup","data-markup-mode":"circle","data-i18n-key":"toolbar.markupCircle","data-i18n-attr":"title aria-label"})}
      ${b(g.markupArrow,"Arrow",{"data-action":"markup","data-markup-mode":"arrow","data-i18n-key":"toolbar.markupArrow","data-i18n-attr":"title aria-label"})}
      ${b(g.markupStamp,"Stamp",{"data-action":"markup","data-markup-mode":"stamp","data-i18n-key":"toolbar.markupStamp","data-i18n-attr":"title aria-label"})}
      ${b(g.markupShow,"Hide markups",{"data-action":"markup-visibility","data-i18n-key":"toolbar.markupHide","data-i18n-attr":"title aria-label"})}
      ${b(g.clearMarkups,"Clear markups",{"data-action":"clear-markups","data-i18n-key":"toolbar.clearMarkups","data-i18n-attr":"title aria-label"})}
      ${Tt()}
      ${b(g.markupImport,"Import markups",{"data-action":"markup-import","data-i18n-key":"toolbar.markupImport","data-i18n-attr":"title aria-label"})}
      ${b(g.markupExport,"Export markups",{"data-action":"markup-export","data-i18n-key":"toolbar.markupExport","data-i18n-attr":"title aria-label"})}
    </div>
  </div>`}function No(){return b(g.osnap,"Object snap",{id:"mlcad-snap-menu-btn","aria-haspopup":"true","aria-expanded":"false","data-action":"snap-menu","data-i18n-key":"toolbar.snap","data-i18n-attr":"title aria-label","data-children-ui":"sticky-toolbar"}).replace('class="mlcad-tool-btn"','class="mlcad-tool-btn has-children"')}function Oe(t,e){const a=e.title??t.meta.title??"CAD Drawing",r=Yr(t),n=e.viewerRuntime,o=Nr(),i=r.compression,l=`#${t.meta.background.toString(16).padStart(6,"0")}`,s=Le(t.meta.locale)??"en",d=t.meta.viewerMode??"measure",c=t.meta.exportLayouts!==!1;return`<!DOCTYPE html>
<html lang="${s}">
<head>
  <meta charset="utf-8" />
  <meta name="viewport" content="width=device-width, initial-scale=1" />
  <meta name="generator" content="mlightcad-cad-html-plugin" />
  <title>${_o(a)}</title>
  <style>${Bo}</style>
</head>
<body>
${Uo(l,d,c)}
  <script id="mlcad-snapshot" type="${o}+${i};base64">${r.payload}<\/script>
  <script>${Ko(n)}<\/script>
</body>
</html>`}function _o(t){return t.replace(/&/g,"&amp;").replace(/</g,"&lt;").replace(/>/g,"&gt;").replace(/"/g,"&quot;")}function Ko(t){return t.replace(/<\/script/gi,"<\\/script")}const Xo=400;function mt(t={}){return{exportInvisibleLayers:t.exportInvisibleLayers!==!1,exportLayouts:t.exportLayouts!==!1,initialView:t.initialView??"fit",viewerMode:t.viewerMode??"measure"}}function Wo(t){const e=t.activeLayoutView,a=e.center,r=e.trCamera.zoom,n=Math.max(e.height,1),o=r*(2*Xo)/n;return{centerX:a.x,centerY:a.y,zoom:o}}const Go="./viewer-runtime.iife.js";let Mt={};function Qo(t){Mt={...Mt,...t}}function Jo(){return{...Mt}}function qo(t){return t!=null?String(t):Mt.viewerRuntimeUrl!=null?String(Mt.viewerRuntimeUrl):Go}function ti(){return{minX:0,minY:0,maxX:0,maxY:0,valid:!1}}function ei(t,e,a){if(e.length<3)return;const r=a[0],n=a[1];for(let o=0;o+2<e.length;o+=3){const i=Fe(e[o],r),l=Fe(e[o+1],n);t.valid?(i<t.minX&&(t.minX=i),i>t.maxX&&(t.maxX=i),l<t.minY&&(t.minY=l),l>t.maxY&&(t.maxY=l)):(t.minX=t.maxX=i,t.minY=t.maxY=l,t.valid=!0)}}function Ye(t,e){ei(t,e.positions,e.offset)}function ai(t){return t.valid?{minX:t.minX,minY:t.minY,maxX:t.maxX,maxY:t.maxY}:null}function ri(t,e){const a=ti();for(const r of t)Ye(a,r);for(const r of e)Ye(a,r);return ai(a)}function ba(t,e){return t?e?{minX:Math.min(t.minX,e.minX),minY:Math.min(t.minY,e.minY),maxX:Math.max(t.maxX,e.maxX),maxY:Math.max(t.maxY,e.maxY)}:t:e??null}function ni(t){if(!t||t.length===0)return null;let e=null;for(const a of t)e=ba(e,a.paper);return e}function oi(t){return ba(ri(t.lineBatches,t.meshBatches),ni(t.viewports))}function ii(t,e,a){if(a)return;const r=li(t,e);if(!(r!=null&&r.newIterator))return;const n=[];for(const o of r.newIterator()){if(!(o instanceof Va)||Ma.isDefaultPaperSpaceViewport(o)||typeof o.toGiViewport!="function")continue;const i=o.toGiViewport(),l=i.box,s=i.viewBox,d=Ne(l),c=Ne(s);if(!d||!c)continue;const u=Number.isFinite(i.viewTwistAngle)?i.viewTwistAngle:o.viewTwistAngle;n.push(Number.isFinite(u)&&Math.abs(u)>1e-12?{paper:d,model:c,twist:u}:{paper:d,model:c})}return n.length>0?n:void 0}function Ne(t){if(typeof t.isEmpty=="function"&&t.isEmpty())return;const e=t.min.x,a=t.min.y,r=t.max.x,n=t.max.y;if(!(!Number.isFinite(e)||!Number.isFinite(a)||!Number.isFinite(r)||!Number.isFinite(n)||r-e<=0||n-a<=0))return{minX:e,minY:a,maxX:r,maxY:n}}function li(t,e){var a;const r=(a=t.tables)==null?void 0:a.blockTable;if(!r)return;const n=typeof r.getIdAt=="function"?r.getIdAt(e):void 0;if(n)return n;if(typeof r.newIterator=="function"){for(const i of r.newIterator())if(i.objectId===e)return i}const o=r.modelSpace;if((o==null?void 0:o.objectId)===e)return o}class si{build(e,a,r={}){return this.buildSync(e,a,r)}async buildAsync(e,a,r={}){await G();const n=r.exportInvisibleLayers!==!1,o=r.exportLayouts!==!1,i=n?void 0:p=>Ht(e,p,n),l=Be(a,{title:r.title,background:r.background}),s=[];e.layers.forEach(p=>{Ht(e,p.name,n)&&s.push({name:p.name,color:p.color.RGB??16777215,visible:!p.isOff&&!p.isFrozen})});const d=Ke(a),c=new Map(d.map(p=>[p.blockTableRecordId,p.name])),u=We(e,o),m=[];for(const p of Xe(e,d,o))m.push(Ge(e,a,p,c,r,i)),await G();return{version:it,meta:_e(l,r,m,u),layers:s,layouts:m,activeLayoutBtrId:u}}buildSync(e,a,r){const n=r.exportInvisibleLayers!==!1,o=r.exportLayouts!==!1,i=n?void 0:p=>Ht(e,p,n),l=Be(a,{title:r.title,background:r.background}),s=[];e.layers.forEach(p=>{Ht(e,p.name,n)&&s.push({name:p.name,color:p.color.RGB??16777215,visible:!p.isOff&&!p.isFrozen})});const d=Ke(a),c=new Map(d.map(p=>[p.blockTableRecordId,p.name])),u=We(e,o),m=[];for(const p of Xe(e,d,o))m.push(Ge(e,a,p,c,r,i));return{version:it,meta:_e(l,r,m,u),layers:s,layouts:m,activeLayoutBtrId:u}}}function _e(t,e,a,r){const n=a.find(l=>l.btrId===r)??a[0],o=n?oi(n):null,i=e.initialView??"fit";return{title:t.title,createdAt:new Date().toISOString(),extents:t.extents,viewExtents:o??void 0,units:t.units,background:t.background,locale:e.locale??A.currentLocale,initialView:i,viewState:i==="current"?e.viewState:void 0,viewerMode:e.viewerMode??"measure",exportLayouts:e.exportLayouts!==!1}}function ci(t){return(t.viewerMode??"measure")==="measure"}function Ht(t,e,a){if(a)return!0;const r=t.layers.get(e);return r?!r.isOff&&!r.isFrozen:!0}function Ke(t){var e;const a=(e=t.objects)==null?void 0:e.layout;if(!(a!=null&&a.newIterator))return[];const r=[];for(const n of a.newIterator()){const o=n.blockTableRecordId;o&&r.push({name:n.layoutName||o,tabOrder:n.tabOrder??0,blockTableRecordId:o})}return r.sort((n,o)=>n.tabOrder-o.tabOrder),r}function Xe(t,e,a){if(!a)return t.modelSpaceBtrId?[t.modelSpaceBtrId]:[];const r=new Set,n=[];for(const o of e)r.has(o.blockTableRecordId)||(r.add(o.blockTableRecordId),n.push(o.blockTableRecordId));for(const o of t.layouts.keys())r.has(o)||(r.add(o),n.push(o));return n}function We(t,e){return e&&t.activeLayoutBtrId||t.modelSpaceBtrId}function Ge(t,e,a,r,n,o){const i=[],l=[],s=t.layouts.get(a);if(s)for(const[,c]of s.layers){if(o&&!o(c.name))continue;const u=fn(c.internalObject);i.push(...u.lineBatches),l.push(...u.meshBatches)}const d=a===t.modelSpaceBtrId;return{btrId:a,name:r.get(a)??di(e,a),isModelSpace:d,lineBatches:i,meshBatches:l,osnap:ci(n)?Wn(e,a,{includeLayer:o}):void 0,viewports:ii(e,a,d)}}function di(t,e){var a;const r=(a=t.tables)==null?void 0:a.blockTable;if(r!=null&&r.newIterator){for(const n of r.newIterator())if(n.objectId===e)return n.name}return e}class ui{constructor(e={}){this.options=e,this._snapshotBuilder=new si}async prepareAcTrView2dForHtmlExport(e,a={}){if(!e||!("cadScene"in e)||!e.cadScene)throw new Error("CAD scene is not available. Open a drawing before exporting to HTML.");if(!(e instanceof Ta))throw new Error("HTML export requires a 2D CAD view. Open a drawing before exporting.");const r=mt(a),n={includeInvisibleLayers:r.exportInvisibleLayers,includeLayouts:r.exportLayouts};return await e.ensureEntitiesConvertedForExport(n),await G(),e}async convert(e,a={},r){const n=vt.instance,o=mt(a);await n.withBusyIndicator(async()=>{await G();const i=n.curDocument,l=await this.prepareAcTrView2dForHtmlExport(r??n.curView,o),s=e||i.fileName||i.docTitle,d=await this._snapshotBuilder.buildAsync(l.cadScene,i.database,{title:Pa(s),background:l.backgroundColor,exportInvisibleLayers:o.exportInvisibleLayers,exportLayouts:o.exportLayouts,initialView:o.initialView,viewerMode:o.viewerMode,viewState:o.initialView==="current"&&(o.exportLayouts||l.activeLayoutBtrId===l.modelSpaceBtrId)?Wo(l):void 0});await G();const c=await this.loadViewerRuntime();await G();const u=Oe(d,{title:d.meta.title,viewerRuntime:c});await G(),this.downloadHtml(u,Fa(s,"html"))})}async packSnapshot(e,a){await vt.instance.withBusyIndicator(async()=>{await G();const r=await this.loadViewerRuntime();await G();const n=Oe(e,{title:e.meta.title,viewerRuntime:r});await G(),this.downloadHtml(n,a)})}async loadViewerRuntime(){const e=qo(this.options.viewerRuntimeUrl),a=await fetch(e);if(!a.ok)throw new Error(`Failed to load HTML viewer runtime from "${e}" (${a.status}). Install @mlightcad/cad-html-plugin, copy viewer-runtime.iife.js to your app assets, and set viewerRuntimeUrl on registerLazyHtmlPlugin / createHtmlPlugin / AcApHtmlConvertor.`);return a.text()}downloadHtml(e,a){const r=new Blob([e],{type:"text/html;charset=utf-8"}),n=URL.createObjectURL(r),o=document.createElement("a");o.href=n,o.download=a,document.body.appendChild(o),o.click(),document.body.removeChild(o),window.setTimeout(()=>URL.revokeObjectURL(n),6e4)}}class mi extends Ea{constructor(e={}){super(),this.pluginOptions=e}async execute(e){const a=await this.promptOptions();a&&await new ui(this.pluginOptions).convert(e.doc.fileName||e.doc.docTitle,a,e.view)}async promptOptions(){const e=mt(),a=await this.promptYesNo("jig.chtml.exportInvisibleLayers",e.exportInvisibleLayers);if(a===void 0)return;const r=await this.promptYesNo("jig.chtml.exportLayouts",e.exportLayouts);if(r===void 0)return;const n=await this.promptInitialView();if(n===void 0)return;const o=await this.promptViewerMode();if(o!==void 0)return mt({exportInvisibleLayers:a,exportLayouts:r,initialView:n,viewerMode:o})}async promptYesNo(e,a){const r=new Zt(A.t(e));r.allowNone=!0;const n=r.keywords.add(A.t("jig.chtml.keywords.yes.display"),A.t("jig.chtml.keywords.yes.global"),A.t("jig.chtml.keywords.yes.local")),o=r.keywords.add(A.t("jig.chtml.keywords.no.display"),A.t("jig.chtml.keywords.no.global"),A.t("jig.chtml.keywords.no.local"));r.keywords.default=a?n:o;const i=await vt.instance.editor.getKeywords(r);if(i.status!==Y.Cancel){if(i.status===Y.None)return a;if(i.status===Y.OK||i.status===Y.Keyword)return i.stringResult?i.stringResult==="Yes":a}}async promptInitialView(){const e=mt(),a=new Zt(A.t("jig.chtml.initialView"));a.allowNone=!0;const r=a.keywords.add(A.t("jig.chtml.keywords.extents.display"),A.t("jig.chtml.keywords.extents.global"),A.t("jig.chtml.keywords.extents.local")),n=a.keywords.add(A.t("jig.chtml.keywords.current.display"),A.t("jig.chtml.keywords.current.global"),A.t("jig.chtml.keywords.current.local"));a.keywords.default=e.initialView==="current"?n:r;const o=await vt.instance.editor.getKeywords(a);if(o.status!==Y.Cancel){if(o.status===Y.None)return e.initialView;if(o.status===Y.OK||o.status===Y.Keyword)return o.stringResult?o.stringResult==="Current"?"current":"fit":e.initialView}}async promptViewerMode(){const e=mt(),a=new Zt(A.t("jig.chtml.viewerMode"));a.allowNone=!0;const r=a.keywords.add(A.t("jig.chtml.keywords.view.display"),A.t("jig.chtml.keywords.view.global"),A.t("jig.chtml.keywords.view.local")),n=a.keywords.add(A.t("jig.chtml.keywords.measure.display"),A.t("jig.chtml.keywords.measure.global"),A.t("jig.chtml.keywords.measure.local"));a.keywords.default=e.viewerMode==="view"?r:n;const o=await vt.instance.editor.getKeywords(a);if(o.status!==Y.Cancel){if(o.status===Y.None)return e.viewerMode;if(o.status===Y.OK||o.status===Y.Keyword)return o.stringResult?o.stringResult==="View"?"view":"measure":e.viewerMode}}}const pi="1.6.1",hi={version:pi};class fi{constructor(e={}){this.options=e,this.name="HtmlPlugin",this.version=hi.version,this.description="HTML export (-chtml) command",this.registeredCommands=[]}onLoad(e,a){const r=Ba.SYSTEMT_COMMAND_GROUP_NAME,n=new mi(this.options);a.addCommand(r,"-chtml","-chtml",n),this.registeredCommands.push({group:r,name:"-chtml"}),a.lookupGlobalCmd("chtml")||(a.addCommand(r,"chtml","chtml",n),this.registeredCommands.push({group:r,name:"chtml"}))}onUnload(e,a){for(const r of this.registeredCommands)a.removeCmd(r.group,r.name);this.registeredCommands=[]}}async function Ai(t={}){return t.viewerRuntimeUrl!=null&&Qo(t),new fi(Jo())}const Mi="viewer-runtime.iife.js";export{ki as ACEX_DEFAULT_OSNAP_MODES,Ir as ACEX_SNAPSHOT_COMPRESSION,it as ACEX_SNAPSHOT_VERSION,mi as AcApExportHtmlCmd,ui as AcApHtmlConvertor,si as AcApHtmlSnapshotBuilder,Ci as AcExHtmlI18n,Go as DEFAULT_HTML_VIEWER_RUNTIME_URL,Hi as HTML_PLUGIN_NAME,Si as HTML_PLUGIN_TRIGGERS,Mi as HTML_VIEWER_RUNTIME_FILE,Wn as buildOsnapCatalog,Be as buildViewerMetadata,Wo as captureAcApHtmlViewState,wn as circleOrArcToAcGe,fn as collectBatchesFromObject3D,Er as compressSnapshotBinary,Qo as configureHtmlPlugin,Ai as createHtmlPlugin,vi as decodeSnapshot,Fr as decodeSnapshotBinary,Tr as decompressSnapshotBinary,Qn as detectAcExHtmlLocale,Gn as detectBrowserAcExHtmlLocale,yn as ellipseToAcGe,Yr as encodeSnapshot,Pr as encodeSnapshotBinary,on as exportActiveBatchedLine2Slice,Ce as exportActiveBatchedSlice,je as exportBufferGeometrySlice,Jo as getHtmlPluginOptions,Ke as listDatabaseLayouts,Oe as packHtml,xi as primitiveToAcGeCurve,mt as resolveAcApHtmlExportOptions,Le as resolveAcExHtmlLocale,qo as resolveViewerRuntimeUrl,Nr as snapshotMimeType,vn as splineToAcGe};
