const view = {};
view.setScreenActive = (screenName) => {
    console.log(screenName);
    switch (screenName) {
        case "registerPage":
            let app = document.getElementById("app");
            app.innerHTML = component.wellcomePage;
            let registerForm = document.getElementById("registerForm");
            registerForm.addEventListener("submit", (e) => {
                e.preventDefault();
                // let a = registerForm.firstName.value;
                // console.log(a);
                const data = {
                    firstName: registerForm.firstName.value,
                    lastName: registerForm.lastName.value,
                    email: registerForm.email.value,
                    password: registerForm.password.value,
                    confirmPassword: registerForm.confirmPassword.value,
                }
                controller.register(data);
            })
          
            let moveLogin = document.getElementById("login")
            moveLogin.addEventListener("click", () => {
                view.setScreenActive("loginPage")
            })
            break;
        case "loginPage":
            document.getElementById("app").innerHTML = component.loginPage;
            let loginForm = document.getElementById("loginForm");
            let redirectRegister = document.getElementById('btn-login')
            redirectRegister.addEventListener("click", (e) => {
                e.preventDefault()
                const data = {
                    Email: loginForm.email.value,
                    Password: loginForm.password.value,
                }
                controller.login(data);
            })
            break;  
        case "webapp":
            document.getElementById("app").innerHTML = component.loginWeb;
            // model.getChat();
            let send = document.getElementById("sendData"); 
            send.addEventListener("click",(e)=>{
                e.preventDefault();
                let valueInput = document.getElementById("valueInputForm").valueInput.value;
                document.getElementById("valueInputForm").valueInput.value = "";
                // view.messageChat(message);
                // view.messageChat(messageFromBot);
                var today = new Date();
                var date = today.getDate() + '-' + (today.getMonth() + 1) + '-' + today.getFullYear()
                var time = today.getHours() + ':' + today.getMinutes() + ":" + today.getSeconds();
                var dateTime = date + ' ' + time;
                let checkMessage={
                    message:{
                        owner: firebase.auth().currentUser.email, // người vừa login vào tài khoản
                        content: valueInput, // nội dung text chat
                        createAt: dateTime, // thời gian gửi tin nhắn
                    },
                }
                controller.checkMessage(checkMessage);
                model.getListMessage();
            })
            break;
    }
}
view.renderListChat = (listChat) => {
    console.log(listChat[0].message);
    let result='';
    for (let i = 0; i < listChat.length; i++){
        if(listChat[i].message.owner == firebase.auth().currentUser.email){
            result += `
                <div class = "message me" id = "me">
                    <div class = "content" >
                        ${listChat[i].message.owner}    
                    </div>
                    <div class = "content" >
                        ${listChat[i].message.content}    
                    </div>
                    <div class = "content" >
                        ${listChat[i].message.createAt}    
                    </div>                   
                </div>
            `
        }else{
            result += `
            <div class = "message owner" id = "me">
                <div class = "content" >
                    ${listChat[i].message.owner} 
                </div>
                <div class = "content" >
                    ${listChat[i].message.content} 
                </div>
                <div class = "content" >
                    ${listChat[i].message.createAt} 
                </div>
            </div>
        `
        }
       
        }
        console.log(result);
    document.getElementById("listChat").innerHTML = result;

}
view.setErrorMessage = (id, content) => {
    document.getElementById(id).innerHTML = content
}