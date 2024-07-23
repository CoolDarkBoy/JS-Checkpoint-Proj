let total = 3000;

console.log("Leap Years between 2000 and 3000 are as follows : \n")

for (let i=2000; i<=total; i++) {
    if (i%4===0 && i%400===0) {
        if (i%100!==0) {
            console.log(i)
        }
    }
}