
// срипт заработает когда загрузятся все теги

window.addEventListener('DOMContentLoaded', function() {
     let products = document.querySelectorAll('.product'),
         buttons = document.querySelectorAll('button'),
         openBtn = document.querySelector('.open');

     function createCart() {
          // создание элементов на странице
          let cart = document.createElement('div'),
              field = document.createElement('div'),
              heading = document.createElement('h2'),
              closeBtn = document.createElement('button');

          // присвоение классов созданым элементам
          cart.classList.add('cart');
          field.classList.add('cart-field');
          closeBtn.classList.add('close');


          heading.textContent = 'В нашей корзине: ';
          closeBtn.textContent = 'Закрыть';

          // добавление элемента в верстку
          document.body.appendChild(cart);
          cart.appendChild(heading);
          cart.appendChild(field);
          cart.appendChild(closeBtn);
     };

     createCart();

     // находим добавленые через JS элементы в DOM-дереве

     let field = document.querySelector('.cart-field'),
         cart = document.querySelector('.cart'),
         close = document.querySelector('.close');
 
     // функции открытия и закрытия корзины

     function openCart() {
          cart.style.display = 'block';
     };
     function closeCart() {
          cart.style.display = 'none';
     };

     // добавляем события которые прописали выше
     openBtn.addEventListener('click', openCart);
     close.addEventListener('click', closeCart);

     // перебор кнопок "купить!" и создание клона для помещения его в корзину 

     buttons.forEach(function(value, i) {
          value.addEventListener('click', function () {
               let item = products[i].cloneNode(true), // указали (true) чтобы скопировались все элементы в блоке products
                    btn = item.querySelector('button');

               // удаление кнопки из клона в корзине через remove(), сверху нашли ее и присвоили переменную btn
               btn.remove();
               // добавление клона продукта в корзину
               field.appendChild(item);
               // удаление продукта из страницы при покупке
               products[i].remove();
          });
     });
});



