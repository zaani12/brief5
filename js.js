// La recuperation des elements 
const form = document.querySelector("#form");
const Nom = document.querySelector('#Nom');
const email = document.querySelector('#email');
const Télephone = document.querySelector('#Télephone');
const Prénom = document.querySelector('#Prénom')
const clubs = document.getElementById('clubs').selectedOptions;
// Evenements


const arr = [];
const gro = [];
array = []
form.addEventListener('submit',e=>{
    e.preventDefault();

    form_verify();
    // if(array.length === 0)
    

})
 
// Fonstions
function form_verify() {
   
    // Obtenir toutes les valeurs des inputs
    const NomValue = Nom.value.trim();
    const emailValue = email.value.trim();
    const PrénomValue = Prénom.value.trim();
    const TélephoneValue = Télephone.value.trim();

    // email verify
    if (emailValue === "") {
        let message = "Email ne peut pas être vide";
        setError(email,message);
        array.push(false)
    }else if(!email_verify(emailValue)){
        let message = "Email non valide";
        setError(email,message);
        array.push(false)
    }

    else{
        setSuccess(email)
    }
    
    // Nom verify
    if (NomValue === "") {
        let message = "Nom ne peut pas être vide";
        setError(Nom,message);
        array.push(false)
    }else if(Nom_verify(Nom) === true){
        setSuccess(Nom)
    }
    else{
        let message = "Nom non valide";
        setError(Nom,message);
        array.push(false)
    }
    // Télephone confirm
    if (TélephoneValue === "") {
        let message = "Télephone ne peut pas être vide";
        setError(Télephone,message);
        array.push(false)
    }else if(Télephone_verify( Télephone) ){
        setSuccess(Télephone);
    }else{
        let message = "Télephone non valide";
        setError (Télephone,message);
        array.push(false)

    }
        // PrénomNom verify
    if (PrénomValue === "") {
        let message = "Prénom ne peut pas être vide";
        setError(Prénom,message);
        array.push(false)

    }else if(Prénom_verify(Prénom) ){
        setSuccess(Prénom)
    }
    else{
        let message = "Prénom non valide";
        setError(Prénom,message);
        array.push(false)

        
       
    }
    document.querySelector('.error-gender').innerHTML = "Please you have to choose your gender"
    arr.push(false)
    array.push(false)


  
  if (clubs.length === 0) {
    document.querySelector('.error-clubs').innerHTML = "you have to select at least one item in clubs , can't be empty ";
    arr.push(false)
    array.push(false)


  } else if (clubs.length > 3) {
    document.querySelector('.error-clubs').innerHTML = "you have selected too many choices max is 3 ";
    arr.push(false)
    array.push(false)


  }else{
    document.querySelector('.error-clubs').innerHTML = "";

  }
  array = []
  if (array.length === 0 ){
    document.getElementById("form").submit();
  }
 
}

function setError(elem,message) {
    const formControl = elem.parentElement;
    const small = formControl.querySelector('small');

    // Ajout du message d'erreur
    small.innerText = message

    // Ajout de la classe error
    formControl.className = "form-control error";
}

function setSuccess(elem) {
    const formControl = elem.parentElement;
    formControl.className ='form-control success'
}
function Nom_verify(Nom){
    return /(([aA-zZ])?){3,15}$/.test(Nom.value);
};
function Prénom_verify(Prénom){
    return /[a-z]{3,15}$/.test(Prénom.value);

};


function email_verify(email) {

    return /(\w+)?.?(\w+)?.?(\w+)?\d?@(gmail|hotmail|yahoo|ofppt).(com|org|net|ma)/.test(email);
};
function Télephone_verify( Télephone) {
    return /(06|07|05)\d{8}/.test(Télephone.value);
};



Nom.addEventListener('blur',function(e){
    if (Nom.value === "") {
        let message = "Nom ne peut pas être vide";
        setError(Nom,message);
    }else if(Nom_verify(Nom) === true){
        setSuccess(Nom)
    }
    else{
        let message = "Nom non valide";
        setError(Nom,message);
    }
});
Prénom.addEventListener('blur',function(e){ 
    if (Prénom.Value === "") {
    let message = "Prénom ne peut pas être vide";
    setError(Prénom,message);
     }else if(Prénom_verify(Prénom) ){
     setSuccess(Prénom)
     }else{
     let message = "Prénom non valide";
     setError(Prénom,message);
    
   
}

});
email.addEventListener('blur',function(e){
    if (email.value === "") {
        let message = "Email ne peut pas être vide";
        setError(email,message);
    }else if(email_verify(email.Value) === false){
        let message = "Email non valide";
        setError(email,message);
    }

    else{
        setSuccess(email)
    }
    

});
Télephone.addEventListener('blur',function(e){
    if (Télephone.value=== "") {
        let message = "Télephone ne peut pas être vide";
        setError(Télephone,message);
    }else if(Télephone_verify( Télephone) ){
        setSuccess(Télephone);
    }else{
        let message = "Télephone non valide";
        setError (Télephone,message);
    }
});