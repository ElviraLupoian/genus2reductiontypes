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

const clusterPictureColumnStats = new Map();

for (const type of window.namikawaUenoTypes) {
  if (
    !Array.isArray(type.clusterPictures) ||
    !Array.isArray(type.clusterPictureLayout)
  ) {
    continue;
  }

  const stableType = type.potentialStableTypePlain;
  const columnCount = type.clusterPictureLayout.length;

  if (!clusterPictureColumnStats.has(stableType)) {
    clusterPictureColumnStats.set(stableType, {
      pictures: Array(columnCount).fill(0),
      rows: Array(columnCount).fill(0)
    });
  }

  const stats = clusterPictureColumnStats.get(stableType);

  type.clusterPictureLayout.forEach((count, index) => {
    stats.pictures[index] += count;

    if (count > 0) {
      stats.rows[index] += 1;
    }
  });
}

/*
 * Within each potential stable type, put the most frequently occurring
 * cluster-picture shape first.  "Frequency" means the total number of
 * pictures placed in that zoo column across the stable type.  Ties are
 * broken by the number of rows in which the column occurs, then by the
 * original zoo order.
 */
const clusterPictureColumnOrder = new Map();

for (const [stableType, stats] of clusterPictureColumnStats) {
  const order = stats.pictures
    .map((_, index) => index)
    .sort((a, b) =>
      stats.pictures[b] - stats.pictures[a] ||
      stats.rows[b] - stats.rows[a] ||
      a - b
    );

  clusterPictureColumnOrder.set(stableType, order);
}

/*
 * These exceptional rows are specialisations of the family immediately
 * above them. Keep them in the same zebra-stripe group as that family so
 * their relationship remains visible across the full width of the table.
 */
const smallCaseIds = new Set([
  "iv-star-ii-0",
  "iii-star-ii-0",
  "i-star0-iii-star-minus1",
  "i-star0-iv-star-minus1",
  "i-star0-ii-star-minus1",
  "iii-star-iii-star-minus1",
  "iv-star-iii-star-minus1",
  "ii-star-iii-star-minus1",
  "iv-iii-star-minus1",
  "ii-star-iii-minus1",
  "iv-star-iv-star-minus1",
  "ii-star-iv-star-minus1",
  "ii-star-ii-star-minus1",
  "ii-star-iv-minus1",
  "iii-star-i-star-l-minus1",
  "iv-star-i-star-l-minus1",
  "ii-star-i-star-l-minus1"
]);

