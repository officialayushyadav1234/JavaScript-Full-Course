const box=document.getElementById("box");

let lside = 100;
let tside = 100;

window.addEventListener("keydown",(e)=>{

  let move = 50;
  switch (e.key) {
    case "ArrowUp":
      tside=tside-move;
      break;

      case "ArrowDown":
        tside=tside+move;
        break;
        case "ArrowLeft":
          lside=lside-move;
          break;
          case "ArrowRight":
            lside=lside+move;
            break;
    default:
      break;
  }
  box.style.left=lside+"px";
  box.style.top=tside+"px";
})