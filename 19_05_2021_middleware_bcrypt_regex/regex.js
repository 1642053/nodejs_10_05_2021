// regex (regular expresion) : Biểu thức chính quy

// 1. chuỗi người dùng truyền vào
//const string = 'abc';

// 2. chuỗi regex
//const patern = /abc/;

// 3. hàm sử dụng để kiểm tra: test và match

// 3.1 hàm test
/*if( patern.test( string ) )
{
    // đúng
}
else
{
    // sai
}*/

// 3.2 hàm match
/*if( string.match( patern ) )
{
    // đúng
}
else
{
    // sai
}*/

// -----------------
const string = 'KNHDSJSD';

const patern = /^[^a-z]+$/;

if( patern.test( string ) )
{
    console.log('Đúng');
}
else
{
    console.log('Sai');
}

// Định nghĩa

// 1. / ... / : chuỗi patern
// 2. ^: bắt đầu chuỗi
// 3. $: kết thúc chuỗi

// 4. [a-z]: Tất cả chữ từ a-z
// 5. [A-Z]: Tất cả chữ từ A-Z
// 6. [0-9]: Tất cả số từ 0-9

// 7. +: Từ 1 -> vô hạn (trừ kí tự rỗng)
// 8. *: Vô hạn
// 9. ?: 1 kí tự và kí tự rỗng

// 10. {min, max}: số kí tự thấp nhất và nhiều nhất

// 11. . : bất kì kí tự nào

// 12. \. : trường hợp viết kí tự đặc biệt

// 13. Chuỗi patern phân biệt hoa, thường và chữ số

// 14. [^..]: phủ định nội dung bên trong


// ------------- bài tập -----

// kiểm tra số điện thoại có định dạng: 0000-000-000

// /((09|03|07|08|05)+([0-9]{8})/

// /^([a-zA-Z0-9_\.\-])+\@(([a-zA-Z0-9\-])+\.)+([a-zA-Z0-9]{2,4})+$/