function getNavHeight() {
  const navbar = document.getElementById('mainNav');
  return navbar ? navbar.getBoundingClientRect().height : 0;
}

function smoothScrollTo(target, duration = 900, callback) {
  const start = window.pageYOffset;
  const distance = target - start;
  let startTime = null;

  function easeInOutQuad(t) {
    return t < 0.5
      ? 2 * t * t
      : -1 + (4 - 2 * t) * t;
  }

  function animation(currentTime) {
    if (!startTime) startTime = currentTime;
    const timeElapsed = currentTime - startTime;
    const progress = Math.min(timeElapsed / duration, 1);
    const ease = easeInOutQuad(progress);

    window.scrollTo(0, start + distance * ease);

    if (timeElapsed < duration) {
      requestAnimationFrame(animation);
    } else if (callback) {
      callback();
    }
  }
  requestAnimationFrame(animation);
}

document.addEventListener('DOMContentLoaded', () => {
  const navbar = document.getElementById("mainNav");
  if (navbar) {
    window.addEventListener("scroll", function () {
      if (window.scrollY > 50) {
        navbar.classList.add("scrolled");
      } else {
        navbar.classList.remove("scrolled");
      }
    });
  }

  const descriptions = {
    desc1: `<h4>Full Stack - Projeto Outlet</h4><p>Descrição detalhada do projeto Outlet, tecnologias usadas, funcionalidades, desafios e resultados.</p>`,
    desc2: `<h4>Full Stack - Projeto Camisas</h4><p>Descrição detalhada do projeto Camisas, design, backend, integração e outros detalhes importantes.</p>`,
    desc3: `<h4>Front End - Projeto Promo5</h4><p>Descrição detalhada do projeto Promo5, foco em UX/UI, responsividade e tecnologias front-end utilizadas.</p>`,
    desc4: `<h4>Product Owner - Projeto Moletom</h4><p>Descrição do papel de Product Owner no projeto Moletom, liderança, planejamento e gestão de equipe.</p>`
  };

  const cards = document.querySelectorAll('.promo-card');
  let expandedCard = null;
  cards.forEach(card => {
    const openBtn = card.querySelector('.open-desc-btn');
    const closeBtn = card.querySelector('.close-desc-btn');
    const extraDesc = card.querySelector('.extra-desc');
    const descKey = card.getAttribute('data-desc');
    if (!openBtn || !closeBtn || !extraDesc) return;

    openBtn.addEventListener('click', () => {
      if (expandedCard && expandedCard !== card) fecharCard(expandedCard);
      if (expandedCard === card) return;

      card.style.width = '600px';
      extraDesc.style.display = 'block';
      extraDesc.innerHTML = descriptions[descKey] || '<p>Descrição não disponível.</p>';
      openBtn.style.display = 'none';
      closeBtn.style.display = 'block';
      expandedCard = card;

      cards.forEach(c => {
        if (c !== card) {
          c.style.opacity = '0.3';
          c.style.pointerEvents = 'none';
        }
      });
    });

    closeBtn.addEventListener('click', () => fecharCard(card));

    function fecharCard(cardToClose) {
      cardToClose.style.width = '250px';
      const desc = cardToClose.querySelector('.extra-desc');
      const openBtn = cardToClose.querySelector('.open-desc-btn');
      const closeBtn = cardToClose.querySelector('.close-desc-btn');
      if (desc) {
        desc.style.display = 'none';
        desc.innerHTML = '';
      }
      if (openBtn) openBtn.style.display = 'block';
      if (closeBtn) closeBtn.style.display = 'none';
      expandedCard = null;

      cards.forEach(c => {
        c.style.opacity = '1';
        c.style.pointerEvents = 'auto';
      });
    }
  });

  const observer = new IntersectionObserver(entries => {
    entries.forEach(entry => {
      if (entry.isIntersecting) {
        entry.target.classList.add('show');
      }
    });
  });

  const hiddenElements = document.querySelectorAll('.hidden');
  hiddenElements.forEach(el => observer.observe(el));

  const links = document.querySelectorAll('#mainNav a[data-target], button[data-target]');
  const sections = Array.from(document.querySelectorAll('section[id], div[id]'));

  links.forEach(link => {
    link.addEventListener('click', e => {
      e.preventDefault();
      const id = link.dataset.target;
      const el = document.getElementById(id);
      if (!el) return;

      const topRaw = el.getBoundingClientRect().top + window.pageYOffset - getNavHeight() - 2;
      const top = Math.max(topRaw, 0);

      smoothScrollTo(top, 600, () => {
        history.replaceState(null, '', `#${id}`);
      });
    });
  });

  const sectionObserver = new IntersectionObserver(entries => {
    entries.forEach(entry => {
      const id = entry.target.id;
      const navLink = document.querySelector(`#mainNav a[data-target="${id}"]`);
      if (entry.isIntersecting) {
        navLink?.classList.add('active');
      } else {
        navLink?.classList.remove('active');
      }
    });
  }, { threshold: 0.2 });

  sections.forEach(s => sectionObserver.observe(s));

  const Contato = document.getElementById('Contato');
  if (Contato) {
    Contato.addEventListener('click', e => {
      e.preventDefault();
      const id = Contato.dataset.target;
      const el = document.getElementById(id);
      if (!el) return;

      const top = el.getBoundingClientRect().top + window.pageYOffset - getNavHeight() - 2;
      smoothScrollTo(top, 1000, () => {
        history.replaceState(null, '', `#${id}`);
      });
    });
  }


 


  const form = document.getElementById('meuFormulario');
  if (form) {
    form.addEventListener('submit', async e => {
      e.preventDefault();

      const email = document.getElementById('email').value.trim();
      const assunto = document.getElementById('assunto').value.trim();
      const mensagem = document.getElementById('mensagem').value.trim();

      if (!email || !assunto || !mensagem) {
        alert('Por favor, preencha todos os campos.');
        return;
      }

      try {
        const response = await fetch('https://portfolio-backend-pedro.onrender.com/send-email', {
          method: 'POST',
          headers: { 'Content-Type': 'application/json' },
          body: JSON.stringify({ email, subject: assunto, message: mensagem }),
        });

        const data = await response.json();

        if (response.ok) {
          alert(data.message || 'Email enviado com sucesso!');
          form.reset();
        } else {
          alert(data.message || 'Erro ao enviar email');
        }
      } catch (error) {
        console.error('Erro no envio:', error);
        alert('Erro ao enviar mensagem, tente novamente mais tarde.');
      }
    });
  }
});







  




