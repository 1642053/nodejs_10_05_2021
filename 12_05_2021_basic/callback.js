// xử lý bất đồng bộ
// callback

function a(f)
{
    setTimeout(() => {
        console.log('a');
        f();
    }, 3000);
}

function b()
{
    console.log('b');
}

a( b );
//b();

// promise
// asyn await