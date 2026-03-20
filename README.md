# TP React – JSX, Composition et Tests

## Objectifs
- Comprendre JSX et sa transformation en JavaScript pur.
- Créer des composants réutilisables avec HOC (Higher-Order Component) et Render Props.
- Écrire des tests unitaires et d’intégration avec Jest et Testing Library.

## Résultat final
L’application affiche :


![WhatsApp Image 2026-03-20 at 13 39 24](https://github.com/user-attachments/assets/201a69d8-0595-49bc-ab14-ae5ad35b75df)

- **JSX** : deux titres (`Bienvenue avec JSX` et `Bienvenue en JavaScript natif`) + un champ `Votre prénom :`
- **HOC** : un bouton `Envoyer le formulaire` qui déclenche une alerte (`Formulaire envoyé (simulation)`)
- **Render Props** : une liste de prénoms (`Amine`, `Leila`, `Karim`, `Sofia`)
- **Compteur** : un compteur cliquable avec affichage du nombre de clics


## *L’alerte au clic sur le bouton* :

![WhatsApp Image 2026-03-20 at 13 38 55](https://github.com/user-attachments/assets/d33e6036-a557-4380-ab42-b1b7388095d6)


## Tests:
Les tests unitaires et d’intégration ont été écrits et passent avec succès.
<img width="358" height="176" alt="image" src="https://github.com/user-attachments/assets/a6c601ab-4493-41ed-b274-b1526f849203" />


## Conclusion
Le TP a permis de mettre en œuvre :
- La syntaxe JSX et son équivalent JavaScript pur.
- Un HOC `withTracker` pour logguer les props.
- Un composant `DataProvider` utilisant Render Props pour afficher une liste dynamique.
- Des tests avec React Testing Library.



