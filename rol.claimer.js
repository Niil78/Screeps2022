var claimer =
{
	run:function(creep)
	{
			for(var f of Object.values(Game.flags))
				{
					creep.say('0');
					if(f.color == 6 && f.secondaryColor == 6)
					{
						creep.say('🚩');
						creep.memory.flag = f.room['name'];
						//console.log(creep.memory.flag)
					}
				}; // Final Bucle Flags ## 
			if(creep.room['name'] != creep.memory.flag)
			{
				creep.say('🏃‍♂️ 🚩');
				creep.moveTo( new RoomPosition ( 25, 25,creep.memory.flag));
			}
			if(creep.room['name'] == creep.memory.flag)
			{
				if(creep.memory.inventario && creep.store[RESOURCE_ENERGY] == 0)
				{
					creep.memory.inventario = false;
				}
				if(!creep.memory.inventario && creep.store.getFreeCapacity() == 0)
				{
					creep.memory.inventario = true;
				}
				if(!creep.memory.inventario)
				{ // Inventario Vacio
					const Energia = creep.pos.findClosestByRange(FIND_DROPPED_RESOURCES, 
						{
							filter: resource => resource.energy > creep.store.getFreeCapacity(RESOURCE_ENERGY)
						});
					if(creep.pickup(Energia) == ERR_NOT_IN_RANGE)
					{
						//creep.say('¡1!');
						creep.moveTo(Energia)
					}
				}					
				if(creep.memory.inventario)
				{
					creep.say('0.1')
					if(!creep.room.controller.my)
					{
						creep.say('0.2')
						if(creep.claimController(creep.room.controller) == ERR_NOT_IN_RANGE)
                		{
                			creep.say('0.3')
                    		creep.moveTo(creep.room.controller);
                		}
                		if(creep.claimController(creep.room.controller) == ERR_NO_BODYPART)
                		{
                			creep.say('0.4')
                    		//console.log('EUREKA CONTROLLER')
                    		creep.suicide();
                		}
                	}
                }
			}
    }
};
module.exports = claimer;