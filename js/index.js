window.onload=()=>{
    firebase.auth().onAuthStateChanged((user)=>{
        if(user){
            view.setScreenActive("webapp");
            model.getListMessage1 = async () => {
                try {
                    let response = await firebase.firestore()
                        .collection("listMessage")
                        .doc("KcANwnOz9wkYcBc7ksNP")
                        .get()
                    let result = response.data().message
                    console.log(result,"99999999");
                    view.renderListChat(result);
                } catch (err) {
                    console.log(err.message);
                }
            }
            model.getListMessage1();       
        }else{
            view.setScreenActive("registerPage");
        }
        // firebase.firestore().collection("listMessage").doc("KcANwnOz9wkYcBc7ksNP")
        // .onSnapShot((doc) => {
        //     console.log("current data 111111",doc.data());
        //     view.renderListChat(doc.data().message);
        // })
    });
    /* 
    thao tác với firestore
    */
   // getOne document
//    const firestoreQueries = async () => {
//     try {
//         let response = await firebase.firestore()
//         .collection("users")
//         // .doc(" jzG84AN44i3qLTK4xnKa")
//         .get();
//         for (let i = 0; i < response.docs.length; i++) {
//             console.log("data",response.docs[i].data());
            
//         }
//     console.log(response);
//     } catch (error) {
//         console.log(error.message);
//     }
//    }
//    firestoreQueries();

// Create  document
// let addField = {
//     phone:"121246324",
//     name:"Hoa"
// }
// const firestoreQueries = async () => {
//     try {
//         let response = await firebase.firestore()
//             .collection("users")
//             .add(addField);
//                 console.log(response);
//     } catch (error) {
//         console.log(error.message);
//     }
// }
// firestoreQueries();  

// Update document


// Delete document
// let uid = "jzG84AN44i3qLTK4xnKa";
// const firestoreQueries = async () => {
//     try {
//         let response = await firebase.firestore()
//             .collection("users")
//             .doc(uid)
//             .delete();
//                 // console.log(response);
//     } catch (error) {
//         console.log(error.message);
//     }
// }
// firestoreQueries();  
}