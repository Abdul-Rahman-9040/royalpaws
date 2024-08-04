const images = [
    {
        src: './img/puppies/1.jpg',
       
    },
    {
        src: './img/puppies/2.jpg',
       
    },
    {
        src: './img/puppies/3.jpg',
       
    },
    {
        src: './img/puppies/4.jpg',
       
    },
    {
        src: './img/puppies/5.jpg',
       
    },
    {
        src: './img/puppies/6.jpg',
       
    },
    {
        src: './img/puppies/7.jpg',
       
    },
    {
        src: './img/puppies/8.jpg',
       
    },
    {
        src: './img/puppies/9.jpg',
       
    },
    {
        src: './img/puppies/10.jpg',
       
    },
    {
        src: './img//puppies/11.jpg',
       
    },
    {
        src: './img//puppies/12.jpg',
       
    },
    {
        src: './img//puppies/13.jpg',
       
    },
    {
        src: './img//puppies/14.jpg',
       
    },
    {
        src: './img//puppies/15.jpg',
       
    },
    {
        src: './img//puppies/16.jpg',
       
    },
    {
        src: './img//puppies/17.jpg',
       
    },
    {
        src: './img//puppies/18.jpg',
       
    },
    {
        src: './img//puppies/19.jpg',
       
    },
    {
        src: './img//puppies/20.jpg',
       
    },
    {
        src: './img//puppies/21.jpg',
       
    },
    {
        src: './img//puppies/22.jpg',
       
    },
    {
        src: './img//puppies/23.jpg',
       
    },
    {
        src: './img//puppies/24.jpg',
       
    },
    {
        src: './img//puppies/25.jpg',
       
    },
    {
        src: './img//puppies/26.jpg',
       
    },
    {
        src: './img//puppies/27.jpg',
       
    },
    {
        src: './img//puppies/28.jpg',
       
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
