let myDiv = document.getElementById("my-Div");
function isTouchDevice() {
  try {
    document.createEvent("TouchEvent");
    return true;
  } catch (e) {
    return false;
  }
}
const move = (e) => {
  //try catch para evitar erros no console
  try{
    
    let x = isTouchDevice() ? e.touches[0].pageX : e.pageX;
    let y = isTouchDevice() ? e.pageY : e.touches[0].pageY;
  } catch (e) {}

  myDiv.style.left = x - 160 + "px";
  myDiv.style.top = y - 160 + "px";
};
document.addEventListener("mousemove", (e) =>{move(e)});
document.addEventListener("touchmove", (e) =>{move(e)});