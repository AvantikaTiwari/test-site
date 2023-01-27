// Image switcher code
let myImage = document.querySelector("img");

myImage.onclick = function () {
    let mySrc = myImage.getAttribute("src");
    if (mySrc === "images/firefoxlogo.png") {
        myImage.setAttribute("src", "images/firefox2.png");
    } else {
        myImage.setAttribute("src", "images/firefoxlogo.png");
    }
};
//Personalised welcome message code
let myButton = document.querySelector("button");
let myHeading = document.querySelector("h1");
function setUserName() {
    const myName = prompt("Please enter your name.");
    localStorage.setItem("name", myName);
    myHeading.textContent = `Mozilla is cool, ${myName}`;
}
//initialization code,as it structures the app when it first loads.
if (!localStorage.getItem("name")) {
    setUserName();
} else {
    const storedName = localStorage.getItem("name");
    myHeading.textContent = `Mozilla is cool, ${storedName}`;
}
// onclick event handler (below) on the button.When clicked, setUserName() runs. 

myButton.onclick = () => {
    setUserName();
};
//check if user has not entered the blank nameIn human language, 
//this means: If myName has no value, run setUserName() again from the start. 
//If it does have a value (if the above statement is not true), then store the value in localStorage and set it as the heading's text.
function setUserName() {
    const myName = prompt("Please enter your name.");
    if (!myName) {
        setUserName();
    } else {
        localStorage.setItem("name", myName);
        myHeading.textContent = `Mozilla is cool, ${myName}`;
    }
}

/*This first line of this block uses the negation operator (logical NOT, represented by the !) to check whether the name data exists. 
If not, the setUserName() function runs to create it.
If it exists (that is, the user set a user name during a previous visit), we retrieve the stored name using getItem() and set the textContent of the heading to a string, plus the user's name, as we did inside setUserName().
Put this onclick event handler (below) on the button. When clicked, setUserName() runs. 
This allows the user to enter a different name by pressing the button
This first line of this block uses the negation operator (logical NOT, represented by the !) to check whether the name data exists. 
If not, the setUserName() function runs to create it. If it exists (that is, the user set a user name during a previous visit), we retrieve the stored name using getItem() and set the textContent of the heading to a string, plus the user's name, as we did inside setUserName().
Put this onclick event handler (below) on the button. When clicked, setUserName() runs. This allows the user to enter a different name by pressing the button




/*The setUserName() function contains a prompt() function, which displays a dialog box, similar to alert(). 
This prompt() function does more than alert(), asking the user to enter data, and storing it in a variable after the user clicks OK. 
In this case, we are asking the user to enter a name. Next, the code calls on an API localStorage, 
which allows us to store data in the browser and retrieve it later. 
We use localStorage's setItem() function to create and store a data item called 'name', 
setting its value to the myName variable which contains the user's entry for the name.
Finally, we set the textContent of the heading to a string, plus the user's newly stored name.
This is what happened. 
you stored a reference to your <img> element in myImage.
Next, you made its onclick event handler property equal to a function with no name (an "anonymous" function).
So every time this element is clicked:

The code retrieves the value of the image's src attribute.
The code uses a conditional to check if the src value is equal to the path of the original image:
If it is, the code changes the src value to the path of the second image, forcing the other image to be loaded inside the <img> element.
If it isn't (meaning it must already have changed), 
the src value swaps back to the original image path, to the original state.*/