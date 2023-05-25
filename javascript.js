let playerSelection;
let computerChoice=getComputerChoice();

let count =0;
let total=0;



function getComputerChoice(){
    let arr=["rock","paper","scissors"];
    let rand= Math.floor(Math.random()*arr.length);
    return arr[rand];
}



function playRound(playerSelection,computerChoice){
    playerSelection = prompt("enter rock,paper or scissors");
    playerSelection = playerSelection.toLowerCase();

    let res ="hi";
    if(playerSelection=="rock"){
        if(computerChoice=="paper"){
            res="you lose papper beats rock";
            total++;
            
        }
        else if(computerChoice=="scissors"){
             res="you won rock beats scissors";
              count++;
            
        }
        else if (computerChoice=="rock"){
           res="match draw";
            
        }
        return res;
    }

    
    if(playerSelection=="paper"){
       
    
        
       if(computerChoice=="scissors"){
        res="you lose scissors beats papper";
        total++;
           
        }
        else if(computerChoice=="rock"){
            res= "you won papper beats rock";
             count++;
           
        }
        else{
            res= "match draw";
          
        }
       
        return res;
    }
    if(playerSelection=="scissors"){
    
        
        if(computerChoice=="rock"){
            res="you lose rock beats scissors";
            total++;
            
         }
         else if(computerChoice=="paper"){
            res="you won scissos beats papper";
            count = count+1;
          
         }
         else{
            res="match draw";
          
         }
    
         

        }
       return res;

    }
    //let result =" ";
     
 
function game(){
    for(i=1;i<6;i++){
      result  = playRound(playerSelection,computerChoice);
    
      console.log(result,"player="+ count, "computer="+total);
      
}
return " ";
    }
final=function (){
    if(count>total){
       return "player won";
    }
    else if(total>count){
        return "computer won";
    }
    else{
        return " match tie";
    }
}
    

console.log(game(),final()); //,"player="+ count, "computer="+total);


