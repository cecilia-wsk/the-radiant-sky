-- phpMyAdmin SQL Dump
-- version 4.4.10
-- http://www.phpmyadmin.net
--
-- Client :  localhost:8889
-- Généré le :  Jeu 28 Avril 2016 à 17:57
-- Version du serveur :  5.5.42
-- Version de PHP :  5.6.10

SET SQL_MODE = "NO_AUTO_VALUE_ON_ZERO";
SET time_zone = "+00:00";


/*!40101 SET @OLD_CHARACTER_SET_CLIENT=@@CHARACTER_SET_CLIENT */;
/*!40101 SET @OLD_CHARACTER_SET_RESULTS=@@CHARACTER_SET_RESULTS */;
/*!40101 SET @OLD_COLLATION_CONNECTION=@@COLLATION_CONNECTION */;
/*!40101 SET NAMES utf8mb4 */;

--
-- Base de données :  `PT2015-2016_wielonsky`
--
CREATE DATABASE IF NOT EXISTS `PT2015-2016_wielonsky` DEFAULT CHARACTER SET utf8 COLLATE utf8_general_ci;
USE `PT2015-2016_wielonsky`;

-- --------------------------------------------------------

--
-- Structure de la table `admin`
--

CREATE TABLE `admin` (
  `id_admin` int(11) NOT NULL,
  `login` varchar(50) NOT NULL,
  `mdp` varchar(50) NOT NULL
) ENGINE=InnoDB AUTO_INCREMENT=2 DEFAULT CHARSET=utf8;

--
-- Contenu de la table `admin`
--

INSERT INTO `admin` (`id_admin`, `login`, `mdp`) VALUES
(1, 'radiantsky', '0ec1d7b5092869bc22422ea956f450004af20639');

-- --------------------------------------------------------

--
-- Structure de la table `apropos`
--

CREATE TABLE `apropos` (
  `id_apropos` int(11) NOT NULL,
  `lien_image` varchar(150) NOT NULL,
  `depth` varchar(5) NOT NULL,
  `alt` varchar(45) NOT NULL,
  `css` varchar(45) NOT NULL
) ENGINE=InnoDB AUTO_INCREMENT=4 DEFAULT CHARSET=utf8;

--
-- Contenu de la table `apropos`
--

INSERT INTO `apropos` (`id_apropos`, `lien_image`, `depth`, `alt`, `css`) VALUES
(2, 'images/dessin_grec/andromeda1.png', '0.10', 'dessin_andromeda', 'container-andromeda'),
(3, 'images/dessin_grec/triangle.png', '0.05', 'dessin_triangle', 'container-triangle');

-- --------------------------------------------------------

--
-- Structure de la table `apropos_trad`
--

CREATE TABLE `apropos_trad` (
  `id_apropos_trad` int(11) NOT NULL,
  `langue` enum('fr','en') NOT NULL,
  `css` varchar(50) NOT NULL,
  `titre` varchar(1000) NOT NULL,
  `contenu` varchar(8000) NOT NULL
) ENGINE=InnoDB AUTO_INCREMENT=11 DEFAULT CHARSET=utf8;

--
-- Contenu de la table `apropos_trad`
--

INSERT INTO `apropos_trad` (`id_apropos_trad`, `langue`, `css`, `titre`, `contenu`) VALUES
(5, 'fr', 'container-apropos', 'est un projet personnel réalisé par Cécilia Wielonsky.', '<p>Ce projet est né autour du cadre universitaire, il répond à la réalisation d''une création multimedia.</p>\r\n<p>Le moteur premier fut celui de créer un espace interactif, ludique et poétique où l''attention serait sollicitée et amusée par les éléments en mouvements et par les histoires qu''ils racontent.</p>\r\n<p>Le ciel est le seul espace resté inaccessible à l''homme pendant des siècles, il y a donc déposé et laissé infuser toute sa culture et ses légendes pour en expliquer l''origine et essayer de le comprendre.</p>\r\n<p>Ce projet est une idée d''exposé et de mise en scène de ces différents mythes et légendes que les hommes ont "déposé" dans le ciel. La dimension poétique et culturelle devient encore plus essentielle et permet une évolution constante du projet.</p>'),
(6, 'en', 'container-apropos', 'is a personal project developed by Cecilia Wielonsky.', '<p>This project is born within the university framework, it meets the realization of a multimedia creation. </p>\r\n<p>The first driving force was the one to create an interactive space, playful and poetic where attention would be sought and amused by the elements in movements and the stories they tell.</p>\r\n<p>The sky is the only space remained inaccessible to man for centuries, so it''s where they deposited and left to infuse all its culture and legends to explain the origin and try to understand it. </p>\r\n<p>This project is an idea of presentation and representation of these myths and legends that men have placed in the sky. The poetic and cultural dimensions becomes even more essential and allows a constant evolution of the project. </p>');

-- --------------------------------------------------------

--
-- Structure de la table `carousel`
--

CREATE TABLE `carousel` (
  `id_carousel` int(11) NOT NULL,
  `nom_svg` varchar(50) NOT NULL
) ENGINE=InnoDB AUTO_INCREMENT=4 DEFAULT CHARSET=utf8;

--
-- Contenu de la table `carousel`
--

INSERT INTO `carousel` (`id_carousel`, `nom_svg`) VALUES
(1, 'gemini'),
(2, 'taurus'),
(3, 'aquarius');

-- --------------------------------------------------------

--
-- Structure de la table `carousel_trad`
--

CREATE TABLE `carousel_trad` (
  `id_carousel_trad` int(11) NOT NULL,
  `langue` enum('fr','en') NOT NULL,
  `titre_constellation` varchar(45) NOT NULL,
  `titre_exp_constellation` varchar(45) NOT NULL,
  `contenu_explication` varchar(8000) NOT NULL,
  `trad_carousel` int(11) NOT NULL
) ENGINE=InnoDB AUTO_INCREMENT=7 DEFAULT CHARSET=utf8;

--
-- Contenu de la table `carousel_trad`
--

INSERT INTO `carousel_trad` (`id_carousel_trad`, `langue`, `titre_constellation`, `titre_exp_constellation`, `contenu_explication`, `trad_carousel`) VALUES
(1, 'fr', 'Gémeaux ', 'Constellation des Gémeaux', '<p>Les Gémeaux sont une constellation du zodiaque traversée par le Soleil du 21 mai au 21 juin. Dans l''ordre du zodiaque, la constellation se situe entre le Taureau à l''ouest et le Cancer à l''est.</P>\n<p>Deux étoiles de la constellation sont nommées d''après les jumeaux de la légende : Castor (α Geminorum) et Pollux (β Geminorum).</p>\n<p> La constellation des Gémeaux peut se repérer à partir de la Grande Ourse : la diagonale du grand chariot pointe sur Pollux.</p>', 1),
(2, 'en', 'Gemini', 'Gemini constellation', '<p>Gemini is a constellation of the zodiac crossed by the Sun from May 21 to June 21 In the order of the zodiac, the constellation is situated between the Taurus to the west and Cancer to the east. </P>\n<p> Two stars of the constellation are named after the twins of legend. Castor (α Geminorum) and Pollux (β Geminorum).</p>\n<p> The constellation Gemini can spot from the Big Dipper: the diagonal of the large tip truck on Pollux.</p>', 1),
(3, 'fr', 'Taureau', 'Constellation du Taureau', '<p>Le Taureau est une constellation du zodiaque traversée par le Soleil du 14 mai au 22 juin. Dans l''ordre du zodiaque, la constellation se situe entre le Bélier à l''ouest et les Gémeaux à l''est.</p>\n<p>Le Taureau était l’une des 48 constellations identifiées par Ptolémée.</p>', 2),
(4, 'en', 'Taurus', 'Taurus constellation', '<p>The Taurus is a constellation of the zodiac crossed by the Sun from May 14 to June 22 In the order of the zodiac, the constellation is situated between Aries to the west and Gemini to the east.</p>\n<p>The Taurus was one of the 48 constellations identified by Ptolemy.</p>', 2),
(5, 'fr', 'Verseau', 'Constellation du Verseau', '<p>Le Verseau, ou Porteur d’eau, est une constellation du zodiaque traversée par le Soleil du 16 février au 11 mars. Dans l''ordre du zodiaque, la constellation se situe entre le Capricorne à l''ouest et les Poissons à l''est.</p>\n<p>Elle est parmi les constellations les plus vieilles du ciel et se trouve dans une zone souvent appelée la « Mer », à cause de son abondance de constellations aquatiques telles la Baleine, les Poissons, Éridan, etc. Parfois, le fleuve Éridan est dessiné provenant du pot du Verseau.</p>', 3),
(6, 'en', 'Aquarius', 'Aquarius constellation', '<p>Aquarius or Water Carrier, is a constellation of the zodiac crossed by the Sun from February 16 to March 11. In the order of the zodiac, the constellation is situated between the west Capricorn and Pisces east.</p>\n<p>It is among the oldest constellations in the sky and is in an area often called the "Sea" because of its abundance of aquatic constellations such the Whale, Pisces, Eridanus, etc. Sometimes, the river Eridanus is drawn from the pot of Aquarius. </p>', 3);

