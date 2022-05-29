let itemBoxArray=[];

function addItemInArray(item){
    if(item){
        itemBoxArray.push(item);
    }
}

document.getElementById("addItem").addEventListener('click',function(){

    let item=document.getElementById("userInput").value;
    addItemInArray(item);
    let itemBox=document.getElementById("itemBox");
    itemBox.innerHTML="";
    let i=1;
    for(item of itemBoxArray){
        
        let li=document.createElement('li');
        li.innerText=i+" "+item;
        itemBox.appendChild(li);
        i++;
    }

})


