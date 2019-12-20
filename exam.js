var header=document.getElementsByClassName("header")[0];
header.innerHTML="Family Members True And False Exam";
header.style.textAlign="center";
header.style.fontSize="30px";
header.style.marginTop="50px"
header.style.fontWeight="bold"
//json exam
//JSON.stringify(data);
        //var mydata = JSON.parse(data);
        //mydata[0]
        //alert(mydata[2].header);
       //for (var i = 0;i<data.lenght;i++){
      
           //q1
          /*trueInp=document.createElement("input")
        trueInp.setAttribute("type","radio");
        trueInp.setAttribute("name","btn");
           falseInp=document.createElement("input");
           falseInp.setAttribute("type","radio");
           falseInp.setAttribute("name","btn");
     var ans1=trueInp +data[0].answer1;
     var ans2= falseInp+data[0].answer2;*/
   
     //var trueInp=document.getElementById("trueBtn");
//var falseInp=document.getElementById("falseBtn");

       //
       //function func (){
      
       /*var cont1= document.getElementsByClassName("cont")[0];
       cont1.innerHTML=(data[0].header+data[0].title+"<br>"+"<br>"+"&nbsp;"+"&nbsp;"+"&nbsp;"+"&nbsp;"+"&nbsp;"+"&nbsp;"+"&nbsp;") 
       cont1.innerHTML+=(trueInp +data[0].answer1+"&nbsp;"+"&nbsp;"+"&nbsp;"+"&nbsp;"+"&nbsp;"+"&nbsp;"+"&nbsp;"+"&nbsp;")
       cont1.innerHTML+=( falseInp+data[0].answer2)
       cont1.style.marginLeft="50px";
       cont1.style.marginTop="50px";
       cont1.style.fontSize="20px"*/
//if(data[0].correctAnswer==)



//q1
var cont1= document.getElementsByClassName("cont")[0];
cont1.innerHTML=(data[0].header+data[0].title+"<br>"+"<br>") 
cont1.innerHTML+=("<input type=radio name=btn0  value=true id=tinp1>" + data[0].answer1+"&nbsp;"+"&nbsp;"+"&nbsp;"+"&nbsp;"+"&nbsp;"+"&nbsp;"+"&nbsp;")
cont1.innerHTML+=("<input type=radio name=btn0 value=false id=finp1>"+data[0].answer2)
cont1.style.marginLeft="50px";
cont1.style.marginTop="50px";
cont1.style.fontSize="20px"
cont1.style.fontWeight="700"






