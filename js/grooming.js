const images = [
    {
        src: './img/grooming/1.jpg',
       
    },
    {
        src: './img/grooming/2.jpg',
       
    },
    {
        src: './img/grooming/3.jpg',
       
    },
    {
        src: './img/grooming/4.jpg',
       
    },
    {
        src: './img/grooming/5.jpg',
       
    },
    {
        src: './img/grooming/6.jpg',
       
    },
    {
        src: './img/grooming/7.jpg',
       
    },
   
];

let currentIndex = 0;

function openModal(index) {
    currentIndex = index;
    document.getElementById('g1-modal-img').src = images[index].src;
    document.getElementById('g1-modal').style.display = 'block';
}

function closeModal() {
    document.getElementById('g1-modal').style.display = 'none';
}

function prevImage() {
    currentIndex = (currentIndex > 0) ? currentIndex - 1 : images.length - 1;
    updateModal();
}

function nextImage() {
    currentIndex = (currentIndex < images.length - 1) ? currentIndex + 1 : 0;
    updateModal();
}

function updateModal() {
    document.getElementById('g1-modal-img').src = images[currentIndex].src;
}
