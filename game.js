/* TRANSLATIONS */
const LANG_DATA = {
    en: {
        role_villager: { n: "Villager", d: "A regular citizen. Your weapon is deduction." },
        role_lycan: { n: "Lycan", d: "You are a villager. But Seers will mistakenly see you as a Werewolf." },
        role_warden: { n: "Warden", d: "Once revealed, you can interrogate and potentially execute a player during the day." },
        role_auraseer: { n: "Aura Seer", d: "Inspect one player each night. You only learn if they are a Werewolf or not." },
        role_redlady: { n: "Red Lady", d: "Sleep at someone's house. You survive if targeted, but die if your host dies or is a Wolf." },
        role_seer: { n: "Seer", d: "Inspect one player each night to learn their true role." },
        role_priest: { n: "Priest", d: "Throw Holy Water once at a Wolf/Neutral to kill them. Kills you if used on a Villager." },
        role_vigilante: { n: "Vigilante", d: "One investigation and one very loud gunshot." },
        role_president: { n: "President", d: "Vote counts twice. If killed at night, villagers can injure suspects directly." },
        role_xatled: { n: "Xatled", d: "Mark a house. On a future night, suffocate them if they stay inactive." },
        role_bodyguard: { n: "Bodyguard", d: "Defend one person each night. If a non-wolf attacks them, you die instead." },
        role_naughtyboy: { n: "Naughty Boy", d: "Once per game, swap the roles of two other players." },
        role_cursed: { n: "Cursed", d: "Innocent at first. If Wolves attack you, you permanently turn into a Werewolf." },
        
        role_werewolf: { n: "Werewolf", d: "Coordinate with your pack and eliminate the village." },
        role_zombiewolf: { n: "Zombie Wolf", d: "Infect victims. Infect enough survivors to steal the win." },
        role_skelarry: { n: "Skelarry", d: "Kill normally. If killed at night, you become a useless Skeleton." },
        role_serialkiller: { n: "Serial Killer", d: "Silently explode someone. Victim won't be announced in recap." },

        role_fool: { n: "The Fool", d: "Your only goal is to get publicly executed during voting." },
        role_hunter: { n: "Hunter", d: "Assigned one target. If they get voted out while you live, you win." },
        role_powerplex: { n: "PowerPlex", d: "Bind energy to a player. If you die, they die violently in revenge." },
        role_ger: { n: "GER", d: "Invincible at night. If voted out, you can Uno Reverse the hanging to someone else." },
        role_necromancer: { n: "Necromancer", d: "Revive someone once per game. You permanently join their team." },
        role_skeleton: { n: "Skeleton", d: "You are just a pile of bones. You cannot vote or act." },

        cat_village: "Villagers Team", cat_wolves: "Werewolves Team", cat_neutral: "Neutral Team"
    },
    id: {
        role_villager: { n: "Warga", d: "Cuma warga biasa. Tugas lu cuma diskusi nebak siapa jahatnya." },
        role_lycan: { n: "Lycan", d: "Lu warga biasa, tapi kalo diterawang bakal keliatan kayak Serigala." },
        role_warden: { n: "Sipir", d: "Bisa interogasi 1 orang pas siang dan eksekusi dia di tempat." },
        role_auraseer: { n: "Penerawang Aura", d: "Tiap malem lu cuma bisa tau 1 orang itu Serigala atau bukan." },
        role_redlady: { n: "LC", d: "Nginep di rumah orang. Kalo diserang lu selamat, tapi kalo target lu mati ato Serigala, lu ikut mati." },
        role_seer: { n: "Penerawang", d: "Tiap malem lu bisa liat peran asli 1 orang." },
        role_priest: { n: "Pendeta", d: "Punya 1 air suci buat bunuh jahat. Kalo lu siram warga baik, lu yg mati." },
        role_vigilante: { n: "Vigilante", d: "Punya 1 pistol berisik & 1 teropong buat cek peran." },
        role_president: { n: "Presiden", d: "Vote lu diitung 2. Kalo lu mati dibunuh malem, besoknya warga bebas keroyok orang." },
        role_xatled: { n: "Xatled", d: "Tandain rumah orang. Kalo di malem berikutnya dia diem aja (tidur), lu bisa kentutin dia." },
        role_bodyguard: { n: "Penjaga", d: "Jagain 1 orang. Kalo diserang selain serigala, lu yg mati demi dia." },
        role_naughtyboy: { n: "Bocah Dajjal", d: "Sekali seumur hidup, tuker peran 2 orang secara rahasia." },
        role_cursed: { n: "Terkutuk", d: "Awalnya warga biasa. Kalo diserang serigala, lu ga mati tapi berubah jadi Serigala." },
        
        role_werewolf: { n: "Serigala", d: "Pilih 1 orang buat dimakan bareng temen serigala lu tiap malem." },
        role_zombiewolf: { n: "Serigala Zombie", d: "Gigit orang jadi zombie. Kalo zombie udah menang jumlah, lu menang." },
        role_skelarry: { n: "Skelarry", d: "Membunuh kayak biasa. Tapi kalo lu dibunuh pas malem, lu cuma jadi tengkorak (hidup tapi ga bisa apa-apa)." },
        role_serialkiller: { n: "Pembunuh Berantai", d: "Bikin orang meledak. Korban ga bakal diumumin mati pas pagi." },

        role_fool: { n: "Orang Gila", d: "Tujuan lu cuma satu: Bikin diri lu sendiri divote mati pas siang." },
        role_hunter: { n: "Hunter", d: "Lu dikasih 1 target. Kalo target lu divote mati siang hari, lu lgsg menang." },
        role_powerplex: { n: "PowerPlex", d: "Ikat nyawa lu sama 1 orang. Kalo lu mati, dia ikut mati kesetrum." },
        role_ger: { n: "GER", d: "Kebal dibunuh pas malem. Kalo lu divote mati pas siang, lu bisa UNO REVERSE gantung orang lain!" },
        role_necromancer: { n: "Dukun", d: "Hidupin 1 orang mati. Lu bakal permanen pindah ke tim orang yg lu hidupin." },
        role_skeleton: { n: "Tengkorak", d: "Lu cuma tumpukan tulang. Ga bisa ngapa-ngapain, ga bisa ngevote." },

        cat_village: "Tim Warga", cat_wolves: "Tim Serigala", cat_neutral: "Tim Netral"
    }
};

