    window.onload = () => {
      attachSliderEvents();
    } 

    const attachSliderEvents = () => {
      const rangeSliders = document.querySelectorAll('input[type=range]');

      rangeSliders.forEach((rangeItem) => {
        rangeItem.addEventListener("change", (event) => {
          let sliderValue = event.target.value;
          let outputElementToChange = event.currentTarget.nextElementSibling
          moveSlider(sliderValue, outputElementToChange);
        });
      });
    }

    const moveSlider = (sliderValue, nextSibling) => {
      nextSibling.innerText = sliderValue;
    }