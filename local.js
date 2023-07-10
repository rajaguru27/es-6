localStorage.setItem("bike",
  JSON.stringify({
    name:"TVS",
    price:50000,
    color:"black"
  }))
  var b=JSON.parse(localStorage.setItem)("bike");
  console.log(b);