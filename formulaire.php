<?php

    // Chargement des fonctions utiles
    include "assets/BDD.php";
    // Création de la class BDD.php
    $connexion = New BDD();

    $hasError = false;

    // Verification du formulaire -> voir la fonction secure_donnee dans BDD.php 
    $nom = $connexion->secure_donnee($_POST['nom']);
    if ($nom == false)
        $hasError = true;
    // Vérification du bon format de mail -> trouvé sur https://snipt.net/
    $mail_verif = preg_match("/^[_\.0-9a-zA-Z-]+@([0-9a-zA-Z][0-9a-zA-Z-]+\.)+[a-zA-Z]{2,6}$/i", trim($_POST['mail']));
    $mail = $connexion->secure_donnee($_POST['mail']);
    if ($mail == false || $mail_verif == false)
        $hasError = true;
    $objet = $connexion->secure_donnee($_POST['objet']);
    if ($objet == false)
        $hasError = true;
    $message = $connexion->secure_donnee($_POST['message']);
    if ($message == false)
        $hasError = true;

    // S'il n'y a pas d'erreur : 
    if(!$hasError) {
        // J'envoie les infos à ma BDD
        $sql= " INSERT INTO `PT2015-2016_wielonsky`.`contact_contenu` 
        (`id_contact_contenu`, `nom_contenu`, `email_contenu`, `objet_contenu`, `message_contenu`) 
        VALUES (NULL, '$nom', '$mail', '$objet', '$message') ";
        $requete = $connexion->requete($sql);

        // Pour envoyer le message à mon mail perso 
        $to      = 'cecilia.wielonsky@gmail.com';
        $subject = $objet;
        $message = $message;
        $headers = "From:".$mail.""."\r\n".
        "Reply-To:".$mail.""."\r\n".
        "X-Mailer: PHP/".phpversion();

        mail($to, $subject, $message, $headers);
            
    } else {
        echo "<div class='info'><h3>Impossible d'envoyer les informations à la base $base</h3></div>";
    }


?>