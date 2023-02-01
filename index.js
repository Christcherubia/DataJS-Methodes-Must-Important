//Un tableau contenant des objets
let data = [
  {
    pseudo: "Liliane",
    age: 39,
    technos: ["JS", "React", "Node.js"],
    admin: false,
  },

  {
    pseudo: "Diane",
    age: 33,
    technos: ["PHP", "Synphony", "HTML"],
    admin: false,
  },

  {
    pseudo: "Jean",
    age: 43,
    technos: ["Java", "SQL", "Ruby"],
    admin: true,
  },
  {
    pseudo: "Rene",
    age: 43,
    technos: ["Java", "SQL", "Ruby"],
    admin: true,
  },
  {
    pseudo: "Pierre",
    age: 43,
    technos: ["Java", "SQL", "Ruby"],
    admin: true,
  },
];

// Switch
document.body.addEventListener("click", (e) => {
  switch (
    e.target.id // permet d'analyser un élément et si jamais il corespond au cas que l'on donne il applique le code qu'on lui donne
  ) {
    case "JavaScript":
      document.body.style.background = "yellow";
      break;
    case "TypeScript":
      document.body.style.background = "orange";
      break;
    case "JAVA":
      document.body.style.background = "blue";
      break;
    default:
      null;
  }
});

//----------------------------------------
//Méthodes Arrays
//----------------------------------------

//ceci est un tableau =>
let array1 = ["JavaScrip", "Python", "PHP"];
let array2 = ["Ruby", "Solidity", "C++"];

let newArray = array1.concat(array2);
// console.log(newArray); // c'est bien un Tableau !
// Pourtant, j'affiche son type est regarder... = object (un objet)

// let newArray1 = [...array1, ...array2];
// console.log(newArray1);

// un objet ce déclare comme suite

// let object1 = {
//   age: 32,
//   adress: "23 rue des champs",
//   nam: "Bertrand",
// };

// console.log(object1); // un objet à des {} un tableaux des []
// console.log(typeof object1); // un objet à des {} un tableaux des []
// donc c'est bien un objet contrairement à "newArray"

// console.log(array1.join(",  ")); // permet d'injecter un caractère dans le tableau entre chaque types

// console.log(newArray.slice(2, 5));

// console.log(array1.indexOf("Python")); // indique à quel index l'élément se trouve

// array1.forEach((languages) => console.log(languages));

// console.log(array1.every((language) => language === "P")); // Est-ce que dans chacun de ses élélent il y a cette élément exactement déclarer
// console.log(array1.some((language) => language === "PHP")); // Cherche est trouve si il y a l'élément déclarer en question dans le tableau et renvois true si vrais

// let shift = array1.shift(); //permet d'enlever le premier élément du tableau
// console.log(shift); // garde que le premier élément

// console.log(array1.pop()); // permet de retenir que le dernier élément

// const restArray = array1.splice(0, 2, ...array2); // remplace un élément du tableau par un élément donner
// console.log(array1);

//---------------------------
//IMPORTANT//
//---------------------------
let arrayNumber1 = [45, 2, 54, 24, 78, 1];
let arrayNumber2 = ["bonjour", "nana", "zozo", "tati", "Maman"];
// console.log(arrayNumber1.reduce((x, y) => x + y)); //permet d'additionné tout le tableau en une seule fois
// arrayNumber1.push(17); // inject un élément au bout d'un tableau
// console.log(arrayNumber1);

//FILTER (filtre des éléments aux saint d'un tableau), SORT(tri des éléments au saint d'un tableau, des objets), MAP(lister les choses un peu comme un forEach mais en mieu particulièrement pour les tableaux)
// console.log(arrayNumber1.sort()); //permet de ranger par index exemple ici met tout les nombre avec "1" en premier ensuite avec "2" etc, permet également de ranger par ordre alphabétique en priorisant les majuscules
// console.log(arrayNumber1.filter((nombre) => nombre < 45)); // le terme peut être appelé de n'importe quel façon, on l'appel ici number c'est juste pour savoir de quoi ça parle
// console.log(arrayNumber1.sort((a, b) => b - a)); // permet de ranger les élément d'un tableau, à l'endroit ou à l'envers
// console.log(arrayNumber2.sort((a, b) => a - b)); // ne fonctionne pas pour les strings apparement
// //on peut également multiplier les deux méthodes ex :
// console.log(arrayNumber1.filter((nombre) => nombre < 45).sort((a, b) => b - a));

// document.body.innerHTML = arrayNumber1
//   .map((number) => `<li> ${number}</li>`)
//   .join(""); //Map pour un tableau

//---------------------------
//Méthodes Objects = Extrèmement important
//---------------------------
document.body.innerHTML = data
  .filter((user) => user.admin === true)
  .sort((a, b) => b.age - a.age) //permet de classer les users du moins âgé au plus vieux ou inversement
  .map(
    (user) =>
      `
<div class="user-card">
  <h2>${user.pseudo}</h2>
  <p>Age : ${user.age} ans</p>
  <p>Stutus : ${user.admin ? "Modérateur" : "Membre"}</p>
</div>
`
  )
  .join("");
