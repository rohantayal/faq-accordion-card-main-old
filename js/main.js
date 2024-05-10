document.addEventListener("DOMContentLoaded", () => {

    const faqs = document.querySelectorAll(".faq");
    console.log(faqs);

    faqs.forEach(faq => {
        faq.addEventListener('click', () => {
            const answer= faq.querySelector(".answer");
            const arrow= faq.querySelector(".arrow");

            faqs.forEach(faq2 => {
                const answer2 = faq2.querySelector(".answer");
                const arrow2 = faq2.querySelector(".arrow");
                if(faq2 !== faq){
                    if (answer2.classList.contains("active")) {
                        answer2.classList.remove("active");
                        arrow2.alt = "Expand";
                        arrow2.classList.remove("rotate");
                    }
                }
            })


            if (answer.classList.contains("active")) {
                answer.classList.remove("active");
                arrow.alt = "Expand";
                arrow.classList.remove("rotate");
            } else {
                answer.classList.add("active");
                arrow.alt = "Collapse";
                arrow.classList.add("rotate");
            }

        })


    });
})