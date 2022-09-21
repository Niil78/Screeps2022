var fill =
{
	run:function(creep)
	{
		if(creep.memory.inventario && creep.store[RESOURCE_ENERGY] == 0)
		{
			//creep.say('0');
			creep.memory.inventario = false; //Vacio
		}
		if(!creep.memory.inventario && creep.store.getFreeCapacity() == 0)
		{
			//creep.say('0.1');
			creep.memory.inventario = true; //Lleno
		}
		for (var name in Game.creeps) 
		{  ///####
		} ///####
		if(creep.memory.inventario)
		{
	    	var target2 = creep.pos.findClosestByRange(FIND_STRUCTURES,
		    	{
		            filter:(structure) => 
		            {
		                return (structure.structureType == STRUCTURE_SPAWN ||
		                        structure.structureType == STRUCTURE_EXTENSION) &&
		                structure.store.getFreeCapacity(RESOURCE_ENERGY) > 0;
		            }
		        });	
		    var target3 = creep.pos.findClosestByRange(FIND_STRUCTURES,
		    	{
		            filter:(structure) => 
		            {
		                return (structure.structureType == STRUCTURE_STORAGE) &&
		                structure.store.getFreeCapacity(RESOURCE_ENERGY) > 0;
		           	}
				});
		    var target1 = creep.pos.findClosestByRange(FIND_STRUCTURES,
		    	{
		            filter:(structure) => 
		            {
		                return (structure.structureType == STRUCTURE_TOWER) &&
		                structure.store.getFreeCapacity(RESOURCE_ENERGY) > 100;
		           	}
				});
		    if(target1)
		    {
		    	if(creep.transfer(target1, RESOURCE_ENERGY) == ERR_NOT_IN_RANGE)
		    	{
		    		creep.moveTo(target1);
		    	}
			}
			else if(target2)
		    {
		    	if(creep.transfer(target2, RESOURCE_ENERGY) == ERR_NOT_IN_RANGE)
		    	{
		    		creep.moveTo(target2);
		    	}
			}
			else if(target3)
		    {
		    	if(creep.transfer(target3, RESOURCE_ENERGY) == ERR_NOT_IN_RANGE)
		    	{
		    		creep.moveTo(target3);
		    	}
			}	            		
		} else 
            {
                //creep.say('0.2');
                var BuscarEnergia = require('BuscarEnergia');
                BuscarEnergia.run(creep);
            }
		if(! target1 && !target2 && !target3 && creep.memory.inventario)
		{
			if(Game.cpu.bucket == 10000)
                {
                    creep.say('💠',{puclic: true})
                	Game.cpu.generatePixel();
                }
			creep.moveTo(Game.flags.AFK);
		}
	}
};
module.exports = fill;


/*

			const Energia = creep.pos.findClosestByRange(FIND_DROPPED_RESOURCES, 
				{
					filter: resource => resource.energy > creep.store.getFreeCapacity(RESOURCE_ENERGY)
				});
			if(creep.pickup(Energia) == ERR_NOT_IN_RANGE)
			{
				//creep.say('¡1!');
				creep.moveTo(Energia)
			}

*/