

const showMenu = (toggleId, navId) => {
    const toggle = document.getElementById(toggleId), nav = document.getElementById(navId)
    if (toggle && nav) { toggle.addEventListener('click', () => { nav.classList.toggle('show') }) }
}
showMenu('nav-toggle', 'nav-menu')
const navLink = document.querySelectorAll('.nav__link'); function linkAction() {
    navLink.forEach(n => n.classList.remove('active')); this.classList.add('active'); const navMenu = document.getElementById('nav-menu')
    navMenu.classList.remove('show')
}
navLink.forEach(n => n.addEventListener('click', linkAction)); const sr = ScrollReveal({ origin: 'top', distance: '80px', duration: 2000, reset: !0 }); sr.reveal('.home__title', {}); sr.reveal('.button', { delay: 200 }); sr.reveal('.home__img', { delay: 400 }); sr.reveal('.home__social-icon', { interval: 200 }); sr.reveal('.about__img', {}); sr.reveal('.about__subtitle', { delay: 400 }); sr.reveal('.about__text', { delay: 400 }); sr.reveal('.skills__subtitle', {}); sr.reveal('.skills__text', {}); sr.reveal('.skills__data', { interval: 200 }); sr.reveal('.skills__img', { delay: 600 }); sr.reveal('.work__img', { interval: 200 }); sr.reveal('.contact__input', { interval: 200 }); var form = document.forms.contact; form.addEventListener('submit', contact_submit, !1); function contact_submit(e) { e.preventDefault(); var target = e.target || e.srcElement; var to = 'mehr.m6534@gmial.com'; var uri = 'mailto:' + to; var body = ''; var name = target.elements.name.value; var subject = target.elements.subject.value; var email = target.elements.email.value; var message = target.elements.message.value; body += message + "\r\n\r\n"; body += "Name: " + name + "\r\n"; body += "Email: " + email + "\r\n"; uri += '?subject=' + encodeURIComponent(subject); uri += '&body=' + encodeURIComponent(body); window.open(uri, '_blank') }
