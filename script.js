let menu = document.querySelector('#menu-btn');
let navbar = document.querySelector('.header .nav');
let header = document.querySelector('.header');


menu.addEventListener('click', () =>{
    menu.classList.toggle('fa-times');
    navbar.classList.toggle('active');
});

window.onscroll = () =>{
    menu.classList.remove('fa-times');
    navbar.classList.remove('active');

    if (window.scrollY > 0){
        header.classList.add('active');
      } else {
        header.classList.remove('active');
    }

}

function cart() {
  swal({
    title: 'Success',
    text: 'Pengaduan kamu berhasil',
    icon: 'success',
    button: 'Selesai',
  });
}