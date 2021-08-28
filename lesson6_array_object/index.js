//array
// CRUD
// create
// Read
// update
// delete

// create
// let arrFruits = ["apple", "banana", "orange"]

// // arrFruits.push("lychee")
// // arrFruits.unshift("alo")
// // let l = arrFruits.length

//     //read
// // console.log(arrFruits[1]);
// // let a = arrFruits.length
// for (let i = 0; i<arrFruits.length;i++){
//     console.log(arrFruits[i]);
// }

//     //update
// // arrFruits[1] = "mango"
//     //delete
// // arrFruits.pop()
// // arrFruits.shift()

//     //bonus

// let i = arrFruits.indexOf("Apple")
// console.log(i);

// console.log(arrFruits);

// let fruit = prompt("nhập loại quả")

// console.log(fruit.toLowerCase());

// let age1 = prompt("Nhập tuổi của bạn")
// let age = parseInt(age1)
// console.log(`Năm Sinh của bạn là ${2021 - age}`);

// let fruits = ["chuối", "cam", "táo"]

// // alert("alo")

// do{
//     var aa = confirm("bạn có muốn nhập nữa k?")
//     console.log("alo");
// }while(aa)

//c1 thêm 2 loại quả nữa, 1 quả vào đầu, 1 quả vào cuối
//c2 cho người dùng nhập vào 1 loại quả, và thêm quả đó vào cuối mảng fruits
//c3 cho người dùng nhập vào 1 loại quả, 3 lần, và thêm quả đó vào cuối mảng fruits | loop
//c4 cho người dùng nhập vào 1 loại quả, khi nào người dùng muốn dừng, và thêm quả đó vào cuối mảng fruits | loop
//c5 cho người dùng nhập vào 1 loại quả cần xóa, nếu có trong mảng thì xóa, k thì thông báo là k tìm thấy quả
//c6 xóa 2 loại quả từ vị trí số 1

let fruits = ["chuối", "cam", "táo"];

// c2
function inputFruit() {
  let fruitName = prompt("nhập tên loại quả");
  let fruitName_ = fruitName.toLowerCase();
  fruits.push(fruitName_);
}
// inputFruit()
// c3
// for (let i = 0; i <3; i++){
//     inputFruit()
// }
//c4
// do{
//     var cf = confirm("bạn có muốn nhập nữa k?")
//     inputFruit()
// }while(cf)
// chắc chắn sẽ được nhập 1 lần
// var cf = confirm("bạn có muốn nhập nữa k?")

// while(cf){
//     inputFruit()
//     cf = confirm("bạn có muốn nhập nữa k?")
// }

// c5
// let fruitName = prompt("nhập tên loại quả")
// let fruitName_ = fruitName.toLowerCase()
// pos = fruits.indexOf(fruitName_)
// if(pos != -1){
//     fruits.splice(pos,1)
// }else{
//     alert("K tìm thấy loại quả bạn cần")
// }

// console.log(fruits);

//object
// let student = {
//     name: "Cường",
//     age: 12,
//     school: "mindx"
// }

// console.log(student);

// console.log(student["age"]);
// console.log(student.age);

// student.age = 20
// student.rank = "giỏi"

// console.log(student);

// let arr = [
//   {
//     name: "cam",
//     url: "https://dacsancamvinh.net/wp-content/uploads/2015/06/cong-dung-qua-cam.jpg",
//   },
//   {
//     name: "táo",
//     url: "https://newfreshfoods.com.vn/datafiles/3/2018-02-27/16100958642348_tao-do-my-red-delicious-size-36-44.jpg",
//   },
//   {
//     name: "xoài",
//     url: "https://cdn.tgdd.vn/2020/11/CookProduct/thum-1200x676-3.jpg",
//   },
// ];


// console.log(arr[0].name);
// console.log(arr[0].url);

// for
// if else
// array
// object
