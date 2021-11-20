function priceInput() {
    var numbers = [];
    var addNumber = prompt("Enter a price:");
    numbers.push(addNumber);
    for (var item of numbers) {
        item = Number(item)
        if(isNaN(item) || item <= 0 ) {
            function numbersAdd(numberContent) {
                var result = "";
                for (var reaction of numberContent) {
                    result = (result)*1 + (reaction)*1;
                }
                return result
            }
            numbers.pop(addNumber);
        } else if (item >= 0) {
            var addNumber = prompt("Enter a price:");
            numbers.push(addNumber);
        }
        
    }
    alert(numbersAdd(numbers));
}
var inputSum = priceInput();