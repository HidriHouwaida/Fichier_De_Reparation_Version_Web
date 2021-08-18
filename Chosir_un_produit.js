function suivant()
{
    if(document.getElementById('produit').value=="")
    {
        alert(" Produit obligatoire!")
    }
   else if(document.getElementById('modele').value=="")
    {
        alert(" Modéle obligatoire!")
    }
    else if(document.getElementById('marque').value=="")
    {
        alert("  Marque obligatoire!")
    }
    
    else 
    {
        window.open("Information.html",'_self',false)
    }
}