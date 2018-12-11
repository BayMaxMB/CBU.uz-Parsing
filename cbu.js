

var schedule = require('node-schedule');
var request = require('request')
//var cheerio = require('cheerio')
var fs = require('fs')

console.log(' Loaded Libraries ...')

var j = schedule.scheduleJob('0 0 * * * *', function(){

console.log();
console.log(' Starting ...')

// fs.writeFileSync('date.txt', '27.11.2018');
// // fs.writeFileSync da fayl sozdat qlb boliwini kutb turadi, sync bomasa u asixronna bajaradi yani kutmasdan keyng kodga otb keturadi
// // var dateFromFile = fs.readFileSync('date.txt').toString();

// var dateFromFile = fs.readFileSync('date.txt', {encoding: 'utf-8'});

// fs.rename('dates.txt', 'bm.txt', function (err) {
// 		if (err) throw new Error(err);
// 	});

request('http://bank.uz/currency/cb/', function (error, response, html)
{
  if (!error && response.statusCode == 200)
  {
console.log(' Get Request was Successfully sent and got Response')
// Get()

// Edit code
	var code = html;
console.log(' Got HTML')

	var txtStart = 'Курсы валют, установленные Центральным банком Узбекистана на ';
	var txtFinish = '<!-- Конец центра сайта -->';
	var infoStart = code.indexOf(txtStart);
	var infoFinish = code.indexOf(txtFinish);
	if (infoFinish == -1) {
		infoFinish = txtStart + codeEdited.length;
	}
	var codeEdited = code.slice(infoStart, infoFinish);
// Editted code
console.log(' Edited HTML')
// Get Date
	var dateInfoStart = txtStart.length;
	var dateInfoFinish = codeEdited.indexOf('</p>');
	var date = codeEdited.slice(dateInfoStart, dateInfoFinish);
	var newDate = date;
// Got Date
console.log(' Got Date: ' + newDate)

// Checker
var dateFromFile = fs.readFileSync('lastDate.txt', {encoding: 'utf-8'});

if (newDate != dateFromFile)
{
	fs.writeFileSync('lastDate.txt', newDate);
	// Get New GBP
		var GBPInfoStart = codeEdited.indexOf('Английский фунт стерлингов');
		var GBPInfoFinish = codeEdited.indexOf('Датская крона');
			var GBPedit= codeEdited.slice(GBPInfoStart, GBPInfoFinish);
		var GBPInfoStart = GBPedit.indexOf('<strong>') + '<strong>'.length;
		var GBPInfoFinish = GBPedit.indexOf('</strong>');
			var GBP = GBPedit.slice(GBPInfoStart, GBPInfoFinish);
		var newGBP = GBP;
			var GBPchangeStart = GBPedit.indexOf('&nbsp;') + '&nbsp;'.length;
			var GBPchangeFinish = GBPedit.indexOf('</td>\n<td style="border-bottom:1px dashed #ccc">')-1;
				var GBPchange = GBPedit.slice(GBPchangeStart, GBPchangeFinish);	
			var changeGBP = GBPchange;
	// Got New GBP
	console.log(' Got GBP: ' + newGBP)
	// Get New USD
		var USDInfoStart = codeEdited.indexOf('доллар США') + 'доллар США</strong>'.length;
		var USDInfoFinish = codeEdited.indexOf('ЕВРО');
			var USDedit= codeEdited.slice(USDInfoStart, USDInfoFinish);
		var USDInfoStart = USDedit.indexOf('<strong>') + '<strong>'.length;
		var USDInfoFinish = USDedit.indexOf('</strong>');
			var USD = USDedit.slice(USDInfoStart, USDInfoFinish);
		var newUSD = USD;
			var USDchangeStart = USDedit.indexOf('&nbsp;') + '&nbsp;'.length;
			var USDchangeFinish = USDedit.indexOf('</td>\n<td style="border-bottom:1px dashed #ccc">')-1;
				var USDchange = USDedit.slice(USDchangeStart, USDchangeFinish);	
			var changeUSD = USDchange;
	// Got New USD
	console.log(' Got USD: ' + newUSD)
	// Get New EUR
		var EURInfoStart = codeEdited.indexOf('ЕВРО') + 'ЕВРО</strong>'.length;
		var EURInfoFinish = codeEdited.indexOf('Египетский фунт');
			var EURedit= codeEdited.slice(EURInfoStart, EURInfoFinish);
		var EURInfoStart = EURedit.indexOf('<strong>') + '<strong>'.length;
		var EURInfoFinish = EURedit.indexOf('</strong>');
			var EUR = EURedit.slice(EURInfoStart, EURInfoFinish);
		var newEUR = EUR;
			var EURchangeStart = EURedit.indexOf('&nbsp;') + '&nbsp;'.length;
			var EURchangeFinish = EURedit.indexOf('</td>\n<td style="border-bottom:1px dashed #ccc">')-1;
				var EURchange = EURedit.slice(EURchangeStart, EURchangeFinish);	
			var changeEUR = EURchange;
	// Got New EUR
	console.log(' Got EUR: ' + newEUR)
	// Get New RUB
		var RUBInfoStart = codeEdited.indexOf('Российский рубль');
		var RUBInfoFinish = codeEdited.indexOf('СДР');
			var RUBedit= codeEdited.slice(RUBInfoStart, RUBInfoFinish);
		var RUBInfoStart = RUBedit.indexOf('<strong>') + '<strong>'.length;
		var RUBInfoFinish = RUBedit.indexOf('</strong>');
			var RUB = RUBedit.slice(RUBInfoStart, RUBInfoFinish);
		var newRUB = RUB;
			var RUBchangeStart = RUBedit.indexOf('&nbsp;') + '&nbsp;'.length;
			var RUBchangeFinish = RUBedit.indexOf('</td>\n<td style="border-bottom:1px dashed #ccc">')-1;
				var RUBchange = RUBedit.slice(RUBchangeStart, RUBchangeFinish);	
			var changeRUB = RUBchange;
	// Got New RUB
	console.log(' Got RUB: ' + newRUB)
	// Generate()

	// Get Currencies
		var getUSD = newUSD;
			var getChangeUSD = changeUSD;
		var getEUR = newEUR;
			var getChangeEUR = changeEUR;
		var getGBP = newGBP;
			var getChangeGBP = changeGBP;
		var getRUB = newRUB;
			var getChangeRUB = changeRUB;
	// Got Currencies

	// Calculate Percentages
		var perUSD = (getChangeUSD * 100 / (getUSD - getChangeUSD) + 0.001).toFixed(2).toString();
		var perEUR = (getChangeEUR * 100 / (getEUR - getChangeEUR) + 0.001).toFixed(2).toString();
		var perGBP = (getChangeGBP * 100 / (getGBP - getChangeGBP) + 0.001).toFixed(2).toString();
		var perRUB = (getChangeRUB * 100 / (getRUB - getChangeRUB) + 0.001).toFixed(2).toString();
		if (perUSD[0] != '-') {perUSD = '+' + perUSD;}
		if (perEUR[0] != '-') {perEUR = '+' + perEUR;}
		if (perGBP[0] != '-') {perGBP = '+' + perGBP;}
		if (perRUB[0] != '-') {perRUB = '+' + perRUB;}
	// Calculated Percentages

	// Fix Tabulations
		//For Currencies
	longest = Math.max(getUSD.length, getEUR.length, getGBP.length, getRUB.length);

	var getUSDr = '';
	var getEURr = '';
	var getGBPr = '';
	var getRUBr = '';
	 
		// if (getUSD.length < longest) {
		// 	var k = longest - getUSD.length;
		// 	for (var i = 1; i <= k; i++) {
		// 		getUSDr = getUSDr + '  ';
		// 	}
		// }
		// if (getEUR.length < longest) {
		// 	var k = longest - getEUR.length;
		// 	for (var i = 1; i <= k; i++) {
		// 		getEURr = getEURr + '  ';
		// 	}
		// }
		// if (getGBP.length < longest) {
		// 	var k = longest - getGBR.length;
		// 	for (var i = 1; i <= k; i++) {
		// 		getGBRr = getGBRr + '  ';
		// 	}
		// }
		// if (getRUB.length < longest) {
		// 	var k = longest - getRUB.length;
		// 	for (var i = 1; i <= k; i++) {
		// 		getRUBr = getRUBr + '  ';
		// 	}
		// }


		// 	if (getUSD.length > 6)
		// 	{
		// 		getUSD = getUSD.toString().slice(0,-6) + ',' + getUSD.toString().slice(-6);
		// 	}
		// 	if (getEUR.length > 6)
		// 	{
		// 		getEUR = getEUR.toString().slice(0,-6) + ',' + getEUR.toString().slice(-6);
		// 	}
		// 	if (getGBP.length > 6)
		// 	{
		// 		getGBP = getGBP.toString().slice(0,-6) + ',' + getGBP.toString().slice(-6);
		// 	}
		// 	if (getRUB.length > 6)
		// 	{
		// 		getRUB = getRUB.toString().slice(0,-6) + ',' + getRUB.toString().slice(-6);
		// 	}
		// //For Currencies

		// For Percentages
	longest = Math.max(perUSD.length, perEUR.length, perGBP.length, perRUB.length);

	var perUSDr = '';
	var perEURr = '';
	var perGBPr = '';
	var perRUBr = '';
	 
		// if (perUSD.length < longest) {
		// 	var k = longest - perUSD.length;
		// 	for (var i = 1; i <= k; i++) {
		// 		perUSDr = perUSDr + '  ';
		// 	}
		// }
		// if (perEUR.length < longest) {
		// 	var k = longest - perEUR.length;
		// 	for (var i = 1; i <= k; i++) {
		// 		perEURr = perEURr + '  ';
		// 	}
		// }
		// if (perGBP.length < longest) {
		// 	var k = longest - perGBR.length;
		// 	for (var i = 1; i <= k; i++) {
		// 		perGBRr = perGBRr + '  ';
		// 	}
		// }
		// if (perRUB.length < longest) {
		// 	var k = longest - perRUB.length;
		// 	for (var i = 1; i <= k; i++) {
		// 		perRUBr = perRUBr + '  ';
		// 	}
		// }

		// 	if (perUSD.length > 7)
		// 	{
		// 		perUSD = perUSD.toString().slice(0,-7) + ',' + perUSD.toString().slice(-7);
		// 	}
		// 	if (perEUR.length > 7)
		// 	{
		// 		perEUR = perEUR.toString().slice(0,-7) + ',' + perEUR.toString().slice(-7);
		// 	}
		// 	if (perGBP.length > 7)
		// 	{
		// 		perGBP = perGBP.toString().slice(0,-7) + ',' + perGBP.toString().slice(-7);
		// 	}
		// 	if (perRUB.length > 7)
		// 	{
		// 		perRUB = perRUB.toString().slice(0,-7) + ',' + perRUB.toString().slice(-7);
		// 	}

		// // For Percentages

		// For Changes
	longest = Math.max(getChangeUSD.length, getChangeEUR.length, getChangeGBP.length, getChangeRUB.length);

	var getChangeUSDr = '';
	var getChangeEURr = '';
	var getChangeGBPr = '';
	var getChangeRUBr = '';
	 
		// if (getChangeUSD.length < longest) {
		// 	var k = longest - getChangeUSD.length;
		// 	for (var i = 1; i <= k; i++) {
		// 		getChangeUSDr = getChangeUSDr + '  ';
		// 	}
		// }
		// if (getChangeEUR.length < longest) {
		// 	var k = longest - getChangeEUR.length;
		// 	for (var i = 1; i <= k; i++) {
		// 		getChangeEURr = getChangeEURr + '  ';
		// 	}
		// }
		// if (getChangeGBP.length < longest) {
		// 	var k = longest - getChangeGBP.length;
		// 	for (var i = 1; i <= k; i++) {
		// 		getChangeGBPr = getChangeGBPr + '  ';
		// 	}
		// }
		// if (getChangeRUB.length < longest) {
		// 	var k = longest - getChangeRUB.length;
		// 	for (var i = 1; i <= k; i++) {
		// 		getChangeRUBr = getChangeRUBr + '  ';
		// 	}
		// }

		// 	if (getChangeUSD.length > 7)
		// 	{
		// 		getChangeUSD = getChangeUSD.toString().slice(0,-7) + ',' + getChangeUSD.toString().slice(-7);
		// 	}
		// 	if (getChangeEUR.length > 7)
		// 	{
		// 		getChangeEUR = getChangeEUR.toString().slice(0,-7) + ',' + getChangeEUR.toString().slice(-7);
		// 	}
		// 	if (getChangeGBP.length > 7)
		// 	{
		// 		getChangeGBP = getChangeGBP.toString().slice(0,-7) + ',' + getChangeGBP.toString().slice(-7);
		// 	}
		// 	if (getChangeRUB.length > 7)
		// 	{
		// 		getChangeRUB = getChangeRUB.toString().slice(0,-7) + ',' + getChangeRUB.toString().slice(-7);
		// 	}

		// // For Changes

	// Fix Tabulations
	console.log(' Fixed Tabulations, But will post without Tabulations, Not fixed normally yet..')
		var adsLink = '[​​](https://t.me/UZSRates)'
		var symUSD = '🇺🇸 ';
		var symEUR = '🇪🇺 ';
		var symGBP = '🇬🇧 ';
		var symRUB = '🇷🇺 ';
		lines = '➖ ➖ ➖ ➖ ➖ ➖ ➖ ➖';
			if (perUSD[0] == '+') {signUSD = '⬆️ '}
			if (perUSD[0] == '-') {signUSD = '⬇️ '}
			if (perEUR[0] == '+') {signEUR = '⬆️ '}
			if (perEUR[0] == '-') {signEUR = '⬇️ '}
			if (perGBP[0] == '+') {signGBP = '⬆️ '}
			if (perGBP[0] == '-') {signGBP = '⬇️ '}
			if (perRUB[0] == '+') {signRUB = '⬆️ '}
			if (perRUB[0] == '-') {signRUB = '⬇️ '}


	var newDateOrg = newDate;
	var newDates = '';
	var getDate = newDate;

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

	var showUSD = symUSD + '$1 = ' + getUSDr + '`' + getUSD + '`' + ' So\'m\n'
			+ signUSD + getChangeUSDr + getChangeUSD + ' So\'m ' + perUSDr + '(' + perUSD + '%)';

	var showEUR = symEUR + '€1 = ' + getEURr + '`' + getEUR + '`' + ' So\'m\n'
			+ signEUR + getChangeEURr + getChangeEUR + ' So\'m ' + perEURr + '(' + perEUR + '%)';

	var showGBP = symGBP + '£1 = ' + getGBPr + '`' + getGBP + '`' + ' So\'m\n'
			+ signGBP + getChangeGBPr + getChangeGBP + ' So\'m ' + perGBPr + '(' + perGBP + '%)';

	var showRUB = symRUB + '₱1 = ' + getRUBr + '`' + getRUB + '`' + ' So\'m\n'
			+ signRUB + getChangeRUBr + getChangeRUB + ' So\'m ' + perRUBr + '(' + perRUB + '%)';


	var result =
	showUSD + '\n' + lines + '\n' + 
	showEUR + '\n' + lines + '\n' + 
	showGBP + '\n' + lines + '\n' + 
	showRUB + '\n' + 
	'*' + newDates + '*';

	console.log(' Prepared Post')
	// Post()

	 var apiLink = "https://api.telegram.org/bot";
		var botToken = "497147672:AAEx97gCk9nSak5tuP5_FiQf9KDwo6K0oFU";
		var userID = "@UZSRates";
	var message = result;
	var encodedMessage = encodeURIComponent(message).replace(/'/g,"%27").replace(/"/g,"%22");

	var resultant = apiLink + botToken + "/sendMessage?chat_id=" + userID + "&text=" + encodedMessage + "&parse_mode=Markdown";
	console.log(' Prepared Link to request Telegram API by HTTPS')
	// Request()

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


	// request('http://cbu.uz/ru/arkhiv-kursov-valyut/json/', function (error, response, body)
	// {
	// 	if (!error && response.statusCode == 200)
	// 	{						
	// 		var $ = cheerio.load(body);
	// 		var getDate = $('date', 'CcyNtry').text();
	// 		if (getDate != checkDate)
	// 		{
	// 			var getRate = $('Rate', 'CcyNtry').text();
	// 			console.log(" " + getDate + " - " + getRate)
	// 		}
	// 		checkDate = getDate;
	// 		var s = 1;
	// 		for (var i = 1; i < 100000; i++)
	// 		{s *= i;}
						
	// 	}
	// 	else
	// 	{
	// 		console.log("  " + getDateR + " Error: " + response.statusCode)
	// 		}
	// });


// request('http://cbu.uz/uz/arkhiv-kursov-valyut/xml/USD/' + date, function (error, response, xml)
// {
//   if (!error && response.statusCode == 200)
//   {
// console.log(' Get Request was Successfully sent and got Response')
// // Get()

// // Edit code

// 	var txtStart = 'Курсы валют, установленные Центральным банком Узбекистана на ';
// 	var txtFinish = '<!-- Конец центра сайта -->';
// 	var infoStart = code.indexOf(txtStart);
// 	var infoFinish = code.indexOf(txtFinish);
// 	if (infoFinish == -1) {
// 		infoFinish = txtStart + codeEdited.length;
// 	}
// 	var codeEdited = code.slice(infoStart, infoFinish);
// // Editted code
// console.log(' Edited HTML')
// // Get Date
// 	var dateInfoStart = txtStart.length;
// 	var dateInfoFinish = codeEdited.indexOf('</p>');
// 	var date = codeEdited.slice(dateInfoStart, dateInfoFinish);
// 	var newDate = date;
// // Got Date
// console.log(' Got Date: ' + newDate)
// // Get New GBP
// 	var GBPInfoStart = codeEdited.indexOf('Английский фунт стерлингов');
// 	var GBPInfoFinish = codeEdited.indexOf('Датская крона');
// 		var GBPedit= codeEdited.slice(GBPInfoStart, GBPInfoFinish);
// 	var GBPInfoStart = GBPedit.indexOf('<strong>') + '<strong>'.length;
// 	var GBPInfoFinish = GBPedit.indexOf('</strong>');
// 		var GBP = GBPedit.slice(GBPInfoStart, GBPInfoFinish);
// 	var newGBP = GBP;
// 		var GBPchangeStart = GBPedit.indexOf('&nbsp;') + '&nbsp;'.length;
// 		var GBPchangeFinish = GBPedit.indexOf('</td>\n<td style="border-bottom:1px dashed #ccc">')-1;
// 			var GBPchange = GBPedit.slice(GBPchangeStart, GBPchangeFinish);	
// 		var changeGBP = GBPchange;
// // Got New GBP
// console.log(' Got GBP: ' + newGBP)
// // Get New USD
// 	var USDInfoStart = codeEdited.indexOf('доллар США') + 'доллар США</strong>'.length;
// 	var USDInfoFinish = codeEdited.indexOf('ЕВРО');
// 		var USDedit= codeEdited.slice(USDInfoStart, USDInfoFinish);
// 	var USDInfoStart = USDedit.indexOf('<strong>') + '<strong>'.length;
// 	var USDInfoFinish = USDedit.indexOf('</strong>');
// 		var USD = USDedit.slice(USDInfoStart, USDInfoFinish);
// 	var newUSD = USD;
// 		var USDchangeStart = USDedit.indexOf('&nbsp;') + '&nbsp;'.length;
// 		var USDchangeFinish = USDedit.indexOf('</td>\n<td style="border-bottom:1px dashed #ccc">')-1;
// 			var USDchange = USDedit.slice(USDchangeStart, USDchangeFinish);	
// 		var changeUSD = USDchange;
// // Got New USD
// console.log(' Got USD: ' + newUSD)
// // Get New EUR
// 	var EURInfoStart = codeEdited.indexOf('ЕВРО') + 'ЕВРО</strong>'.length;
// 	var EURInfoFinish = codeEdited.indexOf('Египетский фунт');
// 		var EURedit= codeEdited.slice(EURInfoStart, EURInfoFinish);
// 	var EURInfoStart = EURedit.indexOf('<strong>') + '<strong>'.length;
// 	var EURInfoFinish = EURedit.indexOf('</strong>');
// 		var EUR = EURedit.slice(EURInfoStart, EURInfoFinish);
// 	var newEUR = EUR;
// 		var EURchangeStart = EURedit.indexOf('&nbsp;') + '&nbsp;'.length;
// 		var EURchangeFinish = EURedit.indexOf('</td>\n<td style="border-bottom:1px dashed #ccc">')-1;
// 			var EURchange = EURedit.slice(EURchangeStart, EURchangeFinish);	
// 		var changeEUR = EURchange;
// // Got New EUR
// console.log(' Got EUR: ' + newEUR)
// // Get New RUB
// 	var RUBInfoStart = codeEdited.indexOf('Российский рубль');
// 	var RUBInfoFinish = codeEdited.indexOf('СДР');
// 		var RUBedit= codeEdited.slice(RUBInfoStart, RUBInfoFinish);
// 	var RUBInfoStart = RUBedit.indexOf('<strong>') + '<strong>'.length;
// 	var RUBInfoFinish = RUBedit.indexOf('</strong>');
// 		var RUB = RUBedit.slice(RUBInfoStart, RUBInfoFinish);
// 	var newRUB = RUB;
// 		var RUBchangeStart = RUBedit.indexOf('&nbsp;') + '&nbsp;'.length;
// 		var RUBchangeFinish = RUBedit.indexOf('</td>\n<td style="border-bottom:1px dashed #ccc">')-1;
// 			var RUBchange = RUBedit.slice(RUBchangeStart, RUBchangeFinish);	
// 		var changeRUB = RUBchange;
// // Got New RUB
// console.log(' Got RUB: ' + newRUB)
// // Generate()

// // Get Currencies
// 	var getUSD = newUSD;
// 		var getChangeUSD = changeUSD;
// 	var getEUR = newEUR;
// 		var getChangeEUR = changeEUR;
// 	var getGBP = newGBP;
// 		var getChangeGBP = changeGBP;
// 	var getRUB = newRUB;
// 		var getChangeRUB = changeRUB;
// // Got Currencies

// // Calculate Percentages
// 	var perUSD = (getChangeUSD * 100 / (getUSD - getChangeUSD) + 0.001).toFixed(2).toString();
// 	var perEUR = (getChangeEUR * 100 / (getEUR - getChangeEUR) + 0.001).toFixed(2).toString();
// 	var perGBP = (getChangeGBP * 100 / (getGBP - getChangeGBP) + 0.001).toFixed(2).toString();
// 	var perRUB = (getChangeRUB * 100 / (getRUB - getChangeRUB) + 0.001).toFixed(2).toString();
// 	if (perUSD[0] != '-') {perUSD = '+' + perUSD;}
// 	if (perEUR[0] != '-') {perEUR = '+' + perEUR;}
// 	if (perGBP[0] != '-') {perGBP = '+' + perGBP;}
// 	if (perRUB[0] != '-') {perRUB = '+' + perRUB;}
// // Calculated Percentages

// // Fix Tabulations
// 	//For Currencies
// longest = Math.max(getUSD.length, getEUR.length, getGBP.length, getRUB.length);

// var getUSDr = '';
// var getEURr = '';
// var getGBPr = '';
// var getRUBr = '';
 
// 	// if (getUSD.length < longest) {
// 	// 	var k = longest - getUSD.length;
// 	// 	for (var i = 1; i <= k; i++) {
// 	// 		getUSDr = getUSDr + '  ';
// 	// 	}
// 	// }
// 	// if (getEUR.length < longest) {
// 	// 	var k = longest - getEUR.length;
// 	// 	for (var i = 1; i <= k; i++) {
// 	// 		getEURr = getEURr + '  ';
// 	// 	}
// 	// }
// 	// if (getGBP.length < longest) {
// 	// 	var k = longest - getGBR.length;
// 	// 	for (var i = 1; i <= k; i++) {
// 	// 		getGBRr = getGBRr + '  ';
// 	// 	}
// 	// }
// 	// if (getRUB.length < longest) {
// 	// 	var k = longest - getRUB.length;
// 	// 	for (var i = 1; i <= k; i++) {
// 	// 		getRUBr = getRUBr + '  ';
// 	// 	}
// 	// }


// 	// 	if (getUSD.length > 6)
// 	// 	{
// 	// 		getUSD = getUSD.toString().slice(0,-6) + ',' + getUSD.toString().slice(-6);
// 	// 	}
// 	// 	if (getEUR.length > 6)
// 	// 	{
// 	// 		getEUR = getEUR.toString().slice(0,-6) + ',' + getEUR.toString().slice(-6);
// 	// 	}
// 	// 	if (getGBP.length > 6)
// 	// 	{
// 	// 		getGBP = getGBP.toString().slice(0,-6) + ',' + getGBP.toString().slice(-6);
// 	// 	}
// 	// 	if (getRUB.length > 6)
// 	// 	{
// 	// 		getRUB = getRUB.toString().slice(0,-6) + ',' + getRUB.toString().slice(-6);
// 	// 	}
// 	// //For Currencies

// 	// For Percentages
// longest = Math.max(perUSD.length, perEUR.length, perGBP.length, perRUB.length);

// var perUSDr = '';
// var perEURr = '';
// var perGBPr = '';
// var perRUBr = '';
 
// 	// if (perUSD.length < longest) {
// 	// 	var k = longest - perUSD.length;
// 	// 	for (var i = 1; i <= k; i++) {
// 	// 		perUSDr = perUSDr + '  ';
// 	// 	}
// 	// }
// 	// if (perEUR.length < longest) {
// 	// 	var k = longest - perEUR.length;
// 	// 	for (var i = 1; i <= k; i++) {
// 	// 		perEURr = perEURr + '  ';
// 	// 	}
// 	// }
// 	// if (perGBP.length < longest) {
// 	// 	var k = longest - perGBR.length;
// 	// 	for (var i = 1; i <= k; i++) {
// 	// 		perGBRr = perGBRr + '  ';
// 	// 	}
// 	// }
// 	// if (perRUB.length < longest) {
// 	// 	var k = longest - perRUB.length;
// 	// 	for (var i = 1; i <= k; i++) {
// 	// 		perRUBr = perRUBr + '  ';
// 	// 	}
// 	// }

// 	// 	if (perUSD.length > 7)
// 	// 	{
// 	// 		perUSD = perUSD.toString().slice(0,-7) + ',' + perUSD.toString().slice(-7);
// 	// 	}
// 	// 	if (perEUR.length > 7)
// 	// 	{
// 	// 		perEUR = perEUR.toString().slice(0,-7) + ',' + perEUR.toString().slice(-7);
// 	// 	}
// 	// 	if (perGBP.length > 7)
// 	// 	{
// 	// 		perGBP = perGBP.toString().slice(0,-7) + ',' + perGBP.toString().slice(-7);
// 	// 	}
// 	// 	if (perRUB.length > 7)
// 	// 	{
// 	// 		perRUB = perRUB.toString().slice(0,-7) + ',' + perRUB.toString().slice(-7);
// 	// 	}

// 	// // For Percentages

// 	// For Changes
// longest = Math.max(getChangeUSD.length, getChangeEUR.length, getChangeGBP.length, getChangeRUB.length);

// var getChangeUSDr = '';
// var getChangeEURr = '';
// var getChangeGBPr = '';
// var getChangeRUBr = '';
 
// 	// if (getChangeUSD.length < longest) {
// 	// 	var k = longest - getChangeUSD.length;
// 	// 	for (var i = 1; i <= k; i++) {
// 	// 		getChangeUSDr = getChangeUSDr + '  ';
// 	// 	}
// 	// }
// 	// if (getChangeEUR.length < longest) {
// 	// 	var k = longest - getChangeEUR.length;
// 	// 	for (var i = 1; i <= k; i++) {
// 	// 		getChangeEURr = getChangeEURr + '  ';
// 	// 	}
// 	// }
// 	// if (getChangeGBP.length < longest) {
// 	// 	var k = longest - getChangeGBP.length;
// 	// 	for (var i = 1; i <= k; i++) {
// 	// 		getChangeGBPr = getChangeGBPr + '  ';
// 	// 	}
// 	// }
// 	// if (getChangeRUB.length < longest) {
// 	// 	var k = longest - getChangeRUB.length;
// 	// 	for (var i = 1; i <= k; i++) {
// 	// 		getChangeRUBr = getChangeRUBr + '  ';
// 	// 	}
// 	// }

// 	// 	if (getChangeUSD.length > 7)
// 	// 	{
// 	// 		getChangeUSD = getChangeUSD.toString().slice(0,-7) + ',' + getChangeUSD.toString().slice(-7);
// 	// 	}
// 	// 	if (getChangeEUR.length > 7)
// 	// 	{
// 	// 		getChangeEUR = getChangeEUR.toString().slice(0,-7) + ',' + getChangeEUR.toString().slice(-7);
// 	// 	}
// 	// 	if (getChangeGBP.length > 7)
// 	// 	{
// 	// 		getChangeGBP = getChangeGBP.toString().slice(0,-7) + ',' + getChangeGBP.toString().slice(-7);
// 	// 	}
// 	// 	if (getChangeRUB.length > 7)
// 	// 	{
// 	// 		getChangeRUB = getChangeRUB.toString().slice(0,-7) + ',' + getChangeRUB.toString().slice(-7);
// 	// 	}

// 	// // For Changes

// // Fix Tabulations
// console.log(' Fixed Tabulations, But will post without Tabulations, Not fixed normally yet..')
// 	var adsLink = '[​​](https://t.me/UZSRates)'
// 	var symUSD = '🇺🇸 ';
// 	var symEUR = '🇪🇺 ';
// 	var symGBP = '🇬🇧 ';
// 	var symRUB = '🇷🇺 ';
// 	lines = '➖ ➖ ➖ ➖ ➖ ➖ ➖ ➖';
// 		if (perUSD[0] == '+') {signUSD = '⬆️ '}
// 		if (perUSD[0] == '-') {signUSD = '⬇️ '}
// 		if (perEUR[0] == '+') {signEUR = '⬆️ '}
// 		if (perEUR[0] == '-') {signEUR = '⬇️ '}
// 		if (perGBP[0] == '+') {signGBP = '⬆️ '}
// 		if (perGBP[0] == '-') {signGBP = '⬇️ '}
// 		if (perRUB[0] == '+') {signRUB = '⬆️ '}
// 		if (perRUB[0] == '-') {signRUB = '⬇️ '}


// var newDateOrg = newDate;
// var newDates = '';
// var getDate = newDate;

// 	for (var v = 0; v < getDate.length; v++)
// 	{
// 		var check = getDate.charAt(v);
// 		if (check == '0') newDates += '₀';
// 		if (check == '1') newDates += '₁';
// 		if (check == '2') newDates += '₂'; 
// 		if (check == '3') newDates += '₃';
// 		if (check == '4') newDates += '₄';
// 		if (check == '5') newDates += '₅';
// 		if (check == '6') newDates += '₆';
// 		if (check == '7') newDates += '₇';
// 		if (check == '8') newDates += '₈';
// 		if (check == '9') newDates += '₉';
// 		if (check == '.') newDates += '.';
// 	}

// var showUSD = symUSD + '$1 = ' + getUSDr + '`' + getUSD + '`' + ' So\'m\n'
// 		+ signUSD + getChangeUSDr + getChangeUSD + ' So\'m ' + perUSDr + '(' + perUSD + '%)';

// var showEUR = symEUR + '€1 = ' + getEURr + '`' + getEUR + '`' + ' So\'m\n'
// 		+ signEUR + getChangeEURr + getChangeEUR + ' So\'m ' + perEURr + '(' + perEUR + '%)';

// var showGBP = symGBP + '£1 = ' + getGBPr + '`' + getGBP + '`' + ' So\'m\n'
// 		+ signGBP + getChangeGBPr + getChangeGBP + ' So\'m ' + perGBPr + '(' + perGBP + '%)';

// var showRUB = symRUB + '₱1 = ' + getRUBr + '`' + getRUB + '`' + ' So\'m\n'
// 		+ signRUB + getChangeRUBr + getChangeRUB + ' So\'m ' + perRUBr + '(' + perRUB + '%)';



//   }
// });