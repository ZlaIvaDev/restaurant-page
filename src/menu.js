import { content } from ".";
import itemOneImg from '../imgs/beer-pastry-pexels-photo-209143.jpeg';
import itemTwoImg from '../imgs/coffee-croissant-pexels-photo-4472879.jpeg';
import itemThreeImg from '../imgs/cream-cheese-pexels-photo-892649.jpeg';
import itemFourImg from '../imgs/macarons-pexels-photo-1346340.jpeg';
import itemFiveImg from '../imgs/wine-cheese-pexels-photo-8350134.jpeg';

export function loadMenu() {
    content.innerHTML = ``;

    const hsTitle = document.createElement('h2');
    hsTitle.classList.add('h2-title');
    hsTitle.textContent = 'Menu';
    /* ITEM ONE */

    const divItemOne = document.createElement('div');
    divItemOne.classList.add('item');
    const flexItemOne = document.createElement('div');
    flexItemOne.classList.add('flexmenuitem');
    const imgOne = new Image();
    imgOne.src = itemOneImg;
    imgOne.classList.add('menu-img');

    const itemOneH3 = document.createElement('h3');
    const itemOnePara = document.createElement('p');
    const itemOnePrice = document.createElement('p');

    itemOneH3.textContent = `Beer n Pastries!`;
    itemOnePara.textContent = `Want a quick break and quick snack? We got you covered!
                    This set comes with alrge or small beer and variety of freshly baked goods!`;
    itemOnePrice.textContent = `15.-- €`;
    itemOnePrice.classList.add('price');

    flexItemOne.append(itemOneH3, itemOnePara, itemOnePrice);
    divItemOne.append(imgOne, flexItemOne);



    /* ITEM TWO */


    const divItemTwo = document.createElement('div');
    divItemTwo.classList.add('item');
    const flexItemTwo = document.createElement('div');
    flexItemTwo.classList.add('flexmenuitem');
    const imgTwo = new Image();
    imgTwo.src = itemTwoImg;
    imgTwo.classList.add('menu-img');

    const itemTwoH3 = document.createElement('h3');
    const itemTwoPara = document.createElement('p');
    const itemTwoPrice = document.createElement('p');

    itemTwoH3.textContent = `Coffee n croissant set`;
    itemTwoPara.textContent = `Fan favourite! Is there a better way to start of your day than croissant and coffee?
                    You can choose anything from esspresso to white mocha, everything goes well with croissants!`;
    itemTwoPrice.textContent = `8.50 €`
    itemTwoPrice.classList.add('price');

    flexItemTwo.append(itemTwoH3, itemTwoPara, itemTwoPrice);
    divItemTwo.append(flexItemTwo, imgTwo);
    /* flex2 + img ! */
    /* ITEM THREE */


    const divItemThree = document.createElement('div');
    divItemThree.classList.add('item');
    const flexItemThree = document.createElement('div');
    flexItemThree.classList.add('flexmenuitem');
    const imgThree = new Image();
    imgThree.src = itemThreeImg;
    imgThree.classList.add('menu-img');

    const itemThreeH3 = document.createElement('h3');
    const itemThreePara = document.createElement('p');
    const itemThreePrice = document.createElement('p');

    itemThreeH3.textContent = `ream Cheese Bonanza`;
    itemThreePara.textContent = `Enjoy 8 slices of high quality baguette topped with cream cheese and variety of toppings. 
                    Sweet, salty, savory, meaty, fruity etc. `;
    itemThreePrice.textContent = `12.-- €`;
    itemThreePrice.classList.add('price');

    flexItemThree.append(itemThreeH3, itemThreePara, itemThreePrice);
    divItemThree.append(imgThree, flexItemThree);
    /* ITEM FOUR */


    const divItemFour = document.createElement('div');
    divItemFour.classList.add('item');
    const flexItemFour = document.createElement('div');
    flexItemFour.classList.add('flexmenuitem');
    const imgFour = new Image();
    imgFour.src = itemFourImg;
    imgFour.classList.add('menu-img');

    const itemFourH3 = document.createElement('h3');
    const itemFourPara = document.createElement('p');
    const itemFourPrice = document.createElement('p');

    itemFourH3.textContent = `Macarons`;
    itemFourPara.textContent = `Try a variety of flavour macarons! In this set you will be anle to taste 10 different flavours!
                    we offer 6 standard flavours which include chocolate, vanilla, hazelnut, banana, caramel and orange,
                    while the rest 4 are seasonal limited edition! (blueberry, strawberry, cassis, walnut, matcha)`;
    itemFourPrice.textContent = `17.75 €`;
    itemFourPrice.classList.add('price');

    flexItemFour.append(itemFourH3, itemFourPara, itemFourPrice);
    divItemFour.append(flexItemFour, imgFour);

    /* ITEM FIVE */

    const divItemFive = document.createElement('div');
    divItemFive.classList.add('item');
    const flexItemFive = document.createElement('div');
    flexItemFive.classList.add('flexmenuitem');
    const imgFive = new Image();
    imgFive.src = itemFiveImg;
    imgFive.classList.add('menu-img');

    const itemFiveH3 = document.createElement('h3');
    const itemFivePara = document.createElement('p');
    const itemFivePrice = document.createElement('p');

    itemFiveH3.textContent = `Wine n Dine`;
    itemFivePara.textContent = `Enjoy our lovely set which includes selection of best baguettes, french cheese, wine and seasonal fruits!`;
    itemFivePrice.textContent = `42.-- €`;
    itemFivePrice.classList.add('price');

    flexItemFive.append(itemFiveH3, itemFivePara, itemFivePrice);
    divItemFive.append(imgFive, flexItemFive);

    content.append(divItemOne, divItemTwo, divItemThree, divItemFour, divItemFive);
}