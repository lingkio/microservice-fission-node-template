# microservice-fission-node-template
## create fission env
	fission env create --name node --image fission/node-env
## create get function & route
	fission fn create --name node-add-get --env node --code node-add-get.js
	fission route create --url /node-add-get --function node-add-get --method GET --createingress
### test get
  curl -X GET \
	  'https://fission.lingkcore.com/node-add-get?number1=10&number2=10' 
## create get function & route
	fission fn create --name node-add-post --env node --code node-add-post.js
	fission route create --url /node-add-post --function node-add-post --method POST --createingress
### test post
	curl -sX POST \
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