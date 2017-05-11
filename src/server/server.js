const express = require('express')
const bodyParser= require('body-parser')
const app = express()

app.use(bodyParser.urlencoded({extended: true}))

app.listen(4000, function() {
  console.log('listening on 4000')
})

app.get('/users', (req, res) => {
	res.json( 
		[
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
				id: '4',
				avatar: 'localhost:4000/images/avatar3.jpg',
				firstName: 'Miguelx',
				lastName: 'ln1',
				emailAddress: 'miguel@appdirect.com',
				slackUser: 'miguel@appdirect.com',
				region: 'Montreal',
				skills: [ 
					{ name: 'Java', rating: '2'},
					{ name: 'Javascript', rating: '5'},
					{ name: 'SQL', rating: '2'},
				]
			}
		]
	);
})
