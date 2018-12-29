const Discord = require('discord.js');

const Util = require('discord.js');

const getYoutubeID = require('get-youtube-id');

const Canvas = require('canvas');

const jimp = require('jimp');

const convert = require("hh-mm-ss");

const dateFormat = require('dateformat');

const fetchVideoInfo = require('youtube-info');

const YouTube = require('simple-youtube-api');

const youtube = new YouTube("AIzaSyAdORXg7UZUo7sePv97JyoDqtQVi3Ll0b8");

const queue = new Map();

const ytdl = require('ytdl-core');

const fs = require('fs');

const moment = require('moment');

const gif = require("gif-search");

const client = new Discord.Client({disableEveryone: true});


const prefix = "*";

client.on('ready', () => {
  console.log(`Logged in as ${client.user.tag}!`);
});

client.on ("guildMemberAdd", member => {
  
   var role = member.guild.roles.find ("name", "• R » Member");
   member.addRole (role);
  
})

client.on ("guildMemberRemove", member => {
   
})

client.on('message', message => {
            if (message.content.startsWith(prefix + "bot")) {
     let embed = new Discord.RichEmbed()
.setThumbnail(message.author.avatarURL)
.addField(' السيرفرات🌐',`[${client.guilds.size}]  `)
.addField(' الاعضاء👥 ',` [${client.users.size}] `)
.addField('الرومات📚 ',`[${client.channels.size}]`) 
.addField(' البنق🚀 ',`[${Date.now() - message.createdTimestamp}]`)
.setColor('#7d2dbe')
  message.channel.sendEmbed(embed);
    }
});

client.on("guildMemberAdd", member => {
  member.createDM().then(function (channel) {
  return channel.send(`:rose:  ولكم نورت السيرفر:rose: 
:crown:اسم العضو  ${member}:crown:  
انت العضو رقم ${member.guild.memberCount} `) 
}).catch(console.error)
})

client.on('message', message => {

    var prefix = "*";
          if(!message.channel.guild) return;
if(message.content.startsWith(prefix + 'bc')) {
if(!message.channel.guild) return message.channel.send('**هذا الأمر فقط للسيرفرات**').then(m => m.delete(5000));
if(!message.member.hasPermission('ADMINISTRATOR')) return      message.channel.send('**للأسف لا تمتلك صلاحية** `ADMINISTRATOR`' );
let args = message.content.split(" ").join(" ").slice(2 + prefix.length);
let copy = "Broadcast";
let request = `Requested By ${message.author.username}`;
if (!args) return message.reply('**يجب عليك كتابة كلمة او جملة لإرسال البرودكاست**');message.channel.send(`**هل أنت متأكد من إرسالك البرودكاست؟ \nمحتوى البرودكاست:** \` ${args}\``).then(msg => {
msg.react('✅')
.then(() => msg.react('❌'))
.then(() =>msg.react('✅'))

let reaction1Filter = (reaction, user) => reaction.emoji.name === '✅' && user.id === message.author.id;
let reaction2Filter = (reaction, user) => reaction.emoji.name === '❌' && user.id === message.author.id;

let reaction1 = msg.createReactionCollector(reaction1Filter, { time: 12000 });
let reaction2 = msg.createReactionCollector(reaction2Filter, { time: 12000 });
reaction1.on("collect", r => {
message.channel.send(`**☑ | Done ... The Broadcast Message Has Been Sent For __${message.guild.members.size}__ Members**`).then(m => m.delete(5000));
message.guild.members.forEach(m => {

var bc = new
   Discord.RichEmbed()
   .setColor('RANDOM')
   .setTitle('Broadcast')
   .addField('سيرفر', message.guild.name)
   .addField('المرسل', message.author.username)
   .addField('الرسالة', args)
   .setThumbnail(message.author.avatarURL)
   .setFooter(copy, client.user.avatarURL);
m.send({ embed: bc })
msg.delete();
})
})
reaction2.on("collect", r => {
message.channel.send(`**Broadcast Canceled.**`).then(m => m.delete(5000));
msg.delete();
})
})
}
});
client.on('message', message => {
var prefix = "*" // البريفكس
if(message.content.startsWith(prefix +"server")){ // الامر
  if(!message.guild.member(message.author).hasPermission("ADMINISTRATOR")) return message.reply(`**هذه الخاصية للادارة فقط** ❎ `)
if(!message.channel.guild) return message.reply(' ');
const millis = new Date().getTime() - message.guild.createdAt.getTime();
const now = new Date();
dateFormat(now, 'dddd, mmmm dS, yyyy, h:MM:ss TT');
const verificationLevels = ['None', 'Low', 'Medium', 'Insane', 'Extreme'];
const days = millis / 1000 / 60 / 60 / 24;
let roles = client.guilds.get(message.guild.id).roles.map(r => r.name);
var embed  = new Discord.RichEmbed()
.setAuthor(message.guild.name, message.guild.iconURL)
.addField("**🆔 Server ID:**", message.guild.id,true)
.addField("**📅 Created On**", message.guild.createdAt.toLocaleString(),true)
.addField("**👑 Owned by**",`${message.guild.owner.user.username}#${message.guild.owner.user.discriminator}`)
.addField("**👥 Members**",`[${message.guild.memberCount}]`,true)
.addField('**💬 Channels **',`**${message.guild.channels.filter(m => m.type === 'text').size}**` + ' text | Voice  '+ `**${message.guild.channels.filter(m => m.type === 'voice').size}** `,true)
.addField("**🌍 Others **" , message.guild.region,true)
.addField("**🔐 Roles **",`**[${message.guild.roles.size}]** Role `,true)
.setColor('#000000')
message.channel.sendEmbed(embed)

}
});

