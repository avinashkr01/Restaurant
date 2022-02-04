// js code for booking form

function validate(){

    let a = document.getElementById('name').value;
    
    let b = document.getElementById('phone').value;

    let c = document.getElementById('email').value;

    let d = document.getElementById('person').value;

    let e = document.getElementById('date').value;

    if (a == ""){

        document.getElementById('Name').innerHTML = '*';

        return false;

    }
    
    else if (b == ""){

        document.getElementById('Phone').innerHTML = '*';

        return false;

    }
    
    else if (c == ""){

        document.getElementById('Email').innerHTML = '*';

        return false;

    }
    
    else if (d == ""){

        document.getElementById('Person').innerHTML = '*';

        return false;

    }
    
    else if(e == ""){

        document.getElementById('Date').innerHTML = '*';

        return false;

    }

    else{
        document.write("<h1>Thank you for booking a table.</h1>")
    }

}

// js code for menu bar

$(document).ready(function(){
    $('.menu-bar').click(function(){
        $('.nav-right').toggle();
    })
})