let currentLang = 'en';

const ROLE_CONFIG = {
    "villager": { id:"villager", emoji:"🧑‍🌾", team:"village", cat:"village" },
    "lycan": { id:"lycan", emoji:"🐺", team:"village", cat:"village" },
    "warden": { id:"warden", emoji:"⚖️", team:"village", cat:"village" },
    "auraseer": { id:"auraseer", emoji:"🔮", team:"village", cat:"village", needsTarget:true },
    "redlady": { id:"redlady", emoji:"💃", team:"village", cat:"village", needsTarget:true },
    "seer": { id:"seer", emoji:"👁️", team:"village", cat:"village", needsTarget:true },
    "priest": { id:"priest", emoji:"✝️", team:"village", cat:"village", needsTarget:true, charges:1 },
    "vigilante": { id:"vigilante", emoji:"🔫", team:"village", cat:"village", customUI:true },
    "president": { id:"president", emoji:"🎩", team:"village", cat:"village" },
    "xatled": { id:"xatled", emoji:"💨", team:"village", cat:"village", customUI:true },
    "bodyguard": { id:"bodyguard", emoji:"🛡️", team:"village", cat:"village", needsTarget:true },
    "naughtyboy": { id:"naughtyboy", emoji:"😈", team:"village", cat:"village", customUI:true, charges:1 },
    "cursed": { id:"cursed", emoji:"🩸", team:"village", cat:"village" },
    "werewolf": { id:"werewolf", emoji:"🐺", team:"wolves", cat:"wolves", needsTarget:true },
    "zombiewolf": { id:"zombiewolf", emoji:"🧟", team:"wolves", cat:"wolves", needsTarget:true },
    "skelarry": { id:"skelarry", emoji:"💀", team:"wolves", cat:"wolves", needsTarget:true },
    "serialkiller": { id:"serialkiller", emoji:"💣", team:"wolves", cat:"wolves", needsTarget:true },
    "fool": { id:"fool", emoji:"🤡", team:"neutral", cat:"neutral" },
    "hunter": { id:"hunter", emoji:"🎯", team:"neutral", cat:"neutral" },
    "powerplex": { id:"powerplex", emoji:"⚡", team:"neutral", cat:"neutral", needsTarget:true },
    "ger": { id:"ger", emoji:"🔄", team:"neutral", cat:"neutral" },
    "necromancer": { id:"necromancer", emoji:"🧟‍♂️", team:"neutral", cat:"neutral", customUI:true, charges:1 },
    "skeleton": { id:"skeleton", emoji:"🦴", team:"neutral", cat:"neutral", hidden:true }
};

let players = [];
let savedLibrary = [];
let roleCounts = {};
Object.keys(ROLE_CONFIG).forEach(k => { if(!ROLE_CONFIG[k].hidden) roleCounts[k] = 0 });

let settings = { revealDeath:true, hideTimer:false, noKillN1:false, hideVotes:false };
let activeEditingPlayerId = null;

let gameState = {
    dayNum:1, turnIndex:0, deadTonightMap:{}, exploded:[], nightActions:{}, 
    skipVotingTomorrow:false, villagersCanInjure:false, injuryMarks:{}, 
    zombieInfections:[], votes:{}, votingTurnIndex:0, votingSelection:null, 
    tempState:{}, vigilanteRevealed:null
};

let timerInterval;
let timeLeft = 120;
let wardenTimerInterval;
let wardenTimeLeft = 60;

/* INIT AND STORAGE */
window.onload = () => {
    savedLibrary = JSON.parse(localStorage.getItem('wolvesville_library') || '[]');
    let l = localStorage.getItem('wolvesville_lang');
    if(l) { document.getElementById('lang-select').value = l; changeLanguage(l); }
};

function saveConfig() {
    localStorage.setItem('wolvesville_library', JSON.stringify(savedLibrary));
    localStorage.setItem('wolvesville_lang', currentLang);
}

function changeLanguage(lang) {
    currentLang = lang;
    saveConfig();
    renderRoles();
}

function getRoleText(id, key) {
    return LANG_DATA[currentLang][`role_${id}`][key];
}

/* HELPER VISIONS */
function getSeenRole(targetId) {
    let t = players.find(x => x.id === targetId);
    if (t.role.id === "lycan") return "werewolf";
    return t.role.id;
}
function getAura(targetId) {
    let t = players.find(x => x.id === targetId);
    if (t.team === "wolves" || t.role.id === "lycan") return "Werewolf";
    return "Not a Werewolf";
}

/* UI UTILS */
function nav(screenId){
    document.querySelectorAll('.screen').forEach(s => s.classList.remove('active'));
    document.getElementById(screenId).classList.add('active');
}
function closePopup(id){ document.getElementById(id).style.display = 'none'; activeEditingPlayerId = null; }
function showAlert(title,msg){ document.getElementById('custom-alert-title').innerText = title; document.getElementById('custom-alert-msg').innerText = msg; document.getElementById('custom-alert-overlay').style.display = 'flex'; }
function showError(msg){ document.getElementById('error-title').innerText = "Notice"; document.getElementById('error-msg').innerText = msg; document.getElementById('error-overlay').style.display = 'flex'; }
function confirmQuit(){ if(confirm("Exit match? Data will be lost.")){ nav('screen-players'); renderPlayers(); } }
function attemptOpenPlayers(){ nav('screen-players'); renderPlayers(); }

