const APIKey = "AIzaSyCJ6uuy0Y5b5yeI8hyd5KxVzl9oVg4ICzA";
const youtubeID = "UCUM_sfAQDD1awJ7F0UDYHyQ";

const subCount = document.querySelector(".sub-count");

document.getElementById('about').style.setProperty('font-size', `24px`);
document.getElementById('about').style.setProperty('color', `#BF0EFC`);

const getYoutubeData = async (keyString) => {
    const getData = await axios.get(
        `https://www.googleapis.com/youtube/v3/channels?part=statistics&id=${youtubeID}&key=${APIKey}`
        );
    console.log(getData);
    return ytSubs = getData.data.items[0].statistics[keyString];
}


async function main(time, elementID, amount, func) {
        const mainElement = document.getElementById(elementID);
        let startValue = 0;
        let endValue = await func;
        let counter = setInterval(function() {
            startValue += amount;
            mainElement.innerHTML = Math.floor(startValue);
            if(startValue >= endValue){
                mainElement.innerHTML = Math.floor(startValue);
                clearInterval(counter);
            }
        }, time); 
}; 
main((5000/1000), 'sub', 1.5, getYoutubeData('subscriberCount'));
main((5000/(85*2)), 'view', 496, getYoutubeData('viewCount'));
main((5000/1000), 'video', 1.5, getYoutubeData('videoCount'));


function typeAni(element, speed) {
    let mainElement = document.getElementById(element);
    let text = mainElement.innerText;
    let startValue = 0;
    let endValue = text.length;
    let counter = setInterval(function(){
        startValue++;
        mainElement.textContent = (text.substring(0, startValue) + '|');
        if(startValue === endValue){
            clearInterval(counter);
            mainElement.textContent = text.substring(0, text.length);
        }
    }, speed);
}

//typeAni('desc', 40);


/* function createLinkBox(nameArray, parent, textArray, imgArray){
    boxParent = document.getElementById(parent);
    for(let i = 0; i < nameArray.length; i++){
        boxParent.appendChild(document.createElement('a')).appendChild(document.createElement('div')
        .setAttribute('class', 'link-button').setAttribute('id', nameArray[i]));
        let currentElement = document.getElementById(name);
        currentElement.appendChild('img').setAttribute('src', imgArray[i]);
        currentElement.appendChild('p').textContent(textArray[i]);
    }
} */

