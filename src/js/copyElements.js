document.addEventListener("DOMContentLoaded", function () {    

    if (document.querySelector('[data-copy-container]')) {
        dataCopyContainers = document.querySelectorAll('[data-copy-container]');

        dataCopyContainers.forEach(copyContainer => {
            let copyContainerID = copyContainer.getAttribute("data-copy-container");
            let pasteContainer = document.querySelector(`[data-paste-container='${copyContainerID}']`);
            let copyCont = copyContainer.cloneNode(true);

            if (pasteContainer) {
                pasteContainer.appendChild(copyCont);
            }
        });
    }

    console.log('copyElements.js finish work');
})