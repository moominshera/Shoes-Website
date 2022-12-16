const wrapper = document.querySelector(".slider-wrapper");
const mainItems = document.querySelectorAll(".main-item");

const products = [
  {
    id: 1,
    title: "Air Force",
    price: 119,
    description : "Around events and holidays, Nike introduces limited, special and premium editions that turn the Air Force 1 into collector gold overnight. The sneaker is catching on faster than retailers can keep it on the shelves.", 
    colors: [
      {
        code: "black",
        img: "./img/air.png",
      },
      {
        code: "darkblue",
        img: "./img/air2.png",
      },
    ],
  },
  {
    id: 2,
    title: "Air Jordan",
    price: 149,
    description :"Air Jordan is a line of basketball shoes and athletic clothing produced by American corporation Nike. The first Air Jordan shoe was produced for Hall of Fame former basketball player Michael Jordan during his time with the Chicago Bulls in late 1984 and released to the public on April 1, 1985.[2][3][4][5] The shoes were designed for Nike by Peter Moore, Tinker Hatfield, and Bruce Kilgore.[6][7] " , 
    colors: [
      {
        code: "lightgray",
        img: "./img/jordan.png",
      },
      {
        code: "green",
        img: "./img/jordan2.png",
      },
    ],
  },
  {
    id: 3,
    title: "Blazer",
    price: 109,
    description : "Nike Blazers are a style of sneakers that were originally designed as a basketball shoe. The Blazers have a low profile and a simple design, which makes them versatile and popular for a variety of uses." , 
    colors: [
      {
        code: "lightgray",
        img: "./img/blazer.png",
      },
      {
        code: "green",
        img: "./img/blazer2.png",
      },
    ],
  },
  {
    id: 4,
    title: "Crater",
    price: 129,
    description : "Made from at least 25% recycled material by weight, it brings in unique design choices that reduce waste when compared with traditional methods––like an embroidered Swoosh logo, efficient overlays and of course its Crater foam midsole." , 
    colors: [
      {
        code: "black",
        img: "./img/crater.png",
      },
      {
        code: "lightgray",
        img: "./img/crater2.png",
      },
    ],
  },
  {
    id: 5,
    title: "Hippie",
    price: 99,
    description: " Space Hippie is an exploratory footwear collection inspired by life on Mars—where materials are scarce and there is no resupply mission.", 
    colors: [
      {
        code: "gray",
        img: "./img/hippie.png",
      },
      {
        code: "black",
        img: "./img/hippie2.png",
      },
    ],
  },
];

let choosenProduct = products[0];

const currentProductImg = document.querySelector(".productImg");
const currentProductTitle = document.querySelector(".productTitle");
const currentProductPrice = document.querySelector(".productPrice");
const currentProductColors = document.querySelectorAll(".color");
const currentProductSizes = document.querySelectorAll(".size");
const currentDescription  = document.querySelector(".productDesc");


mainItems.forEach((item, index) => {
  item.addEventListener("click", () => {
    wrapper.style.transform = `translateX(${-100 * index}vw)`;

    //change the choosen product
    choosenProduct = products[index];

    //change texts of currentProduct
    currentProductTitle.textContent = choosenProduct.title;
    currentProductPrice.textContent = "$" + choosenProduct.price;
    currentProductImg.src = choosenProduct.colors[0].img;
    currentDescription.textContent= choosenProduct.description ;

    //assing new colors
    currentProductColors.forEach((color, index) => {
      color.style.backgroundColor = choosenProduct.colors[index].code;
    });
  });
});
currentProductColors.forEach((color, index) => {
  color.addEventListener("click", () => {
    currentProductImg.src = choosenProduct.colors[index].img;
  });
});

currentProductSizes.forEach((size, index) => {
  size.addEventListener("click", () => {
    currentProductSizes.forEach((size) => {
      size.style.backgroundColor = "white";
      size.style.color = "black";
    });
    size.style.backgroundColor = "black";
    size.style.color = "white";
  });
});


const productButton = document.querySelector(".productButton");
const payment = document.querySelector(".payment");
const close = document.querySelector(".close") ; 

productButton.addEventListener("click" , () => {
    payment.style.display="flex";
})

close.addEventListener("click" , () => {
    payment.style.display="none";
})