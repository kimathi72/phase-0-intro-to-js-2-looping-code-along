// Code your solutions in this file
// Code your solutions in this file
const gifts=["Guadalupe", "Ollie", "Aki"];
function writeCards(){
    const response=[];
    let q;
    for(q=0; q<gifts.length; q++){
       response[q]=`Thank you, ${gifts[q]}, for the wonderful surprise gift!`
      
    }
    return response;
}

function countDown(){
    let y=10
    while(y>=0){
        console.log(y--);

    }
}