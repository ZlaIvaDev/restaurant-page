import { content } from ".";
import aboutImg from '../imgs/limited-pexels-photo-6534617.jpeg';

export function loadAboutScreen() {
    content.innerHTML = ``
    const h2Title = document.createElement('h2');
    h2Title.classList.add('h2-title');
    h2Title.textContent = 'About';

    const paraAbove = document.createElement('p');
    const paraBelow = document.createElement('p');
    const newImg = document.createElement('img');
    paraAbove.classList.add('paraAbove');
    paraBelow.classList.add('paraBelow');
    newImg.src = aboutImg;
    newImg.classList.add('aboutimg');

    paraAbove.textContent = `Lorem ipsum dolor sit amet consectetur adipisicing elit. Facilis voluptate suscipit numquam, impedit, aliquam non sint nostrum quia, provident quidem eaque. Magnam dignissimos dolorem in voluptatem porro voluptate ut optio!
            Minima facilis quasi praesentium error temporibus sint repudiandae cum nihil dolorem deleniti non nam, aspernatur eius corrupti culpa ab officiis! Vel, non. Aliquam neque voluptate ex reiciendis impedit ratione nesciunt.
            Obcaecati aliquam tempora nisi animi eveniet harum impedit asperiores, quibusdam vero hic quam ipsa rerum. Iusto eligendi unde voluptatem iste cumque ipsum vitae, officiis error, odit, obcaecati repellendus itaque quibusdam!`;
    paraBelow.textContent = `Lorem ipsum dolor sit amet consectetur adipisicing elit. Libero nesciunt doloribus incidunt, ex consectetur, sequi nam quibusdam, ab dignissimos cum unde officia perferendis nisi sint. Sed quidem deleniti ut ipsum.
            Minus labore ratione repellendus quaerat odio a enim officiis quas, rem necessitatibus veritatis numquam maxime quod repudiandae aut, cum distinctio architecto sint, veniam cumque earum dignissimos? Modi vero autem ratione?
            Totam quos culpa officia. Vel quam reiciendis, cupiditate sunt cumque est consectetur sint quas ullam, earum recusandae eligendi eum illum rerum quidem, iure beatae temporibus nesciunt dolorum voluptatum? Debitis, eius.
            Eligendi sint doloremque illum doloribus cum veniam fuga assumenda impedit! Totam explicabo sequi hic non quas, illo nihil quis, ex corrupti repellat harum id repudiandae enim sapiente, minus quisquam libero.
            Laborum culpa architecto nisi, omnis ullam explicabo atque unde doloribus maiores, officiis, illo facere? Nihil fugiat quidem ab quae facere vitae reprehenderit qui, recusandae, exercitationem voluptatem esse accusantium aut dolor?
            Quidem impedit, tenetur repellendus distinctio in aut tempore itaque ratione laborum quam. Odio, eum recusandae accusamus placeat, ab reprehenderit voluptate quae quis aliquam nostrum fugiat tempore omnis incidunt eius enim.`;


    content.append(h2Title, paraAbove,newImg, paraBelow);

}