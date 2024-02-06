const wait = (time) => {
  return new Promise((resolve, reject) => {
    setTimeout(() => {
      resolve();
    }, time);
  });
};

await wait(1000);
console.log("done");
await wait(1000);
console.log("2sec done");
await wait(1000);
console.log("3sec done");
