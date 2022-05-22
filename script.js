let display = document.getElementById('display');

let buttons = Array.from(document.getElementsByClassName('button'));
let PI = 3.14159265359;
let rez;

buttons.map( button => {
  button.addEventListener('click' , (e) => {
    switch(e.target.innerText){
      case 'C':
        display.innerText = '';
        break;

      case '←':
        if(display.innerText === "Error"){
          display.innerText = '';
        }
        if(display.innerText){
          display.innerText = display.innerText.slice(0 , -1);
        }
        break;

      case 'π':
        display.innerText = 3.14159265359;
        break;

      case 'e':
        display.innerText = 2.71828;
        break;

      case 'sin':
        rez = Math.sin(display.innerText * PI/ 180);
        display.innerText = rez;
        break;

        case 'cos':
          rez = Math.cos(display.innerText * PI/ 180);
          display.innerText = rez;
          break;

          case 'tan':
            rez = Math.tan(display.innerText * PI/ 180);
            display.innerText = rez;
            break;

            case 'sqrt':
              rez = Math.sqrt(display.innerText);
              display.innerText = rez;
              break;

      case '=':
        try{
          display.innerText = eval(display.innerText);
        } catch {
          display.innerText = "Error";
        }
        break;

      default: 
        display.innerText += e.target.innerText;
        break;
    }
  })
})

