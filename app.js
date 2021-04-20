
const fetch = require("node-fetch");
var prompt = require('prompt-sync')();

server = ' ';
var server = prompt('enter url of server ( example : http://localhost:8080 ');
//console.log(server);

const url = server + "/rest/api/2/serverInfo";
console.log('--------------------------------------------')
console.log('url choosed to pick info is :' + url);
console.log('--------------------------------------------')

username = ' ';
var username = prompt('enter username: ');
//console.log(username);

var password = ' ';
var password = prompt('enter password : ');
//console.log(password);

async function getData(url) {
    try {
        var auth = 'Basic ' + Buffer.from(username + ':' + password).toString('base64');
        var headers = { 'Authorization': auth };
        const response = await fetch(url, { method: 'GET', headers: headers }).then((res) => { return res.json() })
            .then((json) => { console.log(json) });
    }
    catch (error) {
        console.log(error);
    }
};

getData(url);
