function suivant()
{
   if(document.getElementById('demande').value=="")
   {
       alert(" Date demande PDR obligatoire!")
   }
   else if(document.getElementById('réception').value=="")
   {
       alert(" Date réception PDR  obligatoire!")
   }
   else
   {
       window.open("Information4.html",'_self',false)
   }
}