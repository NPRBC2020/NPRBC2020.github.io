function toggleFullScreen(eid) {
  if (document.getElementById(eid).requestFullScreen) {
    document.getElementById(eid).requestFullScreen();
    setTimeout(document.getElementById(eid).play(), 1500);
  } else if (document.getElementById(eid).webkitRequestFullScreen) {
    document.getElementById(eid).webkitRequestFullScreen();
    setTimeout(document.getElementById(eid).play(), 1500);
  } else if (document.getElementById(eid).mozRequestFullScreen) {
    document.getElementById(eid).mozRequestFullScreen();
    setTimeout(document.getElementById(eid).play(), 1500);
  }
}

function toggleHide(eid) {
  document.getElementById(eid).style.display = "none";
}

function toggleLoop(eidc) {
  document.getElementById(eidc).loop = !document.getElementById(eid).loop;
}