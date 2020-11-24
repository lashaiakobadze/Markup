
/* ინფუთების ვალიდაცია და დაბეჭდვა კონსოლში */ 
var button = document.getElementById("start"); 
var f_button = document.getElementById("subscribe");

var inputName = getInput("your-name");
var inputEmail = getInput("email");
var inputNumber = getInput("phone-number");
var inputCompany = getInput("your-company");
var inputWebsite = getInput("your-website");
var inputText = getInput("about-project");
/*var inputLaunch = getInput("launchDate");
var inputBudget = getInput("budget-input");*/
var f_inputName = getInput("footer-name");
var f_inputEmail = getInput("footer_email");


button.addEventListener("click", function(){
    if(inputName == ""){
        updateValue_p("name-reqired", "The field is required.");

    }else{
        console.log(inputName);
    }
    

    if(inputEmail==""){
        updateValue_p("email-reqired", "The field is required.");

    }else if(ValidateEmail(inputEmail) == false ){
        updateValue_p("email-reqired", "The e-mail address entered is invalid.");

    }else{
        console.log(inputEmail);
    }


    if(inputNumber==""){
        updateValue_p("phone-reqired", "The field is required.");

    }else if(isValidPhone(inputNumber) == false){
        updateValue_p("phone-reqired", "The telephone number is invalid.");

    }else{
        console.log(inputNumber);
    }



    if(inputCompany == ""){
        console.log("");

    }else{
        console.log(inputCompany);
    }



    if(inputWebsite == ""){
        updateValue_p("website-reqired", "The field is required.");

    }else if(is_url(inputWebsite) == false){
        updateValue_p("website-reqired", "The URL is invalid.");

    }else{
        console.log(inputWebsite);
    }


    if(inputText == ""){
        updateValue_p("project-reqired", "The field is required.");

    }else{
        console.log(inputText);
    }
     /*if(inputLaunch == ""){
        console.log('');

    }else{
        console.log(inputLaunch);
    }

    if(inputBudget == ""){
        console.log('');

    }else{
        console.log(inputBudget);
    } */                      
});


f_button.addEventListener("click", function(){
    if(f_inputName == ""){
        updateValue_p("footer-your-name", "The field is required.");

    }else{
        console.log(f_inputName);
    }

    if(f_inputEmail==""){
        updateValue_p("footer-your-email", "The field is required.");

    }else if(ValidateEmail(f_inputEmail) == false ){
        updateValue_p("footer-your-email", "The e-mail address entered is invalid.");

    }else{
        console.log(f_inputEmail);
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

// დამატებითი ინფუთების შემოტანა იმ შემთხვევისათვის, როდესაც დავკლიკებთ შესაბამის კითხვის ველს.
document.getElementById('add').addEventListener("click",addInput);
function addInput(){
var newInput = `
    <div class="checkbox-fields">
        <div class="added checkbox-after">
            <div class="timeframe">
                <h4>Timeframe <span>(approximate)</span></h4>
                <div class="field"> 
                   <label for="launchDate" class="check-label">Tell us about your timescale or deadline</label>
                   <br>
                    <input type="text" name="launch-date" value="" size="40" class="input" id="launchDate">                    
                </div>
                <p></p>
            </div>

            <div class="budget">
                <h4>Budget <span>(approximate)</span></h4>
                <div class="field">
                    <label for="budget-input" class="check-label">Budget</label><br>
                    <input type="text" name="budget" value="" size="40" class="input" id="budget-input">
                </div>
                <p></p>
            </div>
            <p></p>
        </div>

        <h4>How did you find out about us?</h4>
        <div class="checkbox-box">
            <span class="checkbox-container">
                <input type="checkbox" id="option-google" class="visuallyhidden" name="source[]" value="Google">&nbsp;<label for="option-google"><span>Google</span></label>
            </span>

            <span class="checkbox-container">
                <input type="checkbox" id="option-bing" class="visuallyhidden" name="source[]" value="Bing">&nbsp;<label for="option-bing"><span>Bing</span></label>
            </span>

            <span class="checkbox-container">
                <input type="checkbox" id="option-facebook" class="visuallyhidden" name="source[]" value="Facebook">&nbsp;<label for="option-facebook"><span>Facebook</span></label>
            </span>

            <span class="checkbox-container">
                <input type="checkbox" id="option-linkedin" class="visuallyhidden" name="source[]" value="LinkedIn">&nbsp;<label for="option-linkedin"><span>LinkedIn</span></label>
            </span>
                    
            <span class="checkbox-container">
                <input type="checkbox" id="option-instagram" class="visuallyhidden" name="source[]" value="Instagram">&nbsp;<label for="option-instagram"><span>Instagram</span></label>
            </span>
                    
            <span class="checkbox-container">
                <input type="checkbox" id="option-magazine" class="visuallyhidden" name="source[]" value="Magazine">&nbsp;<label for="option-magazine"><span>Magazine</span></label>
            </span>
                    
            <span class="checkbox-container">
                <input type="checkbox" id="option-radio" class="visuallyhidden" name="source[]" value="Radio">&nbsp;<label for="option-radio"><span>Radio</span></label>
            </span>
                    
            <span class="checkbox-container">
                <input type="checkbox" id="option-recommendation" class="visuallyhidden" name="source[]" value="Recommendation">&nbsp;<label for="option-recommendation"><span>Recommendation</span></label>
            </span>
                    
            <span class="checkbox-container last">
                <input type="checkbox" id="option-other" class="visuallyhidden" name="source[]" value="Other">&nbsp;<label for="option-other"><span>Other</span></label>
            </span>
        </div>
        <p></p>
    </div>`;
   document.getElementById('demo').innerHTML += newInput;
}


