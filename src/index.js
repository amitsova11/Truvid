import _ from 'lodash';


const videos = [
    {
        "title": "Kristen Wiig, Steve Carell In 'Despicable Me 3' First Trailer",
        "file": "https://s3.amazonaws.com/dev.content.origin/video/83a2ce54baaba0404072a3d4997d56db9b098e93_480.mp4",
        "description": "Gru's long lost twin (Drew) will emerge and there will be a theme of sibling rivalry. This is the first trailer for 'Despicable Me 3' in HD. Definitely enjoy it.",
        "thumbnail": "https://src.trvdp.com/images/83a2ce54baaba0404072a3d4997d56db9b098e93_1.png"
    },
    {
        "title": "Summer'",
        "file": "https://dev-exercise.s3.amazonaws.com/bensound-summer.mp3",
        "description": "Soft electronic dance royalty free music track. This track has a chill-out mood perfect for presentations, youtube videos, commercials and more.",
        "thumbnail": "https://dev-exercise.s3.amazonaws.com/summer.jpg"
    },
    {
        "title": "All Time Classic 'Iron Man'",
        "file": "https://s3.amazonaws.com/dev.content.origin/video/a2f1d3d56d0417ecddf4188e5ca71415e32b5458_480.mp4",
        "description": "For this week's all time classic we'll be looking at 'Iron Man'.",
        "thumbnail": "https://src.trvdp.com/images/a2f1d3d56d0417ecddf4188e5ca71415e32b5458_1.png"
    },
    {
        "title": "Deadpool 2 (Clean Trailer)",
        "file": "https://s3.amazonaws.com/dev.content.origin/video/40a63832ad27cfe34a642c1cc81f81aaffe4aa87_480.mp4",
        "description": "After surviving a near fatal bovine attack, a disfigured cafeteria chef (Wade Wilson) struggles to fulfill his dream of becoming Mayberry's hottest bartender while also learning to cope with his lost sense of taste. Searching to regain his spice for life, as well as a flux capacitor, Wade must battle ninjas, the yakuza, and a pack of sexually aggressive canines, as he journeys around the world to discover the importance of family, friendship, and flavor - finding a new taste for adventure and earning the coveted coffee mug title of World's Best Lover.",
        "thumbnail": "https://src.trvdp.com/images/40a63832ad27cfe34a642c1cc81f81aaffe4aa87_1.png"
    },
    {
        "title": "Review of ‘Super Mario Odyssey’",
        "file": "https://s3.amazonaws.com/dev.content.origin/video/f7be24937aa0664ebd85bc2515eec930705d8ff0_480.mp4",
        "description": "In the era of 3D video games, the Mario franchise set a benchmark for platformers with adventures full of clever details, exciting moments, and well-designed mechanics. Super Mario Odyssey continues the tradition on the Nintendo Switch with a bright, colorful entry that recaptures much of the fun gameplay that makes Mario endearing. But while the title suggests a daring, adventurous journey, the game itself is much more conservative than the medium-defining Mario games of past generations.",
        "thumbnail": "https://src.trvdp.com/images/f7be24937aa0664ebd85bc2515eec930705d8ff0_1.png"
    },
    {
        "title": "5b584b3fd1f8ed9cdc0a9fc697ca9f6ac8f1c117",
        "file": "https://s3.amazonaws.com/dev.content.origin/video/5b584b3fd1f8ed9cdc0a9fc697ca9f6ac8f1c117_480.mp4",
        "description": "Nintendo has revealed that popular multiplayer game Rocket League is coming to the Nintendo Switch before Black Friday. According to Psyonix, the Nintendo Switch port of Rocket League launches November 14th on the Nintendo eShop. The version made for Nintendo's newest console includes exclusive Battle-Cars and other special features. Rocket League first release in 2015 for the PlayStation 4 and Windows PC.",
        "thumbnail": "https://src.trvdp.com/images/5b584b3fd1f8ed9cdc0a9fc697ca9f6ac8f1c117_1.png"
    },
    {
        "title": "Lightsaber Display In London",
        "file": "https://s3.amazonaws.com/dev.content.origin/video/32e7e7499bf524e9771156c512dcb1737a48b989_480.mp4",
        "description": "To mark the release of Star Wars The Last Jedi Disney had two martial arts experts delighting Londoners with a spectacular lightsaber due. Shania West is a trained stunt fighter. Anton Simpson-Tidy is a world champion martial arts athlete. They were given Lightsabers to train with for a week before staging the duel on London’s Southbank. Star Wars: The Last Jedi is written and directed by Rian Johnson and produced by Kathleen Kennedy and Ram Bergman. J.J.",
        "thumbnail": "https://src.trvdp.com/images/32e7e7499bf524e9771156c512dcb1737a48b989_1.png"
    },
    {
        "title": "World of Warcraft - Battle for Azeroth",
        "file": "https://s3.amazonaws.com/dev.content.origin/video/c915b75f0d46cf50fced43e1093a708c9ad55644_480.mp4",
        "description": "World of Warcraft - Battle for Azeroth",
        "thumbnail": "https://src.trvdp.com/images/c915b75f0d46cf50fced43e1093a708c9ad55644_1.jpg"
    }
]
const playlist = document.getElementById("playlist");
const videoPlayer = document.getElementById('video');
const source = document.createElement("source");
let currentlyPlaying = 0;
let videoDivs=[];
let crazyModeIntervalID;

