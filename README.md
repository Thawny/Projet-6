# Projet-6
*Une application CRUD pour un peinte avec NodeJS, le framework Express et MongoDB*

C'est le sixième et dernier projet de ma formation. Il répond à la consigne « Contribuez à votre écosystème ».
Pour cela j’ai choisi de rendre service à mon père, Christian Malto, peintre amateur, en concevant pour lui un site internet.
Possédant déjà un blog (blogspot), il souhaitait se libérer des limitations des moteurs de blogs traditionnels et se doter
d’un site d’aspect plus « professionnel », en phase avec son identité visuelle.
Pour ce projet j’ai choisi d’explorer les technologies NodeJS et MongoDB, auxquelles je m’intéresse depuis un certain temps déjà.
Bien que les qualités intrinsèques des ces technologies (rapidité d’exécution, asynchronicité, scalabilité)
ne soit pas particulièrement mise en valeur par ce type d’application, j’ai eu grand plaisir à les utiliser.

**Préconisations fonctionnelles**
Le front office
Le site présentera toutes les fonctionnalités d’une application CRUD (Create, Update, Delete).
Ces opérations seront possibles sur les tableaux (galerie) et les articles (blog).
Deux types d’accés sont à prévoir : le visiteur anonyme et l’administrateur.

La page d’accueil est une galerie des oeuvres de Christian Louis Malto. À gauche, une barre latérale fixe offre dans
la partie supérieure une présentation succinte du peintre, et dans la partie inférieure, des menus de navigation
vers les pages « Actualités » et « Contacts » ainsi que des liens vers les réseaux sociaux facebook, pinterest et twitter.
Ceci permet de fournir une vue d’ensemble immédiate sur le travail de Christian Louis Malto. Chaque tableau est cliquable
et fait apparaître une fenêtre modale avec une version agrandie du tableau, son titre, ses dimensions ainsi que,
le cas échéant, un lien vers l’article associé et un extrait de ce dernier.
