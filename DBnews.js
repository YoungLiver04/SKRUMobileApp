var mongoose = require ('mongoose');
mongoose.createConnection('mongoodb://localhost/newsDB');

var news = mongoose.model('new', {newsid: String , newsHead: String , newsDetail: Number , newsApp: String , newsFormat: String , atsate: String , dateEnd: String,
isnew:Number, userid: String, newsStatus: Number, newsStausN: String, groupid: Number, cnt:  String });
var myobj = new news({
    newsid:'',
    newsHead:'ยกเลิกประกาศ สอบราคาซื้อครุภัณฑ์คอมพิวเตอร์ จำนวน ...',
    newsDetail:'file/20130704084345/r_cancel_50_56.htm',
    newsApp:'ยกเลิกประกาศ สอบราคาซื้อครุภัณฑ์คอมพิวเตอร์ จำนวน ...',
     newsFormat:'',
     atsate:'',
     dateEnd:'',
     isnew:'',
     userid:'',
      newsStatus:'',
       newsStausN:'',
       groupid:'',
       cnt:''
      

});

myobj.save(function(err){
    if (err){
        console.log(err);

    }else{
        console.log('meow');
    }

});