-- --------------------------------------------------------

--
-- Structure de la table `circles`
--

CREATE TABLE `circles` (
  `id_circles` int(11) NOT NULL,
  `index` int(11) NOT NULL,
  `lien_circles` varchar(150) NOT NULL,
  `depth` varchar(5) NOT NULL
) ENGINE=InnoDB AUTO_INCREMENT=10 DEFAULT CHARSET=utf8;

--
-- Contenu de la table `circles`
--

INSERT INTO `circles` (`id_circles`, `index`, `lien_circles`, `depth`) VALUES
(3, 1, 'images/cercles/cercles_1.png', '0.10'),
(4, 2, 'images/cercles/cercles_2.png', '0.20'),
(5, 3, 'images/cercles/cercles_3.png', '0.30'),
(6, 4, 'images/cercles/cercles_4.png', '0.60'),
(7, 5, 'images/cercles/cercles_5.png', '0.50'),
(8, 6, 'images/cercles/cercles_6.png', '0.40'),
(9, 7, 'images/cercles/cercles_7.png', '0.30');

-- --------------------------------------------------------

--
-- Structure de la table `contact`
--

CREATE TABLE `contact` (
  `id_contact` int(11) NOT NULL,
  `label` varchar(50) NOT NULL,
  `tabindex` int(11) NOT NULL,
  `type` varchar(45) NOT NULL
) ENGINE=InnoDB AUTO_INCREMENT=5 DEFAULT CHARSET=utf8;

--
-- Contenu de la table `contact`
--

INSERT INTO `contact` (`id_contact`, `label`, `tabindex`, `type`) VALUES
(1, 'nom', 1, 'text'),
(2, 'mail', 2, 'email'),
(3, 'objet', 3, 'text'),
(4, 'message', 4, 'text');

-- --------------------------------------------------------

--
-- Structure de la table `contact_contenu`
--

CREATE TABLE `contact_contenu` (
  `id_contact_contenu` int(11) NOT NULL,
  `nom_contenu` varchar(50) NOT NULL,
  `email_contenu` varchar(150) NOT NULL,
  `objet_contenu` varchar(500) NOT NULL,
  `message_contenu` varchar(8000) NOT NULL
) ENGINE=InnoDB AUTO_INCREMENT=211 DEFAULT CHARSET=utf8;

--
-- Contenu de la table `contact_contenu`
--

INSERT INTO `contact_contenu` (`id_contact_contenu`, `nom_contenu`, `email_contenu`, `objet_contenu`, `message_contenu`) VALUES
(209, 'C&eacute;cilia Wsk', 'lapin@hotmail.com', 'rzrz', 'rzrz'),
(210, 'C&eacute;cilia Wsk', 'be.sheep@hotmail.com', 'rz', 'rz');

-- --------------------------------------------------------

--
-- Structure de la table `contact_trad`
--

CREATE TABLE `contact_trad` (
  `id_contact_trad` int(11) NOT NULL,
  `designation` varchar(50) NOT NULL,
  `langue` enum('fr','en') NOT NULL,
  `trad_contact` int(11) NOT NULL
) ENGINE=InnoDB AUTO_INCREMENT=11 DEFAULT CHARSET=utf8;

--
-- Contenu de la table `contact_trad`
--

INSERT INTO `contact_trad` (`id_contact_trad`, `designation`, `langue`, `trad_contact`) VALUES
(1, 'nom', 'fr', 1),
(2, 'name', 'en', 1),
(5, 'email', 'fr', 2),
(6, 'email', 'en', 2),
(7, 'objet', 'fr', 3),
(8, 'object', 'en', 3),
(9, 'message', 'fr', 4),
(10, 'message', 'en', 4);

-- --------------------------------------------------------

--
-- Structure de la table `credits`
--

CREATE TABLE `credits` (
  `id_credits` int(11) NOT NULL,
  `lien_adresse` varchar(500) NOT NULL,
  `lien_nom` varchar(500) NOT NULL
) ENGINE=InnoDB AUTO_INCREMENT=5 DEFAULT CHARSET=utf8;

--
-- Contenu de la table `credits`
--

INSERT INTO `credits` (`id_credits`, `lien_adresse`, `lien_nom`) VALUES
(1, 'https://www.ceciliawielonsky.com', 'Cécilia Wielonsky'),
(2, 'https://fr.wikipedia.org/wiki/Johannes_Hevelius', 'Johannes Hevelius'),
(3, 'http://hubblesource.stsci.edu', 'Space Telescope Science Institute'),
(4, 'https://en.wikipedia.org/wiki/User:Jeff_Dahl', 'Jeff Dahl');

-- --------------------------------------------------------

--
-- Structure de la table `credits_trad`
--

CREATE TABLE `credits_trad` (
  `id_credits_trad` int(11) NOT NULL,
  `langue` enum('fr','en') NOT NULL,
  `contenu` varchar(500) NOT NULL,
  `trad_credits` int(11) NOT NULL
) ENGINE=InnoDB AUTO_INCREMENT=9 DEFAULT CHARSET=utf8;

--
-- Contenu de la table `credits_trad`
--

INSERT INTO `credits_trad` (`id_credits_trad`, `langue`, `contenu`, `trad_credits`) VALUES
(1, 'fr', 'Projet personnel par ', 1),
(2, 'en', 'Personal project by ', 1),
(3, 'fr', 'Dessins grecques par ', 2),
(4, 'en', 'Greek drawings by ', 2),
(5, 'fr', 'Mis à disposition par ', 3),
(6, 'en', 'Provided by ', 3),
(7, 'fr', 'Dessins egyptiens par ', 4),
(8, 'en', 'Egyptian drawings by ', 4);

-- --------------------------------------------------------

--
-- Structure de la table `culture_egypte`
--

CREATE TABLE `culture_egypte` (
  `id_culture_egypte` int(11) NOT NULL,
  `lien_image_egypte` varchar(150) NOT NULL,
  `alt_egypte` varchar(150) NOT NULL,
  `egypte_carousel` int(11) NOT NULL
) ENGINE=InnoDB AUTO_INCREMENT=4 DEFAULT CHARSET=utf8;

