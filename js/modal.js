const fnA = function () {
  console.log("Выполняется функция А");

  fnB();
  //return(111);
};

const fnB = function () {
  console.log("Выполняется функция B");

  fnC();
};

const fnC = function () {
  console.log("Выполняется функция C");
};

fnA();
//fnB();
//fnC();