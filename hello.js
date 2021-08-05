exports.run = async (bot,message,args) => {
    let member = message.mentions.members.first();
    if(!member) {message.channel.send('hello');} else {
        message.channel.send(`Wassup ${member.user.tag}`)

    }
}

exports.help = {
    name: `hi`
}