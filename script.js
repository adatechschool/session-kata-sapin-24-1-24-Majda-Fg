// étape 1.1 - une ligne d'étoiles //sans console.log('*')
function afficherEtoiles(n){
    console.log("étape 1.1")
  let singleLine = '';
  for(let i=0; i<n; i++){
    singleLine += '*'
  }
  console.log(singleLine)
}
afficherEtoiles(2)
afficherEtoiles(9)

// étape 1.2 - Carré d'étoiles // sans appel de fonction
function afficherRectangle(hauteur,largeur){
    console.log("étape 1.2")
    for (let i = 1; i <= hauteur; i++) {
    let ligne = ""; 
        for (let j = 1; j <= largeur; j++) {
         ligne += '*';
        }
    console.log(ligne); 
    }
}
afficherRectangle(5,5)

// étape 1.3 - Triangle d'étoiles 
function triangleDroite(n){
    console.log("étape 1.3")
    let i = 0;
    let singleLine = ''
    do{ singleLine += '*';
        i++;
        console.log(singleLine+"\\")
    }while(i < n)
    }
triangleDroite(5)


// let singleLine = "";
// for (let i = 0; i< n; i++){
   
//     console.log('*')
// }

// let str = '',i=1;
// while(i<=10){
//     str += i+'';
//     i += 1;
// }
// console.log(str);

// function afficherPointeSapin(hauteur) {
//     // à remplir
//   }
//   afficherPointeSapin(4)
