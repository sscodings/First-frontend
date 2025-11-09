const disp = document.getElementById('screen');

function appendvalue(val){
    disp.value += val;
}
function cleardisplay(){
    document.getElementById('screen').value = '';
}
function calculate(){
    try{
        const result = eval(disp.value);
        disp.value = result;
    }
    catch(e){
        disp.value = 'error';
    }
}
