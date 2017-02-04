/* import config , {nodeEnv,logStars} from './config';


console.log(config,nodeEnv);

logStars('Function');
*/

/*
import https from 'https';

https.get('https://www.lynda.com', res => {
	console.log('Response status code :', res.statusCode);

	res.on('data', chunk =>{
		console.log(chunk.toString());
	});

});  */

/*
import http from 'http';
 const server = http.createServer();

 server.listen(8080);

 server.on ('request',(req,res)=>{
 	res.write ('Hello HTTP!\n');

 	setTimeout(() => {
 		res.write('I can stream!\n');
 		res.end();
 	},3000);

 }); */
import config from './config';
import apiRouter from './api';
//import fs from 'fs';

import express from 'express'
const server = express();

//using express
server.use(express.static('public'));

//setting up ejs to work with express
server.set('view engine', 'ejs');


server.get('/', (req,res) => {
res.render('index',{
	content: 'Hello Express and <em>EJS </em>'
});
});


// using the api
server.use('/api',apiRouter);







/*
server.get('/', (req,res) => {

res.send('Hello Express');
}); */


/*

server.get('/about.html', (req,res) => {
	fs.readFile('./about.html',(err,data)=> {
		res.send(data.toString());
	});
});  */

/*
server.get('/about.html', (req,res) => {

res.send('The about page');
}); */



server.listen(config.port,() => {

	console.info('Express listening on port ',config.port);
});

