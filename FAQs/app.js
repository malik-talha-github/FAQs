// const  btns =document.querySelectorAll(".question-btn");

// btns.forEach(function(btn){
//     btn.addEventListener("click", function(e){
//         const question=e.currentTarget.parentElement.parentElement;
//         question.classList.toggle("show-text")
//     });
// });

//!--USING SLECTORS -->

const questons = document.querySelectorAll(".question");

questons.forEach(function(question){
    const btn = question.querySelector(".question-btn");
    btn.addEventListener("click",function(){
        questons.forEach(function(item){
            if (item !==question){
                item.classList.remove("show-text");
            }
        });
        question.classList.toggle("show-text");
    });
});
