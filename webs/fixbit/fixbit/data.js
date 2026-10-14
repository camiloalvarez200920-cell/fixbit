// Catálogo: nombre|género|CPU mín|GPU mín|RAM mín|CPU rec|GPU rec|RAM rec|GB|Steam appid (portada)
// CPU/GPU en puntuación relativa (ver listas en app.js). Para añadir un juego, agrega una línea.
const RAW=`Among Us|Social|3|1|2|5|2|4|1|945360
Stardew Valley|Granja|3|2|2|8|3|4|1|413150
Undertale|RPG indie|3|1|2|5|2|4|1|391540
Terraria|Aventura|3|2|4|8|5|4|1|105600
Celeste|Plataformas|5|2|2|8|4|4|1|504230
Cuphead|Plataformas|8|5|4|15|8|4|4|268910
Vampire Survivors|Roguelike|3|2|2|8|3|4|1|1794680
Slay the Spire|Cartas|3|2|2|8|3|4|1|646570
Dead Cells|Metroidvania|5|3|4|10|6|4|1|588650
Hollow Knight|Metroidvania|8|5|4|15|10|8|9|367520
Hades|Roguelike|12|8|4|20|12|8|15|1145360
Hades II|Roguelike|15|10|8|24|17|8|10|1145350
Cult of the Lamb|Roguelike|8|5|4|15|10|8|4|1313140
Ori and the Will of the Wisps|Plataformas|15|10|4|24|17|8|18|1057090
Outer Wilds|Aventura|15|10|8|24|17|8|5|753640
Disco Elysium|RPG|8|5|4|15|8|8|20|632470
Minecraft|Sandbox|5|3|4|15|12|8|1|
Roblox|Sandbox|5|2|4|15|8|8|1|
League of Legends|MOBA|5|2|4|15|8|8|22|
Valorant|FPS|8|3|4|20|12|8|30|
Fortnite|Battle Royale|15|12|8|38|26|16|35|
Dota 2|MOBA|10|6|4|20|17|8|40|570
Team Fortress 2|FPS|8|3|2|15|8|4|25|440
Left 4 Dead 2|Cooperativo|8|3|2|15|8|4|13|550
Portal 2|Puzzle|8|3|2|15|8|4|13|620
Half-Life 2|FPS|5|2|2|10|5|4|8|220
Counter-Strike 2|FPS|20|12|8|38|26|16|35|730
Lethal Company|Cooperativo|15|8|4|30|17|8|1|1966720
Phasmophobia|Terror|15|10|8|30|17|16|21|739630
Content Warning|Cooperativo|15|10|8|30|17|16|1|2881650
Deep Rock Galactic|Cooperativo|15|10|8|30|17|16|3|548430
The Sims 4|Simulación|12|6|4|24|17|8|50|1222670
Euro Truck Simulator 2|Simulación|10|6|4|20|12|8|20|227300
Project Zomboid|Supervivencia|15|8|8|24|12|16|5|108600
RimWorld|Estrategia|15|6|8|24|10|16|1|294100
Factorio|Automatización|10|5|4|20|10|8|1|427520
Satisfactory|Automatización|30|19|8|50|30|16|20|526870
Subnautica|Supervivencia|20|12|8|30|20|8|10|264710
Valheim|Supervivencia|20|12|8|38|26|16|2|892970
Skyrim SE|RPG|15|12|8|24|19|8|12|489830
Rocket League|Deportes|15|12|4|30|24|8|20|252950
Civilization VI|Estrategia|20|12|8|38|26|16|20|289070
Age of Empires II DE|Estrategia|15|8|8|30|17|8|50|813780
Age of Empires IV|Estrategia|30|19|8|50|30|16|50|1466860
Stellaris|Estrategia|20|8|8|38|12|16|10|281990
Crusader Kings III|Estrategia|20|8|8|38|12|16|8|1158310
Hearts of Iron IV|Estrategia|20|8|8|38|12|16|6|394360
Cities: Skylines|Estrategia|20|12|4|38|26|8|5|255710
Planet Zoo|Simulación|30|19|8|50|30|16|20|703080
Total War: Warhammer III|Estrategia|38|30|8|52|42|16|120|1142710
Fall Guys|Party|15|8|8|30|17|8|2|1097150
Sea of Thieves|Aventura|20|12|8|38|26|16|45|1172620
Grand Theft Auto V|Acción|20|12|8|30|26|16|105|271590
Fallout 4|RPG|20|14|8|30|22|8|30|377160
The Witcher 3|RPG|24|19|8|38|26|16|50|292030
Kingdom Come: Deliverance|RPG|24|19|8|38|30|16|50|379430
Mount & Blade II: Bannerlord|Estrategia|30|19|16|50|30|16|60|261550
Dark Souls III|Souls|24|19|8|38|30|8|25|374320
Sekiro|Souls|24|19|8|38|30|16|25|814380
Elden Ring|Souls|24|19|12|38|30|16|60|1245620
Nioh 2|Souls|30|26|8|50|36|16|80|1325200
Lies of P|Souls|38|26|16|50|36|16|35|1627720
Monster Hunter: World|Acción RPG|30|26|8|50|36|16|50|582010
Monster Hunter Wilds|Acción RPG|52|42|16|72|62|16|75|2246340
Doom Eternal|FPS|30|26|8|38|30|8|80|782330
Borderlands 3|Looter shooter|30|26|6|50|36|16|75|397540
Metro Exodus|FPS|30|26|8|50|42|16|60|412020
Control|Acción|30|26|8|50|36|16|42|870780
Dying Light 2|Acción|38|30|8|52|42|16|60|534380
Far Cry 6|Acción|38|30|8|52|42|16|60|2369390
Assassin's Creed Odyssey|Acción RPG|30|26|8|50|36|8|46|812140
Assassin's Creed Valhalla|Acción RPG|38|30|8|52|42|8|160|2208920
Hitman 3|Sigilo|24|19|8|50|30|16|60|1659040
Red Dead Redemption 2|Mundo abierto|30|26|12|50|36|16|150|1174180
Horizon Zero Dawn|Aventura|30|26|8|50|36|16|100|1151640
God of War|Aventura|30|26|8|50|36|8|70|1593500
Marvel's Spider-Man Remastered|Aventura|38|30|8|52|42|16|75|1817070
Death Stranding|Aventura|30|26|8|50|36|8|70|1190460
Resident Evil 2|Terror|24|19|8|38|30|16|26|883710
Resident Evil Village|Terror|30|26|8|50|36|16|30|1196590
Resident Evil 4|Terror|30|26|16|50|36|16|60|2050650
Star Wars Jedi: Survivor|Acción|38|30|8|52|42|16|155|1774580
Cyberpunk 2077|RPG|38|30|12|52|42|16|70|1091500
Baldur's Gate 3|RPG|38|26|8|50|36|16|150|1086940
Hogwarts Legacy|RPG|38|30|16|52|42|16|85|990080
Starfield|RPG|52|42|16|72|52|16|125|1716740
Mass Effect Legendary Edition|RPG|24|19|8|38|26|16|120|1328670
Apex Legends|Battle Royale|24|19|8|38|30|16|60|1172470
PUBG: Battlegrounds|Battle Royale|30|19|8|50|30|16|40|578080
Call of Duty: Warzone|Battle Royale|38|30|16|52|42|16|125|1962663
Overwatch 2|FPS|20|12|6|38|26|16|50|2357570
Rainbow Six Siege|FPS|24|19|8|38|30|16|90|359550
Battlefield 2042|FPS|38|30|8|52|42|16|100|1517290
Halo Infinite|FPS|30|26|8|50|36|16|50|1240440
Destiny 2|Looter shooter|30|19|8|50|30|16|105|1085660
Warframe|Looter shooter|15|8|4|30|17|8|50|230410
Helldivers 2|Shooter|38|26|16|50|36|16|100|553850
Ready or Not|FPS|38|30|16|52|42|16|90|1144200
Rust|Supervivencia|30|19|10|50|30|16|35|252490
ARK: Survival Evolved|Supervivencia|30|26|8|50|36|16|60|346110
7 Days to Die|Supervivencia|30|19|8|50|30|16|12|251570
DayZ|Supervivencia|30|19|8|50|30|16|20|221100
Palworld|Supervivencia|38|26|16|50|36|32|40|1623730
Path of Exile|ARPG|20|12|8|38|26|16|40|238960
Diablo IV|ARPG|24|19|8|38|36|16|90|2344520
Street Fighter 6|Lucha|30|26|8|50|36|16|60|1364780
Tekken 8|Lucha|38|30|16|52|42|16|100|1778820
Mortal Kombat 1|Lucha|38|26|8|50|36|16|100|1971870
Forza Horizon 4|Carreras|24|19|8|38|30|12|90|1293830
Forza Horizon 5|Carreras|38|30|16|52|42|16|110|1551360
Need for Speed Unbound|Carreras|38|30|16|52|42|16|50|1846380
EA Sports FC 25|Deportes|30|19|8|50|30|16|50|2669320
Stray|Aventura|20|19|8|38|30|16|10|1332010
It Takes Two|Cooperativo|20|19|8|38|26|16|50|1426210
Alan Wake 2|Terror|52|42|16|72|62|16|90|
Black Myth: Wukong|Acción|52|42|16|72|62|16|130|2358720
Microsoft Flight Simulator|Simulación|52|42|16|72|66|32|150|1250410
Portal|Puzzle|5|2|2|10|5|4|1|400
Hollow Knight: Silksong|Metroidvania|8|5|4|15|10|8|8|1030300
Balatro|Cartas|5|2|2|8|3|4|1|2379780
Dave the Diver|Aventura|8|5|4|15|8|8|2|1868140
Baba Is You|Puzzle|3|2|2|8|3|4|1|736260
Limbo|Puzzle|5|2|2|8|3|4|1|48000
Inside|Puzzle|8|5|4|15|8|4|3|304430
Little Nightmares II|Terror|15|10|4|24|17|8|9|860510
Outlast|Terror|10|5|4|20|12|4|5|238320
Dead by Daylight|Terror|20|12|8|30|26|8|50|381210
Resident Evil 3|Terror|24|19|8|38|30|16|45|952060
Dead Space|Terror|38|30|16|52|42|16|50|1693980
Silent Hill 2|Terror|38|30|16|52|42|16|50|2124490
Amnesia: The Bunker|Terror|20|12|8|30|26|8|5|1944430
Fallout: New Vegas|RPG|10|5|4|15|8|4|10|22380
The Elder Scrolls IV: Oblivion Remastered|RPG|38|30|16|52|42|16|125|2623190
Divinity: Original Sin 2|RPG|20|12|4|30|19|8|60|435150
Dragon's Dogma 2|RPG|38|30|16|52|42|16|70|2054970
Persona 5 Royal|JRPG|15|10|4|24|17|8|40|1687950
Octopath Traveler II|JRPG|15|10|8|24|17|8|15|1971650
NieR: Automata|Acción RPG|20|12|4|30|26|8|50|524220
Final Fantasy VII Remake Intergrade|RPG|30|26|8|50|36|16|100|1462040
Final Fantasy XIV|MMORPG|20|12|8|38|26|8|80|39210
Lost Ark|MMORPG|24|19|8|38|26|16|100|1599340
New World|MMORPG|30|26|8|50|36|16|60|1063730
Genshin Impact|Gacha RPG|20|12|8|38|26|16|70|
Honkai: Star Rail|Gacha RPG|15|10|8|30|17|16|30|
Wuthering Waves|Gacha RPG|30|26|16|50|36|16|40|
Shadow of the Tomb Raider|Aventura|30|26|8|50|36|16|40|750920
Batman: Arkham Knight|Acción|24|19|6|38|30|8|45|208650
Mafia: Definitive Edition|Acción|24|19|6|38|26|8|50|1030840
Ghost of Tsushima|Aventura|30|26|8|50|36|16|75|2215430
The Last of Us Part I|Aventura|38|30|16|52|42|16|100|1888930
Sifu|Acción|15|12|8|30|24|16|20|2138710
Hi-Fi Rush|Acción|24|19|8|38|26|16|30|1817230
Warhammer 40,000: Space Marine 2|Acción|38|30|8|52|42|16|75|2183900
Dark Souls Remastered|Souls|15|10|8|24|17|8|8|570940
Bioshock Infinite|FPS|10|8|4|20|12|4|20|8870
Borderlands 2|Looter shooter|12|6|2|24|12|4|14|49520
Battlefield 1|FPS|24|19|8|38|30|16|50|1238840
Battlefield V|FPS|30|26|8|50|36|16|80|1238810
Titanfall 2|FPS|20|12|8|30|26|8|45|1237970
Call of Duty: Black Ops 6|FPS|38|30|16|52|42|16|120|2933620
Hunt: Showdown|FPS|30|26|8|50|36|16|40|594650
Vermintide 2|Cooperativo|24|19|8|38|26|16|60|552500
Back 4 Blood|Cooperativo|24|19|8|38|30|16|50|924970
Grounded|Supervivencia|20|12|8|38|26|16|10|962130
Raft|Supervivencia|15|8|8|24|17|8|8|648800
The Forest|Supervivencia|20|12|4|30|19|8|5|242760
Sons of the Forest|Supervivencia|24|19|8|38|30|16|20|1326470
Green Hell|Supervivencia|20|12|8|38|26|8|10|815370
Don't Starve Together|Supervivencia|8|5|4|15|8|4|1|322330
Enshrouded|Supervivencia|30|26|16|50|36|16|20|1203620
V Rising|Supervivencia|24|19|8|38|26|16|8|1604030
Cities: Skylines II|Estrategia|52|42|16|72|62|32|60|949230
XCOM 2|Estrategia|20|12|4|38|26|8|45|268500
Total War: Three Kingdoms|Estrategia|24|19|8|38|30|8|60|779340
Anno 1800|Estrategia|24|19|8|38|30|16|60|916440
Frostpunk|Estrategia|20|12|8|38|26|8|8|323190
Frostpunk 2|Estrategia|38|30|16|52|42|16|40|1601580
Football Manager 2024|Deportes|10|6|4|20|12|8|7|2252570
NBA 2K25|Deportes|24|19|8|38|30|16|110|2878980
F1 24|Carreras|30|26|8|50|36|16|100|2488620
Assetto Corsa Competizione|Carreras|30|26|16|50|36|16|130|805550
Wreckfest|Carreras|20|12|8|38|26|8|40|228380
American Truck Simulator|Simulación|10|6|4|20|12|8|6|270880
Farming Simulator 22|Simulación|20|12|8|38|26|8|40|1248130
Kerbal Space Program|Simulación|15|8|8|30|12|16|4|220200`;
const G=RAW.split("\n").map(l=>{const a=l.split("|");return [a[0],a[1],...a.slice(2,9).map(Number),a[9]]});

