const messages = [
    "thật á",
    "bé chắc chứ",
    "bé nghiêm túc chứ",
    "thui mừ , hiccc",
    "suy nghĩ lại đi bé, hicc",
    "anh sẽ buồn lắm á (╥﹏╥)",
    "thui đồng ý đi mừ",
    "chọn lại đi bé iu ưi",
    "thôi anh sẽ không làm phiền em nữa vậy (╥ᆺ╥;)",
    "đùa chút thui, bé đồng ý làm người yêu anh nhé (๑>◡<๑)"
];

let messageIndex = 0;

function handleNoClick() {
    const noButton = document.querySelector('.no-button');
    const yesButton = document.querySelector('.yes-button');
    noButton.textContent = messages[messageIndex];
    messageIndex = (messageIndex + 1) % messages.length;
    const currentSize = parseFloat(window.getComputedStyle(yesButton).fontSize);
    yesButton.style.fontSize = `${currentSize * 1.5}px`;
}

function handleYesClick() {
    window.location.href = "yes_page.html";
}
