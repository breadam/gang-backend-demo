module.exports = (function(){

	var environment = process.env.NODE_ENV || 'development';
	var config = {
	};
	
	console.log(environment);
	
	if(environment =='development'){
			
		config.port = 8000;
		
	}
	
	if(environment == 'production'){
			
		config.port = process.env.PORT;
	
	}	
	
	return config;
})();