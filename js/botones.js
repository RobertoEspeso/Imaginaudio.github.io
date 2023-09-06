var boton1 = document.getElementById("Boton1");
var boton2 = document.getElementById("Boton2");
var boton3 = document.getElementById("Boton3");
var boton4 = document.getElementById("Boton4");
var boton5 = document.getElementById("Boton5");
var boton6 = document.getElementById("Boton6");
var boton7 = document.getElementById("Boton7");
var boton8 = document.getElementById("Boton8");
var botonTutorial = document.getElementById("botonTutorial");
var botonTutorialFalso = document.getElementById("botonTutorialFalso");
var botonJugar = document.getElementById("botonJugar");
var botonJugarFalso = document.getElementById("botonJugarFalso");

var muestrarioDeTrabajos = document.getElementById("muestrarioDeTrabajos");
var imaginAudio = document.getElementById("imaginAudio");

var video0 = document.getElementById("Video0");
var video1 = document.getElementById("Video1");
var video2 = document.getElementById("Video2");
var video3 = document.getElementById("Video3");
var video4 = document.getElementById("Video4");
var video5 = document.getElementById("Video5");
var video6 = document.getElementById("Video6");
var video7 = document.getElementById("Video7");
var video8 = document.getElementById("Video8");
var video9 = document.getElementById("Video9");

var primerBoton = false;
var segundoBoton = false;
var tercerBoton = false;
var cuartoBoton = false;
var quintoBoton = false;
var sextoBoton = false;
var septimoBoton = false;
var octavoBoton = false;
var seVeImaginaudio = false;

boton1.addEventListener("click", btn1Activo);
boton2.addEventListener("click", btn2Activo);
boton3.addEventListener("click", btn3Activo);
boton4.addEventListener("click", btn4Activo);
boton5.addEventListener("click", btn5Activo);
boton6.addEventListener("click", btn6Activo);
boton7.addEventListener("click", btn7Activo);
boton8.addEventListener("click", btn8Activo);
botonTutorial.addEventListener("click", mostrarTutorial);
botonJugar.addEventListener("click", mostrarImaginaudio);

// Inject YouTube API script
var tag = document.createElement("script");
tag.src = "https://www.youtube.com/player_api";
var firstScriptTag = document.getElementsByTagName("script")[0];
firstScriptTag.parentNode.insertBefore(tag, firstScriptTag);

// global variable for the player
var player0;
var player1;
var player2;
var player3;
var player4;
var player5;
var player6;
var player7;
var player8;
var player9;

// this function gets called when API is ready to use
function onYouTubePlayerAPIReady() {
  // create the global player from the specific iframe (#video)
  player0 = new YT.Player("Video0", {
    events: {
      // call this function when player is ready to use
      onReady: onPlayerReady,
    },
  });
  player1 = new YT.Player("Video1", {
    events: {
      onReady: onPlayerReady,
    },
  });
  player2 = new YT.Player("Video2", {
    events: {
      onReady: onPlayerReady,
    },
  });
  player3 = new YT.Player("Video3", {
    events: {
      onReady: onPlayerReady,
    },
  });
  player4 = new YT.Player("Video4", {
    events: {
      onReady: onPlayerReady,
    },
  });
  player5 = new YT.Player("Video5", {
    events: {
      onReady: onPlayerReady,
    },
  });
  player6 = new YT.Player("Video6", {
    events: {
      onReady: onPlayerReady,
    },
  });
  player7 = new YT.Player("Video7", {
    events: {
      onReady: onPlayerReady,
    },
  });
  player8 = new YT.Player("Video8", {
    events: {
      onReady: onPlayerReady,
    },
  });
  player9 = new YT.Player("Video9", {
    events: {
      onReady: onPlayerReady,
    },
  });
}

