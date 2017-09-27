
# Projet-6
*Une application CRUD pour un peinte avec NodeJS, le framework Express et MongoDB*

C'est le sixième et dernier projet de ma formation. Il répond à la consigne « Contribuez à votre écosystème ».
Pour cela j’ai choisi de rendre service à mon père, Christian Malto, peintre amateur, en concevant pour lui un site internet.
Possédant déjà un blog (blogspot), il souhaitait se libérer des limitations des moteurs de blogs traditionnels et se doter
d’un site d’aspect plus « professionnel », en phase avec son identité visuelle.
Pour ce projet j’ai choisi d’explorer les technologies NodeJS et MongoDB, auxquelles je m’intéresse depuis un certain temps déjà.
Bien que les qualités intrinsèques des ces technologies (rapidité d’exécution, asynchronicité, scalabilité)
ne soit pas particulièrement mise en valeur par ce type d’application, j’ai eu grand plaisir à les utiliser.

### Préconisations fonctionnelles

**Le front office**

Le site présentera toutes les fonctionnalités d’une application CRUD (Create, Update, Delete).
Ces opérations seront possibles sur les tableaux (galerie) et les articles (blog).
Deux types d’accés sont à prévoir : le visiteur anonyme et l’administrateur.

La page d’accueil est une galerie des oeuvres de Christian Louis Malto. À gauche, une barre latérale fixe offre dans
la partie supérieure une présentation succinte du peintre, et dans la partie inférieure, des menus de navigation
vers les pages « Actualités » et « Contacts » ainsi que des liens vers les réseaux sociaux facebook, pinterest et twitter.
Ceci permet de fournir une vue d’ensemble immédiate sur le travail de Christian Louis Malto. Chaque tableau est cliquable
et fait apparaître une fenêtre modale avec une version agrandie du tableau, son titre, ses dimensions ainsi que,
le cas échéant, un lien vers l’article associé et un extrait de ce dernier.

C’est la page « Actualité » qui répond aux fonctionnalités de blog. Celle-ci respecte une présentation similaire à la page d’accueil et offre un récapitulatif des articles. Chaque entrée est cliquable et mène vers l’article intégral.

Enfin, la page contact, bien que non requise par M. Malto a été proposée et acceptée par ce dernier. Il s’agit d’un simple formulaire d’envoi de message auxquels M. Malto aura accès dans l’administration.

**Le back office**

L’interface d’administration reprend la structure du front office. La barre latérale de gauche disparaît et se trouve remplacée par une nouvelle barre à droite, plus fine. Elle permet la navigation au sein de l’interface d’administration.  

**Les défis relevés**
- Conception d’un site de A à Z. Rédaction d’une note d’intention. Maquettage
- Conception d’une application CRUD en NodeJS à l’aide du framework Express
- Utilisation, configuration et déploiement du moteur de base de données MongoDB
- Gestion et persistance des uploads et ajouts de vidéos dans les articles
- Conception graphique d’un site moderne
- Mise en place d’un système d’authentification sécurisé pour des conditions réelles
- Déploiement en production

### Les technologies :

**backend**

NodeJS + le framework Express.

**middlewares et libraries**

 sécurité : Helmet  
 gestion des uploads : Multer  
 gestion des sessions et authitification : express-session  
 autre : body-parser,  node-sass…  
 ORM : Mongoose

**base de données**

MongoDB + Mongoose (ORM)

**frontend**

moteur de template : Pug (anciennement Jade)  
style : SASS (Syntactically Awesome Stylesheets)
javascript : jQuery, Mansonry.js
        
