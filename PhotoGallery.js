function picGallery(pics) {
    var expandPic = document.getElementById("expandedPic");
    var picText = document.getElementById("picTxt");
    expandPic.src = pics.src;
    picText.innerHTML = pics.alt;
    expandPic.parentElement.style.display = "block";
}