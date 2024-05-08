document.addEventListener("DOMContentLoaded", ()=>{

    const faqs= document.querySelectorAll(".faq");
    console.log(faqs);

    faqs.forEach(faq => {
        faq.addEventListener('click',()=>{
            const answer= faq.querySelector(".answer");
            const arrow=faq.querySelector(".arrow");
    
            if(answer.classList.contains("active")){
                answer.classList.remove("active");
                arrow.alt="Expand";
                arrow.classList.remove("rotate");
            }else{
                answer.classList.add("active");
                arrow.alt="Collapse";
                arrow.classList.add("rotate");
            }
            
        })

        
    });
})