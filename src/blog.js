import { content } from ".";
import blogImg from '../imgs/Page_Under_Construction.png';

export function loadBlogpost() {
    content.innerHTML = ``;

    const h2Title = document.createElement('h2');
    h2Title.classList.add('h2-title');
    h2Title.textContent = 'BlogPost';

    const para = document.createElement('p');
    const paraBelow = document.createElement('p');
    const newImg = new Image();
    newImg.src = blogImg;
    newImg.classList.add('blogimg');

    para.textContent = `Lorem ipsum, dolor sit amet consectetur adipisicing elit. Corrupti aspernatur blanditiis enim fuga earum sit ipsum ad incidunt aliquam? Voluptatibus sed pariatur laborum adipisci minus, eveniet quod animi odio ea!`;
    paraBelow.textContent = `Lorem ipsum dolor sit amet, consectetur adipisicing elit. Eius perferendis reiciendis suscipit eum veritatis! Facere earum autem temporibus quos pariatur illo magnam corporis vitae dolorem doloremque placeat, distinctio eveniet ea!
            Numquam ratione tempora rerum nisi natus illo impedit expedita beatae? Veniam obcaecati velit consectetur omnis excepturi accusantium sint eligendi quod dicta adipisci iusto, placeat, nobis doloremque dolores suscipit laborum sed.
            Nemo dolor quis aliquam vitae rem veritatis itaque temporibus eum at sequi, ipsam animi sit aspernatur sint omnis similique vel porro recusandae adipisci atque illum repellat maxime commodi? Libero, ut?`

    content.append(h2Title, para, newImg, paraBelow);        
}