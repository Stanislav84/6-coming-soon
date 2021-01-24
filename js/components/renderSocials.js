function renderSocials(data) {
      let HTML = '';


    for (let i = 0; i < data.length; i++) {  
        const item = data[i];

       HTML += `<a href="${item.href}" target="_blank" class="fa fa-${item.icon}" ></a>`;
        
}

const DOM = document.querySelector('footer > .socials');

DOM.innerHTML = HTML;


return;
}

export { renderSocials }















