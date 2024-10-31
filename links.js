// SETUP


document.getElementById('links').style.setProperty('font-size', `24px`);
document.getElementById('links').style.setProperty('color', `#BF0EFC`);

let borderRadiusArr = [0, 0, 0, 0];
let reducedMotion = false;

let elementsArray = ['youtube', 'youtube-shorts', 'twitter', 'instagram'];
let linksBG = document.querySelector('.links-bg');
let linksTitle = document.getElementById('linksTitle');
let RMRef = {
    toggle: document.querySelector('.RMToggle'),
    button: document.querySelector('.RMButton')
}

let gradientArray = [
    'left bottom, #111 15%, rgb(172, 9, 9) 35%, #d62929 50%, #d24525 65%, #111 80%',
    'left bottom, #111 15%, rgb(172, 9, 9) 35%, #d62929 50%, #d24525 65%, #111 80%',
    'left bottom, #111 15%, #51d1f9 35%, #298bd6 50%, #254dd2 65%, #111 80%',
    'left bottom, #111 15%, #feda75 32%, #fa7e1e 44%, #d62976 56%, #4f5bd5 68%, #111 80%'
];

// PROGRAM
createLinkBox(['youtube', 'youtube-shorts', 'twitter', 'instagram'], 'all-box', 
['Mario Stereo', 'Mario Stereo Shorts', '@MarioStereo', 'mario.stereo.yt'], ['youtube-logo.png', 'youtubeshorts-logo.png', 'twitter-logo.png', 'instagram-logo.png'],
['https://www.youtube.com/c/MarioStereoIsLitty', 'https://www.youtube.com/channel/UCAbG_LO4YxP8w_I12Q6cH1A', 'https://twitter.com/MarioStereo', 'https://www.instagram.com/mario.stereo.yt/'], 25);

for(let i = 0; i < elementsArray.length; i++){
    document.getElementById(elementsArray[i]).addEventListener('mouseenter', () => {
        if(!reducedMotion){linksBG.classList.add('box');}
        document.documentElement.style.setProperty('--bgGradient', gradientArray[i]);
        linksBG.offsetWidth;

    });
    document.getElementById(elementsArray[i]).addEventListener('mouseleave', () => {
        if(!reducedMotion){linksBG.classList.remove('box');}
        document.documentElement.style.setProperty('--bgGradient', '#111');
        linksBG.offsetWidth;
    });
}

RMRef.button.addEventListener('click', () => {
    if(reducedMotion){
        reducedMotion = false;
        RMRef.button.style.backgroundPositionX = '100%';
        RMRef.toggle.style.transform = 'translateX(0%)';
    } else {
        reducedMotion = true;
        RMRef.button.style.backgroundPositionX = '0%';
        RMRef.toggle.style.transform = 'translateX(115%)';
    }
});

// FUNCTIONS
function createLinkBox(nameArray, parent, textArray, imgArray, linksArray, radius){
    let boxParent = document.getElementById(parent);
    console.log(document.getElementById(parent));
    for(let i = 0; i < nameArray.length; i++){

        // Create the border radius fot each of the boxes
        borderRadiusArr = [0, 0, 0, 0];
        borderRadiusArr[i] = radius;

        if(i == 2){ borderRadiusArr = [0, 0, 0, radius]}
        if(i == 3){ borderRadiusArr = [0, 0, radius, 0]}

        // Creates all the elements on the page and sets their respective classes and attributes
        let hyperlink = boxParent.appendChild(document.createElement('a'))
        hyperlink.setAttribute('href', linksArray[i]);
        hyperlink.setAttribute('target', '_blank')
        hyperlink.setAttribute('id', `hyperlink${i}`);
        hyperlink.setAttribute('style', 'text-decoration: none; color: black;')
        let parentDiv = hyperlink.appendChild(document.createElement('div'));
        parentDiv.setAttribute('class', 'link-button');
        parentDiv.style.borderRadius = borderRadiusArr.join('px ') + 'px';
        parentDiv.setAttribute('id', nameArray[i]);
        parentDiv.appendChild(document.createElement('img')).setAttribute('src', `Image_Assets/${imgArray[i]}`);
        parentDiv.appendChild(document.createElement('p')).textContent = textArray[i];
    }
}

function changeButtonState() {
    if(0){
    }
}