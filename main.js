$(document).ready(function(){
    const inputBox = $('.input-box');
    const labels = ['grayscale', 'sepia', 'blur', 'brightness', 'contrast', 'hue-rotate', 'saturate', 'invert', 'opacity'];
    for (let i = 0; i < 7; i++) {
        let clone = inputBox.clone();
        clone.find('span').text(labels[i+1]);
        $('.filter').append(clone);
    }
});