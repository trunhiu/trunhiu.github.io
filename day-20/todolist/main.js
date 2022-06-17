// Chức năng 1: Thêm công việc

// Chức năng 2: tìm kiếm công việc


// Chức năng 3: Lọc công việc

// Chức năng 4: Xoá công việc

// Chức năng 5: Thay đổi trạng thái công việc

// Chức năng 6: Sửa công việc

// Thuộc tính trong ứng dụng

// Id, Title, Status :

let todos;

const randomId = () => {
    return Math.floor(Math.random() * (1000 - 4 + 1) + 4);
}

//Truy cập

const todoListEl = document.querySelector('.todo-list');
const todoOptionEles = document.querySelectorAll('.todo-option-item input');
const todoInputEl = document.getElementById('todo-input');
const btnAdd = document.getElementById('btn-add');
const btnChange = document.getElementById('btn-update');
const btnUpdate = document.querySelector('.btn-update');

let isUpdate = false;
let idUpdate = null;

const renderTodo = arr => {
    todoListEl.innerHTML = '';

    // Kiểm tra danh sách công việc có trống hay không?
    if (arr.length == 0) {
        todoListEl.innerHTML = `<p class="todos-empty">Không có công việc nào trong danh sách</p>`;
        return;
    }

    // Hiển thị danh sách
    let html = '';
    arr.forEach(t => {
        html += `
        <div class="todo-item ${t.status ? 'active-todo' : ''}">
                    <div class="todo-item-title">
                        <input type="checkbox" ${t.status ? 'checked' : ''} onclick="toggleStatus(${t.id})"/>
                        <p>${t.title}</p>
                    </div>
                    <div class="option">
                        <button class="btn btn-update" onclick="changeTodo(${t.id})">
                            <img src="./img/pencil.svg" alt="icon" />
                        </button>
                        <button class="btn btn-delete" onclick="deleteTodo(${t.id})">
                            <img src="./img/remove.svg" alt="icon" />
                        </button>
                    </div>
                </div>
        `
    })

    todoListEl.innerHTML = html;
}

// Thay đổi công việc

const changeTodo = (id) => {
    let title
    todos.find(ele => {
        if (ele.id == id) {
            title = ele.title;
        }
    })

    btnChange.style.display = 'inline-block';
    btnAdd.style.display = 'none';
    todoInputEl.value = title;
    todoInputEl.focus();

    isUpdate = true;
    idUpdate = id;
}

btnChange.addEventListener('click', function(){
    addTodo();
})

// Xoá công việc

const deleteTodo = id => {
    todos = todos.filter(todo => todo.id !== id);

    setDataToLocalStorage(todos);
}

// Thay đổi trạng thái công việc

const toggleStatus = id => {
    //Lấy ra công việc cần thay đổi
    let todo = todos.find(todo => todo.id == id);

    //Thay đổi trạng thái công việc đó: true -> false, false -> true
    todo.status = !todo.status;

    //Hiển thị lên trên giao diện
    setDataToLocalStorage(todos);
}

// Lọc công việc theo trạng thái
Array.from(todoOptionEles).forEach(input => {
    input.addEventListener('change', () => {
        let option = input.value;

        let todosFilter = [];
        switch (option) {
            case 'all': {
                todosFilter = [...todos]; // copy mảng ban đầu (spread operator)
                break;
            }
            case 'active': {
                todosFilter = todos.filter(todo => todo.status == true);
                break;
            }
            case 'unactive': {
                todosFilter = todos.filter(todo => todo.status == false);
                break;
            }
            default: {
                todosFilter = [...todos];
            }
        }
        renderTodo(todosFilter);

    })
})

// Thêm công việc
btnAdd.addEventListener('click', function () {
    addTodo();
})

const addTodo = () => {
    //Lấy ra dữ liệu trong ô input
    let title = todoInputEl.value;

    //Kiểm tra tiêu đề không được để trống
    if (!title) {
        alert('tieu de cong viec khong duoc de trong');
        return;
    }
    if (isUpdate) {
        todos.find(ele => {
            if(ele.id === idUpdate) {
                ele.title = title;
            }
        })
        
        btnAdd.style.display = 'inline-block';
        btnChange.style.display = 'none';
        
        isUpdate = false;
        idUpdate = null;

    }else {
        //Tạo công việc mới
        let newTodo = {
            id: randomId(),
            title: title,
            status: false
        }

        // Thêm công việc mới vào mảng để quản lý
        todos.push(newTodo);
    }

    setDataToLocalStorage(todos);

    todoInputEl.value = '';
}

todoInputEl.addEventListener('keydown', (event) => {
    if (event.keyCode === 13) {
        addTodo();
    }
})


// Lấy dữ liệu từ localStorage
const getDataFromLocalStorage = () => {
    let data = localStorage.getItem("todos");
    if (data) {
        todos = JSON.parse(data);
    } else {
        todos = [];
    }
    renderTodo(todos);
}

// Lưu dữ liệu vàp localStorage
const setDataToLocalStorage = arr => {
    localStorage.setItem('todos', JSON.stringify(arr));
    renderTodo(arr);
}

getDataFromLocalStorage();