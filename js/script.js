$(document).ready(function () {
  $(".content").on("click", function () {
    var paragraphe = $(this).siblings(".para") //Je récupère le frère ul du lien cliqué
    if (paragraphe.is(":hidden")) { // si le sousmenu cliqué est fermé (caché)
      $(".para").slideUp(); //je remonte tous les sous menu
      paragraphe.slideDown(); // je fais apparaitre le sous menu du lien cliqué
    } else {
      paragraphe.slideUp(); //sinon je recche le sous menu cliqué
    }
  });
/*------Popup jupiter----------------------*/
  $("#jupiter").on("click", function () {
    var transp = $("#container").css("opacity");
    if (transp == "1") {
      $("#container").css("opacity", "0.2");
    } else {
      $("#container").css("opacity","1");
    }
    $("#popup").slideDown();
    $("#imgPopup").html("<img src='img/jupiter.png' class='image'>");
    $("#nomLogo").text("Jupiter");
    $("#texte p").text("Lorem ipsum, dolor sit amet consectetur adipisicing elit. Voluptatum maiores,Lorem ipsum dolor sit amet consectetur adipisicing elit. Harum minus ducimus rerum animi provident ad, praesentium, molestiae quia nemo incidunt est excepturi nisi, sint hic veniam fugiat alias facilis tenetur");
  });
/*------Popup saturne----------------------*/
  $("#saturne").on("click", function () {
    var transp = $("#container").css("opacity");
    if (transp == "1") {
      $("#container").css("opacity", "0.2");
    } else {
      $("#container").css("opacity","1");
    }
    $("#popup").slideDown();
    $("#imgPopup").html("<img src='img/saturne.png' class='imageSaturne'>");
    $("#nomLogo").text("Saturne");
    $("#texte p").text("Lorem ipsum, dolor sit amet consectetur adipisicing elit. Voluptatum maiores,Lorem ipsum dolor sit amet consectetur adipisicing elit. Harum minus ducimus rerum animi provident ad, praesentium, molestiae quia nemo incidunt est excepturi nisi, sint hic veniam fugiat alias facilis tenetur");
  });
/*------Popup uranus----------------------*/
  $("#uranus").on("click", function () {
    var transp = $("#container").css("opacity");
    if (transp == "1") {
      $("#container").css("opacity", "0.2");
    } else {
      $("#container").css("opacity","1");
    }
    $("#popup").slideDown();
    $("#imgPopup").html("<img src='img/uranus.png' class='image'>");
    $("#nomLogo").text("Uranus");
    $("#texte p").text("Lorem ipsum, dolor sit amet consectetur adipisicing elit. Voluptatum maiores,Lorem ipsum dolor sit amet consectetur adipisicing elit. Harum minus ducimus rerum animi provident ad, praesentium, molestiae quia nemo incidunt est excepturi nisi, sint hic veniam fugiat alias facilis tenetur");
  });
/*------Popup Neptune----------------------*/
  $("#neptune").on("click", function () {
    var transp = $("#container").css("opacity");
    if (transp == "1") {
      $("#container").css("opacity", "0.2");
    } else {
      $("#container").css("opacity","1");
    }
    $("#popup").slideDown();
    $("#imgPopup").html("<img src='img/neptune.png' class='image'>");
    $("#nomLogo").text("Neptune");
    $("#texte p").text("Lorem ipsum, dolor sit amet consectetur adipisicing elit. Voluptatum maiores,Lorem ipsum dolor sit amet consectetur adipisicing elit. Harum minus ducimus rerum animi provident ad, praesentium, molestiae quia nemo incidunt est excepturi nisi, sint hic veniam fugiat alias facilis tenetur");
  });
  /*------Fermeture Popup----------------------*/
  $("#close").on("click", function () {
    var transp = $("#container").css("opacity");
    if (transp == "0.2") {
      $("#container").css("opacity", "1");
    } else {
      $("#container").css("opacity", "0.2");
    }
    $("#popup").slideUp();
  });
/*********************Animation planète***************** */
/*-------------------Anim mars-----------------------*/
$("#buttonMars").on("click", function () {

  $("#orbiteMars").addClass("animationMars");
});
/*-------------------Anim Terre-----------------------*/
$("#buttonTerre").on("click", function () {

  $("#orbiteTerre").addClass("animationTerre");
});
/*-------------------Anim Venus-----------------------*/
$("#buttonVenus").on("click", function () {

  $("#orbiteVenus").addClass("animationVenus");
});
/*-------------------Anim mercure-----------------------*/
$("#buttonMercure").on("click", function () {

  $("#orbiteMercure").addClass("animationMercure");
});
/*-------------------Anim Totale-----------------------*/
$("#buttonAnim").on("click", function () {

  $("#orbiteMars").addClass("animationMars");
  $("#orbiteTerre").addClass("animationTerre");
  $("#orbiteVenus").addClass("animationVenus");
  $("#orbiteMercure").addClass("animationMercure");
});
/*-------------------Anim Reset-----------------------*/
$("#buttonReset").on("click", function () {

  $("#orbiteMars").removeClass("animationMars");
  $("#orbiteTerre").removeClass("animationTerre");
  $("#orbiteVenus").removeClass("animationVenus");
  $("#orbiteMercure").removeClass("animationMercure");
});
/*-------------------Redirection bandeau-----------------------*/
$("header").on("click", function () {
document.location.href="accueil.html";
});

/*------------------Hover maps page contact-------Version destock-----------*/
// $("#sectionContact div").hover(function () {
//   $("#maps").css({
//   "transform": "translateX(-450px)",
//    "transition": "1s"
//   });
//           }, function () {
//             $("#maps").css({
//               "transform": "translateX(450px)",
//               "transition-duration": "1s"
//             });
//           }
//           );

/*--------------------Controle du formulaire-----------------*/

var test1; 
var  test2; 

$("#nom").on("blur", function () { 
    var valeurNom = $("#nom").val();
    var longueurNom = valeurNom.length;
   
    if (valeurNom == ""|| longueurNom < 2) {
        $("#alertNom").text("✘").css({"color":"red"});
    }else{
        $("#alertNom").text("✔").css("color","green"); 
        test1=true;
    }
});
      $("#email").on("blur", function () { 
        var regExp = /^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/;
        var mail = $("#email").val();
        if (regExp.test(mail)) {
          $("#alertMail").text("✔").css({"color":"green"});
          test2=true;
          } else {
            $("#alertMail").text("✘").css("color","red"); 
          }
  });

$("#reset").on("click", function () {
  $("#alertNom").text("");
  $("#alertMail").text("");
  });

$("#envoyer").on("click", function () {
  if (test1==true && test2==true) {
    alert("Formulaire envoyé")
    location.reload();
  }else{
    alert("Attention croix rouges !")
  }
  });

});