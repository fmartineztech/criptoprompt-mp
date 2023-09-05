const mpCheckoutButton = document.getElementById("mp-checkout-btn");

mpCheckoutButton.addEventListener("click", async () => {
  const res = await fetch("https://43db-191-97-28-76.ngrok-free.app/create-order", {
    method: "POST",
  });
  const data = await res.json();
  window.location.href = data.init_point;
});
