export function createElement(tag, className, text) {
    const element = document.createElement(tag);

    if (className) {
        element.className = className;
    }

    if (text !== undefined) {
        element.textContent = text;
    }

    return element;
}

export function createTags(items, className) {
    const container = createElement("div", className);

    for (const item of items ?? []) {
        container.appendChild(
            createElement("span", null, item)
        );
    }

    return container;
}

export function createList(items) {
    const list = document.createElement("ul");

    for (const item of items ?? []) {
        list.appendChild(
            createElement("li", null, item)
        );
    }

    return list;
}