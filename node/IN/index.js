if (process.argv[2]) {
  for (let i = 2; i < process.argv.length; i++) {
    console.log(process.argv[i]);
  }
}

console.log(process.env);
