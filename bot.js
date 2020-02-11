const Discord = require('discord.js')
const client = new Discord.Client()
const prefix = "$" // تقدر تغيره
	const blow = new Set()
	client.on('message', message => {

        const sug = JSON.parse(fs.readFileSync('./sug.json' , 'utf8'));
 
        client.on('message', message => {
                   if (!message.channel.guild) return;
         
            let room = message.content.split(" ").slice(1);
            let findroom = message.guild.channels.find('name', `${room}`)
            if(message.content.startsWith(prefix + "setSug")) {
                if(!message.channel.guild) return message.reply('**This Command Only For Servers**');
                if(!message.member.hasPermission('MANAGE_GUILD')) return message.channel.send('**Sorry But You Dont Have Permission** `MANAGE_GUILD`' );
        if(!room) return message.channel.send('Please Type The Channel Name')
        if(!findroom) return message.channel.send('Cant Find This Channel')
        let embed = new Discord.RichEmbed()
        .setTitle('**Done The Suggest Code Has Been Setup**')
        .addField('Channel:', `${room}`)
        .addField('Requested By:', `${message.author}`)
        .setThumbnail(message.author.avatarURL)
        .setFooter(`${client.user.username}`)
        message.channel.sendEmbed(embed)
        sug[message.guild.id] = {
        channel: room,
        }
        fs.writeFile("./sug.json", JSON.stringify(sug), (err) => {
        if (err) console.error(err)
        })
           client.on('message', message => {
         
         
            if(message.content.startsWith(`${prefix}suggest`)) {
              if(!message.channel.guild) return message.reply('**This Command Only For Servers**');
              let suggest = message.content.split(" ").slice(1);
              if(!suggest) return message.reply(`**Please Type The Suggest**`)
            let findchannel = (message.guild.channels.find('name', `${sug[message.guild.id].channel}`))
            if(!findchannel) return message.channel.send(`Error 404: The Suggest Channel Cant Find Or Not Set To Set The Suggest Channel Type: ${prefix}setSug`)
            message.channel.send(`Done Your Suggest Will Be Seen By The Staffs`)
            let sugembed = new Discord.RichEmbed()
            .setTitle('New Suggest !')
            .addField('Suggest By:', `${message.author}`)
            .addField('Suggest:', `${suggest}`)
            .setFooter(client.user.username)
            findchannel.sendEmbed(sugembed)
                .then(function (message) {
                  message.react('✅')
                  message.react('❌')
                })
                .catch(err => {
                    message.reply(`Error 404: The Suggest Channel Cant Find Or Not Set To Set The Suggest Channel Type: ${prefix}setSug`)
                    console.error(err);
                });
                }
              })
            }})

            const reportjson = JSON.parse(fs.readFileSync('./report.json' , 'utf8'));
 
client.on('message', message => {
           if (!message.channel.guild) return;
 
    let room = message.content.split(" ").slice(1);
    let findroom = message.guild.channels.find('name', `${room}`)
    if(message.content.startsWith(prefix + "setReport")) {
        if(!message.channel.guild) return message.reply('**This Command Only For Servers**');
        if(!message.member.hasPermission('MANAGE_GUILD')) return message.channel.send('**Sorry But You Dont Have Permission** `MANAGE_GUILD`' );
if(!room) return message.channel.send('Please Type The Channel Name')
if(!findroom) return message.channel.send('Cant Find This Channel')
let embed = new Discord.RichEmbed()
.setTitle('**Done The report Code Has Been Setup**')
.addField('Channel:', `${room}`)
.addField('Requested By:', `${message.author}`)
.setThumbnail(message.author.avatarURL)
.setFooter(`${client.user.username}`)
message.channel.sendEmbed(embed)
reportjson[message.guild.id] = {
channel: room,
}
fs.writeFile("./report.json", JSON.stringify(reportjson), (err) => {
if (err) console.error(err)
})
client.on('message', message => {
 
    if(message.content.startsWith(`${prefix}report`)) {
        let  user  =  message.mentions.users.first();
      if(!message.channel.guild) return message.reply('**This Command Only For Servers**');
    let reason = message.content.split(" ").slice(2).join(" ");
      if(!user)  return  message.channel.send("**You didn\'t mention the user to report**")
      if(!reason) return message.reply(`**Please provide a reason**`)
    let findchannel = (message.guild.channels.find('name', `${reportjson[message.guild.id].channel}`))
    if(!findchannel) return message.reply(`Error 404: The report Channel Cant Find Or Not Set To Set The report Channel Type: ${prefix}setReport`)
    message.channel.send(`Done Thank You For Your Report Will Be Seen By The Staffs`)
    let sugembed = new Discord.RichEmbed()
    .setTitle('New Report !')
    .addField('Report By:', `${message.author}`)
    .addField('Reported User:', `${user}`)
    .addField('Report Reason:', `${reason}`)
    .setFooter(client.user.username)
    findchannel.sendEmbed(sugembed)
        .then(function (message) {
          message.react('✅')
          message.react('❌')
        })
        .catch(err => {
            message.reply(`Error 404: The report Channel Cant Find Or Not Set To Set The report Channel Type: ${prefix}setReport`)
            console.error(err);
        });
        }
      }
)}
})