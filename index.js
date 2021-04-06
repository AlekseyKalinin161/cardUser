const checkBox = document.querySelector('.form-check-input')
checkBox.addEventListener('change', checkBoxToggle)

const userName = document.getElementById("validationCustom01")
userName.addEventListener('input', getUserName)

const userSurName = document.getElementById("validationCustom02")
userSurName.addEventListener('input', getUserSurName)

const userLogin = document.getElementById("validationCustomUsername")
userLogin.addEventListener('input', getUserLogin)

const userCity = document.getElementById("validationCustom03")
userCity.addEventListener('input', getUserCity)

const userState = document.getElementById("validationCustom04")
userState.addEventListener('change', getUserState)

const buttonSubmit = document.querySelector('.btn-primary')
buttonSubmit.setAttribute("disabled", "disabled");
buttonSubmit.addEventListener('click', submit)

let checkBoxVal = false;
let userNameVal = false;
let UserSurNameVal = false;
let userLoginVal = false;
let userCityVal = false;
let userStateVal = false;
let MODEL = {}

let users = [
    {
        name: "Иван",
        surname: "Петров",
        login: "@ВТБ",
        city: "Москва",
        state: "Московская",
        ID: 1617305845931
    }
];

function checkBoxToggle() {
    checkBoxVal = !checkBoxVal;
    if (checkBoxVal === true) {
        buttonSubmit.removeAttribute("disabled");
    } else {
        buttonSubmit.setAttribute("disabled", "disabled");
    }
}

function getUserName(event) {
    userNameVal = event.target.value;
}

function getUserSurName(event) {
    UserSurNameVal = event.target.value;
}

function getUserLogin(event) {
    userLoginVal = '@' + event.target.value;
}

function getUserCity(event) {
    userCityVal = event.target.value;
}

function getUserState(event) {
    userStateVal = event.target.value;
}

function submit() {
    if (!userNameVal && !UserSurNameVal && !userLoginVal && !userCityVal && !userStateVal) {
        alert('Ты че Сука??')
        return
    }


    MODEL = {
        name: userNameVal,
        surname: UserSurNameVal,
        login: userLoginVal,
        city: userCityVal,
        state: userStateVal,
        id: Date.now()
    }
    console.log(MODEL);
    return MODEL

}

//ToDo Реализация механизма рендаринга массива юзеров, реализация добавления юзеров в массиво юзеров

