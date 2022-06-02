// select all img elements that have the attribute: data-scr
let imagesToLoad = document.querySelectorAll('img[data-src]');

// function loadImages
const loadImages = (image) => {
  image.setAttribute('src', image.getAttribute('data-src'));
  image.onload = () => {
    image.removeAttribute('data-src');
  };
};

// first we check if the intersection Observer is supported by browser
if('IntersectionObserver' in window) {
    const imgObserver = new IntersectionObserver((items, observer) => {
      items.forEach((item) => {
        if(item.isIntersecting) {
          loadImages(item.target);
          observer.unobserve(item.target);
        }
      });
    });

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