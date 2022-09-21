// Contador de Creepers
// Cuenta todos los Creeps en cada Rol y lo muestra en la consola
// **NECESITA SER OPTIMIZADO Y MOVIDO A LA CONSOLA.JS**

module.exports = 
{
    run:function()
    {
        var nurse = _.filter(Game.creeps, (creep) => creep.memory.role == 'nurse');
        var nurseDroper = _.filter(Game.creeps, (creep) => creep.memory.role2 == 'nurseDroper');
        var nursePicker = _.filter(Game.creeps, (creep) => creep.memory.role2 == 'nursePicker');
        var filler = _.filter(Game.creeps, (creep) => creep.memory.role == 'filler');
        var reserve = _.filter(Game.creeps, (creep) => creep.memory.role == 'reserve');
        var rnurseDroper = _.filter(Game.creeps, (creep) => creep.memory.role2 == 'rnurseDroper');
		var rnursePicker = _.filter(Game.creeps, (creep) => creep.memory.role2 == 'rnursePicker');
        var rnurseDroper1 = _.filter(Game.creeps, (creep) => creep.memory.role2 == 'rnurseDroper1');      	
        var rnursePicker1 = _.filter(Game.creeps, (creep) => creep.memory.role2 == 'rnursePicker1');
        var rnurseDroper2 = _.filter(Game.creeps, (creep) => creep.memory.role2 == 'rnurseDroper2');
        var rnursePicker2 = _.filter(Game.creeps, (creep) => creep.memory.role2 == 'rnursePicker2');
        var rlogistica = _.filter(Game.creeps, (creep) => creep.memory.role2 == 'rlogistica');
        var rlogistica1 = _.filter(Game.creeps, (creep) => creep.memory.role2 == 'rlogistica1');
        var rlogistica2 = _.filter(Game.creeps, (creep) => creep.memory.role2 == 'rlogistica2');
        
    	console.log('R0 Dropers: ' + nurseDroper.length + ' |' + ' Pickers: ' + nursePicker.length + ' |' + ' Fillers: ' + filler.length);
		console.log('R1 Dropers: ' + rnurseDroper.length + ' |' + ' Pickers: ' + rnursePicker.length + ' |' + ' Logisticas: ' + rlogistica.length);
		console.log('R2 Dropers: ' + rnurseDroper1.length + ' |' + ' Pickers: ' + rnursePicker1.length + ' |' + ' Logisticas: ' + rlogistica1.length);
		console.log('R3 Dropers: ' + rnurseDroper2.length + ' |' + ' Pickers: ' + rnursePicker2.length + ' |' + ' Logisticas: ' + rlogistica2.length);

        

	}
}

