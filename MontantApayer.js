function suivant()
{   if(document.getElementById('Electrostar').value=="")
    {
        alert("Montant à payer par Electrostar HT obligatoire!")
    }
    else if(document.getElementById('client').value=="")
    {
        alert("Montant à payer par le client HT obligatoire!")
    }
    else
   {window.open("Travail_termine_ou_non.html",'_self',false)}
}