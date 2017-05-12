const express = require('express')
const bodyParser= require('body-parser')
const app = express()
const MongoClient = require('mongodb').MongoClient
let db;
app.use(bodyParser.urlencoded({extended: true}));

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
	db.collection('skills',function(err, collection){
		collection.remove({},function(err, removed){});
	});

	db.collection('users').insert( [
	{
		id: '1',
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
		id: '2',
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
		id: '3',
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
		id: '4',
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


	db.collection('skills').insert( [
	{
		name: '1',
		rating: 'Java'
	},
	{	
		id: '2',
		avatar: 'Javascript'
	},
	{	
		id: '3',
		avatar: 'SQL',
	},
	{	
		id: '4',
		avatar: 'QA-Automation',
	},
	{	
		id: '5',
		avatar: 'React',
	},
	{	
		id: '6',
		avatar: 'MongoDB',
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
	db.collection('skills').find().toArray(function(err,data) {
		if (err) {
			console.log(err);
			return res(err);
		} else {
			console.log(data);
			return res.json(data);
		}
	})
})

app.get('/users/find', (req, res) => {
	let params = Object.keys(req.query);
	var a = [];
	params.forEach(function(value) {
	    a.push(JSON.stringify({ $eq: value }));
	});
	var filter = a.join(', ');
	filter = new JSONArray(filter);

	let query = { $and: { 'skills.name': filter } };
	db.collection('users').find( query ).toArray(function(err,data) {
		if (err) {
			console.log(err);
			return res(err);
		} else {
			console.log(data);
			return res.json(data);
		}
	})
})

// Leo
app.get('/user/:id', (req, res) => {
	let mi_id = req.params.id;
	db.collection('users').find({id: mi_id}).toArray(function(err,data) {
		if (err) {
			console.log(err);
			return res(err);
		} else {
			console.log(data);
			return res.json(data);
		}
	})
})


app.get('/user', (req, res) => {
	return {
			code: '1',
			avatar: 'localhost:4000/images/avatar1.jpg',
			firstName: 'Damián',
			lastName: 'Gianni',
			emailAddress: 'damian.gianni@appdirect.com',
			slackUser: 'damian.gianni@appdirect.com',
			region: 'Buenos Aires',
			skills: [ 
				{ name: 'Javascript', rating: '4'},
				{ name: 'PHP', rating: '4'},
				{ name: 'SQL', rating: '2'},
			]
		}
})


