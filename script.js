const product = {
  plainBurger: {
    name: 'GAMBURGER',
    price: 10000,
    kcall: 400,
    amount: 0,
    get calcSum() {
      return this.price * this.amount;
    },
    get kcallLV() {
      return this.kcall * this.amount
    }
    
  },
  freshBurger: {
    name: 'GAMBURGER FRESH',
    price: 20500,
    kcall: 500,
    amount: 0,
    get calcSum() {
      return this.price * this.amount;
    },
    get kcallLV() {
      return this.kcall * this.amount
    }
  },
  freshCombo: {
    name: 'FRESH COMBO',
    price: 31900,
    kcall: 600,
    amount: 0,
    get calcSum() {
      return this.price * this.amount;
    },
    get kcallLV() {
      return this.kcall * this.amount
    }
  },
}

let Levle = document.querySelector('.header__timer span')


function auto() {

  Levle.innerHTML++;

  if (Levle.innerHTML == 0  ){
    Levle.innerHTML++
  } else if (Levle.innerHTML >= 101) {
    Levle.innerHTML = 0
   }

  setTimeout(() => {
    auto()
  }, 1000)

  }
  auto()


let btn = document.querySelectorAll('.main__product-btn');


for (let i = 0; i < btn.length; i++) {
  
  btn[i].addEventListener('click', function () {
    // console.log(btn[i]);
    
    // console.log(this.closest('.main__product').getAttribute('id'));
    
    prepare(this);
  })
}


function prepare(el) {
  // console.log(el);
  
  let parent = el.closest('.main__product');
  let parentId = parent.getAttribute('id');
  let num = parent.querySelector('.main__product-num');
  let amount = product[parentId].amount;
  let sym = el.getAttribute('data-symbol');
  let price = parent.querySelector('.main__product-price span');
  let kcall = parent.querySelector('.main__product-kcall span')
  
  if (sym == '+' && amount < 10) {
    amount++;
  } else if (sym == '-' && amount > 0) {
    amount--;
  }
  
  
  num.innerHTML = amount;
  product[parentId].amount = amount;
  price.innerHTML = product[parentId].calcSum;
  kcall.innerHTML = product[parentId].kcallLV
  
  // console.log(amount);
  
}