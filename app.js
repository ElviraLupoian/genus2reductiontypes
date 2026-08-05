const tableBody = document.getElementById("reduction-types");
const selectedOnlyButton = document.getElementById("show-selected");
const pinnedOnlyButton = document.getElementById("show-pinned");
const clearSelectionButton = document.getElementById("clear-selection");
const unpinAllButton = document.getElementById("unpin-all");
const rowCount = document.getElementById("row-count");

const selectedIds = new Set();
const pinnedIds = loadPinnedIds();
const rowsById = new Map();

let showSelectedOnly = false;
let showPinnedOnly = false;

function loadPinnedIds() {
  try {
    const stored = JSON.parse(
      localStorage.getItem("genus2-pinned-types") || "[]"
    );
    return new Set(Array.isArray(stored) ? stored : []);
  } catch {
    return new Set();
  }
}

function savePinnedIds() {
  try {
    localStorage.setItem(
      "genus2-pinned-types",
      JSON.stringify([...pinnedIds])
    );
  } catch {
    // The table still works if local storage is unavailable.
  }
}

function fibreHtml(path, altText) {
  if (!path || path === "—") {
    return "—";
  }

  return `
    <img
      src="${path}"
      alt="${altText}"
      class="special-fibre"
      loading="lazy"
    >
  `;
}
function displayWildPrimes(value) {
  if (!Array.isArray(value) || value.length === 0) {
    return "—";
  }

  const primes = value.map(prime =>
    String(prime).replace(/\$/g, "")
  );

  return `$${primes.join(",\\,")}$`;
}

function displayClusterPictures(value, type) {
  if (!Array.isArray(value) || value.length === 0) {
    return "—";
  }

  return `
    <div class="cluster-picture-list">
      ${value.map((src, index) => `
        <img
          src="${src}"
          alt="Cluster picture ${index + 1} for ${type.nuTypePlain}"
          class="cluster-picture"
        >
      `).join("")}
    </div>
  `;
}


function setSelected(id, selected, checkbox, row) {
  if (selected) {
    selectedIds.add(id);
  } else {
    selectedIds.delete(id);
  }

  checkbox.checked = selected;
  row.classList.toggle("row-selected", selected);
  applyRowFilters();
}

function setPinned(id, pinned, button, row) {
  if (pinned) {
    pinnedIds.add(id);
  } else {
    pinnedIds.delete(id);
  }

  button.setAttribute("aria-pressed", String(pinned));
  button.setAttribute(
    "aria-label",
    pinned ? "Unpin this reduction type" : "Pin this reduction type"
  );
  button.title = pinned ? "Unpin row" : "Pin row";
  row.classList.toggle("row-pinned", pinned);

  savePinnedIds();
  sortRows();
  applyRowFilters();
}

