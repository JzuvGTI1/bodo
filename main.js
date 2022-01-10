const Discord = require("discord.js");
require('discord-reply');
const {
    Client,
    Intents
} = require('discord.js');
const client = new Client({
    intents: [Intents.FLAGS.GUILDS, Intents.FLAGS.GUILD_MESSAGES]
});
const snipes = new Discord.Collection();
const snipes2 = new Discord.Collection();
const moment = require('moment') //npm i moment
const request = require('request');
const querystring = require('querystring');
const fs = require("fs");
const limitation = new Set(); //minutely gems
const limitation2 = new Set(); //csnl
const limitation3 = new Set(); //qq
const limitation5 = new Set(); //csnb
const limitation6 = new Set(); //hourlygems
const limitation7 = new Set(); //qqb
const limitation8 = new Set(); //farm
const limitation9 = new Set(); //farm
const limitation10 = new Set();
const limitation11 = new Set(); //begging
const limitation12 = new Set(); //rich
const limitation13 = new Set(); //rich
const fetch = require('node-fetch-npm')
const config = require("./harga.json");

var word = [
    "vladimir putin",
    "Dwayne Johnson",
    "Cristiano Ronaldo",
    "John F. Kennedy",
    "Selena Gomez",
    "Muhammad Ali",
    "Leonardo DiCaprio",
    "Mia Khalifa",
    "Michael Jordan",
    "orphanage manager",
    "Billie Eilish",
    "Justin Bieber",
    "Joseph Stalin",
    "Adolf hitler",
    "Steve Jobs",
    "Stephen Hawking",
    "Lance Armstrong",
    "Donald Trump",
    "Elvis Presley",
    "David Beckham",
    "Audrey Hepburn",
    "Rihanna",
    "Steven Spielberg",
    "Johnny Depp",
    "Keanu Reeves",
    "Robert Downey Jr.",
    "Drake"
];
var words = word[Math.floor(Math.random() * word.length)];
const {
    exec
} = require("child_process");
const {
    MessageEmbed
} = require("discord.js");

//capcha
function capcha() {
    return Math.floor(Math.random() * 99999 + 0);
}

//QQ and CSN Function
function randomint() {
    return Math.floor(Math.random() * 36 + 0);
}

function tokendrop() {
    return Math.floor(Math.random() * 1000 + 0);
}
//BJ Function
function randomint2() {
    return Math.floor(Math.random() * 21 + 0);
}

function randomgems() {
    return Math.floor(Math.random() * 300 + 0);
}

function beggems() {
    return Math.floor(Math.random() * 7000 + 0);
}

//QQ Function
function qq(x) {
    if (x > 0) {
        return x % 10;
    }
}

var updaterich = false;

//beg function
function beg() {
    return Math.floor(Math.random() * 21 + 0);
}

function bj() {
    return Math.floor(Math.random() * 21 + 0);
}

function rob() {
    return Math.floor(Math.random() * 21 + 0);
}

function randomNum(min, max) {
    min = Math.ceil(min);
    max = Math.floor(max);
    return Math.flofor(Math.random() * (max - min + 1)) + min;
}

client.on("ready", () => {
    console.log(`${client.user.tag} now online!`);
    client.user.setActivity('Hi, my prefix is.help')
});

client.on('messageUpdate', (oldMessage, newMessage) => {
    if (newMessage.author.bot) return;
    try {
        console.log("edited")
        let channelxd = `./channels/` + newMessage.channel.id + ".json";
        let channelxd2 = require(channelxd);
        channelxd2.author = `${newMessage.author.tag}`;
        channelxd2.oldMessage = `${oldMessage.content}`;
        channelxd2.newMessage = `${newMessage.content}\n**<t:${Date.now()/1000 | 0}:R>**`;

        fs.writeFile(channelxd, JSON.stringify(channelxd2), function writeJSON(err) {})
    } catch (err) {
        console.log("This is happen cuz message deleted when database creaed");
    }
})

client.on('guildCreate', guild => {
    const channels = guild.channels.cache.find(channel => channel.type === 'text' && channel.permissionsFor(guild.me).has('SEND_MESSAGES'))
    const channels2 = guild.channels.cache.filter(channel => channel.type == "text");
    const embed = new Discord.MessageEmbed()
        .setTitle(`Bot Rules.`)
        .setDescription(`
well these are lists of rules, if you can't follow the rules you can just remove the bot simple as that.

1. **There is no tolerance for 3rd party client users or something like that, if they are caught they will be blacklisted from the bot forever**.

2. **Servers that have the potential to harm bots will be removed by Bot Administrators such as (developing hacks servers, Auto Farming servers, and servers that have ties to raids)**
`)
        .setColor("#0000FF")
    channels.send(embed).catch(err => console.log(err))
})

client.on("messageDelete", message => {
    if (message.author.bot) return;

    snipes.set(message.channel.id, message)
});

