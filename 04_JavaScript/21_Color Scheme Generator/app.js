const colorInput = document.querySelector("#select_color");
const colorScheme = document.querySelector("#color_scheme");

function fetchColors() {
  fetch(
    `https://www.thecolorapi.com/scheme?hex=${colorInput.value.slice(
      1
    )}&mode=${colorScheme.value.toLowerCase()}&count=5`,
    { method: "GET" }
  )
    .then((response) => response.json())
    .then((colorsList) => {
      const data = colorsList.colors.map((color) => {
        return {
          hex: color.hex.value,
          name: color.name.value,
        };
      });
      renderColors(data);
    });
}

function renderColors(data) {
  console.log(data);
  let html = "";
  data.map((color) => {
    return (html += `
        <div class="colors">
          <div class="color" style="background: ${color.hex};"">
          <span class="color-title">${color.name}<br>
          ${color.hex}</span>
          </div>
      </div>`);
  });
  //   for (color of data) {
  //     html += `
  //         <div class="colors">
  //           <div class="color" style="background: ${color.hex};")">
  //             <h2 class="">${color.name}<br>
  //             ${color.hex}</h2>
  //           </div>
  //       </div>
  //         `;
  //   }
  document.querySelector("#display_colors").innerHTML = html;
}

fetchColors();
document.querySelector("#fetch_colors").addEventListener("click", fetchColors);
