function toggle(){
  let menuButton = document.getElementsByClassName("toggleableMenu")

  menuButton.setProperty("visibility", "hidden")
  
}


document.onclick= function(toggle) {
  toggle()
  alert('YOU clicked on SOMETHING');
};