function onPlayerReady(event) {
  // bind events
  boton1.addEventListener("click", function () {
    player0.pauseVideo();
    player2.pauseVideo();
    player3.pauseVideo();
    player4.pauseVideo();
    player5.pauseVideo();
    player6.pauseVideo();
    player7.pauseVideo();
    player8.pauseVideo();
    player9.pauseVideo();
  });

  boton2.addEventListener("click", function () {
    player0.pauseVideo();
    player1.pauseVideo();
    player3.pauseVideo();
    player4.pauseVideo();
    player5.pauseVideo();
    player6.pauseVideo();
    player7.pauseVideo();
    player8.pauseVideo();
    player9.pauseVideo();
  });

  boton3.addEventListener("click", function () {
    player0.pauseVideo();
    player1.pauseVideo();
    player2.pauseVideo();
    player4.pauseVideo();
    player5.pauseVideo();
    player6.pauseVideo();
    player7.pauseVideo();
    player8.pauseVideo();
    player9.pauseVideo();
  });

  boton4.addEventListener("click", function () {
    player0.pauseVideo();
    player1.pauseVideo();
    player2.pauseVideo();
    player3.pauseVideo();
    player5.pauseVideo();
    player6.pauseVideo();
    player7.pauseVideo();
    player8.pauseVideo();
    player9.pauseVideo();
  });

  boton5.addEventListener("click", function () {
    player0.pauseVideo();
    player1.pauseVideo();
    player2.pauseVideo();
    player3.pauseVideo();
    player4.pauseVideo();
    player6.pauseVideo();
    player7.pauseVideo();
    player8.pauseVideo();
    player9.pauseVideo();
  });

  boton6.addEventListener("click", function () {
    player0.pauseVideo();
    player1.pauseVideo();
    player2.pauseVideo();
    player3.pauseVideo();
    player4.pauseVideo();
    player5.pauseVideo();
    player7.pauseVideo();
    player8.pauseVideo();
    player9.pauseVideo();
  });

  boton7.addEventListener("click", function () {
    player0.pauseVideo();
    player1.pauseVideo();
    player2.pauseVideo();
    player3.pauseVideo();
    player4.pauseVideo();
    player5.pauseVideo();
    player6.pauseVideo();
    player8.pauseVideo();
    player9.pauseVideo();
  });

  boton8.addEventListener("click", function () {
    player0.pauseVideo();
    player1.pauseVideo();
    player2.pauseVideo();
    player3.pauseVideo();
    player4.pauseVideo();
    player5.pauseVideo();
    player6.pauseVideo();
    player7.pauseVideo();
    player9.pauseVideo();
  });

  botonTutorial.addEventListener("click", function () {
    player0.pauseVideo();
    player1.pauseVideo();
    player2.pauseVideo();
    player3.pauseVideo();
    player4.pauseVideo();
    player5.pauseVideo();
    player6.pauseVideo();
    player7.pauseVideo();
    player8.pauseVideo();
    player9.pauseVideo();
  });
  botonJugar.addEventListener("click", function () {
    player0.pauseVideo();
    player1.pauseVideo();
    player2.pauseVideo();
    player3.pauseVideo();
    player4.pauseVideo();
    player5.pauseVideo();
    player6.pauseVideo();
    player7.pauseVideo();
    player8.pauseVideo();
    player9.pauseVideo();
  });
}

function btn1Activo() {
  primerBoton = true;
  estanActivos();
}

function btn2Activo() {
  segundoBoton = true;
  estanActivos();
}

function btn3Activo() {
  tercerBoton = true;
  estanActivos();
}

function btn4Activo() {
  cuartoBoton = true;
  estanActivos();
}

function btn5Activo() {
  quintoBoton = true;
  estanActivos();
}

function btn6Activo() {
  sextoBoton = true;
  estanActivos();
}

function btn7Activo() {
  septimoBoton = true;
  estanActivos();
}

function btn8Activo() {
  octavoBoton = true;
  estanActivos();
}
function miraElUltimoVideoPrimero() {
  botonTutorialFalso.classList.add("visually-hidden");
  botonTutorial.classList.remove("visually-hidden");
}
function miraElTutorialPrimero() {
  botonJugarFalso.classList.add("visually-hidden");
  botonJugar.classList.remove("visually-hidden");
}

function mostrarTutorial() {
  video9.classList.remove("noSeVe");
  video0.classList.remove("seVe");
  video1.classList.remove("seVe");
  video2.classList.remove("seVe");
  video3.classList.remove("seVe");
  video4.classList.remove("seVe");
  video5.classList.remove("seVe");
  video6.classList.remove("seVe");
  video7.classList.remove("seVe");
  video8.classList.remove("seVe");
}

