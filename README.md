# Microservice Fission Node Template

This recipe demonstrates a simple GET/POST API using the Lingk FaaS (powered by Fission) for NodeJS services.

## Connect to your Lingk account
	lingk lc env=dev region=us-east-1

## Login to your account using the device code flow

## Create fission env
	fission env create --name node --image fission/node-env
	
## Create get function & route
	fission fn create --name node-add-get --env node --code node-add-get.js
	fission route create --url /node-add-get --function node-add-get --method GET --createingress
	
### Test get
	curl -X GET \
	  'https://fission.lingkcore.com/node-add-get?number1=10&number2=10' 
	  
## Create get function & route
	fission fn create --name node-add-post --env node --code node-add-post.js
	fission route create --url /node-add-post --function node-add-post --method POST --createingress
	
### Test post
	curl -X POST \
	  https://fission.lingkcore.com/node-add-post \
	  -H 'Content-Type: application/json' \
	  -d '{
	  "numbers": [
	  	{ 
	      "number": 1
	    },
	    {
	      "number": 2
	    }
	  ]
	}'


### Helpers
	find . -type f -print0 | xargs -0 dos2unix
	
