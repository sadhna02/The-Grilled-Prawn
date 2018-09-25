//Responsive Navigation Bar
const navigation = () => {
var x = document.getElementById("nav");
if (x.className === "navigation__ul") {
x.className = "navigation__navbar--responsive";
} else {
x.classList = "navigation__ul";
}
}
//Show and hide Accordion
const toggleAccordion = () => {
const toggleAccordion = document.getElementById("filter-accordion-list");
const togglebtn = document.getElementsByClassName("accordion__togglebtn");
if (toggleAccordion.style.display === "none") {
toggleAccordion.style.display = "block";
togglebtn.style = "border-radius: 4px 4px 4px 4px";
document.getElementById("accordion__toggleimg").src = "images/minus-icon.png";
} else {
toggleAccordion.style.display = "none";
document.getElementById("accordion__toggleimg").src = "images/plus-icon.png";
}
}
//variable for row count
const rowItem = 4,
deleteItem = 'delete',
list = document.getElementById('newsletter__record'),
ListCount = list.childNodes.length;
const addNewsToList = (...args) => {
const obj = {
name: args[0],
surname: args[1],
email: args[2]
};
if (list.childNodes.length >= rowItem) {
document.getElementById('newsletter__form').classList.add("news_hidden");
document.getElementById('newsletter__hide-message').classList.remove("news_hidden");
} else {
if (list.childNodes.length 
<= rowItem) {
          const row = document.createElement('div');
          row.innerHTML = `
          <div class="newsletter__element">
<label for="newsletter__name" class="newsletter__lbl">Name
</label>
<input  class="newsletter__input" type="text"  name="newsletter__name" value= "${obj.name}" />
</div>
<div class="newsletter__element">
  <label for="newsletter__surname" class="newsletter__lbl">Surname
  </label>
  <input  class="newsletter__input" type="text" name="newsletter__surname" value= "${obj.surname}" />
</div>
<div class="newsletter__element">
  <label for="newsletter__email" class="newsletter__lbl">Email address 
  </label>
  <input  class="newsletter__input" type="text"  name="newsletter__email" value= "${obj.email}" /> 
</div>
<div class="newsletter__element newsletter__delete"  onclick="deleteNewsList(this)" id="delete"> 
  <img class="newsletter__delete-img" src="images/delete.png" alt="Remove"> Remove
</div>
<hr class="newsletter__hr">`
list.appendChild(row);
}
}
clearNewsField();
}
// Delete Items
const deleteNewsList = (value) => {
if (ListCount 
<= rowItem) {
          document.getElementById('newsletter__form').classList.remove("news_hidden");
          document.getElementById('newsletter__hide-message').classList.add("news_hidden");
          }
          if (value.id === deleteItem) value.parentElement.remove();
          }
          //Clear Fields
          const clearNewsField = () => {
  document.getElementById('name').value = '';
  document.getElementById('surname').value = '';
  document.getElementById('email').value = '';
  }
  //Send Input Data
  const sendNewsList = (...args) => {
  console.log(list);
  let newsList = [];
  let newsListObj = {
  'name': args[0],
  'surname': args[1],
  'email': args[2]
  }
  newsList.push(newsListObj);
  console.log(newsListObj);
  clearNewsField();
  }
  function validate() {
  var errorNode = this.parentNode.querySelector(".error"),
  span = document.createElement("span")
  this.classList.remove("invalid");
  if (errorNode) {
  errorNode.parentNode.removeChild(errorNode);
  }
  if (!this.validity.valid) {
  this.classList.add("invalid");
  this.parentNode.appendChild(span);
  span.classList.add("error");
  span.innerHTML = this.getAttribute(
  this.validity.valueMissing ? "data-required-message" : "data-type-message");
  }
  };
  var form = document.querySelector("form"),
  inputs = form.querySelectorAll("input");
  for (var i = 0; i 
  < inputs.length; i++) {
                  inputs[i].addEventListener("blur", validate);
                  inputs[i].addEventListener("invalid", validate);
                  };
                  // Turn off the bubbles
                  form.addEventListener("invalid", function (event) {
                  event.preventDefault();
                  }, true);
                  // Support: Safari, iOS Safari, default Android browser
                  document.querySelector("form").addEventListener("submit", function (event) {
                  if (true) {
                  addNewsToList(document.getElementById('name').value, document.getElementById('surname').value, document.getElementById('email').value);
                  event.preventDefault();
                  } else {
                  event.preventDefault();
                  }
                  });
                  //navigate to top
                  const returntop = () =>
    {
    scroll(0,0);
    }
