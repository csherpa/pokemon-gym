// const trainerCarousel = document.getElementById('trainer-carousel'),
//       trainerFigure = trainerCarousel.querySelector('figure'),
//       trainerNav = trainerFigure.querySelector('nav'),
//       numTrainers = trainerFigure.childElementCount,
//       trainerTheta = 2 * Math.PI / numTrainers, 
//       currTrainer = 0;

const createCarousel = () => {
    const div = document.createElement('div'),
          figure = document.createElement('figure'),
          nav = document.createElement('nav');


}

const setCarousel = id => {
    const carousel = document.getElementById(id),
          figure = carousel.querySelector('figure'),
          nav = figure.querySelector('nav'),
          num = figure.childElementCount,
          theta = 2 * Math.PI / num,
          curr = 0;

    const onClick = e => {
        e.stopPropagation();
        
        const t = e.target;
        if (t.tagName.toUpperCase() != 'BUTTON')
            return;
        
        if (t.classList.contains('next')) {
            curr++;
        } else {
            curr--;
        }
        
        figure.style.transform = `rotateY(${curr * -theta}rad)`;
    }

    nav.addEventListener('click', onClick, true);
}

// setCarousel('trainer-carousel');
// for (let i = 0; i < 3; i++) {
//     setCarousel(`pokeon-carousel-${i}`);
// }

