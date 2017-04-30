var MongoClient=require('mongodb').MongoClient
var url='mongodb://localhost:27017/jsontomongo'

var ContentSchema=require('./contents.js')
var fs=require('fs')
var jsonFile=fs.readFileSync('content-api.json')
var jsonObj=JSON.parse(jsonFile)

//var myData=new ContentSchema(jsonObj.result.posts[0])
var data=jsonObj.result.posts


MongoClient.connect(url,function(err,db){
	err ? console.log(err):console.log('connected..');

	data.forEach(function(product,index){
	 //console.log(product)
	 var myData=new ContentSchema(product)
	db.collection('news').insertOne(myData,function(err,result){
		if(err){
		 console.log("error "+err);
		} else {
		 console.log("sukses "+jsonObj);
		}

	})
})
		db.close();
});
