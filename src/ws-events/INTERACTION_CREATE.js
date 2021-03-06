export default async function (bot, interaction) {
    if (interaction.type !== 2) return;
    switch (interaction.data.name) {
        case 'wubbzy': {
            await bot.api.interactions(interaction.id, interaction.token).callback.post({
                data: {
                    type: 3,
                    data: {
                        content: 'Wubbzy is the best! <a:WubbzyFaceA:612311062611492900>'
                    }
                }
            })
            break;
        }
        case 'say': {
            await bot.api.interactions(interaction.id, interaction.token).callback.post({
                data: {
                    type: 4,
                    data: {
                        embeds: [{
                            title: "Say command",
                            description: interaction.data.options[0].value
                        }]
                    }
                }
            })
            break;
        }
    }
}