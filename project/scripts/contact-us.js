const products = [
    {
      id: "qc",
      name: "Quality concerns",
      averagerating: 4.5
    },
    {
      id: "ad",
      name: "Advising",
      averagerating: 4.7
    },
    {
      id: "htso",
      name: "How to shop online",
      averagerating: 3.5
    },
    {
      id: "ref",
      name: "Refunds",
      averagerating: 3.9
    },
    {
      id: "suggestions",
      name: "Suggestions",
      averagerating: 5.0
    }
  ];
  
  const selectProduct = document.getElementById("product");
  
  
  products.forEach((product) => {
    const option = document.createElement("option");
    option.value = product.id;
    option.textContent = product.name;
    selectProduct.appendChild(option);
  })
  