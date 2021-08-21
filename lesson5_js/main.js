// các kiểu dữ liệu
//     1. Number 1,2,3,3.5
//     2. string => "alo", 'alo', `alo`
//     3. boolean => true, false

// các các khai báo Biến
//     var => có thể thay đổi
//     let => có thể thay đổi

//     const => không thể thay đổi

// loop
    // 1.for
// for(giá trị khởi tạo; điều kiện; bước nhảy){
//     //do something with loop
// }

// i++ | i = i + 1 | i +=1


// for(let i = 0; i<= 20; i++){
//     console.log("các số chẵn từ 0-20 là",i);
// }

    // 3.while
// while (condition) {
//     // code block to be executed
//   }

// let i = 20

// do{
//     console.log(i);
//     i = i + 1
// }while(i<20)

// while(i<20){
//     console.log(i);
//     i = i + 1
// }


// let diem = 5

// if(a < 5){
//     console.log("a nho 5");
// }else{
//     console.log("a nho 5");
// }

// <5 điểm thì F
// 5-7 điểm C
// 7-9 điểm B
// 9-10 Điểm A

// let a = 6

// let b = 3

// if(a>4 && b>4 && ..){
//     console.log("alo");
// }
// if(a>4 || b>4 || ...){
//     console.log("alo");
// }

// if(diem<5){
//     console.log("Diem F");
// }else if(diem <7){
//     console.log("Biem C");
// }else if (diem < 9){
//     console.log();
// }

// Nhân : *
// Chia : /
// Cộng : +
// Trừ : -
// chia lấy dư : %



// Bài 1: Cho 1 số nguyên dương n. Viết hàm tính n giai thừa (n!). 
// Ví dụ: n = 5, kết quả trả về là 5! = 1 * 2 * 3 * 4 * 5 = 120

// Bài 2: Cho 1 chuỗi số, hãy viết loop có tác dụng sao chép chuỗi số lên 10 lần, ngăn cách nhau bởi ký tự "-". 
// Ví dụ cho chuỗi "123" thì kết quả sẽ là "123-123-123-123-123-123-123-123-123-123"

// Bài 3 in ra các số từ 0 - 50 chia hết cho 
//  - 2
//  - 3
//  - 4

// Bài 4 : in ra bội số chung nhỏ nhất của 2 số bất kì

//Bài1

// let a = 5
// let result = 1

// for (let i = 1; i <=a; i++) {
//     result = result*i
// }
// console.log(result);

//Bài2

// let string = "123"
// let result = ""
// for (let i = 0; i <10; i++){
//     if(i<9){
//         result = result + string + "-"
//     }else{
//         result = result + string
//     }
// }
// console.log(result);

//Bài3
// for(let i = 1; i <50; i++){
//     if(i%2 == 0){
//         console.log(`số ${i} chia hết cho 2`);
//     }
//     if(i%3 == 0){
//         console.log(`số ${i} chia hết cho 3`);
//     }
//     if(i%4 == 0){
//         console.log(`số ${i} chia hết cho 4`);
//     }
// }

// Bài 4



function boiChungNhoNhat(a,b){ 
    let result = a*b
    for(let i = 1; i<a*b; i++){
        if(i%a == 0 && i%b == 0){
            result = i
            break
        }
    }
    console.log(result);
}
boiChungNhoNhat(5,8)
boiChungNhoNhat(6,3)

function buoiSang(thu){
    console.log(`sang thu ${thu}`);
    console.log("danh rang");
    console.log("an sang");
    console.log("di hoc");
}
buoiSang(2)
buoiSang(3)










