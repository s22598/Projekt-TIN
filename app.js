let numbersSectionActivated = false;

window.onscroll = function() {
    var section = document.getElementsByClassName("home")[0];
    var sectionTop = section.offsetTop;
    var windowTop = window.pageYOffset;
    var halfOfSection = sectionTop + (section.offsetHeight / 5);
  
    if (!numbersSectionActivated && windowTop >= halfOfSection){
        numbersSectionActivated = true;

        const counters = document.querySelectorAll('.counter');

        counters.forEach((counter) => {
            counter.innerText = '0';
        
            const updateCounter = () => {
                const target = +counter.getAttribute('data-target');
                const c = +counter.innerText;
        
                const increment = target / 200;
        
                if (c < target) {
                    counter.innerText = `${Math.ceil(c + increment)}`;
                    setTimeout(updateCounter, 1);
                } else {
                    counter.innerText = target;
                }
            };
            updateCounter();
        });
    }
};