//----------------------
//Video Player Functions
//----------------------
function getRandomInt(max) {
    return Math.floor(Math.random() * Math.floor(max));
}

function handlePlay() {
    videoPlayer.play();
}

function handlePause() {
    videoPlayer.pause();
}

function handleVideoClick(filePath, video , currentVideoIndex) {
    videoPlayer.pause();
    source.setAttribute("src", filePath);
    for (let item of videoDivs){
        item.removeAttribute("class");
    }
    video.setAttribute("class", "selected-video");
    currentlyPlaying = currentVideoIndex;
    videoPlayer.load();
    videoPlayer.play();
}

function handleNext(){
    currentlyPlaying = currentlyPlaying + 1;
    if (currentlyPlaying === videos.length)
        currentlyPlaying = 0;
    const videoToSet = videos[currentlyPlaying];
    handleVideoClick(videoToSet.file, videoDivs[currentlyPlaying], currentlyPlaying);
}

function handleShuffleNext(){
    let randomInt = getRandomInt(videos.length);
    while (currentlyPlaying === randomInt){
        randomInt = getRandomInt(videos.length);
    }
    currentlyPlaying = randomInt;
    const videoToSet = videos[currentlyPlaying];
    handleVideoClick(videoToSet.file, videoDivs[currentlyPlaying], currentlyPlaying);
}

function handlePrevious(){
    currentlyPlaying = currentlyPlaying -1;
    if (currentlyPlaying < 0)
        currentlyPlaying = videos.length-1;
    const videoToSet = videos[currentlyPlaying];
    handleVideoClick(videoToSet.file, videoDivs[currentlyPlaying], currentlyPlaying);
}

function initCrazyMode() {
    let interval = getRandomInt(2000);
    setTimeout(handleShuffleNext, interval);
}

function initShuffleMode() {
    handleShuffleNext();
    nextButton.onclick = ()=>handleShuffleNext();
}

function checkScroll() {
    let fraction = 0.5; // Play when 80% of the player is visible.

        let video = videoPlayer;

        let x = video.offsetLeft, y = video.offsetTop, w = video.offsetWidth, h = video.offsetHeight, r = x + w, //right
            b = y + h, //bottom
            visibleX, visibleY, visible;

        visibleX = Math.max(0, Math.min(w, window.pageXOffset + window.innerWidth - x, r - window.pageXOffset));
        visibleY = Math.max(0, Math.min(h, window.pageYOffset + window.innerHeight - y, b - window.pageYOffset));

        visible = visibleX * visibleY / (w * h);

        if (visible > fraction) {
            video.play();
        } else {
            video.pause();
        }
}
window.addEventListener('scroll', checkScroll, false);


//-------------------------
//Set video player buttons with original mode as default
//-------------------------
const nextButton = document.getElementById("next-button");
nextButton.onclick = ()=>handleNext();
const previousButton = document.getElementById("previous-button");
previousButton.onclick = ()=>handlePrevious();

//----------------------
//Set modes
//----------------------
const originalMode = document.getElementById("original-mode");
const shuffleButton = document.getElementById("shuffle-mode");
const crazyButton = document.getElementById("crazy-mode");

originalMode.onclick = ()=>{
    clearInterval(crazyModeIntervalID);
    crazyButton.removeAttribute("class");
    shuffleButton.removeAttribute("class");
    originalMode.setAttribute("class","selected-mode");
    videoPlayer.removeEventListener('ended',function(){handleShuffleNext();});
    videoPlayer.addEventListener('ended',function(){handleNext();},false);
    nextButton.onclick = ()=>handleNext();
}

shuffleButton.onclick = ()=>{
    clearInterval(crazyModeIntervalID);
    crazyButton.removeAttribute("class");
    originalMode.removeAttribute("class");
    shuffleButton.setAttribute("class","selected-mode");
    videoPlayer.removeEventListener('ended',function(){handleNext();});
    videoPlayer.addEventListener('ended',function(){initShuffleMode();});
}

crazyButton.onclick = ()=>{
    originalMode.removeAttribute("class");
    shuffleButton.removeAttribute("class");
    crazyButton.setAttribute("class","selected-mode");
    crazyModeIntervalID = setInterval(function(){ initCrazyMode() }, 2000);
}

//------------------------------
//Set original mode as default
//------------------------------
videoPlayer.addEventListener('ended',function(){handleNext();},false);
originalMode.setAttribute("class", "selected-mode");

//----------------------
//Set Video Playlist
//----------------------
videos.map((item,index)=> {
    const video = document.createElement("div");
    const title = document.createElement("div");
    title.innerText = item.title;
    title.className= "video-title"
    const image = document.createElement("img");
    image.setAttribute("src", item.thumbnail);
    image.className="video-thumbnail"
    const description = document.createElement("div");
    description.innerText = item.description;
    description.className="video-description"
    video.appendChild(title);
    video.appendChild(image);
    video.appendChild(description);
    //set first video as default
    if (index === 0) {
        video.setAttribute("class", "selected-video")
        source.setAttribute("src", item.file);
        videoPlayer.appendChild(source);
        videoPlayer.load();
    }
    video.onclick = ()=>handleVideoClick(item.file, video, index);
    playlist.appendChild(video);
    videoDivs.push(video);
    return;
});


