function res1(sem1,sem2,sem3,sem4,sem5,sem6){
    return sem1+sem2+sem3+sem4+sem5+sem6
}

function mul(GPA,credits){
    return GPA*credits
}

function main(GPA,credits){
    return GPA/credits
}
document.querySelector("#btn_sub").addEventListener("click",()=>{
    let GPA1=document.querySelector("#GPA-1").value;
    let GPA2=document.querySelector("#GPA-2").value;
    let GPA3=document.querySelector("#GPA-3").value;
    let GPA4=document.querySelector("#GPA-4").value;
    let GPA5=document.querySelector("#GPA-5").value;
    let GPA6=document.querySelector("#GPA-6").value;
    let Credit1=document.querySelector("#Credit-1").value;
    let Credit2=document.querySelector("#Credit-2").value;
    let Credit3=document.querySelector("#Credit-3").value;
    let Credit4=document.querySelector("#Credit-4").value;
    let Credit5=document.querySelector("#Credit-5").value;
    let Credit6=document.querySelector("#Credit-6").value;
    let Mul1=mul(GPA1,Credit1);
    let Mul2=mul(GPA2,Credit2);
    let Mul3=mul(GPA3,Credit3);
    let Mul4=mul(GPA4,Credit4);
    let Mul5=mul(GPA5,Credit5);
    let Mul6=mul(GPA6,Credit6);
    let addAllCredits=res1(parseFloat(Credit1),parseFloat(Credit2),parseFloat(Credit3),parseFloat(Credit4),parseFloat(Credit5),parseFloat(Credit6));
    let addAllGPA =res1(Mul1,Mul2,Mul3,Mul4,Mul5,Mul6);
    let CGPA= main(addAllGPA,addAllCredits);
    CGPA = CGPA.toFixed(2);
    document.querySelector(".output-section").innerHTML='TOTAL CGPA= ' +CGPA;
 
    if(CGPA>=7.5){
        document.querySelector(".output-section").innerHTML= 'TOTAL CGPA= ' +CGPA +`Congratulation You've passed in "First Class with Distinction"`;    
    }
    else if(CGPA>=6){
        document.querySelector(".output-section").innerHTML= 'TOTAL CGPA= ' +CGPA +`Congratulation You've passed in "First Class"`;    
    }
    else if(CGPA>=5){
        document.querySelector(".output-section").innerHTML= 'TOTAL CGPA= ' +CGPA +`Congratulation You've passed in "Second Class"`;    
        
    }
    else if(CGPA==0){
        document.querySelector(".output-section").innerHTML=` Please Check that numbers you entered is correct`
    }
    else{
        document.querySelector(".output-section").innerHTML= 'TOTAL CGPA= ' +CGPA +`Congratulation You've passed in "Third Class"`;    

    }
    // document.querySelector(".output-section").innerHTML= 
    document.querySelector("#btn_reset").addEventListener('click',()=>{
        document.querySelector(".output-section").innerHTML='TOTAL CGPA ='
        document.querySelector("#GPA-1").value= '';
        document.querySelector("#GPA-2").value= '';
        document.querySelector("#GPA-3").value= '';
        document.querySelector("#GPA-4").value= '';
        document.querySelector("#GPA-5").value= '';
        document.querySelector("#GPA-6").value= '';
        document.querySelector("#Credit-1").value='';
        document.querySelector("#Credit-2").value='';
        document.querySelector("#Credit-3").value='';
        document.querySelector("#Credit-4").value='';
        document.querySelector("#Credit-5").value='';
        document.querySelector("#Credit-6").value='';
    })
    

    
})