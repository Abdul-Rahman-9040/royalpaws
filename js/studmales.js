const images = [
    {
        src: './img/studmales/1.jpg',
       
    },
    {
        src: './img/studmales/2.jpg',
       
    },
    {
        src: './img/studmales/3.jpg',
       
    },
    {
        src: './img/studmales/4.jpg',
       
    },
    {
        src: './img/studmales/5.jpg',
       
    },
    {
        src: './img/studmales/5.jpg',
       
    },
    {
        src: './img/studmales/6.jpg',
       
    },
    {
        src: './img/studmales/7.jpg',
       
    },
    {
        src: './img/studmales/8.jpg',
       
    },
    {
        src: './img/studmales/9.jpg',
       
    },
    {
        src: './img/studmales/10.jpg',
       
    },
    {
        src: './img/studmales/11.jpg',
       
    },
    {
        src: './img/studmales/12.jpg',
       
    },
    {
        src: './img/studmales/14.jpg',
       
    },
    {
        src: './img/studmales/15.jpg',
       
    },
    {
        src: './img/studmales/n1.jpg',
       
    },
    {
        src: './img/studmales/n2.jpg',
       
    },
    {
        src: './img/studmales/n3.jpg',
       
    },
    {
        src: './img/studmales/n4.jpg',
       
    },
    {
        src: './img/studmales/n5.jpg',
       
    },
    {
        src: './img/studmales/n5.jpg',
       
    },
    {
        src: './img/studmales/n6.jpg',
       
    },
    {
        src: './img/studmales/n7.jpg',
       
    },
    {
        src: './img/studmales/n8.jpg',
       
    },
    
   
    // Voeg hier meer afbeeldingen en beschrijvingen toe als nodig
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
