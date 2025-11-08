document.getElementById('registerBtn').addEventListener('click', registerUser);
document.getElementById('nameInput').addEventListener('keypress', function(e) {
    if(e.key === 'Enter') {
        registerUser();
    }
});

function registerUser() {
    const nameInput = document.getElementById('nameInput');
    const name = nameInput.value.trim();
    
    if(name === '') {
        alert('Please enter your name');
        nameInput.focus();
        return;
    }
    
    // Save name and redirect to quiz
    localStorage.setItem('username', name);
    window.location.href = 'quiz.html';
}

// Redirect to quiz if already registered
if(localStorage.getItem('username')) {
    window.location.href = 'quiz.html';
}