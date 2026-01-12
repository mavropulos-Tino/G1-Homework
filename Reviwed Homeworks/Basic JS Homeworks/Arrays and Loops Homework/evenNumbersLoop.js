function logNumbers() {
    for(let i=1; i<=20; i++) {
        if (i % 2) {
            console.log(`${i} `);
        } else {
            console.log(`${i}\n\n`);
        }
    }
}

logNumbers();