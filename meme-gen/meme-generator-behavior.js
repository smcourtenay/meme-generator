const memeForm = document.querySelector("form"); // get DOM object of our form
memeForm.addEventListener("submit", (e) => { // get data from the submission
    // apparently we want to prevent default behavior when the form is submitted? 
    e.preventDefault();

    console.log("Meme Generated!")
    console.log(memeForm.querySelector('input[name="top-meme-text"]').value); //FINALLY figured out how to get the value from the form
    console.log(memeForm.querySelector('input[name="bottom-meme-text"]').value);



    // the contents from my functioning
    const imgSrc = memeForm.querySelector('input[name="meme-url"]').value; // comment out after testing
    const topTextInput = memeForm.querySelector('input[name="top-meme-text"]').value;
    const bottomTextInput = memeForm.querySelector('input[name="bottom-meme-text"]').value;

    const imgs = document.getElementById("images"); // initializes our DOM object which we'll be adding to using the button

    const container = document.createElement('div'); // creating a container to hold our div texts and our image
    // CONSIDER adding an event listener on click to this for deletion purposes in the future

    container.addEventListener("click", function(e){
        container.remove(); // this deletes the object. Now just add a transparent red or an X on hover to finish
    })

    container.addEventListener("mouseover", function(e){
        console.log("hovering");
        container.style.color = "red";
    })

    const div1 = document.createElement('div');
    const div2 = document.createElement('div');
    const newImg = document.createElement("img"); // creates a new img element. We'll need to add src and loop for new one?

    // Update the below URL with a variable holding the value supplied by the form
    newImg.setAttribute("src",imgSrc);

    // go back and replace all IDs with classes for proper CSS. You'll need to understand getElementsByClassName
    // Below lines are setting ID attributes so I can find and style the elements
    newImg.setAttribute("id","newImg");
    container.setAttribute("class","container")
    div1.setAttribute("id","div1")
    div2.setAttribute("id","div2")

    imgs.prepend(container); // add a new container to the flexbox'd imgs section

    // position the text in the correct locations on top and bottom of the image
    container.prepend(div1);
    container.append(newImg);
    container.append(div2);

    // get the HTMLElement object with the ids and update the innerText with the value provided by the button
    const topText = document.getElementById("div1");
    topText.innerText = topTextInput;

    const bottomText = document.getElementById("div2");
    bottomText.innerText = bottomTextInput;

    memeForm.reset(); // should clear the text fields after submission
});

// demo on CSS transitions and changing colors
function randomRGB(){
    const r = Math.floor(Math.random() * 256);
    const g = Math.floor(Math.random() * 256);
    const b = Math.floor(Math.random() * 256);

    return `rgb(${r},${g},${b})` //he said something here about a string literal and interpolating variables into it
    // the backtick " ` " is important for signifying this. It is NOT a single quote
}

const colors = document.querySelectorAll(".colors"); // you have to use the dot because that is the class signifer


setInterval(function(){ //this is an anonymous function)
    for(let letter of colors){
        letter.style.color = randomRGB();
    }
}, 750)