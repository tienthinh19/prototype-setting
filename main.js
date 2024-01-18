// random 100 số 
// let random = (Math.floor(Math.random() * 100)+1);

// while (true) {
//     let n = parseInt( prompt("Please enter your n"));
//     if (n < random) {
//         alert("n nhỎ hơn số random");
//     } else if (n > random) {
//         alert("n lớn hơn số random");
//     } else if(n == random) {
//         alert(" bạn đã đúng");
//     }
// }






// tạo 1 ds có tên, GPA, xắp xếp theo GPA
// let students = [
//     {
//         name: "A",
//         gpa: 4
//     },
//     {
//         name: "B",
//         gpa: 3
//     },
//     {
//         name: "C",
//         gpa: 3.9
//     },
//     {
//         name: "D",
//         gpa: 1
//     }
// ];
// let soLuong = prompt("nhap so luonng ma ban can");
// for (let i = 0; i < soLuong; i++) {
//     // tạo ô nhập
//     let n = prompt("nhap name");
//     let x = parseFloat(prompt("nhap gpa"));
//     while (isNaN(x)) {
//         x = parseFloat(prompt("nhap lai gpa"));
//     }
//     console.log(n);
//     console.log(x);
//      //đẩy giá trị vô object
//     students.push({
//         name: n,
//         gpa: x
//     })
//     console.log(students);
// }


// students.sort((a, b) => b.gpa - a.gpa);
// // từ lớn đến bé

// console.log(students);

//nhập n, ngẫu nhiên từ 13-27,tìm những số mà lân cận lớn nhất
// let n = parseInt(prompt("nhap n"));
// let numbers = [];
// let sum;
// let max = 0;
// let index = [];
// // Lặp theo hàng
// function fill() {
//     for (var i = 0; i < n; i++) {
//         numbers[i] = [];
//         // Lặp theo cột, số cộ từ 0 -> số lượng phần tử của hàng
//         for (var j = 0; j < n; j++) {
//             numbers[i][j] = getRndInteger(13, 27);
//         }
//     }
//     return numbers;
// }

// console.table(fill());

// function getRndInteger(min, max) {
//     return Math.floor(Math.random() * (max - min + 1)) + min;
// }

// for (var i = 0; i < n; i++) {
//     for (var j = 0; j < n; j++) {
//         let sum = 0;
//         if (i - 1 >= 0) {
//             sum += numbers[i - 1][j];
//         }
//         if (i + 1 < n) {
//             sum += numbers[i + 1][j];
//         }
//         if (j - 1 >= 0) {
//             sum += numbers[i][j - 1];
//         }
//         if (j + 1 < n) {
//             sum += numbers[i][j + 1];
//         }
//         if (sum > max) {
//             max = sum;
//             index[0] = i;
//             index[1] = j;
           
//          console.log(index);
//         }
//     }
// }
// console.log(max);