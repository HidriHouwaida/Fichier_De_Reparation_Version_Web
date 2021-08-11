function Sign_In()
{
    window.open("Login_OU_Inscription.html",'_self',false)
}

function creer()
{
    if(document.getElementById('Nom').value=="")
    {
        alert("Nom de client obligatoire!")
    }
    else if(document.getElementById('MotDePasse').value=="")
    {
        alert("Mot De Passe obligatoire!")
    }
    else if(document.getElementById('MotDePasse').value.length<6)
    {
        alert('Longueur minimal de mot de passe 6! ')
    }
    else if(document.getElementById('Adresse').value=="")
    {
        alert("Adresse obligatoire!")
    }
    else if(document.getElementById('Société').value=="")
    {
      alert("Nom de Société obligatoire")
    }
    else if(document.getElementById('Téléphone').value=="")
    {
        alert("Numéro de téléphone obligatoire!")
    }
    else
    {
        window.open("Login_OU_Inscription.html",'_self',false)
    }
}