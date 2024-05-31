# ZKOF Layout

## Description
ZKOF Layout est un layout réalisé avec la [version 18 du framework Angular](https://angular.dev/) ainsi que les composant de [primeng](https://primeng.org/) et le css de [primeflex](https://primeflex.org/). Il offre : 

 - Une tête de page **responsive** avec un logo (personnalisable) et des actions supplémentaires.
 - Une barre latérale contenant le menu. Les éléments de ce menu peuvent être définis.
 - Un pied de page.

Voici une capture d'écran de l'interface.
 
# Installation

 1. Cloner le dépôt
````bash
git clone https://github.com/gofreish/primeng-layout.git
````
 2. Avoir la dernière version de node js
	Assuré vous d'obtenir la dernière version LTS de node js. Vous pouvez utiliser des outils comme NVM pour conserver d'autres versions.
	
 3. Avoir @angular/cli installer avec la dernière version de node js.
Pour son installation consulter le [site officiel](cc)
 5. Installer les dépendances du projet.
Dans le répertoire du projet saisir la commande suivante : 
````bash
npm install
````

## Installation dans un projet existant
Il est aussi possible de l'ajouter comme layout d'un projet Angular existant.

 1. Prérequis du projet
 - Ce code fonctionnera bien avec les versions supérieure à la version 18.0.2. Pour bien suivre cette partie, veuillez utiliser une version supérieure à la version 18.0.2.
 - Primeng, primeicons et primeflex doivent être installés dans le projet.

 2. Les assets
Copier le répertoire src/assets et placer le dans votre répertoire src. 
- Dans le fichier des style **src/styles.scss**  ajouter les lignes suivantes pour intégrer les feuilles de styles css du layout. 
````scss
$gutter: 1rem; //pour le système de grille de primeng
@import  "assets/layout/layout.scss";
````

- Dans le fichier **angular.json** ajouter les éléments suivants dans les options styles du build.
````json
"styles": [
	"src/styles.scss",
	{
		"input": "src/assets/themes/lara-light-blue.scss",
		"bundleName": "lara-light-blue",
		"inject": false
	},
	{
		"input": "src/assets/themes/lara-dark-blue.scss",
		"bundleName": "lara-dark-blue",
		"inject": false
	}
],
````

- Dans le fichier **index.html** ajouter l'élément suivant dans l'entête: 
````html
<link  id="theme-css"  rel="stylesheet"  type="text/css"  href="lara-light-blue.css">
````

3. Le code du layout
Copier le repertoire **src/app/layout** et copier le dans votre répertoire **src/app/** 
- Dans le fichier de configuration **asr/app/app.config.ts** ajouter l'élément suivant au tableau **providers**: 
````ts
provideAnimations(),
````
- Si vous voulez utiliser le layout à la racine vous pouvez ajouter le chemin suivant a vos routes dans le repertoire **app.routes.ts** : 
````typescript
{
	path:  "", 
	component:  AppLayoutComponent,
	children: [

	]
}
````
Il ne reste plus qu'a définir les composants enfants qui seront charge dans le Layout.

4. Logo
Pour ce qui est du logo il est prévu qu'il ait le chemin **public/layout/images/logo-white.svg** pour la version clair et **public/layout/images/logo-dark.svg** pour la version sombre. Pour customiser ce chemin veuillez modifier ce chemin dans le fichier **layout/parts-topbar/app.topbar.component.ts**.