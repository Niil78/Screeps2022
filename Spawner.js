var spawner = {
    run: function(){

var r = Game.rooms['W44S41']; // Room

//########## NURSEs #################
    var NUR  = 0; // Nurse, Iniciador de sala
    var NURD = 2; // Nurse, Droper
    var NURP = 2; // Nurse, Picker
    var FILL = 2; // Full Filler
//###################################

//########## REMOTO NURSEs ##########
    var RNURD = 1; // Nurse, Droper
    var RNURP = 2; // Nurse, Picker
    var RLOG  = 0; // Logistica Remota
//###################################

//########## REMOTO NURSEs ##########
    var RNURD1 = 2; // Nurse, Droper
    var RNURP1 = 1; // Nurse, Picker
    var RLOG1 = 1; // Logistica Remota
//###################################

//########## REMOTO NURSEs ##########
    var RNURD2 = 1; // Nurse, Droper
    var RNURP2 = 6; // Nurse, Picker
    var RLOG2 = 0; // Logistica Remota
//###################################

    var RLOG3 = 3; // Logistica Remota
    var RMIN = 1; // Mineria Remota (Bandera GRIS)

//########## SQUAD NURSEs ##########
    var TANK = 0; // Squad TANK
    var HEALER = 0; // Squad TANK
    var RANGED = 0; // Squad TANK
    var MELE = 0; // Squad TANK

//###################################
var RSV = 0; // CLAIM RESERVE
//###################################

//###################################
var TEST = 0; // Creep para probar cosas
//###################################


//#### ZONA CONTEO #################
//NURSE

        var nurse = _.filter(Game.creeps, (creep) => creep.memory.role == 'nurse');
        var nurseDroper = _.filter(Game.creeps, (creep) => creep.memory.role2 == 'nurseDroper');
        var nursePicker = _.filter(Game.creeps, (creep) => creep.memory.role2 == 'nursePicker');
        var filler = _.filter(Game.creeps, (creep) => creep.memory.role == 'filler');

        var rnurseDroper = _.filter(Game.creeps, (creep) => creep.memory.role2 == 'rnurseDroper');
        var rnursePicker = _.filter(Game.creeps, (creep) => creep.memory.role2 == 'rnursePicker');
        var rnurseDroper1 = _.filter(Game.creeps, (creep) => creep.memory.role2 == 'rnurseDroper1');
        var rnursePicker1 = _.filter(Game.creeps, (creep) => creep.memory.role2 == 'rnursePicker1');
        var rnurseDroper2 = _.filter(Game.creeps, (creep) => creep.memory.role2 == 'rnurseDroper2');
        var rnursePicker2 = _.filter(Game.creeps, (creep) => creep.memory.role2 == 'rnursePicker2');

        var rlogistica = _.filter(Game.creeps, (creep) => creep.memory.role2 == 'rlogistica');
        var rlogistica1 = _.filter(Game.creeps, (creep) => creep.memory.role2 == 'rlogistica1');
        var rlogistica2 = _.filter(Game.creeps, (creep) => creep.memory.role2 == 'rlogistica2');
        var rlogistica3 = _.filter(Game.creeps, (creep) => creep.memory.role2 == 'rlogistica3');

        var reserve = _.filter(Game.creeps, (creep) => creep.memory.role == 'reserve');
        var rminer = _.filter(Game.creeps, (creep) => creep.memory.role == 'rminer');

        var test = _.filter(Game.creeps, (creep) => creep.memory.role == 'test');

        var tank = _.filter(Game.creeps, (creep) => creep.memory.role2 == 'tank');
        var healer = _.filter(Game.creeps, (creep) => creep.memory.role2 == 'healer');
        var mele = _.filter(Game.creeps, (creep) => creep.memory.role2 == 'mele');
        var ranged = _.filter(Game.creeps, (creep) => creep.memory.role2 == 'ranged');
        var squad = _.filter(Game.creeps, (creep) => creep.memory.role == 'squad');

/*
################################################################
            CONTADOR DE CREEPS
################################################################
*/

console.log('R0 Dropers: ' + nurseDroper.length + ' |' + ' Pickers: ' + nursePicker.length + ' |' + ' Fillers: ' + filler.length);
console.log('R1 Dropers: ' + rnurseDroper.length + ' |' + ' Pickers: ' + rnursePicker.length + ' |' + ' Logisticas: ' + rlogistica.length);
console.log('R2 Dropers: ' + rnurseDroper1.length + ' |' + ' Pickers: ' + rnursePicker1.length + ' |' + ' Logisticas: ' + rlogistica1.length);
console.log('R3 Dropers: ' + rnurseDroper2.length + ' |' + ' Pickers: ' + rnursePicker2.length + ' |' + ' Logisticas: ' + rlogistica2.length + ' |' + ' Logisticas: ' + rlogistica3.length);

if(squad.length >= 1){
console.log('SQ Tank: ' + tank.length + ' |' + ' Healer: ' + healer.length + ' |' + ' Mele: ' + mele.length + ' |' + ' Ranger: ' + ranged.length);
}

/*
###################################
        PRIORIDAD SPAWN
###################################
    ERR_NOT_ENOUGH_ENERGY
*/ 

if(nurseDroper.length != NURD || filler.length != FILL) // SPAWN 0
    {
         r.memory.prioridadSpawn = 0;
    }
if(nurseDroper.length <= NURD || filler.length <= FILL) // SPAWN 1
{
     r.memory.prioridadSpawn = 1;
    if(nurseDroper.length < NURD)
        {
             console.log(`<FONT COLOR="#ff0000"> <b>Faltan Dropers en la sala principal</b></font>`);
        }
    if(filler.length < FILL)
        {
            console.log(`<FONT COLOR="#ff0000"> <b>Faltan Fillers en la sala principal</b></font>`);
        }
}
if(nurseDroper.length >= NURD && filler.length >= FILL) // SPAWN 2
{
     if(nursePicker.length <= NURP)
    {
         r.memory.prioridadSpawn = 2;
    if(nursePicker.length < NURP)
        {
            console.log(`<FONT COLOR="#ff0000"> <b>Faltan Pickers en la sala principal</b></font>`);
        }
    }
}
if(nurseDroper.length >= NURD && filler.length >= FILL && nursePicker.length >= NURP){ // SPAWN 3
    if(rnurseDroper.length <= RNURD || rnurseDroper1.length <= RNURD1 || rnurseDroper2.length <= RNURD2 ){
         r.memory.prioridadSpawn = 3;
    if(rnurseDroper.length < RNURD)
            {
                console.log(`<FONT COLOR="#ff0000">Faltan R0Dropers</font>`);
            }
    if(rnurseDroper1.length < RNURD1)
        {
            console.log(`<FONT COLOR="#ff0000">Faltan R1Dropers</font>`);
        }
    if(rnurseDroper2.length < RNURD2)
        {
            console.log(`<FONT COLOR="#ff0000">Faltan R2Dropers</font>`);
        }
    }
}
if(nurseDroper.length >= NURD && filler.length >= FILL && nursePicker.length >= NURP){ // SPAWN 4
    if(rnurseDroper.length >= RNURD && rnurseDroper1.length >= RNURD1 && rnurseDroper2.length >= RNURD2 ){
        if(rnursePicker.length <= RNURP || rnursePicker1.length <= RNURP1 || rnursePicker2.length <= RNURP2){
             r.memory.prioridadSpawn = 4;
        if(rnursePicker.length < RNURP)
            {
                console.log(`<FONT COLOR="#ff0000">Faltan R0Pickers</font>`);
            }
        if(rnursePicker1.length < RNURP1)
            {
                    console.log(`<FONT COLOR="#ff0000">Faltan R1Pickers</font>`);
            }
        if(rnursePicker2.length < RNURD2)
            {
                console.log(`<FONT COLOR="#ff0000">Faltan R2Pickers</font>`);
            }
        }
    }
}
if(nurseDroper.length >= NURD && filler.length >= FILL && nursePicker.length >= NURP){ // SPAWN 5
    if(rnurseDroper.length >= RNURD && rnurseDroper1.length >= RNURD1 && rnurseDroper2.length >= RNURD2 ){
        if(rnursePicker.length >= RNURP && rnursePicker1.length >= RNURP1 && rnursePicker2.length >= RNURP2){
            if(rlogistica.length <= RLOG || rlogistica1.length <= RLOG1 || rlogistica2.length <= RLOG2 || rlogistica3.length <= RLOG3){
                r.memory.prioridadSpawn = 5;
        if(rlogistica.length < RLOG)
                {
                    console.log(`<FONT COLOR="#ff0000">Falta R0Logistica</font>`);
                }
        if(rlogistica1.length < RLOG1)
            {
                console.log(`<FONT COLOR="#ff0000">Falta R1Logistica </font>`);
            }
        if(rlogistica2.length < RLOG2)
            {
                console.log(`<FONT COLOR="#ff0000">Faltan R2Logistica</font>`);
            }
        if(rlogistica3.length < RLOG3)
            {
                console.log(`<FONT COLOR="#ff0000">Faltan R3Logistica</font>`);
            }
            }
        }
    }
}
if(nurseDroper.length >= NURD && filler.length >= FILL && nursePicker.length >= NURP){ // SPAWN 6
    if(rnurseDroper.length >= RNURD && rnurseDroper1.length >= RNURD1 && rnurseDroper2.length >= RNURD2 ){
        if(rnursePicker.length >= RNURP && rnursePicker1.length >= RNURP1 && rnursePicker2.length >= RNURP2){
            if(rlogistica.length >= RLOG && rlogistica1.length >= RLOG1 && rlogistica2.length >= RLOG2 && rlogistica3.length >= RLOG3){
                if(reserve.length <= RSV){
                    r.memory.prioridadSpawn = 6;
                }
            }
        }
    }
}
if(nurseDroper.length >= NURD && filler.length >= FILL && nursePicker.length >= NURP){ // SPAWN 6
    if(rnurseDroper.length >= RNURD && rnurseDroper1.length >= RNURD1 && rnurseDroper2.length >= RNURD2 ){
        if(rnursePicker.length >= RNURP && rnursePicker1.length >= RNURP1 && rnursePicker2.length >= RNURP2){
            if(rlogistica.length >= RLOG && rlogistica1.length >= RLOG1 && rlogistica2.length >= RLOG2  && rlogistica3.length >= RLOG3){
                if(reserve.length >= RSV){
                    r.memory.prioridadSpawn = 7;
                }
            }
        }
    }
}

/* 
#################
# # S P A W N E R # #
#################
*/

// NURSE ##################
        if ( nurse.length < NUR) {
            var i =  Game.time - 51032855;
            var newName = 'Nurse' + i;
            //console.log('Nuevo bot:' + newName);
            Game.spawns['Antz'].spawnCreep([WORK,WORK,CARRY,MOVE], newName, //NURSE DROPER
            {memory: {role: 'nurse'}})}

        if ( test.length < TEST) {
            var i =  Game.time - 51032855;
            var newName = 'TEST' + i;
            console.log('Necesitamos un:' + newName);
            Game.spawns['Antz'].spawnCreep([MOVE,MOVE,MOVE,MOVE,WORK,WORK,WORK,WORK,WORK,WORK], newName, // REMOTO NURSE PICKER
            {memory: {role: 'test', role2: 'test'}})}

            if ( rminer.length < RMIN) {
            var i =  Game.time - 51032855;
            var newName = 'RMR' + i;
            console.log('Necesitamos un:' + newName);
            Game.spawns['Antz'].spawnCreep([WORK,WORK,WORK,CARRY,CARRY,CARRY,MOVE,MOVE,MOVE,WORK,WORK,WORK,CARRY,CARRY,CARRY,MOVE,MOVE,MOVE,WORK,WORK,WORK,CARRY,CARRY,CARRY,MOVE,MOVE,MOVE], newName, // REMOTO NURSE PICKER
            {memory: {role: 'rminer', home: 'W44S41'}})}

if(r.memory.prioridadSpawn == 1)
{           //### DROPER
            if ( nurseDroper.length < NURD) {
            var i =  Game.time - 51032855;
            var newName = 'ND' + i;
            //console.log('Nuevo bot:' + newName);
            Game.spawns['Antz'].spawnCreep([WORK,WORK,WORK,WORK,WORK,WORK,MOVE,MOVE,MOVE,MOVE,MOVE], newName, //NURSE DROPER
            {memory: {role: 'nurseDroper',role2: 'nurseDroper'}})}

            //### FILL
            if ( filler.length < FILL) {
            var i =  Game.time - 51032855;
            var newName = 'Filler' + i;
            //console.log('Necesitamos un:' + newName);
            Game.spawns['Antz'].spawnCreep([CARRY,CARRY,MOVE,MOVE,CARRY,CARRY,MOVE,MOVE,CARRY,CARRY,MOVE,MOVE,CARRY,CARRY,MOVE,CARRY,MOVE,CARRY,MOVE,CARRY,MOVE,MOVE,MOVE,MOVE,CARRY,CARRY,MOVE,CARRY], newName, // NURSE FILL
            {memory: {role: 'filler'}})}
} //## SPAWN 1

if(r.memory.prioridadSpawn == 2)
{           //### PICKER 
            if ( nursePicker.length < NURP) {
            var i =  Game.time - 51032855;
            var newName = 'NP' + i;
            //console.log('Necesitamos un:' + newName);
            Game.spawns['Antz'].spawnCreep([WORK,WORK,WORK,WORK,WORK,CARRY,CARRY,CARRY,CARRY,CARRY,MOVE,MOVE,MOVE,MOVE,MOVE,MOVE,MOVE,CARRY,CARRY], newName, // NURSE PICKER
            {memory: {role: 'nursePicker' ,role2: 'nursePicker'}})}
} //## SPAWN 2

if(r.memory.prioridadSpawn == 3)
{           //### DROPER REMOTO
            if ( rnurseDroper.length < RNURD) {
            var i =  Game.time - 51032855;
            var newName = 'R0D' + i;
            //console.log('Nuevo bot:' + newName);
            Game.spawns['Antz'].spawnCreep([WORK,WORK,WORK,WORK,WORK,WORK,MOVE,MOVE,MOVE,MOVE,MOVE], newName, // REMOTO NURSE DROPER
            {memory: {role: 'rnurseDroper' ,role2: 'rnurseDroper', destino: 'W43S41'}})}

            //### DROPER REMOTO 1
            if ( rnurseDroper1.length < RNURD1) {
            var i =  Game.time - 51032855;
            var newName = 'R1D' + i;
            //console.log('Nuevo bot:' + newName);
            Game.spawns['Antz'].spawnCreep([WORK,WORK,WORK,WORK,WORK,WORK,MOVE,MOVE,MOVE,MOVE,MOVE], newName, // REMOTO NURSE DROPER
            {memory: {role: 'rnurseDroper' , role2: 'rnurseDroper1' , destino: 'W45S41'}})}

            //### DROPER REMOTO 2
            if ( rnurseDroper2.length < RNURD2) {
            var i =  Game.time - 51032855;
            var newName = 'R2D' + i;
            //console.log('Nuevo bot:' + newName);
            Game.spawns['Antz'].spawnCreep([WORK,WORK,WORK,WORK,WORK,WORK,MOVE,MOVE,MOVE,MOVE,MOVE], newName, // REMOTO NURSE DROPER
            {memory: {role: 'rnurseDroper' , role2: 'rnurseDroper2' , destino: 'W42S41'}})}
} //## SPAWN 3

if(r.memory.prioridadSpawn == 4)
{
            //### PICKER REMOTO
            if ( rnursePicker.length < RNURP) {
            var i =  Game.time - 51032855;
            var newName = 'R0P' + i;
            //console.log('Necesitamos un:' + newName);
            Game.spawns['Antz'].spawnCreep([WORK,WORK,WORK,WORK,WORK,WORK,WORK,WORK,MOVE,MOVE,MOVE,MOVE,MOVE,MOVE,MOVE,MOVE,MOVE,MOVE,MOVE,MOVE,CARRY,CARRY,CARRY,CARRY,CARRY,CARRY,CARRY,CARRY], newName, // REMOTO NURSE PICKER
            {memory: {role: 'rnursePicker', role2: 'rnursePicker', destino: 'W43S41'}})}

           //### PICKER REMOTO 1
            if ( rnursePicker1.length < RNURP1) {
            var i =  Game.time - 51032855;
            var newName = 'R1P' + i;
            //console.log('Necesitamos un:' + newName);
            Game.spawns['Antz'].spawnCreep([WORK,WORK,WORK,WORK,WORK,WORK,WORK,WORK,MOVE,MOVE,MOVE,MOVE,MOVE,MOVE,MOVE,MOVE,MOVE,MOVE,MOVE,MOVE,CARRY,CARRY,CARRY,CARRY,CARRY,CARRY,CARRY,CARRY], newName, // REMOTO NURSE PICKER
            {memory: {role: 'rnursePicker', role2: 'rnursePicker1' , destino: 'W45S41'}})}

            //###PICKER REMOTO 2
            if ( rnursePicker2.length < RNURP2) {
            var i =  Game.time - 51032855;
            var newName = 'R2P' + i;
            //console.log('Necesitamos un:' + newName);
            Game.spawns['Antz'].spawnCreep([WORK,WORK,WORK,WORK,WORK,WORK,WORK,WORK,MOVE,MOVE,MOVE,MOVE,MOVE,MOVE,MOVE,MOVE,MOVE,MOVE,MOVE,MOVE,CARRY,CARRY,CARRY,CARRY,CARRY,CARRY,CARRY,CARRY], newName, // REMOTO NURSE PICKER
            {memory: {role: 'rnursePicker', role2: 'rnursePicker2' , destino: 'W42S41'}})}
} //## SPAWN 4

if(r.memory.prioridadSpawn == 5)
{           //### LOGISTICA 
            if ( rlogistica.length < RLOG) {
            var i =  Game.time - 51032855;
            var newName = 'R0LG' + i;
            //console.log('Necesitamos un:' + newName);
            Game.spawns['Antz'].spawnCreep([MOVE,CARRY,MOVE,CARRY,MOVE,CARRY,MOVE,CARRY,MOVE,CARRY,MOVE,CARRY,MOVE,CARRY,MOVE,CARRY,MOVE,CARRY,MOVE,CARRY,MOVE,CARRY,MOVE,CARRY,MOVE,CARRY,MOVE,CARRY,MOVE,CARRY,MOVE,CARRY,MOVE,CARRY,MOVE,CARRY], newName, // REMOTO NURSE PICKER
            {memory: {role: 'rlogistica', role2: 'rlogistica', destino: 'W43S41', home: 'W44S41'}})}

            //### LOGISTICA 1
            if ( rlogistica1.length < RLOG1) {
            var i =  Game.time - 51032855;
            var newName = 'R1LG' + i;
            //console.log('Necesitamos un:' + newName);
            Game.spawns['Antz'].spawnCreep([MOVE,CARRY,MOVE,CARRY,MOVE,CARRY,MOVE,CARRY,MOVE,CARRY,MOVE,CARRY,MOVE,CARRY,MOVE,CARRY,MOVE,CARRY,MOVE,CARRY,MOVE,CARRY,MOVE,CARRY,MOVE,CARRY,MOVE,CARRY,MOVE,CARRY,MOVE,CARRY,MOVE,CARRY,MOVE,CARRY], newName, // REMOTO NURSE PICKER
            {memory: {role: 'rlogistica', role2: 'rlogistica1',destino: 'W45S41', home: 'W44S41'}})}

            //### LOGISTICA 2
            if ( rlogistica2.length < RLOG2) {
                var i =  Game.time - 51032855;
                var newName = 'R2LG' + i;
                //console.log('Necesitamos un:' + newName);
                Game.spawns['Antz'].spawnCreep([MOVE,CARRY,MOVE,CARRY,MOVE,CARRY,MOVE,CARRY,MOVE,CARRY,MOVE,CARRY,MOVE,CARRY,MOVE,CARRY,MOVE,CARRY,MOVE,CARRY,MOVE,CARRY,MOVE,CARRY,MOVE,CARRY,MOVE,CARRY,MOVE,CARRY,MOVE,CARRY,MOVE,CARRY,MOVE,CARRY], newName, // REMOTO NURSE PICKER
                {memory: {role: 'rlogistica', role2: 'rlogistica2', destino: 'W42S41', home: 'W44S41'}})}
                        //### LOGISTICA 2
            if ( rlogistica3.length < RLOG3) {
                var i =  Game.time - 51032855;
                var newName = 'R3LG' + i;
                //console.log('Necesitamos un:' + newName);
                Game.spawns['Antz'].spawnCreep([MOVE,CARRY,MOVE,CARRY,MOVE,CARRY,MOVE,CARRY,MOVE,CARRY,MOVE,CARRY,MOVE,CARRY,MOVE,CARRY,MOVE,CARRY,MOVE,CARRY,MOVE,CARRY,MOVE,CARRY,MOVE,CARRY,MOVE,CARRY,MOVE,CARRY,MOVE,CARRY,MOVE,CARRY,MOVE,CARRY], newName, // REMOTO NURSE PICKER
                {memory: {role: 'rlogistica', role2: 'rlogistica3', destino: 'W41S41', home: 'W44S41'}})}
} //## SPAWN 5
if(r.memory.prioridadSpawn == 6)
{
            if ( reserve.length < RSV) {
            var i =  Game.time - 51032855;
            var newName = 'RC' + i;
            //console.log('Necesitamos un:' + newName);
            Game.spawns['Antz'].spawnCreep([CLAIM,CLAIM,MOVE,MOVE,CARRY,MOVE,MOVE], newName, // REMOTO NURSE PICKER
            {memory: {role: 'reserve'}})}
 } //## SPAWN 6

    if(r.memory.prioridadSpawn != "1")
    {
        if ( tank.length < TANK) {  // TANK
            var i =  Game.time - 51032855;
            var newName = 'Tank' + i;
            console.log('Necesitamos un:' + newName);
            Game.spawns['Antz'].spawnCreep([TOUGH,MOVE,TOUGH,MOVE,MOVE,MOVE], newName, // REMOTO NURSE PICKER
            {memory: {role: 'squad', role2: 'tank'}})}
        
        if ( healer.length < HEALER) { //HEALER
            var i =  Game.time - 51032855;
            var newName = 'Healer' + i;
            console.log('Necesitamos un:' + newName);
            Game.spawns['Antz'].spawnCreep([TOUGH,TOUGH,TOUGH,TOUGH,HEAL,HEAL,HEAL,MOVE,MOVE,MOVE,MOVE,MOVE,MOVE,MOVE,MOVE], newName, // REMOTO NURSE PICKER
            {memory: {role: 'squad', role2: 'healer'}})}
        
        if ( ranged.length < RANGED) {  //RANGED
            var i =  Game.time - 51032855;
            var newName = 'Ranged' + i;
            console.log('Necesitamos un:' + newName);
            Game.spawns['Antz'].spawnCreep([MOVE,MOVE,MOVE,MOVE,MOVE,ATTACK,ATTACK,TOUGH,TOUGH,TOUGH,TOUGH,ATTACK,ATTACK,TOUGH,TOUGH,TOUGH,TOUGH,ATTACK,ATTACK,TOUGH,TOUGH,TOUGH,TOUGH,MOVE,MOVE,MOVE,MOVE,MOVE,MOVE,MOVE,MOVE], newName, // REMOTO NURSE PICKER
            {memory: {role: 'squad', role2: 'ranged'}})}
            
        if ( mele.length < MELE) {  //MELE
            var i =  Game.time - 51032855;
            var newName = 'Mele' + i;
            console.log('Necesitamos un:' + newName);
            Game.spawns['Antz'].spawnCreep([TOUGH,TOUGH,ATTACK,MOVE,MOVE,MOVE,TOUGH,TOUGH,ATTACK,MOVE,MOVE,MOVE,TOUGH,TOUGH,ATTACK,MOVE,MOVE,MOVE,TOUGH,TOUGH,ATTACK,MOVE,MOVE,MOVE], newName, // REMOTO NURSE PICKER
            {memory: {role: 'squad', role2: 'mele'}})}

            //  Configuracion Spawn
            if(Game.spawns['Antz'].spawning){
            Game.spawns['Antz'].spawning.setDirections([LEFT,TOP ,TOP_LEFT, BOTTOM_LEFT]);    
            }
        }
    }
};
module.exports = spawner;