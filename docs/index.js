const content = document.querySelector('#content')
const search = document.querySelector('.js-search')

renderIcons(window.icons)

search.addEventListener('keyup', (e) => {
  if (e.keyCode === 13) {
    const { value } = search

    filterIcons(window.icons, value)
  }
})

function filterIcons(icons, value) {
  icons.forEach(({ iconName }) => {
    const method = iconName.toLowerCase().includes(value.toLowerCase()) ? 'remove' : 'add'
    const icon = document.querySelector(`#${iconName}`)
    icon.classList[method]('hidden')
  })
}

function renderIcons(icons) {
  const iconElements = icons.map(({ icon, iconName}) => {

    return `
      <div id="${iconName}" class="icon-container js-icon-container">
        <img class="icon" data-slothy="./icons/${icon}" alt="${icon}">
        <h2 class="js-title title" tabindex="0">${iconName}</h2>
      </div>
    `
  }).join('')

  content.innerHTML = iconElements
  document.querySelectorAll('.js-title').forEach(e =>
    e.addEventListener('click', handleOnClick, true)
  )
  slothy()
}

function handleOnClick(e) {
  const title = e.target
  const text = title && title.innerText
  if (text) {
    copyElementText(text)
    window.toast(`Copied ${text} to clipboard.`)
  }
}

function copyElementText(text) {
    var elem = document.createElement("textarea");
    document.body.appendChild(elem);
    elem.value = text;
    elem.select();
    document.execCommand("copy");
    document.body.removeChild(elem);
}
