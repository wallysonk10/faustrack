// Header: fundo sólido ao rolar a página
const header = document.getElementById('header');
window.addEventListener('scroll', () => {
    header.classList.toggle('scrolled', window.scrollY > 40);
});

// Menu mobile
const navToggle = document.getElementById('nav-toggle');
const nav = document.getElementById('nav');

navToggle.addEventListener('click', () => {
    nav.classList.toggle('is-open');
    navToggle.classList.toggle('is-active');
});

nav.querySelectorAll('a').forEach(link => {
    link.addEventListener('click', () => {
        nav.classList.remove('is-open');
        navToggle.classList.remove('is-active');
    });
});

// Animação dos cards de serviço ao entrar na tela
const cards = document.querySelectorAll('.card');
const observer = new IntersectionObserver((entries) => {
    entries.forEach((entry, index) => {
        if (entry.isIntersecting) {
            entry.target.style.animationDelay = `${index * 0.08}s`;
            entry.target.classList.add('is-visible');
            observer.unobserve(entry.target);
        }
    });
}, { threshold: 0.15 });

cards.forEach(card => observer.observe(card));

// Ano atual no rodapé
document.getElementById('year').textContent = new Date().getFullYear();

// Formulário de contato (envio via WhatsApp)
const form = document.getElementById('contact-form');
const formMsg = document.getElementById('form-msg');
const WHATSAPP_NUMBER = '5581993463202';

form.addEventListener('submit', (e) => {
    e.preventDefault();

    const name = form.name.value.trim();
    const email = form.email.value.trim();
    const message = form.message.value.trim();

    const text =
        `Olá, meu nome é ${name}.\n` +
        `E-mail: ${email}\n\n` +
        `${message}`;

    const whatsappUrl = `https://wa.me/${WHATSAPP_NUMBER}?text=${encodeURIComponent(text)}`;
    window.open(whatsappUrl, '_blank', 'noopener');

    formMsg.textContent = 'Redirecionando para o WhatsApp para finalizar o envio...';
    form.reset();
});
