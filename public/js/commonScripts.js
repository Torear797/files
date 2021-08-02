function copyToClipboard() {
    if (document.getElementById("CryptText").value.length > 0) {
        document.getElementById("CryptText").select();
        document.execCommand('copy');
        window.getSelection().removeAllRanges();
        showToast("Текст скопирован");
    }
}

function setCharCounter(isPassword = false) {
    const inputField = document.getElementById("InputText").value.length;
    let outputField = document.getElementById("CryptText");
    if (outputField !== null)
        outputField = outputField.value.length;

    const inputLabel = document.getElementById("LabelText");
    const outputLabel = document.getElementById("CryptLabel");

    if (outputField !== null)
        outputLabel.innerHTML = "Результат" + " (" + outputField + ")";

    inputLabel.innerHTML = "Текст" + " (" + inputField + ")";

    if (isPassword) {
        const passField = document.getElementById("password").value.length;
        const passLabel = document.getElementById("password_label");
        passLabel.innerHTML = "Пароль" + " (" + passField + ")";
    }
}

function NewClick() {
    document.getElementById("CryptText").value = "";
}

function ClearFields(isPassword = false) {
    const cryptText = document.getElementById("CryptText");
    const inputText = document.getElementById("InputText");

    if (inputText.value !== '') {
        if (cryptText !== null && cryptText.value !== '') {
            cryptText.value = '';
            cryptText.blur();
            cryptText.parentNode.classList.remove('is-dirty');
        }

        inputText.value = '';
        inputText.blur();
        inputText.parentNode.classList.remove('is-dirty');

        if (isPassword) {
            const password = document.getElementById("password");
            password.value = '';
            password.blur();
            password.parentNode.classList.remove('is-dirty');
        }

        setCharCounter(isPassword);
        showToast("Поля очищены");
    }
}

function showToast(text) {
    document.querySelector('#toast').MaterialSnackbar.showSnackbar({message: text});
}

function closeMenu() {
    document.querySelector(".mdl-layout__obfuscator").click();
}

function setPageMarkers(oldId, newId) {
    let oldMenuItem = document.getElementById("menu_" + oldId);
    if (oldMenuItem) oldMenuItem.classList.remove('menuItemSelected');

    let newMenuItem = document.getElementById("menu_" + newId);
    if (newMenuItem) newMenuItem.classList.add('menuItemSelected');

    let oldNavigationTab = document.getElementById("nav_" + oldId)
    let nextNavigationTab = document.getElementById("nav_" + newId)

    if (oldNavigationTab) oldNavigationTab.classList.remove('navigationIsSelect');
    if (nextNavigationTab) nextNavigationTab.classList.add('navigationIsSelect');
}

function load_js() {
    const head = document.getElementsByTagName('head')[0];

    if (!(typeof (componentHandler) == 'undefined')) {
        componentHandler.upgradeAllRegistered();
    }

/*    if (document.getElementById("DragAndDropScript") !== undefined) {
        head.removeChild(document.getElementById("DragAndDropScript"));
    }*/

    /* const script = document.createElement('script');
     script.src = 'public/js/DragAndDropScript.js';
     script.id = 'DragAndDropScript';
     head.appendChild(script);*/
}

function setTitle(id) {
    let pageTitle;

    switch (id) {
        case "home": {
            pageTitle = "Главная";
            break;
        }
        case "base64Form": {
            pageTitle = "Base 64";
            break;
        }
        case "mathFunc": {
            pageTitle = "Математические функции";
            break;
        }
        case "mathSystems": {
            pageTitle = "Системы счисления";
            break;
        }
        case "qr": {
            pageTitle = "Генератор QR";
            break;
        }
        default : {
            pageTitle = id;
        }
    }
    document.title = "Шифрование онлайн | " + pageTitle;
    document.getElementById("title").innerHTML = pageTitle;
}