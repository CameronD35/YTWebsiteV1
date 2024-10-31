function createLinkBox(nameArray, parent, textArray, imgArray, linksArray){
    let boxParent = document.getElementById(parent);
    console.log(document.getElementById(parent));
    for(let i = 0; i < nameArray.length; i++){
        let hyperlink = boxParent.appendChild(document.createElement('a'))
        hyperlink.setAttribute('href', linksArray[i]);
        hyperlink.setAttribute('id', `hyperlink${i}`);
        hyperlink.setAttribute('style', 'text-decoration: none; color: black;')
        let parentDiv = hyperlink.appendChild(document.createElement('div'));
        parentDiv.setAttribute('class', 'link-button');
        parentDiv.setAttribute('id', nameArray[i]);
        parentDiv.appendChild(document.createElement('img')).setAttribute('src', imgArray[i]);
        parentDiv.appendChild(document.createElement('p')).textContent = textArray[i];
    }
}

createLinkBox(['youtube', 'youtube-shorts', 'twitter', 'instagram'], 'all-box', 
['Mario Stereo', 'Mario Stereo Shorts', '@MarioStereo', 'mario.stereo.yt'], ['youtube-logo.png', 'youtubeshorts-logo.png', 'twitter-logo.png', 'instagram-logo.png'],
['https://www.youtube.com/c/MarioStereoIsLitty', 'https://www.youtube.com/channel/UCAbG_LO4YxP8w_I12Q6cH1A', 'https://twitter.com/MarioStereo', 'https://www.instagram.com/mario.stereo.yt/']);


let elementsArray = ['youtube', 'youtube-shorts', 'twitter', 'instagram'];
let linksBG = document.querySelector('.links-bg');
let linksTitle = document.getElementById('linksTitle')

let gradientArray = [
    'left bottom, #111 10%, rgb(172, 9, 9) 35%, #d62929 50%, #d24525 65%, #111 80%',
    'left bottom, #111 10%, rgb(172, 9, 9) 35%, #d62929 50%, #d24525 65%, #111 80%',
    'left bottom, #111 10%, #51d1f9 35%, #298bd6 50%, #254dd2 65%, #111 80%',
    'left bottom, #111 10%, #feda75 32%, #fa7e1e 44%, #d62976 56%, #4f5bd5 68%, #111 80%'
]
for(let i = 0; i < elementsArray.length; i++){
    document.getElementById(elementsArray[i]).addEventListener('mouseover', () => {
        linksBG.classList.add('box');
        document.documentElement.style.setProperty('--bgGradient', gradientArray[i]);
        linksTitle.style.setProperty('color', 'rgba(255, 255, 255, 0.5)');
        //linksTitle.style.setProperty('-webkit-text-stroke', '1px #fff');

    });
    document.getElementById(elementsArray[i]).addEventListener('mouseout', () => {
        linksBG.classList.remove('box');
        document.documentElement.style.setProperty('--bgGradient', '#111');
        linksTitle.style.setProperty('color', 'white');
        //linksTitle.style.removeProperty('-webkit-text-stroke');
    });
}