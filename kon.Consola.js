
module.exports =
{
	run:function()
	{
		if(Game.cpu.bucket >= 10000)
		console.log('CPU/PIXEL:' + Game.cpu.bucket);
		console.log('Prioridad Spawn: ' + Game.rooms['W44S41'].memory.prioridadSpawn + ' |' +' DEFCON: ' + Game.rooms['W44S41'].memory.DEFCON)
		//console.log(Game.rooms['W44S41'].memory.prioridadSpawn , background: #222; color: #bada55);
		if(Game.rooms['W44S41'].memory.prioridadSpawn >= 6){
			console.log('Spawn Ok')
		}
	}
};