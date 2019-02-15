	<!-- Scripts -->
	<script src="libs/jquery.min.js"></script>
	<script src="libs/parallax.js"></script>
	<script src="assets/langue.php"></script>
	<?php if ($contenu !== "home") { ?> 
		<script src="libs/classie.js"></script>
		<script src="libs/dynamics.min.js"></script>
		<script src="libs/snap.svg-min.js"></script>
	<?php } ?>
	<script src="js/<?php echo $contenu ?>.js"></script>
	<?php if ($contenu !== "home") { ?> 
		<script src="js/menuburger.js"></script>
	<?php } ?>
	<?php if ($contenu === "games") { ?>
    <script src="libs/plugins.js"></script>
    <script src="libs/jquery-ui.min.js"></script>
	<script src="coords.php?constellation=<?php echo $_GET['constellation']; ?>"></script>
	<script src="js/dots.js"></script>
	<script src="js/vignette.js"></script>
	<script src="js/create.js"></script>
	<?php } ?>