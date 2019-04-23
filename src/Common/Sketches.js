import crumbs from '../crumbs.png';
import trash from '../bin.png';


export default function sketch(p){
    // let canvas;
    let img;
    let imgTrash;
     p.preload = () => {
      img = p.loadImage(crumbs);
    }
    p.setup = () => {
      p.createCanvas(window.innerWidth, document.body.offsetHeight);
      p.noStroke();
      imgTrash = p.loadImage(trash);
    }
    p.windowResized = () => {
      p.resizeCanvas(window.innerWidth, window.innerHeight);
    }

    p.draw = () => {
      // p.cursor('../crumbs.png');
      p.image(imgTrash, 15, 15, 40, 40);
    }

    p.mouseClicked = (event) => {
      console.log(event)
      if(event.screenX <= 43 && event.screenY >= 166 && event.screenY <= 202) {
        p.clear()
      } else {
        return (p.image(img, event.clientX, event.clientY, 50, 50))
      }
    }



}
