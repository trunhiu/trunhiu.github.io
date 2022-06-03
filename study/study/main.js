let courses = [
    {
        id: 01,
        name: 'Javascript',
        coin: 250,
    },
    {
        id: 02,
        name: 'HTML, CSS',
        coin: 250,
    },
    {
        id: 03,
        name: 'Ruby',
        coin: 250,
    },
    {
        id: 04,
        name: 'PHP',
        coin: 250,
    },
    {
        id: 05,
        name: 'Reacjs',
        coin: 0,
    },
    {
        id: 06,
        name: 'Ruby',
        coin: 0,
    }
];

function courseHandler(value, index) {
    return `<h2>${value.name}</h2>`;
}

let newCourse = courses.map(courseHandler);

console.log(newCourse.join(''));