const controller = {};
controller.register = (data) => {
    console.log("111", data);
    if (data.firstName == "") {
        view.setErrorMessage("firstName", "please input firstName again!")
    } else {
        view.setErrorMessage("firstName", "")
    }
    if (data.lastName == "") {
        view.setErrorMessage("lastName", "please input lastName again!")
    } else {
        view.setErrorMessage("lastName", "")
    }
    if (data.email == "") {
        view.setErrorMessage("email", "please input lastName again!")
    } else {
        view.setErrorMessage("email", "")
    }
    if (data.password == "") {
        view.setErrorMessage("password", "please input password again!")
    } else {
        view.setErrorMessage("password", "")
    }
    if (data.confirmPassword == "") {
        view.setErrorMessage("confirmPassword", "please input confirmPassword!")
    } else {
        view.setErrorMessage("confirmPassword", "")
    }
    if (data.firstName != "" && data.lastName != "" && data.email != "" && data.password != "" && data.confirmPassword) {
        model.register(data)
    }
}
controller.login = (data) => {
    console.log(data);
    if (data.Email == "") {
        view.setErrorMessage("email", "please input lastName again!")
    } else {
        view.setErrorMessage('email'," ")
    }
    if (data.Password == "") {
        view.setErrorMessage("password", "please input password again!")
    } else {
        view.setErrorMessage("password", "")
    }
    if (data.Email && data.Password) {
        model.login(data)
    }
}
controller.checkMessage = (checkMessage) => {
    // console.log(checkMessage,"111111");
    let listChat = document.getElementById("listChat");
    if (checkMessage.message.content != "") {
        // view.messageChat(checkMessage.message);
        // view.messageChat(checkMessage.messageFromBot);
        listChat.scrollTop = listChat.scrollHeight;
    }
    model.saveChat(checkMessage);
}
