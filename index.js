'use strict';
// //  // console.log('am not just aman but an engineer');

// // // // let hasDriversLicense = false;
// // // // const passTest = true;

// // // function logger () {
// // //     console.log('my name is mwenda');
// // // }

// // // // calling or invoking the function
// // // logger();
// // // logger();
// // // logger();

// // // function fruitProcessor(apples, oranges){
// // //     const juice = `juice with ${apples} apples and ${oranges} oranges.`;
// // //     return juice;
// // // }
// // // const appleJuice = fruitProcessor(2,4);
// // // console.log(appleJuice);
// // // console.log(fruitProcessor(4,2));

// // // const appleOrangeJuice = fruitProcessor(5,6);
// // // console.log(appleOrangeJuice);

// // // function calcAge1 (birthYaeh){//function declaration
// // //     const age = 2037 - birthYaeh;
// // //     return age;// can also be simplified to, 2037 - birthYaeh;
// // // }
// // // const age1 = calcAge1(1992);

// // // const calcAge2 = function(birthYaeh){// function expression
// // //     return 2037 - birthYaeh
// // // }
// // // const age2 = calcAge2(1992);
// // // console.log(age1,age2);

// // //function expression
// // // const calcAge2 = function(birthYaeh){
// // //        return 2037 - birthYaeh;
// // //     }

// //     //Arrow function
// //    const calcAge3 =  birthYaeh => 2037 - birthYaeh;
// //    const age3 = calcAge3(1992);
// //    console.log(age3);

// //    const yearsUntilRetirement = (birthYaeh,firstName) => {
// //     const age = 2037 - birthYaeh;
// //     const retirement = 65 - age;
// //     return `${firstName} retires in ${retirement} years`; 
// //    }
// //    console.log(yearsUntilRetirement(1992,'Mwenda'));
// //    console.log(yearsUntilRetirement(1980,'bob'));
// //    console.log(yearsUntilRetirement(1970,'carol'));

// //functions calling other functions

//     function cutFruitPieces(fruit){
//         return fruit * 4;
//     }

//     function fruitProcessor(apples, oranges){
//         const applePieces = cutFruitPieces(apples);
//         const orangesPieces = cutFruitPieces(oranges);
//         const juice = `juice with ${applePieces} piece of apples and ${orangesPieces} piece of oranges.`;
//          return juice;
//     }
//     console.log(fruitProcessor(3,4));

const calcAge = function(birthYaeh){
    return 2037 - birthYaeh;
}

const yearsUntilRetirement = function (birthYaeh,firstName) {
         const age = calcAge(birthYaeh);
         const retirement = 65 - age;
         if(retirement > 0){
             console.log(`${firstName} retires in ${retirement} years`); 
            return retirement;
         }else{
             console.log(`${firstName} has already ritred`);
            return -1
         }
         
        }
      console.log(yearsUntilRetirement(1991,'mwenda'));
      console.log(yearsUntilRetirement(1970,'mwenda'));
      console.log(yearsUntilRetirement(1980,'mwenda'));

      //code chellenge

      const calcAverage = (a,b,c) => (a+b+c)/3;

      console.log(calcAverage(3,4,5));
      const scoreDolphins = calcAverage(44,23,71);
      const scoreKoalas = calcAverage(65,54,49);
      console.log(scoreDolphins,scoreKoalas);
      
      const checkWinner = function (avgDolphins ,avgKoalas){
        if(avgDolphins >= 2 * avgKoalas){
            console.log(`dolphins win the trophy (${avgDolphins} vs ${avgKoalas})`);
        }else if(avgKoalas >= 2 * avgDolphins){
            console.log(`koalas wins the trophy (${avgKoalas} vs ${avgDolphins})`);
        }else{
            console.log(`no one wins the trophy (${avgDolphins} vs ${avgKoalas})`);
        }
      }
      checkWinner(scoreDolphins,scoreKoalas);