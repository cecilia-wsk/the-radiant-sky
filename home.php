			<div class="container-title">
				<div class="layer" data-depth="0.10"><h1>The Radiant Sky</h1></div>
				<div class="layer" data-depth="0.00">
					<h1>The Radiant Sky</h1>
					<h2>découvre les légendes qui se cachent derrière les étoiles.</h2>
				</div>
			</div>
			<div class="container-enter">
				<div class="layer" data-depth="0.00">
					<a class="enter" href="index.php?menu=carousel" aria-label="Enter">
						<?php
							Afficheur::AfficheSvg("eye_home");
						?>
						<svg class="arrow-enter" width="25px" height="40px" viewBox="236 236 40 40" xml:space="preserve">
							<path fill="#fff" d="M249.78,243.876c0.5-0.5,1.285-0.5,1.785,0c0.482,0.482,0.482,1.285,0,1.767l-9.049,9.049h29.862c0.695,0,1.267,0.554,1.267,1.25c0,0.696-0.571,1.268-1.267,1.268h-29.862l9.049,9.032c0.482,0.5,0.482,1.304,0,1.785c-0.5,0.499-1.285,0.499-1.785,0l-11.192-11.192c-0.482-0.482-0.482-1.285,0-1.767L249.78,243.876z"/>
						</svg>
					</a>
				</div>
			</div>
			<?php
				$sql = " SELECT * FROM `home` ORDER BY `index` "; 
			    $resultat_requete = $connexion->requete($sql);
			    $tableau_requete = $connexion->retourne_tableau();
				Afficheur::AfficheImage($tableau_requete);
			?>
