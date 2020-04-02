let phrases = [
    ' play board games',
    ' watch TV show',
    ' meditate',
    ' film a cooking show',
    ' read a book',
    ' make love',
    ' have a dance party',
    ' have a photo shoot',
    ' learn something new',
    ' rearrange furniture',
    ' call your friend',
    ' do crazy makeup',
    ' look through photo albums',
    ' make an obstacle course',
    ' take a nap'

  ];
  
  function getRandomElement(arr) {
    let randIndex = Math.floor(Math.random() * arr.length);
    return arr[randIndex];
  }
  
  let button = document.querySelector('.button');
  let phrase = document.querySelector('.phrase');
  let advice = document.querySelector('.advice');
  let image = document.querySelector('.image');
  
  button.addEventListener('click', function () {
    let randomElement = getRandomElement(phrases);
    smoothly(phrase, 'textContent', randomElement);
  
    if (randomElement.length > 40) {
      advice.style.fontSize = '33px';
    } else {
      advice.style.fontSize = '42px';
    }
  });

  for (let i = 0; i <= 2; i = i + 1) {
    smoothly(phrase, 'textContent', phrases[i]);
    
  }