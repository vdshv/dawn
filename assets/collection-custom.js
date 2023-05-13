document.addEventListener("DOMContentLoaded", function (event) {
    window.onclick = (e) => {
        if(e.target.closest('.col__dropdown-trigger')) {
            const el = e.target.closest('.col__dropdown-trigger');
        
            let tabContent = el.nextElementSibling;

            if(el.classList.contains('active')) {
                el.classList.remove('active');
                tabContent.style.height = '0px';
            } else {
                el.classList.add('active');
                tabContent.style.height = tabContent.scrollHeight + 'px';
            }
        }
    }
});

window.onload = () => {
    const sticky_side = qs('.col__sticky'),
          headerGroupHeight = qs('header').clientHeight;

    sticky_side.style.height = `calc(100vh - ${headerGroupHeight}px)`;
}