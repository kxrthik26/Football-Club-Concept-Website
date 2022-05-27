//function to return the value of the select
function getSelectedValue(selectList){
    return selectList[selectList.selectedIndex].value;
}

//text colour
var element = document.getElementsByClassName("imgHeading");

function checkOption(formRef){
    if (getSelectedValue(formRef.textColor)=="white"){
        document.getElementById("heading").style.color = "white";
        document.getElementById("description").style.color = "white";
        for (var i = 0; i < element.length; i++){
            element[i].style.color = "white";
        }
       

    }else if(getSelectedValue(formRef.textColor) == "blue"){
        document.getElementById("heading").style.color = "blue";
        document.getElementById("description").style.color = "blue";
        for (var i = 0; i < element.length; i++){
            element[i].style.color = "blue";
        }

    }else if (getSelectedValue(formRef.textColor) == "black"){
        document.getElementById("heading").style.color = "black";
        document.getElementById("description").style.color = "black";
        for (var i = 0; i < element.length; i++){
            element[i].style.color = "black";
        }
    }
}

//backGround color
var polaroidClass = document.getElementsByClassName("polaroid");
var containerClass = document.getElementsByClassName("container");

function checkBackground(formValue){
    if (getSelectedValue(formValue.theam) == "blue"){
        document.body.style.backgroundImage = "url('images/new.jpg')";
        document.getElementById("form1").style.backgroundColor = "#ff5100";
        document.getElementById("form1").style.color = "black";
        document.getElementById("theam").style.backgroundColor = "#ff5100";
        document.getElementById("theam").style.color = "black";
        document.getElementById("textColor").style.backgroundColor = "#ff5100";
        document.getElementById("textColor").style.color = "black";
        for (var i = 0; i < polaroidClass.length; i++){
            polaroidClass[i].style.boxShadow = "0 4px 8px 0 #FF3800, 0 6px 20px 0 #FF3800";
        }
        for (var i = 0; i < containerClass.length;i++){
            containerClass[i].style.backgroundColor = "	#E34234";
        }
       document.getElementById("imgBoxImg").style.boxShadow = "0 5px 25px #FF3800";
    }else if(getSelectedValue(formValue.theam) == "orange"){
        document.body.style.backgroundImage = "url('images/orange_background.jpg')";
        document.getElementById("form1").style.backgroundColor = "#110352";
        document.getElementById("form1").style.color = "white";
        document.getElementById("theam").style.backgroundColor = "#110352";
        document.getElementById("theam").style.color = "#ff5100";
        document.getElementById("textColor").style.backgroundColor = "#110352";
        document.getElementById("textColor").style.color = "#ff5100";
        for (var i = 0; i < polaroidClass.length; i++){
            polaroidClass[i].style.boxShadow = "0 4px 8px 0 #0037cf, 0 6px 20px 0 #0037cf"
        }
        for (var i = 0; i < containerClass.length; i++){
            containerClass[i].style.backgroundColor = "#110352";
        }
        document.getElementById("imgBoxImg").style.boxShadow = '0 5px 25px #0037cf';
    }else if(getSelectedValue(formValue.theam) == "yellow"){
        document.body.style.backgroundImage = "url('images/yellow.jpg')";
        document.getElementById("form1").style.backgroundColor = "#66FF00";
        document.getElementById("theam").style.backgroundColor = "#66FF00";
        document.getElementById("textColor").style.backgroundColor = "#66FF00";
        for (var i = 0; i < polaroidClass.length; i++){
            polaroidClass[i].style.boxShadow = "0 4px 8px 0 #66FF00, 0 6px 20px 0 #66FF00"
        }
        for (var i = 0; i < containerClass.length; i++){
            containerClass[i].style.backgroundColor = "yellow";
        }
        document.getElementById("imgBoxImg").style.boxShadow = '0 5px 25px #66FF00';
       
    }
}


//Img 1 function
function img1Mouseover (){
   document.getElementById("imgBoxImg").src="images/pep.jpg";
   document.getElementById("description").innerHTML=
   "Name : Josep Guardiola Sala<br>Date of Birth : 18 January 1971<br>Current Team : Wekanda Warriors<br>Place of Birth : Santpedor,Spain<br>Avg. terms as Coach : 3.18 Years<br>Age : 50 ";
}

//Img 2 function
function img2Mouseover(){
    document.getElementById("imgBoxImg").src="images/massi.jpg";
    document.getElementById("description").innerHTML=
    "Name : Massimiliano Allegri<br>Date of Birth : 11 Ausgust 1967<br>Current Team : Wekanda Warriors<br>Place of Birth : Livorno,Italy<br>Avg. term as coach : 1.56 Years<br>Age : 53  ";
}
//Img 3 function
function img3Mouseover(){
    document.getElementById("imgBoxImg").src = "images/messi.png";
    document.getElementById("description").innerHTML=
    "Name : Lionel Andrés Messi<br>Date of Birth : 24 June 1987<br>Current Team : Wekanda Warriors<br>Place of Birth : Rosario,Argentina<br>Position : Forward<br>Age : 33";
}

//Img 4 function
function img4Mouseover(){
    document.getElementById("imgBoxImg").src = "images/ronaldo.jpg";
    document.getElementById("description").innerHTML=
    "Name : Cristiano Ronaldo dos Santos Aveiro<br>Date of Birth : 5 February 1985<br>Current Team : Wekanda Warriors<br>Place of Birth : Madeira,Portugal<br>Position : Forward<br>Age : 36 ";
}   

//Img 5 function
function img5Mouseover(){
    document.getElementById("imgBoxImg").src = "images/neimar.jpg";
    document.getElementById("description").innerHTML=
    "Name : Neymar da Silva Santos Júnior<br>Date of Birth : 5 February 1992<br>Current Team : Wekanda Warriors<br>Place of Birth : Mogi das Cruzes, Brazil<br>Position : Forward<br>Age : 29 ";
    
}

//Mouseout event function
function imgMouseout(){
    document.getElementById("imgBoxImg").src="images/custom.jpg";
    document.getElementById("description").innerHTML="";
   
}

//AddEventListener methods for the images
document.getElementById("img1").addEventListener("mouseover",img1Mouseover)
document.getElementById("img1").addEventListener("mouseout",imgMouseout)


document.getElementById("img2").addEventListener("mouseover",img2Mouseover)
document.getElementById("img2").addEventListener("mouseout",imgMouseout)

document.getElementById("img3").addEventListener("mouseover",img3Mouseover)
document.getElementById("img3").addEventListener("mouseout",imgMouseout)

document.getElementById("img4").addEventListener("mouseover",img4Mouseover)
document.getElementById("img4").addEventListener("mouseout",imgMouseout)

document.getElementById("img5").addEventListener("mouseover",img5Mouseover)
document.getElementById("img5").addEventListener("mouseout",imgMouseout)