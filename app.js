const buttons = document.querySelectorAll('button');
const textVal = document.getElementById('textVal');

for(let btn of buttons)
{
    btn.addEventListener('click',(e)=>{
        const buttonText = e.target.innerText;

        if(buttonText === 'x'){
            textVal.value+='*';
        }

        else if(buttonText === 'C')
        {
            textVal.value="";
        }

        else if(buttonText === '=')
        {
            try{
                textVal.value=eval(textVal.value);
            }
            catch(e){
                console.log(e.message);
                textVal.value="Invalid Operation";
            }
        }

        else{
            textVal.value+=buttonText;
        }
    })

}