var nursepicker = 
{
	run:function(creep)
	{
		if(creep.memory.working && creep.store[RESOURCE_ENERGY] == 0)
        {
            //creep.say('0');
            creep.memory.working = false; // Vacio
        }
        if(!creep.memory.working && creep.store.getFreeCapacity() == 0 )
        {
            //creep.say('0.1');
            creep.memory.working = true; // Lleno
        }
        //## VARIABLES
        var fill = _.filter(Game.creeps, (creep) => creep.memory.role == 'filler');
        //## END VARIABLES
        if(creep.memory.working)
            {
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
                return (//structure.structureType == STRUCTURE_SPAWN ||
                        structure.structureType == STRUCTURE_ROAD ||
                        structure.structureType == STRUCTURE_EXTENSION ||
                        structure.structureType == STRUCTURE_TOWER ||
                        structure.structureType == STRUCTURE_STORAGE ||
                        structure.structureType == STRUCTURE_CONTAINER)
            }
        });
        var Construcciones2 = creep.pos.findClosestByPath(FIND_STRUCTURES,
        {
            filter:(structure) => {
                return (structure.structureType == STRUCTURE_ROAD ||
                        //structure.structureType == STRUCTURE_WALL ||
                        structure.structureType == STRUCTURE_CONTAINER) &&
						structure.hits < 3000;
            }
        });
                if(Core && !(fill.length >= 2))
                {
                    //creep.say('1');
                    if(creep.transfer(Core, RESOURCE_ENERGY) == ERR_NOT_IN_RANGE)
                    {
                        //creep.say('1.0');
                        creep.moveTo(Core);
                    }
                }
                 else if (creep.room.controller.my.ticksToDowngrade < 100) {
                    if(creep.upgradeController(creep.room.controller) == ERR_NOT_IN_RANGE)
                        creep.say('¡5!');
                    {
                        creep.say('¡5.1!');
                        creep.moveTo(creep.room.controller);
                    }
                }
                else if (Construcciones1) {
                    //creep.say('3');
                    if(creep.build(Construcciones1) == ERR_NOT_IN_RANGE)
                    {
                        //creep.say('3.1');
                        creep.moveTo(Construcciones1);
                    }
                }
                else if (Construcciones2) {
                    creep.say('4');
                        if(creep.repair(Construcciones2) == ERR_NOT_IN_RANGE)
                        {
                            creep.say('4.1');
                            creep.moveTo(Construcciones2);
                        }
                }                
                else if (creep.room.controller.my)
                {
                    //creep.say('2');
                    if(creep.upgradeController(creep.room.controller) == ERR_NOT_IN_RANGE)
                    {
                        //creep.say('2.1');
                        creep.moveTo(creep.room.controller);
                    }
                }
            } else
            if(!creep.memory.working)
            {
                //creep.say('0.2');
                if(Game.cpu.bucket == 10000)
                    {
                        creep.say('💠',{puclic: true})
                        Game.cpu.generatePixel();
                    }
                var BuscarEnergia = require('BuscarEnergia');
                BuscarEnergia.run(creep);
            }
    }
};
module.exports = nursepicker;

/*

                const Energia = creep.pos.findClosestByRange(FIND_DROPPED_RESOURCES, 
                {
                    filter: resource => resource.energy > creep.store.getFreeCapacity(RESOURCE_ENERGY)
                });
                //const EnergiaCerca = creep.pos.findClosestByRange(Energia)
                if(creep.pickup(Energia) == ERR_NOT_IN_RANGE) 
                    {
                        //creep.say('0.3')
                        creep.moveTo(Energia)
                    }

*/