const dead = document.getElementById("dead");
const lost = document.getElementById("lost");

function play(){
      console.log("привет");
      if(dead.textContent === "10") {
          alert(`Вы победили!`);
          dead.textContent = 0;
          lost.textContent = 0;
      } else if (lost.textContent === "5") {
        alert(`Вы проиграли`);
        dead.textContent = 0;
        lost.textContent = 0;
      }
  }

  addEventListener("click", function(event) {
    if (event.target.className.includes( 'hole_has-mole' )) dead.textContent = parseInt(dead.textContent, 10) + 1;   
    else lost.textContent = parseInt(lost.textContent, 10) + 1;
    play();
  });

  
