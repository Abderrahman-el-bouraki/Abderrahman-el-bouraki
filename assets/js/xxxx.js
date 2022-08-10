function menu() {
  const $MENU = document.getElementsByTagName("ul")[0];
  const $ANIM1 = document.getElementsByClassName("line1")[0];
  const $ANIM2 = document.getElementsByClassName("line2")[0];
  const $ANIM3 = document.getElementsByClassName("line3")[0];
  if ( $MENU.style.height === "100%" ) {
   $MENU.style.height = "0";
  }
  else {
   $MENU.style.height = "100%";
  }
  $ANIM1.classList.toggle("anim1");
  $ANIM2.classList.toggle("anim2");
  $ANIM3.classList.toggle("anim3");
