console.log(' Starting ...');

var schedule = require('node-schedule');
var request = require('request');
var cheerio = require('cheerio');
var fs = require('fs');
console.log(' Libraries were Loaded.');

// var json = [{"currency":"USD","flag":"🇺🇸","sign":"$"},{"currency":"EUR","flag":"🇪🇺","sign":"€"},{"currency":"GBP","flag":"🇬🇧","sign":"£"},{"currency":"RUB","flag":"🇷🇺","sign":"₱"}];
// fs.writeFileSync('./Assets/curSigns.json', JSON.stringify(json));
				

var Currencies = ["USD", "EUR", "GBP", "RUB", "CNY", "KZT"];
console.log(' We will parse these Currencies: ' + Currencies.toString());

var job = schedule.scheduleJob('0 0 0 * * *', function()
{
// *    *    *    *    *    *
// ┬    ┬    ┬    ┬    ┬    ┬
// │    │    │    │    │    │
// │    │    │    │    │    └ day of week (0 - 7) (0 or 7 is Sun)
// │    │    │    │    └───── month (1 - 12)
// │    │    │    └────────── day of month (1 - 31)
// │    │    └─────────────── hour (0 - 23)
// │    └──────────────────── minute (0 - 59)
// └───────────────────────── second (0 - 59, OPTIONAL)
	console.log();
	var today = new Date();
		var todayFullYear = today.getFullYear();
		var todayMonth = today.getMonth() + 1;
			if (todayMonth > 12)
			{
				todayMonth -= 12;
			}
			if (todayMonth < 10)
			{
				todayMonth = '0' + todayMonth;
			}
		var todayDate = today.getDate();
		if (todayDate < 10)
			{
				todayDate = '0' + todayDate;
			}
		var NowDate = todayDate + '.' + todayMonth + '.' + todayFullYear;
	console.log('Today: ' + NowDate);
	console.log();

	request(
	{
		url: 'http://cbu.uz/ru/arkhiv-kursov-valyut/json/',
		json: true
	},
	function (error, response, Data)
	{
		if (!error && response.statusCode === 200)
		{
			var date = Data[0].Date;
			console.log(' Date: ' + date);
			
			// var dateFromFile = fs.readFileSync('./Assets/lastDate.txt', {encoding: 'utf-8'});
			// // var LastDataFromFile = JSON.parse(fs.readFileSync('./Assets/DataArchive/' + date + '.json', {encoding: 'utf-8', json: true}));
			// console.log(' Loaded Previous Date from file');
			// console.log(' Didn\'t Loaded Last Data JSON file');

			if (date == NowDate)
			{
				var newDates = '';
				var getDate = date;

				for (var v = 0; v < getDate.length; v++)
				{
					var check = getDate.charAt(v);
					if (check == '0') newDates += '₀';
					if (check == '1') newDates += '₁';
					if (check == '2') newDates += '₂'; 
					if (check == '3') newDates += '₃';
					if (check == '4') newDates += '₄';
					if (check == '5') newDates += '₅';
					if (check == '6') newDates += '₆';
					if (check == '7') newDates += '₇';
					if (check == '8') newDates += '₈';
					if (check == '9') newDates += '₉';
					if (check == '.') newDates += '.';
				}

				console.log('  Info has been Updated that\'t why I\'m starting ...');
				// fs.writeFileSync('./Assets/lastDate.txt', date);
				// fs.writeFileSync('./Assets/DataArchive/' + date + '.json', JSON.stringify(Data));
				// console.log('  Created new file which informs Date and Current Data\'s JSON file');
				
				var curPropsFromFile = JSON.parse(fs.readFileSync('./Assets/curSigns.json', {encoding: 'utf-8', json: true}));
				console.log('  Loaded JSON file which contains currency\'s flags and signs');
				var curFlags = [];
				var curSigns = [];
				Currencies.forEach(function(elementC)
				{
					curFlags.push(curPropsFromFile[curPropsFromFile.findIndex(c => c.currency == elementC)].flag);
					curSigns.push(curPropsFromFile[curPropsFromFile.findIndex(c => c.currency == elementC)].sign);
				});
				console.log();
				console.log('   Flags: ' + curFlags);
				console.log('   Signs: ' + curSigns);
				
				var curIndex = [];
				Currencies.forEach(function(elementC)
				{
					curIndex.push(Data.findIndex(c => c.Ccy == elementC));
				});
				console.log('   Indexes: ' + curIndex);

				var curNominals = [];
				Currencies.forEach(function(elementC)
				{
					curNominals.push(Data[Data.findIndex(c => c.Ccy == elementC)].Nominal);
				});
				console.log('   Nominals: ' + curNominals);
				var curRates = [];
				Currencies.forEach(function(elementC)
				{
					curRates.push(Data[Data.findIndex(c => c.Ccy == elementC)].Rate);
				});
				console.log('   Rates: ' + curRates);
				
				var curEmojiesFromFile = JSON.parse(fs.readFileSync('./Assets/curEmojies.json', {encoding: 'utf-8', json: true}));
				console.log('  Loaded JSON file which contains emojies');
				var curDiffs = [];
				var curDiffsEmojies = [];
				var curDiffsPers = [];
				Currencies.forEach(function(elementC)
				{
					if (Data[Data.findIndex(c => c.Ccy == elementC)].Diff < 0)
					{
						curDiffsEmojies.push(curEmojiesFromFile[curEmojiesFromFile.findIndex(e => e.emoji == "down")].code);
						curDiffs.push(Data[Data.findIndex(c => c.Ccy == elementC)].Diff);
						curDiffsPers.push((Data[Data.findIndex(c => c.Ccy == elementC)].Diff * 100 / (Data[Data.findIndex(c => c.Ccy == elementC)].Rate - Data[Data.findIndex(c => c.Ccy == elementC)].Diff) + 0.001).toFixed(2).toString());
					}
					else if (Data[Data.findIndex(c => c.Ccy == elementC)].Diff > 0)
					{
						curDiffsEmojies.push(curEmojiesFromFile[curEmojiesFromFile.findIndex(e => e.emoji == "up")].code);
						curDiffs.push("+" + Data[Data.findIndex(c => c.Ccy == elementC)].Diff);
						curDiffsPers.push("+" + (Data[Data.findIndex(c => c.Ccy == elementC)].Diff * 100 / (Data[Data.findIndex(c => c.Ccy == elementC)].Rate - Data[Data.findIndex(c => c.Ccy == elementC)].Diff) + 0.001).toFixed(2).toString());
						
					}
					else
					{
						curDiffsEmojies.push(curEmojiesFromFile[curEmojiesFromFile.findIndex(e => e.emoji == "stead")].code);
						curDiffs.push(Data[Data.findIndex(c => c.Ccy == elementC)].Diff);
						curDiffsPers.push((Data[Data.findIndex(c => c.Ccy == elementC)].Diff * 100 / (Data[Data.findIndex(c => c.Ccy == elementC)].Rate - Data[Data.findIndex(c => c.Ccy == elementC)].Diff) + 0.001).toFixed(2).toString());
					}
				});
				console.log('   Emojies: ' + curDiffsEmojies);
				console.log('   Diffs: ' + curDiffs);
				console.log('   DiffPers: ' + curDiffsPers);

				console.log();
				console.log('  Finished Preparation');
				
				var result = '';
				var lines = curEmojiesFromFile[curEmojiesFromFile.findIndex(c => c.emoji == "deriver8Wspace")].code;
				for (var i = 0; i < Currencies.length; i++)
				{
					result +=
					curFlags[i] + ' ' + curSigns[i] + curNominals[i] + ' = `' + curRates[i] + '` So\'m\n' +
					curDiffsEmojies[i] + ' ' + curDiffs[i] + ' (' + curDiffsPers[i] + '%)\n';
					if (i < Currencies.length - 1)
					{
						result += lines + '\n';
					}
				}
					result += '*' + newDates + '*';
				console.log(' Prepared Post')
				
				var apiLink = "https://api.telegram.org/bot";
					var botToken = "497147672:AAEx97gCk9nSak5tuP5_FiQf9KDwo6K0oFU";
					var userID = "@UZSRates";
				var message = result;
				var encodedMessage = encodeURIComponent(message).replace(/'/g,"%27").replace(/"/g,"%22");

				var resultant = apiLink + botToken + "/sendMessage?chat_id=" + userID + "&text=" + encodedMessage + "&parse_mode=Markdown";
				console.log(' Prepared Link to request Telegram API by HTTPS')
				
				request(resultant);
				console.log(' Sent to Telegram Channel: ' + userID)

			}
			else
			{
				console.log('  There\'s no updated info, that\'s why I didn\'t sent to Telegram channel')
			}
    	}
	});
});