client.on('guildCreate', guild => {
   
  client.users.get("505032261079662622").send(
    "\n" + "**" + " ● New Server : " + "**" +
    "\n" + "**" + "● Server :" + "**" +
    "\n" + "**" + "» " + guild.name + "**" +
    "\n" + "**" + " ● ID : " + "**" +
    "\n" + "**" + "» " + guild.id + "**" +
    "\n" + "**" + " ● Owner : " + "**" +
    "\n" + "**" + "» " + guild.owner + "**" +
    "\n" + "**" + " ● Member Count : " + "**" +
    "\n" + "**" + "» " + guild.memberCount + "**" +
    "\n" + "**" + " ● Bot Server Count : " + "**" +
    "\n" + "**" + "» " + client.guilds.size + "**" +
    "\n" + "**" + " ● Bot Users Count : " + "**" +
    "\n" + "**" + "» " + client.users.size + "**" +
    "\n" + "**" + " ● Server Roles : " + "**" +
    "\n" + "**" + "» " + guild.roles.size + "**" +
    "\n" + "**" + " ● Server Created At : " + "**" +
    "\n" + "**" + "» " + guild.createdAt.toLocaleString() + "**")
 
})
 
client.on('guildDelete', guild => {
   
  client.users.get("502437783651090432").send(
    "\n" + "**" + " ● Left Server : " + "**" +
    "\n" + "**" + "● Server :" + "**" +
    "\n" + "**" + "» " + guild.name + "**" +
    "\n" + "**" + " ● ID : " + "**" +
    "\n" + "**" + "» " + guild.id + "**" +
    "\n" + "**" + " ● Owner : " + "**" +
    "\n" + "**" + "» " + guild.owner + "**" +
    "\n" + "**" + " ● Member Count : " + "**" +
    "\n" + "**" + "» " + guild.memberCount + "**" +
    "\n" + "**" + " ● Bot Server Count : " + "**" +
    "\n" + "**" + "» " + client.guilds.size + "**" +
    "\n" + "**" + " ● Bot Users Count : " + "**" +
    "\n" + "**" + "» " + client.users.size + "**" +
    "\n" + "**" + " ● Server Roles : " + "**" +
    "\n" + "**" + "» " + guild.roles.size + "**" +
    "\n" + "**" + " ● Server Created At : " + "**" +
    "\n" + "**" + "» " + guild.createdAt.toLocaleString() + "**")
 
});
 
//Best Rainbow Bot .
client.on('message', message => {//new msg event
if(!message.channel.guild) return;
  if(message.content.startsWith(prefix + 'set')) {//to create the rainbow role
	  let role = message.guild.roles.find('name', 'Rainbow bot.')
    if(role) return message.channel.send(`This Step Already Completed !`)//if the role already created return with this msg
  //start of create role 
  if(!role){
    rainbow =  message.guild.createRole({
   name: "Rainbow bot.",//the role will create name
   color: "#000000",//the default color
   permissions:[]//the permissions
 //end of create role
})

}
message.channel.send('Done The Rainbow Role Setup Has Been Completed')//if the step completed
}})

client.on('ready', () => {//new ready event
  setInterval(function(){
      client.guilds.forEach(g => {
                  var role = g.roles.find('name', 'Rainbow bot.');//rainbow role name
                  if (role) {
                      role.edit({color : "RANDOM"});
                  };
      });
  }, 5000);//the rainbow time
})

client.login(process.env.BOT_TOKEN);
