    // declaration du canvas : context, mise en forme.
     var cvs = document.getElementById("canvas_flappy_bird"); //creation variable canvas
     var ctx = cvs.getContext("2d");
     cvs.style.border = "2px black solid";
     cvs.style.borderRadius = "5px";
 
    //création des variables des images
     var bg     = new Image();
     var monkey = new Image();
    
    //variable lié a la gravité
    let posMonkeyY   = 200;
    let posMonkeyX   = 100;
    let widthMonkey  = 70;
    let heightMonkey = 70;
    const gravity    = 1;

    //appel des images
     bg.src = "images/bg.jpg";
     monkey.src = "images/monkey.png";
     
function MiseEnPlaceImage() {
    
    // mise en place des images
     ctx.drawImage(bg, 0, 0, 480, 640);
     ctx.drawImage(monkey, posMonkeyX, posMonkeyY, widthMonkey, heightMonkey);

    //gravité du personnage
    if(posMonkeyY <= (cvs.height - heightMonkey)   ) {
        posMonkeyY += gravity;
    }

    else{
        posMonkeyY = 200;
        alert('vous avez perdu espece de grosse merde')
    }

    //j'ai besoin d'une animation
    requestAnimationFrame(MiseEnPlaceImage);
}

// function jump() {
//     const spaceBar = event.key;
//     console.log(spaceBar)
// }