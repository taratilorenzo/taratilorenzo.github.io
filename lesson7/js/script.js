// select all img elements that have the attribute: data-scr
let imagesToLoad = document.querySelectorAll('img[data-src]');

// function loadImages
const loadImages = (image) => {
  image.setAttribute('src', image.getAttribute('data-src'));
  image.onload = () => {
    image.removeAttribute('data-src');
  };
};

const options = {
  threshold: 1,
};

// first we check if the intersection Observer is supported by browser
if('IntersectionObserver' in window) {
  // items is an Array
    const imgObserver = new IntersectionObserver(entries => {
      entries.forEach((entry) => {
        // isIntersecting means show on the screen or specified
        if(entry.isIntersecting) {
          loadImages(entry.target);
          imgObserver.unobserve(entry.target);
        }
      });
    }, options);

    // loop through each img and check status, and load if necessary
    imagesToLoad.forEach((img) => {
      imgObserver.observe(img);
    });
}  
else {
    // just load all images if not supported
    imagesToLoad.forEach((img) => {
    loadImages(img);
    });
}