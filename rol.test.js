var test = 
{
	run:function(creep)
	{
		creep.memory.testing = false;
		if(creep.memory.testing)
			{
				creep.say('TESTING');
				creep.moveTo(Game.flags.DIS)
			}
		if(!creep.memory.testing) // ZONA DE PRUEBAS
		{
			creep.moveTo(Game.flags.DIS)
			const target = creep.pos.findClosestByRange(FIND_STRUCTURES,
				{filter: {structureType: STRUCTURE_WALL}});
			if(target) {
				if(creep.dismantle(target) == ERR_NOT_IN_RANGE) {
					creep.moveTo(target);
				}
			}
		}// FINAL ZONA PRUEBAS
	}
};
module.exports = test;


/*


*/