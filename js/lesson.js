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
