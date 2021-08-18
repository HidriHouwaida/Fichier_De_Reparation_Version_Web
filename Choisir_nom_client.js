function suivant()
{
    if(document.getElementById('nom').value=="")
    {
        alert(" Nom De Client obligatoire!")
    }
  
    else 
    {
        window.open("Chosir_un_produit.html",'_self',false)
    }
}