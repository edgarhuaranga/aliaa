var currentValue = 'palabra';
function handleClick(myRadio) {
    console.log('Old value: ' + currentValue);
    document.getElementById(currentValue+'-side').style.display='none';
    console.log('New value: ' + myRadio.value);
    currentValue = myRadio.value;
    document.getElementById(currentValue+'-side').style.display='block';


}