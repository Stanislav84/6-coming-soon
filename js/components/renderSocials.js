function renderSocials(data) {
    //validation
      if (!Array.isArray(data)) {
          return console.error('ERROR: duomenis turi buti array tipo.');
      }
      const count = data.length;

       if (count === 0) {
           return console.error('ERROR: duomenu sarase turi buti bent vienas objektas.');
       }

    //logic

    const DOM = document.querySelector('footer > .socials');
     let HTML = '';

       for (let i = 0; i < count; i++) {  
        const item = data[i];


        if (typeof item !== 'object' ||
        Array.isArray(item) || 
        !item.href ||
        typeof item.href !== 'string' ||
        !item.icon ||
        typeof item.icon !== 'string') {
          continue;
        }

       HTML += `<a href="${item.href}" target="_blank" class="fa fa-${item.icon}" ></a>`;
        
}
   //post logic validation
if (HTML === '') {
  return console.error('ERROR:duomenu sarase nerasta nei vieno normalaus objekto.');
}



  //return result
DOM.innerHTML = HTML;


return;
}

export { renderSocials }















