		<div class="container-eye">
			<div class="layer" data-depth="0.00">
				<button class="action-open" aria-label="Learn more">
					<?php
						Afficheur::AfficheSvg("eye_carousel");
					?>
				</button>
			</div>
		</div>
 		
		<div class="container-explication">
			<img class="explication-1" src="images/explication1.png" alt="arrowkeys">
			<img class="explication-2" src="images/explication2.png" alt="enter+echap">
			<div class="explication-3"><p>Clique ici pour <br/> changer de culture &nbsp;&nbsp;&#8594;</p></div>
		</div>

		<div class="container-nav-under">
			<div class="container-nav">
				<div class="nav-under">
					<button class="nav-prev" aria-label="Precedent"><img src="images/icones/left.png" alt="nav_left" width="15"/></button>
					<?php 
						$sql = " SELECT * FROM `carousel_trad` WHERE `langue` = '$langue' "; 
					    $resultat_requete = $connexion->requete($sql);
					    $tableau_requete = $connexion->retourne_tableau();
						Afficheur::AfficheTitre($tableau_requete);
					?>
					<button class="nav-next" aria-label="Next"><img src="images/icones/right.png" alt="nav_right" width="15"/></button>
				</div>
				<div class="cursor">
					<svg id="cursor" width="318px" height="76.5px" viewBox="0 0 486.085 116.543" xml:space="preserve">
					<circle id="indic-0" fill="#181FA3" cx="244.501" cy="19" r="8"/>
					<circle id="indic-1" fill="#181FA3" cx="374.501" cy="45" r="5"/>
					<circle id="indic-2" fill="#181FA3" cx="474.501" cy="101" r="5"/>
					<path opacity="0.4" fill="#181FA3" d="M14.668,116.543c55.476-49.699,138-81.21,230.149-81.209
						c92.147,0,174.668,31.51,230.146,81.207"/>
					</svg>
				</div>
			</div>
			<div class="container-close">
				<button class="action-close" aria-label="Close"></button>
			</div>
			<div class="container-games">
				<div class="action-games" aria-label="Games">
					<a id="game_link" href="index.php?menu=games">
						<?php
							Afficheur::AfficheSvg("game");
						?>
					</a>
				</div>
			</div>
			<div class="container-change">
				<button class="change-legend" aria-label="Switch Legend">
					<?php
						Afficheur::AfficheSvg("change_legend");
					?>
				</button>
			</div>
		</div>