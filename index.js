

function writeCards(array , eventName ){
   

    let eventMessages = [];
    let beforeEach =  () => {
        eventMessages.length = 0;
    }
    beforeEach();
    for (let count = 0; count < array.length; count++){
        eventMessages.push(`Thank you, ${array[count]}, for the wonderful ${eventName} gift!`);
        
    }
    console.log(eventMessages);
    return eventMessages;
}
writeCards(["Ada","Brendan","Ali"], "birthday");

function countDown (){
    let count = 10;
    while (count >=0){
        console.log (count--);
        
    }
    return count;
}
countDown();