/* PLAYERS & LIBRARY */
function goToRolesScreen(){
    if(players.length < 4){ showError("Need 4 players min."); return; }
    nav('screen-roles'); renderRoles();
}
function renderPlayers(){
    const list = document.getElementById('players-list'); list.innerHTML = "";
    players.forEach(p => {
        let div = document.createElement('div'); div.className = "player-row fade-element";
        div.onclick = () => openPlayerOptions(p.id);
        div.innerHTML = `<div style="display:flex; align-items:center;"><div class="pfp">${p.name.charAt(0).toUpperCase()}</div><span style="font-size:18px;">${p.name}</span></div>`;
        list.appendChild(div);
    });
    document.getElementById('player-count').innerText = players.length;
}
function createNewPlayerDirectly(){
    let name = prompt("Name:");
    if(name && name.trim()){ players.push({ id:Date.now().toString(), name:name.trim() }); renderPlayers(); }
}
function openPlayerOptions(playerId){ activeEditingPlayerId = playerId; document.getElementById('edit-player-name').value = players.find(p => p.id === playerId).name; document.getElementById('player-options-overlay').style.display = "flex"; }
function submitPlayerRename(){ const n = document.getElementById('edit-player-name').value.trim(); if(n){ players.find(p => p.id === activeEditingPlayerId).name = n; } closePopup('player-options-overlay'); renderPlayers(); }
function deleteActivePlayer(){ players = players.filter(p => p.id !== activeEditingPlayerId); closePopup('player-options-overlay'); renderPlayers(); }

function renderLibraryScreen(){
    const c = document.getElementById('library-list'); c.innerHTML = "";
    if(savedLibrary.length === 0){ c.innerHTML = `<p style="opacity:0.4;">Empty.</p>`; return; }
    savedLibrary.forEach(l => {
        let active = players.some(p => p.name === l.name);
        let div = document.createElement('div'); div.className = "player-row fade-element";
        div.innerHTML = `<div class="pfp ${active ? 'lib-active' : ''}">${l.name.charAt(0).toUpperCase()}</div><div>${l.name}</div>`;
        div.onclick = () => {
            if(active){ players = players.filter(p => p.name !== l.name); } 
            else { players.push({ id:Date.now().toString() + Math.random(), name:l.name }); }
            renderLibraryScreen();
        };
        c.appendChild(div);
    });
}
function savePlayerToLibrary(){
    const n = document.getElementById('edit-player-name').value.trim();
    if(n && !savedLibrary.some(x => x.name === n)){ savedLibrary.push({name:n}); saveConfig(); }
    closePopup('player-options-overlay');
}
function addBlankLibraryPlayer(){
    let n = prompt("Name:");
    if(n && !savedLibrary.some(x => x.name === n)){ savedLibrary.push({name:n.trim()}); saveConfig(); }
    renderLibraryScreen();
}

/* ROLES SETUP */
function renderRoles(){
    const list = document.getElementById('roles-list'); list.innerHTML = "";
    let totalAssigned = Object.values(roleCounts).reduce((a,b)=>a+b,0);
    document.getElementById('role-count').innerText = totalAssigned;
    document.getElementById('player-count').innerText = players.length;
    document.getElementById('to-settings-btn').disabled = (totalAssigned !== players.length);

    const categories = ["village", "wolves", "neutral"];
    categories.forEach(catKey => {
        let catRoles = Object.keys(ROLE_CONFIG).filter(k => ROLE_CONFIG[k].cat === catKey && !ROLE_CONFIG[k].hidden);
        if(catRoles.length === 0) return;
        
        let title = document.createElement('div'); title.className = "team-category-title";
        title.innerText = LANG_DATA[currentLang][`cat_${catKey}`];
        list.appendChild(title);

        catRoles.forEach(rId => {
            let role = ROLE_CONFIG[rId];
            let div = document.createElement('div'); div.className = "role-row fade-element";
            let isAtCap = totalAssigned >= players.length;
            div.innerHTML = `
                <div style="cursor:pointer;" onclick="openRoleInfo('${rId}')">
                    <span style="font-weight:600;">${role.emoji} ${getRoleText(rId, 'n')}</span>
                </div>
                <div class="role-controls">
                    <button onclick="updateRoleCount('${rId}', -1)">-</button>
                    <span style="font-size:18px; width:20px; text-align:center;">${roleCounts[rId]}</span>
                    <button onclick="updateRoleCount('${rId}', 1)" ${isAtCap ? "disabled" : ""}>+</button>
                </div>
            `;
            list.appendChild(div);
        });
    });
}

function updateRoleCount(roleId, change){
    let total = Object.values(roleCounts).reduce((a,b)=>a+b,0);
    if(change > 0 && total >= players.length) return;
    if(change < 0 && roleCounts[roleId] <= 0) return;
    roleCounts[roleId] += change; renderRoles();
}

function randomizeRolesFairly(){
    if(players.length < 4) return;
    Object.keys(roleCounts).forEach(k => roleCounts[k] = 0);
    let wolfCount = Math.max(1, Math.floor(players.length / 3));
    roleCounts["werewolf"] = wolfCount;
    let remaining = players.length - wolfCount;
    
    let possibleVillagers = Object.keys(ROLE_CONFIG).filter(k => ROLE_CONFIG[k].team === "village" && !ROLE_CONFIG[k].hidden && k !== "villager");
    let powerVillagerCount = Math.floor(remaining * 0.5);
    for(let i=0; i < powerVillagerCount; i++){
        let pick = possibleVillagers[Math.floor(Math.random() * possibleVillagers.length)];
        roleCounts[pick]++;
        remaining--;
    }

    let possibleNeutrals = Object.keys(ROLE_CONFIG).filter(k => ROLE_CONFIG[k].team === "neutral" && !ROLE_CONFIG[k].hidden);
    while(remaining > 0){
        let pool = Math.random() > 0.8 ? possibleNeutrals : ["villager"];
        let pick = pool[Math.floor(Math.random() * pool.length)];
        roleCounts[pick]++; remaining--;
    }
    renderRoles();
}

