// Object with keywords as keys and images as values
// keywords: happy, nature, calm
var images = {
    distorted: "Untitled-1-01.jpg",
    living: "Untitled-1-02.jpg",
    nonchalant: "Untitled-1-06.jpg",
    chilling: "Untitled-1-07.jpg",
    posh: "Untitled-1-09.jpg",
  };
  
  function checkSentence() {
    // Get the user input
    var sentence = document.getElementById("sentence").value.toLowerCase(); // Convert to lowercase for easy matching
  
    // Get the image element
    var image = document.getElementById("image");
  
    // Default to hiding the image
    image.style.display = "none";
  
    // Check if any keyword is in the sentence
    if (sentence.includes("distorted")) {
      image.src = images["distorted"];
      image.style.display = "block";
    } else if (sentence.includes("living")) {
      image.src = images["living"];
      image.style.display = "block";
    } else if (sentence.includes("nonchalant")) {
      image.src = images["nonchalant"];
      image.style.display = "block";
    } else if (sentence.includes("chilling")) {
      image.src = images["chilling"];
      image.style.display = "block";
    } else if (sentence.includes("posh")) {
        image.src = images["posh"];
        image.style.display = "block";
    } 
}

document.querySelectorAll('.box').forEach(box => {
  box.addEventListener('dragstart', function(e) {
    e.dataTransfer.setData('text/plain', this.textContent);
  });
});

const sentenceInput = document.getElementById('sentence');

sentenceInput.addEventListener('dragover', function(e) {
  e.preventDefault(); 
});

sentenceInput.addEventListener('drop', function(e) {
  e.preventDefault();
  const droppedText = e.dataTransfer.getData('text/plain');
  sentenceInput.value = droppedText;
});

document.querySelectorAll('.box').forEach(box => {
  box.addEventListener('click', function() {
    sentenceInput.value = this.textContent;
  });
});

