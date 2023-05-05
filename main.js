const dayNight = document.querySelector('.wrapper');
const originalBackground = document.body.style.background;

// define a cor original do fundo


dayNight.addEventListener('click', () => {
  if (document.body.style.background === originalBackground) {
    document.body.style.background = "linear-gradient(to right top, #0283d6, #007ed2, #0078cf, #0073cb, #006dc7, #0170ca, #0274cd, #0377d0, #0d84da, #1a90e3, #279dec, #35aaf4)";
    document.body.style.transition = "background-color 1s ease";
  } else {
    document.body.style.background = originalBackground;
    document.body.style.transition = "background-color 1s ease";
  }
});
  
// Evento loading
setTimeout (() => {
    document.querySelector('.loading').style.display = 'none';    
    document.querySelector('.content').style.scale = '1'
} , 2000);


const menuItems = document.querySelectorAll('li[data-target]');
const conteudo = document.querySelector('.conteudo');
const inicio = document.querySelector('.index');
const loader = document.querySelector('.loading');
const pagina = document.querySelector('.pagina')

// Adiciona a classe "hidden" ao conteúdo para ocultá-lo inicialmente
conteudo.classList.add('hidden');

menuItems.forEach(menuItem => {
  menuItem.addEventListener('click', () => {
    inicio.style.transform = 'translateX(-980px)';
    pagina.style.display = 'none';
    loader.style.display = 'block';

    setTimeout(() => {
      loader.style.display = 'none';
      pagina.style.display = 'block';
    }, 1000);

    // Resto do código para exibir o conteúdo de destino
    const targetId = menuItem.getAttribute('data-target');
    const target = document.querySelector(targetId);

    const elementoMostrar = conteudo.querySelector('.mostrar');
    if (elementoMostrar) {
      elementoMostrar.classList.add('mostrar');
    }

    if (target) {
      target.classList.add('mostrar');
    }
  });
});

// button rodapé

const btnVoltar = document.querySelectorAll('.button');

btnVoltar.forEach(button => {
  button.addEventListener('click', () => {
    inicio.style.transform = 'translateX(0px)';
    const elementoMostrar = conteudo.querySelector('.mostrar');
    if (elementoMostrar) {
      elementoMostrar.classList.remove('mostrar');
    }
  });
});




