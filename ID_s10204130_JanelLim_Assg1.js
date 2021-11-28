var photosIndex = 1;
showPhotos(photosIndex);

// Next/previous controls
function plusSlides(n) {
  showSlides(slideIndex += n);
}

// Thumbnail image controls
function currentPhoto(n) {
  showPhotos(photoIndex = n);
}

function showPhotos(n) {
  var i;
  var photos = document.getElementsByClassName("photos");
  var dots = document.getElementsByClassName("dot");
  if (n > photos.length) {photosIndex = 1}
  if (n < 1) {photosIndex = photos.length}
  for (i = 0; i < photos.length; i++) {
      photos[i].style.display = "none";
  }
  for (i = 0; i < dots.length; i++) {
      dots[i].className = dots[i].className.replace(" active", "");
  }
  photos[photosIndex-1].style.display = "block";
  dots[photosIndex-1].className += " active";
}