--
-- Contenu de la table `culture_egypte`
--

INSERT INTO `culture_egypte` (`id_culture_egypte`, `lien_image_egypte`, `alt_egypte`, `egypte_carousel`) VALUES
(1, 'images/dessin_egypte/gemini.png', 'gemini_egypte', 1),
(2, 'images/dessin_egypte/taurus.png', 'taurus_egypte', 2),
(3, 'images/dessin_egypte/aquarius.png', 'aquarius_egypte', 3);

-- --------------------------------------------------------

--
-- Structure de la table `culture_egypte_trad`
--

CREATE TABLE `culture_egypte_trad` (
  `id_culture_egypte_trad` int(11) NOT NULL,
  `langue` enum('fr','en') NOT NULL,
  `titre_legende_egypte` varchar(150) NOT NULL,
  `contenu_legende_egypte` varchar(8000) NOT NULL,
  `trad_culture_egypte` int(11) NOT NULL
) ENGINE=InnoDB AUTO_INCREMENT=7 DEFAULT CHARSET=utf8;

--
-- Contenu de la table `culture_egypte_trad`
--

INSERT INTO `culture_egypte_trad` (`id_culture_egypte_trad`, `langue`, `titre_legende_egypte`, `contenu_legende_egypte`, `trad_culture_egypte`) VALUES
(1, 'fr', 'Légende egyptienne', '<p>Dans la mythologie égyptienne les Gémeaux sont représentés par Shou et Tefnout. Tous les deux sont crées par Atoum, le premier des dieux egyptiens. Atoum façonne les êtres à partir de la matière préexistante avant de les séparer.</p>\r\n<p>Shou signifie "celui qui se lève", il est la personnification de l''air et prend souvent la forme d''un lion. C''est lui qui, sous les ordres de son père, sépara l''air du ciel et de la terre. La puissance physique de Shou, "celui qui soulève" le ciel, a beaucoup inspiré les Grecs qui l''ont comparé à Héraclès, l''un des héros les plus vénérés de la Grèce antique, fils de Zeus et d’Alcmène.</p>\r\n<p>Shou est le frère jumeau et époux de Tefnout.</p>\r\n<p>Tefnout est la première divinité féminine à venir à l''existence dans l''univers, avec Shou elle assure la première procréation du monde. Les deux entités sont complémentaires et indispensables au cycle du renouveau de la vie.</p>\r\n<p>De leur union naquirent les deux autres dieux jumeaux Geb : la terre, et Nout : le ciel. Ils représentent ainsi avec leurs deux enfants les quatre éléments primordiaux.</p>\r\n<p>Tefnout, que l''on associait aussi à la pluie, à la rosée et aux nuages, était le symbole de l''eau et de son pouvoir créateur, la source de vie. Elle aussi est représentée sous la forme d''une lionne ornée d''un disque solaire. Par ailleurs, Shou et Tefnout sont vénérés sous la forme d''un couple de lions assurant le lever du dieu soleil à l''horizon.</p>', 1),
(2, 'en', 'Egyptian legend', '<p>In Egyptian mythology Gemini is represented by Shu and Tefnut. Both are created by Atum, the first of the Egyptian gods. Atum shapes beings from the preexisting material and separates them.</p>\r\n<p>Shou means "one who rises", he is the personification of the air and often takes the form of a lion. It was he who, under the orders of his father Atum, broke the air of heaven and earth. The physical power of Shou, "one that raises" the sky has inspired the Greeks who compared Heracles, one of the most revered heroes of ancient Greece, the son of Zeus and Alcmene.</p>\r\n<p>Shou is the twin brother and husband of Tefnut.</p>\r\n<p>Tefnout is the first female deity to come into existence in the universe, with Shou it provides the first reproduction of the world. The two entities are complementary and essential to the cycle of renewal of life.</p>\r\n<p>From their union were born two twin gods Geb: earth, and Nut, the sky. They thus represent with their two children four primordial elements.</p>\r\n<p>Tefnout, which is also associated with rain, dew and clouds, was the symbol of water and its creative power, the source of life. It is also depicted as a lioness adorned with a sun disk. Moreover, Shu and Tefnut are revered as a pair of lions ensuring god sunrise on the horizon.</p>', 1),
(3, 'fr', 'Légende egyptienne', '<p>Dans la mythologie égyptienne, Hathor (grec : Athyr, « Maison d''Horus »), est la déesse de l''amour, la beauté, la musique, la maternité et de la joie.</p>\r\n<p>C''est à l''origine une déesse céleste confondue avec Nout. Son attribut est le ménat (collier à contrepoids). Considérée comme l''œil de Rê, c''est elle qui châtie les humains.</p>\r\n<p>Mais elle est plus connue en tant que déesse des festivités et de l''amour. Dans ce rôle, elle est vénérée à Dendérah ( ville égyptienne dont le temple est dédié au culte de cette déesse) et elle est associée au dieu Horus, dans la ville d''Edfou. Elle est représentée sous les traits d''une vache, ou d''une femme portant le disque solaire entre ses cornes.</p>\r\n<p>Hathor est représentée près de Horus (son nom signifie « Demeure du dieu Horus », ce qui fait d''elle l''épouse du dieu-faucon) et a pour fils Harsomtous (surnommé Horus le jeune).</p>\r\n<p>Elle est une des déesses les plus populaires et importantes tout au long de l''histoire de l''Égypte antique, et elle reçoit la vénération aussi bien par la famille royale (elle est la nourrice du pharaon) que par le peuple, dans les tombes desquels elle est décrite comme « maîtresse de l''Ouest », accueillant les mort dans leur nouvelle vie. Elle aide aussi les femmes à donner naissance, et elle est la déesse patronne des mineurs.</p>', 2),
(4, 'en', 'Egyptian legend', '<p>In Egyptian mythology, Hathor (Greek: Athyr, "House of Horus"), is the goddess of love, beauty, music, motherhood and joy.</p>\r\n<p>This is originally a celestial goddess Nut mistaken. His attribute is the menat (offset collar). Considered the eye of Ra, it is she who, in the version of the ogdoad, punishes humans.</p>\r\n<p>But it is best known as the goddess of festivities and love. In this role, she is worshiped at Dendera and associated with the god Horus, in the city of Edfu. She is depicted as a cow or a woman wearing the sun disk between her horns.</p>\r\n<p>Hathor to consort Horus (his name means "House of Horus", which made her the wife of the falcon-god) and son Harsomtous (nicknamed the young Horus) and Ihy.</p>\r\n<p>It is one of the most popular and important goddesses throughout the long history of ancient Egypt, and is revered by both the royal family (she is the nurse of Pharaoh) and by the common people in the graves which it is described as "Western mistress," welcoming the dead to his new life. It also helps women give birth, and is the patron goddess of minors.</p>', 2),
(5, 'fr', 'Légende egyptienne', '<p>Hâpy est la personnification divine du Nil dans la mythologie égyptienne. Davantage qu''une simple allégorie du fleuve, Hâpy personnifie plus spécifiquement les phénomènes naturels qui lui sont associés : la crue en pleine saison sèche et la fertilisation annuelle des sols, auxquelles les Égyptiens ne pouvaient attribuer d''explication rationnelle.</p>\r\n<p>Hâpy était représenté sous les traits d''un personnage aux formes androgynes. Si son corps est masculin, il n''en a pas moins deux grosses mamelles féminines qui assurent la prospérité aux Égyptiens. Son ventre est proéminent et il porte sur la tête un panache de plantes du Nil. Il est souvent représenté sous la forme duale de jumeaux. L''un portant sur la tête des tiges de papyrus, symbole de la Haute-Égypte, et l''autre portant un nénuphar, symbole de la Basse-Égypte.</p>\r\n<p>Il peut aussi être représenté avec une tête d''hippopotame, toujours sous sa forme hermaphrodite. Selon la légende, Hâpy vivait dans deux endroits cachés. Le premier se situait sous les premiers rapides du Nil, près d''Éléphantine. De là, il versait le contenu de deux jarres pour faire monter les eaux de Haute-Égypte. L''autre lieu était situé en Basse-Égypte près de Memphis, et servait à approvisionner le delta en eau féconde.</p>\r\n<p>Les Égyptiens attribuaient à Hâpy la force vitale du Nil, celle-ci provenait en fait du limon noir (terre très fertile) qu''il transportait et qui fertilisait les rives du fleuve et apportait sa richesse à l''Égypte. Il est également, par extension, le symbole de la prospérité et de la fécondité.</p>\r\n<p>Chaque année, le Nil débordait de son lit pour fertiliser les rives asséchées par le climat aride de l''Égypte. Symbole de ces crues annuelles, Hâpy, avait un rôle prépondérant dans la vie des Égyptiens de l''antiquité : du niveau de ces crues dépendait la survie de ce peuple, qui était aussi bien touché par des crues trop faibles (qui asséchaient les cultures) que par les débordements excessifs de ces flots qui provoquaient de grandes inondations.</p>\r\n<p>Pour s''attirer les bonnes grâces du dieu fleuve, les Égyptiens lui donnaient de grandes quantités d''offrandes. Sur le mur des temples, on le trouve représenté devant des tables d''offrandes, couvertes de produits provenant des différents centres administratifs d''Égypte. Dans ces représentations, il porte sur la tête le symbole de la région correspondante.</p>							\r\n<p>Lors de sa fête annuelle, le droit de chasser et de manger la chair des hippopotames était accordé au peuple d''Égypte, privilège des prêtres de ses temples le reste de l''année, permettant ainsi de réguler leur population.</p>', 3),
(6, 'en', 'Egyptian legend', '<p>Hapi is the divine personification of the Nile in Egyptian mythology. More than a simple allegory of the river, Hapi personifies specifically natural phenomena as are (or were, before the construction of the Aswan High Dam) associated: the flood in the dry season and the annual soil fertilization, which the Egyptians could assign rational explanation.</p>\r\n<p>Hapi was depicted as a figure with androgynous forms. If his body is masculine, it has nonetheless two large female breasts that provide prosperity to the Egyptians. Her belly is prominent and bold, and covers the head of the Nile plants plume. He is often depicted in the dual form of twins. The one on the head of the papyrus stems, the symbol of Upper Egypt, and the other bearing a lily, the symbol of Lower Egypt.</p>\r\n<p>It could also be represented with a hippo head, still in its hermaphrodite form. According to legend, lived in two Hapi hidden places. The first was below the first cataract of the Nile, near Elephantine. From there, he poured the contents of two jars to raise the waters of Upper Egypt. The other place was located in Lower Egypt near Memphis, and was used to supply the fertile delta in water.</p>\r\n<p>The Egyptians attributed to Hâpy the lifeblood of the Nile that actually came from black silt it carries, which fertilized the river banks and brought wealth to Egypt. It is also, by extension, the symbol of prosperity and fertility.</p>\r\n<p>Each year the Nile overflowed its banks to fertilize the banks dried up by the arid climate of Egypt. Silt he was carrying made possible their culture. Symbol of the annual floods, Hapi, had a leading role in the lives of ancient Egyptians: the level of the flood depends the survival of the people, which was also hit by floods too low (which dried up crops) by excessive outbursts of these waves which caused great floods.</p>\r\n<p>To ingratiate the river god, the Egyptians gave him large quantities of offerings. On the wall of the temples, we find it represented before the offering tables, covered products from various prefectures of Egypt. In these performances, he wears on his head the symbol of the corresponding region. </ P> <p> At its annual party, the right to hunt and eat the flesh of the hippopotamus was granted to the people of Egypt, privilege priests of temples the rest of the year, thereby controlling their population. </p>', 3);

