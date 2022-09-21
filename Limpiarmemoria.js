module.exports = 
{
    run:function()
    {

        for (var name in Memory.creeps) {
            if(!Game.creeps[name]) {
                delete Memory.creeps[name];
                console.log('Cache Limpiada:', name);
            }
        }
    }
}