function openRoleInfo(roleId){
    document.getElementById('popup-role-name').innerText = `${ROLE_CONFIG[roleId].emoji} ${getRoleText(roleId, 'n')}`;
    document.getElementById('popup-role-desc').innerText = getRoleText(roleId, 'd');
    document.getElementById('role-info-overlay').style.display = "flex";
}

/* MATCH FLOW */
function startGame(){
    if(players.length < 4) return;
    settings.revealDeath = document.getElementById('set-reveal-death').checked;
    settings.hideTimer = document.getElementById('set-hide-timer').checked;
    settings.noKillN1 = document.getElementById('set-no-kill-night-1').checked;
    settings.hideVotes = document.getElementById('set-hide-votes').checked;
    document.getElementById('discussion-timer').style.display = settings.hideTimer ? 'none' : 'block';
    document.getElementById('timer-toggle-btn').style.display = settings.hideTimer ? 'none' : 'inline-block';

    let pool = [];
    for(const [id,c] of Object.entries(roleCounts)){
        for(let i=0;i<c;i++){ pool.push(ROLE_CONFIG[id]); }
    }
    pool.sort(() => Math.random() - 0.5);

    players.forEach((p,i) => {
        p.alive = true; p.role = {...pool[i]}; p.team = p.role.team; p.state = {};
        if(p.role.charges) p.state.charges = p.role.charges;
        if(p.role.id === "vigilante") { p.state.hasSeer = true; p.state.hasKill = true; }
    });

    gameState = {
        dayNum:1, deadTonightMap:{}, exploded:[], nightActions:{}, skipVotingTomorrow:false,
        villagersCanInjure:false, injuryMarks:{}, zombieInfections:[], tempState:{}, vigilanteRevealed:null
    };

    let hunters = players.filter(p => p.role.id === "hunter");
    hunters.forEach(h => {
        let others = players.filter(p => p.id !== h.id);
        gameState.tempState[`hunterTarget_${h.id}`] = others[Math.floor(Math.random() * others.length)].id;
    });

    setupNight();
}

function setupNight(){
    gameState.turnIndex = 0;
    gameState.nightActions = { wolfKills:[], skKill:null, bodyguard:null, priest:null, vigiKill:null, vigiSeer:false, xatled:null, necroRevive:null, naughtySwap:null, redlady:null };
    players.forEach(p => p.state.didAction = false);
    document.getElementById('night-title').innerText = `Night ${gameState.dayNum}`;
    nav('screen-night-transition');
}

function startNextNightTurn(){
    while(gameState.turnIndex < players.length && !players[gameState.turnIndex].alive){ gameState.turnIndex++; }
    if(gameState.turnIndex >= players.length) return processNightResolutions();

    document.getElementById('turn-player-name').innerText = players[gameState.turnIndex].name;
    document.getElementById('hidden-role-state').style.display = 'block';
    document.getElementById('revealed-role-state').style.display = 'none';
    nav('screen-night-turn');
}

function revealRole(){
    document.getElementById('hidden-role-state').style.display = 'none';
    document.getElementById('revealed-role-state').style.display = 'flex';
    let p = players[gameState.turnIndex];
    document.getElementById('turn-role-name').innerText = `${p.role.emoji} ${getRoleText(p.role.id, 'n')}`;
    let extraDesc = getRoleText(p.role.id, 'd');

    if(p.role.id === "hunter"){
        let tid = gameState.tempState[`hunterTarget_${p.id}`];
        let target = players.find(x => x.id === tid);
        extraDesc += target ? `<br><br><span style="color:var(--warning-color);">Target: ${target.name}</span>` : "";
    }
    if(settings.noKillN1 && gameState.dayNum === 1 && ["werewolf","skelarry","serialkiller","vigilante","priest"].includes(p.role.id)){
        extraDesc += "<br><br><i>(Pacifism rule active. Weapons locked N1.)</i>";
    }

    document.getElementById('turn-role-desc').innerHTML = extraDesc;
    buildNightUI(p);
}

function buildNightUI(p){
    let ui = document.getElementById('turn-action-ui'); ui.innerHTML = '';
    let btn = document.getElementById('turn-confirm-btn');
    gameState.tempState.currentSelection = null; gameState.tempState.actionType = null;
    btn.innerText = "Sleep"; btn.disabled = false;

    if(settings.noKillN1 && gameState.dayNum === 1 && ["werewolf","skelarry","serialkiller","vigilante","priest"].includes(p.role.id)) return;

    if(p.role.needsTarget){
        btn.innerText = "Select Target"; btn.disabled = true;
        buildTargetList(p, ui, p.role.id);
    } else if(p.role.customUI){
        if(p.role.id === "vigilante"){
            if(p.state.hasSeer) ui.innerHTML += `<button onclick="setVigiMode('seer')">Use Vision (1x)</button>`;
            if(p.state.hasKill) ui.innerHTML += `<button onclick="setVigiMode('kill')">Use Gun (1x)</button>`;
            ui.appendChild(Object.assign(document.createElement('div'), {id:"vigi-targets"}));
        }
        if(p.role.id === "xatled"){
            let curTarget = gameState.tempState[`xatled_${p.id}`];
            ui.innerHTML += `<button onclick="setXatledMode('mark')">Mark New House</button>`;
            if(curTarget){
                let tName = players.find(x => x.id === curTarget)?.name || "Unknown";
                ui.innerHTML += `<button onclick="setXatledMode('execute')" style="background-color:var(--danger-color);">Execute (${tName})</button>`;
            }
            ui.appendChild(Object.assign(document.createElement('div'), {id:"xatled-targets"}));
        }
        if(p.role.id === "necromancer"){
            if(p.state.charges > 0) {
                btn.innerText = "Select Dead Player"; btn.disabled = true;
                buildTargetList(p, ui, "necromancer_revive", true);
            } else { ui.innerHTML = "<p>Power exhausted.</p>"; }
        }
        if(p.role.id === "naughtyboy"){
            if(p.state.charges > 0){
                gameState.tempState.naughtySelections = [];
                btn.innerText = "Select 2 Targets"; btn.disabled = true;
                buildTargetList(p, ui, "naughtyboy_swap");
            } else { ui.innerHTML = "<p>Power exhausted.</p>"; }
        }
    } else if(gameState.villagersCanInjure && p.team === "village"){
        btn.innerText = "Injure Target"; btn.disabled = true;
        buildTargetList(p, ui, "injure");
    }
}

