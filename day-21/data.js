// Danh sách sản phẩm

let products = [
    {
        id : 1,
        name : 'Sản phẩm 1',
        images : ['https://images.unsplash.com/photo-1655469791360-e83bd76b7e17?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=870&q=80', 'https://images.unsplash.com/photo-1644982647531-daff2c7383f3?ixlib=rb-1.2.1&ixid=MnwxMjA3fDF8MHxlZGl0b3JpYWwtZmVlZHw0MHx8fGVufDB8fHx8&auto=format&fit=crop&w=500&q=60','https://images.unsplash.com/photo-1655365226285-2a36809b7693?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxlZGl0b3JpYWwtZmVlZHw0Nnx8fGVufDB8fHx8&auto=format&fit=crop&w=500&q=60', 'https://images.unsplash.com/photo-1655396988019-1c981b8c092d?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxlZGl0b3JpYWwtZmVlZHw0N3x8fGVufDB8fHx8&auto=format&fit=crop&w=500&q=60'],
        price : 1000000,
        rating : 4.1,
        sizes : ['S', 'M', 'L', 'XL', 'XXL'],
        description : 'sfsdfdsfsdvdvdfvsssdfvdfv'
    },
    {
        id : 2,
        name : 'Sản phẩm 2',
        images : ['https://images.unsplash.com/photo-1655469791360-e83bd76b7e17?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=870&q=80','https://images.unsplash.com/photo-1655463095979-d170965448df?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxlZGl0b3JpYWwtZmVlZHw1N3x8fGVufDB8fHx8&auto=format&fit=crop&w=500&q=60', 'https://images.unsplash.com/photo-1644982652063-1a9b8d24f0f3?ixlib=rb-1.2.1&ixid=MnwxMjA3fDF8MHxlZGl0b3JpYWwtZmVlZHw2MHx8fGVufDB8fHx8&auto=format&fit=crop&w=500&q=60', 'https://images.unsplash.com/photo-1655389530385-8549484c0952?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxlZGl0b3JpYWwtZmVlZHw2OHx8fGVufDB8fHx8&auto=format&fit=crop&w=500&q=60'],
        price : 2000000,
        rating : 4.5,
        sizes : ['S', 'M', 'L', 'XL', 'XXL'],
        description : 'sfsdfdsfsdvdfdfvdfvdfvdfv'
    },
    {
        id : 3,
        name : 'Sản phẩm 3',
        images : ['https://images.unsplash.com/photo-1638913658179-18c9a9c943f7?ixlib=rb-1.2.1&ixid=MnwxMjA3fDF8MHxlZGl0b3JpYWwtZmVlZHwyNnx8fGVufDB8fHx8&auto=format&fit=crop&w=500&q=60','https://images.unsplash.com/photo-1648737154448-ccf0cafae1c2?ixlib=rb-1.2.1&ixid=MnwxMjA3fDF8MHxlZGl0b3JpYWwtZmVlZHw3OXx8fGVufDB8fHx8&auto=format&fit=crop&w=500&q=60', 'https://images.unsplash.com/photo-1655439923051-16033f4ff2f5?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxlZGl0b3JpYWwtZmVlZHw4Nnx8fGVufDB8fHx8&auto=format&fit=crop&w=500&q=60', 'https://images.unsplash.com/photo-1655326523585-81e6720ff5d4?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxlZGl0b3JpYWwtZmVlZHw4NXx8fGVufDB8fHx8&auto=format&fit=crop&w=500&q=60'],
        price : 6000000,
        rating : 5,
        sizes : ['S', 'M', 'L', 'XL', 'XXL'],
        description : 'sfsdfdsfsdvdvdfvsdfsdfvdfv'
    },
    {
        id : 4,
        name : 'Sản phẩm 4',
        images : ['https://images.unsplash.com/photo-1655337208446-9ca4cf58ab65?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxlZGl0b3JpYWwtZmVlZHwzNnx8fGVufDB8fHx8&auto=format&fit=crop&w=500&q=60','https://images.unsplash.com/photo-1655461078777-173820858227?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxlZGl0b3JpYWwtZmVlZHw5NHx8fGVufDB8fHx8&auto=format&fit=crop&w=500&q=60', 'https://images.unsplash.com/photo-1644982654131-79f434ac0c6c?ixlib=rb-1.2.1&ixid=MnwxMjA3fDF8MHxlZGl0b3JpYWwtZmVlZHw5OHx8fGVufDB8fHx8&auto=format&fit=crop&w=500&q=60', 'https://images.unsplash.com/photo-1648737965772-b3385bfce64f?ixlib=rb-1.2.1&ixid=MnwxMjA3fDF8MHxlZGl0b3JpYWwtZmVlZHwxMDN8fHxlbnwwfHx8fA%3D%3D&auto=format&fit=crop&w=500&q=60'],
        price : 4000000,
        rating : 4.7,
        sizes : ['S', 'M', 'L', 'XL', 'XXL'],
        description : 'sfsdfdsfsdvdvdfvdfsfsdvdfv'
    },
    {
        id : 5,
        name : 'Sản phẩm 5',
        images : ['https://images.unsplash.com/photo-1655476524890-75c29c9903ed?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxlZGl0b3JpYWwtZmVlZHwzNXx8fGVufDB8fHx8&auto=format&fit=crop&w=500&q=60', 'https://images.unsplash.com/photo-1655040745233-5403320041f1?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxlZGl0b3JpYWwtZmVlZHwxMDZ8fHxlbnwwfHx8fA%3D%3D&auto=format&fit=crop&w=500&q=60', 'https://images.unsplash.com/photo-1648737119422-2680a7e39089?ixlib=rb-1.2.1&ixid=MnwxMjA3fDF8MHxlZGl0b3JpYWwtZmVlZHwxMDh8fHxlbnwwfHx8fA%3D%3D&auto=format&fit=crop&w=500&q=60', 'https://images.unsplash.com/photo-1655452591846-a182bd329835?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxlZGl0b3JpYWwtZmVlZHwxMTR8fHxlbnwwfHx8fA%3D%3D&auto=format&fit=crop&w=500&q=60'],
        price : 9000000,
        rating : 4.9,
        sizes : ['S', 'M', 'L', 'XL', 'XXL'],
        description : 'sfsdfdsfsdvdvdfvdfvddfsdfsdfsdfsfsdfv'
    }
];