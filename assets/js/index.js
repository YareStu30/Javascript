let btnCalcular = document.querySelector("#get-total");
btnCalcular.addEventListener("click", () => {
  let inputCantidad = document.querySelector("#cantidad").value;
  let txtmonto = document.querySelector("#monto");
  txtmonto.innerHTML = inputCantidad;
  /*color*/
  let colors = document.querySelector("#colors").value;
  document.querySelector("#selectedColor");
  document.getElementById("coloruser").style.color = colors;
  let selectPrice = document.querySelector("#price").value;
  let txtTotal = document.querySelector("#total");
  txtTotal.innerHTML = selectPrice * inputCantidad;
});
