var SQUAD = 
{
    run:function(creep)
    {
        creep.moveTo(Game.flags.SQUAD) // Destino
        if(creep.memory.role2 == 'tank')
        {
            creep.moveTo(Game.flags.SQUADTANK) // Flag Tanks
            const Tower = creep.pos.findClosestByRange(FIND_HOSTILE_STRUCTURES, {
                filter: (structure) => {return (structure.structureType == STRUCTURE_TOWER)}});
            creep.moveTo(Tower);
            var HealerF = creep.pos.findClosestByRange(FIND_MY_CREEPS, {
                filter: function(object) {return object.getActiveBodyparts(HEAL)}});

            if(creep.hits < creep.hitsMax)
                { // RUN OUT!
                    creep.moveTo(HealerF);
                } // RUN OUT END        
        }
        if(creep.memory.role2 == 'healer')
        {   //creep.say('Healer');
            creep.moveTo(Game.flags.SQUADHEAL) //FLAG HEALER
            if(creep.pos.findClosestByRange(FIND_HOSTILE_CREEPS))
            {
            var follow = creep.pos.findClosestByRange(FIND_MY_CREEPS, {
                filter: function(object) {return object.getActiveBodyparts(ATTACK)}});
                creep.moveTo(follow);           
            }   
            //Variables
            var Curar = creep.pos.findClosestByRange(FIND_MY_CREEPS,
                {filter: function(object) {return object.hits < object.hitsMax}});
            //Variables
            if(Curar)
            { //creep.say('curar')
                creep.moveTo(Curar);
                if(creep.pos.isNearTo(Curar)){
                    creep.heal(Curar);
                }else{
                    creep.rangedHeal(Curar);
                }
            }
        }
        if(creep.memory.role2 == 'mele')
        {   //creep.say('Mele');
            creep.moveTo(Game.flags.SQUADMELE) //FLAG MELE
            //Variables
            const Hostiles = creep.pos.findClosestByRange(FIND_HOSTILE_CREEPS);
			const Tower = creep.pos.findClosestByRange(FIND_HOSTILE_STRUCTURES, {
						filter: (structure) => {return (structure.structureType == STRUCTURE_TOWER)}});
            const Storage = creep.pos.findClosestByRange(FIND_HOSTILE_STRUCTURES, {
                        filter: (structure) => {return (structure.structureType == STRUCTURE_STORAGE)}});
			const Healer = creep.pos.findClosestByRange(FIND_HOSTILE_CREEPS, {
						filter: function(object) {return object.getActiveBodyparts(HEAL)}});
            const Attacker = creep.pos.findClosestByRange(FIND_HOSTILE_CREEPS, {
                        filter: function(object) {return object.getActiveBodyparts(ATTACK)}});
            var HealerF = creep.pos.findClosestByRange(FIND_MY_CREEPS, {
                        filter: function(object) {return object.getActiveBodyparts(HEAL)}});
            var Construcciones = creep.pos.findClosestByRange(FIND_HOSTILE_CONSTRUCTION_SITES)
            //Variables
            if(Tower || Hostiles || Healer || Construcciones) 
            {
                creep.memory.hold = true;
                if(Tower)
                {
                    //creep.say('Tower');
                    if(creep.attack(Tower) == ERR_NOT_IN_RANGE) 
                    {
                        creep.moveTo(Tower)
                    }
                }
                if(!creep.memory.hold)
                {
                        if(Hostiles)
                    { //creep.say('Hostiles');
                        if(creep.attack(Hostiles) == ERR_NOT_IN_RANGE) 
                        {
                            creep.moveTo(Hostiles)
                        } 
                    }
                }
            else if(Healer)
                    {  //creep.say('Healers');
                        if(creep.attack(Healer) == ERR_NOT_IN_RANGE) 
                    {
                        creep.moveTo(Healer)
                    }
            else if(Attacker)
                {  //creep.say('Attaker');
                    if(creep.attack(Attacker) == ERR_NOT_IN_RANGE) 
                    {
                        creep.moveTo(Attacker)
                    }
                }	
            else if(Construcciones)
                { //creep.say('Hostiles');
                    if(creep.attack(Construcciones) == ERR_NOT_IN_RANGE) 
                    {
                        creep.moveTo(Construcciones)
                    } 
                }
            else if (Storage)
                {
                    if(creep.attack(Storage) == ERR_NOT_IN_RANGE)
                    {
                        creep.moveTo(Storage)
                    }
                }
            else if(creep.memory.all)
                { //creep.say('DESTRUCCION');
                const all = creep.pos.findClosestByRange(FIND_HOSTILE_STRUCTURES)
                    if(creep.attack(all) == ERR_NOT_IN_RANGE)
                    {
                        creep.moveTo(all)
                    }
                }
            }
        }
        if(creep.memory.role2 == 'ranged')
        {
                creep.say('TEST2')
        }
    }
    }
};
module.exports = SQUAD;