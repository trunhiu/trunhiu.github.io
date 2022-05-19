// Bài tập 1: Viết function truyền vào 1 số bất kì
function division(a) {
    if (a % 3 == 0 && a % 5 == 0) {
        console.log('FizzBuzz');
    } else if( a % 5 == 0) {
        console.log('Buzz')
    } else {
        console.log('Fizz')
    }
}

division(15);

//Bài tập 2: Viết function giải phương trình bậc nhất (ax + b= 0)
function linearQuation(a, b) {
    if(a == 0 && b == 0) {
        console.log('Phương trình vô số nghiệm');
    } else if(a == 0 && b != 0) {
        console.log('Phương trình vô nghiệm');
    } else if(a != 0 && b == 0){
        console.log('x = 0');
    } else {
        console.log('x = ' + -b/a);
    }
}

linearQuation(2, 6);

//Bài tập 3: Viết function giải phương trình bậc hai (ax^2 + bx + c = 0)

function quadraticEquation(a, b, c) {
    if(a == 0 && b == 0 && c == 0) {
        console.log('Phương trình có vô số nghiệm');
    } else  if(a == 0 && b != 0 && c != 0) {
        console.log('Phương trình có nghiệm x =' + -c/b );
    } else if(a == 0 && b == 0 && c != 0) {
        console.log('Phương trình vô nghiệm');
    } else if(a != 0 && b == 0 && c == 0) {
        console.log('x = 0')
    } else {
        delta = b * b - 4*a*c
        if(delta < 0) {
        console.log('Phương trình vô nghiệm');
        } else if (delta == 0) {
        x = -b/(2*a)
        console.log('Phương trình có nghiệm x =' + x);
        } else {
        x1 = (-b + Math.sqrt(delta))/(2*a)
        x2 = (-b - Math.sqrt(delta))/(2*a)
        console.log('Phương trình có nghiệm x1 = ' + x1 + '' + ' x2 = ' + x2)
        }
    }
}

quadraticEquation(2, 0, 0);

//Bài tập 4:Viết function truyền vào 1 năm bất kỳ. Kiểm tra xem năm đó có là năm nhuận hay không?

function leapYear(year) {
    if(year % 4 == 0 && year % 400 == 0 || year % 100 != 0) {
        console.log('Là năm nhuận');
    } else {
        console.log('Không là năm nhuận');       
    }
}

leapYear(2000);

//Bài tập 5: Viết function truyền vào 2 giá trị, đại diện cho cân nặng và chiều cao. Tính chỉ số BMI tương ứng

function weightHeight(kg,m) {
    let division = kg / (m * 2);
    return division;
}

console.log(weightHeight(62, 1.7));

//Bài tập 6:Viết function truyền vào giá trị độ C. Tính giá trị độ F tương ứng

function degreeC(c) {
    let fahrenheit = 1.8 * c + 32;
    return fahrenheit;
}

console.log(degreeC(40) + '°F'); 