-- --------------------------------------------------------

--
-- Structure de la table `culture_grec`
--

CREATE TABLE `culture_grec` (
  `id_culture_grec` int(11) NOT NULL,
  `lien_image_grec` varchar(150) NOT NULL,
  `alt_grec` varchar(150) NOT NULL,
  `grec_carousel` int(11) NOT NULL
) ENGINE=InnoDB AUTO_INCREMENT=4 DEFAULT CHARSET=utf8;

--
-- Contenu de la table `culture_grec`
--

INSERT INTO `culture_grec` (`id_culture_grec`, `lien_image_grec`, `alt_grec`, `grec_carousel`) VALUES
(1, 'images/dessin_grec/gemini.png', 'gemini_grec', 1),
(2, 'images/dessin_grec/taurus.png', 'taurus_grec', 2),
(3, 'images/dessin_grec/aquarius.png', 'aquarius_grec', 3);

-- --------------------------------------------------------

--
-- Structure de la table `culture_grec_trad`
--

CREATE TABLE `culture_grec_trad` (
  `id_culture_grec_trad` int(11) NOT NULL,
  `langue` enum('fr','en') NOT NULL,
  `titre_legende_grec` varchar(150) NOT NULL,
  `contenu_legende_grec` varchar(8000) NOT NULL,
  `trad_culture_grec` int(11) NOT NULL
) ENGINE=InnoDB AUTO_INCREMENT=7 DEFAULT CHARSET=utf8;

--
-- Contenu de la table `culture_grec_trad`
--

