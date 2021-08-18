function suivant()
{
    if(document.getElementById('achat').value=="")
    {
        alert(" Date d'achat obligatoire!")
    }
   else if(document.getElementById('Revendeur').value=="")
    {
        alert(" Revendeur obligatoire!")
    }
    else if(document.getElementById('Panne').value=="")
    {
        alert("  Panne Client obligatoire!")
    }
    else if(document.getElementById('Diag').value=="")
    {
        alert("  Diag 1er Niveau obligatoire!")
    }
    else if(document.getElementById('Diag').value=="")
    {
        alert("  Diag 1er Niveau obligatoire!")
    }
    else if(document.getElementById('intervention').value=="")
    {
        alert("   Date prévue de livraison /intervention obligatoire!")
    }
    else 
    {
        window.open("Information1.html",'_self',false)
    }
}