//q2
var cont2= document.getElementsByClassName("cont")[1];
cont2.innerHTML=(data[1].header+data[1].title+"<br>"+"<br>") 
cont2.innerHTML+=("<input type=radio name=btn1  value=true id=tinp2>" + data[1].answer1+"&nbsp;"+"&nbsp;"+"&nbsp;"+"&nbsp;"+"&nbsp;"+"&nbsp;"+"&nbsp;")
cont2.innerHTML+=("<input type=radio name=btn1 value=false id=finp2>"+data[1].answer2)
cont2.style.marginLeft="50px";
cont2.style.fontSize="20px"
cont2.style.marginTop="50px";
cont2.style.fontWeight="700"
//q3
var cont3= document.getElementsByClassName("cont")[2];
cont3.innerHTML=(data[2].header+data[2].title+"<br>"+"<br>") 
cont3.innerHTML+=("<input type=radio name=btn2  value=true id=tinp3>" + data[2].answer1+"&nbsp;"+"&nbsp;"+"&nbsp;"+"&nbsp;"+"&nbsp;"+"&nbsp;"+"&nbsp;")
cont3.innerHTML+=("<input type=radio name=btn2 value=false id=finp3>"+data[2].answer2)
cont3.style.marginLeft="50px";
cont3.style.marginTop="50px";
cont3.style.fontSize="20px"
cont3.style.fontWeight="700"
//q4
var cont4= document.getElementsByClassName("cont")[3];
cont4.innerHTML=(data[3].header+data[3].title+"<br>"+"<br>") 
cont4.innerHTML+=("<input type=radio name=btn3  value=true id=tinp4>" + data[3].answer1+"&nbsp;"+"&nbsp;"+"&nbsp;"+"&nbsp;"+"&nbsp;"+"&nbsp;"+"&nbsp;")
cont4.innerHTML+=("<input type=radio name=btn3 value=false id=finp4>"+data[3].answer2)
cont4.style.marginLeft="50px";
cont4.style.marginTop="50px";
cont4.style.fontSize="20px"
cont4.style.fontWeight="700"
//q5
var cont5= document.getElementsByClassName("cont")[4];
cont5.innerHTML=(data[4].header+data[4].title+"<br>"+"<br>") 
cont5.innerHTML+=("<input type=radio name=btn4  value=true id=tinp5>" + data[4].answer1+"&nbsp;"+"&nbsp;"+"&nbsp;"+"&nbsp;"+"&nbsp;"+"&nbsp;"+"&nbsp;")
cont5.innerHTML+=("<input type=radio name=btn4 value=false id=finp5>"+data[4].answer2)
cont5.style.marginLeft="50px";
cont5.style.marginTop="50px";
cont5.style.fontSize="20px"
cont5.style.fontWeight="700"
//q6
var cont6= document.getElementsByClassName("cont")[5];
cont6.innerHTML=(data[5].header+data[5].title+"<br>"+"<br>") 
cont6.innerHTML+=("<input type=radio name=btn5  value=true id=tinp6>" + data[5].answer1+"&nbsp;"+"&nbsp;"+"&nbsp;"+"&nbsp;"+"&nbsp;"+"&nbsp;"+"&nbsp;")
cont6.innerHTML+=("<input type=radio name=btn5 value=false id=finp6>"+data[5].answer2)
cont6.style.marginLeft="50px";
cont6.style.marginTop="50px";
cont6.style.fontSize="20px"
cont6.style.fontWeight="700"
//q7
var cont7= document.getElementsByClassName("cont")[6];
cont7.innerHTML=(data[6].header+data[6].title+"<br>"+"<br>") 
cont7.innerHTML+=("<input type=radio name=btn6  value=true id=tinp7>" + data[6].answer1+"&nbsp;"+"&nbsp;"+"&nbsp;"+"&nbsp;"+"&nbsp;"+"&nbsp;"+"&nbsp;")
cont7.innerHTML+=("<input type=radio name=btn6 value=false id=finp7>"+data[6].answer2)
cont7.style.marginLeft="50px";
cont7.style.marginTop="50px";
cont7.style.fontSize="20px"
cont7.style.fontWeight="700"
//q8
var cont8= document.getElementsByClassName("cont")[7];
cont8.innerHTML=(data[7].header+data[7].title+"<br>"+"<br>") 
cont8.innerHTML+=("<input type=radio name=btn7  value=true id=tinp8>" + data[7].answer1+"&nbsp;"+"&nbsp;"+"&nbsp;"+"&nbsp;"+"&nbsp;"+"&nbsp;"+"&nbsp;")
cont8.innerHTML+=("<input type=radio name=btn7 value=false id=finp8>"+data[7].answer2)
cont8.style.marginLeft="50px";
cont8.style.marginTop="50px";
cont8.style.fontSize="20px"
cont8.style.fontWeight="700"
//q9
var cont9= document.getElementsByClassName("cont")[8];
cont9.innerHTML=(data[8].header+data[8].title+"<br>"+"<br>") 
cont9.innerHTML+=("<input type=radio name=btn8  value=true id=tinp9>" + data[8].answer1+"&nbsp;"+"&nbsp;"+"&nbsp;"+"&nbsp;"+"&nbsp;"+"&nbsp;"+"&nbsp;")
cont9.innerHTML+=("<input type=radio name=btn8 value=false id=finp9>"+data[8].answer2)
cont9.style.marginLeft="50px";
cont9.style.marginTop="50px";
cont9.style.fontSize="20px"
cont9.style.fontWeight="700"
//q10
var cont10= document.getElementsByClassName("cont")[9];
cont10.innerHTML=(data[9].header+data[9].title+"<br>"+"<br>") 
cont10.innerHTML+=("<input type=radio name=btn9  value=true id=tinp10>" + data[9].answer1+"&nbsp;"+"&nbsp;"+"&nbsp;"+"&nbsp;"+"&nbsp;"+"&nbsp;"+"&nbsp;")
cont10.innerHTML+=("<input type=radio name=btn9 value=false id=finp10>"+data[9].answer2)
cont10.style.marginLeft="50px";
cont10.style.marginTop="50px";
cont10.style.fontSize="20px"
cont10.style.fontWeight="700"
//}
 document.getElementById("sub").onclick=gradeSum;
 function gradeSum(){
    //q1check
    point=0;
   
    if(document.getElementById("finp1").checked==data[0].correctAnswer){
   
point+=1;
console.log(point)
}

 //q2check
if(data[1].correctAnswer==document.getElementById("tinp2").checked){   
point+=1
console.log(point);}
 //q3check
if(data[2].correctAnswer==document.getElementById("finp3").checked){   
   point+=1
   console.log(point);}
    //q4check
   if(data[3].correctAnswer==document.getElementById("finp4").checked){   
      point+=1
      console.log(point);}
       //q5check
      if(data[4].correctAnswer==document.getElementById("tinp5").checked){   
         point+=1
         console.log(point);}
          //q6check
         if(data[5].correctAnswer==document.getElementById("tinp6").checked){   
            point+=1
            console.log(point);}
              //q7check
            if(data[6].correctAnswer==document.getElementById("tinp7").checked){   
               point+=1
               console.log(point);}
                 //q8check
               if(data[7].correctAnswer==document.getElementById("tinp8").checked){   
                  point+=1
                  console.log(point);}
                  //q9check
                  if(data[8].correctAnswer==document.getElementById("finp9").checked){   
                     point+=1
                     console.log(point);}
                     //q10check
                     if(data[9].correctAnswer==document.getElementById("finp10").checked){   
                        point+=1
                        console.log(point);
                     }

                     alert("your grade ="+point)
                  }
                 
/*for(i=0;i<=10;i++){
   var cont10= document.getElementsByClassName("cont")[i];
   cont10.innerHTML=(data[i].header+data[i].title+"<br>"+"<br>") 
   cont10.innerHTML+=("<input type=radio name=btn  value=true id=trueinp>" + data[i].answer1+"&nbsp;"+"&nbsp;"+"&nbsp;"+"&nbsp;"+"&nbsp;"+"&nbsp;"+"&nbsp;")
   cont10.innerHTML+=("<input type=radio name=btn value=false id=falseInp>"+data[i].answer2)
   cont10.style.marginLeft="50px";
   cont10.style.marginTop="50px";
   cont10.style.fontSize="20px"
   cont10.style.fontWeight="700"
}*/

//document.getElementById("sub").onclick=func;


         //}
