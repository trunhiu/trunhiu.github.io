const getUser = async () => {
    try {
        let res = await axios.get("https://api.github.com/users")
        console.log(res);
        
        // renderUser(res.data);
        render(res.data);
    } catch (error) {
        console.log(error);
    }
}

getUser();


// phân trang 
const render = arr => {
    $('.pagination-container').pagination({
    dataSource: arr,
    pageSize: 5,
    showPrevious: false,
    showNext: false,
    callback: function(data, pagination) {
        console.log(pagination);
        renderUser(data, pagination);
    }
})
}




const listUserEl = document.querySelector('.list-userel');

const renderUser = (arr) => {
    listUserEl.innerHTML = '';

    let html = "";
    arr.forEach(user => {
        const {id, login, avatar_url, html_url, repos_url} = user;

        html += `
        <tr>
                <td>${id}</td>
                <td>
                  <img
                    src="${avatar_url}"
                    alt="${login}"
                  />
                </td>
                <td>${login}</td>
                <td>${html_url}</td>
                <td>${repos_url}</td>
              </tr>`
    })
    listUserEl.innerHTML = html;
}



const btnInfo = document.querySelector('.btn-info');
const input = document.querySelector('.form-control');

btnInfo.addEventListeners('click', async function() {
    try {
        let res = await axios.get("https://api.github.com/users");
        let value = input.value;
        let user = res.data;
        user.fillter(ele => {
            ele.login.toLowerCase().includes(value.toLowerCase());
        })
    } catch (error) {
        console.log(error);
    }
})

renderUser();


