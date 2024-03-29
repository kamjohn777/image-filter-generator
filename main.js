$(document).ready(function(){
    const inputBox = $('.input-box');
    const labels = ['grayscale', 'sepia', 'blur', 'brightness', 'contrast', 'hue-rotate', 'saturate', 'invert', 'opacity'];
    for (let i = 0; i < labels.length - 1; i++) {
        let clone = inputBox.clone();
        clone.find('span').text(labels[i+1]);
        $('.filter').append(clone);
    }

    // Add a change event listener to each range input element
    $('input[type="range"]').change(function() {
        // Get the current values of all the range inputs
        let grayscale = $('#grayscale').val();

        // Update the filter property of the image
        $('#image').css('filter', 'grayscale('+ grayscale +'%)');
    });

    // allows user to upload image file 
    $('#imageUpload').change(function(){
        let file = this.files[0]; // Get the selected file
        let url = URL.createObjectURL(file); // Create a URL for the file
        $('#image').attr('src', url); // Set the src of the image element to the file URL
    });
});