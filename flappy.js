    // declaration du canvas : context, mise en forme.
     let cvs = document.getElementById("canvas_flappy_bird"); //creation variable canvas
     let ctx = cvs.getContext("2d");
     cvs.style.border = "2px black solid";
     cvs.style.borderRadius = "5px";
 
    //création des variables des images
     let bg           = new Image();
     let monkey       = new Image();
     const sol        = new Image();
     const pipeTop    = new Image();
     const pipeBottom = new Image();
     const pipeTop2    = new Image();
     const pipeBottom2 = new Image();

    //appel des images
     bg.src         = "images/bg.jpg";
     monkey.src     = "images/monkey.png";
     sol.src        = "images/sol.jpg";
     pipeBottom.src = "images/pipeBottom.png";
     pipeTop.src    = "images/pipeTop.png";
     pipeBottom2.src = "images/pipeBottom.png";
     pipeTop2.src    = "images/pipeTop.png";
     
    //variable lié a la gravité    
    let multiplicator    = Math.round( Math.random() * 300 );
    let multiplicator2   = Math.round( Math.random() * 300 );
    let posMonkeyY       = 200;
    let posMonkeyX       = 100;
    let widthMonkey      = monkey.width;
    let heightMonkey     = monkey.height;
    let pipeWidth        = 70;
    let gravity          = 2;
    const spacePipe      = 1.2;
    let posPipeX         = cvs.width*spacePipe;
    let posPipe2X        = (cvs.width*spacePipe/2);
    let pipeTopHeight    = 350;
    let pipeBottomHeight = 450;
    let posPipeTopY      = (-300+multiplicator);
    let posPipebottomY   =  (200+multiplicator);

     
function MiseEnPlaceImage() {
    
    // mise en place des images
     ctx.drawImage(bg, 0, 0, 480, 640);
     ctx.drawImage(monkey, posMonkeyX, posMonkeyY, widthMonkey, heightMonkey);
     ctx.drawImage(pipeTop, posPipeX, (-300+multiplicator), 70, pipeTopHeight);
     ctx.drawImage(pipeBottom, posPipeX, (200+multiplicator) , 70, pipeBottomHeight);
    //  ctx.drawImage(pipeTop2, posPipe2X, (-300+multiplicator2), 70, 350);
    //  ctx.drawImage(pipeBottom2, posPipe2X, (200+multiplicator2), 70, 450);
     ctx.drawImage(sol, 0, (cvs.height - sol.height), cvs.width, sol.height);

         

    //j'ai besoin d'une animation
     requestAnimationFrame(MiseEnPlaceImage);

    //gravité du personnage
    if(posMonkeyY <= ( (cvs.height-sol.height) - heightMonkey) && posMonkeyY >= (-10) ) {
        posMonkeyY += gravity;
    }

    else if(posMonkeyY >= ( (cvs.height-sol.height)  - heightMonkey)   ) {
        document.getElementById('gameOver').classList.remove("d-none");
        gravity = 0;
        // alert('vous vous êtes écrasé au sol');
    }

    else if(posMonkeyY <= (-10)   ) {
        document.getElementById('gameOver').classList.remove("d-none");
        gravity = 0;
        // alert('vous êtes perdu dans les nuages');
    }

    //deplacement des obstacles
    if(   (posPipeX + pipeWidth) >= 0   ){
        posPipeX -= gravity;
    }

    else if(  (posPipeX + pipeWidth) <= 0 ){
        multiplicator = Math.round( Math.random() * 300 );
        posPipeX = cvs.width*spacePipe;
    }
    

    //deplacement des seconds obstacles 
    // if(posPipe2X >= (0 - pipeTop.width*2)   ){
    //     posPipe2X -= gravity;
    // }

    // else if(posPipe2X <= (0 - pipeTop2.width*2)   ){
    //     multiplicator2 = Math.round( Math.random() * 300 );
    //     posPipe2X = cvs.width*spacePipe;
    // }

    // interaction avec les obstacles
    if( (posMonkeyX+widthMonkey) >= posPipeX 
    && posMonkeyX <= (posPipeX + pipeWidth)
    && posMonkeyY <= ((-300+multiplicator) + pipeTopHeight) ) {

        document.getElementById('gameOver').classList.remove("d-none");
        gravity = 0;

    }

    else if( (posMonkeyX+widthMonkey) >= posPipeX 
    && posMonkeyX <= (posPipeX + pipeWidth)
    && (posMonkeyY + heightMonkey) >= (200+multiplicator) ) {

        document.getElementById('gameOver').classList.remove("d-none");
        gravity = 0;

    }

}

function jump() {
    const spaceBar = event.key;
    console.log(posPipeTopY);


    if(spaceBar !== 0){
        posMonkeyY -= 30;
    }
}