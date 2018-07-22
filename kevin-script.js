const setPokemonCarousel = id => {
    const carousel = document.getElementById(id),
          figure = carousel.querySelector('figure'),
          nav = carousel.querySelector('nav'),
          num = (id === 'trainer-carousel') ? 
            figure.getElementsByClassName('display-trainer').length :
            figure.childElementCount,
          theta = 2 * Math.PI / num;
          // 2*PI*r = circumference of circle
          // theta = degree made btwn two apothems
    let curr = 0;

    const onClick = e => {
        e.stopPropagation();

        const t = e.target;
        if (t.tagName.toUpperCase() != 'I')
            return;

        if (t.classList.contains('fa-angle-right')) {
            curr++;
        } else {
            curr--;
        }

        // 1 rad = 180deg
        figure.style.transform = `rotateY(${curr * -theta}rad)`;
    }

    nav.addEventListener('click', onClick, true);
}

setPokemonCarousel('trainer-carousel');
for (let i = 1; i < 4; i++) {
    setPokemonCarousel(`pokemon-carousel-${i}`);
}