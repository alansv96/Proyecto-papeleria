superplaceholder({
  el: document.querySelector('.inputMensaje'),
  sentences: [ 'Ingresa tu mensaje', '¿En qué te podemos ayudar?',],
  options: {
      // delay between letters (in milliseconds)
      letterDelay: 100, // milliseconds
      // delay between sentences (in milliseconds)
      sentenceDelay: 1000,
      // should start on input focus. Set false to autostart
      startOnFocus: false,
      // loop through passed sentences
      loop: true,
      // Initially shuffle the passed sentences
      shuffle: false,
      // Show cursor or not. Shows by default
      showCursor: true,
      // String to show as cursor
      cursor: '|'
  }
});

superplaceholder({
  el: document.querySelector('.inputNombre'),
  sentences: [ 'Ingresa tu nombre', 'Juan Sánchez',],
  options: {
      // delay between letters (in milliseconds)
      letterDelay: 100, // milliseconds
      // delay between sentences (in milliseconds)
      sentenceDelay: 1000,
      // should start on input focus. Set false to autostart
      startOnFocus: false,
      // loop through passed sentences
      loop: true,
      // Initially shuffle the passed sentences
      shuffle: false,
      // Show cursor or not. Shows by default
      showCursor: true,
      // String to show as cursor
      cursor: '|'
  }
});

superplaceholder({
  el: document.querySelector('.inputTelefono'),
  sentences: [ 'Ingresa tu teléfono', '3312341234'],
  options: {
      // delay between letters (in milliseconds)
      letterDelay: 100, // milliseconds
      // delay between sentences (in milliseconds)
      sentenceDelay: 1000,
      // should start on input focus. Set false to autostart
      startOnFocus: false,
      // loop through passed sentences
      loop: true,
      // Initially shuffle the passed sentences
      shuffle: false,
      // Show cursor or not. Shows by default
      showCursor: true,
      // String to show as cursor
      cursor: '|'
  }
});

superplaceholder({
  el: document.querySelector('.inputCorreo'),
  sentences: [ 'Ingresa tu correo', 'correo@gmail.com'],
  options: {
      // delay between letters (in milliseconds)
      letterDelay: 100, // milliseconds
      // delay between sentences (in milliseconds)
      sentenceDelay: 1000,
      // should start on input focus. Set false to autostart
      startOnFocus: false,
      // loop through passed sentences
      loop: true,
      // Initially shuffle the passed sentences
      shuffle: false,
      // Show cursor or not. Shows by default
      showCursor: true,
      // String to show as cursor
      cursor: '|'
  }
});