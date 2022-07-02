let button = document.querySelector("#button");document.querySelector("#button").addEventListener("click", () => {

    document.querySelector('p .total').innerHTML = document.querySelector("#price").value*document.querySelector('#var-1').value;
    document.querySelector('p .cantidad').innerHTML = document.querySelector('#variable1').value;
    document.querySelector('p .color_laptopt').style.color = document.querySelector('#variable2').value;
})