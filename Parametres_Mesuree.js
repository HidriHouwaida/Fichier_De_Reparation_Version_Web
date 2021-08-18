function suivant()
{
    if(document.getElementById('Tension').value=="")
    {
        alert("Tension Mesurée obligatoire!")
    }
   else if(document.getElementById('soufflage').value=="")
    {
        alert("Temps de soufflage obligatoire!")
    }
    else if(document.getElementById('Temps').value=="")
    {
        alert("Temps de reprise obligatoire!")
    }

    else if(document.getElementById('absorbé').value=="")
    {
        alert("Int absorbé obligatoire!")
    }
    else if(document.getElementById('Amp').value=="")
    {
        alert("Amp STEG obligatoire!")
    }
    else if(document.getElementById('Refoulement').value=="")
    {
        alert("Pression de Refoulement obligatoire!")
    }
    else
    {
        window.open("Montant.html",'_self',false)
    }
}