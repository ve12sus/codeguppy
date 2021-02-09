// calculate the sum of odd numbers greater than 10 and less or equal than 30

for ( let i = 11; i <= 30; i ++ ) {
    if ( i % 2 != 0 ) {
        i += i;
    }
    console.log(i);
};