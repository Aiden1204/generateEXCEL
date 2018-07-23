var express = require('express');
var router = express.Router();

var xlsx = require('node-xlsx');
var fs = require('fs');

/* GET home page. */
router.get('/', function(req, res, next) {
  res.render('test');
});

router.post('/login', function(req, res, next) {
    console.log(req.body);
    // 读xlsx
    var obj = xlsx.parse("E:/resut.xls");
    console.log(obj[0].data);
    var x = [
        req.body.project,
        req.body.company,
        req.body.name,
        req.body.phoneNum,
        req.body.mail,
        req.body.billMessage
    ];
    obj[0].data.push(x);
    var data = obj;
    // var data = [
    //     {
    //         name : 'sheet1',
    //         data : [
    //             [
    //                 '1',
    //                 'Michael',
    //             ],
    //             [
    //                 '2',
    //                 'Jordan'
    //             ]
    //         ]
    //     }
    // ];
    // for (var i = 0; i < obj[0].data.length; i++){
    //     data[0].data.push(obj[0].data[i]);
    // }


    // 写xlsx
    var buffer = xlsx.build(data);
    fs.writeFile('E:/resut.xls', buffer, function (err)
        {
            if (err)
                throw err;
            console.log('Write to xls has finished');


        }
    );

    res.send("1111");
});
module.exports = router;
