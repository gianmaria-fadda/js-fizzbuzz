for (let i = 1; i <= 100 ; i++) {

    if (i % 15 == 0) {
        console.log('FRIZZBUZZ');
    } else if (i % 3 == 0) {
        console.log('FRIZZ');
    } else if (i % 5 == 0) {
        console.log('BUZZ');
    } else {
        console.log(i);
    }

}