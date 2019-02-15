<?php

// Librairie pour mes fonctions afficheuses 
class Afficheur {

	public static function AfficheVignette($table) {
		foreach ($table as $vignette) {
			echo "<div class='".$vignette['css']."'>";
			echo	"<img class='bg' src='images/vignettes/bg.png' alt='vignette_bg'>
					<div class='vignette' data-hook='".$vignette['is_correct']."'>
						<img class='vignette_lit' src='".$vignette['lien_image_vignette'].".png' 
						alt='".$vignette['alt']."'>
						<img class='vignette_big' src='".$vignette['lien_image_vignette']."_big.png' alt='vignette_big'>
					</div>";
			echo "</div>";
		}
	}

	public static function AfficheCircles($table, $display=false) {
		$str = "\n<div class='container-circles'>\n";
		foreach ($table as $image_circle) {
			$str.= "<div class='layer' data-depth=".$image_circle['depth']."><img src=".$image_circle['lien_circles']." alt='circle'></div>\n";
		}
		$str.= "<div class='layer' data-depth='0.20'>
					<svg class='cercle_svg' width='600px' height='608.3px' viewBox='0 0 1006 1020' xml:space='preserve'>
						<circle class='to_expend' opacity='0.8' fill='#26368A' cx='493' cy='479.167' r='336.236'/>
					</svg>
				</div>\n";
		$str.= "</div>\n";
		if($display)
			return $str;
		else
			echo $str;
	}

	public static function AfficheImage($table) {
		echo "\n<div class='image'>\n";
		foreach ($table as $image) {
			echo "<div class=".$image['css']." >\n";
			echo "<div class='layer' data-depth=".$image['depth']."><img src=".$image['lien_image']." alt=".$image['alt']."></div>\n";
			echo "</div>\n";
		}
		echo "</div>\n";
	}

	public static function AfficheBloc($table) {
		foreach ($table as $ligne_bloc) {
				echo "<div class=".$ligne_bloc['css']." >\n";
				echo "<h1>".$ligne_bloc['titre']."</h1>\n";
				echo "<div>".$ligne_bloc['contenu']."</div>\n";
				echo "</div>\n";
			}
	}

	public static function AfficheLiens($table) {
		foreach ($table as $ligne_sources) {
			echo	"<p>".$ligne_sources['contenu']."<a href='".$ligne_sources['lien_adresse']."' target='_blank' >".$ligne_sources['lien_nom']."</a>.</p>\n";
		}
	}
	
	public static function AfficheTitre($table) {
		foreach ($table as $ligne_titre) {
			echo "<h2 class='title'>".$ligne_titre['titre_constellation']."</h2>";
		}
	}

	public static function AfficheSvg($name, $display=false) {
		$svg = simplexml_load_file("svg/".$name.".svg");
		if($display)
			return $svg->asXML();
		else
			echo $svg->asXML();
	}

}

?>