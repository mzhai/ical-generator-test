//Lets require/import the HTTP module
var http = require('http');
var cal = 'BEGIN:VCALENDAR\n' +
'VERSION:2.0\n' +
'PRODID:-//sebbo.net//ical-generator//EN\n' +
'NAME:my first iCal\n' +
'X-WR-CALNAME:my first iCal\n' +
'REFRESH-INTERVAL;VALUE=DURATION:PT1M\n' +
'X-PUBLISHED-TTL:PT1M\n' +
'BEGIN:VEVENT\n' +
'UID:2e95@github.com\n' +
'SEQUENCE:0\n' +
'DTSTAMP:20160719T175136Z\n' +
'DTSTART:20160719T160000Z\n' +
'DTEND:20160719T170000Z\n' +
'SUMMARY:Summary 1\n' +
'LOCATION:Location 1\n' +
'DESCRIPTION:Description 1\n' +
'END:VEVENT\n' +
'BEGIN:VEVENT\n' +
'UID:3c1c@github.com\n' +
'SEQUENCE:0\n' +
'DTSTAMP:20160719T175136Z\n' +
'DTSTART:20160719T180000Z\n' +
'DTEND:20160719T190000Z\n' +
'SUMMARY:Summary 2\n' +
'LOCATION:Location 2\n' +
'DESCRIPTION:Description 2\n' +
'END:VEVENT\n' +
'BEGIN:VEVENT\n' +
'UID:h98p@github.com\n' +
'SEQUENCE:0\n' +
'DTSTAMP:20160719T175136Z\n' +
'DTSTART:20160719T200000Z\n' +
'DTEND:20160719T210000Z\n' +
'SUMMARY:New Event Summary\n' +
'LOCATION:New Location\n' +
'DESCRIPTION:New Event Description\n' +
'END:VEVENT\n' +
'BEGIN:VEVENT\n' +
'UID:zxts@github.com\n' +
'SEQUENCE:0\n' +
'DTSTAMP:20160719T175136Z\n' +
'DTSTART:20160719T220000Z\n' +
'DTEND:20160719T230000Z\n' +
'SUMMARY:New Event Summary2\n' +
'LOCATION:New Location2\n' +
'DESCRIPTION:New Event Description2\n' +
'END:VEVENT\n' +
'BEGIN:VEVENT\n' +
'UID:go2x@github.com\n' +
'SEQUENCE:0\n' +
'DTSTAMP:20160719T175136Z\n' +
'DTSTART:20160720T000000Z\n' +
'DTEND:20160720T010000Z\n' +
'SUMMARY:New Event Summary3\n' +
'LOCATION:New Location3\n' +
'DESCRIPTION:New Event Description3\n' +
'END:VEVENT\n' +
'END:VCALENDAR';

//Lets define a port we want to listen to
const PORT = process.env.PORT || 5000;

//We need a function which handles requests and send response
function handleRequest(request, response){
  // application/octet-stream

             // console.log("not exists: " + filename);
            response.writeHead(200, {
              'Content-Type': 'application/octet-stream',
              'Content-Disposition': 'attachment; filename="calendar.ics"'
            });
            response.write(cal);
            response.end();
    // response.end('It Works!! Path Hit: ' + request.url);
}

//Create a server
var server = http.createServer(handleRequest);

console.log("port:" + PORT);

//Lets start our server
server.listen(PORT, function(){
    //Callback triggered when server is successfully listening. Hurray!
    console.log("Server listening on: http://localhost:%s", PORT);
});
