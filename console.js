/* დავბეჭდოთ კონსოლში ინფუთები */

function onClick(elem) {
    var parent = elem.parentNode;
    
    var val = parent
      .querySelector('input[type=text]')
      .value;
    if (val == '') {
      console.log('no input');
    } else {
      console.log(val);
    }
  }
  
  //attach the click listerner to each element
  var buttons  = document.getElementsByTagName('button');
  
  for(var i = 0; i < buttons.length; i++) {
    var button = buttons[i];
    
    button.addEventListener("click", function() {
      onClick(this);
    })
  }

 