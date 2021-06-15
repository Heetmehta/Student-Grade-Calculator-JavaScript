const STDCalcy = () => {
    let wd = document.getElementById('wd').value;
    let ds = document.getElementById('ds').value;
    let py = document.getElementById('py').value;
    let ai = document.getElementById('ai').value;
    let grades = "";

    let totalmarks = parseFloat(wd) + parseFloat(ds) + parseFloat(py) + parseFloat(ai);
    
    let percantage = (totalmarks/400) * 100;
    
    if(wd == "" || ds == "" || py == "" || ai == ""){
        alert("Field must be filled out.");
        return false;
    }

    if(wd > 100 || ds > 100 || py > 100 || ai > 100){
        alert("Value should not be greater than 100.");
        return false;
    }

    if(percantage <= 100 && percantage >= 80){
        grades = 'A';
    }
    else if(percantage <= 79 && percantage >= 60){
        grades = 'B';
    }
    else if(percantage <= 59 && percantage >= 40){
        grades = 'C';
    }
    else{
        grades = 'F';
    }

    if(percantage >= 40){
        document.getElementById('showData').innerHTML = `Out of Total 400 your score is ${totalmarks}. <br>
        Your percantage is <span style="color:#A8DDA8">${percantage}%</span>. <br>
        <span style="color:#A8DDA8">Congratulation!</span> You are <span style="color:#A8DDA8">Pass</span>. Enjoy!!` ;
    }
    else{
        document.getElementById('showData').innerHTML = `Out of Total 400 your score is ${totalmarks}. <br>
        Your percantage is <span style="color:red">${percantage}%</span>. <br>
        <span style="color:red">Better Luck Next Time!</span> You are <span style="color:red">Fail</span>.` ;
    }

  }