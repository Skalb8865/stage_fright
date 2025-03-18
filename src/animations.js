const observer = new IntersectionObserver((entries) =>{
    entries.forEach((entry) => {
        if (entry.isIntersecting){
            entry.target.classList.add("autoShow");
        }
        // else{
        //     entry.target.classList.remove("autoShow");
        // }
    });
});

const hiddenElements = document.querySelectorAll('.autoHide');
hiddenElements.forEach((el) => observer.observe(el));