function mostrarImaginaudio() {
  muestrarioDeTrabajos.classList.add("noSeVe");
  imaginAudio.classList.remove("noSeVe");
  ComienzaElCountdown();
}

function estanActivos() {
  if (
    primerBoton == true &&
    segundoBoton == true &&
    tercerBoton == true &&
    cuartoBoton == true &&
    quintoBoton == true &&
    sextoBoton == true &&
    septimoBoton == true &&
    octavoBoton == true
  ) {
    setTimeout(miraElUltimoVideoPrimero, 3000);
  }
}

botonTutorial.addEventListener("click", function () {
  setTimeout(miraElTutorialPrimero, 6000);
});

boton1.addEventListener("click", function () {
  /*
   var botonUnmute = $(".ytp-unmute")
   botonUnmute.click();
   
   como traer clases en base a su id padre   Como traer todos los elemtnos de una clase que estan dentro de un div
   no funciono, me tacha la propiedad click, por otro lado pense en forzar la que se presione una tecla del teclado que realice lo que necesito nativamente del reproductor de youtube, por ejemplo para desmutear la m y para dar play la k-
  */
  if (!boton1.classList.contains("active")) {
    boton1.classList.toggle("active");
    video1.classList.toggle("seVe");
    video0.classList.add("noSeVe");
    video2.classList.remove("seVe");
    video3.classList.remove("seVe");
    video4.classList.remove("seVe");
    video5.classList.remove("seVe");
    video6.classList.remove("seVe");
    video7.classList.remove("seVe");
    video8.classList.remove("seVe");
  } else if (!video1.classList.contains("seVe")) {
    video1.classList.toggle("seVe");
    video2.classList.remove("seVe");
    video3.classList.remove("seVe");
    video4.classList.remove("seVe");
    video5.classList.remove("seVe");
    video6.classList.remove("seVe");
    video7.classList.remove("seVe");
    video8.classList.remove("seVe");
    video9.classList.remove("seVe");
    video9.classList.add("noSeVe");
  }
});

boton2.addEventListener("click", function () {
  if (!boton2.classList.contains("active")) {
    boton2.classList.toggle("active");
    video2.classList.toggle("seVe");
    video0.classList.add("noSeVe");
    video1.classList.remove("seVe");
    video3.classList.remove("seVe");
    video4.classList.remove("seVe");
    video5.classList.remove("seVe");
    video6.classList.remove("seVe");
    video7.classList.remove("seVe");
    video8.classList.remove("seVe");
  } else if (!video2.classList.contains("seVe")) {
    video2.classList.toggle("seVe");
    video1.classList.remove("seVe");
    video3.classList.remove("seVe");
    video4.classList.remove("seVe");
    video5.classList.remove("seVe");
    video6.classList.remove("seVe");
    video7.classList.remove("seVe");
    video8.classList.remove("seVe");
    video9.classList.remove("seVe");
    video9.classList.add("noSeVe");
  }
});

boton3.addEventListener("click", function () {
  if (!boton3.classList.contains("active")) {
    boton3.classList.toggle("active");
    video3.classList.toggle("seVe");
    video0.classList.add("noSeVe");
    video1.classList.remove("seVe");
    video2.classList.remove("seVe");
    video4.classList.remove("seVe");
    video5.classList.remove("seVe");
    video6.classList.remove("seVe");
    video7.classList.remove("seVe");
    video8.classList.remove("seVe");
  } else if (!video3.classList.contains("seVe")) {
    video3.classList.toggle("seVe");
    video1.classList.remove("seVe");
    video2.classList.remove("seVe");
    video4.classList.remove("seVe");
    video5.classList.remove("seVe");
    video6.classList.remove("seVe");
    video7.classList.remove("seVe");
    video8.classList.remove("seVe");
    video9.classList.remove("seVe");
    video9.classList.add("noSeVe");
  }
});