for (const [index, type] of window.namikawaUenoTypes.entries()) {
  const row = document.createElement("tr");
  row.dataset.id = type.id;
  row.dataset.index = String(index);

  const mrmFibreHtml = fibreHtml(
    type.mrmfibre,
    `MRM special fibre for ${type.nuTypePlain}`
  );

  const mrncFibreHtml = fibreHtml(
    type.mrncfibre,
    `MRNC special fibre for ${type.nuTypePlain}`
  );

  const isPinned = pinnedIds.has(type.id);

  row.innerHTML = `
    <td class="col-actions row-actions">
      <input
        type="checkbox"
        class="row-selector"
        aria-label="Select ${type.nuTypePlain} for comparison"
        title="Temporarily select this row"
      >
      <button
        type="button"
        class="pin-button"
        aria-pressed="${isPinned}"
        aria-label="${isPinned ? "Unpin" : "Pin"} ${type.nuTypePlain}"
        title="${isPinned ? "Unpin row" : "Pin row"}"
      >
        <svg viewBox="0 0 24 24" aria-hidden="true" focusable="false">
          <path
            fill="currentColor"
            d="M8 3h8l-1 6 3 3v2h-5v7l-1 1-1-1v-7H6v-2l3-3-1-6Z"
          />
        </svg>
      </button>
    </td>
    <th scope="row" class="col-nu">
    <div class="nu-type-line">
    <span class="nu-label-and-page">
      <span class="nu-type">
        <span class="nu-bracket">[</span>${type.nuType}<span class="nu-bracket">]</span>
      </span>
  
      ${
        type.nuPage
          ? `<span class="nu-page">${type.nuPage}</span>`
          : ""
      }
    </span>
  
    ${
      type.parameterRange
        ? `<span class="parameter-range">${type.parameterRange}</span>`
        : ""
    }
  </div>
  </th>
    <td class="col-mrnc">${type.mrncReductionType}</td>
    <td class="col-stable">${type.potentialStableType}</td>
    <td class="col-mrm-pic">${mrmFibreHtml}</td>
    <td class="col-components">${type.numberOfComponents}</td>
    <td class="col-mrnc-pic">${mrncFibreHtml}</td>
    <td class="col-mrnc-components">${type.numberOfComponentsMRNC ?? "—"}</td>
    <td class="col-component">${type.componentGroup}</td>
    <td class="col-conductor">${type.conductorExponent}</td>
    <td class="col-wild">${displayWildPrimes(type.wildPrimes)}</td>
    <td class="col-discriminant">${type.minimalDiscriminant}</td>
    <td class="col-omega">${type.omegaValuation}</td>
    <td class="col-example">${type.example ?? "—"}</td>
    <td class="col-monodromy">${type.monodromyMatrix ?? "—"}</td>
    <td class="col-cluster-pics">
    ${displayClusterPictures(type.clusterPictures, type)}
  </td>
  `;

  const selector = row.querySelector(".row-selector");
  const pinButton = row.querySelector(".pin-button");

  /* Selection is controlled only by the checkbox, so clicking a row does
     not accidentally make selection feel the same as pinning. */
  selector.addEventListener("change", () => {
    setSelected(type.id, selector.checked, selector, row);
  });

  pinButton.addEventListener("click", () => {
    setPinned(type.id, !pinnedIds.has(type.id), pinButton, row);
  });

  row.classList.toggle("row-pinned", isPinned);
  rowsById.set(type.id, row);
  tableBody.appendChild(row);
}

/* Pinned rows move to the top. Selected rows remain in their table order. */
function sortRows() {
  const rows = [...rowsById.values()];

  rows.sort((rowA, rowB) => {
    const aPinned = pinnedIds.has(rowA.dataset.id);
    const bPinned = pinnedIds.has(rowB.dataset.id);

    if (aPinned !== bPinned) {
      return aPinned ? -1 : 1;
    }

    return Number(rowA.dataset.index) - Number(rowB.dataset.index);
  });

  for (const row of rows) {
    tableBody.appendChild(row);
  }

  schedulePinnedStickyOffsets();
}

/*
 * Pinned rows are stacked immediately below the sticky heading row. Each
 * pinned row receives its own top offset, so several pinned rows remain
 * visible without covering one another.
 */
const table = tableBody.closest("table");
const tableHead = table.querySelector("thead");
let stickyLayoutFrame = null;

function updatePinnedStickyOffsets() {
  const headerHeight = tableHead?.getBoundingClientRect().height || 0;
  let nextTop = headerHeight;

  table.style.setProperty("--sticky-header-height", `${headerHeight}px`);

  for (const row of tableBody.querySelectorAll("tr")) {
    const isVisiblePinnedRow =
      pinnedIds.has(row.dataset.id) && !row.hidden;

    if (!isVisiblePinnedRow) {
      row.style.removeProperty("--pinned-top");
      continue;
    }

    row.style.setProperty("--pinned-top", `${nextTop}px`);
    nextTop += row.getBoundingClientRect().height;
  }
}

function schedulePinnedStickyOffsets() {
  if (stickyLayoutFrame !== null) {
    cancelAnimationFrame(stickyLayoutFrame);
  }

  stickyLayoutFrame = requestAnimationFrame(() => {
    stickyLayoutFrame = requestAnimationFrame(() => {
      stickyLayoutFrame = null;
      updatePinnedStickyOffsets();
    });
  });
}

