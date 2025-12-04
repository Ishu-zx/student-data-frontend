const user_api = 'https://student-data-api-2jng.onrender.com/api/users'

const loginForm = document.querySelector('#loginForm')
const registerForm = document.querySelector('#registerForm')

if (registerForm) {


    registerForm.addEventListener('submit', async (e) => {
        e.preventDefault()
        const username = document.querySelector('#registerUsername').value
        const email = document.querySelector('#registerEmail').value
        const password = document.querySelector('#registerPassword').value
        
        console.log(username, email, password)
        const res = await fetch(`${user_api}/register`, {
            method: 'POST',
            headers: { 'Content-Type': 'application/json' },
            body: JSON.stringify({ username, email, password })
        })
        const data = await res.json()
        if (res.ok) {
            alert('Registeration successfully. You can login now.')
            window.location.href = '/index.html'
        } else {
            alert(data.message || 'Registeration Failed.')
        }
    })
}
if (loginForm) {
    loginForm.addEventListener('submit', async (e) => {
        const username = document.querySelector('#loginUsername').value
        const password = document.querySelector('#loginPassword').value
        e.preventDefault()
        console.log(username, password)
        const res = await fetch(`${user_api}/login`, {
            method: 'POST',
            headers: { 'Content-Type': 'application/json' },
            body: JSON.stringify({ username, password })
        })
        const data = await res.json()
        console.log(data)
        if (res.ok) {
            localStorage.setItem('token', data.token)
            window.location.href = 'students.html'
        } else {
            alert(data.message || 'Login failed.')
        }
    })
}
