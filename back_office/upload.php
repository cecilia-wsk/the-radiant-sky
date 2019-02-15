<?php 

    include "header.php"; 
    // Le verif LOGIN / MDP
    include "login.php"; 

?>
    <link rel='stylesheet' href='style/upload.css'>
        
        <title>The Radiant Sky</title>
</head>

<body>

<?php

$constellation = $_GET['constellation'];
$culture = $_GET['culture'];
$table = "culture_".$culture."";
$champ = "lien_image_".$culture."";
$cle_primaire = $connexion->recuperer_cle_primaire($table);

?>

<!-- Bouton retour -->
    <div class="retour">
        <a href="signe.php?constellation=<?php echo $constellation; ?>&amp;culture=<?php echo $culture; ?>" aria-label="Precedent">
        <?php
            $svg = simplexml_load_file("svg/retour.svg");
            echo $svg->asXML();
        ?>
        </a>
    </div>

<?php

if( isset($_POST['envoi']) ) // si formulaire soumis
{
    $file = $_FILES['userfile'];

    $content_dir = '../images/dessin_'.$culture.'/'; // dossier où sera déplacé le fichier

 	if( $file['error'] == 2 ) {
        echo "<div class='info'><h3>Le fichier excède le poids autorisé !</h3></div>";
        return;
 	}

    $tmp_file = $file['tmp_name'];

    if( !is_uploaded_file($tmp_file) ) {
        echo "<div class='info'><h3>Le fichier ne s'est pas chargé correctement !</h3></div>";
        return;
    }

    // on vérifie maintenant l'extension
    $type_file = $file['type'];

    if( !strstr($type_file, 'jpg') && !strstr($type_file, 'jpeg') 
    	&& !strstr($type_file, 'bmp') && !strstr($type_file, 'gif') 
    	&& !strstr($type_file, 'png') )
    {
        echo "<div class='info'><h3>Attention le fichier n'est pas une image !</h3></div>";
        return;
    }

    // on copie le fichier dans le dossier de destination
    $name_file = $file['name'];

    // On vérifie les caractères dans le nom du fichier uploadé
    if( preg_match('#[\x00-\x1F\x7F-\x9F/\\\\]#', $name_file) )
	{
        echo "<div class='info'><h3>Nom de fichier non valide</h3></div>";
        return;
	}
	else if( !move_uploaded_file($tmp_file, $content_dir . $name_file) )
    {
        echo "<div class='info'><h3>Impossible de copier le fichier dans $content_dir</h3></div>";
        return;
    }

    // Pour aller chercher la clé primaire de la table correspondante
    $sql = "SELECT * FROM `carousel` 
    INNER JOIN `culture_$culture` ON `id_carousel` = `id_culture_$culture`
    WHERE `nom_svg` = '$constellation' ";

    $reponse = $connexion->requete($sql);
    $ligne = $connexion->retourne_ligne();
    $id = $ligne[$cle_primaire];

    // On actualise la base de donnée avec le nouveau nom de fichier 
    $sql = "UPDATE `$table` SET `$champ` = 'images/dessin_$culture/$name_file' 
    WHERE `$cle_primaire` = $id; ";

    $connexion->requete($sql);
    echo "<div class='info'><h3>Modification effectuée !</h3></div>";

}

?>


<?php

    include "footer.php";

?>
