



function ans()
{
    var res=0;
    var a=document.getElementById('q1r3');
    

        if(a.checked == true)
        {
                res++;
        }
    
        var b=document.getElementById('q2r2');

        if(b.checked == true)
        {
                res++;
        }
    
        var c=document.getElementById('q3r2');

        if(c.checked == true)
        {
                res++;
        }

        var d=document.getElementById('q4r1');

        if(d.checked == true)
        {
                res++;
        }

        var e=document.getElementById('q5r2');
        
        if(e.checked == true)
        {
                res++;
        }
            
    alert("Right Answer "+res);
 
}
    
