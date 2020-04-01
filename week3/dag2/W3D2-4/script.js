const getSucceedingPromise = (message, ms) => {
    const succeedingPromise = new Promise((resolve, reject) => {
      setTimeout(() => resolve(message), ms);
    });
    return succeedingPromise;
  };
  
  const getFailingPromise = (errorMessage, ms) => {
    const failingPromise = new Promise((resolve, reject) => {
      setTimeout(() => reject(errorMessage), ms);
    });
    return failingPromise;
  };
  
  const getRandomSucceedingOrFailingPromise = id => {
    // This randomly resolves to true or false
    let promiseShouldSucceed = Math.random() > 0.5;
    // This gets some semi-random amound of seconds under the 5seconds:
    let randomMillisecond = Math.round(Math.random() * 5000);
    if (promiseShouldSucceed) {
      return getSucceedingPromise(
        `Promise ${id} succeeded in ${randomMillisecond} ms.`,
        randomMillisecond
      );
    } else {
      return getFailingPromise(
        `Promise ${id} failed in ${randomMillisecond} ms.`,
        randomMillisecond
      );
    }
  };
  
  const createPromiseElement = promise => {
    const div = document.createElement("div");
    div.classList = promise.state;
    div.innerHTML = `Promise: ${promise.id}`;
    return div;
  };
  
  const showPromises = promises => {
    const promisesDiv = document.querySelector(".promises");
    promisesDiv.innerHTML = "";
    const promisesElements = promises.map(createPromiseElement);
    promisesElements.forEach(element => promisesDiv.appendChild(element));
  };
  
  const add50Promises = () => {
    let i = 0;
    const allPromises = [];
    // fill the allPromises array with 50 pending promises;
    while (i <= 50) {
      let id = i;
      allPromises.push({
        // state: "pending",
        id
      });
      consumePromise(allPromises, id);
      i++;
    }
    showPromises(allPromises);
  };
  
  const consumePromise = function(allPromises, id) {
    const promise = getRandomSucceedingOrFailingPromise(id);
    console.log(promise);
    promise
      .then(resolved => {
        console.log(`msg: ${resolved}`);
        allPromises[id].state = "resolved";
        // To update the promises colors, call showPromises again
        showPromises(allPromises);
      })
      .catch(error => {
        console.log(`msg: ${error}`);
  
        allPromises[id].state = "errored";
        // To update the promises colors, call showPromises again
        showPromises(allPromises);
      });
  };
  
  const registerEventHandlers = () => {
    document.querySelector("button").addEventListener("click", add50Promises);
  };
  
  document.addEventListener("DOMContentLoaded", () => {
    registerEventHandlers();
  });