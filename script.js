const accordion = document.querySelectorAll(".accordion");
const accordionItem = document.querySelectorAll(".accordion-item");


accordion.forEach((acc, i) => {
    acc.onclick = () => {

        accordion.forEach((a) => {
            a.style.backgroundColor = 'white'
            a.style.color = 'black'
        })

        acc.style.backgroundColor = "#1381EC"
        acc.style.color = "white"

        accordionItem.forEach((item, index) => {
            // const iconUp = acc.querySelector(".fa-angle-up")
            const iconDown = acc.querySelector(".fa-angle-down")
            if (i === index) {
                item.classList.toggle("d-none");

                iconDown.classList.remove("fa-angle-down")
                iconDown.classList.toggle("fa-angle-up")
                
            } else {
                item.classList.add("d-none");
            }

        });

    };
});
