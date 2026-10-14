const GPU=[["Intel UHD (integrada)",3],["Radeon Vega 8 (integrada)",6],["GTX 1050 Ti",12],["GTX 1650",17],["RX 580",20],["GTX 1060 6GB",19],["GTX 1660 Super",26],["RTX 2060",30],["RTX 3050",24],["RTX 3060",36],["RX 6600",36],["RTX 4060",42],["RX 6700 XT",48],["RTX 3070",52],["RTX 4070",62],["RX 7800 XT",62],["RTX 3080",66],["RTX 4070 Ti",72],["RTX 4080",85],["RTX 4090",100]];
const RAM=[4,8,12,16,32,64];
const E=[["0x80070005","Acceso denegado","Windows Update / instalación","Ejecuta el programa como administrador, comprueba permisos de la carpeta y desactiva temporalmente el antivirus. Si es Windows Update, ejecuta el solucionador de problemas y <code>sfc /scannow</code>."],
["0xc000021a","Pantalla azul al arrancar","Fallo crítico del sistema (winlogon/csrss)","Arranca en Entorno de recuperación → Reparación de inicio. Desde CMD: <code>sfc /scannow</code> y <code>DISM /Online /Cleanup-Image /RestoreHealth</code>. Quita actualizaciones recientes."],
["INACCESSIBLE_BOOT_DEVICE 0x7B","Pantalla azul","Windows no encuentra el disco","Revisa el modo SATA/AHCI en la BIOS, cables del disco y ejecuta <code>chkdsk /f</code> desde recuperación."],
["CRITICAL_PROCESS_DIED 0x EF","Pantalla azul","Proceso crítico terminado","Actualiza o revierte drivers, ejecuta <code>sfc /scannow</code>, comprueba la RAM con el Diagnóstico de memoria de Windows."],
["0x80070057","Parámetro incorrecto","Instalación, copia de seguridad, formato","Comprueba el disco, libera espacio y reinicia servicios de Windows Update. Verifica que el formato regional sea correcto."],
["0x80240fff","Windows Update","Actualización atascada","Detén los servicios wuauserv y bits, borra <code>C:\\Windows\\SoftwareDistribution</code> y reinicia."],
["0x800f0922","Windows Update","Falta espacio en la partición reservada o .NET","Libera espacio, desactiva VPN, instala .NET Framework desde Características de Windows."],
["0x80070422","Servicio desactivado","Windows Update / Firewall","Abre services.msc y pon en Automático el servicio de Windows Update."],
["0x8007045D","Error de E/S","Disco o USB dañado","Prueba otro puerto/USB, ejecuta <code>chkdsk</code> y vuelve a crear el medio de instalación."],
["0x80004005","Error no especificado","Archivos comprimidos, VM, red compartida","Comprueba permisos, antivirus y vuelve a descargar el archivo. En VirtualBox, desactiva Hyper-V."],
["0xc000007b","La aplicación no pudo iniciarse","Mezcla de 32/64 bits","Instala Visual C++ Redistributable (x86 y x64), DirectX y actualiza controladores gráficos."],
["VCRUNTIME140.dll","DLL no encontrada","Falta Visual C++","Instala Microsoft Visual C++ 2015-2022 Redistributable (x86 y x64) desde Microsoft."],
["MSVCP140.dll","DLL no encontrada","Falta Visual C++","Misma solución: reinstala Visual C++ Redistributable 2015-2022."],
["d3dx9_43.dll","DLL no encontrada","Falta DirectX 9","Instala el DirectX End-User Runtime de Microsoft."],
["DRIVER_IRQL_NOT_LESS_OR_EQUAL","Pantalla azul","Driver defectuoso (red, gráfica)","Mira qué archivo .sys se nombra en el error. Actualiza o reinstala ese driver con DDU en modo seguro si es la gráfica."],
["PAGE_FAULT_IN_NONPAGED_AREA","Pantalla azul","RAM o driver","Prueba memtest86, reinstala drivers y prueba un módulo de RAM cada vez."],
["KERNEL_SECURITY_CHECK_FAILURE","Pantalla azul","Drivers o disco","Actualiza drivers, <code>chkdsk /f</code> y desinstala software de overclock."],
["DXGI_ERROR_DEVICE_REMOVED","Juego se cierra","Gráfica inestable o driver","Baja overclock, actualiza drivers, comprueba temperaturas y la fuente de alimentación."],
["Pantalla negra al iniciar juego","Sin código","Drivers, resolución o fuente","Ejecuta en modo ventana, actualiza drivers, desactiva overlays y verifica archivos del juego."]];
const GU=[["Crear un punto de restauración",["Pulsa Win y escribe «Crear un punto de restauración»","En Protección del sistema selecciona la unidad C: y pulsa Configurar","Activa la protección y reserva ~5% del disco","Pulsa Crear, ponle nombre y espera a que termine"]],
["Liberar espacio en disco",["Abre Configuración → Sistema → Almacenamiento","Activa Sensor de almacenamiento","Pulsa Archivos temporales y elimina los marcados","Desinstala programas que no uses en Aplicaciones","Vacía la papelera","Mueve fotos y vídeos a un disco externo o la nube"]],
["Optimizar Windows para jugar",["Activa el Modo de juego en Configuración → Juegos","Selecciona el plan de energía «Alto rendimiento»","Cierra programas en segundo plano desde el Administrador de tareas","Desactiva aplicaciones de inicio innecesarias","Actualiza drivers de la tarjeta gráfica","Instala el juego en un SSD si es posible"]],
["Actualizar drivers de la gráfica",["Identifica tu GPU: Administrador de dispositivos → Adaptadores de pantalla","Descarga el driver de NVIDIA, AMD o Intel (web oficial)","Cierra todo y ejecuta el instalador","Elige instalación limpia si tienes problemas","Reinicia el equipo"]],
["Crear USB de instalación de Windows 11",["Descarga la Herramienta de creación de medios de Microsoft","Conecta un USB de 8 GB o más (se borrará)","Elige idioma y edición, y selecciona unidad USB","Espera la descarga y la creación","Reinicia y entra en el menú de arranque (F12, F2 o Supr)","Elige el USB e instala"]],
["Reparar archivos de sistema",["Abre el Símbolo del sistema como administrador","Ejecuta <code>sfc /scannow</code> y espera","Ejecuta <code>DISM /Online /Cleanup-Image /RestoreHealth</code>","Reinicia","Si persiste, ejecuta <code>chkdsk C: /f</code>"]]];
const $=i=>document.getElementById(i);
const T=["","","","",""];
T.forEach((t,i)=>{const b=document.createElement("button");b.textContent=t;b.onclick=()=>show(i);$("nav").appendChild(b)});
function show(i){document.querySelectorAll("section").forEach((s,j)=>s.classList.toggle("on",i==j));[...$("nav").children].forEach((b,j)=>b.classList.toggle("on",i==j))}
show(0);
// juegos
const opt=(a,sel)=>a.map((x,i)=>"<option value='"+(Array.isArray(x)?x[1]:x)+"'"+(i==sel?" selected":"")+">"+(Array.isArray(x)?x[0]:x+" GB")+"</option>").join("");
const LV={hc:CPU.find(z=>z[0]=="AMD Ryzen 5 5600")[1],hg:GPU.find(z=>z[0]=="RTX 4060")[1]};
const dl=a=>a.map(z=>`<option value="${z[0]}">`).join("");
$("dlc").innerHTML=dl(CPU);$("dlg").innerHTML=dl(GPU);$("hc").value="AMD Ryzen 5 5600";$("hg").value="RTX 4060";$("hr").innerHTML=opt(RAM,3);
combo("hc",()=>CPU,z=>{LV.hc=z[1];games()});combo("hg",()=>GPU,z=>{LV.hg=z[1];games()});
const ST=new Proxy({},{get:(_,k)=>t(k)});
const need=(a,v)=>{const m=[...a].sort((p,q)=>p[1]-q[1]).find(z=>z[1]>=v);return v<a[0][1]?t("basic"):m?"≈ "+m[0]:a[a.length-1][0]};
const hue=s=>{let h=0;for(const c of s)h=(h*31+c.charCodeAt(0))%360;return h};
$("gn").innerHTML="<option value=''>Todos los géneros</option>"+[...new Set(G.map(x=>x[1]))].sort().map(t=>"<option>"+t+"</option>").join("");
function games(){const c=LV.hc,g=LV.hg,r=+$("hr").value,q=$("q").value.toLowerCase(),f=$("f").value,gn=$("gn").value;let n={ok:0,wa:0,no:0},out="",shown=0;
G.forEach((x,i)=>{let s,why=[];
if(c>=x[5]&&g>=x[6]&&r>=x[7])s="ok";
else if(c>=x[2]&&g>=x[3]&&r>=x[4]){s="wa";why=[c<x[5]&&"CPU",g<x[6]&&"GPU",r<x[7]&&"RAM"]}
else{s="no";why=[c<x[2]&&"CPU",g<x[3]&&"GPU",r<x[4]&&"RAM"]}
n[s]++;if((q&&!x[0].toLowerCase().includes(q))||(f&&f!=s)||(gn&&x[1]!=gn))return;shown++;
why=why.filter(Boolean).join(", ");
const img=x[9]&&OP.cv=="1"?`<img loading="lazy" alt="" src="https://cdn.cloudflare.steamstatic.com/steam/apps/${x[9]}/header.jpg" onerror="this.remove()">`:"";
out+=`<div class="gc" tabindex="0" onclick="openG(${i})" onkeydown="if(event.key=='Enter')openG(${i})"><div class="cv" style="--h:${hue(x[0])}"><span>${x[0][0]}</span>${img}</div><div class="cap"><b>${x[0]}</b><span class="mu">${x[1]}</span><span class="tag ${s}">${ST[s]}</span></div></div>`});
$("sum").textContent=t("sum").replace("{g}",G.length).replace("{a}",n.ok).replace("{b}",n.wa).replace("{c}",n.no);
$("gt").className="cards"+(OP.vw=="list"?" list":"");$("gt").innerHTML=out||"<p class='mu'>"+t("nores")+"</p>"}
["hr","q","f","gn"].forEach(x=>$(x).oninput=games);games();
// errores
function err(){const q=$("eq").value.toLowerCase().trim().replace(/\s+/g,"");const r=E.filter(e=>!q||(e.join(" ").toLowerCase().replace(/\s+/g,"")).includes(q));
$("er").innerHTML=r.length?r.map(e=>"<div class='item'><h3>"+e[0]+"</h3><div class='mu'>"+e[1]+" · "+e[2]+"</div><p>"+e[3]+"</p></div>").join(""):"<p class='mu'>"+t("nomatch")+"</p>"}
$("eq").oninput=err;err();
// guías
$("gs").innerHTML=GU.map((g,i)=>"<option value="+i+">"+g[0]+"</option>").join("");
const done={};
function guide(){const i=+$("gs").value,st=GU[i][1];done[i]=done[i]||[];
$("gl2").innerHTML=st.map((s,j)=>"<li class='st'><input type='checkbox' id='k"+j+"'"+(done[i][j]?" checked":"")+"><label for='k"+j+"' style='margin:0;color:var(--tx);font-size:1rem'>"+(j+1)+". "+s+"</label></li>").join("");
st.forEach((_,j)=>$("k"+j).onchange=e=>{done[i][j]=e.target.checked;prog()});prog()}
function prog(){const i=+$("gs").value,n=GU[i][1].length,d=done[i].filter(Boolean).length;$("gp").style.width=d/n*100+"%";$("gl").textContent=d+" / "+n+" "+t("st")+(d==n?" ✅":"")}
$("gs").oninput=guide;guide();
// componentes
const S={};const cl=()=>$("ct").value=="c"?CPU:GPU;
function fill(){const a=cl();$("dlx").innerHTML=dl(a);S.a=a[Math.floor(a.length/2)];S.b=a[a.length-4];$("ca").value=S.a[0];$("cb").value=S.b[0];cmp()}
function cmp(){const x=S.a,y=S.b,row=z=>`<b>${z[0]}</b> — ${z[1]}/100<div class="bar"><i style="width:${Math.min(100,z[1])}%"></i></div>`;
const d=Math.round((Math.max(x[1],y[1])/Math.min(x[1],y[1])-1)*100),w=x[1]>=y[1]?x:y;
$("cr").innerHTML=row(x)+row(y)+`<p class="big">${x[1]==y[1]?t("sim"):t("more").replace("{n}",w[0]).replace("{p}",d)}</p>`}
$("ct").oninput=fill;combo("ca",cl,z=>{S.a=z;cmp()});combo("cb",cl,z=>{S.b=z;cmp()});fill();

