var Creeps = 
{
	run:function(creep) 
	{
		//## ROLES ##
		var Nurse = require('rol.nurse');
		var NurseDroper = require('rol.nurseDroper');
		var Fill = require('rol.fill');
		var NursePicker = require('rol.nursePicker');
		var RNursePicker = require('rol.rnursepicker');
		var RNurseDroper = require('rol.rnursedroper');
		var RLogistica = require('rol.rlogistica');
		var Reserve = require('rol.claimer');
		var test = require('rol.test');
		var Rminer = require('rol.rminer')

		var Squad = require('rol.squad');


  		for (var name in Game.creeps) 
  		{
       		var creep = Game.creeps[name];

			//Cualificacion
			if(creep.memory.role == "nurse")
			{
				Nurse.run(creep);
			}
			if(creep.memory.role == "nurseDroper")
			{
				NurseDroper.run(creep);
			}
			if(creep.memory.role == "nursePicker")
			{
				NursePicker.run(creep);
			}
			if(creep.memory.role == "filler")
			{
				Fill.run(creep);
			}
			
			if(creep.memory.role == "rnursePicker")
			{
				RNursePicker.run(creep);
			}
			if(creep.memory.role == "rnurseDroper")
			{
				RNurseDroper.run(creep);
			}
			if(creep.memory.role == "rlogistica")
			{
				//creep.memory.destino = 'W41S41' 
				//creep.memory.destino = 'W43S41'
				//if(creep.memory.role2 = 'rlogistica2')
					//	{
 					//		creep.memory.role3 == '00'   
					//	}	
				RLogistica.run(creep);
			}
			if(creep.memory.role == "reserve")
			{
				Reserve.run(creep);
			}

			if(creep.memory.role == "rminer")
			{
				Rminer.run(creep);
			}
			
			if(creep.memory.role == 'test')
			{
				test.run(creep);
			}
			//### SQUAD
			if(creep.memory.role == 'squad')
			{
				Squad.run(creep);
			}



		}
	}
};
module.exports = Creeps;


/*

if(creep.memory.role2 = 'rlogistica')
{
 creep.memory.destino = 'W43S41'   
}
if(creep.memory.role2 = 'rlogistica1')
{
 creep.memory.destino = 'W45S41'   
}
if(creep.memory.role2 = 'rlogistica2')
{
 creep.memory.destino = 'W42S41'   
} 



			if(creep.memory.role3 == '00')
			{
				creep.moveTo(new RoomPosition(34, 8,"W41S41"))
				creep.say('🥷');
				 creep.memory.role3 == '00';
				 //creep.memory.ready = false;
			}



*/

// creep.memory.role3 == '00'
