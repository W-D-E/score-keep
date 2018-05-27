
export let add =  function (a, b) {
  return a + b;
};

// same as above but this time with exports
let multiply = function (a, b) {
  return a * b;
};
export default multiply;
