// content_script.js
document.addEventListener('DOMContentLoaded', function() {
    var popup = document.createElement('div');
    popup.style.position = 'fixed';
    popup.style.width = '300px';
    popup.style.height = '200px';
    popup.style.backgroundColor = 'white';
    popup.style.color = 'black';
    popup.style.top = '50%';
    popup.style.left = '50%';
    popup.style.transform = 'translate(-50%, -50%)';
    popup.style.zIndex = '1000';
    popup.style.padding = '20px';
    popup.style.boxShadow = '0 4px 8px rgba(0,0,0,0.1)';
    popup.style.borderRadius = '10px';
    popup.style.textAlign = 'center';
    popup.innerHTML = '<h1>Welcome!</h1><p>This is a custom popup for www.dreammvp.com</p>';

    document.body.appendChild(popup);
});
