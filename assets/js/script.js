
let string = 'Une chaine de caractère' //Texte
let number = 2
let array = [] //Tableau
const object = {},
boolean = true

let num = 2,
num2 = 5,
num3 = 6,
num4 = 7,
num5 = 7,
t = "Emile",
y = "Bonjour "+t,
x = 'tu vas bien ?'

console.log( y +', '+ x) 
console.log(`Bonjour ${t}, ${x} ${num + num2}`) 


const myArray = [1,2,3,4,5,'chips',[1,8,[10,12]], 'coucou', 'b1'];
const dix = myArray[6][2][0];
console.log(dix, myArray[myArray.length - 1])


const eleves = [
    'Justine', 
    'Franck',
    'Baptiste',
    'Clément',
    'Manon',
    'Maïwenn',
    'Mathis',
    'Vladislav',
    'Timéo',
    'Jérôme',
    'Tom',
    'Gabriel'
];


const students = [
    {prenom:'Jane', nom:'Doe', email:'sddf@df.fr', age:18,notes:[10,15,18,17]},
    {prenom:'Jeanne', nom:'Doh', email: 'test@gmail.fr', age:17,notes:[10,11,9,7]},
    {prenom:'Jean', nom:'Dae', email:'testy@crousty.fr', age:19,notes:[8,1,2,18]},
    {prenom:'John', nom:'Doha', email:'tes52@67.fr', age:52,notes:[15,13,4,7]}
];

const k = 'nom';
console.log(students[2][k])

students.forEach( student => {
    
    const notes = student.notes
    let total = 0
    
    for (let i = 0; i < notes.length; i++) {
        total = total + notes[i]

        //total += notes[i]
    }

    console.log(`Bonjour ${student.prenom}`)
});

// eleves.forEach( (eleve, i) => {
//     console.log(`Ligne ${i + 1} : Salut ${eleve}`)
//     console.log(`Ligne ${i} : Salut ${eleves[i]}`)

    
// });

// for (let i = 0; i < eleves.length; i++) {
//     const eleve = eleves[i];
//     console.log('Ligne '+(i+1)+':  Bonjour '+eleves[i])
//     console.log('Ligne '+(i+1)+':  Bonjour '+eleve)
// }