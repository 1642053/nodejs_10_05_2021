class ToanHoc
{
    giai_PTB1(a, b)
    {
        return (a==0) ? 'PTVN' : 'PT có nghiệm: ' + (-b)/a;
    }
    giai_PTB2(a, b, c)
    {
        var kq='';

        if(a==0)
        {
            kq=giai_PTB1(b, c);
        }
        else
        {
            var delta = b*b - 4*a*c;

            if(delta < 0)
            {
                kq = 'PTVN';
            }
            else if(delta == 0)
            {
                kq = 'PT có nghiệm kép x1=x2=' + (-b) / (2*a);
            }
            else
            {
                var x1, x2;

                x1 = ( (-b) + Math.sqrt(delta) ) / (2*a);
                x2 = ( (-b) - Math.sqrt(delta) ) / (2*a);

                kq = 'PT có 2 nghiệm phân biệt x1='+x1+' và x2='+x2;
            }
        }

        return kq;
    }
}

module.exports = ToanHoc;