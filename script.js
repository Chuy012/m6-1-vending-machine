const DEFAULT_SELECT = "SELECT AN ITEM";
const DEFAULT_CREDIT = "$0.00";

function addMoney() {
    document.getElementById("cent10").addEventListener("click", function() {
        let amt = document.getElementById("amount");
        let split = amt.innerHTML.split("$");
        let credit = parseFloat(split[1]) + 0.1;
        amt.innerHTML = "$" + credit.toFixed(2);
    })
    document.getElementById("cent20").addEventListener("click", function() {
        let amt = document.getElementById("amount");
        let split = amt.innerHTML.split("$");
        let credit = parseFloat(split[1]) + 0.2;
        amt.innerHTML = "$" + credit.toFixed(2);
    })
    document.getElementById("dollar").addEventListener("click", function() {
        let amt = document.getElementById("amount");
        let split = amt.innerHTML.split("$");
        let credit = parseFloat(split[1]) + 1;
        amt.innerHTML = "$" + credit.toFixed(2);
    })
}

function selectItem() {
    const selected = document.getElementById("selected-item");
    const items = document.querySelectorAll(".item");
    items.forEach((event) => {
        event.addEventListener("click", function(){
            selected.innerHTML = document.querySelector(`#${event.id} .item-name`).innerHTML
            let amt = document.getElementById("amount");
            let split = amt.innerHTML.split("$");
            let price = document.querySelector(`#${event.id} .item-price`).innerHTML.split("$");
            let credit = parseFloat(split[1]) - parseFloat(price[1]);
            amt.innerHTML = "$" + credit.toFixed(2);
        })
    })
    // document.getElementById("A1").addEventListener("click", function(){
    //     selected.innerHTML = document.querySelector("#A1 .item-name").innerHTML;
    // })
}

function cancel() {
    document.getElementById("cancel").addEventListener("click", function(){
        document.getElementById("amount").innerHTML = DEFAULT_CREDIT;
        document.getElementById("selected-item").innerHTML = DEFAULT_SELECT;
    })
}



(function() {
    addMoney();
    selectItem();
    cancel();

})();