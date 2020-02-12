const Discord = require('discord.js')
const client = new Discord.Client()
const db = require('quick.db')
const fs = require('fs');
const prefix = "#" // تقدر تغيره
	const blow = new Set()
	client.on('message', message => {
  var price = ''
  var rank = ''
  var sender = ''
             let fouroulou = new Discord.RichEmbed()
          .setColor("#36393e")
          .setAuthor(message.author.tag,message.author.avatarURL)
          .setDescription(`Our plans : 
                                       ** ProBot Great. **    
                                       ** Price:75k Probot **
                                       ** To Buy: \`#Great \` **

                                       ** ProBot Perfect. **     
                                       ** Price:50k Probot **
                                       ** To Buy:\`#Perfect\` **

                                       ** ProBot Exellent. **     
                                       ** Price:70k Probot **
                                       ** To Buy: \`#Exellent\` **

                                       ** ProBot Good. **        
                                       ** Price:90k Probot **
                                       ** To Buy: \`#Good\` **
                                      


        For more information go to <#428568185277775872>`)   
      .setTimestamp()
    let filter = m => m.author.id === message.author.id;
   if(message.content.startsWith("#buy")){
       let user = client.users.get("428568185277775872"); // ايديك
    let user1 = client.users.get("282859044593598464");
     //ههقهقهقه
    // جيبلي كود فيه تحقق yes or no

     if (blow.has(message.author.id)) {
     return message.reply("**لايمكنك اعادة الامر مجددا ان لم تنهي عملية الشراء لانهائها قم بكتابة cancel**").then(message => {
      message.delete(10000) 
     })
     }
     blow.add(message.author.id);
    setTimeout(() => {
        blow.delete(message.author.id);
    }, 60000);//وحلو مرا  كقو خلك كذا زيي بس ذا مرا ايز :]

     message.channel.sendEmbed(fouroulou).then(msg => {
      message.channel.awaitMessages(response => response.content === 'ProBot Great.' || 'ProBot Perfect.' || 'ProBot Exellent.' || 'ProBot Good.' && filter,{
        max: 1,
        time: 90000,
        errors: ['time']
      })
      .then(collected => {
        if(collected.first().content === '#Great') {
          rank = 'ProBot Great.'
          price = 75000
          	  let price2 = price - ( (price * 5) / 100 )

                    let mrx = new Discord.RichEmbed()
          .setColor("#36393e")
          .setAuthor(message.author.tag,message.author.avatarURL)
          .setDescription(`**If you want to buy rank :**
                 ** Please transfer the amount below :**
                 \`75k-probot\`
                ** To:<@428568185277775872>**
                 **Ex: #credit <@428568185277775872> 75000**
                  **To Exit Write Cancel**`)   
      .setTimestamp()
      
                    message.channel.sendEmbed(mrx).then(m => {
                  message.channel.awaitMessages(res => res.content.includes(message.author.username + ', has transferred \`$71250\` to ' + user) && res.author.id === user1.id, {
          max: 1, //**💰 | ${message.author.username}, has transferred \`$1\` to ${user}**
          time: 60000, 
          errors: ['time'], 
          
        }).then(collected => {
            message.reply('**Thanks for trusting us and wish you the best times :heart:**')
            message.member.addRole(message.guild.roles.find(c => c.name == 'ProBot Great.'));
			blow.delete(message.author.id);
            }).catch(() => {
                m.edit(`You took to long time please do the command \`#buy\` again`)
            })
            
            })
          message.delete();
        }
        if(collected.first().content === '#Perfect') {
          rank = 'ProBot Perfect.'
          price = 60000
           let mrx = new Discord.RichEmbed()
          .setColor("#36393e")
          .setAuthor(message.author.tag,message.author.avatarURL)
          .setDescription(`**If you want to buy rank :**
                 ** Please transfer the amount below :**
                 \`60k-probot\`
                ** To:<@428568185277775872>**
                 **Ex: #credit <@428568185277775872> 60000**
                  **To Exit Write Cancel**`)   
      .setTimestamp()
                    message.channel.sendEmbed(mrx).then(m => {
                  message.channel.awaitMessages(res => res.content.includes(message.author.username + ', has transferred \`$57000\` to ' + user) && res.author.id === user1.id, {
          max: 1, //**💰 | ${message.author.username}, has transferred \`$1\` to ${user}**
          time: 60000, 
          errors: ['time'], 
          
        }).then(collected => {
            message.reply('**Thanks for trusting us and wish you the best times :heart:**')
            message.member.addRole(message.guild.roles.find(c => c.name == 'ProBot Perfect.'));
			blow.delete(message.author.id);
            }).catch(() => {
                m.edit(`**You took to long time please do the command \`#buy\` again**`)
            })
            
            })
          collected.first().delete(); 
}
                if(collected.first().content === '#Exellent') {
          rank = 'ProBot Exellent.'
          price = 45000
          let mrx = new Discord.RichEmbed()
          .setColor("#36393e")
          .setAuthor(message.author.tag,message.author.avatarURL)
          .setDescription(`**If you want to buy rank :**
                 ** Please transfer the amount below :**
                 \`45k-probot\`
                ** To:<@428568185277775872>**
                 **Ex: #credit <@428568185277775872> 45000**
                  **To Exit Write Cancel**`)   
      .setTimestamp()
                message.channel.sendEmbed(mrx).then(m => {
                  message.channel.awaitMessages(res => res.content.includes(message.author.username + ', has transferred \`$42750\` to ' + user) && res.author.id === user1.id, {
          max: 1, //**💰 | ${message.author.username}, has transferred \`$1\` to ${user}**
          time: 60000, 
          errors: ['time'], 
          
        }).then(collected => {
            message.reply('**Thanks for trusting us and wish you the best times :heart:**')
            message.member.addRole(message.guild.roles.find(c => c.name == 'ProBot Exellent.'));
			blow.delete(message.author.id);
            }).catch(() => {
                m.edit(`You took to long time please do the command \`#buy\` again`)
            })
            
            })
          collected.first().delete(); 
}
                if(collected.first().content === '#Good') {
          rank = 'ProBot Good.'
          price = 30000
          let mrx = new Discord.RichEmbed()
          .setColor("#36393e")
          .setAuthor(message.author.tag,message.author.avatarURL)
          .setDescription(`**If you want to buy rank :**
                 ** Please transfer the amount below :**
                 \`30k-probot\`
                ** To:<@428568185277775872>**
                 **Ex: #credit <@428568185277775872> 30000**
                  **To Exit Write Cancel**`)   
      .setTimestamp()
                    message.channel.sendEmbed(mrx).then(m => {
                  message.channel.awaitMessages(res => res.content.includes(message.author.username + ', has transferred \`$28500\` to ' + user) && res.author.id === user1.id, {
          max: 1, //**💰 | ${message.author.username}, has transferred \`$1\` to ${user}**
          time: 60000, 
          errors: ['time'], 
          
        }).then(collected => {
            message.reply('**Thanks for trusting us and wish you the best times :heart:**')
            message.member.addRole(message.guild.roles.find(c => c.name == 'ProBot Good.'));
			blow.delete(message.author.id);
            }).catch(() => {
                m.edit(`You took to long time please do the command \`#buy\` again`)
            })
            
            })
          collected.first().delete(); 
}})
  

       })     
        
}});



