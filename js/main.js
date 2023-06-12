window.onload = () => {
  attachSliderEvents();
  attachShowHideVideoEvents();
} 

const attachSliderEvents = () => {
  const rangeSliders = document.querySelectorAll('input[type=range]');
  if (rangeSliders === undefined || rangeSliders.length == 0) return;

  rangeSliders.forEach((rangeItem) => {
    rangeItem.addEventListener('change', (event) => {
      let sliderValue = event.target.value;
      let outputElementToChange = event.currentTarget.nextElementSibling
      moveSlider(sliderValue, outputElementToChange);
    });
  });
}

const moveSlider = (sliderValue, nextSibling) => {
  nextSibling.innerText = sliderValue;
}

const attachShowHideVideoEvents = () => {
  const toggleButtons = document.querySelectorAll('.video-display-toggle');
  if (toggleButtons === undefined || toggleButtons.length == 0) return;


  toggleButtons.forEach((buttonItem, index) => {
    buttonItem.addEventListener('click', (event) => {
      let videoBlock = document.getElementsByClassName('video')[index];
      videoBlock.classList.add('video--show');
      
    });
  });
}


