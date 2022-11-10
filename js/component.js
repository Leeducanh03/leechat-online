const component ={};
component.wellcomePage=`
        <form class="register-form" id="registerForm">
            <h2 class="box1">REGISTER</h2> <br>
            <input type="text" placeholder="firstName" name="firstName"> 
            <div class="error" id="firstName"></div> <br>
        <div>
            <input type="text" placeholder="lastName" name="lastName"> 
            <div class="error" id="lastName"></div> <br>
        </div><div>
            <input type="text" placeholder="email" name="email"> 
            <div class="error" id="email"></div> <br>
        </div><div>
            <input type="text" placeholder="password" name="password"> 
            <div class="error" id="password"></div> <br>
        </div><div> 
            <input type="text" placeholder="confirmPassword" name="confirmPassword"> 
            <div class="error" id="confirmPassword"></div> <br>
        </div>
        
        <div class="register-bottom" >
            Bạn đã có tài khoản <a id="login">Login</a> 
        </div> <br>
        <div class="box2"><button type="submit">Register</button></div>
`
component.loginWeb = `
<div class="chat-container">  
        <div class="header">
                Hello Ra!
        </div>
        <div class="main">
            <div class="conversation-detail">
                <div class="title">
                    First Conversation
                </div>
                <div class="list-chat" id="listChat">               
                  
                </div>
                <form id="valueInputForm">
                    <div class="input-chat" >
                        <input placeholder="Message chat!" name="valueInput">
                    </div>
                    <button class="send" type="submit" id="sendData"><i class="fa-solid fa-paper-plane"></i></button>
                </form>
            </div>         
        </div>
    </div>    
`
component.loginPage = `
 <div class = "login-container">
    <form class = "login-form" id = "loginForm">
        <div class = "login-header">login</div>
        <input type = "text" placeholder = "email" name = "email" >
        <div class = "error" id="email"> </div>
        <div>
            <input type = "text" placeholder = "password" name="password" >
            <div class="error" id="password"></div>    
        </div>
        <button id = "btn-login" type="submit"> login </button>
        <div class = "login-bottom>
            bạn chưa có tài khoản? <a id="redirecRegister"> Register now </a>
        </div>
    </form>
 </div>
`
