function clock(selector, deadline) {
    //validation
    if (typeof selector !== 'string' ||
         selector === '') {
         console.error('ERROR: netinkamo formato selectorius.');
         return false;
    }
    if (typeof deadline !== 'string' ||
         deadline === '' ||
         !isFinite((new Date('2000-' + deadline).getTime()))) {
             console.error('ERROR: netinkamo formato deadlainas.');
             return false;
    }
    //logic
    const DOM = document.querySelector(selector);
    if (!DOM) {
        console.error('ERROR: pagal pateikta selektoriu elementas nerastas.');
        return false;
    }

    let numbers = updateClock(deadline);
    const labels = ['days', 'hours', 'minutes', 'seconds'];
    let HTML = '';
 
 
       for (let i = 0; i < 4; i++) {
           const key = labels[i];
           HTML += `<div class="time">
                    <div class="value">${formatNumber(numbers[key])}</div>
                    <div class="label">${key}</div>       
           </div>`;
       }
 
    //post logic
 
    //result
    DOM.innerHTML = HTML;


    const allValuesDOM = DOM.querySelectorAll('.value');

    setInterval(function () { 
        numbers = updateClock(deadline);
        for (let i = 0; i < 4; i++) {
            const key = labels[i];
            allValuesDOM[i].innerText = formatNumber(numbers[key]),
        }
    }, 1000); 
  }

 function updateClock(deadline) { 
        const date = new Date();

     let deadlineYear = date.getFullYear();
     let fullDeadline = `${deadlineYear}-${deadline}`;
     let deadlineInMiliseconds = (new Date(fullDeadline)).getTime();
     const now = Date.now();

     if (deadlineInMiliseconds < now) {
         deadlineYear++;
         fullDeadline = `${deadlineYear}-${deadline}`;
         deadlineInMiliseconds = (new Date(fullDeadline)).getTime();
     }

     const diff = deadlineInMiliseconds - now;



     let unusedTime = Math.round(diff / 1000);

    const seconds = unusedTime % 60;
    unusedTime = (unusedTime - seconds) / 60;

    const minutes = unusedTime % 60;
    unusedTime = (unusedTime - minutes) / 60;

    const hours = unusedTime % 24;
    unusedTime = (unusedTime - hours) / 24;

    const days = unusedTime;

    return { days, hours, minutes, seconds };
}

   function formatNumber(number) {
       return number < 10 ? '0' + number : number;
   }
 
 
 export { clock }