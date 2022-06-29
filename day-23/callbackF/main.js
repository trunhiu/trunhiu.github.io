// Mô tả về hoạt đồng hằng ngày
// 1. Làm bài tập (3s)
// 2. Đá bóng (4s)
// 3. Nấu cơm (5s)

const doTask1 = (taskName, callback ) => {
    console.log('Bắt đầu công việc');
    console.log(`Thực hiện công việc : ${taskName}`);

    setTimeout(() => {
        callback();
    }, 3000);
};

const doTask2 = (taskName, callback ) => {
    console.log(`Thực hiện công việc : ${taskName}`);

    setTimeout(() => {
        callback();
    }, 4000);
};

const doTask3 = (taskName, callback ) => {
    console.log(`Thực hiện công việc : ${taskName}`);

    setTimeout(() => {
        callback();
    }, 5000);
};

const finish = () => {
    console.log('Kết thúc công viêc');
}


// // Thực hiện tuần tự (khi công việc sau cần kết quả của công việc trước để thực hiện)
doTask1('Nhặt rau', () => {
    doTask2('Rửa rau', () => {
        doTask3('Luộc rau', finish)
    })
})

// Thực hiện song song
doTask1('Làm bài tập', () => {console.log('làm bài tập xong')});
doTask2('đá bóng', () => {console.log('đá bóng xong')} );
doTask3('Nấu cơm', () => {console.log('nấu cơm xong')} );
