var construiccion = 
{
    run: function(creep)
    {
		var Road = creep.pos.findClosestByRange(FIND_CONSTRUCTION_SITES,
			{filter: (structure) => {
				return (structure.structuretype == STRUCTURE_ROAD)}});
		
		var Core = creep.pos.findClosestByRange(FIND_CONSTRUCTION_SITES,
			{filter: (structure) => {
				return (structure.structureType == STRUCTURE_SPAWN ||
						structure.structureType == STRUCTURE_EXTENSION)}});
		
		var Storage = creep.pos.findClosestByRange(FIND_CONSTRUCTION_SITES,
			{filter: (structure) => {
				return (structure.structureType == STRUCTURE_STORAGE ||
						structure.structureType == STRUCTURE_CONTAINER)}});
		
		var Trader = creep.pos.findClosestByRange(FIND_CONSTRUCTION_SITES,
			{filter: (structure) => {
				return (structure.structureType == STRUCTURE_LAB ||
						structure.structureType == STRUCTURE_TERMINAL)}});
		
		var Muros = creep.pos.findClosestByRange(FIND_CONSTRUCTION_SITES,
			{filter: (structure) => {
				return (structure.structureType == STRUCTURE_WALL ||
						structure.structureType == STRUCTURE_RAMPART)}});
		
		var Factory = creep.pos.findClosestByRange(FIND_CONSTRUCTION_SITES,
			{filter: (structure) => {
				return (structure.structureType == STRUCTURE_FACTORY ||
						structure.structureType == STRUCTURE_POWER_SPAWN ||
						structure.structureType == STRUCTURE_NUKER)}});

		if(Core || Road || Storage || Muros || Trader || Factory)
		{
			if(core)
			{
				if(creep.build(Core) == == ERR_NOT_IN_RANGE)
				{
					creep.moveTo(Core);
				}
			}
			if(Road)
			{
				if(creep.build(Road) == ERR_NOT_IN_RANGE)
				{
					creep.moveTo(Road);
				}
			}
			if(Storage)
			{
				if(creep.build(Storage) == ERR_NOT_IN_RANGE)
				{
					creep.moveTo(Storage);
				}
			}
			if(Storage)
			{
				if(creep.build(Muros) == ERR_NOT_IN_RANGE)
				{
					creep.moveTo(Muros);
				}
			}
			if(Trader)
			{
				if(creep.build(build) == ERR_NOT_IN_RANGE)
				{
					creep.moveTo(Trader);
				}
			}
			if(Factory)
			{
				if(creep.build(Factory) == ERR_NOT_IN_RANGE)
				{
					creep.moveTo(Factory);
				}
			}
		}
    }
};
module.exports == construccion;



