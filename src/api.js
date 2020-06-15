import {subscribeOnMediaChange, subscribeOnTime, handleNext,handlePause,handlePlay,handlePrevious,initShuffleMode} from "./index";


function play() {
    handlePlay();
}

function pause() {
    handlePause();
}

function playNext() {
    handleNext();
}

function playPrevious() {
    handlePrevious();
}

function shuffle() {
    initShuffleMode();
}

function subscribeToOnTimeUpdate(func) {
    subscribeOnTime(func);
}

function subscribeToMediaChange(func) {
    subscribeOnMediaChange(func)
}