function buildTargetList(p, container, mode, showDead = false){
    container.innerHTML = "";
    players.forEach(t => {
        if((!showDead && !t.alive) || (showDead && t.alive) || t.id === p.id) return;
        if(mode === "zombiewolf" && gameState.zombieInfections.includes(t.id)) return;

        let div = document.createElement('div'); div.className = "action-target fade-element";
        div.innerHTML = `<div class="pfp mini-pfp ${!t.alive ? 'dead-pfp' : ''}">${t.name.charAt(0).toUpperCase()}</div><span>${t.name}</span>`;

        if(["werewolf","skelarry","serialkiller"].includes(p.role.id) && t.team === "wolves"){
            div.classList.add('ally'); div.innerHTML += " 🐺";
        } else {
            div.onclick = () => {
                if(mode === "naughtyboy_swap") {
                    if(div.classList.contains('selected')) {
                        div.classList.remove('selected');
                        gameState.tempState.naughtySelections = gameState.tempState.naughtySelections.filter(id => id !== t.id);
                    } else if(gameState.tempState.naughtySelections.length < 2) {
                        div.classList.add('selected');
                        gameState.tempState.naughtySelections.push(t.id);
                    }
                    let rdy = gameState.tempState.naughtySelections.length === 2;
                    document.getElementById('turn-confirm-btn').disabled = !rdy;
                    document.getElementById('turn-confirm-btn').innerText = rdy ? "Swap Roles!" : "Select 2 Targets";
                    gameState.tempState.actionType = mode;
                } else {
                    document.querySelectorAll('.action-target').forEach(el => el.classList.remove('selected'));
                    div.classList.add('selected');
                    gameState.tempState.currentSelection = t.id;
                    gameState.tempState.actionType = mode;
                    document.getElementById('turn-confirm-btn').disabled = false;
                }
            };
        }
        container.appendChild(div);
    });
}

function setVigiMode(mode){
    gameState.tempState.actionType = mode === 'seer' ? 'vigi_seer' : 'vigi_kill';
    buildTargetList(players[gameState.turnIndex], document.getElementById('vigi-targets'), gameState.tempState.actionType);
    document.getElementById('turn-confirm-btn').innerText = mode === 'seer' ? "Reveal" : "Shoot";
    document.getElementById('turn-confirm-btn').disabled = true;
}
function setXatledMode(mode){
    gameState.tempState.actionType = mode === 'mark' ? 'xatled_mark' : 'xatled_execute';
    if(mode === 'mark'){
        buildTargetList(players[gameState.turnIndex], document.getElementById('xatled-targets'), 'xatled_mark');
        document.getElementById('turn-confirm-btn').innerText = "Mark"; document.getElementById('turn-confirm-btn').disabled = true;
    } else {
        document.getElementById('xatled-targets').innerHTML = "";
        document.getElementById('turn-confirm-btn').innerText = "Unleash"; document.getElementById('turn-confirm-btn').disabled = false;
    }
}

function finishNightTurn(){
    let p = players[gameState.turnIndex];
    let sel = gameState.tempState.currentSelection;
    let act = gameState.tempState.actionType;

    if(act || sel) p.state.didAction = true;

    if(act === "seer") showAlert("Vision", `${players.find(x => x.id === sel).name} -> ${getRoleText(getSeenRole(sel), 'n')}`);
    if(act === "vigi_seer") { p.state.hasSeer = false; showAlert("Vigilante Vision", `Role: ${getRoleText(getSeenRole(sel), 'n')}`); gameState.nightActions.vigiSeer = true; }
    if(act === "auraseer") showAlert("Aura Vision", `${players.find(x => x.id === sel).name} is a ${getAura(sel)}`);
    if(act === "zombiewolf" && sel && !gameState.zombieInfections.includes(sel)) { gameState.zombieInfections.push(sel); showAlert("Infected", "Target infected."); }

    if(act === "werewolf" || act === "skelarry") gameState.nightActions.wolfKills.push(sel);
    if(act === "serialkiller") gameState.nightActions.skKill = sel;
    if(act === "bodyguard") gameState.nightActions.bodyguard = { id: p.id, target: sel };
    if(act === "redlady") gameState.nightActions.redlady = { rlId: p.id, targetId: sel };
    if(act === "priest" && p.state.charges > 0) { p.state.charges--; gameState.nightActions.priest = { priestId:p.id, targetId:sel }; }
    if(act === "vigi_kill") { p.state.hasKill = false; gameState.nightActions.vigiKill = sel; gameState.vigilanteRevealed = p.id; }
    if(act === "xatled_execute") gameState.nightActions.xatled = { xatledId:p.id, targetId:gameState.tempState[`xatled_${p.id}`] };
    if(act === "necromancer_revive" && p.state.charges > 0) { p.state.charges--; gameState.nightActions.necroRevive = { necroId:p.id, targetId:sel }; }
    if(act === "naughtyboy_swap" && p.state.charges > 0) { p.state.charges--; gameState.nightActions.naughtySwap = { t1: gameState.tempState.naughtySelections[0], t2: gameState.tempState.naughtySelections[1] }; }

    if(act === "powerplex") gameState.tempState[`link_${p.id}`] = sel;
    if(act === "xatled_mark") gameState.tempState[`xatled_${p.id}`] = sel;
    if(act === "injure") gameState.injuryMarks[sel] = (gameState.injuryMarks[sel] || 0) + 1;

    gameState.turnIndex++;
    nav('screen-night-transition');
    document.getElementById('night-title').innerText = "Securing...";
}

