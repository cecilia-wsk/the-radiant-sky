			<h1 class="title">
				<?php
					Afficheur::AfficheSvg("contact");			
				?>
			</h1>

		    <form class="form" method="post" action="formulaire.php">
                    <?php
                        Afficheur::AfficheSvg("bg_form");       
                    ?>
                    <div class="inputs-form">
                    <?php
                        $sql = " SELECT * FROM `contact`
                        INNER JOIN `contact_trad` ON `id_contact` = `trad_contact`
                        WHERE `langue` = '$langue' "; 
                        $resultat_requete = $connexion->requete($sql);
                        $tableau_requete = $connexion->retourne_tableau();
                        
                        foreach ($tableau_requete as $ligne_label) {
                            if ($ligne_label['label'] !== "message")
                                echo "<label for='".$ligne_label['label']."'>".$ligne_label['designation']."</label>
                                    <input tabindex='".$ligne_label['tabindex']."' type='".$ligne_label['type']."' id='".$ligne_label['label']."' name='".$ligne_label['label']."' required />";
                            else 
                                echo "<label for='".$ligne_label['label']."'>".$ligne_label['designation']."</label>
                                    <textarea tabindex='".$ligne_label['tabindex']."' id='".$ligne_label['label']."' name='".$ligne_label['label']."' required ></textarea>";  
                            }
                    ?>
                    </div>
                    <div class="button">
                        <button class="button-submit" type="submit" name="submit" aria-label="Envoyer">
                        	<?php
								Afficheur::AfficheSvg("rocket");										
							?>
                        </button>
                    </div>
            </form>
            <div class="message-recu"></div>


