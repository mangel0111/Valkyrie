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
	initUsersCollection();
	initSkillsCollection();
	initOfficesCollection();
}

function initUsersCollection(){
	db.collection('users',function(err, collection){
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
		{ id: '1', code: 'JAVA', name: 'Java', rating: '2'},
		{ id: '2', code: 'JAVASCRIPT', name: 'Javascript', rating: '2'},
		{ id: '3', code: 'SQL', name: 'SQL', rating: '4'}
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
		{ id: '1', code: 'JAVA', name: 'Java', rating: '3'},
		{ id: '2', code: 'JAVASCRIPT', name: 'Javascript', rating: '1'},
		{ id: '3', code: 'SQL', name: 'SQL', rating: '5'},
		{ id: '7', code: 'CHIMPOKOMON', name: 'Chimpokomon', rating: '5'}
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
		{ id: '1', code: 'JAVA', name: 'Java', rating: '3'},
		{ id: '2', code: 'JAVASCRIPT', name: 'Javascript', rating: '5'},
		{ id: '3', code: 'SQL', name: 'SQL', rating: '2'}
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
		{ id: '1', code: 'JAVA', name: 'Java', rating: '2'},
		{ id: '2', code: 'JAVASCRIPT', name: 'Javascript', rating: '5'},
		{ id: '3', code: 'SQL', name: 'SQL', rating: '2'},
		]
	}
	]
	, function(err, result) {
		if(err != null) {
			console.log(err);
		} else {
			console.log("Inserted users collection.");
		}
	});
}

function initSkillsCollection(){
	db.collection('skills',function(err, collection){
		collection.remove({},function(err, removed){});
	});
	db.collection('skills').insert( [
	{
		id: '1',
		code: 'JAVA',
		name: 'Java'
	},
	{	
		id: '2',
		code: 'JAVASCRIPT',
		name: 'Javascript'
	},
	{	
		id: '3',
		code: 'SQL',
		name: 'SQL'
	},
	{	
		id: '4',
		code: 'QAAUTO',
		name: 'QA-Automation'
	},
	{	
		id: '5',
		code: 'REACTJS',
		name: 'React'
	},
	{	
		id: '6',
		code: 'MONGODB',
		name: 'MongoDB'
	},
	{	
		id: '7',
		code: 'CHIMPOKOMON',
		name: 'Chimpokomon'
	}
	]
	, function(err, result) {
		if(err != null) {
			console.log(err);
		} else {
			console.log("Inserted skills collection.");
		}
	});
}

function initOfficesCollection(){
	db.collection('offices',function(err, collection){
		collection.remove({},function(err, removed){});
	});
	db.collection('offices').insert( [
	{
		id: "BA",
		position: {
			"top": "80%",
			"left": "32%"
		},
		name: "Buenos Aires",
		description: "The best office ever",
		events: [{
			id: 0,
			name: "Revolutionary Day",
			date: "25-05-2017"
		}, {
			id: 3,
			name: "Maradona Birthdays",
			date: "30-10-2017"
		}, {
			id: 4,
			name: "Mate's Day",
			date: "30-01-2017"
		}, {
			id: 1,
			name: "Christmas",
			date: "25-12-2017"
		}, {
			id: 2,
			name: "New Year",
			date: "01-01-2018"
		}]
	},
	{
		id: "SF",
		position: {
			"top": "42%",
			"left": "17%"
		},
		name: "San Francisco",
		description: "Is where the money comes!",
		events: [{
			id: 1,
			name: "Black Friday",
			date: "24-11-2017"
		}, {
			id: 1,
			name: "Christmas",
			date: "25-12-2017"
		}, {
			id: 2,
			name: "New Year",
			date: "01-01-2018"
		}]
	},
	{
		id: "PN",
		position: {
			"top": "50%",
			"left": "69%"
		},
		name: "Pune",
		description: "The dancing office",
		events: [
		{
			id: 3,
			name: "Apu's Birthday",
			date: "5-06-2017"
		}, {
			id: 1,
			name: "Christmas",
			date: "25-12-2017"
		}, {
			id: 2,
			name: "New Year",
			date: "01-01-2018"
		}
		]
	},
	{
		id: "MT",
		position: {
			"top": "37%",
			"left": "28%"
		},
		name: "Montreal",
		description: "The guys who loves curling",
		events: [{
			id: 4,
			name: "Canadian Day",
			date: "01-07-2017"
		},{
			id: 1,
			name: "Christmas",
			date: "25-12-2017"
		}, {
			id: 2,
			name: "New Year",
			date: "01-01-2018"
		},{
			id: 3,
			name: "Curling Day",
			date: "23-02-2018"
		}]
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
		a.push({ $eq: value });
	});
	filter = JSON.parse(a);
	console.log(filter);
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

// Leo - Devuelve un documento del id solicitado.
app.get('/user/:id', (req, res) => {
	let mi_id = req.params.id;
	db.collection('users').findOne({id: mi_id}, function(err,data) {
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

app.get('/offices', (req, res) => {
	db.collection('offices').find().toArray(function(err,data) {
		if (err) {
			console.log(err);
			return res(err);
		} else {
			console.log(data);
			return res.json(data);
		}
	})
})

