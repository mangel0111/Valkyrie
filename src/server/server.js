const express = require('express')
const bodyParser= require('body-parser')
const app = express()
const MongoClient = require('mongodb').MongoClient
let db;

app.use(bodyParser.urlencoded({extended: true}))

MongoClient.connect('mongodb://127.0.0.1:27017', (err, database) => {
	if (err) { 
		return console.log(err);
	}
	db = database;

	initDatabase();

	app.listen(4000, function() {
		console.log('listening on 4000')

	})
})

function initDatabase() {

	db.collection('users',function(err, collection){
		collection.remove({},function(err, removed){});
	});

	db.collection('users').insert( [
	{
		code: '1',
		avatar: 'localhost:4000/images/avatar1.jpg',
		firstName: 'Leonardo',
		lastName: 'ln1',
		emailAddress: 'leonardo@appdirect.com',
		slackUser: 'leonardo@appdirect.com',
		region: 'Buenos Aires',
		skills: [ 
		{ name: 'Java', rating: '2'},
		{ name: 'Javascript', rating: '2'},
		{ name: 'SQL', rating: '4'},
		]
	},
	{	
		code: '2',
		avatar: 'localhost:4000/images/avatar2.jpg',
		firstName: 'Florencia',
		lastName: 'ln1',
		emailAddress: 'florencia@appdirect.com',
		slackUser: 'florencia@appdirect.com',
		region: 'San Francisco',
		skills: [ 
		{ name: 'Java', rating: '3'},
		{ name: 'Javascript', rating: '1'},
		{ name: 'SQL', rating: '5'},
		]
	},
	{	
		code: '3',
		avatar: 'localhost:4000/images/avatar2.jpg',
		firstName: 'Miguel',
		lastName: 'ln1',
		emailAddress: 'miguel@appdirect.com',
		slackUser: 'miguel@appdirect.com',
		region: 'San Francisco',
		skills: [ 
		{ name: 'Java', rating: '3'},
		{ name: 'Javascript', rating: '5'},
		{ name: 'SQL', rating: '2'},
		]
	},
	{	
		code: '4',
		avatar: 'localhost:4000/images/avatar2.jpg',
		firstName: 'Damian',
		lastName: 'ln1',
		emailAddress: 'damian@appdirect.com',
		slackUser: 'damian@appdirect.com',
		region: 'San Francisco',
		skills: [ 
		{ name: 'Java', rating: '2'},
		{ name: 'Javascript', rating: '5'},
		{ name: 'SQL', rating: '2'},
		]
	}
	]
	, function(err, result) {
		if(err != null) {
			console.log(err);
		} else {
			console.log("Inserted a user into the users collection.");
		}
	});
}

app.get('/users', (req, res) => {
	db.collection('users').find().toArray(function(err,data) {
		if (err) {
			console.log(err);
			return res(err);
		} else {
			console.log(data);
			return res.json(data);
		}
	})
})

app.get('/skills', (req, res) => {
	//MongoDB query format:
	//{ <field1>: { <operator1>: <value1> }, ... }

	let params = Object.keys(req.query);
	var a = [];
	params.forEach(function(value) {
	    a.push(JSON.stringify({ $eq: value }));
	});
	var filter = a.join(', ');
	console.log(filter);
	let query = { 'skills.name': filter };
	console.log(query);

	db.collection('users').find(query).toArray(function(err,data) {
		if (err) {
			console.log(err);
			return res(err);
		} else {
			console.log(data);
			return res.json(data);
		}
	})
})



