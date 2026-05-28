const images = [
    "https://picsum.photos/id/1015/700/400",
    "https://picsum.photos/id/1016/700/400",
    "https://picsum.photos/id/1018/700/400",
    "https://picsum.photos/id/1020/700/400",
    "https://picsum.photos/id/1024/700/400"
];

let currentIndex = 0;

const galleryImage = document.getElementById("galleryImage");
const modal = document.getElementById("imageModal");
const modalImage = document.getElementById("modalImage");

const prevBtn = document.getElementById("prevBtn");
const nextBtn = document.getElementById("nextBtn");

const closeModalBtn = document.getElementById("closeModal");

const commandPalette = document.getElementById("commandPalette");
const commandInput = document.getElementById("commandInput");
const commandList = document.getElementById("commandList");

let slideShow = null;

const commands = [
    "Open Gallery",
    "Next Image",
    "Previous Image",
    "Start Slideshow",
    "Stop Slideshow"
];

function renderCommands(list) {
    commandList.innerHTML = "";

    list.forEach(command => {
        const li = document.createElement("li");
        li.textContent = command;

        li.addEventListener("click", () => {
            alert("Selected: " + command);
        });

        commandList.appendChild(li);
    });
}

renderCommands(commands);

function showImage() {
    galleryImage.src = images[currentIndex];
}

function nextImage() {
    currentIndex++;

    if (currentIndex >= images.length) {
        currentIndex = 0;
    }

    showImage();
}

function prevImage() {
    currentIndex--;

    if (currentIndex < 0) {
        currentIndex = images.length - 1;
    }

    showImage();
}

prevBtn.addEventListener("click", prevImage);
nextBtn.addEventListener("click", nextImage);

galleryImage.addEventListener("click", () => {
    modal.classList.remove("hidden");
    modalImage.src = images[currentIndex];
});

closeModalBtn.addEventListener("click", () => {
    modal.classList.add("hidden");
});

function toggleSlideshow() {

    if (slideShow) {
        clearInterval(slideShow);
        slideShow = null;
    } else {
        slideShow = setInterval(() => {
            nextImage();
        }, 2000);
    }
}

function openCommandPalette() {
    commandPalette.classList.remove("hidden");
    commandInput.focus();
}

function closeCommandPalette() {
    commandPalette.classList.add("hidden");
}

document.getElementById("openCommandBtn")
    .addEventListener("click", openCommandPalette);

commandInput.addEventListener("input", () => {

    const keyword = commandInput.value.toLowerCase();

    const filtered = commands.filter(command =>
        command.toLowerCase().includes(keyword)
    );

    renderCommands(filtered);
});

document.addEventListener("keydown", (e) => {

    if (e.ctrlKey && e.key.toLowerCase() === "k") {
        e.preventDefault();
        openCommandPalette();
    }

    if (e.key === "ArrowRight") {
        nextImage();
    }

    if (e.key === "ArrowLeft") {
        prevImage();
    }

    const number = Number(e.key);

    if (number >= 1 && number <= images.length) {
        currentIndex = number - 1;
        showImage();
    }

    if (e.code === "Space") {
        e.preventDefault();
        toggleSlideshow();
    }

    if (e.key === "Escape") {
        modal.classList.add("hidden");
        closeCommandPalette();
    }

    if (e.key === "Enter" && document.activeElement === commandInput) {

        const firstItem = commandList.querySelector("li");

        if (firstItem) {
            alert("Selected: " + firstItem.textContent);
        }
    }
});