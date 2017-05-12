import React from 'react';

class Navigation extends React.Component {

	constructor() {
		super();
		this.state = {
			events: []
		};
	}
	render() {
		let style = {
			
			'form': {
				  'width': '450px',
				  'height' : '40px',
      		'background': "#444",
       		'background': "rgba(0,0,0,.2)",
        	'border-radius': "10px",
          'display': 'block',
          'text-align': 'center',
          'padding': '14px 16px',
          'text-decoration': 'none',
          'box-shadow': "0 1px 1px rgba(0,0,0,.4) inset, 0 1px 0 rgba(255,255,255,.2)"
    		},

    		'input' : {
       			'width': "330px",
        		'height': "20px",
        		'padding': "10px 5px",
        		'float': "left",
        		'font': "bold 15px 'lucida sans', 'trebuchet MS', 'Tahoma'",
       			'border': 0,
        		'background': '#eee',
        		'border-radius': '3px 0 0 3px'      
    		},
        
        'ul': {
        'list-style-type': 'none',
        'margin': 0,
        'padding': 0,
        'overflow': 'hidden',
         },



    		'button' : {
    			'overflow': 'visible',
    			'float': 'right',
    			'border': 0,
        		'padding': 0,
        		'cursor': 'pointer',
        		'height': '40px',
        		'width': '110px',
        		'font': "bold 15px/40px 'lucida sans', 'trebuchet MS', 'Tahoma'",
        		'color': '#fff',
        		'text-transform': 'uppercase',
        		'background': '#d83c3c',
        		'border-radius': '0 3px 3px 0',      
        		'text-shadow': '0 -1px 0 rgba(0, 0 ,0, .3)',
        		
       	}, 

       	'viewProfile' : {
       		'color': "rgb(255, 255, 255)",
       	 	'background-color': 'rgb(188, 188, 188)', 
       	 	'border-radius': '50%',
       	 	'height': '45px', 
       	 	'width': '45px',
          'margin-left': '60%'

       	 	
         },  

       	'img':{
       		"height": '200px; width: 180px',
       		
       	},

        'li': {
          'float': 'left'
          },

        'profile' : {
          'display': 'block',
          'text-align': 'center',
          'padding-left': '90%',

          'text-decoration': 'none',
          'margin-top': 0

        },
        'people' : {
          'display': 'block',
          'padding-left': '50%',
          'padding-top': '10%',
          'text-align': 'center',
          'margin-left': '100%',
          'text-decoration': 'none',
          'margin-top': '9%'
        },

        'table':{
          'margin-top': '10%',
          'padding': '2%',
          'border': 'solid',
          'border-color': 'black'
},

'details' : {
  'padding-left' : '10%',
  'padding-bottom': '20%'
}


      
}
		return (
			<div>
				
          <ul style={style.ul}>
            <li style={style.li}> 
              <form style={style.form}>
                <input style={style.input} type="text" placeholder="Search here..." required/>
                <button style={style.button} type="submit">Search</button>
              </form>
            </li>
            <li style={style.li}>
              
              <a style={style.profile} href="profile"><img style={style.viewProfile} src="https://lh3.googleusercontent.com/-XdUIqdMkCWA/AAAAAAAAAAI/AAAAAAAAAAA/4252rscbv5M/photo.jpg"/></a>
              
            </li>
            <li style={style.li}><a style={style.people} href="people">People</a>
            </li>
          </ul>

					
				 <table style={style.table}>
 					 <tr>
  					  <td>
  					  <img style={style.img} src="https://pbs.twimg.com/profile_images/1858106919/Cosme_Fulanito_400x400.jpg" width="180" height="200"/>
  					  </td>
  					  <td style={style.details}>
  					  	 <a href="profile">Cosme Fulanito</a> 
  					  </td>
 					 </tr>
				</table> 
			</div>
			);
	}
			
}

export default Navigation;