client.on('message', msg => {
  let params = msg.content.slice(prefix.length).trim().split(/ +/g);

if(msg.author.bot) return
if(msg.content.toLowerCase().startsWith(prefix + 'setorder')) {
  if(!params[1]) return msg.channel.send(`منشن الروم او اكتب اسمه`)
  let channel = msg.mentions.channels.first() || msg.guild.channels.find(c => c.name.toLowerCase().startsWith(params[1].toLowerCase()));
  if(channel === undefined) return msg.channel.send(`**انا لم استطع العثور على هذا الروم ${params[1]}**`)
  db.set(`order.${msg.guild.id}.channel`, channel.id)
  msg.channel.send(`**تم اعداد روم الطلب ل روم ${channel}**`)
}
})

client.on('message', msg => {
  let params = msg.content.slice(prefix.length).trim().split(/ +/g);

if(msg.author.bot) return

if(msg.content.toLowerCase().startsWith(prefix + 'order')) {
  let args = params.slice(1).join(' ')
  let channelID = db.get(`order.${msg.guild.id}.channel`)
  if(channelID === null || channelID === undefined) return msg.channel.send(`قم بأعداد روم الطلب عن طريق الامر الآتي \n ${prefix}setOrder #channel`)
  let channel = msg.guild.channels.get(channelID)
  if(channel === undefined) return msg.channel.send(`قم بأعداد روم الطلب عن طريق الامر الآتي \n ${prefix}setOrder #channel`)
  if(!args) return msg.channel.send(`اكتب طلبك لو سمحت ^^`)
  let embed = new Discord.RichEmbed()
  .setTitle(`🔔New Order!!`)
  .setDescription(`\**▶sender** => <@${msg.author.id}> \n \n**🛒order =>** **\`${args}\`**`)
  .setFooter(`By Codes`)
  .setTimestamp(Date.now())
  channel.send(embed)
}
})



