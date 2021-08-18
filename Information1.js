function suivant()
{
    if(document.getElementById('Identification').value=="")
    {
        alert("  Identification No  obligatoire!")
    }
   else if(document.getElementById('Agent').value=="")
    {
        alert(" Agent agrée  obligatoire!")
    }
    else if(document.getElementById('Serial').value=="")
    {
        alert("  Serial no   obligatoire!")
    }
    else 
    {
        window.open("Information2.html",'_self',false)
    }
}