/* PRIORITY RESOLUTION SYSTEM */
function processNightResolutions(){
    gameState.deadTonightMap = {}; 
    let a = gameState.nightActions;

    if(a.naughtySwap) {
        let p1 = players.find(x => x.id === a.naughtySwap.t1);
        let p2 = players.find(x => x.id === a.naughtySwap.t2);
        let tempRole = p1.role; p1.role = p2.role; p2.role = tempRole;
        let tempTeam = p1.team; p1.team = p2.team; p2.team = tempTeam;
    }

    let bgTarget = a.bodyguard ? a.bodyguard.target : null;
    let bgId = a.bodyguard ? a.bodyguard.id : null;

    function attemptKill(victimId, killerType, reason) {
        if(victimId === bgTarget && bgTarget !== null) {
            if(killerType === 'wolf') { return; } 
            else { 
                if(!gameState.deadTonightMap[bgId]) gameState.deadTonightMap[bgId] = "died protecting their target"; 
                return;
            }
        }
        
        if(a.redlady && victimId === a.redlady.rlId && killerType !== 'collateral') {
            return;
        }

        let victim = players.find(x => x.id === victimId);
        if(!victim) return;
        if(victim.role.id === "ger" || victim.role.id === "skeleton") return; 
        if(!gameState.deadTonightMap[victimId]) gameState.deadTonightMap[victimId] = reason;
    }

    if(a.skKill) attemptKill(a.skKill, 'sk', 'EXPLODED');

    if(a.priest) {
        let t = players.find(x => x.id === a.priest.targetId);
        if(t && t.team !== "village") attemptKill(t.id, 'priest', "evaporated by Holy Water");
        else attemptKill(a.priest.priestId, 'priest', "smitten by divine retribution");
    }

    if(a.vigiKill) attemptKill(a.vigiKill, 'vigi', "shot by the Vigilante");

    a.wolfKills.forEach(wk => {
        let t = players.find(x => x.id === wk);
        if(t && t.role.id === "cursed") { t.role = ROLE_CONFIG["werewolf"]; t.team = "wolves"; }
        else attemptKill(wk, 'wolf', "torn apart by Wolves");
    });

    if(a.xatled){
        let t = players.find(x => x.id === a.xatled.targetId);
        if(t && !t.state.didAction) attemptKill(t.id, 'xatled', "suffocated mysteriously (Xatled)");
    }

    Object.keys(gameState.injuryMarks).forEach(id => {
        if(gameState.injuryMarks[id] >= 2 && players.find(x => x.id === id).alive){
            attemptKill(id, 'mob', "stabbed by angry villagers"); gameState.injuryMarks[id] = 0;
        }
    });

    if(a.redlady) {
        let rl = players.find(x => x.id === a.redlady.rlId);
        let t = players.find(x => x.id === a.redlady.targetId);
        if(t && rl.alive) {
            if (t.team === "wolves") {
                if (!gameState.deadTonightMap[rl.id]) gameState.deadTonightMap[rl.id] = "died visiting the Werewolves";
            } else if (gameState.deadTonightMap[t.id]) {
                if (!gameState.deadTonightMap[rl.id]) gameState.deadTonightMap[rl.id] = "died as collateral damage visiting a victim";
            }
        }
    }

    if(a.necroRevive) {
        let t = players.find(x => x.id === a.necroRevive.targetId);
        if(t) {
            t.alive = true;
            let necro = players.find(x => x.id === a.necroRevive.necroId);
            necro.team = t.team; 
            if(gameState.deadTonightMap[t.id]) delete gameState.deadTonightMap[t.id];
        }
    }

    if(a.vigiSeer) gameState.skipVotingTomorrow = true;

    for(let [id, reason] of Object.entries(gameState.deadTonightMap)) {
        let p = players.find(x => x.id === id);
        if(p.role.id === "skelarry" && reason !== "EXPLODED") {
            p.role = ROLE_CONFIG["skeleton"]; p.team = "neutral";
            delete gameState.deadTonightMap[id]; 
        } else {
            p.alive = false;
            if(reason === "EXPLODED") {
                gameState.exploded.push(id);
                delete gameState.deadTonightMap[id]; 
            } else {
                if(p.role.id === "president") gameState.villagersCanInjure = true;
                let hunter = players.find(x => x.role.id === "hunter" && gameState.tempState[`hunterTarget_${x.id}`] === p.id);
                if(hunter) { hunter.role = ROLE_CONFIG["villager"]; hunter.team = "village"; }
                
                let plex = players.find(x => x.role.id === "powerplex" && x.id === p.id);
                if(plex) {
                    let linkId = gameState.tempState[`link_${plex.id}`];
                    if(linkId && players.find(x => x.id === linkId).alive) {
                        players.find(x => x.id === linkId).alive = false;
                        gameState.deadTonightMap[linkId] = "electrocuted by PowerPlex's revenge surge";
                    }
                }
            }
        }
    }

    nav('screen-morning-transition');
}

function showMorningRecap(){
    let container = document.getElementById('recap-container'); container.innerHTML = "";
    let deadKeys = Object.keys(gameState.deadTonightMap);

    if(deadKeys.length === 0){
        container.innerHTML = `<div class="dead-recap-card fade-element" style="border-color:var(--success-color);"><h3>Quiet Night</h3><div class="recap-death-text">Nobody died.</div></div>`;
    } else {
        deadKeys.forEach(id => {
            let p = players.find(x => x.id === id);
            let reason = gameState.deadTonightMap[id];
            let roleRev = settings.revealDeath ? `<div class="recap-role-tag">[${getRoleText(p.role.id, 'n').toUpperCase()}]</div>` : "";
            let vigiReveal = (gameState.vigilanteRevealed && reason.includes("Vigilante")) ? `<div class="recap-extra">Shooter revealed: ${players.find(x=>x.id===gameState.vigilanteRevealed).name}</div>` : "";
            
            container.innerHTML += `
                <div class="dead-recap-card fade-element">
                    <div class="pfp dead-pfp">${p.name.charAt(0)}</div>
                    <h3 style="margin:8px 0 0 0;">${p.name}</h3>
                    ${roleRev}
                    <div class="recap-death-text">${reason}</div>
                    ${vigiReveal}
                </div>`;
        });
    }

    if(gameState.skipVotingTomorrow) container.innerHTML += `<div class="recap-extra" style="margin-bottom:20px;">Panic! Voting cancelled today.</div>`;
    nav('screen-morning-recap');
}

