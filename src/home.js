import { content } from ".";
import homeImg from '../imgs/capu-cro-photo.png';

export function loadHomeScreen() {

    content.innerHTML = '';

    const hsTitle = document.createElement('h2');
    hsTitle.classList.add('h2-title');
    hsTitle.textContent = 'Home Page';

    const welcomePara = document.createElement('p');
    const emphasized = document.createElement('em');

    const contentPara = document.createElement('p');
    const belowPara = document.createElement('p');

    welcomePara.classList.add('welcome-para');
    contentPara.classList.add('content-para');

    emphasized.textContent = 'Brief history of croissant!';
    welcomePara.appendChild(emphasized);
    contentPara.textContent = "The French croissant originated from the Austrian kipferl, introduced to Paris around 1838–1839 by August Zang’s Boulangerie Viennoise. Originally a denser, brioche-like bread, it was transformed into the modern, flaky, laminated pastry by French bakers in the early 20th century. It became a staple of French breakfast culture by the 1920s. Shape & Ingredients: The name croissant means 'crescent' in French. While historically crescent-shaped, modern, high-quality, all-butter croissants are often made straight to distinguish them from margarine-based versions.";

    /*const newImg = document.createElement('img');*/
    
    const newImg = new Image();
    newImg.src = homeImg;
    newImg.classList.add('web-img');

    belowPara.classList.add('below-para');
    belowPara.textContent = 'The first documented introduction of the kipferl to France came in 1839, when Austrian artillery officer August Zang opened a Viennese bakery in Paris. Parisians quickly embraced both the kipferl and Viennese-style baking, and French bakers began producing their own versions. Around this time, the name “croissant,” meaning “crescent,” began appearing in historical records.'

    content.append(hsTitle, welcomePara, contentPara, newImg, belowPara);
}

