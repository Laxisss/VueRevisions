# vue

## Project setup
```
npm install
```

### Compiles and hot-reloads for development
```
npm run serve
```

### Compiles and minifies for production
```
npm run build
```

### Lints and fixes files
```
npm run lint
```

### Customize configuration
See [Configuration Reference](https://cli.vuejs.org/config/).






Déploiement du projet :
- Ce projet peut être déployé avec les commandes suivantes : 

# npm install
(Si problème avec eslint : npm install -force)

# npm run serve
Et rendez-vous sur localhost:8080

Puis il est possible de la télécharger en tant que pwa à l'aide du bouton associé sur votre navigateur.

Les fonctionnalités implémentées :
- Création et suppression des catégories, themes et cartes.
- Stockage en localStorage pour conserver les données.

L'organisation du code et des composants :
Le composant PanelView est le composant mère, c'est lui qui gère quelle "page" doit être affichée (Liste des catégories, des themes ou des cartes).
CategoryList : Liste des catégories
CategoryView : Liste des Theme
ThematicView : Liste des cartes

CategoryComponent : affichage de la categorie comme élément de liste
ThematicComponent : affichage du theme comme élément de liste
CardComponent : affichage de la carte comme élément de liste

Helloworld : Pour faire joli
