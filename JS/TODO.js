let todo =[];

let req = prompt("Please Enter your request");

while(true){
    if(req == "quit"){
        console.log("Quitting the App");
        break;
    }
    if(req == "list"){
        console.log("-------------------");
        for(let i=0; i<todo.length; i++){
            console.log(i,todo[i]);
        }
        console.log("-------------------");
    }else if(req == "add"){
        let task = prompt("Please Enter the task you want to add");
        todo.push(task);
        console.log("Task Added");
    }else if(req == "delete"){
        let index = prompt("Please Enter an index you want to delete");
        todo.splice(index,1);
        console.log("Task Deleted");
    }else{
        console.log("Wrong Request");
    }
    req = prompt("Please Enter your request");
}
