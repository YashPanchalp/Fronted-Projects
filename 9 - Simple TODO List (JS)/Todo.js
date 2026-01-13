let req = prompt("Enter your request :");

let todo = [];

while (true) {  // to take req repeatadely//

    if (req === "Quit") {
        console.log("Quiting the Todo list");
        break;
    }

    if (req == "List") {
        console.log("Your daily activities :");
        console.log("-------------------------");
        for (act of todo) {
            console.log(act);
        }
        console.log("-------------------------");
    }
    else if (req == "Add") {
        let add = prompt("Enter which activity to add :");
        todo.push(add);
        console.log(`Sucessfully added ${add}`);
    }
    else if (req == "Delete") {
        let rmv = prompt("Enter activity you want to remove activity");
        let idx = todo.indexOf(rmv);
        todo.splice(idx, 1);
        console.log(`Sucessfully removed1 ${todo[rmv]}`);
    }
    else {
        console.log("Enter valid req");
        break;
    }
    req = prompt("Enter your request");
}