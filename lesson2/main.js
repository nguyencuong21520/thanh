// function sortArray(array) {
//     var temp = 0;
//     for (var i = 0; i < array.length; i++) {
//       for (var j = i; j < array.length; j++) {
//         if (array[j] < array[i]) {
//           temp = array[j];
//           array[j] = array[i];
//           array[i] = temp;
//         }
//       }
//     }
//     return array;
//   }

//   console.log(sortArray([3,1,2,9,5,7,2,1,1]));

// console.log("bai tap 1");
// let numbers = [1, 23, 34, 100];
// let sum = 0;

// for (let i = 0; i < numbers.length; i++) {
//   sum = sum + numbers[i];
// }
// console.log(sum);

// let sum = 158

// if (sum>10 && sum < 99 && sum % 2 === 0) {
//   console.log(
//     `Nếu tổng là số > 10 và < 99 và chẵn thì lấy ra số hàng đơn vị là = ${
//       sum % 10
//     }`
//   );
// } else {
//   if (sum>10 && sum < 99 && sum % 2 != 0) {
//     console.log(
//       ` Nếu tổng là số > 10 và < 99 và lẻ thì lấy ra tổng các chữ số là = ${
//         (sum % 10) + parseInt(sum / 10)
//       }`
//     );
//   } else if (sum > 100 && sum % 2 !== 0) {
//     console.log(
//       `Nếu tổng là số > 100 và lẻ thì lấy ra số hàng chục là = ${parseInt(
//         (sum % 100) / 10
//       )}`
//     );
//   }else{
//       console.log("số này >100 và là số chẵn");
//   }
// }

// let userChoose = "Y"

// if(userChoose == "Y"){
//   let player = "messi"
//   footballclub.push(player)
// }else{
//   console.log("see u soon");
// }

let a = 1;
let b = 2;
let c = 1;
if (a === 0) {
  if (b === 0 && c === 0) {
    console.log("phương trình có vô số nghiệm");
  } else if (b === 0 && c !== 0) {
    console.log("phương trình vô nghiệm");
  } else console.log(`phương trình có nghiệm x = ${-c / b}`);
}

if (a !== 0) {
  let delta = Math.pow(b, 2) - 4 * a * c;
  console.log(`delta = ${delta}`);
  if (delta > 0) {
    let x1 = (-b + Math.sqrt(delta)) / (2 * a);
    let x2 = (b + Math.sqrt(delta)) / (2 * a);
    console.log(`phương trình có 2 nghiệm x=${x1} và x=${x2}`);
  } else if ((delta == 0)) {
    console.log(`Phương trình có nghiệm kép x = ${-b / (2 * a)}`);
  } else console.log("Phương trình vô nghiệm");
}
