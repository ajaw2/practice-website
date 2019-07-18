list = [];

const pushToList = () => {
    let input = document.getElementById('exampleInputEmail1').value;
    list.push(input);
    console.log(`variable pushed: ${input}`);
}

const popFromList = () => {
    let popped = list[0];
    if (popped == null) {
        console.log("Array is empty.");
    } else {
        console.log(`${popped}`);
        list.shift();
        console.log(`variable popped: ${popped}`);
    }
    
}

const printList = () => {
    console.log(list);
}