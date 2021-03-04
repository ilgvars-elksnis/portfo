const colors = [
    '#7eb3ff',
    '#17f1d7',
    '#5bff62',
    '#cbe724',
    '#fff851',
    '#fbceb5',
    '#ff6b00',
    '#ff008b',
    '#b40a1b',
    '#dc3790',
    '#f375f3',
    '#4400b2',
    '#e6e7e8'
]

function createSquare() {
    const section = document.querySelector('header');
    const square = document.createElement('b');

    var size = Math.random() * 50;

    square.style.width = 20 + size + 'px';
    square.style.height = 20 + size + 'px';

    square.style.top = Math.random() * innerHeight + 'px';
    square.style.left = Math.random() * innerWidth + 'px';

    const bg = colors[Math.floor(Math.random() * colors.length)];
    square.style.background = bg;
    
    section.appendChild(square);

    setTimeout(() =>{
        square.remove()
    },5000)
}

setInterval(createSquare , 100)