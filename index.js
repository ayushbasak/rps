// jshint esversion:6
$(document).ready(()=>{
    var round = 0;
    let closeModal1 = $(".cross");
    let modal1 = $('#modal-about-me');
    let modal2 = $("#modal-how-to-play");
    // let modal2 = $(".")
    let aboutme = $("#aboutMe");
    let howtoplay = $("#howtoplay");
    let rock = $("#choice-rock");
    let paper = $("#choice-paper");
    let scissors = $("#choice-scissors");

    let scoreA = $("#yourscore");
    let scoreB = $("#computerscore");
    let computerChoice = $("#computerChoice");
    let result = $("#result");
        rock.click(()=>{
            let generate = generateObject();    
            if(generate == "Scissors"){
                scoreA.text(parseInt(scoreA.text())+ 1 + "");
            }
            else if(generate == "Paper"){
                scoreB.text(parseInt(scoreB.text())+ 1 + "");
            }
            computerChoice.text(generate);
            round+=1;
            console.log(round);
        });

        paper.click(()=>{
            let generate = generateObject();
            if(generate == "Rock"){
                scoreA.text(parseInt(scoreA.text())+ 1 + "");
            }
            else if(generate == "Scissors"){
                scoreB.text(parseInt(scoreB.text())+ 1 + "");
            }
            computerChoice.text(generate);
            round+=1;
        });

        scissors.click(()=>{
            let generate = generateObject();
            if(generate == "Paper"){
                scoreA.text(parseInt(scoreA.text())+ 1 + "");
            }
            else if(generate == "Rock"){
                scoreB.text(parseInt(scoreB.text())+ 1 + "");
            }
            computerChoice.text(generate);
            round+=1;
        });
        closeModal1.click(()=>{
            modal1.css("visibility","hidden");
            modal2.css("visibility","hidden");
        });
        aboutme.click(()=>{
            modal1.css("visibility","visible");
        });
        howtoplay.click(()=>{
            modal2.css("visibility","visible");
        });

});

let generateObject = ()=>{
    choices = ["Rock","Paper","Scissors"];
    let choice = choices[Math.floor(Math.random()*choices.length)];
    return choice; 
}; 