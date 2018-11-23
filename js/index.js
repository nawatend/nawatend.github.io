let menuNav = document.getElementById("nav_menu");
let viewMenu = document.getElementsByClassName("view_menu")[0];
let locationNav = document.getElementById("nav_location");
let foodMenu = document.getElementsByClassName("food__menu")[0];
let homeLogos = document.getElementsByClassName("home__logo");


menuNav.addEventListener("click", () => {
  document.getElementById("section_menu").scrollIntoView({
    behavior: "smooth",
    block: "start"
  });
});

viewMenu.addEventListener("click", () => {
  document.getElementById("section_menu").scrollIntoView({
    behavior: "smooth",
    block: "start"
  });
});

homeLogos[0].addEventListener("click", () => {
  document.getElementById("nav").scrollIntoView({
    behavior: "smooth",
    block: "start"
  });
});
homeLogos[1].addEventListener("click", () => {
  document.getElementById("nav").scrollIntoView({
    behavior: "smooth",
    block: "start"
  });
});

locationNav.addEventListener("click", () => {
  document.getElementById("section_location").scrollIntoView({
    behavior: "smooth",
    block: "start"
  });
});

const formatter = new Intl.NumberFormat("it-IT", {
  style: "currency",
  currency: "EUR"
});

loadMenuSmall = () => {

  let arrTS = menuItemsJSON["tibetan specialties"];
  let arrAS = menuItemsJSON["Asian snacks"];
  let arrD = menuItemsJSON["Drinks"];
  let arrDessert = menuItemsJSON.Dessert;

  let arrAll = [{
    'Tibetan Specialties': arrTS
  }, {
    'Asian Snacks': arrAS
  }, {
    'Dessert': arrDessert
  }];

  arrAll.forEach(type => {

    let divType = document.createElement('div');
    divType.classList.add("food__menu--type");
    divType.textContent = Object.keys(type)[0];

    let itemHolderUl = document.createElement("ul");
    itemHolderUl.classList.add("collapsible");

    type[Object.keys(type)[0]].forEach(item => {
      let itemHolderLi = document.createElement("li");
      let divItem = document.createElement("div");

      divItem.classList.add("food__menu--item");
      divItem.classList.add("collapsible-header");

      //append to divItem
      let divName = document.createElement("div");
      divName.classList.add("food__name");

      divName.textContent = item.name;

      let divPrice = document.createElement("div");
      divPrice.classList.add("food__price");
      divPrice.textContent = formatter.format(item.price);

      let divContent = document.createElement("div");
      divContent.classList.add("collapsible-body");

      let divContentText = document.createElement("div");
      divContentText.classList.add("food__description");
      divContentText.innerHTML = item.description;

      divContent.appendChild(divContentText);

      divItem.appendChild(divName);
      divItem.appendChild(divPrice);

      itemHolderLi.appendChild(divItem);
      itemHolderLi.appendChild(divContent);
      itemHolderUl.appendChild(itemHolderLi);
    })
    divType.appendChild(itemHolderUl);
    foodMenu.appendChild(divType);
  });

  // DRINKS

  let divType = document.createElement("div");
  divType.classList.add("food__menu--type");
  divType.textContent = "Drinks";



  arrD.forEach(category => {
    let divCateD = document.createElement("div");
    divCateD.classList.add("food__menu--category");
    divCateD.textContent = Object.keys(category)[0];

    let itemHolderUl = document.createElement("ul");
    itemHolderUl.classList.add("collapsible");

    category[Object.keys(category)[0]].forEach(item => {
      //append to divType
      let itemHolderLi = document.createElement("li");
      let divItem = document.createElement("div");
      divItem.classList.add("food__menu--item");
      divItem.classList.add("collapsible-header");

      //append to divItem
      let divName = document.createElement("div");
      divName.classList.add("food__name");
      divName.textContent = item.name;

      let divPrice = document.createElement("div");
      divPrice.classList.add("food__price");
      divPrice.textContent = formatter.format(item.price);

      let divContent = document.createElement("div");
      divContent.classList.add("collapsible-body");

      divContent.textContent =
        "LKslda orem ipsum dolor sit amet orem ipsum dolor sit ametorem ipsum dolor sit amet ";


      divItem.appendChild(divName);
      divItem.appendChild(divPrice);
      itemHolderLi.appendChild(divItem);
      itemHolderLi.appendChild(divContent);
      itemHolderUl.appendChild(itemHolderLi);

    });
    divCateD.appendChild(itemHolderUl);
    divType.appendChild(divCateD);

  });

  foodMenu.appendChild(divType);
}

loadMenuSmall();

document.addEventListener("DOMContentLoaded", function () {
  var elems = document.querySelectorAll(".collapsible");
  var instances = M.Collapsible.init(elems, {
    inDuration: 500,
    outDuration: 300
  });
});