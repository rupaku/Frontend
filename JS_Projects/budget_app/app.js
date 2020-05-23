/* Budget Controller */
var budgetController = (function(){
    var x = 23;
    var add = function(a){
        return x+a;
    }
    return {
        publicTest: function(b){
            return add(b);
        }
    }
})();

/* UI Controller */
var UIController = (function(){
    var DOMstrings ={
        inputType: '.add__type',
        inputDescription : '.add__description',
        inputValue: '.add__value',
        inputBtn: '.add__btn'
    };
    return {
        getInput: function(){
            return{
              type: document.querySelector(DOMstrings.inputType).value,
              description: document.querySelector(DOMstrings.inputDescription).value,
              value: document.querySelector(DOMstrings.inputValue).value
            };
        },
        getDOMstrings: function(){
            return DOMstrings;
        }
    };
})();

/* Global App Controller */
var controller = (function(budgetctrl, UIctrl){
    var DOM = UIctrl.getDOMstrings();
    var ctrlAddItem = function(){
         // 1. Get the filled input data
         var input = UIctrl.getInput();
         console.log(input);
        // 2. Add the item to budget controller
        // 3. Add the item to UI
        // 4. Calculate the budget
        // 5. DIsplay the budget on UI
    }
    document.querySelector(DOM.inputBtn).addEventListener('click', ctrlAddItem);
    document.addEventListener('keypress', function(event){
        if (event.keyCode === 13 || event.which === 13){
            console.log("ENTER was pressed");
        }

    });

})(budgetController, UIController);