client.on("message", msg=>{
	let prefix = "#"
if(!msg.content.startsWith(`${prefix}tax`)) return;
let tax = msg.content.split(" ")[1]
let Price = msg.content.split(" ")[2];
if(!tax || !Price) return msg.reply(`\`${prefix}tax 15% 100000\``).then(z=>z.delete(3000));
tax = tax.replace(/%/g,"");
let resulting = Math.floor(Price-(Price*(tax/100)));
if(!resulting || resulting < 0 ||  isNaN(resulting)) return msg.reply(`\`${prefix}tax 15% 100000\``).then(z=>z.delete(3000));
msg.reply(`resulting is ${resulting}$`)
})




client.on("message", message => {
	var prefix = "#";
 if (message.content === "#help") {
  const embed = new Discord.RichEmbed()  
      .setColor("#8325c0") 
      .setDescription(`
	  
	       Help Commands: 
			 
**${prefix}buy ⥨ To Buy Role **
**${prefix}order ⥨ To Send Order **	 
**${prefix}tax ⥨ To Calculate The Tax**
**${prefix}sug	 ⥨ To Send Suggestion**
**${prefix}report ⥨ Report Someone**

`)
   message.channel.sendEmbed(embed)
    
   }
   }); 

client.on('ready', () => {
  console.log(`Logged in as ${client.user.tag}!`);
 client.user.setGame("#help | Tomato Shop", "https://www.twitch.tv/Alpha");
});




const developers = ["428568185277775872","id"]
client.on('message', message => {
    var argresult = message.content.split(` `).slice(1).join(' ');
      if (!developers.includes(message.author.id)) return;
      
  if (message.content.startsWith(prefix + 'setg')) {
    client.user.setGame(argresult);
      message.channel.send(`**✅   ${argresult}**`)
  } else 
     if (message.content === (prefix + "leave")) {
    message.guild.leave();        
  } else  
  if (message.content.startsWith(prefix + 'setw')) {
  client.user.setActivity(argresult, {type:'WATCHING'});
      message.channel.send(`**✅   ${argresult}**`)
  } else 
  if (message.content.startsWith(prefix + 'setl')) {
  client.user.setActivity(argresult , {type:'LISTENING'});
      message.channel.send(`**✅   ${argresult}**`)
  } else 
  if (message.content.startsWith(prefix + 'sets')) {
    client.user.setGame(argresult, "https://www.twitch.tv/dream");
      message.channel.send(`**✅**`)
  }
  if (message.content.startsWith(prefix + 'setname')) {
  client.user.setUsername(argresult).then
      message.channel.send(`Changing The Name To ..**${argresult}** `)
} else
if (message.content.startsWith(prefix + 'setava')) {
  client.user.setAvatar(argresult);
    message.channel.send(`Changing The Avatar To :**${argresult}** `);
}
});











 
 
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



















client.on('message', message => {
 if(message.content.startsWith("cancel")){
 if(blow.has(message.author.id)) {
   blow.delete(message.author.id)
   message.channel.send('**Buying Has Been Cancled**')
 }}});


client.login(process.env.TOKEN)

