// Wrap every letter in a span
var textWrapper = document.querySelector('.animate-logo1');
textWrapper.innerHTML = textWrapper.textContent.replace(/\S/g, "<span class='letter'>$&</span>");

anime.timeline({loop: true})
  .add({
    targets: '.animate-logo1 .letter',
	offset: 1000,
    scale: [4,1],
    opacity: [0,1],
    translateZ: 0,
    easing: "easeOutExpo",
    duration: 1950,
    delay: (el, i) => 370*i
  }).add({
    targets: '.animate-logo1',
    opacity: 0,
    duration: 3000,
    easing: "easeOutExpo",
    delay: 99999
  });
  
  // Wrap every letter in a span
var textWrapper = document.querySelector('.animate-text1 .letters');
textWrapper.innerHTML = textWrapper.textContent.replace(/\S/g, "<span class='letter1'>$&</span>");

anime.timeline({loop: true})
  .add({
    targets: '.animate-text1 .letter1',
	offset: 4000,
    scale: [0.3,1],
    opacity: [0,1],
    translateZ: 0,
    easing: "easeOutExpo",
    duration: 1600,
    delay: (el, i) => 70 * (i+1)
  }).add({
    targets: '.animate-text1 .line',
    scaleX: [0,1],
    opacity: [0.5,1],
    easing: "easeOutExpo",
    duration: 2700,
    offset: '-=875',
    delay: (el, i, l) => 80 * (l - i)
  }).add({
    targets: '.animate-text1',
    opacity: 0,
    duration: 1000,
    easing: "easeOutExpo",
    delay: 99999
  });
  
  // DOPRACOWAC CZASY!!!