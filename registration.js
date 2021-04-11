document.addEventListener('DOMContentLoaded', registrationForm)

function registrationForm() {
    let div = document.createElement('div');
    div.classList.add('card');
    div.setAttribute('style', "width: 500px");
    document.body.appendChild(div);

    let divCardBody = document.createElement("div");
    div.appendChild(divCardBody);
    divCardBody.classList.add('card-body');

    divCardBody.insertAdjacentHTML("afterbegin", `<h5 class="card-title">
        Название карточки</h5>`);
    divCardBody.insertAdjacentHTML("beforeend", `<h6 class="card-subtitle mb-2 text-muted" >
        Подзаголовок карты</h6>`);
}

