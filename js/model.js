const model = {};
const firebaseApp = firebase.initializeApp({
    apiKey: "AIzaSyAOBbS9SfMbsSPC9LgULz2lXi824UiqJcM",
    authDomain: "test-61739.firebaseapp.com",
    projectId: "test-61739",
    storageBucket: "test-61739.appspot.com",
    messagingSenderId: "676852121256",
    appId: "1:676852121256:web:5d9fd4134f668cdd340c9d",
    measurementId: "G-PFVG3PXS0S"
    /* Firebase config */
});
const db = firebaseApp.firestore();
const auth = firebaseApp.auth();
model.register = (data) => {
    console.log(data);
    auth.createUserWithEmailAndPassword(data.email, data.password)
        .then((res) => {
            console.log('1111', res); view.setScreenActive('loginPage')
            auth.currentUser.sendEmailVerification();
        })
        .catch((er) => {
            console.log(er);
        })
    // try {
    //     let reponse = await auth.createUserWithEmailAndPassword(data.mail,data.password)
    //     view.setScreenActive('loginPage')
    // } catch (error) {
    //     alert('email tồn tại')
    // }
}
model.login = async (data) => {
    console.log("mode1111", data);
    try {
        let response = await auth.signInWithEmailAndPassword(data.Email, data.Password);
        console.log("success!");
        console.log("666666", auth.currentUser);
        // console.log(response);
        view.setScreenActive("webapp")
    } catch (error) {
        console.log(error);
        alert(error.message)
    }
}
model.saveChat = (data) => {
 
    let uid = "KcANwnOz9wkYcBc7ksNP";
    const firestoreQueries = async () => {
        try {
            let response = await firebase.firestore()
                .collection("listMessage")
                .doc(uid)
                .update({message:firebase.firestore.FieldValue.arrayUnion(data)})
        } catch (error) {
            console.log(error.message);
        }
    }
    firestoreQueries();
}
model.getChat = async () => {
    try {
        let response = await firebase.firestore()
            .collection("listMessage")
            .doc("KcANwnOz9wkYcBc7ksNP")
            .get()
            let result = response.data().message
            console.log(result);
        if (result !== undefined) {
            let listChat = document.getElementById("listChat");
            listChat.innerHTML = result
        } 
        } catch (error) {
            console.log(error.message);
        }
        firestoreQueries();
    }
model.getListMessage = async () => {
    try {
        let reponse = await firebase.firestore()
        .collection("listMessage")
        .doc("KcANwnOz9wkYcBc7ksNP") // id của document
        .get ()
    let result = reponse.data().message
    console.log(result,"999999");
    view.renderListChat(result);
    } catch (err) {
        console.log(err.message);
    }
}
   
