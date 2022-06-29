const btn = document.getElementById('btn');
const image = document.getElementById('image');
const select = document.getElementById('select');

// Vừa load trang phải gọi API để render danh sách breed
// API : https://dog.ceo/api/breeds/list/all

async function getBreedList() {
    // Gọi API để lấy danh sách giống loài
    let res = await axios.get("https://dog.ceo/api/breeds/list/all")
    console.log(res);
    
    // Sau khi có data thì hiển thị kết quả trên giao diện
    renderBreed(res.data.message)  
}

function renderBreed(breeds) {
    // Duyệt qua object breeds -> tạo thẻ option -> gắn vào DOM
    const form = document.querySelector('.form');
    form.innerHTML =
        `
        <select id="breed-list" onchange="changeDog(this.value)">
                <option value="">Chose the dog</option>
                ${Object.keys(breeds).map(breed => `<option>${breed}</option>`)}
            </select>
            <button id="btn" onclick="getSubBreed()">Get Sub Breed</button>
        `
}

const changeDog = async (breed) => {
    let res = await axios.get(`https://dog.ceo/api/breed/${breed}/images/random`)
    image.src = res.data.message;
    console.log(res);
}  

const getSubBreed = async (breed) => {    
    
}
    

getBreedList()
