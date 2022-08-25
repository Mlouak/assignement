var arr=["mohamed","jamal","Jaber"];
for (let index = 0; index < arr.length; index++) {
    const element = arr[index];
    if (element[0] ==='j' || element[0] ==='J') {
        console.log("Goodbye " +element);
    }else{
        console.log("Hello " +element);
    }
}