const fs = require("fs");
module.exports.config = {
name: "buồn",
	version: "1.0.1",
	hasPermssion: 0,
	credits: "Quốc Anh",
	description: "nhạc sad=)",
	commandCategory: "Không cần dấu lệnh",
	usages: "ko cần prefix chỉ cần chat sad",
	cooldowns: 5,
};
module.exports.handleEvent = function({ api, event, client, __GLOBAL }) {
	var { threadID, messageID } = event;
	if (event.body.indexOf("buồn")==0 || (event.body.indexOf("Buồn")==0)) {
		var msg = {
				body: "Nhạc bùnn của bạn đây! ",
				attachment: fs.createReadStream(__dirname + `/noprefix/sad.mp4`)
			}
			api.sendMessage(msg, threadID, messageID);
		}
	}
	module.exports.run = function({ api, event, client, __GLOBAL }) {

}
