function forgot()
{
    if(document.getElementById('NomClient').value == '') {
        alert('Nom de client obligatoire!')
     } 
     else if(document.getElementById('Email').value == '')
     {  alert(' Email obligatoire!')
     }
}