const { SlashCommandBuilder } = require("discord.js");
const { newGame } = require("../game-manager.js");

module.exports = {
    data: new SlashCommandBuilder()
        .setName("start")
        .setDescription("Begin a new game of wordle"),
    async execute(interaction){
        // Create a new game for this channel if it doesnt already exist
        if(newGame(interaction.channelId))
            interaction.reply({content: "The game begins!"});
        else
            interaction.reply({content: "This channel already has an active game!"});
    },
};