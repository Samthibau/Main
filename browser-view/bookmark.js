function showBookmarkApplet(){
    // removed inability to bookmark on file:// pages
    document.getElementById("backdropbookmarks").style.opacity = "1"
    document.getElementById("backdropbookmarks").style.pointerEvents = "auto"
    document.getElementById('bookmarkname').value = document.getElementsByClassName('activewbv')[0].getTitle()
    document.getElementById('bookmarkurl').value = document.getElementsByClassName('activewbv')[0].getURL()
    document.getElementById('bookmarkapplet').style.top = "72px"
    document.getElementById('bookmarkapplet').style.opacity = "1"
    document.getElementById('bookmarkapplet').style.pointerEvents = "auto"
}

function hideBookmarkApplet(){
    document.getElementById("backdropbookmarks").style.opacity = "0"
    document.getElementById("backdropbookmarks").style.pointerEvents = "none"
    document.getElementById('bookmarkapplet').style.top = "0px"
    document.getElementById('bookmarkapplet').style.opacity = "0"
    document.getElementById('bookmarkapplet').style.pointerEvents = "none"
}