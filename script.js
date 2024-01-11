
window.onscroll = function (e) {
    const img = document.getElementById('memoji');
    const intro = document.getElementById('intro');
    const skills = document.getElementById('skills');
    const work = document.getElementById('work');
    const contact = document.getElementById('contact');
    const git = document.getElementById('git');
    const linkedin = document.getElementById('linkedin');
    const dots = document.getElementsByClassName('dots');

    if(window.pageYOffset >= intro.offsetTop)
    {
        img.src = '/images/memoji/memoji-hi.png'
    }

    if(window.pageYOffset >= skills.offsetTop && window.pageYOffset <= work.offsetTop)
    {
        img.src = '/images/memoji/memoji-victory.png'
    }

    if(window.pageYOffset >= work.offsetTop && window.pageYOffset <= contact.offsetTop)
    {
        img.src = '/images/memoji/memoji-work.png'
    }

    if(window.pageYOffset >= contact.offsetTop - 50)
    {
        img.src = '/images/memoji/memoji-contact.png'
    }

    if(window.pageYOffset >= contact.offsetTop - 300)
    {
        git.src = '/images/social/color2/git.png'
        linkedin.src = '/images/social/color2/linkedin.png'
        Array.prototype.forEach.call(dots, function(dot) {
            dot.style.color = "#d0d3d4";
        });
    }
    else if(window.pageYOffset <= contact.offsetTop)
    {
        git.src = '/images/social/color1/git.png'
        linkedin.src = '/images/social/color1/linkedin.png'
        Array.prototype.forEach.call(dots, function(dot) {
            dot.style.color = "#003b49";
        });
    }
}