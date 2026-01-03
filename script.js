// Fonction appelée quand on survole une miniature
function upDate(previewPic) {
  console.log('upDate called:', previewPic);
  const preview = document.getElementById('image');

  // Met à jour l'image d'arrière-plan (assurez-vous que la chaîne soit url('...'))
  preview.style.backgroundImage = "url('" + previewPic.src + "')";
  // Met à jour le texte avec l'attribut alt de l'image
  preview.textContent = previewPic.alt;
}

// Fonction appelée quand la souris quitte la miniature
function unDo() {
  const preview = document.getElementById('image');
  // Remise à l'état initial
  preview.style.backgroundImage = "url('')";
  preview.textContent = "Hover over an image below to display here";
}