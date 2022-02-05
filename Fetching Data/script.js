const url = "https://fakestoreapi.com/products";

async function getProducts() {
  const result = await fetch(url);

  const data = await result.json();

  const html = data.map((item) => {
    return `<div class="col-lg-4 col-md-6 col-xs-12 my-3 ">
                <div class="card-container">
                <span class="pro">PRO</span>
                <img
                    class="round"
                    src="${item.image}"
                    alt="user"
                />
                <h3>${item.price}$</h3>
                <span>Rate ${item.rating.rate}  </span>
                <span>Count ${item.rating.count}</span>
                <p>
                   ${item.title.substring(0, 35)}
                </p>
                <div class="buttons">
                    <button class="primary">Buy</button>
                    <button class="primary ghost">Add to basket</button>
                </div>
                </div>
            </div>
    `;
  });

  document.querySelector(".products .row").innerHTML = html.join("");
}

getProducts();