INSERT INTO `culture_grec_trad` (`id_culture_grec_trad`, `langue`, `titre_legende_grec`, `contenu_legende_grec`, `trad_culture_grec`) VALUES
(1, 'fr', 'Légende grecque', '<p>Le mythe grec des jumeaux Castor et Pollux est associé à la constellation des Gémeaux. Les deux étoiles principales de la constellation portent d''ailleurs le nom de ces deux frères nés des amours de Zeus et Léda.</p>\r\n<p>Zeus séduit la mortelle Léda en prenant l''apparence d''un cygne. De l''œuf résultant de leur amour, sortiront Castor et Pollux qui se ressemblent presque en tout point. L''amour d''un dieu et d''une mortelle donne habituellement un enfant demi-dieu. Mais par cette gémellité, l''ascendance divine s''est incarnée entièrement dans Pollux, qui a donc hérité de l''immortalité. Castor, ayant l''humanité de sa mère Léda ne vivra pas éternellement.</p>\r\n<p>Après leur naissance, c''est Hermès (Mercure, planète associée aux Gémeaux) qui élèvera les deux enfants. Ceux-ci développeront la vivacité, la ruse et l''intelligence de leur père. Unis par une amitié qui les rend inséparables, ils participent à de nombreux exploits. Ils prennent notamment part au voyage des Argonautes, aidant Jason à récupérer la toison d''or (Bélier). Après quoi, ils triomphent de Thésée, vainqueur du Minotaure et traversent ainsi l''étape du Taureau dans le cycle zodiacal.</p>\r\n<p>Pour une histoire d''amour, ils tenteront d''enlever à leurs fiancés deux jeunes princesses. Le combat emportera Castor. Pollux, ne supportant le décès de son jumeau, renoncera à son immortalité pour la partager avec son frère. Ainsi, ils vivent alternativement, chacun leur tour, six mois et passent les six autres mois aux Enfers mais ne se croisent jamais...</p>\r\n<p>Ce n''est pas un hasard si il est difficile d''affirmer le sexe des personnages qui représentent les Gémeaux dans l''imagerie traditionnelle. Le mythe de l''Androgyne primitif est un classique de toutes les mythologies qui peut être associé aux Gémeaux. L''unité de l''être vivant originel a été séparée en deux êtres complémentaires mais opposés et sexués. Chacun d''entre eux recherche alors son double pour reformer l''être complet de corps et d''esprit dont il ne se sent que la moitié.</p>', 1),
(2, 'en', 'Greek legend', '<p>The Greek myth of Castor and Pollux is associated to the Gemini constellation. The two main stars of the constellation also bear the name of these two sons of Zeus and Leda.</p>\r\n<p>Zeus seduced mortal Leda opting this time to take on the appearance of a swan. From the egg resulting of their love, come out Castor and Pollux which are truly identical. The love of a god and a mortal usually gives a demigod child. But because they are twins, the divine ancestry was incarnated fully in Pollux, who has inherited immortality. Castor, having the humanity of her mother Leda will not live forever.</p>\r\n<p>After the birth, it is Hermes (Mercury, the planet associated with Gemini) who will raise the two children. They develop alertness, cunning and intelligence of their father. United by a friendship that makes them inseparable, they participate in so many exploits. They take particular part in the trip of the Argonauts, helping Jason to retrieve the Golden Fleece (Aries). After that, they triumph of Theseus, the Minotaur winner and thus cross the Taurus step in the zodiac.</p>\r\n<p>For a love story, they will try to remove the fiancés of two young princesses. The fight will carry Castor. Pollux, not supporting the death of his twin, give up his immortality to share with his brother. They will finally live alternately, six months on earth and spend the other six months in the Underworld but never cross ...</p>\r\n<p>It''s no coincidence that it is difficult to say sex characters that represent the Gemini in traditional imagery. The primitive Androgynous myth is a classic of all mythologies that can be associated with Gemini. The unity of the living original was separated into two complementary but opposite beings and sexed. Each then search his double to reform the complete being of body and mind which he feels half.</p>', 1),
(3, 'fr', 'Légende grecque', '<p>Zeus tomba amoureux d''Europe. Ne sachant comment l''approcher (les dieux ne peuvent se montrer aux mortels sous leur apparence naturelle) il prend la décision de lui apparaître sous la forme d''un magnifique taureau blanc aux cornes en croissant de lune alors qu''elle se promène sur la plage.</p>\r\n<p>Se faisant docile et affectueux lorsque la jeune fille s''approche de lui pour lui accrocher une couronne de fleurs aux cornes, il la laisse monter sur son dos et s''élance dans les flots. Il la conduit jusqu''aux rivages de l''île de Crète. De leur union naîtront trois fils dont Minos, roi de la future citée minéenne qui sera des plus prospères et qui vénèrera en remerciement le Taureau comme un animal sacré, ce qui lui vaudra sa place dans le ciel.</p>\r\n<p>Plus tard, Minos envieux, sera amené à offenser les dieux. Poséidon, dieu de la mer, enverra à son épouse Pasiphaé, un taureau blanc magnifique, presqu''exacte réplique de Zeus déguisé. Elle aimera cet animal pourtant bien véritable. De leur union contre nature, naîtra le Minotaure (monstre boulimique à corps humain et tête de taureau) que Minos, honteux, enfermera dans un labyrinthe.</p>', 2),
(4, 'en', 'Greek legend', '<p>Zeus fell in love with Europe. Not knowing how to approach (the gods can show themselves to mortals in their natural appearance) he decided to appear to her in the form of a magnificent white bull-horned on the crescent moon as she walks on beach.</p>\r\n<p>Being so docile and affectionate when the girl approached to hang him a wreath to the horns, he lets up on his back and rushed into the waves. It leads to the shores of the island of Crete. From their union were born three son whose Minos, king of the future Minean city which will be more prosperous and venerate Taurus as a sacred animal, this is how he earned his place in the sky.</p>\r\n<p>Later, Minos being envious, will have to offend the gods. Poseidon, god of the sea, will send his wife Pasiphae, a beautiful white bull, almost replica of Zeus disguised. She will love this real animal. From their union against nature will born the Minotaur (bulimic monster in human body and bull''s head) that Minos, ashamed, shut up in a maze.</p>', 2),
(5, 'fr', 'Légende grecque', '<p>Prométhée est un Titan malin (son nom signifie "celui qui pense à l''avance"). Il a un frère dont il doit réparer toutes les calamités (Epiméthée dont le nom signifie "celui qui n''anticipe rien").</p>\r\n<p>Les deux titans sont chargés par Zeus de créer les êtres vivants de la terre. Zeus leurs confie un sac plein de ressources ou capacités physiques et variées à répartir entre leurs créatures. Epiméthée crée tous les animaux et les dote de caractéristiques ou de capacités physiques intéressantes pour survivre (griffes, fourrure, corne, carapace, crocs, rapidité, piquants...). Comme il n''anticipe rien, il ne laisse rien dans le sac pour son frère. Prométhée crée les hommes, mais ceux-ci sont très démunis puisqu''ils ne leurs restent ni fourrure, ni griffe, ni crocs... pour s''en sortir. Ils sont les êtres les plus imparfaits qui soient. Mais Prométhée, en grand bienfaiteur, désobéit à Zeus et leur donne ce que nulle autre créature ne possède : la conscience (ou l''intelligence). Cela leur permettra de dominer les autres créatures.</p>\r\n<p>Sensible à leur sort peu enviable et soucieux de leurs faciliter l''accès au progrès, Prométhée va même dérober le feu des forges d''Héphaïstos pour l''offrir aux hommes. Il le cache dans une flèche creuse de son ami Chiron, le centaure philanthrope (Cf Le Sagittaire.</p>\r\n<p>Cette ultime désobéissance lui vaudra le châtiment de Zeus : Etre crucifié sur un rocher et chaque jour, un aigle viendra lui dévorer le foie. Les constellations Aquarius (Prométhée) et Aquila (L''aigle qui semble fondre sur lui) sont proches l''une de l''autre dans le ciel étoilé pour illustrer cette scène mythologique. </p>', 3),
(6, 'en', 'Greek legend', '<p>Prometheus is a Titan malignant (his name means "the one who thinks ahead"). He has a brother to whom he has to repair all the calamities (Epimetheus, whose name means "the one who anticipates nothing").</p>\r\n<p>The two titans are charged by Zeus to create living beings on earth. Zeus their entrusts a resourceful bag or physical abilities and varied to distribute among their creatures. Epimetheus created all animals, and endows them with interesting characteristics or physical abilities to survive (claws, fur, horn, shell, fangs, speed, spicy ...). As he anticipates nothing, he left nothing in the bag for his brother. Prometheus created men, but they were very poor since they don''t have fur or claws, or fangs ... They are the most imperfect beings who can be. But Prometheus, being a great benefactor, he disobeys Zeus and gives to humans what no other creature has: consciousness (or intelligence). This will allow them to dominate other creatures.</p>\r\n<p>Sensitive to their unenviable fate and conscious of their easy access to progress, Prometheus will even steal fire from the forges of Hephaestus to offer men. He hides it in a hollow arrow from his friend Chiron, the centaur philanthropist (Cf Sagittarius).</p>\r\n<p>This ultimate disobedience earned him the punishment of Zeus: being crucified on a rock and every day an eagle will eat his liver. Aquarius constellations (Prometheus) and Aquila (the eagle that appears upon him) are close to each other in the night sky to illustrate this mythological scene.</p>', 3);

-- --------------------------------------------------------

--
-- Structure de la table `home`
--

