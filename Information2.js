function suivant()
{
    if(document.getElementById('Intervention').value=="")
    {
        alert(" Intervention:payante ou non payante obligatoire!")
    }
   else if(document.getElementById('ref').value=="")
    {
        alert(" Réf.Client obligatoire!")
    }
    else 
    {
        window.open("InformationTechnicien.html",'_self',false)
    }
}