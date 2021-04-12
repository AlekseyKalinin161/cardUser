document.addEventListener('DOMContentLoaded', addRegistrationForm.bind(null, submitHandler))

function addRegistrationForm(handler) {
    let div = document.createElement('div');
    div.classList.add('card');
    div.setAttribute('style', "width: 500px");
    document.body.appendChild(div);

    let divCardBody = document.createElement("div");
    div.appendChild(divCardBody);
    divCardBody.classList.add('card-body');

    const form = document.createElement('form')
    form.addEventListener('submit', handler)
    divCardBody.appendChild(form);

    form.insertAdjacentHTML("afterbegin", `
<label class="form-label">Login</label>
<input name="login" class="form-control mb-3">
<label class="form-label">Password</label>
<input type="password" name="password" class="form-control mb-3">
<button type="submit" class="btn btn-primary mb-3">Submit</button>`);

}

function submitHandler(event) {
    event.preventDefault();
    const names = ['login', 'password'];
    for (const input of event.target) {
        if (!names.includes(input.name)) return;
        const user = {
            [input.name]: input.value
        }
        console.log(user);
    }
}

// const formData = new FormData(document.querySelector('form'))
