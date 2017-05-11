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
//
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

	let usersResult = db.collection('users').find().toArray(function(err,data) {
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

	let params = Object.keys(req.query);
	let result = [];

	for (var i = 0; i < params.length; i++) {
		let x = i+1;
		result.push(
		{
			id: x,
			avatar: 'localhost:4000/images/avatar1.jpg',
			firstName: 'User'+x,
			lastName: 'LastName'+x,
			emailAddress: 'leonardo'+ x +'@appdirect.com',
			slackUser: 'leonardo'+ x +'@appdirect.com',
			region: 'Buenos Aires',
			skills: [ 
			{ name: params[i], rating: '2'},
			{ name: 'Javascript', rating: '2'},
			{ name: 'SQL', rating: '4'},
			]
		}
		);
	}
	res.json(result);
})



