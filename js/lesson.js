// PHONE CHECKER
const phoneInput = document.querySelector('#phone_input')
const phoneButton = document.querySelector('#phone_button')
const phoneResult = document.querySelector('#phone_result')


const regExp = /^\+996 [2579]\d{2} \d{2}-\d{2}-\d{2}$/

phoneButton.onclick = () =>{
    if (regExp.test(phoneInput.value)) {
        phoneResult.innerHTML = 'OK'
        phoneResult.style.color = 'green'
    } else {
        phoneResult.innerHTML = 'NOT OK'
        phoneResult.style.color = 'red'
    }
}



const tabContentBlocks = document.querySelectorAll('.tab_content_block')
const tabContentItems = document.querySelectorAll('.tab_content_item')
const tabsParent = document.querySelector('.tab_content_items')


const hideTabContend = () => {
    tabContentBlocks.forEach(block => {
        block.style.display = 'none'
    })
    tabContentItems.forEach(item =>{
        item.classList.remove('tab_content_item_active')

    })

}

const showTabContent = (index = 0) => {
    tabContentBlocks[index].style.display = 'block'
    tabContentItems[index].classList.add('tab_content_item_active')


}
let currentTab = 0;

const autoSwitchTabs = () => {
    hideTabContend()
    showTabContent(currentTab)
    currentTab = (currentTab + 1) % tabContentBlocks.length; // Переключаем на следующий таб, и если достигнут конец, начинаем с первого
}

hideTabContend()
showTabContent()
setInterval(autoSwitchTabs, 3000);



tabsParent.onclick = (event) => {
    if (event.target.classList.contains('tab_content_item')) {
       tabContentItems.forEach((item, index) =>{
           if (event.target === item) {
               hideTabContend()
               showTabContent(index)


           }
       })
    }
}


const usdInput = document.querySelector('#usd');
const somInput = document.querySelector('#som');
const euroInput = document.querySelector('#eur');

const converter = (input, targetInputs) => {
    input.oninput = () => {
        const request = new XMLHttpRequest();
        request.open('GET', '../data/converter.json');
        request.setRequestHeader('content-type', 'application/json');
        request.send();

        request.onload = () => {
            const data = JSON.parse(request.response);

            if (input.value === '') {
                targetInputs.forEach(target => (target.value = ''));
                return;
            }

            const value = parseFloat(input.value);
            if (isNaN(value)) return;

            // Логика расчётов
            if (input.id === 'som') {
                targetInputs[0].value = (value / data.usd).toFixed(2); // USD
                targetInputs[1].value = (value / data.eur).toFixed(2); // EUR
            }
            if (input.id === 'usd') {
                targetInputs[0].value = (value * data.usd).toFixed(2); // SOM
                targetInputs[1].value = (value * data.usd / data.eur).toFixed(2); // EUR
            }
            if (input.id === 'eur') {
                targetInputs[0].value = (value * data.eur).toFixed(2); // SOM
                targetInputs[1].value = (value * data.eur / data.usd).toFixed(2); // USD
            }
        };
    };
};

// Настраиваем конвертеры
converter(somInput, [usdInput, euroInput]);
converter(usdInput, [somInput, euroInput]);
converter(euroInput, [somInput, usdInput]);
