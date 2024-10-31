const APIKey = "AIzaSyCJ6uuy0Y5b5yeI8hyd5KxVzl9oVg4ICzA";
const youtubeID = "UCUM_sfAQDD1awJ7F0UDYHyQ";

//const subCount = document.querySelector(".sub-count");

/* const getYoutubeSubs = async (maxResults, length) => {
    const getData = await axios.get(
        `https://www.googleapis.com/youtube/v3/search?part=snippet&channelId=${youtubeID}&maxResults=${maxResults}&order=date&type=video&videoDuration=${length}&key=${APIKey}`
        );
    let titles = [];
    for(let i = 0; i < maxResults; i++){
        titles.push(getData)//.data.items[i].snippet.title);
        //document.getElementById('videoBox').createElement('p').textContent = titles[i];
    }
    console.log(getData);
    //return ytSubs = getData.data.items;
}

getYoutubeSubs(10, 'any'); */

let regEx = /\//;

document.getElementById('streams').style.setProperty('font-size', `24px`);
document.getElementById('streams').style.setProperty('color', `#BF0EFC`);


createVideoCards(20);

let thumbnail = document.querySelectorAll('.thumbnail');
let page = document.querySelectorAll('.page');
let videoTitle = document.querySelectorAll('.videoName');
let viewCount = document.querySelectorAll('.views');
let nameContainer = document.querySelectorAll('.nameContainer');
let shadows = document.querySelectorAll('.imgShadow');
let containers = document.querySelectorAll('.container');
let background = document.querySelector('.videos-bg');
let selector = document.getElementById('selectorbg');
let pageContainer = document.querySelector('.pageContainer')

let i = 0;

//console.log(thumbnail);

let thumbnailArray = ['youtubeThumbnail.jpg', 'youtubeThumbnail2.jpg', 'youtubeThumbnail3.jpg', 'youtubeThumbnail4.jpg'];
let titleArray = ['WHATS GOODIE GUYS', 'LATE NIGHT STREAM CAUSE WHY NOT', 'FIRST DAY TASK: BLOW UP NEW PC', '🔴 Fortnite LIVE - We Back!! - Just Chillin',
'sdlkfjulgihrosdgyiheruygfbrdifluhsdfouiewgrfrueryghfoeuryfhiredufigyrhedbgiuyer'];

const createElements = async () => {
    thumbnail.forEach((e) => {e.setAttribute('src', `Image_Assets/${randomFromArray(thumbnailArray)}`);})
    videoTitle.forEach((e) => {
        e.textContent = randomFromArray(titleArray);
    });
    viewCount.forEach((e) => {e.textContent = '123';});

}

createElements();

for(let i = 0; i < containers.length; i++){
    containers[i].addEventListener('mouseover', () => {
        shadows[i].style.opacity = 1;
        nameContainer[i].style.opacity = 1;
        if(videoTitle[i].scrollWidth > videoTitle[i].clientWidth){
            createScrollAnimation(videoTitle[i], (videoTitle[i].scrollWidth - videoTitle[i].clientWidth), nameContainer[i]);
        }
        document.documentElement.style.setProperty('--bgImage', `url(${thumbnail[i].getAttribute('src')})`)
        background.classList.add('bgImage');
        background.style.opacity = 1;
    });

    containers[i].addEventListener('mouseout', () => {
        shadows[i].style.opacity = 0;
        nameContainer[i].style.opacity = 0; 
        document.documentElement.style.setProperty('--bgImage', `none`)
        background.classList.remove('bgImage');
        background.style.opacity = 0;
    });

    nameContainer[i].addEventListener('mouseover', () => {
        videoTitle[i].style.transform = `translateY(-2.875vw)`;
        videoTitle[i].style.opacity = 0;

        viewCount[i].style.transform = `translateY(${window.innerWidth <= 550 ? '-5vw' : '-2.625vw'})`;
        viewCount[i].style.opacity = 1;
    });

    nameContainer[i].addEventListener('mouseout', () => {
        videoTitle[i].style.transform = 'translateY(0px)';
        videoTitle[i].style.opacity = 1;
        viewCount[i].style.transform = 'translateY(0px)';
        viewCount[i].style.opacity = 0;
    });
}

function randomNum(num){
    return (Math.round(Math.random()*num));
}

function randomFromArray(array) {
    return array[(Math.floor((Math.random()*array.length)))];
}

function createVideoCards(length){
    for(let i = 0; i < length; i++){
        let currentContainer = document.getElementById('page').appendChild(document.createElement('div'))
        currentContainer.classList.add('container');

        let nameContainerCurrent = currentContainer.appendChild(document.createElement('div'));
        nameContainerCurrent.classList.add('nameContainer');

        let currentShadow = currentContainer.appendChild(document.createElement('div'));
        currentShadow.classList.add('imgShadow');

        let currentThumbnail = currentContainer.appendChild(document.createElement('img'));
        currentThumbnail.classList.add('thumbnail');
        
        let currentTitle = nameContainerCurrent.appendChild(document.createElement('p'));
        currentTitle.classList.add('videoName');

        let currentViews = nameContainerCurrent.appendChild(document.createElement('p'));
        currentViews.classList.add('views');
    }
}

function createScrollAnimation(elem, dist){
    document.documentElement.style.setProperty('--scrollDistance', `-${dist - 3}px`)
    elem.style.animation = `3s linear infinite scrollText`;
    elem.style.boxShadow = 'inset -8px 0px -6px 6px , inset 8px 0px -6px 6px';
}


window.addEventListener('scroll', function() {
    let bottomShadow = document.getElementById('bottomShadow');
    if(window.scrollY < (document.body.offsetHeight - window.innerHeight)){
        bottomShadow.style.opacity = 1;
    } else {
        bottomShadow.style.opacity = 0;
    }
});