// Procesadores: puntuación relativa orientativa de rendimiento en juegos (100 ≈ Core i9-14900K). Añade los tuyos aquí.
const mk=(b,s)=>s.split(",").map(x=>{const[n,v]=x.split(":");return[b+n,+v]});
const CPU=[...mk("Intel ","Celeron G5905:10,Pentium G4560:12,Pentium Gold G6400:18,Intel N100:14,Core i3-2100:3,Core i5-2500K:7,Core i7-2600K:8,Core i5-3570K:9,Core i7-3770K:11,Core i3-4130:8,Core i5-4460:11,Core i5-4690K:13,Core i7-4790K:16,Core i3-6100:15,Core i5-6500:17,Core i5-6600K:19,Core i7-6700K:22,Core i3-7100:16,Core i5-7400:20,Core i5-7600K:23,Core i7-7700K:27,Core i3-8100:22,Core i5-8400:28,Core i7-8700K:34,Core i3-9100F:24,Core i5-9400F:30,Core i5-9600K:34,Core i7-9700K:38,Core i9-9900K:43,Core i3-10100:29,Core i5-10400F:35,Core i5-10600K:42,Core i7-10700K:48,Core i9-10900K:52,Core i5-11400F:42,Core i5-11600K:48,Core i7-11700K:52,Core i9-11900K:54,Core i3-12100F:42,Core i5-12400F:52,Core i5-12600K:66,Core i7-12700K:70,Core i9-12900K:78,Core i5-13400F:58,Core i5-13600K:80,Core i7-13700K:88,Core i9-13900K:98,Core i5-14400F:60,Core i5-14600K:82,Core i7-14700K:92,Core i9-14900K:100,Core Ultra 5 245K:84,Core Ultra 7 265K:94,Core Ultra 9 285K:98,Core i5-1135G7 (portátil):28,Core i7-1165G7 (portátil):32,Core i5-12450H (portátil):46,Core i7-12700H (portátil):62,Core i7-13700H (portátil):70,Core i9-13900HX (portátil):90"),
...mk("AMD ","Athlon 200GE:8,Athlon 3000G:10,FX-6300:9,FX-8350:12,A10-7850K:8,Ryzen 3 1200:15,Ryzen 5 1600:24,Ryzen 7 1700:27,Ryzen 3 2200G:17,Ryzen 5 2400G:22,Ryzen 5 2600:29,Ryzen 7 2700X:34,Ryzen 3 3100:28,Ryzen 3 3300X:35,Ryzen 5 3600:38,Ryzen 5 3600X:40,Ryzen 7 3700X:44,Ryzen 9 3900X:48,Ryzen 9 3950X:50,Ryzen 5 4500:40,Ryzen 5 4600G:38,Ryzen 5 5500:46,Ryzen 5 5600G:46,Ryzen 5 5600:50,Ryzen 5 5600X:54,Ryzen 7 5700X:60,Ryzen 7 5800X:66,Ryzen 9 5900X:70,Ryzen 7 5700X3D:72,Ryzen 9 5950X:74,Ryzen 7 5800X3D:76,Ryzen 5 7500F:68,Ryzen 5 7600:72,Ryzen 5 7600X:76,Ryzen 7 7700:80,Ryzen 7 7700X:84,Ryzen 9 7900X:88,Ryzen 9 7950X:92,Ryzen 7 7800X3D:95,Ryzen 9 7950X3D:98,Ryzen 5 8600G:66,Ryzen 7 8700G:76,Ryzen 5 9600X:82,Ryzen 7 9700X:88,Ryzen 9 9900X:92,Ryzen 9 9950X:98,Ryzen 7 9800X3D:108,Ryzen 9 9950X3D:110,Ryzen 7 5800H (portátil):58,Ryzen 7 6800H (portátil):62,Ryzen 7 7840HS (portátil):72")].sort((a,b)=>a[1]-b[1]);