function updateModeButtons() {
  selectedOnlyButton.classList.toggle("active", showSelectedOnly);
  selectedOnlyButton.setAttribute("aria-pressed", String(showSelectedOnly));
  selectedOnlyButton.textContent = showSelectedOnly
    ? "Leave selected-only view"
    : "Show selected only";

  pinnedOnlyButton.classList.toggle("active", showPinnedOnly);
  pinnedOnlyButton.setAttribute("aria-pressed", String(showPinnedOnly));
  pinnedOnlyButton.textContent = showPinnedOnly
    ? "Leave pinned-only view"
    : "Show pinned only";
}

function applyRowFilters() {
  let visibleCount = 0;

  for (const [id, row] of rowsById) {
    const pinned = pinnedIds.has(id);
    const selected = selectedIds.has(id);

    let visible = true;

    if (showSelectedOnly) {
      visible = selected;
    } else if (showPinnedOnly) {
      visible = pinned;
    }

    row.hidden = !visible;

    if (visible) {
      visibleCount += 1;
    }
  }

  rowCount.textContent =
    `Showing ${visibleCount} of ${rowsById.size} rows` +
    ` · ${selectedIds.size} selected` +
    ` · ${pinnedIds.size} pinned`;

  clearSelectionButton.disabled = selectedIds.size === 0;
  unpinAllButton.disabled = pinnedIds.size === 0;

  schedulePinnedStickyOffsets();
}

selectedOnlyButton.addEventListener("click", () => {
  showSelectedOnly = !showSelectedOnly;

  if (showSelectedOnly) {
    showPinnedOnly = false;
  }

  updateModeButtons();
  applyRowFilters();
});

pinnedOnlyButton.addEventListener("click", () => {
  showPinnedOnly = !showPinnedOnly;

  if (showPinnedOnly) {
    showSelectedOnly = false;
  }

  updateModeButtons();
  applyRowFilters();
});

clearSelectionButton.addEventListener("click", () => {
  selectedIds.clear();

  for (const row of rowsById.values()) {
    row.classList.remove("row-selected");
    row.querySelector(".row-selector").checked = false;
  }

  applyRowFilters();
});

unpinAllButton.addEventListener("click", () => {
  pinnedIds.clear();
  savePinnedIds();

  for (const row of rowsById.values()) {
    row.classList.remove("row-pinned");

    const button = row.querySelector(".pin-button");
    button.setAttribute("aria-pressed", "false");
    button.setAttribute("aria-label", "Pin this reduction type");
    button.title = "Pin row";
  }

  sortRows();
  applyRowFilters();
});


const toggles = document.querySelectorAll(
  "#toggler input[type='checkbox'][data-column]"
);

function updateColumn(toggle) {
  const cells = document.querySelectorAll(`.col-${toggle.dataset.column}`);

  for (const cell of cells) {
    cell.hidden = !toggle.checked;
  }

  /*
   * Hiding a picture column changes row heights. Recalculate the vertical
   * offsets of frozen pinned rows so they remain tightly stacked.
   */
  schedulePinnedStickyOffsets();
}

for (const toggle of toggles) {
  updateColumn(toggle);
  toggle.addEventListener("change", () => updateColumn(toggle));
}

function typesetDynamicContent(attempt = 0) {
  if (window.MathJax?.typesetPromise) {
    const table = tableBody.closest("table");
    const controls = document.querySelector(".controls");

    window.MathJax.typesetPromise([table, controls].filter(Boolean))
      .then(schedulePinnedStickyOffsets)
      .catch(() => {});
    return;
  }

  if (attempt < 50) {
    window.setTimeout(() => typesetDynamicContent(attempt + 1), 100);
  }
}

for (const image of tableBody.querySelectorAll("img.special-fibre")) {
  image.addEventListener("load", schedulePinnedStickyOffsets);
}

window.addEventListener("resize", schedulePinnedStickyOffsets);

if ("ResizeObserver" in window) {
  const stickyResizeObserver = new ResizeObserver(schedulePinnedStickyOffsets);
  stickyResizeObserver.observe(table);
  stickyResizeObserver.observe(tableHead);
}

sortRows();
updateModeButtons();
applyRowFilters();
typesetDynamicContent();