function handleMorningNext(){
    if(checkWinCondition()) return;
    if(gameState.skipVotingTomorrow){ gameState.skipVotingTomorrow = false; gameState.dayNum++; setupNight(); } 
    else { resetTimer(); nav('screen-discussion'); }
}

/* WARDEN INTERROGATION PHASE */
function checkWardenPhase() {
    let warden = players.find(p => p.alive && p.role.id === "warden");
    if(warden) {
        document.getElementById('warden-name-display').innerText = `Warden Revealed: ${warden.name}`;
        document.getElementById('warden-phase-1').style.display = 'flex';
        document.getElementById('warden-phase-2').style.display = 'none';
        document.getElementById('warden-phase-3').style.display = 'none';

        let list = document.getElementById('warden-targets'); list.innerHTML = "";
        gameState.tempState.wardenSelection = null;
        document.getElementById('warden-start-btn').disabled = true;

        players.forEach(t => {
            if(!t.alive || t.id === warden.id) return;
            let div = document.createElement('div'); div.className = "action-target fade-element";
            div.innerHTML = `<div class="pfp mini-pfp">${t.name.charAt(0).toUpperCase()}</div><span>${t.name}</span>`;
            div.onclick = () => {
                list.querySelectorAll('.action-target').forEach(el => el.classList.remove('selected'));
                div.classList.add('selected');
                gameState.tempState.wardenSelection = t.id;
                document.getElementById('warden-start-btn').disabled = false;
            };
            list.appendChild(div);
        });
        nav('screen-warden');
    } else {
        nav('screen-voting'); setupVoting();
    }
}

function startWardenTimer() {
    let sel = players.find(x => x.id === gameState.tempState.wardenSelection);
    document.getElementById('warden-target-name').innerText = sel.name;
    document.getElementById('warden-target-name-2').innerText = sel.name;
    document.getElementById('warden-phase-1').style.display = 'none';
    document.getElementById('warden-phase-2').style.display = 'flex';
    wardenTimeLeft = 60;
    document.getElementById('warden-timer').innerText = "01:00";
    wardenTimerInterval = setInterval(() => {
        wardenTimeLeft--;
        let m = Math.floor(wardenTimeLeft / 60).toString().padStart(2,'0');
        let s = (wardenTimeLeft % 60).toString().padStart(2,'0');
        document.getElementById('warden-timer').innerText = `${m}:${s}`;
        if(wardenTimeLeft <= 0) endWardenTimerEarly();
    }, 1000);
}

function endWardenTimerEarly() {
    clearInterval(wardenTimerInterval);
    document.getElementById('warden-phase-2').style.display = 'none';
    document.getElementById('warden-phase-3').style.display = 'flex';
}

function wardenExecute(execute) {
    if(execute) {
        let tId = gameState.tempState.wardenSelection;
        let p = players.find(x => x.id === tId);
        p.alive = false;
        
        let h = players.find(x => x.role.id === "hunter" && gameState.tempState[`hunterTarget_${x.id}`] === p.id);
        if(h) { h.role = ROLE_CONFIG["villager"]; h.team = "village"; }
        
        if(p.role.id === "powerplex"){
            let linkId = gameState.tempState[`link_${p.id}`];
            if(linkId && players.find(x => x.id === linkId).alive){
                players.find(x => x.id === linkId).alive = false;
                showAlert("Warden Execution", `${p.name} was executed! But their PowerPlex revenge killed ${players.find(x=>x.id===linkId).name}!`);
                if(checkWinCondition()) return;
                nav('screen-voting'); setupVoting();
                return;
            }
        }

        if(checkWinCondition()) return;
        showAlert("Warden Execution", `${p.name} was executed by the Warden!`);
    }
    nav('screen-voting'); setupVoting();
}


/* VOTING & DAY PHASE */
function setupVoting()){
    gameState.votes = { skip:0 };
    players.forEach(p => { if(p.alive && p.role.id !== "skeleton") gameState.votes[p.id] = 0; });
    gameState.votingTurnIndex = 0;
    processNextVoter();
}

function processNextVoter(){
    while(gameState.votingTurnIndex < players.length && (!players[gameState.votingTurnIndex].alive || players[gameState.votingTurnIndex].role.id === "skeleton")){
        gameState.votingTurnIndex++;
    }
    if(gameState.votingTurnIndex >= players.length) return resolveVoting();

    let voter = players[gameState.votingTurnIndex];
    document.getElementById('voting-player-turn').innerText = `${voter.name}`;
    gameState.votingSelection = null;
    document.getElementById('vote-confirm-btn').disabled = true;
    document.getElementById('vote-skip-card').classList.remove('selected');
    let list = document.getElementById('voting-targets'); list.innerHTML = "";

    players.forEach(t => {
        if(!t.alive || t.id === voter.id) return;
        let div = document.createElement('div'); div.className = "action-target fade-element";
        div.innerHTML = `<div class="pfp mini-pfp">${t.name.charAt(0).toUpperCase()}</div><span>${t.name}</span>`;
        div.onclick = () => {
            document.querySelectorAll('.action-target').forEach(el => el.classList.remove('selected'));
            div.classList.add('selected'); gameState.votingSelection = t.id; document.getElementById('vote-confirm-btn').disabled = false;
        };
        list.appendChild(div);
    });
}

function selectVoteTarget(id, element){
    document.querySelectorAll('.action-target').forEach(el => el.classList.remove('selected'));
    element.classList.add('selected'); gameState.votingSelection = id; document.getElementById('vote-confirm-btn').disabled = false;
}

