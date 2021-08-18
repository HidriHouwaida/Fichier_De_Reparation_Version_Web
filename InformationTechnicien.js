function suivant()
{
    if(document.getElementById('technicien').value=="")
    {
        alert(" Technicien obligatoire!")
    }
   else if(document.getElementById('Aide').value=="")
    {
        alert("Aide Technicien obligatoire!")
    }
    else if(document.getElementById('debut').value=="")
    {
        alert(" Début Réparation  obligatoire!")
    }

    else if(document.getElementById('Fin').value=="")
    {
        alert(" Fin Réparation  obligatoire!")
    }
    else if(document.getElementById('detail').value=="")
    {
        alert("Detail obligatoire!")
    }
    else
    {
        window.open("Date.html",'_self',false)
    }
}