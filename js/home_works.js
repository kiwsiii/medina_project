document.getElementById('gmail_button').addEventListener('click', function () {
    const email = document.getElementById('gmail_input').value;
    const result = document.getElementById('gmail_result');
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;

    if (emailRegex.test(email)) {
        result.textContent = 'Valid email!';
        result.style.color = 'green';
    } else {
        result.textContent = 'Invalid email format!';
        result.style.color = 'red';
    }
});
const child = document.querySelector('.child_block');
let posX = 0, posY = 0;
let direction = 'right';

function moveBlock() {
    const parent = document.querySelector('.parent_block');
    const maxRight = parent.clientWidth - child.offsetWidth;
    const maxBottom = parent.clientHeight - child.offsetHeight;

    if (direction === 'right') posX += 2;
    if (direction === 'down') posY += 2;
    if (direction === 'left') posX -= 2;
    if (direction === 'up') posY -= 2;

    if (posX >= maxRight && direction === 'right') direction = 'down';
    if (posY >= maxBottom && direction === 'down') direction = 'left';
    if (posX <= 0 && direction === 'left') direction = 'up';
    if (posY <= 0 && direction === 'up') direction = 'right';

    child.style.transform = `translate(${posX}px, ${posY}px)`;
    requestAnimationFrame(moveBlock);
}

moveBlock();
let timer;
let seconds = 0;

document.getElementById('start').addEventListener('click', function () {
    if (!timer) {
        timer = setInterval(() => {
            seconds++;
            document.getElementById('seconds').textContent = seconds;
        }, 1000);
    }
});

document.getElementById('stop').addEventListener('click', function () {
    clearInterval(timer);
    timer = null;
});

document.getElementById('reset').addEventListener('click', function () {
    clearInterval(timer);
    timer = null;
    seconds = 0;
    document.getElementById('seconds').textContent = seconds;
});
const modal = document.querySelector('.modal');
const modalClose = document.querySelector('.modal_close');

document.getElementById('btn-get').addEventListener('click', function () {
    modal.style.display = 'block';
});

modalClose.addEventListener('click', function () {
    modal.style.display = 'none';
});

modal.addEventListener('click', function (event) {
    if (event.target === modal) {
        modal.style.display = 'none';
    }
});


