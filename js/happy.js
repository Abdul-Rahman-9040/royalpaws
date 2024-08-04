const images = [
    {
        src: './img/happy customers/1.jpg',
       
    },
    {
        src: './img/happy customers/2.jpg',
       
    },
    {
        src: './img/happy customers/3.jpg',
       
    },
    {
        src: './img/happy customers/4.jpg',
       
    },
    {
        src: './img/happy customers/5.jpg',
       
    },
    {
        src: './img/happy customers/6.jpg',
       
    },
    {
        src: './img/happy customers/7.jpg',
       
    },
    {
        src: './img/happy customers/8.jpg',
       
    },
    {
        src: './img/happy customers/9.jpg',
       
    },
    {
        src: './img/happy customers/10.jpg',
       
    },
    {
        src: '../img/happy customers/11.jpg',
       
    },
    {
        src: '../img/happy customers/12.jpg',
       
    },
    {
        src: '../img/happy customers/13.jpg',
       
    },
    {
        src: '../img/happy customers/14.jpg',
       
    },
    {
        src: '../img/happy customers/15.jpg',
       
    },
    {
        src: '../img/happy customers/16.jpg',
       
    },
    {
        src: '../img/happy customers/17.jpg',
       
    },
    {
        src: '../img/happy customers/18.jpg',
       
    },
    {
        src: '../img/happy customers/19.jpg',
       
    },
    {
        src: '../img/happy customers/20.jpg',
       
    },
    {
        src: '../img/happy customers/21.jpg',
       
    },
    {
        src: '../img/happy customers/22.jpg',
       
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
