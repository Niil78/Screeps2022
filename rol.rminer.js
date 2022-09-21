var rminer =
{
 run:function(creep)
 {
    for(var f of Object.values(Game.flags))
    {
        creep.say('0');
        if(f.color == 9 && f.secondaryColor == 9)
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
        if(creep.memory.inventario && creep.store[RESOURCES_ALL] == 0)
            {
            creep.memory.inventario = false;
            }
    if(!creep.memory.inventario && creep.store.getFreeCapacity() == 0)
        {
            creep.memory.inventario = true;
        }
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
        creep.moveTo(new RoomPosition(45, 42, DropCasa)); //REVISAR
    }
    if(creep.room['name'] == creep.memory.home && creep.memory.inventario)
    {
        creep.memory.ready = false;
        var Storage = creep.pos.findClosestByRange(FIND_STRUCTURES,
        {
            filter:(structure) => {
            return (structure.structureType == STRUCTURE_STORAGE) &&
                    structure.store.getFreeCapacity() }});
            creep.say('📦');
        if(creep.transfer(Storage, RESOURCES_ALL) == ERR_NOT_IN_RANGE)
        {   //creep.say('¡1!');
            creep.moveTo(Storage);
        };
    }
 }   
};
module.exports = rminer;