boton4.addEventListener("click", function () {
  if (!boton4.classList.contains("active")) {
    boton4.classList.toggle("active");
    video4.classList.toggle("seVe");
    video0.classList.add("noSeVe");
    video1.classList.remove("seVe");
    video2.classList.remove("seVe");
    video3.classList.remove("seVe");
    video5.classList.remove("seVe");
    video6.classList.remove("seVe");
    video7.classList.remove("seVe");
    video8.classList.remove("seVe");
  } else if (!video4.classList.contains("seVe")) {
    video4.classList.toggle("seVe");
    video1.classList.remove("seVe");
    video2.classList.remove("seVe");
    video3.classList.remove("seVe");
    video5.classList.remove("seVe");
    video6.classList.remove("seVe");
    video7.classList.remove("seVe");
    video8.classList.remove("seVe");
    video9.classList.remove("seVe");
    video9.classList.add("noSeVe");
  }
});

boton5.addEventListener("click", function () {
  if (!boton5.classList.contains("active")) {
    boton5.classList.toggle("active");
    video5.classList.toggle("seVe");
    video0.classList.add("noSeVe");
    video1.classList.remove("seVe");
    video2.classList.remove("seVe");
    video3.classList.remove("seVe");
    video4.classList.remove("seVe");
    video6.classList.remove("seVe");
    video7.classList.remove("seVe");
    video8.classList.remove("seVe");
  } else if (!video5.classList.contains("seVe")) {
    video5.classList.toggle("seVe");
    video1.classList.remove("seVe");
    video2.classList.remove("seVe");
    video3.classList.remove("seVe");
    video4.classList.remove("seVe");
    video6.classList.remove("seVe");
    video7.classList.remove("seVe");
    video8.classList.remove("seVe");
    video9.classList.remove("seVe");
    video9.classList.add("noSeVe");
  }
});

boton6.addEventListener("click", function () {
  if (!boton6.classList.contains("active")) {
    boton6.classList.toggle("active");
    video6.classList.toggle("seVe");
    video0.classList.add("noSeVe");
    video1.classList.remove("seVe");
    video2.classList.remove("seVe");
    video3.classList.remove("seVe");
    video4.classList.remove("seVe");
    video5.classList.remove("seVe");
    video7.classList.remove("seVe");
    video8.classList.remove("seVe");
  } else if (!video6.classList.contains("seVe")) {
    video6.classList.toggle("seVe");
    video1.classList.remove("seVe");
    video2.classList.remove("seVe");
    video3.classList.remove("seVe");
    video4.classList.remove("seVe");
    video5.classList.remove("seVe");
    video7.classList.remove("seVe");
    video8.classList.remove("seVe");
    video9.classList.remove("seVe");
    video9.classList.add("noSeVe");
  }
});

boton7.addEventListener("click", function () {
  if (!boton7.classList.contains("active")) {
    boton7.classList.toggle("active");
    video7.classList.toggle("seVe");
    video0.classList.add("noSeVe");
    video1.classList.remove("seVe");
    video2.classList.remove("seVe");
    video3.classList.remove("seVe");
    video4.classList.remove("seVe");
    video5.classList.remove("seVe");
    video6.classList.remove("seVe");
    video8.classList.remove("seVe");
  } else if (!video7.classList.contains("seVe")) {
    video7.classList.toggle("seVe");
    video1.classList.remove("seVe");
    video2.classList.remove("seVe");
    video3.classList.remove("seVe");
    video4.classList.remove("seVe");
    video5.classList.remove("seVe");
    video6.classList.remove("seVe");
    video8.classList.remove("seVe");
    video9.classList.remove("seVe");
    video9.classList.add("noSeVe");
  }
});

boton8.addEventListener("click", function () {
  if (!boton8.classList.contains("active")) {
    boton8.classList.toggle("active");
    video8.classList.toggle("seVe");
    video0.classList.add("noSeVe");
    video1.classList.remove("seVe");
    video2.classList.remove("seVe");
    video3.classList.remove("seVe");
    video4.classList.remove("seVe");
    video5.classList.remove("seVe");
    video6.classList.remove("seVe");
    video7.classList.remove("seVe");
    video9.classList.remove("seVe");
  } else if (!video8.classList.contains("seVe")) {
    video8.classList.toggle("seVe");
    video1.classList.remove("seVe");
    video2.classList.remove("seVe");
    video3.classList.remove("seVe");
    video4.classList.remove("seVe");
    video5.classList.remove("seVe");
    video6.classList.remove("seVe");
    video7.classList.remove("seVe");
    video9.classList.remove("seVe");
    video9.classList.add("noSeVe");
  }
});
