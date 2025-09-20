document.addEventListener('DOMContentLoaded', function(){
    let home = document.getElementById('home');
    let about = document.getElementById('about');
    let contact = document.getElementById('contact');
    
    let homeContent = document.getElementById('hometext');
    let aboutContent = document.getElementById('abouttext');
    let contactContent = document.getElementById('contacttext');
    
    homeContent.style.display = 'block';
    homeContent.width = '50%';
    home.addEventListener('click', function(){
        hideAll()
        homeContent.style.display = 'block';
        homeContent.width = '50%';
    });

    about.addEventListener('click', function(){
        hideAll()
        aboutContent.style.display = 'block';
        aboutContent.width = '50%';
    });

    contact.addEventListener('click', function(){
        hideAll()
        contactContent.style.display = 'block';
        contactContent.width = '50%';
    });
    function hideAll(){
        document.querySelectorAll('h3').forEach(function(h3){
            h3.style.display = 'none';
        })
    }
})