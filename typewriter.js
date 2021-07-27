const sentence = "hello there from lighthouse labs ";
setTimeout(() => process.stdout.write("\n"), (sentence.length + 1)*50)
for (let i = 0; i < sentence.length; i++) {
 
  //console.log(char)
  setTimeout(() => {
    process.stdout.write(sentence[i]);
  }, 50 + 50 * i);
  
};


