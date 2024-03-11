const {ownerId} = require('../owners.json');
const {updateMc} = require('../config.json');
const execFile = require('child_process').execFile;
module.exports = {
	name: 'update',
    description: 'Updejcicho programisków',
    args: true,
    cooldown: 5,
    guildOnly: false,
    permissions: ['OWNER'],
	execute(message, args, client) {
        if (!ownerId.includes(message.author.id)) {
            message.react('❌');
            return;
        };

        if (args[0] == "mc") {
            message.react('✅')
            .then( () => {
                execFile(updateMc, function(err, data) {  
                    console.log(err);
                    console.log(data.toString());                       
                });
            });
        }
    }
}