var Colector = 
{
    run:function(creep)
    {
        if(creep.memory.inventario && creep.store[RESOURCES_ALL])
            { creep.say('0');
                creep.memory.inventario = false; //Inventario Vacio
            }
        if(creep.memory.inventario && creep.store.getFreeCapacity() == 0)
            { creep.say('0.1')
                creep.memory.inventario = true; //Inventario Lleno
            }
        //################################ VARIABLES ########
        var Energia = creep.pos.findClosestByRange(FIND_DROPPED_RESOURCES,
            {filter: resource => resource.energy > creep.store.getFreeCapacity(RESOURCE_ENERGY)});

        var Recursos = var Suelo = creep.pos.findClosestByRange(FIND_DROPPED_RESOURCES)

        var Storage = creep.pos.findClosestByRange(creep.rooms['name'].storage)
        //################################ VARIABLES ########

        
    }
};
module.exports = Colector;