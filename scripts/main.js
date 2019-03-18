const MAX_PAGES = 4;
let currentPageIndex = 1;

function renderBreadcrumbs() {
    let output = "<ol class='breadcrumb'>";

    for (let i = 1; i <= MAX_PAGES; i++) {
        if (i === currentPageIndex) {
            output += `<li class='breadcrumb-item active' aria-current='page'>Page ${i}</li>`;
        } else {
            output += `<li class='breadcrumb-item'>Page ${i}</li>`;
        }
    }

    output += '</ol>';

    $('#breadcrumbs').html(output);
}

function renderNavButtons() {
    let prevDisabled = "";
    let nextDisabled = "";

    if (currentPageIndex <= 1) {
        prevDisabled = "disabled";
    }

    if (currentPageIndex >= MAX_PAGES) {
        nextDisabled = "disabled";
    }

    let output = `<button id='previous_page' type='button' class='btn btn-success' ${prevDisabled} onclick="previousPage()">Previous</button>
        <button id='next_page' type='button' class='btn btn-success' ${nextDisabled} onclick="nextPage()">Continue</button>`;

    $('#nav_buttons').html(output);
}

function loadPage() {
    $('#page_content').load(`fragments/page${currentPageIndex}_fragment.html`);
}

function previousPage() {
    currentPageIndex--;
    if (currentPageIndex < 1) currentPageIndex = 1;

    refresh();
}

function nextPage() {
    currentPageIndex++;
    if (currentPageIndex >= MAX_PAGES) currentPageIndex = MAX_PAGES;

    refresh();
}

function refresh() {
    renderBreadcrumbs();
    renderNavButtons()
    loadPage();
}

window.onload = function () {
    refresh();
};