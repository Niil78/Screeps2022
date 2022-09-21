var rnursedroper = 
{
	run:function(creep)
	{
		if(creep.memory.inventario && creep.store[RESOURCE_ENERGY] == 0)
		{
			creep.say('0');
			creep.memory.inventario = false; //Vacio
		}
		if(!creep.memory.inventario && creep.store.getFreeCapacity() == 0)
		{
			creep.say('0.1');
			creep.memory.inventario = true; //Lleno
		}
		if(creep.room['name'] != creep.memory.destino){
			creep.say('0.0');
			creep.memory.dest = false; // No he llegado al destino
		}
		if(!creep.memory.dest && !creep.memory.meta)
		{
			creep.memory.meta = false; // No hemos llegado aun
			creep.say('0.2');
			const Granja = creep.memory.destino;
			creep.moveTo(new RoomPosition(25, 20, Granja));; //REVISAR
		}
		if(creep.room['name'] == creep.memory.destino)
		{
			creep.say('0.5')
			creep.memory.ready = true;
			creep.memory.meta = true; // Hemos llegado!
		}
		if(creep.memory.ready)
		{
			creep.say('⛏️', {puclic:true});
        	var Energia = creep.room.find(FIND_SOURCES_ACTIVE);
        	const EnergiaCerca = creep.pos.findClosestByPath(Energia);
        	if(creep.harvest(EnergiaCerca) == ERR_NOT_IN_RANGE)
        	{
        		creep.say('1.1');
            	creep.moveTo(EnergiaCerca);
        	}			
		}
	}
};
module.exports = rnursedroper;