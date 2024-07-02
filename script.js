document.getElementById('uploadForm').addEventListener('submit', function(e) {
    e.preventDefault();
    
    const fileInput = document.getElementById('fileInput').files[0];
    const formData = new FormData();
    formData.append('file', fileInput);

    fetch('https://your-heroku-backend-url.herokuapp.com/process-file', {
        method: 'POST',
        body: formData
    })
    .then(response => response.json())
    .then(data => {
        document.getElementById('rawData').innerText = `Raw Data: ${data.rawData}`;
        document.getElementById('dimensions').innerText = `Dimensions: ${data.dimensions}`;
    })
    .catch(error => console.error('Error:', error));
});
