var input1=document.getElementById('inputName');
var input2=document.getElementById('inputLink');
var head= document.querySelector('.hidden');

if(localStorage.getItem('data') !=null){
    var list =JSON.parse(localStorage.getItem('data'));
    displayElements();
}


//click in submit button

var subbtn = document.getElementById('btn1');
subbtn.addEventListener('click' , function submit(){

    if(input1.value == 0 ){
        alert('please enter data of name');
    }else if( input2.value == 0){
        alert('please enter data of link');
    }else{
        addElement();
    }

})


var list=[];

// function too add objects to array 

function addElement(){

 var element = {

        nameInput : input1.value ,
        linkInput : input2.value
    }

    list.push(element);
    localStorage.setItem('data' , JSON.stringify(list));

    clearInputs();
    displayElements();
}


// function for clear inputs values

function clearInputs(){
    input1.value = " ";
    input2.value = " ";
}


// function to display objects of array in html tags

function displayElements(){
 
    var container = " ";
    for(var i= 0 ; i< list.length ; i++){
        container += `  
      
        <div class="row mt-2 p-3">
        <div class="col-md-6">
            <h3 class="header text-white"> ${list[i].nameInput}</h3>
        </div>
        <div class="col-md-6">
            <div class="btns">
                <a href="http://${list[i].linkInput}" class="btn " target="_blank">visit</a>
                <button id="btn3" class="btn" onclick="deletElement(${i});"">Delete</button>
            </div>
        </div>
    </div>`
    }
    document.getElementById('hid').innerHTML = container;
    
}


//delete element from array

 function deletElement(index){

    list.splice(index,1);
    localStorage.setItem('data' , JSON.stringify(list));
    displayElements();
}