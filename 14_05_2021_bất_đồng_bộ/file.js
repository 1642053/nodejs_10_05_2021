// 1. đọc file
// 2. tạo file
// 3. sửa file
// 4. xóa file
// 5. tạo folder

// load thư viện fs
const fs = require('fs');

// 1. đọc file
fs.readFile('test.txt', (err, data)=>{
    if(err) throw err;

    //console.log(data);
});

//fs.readFileSync();

// 2. tạo file

// 2.1 appendFile()
// 2.2 open()
// 2.3 writeFile()

// ------

// 2.1 appendFile()
fs.appendFile('a.txt', 'append', (err)=>{
    if(err) throw err;

    console.log('File Created');
});

fs.appendFileSync('aaa.txt', 'appendFileSync');

const kq = fs.readFileSync('aaa.txt');
console.log(kq);

// 2.2 open()
fs.open('b.txt', 'w', (err, file)=>{
    if(err) throw err;

    console.log('File Created');
});

// 2.3 writeFile()
fs.writeFile('c.txt', 'write2', (err)=>{
    if(err) throw err;

    console.log('File Created');
});

// 3. sửa file

// 3.1 appendFile()
// 3.2 writeFile()

// 4. xóa file

// fs.unlink()

fs.unlink('b.txt', (err)=>{
    if(err) throw err;

    console.log('File Deleted');
});

// 5. tạo folder

// fs.mkdir();

// fs.mkdir('abc', (err)=>{
//     if(err) throw err;

//     console.log('Folder Created');
// });