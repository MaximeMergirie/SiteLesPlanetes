<?php
if (!isset($_GET["page"])) {
    $title = "Accueil";
    $contenu = "accueil.html";
}
elseif ($_GET["page"]=="accueil"){
    $title = "Accueil";
    $contenu =  "accueil.html";
 }
elseif ($_GET["page"]=="presentation"){
    $title = "Présentation";
    $contenu =  "presentation.html";
 }
elseif ($_GET["page"]=="planetesInterieures"){
    $title = "Les planètes Intérieures";
    $contenu = "planetesInterieures.html";

}elseif ($_GET["page"]=="planetesGeantes"){
    $title = "Les planètes Géantes";
    $contenu = "planetesGeantes.html";
}
elseif ($_GET["page"]=="contact"){
    $title = "Contact";
    $contenu = "contact.html";
}
else{
    $contenu = "erreur.php";
}
//Structure de page récupérée en php
include "include/head.php";
include "include/nav.php";
include "include/".$contenu;
include "include/footer.php";