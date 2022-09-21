var BuscarEnergia = 
{
    run:function(creep)
    { 
         //### VARIABLES ################################################
         var Suelo = creep.pos.findClosestByRange(FIND_DROPPED_RESOURCES,
            {filter: resource => resource.energy > creep.store.getFreeCapacity(RESOURCE_ENERGY)});
         var Ruinas = creep.pos.findClosestByRange(FIND_RUINS, 
            {filter: (structure) => structure.store[RESOURCE_ENERGY]});
         var Tumbas = creep.pos.findClosestByRange(FIND_TOMBSTONES, 
            {filter: (structure) => structure.store[RESOURCE_ENERGY]});
         var Containers = creep.pos.findClosestByRange(FIND_STRUCTURES,{
            filter:(structure) => {return (structure.structureType == STRUCTURE_CONTAINER) &&
                structure.store[RESOURCE_ENERGY] > creep.store.getFreeCapacity()
                }
            });
         var Storage = creep.pos.findClosestByRange(FIND_STRUCTURES,{
                filter:(structure) => {return (structure.structureType == STRUCTURE_STORAGE) &&
                    structure.store[RESOURCE_ENERGY] > creep.store.getFreeCapacity()
                    }
                });
         var DEFCOM4 = creep.memory.role == "filler";
         var Defcom4 = Game.rooms['W44S41'].memory.DEFCOM == "4";
        
         //### VARIABLES ################################################
    //### ACCIONES ######################################################
    if(Tumbas || Suelo || Ruinas || Containers || Storage )
        {
            if(Storage && Defcom4 && DEFCOM4) //(DEFCOM4)
            { //creep.say('DEFCOM 4 ENABLE');
                if(creep.withdraw(Storage, RESOURCE_ENERGY) == ERR_NOT_IN_RANGE)
                {
                    creep.moveTo(Storage)
                }
            }
            else if (Tumbas)
                {   creep.say('➕',{public: true});
                    if(creep.withdraw(Tumbas, RESOURCE_ENERGY) == ERR_NOT_IN_RANGE)
                    {
                        creep.moveTo(Tumbas)
                    }
                }
            else if (Ruinas)
                {
                  if(creep.withdraw(Ruinas, RESOURCE_ENERGY) == ERR_NOT_IN_RANGE)
                    {
                          creep.moveTo(Ruinas)
                    }
                }
            else if(Suelo)
                {
                    if(creep.pickup(Suelo) == ERR_NOT_IN_RANGE)
                    {
                        creep.moveTo(Suelo)
                    }
                }
            else if (Containers)
            {
                if(creep.withdraw(Containers, RESOURCE_ENERGY) == ERR_NOT_IN_RANGE)
                {
                    creep.moveTo(Containers)
                }
            }
            else if (Storage)
            {
                if(creep.withdraw(Storage, RESOURCE_ENERGY) == ERR_NOT_IN_RANGE)
                {
                    creep.moveTo(Storage)
                }
            }
        } // Final Acciones
    //### ACCIONES ######################################################
    }
};
module.exports = BuscarEnergia;

/*
if(Game.cpu.bucket == 10000)
{
    creep.say('💠',{puclic: true})
    Game.cpu.generatePixel();
}
*/