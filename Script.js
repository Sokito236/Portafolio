let stars = document.getElementById('stars');
        let moon = document.getElementById('moon');
        let mountains_behind = document.getElementById('mountains_behind');
        let text = document.getElementById('text');
        let btn = document.getElementById('btn');
        let mountains_front = document.getElementById('mountains_front');
        let header = document.querySelector('header');
        window.addEventListener('scroll', function(){
            let value = window.scrollY;
            stars.style.left = value * 0.25 + 'px';
            moon.style.top = value * 1.05 + 'px';
            mountains_behind.style.top = value * 0.5 + 'px';
            mountains_front.style.top = value * 0 + 'px';
            text.style.marginRight = value * 4 + 'px';
            text.style.marginTop = value * 1.5 + 'px';
            btn.style.marginTop = value * 1.5 + 'px';
            header.style.marginTop = value * -1.5 + 'px';
        })

        
window.onscroll = function() { efectoHabilidades() };

function efectoHabilidades() {
    var skills = document.getElementById("skills");
    var distancia_skills = window.innerHeight - skills.getBoundingClientRect().top;
    if (distancia_skills >= 300) {
        document.getElementById("html").classList.add("barra-progreso1");
        document.getElementById("js").classList.add("barra-progreso2");
        document.getElementById("bd").classList.add("barra-progreso3");
        document.getElementById("ps").classList.add("barra-progreso4");
    }

}

