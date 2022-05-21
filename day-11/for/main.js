// Thực hiện công việc thức dậy lúc 5:00 trong 30 ngày
// day++ (cộng thêm 1)
// day = day +1 (cộng thêm 1)
// day += 1 (cộng thêm 1)
// for (let day = 1; day <= 30; day++) {
//     console.log(`Ngày ${day} thức dậy lúc 5:00`)
// }

// Thực hiện công việc thức dậy lúc 5:00 trong 30 ngày vào các ngày lè
// for (let day = 1; day <= 30; day++) {
//     if (day % 2 == 1) {
//         console.log(`Ngày ${day} thức dậy lúc 5:00`)
//     }
// }

// for (let day = 1; day <= 30; day += 2) {
//         console.log(`Ngày ${day} thức dậy lúc 5:00`)
// }

// Break : Thực hiện công việc thức dậy lúc 5:00 trong 30 ngày, nhưng đến ngày 20 chán quá --> bỏ
// for (let day = 1; day <= 30; day++) {
//     if (day == 20) {
//         console.log('Chán quá. Nghỉ');
//         break;
//     }
//     console.log(`Ngày ${day} thức dậy lúc 5:00`);
// }

// Continue : Thực hiện công việc thức dậy lúc 5:00 trong 30 ngày, nhưng vào những ngày cuối tuần thì không thực hiện.
// for (let day = 1; day <= 30; day++) {
//     if (day % 7 == 0) {
//         console.log('Nghỉ xả hơi cuối tuần');
//         continue;
//     }
//     console.log(`Ngày ${day} thức dậy lúc 5:00`);
// }

// Tiết kiệm tiền
// Thực hiện tiết kiệm trong 10 ngày, mỗi ngày 100.000
// Sau 10 ngày có 1.000.000 

// Thời điểm chưa bắt đầu tiết kiệm --> 0 
//  let money = 0; // ví, PI

// for (let day = 1; day <= 10; day++) {
//     money += 100000 
// }

// console.log('Tổng tiền sau 10 ngày tiết kiệm là :' + money);

// Ngày lẻ tiết kiệm 100.000 
// Ngày chẵn tiết kiệm 200.000

// let money = 0;
// for (let day = 1; day <= 10; day++) {
//     if (day % 2 == 1) {
//         money += 100000;
//     }else {
//         money += 200000;
//     }
// }

// console.log('money = ' + money);

// 3. Đến ngày số 8, hết tiền không tiết kiệm nữa
//  for (let day = 1; day <= 10; day++) {
//      if (day == 8) {
//          console.log('Hết tiền');
//          break;
//      }
//      money += 100000;
//  }

//  console.log('money = ' + money);

// 4. Ngày cuối tần lấy tiền đi nhậu, không có tiền tiết kiệm hôm đó

// for (let day = 1; day <= 10; day++) {
//     if (day % 7 == 0) {
//         console.log('Đi nhậu');
//         continue;
//     }
//     money += 100000;
// }

// console.log('money = ' + money);

// Thực hiện công việc thức dậy lúc 5:00 trong 30 ngày
// day++ (cộng thêm 1)
// day = day +1 (cộng thêm 1)
// day += 1 (cộng thêm 1)
// for (let day = 1; day <= 30; day++) {
//     console.log(`Ngày ${day} thức dậy lúc 5:00`);
// }


// Vẫn là vòng lặp for nhưng điều kiện phân tán ở 1 số nơi vẫn thực thi ( nhưng k khuyến khích dùng)
// let day = 1; 
// for(;;) {
//     if(day > 30) {
//         break;
//     }
//     console.log(`Ngày ${day} thức dậy lúc 5:00`);
//     day++;
// }