CREATE TABLE `home` (
  `id_home` int(11) NOT NULL,
  `index` int(11) NOT NULL,
  `lien_image` varchar(150) NOT NULL,
  `depth` varchar(5) NOT NULL,
  `alt` varchar(45) NOT NULL,
  `css` varchar(45) NOT NULL
) ENGINE=InnoDB AUTO_INCREMENT=6 DEFAULT CHARSET=utf8;

--
-- Contenu de la table `home`
--

INSERT INTO `home` (`id_home`, `index`, `lien_image`, `depth`, `alt`, `css`) VALUES
(1, 1, 'images/dessin_grec/leo.png', '0.40', 'leo_image', 'container-leo'),
(2, 2, 'images/dessin_grec/perseus.png', '0.30', 'perseus_image', 'container-perseus'),
(3, 3, 'images/dessin_grec/pegasus.png', '0.50', 'pegasus_image', 'container-pegasus'),
(4, 4, 'images/dessin_grec/hercules.png', '0.60', 'hercules_image', 'container-hercules'),
(5, 5, 'images/dessin_grec/andromeda.png', '0.30', 'andromeda_image', 'container-andromeda');

-- --------------------------------------------------------

--
-- Structure de la table `jeu_dot`
--

CREATE TABLE `jeu_dot` (
  `id_jeu_dot` int(11) NOT NULL,
  `nom_constellation` varchar(45) NOT NULL,
  `max` int(11) NOT NULL,
  `dot_carousel` int(11) NOT NULL
) ENGINE=InnoDB AUTO_INCREMENT=4 DEFAULT CHARSET=utf8;

--
-- Contenu de la table `jeu_dot`
--

INSERT INTO `jeu_dot` (`id_jeu_dot`, `nom_constellation`, `max`, `dot_carousel`) VALUES
(1, 'gemini', 8, 1),
(2, 'taurus', 6, 2),
(3, 'aquarius', 10, 3);

-- --------------------------------------------------------

--
-- Structure de la table `jeu_vignette`
--

CREATE TABLE `jeu_vignette` (
  `id_jeu_vignette` int(11) NOT NULL,
  `index` int(11) NOT NULL,
  `css` varchar(45) NOT NULL,
  `alt` varchar(45) NOT NULL,
  `lien_image_vignette` varchar(150) NOT NULL,
  `is_correct` tinyint(1) NOT NULL,
  `vignette_carousel` int(11) NOT NULL
) ENGINE=InnoDB AUTO_INCREMENT=13 DEFAULT CHARSET=utf8;

--
-- Contenu de la table `jeu_vignette`
--

INSERT INTO `jeu_vignette` (`id_jeu_vignette`, `index`, `css`, `alt`, `lien_image_vignette`, `is_correct`, `vignette_carousel`) VALUES
(1, 1, 'container-vignettes-left-top', 'Sagittaire', 'images/vignettes/gemini/1', 0, 1),
(2, 2, 'container-vignettes-left-bottom', 'Gémeaux', 'images/vignettes/gemini/2', 1, 1),
(3, 3, 'container-vignettes-right-top', 'Scorpion', 'images/vignettes/gemini/3', 0, 1),
(4, 4, 'container-vignettes-right-bottom', 'Taureau', 'images/vignettes/gemini/4', 0, 1),
(5, 1, 'container-vignettes-left-top', 'Sagittaire', 'images/vignettes/taurus/1', 0, 2),
(6, 2, 'container-vignettes-left-bottom', 'Gémeaux', 'images/vignettes/taurus/2', 0, 2),
(7, 3, 'container-vignettes-right-top', 'Capricorne', 'images/vignettes/taurus/3', 0, 2),
(8, 4, 'container-vignettes-right-bottom', 'Taureau', 'images/vignettes/taurus/4', 1, 2),
(9, 1, 'container-vignettes-left-top', 'Capricorne', 'images/vignettes/aquarius/1', 0, 3),
(10, 2, 'container-vignettes-left-bottom', 'Cancer', 'images/vignettes/aquarius/2', 0, 3),
(11, 3, 'container-vignettes-right-top', 'Verseau', 'images/vignettes/aquarius/3', 1, 3),
(12, 4, 'container-vignettes-right-bottom', 'Sagittaire', 'images/vignettes/aquarius/4', 0, 3);

-- --------------------------------------------------------

--
-- Structure de la table `menu`
--

CREATE TABLE `menu` (
  `id_menu` int(11) NOT NULL,
  `index` int(11) NOT NULL,
  `lien` varchar(150) NOT NULL
) ENGINE=InnoDB AUTO_INCREMENT=4 DEFAULT CHARSET=utf8;

--
-- Contenu de la table `menu`
--

INSERT INTO `menu` (`id_menu`, `index`, `lien`) VALUES
(1, 1, 'carousel'),
(2, 2, 'apropos'),
(3, 3, 'contact');

-- --------------------------------------------------------

--
-- Structure de la table `menu_trad`
--

CREATE TABLE `menu_trad` (
  `id_menu_trad` int(11) NOT NULL,
  `langue` enum('fr','en') NOT NULL,
  `designation` varchar(45) NOT NULL,
  `trad_menu` int(11) NOT NULL
) ENGINE=InnoDB AUTO_INCREMENT=7 DEFAULT CHARSET=utf8;

--
-- Contenu de la table `menu_trad`
--

INSERT INTO `menu_trad` (`id_menu_trad`, `langue`, `designation`, `trad_menu`) VALUES
(1, 'fr', 'Accueil', 1),
(2, 'en', 'Home', 1),
(3, 'fr', 'À propos', 2),
(4, 'en', 'About', 2),
(5, 'fr', 'Contact', 3),
(6, 'en', 'Contact', 3);

-- --------------------------------------------------------

--
-- Structure de la table `sources`
--

CREATE TABLE `sources` (
  `id_sources` int(11) NOT NULL,
  `lien_adresse` varchar(500) NOT NULL
) ENGINE=InnoDB AUTO_INCREMENT=3 DEFAULT CHARSET=utf8;

--
-- Contenu de la table `sources`
--

INSERT INTO `sources` (`id_sources`, `lien_adresse`) VALUES
(1, 'http://www.aucoteduranie.com/pages/articles/articles-de-fond/origine-mythologique-des-constellations-du-zodiaque-partie-1.html'),
(2, 'http://www.egyptos.net/egyptos/viequotidienne/zodiaque.php');

-- --------------------------------------------------------

--
-- Structure de la table `sources_trad`
--

CREATE TABLE `sources_trad` (
  `id_sources_trad` int(11) NOT NULL,
  `langue` enum('fr','en') NOT NULL,
  `contenu` varchar(500) NOT NULL,
  `lien_nom` varchar(500) NOT NULL,
  `trad_sources` int(11) NOT NULL
) ENGINE=InnoDB AUTO_INCREMENT=5 DEFAULT CHARSET=utf8;

--
-- Contenu de la table `sources_trad`
--

INSERT INTO `sources_trad` (`id_sources_trad`, `langue`, `contenu`, `lien_nom`, `trad_sources`) VALUES
(1, 'fr', 'Divers articles sur l''origine mythologique <br/>des constellations du zodiaque : ', 'Mythologie grecque', 1),
(2, 'en', 'Various articles on the mythological origin of <br/> zodiac constellations : ', 'Greek mythology', 1),
(3, 'fr', 'Site consacré à l''histoire de l''Egypte antique, <br/>des dieux, pharaons, et hiéroglyphes : ', 'Mythologie égyptienne', 2),
(4, 'en', 'Site dedicated to the history of ancient Egypt, <br/> gods, pharaohs, and hieroglyphics : ', 'Egyptian mythology', 2);

-- --------------------------------------------------------

--
-- Structure de la table `texte`
--

