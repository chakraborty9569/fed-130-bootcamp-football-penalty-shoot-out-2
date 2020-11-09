//alert("hi");
var turn;
var button=document.getElementById("shoot-button");
onload = ()=>{
    selectTurn();
}
var selectTurn = ()=>{
    turn = Math.round(Math.random())+1;
    console.log(turn);
    if(turn===1){
        button.innerText="Shoot (Manchester City)";
    }
    else{
        button.innerText="Shoot (Liverpool)";
    }
}
const pen=["red","green"];
const team1Dots=document.getElementsByClassName("team1-dot");
const team2Dots=document.getElementsByClassName("team2-dot");
var team1=0;
var team2=0;
var team1Score=0;
var team2Score=0;
var updateScoreBoard = (text)=>{
    if(text=="MCI"){
        var score1=document.getElementById("team-1-score");
        score1.innerText=team1Score;
    }
    else{
        var score2=document.getElementById("team-2-score");
        score2.innerText=team2Score;
    }
}
var updateButtonText = (text)=>{
    button.innerText=text;
}
var handleShootButton = ()=>{
    if(button.innerText=="View Result"){
        var final=document.getElementById("final");
        if(team1Score>team2Score){
            final.innerHTML=`<div class="row" id="result" style="color:#ff2882">
                                    Manchester City Wins
                            </div>`
        }
        else if(team1Score<team2Score){
            final.innerHTML=`<div class="row" id="result" style="color:#ff2882">
                                    Liverpool Wins
                            </div>`
        }
        else{
            final.innerHTML=`<div class="row" id="result" style="color:#ff2882">
                                    Match Drawn
                            </div>`
        }
        var tryagain=document.getElementById("try-button");
        tryagain.style.display = "block";
    }
    else{
        if(button.innerText=="Shoot (Manchester City)")
        {
            if(pen[Math.floor(Math.random()*pen.length)]=="red"){
                team1Dots[team1].style.backgroundColor= "red";
            }
            else{
                team1Dots[team1].style.backgroundColor= "green";
                team1Score++;
                updateScoreBoard("MCI");
            }
            team1++;
            updateButtonText("Shoot (Liverpool)");
        }
        else{
            if(pen[Math.floor(Math.random()*pen.length)]=="red"){
                team2Dots[team2].style.backgroundColor= "red";
            }
            else{
                team2Dots[team2].style.backgroundColor= "green";
                team2Score++;
                updateScoreBoard("LIV");
            }
            team2++;
            updateButtonText("Shoot (Manchester City)");
        }
        if(team1==5 && team2==5){
            updateButtonText("View Result");
        }
    }
}