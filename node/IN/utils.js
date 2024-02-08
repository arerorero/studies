export const wait = (time) => {
  return new Promise((resolve, reject) => {
    setTimeout(() => {
      resolve();
    }, time);
  });
};

export const cls = () => {
  process.stdout.write("\x1Bc");
};
