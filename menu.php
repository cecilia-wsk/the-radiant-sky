 		<div class="container-menu">
			<div class="container-burger">
				<button class="burger <?php if ($contenu === 'apropos' || $contenu === 'contact') { echo " is-white"; } ?>" aria-label="Menu"></button>
			</div>
			<nav class="menu">
				<div class="morph-shape" data-morph-open="M263.833,141.794c0-22.479,0-114.544,0-141.794H111.96c-12.04,17.071-11.421,40.432-7.043,64.75c4.5,25,64,80.5,81.5,85.5C211.587,157.441,245.793,156.459,263.833,141.794" 
				data-morph-close="M263.833,141.794c0-22.479,0-114.544,0-141.794L111.96,0
				c-12.04,17.071-14.113,56.6,6.456,62.25c45.5,12.5,64,34.023,81,76C206.71,156.261,245.793,156.459,263.833,141.794">
					<svg class="menu-line" width="263.833px" height="263.5px" viewBox="0 0 263.833 263.5" xml:space="preserve">
						<path id="menu-blop" opacity="<?php if($contenu === 'games') echo '1'; else echo '0.8'; ?>" fill="#26368A" d="M263.833,141.794c0-22.479,0-114.544,0-141.794L111.96,0c-12.04,17.071,7.359,32.196,21.956,47.75c30.5,32.5,37.872,41.636,79.5,77C228.226,137.331,245.793,156.459,263.833,141.794"/>
					</svg>
				</div>
			<?php
				// Par défault
				$langue='fr';

				// On restaure la langue mémorisée dans la variable de session dédiée
			    if(isset($_SESSION['langue']))
			        $langue = $_SESSION['langue'];
			    
			    // Changement de langue ?
			    $otherlang = false;
				// On regarde s'il faut changer la langue
			    if(isset($_GET['langue'])) {
			        switch($_GET['langue']) {
			            case 'fr':
			            case 'en':
			                $langue = $_GET['langue'];
			                // Changement de langue : oui
			                $otherlang = true;
			                break;
			        }
			    }
				// On mémorise la langue pour la page
			    $_SESSION['langue'] = $langue;

				$sql = " SELECT * FROM `menu` INNER JOIN `menu_trad` ON `id_menu`=`trad_menu` WHERE `langue`='$langue' ORDER BY `index` "; 
			    $resultat_requete = $connexion->requete($sql);
			    $tableau_requete = $connexion->retourne_tableau();
			    
				echo "\n<ul class='menu-links'>\n";
				foreach ($tableau_requete as $ligne_menu) {
					echo "<li class='menu-link-nav";
					if($contenu === 'apropos' || $contenu === 'contact') 
						echo " is-blue"; 
					echo "'><a title='".$ligne_menu['designation']."' href='index.php?menu=".$ligne_menu['lien']."'>";
					echo $ligne_menu['designation']."</a></li>\n";
				}
				echo "<li class='menu-link-sound'>
							<p>Son</p>
							<span  class='menu-sound-on'>on</span>
							<span class='menu-sound-off'>off</span>
						</li>
						<li class='menu-link-lang";
					if($contenu === 'apropos' || $contenu === 'contact') 
						echo " is-blue"; 
					echo "'>
							<a href='index.php?menu=".$contenu;
							if($contenu ==='games') echo "&amp;constellation=".$_GET['constellation']."&amp;langue=fr'";
							else 
								echo "&amp;langue=fr'"; 
							if ($langue === 'fr') echo " class='langue-current'";
					echo "><h3>FR</h3></a> | 
							<a href='index.php?menu=".$contenu;
							if($contenu ==='games') echo "&amp;constellation=".$_GET['constellation']."&amp;langue=en'"; 
							else 
								echo "&amp;langue=en'";
							if ($langue === 'en') echo " class='langue-current'";
					echo "><h3>EN</h3></a>
						</li>\n";
				echo "</ul>\n";
			?>
			</nav>
			<?php if ($contenu === 'apropos' || $contenu === 'contact') { ?> 
			<div class="container-border">
		        <div class="screen-border screen-border-top"></div>
		        <div class="screen-border screen-border-left"></div>
		        <div class="screen-border screen-border-right"></div>
		        <div class="screen-border screen-border-bottom"></div>
		    </div>
			<?php } ?>
		</div>