const kevin = document.getElementById('trainer-1'),
      jihae = document.getElementById('trainer-2'),
      chhoti = document.getElementById('trainer-3');

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

        // if (curr % 3 === 0) {
        //     kevin.classList.remove('scaleX');
        //     jihae.classList.add('scaleX');
        //     chhoti.classList.add('scaleX');
        // } else if (curr % 3 === 1) {
        //     kevin.classList.add('scaleX');
        //     jihae.classList.remove('scaleX');
        //     chhoti.classList.add('scaleX');
        // } else {
        //     kevin.classList.add('scaleX');
        //     jihae.classList.add('scaleX');
        //     chhoti.classList.remove('scaleX');
        // }

        // 1 rad = 180deg
        figure.style.transform = `rotateY(${curr * -theta}rad)`;
    }

    nav.addEventListener('click', onClick, true);
}

setPokemonCarousel('trainer-carousel');
for (let i = 1; i < 4; i++) {
    setPokemonCarousel(`pokemon-carousel-${i}`);
}