// Sincronizar las letras con la canción
var audio = document.querySelector("audio");
var lyrics = document.querySelector("#lyrics");

// Array de objetos que contiene cada línea y su tiempo de aparición en segundos
var lyricsData = [
  { text: "Daría lo que fuera por volverte a ver", time: 0 },
  { text: "Daría hasta mi vida y mi fusil", time: 3 },
  { text: "mis botas y mi fe", time: 7 },
  { text: "Por eso en la trinchera de mi soledad", time: 10.5 },
  { text: "Tus ojos son mi luz y tu esplendor", time: 13.5 },
  { text: "mi corazón", time: 18 },
  { text: "Y si no fuera por ti", time: 20 },
  { text: "yo no podría vivir", time: 23 },
  { text: "En el vacío de estos días", time: 26 },
  { text: "de no saber", time: 28 },
  { text: "Y si no fuera por ti", time: 32 },
  { text: "yo no sería feliz", time: 35 },
  { text: "Como lo soy cuando con tus besos ", time: 37.5 },
  { text: "me veo partir", time: 40 },

  { text: "Y es que sólo con saber", time: 42 },
  { text: "Que al regresar", time: 44 },
  { text: "tú esperarás por mí", time: 46 },
  { text: "Aumentan los latidos", time: 48 },
  { text: "de mi corazón", time: 51.5 },

  { text: "Volverte a ver", time: 53 },
  { text: "es todo lo que quiero hacer", time: 56 },
  { text: "Volverte a ver", time: 59 },
  { text: "para poderme reponer", time: 62 },
  { text: "Porque sin ti", time: 65 },
  { text: "mi vida, yo no soy feliz", time: 68 },
  { text: "Porque sin ti", time: 71 },
  { text: "mi vida no tiene raíz", time: 74 },
  { text: "Ni una razón para vivir", time: 76 },

  { text: "Lo único que quiero es poder regresar", time: 78 },
  { text: "Poder todas las balas esquivar", time: 81 },
  { text: "y sobrevivir", time: 85 },
  { text: "Tu amor es mi esperanza y tú mi munición", time: 88.5 },
  { text: "Por eso regresar a ti", time: 91.5 },
  { text: "es mi única misión", time: 96 },
  { text: "Y si no fuera por ti", time: 98 },
  { text: "yo no podría vivir", time: 101 },
  { text: "En el vacío de estos días", time: 104 },
  { text: "de no saber", time: 106 },
  { text: "Y si no fuera por ti", time: 110 },
  { text: "yo no sería feliz", time: 113 },
  { text: "Como lo soy cuando con tus besos ", time: 115.5 },
  { text: "me veo partir", time: 118 },

  { text: "Y es que sólo con saber", time: 120 },
  { text: "Que al regresar", time: 122 },
  { text: "tú esperarás por mí", time: 124 },
  { text: "Aumentan los latidos", time: 126 },
  { text: "de mi corazón", time: 129.5 },

  { text: "Volverte a ver", time: 131 },
  { text: "es todo lo que quiero hacer", time: 134 },
  { text: "Volverte a ver", time: 137 },
  { text: "para poderme reponer", time: 140 },
  { text: "Porque sin ti", time: 143 },
  { text: "mi vida, yo no soy feliz", time: 146 },
  { text: "Porque sin ti", time: 149 },
  { text: "mi vida no tiene raíz", time: 152 },
  { text: "Ni una razón para vivir", time: 154 },

  { text: "Eres todo lo que tengo", time: 157 },
  { text: "y no me quiero morir", time: 160 },
  { text: "Sin poder, otra vez", time: 163 },
  { text: "volverte a ver", time: 166 },

  { text: "Porque sin ti", time: 178 },
  { text: "mi vida, yo no soy feliz", time: 181 },
  { text: "Porque sin ti", time: 184 },
  { text: "mi vida no tiene raíz", time: 187 },

  { text: "Volverte a ver", time: 190 },
  { text: "es todo lo que quiero hacer", time: 193 },
  { text: "Volverte a ver", time: 196 },
  { text: "para poderme reponer", time: 199 },
  { text: "Porque sin ti", time: 202 },
  { text: "mi vida, yo no soy feliz", time: 205 },
  { text: "Porque sin ti", time: 208 },
  { text: "mi vida no tiene raíz", time: 211 },
  { text: "Ni una razón para vivir", time: 214 },


];

// Animar las letras
function updateLyrics() {
  var time = Math.floor(audio.currentTime);
  var currentLine = lyricsData.find(
    (line) => time >= line.time && time < line.time + 3
  );

  if (currentLine) {
    // Calcula la opacidad basada en el tiempo en la línea actual
    var fadeInDuration = 0.1; // Duración del efecto de aparición en segundos
    var opacity = Math.min(1, (time - currentLine.time) / fadeInDuration);

    // Aplica el efecto de aparición
    lyrics.style.opacity = opacity;
    lyrics.innerHTML = currentLine.text;
  } else {
    // Restablece la opacidad y el contenido si no hay una línea actual
    lyrics.style.opacity = 0;
    lyrics.innerHTML = "";
  }
}

setInterval(updateLyrics, 1000);

//funcion titulo
// Función para ocultar el título después de 216 segundos
function ocultarTitulo() {
  var titulo = document.querySelector(".titulo");
  titulo.style.animation =
    "fadeOut 3s ease-in-out forwards"; /* Duración y función de temporización de la desaparición */
  setTimeout(function () {
    titulo.style.display = "none";
  }, 3000); // Espera 3 segundos antes de ocultar completamente
}

// Llama a la función después de 216 segundos (216,000 milisegundos)
setTimeout(ocultarTitulo, 216000);