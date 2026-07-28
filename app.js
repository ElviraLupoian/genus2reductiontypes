const tableBody = document.getElementById("reduction-types");

function fibreHtml(path, altText) {
  if (!path || path === "—") {
    return "—";
  }

  return `
    <img
      src="${path}"
      alt="${altText}"
      class="special-fibre"
    >
  `;
}

for (const type of window.namikawaUenoTypes) {
  const row = document.createElement("tr");

  const mrmFibreHtml = fibreHtml(
    type.mrmfibre,
    `MRM special fibre for ${type.nuTypePlain}`
  );

  const mrncFibreHtml = fibreHtml(
    type.mrncfibre,
    `MRNC special fibre for ${type.nuTypePlain}`
  );

  const wildPrimesHtml =
    Array.isArray(type.wildPrimes) && type.wildPrimes.length > 0
      ? type.wildPrimes.join(", ")
      : "—";

  row.innerHTML = `
    <th scope="row" class="col-nu">${type.nuType}</th>
    <td class="col-mrnc">${type.mrncReductionType}</td>
    <td class="col-stable">${type.potentialStableType}</td>
    <td class="col-mrm-pic">${mrmFibreHtml}</td>
    <td class="col-mrnc-pic">${mrncFibreHtml}</td>
    <td class="col-components">${type.numberOfComponents}</td>
    <td class="col-component">${type.componentGroup}</td>
    <td class="col-tamagawa">${type.tamagawaNumber}</td>
    <td class="col-conductor">${type.conductorExponent}</td>
    <td class="col-wild">${wildPrimesHtml}</td>
    <td class="col-discriminant">${type.minimalDiscriminant}</td>
    <td class="col-omega">${type.omegaValuation}</td>
  `;

  tableBody.appendChild(row);
}

const toggles = document.querySelectorAll(
  "#toggler input[type='checkbox']"
);

function updateColumn(toggle) {
  const columnName = toggle.dataset.column;
  const cells = document.querySelectorAll(`.col-${columnName}`);

  for (const cell of cells) {
    cell.hidden = !toggle.checked;
  }
}

for (const toggle of toggles) {
  updateColumn(toggle);

  toggle.addEventListener("change", function () {
    updateColumn(this);
  });
}

if (window.MathJax?.typesetPromise) {
  const table = tableBody.closest("table");
  window.MathJax.typesetPromise(table ? [table] : [tableBody]);
}

