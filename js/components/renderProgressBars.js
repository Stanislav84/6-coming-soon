function renderProgressBars(selector, data) {
    


   //validation

   //logic
   const DOM = document.querySelector(selector);
   let HTML = '';

   for (let i = 0; i < data.length; i++) {
       const item = data[i];

       HTML += `<div class="progress-bar">
                <div class="top">
                     <div class="label">${item.label}</div>
                     <div class="value">${item.value}%</div>
                </div>
                <div class="bottom">
                 <div class="progress" style="width: ${item.value}%;">
                 <div class="loading"></div>
                 </div>
              </div>
            </div>`; 
   }

   // DOM.innerHTML += HTML;
       DOM.insertAdjacentHTML('beforeend', HTML);

   //post logic validation

   //return result
}

export { renderProgressBars }