CREATE TABLE `texte` (
  `id_texte` int(11) NOT NULL
) ENGINE=InnoDB AUTO_INCREMENT=4 DEFAULT CHARSET=utf8;

--
-- Contenu de la table `texte`
--

INSERT INTO `texte` (`id_texte`) VALUES
(1),
(2),
(3);

-- --------------------------------------------------------

--
-- Structure de la table `texte_trad`
--

CREATE TABLE `texte_trad` (
  `id_texte_trad` int(11) NOT NULL,
  `langue` enum('fr','en') NOT NULL,
  `designation` varchar(500) NOT NULL,
  `trad_texte` int(11) NOT NULL
) ENGINE=InnoDB AUTO_INCREMENT=5 DEFAULT CHARSET=utf8;

--
-- Contenu de la table `texte_trad`
--

INSERT INTO `texte_trad` (`id_texte_trad`, `langue`, `designation`, `trad_texte`) VALUES
(1, 'fr', 'Relie les points pour former une constellation !', 1),
(2, 'en', 'Connect the dots to form a constellation!', 1),
(3, 'fr', 'Place la bonne constellation sur le dessin !', 2),
(4, 'en', 'Find the right constellation and place it on the drawing!', 2);

--
-- Index pour les tables exportées
--

--
-- Index pour la table `admin`
--
ALTER TABLE `admin`
  ADD PRIMARY KEY (`id_admin`);

--
-- Index pour la table `apropos`
--
ALTER TABLE `apropos`
  ADD PRIMARY KEY (`id_apropos`);

--
-- Index pour la table `apropos_trad`
--
ALTER TABLE `apropos_trad`
  ADD PRIMARY KEY (`id_apropos_trad`);

--
-- Index pour la table `carousel`
--
ALTER TABLE `carousel`
  ADD PRIMARY KEY (`id_carousel`);

--
-- Index pour la table `carousel_trad`
--
ALTER TABLE `carousel_trad`
  ADD PRIMARY KEY (`id_carousel_trad`),
  ADD KEY `fk_carousel_trad_carousel_idx` (`trad_carousel`);

--
-- Index pour la table `circles`
--
ALTER TABLE `circles`
  ADD PRIMARY KEY (`id_circles`);

--
-- Index pour la table `contact`
--
ALTER TABLE `contact`
  ADD PRIMARY KEY (`id_contact`);

--
-- Index pour la table `contact_contenu`
--
ALTER TABLE `contact_contenu`
  ADD PRIMARY KEY (`id_contact_contenu`);

--
-- Index pour la table `contact_trad`
--
ALTER TABLE `contact_trad`
  ADD PRIMARY KEY (`id_contact_trad`),
  ADD KEY `trad_contact` (`trad_contact`);

--
-- Index pour la table `credits`
--
ALTER TABLE `credits`
  ADD PRIMARY KEY (`id_credits`);

--
-- Index pour la table `credits_trad`
--
ALTER TABLE `credits_trad`
  ADD PRIMARY KEY (`id_credits_trad`),
  ADD KEY `trad_credits` (`trad_credits`);

--
-- Index pour la table `culture_egypte`
--
ALTER TABLE `culture_egypte`
  ADD PRIMARY KEY (`id_culture_egypte`),
  ADD KEY `egypte_carousel` (`egypte_carousel`);

--
-- Index pour la table `culture_egypte_trad`
--
ALTER TABLE `culture_egypte_trad`
  ADD PRIMARY KEY (`id_culture_egypte_trad`),
  ADD KEY `trad_culture_egypte` (`trad_culture_egypte`);

--
-- Index pour la table `culture_grec`
--
ALTER TABLE `culture_grec`
  ADD PRIMARY KEY (`id_culture_grec`),
  ADD KEY `grec_carousel` (`grec_carousel`);

--
-- Index pour la table `culture_grec_trad`
--
ALTER TABLE `culture_grec_trad`
  ADD PRIMARY KEY (`id_culture_grec_trad`),
  ADD KEY `trad_culture_grec` (`trad_culture_grec`);

--
-- Index pour la table `home`
--
ALTER TABLE `home`
  ADD PRIMARY KEY (`id_home`);

--
-- Index pour la table `jeu_dot`
--
ALTER TABLE `jeu_dot`
  ADD PRIMARY KEY (`id_jeu_dot`),
  ADD KEY `fk_jeu1_dot_carousel1_idx` (`dot_carousel`);

--
-- Index pour la table `jeu_vignette`
--
ALTER TABLE `jeu_vignette`
  ADD PRIMARY KEY (`id_jeu_vignette`),
  ADD KEY `fk_jeu1_proposition_carousel1_idx` (`vignette_carousel`);

--
-- Index pour la table `menu`
--
ALTER TABLE `menu`
  ADD PRIMARY KEY (`id_menu`);

--
-- Index pour la table `menu_trad`
--
ALTER TABLE `menu_trad`
  ADD PRIMARY KEY (`id_menu_trad`),
  ADD KEY `fk_menu_trad_menu1_idx` (`trad_menu`);

--
-- Index pour la table `sources`
--
ALTER TABLE `sources`
  ADD PRIMARY KEY (`id_sources`);

--
-- Index pour la table `sources_trad`
--
ALTER TABLE `sources_trad`
  ADD PRIMARY KEY (`id_sources_trad`),
  ADD KEY `trad_sources` (`trad_sources`);

--
-- Index pour la table `texte`
--
ALTER TABLE `texte`
  ADD PRIMARY KEY (`id_texte`);

--
-- Index pour la table `texte_trad`
--
ALTER TABLE `texte_trad`
  ADD PRIMARY KEY (`id_texte_trad`),
  ADD KEY `fk_texte_trad_texte1_idx` (`trad_texte`);

--
-- AUTO_INCREMENT pour les tables exportées
--

--
-- AUTO_INCREMENT pour la table `admin`
--
ALTER TABLE `admin`
  MODIFY `id_admin` int(11) NOT NULL AUTO_INCREMENT,AUTO_INCREMENT=2;
--
-- AUTO_INCREMENT pour la table `apropos`
--
ALTER TABLE `apropos`
  MODIFY `id_apropos` int(11) NOT NULL AUTO_INCREMENT,AUTO_INCREMENT=4;
--
-- AUTO_INCREMENT pour la table `apropos_trad`
--
ALTER TABLE `apropos_trad`
  MODIFY `id_apropos_trad` int(11) NOT NULL AUTO_INCREMENT,AUTO_INCREMENT=11;
--
-- AUTO_INCREMENT pour la table `carousel`
--
ALTER TABLE `carousel`
  MODIFY `id_carousel` int(11) NOT NULL AUTO_INCREMENT,AUTO_INCREMENT=4;
--
-- AUTO_INCREMENT pour la table `carousel_trad`
--
ALTER TABLE `carousel_trad`
  MODIFY `id_carousel_trad` int(11) NOT NULL AUTO_INCREMENT,AUTO_INCREMENT=7;
--
-- AUTO_INCREMENT pour la table `circles`
--
ALTER TABLE `circles`
  MODIFY `id_circles` int(11) NOT NULL AUTO_INCREMENT,AUTO_INCREMENT=10;
--
-- AUTO_INCREMENT pour la table `contact`
--
ALTER TABLE `contact`
  MODIFY `id_contact` int(11) NOT NULL AUTO_INCREMENT,AUTO_INCREMENT=5;
--
-- AUTO_INCREMENT pour la table `contact_contenu`
--
ALTER TABLE `contact_contenu`
  MODIFY `id_contact_contenu` int(11) NOT NULL AUTO_INCREMENT,AUTO_INCREMENT=211;
