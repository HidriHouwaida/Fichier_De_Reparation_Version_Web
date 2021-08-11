function reclamation()
{
    if(document.getElementById('marque').value=="")
    {
        alert("Marque obligatoire!")
    }
    else if(document.getElementById('produit').value=="")
    {
        alert("Produit obligatoire!")
    }
    else if(document.getElementById('modele').value=="")
    {
        alert("Modéle obligatoire!")
    }
    else 
    {   //insertion des données
        //ouverture de la page suivante
        window.open("DegreSatisfaction.html",'_self',false)
    }
}