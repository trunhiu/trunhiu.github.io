//Bài 1. Viết function truyền vào 1 chuỗi bất kỳ, hãy sao chép chuỗi đó lên 10 lần.
function repeatString1(s) {
  let res = "";
  for (let i = 1; i <= 10; i++) {
    res += s;
  }
  return res;
}

console.log(repeatString1("a"));

//Bài 2. Viết function truyền vào 1 chuỗi bất kỳ, hãy viết hàm có tác dụng sao chép đó chuỗi lên 10 lần, ngăn cách nhau bởi dấu gạch ngang.
function repeatString2(s) {
  let res = s;
  for (let i = 1; i <= 9; i++) {
    res += "-" + s;
  }
  return res;
}

console.log(repeatString2("a"));

//Bài 3. Viết function truyền vào 1 chuỗi bất kỳ và 1 số nguyên dương n > 1, hãy viết hàm có tác dụng sao chép đó chuỗi lên n lần, ngăn cách nhau bởi dấu gạch ngang.
function repeatString(s, n) {
  let res = s;
  for (let i = 2; i <= n; i++) {
    res += "-" + s;
  }
  return res;
}

console.log(repeatString("a", 5));

//Bài 4. Tính tổng các số chia hết cho 5 từ 0 -> 100
function sum() {
  let res = 0;
  for (let i = 0; i <= 100; i++) {
    if (i % 5 == 0) {
      res += i;
    }
  }
  return res;
}

console.log(sum(6));

//Bài 5: Viết hàm tính thể tích hình cầu, với tham số truyền vào là bán kính của hình cầu.
function volume(s) {
  let vol = (4 * Math.PI * s) ^ 3;
  return vol;
}

console.log(volume(4));

//Bài 6: Viết hàm truyền vào 2 số nguyên, tính tổng tất cả các số nguyên nằm giữa chúng. Ví dụ với tham số 3 và 8 ta có kết quả là 22 (bằng 4 + 5 + 6 + 7).
function sum(n1, n2) {
  let res = 0;
  if (n1 > n2) {
    let temp = n1;
    n1 = n2;
    n2 = temp;
  }
  for (let i = n1 + 1; i < n2; i++) {
    res += i;
  }
  return res;
}

console.log(sum(3, 5));

//Bài 7: Cho 1 số, kiểm tra xem số đó có phải là số nguyên tố hay không, kết quả trả về true hoặc false.
function count(n) {
  if (n < 2) {
    return false;
  }
  let count = 0;
  for (let i = 2; i < n - 1; i++) {
    if (n % i == 0) {
      return false;
    }
  }
  return true;
}

console.log(count(17));

//Bài 8: Cho 1 số nguyên dương bất kỳ. Tính tổng tất cả các số nguyên tố mà nhỏ hơn hoặc bằng tham số truyền vào.
function sum(n) {
	let res = 0;
    for (let i = 2; i <= n; i++) {
      if (isPrimeNumber(i)) {
      	res+= i
      }
    }
    return res;
}

function isPrimeNumber(n) {
	if (n <= 1) {
    	return false;
    }
    for (let i = 2; i < n; i++) {
    	if (n % i == 0) {
        	return false;
        }
    }
    return true;
}

console.log(sum(5));
//Bài 9:Cho 1 số nguyên dương, viết hàm tính tổng tất cả các ước số của số đó.
function sum(n) {
	let res = 0;
    for (let i = 1; i <= n; i++) {
      if (n % i == 0) {
      	res+= i
      }
    }
    return res;
}

console.log(sum(4));
