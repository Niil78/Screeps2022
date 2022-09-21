var nursedroper =
{
    run:function(creep)
    {
        var Energia = creep.room.find(FIND_SOURCES);
        const EnergiaCerca = creep.pos.findClosestByPath(Energia);
        if(creep.harvest(EnergiaCerca) == ERR_NOT_IN_RANGE)
        {
            creep.moveTo(EnergiaCerca);
        }
    }
};
module.exports = nursedroper;