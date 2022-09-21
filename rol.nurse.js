var Nurse = 
{
    run:function(creep)
    {
        if(creep.memory.working && creep.store[RESOURCE_ENERGY] == 0)
        {
            creep.say('0');
            creep.memory.working = false; // Vacio
        }
        if(!creep.memory.working && creep.store.getFreeCapacity() == 0 )
        {
            creep.say('0.1');
            creep.memory.working = true; // Lleno
        }
        var Mena = creep.pos.findClosestByPath(FIND_SOURCES_ACTIVE);
        var Core = creep.pos.findClosestByRange(FIND_STRUCTURES,
        {
            filter:(structure) => {
                return (structure.structureType == STRUCTURE_SPAWN ||
                        structure.structureType == STRUCTURE_EXTENSION) &&
                structure.store.getFreeCapacity(RESOURCE_ENERGY) > 0;
            }
        });
        var Construcciones1 = creep.pos.findClosestByPath(FIND_CONSTRUCTION_SITES,
        {
            filter:(structure) => {
                return (structure.structureType == STRUCTURE_ROAD ||
                        structure.structureType == STRUCTURE_SPAWN)
            }
        });
        var Construcciones2 = creep.pos.findClosestByPath(FIND_CONSTRUCTION_SITES,
        {
            filter:(structure) => {
                return (structure.structureType == STRUCTURE_EXTENSION||
                        structure.structureType == STRUCTURE_SPAWN)
            }
        });
        if(creep.memory.working)
            {
                if(Core)
                {
                    creep.say('1');
                    if(creep.transfer(Core, RESOURCE_ENERGY) == ERR_NOT_IN_RANGE)
                    {
                        creep.say('1.0');
                        creep.moveTo(Core);
                    }
                }
                 else if (creep.room.controller.ticksToDowngrade < 500 || creep.room.controller.ticksToDowngrade < 100) {
                    creep.say('3');
                    if(creep.upgradeController(creep.room.controller) == ERR_NOT_IN_RANGE)
                        creep.say('¡5!');
                    {
                        creep.say('¡5.1!');
                        creep.moveTo(creep.room.controller);
                    }
                }
                else if (Construcciones1) {
                    creep.say('3');
                    if(creep.build(Construcciones1) == ERR_NOT_IN_RANGE)
                    {
                        creep.say('3.1');
                        creep.moveTo(Construcciones1);
                    }
                }
                else if (Construcciones2) {
                    creep.say('4');
                    if(creep.build(Construcciones2) == ERR_NOT_IN_RANGE)
                    {
                        creep.say('4.1');
                        creep.moveTo(Construcciones2);
                    }
                }                
                else if (creep.room.controller)
                {
                    creep.say('2');
                    if(creep.upgradeController(creep.room.controller) == ERR_NOT_IN_RANGE)
                    {
                        creep.say('2.1');
                        creep.moveTo(creep.room.controller);
                    }
                }
            } else
            if(!creep.memory.working)
            {
                creep.say('0.2');
                if(creep.harvest(Mena, RESOURCE_ENERGY) == ERR_NOT_IN_RANGE)
                {
                    creep.say('0.3');
                    creep.moveTo(Mena)
                }
            }
    }
};

module.exports = Nurse;


/*

    ¿Estoy Trabajando?
     (Memory.Working)
     True      False
     (Vacio)  (lleno)
      Mena     Spawn
    ¿Working?  Controller


*/




/*
for (var i = 0; i < path.length; i++) {
    path[i].createConstructionSite(STRUCTURE_ROAD);
}
*/