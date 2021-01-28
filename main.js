console.log('successfully linked!')

// For each prompt, perform the specified selection. Save the result to a variable, then console.log that variable. Confirm that it contains what it should in the console!

// 1) All img tags
const imgs = document.querySelectorAll("img");
console.log(imgs)
// 2) All section tags
const section = document.querySelectorAll("section");
console.log(section)
// 3) The element with an id of section-1
const idSection = document.getElementById('section-1');
console.log(idSection);
// 4) The element with an id of destinations-button
const idDestination = document.getElementById('destinations-button');
console.log(idDestination)
// 5) The first element with a class of images-rack
const firstElement = document.getElementsByClassName('images-rack');
console.log(firstElement)
// 6) The first h1 tag
const firstHeading = document.getElementsByTagName('h1');
console.log(firstHeading)
// 7) All elements with a class of image-card
const classElement = document.getElementsByClassName('image-card');
console.log(classElement)
// 8) All elements with a class of over-image-text
const classElementTwo = document.getElementsByClassName('over-image-text');
console.log(classElementTwo)
