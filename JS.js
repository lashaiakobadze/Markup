/**
* დამატებითი მენიუს შემოტანა გატანა დაკლიკებით.
**/
function add_class_html(){
    var element = document.getElementById("html");
    var x = document.getElementById("body");
    
    if (x.hasAttribute('class')&&element.hasAttribute('class')) {      
        x.removeAttribute('class'); 
        element.removeAttribute('class');   
    } else {
        x.setAttribute('class', 'extra-menu');
        element.setAttribute('class',"extra-menu");
    }
}

/* ინფუთების ვალიდაცია და დაბეჭდვა კონსოლში */ 
var button = document.getElementById("start");
var after_button = document.getElementById("start");
var f_button = document.getElementById("subscribe");

var inp1=false;  
var inp2=false;
var inp3=false;
var inp4=false;
var inp5=false;

var error1=false;
var error2=false;
var error3=false;
var error4=false;
var error5=false;

var invalid_error1=false;
var invalid_error2=false;
var invalid_error3=false;

button.addEventListener("click", function(){
    var inputName = getInput("your-name");
    var inputEmail = getInput("email");
    var inputNumber = getInput("phone-number");
    var inputCompany = getInput("your-company");
    var inputWebsite = getInput("your-website");
    var inputText = getInput("about-project");
    var after_launch = getInput("launchDate");
    var after_budget = getInput("budget-input");

    if(inputName == ""){
        updateValue_p("name-reqired", "The field is required.");
        warning_inputs("your-name");
        error1=true;
    }else if(error1==true){
        document.getElementById("your-name").classList.remove("red-input");
        document.getElementById("name-reqired").innerHTML = "";
        inp1=true;
    }else{
        inp1=true;
    }    

    if(inputEmail == ""){
        updateValue_p("email-reqired", "The field is required.");
        warning_inputs("email");
        error2=true;
    }else if(ValidateEmail(inputEmail) == false ){
        updateValue_p("email-reqired", "The e-mail address entered is invalid.");
        warning_inputs("email");
        invalid_error1=true;
    }else if(error2==true || invalid_error1==true){
        document.getElementById("email").classList.remove("red-input");
        document.getElementById("email-reqired").innerHTML = "";
        inp2=true;
    }else{        
        inp2=true;
    }

    if(inputNumber == ""){
        updateValue_p("phone-reqired", "The field is required.");
        warning_inputs("phone-number");
        error3=true;
    }else if(isValidPhone(inputNumber) == false){
        updateValue_p("phone-reqired", "The telephone number is invalid.")
        warning_inputs("phone-number");
        invalid_error2=true;
    }else if(error3==true||invalid_error2==true){
        document.getElementById("phone-number").classList.remove("red-input");
        document.getElementById("phone-reqired").innerHTML = "";
        inp3=true;
    }else{        
        inp3=true;
    }

    if(inputWebsite == ""){
        updateValue_p("website-reqired", "The field is required.");
        warning_inputs("your-website");
        error4=true;
    }else if(is_url(inputWebsite) == false){
        updateValue_p("website-reqired", "The URL is invalid.");
        warning_inputs("your-website");
        invalid_error3=true;
    }else if(error4==true||invalid_error3==true){
        document.getElementById("your-website").classList.remove("red-input");
        document.getElementById("website-reqired").innerHTML = "";
        inp4=true;
    }else{        
        inp4=true;
    }

    if(inputText == ""){
        updateValue_p("project-reqired", "The field is required.");
        warning_inputs("about-project");
        error5=true;
    }else if(error5==true){
        document.getElementById("about-project").classList.remove("red-input");
        document.getElementById("project-reqired").innerHTML = "";
        inp5=true;
    }else{        
        inp5=true;
    }        
   
    if((inp5&&inp4&&inp3&&inp2&&inp1)==true){
        console.log("სახელი და გვარი: "+inputName);
        console.log("ელ.ფოსტა: "+ inputEmail);
        console.log("ტელ: "+inputNumber);

        if(inputCompany !== ""){
            console.log("კომპანია: "+inputCompany);
        }

        console.log("ვებ.გვერდი: "+inputWebsite);
        console.log("მოკლე ინფორმაცია: "+inputText);

        if(after_launch !== ""){
            console.log("დაწყების დრო: "+after_launch);
        }
    
        if(after_budget !== ""){
            console.log("სასურველი ბიუჯეტი: "+after_budget);
        }        
        resetForm("userForm");        
        document.getElementById("warning-box").classList.remove("erorr-form");

        inp1=false;
        inp2=false;
        inp3=false;
        inp4=false;
        inp5=false;
        }else{
        document.getElementById("warning-box").classList.add("erorr-form");
    }  
});

var f_inp1=false;  
var f_inp2=false;

var f_error1=false;
var f_error2=false;

var f_invalid_error1=false;

