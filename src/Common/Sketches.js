import crumbs from '../crumbs.png';

export default function sketch(p){
    // let canvas;
    let img;
     p.preload = () => {
      img = p.loadImage(crumbs);
    }
    p.setup = () => {
      p.createCanvas(window.innerWidth, document.body.offsetHeight);
      p.noStroke();
      console.log('p', p);
    }

    p.draw = () => {
      p.cursor('../crumbs.png');
    }

    p.mouseClicked = (event) => {
      p.image(img, event.clientX, event.clientY, 50, 50);
      console.log(event);
    }
    // p.mouseClicked = (event) => {
    //   let c = document.getElementById("defaultCanvas0");
    //   let ctx = c.getContext("2d");
    //   let img = new Image();
    //   img.src = crumbs;
    //   ctx.drawImage(img, 10, 10, 50, 50);
    //   console.log(event);
    // }
    // p.draw = () => {
    //   p.background(crumbs);
    //   // p.ellipse(150, 100, 100, 100);
    // }

    // p.myCustomRedrawAccordingToNewPropsHandler = (newProps) => {
    //   if(canvas) //Make sure the canvas has been created
    //     p.mouseClicked(newProps.image);
    //     console.log('he', newProps);
    // }
}
