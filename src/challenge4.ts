// print all the multiplication tables with numbers from 1 to 10

for ( let i = 0; i <= 10; i++ ) {
    printTable(i);
    console.log("");
};

function printTable(n : number) {
    for ( let i = 0; i <= 10; i++ ) {
        let row = n + " times " + i + " = " + n * i;
        console.log(row);
    }
};