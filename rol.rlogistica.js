var rlogistica = 
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
			creep.memory.ready = false;
		}
		if(creep.room['name'] != creep.memory.destino){
			//creep.say('0.0');
			creep.memory.dest = false; // No he llegado al destino
			creep.memory.ready = false;
		}
		if(creep.room['name'] != creep.memory.home){
			//creep.say('0.0');
			creep.memory.dest = false; // No he llegado al destino
			//creep.memory.ready = true;
		}

		if(!creep.memory.inventario && !creep.memory.dest)
		{
			creep.memory.meta = false; // No hemos llegado aun
			creep.say('🏃‍♂️');
			const Granja = creep.memory.destino;
			creep.moveTo(new RoomPosition(25, 20, Granja)); //REVISAR
		}
		if(creep.room['name'] == creep.memory.destino)
		{
			//creep.say('0.5')
			creep.memory.ready = true;
		}
		const posicion = new RoomPosition(33, 29,creep.memory.home)
		const DropCasa = creep.memory.home;
		if(creep.memory.ready && !creep.memory.inventario)
		{
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
		if(creep.memory.home != creep.room['name'] && creep.memory.inventario)
		{
			//creep.say('🛻');
			creep.moveTo(new RoomPosition(45, 42, DropCasa)); //REVISAR
		}
		if(creep.room['name'] == creep.memory.home && creep.memory.inventario)
		{
			creep.memory.ready = false;
			var Storage = creep.pos.findClosestByRange(FIND_STRUCTURES,
				{
					filter:(structure) => {
						return (structure.structureType == STRUCTURE_STORAGE || 
								structure.structureType == STRUCTURE_TOWER ||
								structure.structureType == STRUCTURE_CONTAINER) &&
						structure.store.getFreeCapacity(RESOURCE_ENERGY)
						}
					});
    		creep.say('📦');
    		if(creep.transfer(Storage, RESOURCE_ENERGY) == ERR_NOT_IN_RANGE)
				{   //creep.say('¡1!');
					creep.moveTo(Storage);
				};
    		
		}
	}
};
module.exports = rlogistica;