//
client.on("message", async message => {
    console.log(message.content)
    const data = `{"user":"${message.author.id}", "money":50000, "afk":0, "afkmessage":"", "pickaxe":0, "diamondlock":0, "worldlock": 0, "playid":0, "ances":0, "ban":0, "banreason":"", "deposit":0, "farmuser":0, "farmable":0, "capcha":0, "code":0, "wrong":0, "richbadge":0, "claimedrichbadge":0, "createdaccount":"<t:${Date.now()/1000 | 0}:F>", "roleid":0, "afkguildid":0, "afkdate":"", "afknow":0}`;
    const data2 = data;
    const channel = `{"channelname":"${message.channel.id}", "channelgems":0, "oldMessage":"null", "newMessage":"null", "author":"null"}`;
    const channel2 = channel;
    if (message.channel.type === "dm") {
        return;
    }
    if (message.author.bot) return;
    if (message.author.id == "822068130989342731") return;
    if (message.content == "<@!822068130989342731>") {
        return message.channel.send(`Hi, ${message.author.username} My prefix is \`.help\``);
    }
    if (message.content == "<@822068130989342731>") {
        return message.channel.send(`Hi, ${message.author.username} My prefix is \`.help\``);
    }

    function getUserFromMention(mention) {
        if (!mention) return;

        if (mention.startsWith('<@') && mention.endsWith('>')) {
            mention = mention.slice(2, -1);

            if (mention.startsWith('!')) {
                mention = mention.slice(1);
            }

            return client.users.cache.get(mention);
        }
    }
    //auto create account
    try {
        if (!fs.existsSync("./newusers/" + message.author.id + ".json")) {
            try {
                fs.writeFile(
                    "./newusers/" + message.author.id + ".json",
                    data2,
                    function(err) {}
                );
                console.log(`Auto create account: (${message.author.tag})`);
            } catch (err) {
                console.log(err);
            }
        }
        let user = "./newusers/" + message.author.id + ".json";
        let user2 = require(user);
        if (
            !fs.existsSync(
                "./newusers/" + message.author.id + ".json" && user2.afk == 1 && message.guild.id == user2.afkguildid
            )
        ) {
            if (user2.afk == 1) {
                console.log(Date.now())
                console.log(user2.afknow2)
            }
            if (user2.afk == 1 && message.guild.id == user2.afkguildid && Date.now() > user2.afknow2) {
                user2.afk = 0;
                user2.afkguildid = 0;
                fs.writeFile(user, JSON.stringify(user2), function writeJSON(err) {
                    if (err) console.log(err); //
                    else {
                        message.member.setNickname(`${message.author.username}`).catch(err)
                        return message.channel.send(
                            `Welcome back, **${message.author.username}** i removed your afk status (**${user2.afkdate}**)`
                        );
                    }
                });
            }
        }
    } catch (err) {

    }
    // auto create channel
    try {
        if (!fs.existsSync("./channels/" + message.channel.id + ".json")) {
            try {
                fs.writeFile(
                    "./channels/" + message.channel.id + ".json",
                    channel2,
                    function(err) {}
                );
                console.log(`Auto create channel: (${message.channel.id})`);
            } catch (err) {
                console.log(err);
            }
        }

    } catch (err) {}
    try {
        let user = "./newusers/" + message.author.id + ".json";
        let user2 = require(user);
        if (user2.money > 2000000 && user2.richbadge == 0 && user2.claimedrichbadge == 0) {
            user2.richbadge = 1;
            user2.claimedrichbadge = 1;
            fs.writeFile(user, JSON.stringify(user2), function writeJSON(err) {
                if (err) {
                    return console.log(err)
                } else {
                    return message.reply(`Congratulations ${message.author.username}, your money is now more than 💵 ${parseInt(2000000).toLocaleString()} as a tribute you get a **Rich Badge**.`);
                }
            })
        }
    } catch (err) {}

    let mention = message.mentions.users.first();
    if (mention) {
        try {
            let user = "./newusers/" + mention.id + ".json";
            let user2 = require(user);
            if (user2.afk == 1 && message.guild.id == user2.afkguildid) {
                message.channel.send(`**${mention.username}** is **AFK** **${user2.afkdate}**\nMessage: ${user2.afkmessage}`);
            }
        } catch (err) {}
    }

    let prefix = ".";
    if (!message.content.startsWith(prefix)) return;

    if (message.author.bot) return;
    const args = message.content
        .slice(prefix.length)
        .trim()
        .split(/ +/g);
    const command = args.shift().toLowerCase();
    if (command.includes(".")) {
        return
    }



    //execute command & args function
    if (command == "help") {
        const embed = new Discord.MessageEmbed()
            .setTitle("Command List")
            .setDescription(
                `
💰 **Economy [8]** 
\`bal\`, \`shop\`,\`pay\`,\`minutelygems\`,\`hourlygems\`,\`deposit\`,\`withdraw\`,\`gems\`,\`buy\`

🎲 **Gambling [6]**
\`qq\`, \`gamble\`, \`bj\`, \`qq max\`, \`bj max\`, \`gamble max\`

🧑‍🌾 **Farming [4]**
\`farm\`, \`buy farmable\`, \`buy pickaxe\`, \`buy ances\`, \`buy farmable\`

🔥 **FUN [14]**
\`snipe\`, \`beg\`, \`afk\`, \`rich\`, \`updaterich\`, \`time\`, \`avatar\` \`urban\` \`github\`, \`ssweb\`, \`avatar\` 

🚀**Growtopia commands**
\`gtonline\`, \`gtworld\` \`gtwotd\` \`\` 

🛡️**Samp Command**
\`samp\`

⭐ **Others [3]**
\`invite\`, \`Credit\`, \`changelogs\`, \`rules\`

🥷 **Support Bot**
**http://bit.ly/guckproject**

**Watching ${client.guilds.cache.size} Servers**
`)
            .setColor("#0000FF")
            .setFooter(`Requested by ${message.author.tag}`, message.author.displayAvatarURL({
                dynamic: true
            }))
            .setTimestamp();
        message.channel.send(embed);
    } else if (command == "gems" || command == "info" || command == "information" || command == "inventory" || command == "bal") {
        try {
            const mention = getUserFromMention(args[0]);
            console.log(args[0])
            if (!fs.existsSync("./newusers/" + message.author.id + ".json")) {
                return message.channel.send(
                    `Failure on database found, please chat firstly before run command (auto create account doesn't read your action).`
                );
            } else {
                try {
                    let user = `./newusers/` + mention + ".json";
                    let user2 = require(user);
                    if (user2.roleid == 1000) {
                        const embeds = new Discord.MessageEmbed()
                            .setTitle(`${mention.tag}'s information`)
                            .setDescription(`\n**Badge:**\n**⚡ Bot Staff Badge**\n**🛠️ Bot Bug Hunter**\n**Rich Badge 🎖️**\n\n⏲️ **Created database** ${user2.createdaccount}\n💵 **Wallet** ${user2.money.toLocaleString()}$\n⛏️ **PickAxe** ${user2.pickaxe}\n💫 **Ances** ${user2.ances}\n💰 **Bank (deposited gems)** ${user2.deposit.toLocaleString()}$\n🌱 **Farmable** ${user2.farmable}`)
                            .setColor("#0000FF")
                            .setFooter(`💰 Requested by ${message.author.tag}`,
                                message.author.displayAvatarURL({
                                    dynamic: true
                                })
                            )
                            .setTimestamp();
                        return message.channel.send(embeds);
                    } else if (user2.roleid == 1) {
                        const embeds = new Discord.MessageEmbed()
                            .setTitle(`${mention.tag}'s information`)
                            .setDescription(`\n**Badge:**\n**🛠️ Bot Bug Hunter**\n**Rich Badge 🎖️**\n\n⏲️ **Created database** ${user2.createdaccount}\n💵 **Wallet** ${user2.money.toLocaleString()}$\n⛏️ **PickAxe** ${user2.pickaxe}\n💫 **Ances** ${user2.ances}\n💰 **Bank (deposited gems)** ${user2.deposit.toLocaleString()}$\n🌱 **Farmable** ${user2.farmable}`)
                            .setColor("#0000FF")
                            .setFooter(
                                `💰 Requested by ${message.author.tag}`,
                                message.author.displayAvatarURL({
                                    dynamic: true
                                })
                            )
                            .setTimestamp();
                        return message.channel.send(embeds);
                    } else if (user2.richbadge == 1 && user2.claimedrichbadge == 1) {
                        const embed = new Discord.MessageEmbed()
                            .setTitle(`${mention.tag}'s information`)
                            .setDescription(`\n**Badge:**\n**Rich Badge 🎖️**\n\n⏲️ **Created database** ${user2.createdaccount}\n💵 **Wallet** ${user2.money.toLocaleString()}$\n⛏️ **PickAxe** ${user2.pickaxe}\n💫 **Ances** ${user2.ances}\n💰 **Bank (deposited gems)** ${user2.deposit.toLocaleString()}$\n🌱 **Farmable** ${user2.farmable}`)
                            .setColor("#0000FF")
                            .setFooter(
                                `💰 Requested by ${message.author.tag}`,
                                message.author.displayAvatarURL({
                                    dynamic: true
                                })
                            )
                            .setTimestamp();
                        return message.channel.send(embed);
                    } else {
                        const embed2 = new Discord.MessageEmbed()
                            .setTitle(`${mention.tag}'s information`)
                            .setDescription(`**Badge:**\n\n**Created database** ${user2.createdaccount}\n💵 **Wallet** ${user2.money.toLocaleString()}$\n⛏️ **PickAxe** ${user2.pickaxe}\n💫 **Ances** ${user2.ances}\n💰 **Bank (deposited gems)** ${user2.deposit.toLocaleString()}$\n🌱 **Farmable** ${user2.farmable}`)
                            .setColor("#0000FF")
                            .setFooter(
                                `💰 Requested by ${message.author.tag}`,
                                message.author.displayAvatarURL({
                                    dynamic: true
                                })
                            )
                            .setTimestamp();
                        return message.channel.send(embed2);
                    }
                } catch (err) {
                    let usermain = `./newusers/` + message.author.id + ".json";
                    let usermain2 = require(usermain);
                    if (usermain2.roleid == 1000) {
                        const embeds = new Discord.MessageEmbed()
                            .setTitle(`${message.author.tag}'s information`)
                            .setDescription(`\n**Badge:**\n**⚡ Bot Staff Badge**\n**🛠️ Bot Bug Hunter**\n**Rich Badge 🎖️**\n\n⏲️ **Created database** ${usermain2.createdaccount}\n💵 **Wallet** ${usermain2.money.toLocaleString()}$\n⛏️ **PickAxe** ${usermain2.pickaxe}\n💫 **Ances** ${usermain2.ances}\n💰 **Bank (deposited gems)** ${usermain2.deposit.toLocaleString()}$\n🌱 **Farmable** ${usermain2.farmable}`)
                            .setColor("#0000FF")
                            .setFooter(
                                `💰 Requested by ${message.author.tag}`,
                                message.author.displayAvatarURL({
                                    dynamic: true
                                })
                            )
                            .setTimestamp();
                        return message.channel.send(embeds);
                    }
                    if (usermain2.roleid == 1) {
                        const embeds = new Discord.MessageEmbed()
                            .setTitle(`${message.author.tag}'s information`)
                            .setDescription(`\n**Badge:**\n**🛠️ Bot Bug Hunter**\n**Rich Badge 🎖️**\n\n⏲️ **Created database** ${usermain2.createdaccount}\n💵 **Wallet** ${usermain2.money.toLocaleString()}$\n⛏️ **PickAxe** ${usermain2.pickaxe}\n💫 **Ances** ${usermain2.ances}\n💰 **Bank (deposited gems)** ${usermain2.deposit.toLocaleString()}$\n🌱 **Farmable** ${usermain2.farmable}`)
                            .setColor("#0000FF")
                            .setFooter(
                                `💰 Requested by ${message.author.tag}`,
                                message.author.displayAvatarURL({
                                    dynamic: true
                                })
                            )
                    }
                    if (usermain2.richbadge == 1 && usermain2.claimedrichbadge == 1) {
                        const embed = new Discord.MessageEmbed()
                            .setTitle(`${message.author.tag}'s information`)
                            .setDescription(`\n**Badge:**\n**Rich Badge 🎖️**\n\n⏲️ **Created database** ${usermain2.createdaccount}\n💵 **Wallet** ${usermain2.money.toLocaleString()}$\n⛏️ **PickAxe** ${usermain2.pickaxe}\n💫 **Ances** ${usermain2.ances}\n💰 **Bank (deposited gems)** ${usermain2.deposit.toLocaleString()}$\n🌱 **Farmable** ${usermain2.farmable}`)
                            .setColor("#0000FF")
                            .setFooter(
                                `💰 Requested by ${message.author.tag}`,
                                message.author.displayAvatarURL({
                                    dynamic: true
                                })
                            )
                            .setTimestamp();
                        return message.channel.send(embed);
                    } else {
                        const embed4 = new Discord.MessageEmbed()
                            .setTitle(`${message.author.tag}'s Information`)
                            .setDescription(`\n⏲️**Badge:**\n\n **Created database** ${usermain2.createdaccount}\n💵 **Wallet** ${usermain2.money.toLocaleString()}$\n⛏️ **PickAxe** ${usermain2.pickaxe}\n💫 **Ances** ${usermain2.ances}\n💰 **Bank (deposited gems)** ${usermain2.deposit.toLocaleString()}$\n🌱 **Farmable** ${usermain2.farmable}`)
                            .setColor("#0000FF")
                            .setFooter(
                                `💰 Requested by ${message.author.tag}`,
                                message.author.displayAvatarURL({
                                    dynamic: true
                                })
                            )
                            .setTimestamp();
                        return message.channel.send(embed4);
                    }
                }
            }
        } catch (err) {
            console.log(err);
            return message.channel.send(
                `Failure on database found, please chat firstly before run command (auto create account doesn't read your action).`
            );
        }
    } else if (command == "minutelygems") {
        try {
            if (limitation.has(message.author.id)) {
                message
                    .reply(
                        "are you overjoyed or too poor? wait 1 minute to claim next minutel ygems."
                    )
                    .then(msg => {
                        msg.delete({
                            timeout: 5000
                        });
                    })
                    .catch(console.error);
            } else {
                if (!fs.existsSync("./newusers/" + message.author.id + ".json")) {
                    return message.channel.send(
                        `Ketik command apa pun untuk register ke bot.`
                    );
                } else {
                    let user = `./newusers/` + message.author.id + ".json";
                    let user2 = require(user);
                    if (user2.ban == 1) {
                        return message.channel.send(
                            "akun mu telah di banned dari bot dengan alasan: , " +
                            user2.banreason +
                            "Silahkan Contact JzuvGTI#7245, jika kamu tidak merasa bersalah!"
                        );
                    }
                    user2.money = parseInt(user2.money) + 2000;
                    fs.writeFile(user, JSON.stringify(user2), function writeJSON(err) {
                        if (err) {
                            return message.channel.send("Seperti nya error di database bot");
                        } else {
                            message.channel.send(
                                `you received **__2000$__**, now you've **__${user2.money.toLocaleString()}__**$!`
                            );
                        }
                    });
                }
                limitation.add(message.author.id);
                setTimeout(() => {
                    limitation.delete(message.author.id);
                }, 30000);
            }
        } catch (err) {
            return message.channel.send(
                `Failure on database found, please chat firstly before run command (auto create account doesn't read your action).`
            );
        }
    } else if (command == "hourlygems") {
        try {
            if (limitation6.has(message.author.id)) {
                message
                    .reply("Wait **__1 hour__** before collect **__hourly gems__**.")
                    .then(msg => {
                        msg.delete({
                            timeout: 5000
                        });
                    });
            } else {
                if (!fs.existsSync("./newusers/" + message.author.id + ".json")) {
                    return message.channel.send(
                        `Failure on database found, please chat firstly before run command (auto create account doesn't read your action).`
                    );
                } else {
                    let user = `./newusers/` + message.author.id + ".json";
                    let user2 = require(user);
                    if (user2.ban == 1) {
                        return message.channel.send(
                            "Your account has been blacklisted with reason, " +
                            user2.banreason +
                            " Silahkan Contact JzuvGTI#7245, jika kamu tidak merasa bersalah!"
                        );
                    }
                    user2.money = parseInt(user2.money) + 25000;
                    fs.writeFile(user, JSON.stringify(user2), function writeJSON(err) {
                        if (err) {
                            return message.channel.send("Something went wrong on our database");
                        } else {
                            message.channel.send(
                                `you received **__25000$__**, now you've **__${user2.money.toLocaleString()}__**$!`
                            );
                        }
                    });
                }
                limitation6.add(message.author.id);
                setTimeout(() => {
                    limitation6.delete(message.author.id);
                }, 3600000);
            }
        } catch (err) {
            return message.channel.send(
                `Failure on database found, please chat firstly before run command (auto create account doesn't read your action).`
            );
        }
    } else if (command == "resetgems") {
        try {
            if (message.author.id == "622761347746103297") {
                console.log("jzuvgti"); //850333458660327445
            } else if (message.author.id == "622761347746103297") {
                console.log(`jzuv2`);
            } else {
                return message.channel.send(":clown: you dont have permission to do that");
            }
            const mention = getUserFromMention(args[0]);
            if (!fs.existsSync("./newusers/" + mention + ".json")) {
                return message.channel.send(
                    `cannot find the user or the user is not registered yet.`
                );
            } else {
                let user = `./newusers/` + mention + ".json";
                let user2 = require(user);
                user2.money = 0;
                user2.deposit = 0;
                fs.writeFile(user, JSON.stringify(user2), function writeJSON(err) {
                    if (err) {
                        return message.channel.send("Something went wrong on our database");
                    } else {
                        message.channel.send(`successfully reseted ${mention}'s gems!`);
                    }
                });
            }
        } catch (err) {
            return message.channel.send(
                `Failure on database found, please chat firstly before run command (auto create account doesn't read your action).`
            );
        }
    } else if (command == "blacklist") {
        if (message.author.id == "622761347746103297") {
            console.log("jzuvgti"); //850333458660327445
        } else if (message.author.id == "622761347746103297") {
            console.log("cyrus");
        } else if (message.author.id == "581136079751741471") {
            console.log("zyph");
        } else {
            return message.channel.send(":clown: you dont have permission to do that");
        }
        const mention = getUserFromMention(args[0]);
        console.log(mention)
        if (mention == message.author.id) {
            return message.channel.send(`You can't do that.`);
        }
        if (args[1] == undefined) args[1] = "Unknown reason";
        if (!fs.existsSync("./newusers/" + mention + ".json")) {
            return message.channel.send(
                `cannot find the user or the user is not registered yet.`
            );
        } else {
            let user = `./newusers/` + mention + ".json";
            let user2 = require(user);
            if (user2.ban == 1) {
                return message.channel.send(`**(${mention.tag})** already blacklisted.`);
            }
            user2.ban = 1;
            user2.banreason = args.slice(1).join(" ");
            fs.writeFile(user, JSON.stringify(user2), function writeJSON(err) {
                if (err) {
                    return message.channel.send("Something went wrong on our database");
                } else {
                    message.channel.send(
                        `Successfully Blacklisted ${mention} with reason ${args
              .slice(1)
              .join(" ")}!`
                    );
                    try {
                        mention
                            .send(
                                `[Warning] Your account **(${
                  mention.tag
                })** has been blacklisted from NotaBot with reason **(${args
                  .slice(1)
                  .join(" ")})**`
                            )
                            .catch(err =>
                                message.channel.send(`Unable to contact the user.`)
                            );
                    } catch (err) {
                        return;
                    }
                }
            });
        }
    } else if (command == "whitelist") {
        if (message.author.id == "622761347746103297") {
            console.log("jzuvgti"); //850333458660327445
        } else if (message.author.id == "622761347746103297") {
            console.log("cyrus");
        } else if (message.author.id == "581136079751741471") {
            console.log("zyph");
        } else {
            return message.channel.send(":clown: you dont have permission to do that");
        }
        const mention = getUserFromMention(args[0]);
        if (!fs.existsSync("./newusers/" + mention + ".json")) {
            return message.channel.send(
                `cannot find the user or the user is not registered yet.`
            );
        } else {
            let user = `./newusers/` + mention + ".json";
            let user2 = require(user);
            if (user2.ban == 0) {
                return message.channel.send(`**(${mention.tag})** is not blacklisted.`);
            }
            user2.ban = 0;
            user2.wrong = 0;
            fs.writeFile(user, JSON.stringify(user2), function writeJSON(err) {
                if (err) {
                    return message.channel.send("Something went wrong on our database");
                } else {
                    message.channel.send(`successfully removed ${mention} blacklist!`);
                    mention
                        .send(
                            `[Warning] Your account **__(${mention.tag})__** has been removed from blacklist (whitelisted), **__Please don't make the same mistake__**.`
                        )
                        .catch(err => message.channel.send(`Unable to contact the user.`));
                }
            });
        }
    } else if (command == "status") {
        if (message.author.id == "622761347746103297") {
            console.log("jzuvgti"); //850333458660327445
        } else if (message.author.id == "622761347746103297") {
            console.log("cyrus");
        } else {
            return message.channel.send(":clown: you dont have permission to do that");
        }
        const mention = getUserFromMention(args[0]);
        if (!fs.existsSync("./newusers/" + mention + ".json")) {
            return message.channel.send(
                `cannot find the user or the user is not registered yet.`
            );
        } else {
            let user = `./newusers/` + mention + ".json";
            let user2 = require(user);
            if (user2.ban == 1) {
                return message.channel.send(
                    `${mention} This user is blacklisted with reason: ${user2.banreason}`
                );
            } else {
                message.channel.send(`There is no problem from that user so far.`);
            }
        }
    } else if (command == "givegems") {
        //you can make this command usable only for specific ".roleid", but lazy to add lol
        if (message.author.id == "622761347746103297") {
            console.log("jzuvgti");
        } else if (message.author.id == "622761347746103297") {
            console.log(`cyrus`);
        } else if (message.author.id == "581136079751741471") {
            console.log("zyph");
        } else {
            return message.channel.send(":clown: you dont have permission to do that");
        }
        const mention = getUserFromMention(args[0]);
        const int = args[1];
        if (int > 1000000) {
            return message.channel.send(
                "Are you dumb? generating gems over 1M will broke the economy."
            );
        }
        if (Number.isNaN(+args[1]) == true) {
            return message.channel.send("Please use the correct syntax.");
        } else if (!fs.existsSync("./newusers/" + mention + ".json")) {
            return message.channel.send(
                `cannot find the user or the user is not registered yet.`
            );
        } else {
            let user = `./newusers/` + mention + ".json";
            let user2 = require(user);
            user2.money = parseInt(user2.money) + parseInt(args[1]);
            fs.writeFile(user, JSON.stringify(user2), function writeJSON(err) {
                if (err) {
                    return message.channel.send("Something went wrong on our database");
                } else {
                    message.channel.send(
                        `successfully sent **__${int.toLocaleString()}$__** to **__${mention}__**!`
                    );
                    mention
                        .send(
                            `Congratulations, you received **__${int.toLocaleString()}__**$ from **${
                message.author.tag
              }**`
                        )
                        .catch(err => message.channel.send(`Unable to contact the user.`));
                }
            });
        }
    } else if (command == "giverole") {
        try {
            if (message.author.id == "622761347746103297") {
                console.log(`jzuvgti`)
            } else {
                return
            }
            const mention = getUserFromMention(args[0]);
            const int = args[1];
            let user = `./newusers/` + mention + ".json";
            let user2 = require(user);
            if (Number.isNaN(+args[1]) == true) {
                return message.channel.send("Please use the correct syntax.");
            } else if (!fs.existsSync("./newusers/" + mention + ".json")) {
                return message.channel.send(`cannot find the user or the user is not registered yet.`);
            } else {
                user2.roleid = parseInt(user2.roleid) + parseInt(args[1]);
                fs.writeFile(user, JSON.stringify(user2), function writeJSON(err) {
                    if (err) {
                        return console.log(err);
                    } else {
                        message.channel.send(`Updated Roles **${args[1]}**`);
                    }
                })
            }
        } catch (err) {

        }
    } else if (command == "giveances") {
        if (message.author.id == "622761347746103297") {
            console.log("jzuvgti");
        } else {
            return message.channel.send(":clown: you dont have permission to do that");
        }
        if (!args[0]) {
            return message.channel.send(`please mentions the user`);
        }
        const mention = getUserFromMention(args[0]);
        if (!fs.existsSync("./newusers/" + mention + ".json")) {
            return message.channel.send(
                `cannot find the user or the user is not registered yet.`
            );
        } else {
            let user = `./newusers/` + mention + ".json";
            let user2 = require(user);
            user2.ances = parseInt(user2.ances) + 1;
            fs.writeFile(user, JSON.stringify(user2), function writeJSON(err) {
                if (err) {
                    return message.channel.send("Something went wrong on our database");
                } else {
                    message.channel.send(
                        `successfully sent **__${user2.ances}__** ances to **__${mention}__**!`
                    );
                }
            });
        }
    } else if (command == "resetances") {
        if (message.author.id == "622761347746103297") {
            console.log("jzuvgti");
        } else {
            return message.channel.send(":clown: you dont have permission to do that");
        }
        if (!args[0]) {
            return message.channel.send(`please mentions the user`);
        }
        const mention = getUserFromMention(args[0]);
        if (!fs.existsSync("./newusers/" + mention + ".json")) {
            return message.channel.send(
                `cannot find the user or the user is not registered yet.`
            );
        } else {
            let user = `./newusers/` + mention + ".json";
            let user2 = require(user);
            user2.ances = 0;
            fs.writeFile(user, JSON.stringify(user2), function writeJSON(err) {
                if (err) {
                    return message.channel.send("Something went wrong on our database");
                } else {
                    message.channel.send(
                        `successfully reseted **__${mention}__**'s ances!`
                    );
                }
            });
        }
    } else if (command == "resetid") { //useless command (unusable) this command was use for reseting playerid which is used for avoiding duplication on "casino battle" command
        if (message.author.id == "622761347746103297") {
            console.log("jzuvgti");
        } else {
            return message.channel.send(":clown: you dont have permission to do that");
        }
        const mention = getUserFromMention(args[0]);
        if (!fs.existsSync("./newusers/" + mention + ".json")) {
            return message.channel.send(
                `cannot find the user or the user is not registered yet.`
            );
        } else {
            let user = `./newusers/` + mention + ".json";
            let user2 = require(user);
            user2.playid = 0;
            fs.writeFile(user, JSON.stringify(user2), function writeJSON(err) {
                if (err) {
                    return message.channel.send("Something went wrong on our database");
                } else {
                    message.channel.send(`successfully reseted **__${mention}__** id!`);
                }
            });
        }
    } else if (command == "pay") {
        try {
            if (args[1] < 50) {
                return message.channel.send(`Your payment must be more than 50.`);
            }
            const mention = getUserFromMention(args[0]);
            const nominal = args[1];
            if (Number.isNaN(+args[1]) == true) {
                return message.channel.send(
                    `Please use the correct syntax and the amount must not be minus (-).\n**__for example__**: ${prefix} ${command} SLeeping.`
                );
            } else if (!fs.existsSync("./newusers/" + mention + ".json")) {
                return message.channel.send(
                    `cannot find the user or the user is not registered yet.`
                );
            }
            let user = `./newusers/` + mention + ".json";
            let user2 = require(user);

            let clientuser = `./newusers/` + message.author.id + ".json";
            let clientuser2 = require(clientuser);
            if (clientuser2.ban == 1) {
                return message.channel.send(
                    "Your account has been blacklisted with reason, " +
                    user2.banreason +
                    " Silahkan Contact JzuvGTI#7245, jika kamu tidak merasa bersalah!"
                );
            }
            if (clientuser2.playid == 1) {
                return message.channel.send("you cannot make any transaction for now");
            }
            if (mention.id == message.author.id) {
                return message.channel.send("you can't do that");
            } else if (parseInt(nominal) > parseInt(clientuser2.money)) {
                return message.channel.send("you don't have enough money.");
            } else if (message.content.includes("-")) {
                return message.channel.send("you cannot send negative amount.");
            } else {
                user2.money = parseInt(user2.money) + parseInt(args[1]);
                clientuser2.money = parseInt(clientuser2.money) - parseInt(args[1]);
                fs.writeFile(user, JSON.stringify(user2), function writeJSON(err) {
                    if (err) {
                        return message.channel.send("Something went wrong on our database");
                    } else {
                        message.channel.send(
                            `successfully sent **__${parseInt(
                args[1]
              ).toLocaleString()}__** gems to ${mention}, now you've **__${clientuser2.money.toLocaleString()}__** gems.`
                        );
                    }
                });
                fs.writeFile(
                    clientuser,
                    JSON.stringify(clientuser2),
                    function writeJSON(err) {
                        if (err) {
                            return message.channel.send("Something went wrong on our database");
                        }
                    }
                );
            }
        } catch (err) {
            return message.channel.send(
                `Failure on database found, please chat firstly before run command (auto create account doesn't read your action).`
            );
        }
    } else if (command == "dep" || command == "deposit") {
        try {
            let user = `./newusers/` + message.author.id + ".json";
            let user2 = require(user);
            if (args[0] < 50) {
                return message.channel.send(
                    `are you too poor, for deposit your gems, the minimum requirement for a deposit is 50 gems.`
                );
            } else if (args[0] == "all") {
                if (user2.money == 0) {
                    return message.channel.send(
                        "How brave are you tried to deposit with zero gems, dumb."
                    );
                } else args[0] = user2.money;
            } else var nominal = args[0];
            if (Number.isNaN(+args[0]) == true) {
                return message.channel.send(
                    `Please use the correct syntax and the amount must not be minus (-).\n**__for example__**: ${prefix}${command} 1000.`
                );
            }
            if (user2.ban == 1) {
                return message.channel.send(
                    "Your account has been blacklisted with reason, " +
                    user2.banreason +
                    " Silahkan Contact JzuvGTI#7245, jika kamu tidak merasa bersalah!"
                );
            }
            if (user2.playid == 1) {
                return message.channel.send("you cannot make any transaction for now");
            }
            if (parseInt(nominal) > parseInt(user2.money)) {
                return message.channel.send("you don't have enough money to deposit.");
            } else if (message.content.includes("-")) {
                return message.channel.send("you cannot send negative amount.");
            } else {
                user2.money = parseInt(user2.money) - parseInt(args[0]);
                user2.deposit = parseInt(user2.deposit) + parseInt(args[0]);
                fs.writeFile(user, JSON.stringify(user2), function writeJSON(err) {
                    if (err) {
                        return message.channel.send("Something went wrong on our database");
                    } else {
                        return message.channel.send(
                            `Successfully deposit ${args[0]}$, now you've ${
                user2.deposit
              }$ on your savings, "${prefix}withdraw" to withdraw your deposit money. do **(${prefix}gems)** to find out more information.`
                        );
                    }
                });
            }
        } catch (err) {
            return message.channel.send(
                `Failure on database found, please chat firstly before run command (auto create account doesn't read your action).`
            );
        }
    } else if (command == "with" || command == "withdraw") {
        try {
            let user = `./newusers/` + message.author.id + ".json";
            let user2 = require(user);
            if (args[0] < 50) {
                return message.channel.send(
                    `are you too poor, for deposit your gems, the minimum requirement for a deposit is 50 gems.`
                );
            } else if (args[0] == "all") {
                if (user2.deposit == 0) {
                    return message.channel.send(
                        "How brave are you tried to deposit with zero gems, dumb."
                    );
                } else args[0] = user2.deposit;
            } else var nominal = args[0];
            if (Number.isNaN(+args[0]) == true) {
                return message.channel.send(
                    `Please use the correct syntax and the amount must not be minus (-).\n**__for example__**: ${prefix}${command} 1000.`
                );
            }
            if (user2.ban == 1) {
                return message.channel.send(
                    "Your account has been blacklisted with reason, " +
                    user2.banreason +
                    " Silahkan Contact JzuvGTI#7245, jika kamu tidak merasa bersalah!"
                );
            }
            if (user2.playid == 1) {
                return message.channel.send("you cannot make any transaction for now");
            }
            if (parseInt(nominal) > parseInt(user2.deposit)) {
                return message.channel.send("you don't have enough money to withdraw.");
            } else if (message.content.includes("-")) {
                return message.channel.send("you cannot send negative amount.");
            } else {
                user2.money = parseInt(user2.money) + parseInt(args[0]);
                user2.deposit = parseInt(user2.deposit) - parseInt(args[0]);
                fs.writeFile(user, JSON.stringify(user2), function writeJSON(err) {
                    if (err) {
                        return message.channel.send("Something went wrong on our database");
                    } else {
                        return message.channel.send(
                            `Successfully withdraw ${args[0]}$, now you've ${
                user2.money
              }$ on your wallet, do **(${prefix}gems)** to find out more information.`
                        );
                    }
                });
            }
        } catch (err) {
            return message.channel.send(
                `Failure on database found, please chat firstly before run command (auto create account doesn't read your action).`
            );
        }
    } else if (command == "store" || command == "shop") {
        try {
            let user = `./newusers/` + message.author.id + ".json";
            let user2 = require(user);
            if (user2.ban == 1) {
                return message.channel.send(
                    "Your account has been blacklisted with reason, " +
                    user2.banreason +
                    " Silahkan Contact JzuvGTI#7245, jika kamu tidak merasa bersalah!"
                );
            }
            if (user2.ances == 1 && user2.pickaxe == 1) {
                const embed = new Discord.MessageEmbed()
                    .setTitle("NoTabot Store")
                    .setDescription(
                        `\n\`Prices list\nPickAxe: ${config.pickaxe.toLocaleString()} (You already own PickAxe)\nAnces: ${config.ances.toLocaleString()} (You already own Ances)\nFarmable: ${config.farmable.toLocaleString()}\`\n`
                    )
                    .setColor("#0000FF")
                    .setFooter(
                        `Requested by ${message.author.tag}`,
                        message.author.displayAvatarURL({
                            dynamic: true
                        })
                    )
                    .setTimestamp();
                message.channel.send(embed);
            } else if (user2.ances == 1 && user2.pickaxe == 0) {
                const embed2 = new Discord.MessageEmbed()
                    .setTitle("NoTabot Store")
                    .setDescription(
                        `\n\`Prices list\nPrices list\nPickAxe: ${config.pickaxe.toLocaleString()} ${config.pickaxe.toLocaleString()}\nAnces: ${config.ances.toLocaleString()} (You already own Ances)\nFarmable: ${config.farmable.toLocaleString()}\`\n`
                    )
                    .setColor("#0000FF")
                    .setFooter(
                        `Requested by ${message.author.tag}`,
                        message.author.displayAvatarURL({
                            dynamic: true
                        })
                    )
                    .setTimestamp();
                message.channel.send(embed2);
            } else if (user2.ances == 0 && user2.pickaxe == 1) {
                const embed3 = new Discord.MessageEmbed()
                    .setTitle("NoTabot Store")
                    .setDescription(
                        `\n\`Prices list\nPickAxe: ${config.pickaxe.toLocaleString()} (You already own pickaxe)\nAnces: ${config.ances.toLocaleString()}\nFarmable: ${config.farmable.toLocaleString()}\`\n`
                    )
                    .setColor("#0000FF")
                    .setFooter(
                        `Requested by ${message.author.tag}`,
                        message.author.displayAvatarURL({
                            dynamic: true
                        })
                    )
                    .setTimestamp();
                message.channel.send(embed3);
            } else {
                const embed4 = new Discord.MessageEmbed()
                    .setTitle("NoTabot Store")
                    .setDescription(
                        `\n\`Prices list\nPickAxe: ${config.pickaxe.toLocaleString()}\nAnces: ${config.ances.toLocaleString()}\nFarmable: ${config.farmable.toLocaleString()}\`\n`
                    )
                    .setColor("#0000FF")
                    .setFooter(
                        `Requested by ${message.author.tag}`,
                        message.author.displayAvatarURL({
                            dynamic: true
                        })
                    )
                    .setTimestamp();
                message.channel.send(embed4);
            }
        } catch (error) {
            return message.channel.send(
                `Failure on database found, please chat firstly before run command (auto create account doesn't read your action).`
            );
        }
    } else if (command == "ans") {
        try {
            let user = `./newusers/` + message.author.id + ".json";
            let user2 = require(user);
            if (user2.ban == 1) {
                return message.channel.send(
                    "Your account has been blacklisted with reason, " +
                    user2.banreason +
                    " Silahkan Contact JzuvGTI#7245, jika kamu tidak merasa bersalah!"
                );
            }
            if (!args[0] && user2.capcha == 1) {
                return message.channel.send("Please put the answer.");
            }
            if (user2.wrong == 5 && user2.capcha == 1) {
                user2.ban = 1;
                user2.wrong = 0;
                user2.banreason = "answering wrong captcha.";
                fs.writeFile(user, JSON.stringify(user2), function writeJSON(err) {
                    if (err) {
                        return message.channel.send("Something went wrong on our database");
                    } else {
                        return message.channel.send(
                            ":no_entry_sign: You've been blacklisted, with reason " +
                            user2.banreason
                        );
                    }
                });
            } else {
                if (args[0] == user2.code && user2.capcha == 1) {
                    user2.code = 0;
                    user2.capcha = 0;
                    user2.farmuser = 0;
                    user2.wrong = 0;
                    fs.writeFile(user, JSON.stringify(user2), function writeJSON(err) {
                        if (err) {
                            return message.channel.send("Something went wrong on our database");
                        } else {
                            return message.channel.send("Successfully finished captcha.");
                        }
                    });
                } else {
                    if (user2.capcha == 1) {
                        user2.wrong = parseInt(user2.wrong) + 1;
                        fs.writeFile(user, JSON.stringify(user2), function writeJSON(err) {
                            if (err) {
                                return message.channel.send("Something went wrong on our database");
                            } else {
                                return message.channel.send(
                                    ":no_entry_sign: Wrong captcha, if you keep answering wrong captcha you will be blacklist."
                                );
                            }
                        });
                    }
                }
            }
        } catch (err) {
            return message.channel.send(
                `Failure on database found, please chat firstly before run command (auto create account doesn't read your action).`
            );
        }
    } else if (command == "farm") {
        try {
            let user = `./newusers/` + message.author.id + ".json";
            let user2 = require(user);
            if (user2.ban == 1) {
                return;
            }
            const auto = capcha();
            if (user2.capcha == 1 && user2.wrong == 6) {
                user2.ban = 1;
                user2.banreason = "Auto farming.";
                fs.writeFile(user, JSON.stringify(user2), function writeJSON(err) {
                    if (err) {
                        return message.channel.send("Something went wrong on our database");
                    } else {
                        return message.author.send(
                            ":no_entry_sign: You've been blacklisted, with reason " +
                            user2.banreason
                        );
                    }
                });
            }

            if (user2.farmuser == 30) {
                user2.code = parseInt(auto);
                user2.capcha = 1;
                user2.wrong = parseInt(user2.wrong) + 1;
                fs.writeFile(user, JSON.stringify(user2), function writeJSON(err) {
                    if (err) {
                        return message.channel.send("Something went wrong on our database");
                    } else {
                        return message.channel.send(
                            `:warning:| Auto Captcha system.\nCaptcha, ||${prefix}ans ${user2.code}|| ${user2.wrong}/6`
                        );
                    }
                });
            }

            if (limitation8.has(message.author.id)) {
                return message.channel.send(
                    `:stopwatch: | **${message.author.username}**! Please wait **2,5** seconds and try again!`
                );
            }

            if (!fs.existsSync("./newusers/" + message.author.id + ".json")) {
                return message.channel.send(
                    `Failure on database found, please chat firstly before run command (auto create account doesn't read your action).`
                );
            }
            var bruhxrandom = randomgems();
            if (user2.ban == 1) {
                return message.channel.send(
                    "Your account has been blacklisted with reason, " +
                    user2.banreason +
                    " Silahkan Contact JzuvGTI#7245, jika kamu tidak merasa bersalah!"
                );
            } else if (user2.capcha == 1) {
                return;
            } else if (user2.pickaxe < 1) {
                return message.channel.send(
                    `you don't have pickaxe please purchase it on store (**${prefix} store**)`
                );
            } else if (user2.ances == 1) {
                if (user2.farmable < 1) {
                    return message.channel.send(`You don't have enough farmable, please purchase it from store. Type **${prefix}buy farmable**.`);
                }
                const ancesgems = bruhxrandom * 10 + bruhxrandom * 5;
                user2.farmuser = parseInt(user2.farmuser) + 1;
                user2.money = parseInt(user2.money) + ancesgems;
                user2.farmable = parseInt(user2.farmable) - 1;
                fs.writeFile(user, JSON.stringify(user2), function writeJSON(err) {
                    if (err) {
                        return message.channel.send("Something went wrong on our database");
                    } else {
                        return message.channel.send(`**${message.author.username}**, [Ances] You found ⏣ **${ancesgems}** **(${user2.farmable})**🌱 Farmables left.`);
                    }
                });
                limitation8.add(message.author.id);
                setTimeout(() => {
                    limitation8.delete(message.author.id);
                }, 2500);
            } else {
                if (user2.farmable < 1) {
                    return message.channel.send(`You don't have enough farmable, please purchase it from store. Type **${prefix}buy farmable**.`);
                }
                const normalgems = bruhxrandom * 5;
                user2.money = parseInt(user2.money) + normalgems;
                user2.farmuser = parseInt(user2.farmuser) + 1;
                user2.farmable = parseInt(user2.farmable) - 1;
                fs.writeFile(user, JSON.stringify(user2), function writeJSON(err) {
                    if (err) {
                        return message.channel.send("Something went wrong on our database");
                    } else {
                        return message.channel.send(`**${message.author.username}**, You found ⏣ **${normalgems}** **(${user2.farmable})**🌱 Farmables left.`);
                        limitation8.add(message.author.id);
                        setTimeout(() => {
                            limitation8.delete(message.author.id);
                        }, 2500);
                    }
                });
                limitation8.add(message.author.id);
                setTimeout(() => {
                    limitation8.delete(message.author.id);
                }, 2500);
            }
        } catch (error) {
            return message.channel.send(
                `Failure on database found, please chat firstly before run command (auto create account doesn't read your action).`
            );
        }
    } else if (command == "buy") {
        try {
            if (!fs.existsSync("./newusers/" + message.author.id + ".json")) {
                return message.channel.send(
                    `Failure on database found, please chat firstly before run command (auto create account doesn't read your action).`
                );
            }
            let user = `./newusers/` + message.author.id + ".json";
            let user2 = require(user);

            if (user2.playid == 1) {
                return message.channel.send("you cannot make any transaction for now!");
            }
            if (user2.ban == 1) {
                return message.channel.send(
                    "Your account has been blacklisted with reason, " +
                    user2.banreason +
                    " Silahkan Contact JzuvGTI#7245, jika kamu tidak merasa bersalah!"
                );
            }
            const reminder = args[0];
            if (!reminder) {
                return message.channel.send(
                    `what item do you want to buy? (${prefix} store) to see prices lists`
                );
            }
            if (reminder.toLowerCase() === "pickaxe") {
                if (user2.pickaxe == 1) {
                    return message.channel.send("you already have pickaxe");
                } else if (parseInt(user2.money) < parseInt(config.pickaxe)) {
                    return message.channel.send("you don't have enough money.");
                } else {
                    user2.money = parseInt(user2.money) - parseInt(config.pickaxe);
                    user2.pickaxe = parseInt(user2.pickaxe) + 1;
                    fs.writeFile(user, JSON.stringify(user2), function writeJSON(err) {
                        if (err) {
                            return message.channel.send("Something went wrong on our database");
                        } else {
                            message.channel.send(
                                `Successully purchased 1 Pickaxe for **__${config.pickaxe.toLocaleString()}__**, now you've **__${
                  user2.money
                }__** and **(${user2.pickaxe}) Pickaxe** right now.`
                            );
                        }
                    });
                }
            } else if (reminder.toLowerCase() === "ances") {
                if (user2.ances == 1) {
                    return message.channel.send("you already have ances");
                } else if (parseInt(user2.money) < parseInt(config.ances)) {
                    return message.channel.send("you don't have enough money.");
                } else {
                    user2.money = parseInt(user2.money) - parseInt(config.ances);
                    user2.ances = parseInt(user2.ances) + 1;
                    fs.writeFile(user, JSON.stringify(user2), function writeJSON(err) {
                        if (err) {
                            return message.channel.send("Something went wrong on our database");
                        } else {
                            message.channel.send(
                                `Successully purchased 1 Pickaxe for **__${config.ances.toLocaleString()}__**, now you've **__${
                  user2.money
                }__** and **(${user2.ances}) ances** right now.`
                            );
                        }
                    });
                }
            } else if (reminder.toLowerCase() === "farmable") {
                if (parseInt(user2.money) < parseInt(config.farmable)) {
                    return message.channel.send("You don't have enough gems.");
                } else if (user2.farmable > 200) {
                    return message.channel.send("You already have enough farmable.");
                } else {
                    user2.money = parseInt(user2.money) - parseInt(config.farmable);
                    user2.farmable = parseInt(user2.farmable) + 200;
                    fs.writeFile(user, JSON.stringify(user2), function writeJson(err) {
                        if (err) {
                            return message.channel.send("error bang");
                        } else {
                            return message.channel.send(
                                `Successfully purchased **200 farmable** for **${config.farmable}**, now you have **${user2.farmable}**.`
                            );
                        }
                    });
                }
            }
        } catch (err) {
            return message.channel.send(
                `Failure on database found, please chat firstly before run command (auto create account doesn't read your action).`
            );
        }
    } else if (command == "afk") {
        const afkmain = args.join(" ");
        if (!afkmain) {
            try {
                let main = `./newusers/` + message.author.id + ".json";
                let main2 = require(main);
                if (main2.ban == 1) {
                    return message.channel.send(
                        "Your account has been blacklisted with reason, " +
                        user2.banreason +
                        " Silahkan Contact JzuvGTI#7245, jika kamu tidak merasa bersalah!"
                    );
                }
                main2.afk = 1;
                main2.afkmessage = "AFK";
                main2.afkdate = `**<t:${Date.now()/1000 | 0}:R>**`;
                main2.afkguildid = parseInt(message.guild.id);
                main2.afknow = parseInt(Date.now())
                main2.afknow2 = parseInt(Date.now()) + parseInt(50000)
                fs.writeFile(main, JSON.stringify(main2), function writeJSON(err) {
                    if (err) {
                        return message.channel.send("fuck the error");
                    } else {
                        message.channel.send("i set your AFK.");
                        message.member.setNickname(`#[AFK] ${message.author.username}`).catch(err => console.log(err))
                    }
                });
            } catch (err) {}
        } else {
            try {
                let main = `./newusers/` + message.author.id + ".json";
                let main2 = require(main);
                main2.afk = 1;
                main2.afkmessage = afkmain;
                main2.afkdate = `**<t:${Date.now()/1000 | 0}:R>**`;
                main2.afkguildid = parseInt(message.guild.id);
                main2.afknow = parseInt(Date.now())
                main2.afknow2 = parseInt(Date.now()) + parseInt(50000)
                fs.writeFile(main, JSON.stringify(main2), function writeJSON(err) {
                    if (err) {
                        return message.channel.send("fuck the error");
                    } else {
                        message.channel.send(`i set your AFK: ${afkmain}.`);
                        message.member.setNickname(`#[AFK] ${message.author.username}`).catch(err => console.log(err))
                    }
                });
            } catch (err) {}
        }
    } else if (command == "csn" || command == "gamble") {
        try {
            if (limitation2.has(message.author.id)) {
                return message
                    .reply("wait 6 seconds before execute another command.")
                    .then(msg => {
                        msg.delete({
                            timeout: 5000
                        });
                    });
            }
            const amount = args[0];
            if (!fs.existsSync("./newusers/" + message.author.id + ".json")) {
                return message.channel.send(
                    `Failure on database found, please chat firstly before run command (auto create account doesn't read your action).`
                );
            }
            if (amount < 1) {
                return message.channel.send(`Your bet must be more than 1.`);
            }
            let user = `./newusers/` + message.author.id + ".json";
            let user2 = require(user);
            if (user2.ban == 1) {
                return message.channel.send(
                    "Your account has been blacklisted with reason, " +
                    user2.banreason +
                    " Silahkan Contact JzuvGTI#7245, jika kamu tidak merasa bersalah!"
                );
            }
            if (user2.playid == 1) {
                return message.channel.send("you are playing another game");
            }
            if (user2.money == 0) {
                return message.channel.send("Your atleast need 1 gems?");
            } else if (parseInt(amount) > parseInt(user2.money)) {
                return message.channel.send("you don't have enough money.");
            } else if (message.content.includes("-")) {
                return message.channel.send("you cannot bet negative amount.");
            } else if (args[0] > 200000) {
                return message.channel.send("bet can't be more than 200,000");
            } else if (args[0] == "max") {
                if (user2.money > 200000) {
                    args[0] = 200000;
                } else {
                    args[0] = user2.money;
                }
            } else if (!args[0]) {
                return message.channel.send(`You need to bet something more than ⏣ 100.`)
            } else if (Number.isNaN(+args[0]) == true) {
                return message.channel.send(
                    `You need to bet something, use your brain cells.`
                );
            }
            message.react("a:wheel:883978179214196746");
            var int1 = randomint();
            var int2 = randomint();
            if (int1 == 0 && int2 == 0) {
                const embed = new Discord.MessageEmbed()
                    .setTitle(`${message.author.username}'s CSN Game`)
                    .setDescription(
                        `Tie! you lost nothing!\n\nYou have: ⏣ **${user2.money.toLocaleString()}**\n\n**${
              message.author.username
            }** Rolled \`${int1}\`! <a:wheel:883978179214196746>\n**${
              client.user.username
            }** Rolled \`${int2}\`! <a:wheel:883978179214196746>`
                    )
                    .setColor("#000000")
                    .setTimestamp();
                return message.channel.send(embed); //this is super duper rare casee....
            } else if (int1 == 0) {
                user2.money = parseInt(user2.money) + parseInt(args[0]);
                fs.writeFile(user, JSON.stringify(user2), function writeJSON(err) {
                    if (err) {
                        return message.channel.send("Something went wrong on our database");
                    } else {
                        const embed2 = new Discord.MessageEmbed()
                            .setTitle(`${message.author.username}'s winning CSN game`)
                            .setDescription(
                                `You won **${parseInt(
              args[0]
            ).toLocaleString()}**\nNew Balance: ⏣ **${user2.money.toLocaleString()}**\n\n**${
              message.author.username
            }** Rolled \`${int1}\`! <a:wheel:883978179214196746>\n**${
              client.user.username
            }** Rolled \`${int2}\`! <a:wheel:883978179214196746>`
                            )
                            .setColor("#00FF00")
                            .setTimestamp();
                        return message.channel.send(embed2);
                    }
                });
            } else if (int2 == 0) {
                user2.money = parseInt(user2.money) - parseInt(args[0]);
                fs.writeFile(user, JSON.stringify(user2), function writeJSON(err) {
                    if (err) {
                        return message.channel.send("Something went wrong on our database");
                    } else {
                        const embed3 = new Discord.MessageEmbed()
                            .setTitle(`${message.author.username}'s losing CSN game`)
                            .setDescription(
                                `You Lose **${parseInt(
              args[0]
            ).toLocaleString()}**\nNew Balance: ⏣ **${user2.money.toLocaleString()}**\n\n**${
              message.author.username
            }** Rolled \`${int1}\`! <a:wheel:883978179214196746>\n**${
              client.user.username
            }** Rolled \`${int2}\`! <a:wheel:883978179214196746>`
                            )
                            .setColor("#FF0000")
                            .setTimestamp();
                        message.channel.send(embed3);
                    }
                });
            } else if (parseInt(int1) < parseInt(int2)) {
                user2.money = parseInt(user2.money) - parseInt(args[0]);
                fs.writeFile(user, JSON.stringify(user2), function writeJSON(err) {
                    if (err) {
                        return message.channel.send("Something went wrong on our database");
                    } else {
                        const embed4 = new Discord.MessageEmbed()
                            .setTitle(`${message.author.username}'s losing CSN game`)
                            .setDescription(
                                `You Lose **${parseInt(
              args[0]
            ).toLocaleString()}**\nNew Balance: ⏣ **${user2.money.toLocaleString()}**\n\n**${
              message.author.username
            }** Rolled \`${int1}\`! <a:wheel:883978179214196746>\n**${
              client.user.username
            }** Rolled \`${int2}\`! <a:wheel:883978179214196746>`
                            )
                            .setColor("#FF0000")
                            .setTimestamp();
                        message.channel.send(embed4);
                    }
                });
            } else if (parseInt(int1) == parseInt(int2)) {
                const embed5 = new Discord.MessageEmbed()
                    .setTitle(`${message.author.username}'s CSN Game`)
                    .setDescription(
                        `Tie! you lost nothing!\n\nYou have: ⏣ **${user2.money.toLocaleString()}**\n\n**${
              message.author.username
            }** Rolled \`${int1}\`! <a:wheel:883978179214196746>\n**${
              client.user.username
            }** Rolled \`${int2}\`! <a:wheel:883978179214196746>`
                    )
                    .setColor("#000000")
                    .setTimestamp();
                return message.channel.send(embed5); //this is super duper rare casee....
            } else {
                user2.money = parseInt(user2.money) + parseInt(args[0]);
                fs.writeFile(user, JSON.stringify(user2), function writeJSON(err) {
                    if (err) {
                        return message.channel.send("Something went wrong on our database");
                    } else {
                        const embed6 = new Discord.MessageEmbed()
                            .setTitle(`${message.author.username} is winning CSN game`)
                            .setDescription(
                                `You won **${parseInt(
              args[0]
            ).toLocaleString()}**\nNew Balance: ⏣ **${user2.money.toLocaleString()}**\n\n**${
              message.author.username
            }** Rolled \`${int1}\`! <a:wheel:883978179214196746>\n**${
              client.user.username
            }** Rolled \`${int2}\`! <a:wheel:883978179214196746>`
                            )
                            .setColor("#00FF00")
                            .setTimestamp();
                        return message.channel.send(embed6);
                    }
                });
            }
            limitation2.add(message.author.id);
            setTimeout(() => {
                limitation2.delete(message.author.id);
            }, 6000);
        } catch (error) {
            return message.channel.send(
                `Failure on database found, please chat firstly before run command (auto create account doesn't read your action).`
            );
        }
    } else if (command == "qq") {
        try {
            if (limitation3.has(message.author.id)) {
                return message
                    .reply("wait 6 seconds before execute another command.")
                    .then(msg => {
                        msg.delete({
                            timeout: 5000
                        });
                    });
            }
            const amount = args[0];
            if (!fs.existsSync("./newusers/" + message.author.id + ".json")) {
                return message.channel.send(
                    `Failure on database found, please chat firstly before run command (auto create account doesn't read your action).`
                );
            }
            if (amount < 1) {
                return message.channel.send(`Your bet must be more than 1.`);
            }
            let user = `./newusers/` + message.author.id + ".json";
            let user2 = require(user);
            if (user2.ban == 1) {
                return message.channel.send(
                    "Your account has been blacklisted with reason, " +
                    user2.banreason +
                    " Silahkan Contact JzuvGTI#7245, jika kamu tidak merasa bersalah!"
                );
            }
            if (user2.playid == 1) {
                return message.channel.send("you are playing another game");
            }
            if (user2.money == 0) {
                return message.channel.send("Your atleast need 1 gems?");
            }
            if (parseInt(amount) > parseInt(user2.money)) {
                return message.channel.send("you don't have enough money.");
            } else if (message.content.includes("-")) {
                return message.channel.send("you cannot bet negative amount.");
            } else if (args[0] > 200000) {
                return message.channel.send("bet can't be more than 200,000");
            } else if (args[0] == "max") {
                if (user2.money > 200000) {
                    args[0] = 200000;
                } else {
                    args[0] = user2.money;
                }
            } else if (!args[0]) {
                return message.channel.send(`You need to bet something more than ⏣ 100.`)
            } else if (Number.isNaN(+args[0]) == true) {
                return message.channel.send(
                    `You need to bet something, use your brain cells.`
                );
            }
            message.react("a:wheel:883978179214196746");

            var int1 = randomint();
            var int2 = randomint();
            var string1 = randomint();
            var string2 = randomint();
            console.log(int1 + "\n" + int2 + "\n" + qq(int1) + "\n" + qq(int2));
            if (int1 == 0 && int2 == 0) {
                const embed = new Discord.MessageEmbed()
                    .setTitle(`${message.author.username}'s QQ Game`)
                    .setDescription(
                        `Tie! you lost nothing!\n\nYou have: ⏣ **${user2.money.toLocaleString()}**\n\n**${
              message.author.username
            }** Rolled \`${int1}\`! <a:wheel:883978179214196746>\n**${
              client.user.username
            }** Rolled \`${int2}\`! <a:wheel:883978179214196746>`
                    )
                    .setColor("#000000")
                    .setTimestamp();
                return message.channel.send(embed); //this is super duper rare casee....
            } else if (qq(int1) == 0 && int2 == 0) {
                const embed2 = new Discord.MessageEmbed()
                    .setTitle(`${message.author.username}'s QQ Game`)
                    .setDescription(
                        `Tie! you lost nothing!\n\nYou have: ⏣ **${user2.money.toLocaleString()}**\n\n**${
              message.author.username
            }** Rolled \`${int1}\`! <a:wheel:883978179214196746>\n**${
              client.user.username
            }** Rolled \`${int2}\`! <a:wheel:883978179214196746>`
                    )
                    .setColor("#000000")
                    .setTimestamp();
                return message.channel.send(embed2);
            } else if (qq(int2) == 0 && int1 == 0) {
                const embed3 = new Discord.MessageEmbed()
                    .setTitle(`${message.author.username}'s QQ Game`)
                    .setDescription(
                        `Tie! you lost nothing!\n\nYou have: ⏣ **${user2.money.toLocaleString()}**\n\n**${
              message.author.username
            }** Rolled \`${int1}\`! <a:wheel:883978179214196746>\n**${
              client.user.username
            }** Rolled \`${int2}\`! <a:wheel:883978179214196746>`
                    )
                    .setColor("#000000")
                    .setTimestamp();
                return message.channel.send(embed3);
            } else if (qq(int1) == 0 && qq(int2) == 0) {
                const embed4 = new Discord.MessageEmbed()
                    .setTitle(`${message.author.username}'s QQ Game`)
                    .setDescription(
                        `Tie! you lost nothing!\n\nYou have: ⏣ **${user2.money.toLocaleString()}**\n\n**${
              message.author.username
            }** Rolled \`${int1}\`! <a:wheel:883978179214196746>\n**${
              client.user.username
            }** Rolled \`${int2}\`! <a:wheel:883978179214196746>`
                    )
                    .setColor("#000000")
                    .setTimestamp();
                return message.channel.send(embed4);
            } else if (int1 == 0) {
                user2.money = parseInt(user2.money) + parseInt(args[0]);
                fs.writeFile(user, JSON.stringify(user2), function writeJSON(err) {
                    if (err) {
                        return message.channel.send("Something went wrong on our database");
                    } else {
                        const embed5 = new Discord.MessageEmbed()
                            .setTitle(`${message.author.username}'s winning QQ game`)
                            .setDescription(
                                `You won **${parseInt(
              args[0]
            ).toLocaleString()}**\nNew Balance: ⏣ **${user2.money.toLocaleString()}**\n\n**${
              message.author.username
            }** Rolled \`${int1}\`! <a:wheel:883978179214196746>\n**${
              client.user.username
            }** Rolled \`${int2}\`! <a:wheel:883978179214196746>`
                            )
                            .setColor("#00FF00")
                            .setTimestamp();
                        return message.channel.send(embed5);
                    }
                });
            } else if (qq(int1) == 0) {
                user2.money = parseInt(user2.money) + parseInt(args[0]);
                fs.writeFile(user, JSON.stringify(user2), function writeJSON(err) {
                    if (err) {
                        return message.channel.send("Something went wrong on our database");
                    } else {
                        const embed6 = new Discord.MessageEmbed()
                            .setTitle(`${message.author.username}'s Win QQ game`)
                            .setDescription(
                                `You Won **${parseInt(
              args[0]
            ).toLocaleString()}**\nNew Balance: ⏣ **${user2.money.toLocaleString()}**\n\n**${
              message.author.username
            }** Rolled \`${int1}\`! <a:wheel:883978179214196746>\n**${
              client.user.username
            }** Rolled \`${int2}\`! <a:wheel:883978179214196746>`
                            )
                            .setColor("#00FF00")
                            .setTimestamp();
                        return message.channel.send(embed6)
                    }
                });
            } else if (int2 == 0) {
                user2.money = parseInt(user2.money) - parseInt(args[0]);
                fs.writeFile(user, JSON.stringify(user2), function writeJSON(err) {
                    if (err) {
                        return message.channel.send("Something went wrong on our database");
                    } else {
                        const embed7 = new Discord.MessageEmbed()
                            .setTitle(`${message.author.username}'s losing QQ game`)
                            .setDescription(
                                `You Lose **${parseInt(
              args[0]
            ).toLocaleString()}**\nNew Balance: ⏣ **${user2.money.toLocaleString()}**\n\n**${
              message.author.username
            }** Rolled \`${int1}\`! <a:wheel:883978179214196746>\n**${
              client.user.username
            }** Rolled \`${int2}\`! <a:wheel:883978179214196746>`
                            )
                            .setColor("#FF0000")
                            .setTimestamp();
                        return message.channel.send(embed7)
                    }
                });
            } else if (qq(int2) == 0) {
                user2.money = parseInt(user2.money) - parseInt(args[0]);
                fs.writeFile(user, JSON.stringify(user2), function writeJSON(err) {
                    if (err) {
                        return message.channel.send("Something went wrong on our database");
                    } else {
                        const embed8 = new Discord.MessageEmbed()
                            .setTitle(`${message.author.username}'s losing QQ game`)
                            .setDescription(
                                `You Lose **${parseInt(
              args[0]
            ).toLocaleString()}**\nNew Balance: ⏣ **${user2.money.toLocaleString()}**\n\n**${
              message.author.username
            }** Rolled \`${int1}\`! <a:wheel:883978179214196746>\n**${
              client.user.username
            }** Rolled \`${int2}\`! <a:wheel:883978179214196746>`
                            )
                            .setColor("#FF0000")
                            .setTimestamp();
                        return message.channel.send(embed8)
                    }
                });
            } else if (parseInt(qq(int1)) < parseInt(qq(int2))) {
                user2.money = parseInt(user2.money) - parseInt(args[0]);
                fs.writeFile(user, JSON.stringify(user2), function writeJSON(err) {
                    if (err) {
                        return message.channel.send("Something went wrong on our database");
                    } else {
                        const embed9 = new Discord.MessageEmbed()
                            .setTitle(`${message.author.username}'s losing QQ game`)
                            .setDescription(
                                `You Lose **${parseInt(
              args[0]
            ).toLocaleString()}**\nNew Balance: ⏣ **${user2.money.toLocaleString()}**\n\n**${
              message.author.username
            }** Rolled \`${int1}\`! <a:wheel:883978179214196746>\n**${
              client.user.username
            }** Rolled \`${int2}\`! <a:wheel:883978179214196746>`
                            )
                            .setColor("#FF0000")
                            .setTimestamp();
                        return message.channel.send(embed9)
                    }
                });
            } else if (parseInt(qq(int1)) == parseInt(qq(int2))) {
                const embed10 = new Discord.MessageEmbed()
                    .setTitle(`${message.author.username}'s QQ Game`)
                    .setDescription(
                        `Tie! you lost nothing!\n\nYou have: ⏣ **${user2.money.toLocaleString()}**\n\n**${
              message.author.username
            }** Rolled \`${int1}\`! <a:wheel:883978179214196746>\n**${
              client.user.username
            }** Rolled \`${int2}\`! <a:wheel:883978179214196746>`
                    )
                    .setColor("#000000");
                return message.channel.send(embed10);
            } else {
                user2.money = parseInt(user2.money) + parseInt(args[0]);
                fs.writeFile(user, JSON.stringify(user2), function writeJSON(err) {
                    if (err) {
                        return message.channel.send("Something went wrong on our database");
                    } else {
                        const embed11 = new Discord.MessageEmbed()
                            .setTitle(`${message.author.username}'s winning QQ game`)
                            .setDescription(
                                `You won **${parseInt(
              args[0]
            ).toLocaleString()}**\nNew Balance: ⏣ **${user2.money.toLocaleString()}**\n\n**${
              message.author.username
            }** Rolled \`${int1}\`! <a:wheel:883978179214196746>\n**${
              client.user.username
            }** Rolled \`${int2}\`! <a:wheel:883978179214196746>`
                            )
                            .setColor("#00FF00")
                            .setTimestamp();
                        return message.channel.send(embed11)
                    }
                });
            }
            limitation3.add(message.author.id);
            setTimeout(() => {
                limitation3.delete(message.author.id);
            }, 6000);
        } catch (error) {
            console.log(error)
            return message.channel.send(
                `Failure on database found, please chat firstly before run command (auto create account doesn't read your action).`
            );
        }
    } else if (command == "csnb") {
        return message.channel.send(
            `💫 ${message.author.username}, This command is disabled because it causes the infinite bug is also almost unusable`
        );
    } else if (command == "drop" || command == "giveaway") {
        return message.channel.send("Disabled due Disk Overloading.");
        if (limitation10.has(message.author.id)) {
            return message.channel.send(
                `:stopwatch: | **${message.author.username}**! Please wait **10** seconds and try again!`
            );
        }
        try {
            let channelxd = `./channels/` + message.channel.id + ".json";
            let channelxd2 = require(channelxd);
            let user = `./newusers/` + message.author.id + ".json";
            let user2 = require(user);
            const channelbot = message.channel.id;
            if (user2.playid == 1) {
                return message.channel.send("you cannot make any transaction for now");
            } else if (args[0] < 100) {
                return message.channel.send(`You must drop more than 100.`);
            } else if (user2.drop == 1) {
                return message.channel.send(
                    "You must wait untill someone collect your wallet."
                );
            } else if (args[0] < 100) {
                return message.channel.send(`You can't drop less than 1000.`);
            } else if (args[0] > 200000) {
                return message.channel.send("You can't drop more than 200000");
            } else if (Number.isNaN(+args[0]) == true) {
                return message.channel.send(
                    "are you dumb? you must put numbers you want to drop away."
                );
            } else if (user2.money < args[0]) {
                return message.channel.send("You don't have enough gems to drop away.");
            } else {
                user2.money = parseInt(user2.money) - parseInt(args[0]);
                channelxd2.channelgems =
                    parseInt(channelxd2.channelgems) + parseInt(args[0]);
                fs.writeFile(user, JSON.stringify(user2), function writeJSON(err) {
                    if (err) {
                        return message.channel.send("Something went wrong on our database");
                    } else {
                        message.channel.send(
                            `${message.author.username} dropped ${args[0]} gems on <#${
                message.channel.id
              }>`
                        );
                    }
                });
                fs.writeFile(channelxd, JSON.stringify(channelxd2), function writeJSON(
                    err
                ) {
                    if (err) {
                        return message.channel.send("Something went wrong on our database");
                    } else {
                        message.channel.send(
                            "There is a total of `" +
                            channelxd2.channelgems.toLocaleString() +
                            "` gems in this channel! `.pickup` to claim gems!"
                        );
                    }
                });
            }
            limitation10.add(message.author.id);
            setTimeout(() => {
                limitation10.delete(message.author.id);
            }, 10000);
        } catch (err) {
            return message.channel.send(
                `Failure on database found, please chat firstly before run command (auto create account doesn't read your action).`
            );
        }
    } else if (command == "pickup") {
        if (limitation10.has(message.author.id)) {
            return message.channel.send(
                `:stopwatch: | **${message.author.username}**! Please wait **10** seconds and try again!`
            );
        }
        try {
            let channelxd = `./channels/` + message.channel.id + ".json";
            let channelxd2 = require(channelxd);
            let user = `./newusers/` + message.author.id + ".json";
            let user2 = require(user);
            if (user2.playid == 1) {
                return message.channel.send("you cannot make any transaction for now");
            } else {
                if (user2.money == 0) {
                    return message.channel.send(
                        `${message.author.tag} you dont even have money to pickup.`
                    );
                } else if (!args[0]) {
                    return message.channel.send("Please put amount do you want to pickup.");
                } else if (Number.isNaN(+args[0]) == true) {
                    return message.channel.send(
                        "are you dumb? you must put numbers you want to drop away."
                    );
                } else if (args[0] < 100) {
                    return message.channel.send(`You must drop more than 100.`);
                } else if (user2.money < args[0] && args[0] > channelxd2.channelgems) {
                    return message.channel.send(
                        `**${message.author.tag}**, you can only pick up as much as you have!`
                    );
                } else if (user2.money == args[0] && channelxd2.channelgems == 0) {
                    user2.money = parseInt(user2.money) - parseInt(args[0]);
                    channelxd2.channelgems =
                        parseInt(channelxd2.channelgems) + parseInt(args[0]);
                    fs.writeFile(user, JSON.stringify(user2), function writeJSON(err) {
                        if (err) {
                            return message.channel.send(
                                "Something went wrong on our database"
                            );
                        } else {
                            return message.channel.send(
                                `:moneybag: | **${
                  message.author.tag
                }** dropped **${args[0].toLocaleString()}** gems in this channel`
                            );
                        }
                    });
                    fs.writeFile(
                        channelxd,
                        JSON.stringify(channelxd2),
                        function writeJSON(err) {
                            if (err) {
                                return message.channel.send(
                                    "Something went wrong on our database"
                                );
                            } else {
                                return message.channel.send(
                                    `There is **${channelxd2.channelgems.toLocaleString()}** gems in this channel.`
                                );
                            }
                        }
                    );
                } else if (
                    user2.money == args[0] &&
                    user2.money > channelxd2.channelgems
                ) {
                    user2.money = parseInt(user2.money) - parseInt(args[0]);
                    channelxd2.channelgems =
                        parseInt(channelxd2.channelgems) + parseInt(args[0]);
                    fs.writeFile(user, JSON.stringify(user2), function writeJSON(err) {
                        if (err) {
                            return message.channel.send(
                                "Something went wrong on our database"
                            );
                        } else {
                            return message.channel.send(
                                `:moneybag: | **${
                  message.author.tag
                }** dropped **${args[0].toLocaleString()}** gems in this channel`
                            );
                        }
                    });
                    fs.writeFile(
                        channelxd,
                        JSON.stringify(channelxd2),
                        function writeJSON(err) {
                            if (err) {
                                return message.channel.send(
                                    "Something went wrong on our database"
                                );
                            } else {
                                return message.channel.send(
                                    `There is **${channelxd2.channelgems.toLocaleString()}** gems in this channel.`
                                );
                            }
                        }
                    );
                } else if (
                    user2.money == args[0] &&
                    user2.money < channelxd2.channelgems
                ) {
                    user2.money = parseInt(user2.money) + parseInt(args[0]);
                    channelxd2.channelgems =
                        parseInt(channelxd2.channelgems) - parseInt(args[0]);
                    fs.writeFile(user, JSON.stringify(user2), function writeJSON(err) {
                        if (err) {
                            return message.channel.send(
                                "Something went wrong on our database"
                            );
                        } else {
                            return message.channel.send(
                                `:moneybag: | **${
                  message.author.tag
                }** you picked up **${args[0].toLocaleString()}** from this channel!`
                            );
                        }
                    });
                    fs.writeFile(
                        channelxd,
                        JSON.stringify(channelxd2),
                        function writeJSON(err) {
                            if (err) {
                                return message.channel.send(
                                    "Something went wrong on our database"
                                );
                            } else {
                                return message.channel.send(
                                    `There is **${channelxd2.channelgems.toLocaleString()}** gems in this channel.`
                                );
                            }
                        }
                    );
                } else if (user2.money > args[0] && args[0] < channelxd2.channelgems) {
                    user2.money = parseInt(user2.money) + parseInt(args[0]);
                    channelxd2.channelgems =
                        parseInt(channelxd2.channelgems) - parseInt(args[0]);
                    fs.writeFile(user, JSON.stringify(user2), function writeJSON(err) {
                        if (err) {
                            return message.channel.send(
                                "Something went wrong on our database"
                            );
                        } else {
                            return message.channel.send(
                                `:moneybag: | **${
                  message.author.tag
                }** you picked up **${args[0].toLocaleString()}** from this channel!`
                            );
                        }
                    });
                    fs.writeFile(
                        channelxd,
                        JSON.stringify(channelxd2),
                        function writeJSON(err) {
                            if (err) {
                                return message.channel.send(
                                    "Something went wrong on our database"
                                );
                            } else {
                                return message.channel.send(
                                    `There is **${channelxd2.channelgems.toLocaleString()}** gems in this channel.`
                                );
                            }
                        }
                    );
                } else if (user2.money > args[0] && args[0] > channelxd2.channelgems) {
                    user2.money = parseInt(user2.money) - parseInt(args[0]);
                    channelxd2.channelgems =
                        parseInt(channelxd2.channelgems) + parseInt(args[0]);
                    fs.writeFile(user, JSON.stringify(user2), function writeJSON(err) {
                        if (err) {
                            return message.channel.send(
                                "Something went wrong on our database"
                            );
                        } else {
                            return message.channel.send(
                                `:no_entry_sign: | **${message.author.tag}** There's no enough gems in this channel!`
                            );
                        }
                    });

                    fs.writeFile(
                        channelxd,
                        JSON.stringify(channelxd2),
                        function writeJSON(err) {
                            if (err) {
                                return message.channel.send(
                                    "Something went wrong on our database"
                                );
                            } else {
                                return message.channel.send(
                                    `:moneybag: | **${
                    message.author.tag
                  }** dropped **${args[0].toLocaleString()}** gems in this channel`
                                );
                            }
                        }
                    );
                } else {
                    user2.money = parseInt(user2.money) + parseInt(args[0]);
                    channelxd2.channelgems =
                        parseInt(channelxd2.channelgems) - parseInt(args[0]);
                    fs.writeFile(user, JSON.stringify(user2), function writeJSON(err) {
                        if (err) {
                            return message.channel.send(
                                "Something went wrong on our database"
                            );
                        } else {
                            return message.channel.send(
                                `:moneybag: | **${message.author.tag}** you picked up **${
                  args[0]
                }** from this channel!`
                            );
                        }
                    });
                    fs.writeFile(
                        channelxd,
                        JSON.stringify(channelxd2),
                        function writeJSON(err) {
                            if (err) {
                                return message.channel.send(
                                    "Something went wrong on our database"
                                );
                            } else {
                                return message.channel.send(
                                    `There is **${channelxd2.channelgems}** gems in this channel`
                                );
                            }
                        }
                    );
                }
            }
            limitation10.add(message.author.id);
            setTimeout(() => {
                limitation10.delete(message.author.id);
            }, 10000);
        } catch (err) {
            return message.channel.send(
                `Failure on database found, please chat firstly before run command (auto create account doesn't read your action).`
            );
        }
    } else if (command == "qqb") {
        return message.channel.send(`💫 ${message.author.username}, This command is disabled because it causes the infinite bug is also almost unusable.`);
    } else if (command == "beg") {
        try {
            var gems = beggems();
            var randomlol = word[Math.floor(Math.random() * word.length)];
            if (limitation11.has(message.author.id)) {
                return message
                    .reply(
                        "are you overjoyed or too poor? wait 30 seconds before begging and stop fucking begging from now."
                    )
                    .then(msg => {
                        msg.delete({
                            timeout: 8000
                        });
                    });
            }
            const bruh = beg();
            let user = `./newusers/` + message.author.id + ".json";
            let user2 = require(user);
            if (user2.ban == 1) {
                return message.channel.send(
                    "Your account has been blacklisted with reason, " +
                    user2.banreason +
                    " Silahkan Contact JzuvGTI#7245, jika kamu tidak merasa bersalah!"
                );
            } else if (bruh == 0) {
                const embed2 = new Discord.MessageEmbed()
                    .setTitle("Bot system")
                    .setDescription(
                        `OH poor little beggar take this money **${gems.toLocaleString()}** 🪙 and get better life.`
                    )
                    .setColor("RANDOM")
                    .setFooter(
                        `You recevied ${gems.toLocaleString()} ⏣ for being beggar LOL`,
                        message.author.displayAvatarURL({
                            dynamic: true
                        })
                    )
                    .setTimestamp(); //OH poor little beggar take this money and get better life
                user2.money = parseInt(user2.money) + parseInt(gems);
                fs.writeFile(user, JSON.stringify(user2), function writeJSON(err) {
                    if (err) {
                        return message.channel.send("Something went wrong on our database");
                    } else {
                        return message.channel.send(embed2);
                    }
                });
            } else if (user2.playid == 1) {
                return message.channel.send("you cannot make any transaction for now");
            } else if (bruh == 1) {
                const embed1 = new Discord.MessageEmbed()
                    .setTitle(randomlol)
                    .setDescription(
                        `No money for beggars i'm developing north korean nuclear`
                    )
                    .setColor("RANDOM")
                    .setFooter(
                        `Imagine rejected while begging lol`,
                        message.author.displayAvatarURL({
                            dynamic: true
                        })
                    )
                    .setTimestamp();
                return message.channel.send(embed1);
            } else if (bruh == 2) {
                const embed2 = new Discord.MessageEmbed()
                    .setTitle(randomlol)
                    .setDescription(
                        `OH poor little beggar take this money **${gems.toLocaleString()}** 🪙 and get better life.`
                    )
                    .setColor("RANDOM")
                    .setFooter(
                        `You recevied ${gems.toLocaleString()} for being beggar LOL`,
                        message.author.displayAvatarURL({
                            dynamic: true
                        })
                    )
                    .setTimestamp();
                user2.money = parseInt(user2.money) + parseInt(gems);
                fs.writeFile(user, JSON.stringify(user2), function writeJSON(err) {
                    if (err) {
                        return message.channel.send("Something went wrong on our database");
                    } else {
                        return message.channel.send(embed2);
                    }
                });
            } else if (bruh == 3) {
                const embed3 = new Discord.MessageEmbed()
                    .setTitle(randomlol)
                    .setDescription(
                        `OH poor little beggar take this money **${gems.toLocaleString()}** 🪙 and get better life.`
                    )
                    .setColor("RANDOM")
                    .setFooter(
                        `You recevied ${gems.toLocaleString()} ⏣ for being beggar LOL`,
                        message.author.displayAvatarURL({
                            dynamic: true
                        })
                    )
                    .setTimestamp();
                user2.money = parseInt(user2.money) + parseInt(gems);
                fs.writeFile(user, JSON.stringify(user2), function writeJSON(err) {
                    if (err) {
                        return message.channel.send("Something went wrong on our database");
                    } else {
                        return message.channel.send(embed3);
                    }
                });
            } else if (bruh == 4) {
                const embed4 = new Discord.MessageEmbed()
                    .setTitle("vladimir putin")
                    .setDescription(`LOL Imagine begging to RUSSIAN President.`)
                    .setColor(gems)
                    .setFooter(
                        `Imagine rejected while begging lol`,
                        message.author.displayAvatarURL({
                            dynamic: true
                        })
                    )
                    .setTimestamp();
                message.channel.send(embed4);
            } else if (bruh == 5) {
                const embed5 = new Discord.MessageEmbed()
                    .setTitle(randomlol)
                    .setDescription(
                        `OH poor little beggar take this money **${gems.toLocaleString()}** 🪙 and get better life.`
                    )
                    .setColor("RANDOM")
                    .setFooter(
                        `You recevied ${gems.toLocaleString()} ⏣ for being beggar LOL`,
                        message.author.displayAvatarURL({
                            dynamic: true
                        })
                    )
                    .setTimestamp();
                user2.money = parseInt(user2.money) + parseInt(gems);
                fs.writeFile(user, JSON.stringify(user2), function writeJSON(err) {
                    if (err) {
                        return message.channel.send("Something went wrong on our database");
                    } else {
                        return message.channel.send(embed5);
                    }
                });
            } else if (bruh == 6) {
                const embed6 = new Discord.MessageEmbed()
                    .setTitle(randomlol)
                    .setDescription(`LOL Go fucking away from me i don't like beggar`)
                    .setColor("RANDOM")
                    .setFooter(
                        `You've been kicked from football stadium, and got nothing.`,
                        message.author.displayAvatarURL({
                            dynamic: true
                        })
                    )
                    .setTimestamp();
                message.channel.send(embed6);
            } else if (bruh == 7) {
                const embed7 = new Discord.MessageEmbed()
                    .setTitle(randomlol)
                    .setDescription(
                        `OH poor little beggar take this money **${gems.toLocaleString()}** 🪙 and get better life.`
                    )
                    .setColor("RANDOM")
                    .setFooter(
                        `You recevied ${gems.toLocaleString()} ⏣ for being beggar LOL`,
                        message.author.displayAvatarURL({
                            dynamic: true
                        })
                    )
                    .setTimestamp();
                user2.money = parseInt(user2.money) + parseInt(gems);
                fs.writeFile(user, JSON.stringify(user2), function writeJSON(err) {
                    if (err) {
                        return message.channel.send("Something went wrong on our database");
                    } else {
                        return message.channel.send(embed7);
                    }
                });
            } else if (bruh == 8) {
                const embed8 = new Discord.MessageEmbed()
                    .setTitle(randomlol)
                    .setDescription(`Get away from me, or ill call my bodyguards.`)
                    .setColor("RANDOM")
                    .setFooter(
                        `Imagine rejected while begging lol`,
                        message.author.displayAvatarURL({
                            dynamic: true
                        })
                    )
                    .setTimestamp();
                message.channel.send(embed8);
            } else if (bruh == 9) {
                const embed9 = new Discord.MessageEmbed()
                    .setTitle(randomlol)
                    .setDescription(
                        `OH poor little beggar take this money **${gems.toLocaleString()}** 🪙 and get better life.`
                    )
                    .setColor("RANDOM")
                    .setFooter(
                        `You recevied ${gems.toLocaleString()} ⏣ for being beggar LOL`,
                        message.author.displayAvatarURL({
                            dynamic: true
                        })
                    )
                    .setTimestamp();
                user2.money = parseInt(user2.money) + parseInt(gems);
                fs.writeFile(user, JSON.stringify(user2), function writeJSON(err) {
                    if (err) {
                        return message.channel.send("Something went wrong on our database");
                    } else {
                        return message.channel.send(embed9);
                    }
                });
            } else if (bruh == 10) {
                const embed10 = new Discord.MessageEmbed()
                    .setTitle(randomlol)
                    .setDescription(`Get the fuck off from my titanic you made it dirty.`)
                    .setColor("RANDOM")
                    .setFooter(
                        `Imagine rejected while begging lol`,
                        message.author.displayAvatarURL({
                            dynamic: true
                        })
                    )
                    .setTimestamp();
                message.channel.send(embed10);
            } else if (bruh == 11) {
                const embed11 = new Discord.MessageEmbed()
                    .setTitle(randomlol)
                    .setDescription(
                        `You've sex for first time, government paid you ${gems.toLocaleString()} ⏣ `
                    )
                    .setColor("RANDOM")
                    .setFooter(
                        `You recevied ${gems.toLocaleString()} ⏣ for being beggar LOL`,
                        message.author.displayAvatarURL({
                            dynamic: true
                        })
                    )
                    .setTimestamp();
                user2.money = parseInt(user2.money) + parseInt(gems);
                fs.writeFile(user, JSON.stringify(user2), function writeJSON(err) {
                    if (err) {
                        return message.channel.send("Something went wrong on our database");
                    } else {
                        return message.channel.send(embed11);
                    }
                });
            } else if (bruh == 12) {
                const embed12 = new Discord.MessageEmbed()
                    .setTitle(randomlol)
                    .setDescription(
                        `OH poor little beggar take this money **${gems.toLocaleString()}** 🪙 and get better life.`
                    )
                    .setColor("RANDOM")
                    .setFooter(
                        `You recevied ${gems.toLocaleString()} ⏣ for being beggar LOL`,
                        message.author.displayAvatarURL({
                            dynamic: true
                        })
                    )
                    .setTimestamp();
                user2.money = parseInt(user2.money) + parseInt(gems);
                fs.writeFile(user, JSON.stringify(user2), function writeJSON(err) {
                    if (err) {
                        return message.channel.send("Something went wrong on our database");
                    } else {
                        return message.channel.send(embed12);
                    }
                });
            } else if (bruh == 13) {
                const embed13 = new Discord.MessageEmbed()
                    .setTitle(randomlol)
                    .setDescription(
                        `OH poor little beggar take this money **${gems.toLocaleString()}** 🪙 and get better life.`
                    )
                    .setColor("RANDOM")
                    .setFooter(
                        `You recevied ${gems.toLocaleString()} ⏣ for being beggar LOL`,
                        message.author.displayAvatarURL({
                            dynamic: true
                        })
                    )
                    .setTimestamp();
                user2.money = parseInt(user2.money) + parseInt(gems);
                fs.writeFile(user, JSON.stringify(user2), function writeJSON(err) {
                    if (err) {
                        return message.channel.send("Something went wrong on our database");
                    } else {
                        return message.channel.send(embed13);
                    }
                });
            } else if (bruh == 14) {
                const embed14 = new Discord.MessageEmbed()
                    .setTitle(randomlol)
                    .setDescription(
                        `Stop looking me with pervert or i'll call my guard, and kick your ass.`
                    )
                    .setColor("RANDOM")
                    .setFooter(
                        `Imagine rejected while begging lol`,
                        message.author.displayAvatarURL({
                            dynamic: true
                        })
                    )
                    .setTimestamp();
                message.channel.send(embed14);
            } else if (bruh == 15) {
                const embed15 = new Discord.MessageEmbed()
                    .setTitle(randomlol)
                    .setDescription(
                        `OH poor little beggar take this money **${gems.toLocaleString()}** 🪙 and get better life.`
                    )
                    .setColor("RANDOM")
                    .setFooter(
                        `Imagine rejected while begging lol`,
                        message.author.displayAvatarURL({
                            dynamic: true
                        })
                    )
                    .setTimestamp();
                user2.money = parseInt(user2.money) + parseInt(gems);
                fs.writeFile(user, JSON.stringify(user2), function writeJSON(err) {
                    if (err) {
                        return message.channel.send("Something went wrong on our database");
                    } else {
                        return message.channel.send(embed15);
                    }
                });
            } else if (bruh == 16) {
                const embed16 = new Discord.MessageEmbed()
                    .setTitle(randomlol)
                    .setDescription(
                        `There is no money for you, but there is a you in gulag`
                    )
                    .setColor("RANDOM")
                    .setFooter(
                        `Imagine rejected while begging lol`,
                        message.author.displayAvatarURL({
                            dynamic: true
                        })
                    )
                    .setTimestamp();
                message.channel.send(embed16);
            } else if (bruh == 17) {
                const embed17 = new Discord.MessageEmbed()
                    .setTitle(randomlol)
                    .setDescription(
                        `what are you doing, go in with the SS troops and defend BERLIN `
                    )
                    .setColor("RANDOM")
                    .setFooter(
                        `Imagine rejected while begging lol`,
                        message.author.displayAvatarURL({
                            dynamic: true
                        })
                    )
                    .setTimestamp();
                message.channel.send(embed17);
            } else if (bruh == 18) {
                const embed18 = new Discord.MessageEmbed()
                    .setTitle(randomlol)
                    .setDescription(`I bet you're bored at least you've your iphone.`)
                    .setColor("RANDOM")
                    .setFooter(
                        `Imagine rejected while begging lol`,
                        message.author.displayAvatarURL({
                            dynamic: true
                        })
                    )
                    .setTimestamp();
                message.channel.send(embed18);
            } else if (bruh == 19) {
                const embed19 = new Discord.MessageEmbed()
                    .setTitle(randomlol)
                    .setDescription(`Are you exploring blackhole now?`)
                    .setColor("RANDOM")
                    .setFooter(
                        `Imagine rejected while begging lol`,
                        message.author.displayAvatarURL({
                            dynamic: true
                        })
                    )
                    .setTimestamp();
                message.channel.send(embed19);
            } else if (bruh == 20) {
                const embed20 = new Discord.MessageEmbed()
                    .setTitle(randomlol)
                    .setDescription(
                        `OH poor little beggar take this money **${gems.toLocaleString()}** 🪙 and get better life.`
                    )
                    .setColor("RANDOM")
                    .setFooter(
                        `Imagine rejected while begging lol`,
                        message.author.displayAvatarURL({
                            dynamic: true
                        })
                    )
                    .setTimestamp();
                user2.money = parseInt(user2.money) + parseInt(gems);
                fs.writeFile(user, JSON.stringify(user2), function writeJSON(err) {
                    if (err) {
                        return message.channel.send("Seperti nya ada yang error di database bot, Silahkan Contact JzuvGTI#7245");
                    } else {
                        return message.channel.send(embed20);
                    }
                });
            } else {
                const embed10 = new Discord.MessageEmbed()
                    .setTitle("JzuvGTI")
                    .setDescription(`LoL What You Do???.`)
                    .setColor("RANDOM")
                    .setFooter(
                        `Imagine rejected while begging lol`,
                        message.author.displayAvatarURL({
                            dynamic: true
                        })
                    )
                    .setTimestamp();
                message.channel.send(embed10);
            }
            limitation11.add(message.author.id);
            setTimeout(() => {
                limitation11.delete(message.author.id);
            }, 30000);
        } catch (err) {
            console.log(err);
            return message.channel.send(
                `Failure on database found, please chat firstly before run command (auto create account doesn't read your action).`
            );
        }
    } else if (command == "bj") {
        try {
            let user = `./newusers/` + message.author.id + ".json";
            let user2 = require(user);
            const amount = args[0];
            if (user2.playid == 1) {
                return message.channel.send("you are playing another game");
            }
            if (user2.money < 100) {
                return message.channel.send("You atleast need 100 gems?");
            }
            if (parseInt(amount) > parseInt(user2.money)) {
                return message.channel.send("you don't have enough money.");
            } else if (message.content.includes("-")) {
                return message.channel.send("you cannot bet negative amount.");
            } else if (args[0] > 200000) {
                return message.channel.send("bet can't be more than 200,000");
            } else if (args[0] == "max") {
                if (user2.money > 200000) {
                    args[0] = 200000;
                } else {
                    args[0] = user2.money;
                }
            } else if (!args[0]) {
                return message.channel.send(`You need to bet something more than ⏣ 100.`)
            } else if (Number.isNaN(+args[0]) == true) {
                return message.channel.send(`You need to bet something, use your brain cells.`);
            }
            user2.playid = 1;
            fs.writeFile(user, JSON.stringify(user2), function writeJSON(err) {
                if (err) console.log(err);
                else {
                    console.log(`${message.author.tag} i Set your play ID to 1`);
                }
            });
            var player1 = bj();
            var player2 = bj();
            const embed2 = new Discord.MessageEmbed()
                .setTitle(`${message.author.username}'s BJ game`)
                .setDescription(`Betting BJ **${parseInt(
							args[0]
							).toLocaleString()}**\n${message.author.username}'s Balance: ⏣ **${user2.money.toLocaleString()}**\n\n**${
							message.author.username
							}** Rolled \`${player1}\`!\n**${
							client.user.username
							}** Rolled \`?\`!\n\nReact 👊 to gets more value\nReact 🛑 to stops value\nReact 🚫 to cancel the game`)
                .setColor("#00FF00")
                .setTimestamp();
            let msg = await message.channel.send(embed2)
            await msg.react("👊")
            await msg.react("🛑")
            await msg.react("🚫")
            const filter = (reaction, user) => {
                return [`👊`, `🛑`, `🚫`].includes(reaction.emoji.name) && user.id === message.author.id
            }
            msg.awaitReactions(filter, {
                max: 1,
                time: 20000,
                error: ["time"]
            }).then(
                async (collected) => {
                    const reaction = collected.first()
                    console.log(reaction);
                    if (reaction.emoji.name == "👊") {
                        player1 = player1 + bj();
                        if (player2 < 10) {
                            player2 = player2 + bj();
                        }
                        if (player1 > 21 && player2 > 21) {
                            user2.playid = 0;
                            fs.writeFile(user, JSON.stringify(user2), function writeJSON(err) {
                                if (err) {
                                    return message.channel.send("Fucks da error");
                                } else {
                                    let result3 = new Discord.MessageEmbed()
                                        .setTitle(`${message.author.username}'s TIE BJ game`)
                                        .setDescription(`Pfft both of you out of over 21 ⏣ **${parseInt(
											args[0] 
											).toLocaleString()}**\n${message.author.username}'s Balance: ⏣ **${user2.money.toLocaleString()}**\n\n**${
											message.author.username
											}** Rolled \`${player1}\`!\n**${
											client.user.username
											}** Rolled \`${player2}\`!`)
                                        .setColor("#000000")
                                        .setTimestamp();
                                    return msg.edit(result3)
                                }
                            })
                        } else if (player1 == 21 && player2 == 21) {
                            user2.playid = 0;
                            fs.writeFile(user, JSON.stringify(user2), function writeJSON(err) {
                                if (err) {
                                    return message.channel.send("Fucks da error");
                                } else {
                                    let result3 = new Discord.MessageEmbed()
                                        .setTitle(`${message.author.username}'s TIE BJ game`)
                                        .setDescription(`Pfft both of you out of over 21 ⏣ **${parseInt(
											args[0] 
											).toLocaleString()}**\n${message.author.username}'s Balance: ⏣ **${user2.money.toLocaleString()}**\n\n**${
											message.author.username
											}** Rolled \`${player1}\`!\n**${
											client.user.username
											}** Rolled \`${player2}\`!`)
                                        .setColor("#000000")
                                        .setTimestamp();
                                    return msg.edit(result3)
                                }
                            })
                        } else if (player1 > 21) {
                            console.log(`case 1`)
                            user2.money = parseInt(user2.money) - parseInt(args[0]);
                            user2.playid = 0;
                            fs.writeFile(user, JSON.stringify(user2), function writeJSON(err) {
                                if (err) {
                                    return message.channel.send("Fucks da error");
                                } else {
                                    let result = new Discord.MessageEmbed()
                                        .setTitle(`${message.author.username}'s Losing BJ game`)
                                        .setDescription(`LOST ⏣ **${parseInt(
											args[0]
											).toLocaleString()}**\n${message.author.username}'s Balance: ⏣ **${user2.money.toLocaleString()}**\n\n**${
											message.author.username
											}** Rolled \`${player1}\`!\n**${
											client.user.username
											}** Rolled \`${player2}\`!`)
                                        .setColor("#FF0000")
                                        .setTimestamp();
                                    return msg.edit(result)
                                }
                            })
                        } else if (player2 > 21) {
                            console.log(`case 1`)
                            user2.money = parseInt(user2.money) + parseInt(args[0]);
                            user2.playid = 0;
                            fs.writeFile(user, JSON.stringify(user2), function writeJSON(err) {
                                if (err) {
                                    return message.channel.send("Fucks da error");
                                } else {
                                    let result2 = new Discord.MessageEmbed()
                                        .setTitle(`${message.author.username}'s WINNING BJ game`)
                                        .setDescription(`WON ⏣ **${parseInt(
											args[0]
											).toLocaleString()}**\n${message.author.username}'s Balance: ⏣ **${user2.money.toLocaleString()}**\n\n**${
											message.author.username
											}** Rolled \`${player1}\`!\n**${
											client.user.username
											}** Rolled \`${player2}\`!`)
                                        .setColor("#00FF00")
                                        .setTimestamp();
                                    return msg.edit(result2)
                                }
                            })
                        } else if (player1 == player2) {
                            user2.playid = 0;
                            fs.writeFile(user, JSON.stringify(user2), function writeJSON(err) {
                                if (err) {
                                    return message.channel.send("Fucks da error");
                                } else {
                                    let result3 = new Discord.MessageEmbed()
                                        .setTitle(`${message.author.username}'s TIE BJ game`)
                                        .setDescription(`Nobody lost ⏣ **${parseInt(
											args[0] 
											).toLocaleString()}**\n${message.author.username}'s Balance: ⏣ **${user2.money.toLocaleString()}**\n\n**${
											message.author.username
											}** Rolled \`${player1}\`!\n**${
											client.user.username
											}** Rolled \`${player2}\`!`)
                                        .setColor("#000000")
                                        .setTimestamp();
                                    return msg.edit(result3)
                                }
                            })
                        } else if (player1 == 21) {
                            console.log(`case 1`)
                            user2.money = parseInt(user2.money) + parseInt(args[0]);
                            user2.playid = 0;
                            fs.writeFile(user, JSON.stringify(user2), function writeJSON(err) {
                                if (err) {
                                    return message.channel.send("Fucks da error");
                                } else {
                                    let result3 = new Discord.MessageEmbed()
                                        .setTitle(`${message.author.username}'s WINNING BJ game`)
                                        .setDescription(`WON ⏣ **${parseInt(
											args[0]
											).toLocaleString()}**\n${message.author.username}'s Balance: ⏣ **${user2.money.toLocaleString()}**\n\n**${
											message.author.username
											}** Rolled \`${player1}\`!\n**${
											client.user.username
											}** Rolled \`${player2}\`!`)
                                        .setColor("#00FF00")
                                        .setTimestamp();
                                    return msg.edit(result3)
                                }
                            })
                        } else if (player2 == 21) {
                            console.log(`case 1`)
                            user2.money = parseInt(user2.money) - parseInt(args[0]);
                            user2.playid = 0;
                            fs.writeFile(user, JSON.stringify(user2), function writeJSON(err) {
                                if (err) {
                                    return message.channel.send("Fucks da error");
                                } else {
                                    let result3 = new Discord.MessageEmbed()
                                        .setTitle(`${message.author.username}'s LOSING BJ game`)
                                        .setDescription(`LOST ⏣ **${parseInt(
											args[0]
											).toLocaleString()}**\n${message.author.username}'s Balance: ⏣ **${user2.money.toLocaleString()}**\n\n**${
											message.author.username
											}** Rolled \`${player1}\`!\n**${
											client.user.username
											}** Rolled \`${player2}\`!`)
                                        .setColor("#FF0000")
                                        .setTimestamp();
                                    return msg.edit(result3)
                                }
                            })
                        } else if (player1 > player2) {
                            console.log(`case 1`)
                            user2.money = parseInt(user2.money) + parseInt(args[0]);
                            user2.playid = 0;
                            fs.writeFile(user, JSON.stringify(user2), function writeJSON(err) {
                                if (err) {
                                    return message.channel.send("Fucks da error");
                                } else {
                                    let result3 = new Discord.MessageEmbed()
                                        .setTitle(`${message.author.username}'s WINNING BJ game`)
                                        .setDescription(`WON ⏣ **${parseInt(
											args[0]
											).toLocaleString()}**\n${message.author.username}'s Balance: ⏣ **${user2.money.toLocaleString()}**\n\n**${
											message.author.username
											}** Rolled \`${player1}\`!\n**${
											client.user.username
											}** Rolled \`${player2}\`!`)
                                        .setColor("#00FF00")
                                        .setTimestamp();
                                    return msg.edit(result3)
                                }
                            })
                        } else if (player1 < player2) {
                            user2.money = parseInt(user2.money) - parseInt(args[0]);
                            user2.playid = 0;
                            fs.writeFile(user, JSON.stringify(user2), function writeJSON(err) {
                                if (err) {
                                    return message.channel.send("Fucks da error");
                                } else {
                                    let result3 = new Discord.MessageEmbed()
                                        .setTitle(`${message.author.username}'s LOSING BJ game`)
                                        .setDescription(`LOST ⏣ **${parseInt(
											args[0]
											).toLocaleString()}**\n${message.author.username}'s Balance: ⏣ **${user2.money.toLocaleString()}**\n\n**${
											message.author.username
											}** Rolled \`${player1}\`!\n**${
											client.user.username
											}** Rolled \`${player2}\`!`)
                                        .setColor("#FF0000")
                                        .setTimestamp();
                                    return msg.edit(result3)
                                }
                            })
                        }
                    } else if (reaction.emoji.name == "🛑") {
                        if (player2 < 10) {
                            player2 = player2 + bj();
                        }
                        if (player1 > 21) {
                            console.log(`case 1`)
                            user2.money = parseInt(user2.money) - parseInt(args[0]);
                            user2.playid = 0;
                            fs.writeFile(user, JSON.stringify(user2), function writeJSON(err) {
                                if (err) {
                                    return message.channel.send("Fucks da error");
                                } else {
                                    let result = new Discord.MessageEmbed()
                                        .setTitle(`${message.author.username}'s Losing BJ game`)
                                        .setDescription(`LOST ⏣ **${parseInt(
											args[0]
											).toLocaleString()}**\n${message.author.username}'s Balance: ⏣ **${user2.money.toLocaleString()}**\n\n**${
											message.author.username
											}** Rolled \`${player1}\`!\n**${
											client.user.username
											}** Rolled \`${player2}\`!`)
                                        .setColor("#FF0000")
                                        .setTimestamp();
                                    return msg.edit(result)
                                }
                            })
                        } else if (player2 > 21) {
                            console.log(`case 1`)
                            user2.money = parseInt(user2.money) + parseInt(args[0]);
                            user2.playid = 0;
                            fs.writeFile(user, JSON.stringify(user2), function writeJSON(err) {
                                if (err) {
                                    return message.channel.send("Fucks da error");
                                } else {
                                    let result2 = new Discord.MessageEmbed()
                                        .setTitle(`${message.author.username}'s WINNING BJ game`)
                                        .setDescription(`WON ⏣ **${parseInt(
											args[0]
											).toLocaleString()}**\n${message.author.username}'s Balance: ⏣ **${user2.money.toLocaleString()}**\n\n**${
											message.author.username
											}** Rolled \`${player1}\`!\n**${
											client.user.username
											}** Rolled \`${player2}\`!`)
                                        .setColor("#00FF00")
                                        .setTimestamp();
                                    return msg.edit(result2)
                                }
                            })
                        } else if (player1 == player2) {
                            user2.playid = 0;
                            fs.writeFile(user, JSON.stringify(user2), function writeJSON(err) {
                                if (err) {
                                    return message.channel.send("Fucks da error");
                                } else {
                                    let result3 = new Discord.MessageEmbed()
                                        .setTitle(`${message.author.username}'s TIE BJ game`)
                                        .setDescription(`Nobody lost ⏣ **${parseInt(
											args[0] 
											).toLocaleString()}**\n${message.author.username}'s Balance: ⏣ **${user2.money.toLocaleString()}**\n\n**${
											message.author.username
											}** Rolled \`${player1}\`!\n**${
											client.user.username
											}** Rolled \`${player2}\`!`)
                                        .setColor("#000000")
                                        .setTimestamp();
                                    return msg.edit(result3)
                                }
                            })
                        } else if (player1 > 21 && player2 > 21) {
                            user2.playid = 0;
                            fs.writeFile(user, JSON.stringify(user2), function writeJSON(err) {
                                if (err) {
                                    return message.channel.send("Fucks da error");
                                } else {
                                    let result3 = new Discord.MessageEmbed()
                                        .setTitle(`${message.author.username}'s TIE BJ game`)
                                        .setDescription(`Pfft both of you out of over 21 ⏣ **${parseInt(
											args[0] 
											).toLocaleString()}**\n${message.author.username}'s Balance: ⏣ **${user2.money.toLocaleString()}**\n\n**${
											message.author.username
											}** Rolled \`${player1}\`!\n**${
											client.user.username
											}** Rolled \`${player2}\`!`)
                                        .setColor("#000000")
                                        .setTimestamp();
                                    return msg.edit(result3)
                                }
                            })
                        } else if (player1 == 21 && player2 == 21) {
                            user2.playid = 0;
                            fs.writeFile(user, JSON.stringify(user2), function writeJSON(err) {
                                if (err) {
                                    return message.channel.send("Fucks da error");
                                } else {
                                    let result3 = new Discord.MessageEmbed()
                                        .setTitle(`${message.author.username}'s TIE BJ game`)
                                        .setDescription(`Pfft both of you out of over 21 ⏣ **${parseInt(
											args[0] 
											).toLocaleString()}**\n${message.author.username}'s Balance: ⏣ **${user2.money.toLocaleString()}**\n\n**${
											message.author.username
											}** Rolled \`${player1}\`!\n**${
											client.user.username
											}** Rolled \`${player2}\`!`)
                                        .setColor("#000000")
                                        .setTimestamp();
                                    return msg.edit(result3)
                                }
                            })
                        } else if (player1 == 21) {
                            console.log(`case 1`)
                            user2.money = parseInt(user2.money) + parseInt(args[0]);
                            user2.playid = 0;
                            fs.writeFile(user, JSON.stringify(user2), function writeJSON(err) {
                                if (err) {
                                    return message.channel.send("Fucks da error");
                                } else {
                                    let result3 = new Discord.MessageEmbed()
                                        .setTitle(`${message.author.username}'s WINNING BJ game`)
                                        .setDescription(`WON ⏣ **${parseInt(
											args[0]
											).toLocaleString()}**\n${message.author.username}'s Balance: ⏣ **${user2.money.toLocaleString()}**\n\n**${
											message.author.username
											}** Rolled \`${player1}\`!\n**${
											client.user.username
											}** Rolled \`${player2}\`!`)
                                        .setColor("#00FF00")
                                        .setTimestamp();
                                    return msg.edit(result3)
                                }
                            })
                        } else if (player2 == 21) {
                            console.log(`case 1`)
                            user2.money = parseInt(user2.money) - parseInt(args[0]);
                            user2.playid = 0;
                            fs.writeFile(user, JSON.stringify(user2), function writeJSON(err) {
                                if (err) {
                                    return message.channel.send("Fucks da error");
                                } else {
                                    let result3 = new Discord.MessageEmbed()
                                        .setTitle(`${message.author.username}'s LOSING BJ game`)
                                        .setDescription(`LOST ⏣ **${parseInt(
											args[0]
											).toLocaleString()}**\n${message.author.username}'s Balance: ⏣ **${user2.money.toLocaleString()}**\n\n**${
											message.author.username
											}** Rolled \`${player1}\`!\n**${
											client.user.username
											}** Rolled \`${player2}\`!`)
                                        .setColor("#FF0000")
                                        .setTimestamp();
                                    return msg.edit(result3)
                                }
                            })
                        } else if (player1 > player2) {
                            user2.money = parseInt(user2.money) + parseInt(args[0]);
                            user2.playid = 0;
                            fs.writeFile(user, JSON.stringify(user2), function writeJSON(err) {
                                if (err) {
                                    return message.channel.send("Fucks da error");
                                } else {
                                    let result3 = new Discord.MessageEmbed()
                                        .setTitle(`${message.author.username}'s WINNING BJ game`)
                                        .setDescription(`WON ⏣ **${parseInt(
											args[0]
											).toLocaleString()}**\n${message.author.username}'s Balance: ⏣ **${user2.money.toLocaleString()}**\n\n**${
											message.author.username
											}** Rolled \`${player1}\`!\n**${
											client.user.username
											}** Rolled \`${player2}\`!`)
                                        .setColor("#00FF00")
                                        .setTimestamp();
                                    return msg.edit(result3)
                                }
                            })
                        } else if (player1 < player2) {
                            user2.money = parseInt(user2.money) - parseInt(args[0]);
                            user2.playid = 0;
                            fs.writeFile(user, JSON.stringify(user2), function writeJSON(err) {
                                if (err) {
                                    return message.channel.send("Fucks da error");
                                } else {
                                    let result3 = new Discord.MessageEmbed()
                                        .setTitle(`${message.author.username}'s LOSING BJ game`)
                                        .setDescription(`LOST ⏣ **${parseInt(
											args[0]
											).toLocaleString()}**\n${message.author.username}'s Balance: ⏣ **${user2.money.toLocaleString()}**\n\n**${
											message.author.username
											}** Rolled \`${player1}\`!\n**${
											client.user.username
											}** Rolled \`${player2}\`!`)
                                        .setColor("#FF0000")
                                        .setTimestamp();
                                    return msg.edit(result3)
                                }
                            })
                        }
                    } else if (reaction.emoji.name == "🚫") {
                        user2.playid = 0;
                        user2.money = parseInt(user2.money) - parseInt(args[0]);
                        fs.writeFile(user, JSON.stringify(user2), function writeJSON(err) {
                            if (err) {
                                return console.log(err);
                            } else {
                                let result3 = new Discord.MessageEmbed()
                                    .setTitle(`${message.author.username}'s Cancled the game`)
                                    .setDescription(`**${message.author.username}** canceled the game automatically lost ${parseInt(args[0])}\n$**${message.author.username}**'s Balance: ⏣ **${user2.money.toLocaleString()}**`)
                                    .setColor("#FF0000")
                                    .setTimestamp();
                                return msg.edit(result3)
                            }
                        })
                    }
                }).catch(() => {
                user2.playid = 0;
                user2.money = parseInt(user2.money) - parseInt(args[0]);
                fs.writeFile(user, JSON.stringify(user2), function writeJSON(err) {
                    if (err) console.log(err);
                    else {
                        console.log(`${message.author.tag} i Set your play ID to 1`);
                    }
                });

                return message.channel.send(`:stopwatch: | **${message.author.username }** passed the appointed time **20** seconds, you immediately lost ⏣ **${args[0].toLocaleString()}**.`);
            })
        } catch (err) {

        }
    } else if (command == "rich") {
        if (limitation12.has(message.author.id)) {
            message
                .reply("Wait **__30 minutes__** before run this command.")
                .then(msg => {
                    msg.delete({
                        timeout: 5000
                    });
                });
        }
        try {
            let user = `./newusers/` + message.author.id + ".json";
            let user2 = require(user);
            var chance = parseInt(user2.money) / 3000000
            var chance2 = chance * 100
            const data = fs.readFileSync('./rich.txt', {
                encoding: 'utf8',
                flag: 'r'
            });

            if (chance2 > 100) {
                var bruhs = parseInt(chance2.toLocaleString()) - 100
                let result3 = new Discord.MessageEmbed()
                    .setTitle(`Top Rich users`)
                    .setDescription(`${data}\n\nyou are one of the richest user with percentage **${bruhs}%**.`)
                    .setColor("#FF0000")
                    .setTimestamp();
                return message.channel.send(result3)
                limitation.add(message.author.id);
            } else if (chance2 < 100) {
                let result4 = new Discord.MessageEmbed()
                    .setTitle(`Top Rich users`)
                    .setDescription(`${data}\nYou have **${chance2.toLocaleString()}%** chance to enter the leaderboard.`)
                    .setColor("#FF0000")
                    .setTimestamp();
                return message.channel.send(result4)
            } else {
                let result3 = new Discord.MessageEmbed()
                    .setTitle(`Top Rich users`)
                    .setDescription(`${data}\nyou are one of the richest user with percentage **${chance2.toLocaleString()}%**.`)
                    .setColor("#FF0000")
                    .setTimestamp();
                return message.channel.send(result3)
            }
            setTimeout(() => {
                limitation.delete(message.author.id);
            }, 1800);
        } catch (err) {
            console.log(err)
        }
    } else if (command == "updaterich") {
        if (updaterich == true) {
            return message.channel.send(`:stopwatch: | **${message.author.username}** Please wait **5 minutes** to use this command.`);
        } else
            updaterich = true;
        message.channel.send(`${message.author.username}, thanks for updating.`);
        fs.writeFile('rich.txt', `🎖 Last Update from **${message.author.tag}**\n⭐ Do **${prefix}updaterich** to update rich classement or gems amount.\n`, function() {
            console.log('done')
        })
        try {
            fs.readdir("./newusers", (err, files) => {
                var filter = files.filter(f => f.split('.').pop() === "json");
                for (i = 0; i < filter.length; i++) {
                    let user = `./newusers/` + filter[i];
                    let user2 = require(user);
                    console.log(user2.money)
                    if (user2.money + user2.deposit > 4000000) {
                        client.users.fetch(`${user2.user}`).then((lmao) => {
                            fs.appendFileSync("rich.txt", `\n**${lmao.username}#${lmao.discriminator}** - ⏣ ${user2.money.toLocaleString()} (${user2.deposit.toLocaleString()}) 💸\n`, function(err) {
                                const data = fs.readFileSync('./rich.txt', {
                                    encoding: 'utf8',
                                    flag: 'r'
                                });
                                let result3 = new Discord.MessageEmbed()
                                    .setTitle(`Top Rich users`)
                                    .setDescription(`${data}`)
                                    .setColor("#FF0000")
                                    .setTimestamp();
                            })
                        });
                    }
                }
            })
        } catch (err) {
            return message.channel.send(`Error Silahkan Contact JzuvGTI#7245`);
        }
        setTimeout(() => {
            updaterich = false;
        }, 300000);
    } else if (command == "snipe") {
        let sniped = snipes.get(message.channel.id)
        if (!sniped) {
            return message.channel.send(`${message.author.username}, there is nothing to snipe.`);
        } else if (sniped.content.length > 55) {
            return message.channel.send(`Damn, message is too big for me :>`);
        } else {
            let result3 = new Discord.MessageEmbed()
                .setAuthor(`${sniped.author.username}#${sniped.author.discriminator}`, sniped.author.displayAvatarURL())
                .setDescription(`\n${sniped.content}`)
                .setColor("#00FF00")
                .setTimestamp();
            return message.channel.send(result3)
        }
    } else if (command == "esnipe") {
        return message.channel.send("Disabled due Disk Overloading.");
        try {
            let channelxd = `./channels/` + message.channel.id + ".json";
            let channelxd2 = require(channelxd);

            let result3 = new Discord.MessageEmbed()
                .setAuthor(`${channelxd2.author}`)
                .setColor("#00FF00")
                .addFields({
                    name: 'Original Message:',
                    value: channelxd2.oldMessage
                }, {
                    name: 'Edited Message:',
                    value: channelxd2.newMessage
                })
                .setTimestamp();
            return message.channel.send(result3)
        } catch (err) {}
    } else if (command == "av" || command == "avatar") {
        try {
            if (!args[0]) {
                const user = message.mentions.users.first() || message.author;
                const avatarEmbed = new MessageEmbed()
                    .setDescription(`**Joined Discord**, \`${moment(user.createdAt).format('MM.DD.YY')}\`\n**Joined ${message.guild.name}**, \`${moment(user.joinedAt).format('MM.DD.YY')}\``)
                    .setColor("RANDOM")
                    .setTimestamp()
                    .setAuthor(`${user.username}'s Avatar`)
                    .setImage(`https://cdn.discordapp.com/avatars/${user.id}/${user.avatar}.png?size=256`);
                message.channel.send(avatarEmbed);
            } else {
                const user = message.mentions.users.first() || message.author;
                const avatarEmbed = new MessageEmbed()
                    .setDescription(`**Joined Discord**, \`${moment(user.createdAt).format('MM.DD.YY')}\`\n**Joined ${message.guild.name}**, \`${moment(user.joinedAt).format('MM.DD.YY')}\``)
                    .setColor("RANDOM")
                    .setTimestamp()
                    .setAuthor(`${user.username}'s Avatar`)
                    .setImage(`https://cdn.discordapp.com/avatars/${user.id}/${user.avatar}.png?size=256`);
                message.channel.send(avatarEmbed);
            }
        } catch (err) {
            console.log(err)
        }
    } else if (command == "time") {
        const avatarEmbed = new MessageEmbed()
            .setDescription(`**<t:${Date.now()/1000 | 0}:F>**`)
            .setColor("RANDOM")
            .setTimestamp()
        message.channel.send(avatarEmbed);
    } else if (command == "ssweb") {
        const url = args.join(' ')
        if (!url) {
            return message.channel.send(`${message.author.username}, do you have brain cells???? at least put the url of website you want to screenshot.`);
        } else if (url.includes("gore") || url.includes("kekma")) {
            return message.channel.send(`Aye ${message.author.username}, nice try.`)
        } else {
            try {
                request.get(`https://image.thum.io/get/maxAge/12/width/700/${url}`, function(err, response, data) {
                    if (err) {
                        return message.channel.send(`Ohh, fcks something went wrong "${err}"`);
                    } else if (!url.includes("http")) {
                        const avatarEmbed = new MessageEmbed()
                            .setDescription(`Screenshot of ${url}`)
                            .setColor("RANDOM")
                            .setTimestamp()
                            .setAuthor(`requested by ${message.author.username}`)
                            .setImage(`https://image.thum.io/get/maxAge/12/width/700/http://${url}/`);
                        return message.channel.send(avatarEmbed);
                    } else {
                        const avatarEmbed = new MessageEmbed()
                            .setDescription(`Screenshot of ${url}`)
                            .setColor("RANDOM")
                            .setTimestamp()
                            .setAuthor(`requested by ${message.author.username}`)
                            .setImage(`https://image.thum.io/get/maxAge/12/width/700/${url}`);
                        return message.channel.send(avatarEmbed);
                    }
                })
            } catch (err) {
                console.log(err)
            }
        }
    } else if (command == "urban") {
        if (!args.length) {
            return message.channel.send("Do you feel like a genius??? then enter the vocabulary you want to search.");
        }
        const query = querystring.stringify({
            term: args.join(' ')
        });
        const {
            list
        } = await fetch(`https://api.urbandictionary.com/v0/define?${query}`)
            .then(response => response.json());
        if (!list.length) {
            return message.channel.send(`No results found for **${args.join(' ')}**.`);
        }

        const trim = (str, max) => ((str.length > max) ? `${str.slice(0, max - 3)}...` : str);
        const [answer] = list;
        const embed = new MessageEmbed()
            .setColor('RANDOM')
            .setTitle(answer.word)
            .setURL(answer.permalink)
            .addFields({
                name: 'Definition',
                value: trim(answer.definition, 1024)
            }, {
                name: 'Example',
                value: trim(answer.example, 1024)
            }, {
                name: 'Rating',
                value: `👍 thumbsup ${answer.thumbs_up}. 👎 thumbsdown ${answer.thumbs_down}.`
            }, );
        return message.channel.send(embed);
    } else if (command === "github") {
        const githubname = args.join(' ')

        if (!githubname)
            return message.channel.send(`Please input the Github name.`)
        try {
            request({
                url: `https://api.github.com/users/${githubname}`,
                method: "GET",
                accept: "application/vnd.github.v3+json",
                headers: {
                    'User-Agent': 'Mozilla/5.0 (Windows NT 10.0; Win64; x64; rv:90.0) Gecko/20100101 Firefox/90.0'
                }
            }, function(err, res, body) {
                if (err) {
                    return message.reply(`Ooops...Something went wrong`)
                }

                const github = JSON.parse(body);
                if (github['login'] == undefined)
                    return message.reply(`Cannot find github page.`)
                let embed = new MessageEmbed()
                    .setTitle(`${githubname}'s information`)
                    .setImage(`${github['avatar_url']}`)
                    .setAuthor(`${message.author.tag}`, message.author.avatarURL())
                    .setDescription(`\n\`\`\`yaml\nName: ${github['login']}\nID: ${github['id']}\nname: ${github['name']}\ncompany: ${github['company']}\nblog: ${github['blog']}\nlocation: ${github['location']}\nEmail: ${github['email']}\nbio: ${github['bio']}\ntwitter_username: ${github['twitter_username']}\npublic_repos: ${github['public_repos']}\nfollowers: ${github['followers']}\nfollowing: ${github['following']}\ncreated_date: ${github['created_at']}\nlast_updated: ${github['updated_at']}\n\`\`\`\n`)
                    .setColor("#FF0000")
                    .setTimestamp()
                message.channel.send(embed)
            });

        } catch (err) {}
    } else if (command === "gtworld") {
        let world = args[0];
        if (!world)
            return message.channel.send(`Please input the world you want to fetch.`)
        try {
            request.get(`https://s3.amazonaws.com/world.growtopiagame.com/${world}.png`, function(err, response, data) {
                if (err) {
                    return message.channel.send(`Something went wrong.`)
                }
                if (response.statusCode == 403) {
                    return message.channel.send(`Seems like the world unaccessible for request`)
                }

                let Embed = {
                    embed: {
                        color: "RANDOM",
                        title: `${world}'s render world`,
                        image: {
                            url: `https://s3.amazonaws.com/world.growtopiagame.com/${world}.png`
                        },
                        footer: {
                            text: `Replying to ${message.author.tag}`,
                            icon_url: `${client.user.displayAvatarURL()}`
                        }
                    }

                }
                if (response.statusCode === 200)
                    message.channel.send(Embed)
            })
        } catch (err) {}
    } else if (command === "gtonline") {
        try {
            request.get(`https://growtopiagame.com/detail`, function(err, response, data) {
                if (err) {
                    return message.channel.send(`Cannot access the website.`)
                }
                const online = JSON.parse(data);

                if (response.statusCode == 403) {
                    return message.channel.send("`403 forbidden`")
                }
                if (response.statusCode === 200)
                    message.channel.send("There are `" + online['online_user'] + "` players online right now!")
            })
        } catch (err) {}
    } else if (command === "gtwotd") {
        try {
            request.get("https://growtopiagame.com/detail", function(err, response, data) {
                if (err) {
                    return message.channel.send(`Something went wrong.`)
                }
                if (response.statusCode == 403) {
                    return message.channel.send(`Something went wrong`)
                }
                const data2 = JSON.parse(data);
                let Embed = {
                    embed: {
                        color: "RANDOM",
                        title: `**<t:${Date.now()/1000 | 0}:F>** WOTD`,
                        image: {
                            url: data2.world_day_images.full_size
                        },
                        footer: {
                            text: `Replying to ${message.author.tag}`,
                            icon_url: `${client.user.displayAvatarURL()}`
                        }
                    }

                }
                if (response.statusCode === 200)
                    message.channel.send(Embed)
            })
        } catch (err) {}
    } else if (command == "samp") {
        const ip = args[0]
        const port = args[1]
        if (!ip) {
            return message.channel.send(`You need to fetch **(IP)** something.`);
        } else if (!port) {
            return message.channel.send(`You need to input the **(port)**.`);
        } else if (isNaN(+port) == true) {
            message.channel.send(`Hey, **${port}** does not match you can only use **integer** for **port**`);
        } else {
            fetch(`http://anabelle.bot.nu/api/sampquery?ip=${ip}&port=${port}`, { //
                method: "GET"
            }).then(data => data.json()).then(data => {
                if (data.response['serverip'] == undefined) {
                    return message.channel.send(`Something went wrong, **(${ip}:${port})** does not **up** or **under maintenance**.`);
                } else {
                    const embed = new Discord.MessageEmbed()
                        .setImage(`https://media.discordapp.net/attachments/893837709972471858/900644306094788608/15452293323378_loadsc11_samp.png?width=841&height=473`)
                        .setTitle(`SAMP Server ${ip}'s information.`)
                        .setURL(`https://www.sa-mp.com/download.php`)
                        .setDescription(`🛡️   **Server IP**: ${data.response["serverip"]}\n🔧   **Server Address**: ${data.response["address"]}\n🛠️   **Server HostName**: ${data.response["hostname"]}\n⚖️   **Game Mode**: ${data.response["gamemode"]}\n📃   **Language**: ${data.response["language"]}\n🌘   **Max Players**: ${data.response["maxplayers"]}\n📡   **Players Online**: ${data.response["isPlayerOnline"]}\n💫   **SAMP Version**: ${data.response.rule["version"]}\n💳   **Server URL**: ${data.response.rule["weburl"]}\n`)
                        .setColor("RANDOM")
                        .setFooter(`SAMP Information.`, message.author.displayAvatarURL({
                            dynamic: true
                        }))
                        .setTimestamp()
                    return message.channel.send(embed)
                }
            }).catch(err => console.log(err))
        }
    } else if (command == "insta") {
        const name = args.join(' ')
        if (!name) {
            return message.channel.send(`
Bruh, you need to add instagram username you want to fetch.
`);
        } else {
            try {
                fetch("http://api.popcat.xyz/instagram?user=" + name, { //
                    method: "GET"
                }).then(data => data.json()).then(data => {
                    if (data['username'] == undefined) {
                        return message.channel.send(`Cannot find any user with name **${name}**`);
                    } else {
                        if (data["verified"] == true) {
                            const embed = new Discord.MessageEmbed()
                                .setTitle(`Instagram ${name}'s informations`)
                                .setURL(`https://www.instagram.com/${name}/`)
                                .setImage(`${data["profile_pic"]}`)
                                .setDescription(`**Verified Account** 🛡️\nUsername: ${data["username"]} **(${data["full_name"]})**\nDescription: ${data["biography"]}\nFollowers: \`${data["followers"].toLocaleString()}\`\nFollowings: \`${data["following"].toLocaleString()}\`\nPosted: ${data["posts"]}`)
                                .setColor("RANDOM")
                                .setFooter(`Instagram`, message.author.displayAvatarURL({
                                    dynamic: true
                                }))
                                .setTimestamp()
                            return message.channel.send(embed)
                        } else {
                            const embed2 = new Discord.MessageEmbed()
                                .setTitle(`Instagram ${name}'s informations`)
                                .setURL(`https://www.instagram.com/${name}/`)
                                .setImage(`${data["profile_pic"]}`)
                                .setDescription(`Username: ${data["username"]} **(${data["full_name"]})**\nDescription: ${data["biography"]}\nFollowers: \`${data["followers"].toLocaleString()}\`\nFollowings: \`${data["following"].toLocaleString()}\`\nPosted: ${data["posts"]}`)
                                .setColor("RANDOM")
                                .setFooter(`Instargam`, message.author.displayAvatarURL({
                                    dynamic: true
                                }))
                                .setTimestamp()
                            return message.channel.send(embed2)
                        }
                    }
                }).catch(err => console.log(err))
            } catch (err) {
                console.log(err)
            }
        }
    } else {
        if (command.length > 5) {
            return message.channel.send(`What do you mean ${message.author.username}, type **".help"** to find out my commands.`);
        }
    }

});
client.login(process.env.SECRET);