f_button.addEventListener("click", function(){
    var f_inputName = getInput("footer-name");
    var f_inputEmail = getInput("footer-email");

    if(f_inputName==""){
        updateValue_p("f-name-reqired","The field is required.")
        warning_inputs("footer-name");
        f_error1=true;
    }else if(f_error1==true){
        document.getElementById("footer-name").classList.remove("red-input");
        document.getElementById("f-name-reqired").innerHTML = "";
        f_inp1=true;
    }else{        
        f_inp1=true;
    }
    
    if(f_inputEmail == ""){
        updateValue_p("f-email-reqired", "The field is required.");
        warning_inputs("footer-email");
        f_error2=true;
    }else if(ValidateEmail(f_inputEmail) == false ){
        updateValue_p("f-email-reqired", "The e-mail address entered is invalid.");
        warning_inputs("footer-email");
        f_invalid_error1=true;
    }else if(f_error2==true || f_invalid_error1==true){
        document.getElementById("footer-email").classList.remove("red-input");
        document.getElementById("f-email-reqired").innerHTML = "";
        f_inp2=true;
    }else{
        f_inp2=true;        
    }

    if((f_inp1&&f_inp2)==true){
        console.log("გამომწერის სახელი: "+f_inputName);
        console.log("გამომწერის ელ.ფოსტა: "+f_inputEmail);
        resetForm("f_userForm");
        f_inp1=false;
        f_inp1=false;
    }
});

 /**
* ინფუთიდან ველის ამოღების ფუნქცია აიდის მიხედვით.
**/
function getInput(id){
    return document.getElementById(id).value;
}

/**
* გამაფრთხილებელი ფუნქცია ტექსტური შეტყობინებით.
**/
function updateValue_p(id, message){
    document.getElementById(id).innerHTML = message;
}

/**
* არსწორი ინფუთის სტილის კლასის დამატება.
**/
function warning_inputs(id){
    document.getElementById(id).classList.add("red-input");
}

/**
* URL-ს ვალიდაცია
**/
function is_url(str){
    regexp =  /^(?:(?:https?|ftp):\/\/)?(?:(?!(?:10|127)(?:\.\d{1,3}){3})(?!(?:169\.254|192\.168)(?:\.\d{1,3}){2})(?!172\.(?:1[6-9]|2\d|3[0-1])(?:\.\d{1,3}){2})(?:[1-9]\d?|1\d\d|2[01]\d|22[0-3])(?:\.(?:1?\d{1,2}|2[0-4]\d|25[0-5])){2}(?:\.(?:[1-9]\d?|1\d\d|2[0-4]\d|25[0-4]))|(?:(?:[a-z\u00a1-\uffff0-9]-*)*[a-z\u00a1-\uffff0-9]+)(?:\.(?:[a-z\u00a1-\uffff0-9]-*)*[a-z\u00a1-\uffff0-9]+)*(?:\.(?:[a-z\u00a1-\uffff]{2,})))(?::\d{2,5})?(?:\/\S*)?$/;
    if (regexp.test(str)){
        return true;
    }else{
        return false;
    }
}

/**
* ტელეფონის ნომრის ვალიდაცია, მაგალითისათვის ჩვენი საქართველოს ცხრა ნიშნა ნომრისათვის შემდეგი სახით +995 568925408 ან 568925408 მოთხოვნის მიხედვით შევძლებთ შესაბამისი პატერნის აწყობას ან მოძიებას.
**/ 
function isValidPhone(phoneNumber) {
    var found = phoneNumber.search(/^(\+{1}\d{2,3}\s?[(]{1}\d{1,3}[)]{1}\s?\d+|\+\d{2,3}\s{1}\d+|\d+){1}[\s|-]?\d+([\s|-]?\d+){1,2}$/);
    if(found > -1) {
        return true;
    }
    else {
        return false;
    }
}

/**
* email-ის ვალიდაცია
**/
function ValidateEmail(mail) {
if (/^[a-zA-Z0-9.!#$%&'*+/=?^_`{|}~-]+@[a-zA-Z0-9-]+(?:\.[a-zA-Z0-9-]+)*$/.test(mail)){
    return true;
}else{
    return false;
    }
}

/**
* ფორმის დარესეთება
**/
function resetForm(id){
    document.getElementById(id).reset();
  }

/**
* წავშალოთ დამატებითი ინფუთების შემოტანის კითხვა დაკლიკვის შემდეგ.
**/ 
function add_class_more_form() {
   var element = document.getElementById("added");
    element.classList.add("active");

    var x = document.getElementById('add');
        x.style.display = 'none';
}

/** ფუნქცია, რომელიც გვეხმარება კლასის დამატებაში მშობელ ელემენტზე, ველზე დაკლიკების დროს.
* * @param {Element} Element to search from
* @param {string} The class name to identify target parent
* @return {Element} The parent element with targetClass or null of we reach the top of the DOM tree
**/ 
function getTargetParent(elem, targetClass) {
    var currElem = elem;
    while(
  	  currElem
  	  && !currElem.classList.contains(targetClass)
    ) {
    	currElem = currElem.parentNode;
    }
    return currElem;
}

/**
* დავამატოთ ველის კონტეინერს კლასი focus, როდესაც ველზე დავაკლიკებთ.
**/
function addFocusListener(elem, targetClass) {
  var targetParent = getTargetParent(elem, targetClass);
  if(targetParent) {
		elem.addEventListener('focus', function() {
	    targetParent.classList.add('focus');
    });
        if(elem.value !== ""){
            elem.addEventListener('blur', function() {
    	    targetParent.classList.remove('focus');
            });
        }      
              
    }              
}

var inputs = document.getElementsByClassName('input');
for(var i = 0; i < inputs.length; i++) {
	addFocusListener(inputs[i], 'inp-cont');
}

/**
* ფოტოს ატვირთვის ფუნქციონალი.
**/
function readURL(input) {
    if (input.files && input.files[0]) {
        var reader = new FileReader();
        
        reader.onload = function (e) {
            $('#profile').attr('src', e.target.result);
        }
        
        reader.readAsDataURL(input.files[0]);
    }
}

$("#image").change(function(){
    readURL(this);
});

 