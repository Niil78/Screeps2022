var rnursepicker = 
{
	run:function(creep)
	{
		var NursePicker = require('rol.nursePicker');
		if(creep.memory.inventario && creep.store[RESOURCE_ENERGY] == 0)
		{
			creep.say('0');
			creep.memory.inventario = false; //Vacio
		}
		if(!creep.memory.inventario && creep.store.getFreeCapacity() == 0)
		{
			creep.say('0.1');
			creep.memory.inventario = true; //Lleno
			creep.memory.ready = false;
		}
		if(creep.room['name'] != creep.memory.destino){
			creep.say('0.0');
			creep.memory.dest = false; // No he llegado al destino
		}
		if(!creep.memory.inventario && !creep.memory.dest) //Inventario Vacio y fuera de destino
		{
			creep.memory.meta = false; // No hemos llegado aun
			creep.say('0.2');
			const Granja = creep.memory.destino;
			creep.moveTo(new RoomPosition(25, 20, Granja)); //REVISAR
		}
		if(creep.room['name'] == creep.memory.destino)
		{
			creep.say('🧟',{puclic: true})
			creep.memory.ready = true;
			NursePicker.run(creep);
		}
	}
};
module.exports = rnursepicker;

/*

if(creep.memory.ready && creep.memory.inventario && creep.memory.dest)
			{
				creep.say('7.0')
				if(creep.memory.working)
	            {
	            	creep.say('7.1')
			        var Core = creep.pos.findClosestByRange(FIND_STRUCTURES,
			        {
			            filter:(structure) => {
			                return (structure.structureType == STRUCTURE_CONTAINER ||
			                        structure.structureType == STRUCTURE_EXTENSION) &&
			                structure.store.getFreeCapacity(RESOURCE_ENERGY) > 0;
			            }
			        });
			        var Construcciones1 = creep.pos.findClosestByPath(FIND_CONSTRUCTION_SITES,
			        {
			            filter:(structure) => {
			                return (structure.structureType == STRUCTURE_ROAD||
			                        structure.structureType == STRUCTURE_CONTAINER)
			            }
			        });
			        var Construcciones2 = creep.pos.findClosestByPath(FIND_CONSTRUCTION_SITES,
			        {
			            filter:(structure) => {
			                return (structure.structureType == STRUCTURE_ROAD ||
			                        structure.structureType == STRUCTURE_CONTAINER)
			            }
			        });
	                if(Core)
	                {
	                    creep.say('1');
	                    if(creep.transfer(Core, RESOURCE_ENERGY) == ERR_NOT_IN_RANGE)
	                    {
	                        creep.say('1.0');
	                        creep.moveTo(Core);
	                    }
	                }
	                 else if (creep.room.controller.my){
	                 	if(creep.room.controller.ticksToDowngrade < 100)
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
	                    if(creep.repair(Construcciones2) == ERR_NOT_IN_RANGE)
	                    {
	                        creep.say('4.1');
	                        creep.moveTo(Construcciones2);
	                    }
	                }
	            } else {
	            if(!creep.memory.working)
	            {
	                creep.say('0.2');
					const Energia = creep.pos.findClosestByRange(FIND_DROPPED_RESOURCES, 
					{
						filter: resource => resource.energy > creep.store.getFreeCapacity(RESOURCE_ENERGY)
					});
					//const EnergiaCerca = creep.pos.findClosestByRange(Energia)
					if(creep.pickup(Energia) == ERR_NOT_IN_RANGE) 
						{
							creep.say('0.3')
							creep.moveTo(Energia)
						}
	            }
			} 
		}//End Ready

		*/