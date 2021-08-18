function suivant()
{
    if(document.getElementById('modht').value=="")
    {
        alert("Montant MOD HT obligatoire!")
    }
   else if(document.getElementById('Déplacement').value=="")
    {
        alert("Montant Déplacement HT obligatoire!")
    }
    else if(document.getElementById('Transport').value=="")
    {
        alert("Montant De Transport PDR obligatoire!")
    }

    else if(document.getElementById('pdrht').value=="")
    {
        alert("Montant PDR HT obligatoire!")
    }
    else if(document.getElementById('Suppléments').value=="")
    {
        alert("Montant Autres Suppléments HT obligatoire!")
    }
    else if(document.getElementById('réel').value=="")
    {
        alert("Montant réel TTC obligatoire!")
    }
    else
    {
        window.open("Montant_A_Payer.html",'_self',false)
    }
}