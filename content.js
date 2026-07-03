
window.addEventListener('wheel', function(e) {
   
    e.preventDefault(); 
    
    
    var hardScrollAmount = e.deltaY / 15; 
    
  
    var scrollingContainer = document.scrollingElement || document.documentElement || document.body;
    
    
    scrollingContainer.scrollBy({
        top: hardScrollAmount,
        left: 0,
        behavior: 'instant'
    });
}, { passive: false });