--
-- AUTO_INCREMENT pour la table `contact_trad`
--
ALTER TABLE `contact_trad`
  MODIFY `id_contact_trad` int(11) NOT NULL AUTO_INCREMENT,AUTO_INCREMENT=11;
--
-- AUTO_INCREMENT pour la table `credits`
--
ALTER TABLE `credits`
  MODIFY `id_credits` int(11) NOT NULL AUTO_INCREMENT,AUTO_INCREMENT=5;
--
-- AUTO_INCREMENT pour la table `credits_trad`
--
ALTER TABLE `credits_trad`
  MODIFY `id_credits_trad` int(11) NOT NULL AUTO_INCREMENT,AUTO_INCREMENT=9;
--
-- AUTO_INCREMENT pour la table `culture_egypte`
--
ALTER TABLE `culture_egypte`
  MODIFY `id_culture_egypte` int(11) NOT NULL AUTO_INCREMENT,AUTO_INCREMENT=4;
--
-- AUTO_INCREMENT pour la table `culture_egypte_trad`
--
ALTER TABLE `culture_egypte_trad`
  MODIFY `id_culture_egypte_trad` int(11) NOT NULL AUTO_INCREMENT,AUTO_INCREMENT=7;
--
-- AUTO_INCREMENT pour la table `culture_grec`
--
ALTER TABLE `culture_grec`
  MODIFY `id_culture_grec` int(11) NOT NULL AUTO_INCREMENT,AUTO_INCREMENT=4;
--
-- AUTO_INCREMENT pour la table `culture_grec_trad`
--
ALTER TABLE `culture_grec_trad`
  MODIFY `id_culture_grec_trad` int(11) NOT NULL AUTO_INCREMENT,AUTO_INCREMENT=7;
--
-- AUTO_INCREMENT pour la table `home`
--
ALTER TABLE `home`
  MODIFY `id_home` int(11) NOT NULL AUTO_INCREMENT,AUTO_INCREMENT=6;
--
-- AUTO_INCREMENT pour la table `jeu_dot`
--
ALTER TABLE `jeu_dot`
  MODIFY `id_jeu_dot` int(11) NOT NULL AUTO_INCREMENT,AUTO_INCREMENT=4;
--
-- AUTO_INCREMENT pour la table `jeu_vignette`
--
ALTER TABLE `jeu_vignette`
  MODIFY `id_jeu_vignette` int(11) NOT NULL AUTO_INCREMENT,AUTO_INCREMENT=13;
--
-- AUTO_INCREMENT pour la table `menu`
--
ALTER TABLE `menu`
  MODIFY `id_menu` int(11) NOT NULL AUTO_INCREMENT,AUTO_INCREMENT=4;
--
-- AUTO_INCREMENT pour la table `menu_trad`
--
ALTER TABLE `menu_trad`
  MODIFY `id_menu_trad` int(11) NOT NULL AUTO_INCREMENT,AUTO_INCREMENT=7;
--
-- AUTO_INCREMENT pour la table `sources`
--
ALTER TABLE `sources`
  MODIFY `id_sources` int(11) NOT NULL AUTO_INCREMENT,AUTO_INCREMENT=3;
--
-- AUTO_INCREMENT pour la table `sources_trad`
--
ALTER TABLE `sources_trad`
  MODIFY `id_sources_trad` int(11) NOT NULL AUTO_INCREMENT,AUTO_INCREMENT=5;
--
-- AUTO_INCREMENT pour la table `texte`
--
ALTER TABLE `texte`
  MODIFY `id_texte` int(11) NOT NULL AUTO_INCREMENT,AUTO_INCREMENT=4;
--
-- AUTO_INCREMENT pour la table `texte_trad`
--
ALTER TABLE `texte_trad`
  MODIFY `id_texte_trad` int(11) NOT NULL AUTO_INCREMENT,AUTO_INCREMENT=5;
--
-- Contraintes pour les tables exportées
--

--
-- Contraintes pour la table `carousel_trad`
--
ALTER TABLE `carousel_trad`
  ADD CONSTRAINT `fk_carousel_trad_carousel` FOREIGN KEY (`trad_carousel`) REFERENCES `carousel` (`id_carousel`) ON DELETE NO ACTION ON UPDATE NO ACTION;

--
-- Contraintes pour la table `contact_trad`
--
ALTER TABLE `contact_trad`
  ADD CONSTRAINT `contact_trad_ibfk_1` FOREIGN KEY (`trad_contact`) REFERENCES `contact` (`id_contact`);

--
-- Contraintes pour la table `credits_trad`
--
ALTER TABLE `credits_trad`
  ADD CONSTRAINT `credits_trad_ibfk_1` FOREIGN KEY (`trad_credits`) REFERENCES `credits` (`id_credits`);

--
-- Contraintes pour la table `culture_egypte`
--
ALTER TABLE `culture_egypte`
  ADD CONSTRAINT `culture_egypte_ibfk_1` FOREIGN KEY (`egypte_carousel`) REFERENCES `carousel` (`id_carousel`);

--
-- Contraintes pour la table `culture_egypte_trad`
--
ALTER TABLE `culture_egypte_trad`
  ADD CONSTRAINT `culture_egypte_trad_ibfk_1` FOREIGN KEY (`trad_culture_egypte`) REFERENCES `culture_egypte` (`id_culture_egypte`);

--
-- Contraintes pour la table `culture_grec`
--
ALTER TABLE `culture_grec`
  ADD CONSTRAINT `culture_grec_ibfk_1` FOREIGN KEY (`grec_carousel`) REFERENCES `carousel` (`id_carousel`);

--
-- Contraintes pour la table `culture_grec_trad`
--
ALTER TABLE `culture_grec_trad`
  ADD CONSTRAINT `culture_grec_trad_ibfk_1` FOREIGN KEY (`trad_culture_grec`) REFERENCES `culture_grec` (`id_culture_grec`);

--
-- Contraintes pour la table `jeu_dot`
--
ALTER TABLE `jeu_dot`
  ADD CONSTRAINT `fk_jeu1_dot_carousel1` FOREIGN KEY (`dot_carousel`) REFERENCES `carousel` (`id_carousel`) ON DELETE NO ACTION ON UPDATE NO ACTION;

--
-- Contraintes pour la table `jeu_vignette`
--
ALTER TABLE `jeu_vignette`
  ADD CONSTRAINT `fk_jeu1_proposition_carousel1` FOREIGN KEY (`vignette_carousel`) REFERENCES `carousel` (`id_carousel`) ON DELETE NO ACTION ON UPDATE NO ACTION;

--
-- Contraintes pour la table `menu_trad`
--
ALTER TABLE `menu_trad`
  ADD CONSTRAINT `fk_menu_trad_menu1` FOREIGN KEY (`trad_menu`) REFERENCES `menu` (`id_menu`) ON DELETE NO ACTION ON UPDATE NO ACTION;

--
-- Contraintes pour la table `sources_trad`
--
ALTER TABLE `sources_trad`
  ADD CONSTRAINT `sources_trad_ibfk_1` FOREIGN KEY (`trad_sources`) REFERENCES `sources` (`id_sources`);

--
-- Contraintes pour la table `texte_trad`
--
ALTER TABLE `texte_trad`
  ADD CONSTRAINT `fk_texte_trad_texte1` FOREIGN KEY (`trad_texte`) REFERENCES `texte` (`id_texte`) ON DELETE NO ACTION ON UPDATE NO ACTION;

/*!40101 SET CHARACTER_SET_CLIENT=@OLD_CHARACTER_SET_CLIENT */;
/*!40101 SET CHARACTER_SET_RESULTS=@OLD_CHARACTER_SET_RESULTS */;
/*!40101 SET COLLATION_CONNECTION=@OLD_COLLATION_CONNECTION */;
