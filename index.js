function openCloseMenu() {
  var x = document.getElementById("menu");
  var y = document.getElementById("open");
  var z = document.getElementById("close");
  if (x.style.display === "none") {
    x.style.display = "flex";
    y.style.display = "none";
    z.style.display = "flex";
  } else {
    x.style.display = "none";
    y.style.display = "flex";
    z.style.display = "none";
  }
}
