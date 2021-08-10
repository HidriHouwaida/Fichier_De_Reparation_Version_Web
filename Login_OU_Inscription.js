function MotDePasse()
{
    window.open("ForgotPassword.html",'_self',false)
}

function Sign_Up()
{
    window.open("Sign_Up.html",'_self',false)
}

function isEmpty()
{
   
        if(document.getElementById('NomClient').value == '') {
           alert('Nom de client obligatoire!')
        } 
        else if(document.getElementById('MotDePasse').value == '')
        {  alert('Mot de passe obligatoire!')
        }
        
        else if(document.getElementById('MotDePasse').value.length<6){
            alert('Longueur minimal de mot de passe 6! ')
        }
      
}