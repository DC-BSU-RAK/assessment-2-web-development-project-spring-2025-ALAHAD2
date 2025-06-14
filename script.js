//toggle icon navbar
let menuIcon = document.querySelector('#menu-icon');
let navbar = document.querySelector('.navbar');

menuIcon.onclick =() =>
    menuIcon.classList.toggle('bx-x');
    navbar.classList.toggle('active');


  //scroll section
    let sections = document.querySelectorAll('section');
    let navLinks = document.querySelectorAll('header nav a');

    window.onscroll= () => {
        selections.forEach(se => {
            let top = window.scrollY;
            let offset = sec.offsetTop - 100;
            let height = sec.offsetHeight;
            let id = sec.getAttribute('id');

            if(top >= offset && top < offset + height){
                //active navbar links
                navLinks.forEach(links => {
                    links.classList.remove('active');
                    document.querySelector('header nav a[href*=' +id+']').classList.add('active');
                });
            }
        });


    //stickly header
    let header = document.querySelectorAll('header');
    header.classList.toggle('stricky', window.scrollY > 100 );

    // remove toggle icon and  navbar when click navbar links (scroll)
    menuIcon.classList.remove('bx-x');
    navbar.classList.remove('active');

  }
