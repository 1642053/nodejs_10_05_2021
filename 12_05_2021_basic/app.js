// function
// function giai_PTB1(a, b)
// {
//     return (a==0) ? 'PTVN' : 'PT có nghiệm: ' + (-b)/a;
// }

// arrow function
// giai_PTB1 = function(a, b){
//     return (a==0) ? 'PTVN' : 'PT có nghiệm: ' + (-b)/a;
// }

// giai_PTB1 = (a, b)=>{
//     return (a==0) ? 'PTVN' : 'PT có nghiệm: ' + (-b)/a;
// }

// console.log( giai_PTB1(1,2) );

// oop

// 1. khai báo
// class Abc{
//     index(){
//         return 'index';
//     }
// }

// class Bcd extends Abc{ }

// 2. cách sử dụng
// let kq = new Bcd();

// console.log( kq.index() );

// gọi đến file exports.js để lấy giá trị trong file ra sử dụng
//const a = require('./exports');

//console.log( a );

// gọi đến class ToanHoc
// const ToanHoc = require('./ToanHoc');

// const kq = new ToanHoc();

// console.log( kq.giai_PTB1(1,2) );

// sử dụng method (function) chung

// ---------------------

// 1. thu thập dữ liệu

// Quản lý công ty Abc

// Có 3 phòng ban:

// 1.1 phongKeToan : kiemToan(), tinhLuong()

// 1.2 phongKinhDoanh: timKiemKhachHang(), tinhLuong()

// 1.3 phongKyThuat: baoTri(), tinhLuong

// 2. code

// class Abc{
//     constructor(a, b) {
//         this._a = a;
//         this._b = b;
//     }

//     tinhLuong(){
//         return this._a + ' và ' + this._b;
//     }

//     tinhTuoi(){
//         return this._a;
//     }
// }

// class phongKeToan extends Abc{

//     constructor(a, b) {
//         super(a, b);
//     }

//     kiemToan(){
//         return this._a + ' và ' + this._b;
//     }
// }

// class phongKinhDoanh extends Abc{
//     timKiemKhachHang(){}
// }

// class phongKyThuat extends Abc{
//     baoTri(){}
// }

// gọi sử dụng
// const kq = new phongKeToan(2,5);

// console.log( kq.kiemToan() );

// sử dụng property (biến) chung


// -----------------

// quản trị 1 website
// thu thập dữ liệu

// quản trị admin

// có những modules sau

// 1. bảng điều khiển: showModules(), checkLogin()

// 2. danh mục: add(), edit(), delete(), sort(), checkLogin()

// => các thuộc tính: name, alias, img, id_parents, id_user, status, trash

// 3. sản phẩm: add(), edit(), delete(), pagination(), search(), checkLogin()

// => các thuộc tính: name, alias, img, price, id_parents, id_user, status, trash

// 4. thành viên: add(), edit(), delete(), pagination(), search(), changePassword(), checkLogin()

// => các thuộc tính: name, username, password, email, phone, status, trash