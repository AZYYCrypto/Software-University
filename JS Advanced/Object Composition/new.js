const example = (function()  {
    let value = 0;
  
    return function () {
      value++;
      console.log(value);
      
    }
  })();
  
  example(); //1
  example(); //2
  