function displayClusterPictures(value, type) {
  if (!Array.isArray(value) || value.length === 0) {
    return "—";
  }

  const layout =
    Array.isArray(type.clusterPictureLayout) &&
    type.clusterPictureLayout.reduce((sum, n) => sum + n, 0) === value.length
      ? type.clusterPictureLayout
      : value.map(() => 1);

  let nextPicture = 0;

  const originalColumns = layout.map(count => {
    const pictures = value.slice(nextPicture, nextPicture + count);
    nextPicture += count;
    return pictures;
  });

  const order =
    clusterPictureColumnOrder.get(type.potentialStableTypePlain) ||
    originalColumns.map((_, index) => index);

  const columns = order.map(originalIndex => originalColumns[originalIndex]);

  let pictureNumber = 0;

  const columnsHtml = columns.map((pictures, displayColumn) => `
    <div
      class="cluster-picture-stack"
      data-cluster-column="${displayColumn}"
      style="
        display:flex;
        flex-direction:column;
        align-items:flex-start;
        justify-content:center;
        gap:8px;
        min-width:0;
        width:max-content;
        overflow:visible;
      "
    >
      ${pictures.map(src => {
        pictureNumber += 1;

        return `
          <img
            data-src="${src}"
            alt="Cluster picture ${pictureNumber} for ${type.nuTypePlain}"
            class="cluster-picture"
            loading="lazy"
            decoding="async"
            style="
              display:block;
              width:auto;
              height:auto;
              max-width:280px;
              max-height:100px;
              margin:0;
              object-fit:contain;
            "
          >
        `;
      }).join("")}
    </div>
  `).join("");

  return `
    <div
      class="cluster-picture-list"
      data-stable-type="${type.potentialStableTypePlain}"
      style="
        display:grid;
        grid-template-columns:repeat(${columns.length}, max-content);
        column-gap:12px;
        align-items:center;
        justify-content:start;
        width:max-content;
        border:0;
        background:transparent;
        overflow:visible;
      "
    >
      ${columnsHtml}
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

let familyStripeIndex = -1;

for (const [index, type] of window.namikawaUenoTypes.entries()) {
  const row = document.createElement("tr");
  row.dataset.id = type.id;
  row.dataset.index = String(index);

  if (!smallCaseIds.has(type.id)) {
    familyStripeIndex += 1;
  }

  row.classList.add(
    familyStripeIndex % 2 === 0 ? "row-stripe-even" : "row-stripe-odd"
  );
  row.classList.toggle("row-small-case", smallCaseIds.has(type.id));

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

/*
 * MathJax's automatic full-page pass is disabled in script.js. Keep all
 * typesetting in one queue, initially process only checked columns, and
 * process each hidden column once when the user first reveals it.
 */
let mathJaxQueue = Promise.resolve();
const typesetColumns = new Set();
const pendingTypesetColumns = new Set();

function whenMathJaxReady(callback, attempt = 0) {
  if (window.MathJax?.typesetPromise) {
    callback();
    return;
  }

  if (attempt < 100) {
    window.setTimeout(() => whenMathJaxReady(callback, attempt + 1), 100);
  }
}

function queueMathJaxTypeset(elements) {
  const targets = [...new Set(elements)].filter(Boolean);

  if (targets.length === 0) {
    return Promise.resolve();
  }

  /* Recover from an earlier MathJax error so one bad expression cannot stop
     a later column from being processed. */
  mathJaxQueue = mathJaxQueue
    .catch(() => {})
    .then(() => window.MathJax.typesetPromise(targets));

  return mathJaxQueue;
}

function typesetColumn(column) {
  if (typesetColumns.has(column) || pendingTypesetColumns.has(column)) {
    return;
  }

  pendingTypesetColumns.add(column);

  whenMathJaxReady(() => {
    const cells = document.querySelectorAll(`.col-${column}`);

    queueMathJaxTypeset(cells)
      .then(() => typesetColumns.add(column))
      .catch(() => {})
      .finally(() => {
        pendingTypesetColumns.delete(column);
        schedulePinnedStickyOffsets();
      });
  });
}

function typesetInitialContent() {
  whenMathJaxReady(() => {
    const targets = [
      document.querySelector(".table-introduction"),
      document.querySelector(".controls"),
      ...document.querySelectorAll(".col-actions")
    ];
    const initiallyCheckedColumns = [];

    for (const toggle of toggles) {
      if (!toggle.checked) {
        continue;
      }

      const column = toggle.dataset.column;
      initiallyCheckedColumns.push(column);
      pendingTypesetColumns.add(column);
      targets.push(...document.querySelectorAll(`.col-${column}`));
    }

    queueMathJaxTypeset(targets)
      .then(() => {
        for (const column of initiallyCheckedColumns) {
          typesetColumns.add(column);
        }
      })
      .catch(() => {})
      .finally(() => {
        for (const column of initiallyCheckedColumns) {
          pendingTypesetColumns.delete(column);
        }
        schedulePinnedStickyOffsets();
      });
  });
}

function loadClusterPictures() {
  for (const image of tableBody.querySelectorAll("img.cluster-picture[data-src]")) {
    image.src = image.dataset.src;
    image.removeAttribute("data-src");
  }
}

function updateColumn(toggle, recalculateClusterLayout = true) {
  const cells = document.querySelectorAll(`.col-${toggle.dataset.column}`);

  for (const cell of cells) {
    cell.hidden = !toggle.checked;
  }

  /* Cluster pictures begin with data-src rather than src, so the browser does
     not download hundreds of hidden SVGs during the initial page load. */
  if (toggle.dataset.column === "cluster-pics" && toggle.checked) {
    loadClusterPictures();
  }

  /*
   * A hidden picture column has no measurable image widths. Recalculate its
   * grid after toggling so newly shown cluster pictures do not overlap.
   * Toggling picture columns can also change row heights, so recalculate the
   * vertical offsets of frozen pinned rows.
   */
  if (recalculateClusterLayout) {
    scheduleClusterPictureLayout();
  }
  schedulePinnedStickyOffsets();
}

for (const toggle of toggles) {
  /* The cluster-layout scheduler is initialised later in this file. The final
     startup layout handles the initial state after that initialisation. */
  updateColumn(toggle, false);
  toggle.addEventListener("change", () => {
    updateColumn(toggle);

    if (toggle.checked) {
      typesetColumn(toggle.dataset.column);
    }
  });
}

/*
 * Each table row has its own little CSS grid, so CSS alone cannot make the
 * corresponding columns in different rows share a width.  Once the SVGs
 * have loaded, measure the widest picture in each display column of a
 * potential stable type and apply that width to every row in that stable
 * type.  This preserves alignment without cropping any picture.
 */
let clusterLayoutFrame = null;

function updateClusterPictureColumnWidths() {
  const groups = new Map();

  for (const list of tableBody.querySelectorAll(".cluster-picture-list")) {
    const stableType = list.dataset.stableType;

    if (!groups.has(stableType)) {
      groups.set(stableType, []);
    }

    groups.get(stableType).push(list);
  }

  for (const lists of groups.values()) {
    const columnCount = Math.max(
      ...lists.map(list => list.querySelectorAll(".cluster-picture-stack").length)
    );

    const widths = Array(columnCount).fill(0);

    for (const list of lists) {
      const stacks = [...list.querySelectorAll(".cluster-picture-stack")];

      stacks.forEach((stack, index) => {
        const images = [...stack.querySelectorAll("img.cluster-picture")];

        for (const image of images) {
          if (!image.complete || image.naturalWidth === 0) {
            continue;
          }

          widths[index] = Math.max(
            widths[index],
            Math.ceil(image.getBoundingClientRect().width)
          );
        }
      });
    }

    /*
     * A genuinely empty column gets only a small spacer.  A populated
     * column gets exactly enough width for its widest rendered picture.
     */
    const finalWidths = widths.map(width => Math.max(width, 18));

    for (const list of lists) {
      list.style.gridTemplateColumns =
        finalWidths.map(width => `${width}px`).join(" ");

      const stacks = [...list.querySelectorAll(".cluster-picture-stack")];

      stacks.forEach((stack, index) => {
        stack.style.width = `${finalWidths[index]}px`;
      });
    }
  }
}

function scheduleClusterPictureLayout() {
  if (clusterLayoutFrame !== null) {
    cancelAnimationFrame(clusterLayoutFrame);
  }

  clusterLayoutFrame = requestAnimationFrame(() => {
    clusterLayoutFrame = requestAnimationFrame(() => {
      clusterLayoutFrame = null;
      updateClusterPictureColumnWidths();
      schedulePinnedStickyOffsets();
    });
  });
}

for (const image of tableBody.querySelectorAll("img.special-fibre, img.cluster-picture")) {
  if (image.classList.contains("cluster-picture")) {
    image.addEventListener("load", scheduleClusterPictureLayout);
  } else {
    image.addEventListener("load", schedulePinnedStickyOffsets);
  }
}

window.addEventListener("resize", () => {
  scheduleClusterPictureLayout();
  schedulePinnedStickyOffsets();
});

if ("ResizeObserver" in window) {
  const stickyResizeObserver = new ResizeObserver(schedulePinnedStickyOffsets);
  stickyResizeObserver.observe(table);
  stickyResizeObserver.observe(tableHead);
}

sortRows();
updateModeButtons();
applyRowFilters();
scheduleClusterPictureLayout();
typesetInitialContent();
