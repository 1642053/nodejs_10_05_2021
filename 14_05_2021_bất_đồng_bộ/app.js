// callback
function a(f)
{
    setTimeout(() => {
        console.log(1);
        f();
    }, 1000);
}

function b()
{
    console.log(2);
}

//a( b );
//b();

// callback hell
function c(so, callback)
{
    setTimeout(() => {
        console.log(so);
        callback();
    }, 1000);
}

// c(1, ()=>{
//     c(2, ()=>{
//         c(3, ()=>{
//             c(4, ()=>{
//                 c(5, ()=>{

//                 })
//             })
//         })
//     })
// });

// => promise

// kiểu dữ liệu object

// 1. cú pháp khai báo
// const p = new Promise((resolve, reject)=>{
//     const kq=2;
    
//     if(kq==1)
//     {
//         // đúng trả về kết quả
//         resolve('hello');
//     }

//     // lỗi
//     reject('lỗi');
// });

// cách sử dụng
//p
// kết quả
//.then( (results)=>console.log(results) )
// lỗi
//.catch( (err)=>console.log(err) );

//----
function d()
{
    return new Promise((resolve, reject)=>{
        setTimeout(() => {
            const kq=1;
        
            if(kq==1)
            {
                // đúng trả về kết quả
                resolve(1);
            }
        
            // lỗi
            reject('lỗi');
        }, 1000);
    });
}

function e()
{
    return new Promise((resolve, reject)=>{
        const kq=1;
        
        if(kq==1)
        {
            // đúng trả về kết quả
            resolve(2);
        }
    
        // lỗi
        reject('lỗi');
    });
}

// chạy
// d()
// .then( (results)=>console.log(results) )
// .catch( (err)=>console.log(err) );

// e()
// .then( (results)=>console.log(results) )
// .catch( (err)=>console.log(err) );

// chạy không bất đồng bộ
// d()
// .then( (results) => e() )
// .then( (results_two) => console.log(results_two) )
// .catch( (err)=>console.log(err) );

// promise hell

// => asyn await

async function ketqua()
{
    await d();
    await e();
}

ketqua();