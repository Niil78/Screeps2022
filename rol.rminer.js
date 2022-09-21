var rminer =
{
 run:function(creep)
 {
    if(creep.memory.inventario && creep.store[RESOURCE_BIOMASS] == 0)
    {
    creep.memory.inventario = false;
    }
    if(!creep.memory.inventario && creep.store.getFreeCapacity() == 0)
    {
    creep.memory.inventario = true;
    }
    var Home = creep.memory.home
    if(!creep.memory.flag)
    {
        for(var f of Object.values(Game.flags))
        {
            creep.say('0');
            if(f.color == 9 && f.secondaryColor == 9)
            {
                creep.say('🚩');
                creep.memory.flag = f.room['name'];
                console.log(creep.memory.flag)
            }
        }; // Final Bucle Flags ## 
    }
    if(creep.room['name'] != creep.memory.flag)
    {
        creep.say('🏃‍♂️ 🚩');
        creep.moveTo(new RoomPosition(25, 25, creep.memory.flag));
    }
    if(creep.room['name'] == creep.memory.flag)
    {
    if(!creep.memory.inventario)
        { // Inventario Vacio
            const Minerales = creep.pos.findClosestByRange(FIND_DEPOSITS);
            if(creep.harvest(Minerales) == ERR_NOT_IN_RANGE)
                {
                    //creep.say('¡1!');
                    creep.moveTo(Minerales)
                }
        }	
    }	// Final Fuera de home			
    if(creep.memory.home != creep.room['name'] && creep.memory.inventario)
    {
        //creep.say('🛻');
        creep.moveTo(new RoomPosition(25, 25, Home)); //REVISAR
    }
    if(creep.room['name'] == creep.memory.home && creep.memory.inventario)
    {
        creep.memory.ready = false;
        creep.moveTo(new RoomPosition(45, 42, creep.memory.home)); //REVISAR
        var Storage = creep.pos.findClosestByRange(FIND_STRUCTURES,
        {
            filter:(structure) => {
            return (structure.structureType == STRUCTURE_STORAGE) &&
                    structure.store.getFreeCapacity(RESOURCES_ALL) > creep.store.getFreeCapacity();}});
            creep.say('📦');
        if(creep.transfer(Storage,RESOURCE_BIOMASS) == ERR_NOT_IN_RANGE)
        {   //creep.say('¡1!');
            creep.moveTo(Storage);
        };
    }
 }   
};
module.exports = rminer;