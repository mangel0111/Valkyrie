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

      'ul': {
        'backgroundColor': '#aaaeba',
        'height': '5.8em',
        'marginTop': '1%'
        },
			
			'form': {
				  'width': '450px',
				  'height' : '2.2em',
      		'background': "#444",
       		'background': "rgba(0,0,0,.2)",
        	'border-radius': "10px",
          'display': 'block',
          'textAlign': 'center',
          'margin-top': '0.6em',
          'marginLeft': '0.3em',
          'padding': '1em 1em',
          'textDecoration': 'none',
          'boxShadow': "0 1px 1px rgba(0,0,0,.4) inset, 0 1px 0 rgba(255,255,255,.2)"
    		},

    		'input' : {
       			'width': "330px",
        		'height': "1em",
        		'padding': "10px 5px",
            'float': "left",
        		'font': "bold 15px 'lucida sans', 'trebuchet MS', 'Tahoma'",
       			'border': 0,
        		'background': '#eee',
        		'bordeRadius': '3px 0 0 3px'      
    		},
        
        'button' : {
    			'overflow': 'visible',
    			'float': 'right',
    			'border': 0,
        	'padding': 0,
        	'cursor': 'pointer',
      		'height': '2.3em',
      		'width': '110px',
      		'font': "bold 15px/40px 'lucida sans', 'trebuchet MS', 'Tahoma'",
      		'color': '#fff',
          'textTransform': 'uppercase',
        	'background': '#d83c3c',
        	'borderRadius': '0 3px 3px 0',      
        	'textShadow': '0 -1px 0 rgba(0, 0 ,0, .3)',
        }, 

       	'viewProfileIcon' : {
       		
       	 	'height': '42px', 
       	 	'width': '42px',
          'marginLeft': '50%',
          'marginTop': '9px'
        }, 

        'viewProfile' : {
          'float': 'left',
          'display': 'flex',
          'flexDirection': 'column',
          'marginLeft': '270px',
          'marginTop' : '10px',
          'font': "bold 14px 'lucida sans', 'trebuchet MS', 'Tahoma'",
          'color' : "white"
         },
        
        'li': {
          'float': 'left',
          'marginTop' : '3px'

        },

        'profile' : {
          'display': 'block',
          'textAlign': 'center',
          'width': '70px',
          'marginTop': 0
        },

        'profileLink' : {
          'paddingLeft' : '6px',
          'color' : 'white'
        },

        'people' : {
          'display': 'block',
          'font': "bold 14px 'lucida sans', 'trebuchet MS', 'Tahoma'",
          'color' : "white",
          'textAlign': 'center',
          'marginLeft' : '50px'
         },

        'viewPeopleIcon' : {
          'height': '48px', 
          'width': '48px',
          'marginLeft': '50%',
          'marginTop' : '9px'

        },

        'table' : {
          'marginTop': '10%',
          'width':'100%',
          'font': "bold 15px 'lucida sans', 'trebuchet MS', 'Tahoma'",
        },

        'profileImgResults' : {
          'height': '160px',
          'width': '180px'
        },

        'rows' : {
          'boxShadow': "0 0px 10px rgba(0,0,0,.4) inset",
          'borderRadius': "10px"
          },

       'detailsCell' : {
          'display': 'flex',
          'flexDirection' : 'column'
         },

         'photoCell' : {
          'paddingLeft' : '0.8%',
          'paddingTop' : '0.9%',
          'paddingBottom' : '0.8%'
          },

        'locationIcon' : {
          'height' : '5%',
          'width' : '5%'
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
            <li style={style.viewProfile}>
              <a style={style.profile} href="profile"><img style={style.viewProfileIcon} src="data:image/svg+xml;base64,PD94bWwgdmVyc2lvbj0iMS4wIiA/PjwhRE9DVFlQRSBzdmcgIFBVQkxJQyAnLS8vVzNDLy9EVEQgU1ZHIDEuMC8vRU4nICAnaHR0cDovL3d3dy53My5vcmcvVFIvMjAwMS9SRUMtU1ZHLTIwMDEwOTA0L0RURC9zdmcxMC5kdGQnPjxzdmcgZW5hYmxlLWJhY2tncm91bmQ9Im5ldyAwIDAgMjQgMjQiIGlkPSJMYXllcl8xIiB2ZXJzaW9uPSIxLjAiIHZpZXdCb3g9IjAgMCAyNCAyNCIgeG1sOnNwYWNlPSJwcmVzZXJ2ZSIgeG1sbnM9Imh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnIiB4bWxuczp4bGluaz0iaHR0cDovL3d3dy53My5vcmcvMTk5OS94bGluayI+PGNpcmNsZSBjeD0iMTIiIGN5PSI4IiByPSI0Ii8+PHBhdGggZD0iTTEyLDE0Yy02LjEsMC04LDQtOCw0djJoMTZ2LTJDMjAsMTgsMTguMSwxNCwxMiwxNHoiLz48L3N2Zz4="/></a>
              <a style={style.profileLink} href="profile">View My Profile</a>
            </li>
            <li style={style.li}>
            <a href="people"><img style={style.viewPeopleIcon} src="data:image/svg+xml;base64,PD94bWwgdmVyc2lvbj0iMS4wIiA/PjwhRE9DVFlQRSBzdmcgIFBVQkxJQyAnLS8vVzNDLy9EVEQgU1ZHIDEuMC8vRU4nICAnaHR0cDovL3d3dy53My5vcmcvVFIvMjAwMS9SRUMtU1ZHLTIwMDEwOTA0L0RURC9zdmcxMC5kdGQnPjxzdmcgZW5hYmxlLWJhY2tncm91bmQ9Im5ldyAwIDAgMjQgMjQiIGlkPSJMYXllcl8xIiB2ZXJzaW9uPSIxLjAiIHZpZXdCb3g9IjAgMCAyNCAyNCIgeG1sOnNwYWNlPSJwcmVzZXJ2ZSIgeG1sbnM9Imh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnIiB4bWxuczp4bGluaz0iaHR0cDovL3d3dy53My5vcmcvMTk5OS94bGluayI+PGc+PHBhdGggZD0iTTksOWMwLTEuNywxLjMtMywzLTNzMywxLjMsMywzYzAsMS43LTEuMywzLTMsM1M5LDEwLjcsOSw5eiBNMTIsMTRjLTQuNiwwLTYsMy4zLTYsMy4zVjE5aDEydi0xLjdDMTgsMTcuMywxNi42LDE0LDEyLDE0eiAgICIvPjwvZz48Zz48Zz48Y2lyY2xlIGN4PSIxOC41IiBjeT0iOC41IiByPSIyLjUiLz48L2c+PGc+PHBhdGggZD0iTTE4LjUsMTNjLTEuMiwwLTIuMSwwLjMtMi44LDAuOGMyLjMsMS4xLDMuMiwzLDMuMiwzLjJsMCwwLjFIMjN2LTEuM0MyMywxNS43LDIxLjksMTMsMTguNSwxM3oiLz48L2c+PC9nPjxnPjxnPjxjaXJjbGUgY3g9IjE4LjUiIGN5PSI4LjUiIHI9IjIuNSIvPjwvZz48Zz48cGF0aCBkPSJNMTguNSwxM2MtMS4yLDAtMi4xLDAuMy0yLjgsMC44YzIuMywxLjEsMy4yLDMsMy4yLDMuMmwwLDAuMUgyM3YtMS4zQzIzLDE1LjcsMjEuOSwxMywxOC41LDEzeiIvPjwvZz48L2c+PGc+PGc+PGNpcmNsZSBjeD0iNS41IiBjeT0iOC41IiByPSIyLjUiLz48L2c+PGc+PHBhdGggZD0iTTUuNSwxM2MxLjIsMCwyLjEsMC4zLDIuOCwwLjhjLTIuMywxLjEtMy4yLDMtMy4yLDMuMmwwLDAuMUgxdi0xLjNDMSwxNS43LDIuMSwxMyw1LjUsMTN6Ii8+PC9nPjwvZz48L3N2Zz4="/>
              </a>
            <a style={style.people} href="people">People</a></li>
          </ul>

					
				 <table style={style.table}>
 					 <tr style={style.rows}>
  					  <td style={style.photoCell}>
  					  <img style={style.profileImgResults} src="https://pbs.twimg.com/profile_images/1858106919/Cosme_Fulanito_400x400.jpg" width="180" height="200"/>
  					  </td>
  					  <td style={style.detailsCell}>
               
  					  	 <a href="profile">Cosme Fulanito</a> 
                 <span> Jefe de fiestas y convidios </span>
                 <span> Team Awesome </span>
                 <img style={style.locationIcon} src="data:image/svg+xml;base64,PD94bWwgdmVyc2lvbj0iMS4wIiA/PjwhRE9DVFlQRSBzdmcgIFBVQkxJQyAnLS8vVzNDLy9EVEQgU1ZHIDEuMS8vRU4nICAnaHR0cDovL3d3dy53My5vcmcvR3JhcGhpY3MvU1ZHLzEuMS9EVEQvc3ZnMTEuZHRkJz48c3ZnIGVuYWJsZS1iYWNrZ3JvdW5kPSJuZXcgMCAwIDEyOCAxMjgiIGhlaWdodD0iMTI4cHgiIGlkPSJMYXllcl8xIiB2ZXJzaW9uPSIxLjEiIHZpZXdCb3g9IjAgMCAxMjggMTI4IiB3aWR0aD0iMTI4cHgiIHhtbDpzcGFjZT0icHJlc2VydmUiIHhtbG5zPSJodHRwOi8vd3d3LnczLm9yZy8yMDAwL3N2ZyIgeG1sbnM6eGxpbms9Imh0dHA6Ly93d3cudzMub3JnLzE5OTkveGxpbmsiPjxnPjxnPjxwYXRoIGQ9Ik02NCwwQzM5LjY5OSwwLDIwLDE5LjY5OSwyMCw0NHM0NCw4NCw0NCw4NHM0NC01OS42OTksNDQtODRTODguMzAxLDAsNjQsMHogTTI4LDQ0ICAgIEMyOCwyNC4xNDgsNDQuMTQ4LDgsNjQsOHMzNiwxNi4xNDgsMzYsMzZjMCwxMy44MjgtMjAuMDA4LDQ3LjIxMS0zNiw3MC4yMzhDNDguMDA4LDkxLjIxMSwyOCw1Ny44MjgsMjgsNDR6IE02NCwyNCAgICBjLTExLjA0NywwLTIwLDguOTUzLTIwLDIwczguOTUzLDIwLDIwLDIwczIwLTguOTUzLDIwLTIwUzc1LjA0NywyNCw2NCwyNHogTTY0LDU2Yy02LjYxNywwLTEyLTUuMzgzLTEyLTEyczUuMzgzLTEyLDEyLTEyICAgIHMxMiw1LjM4MywxMiwxMlM3MC42MTcsNTYsNjQsNTZ6IiBmaWxsPSIjRTUzOTM1Ii8+PC9nPjwvZz48L3N2Zz4="/>
  					  
              </td>
 					 </tr>
				</table> 
			</div>
			);
	}
			
}

export default Navigation;

