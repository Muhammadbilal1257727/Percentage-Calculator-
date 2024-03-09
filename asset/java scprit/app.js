var chemMarks = document.querySelector('#chemMark')
var phyMarks = document.querySelector('#phyMark')
var urduMarks = document.querySelector('#urduMark')
var engMarks = document.querySelector('#engMark')
var sinMarks = document.querySelector('#sinMark')
var studentMarks = document.querySelector('#total-marks')
var percentages = document.querySelector('#percentage')
var grades = document.querySelector('#grade')


function calculate(){
    console.log(chemMarks.value);
    console.log(phyMarks.value);
    console.log(urduMarks.value);
    console.log(engMarks.value);
    console.log(sinMarks.value);



    var total = 500
    var obtainedMarks = +chemMarks.value + +phyMarks.value + +urduMarks.value + +engMarks.value + +sinMarks.value   

    console.log('ObtainedMarks==>',obtainedMarks);
    studentMarks.innerHTML = obtainedMarks

    var studpercentage = obtainedMarks / total  *100
    percentages.innerHTML = studpercentage

    if(studpercentage > 80){
        grades.innerHTML ="A+ "
    }else if(studpercentage > 70){
       grades.innerHTML = "A" 
    }else if(studpercentage > 60 ){
        grades.innerHTML = "B"
    }else if (studpercentage > 50){
        grades.innerHTML = "C"
    }else if (studpercentage > 40){
        grades.innerHTML = "D"
    }else{
        grades.innerHTML = "Fail (Best Of Luck Next Time) "
    }
}