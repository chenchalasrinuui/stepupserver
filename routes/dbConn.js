var mongo=require('mongodb')
function getConnection(){
    var url="mongodb+srv://stepup:stepup@cluster0.y2gqfip.mongodb.net/?retryWrites=true&w=majority"
    var mongoClient=mongo.MongoClient;
    return mongoClient.connect(url)
   
}

module.exports=getConnection