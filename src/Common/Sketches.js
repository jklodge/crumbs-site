import crumbs from '../crumbs.png';

export default function sketch(p){
    // let canvas;
    let img;
     p.preload = () => {
      img = p.loadImage(crumbs);
    }
    p.setup = () => {
      p.createCanvas(window.innerWidth - 40, document.body.offsetHeight);
      p.noStroke();
    }
    p.windowResized = () => {
      p.resizeCanvas(window.innerWidth - 40, window.innerHeight);
    }

    p.mouseClicked = (event) => {
      p.image(img, event.clientX, event.clientY, 50, 50)
    }

    p.touchStarted = (event) => {
      p.image(img, event.clientX, event.clientY, 50, 50)
    }

}
