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



