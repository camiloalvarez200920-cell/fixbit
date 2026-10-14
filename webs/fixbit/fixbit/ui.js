// Opciones de la página, idiomas y cuadros de búsqueda con autocompletado
const I={es:{sub:"Resuelve errores, entiende tu equipo y elige juegos y componentes.",t0:"Videojuegos",t1:"Errores",t2:"Guías Windows",t3:"Componentes",t4:"Opciones",g_h:"Comparador de requisitos de videojuegos",l_cpu:"Procesador (escribe o elige)",l_gpu:"Tarjeta gráfica (escribe o elige)",l_q:"Buscar juego",l_gn:"Género",l_f:"Mostrar",all:"Todos",ok:"Recomendado",wa:"Mínimo",no:"No cumple",ph_c:"Escribe o elige…",ph_g:"Escribe o elige…",ph_q:"Ej: Elden, GTA…",e_h:"Buscador por código de error",e_ph:"Ej: 0x80070005, CRITICAL_PROCESS_DIED, vcruntime140.dll…",gd_h:"Guías interactivas de Windows",g_pick:"Elige una guía",c_h:"Comparador de componentes",c_t:"Tipo",cpus:"Procesadores",gpus:"Tarjetas gráficas",c_a:"Componente A (escribe o elige)",c_b:"Componente B (escribe o elige)",c_note:"Puntuación relativa orientativa para juegos (100 ≈ gama alta actual). No sustituye a benchmarks reales.",opt:"Opciones",o_th:"Tema",th_a:"Sistema",th_l:"Claro",th_d:"Oscuro",o_lg:"Idioma",o_fs:"Tamaño de texto",fs_s:"Pequeño",fs_m:"Normal",fs_l:"Grande",o_vw:"Vista de juegos",vw_g:"Cuadrícula",vw_l:"Lista",o_cv:"Portadas de juegos",on:"Mostrar",off:"Ocultar",o_ac:"Color de acento",reset:"Restablecer opciones",o_note:"Los textos de errores y guías, y los géneros, están solo en español.",sum:"{g} juegos · {a} recomendados · {b} en mínimo · {c} no cumplen. Haz clic en un juego para ver su ficha.",nores:"Sin resultados",nomatch:"No hay coincidencias. Prueba con parte del código o con el nombre del error.",st:"pasos",close:"Cerrar",disk:"Disco",sumh:"Resumen",plot:"Trama",spo:"(puede contener spoilers)",load:"Cargando…",src:"Fuente",fail:"No se pudo cargar la información (¿sin conexión?).",nosum:"Sin resumen disponible.",noplot:"Sin sección de trama disponible.",otherl:"texto en inglés",basic:"Básico / integrado",sim:"Rendimiento similar",more:"{n} rinde ~{p}% más"},
en:{sub:"Fix errors, understand your PC and pick games and components.",t0:"Games",t1:"Errors",t2:"Windows guides",t3:"Components",t4:"Options",g_h:"Game requirements checker",l_cpu:"Processor (type or pick)",l_gpu:"Graphics card (type or pick)",l_q:"Search game",l_gn:"Genre",l_f:"Show",all:"All",ok:"Recommended",wa:"Minimum",no:"Not met",ph_c:"Type or pick…",ph_g:"Type or pick…",ph_q:"E.g. Elden, GTA…",e_h:"Error code search",e_ph:"E.g. 0x80070005, CRITICAL_PROCESS_DIED, vcruntime140.dll…",gd_h:"Interactive Windows guides",g_pick:"Pick a guide",c_h:"Component comparator",c_t:"Type",cpus:"Processors",gpus:"Graphics cards",c_a:"Component A (type or pick)",c_b:"Component B (type or pick)",c_note:"Approximate relative gaming score (100 ≈ current high end). Not a substitute for real benchmarks.",opt:"Options",o_th:"Theme",th_a:"System",th_l:"Light",th_d:"Dark",o_lg:"Language",o_fs:"Text size",fs_s:"Small",fs_m:"Normal",fs_l:"Large",o_vw:"Games view",vw_g:"Grid",vw_l:"List",o_cv:"Game covers",on:"Show",off:"Hide",o_ac:"Accent color",reset:"Reset options",o_note:"Error and guide texts, and genres, are only available in Spanish.",sum:"{g} games · {a} recommended · {b} minimum · {c} not met. Click a game to see its details.",nores:"No results",nomatch:"No matches. Try part of the code or the error name.",st:"steps",close:"Close",disk:"Disk",sumh:"Summary",plot:"Plot",spo:"(may contain spoilers)",load:"Loading…",src:"Source",fail:"Could not load the information (offline?).",nosum:"No summary available.",noplot:"No plot section available.",otherl:"text in Spanish",basic:"Basic / integrated",sim:"Similar performance",more:"{n} performs ~{p}% better"}};
const DEF={th:"auto",lg:"es",fs:"16",vw:"grid",cv:"1",ac:""};
let OP=Object.assign({},DEF);
try{Object.assign(OP,JSON.parse(localStorage.getItem("pcop")||"{}"))}catch(e){}
const t=k=>(I[OP.lg]||I.es)[k]||I.es[k]||k;
const save=()=>{try{localStorage.setItem("pcop",JSON.stringify(OP))}catch(e){}};
const find=(v,a)=>{v=v.trim().toLowerCase();return a.find(z=>z[0].toLowerCase()==v)||null};
// cuadro de texto con autocompletado (datalist): escribe, elige o escribe parte del nombre
function combo(id,arr,ok){const e=$(id);
e.onfocus=()=>{e.dataset.p=e.value;e.value=""};
e.oninput=()=>{const z=find(e.value,arr());e.classList.toggle("bad",!z&&e.value!=="");if(z)ok(z)};
e.onblur=()=>{const a=arr(),v=e.value.trim().toLowerCase();let z=find(e.value,a);
if(!z&&v){const m=a.filter(q=>q[0].toLowerCase().includes(v));if(m.length==1)z=m[0]}
if(z){e.value=z[0];ok(z)}else e.value=e.dataset.p||"";e.classList.remove("bad")}}
const OM={o_th:"th",o_lg:"lg",o_fs:"fs",o_vw:"vw",o_cv:"cv"};
function applyO(){const r=document.documentElement;
OP.th=="auto"?r.removeAttribute("data-theme"):r.setAttribute("data-theme",OP.th);
r.style.setProperty("--ac",OP.ac);document.body.style.fontSize=OP.fs+"px";r.lang=OP.lg;
document.querySelectorAll("[data-i]").forEach(e=>e.textContent=t(e.dataset.i));
document.querySelectorAll("[data-p]").forEach(e=>e.placeholder=t(e.dataset.p));
[...$("nav").children].forEach((b,j)=>b.textContent=t("t"+j));$("gn").options[0].textContent=t("all");
for(const id in OM)$(id).value=OP[OM[id]];
document.querySelectorAll("#sw button").forEach(b=>b.classList.toggle("on",b.dataset.c==OP.ac));
games();err();prog();cmp()}
function initUI(){
for(const id in OM)$(id).onchange=e=>{OP[OM[id]]=e.target.value;save();applyO()};
$("sw").innerHTML=["","#12a150","#8b5cf6","#f97316","#e11d48","#0891b2"].map(c=>`<button data-c="${c}" style="background:${c||"#3b5bfd"}" aria-label="${c||"default"}"></button>`).join("");
$("sw").onclick=e=>{const b=e.target.closest("button");if(b){OP.ac=b.dataset.c;save();applyO()}};
$("rs").onclick=()=>{OP=Object.assign({},DEF);save();applyO()};
applyO()}