// ---------- ficha del juego (modal) ----------
let cur=0;
const stat=x=>{const c=LV.hc,g=LV.hg,r=+$("hr").value;return c>=x[5]&&g>=x[6]&&r>=x[7]?"ok":c>=x[2]&&g>=x[3]&&r>=x[4]?"wa":"no"};
const cut=(t,n)=>{if(t.length<=n)return t;const s=t.slice(0,n),k=s.lastIndexOf(". ");return(k>n*.5?s.slice(0,k+1):s)+"…"};
async function wk(l,q){const u=`https://${l}.wikipedia.org/w/api.php?action=query&format=json&origin=*&generator=search&gsrsearch=${encodeURIComponent(q)}&gsrlimit=1&prop=extracts|info&inprop=url&explaintext=1&exsectionformat=wiki`;
const r=await(await fetch(u)).json();return r.query?Object.values(r.query.pages)[0]:null}
function parse(t){const p=t.split(/\n==+\s*(.*?)\s*==+\n/);let plot="";
for(let k=1;k<p.length;k+=2)if(/argumento|trama|sinopsis|historia|premisa|plot|story|synopsis|premise/i.test(p[k])&&p[k+1].trim().length>80){plot=p[k+1].trim();break}
return{sum:p[0].trim(),plot}}
async function info(x){let r=null;for(const[l,s]of(OP.lg=="en"?[["en"," video game"],["es"," videojuego"]]:[["es"," videojuego"],["en"," video game"]])){try{const p=await wk(l,x[0]+s);if(!p||!p.extract)continue;const d=parse(p.extract);
if(!r){r=d;r.url=p.fullurl;if(d.plot)r.pl=l}else if(!r.plot&&d.plot){r.plot=d.plot;r.pl=l}
if(r.sum.length>100&&r.plot)break}catch(e){}}return r}
function closeG(){$("md").hidden=true;document.body.style.overflow=""}
async function openG(i){const x=G[i],s=stat(x),tk=++cur;$("md").hidden=false;document.body.style.overflow="hidden";
const im=x[9]&&OP.cv=="1"?`<img alt="" src="https://cdn.cloudflare.steamstatic.com/steam/apps/${x[9]}/header.jpg" onerror="this.remove()">`:"";
$("md").innerHTML=`<div class="mb" onclick="event.stopPropagation()"><div class="cv" style="--h:${hue(x[0])}"><span>${x[0][0]}</span>${im}</div><div class="mc"><button class="x" onclick="closeG()">✕ ${t("close")}</button><h2>${x[0]}</h2><p class="mu">${x[1]} · ${x[8]} GB · <span class="tag ${s}">${ST[s]}</span></p>
<table><tr><th></th><th>${t("wa")}</th><th>${t("ok")}</th></tr><tr><td>CPU</td><td>${need(CPU,x[2])}</td><td>${need(CPU,x[5])}</td></tr><tr><td>GPU</td><td>${need(GPU,x[3])}</td><td>${need(GPU,x[6])}</td></tr><tr><td>RAM</td><td>${x[4]} GB</td><td>${x[7]} GB</td></tr><tr><td>${t("disk")}</td><td colspan="2">${x[8]} GB</td></tr></table>
<h3>${t("sumh")}</h3><p id="gi1" class="mu">${t("load")}</p><h3>${t("plot")} <span class="mu">${t("spo")}</span></h3><p id="gi2" class="mu">${t("load")}</p><p id="gi3" class="mu"></p></div></div>`;
const d=await info(x);if(tk!=cur)return;const set=(id,v)=>{$(id).textContent=v};
if(!d){set("gi1",t("fail"));set("gi2","");return}
set("gi1",cut(d.sum,700)||t("nosum"));
set("gi2",d.plot?cut(d.plot,1400)+(d.pl!=OP.lg?" ("+t("otherl")+")":""):t("noplot"));
$("gi3").innerHTML=t("src")+': <a href="'+encodeURI(d.url)+'" target="_blank" rel="noopener">Wikipedia</a>'}
$("md").onclick=closeG;document.addEventListener("keydown",e=>{if(e.key=="Escape")closeG()});

initUI();
