function show_result(){
    let p = document.querySelector("#p").value;
    let c = document.querySelector("#c").value;
    let m = document.querySelector("#m").value;
    let cp = document.querySelector("#cp").value;

    let total = parseFloat(p)+ parseFloat(c)+ parseFloat(m)+ parseFloat(cp);
    let per = (total * 100)/500;
    if (per >= 90){
        document.querySelector(".grade").innerHTML = "A+";
    }
    else if (per >= 80){
        document.querySelector(".grade").innerHTML= "A";
    }
    else if (per >= 70){
        document.querySelector(".grade").innerHTML= "B+";
    }
    else if (per >= 60){
        document.querySelector(".grade").innerHTML= "B";
    }
    else if (per >= 50){
        document.querySelector(".grade").innerHTML= "C+";
    }
    else if (per >= 40){
        document.querySelector(".grade").innerHTML= "C";
    }
    else {
        document.querySelector(".grade").innerHTML= "You are fail";
    }
    document.querySelector(".total").innerHTML = total;
    document.querySelector(".per").innerHTML = per;


    if(per > 30){
    document.querySelector(".result h2").innerHTML = "You are pass";
    }
}
