/**
 * Created by Sokol on 30.01.2017.
 */

const button = document.createElement("button");
button.innerText = 'Click me';

button.onclick = () => {
    System.import('./image_viewer').then(module => {
        module.default()
    });
};

document.body.appendChild(button);