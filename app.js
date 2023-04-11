//question 1

function createAdder(num) {
    return function adder(x) {
      return x + num;
    }
  }


//   question2
const arr = [1, 2, 3, 4, 5];
const value = 3;
const result = searchArray(arr, value);


// question3
function addParagraph(text) {
    const paragraph = document.createElement('p'); 
    paragraph.textContent = text; 
    document.body.appendChild(paragraph); 
  }
  // question4

function addListItem(text) {
  const listItem = document.createElement('li');
  listItem.textContent = text; 
  const list = document.querySelector('ul');
  list.appendChild(listItem); 
}

//question 5
function changeBackgroundColor(element, color) {
    element.style.backgroundColor = color;
  }
  //question 6
  function saveObjectToLocalStorage(key, object) {
    localStorage.setItem(key, JSON.stringify(object));
  }
//question 7
function getObjectFromLocalStorage(key) {
    const jsonString = localStorage.getItem(key);
    if (jsonString === null) {
      return null;
    }
    return JSON.parse(jsonString);
  }
  
 // question 8

 const myObject = { name: 'shari', age: 30, job: 'Developer' };
const newObject = saveObjectToLocalStorage(myObject);
console.log(newObject);

  