//Responsive Navigation Bar
const navigation = () => {
    var x = document.getElementById("nav");
    if (x.className === "grilled-navigation__navbar--ul") {
        x.className =  "navigation__navbar--responsive";
    } else {
        x.classList = "grilled-navigation__navbar--ul";
    }
}

//Show and hide Accordion
const toggleAccordion = () => {
    const toggleAccordion = document.getElementById("filter-accordion-list");
    if (toggleAccordion.style.display === "none") {
        toggleAccordion.style.display = "block";
    } else {
        toggleAccordion.style.display = "none";
    }
}

// function toggleCheckbox() {
 
//     var checkbox = document.getElementsByClassName('grilled-recipe__accordion-list-lbl-chkbox');
//     checkbox.checked = !checkbox.checked;
//   }

//variable for row count
const rowItem = 4,
      deleteItem = 'delete',
      list = document.getElementById('grilled-news__list'),
      ListCount = list.childNodes.length;
const addNewsToList = (...args) => {
    const obj = { name: args[0],surname: args[1],email: args[2]};
    if(list.childNodes.length >= rowItem) {
        document.getElementById('news__inline').classList.add("news_hidden");
        document.getElementById('news__hide-message').classList.remove("news_hidden");  
      } else {
          if(list.childNodes.length <= rowItem){
              const row = document.createElement('div');
              row.innerHTML = `<div class="news__inline-list">
              <label for="news-list-name" class="news__inline-label">Name</label>
              <input  class="grilled-news__section-input" type="text"  name="news-list-name" value= "${obj.name}" />
              </div>
              <div class="news__inline-list">
              <label for="news-surname" class="news__inline-label">Surname</label>
              <input  class="grilled-news__section-input" type="text" name="news-surname" value= "${obj.surname}" />
              </div>
              <div class="news__inline-list">
              <label for="news-email" class="news__inline-label">Email address </label>
              <input  class="grilled-news__section-input" type="text"  name="news-email" value= "${obj.email}" /> 
              </div>
              <div class="news__inline-list news__remove"  onclick="deleteNewsList(this)" id="delete"> 
              <img class="news__inline-list-delete" src="images/delete.png" alt="Remove"> Remove</div>`
           list.appendChild(row);
          }
      }
      clearNewsField();
  }
// Delete Items
const deleteNewsList = (value) => {
    if(ListCount <= rowItem) {
        document.getElementById('news__inline').classList.remove("news_hidden");
        document.getElementById('news__hide-message').classList.add("news_hidden");
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
    var errorNode = this.parentNode.querySelector( ".error" ),
        span = document.createElement( "span" )
    
    this.classList.remove( "invalid" );
    if ( errorNode ) {
        errorNode.parentNode.removeChild( errorNode );
    }

    if ( !this.validity.valid ) {
        this.classList.add( "invalid" );
        this.parentNode.appendChild( span );
        span.classList.add( "error" );
        span.innerHTML = this.getAttribute(
            this.validity.valueMissing ? "data-required-message" : "data-type-message" );
    }
};

var form = document.querySelector( "form" ),
    inputs = form.querySelectorAll( "input" );

for ( var i = 0; i < inputs.length; i++ ) {
    inputs[ i ].addEventListener( "blur", validate );
    inputs[ i ].addEventListener( "invalid", validate );
};

// Turn off the bubbles
form.addEventListener( "invalid", function( event ) {
    event.preventDefault();
}, true );

// Support: Safari, iOS Safari, default Android browser
document.querySelector( "form" ).addEventListener( "submit", function( event ) {
    if ( true) {
        addNewsToList(document.getElementById('name').value,document.getElementById('surname').value,document.getElementById('email').value);
        event.preventDefault();
    } else {
        event.preventDefault();
    }
    
});


