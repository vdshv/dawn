document.addEventListener("DOMContentLoaded", function (event) {
    
    
});

window.onload = () => {
    const prod_sticky = qs('.prod__sticky');
    prod_sticky.style.top = getElementOffset(prod_sticky) + 'px';

    function getElementOffset(element) {
        let offset = element.offsetTop;
        let parent = element.offsetParent;
      
        while (parent !== null) {
          offset += parent.offsetTop;
          parent = parent.offsetParent;
        }
      
        return offset;
    }
}