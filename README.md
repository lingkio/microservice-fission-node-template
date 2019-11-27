# microservice-fission-node-template
fission env create --name node --image fission/node-env

fission fn delete --name node-add-get
fission fn create --name node-add-get --env node --code node-add-get.js
fission route create --url /node-add-get --function node-add-get --method GET --createingress

fission fn delete --name node-add-post
fission fn create --name node-add-post --env node --code node-add-post.js
fission route create --url /node-add-post --function node-add-post --method POST --createingress
