var Appbase = require('appbase-js');

module.exports = {
	createRequestObject : function(type, venue) {
		return({
			type: type,
        	body: {
		        "query": {
		          "filtered" : {
		            "query" : {
		              "match_all" : {}
		            },
		            "filter" : {
		              "geo_bounding_box" : {
			                "venue" : venue
		               }
		            }
		          }
		        }
      		}
		});
        
	},

	createAppbaseRef : function(appname, username, password){
		return (
			new Appbase({
		        url: 'https://scalr.api.appbase.io',
		        appname: appname,
		        username: username,
		        password: password
    		})
		);
	}
}




