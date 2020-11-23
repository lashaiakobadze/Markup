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
                    <input type="text" name="launch-date" value="" size="40" class="input" id="launchDate" aria-invalid="false">                    
                </div>
                <p></p>
            </div>

            <div class="budget">
                <h4>Budget <span>(approximate)</span></h4>
                <div class="field">
                    <label for="budget-input" class="check-label">Budget</label><br>
                    <input type="text" name="budget" value="" size="40" class="input" id="budget-input" aria-invalid="false">
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

