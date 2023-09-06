var EsPrimerClick = true;

$(document).click(function () {
  $("#intro").slideUp("slow");

  if (EsPrimerClick) {
    buzz.all().play();
    buzz.all().loop();
    buzz.all().setVolume(0);
    Audios["pip"].togglePlay();
    EsPrimerClick = false;
  }
});

var reiniciarPosicionBotones = function () {
  $("#orgullo").css({ top: "", left: "" });
  Audios["orgullo"].setVolume(0);
  $("#bajo").css({ top: "", left: "" });
  Audios["bajo"].setVolume(0);
  $("#cactus").css({ top: "", left: "" });
  Audios["cactus"].setVolume(0);
  $("#caldero").css({ top: "", left: "" });
  Audios["caldero"].setVolume(0);
  $("#dolly").css({ top: "", left: "" });
  Audios["dolly"].setVolume(0);
  $("#netflix").css({ top: "", left: "" });
  Audios["netflix"].setVolume(0);
  $("#oreo").css({ top: "", left: "" });
  Audios["oreo"].setVolume(0);
  $("#vw").css({ top: "", left: "" });
  Audios["vw"].setVolume(0);
};

//#region DEFINIR SONIDOS

let Audios = [];
Audios["orgullo"] = new buzz.sound("audio/arcades.mp3"); //-------> izq 1
Audios["bajo"] = new buzz.sound("audio/cactus.mp3"); //-------> izq 2
Audios["cactus"] = new buzz.sound("audio/robot.mp3"); //-------> izq 3
Audios["caldero"] = new buzz.sound("audio/caldero.mp3"); //-------> izq 4
Audios["dolly"] = new buzz.sound("audio/orgullo.mp3"); //-------> der 1
Audios["netflix"] = new buzz.sound("audio/netflix.mp3"); //-------> der 2
Audios["oreo"] = new buzz.sound("audio/crimen.mp3"); //-------> der 3
Audios["vw"] = new buzz.sound("audio/dolly.mp3"); //-------> der 4
Audios["pip"] = new buzz.sound("audio/pip.mp3"); //-------> countdown

// Audios['lluviasuave'] === lluviasuave --> true
// Es decir El valor de Audios['lluviasuave'] es igual a el valor de la variable lluviasuave.

//#endregion

let ReestablerIconoAPosicionOriginal = function () {};

let playPip = function () {
  Audios["pip"].setVolume(100);
  Audios["pip"].togglePlay();
};

let stopPip = function () {
  Audios["pip"].setVolume(0);
  Audios["pip"].togglePlay();
};

// Volumen = El volumen a cambiar
// ui = Interfaz Grafica blablabla
let CambiarVolumen = function (Volumen, ui) {
  var currentId = $(ui.draggable).attr("id");
  Audios[currentId].setVolume(Volumen);
};

$(document).ready(function () {
  //#region Definicion DRAGABLES

  $(".draggable").draggable({
    // --> Todos los Iconos Der...
    containment: "#contenedortotal",
  });

  $(".draggable1").draggable({
    // --> Todos los Iconos Izq se vuelven Draggeables dentro de #contenedortotal
    containment: "#contenedortotal",
  });

  //#endregion

  //#region Seteo Volumenes

  //#region Seteo Todos los Volumenes

  $("#vol100").droppable({
    tolerance: "intersect",
    greedy: true,
    drop: function (event, ui) {
      CambiarVolumen(100, ui);
    },
  });

  $("#vol75").droppable({
    tolerance: "intersect",
    greedy: true,
    drop: function (event, ui) {
      CambiarVolumen(75, ui);
    },
  });

  $("#vol50").droppable({
    tolerance: "intersect",
    greedy: true,
    drop: function (event, ui) {
      CambiarVolumen(50, ui);
    },
  });

  $("#vol25").droppable({
    tolerance: "intersect",
    greedy: true,
    drop: function (event, ui) {
      CambiarVolumen(25, ui);
    },
  });

  $("#vol10").droppable({
    tolerance: "intersect",
    greedy: true,
    drop: function (event, ui) {
      CambiarVolumen(10, ui);
    },

    //VOLUMENSTOP
    out: function (event, ui) {
      CambiarVolumen(0, ui);
      ReestablerIconoAPosicionOriginal();
    },
  });

  //#endregion

  //#region Ultimo Volumen

  //DROPABLE
  $("#droppable").droppable({
    tolerance: "intersect",

    drop: function (event, ui) {
      var currentId = $(ui.draggable).attr("id");
    },
  });
  //#endregion

  //#endregion
});
