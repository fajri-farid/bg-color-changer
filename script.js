const circles = document.querySelectorAll(".circle");
const title = document.querySelector(".title"); // select the title
const reset = document.querySelector(".reset");

circles.forEach(circle => {
    circle.addEventListener("click", ({target}) => {
        const {backgroundColor} = window.getComputedStyle(target)
        document.body.style.backgroundColor = backgroundColor
    
        if (backgroundColor === 'rgb(0, 72, 255)' || backgroundColor === 'rgb(0, 128, 0)' || backgroundColor === 'rgba(255, 36, 36, 0.804)') {
            title.style.color = 'white'; // change the title color to black
            reset.style.color= 'white';
        } else {
            title.style.color = 'black'; // change the title color to white
            reset.style.color= 'black';
        }

        // if (backgroundColor === 'rgb(0, 72, 255)' || backgroundColor === 'rgb(0, 128, 0)' || backgroundColor === 'rgba(255, 36, 36, 0.804)') {
        //     reset.style.color= 'white';
        // } else {
        //     reset.style.color= 'black';
        // }

        
    }) 
});

function resetWarna(){
    document.body.style.backgroundColor ='white'
    title.style.color ='black'
    reset.style.color= 'black';
}