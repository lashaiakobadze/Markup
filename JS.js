//დამატებითი მენიუს შემოტანა გატანა
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
    }else{
        console.log("სახელი და გვარი: "+inputName);
        remove.inputName;
    }    

    if(inputEmail == ""){
        updateValue_p("email-reqired", "The field is required.");

    }else if(ValidateEmail(inputEmail) == false ){
        updateValue_p("email-reqired", "The e-mail address entered is invalid.");
    }else{
        console.log("ელ.ფოსტა: "+ inputEmail);
    }

    if(inputNumber == ""){
        updateValue_p("phone-reqired", "The field is required.");
    }else if(isValidPhone(inputNumber) == false){
        updateValue_p("phone-reqired", "The telephone number is invalid.");
    }else{
        console.log("ტელ: "+inputNumber);
    }

    if(inputCompany !== ""){
        console.log("კომპანია: "+inputCompany);
    }

    if(inputWebsite == ""){
        updateValue_p("website-reqired", "The field is required.");

    }else if(is_url(inputWebsite) == false){
        updateValue_p("website-reqired", "The URL is invalid.");

    }else{
        console.log("ვებ.გვერდი: "+inputWebsite);
    }

    if(inputText == ""){
        updateValue_p("project-reqired", "The field is required.");

    }else{
        console.log("მოკლე ინფორმაცია: "+inputText);
    }    
        
    if(after_launch !== ""){
        console.log("დაწყების დრო: "+after_launch);
    }

    if(after_budget !== ""){
        console.log("სასურველი ბიუჯეტი: "+after_budget);
    }
});


f_button.addEventListener("click", function(){
    var f_inputName = getInput("footer-name");
    var f_inputEmail = getInput("footer-email");

    if(f_inputName==""){
        updateValue_p("f-name-reqired","The field is required.")
    }else{
        console.log("გამომწერის სახელი: "+f_inputName);
    }
    
    if(f_inputEmail == ""){
        updateValue_p("f-email-reqired", "The field is required.");

    }else if(ValidateEmail(f_inputEmail) == false ){
        updateValue_p("f-email-reqired", "The e-mail address entered is invalid.");
    }else{
        console.log("გამომწერის ელ.ფოსტა: "+f_inputEmail);
    }
});


// ინფუთიდან ველის ამოღების ფუნქცია აიდის მიხედვით.
function getInput(id){
    return document.getElementById(id).value;
}

//გამაფრთხილებელი ფუნქცია
function updateValue_p(id, message){
    document.getElementById(id).innerHTML = message;
}

//URL-ს ვალიდაცია
function is_url(str){
    regexp =  /^(?:(?:https?|ftp):\/\/)?(?:(?!(?:10|127)(?:\.\d{1,3}){3})(?!(?:169\.254|192\.168)(?:\.\d{1,3}){2})(?!172\.(?:1[6-9]|2\d|3[0-1])(?:\.\d{1,3}){2})(?:[1-9]\d?|1\d\d|2[01]\d|22[0-3])(?:\.(?:1?\d{1,2}|2[0-4]\d|25[0-5])){2}(?:\.(?:[1-9]\d?|1\d\d|2[0-4]\d|25[0-4]))|(?:(?:[a-z\u00a1-\uffff0-9]-*)*[a-z\u00a1-\uffff0-9]+)(?:\.(?:[a-z\u00a1-\uffff0-9]-*)*[a-z\u00a1-\uffff0-9]+)*(?:\.(?:[a-z\u00a1-\uffff]{2,})))(?::\d{2,5})?(?:\/\S*)?$/;
    if (regexp.test(str)){
        return true;
    }else{
        return false;
    }
}

// ტელეფონის ნომრის ვალიდაცია, მაგალითისათვის ჩვენი საქართველოს ცხრა ნიშნა ნომრისათვის +995-ის გარეშე, მოთხოვნის მიხედვით შევძლებთ შესაბამისი პატერნის აწყობას ან მოძიებას.
function isValidPhone(phoneNumber) {
    var found = phoneNumber.search(/^(\+{1}\d{2,3}\s?[(]{1}\d{1,3}[)]{1}\s?\d+|\+\d{2,3}\s{1}\d+|\d+){1}[\s|-]?\d+([\s|-]?\d+){1,2}$/);
    if(found > -1) {
        return true;
    }
    else {
        return false;
    }
}

// email-ის ვალიდაცია
function ValidateEmail(mail) {
if (/^[a-zA-Z0-9.!#$%&'*+/=?^_`{|}~-]+@[a-zA-Z0-9-]+(?:\.[a-zA-Z0-9-]+)*$/.test(mail)){
    return true;
}else{
    return false;
    }
}

// წავშალოთ დამატებითი ინფუთების შემოტანის კითხვა დაკლიკვის შემდეგ.
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
    for(let i=0;i<inputs.length;i++){
        if(inputs[i].value =='' )
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

//დავამატოთ ჰედერზე svg-ელემენტი რკალები შეხებისას, კლასის დამატებით.
/*
document.getElementsByClassName("nav-list").addEventListener("mouseover", function(e) {
    const parent = e.target.parentElement;
    parent.children.classList.add("addsvg");
});
    
document.getElementsByClassName("dropdown")[0].addEventListener("mouseout", function(e) {
    e.target.classList.remove("addsvg");
});
*/
