console.log('>Log from /import/utils.js');

//named exports
export let greetUser = function () {
  return 'Hello user!';
};


export let name = 'Warren EURICLIDE';

//default export
//you can also declare the default value just before you export it
//ex: let defaultV = 'some default value';
// export default defaultV;
export default 'Default val';
