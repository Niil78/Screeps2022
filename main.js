
// Archivos Requeridos
var LimpiarMemoria= require ('Limpiarmemoria')
//var ContadorCreeps= require('kon.ContadorCreeps')
var Consola= require('kon.Consola')
var Spawner= require ('Spawner');
var Creeps= require ('Creeps');
var Towers= require('towers');
//var Links = require('Links');
//var Memorias = require('Memorias');

module.exports.loop = function()
{
	//Iniciamos la consola
	Consola.run();
	//Contador de Creepers
	//ContadorCreeps.run();
	//Limpiar Cache Muerta
	LimpiarMemoria.run();
	//Cualificacion
	Creeps.run();
	//Spawner
	Spawner.run();
	 // mem.run(); Inacabado o incomprensible.

	 //## Torretas

for(var name in Game.rooms) {
	console.log('Room "'+name+'" has '+Game.rooms[name].energyAvailable+' energy');
	var towers = Game.rooms[name].find(FIND_MY_STRUCTURES, 
		{filter: (structure) => {return   (structure.structureType == STRUCTURE_TOWER);
			} 
		});
	for(var t in towers) {
		Towers.run(towers[t]);
	}

	}

	let r = Game.rooms['W44S41'];
	var towers = r.find(FIND_MY_STRUCTURES, 
	{
    filter: (structure) => {
        return   (structure.structureType == STRUCTURE_TOWER);
    	} 
		});
for(var t in towers) {
    Towers.run(towers[t]);
}
	 	
}

/*


*/