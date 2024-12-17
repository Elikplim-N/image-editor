// Trigger the hidden file input when upload button is clicked
document.getElementById('uploadBtn').addEventListener('click', function() {
    document.getElementById('imageInput').click();
});

// Preview the selected image
document.getElementById('imageInput').addEventListener('change', function() {
    const file = this.files[0];
    if (file) {
        const preview = document.getElementById('preview');
        preview.src = URL.createObjectURL(file);
        preview.style.display = 'block';
    }
});

// Define JavaScript functions for the action buttons
function functionOne() {
    // Add your code here
    alert('Function One executed.');
}

function functionTwo() {
    // Add your code here
    alert('Function Two executed.');
}
document.getElementById('imageInput').addEventListener('change', function() {
    const file = this.files[0];
    if (file) {
        // Check if the file is an image
        if (file.type.startsWith('image/')) {
            const preview = document.getElementById('preview');
            preview.src = URL.createObjectURL(file);
            preview.style.display = 'block';
        } else {
            alert('Please upload a valid image file.');
            this.value = ''; // Reset the input
        }
    }
});