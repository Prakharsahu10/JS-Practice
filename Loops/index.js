console.log("I am a tutorial on loops")

let a = 1;

for (let i = 0; i < 100; i++) {
    console.log(a + i);

}

let obj = {
    name: "Prakhar",
    role: "Programmer",
    company: "CodeWithPrakhar"
}

for (const key in obj) {
    const element = obj[key];
    console.log(key, element)
}

let i = 0;
while (i<100) {
    console.log(i) 
    i++
}

