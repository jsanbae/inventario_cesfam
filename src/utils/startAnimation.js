
export const startAnimation = () => { 
    const timeoutID = setTimeout(function(){
        const replacers = document.querySelectorAll('[data-replace]');
        for (let i = 0; i < replacers.length; i++) {
            let replaceClasses = JSON.parse(replacers[i].dataset.replace.replace(/'/g, '"'));
            Object.keys(replaceClasses).forEach(function(key) {
                replacers[i].classList.remove(key);
                replacers[i].classList.add(replaceClasses[key]);
            });
        }
    }, 100);
    // console.log('TOID: ', timeoutID);
    return timeoutID;
}

export const stopAnimation = timeoutID => clearTimeout(timeoutID);