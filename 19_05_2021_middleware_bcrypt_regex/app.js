const express = require('express');
const app = express();

// bcrypt

// 1. tạo chuỗi mã hóa
// 2. xác nhận mã hóa

// ---------

// gọi bcrypt

const bcrypt = require('bcrypt');
const saltRounds = 10;

const password = '123456';

// 1. tạo chuỗi mã hóa
bcrypt.genSalt(saltRounds, function(err, salt) {
    bcrypt.hash(password, salt, function(err, hash) {
        //console.log( hash );
    });
});

const hash = '$2b$10$Rn6cw0Cp2CjqMwScr00SaOYphSwHqsqTBKJ3oJJpeoNhBMJxeEBGi';

// 2. xác nhận mã hóa
bcrypt.compare(password, hash, function(err, result) {
    console.log(result);
});

// middleware
check_login = (req, res, next) => {
    var a=1;

    if(a==1)
    {
        res.send('Đây là phần xử lý trung gian');
    }
    else
    {
        next();
    }
}

app.get('/', check_login, (req, res)=>{
    res.send('hello');
});

app.listen(3000, ()=>{
    console.log('Server Opened');
});