
function ouvertfermer(element)
{ 
    var idelement = $(element).val();
    $(".typedebatiments").hide();
    $("#"+idelement).show();
}

function gererafichage()
{
   var idelement= $("#diferentbatiments input:checked" )[0].value;
    $(".typedebatiments").hide();
    $("#"+idelement).show();
}

function calculerprixresidentiel(element)
{
    element= $($(element));
   var totalFraisInstalation = $("#nbrofelevtor").val() * Number(element.data('price')) *Number(element.data('pourcentage'));
             $("#fraisInstallations").val(totalFraisInstalation);  
  
}

 function calculateResidentiel()
{
   /* var field1=document.getElementById("nbrapartement").value;
    var field2=document.getElementById("nbroffloor").value;*/
     var nbrAppartements = obtenirValeur($("#nbrapartement"));
     var nbrEtages = obtenirValeur($("#nbroffloor"));
     var nbrSoussol= obtenirValeur($("#nbrofbasement"));
     var moyenne = Math.ceil (nbrAppartements/(nbrEtages));
     var nbrcage = Math.ceil(moyenne/6);
     var nbrcolonne = Math.ceil((nbrEtages)/20);
     var nbrAscenseurs = nbrcage * nbrcolonne;
         $("#nbrofelevtor").val(nbrAscenseurs);  
       var element=$($("#frais input:checked" ));

    var totalFraisInstalation = nbrAscenseurs * Number(element.data('price')) *Number(element.data('pourcentage'));
             $("#fraisInstallations").val(totalFraisInstalation);
}


function calculateprixcorporatif(element)
{
     element= $($(element));
   var totalFraisInstalation = $("#nbrofelevtor").val() * Number(element.data('price')) *Number(element.data('pourcentage'));
             $("#fraisInstallations").val(totalFraisInstalation);
}

function calculatecorporatif()
{
    var nbrcompagnie = obtenirValeur($("#nbrofcompagnie"));
    var nbretages = obtenirValeur($("#nbroffloor"));
    var nbrsoussol = obtenirValeur($("#nbrofbasement"));
    var nbrparking = obtenirValeur($("#nbrofparking"));
    var nbroccupantsparetages = obtenirValeur($("#nbrofoccupantsperfloor"));
    var occupantstotal = Math.ceil (nbroccupantsparetages * (nbretages + nbrsoussol));
    var nbrascenseurs = Math.ceil (occupantstotal/1000);
    var colonnesrequises = Math.ceil ((nbretages + nbrsoussol)/20);
    var ascenseursparcolonne = Math.ceil (nbrascenseurs/colonnesrequises);
    var ascenseurtotal = Math.ceil (ascenseursparcolonne * colonnesrequises);
          $("#nbrofelevtor").val(ascenseurtotal);  
       var element=$($("#frais input:checked" ));
     
    var totalFraisInstalation = ascenseurtotal * Number(element.data('price')) *Number(element.data('pourcentage'));
             $("#fraisInstallations").val(totalFraisInstalation);
}


function calculateprixhybride(element)
{
     element= $($(element));
   var totalFraisInstalation = $("#nbrofelevtor").val() * Number(element.data('price')) *Number(element.data('pourcentage'));
             $("#fraisInstallations").val(totalFraisInstalation);  
}
function calculatehybride()
{
     var nbrcompagnie = obtenirValeur($("#nbrofcompagnie"));
    var nbretages = obtenirValeur($("#nbroffloor"));
    var nbrsoussol = obtenirValeur($("#nbrofbasement"));
    var nbrparking = obtenirValeur($("#nbrofparking"));
    var nbroccupantsparetages = obtenirValeur($("#nbrofoccupantsperfloor"));
    var occupantstotal = Math.ceil (nbroccupantsparetages * (nbretages + nbrsoussol));
    var nbrascenseurs = Math.ceil (occupantstotal/1000);
    var colonnesrequises = Math.ceil ((nbretages + nbrsoussol)/20);
    var ascenseursparcolonne = Math.ceil (nbrascenseurs/colonnesrequises);
    var ascenseurtotal = Math.ceil (ascenseursparcolonne * colonnesrequises);
         $("#nbrofelevtor").val(ascenseurtotal);  
       var element=$($("#frais input:checked" ));
     
    
    var totalFraisInstalation = ascenseurtotal * Number(element.data('price')) *Number(element.data('pourcentage'));
             $("#fraisInstallations").val(totalFraisInstalation);
}

    
function calculatecommercial()
{
    var nbrcofshops = obtenirValeur($("#nbrofshops"));
    var nbrfloor = obtenirValeur ($("#nbroffloor"));
    var nbrbasement = obtenirValeur ($("#nbrofbasement"));
    var nbrparking = obtenirValeur ($("#nbrofparking"));
    var nbrascenseurdeployé = obtenirValeur ($("#nbrofelevator"));
    var nbrcageascenseursdéployer = (1);
    var nbrcages = (nbrcageascenseursdéployer);
         $("#nbrofelevtor").val(nbrascenseurdeployé);  
       var element=$($("#frais input:checked" ));
    
}



function obtenirValeur(element){
    var valeur = 1;
    if(Number($(element).val()) > 1){
       valeur = Number($(element).val());
       }
       return valeur;
}
                
$(function () {
  gererafichage();
  }
  
  )
    