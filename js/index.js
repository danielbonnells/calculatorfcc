
var currVal = "(";
var dataLength = 0;
var dataArr = [];
var equalsHasFired = false;
var decimalClicked = false;

function doMath(data){
  
var last = dataArr[dataArr.length - 1]; 
    // clears the display after another number is pressed IF equals has been called and if it is either a number or a decimal
  if(equalsHasFired) {
    
    if(data === "." || isNaN(data) === false){
     console.log(data, "fired equals");
     equalsHasFired = false;
     clearAll();
      
    }
  }
 /////////////////
  
  if(!isNaN(data)){
  dataArr.push(data);
  currVal += data;
}

if(isNaN(data)){
//////
  equalsHasFired = false;
    if(data === ")+(" || data === ")-(" || data === ")/(" || data === ")*("){
    
        if(isNaN(last) && last !== "="){
          
          currVal += "";
          
          console.log("Last item in array is not a number and not equals sign. Nothing happens here.", last)
          return currVal;
          
        } else 
        
        dataArr.push(data);
        currVal += data;
        decimalClicked = false;
        equalsHasFired = false;
        console.log("Operator has been added to array and currVal. Decimal may be clicked once again.");
        
      }

//////
    if(data === "."){
    

      if(dataArr.length === 0 || last === ")+(" || last === ")-(" || last === ")/(" || last === ")*("){
        
          data = "0.";
          dataArr.push(data);
          currVal += data;
          decimalClicked = true;
          console.log("A 0. has been added. Decimal has been clicked." + dataArr + currVal);
        
      } else if(decimalClicked === false){

            dataArr.push(data);
            currVal += data;
            decimalClicked = true;
            console.log("A . decimal has been added. Decimal has been clicked.");
        
      } else if(equalsHasFired && last === "="){
        
        console.log("this works");
        
      }

      console.log("No decimals can be added right now. decimalClicked is = " + decimalClicked);
      
    
  }

 
}
  
  
updateDisplay(currVal);  
  
 
}  


  function clearAll() {
    display.innerHTML = "";
    currVal = "(";
    decimalClicked = false;
    dataArr =[];
  }





  function clearEntry(){
    var last = dataArr[dataArr.length - 1]; 
    var cV = currVal;
  
    if(last === "." || last === "0."){
   
      decimalClicked = false;
    }
     
    
    dataLength = dataArr[dataArr.length - 1].toString().length;
  // to remove the last item in currVal, which is the last item added to dataArr  
    currVal = cV.slice(0, cV.length - dataLength);
  // if we have removed everything from the currVal, set it to its initial value of "("  
    if(currVal === ""){
      currVal = "(";
    } 
  // if the last item in arr is "=" reset the currVal to initial value.
  // set dataArr to "" 
    if(dataArr[dataArr.length - 1] === "="){
      dataArr = [""];
      currVal = "(";
    } else {
  //removes the last item in the array
    dataArr.pop();
    }
    
    updateDisplay(currVal);
    
  }




  function equals(){
  //to ensure that clearEntry clears the entire value after equals() has run
    dataArr.push("=");
    
  // to close off the curr value so that it evaluates properly  
    if(currVal !== "("){
      currVal+= ")";
    }
      var result = eval(currVal);
  
    
  //limits to 8 visible digits including decimals
    if(result.toString().length > 9){
      result = result.toString().slice(0,8);
      
    } else {
      result;
    }
    
  // to ensure that currVal can be continued to be used  
      currVal = "(" + result;
      equalsHasFired = true;
      decimalClicked = false;
      updateDisplay(result);

  }



  function updateDisplay(disp) {
  
   
     var display = document.getElementById("display");
     var re = /\(|\)/g;
     var match = disp.toString().replace(re, " ");
     display.innerHTML = match; 
    
    var myDiv = $('#display');
    myDiv.text(myDiv.text().substring(0,15));

   
  }

$('#slogan').delay(6500).hide(1000);
$('#slogan2').delay(6500).hide(2000);