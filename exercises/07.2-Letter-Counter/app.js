let par = "Lorem ipsum dolor sit amet consectetur adipiscing elit Curabitur eget bibendum turpis Curabitur scelerisque eros ultricies venenatis mi at tempor nisl Integer tincidunt accumsan cursus"
let counts = {};
counts=par.split(",");
// your code here
for (var i in counts ){
    counts[i]=counts[i].split(",")
}
console.log(counts);