function submitConfirmedVote(){
    let v = players[gameState.votingTurnIndex];
    let weight = v.role.id === "president" ? 2 : 1;
    gameState.votes[gameState.votingSelection] += weight;
    gameState.votingTurnIndex++;
    processNextVoter();
}

function resolveVoting(){
    let max = -1; let target = null; let tie = false;
    for(const [id,count] of Object.entries(gameState.votes)){
        if(count > max){ max = count; target = id; tie = false; } 
        else if(count === max){ tie = true; }
    }

    if(max > 0 && target !== 'skip' && !tie){
        let p = players.find(x => x.id === target);
        if(p.role.id === "ger"){
            openGerReverse(p);
            return;
        }
    }
    executeHanging(target, max, tie);
}

function openGerReverse(gerPlayer) {
    let list = document.getElementById('ger-targets'); list.innerHTML = "";
    gameState.tempState.gerSelection = null;
    document.getElementById('ger-confirm-btn').disabled = true;

    players.forEach(t => {
        if(!t.alive || t.id === gerPlayer.id) return;
        let div = document.createElement('div'); div.className = "action-target";
        div.innerHTML = `<div class="pfp mini-pfp">${t.name.charAt(0).toUpperCase()}</div><span>${t.name}</span>`;
        div.onclick = () => {
            list.querySelectorAll('.action-target').forEach(el => el.classList.remove('selected'));
            div.classList.add('selected');
            gameState.tempState.gerSelection = t.id;
            document.getElementById('ger-confirm-btn').disabled = false;
        };
        list.appendChild(div);
    });
    document.getElementById('ger-overlay').style.display = "flex";
}

function confirmGerReverse() {
    let tId = gameState.tempState.gerSelection;
    document.getElementById('ger-overlay').style.display = "none";
    executeHanging(tId, "GER REVERSED", false, "GER Used Uno Reverse! They survive, and forced another to hang.");
}

function executeHanging(target, max, tie, customMessage = "") {
    let container = document.getElementById('voting-result-container'); container.innerHTML = "";
    let voteStats = settings.hideVotes ? "" : `<div style="font-size:12px; opacity:0.6; margin-top:20px;">Top votes: ${max}</div>`;
    if(customMessage) voteStats = `<div style="color:var(--purple-color); font-weight:bold; margin-top:20px;">${customMessage}</div>` + voteStats;

    if(max === 0 || target === 'skip' || tie){
        container.innerHTML = `<h3>${tie ? "Tie Vote!" : "Skipped!"}</h3><p>No one hangs.</p>${voteStats}`;
    } else {
        let p = players.find(x => x.id === target);
        p.alive = false;
        let roleRev = settings.revealDeath ? `<div class="recap-role-tag">[${getRoleText(p.role.id, 'n').toUpperCase()}]</div>` : "";
        
        container.innerHTML = `<div class="dead-recap-card"><div class="pfp dead-pfp">${p.name.charAt(0)}</div><h2>Hanged: ${p.name}</h2>${roleRev}</div>${voteStats}`;

        if(p.role.id === "fool") return endGame("The Fool 🤡");
        let h = players.find(x => x.role.id === "hunter" && gameState.tempState[`hunterTarget_${x.id}`] === p.id);
        if(h && h.alive) return endGame(`${h.name} The Hunter 🎯`);

        if(p.role.id === "president"){
            let vils = players.filter(x => x.alive && x.team === "village");
            if(vils.length > 0){
                let heir = vils[Math.floor(Math.random()*vils.length)];
                heir.role = ROLE_CONFIG["president"];
                container.innerHTML += `<p style="color:var(--success-color);">President passed to another Villager!</p>`;
            }
        }
        if(p.role.id === "powerplex"){
            let linkId = gameState.tempState[`link_${p.id}`];
            if(linkId && players.find(x => x.id === linkId).alive){
                players.find(x => x.id === linkId).alive = false;
                container.innerHTML += `<p style="color:var(--danger-color);">PowerPlex electrocuted ${players.find(x=>x.id===linkId).name}!</p>`;
            }
        }
    }
    nav('screen-voting-results');
}

function nextPhaseCheck(){
    if(checkWinCondition()) return;
    gameState.dayNum++; setupNight();
}

function checkWinCondition(){
    let wolves = players.filter(p => p.alive && p.team === "wolves");
    let nonWolvesAlive = players.filter(p => p.alive && p.team !== "wolves").length;
    let vils = players.filter(p => p.alive && p.team === "village");

    let zombie = wolves.find(x => x.role.id === "zombiewolf");
    if(zombie && zombie.alive){
        let validInfected = gameState.zombieInfections.filter(id => players.find(x => x.id === id && x.alive && x.team !== "wolves")).length;
        if(validInfected >= nonWolvesAlive){ endGame("The Zombie Wolf 🧟"); return true; }
    }

    if(wolves.length === 0){
        let solos = players.filter(p => p.alive && p.team === "neutral" && p.role.id !== "skeleton");
        if(solos.length === 0){ endGame("The Village 🧑‍🌾"); return true; }
    } else if(wolves.length >= vils.length + players.filter(p => p.alive && p.team === "neutral" && p.role.id !== "skeleton").length){
        endGame("The Werewolf Pack 🐺"); return true;
    }
    return false;
}

function endGame(winnerName){
    document.getElementById('win-text').innerText = `${winnerName} Wins!`;
    nav('screen-game-over');
}

function startTimer(){
    clearInterval(timerInterval);
    timerInterval = setInterval(() => {
        timeLeft--;
        let m = Math.floor(timeLeft / 60).toString().padStart(2,'0');
        let s = (timeLeft % 60).toString().padStart(2,'0');
        document.getElementById('discussion-timer').innerText = `${m}:${s}`;
        if(timeLeft <= 0) stopTimer();
    }, 1000);
}
function stopTimer(){ clearInterval(timerInterval); }
function resetTimer(){ clearInterval(timerInterval); timeLeft = 120; document.getElementById('discussion-timer').innerText = "02:00"; }
