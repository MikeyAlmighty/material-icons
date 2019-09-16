const DIR = 'icons/'
const IMG_REGEX = /\.(jpe?g|png|gif|svg)$/

const formatName = value => value.split("-").map(function (ele) { return ele[0].toUpperCase() + ele.slice(1).toLowerCase(); }).join("").replace(IMG_REGEX, '');

const createElementFromHTML = htmlString => {
  const div = document.createElement('div');
  div.innerHTML = htmlString.trim();
  return div.firstChild;
}

const renderIcon = ({href, name}) => {
  return `
    <div class="icon-container">
      <img class="icon" data-slothy="${href}" alt="${name}"/>
      <h2>${formatName(name)}</h2>
    </div>
  `
}

const xhr = new XMLHttpRequest();
xhr.open("GET", DIR, true);
xhr.responseType = 'document';

xhr.onload = () => {
  if (xhr.status === 200) {
    const elements = Array.from(xhr.response.getElementsByTagName("a")).filter(elem => elem.href.match(IMG_REGEX));
    const contentElem = document.getElementById('content')

    for (elem of elements) {
      contentElem.appendChild(createElementFromHTML(renderIcon({
        href: elem.href,
        name: elem.title
      })));
    };

    slothy()
  }
  else {
    alert('Request failed. Returned status of ' + xhr.status);
  }
}

xhr.send()
