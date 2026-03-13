import "./styles.css";
import { loadHomeScreen } from "./home";
import { loadMenu } from "./menu";
import { loadAboutScreen } from "./about";
import { loadBlogpost } from "./blog";

console.log('working yet?');



const content = document.querySelector('.content');
export { content };

const btns = document.querySelectorAll('button');

btns.forEach(button => {
    button.addEventListener('click', function(e) {

        const action = e.currentTarget.dataset.action;

        switch(action) {
            case 'menu':
                loadMenu();
                break;
            case 'about':
                loadAboutScreen();
                break;
            case 'home':
                loadHomeScreen();
                break;
            case 'blog':
                loadBlogpost();
                break;
            default:
                console.log('default is home page!')
        }
    })
})

content.appendChild(loadHomeScreen());