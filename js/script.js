for (let i = 1; i <= 100 ; i++) {
    console.log(i);

    if (i % 3 == 0) {
        console.log('FRIZZ');
    }
    else {
        console.log();
    }

    if (i % 5 == 0) {
        console.log('BUZZ');
    }
    else {
        console.log();
    }

    if (i % 15 == 0) {
        console.log('FRIZZBUZZ');
    }
    else {
        console.log();
    }

}