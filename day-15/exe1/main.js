const grades = [
    {name: 'John', grade: 8, sex: 'M'},
    {name: 'Sarah', grade: 12, sex: 'F'},
    {name: 'Bob', grade: 16, sex: 'M'},
    {name: 'Johnny', grade: 2, sex: 'M'},
    {name: 'Ethan', grade: 4, sex: 'M'},
    {name: 'Paula', grade: 18, sex: 'F'},
    {name: 'Donald', grade: 5, sex: 'M'},
    {name: 'Jennifer', grade: 13, sex: 'F'},
    {name: 'Courtney', grade: 15, sex: 'F'},
    {name: 'Jane', grade: 9, sex: 'F'}
   ]

//1.Viết function tính thứ hạng trung bình của cả lớp
const averageRankClass = arr => {
    return arr.reduce((total, per) => (total + per.grade),0) / arr.length;
}

console.log(averageRankClass(grades));
//2.Viết function tính thứ hạng trung bình của nam trong lớp
const averageRankMale = arr => {
    let findMale = arr.filter(ele => ele.sex === 'M')
    return findMale.reduce((total, per) => total + per.grade, 0) / findMale.length;
}

console.log(averageRankMale(grades));
//3.Viết function tính thứ hạng trung bình của Nữ trong lớp
const averageRankFemale = arr => {
    let findFemale = arr.filter(ele => ele.sex === 'F');
    return findFemale.reduce((total, per) => total + per.grade, 0) / findFemale.length;
}

console.log(averageRankFemale(grades));
//4.Viết function tìm học viên Nam có thứ hạng cao nhất trong lớp
const topRankMale = arr => {
    let findMale = arr.filter(ele => ele.sex === 'M')
    let topMale = Math.max.apply(Math,findMale.map(i => i.grade));
    console.log(topMale);
}

(topRankMale(grades));

//5.Viết function tìm học viên Nữ có thứ hạng cao nhất trong lớp
const topRankFemale = arr => {
    let findFemale = arr.filter(ele => ele.sex === 'F');
    let topFemale = Math.max.apply(Math,findFemale.map(i => i.grade));
    console.log(topFemale);
}

topRankFemale(grades);
//6.Viết function tìm học viên Nam có thứ hạng thấp nhất trong lớp
const lastRankMale = arr => {
    let findMale = arr.filter(ele => ele.sex === 'M');
    let lastMale = Math.min.apply(Math, findMale.map(i => i.grade));
    console.log(lastMale);
}
lastRankMale(grades);
//7.Viết function tìm học viên Nữ có thứ hạng thấp nhất trong lớp
const lastRankFemale = arr => {
    let findFemale = arr.filter(ele => ele.sex === 'F');
    let lastFemale = Math.min.apply(Math,findFemale.map(i => i.grade));
    console.log(lastFemale);
}

lastRankFemale(grades);
//8.Viết function thứ hạng cao nhất của cả lớp
const topRankClass = arr => {
    let topClass = Math.max.apply(Math, arr.map(i => i.grade));
    console.log(topClass);
}

topRankClass(grades)
//9.Viết function thứ hạng thấp nhất của cả lớp
const lastRankClass = arr => {
    let lastClass = Math.min.apply(Math, arr.map(i => i.grade));
    console.log(lastClass);
}

lastRankClass(grades)
//10.Viết function lấy ra danh sách tất cả học viên Nữ trong lớp
const listFemale = arr => {
    let findFemale = arr.filter(ele => ele.sex === 'F');
    findFemale.forEach(student => console.log(student))
}

listFemale(grades)
//11.Viết function sắp xếp tên học viên theo chiều tăng dần của bảng chữ cái
const sortNameClass = arr => {
    arr.sort((a,b) => {
        let sortNamea = a.name.toLowerCase();
        let sortNameb = b.name.toLowerCase();
        if (sortNamea < sortNameb) {
            return -1;
        }
        if (sortNamea > sortNameb) {
            return 1;
        }
        return 0;
        
    })
    arr.forEach(student => console.log(student))
}
sortNameClass(grades)
//12.Viết function sắp xếp thứ hạng học viên theo chiều giảm dần
const sortNameClass1 = arr => {
    arr.sort((a,b) => {
        if (a.grade > b.grade) {
            return -1;
        }
        if (a.grade < b.grade) {
            return 1;
        }
        return 0;
    })
    arr.forEach(student => console.log(student));
}
sortNameClass1(grades)
//13.Viết function lấy ra học viên Nữ có tên bắt đầu bằng “J”
const findName = (arr, name) => {
    return arr.filter(student => student.name.toLowerCase().includes(name.toLowerCase()));
}

console.log(findName(grades, 'J'))
//14.Viết function lấy ra top 5 người có thứ hạng cao nhất trong lớp
const topFiveGrade = arr => {
    return arr.filter((ele,index) => {
        return index < 5;
    });
} 

console.log(topFiveGrade(grades));




