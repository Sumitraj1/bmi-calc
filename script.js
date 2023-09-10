const height=document.querySelector('#height');
const weight=document.querySelector('#weight');
const bmi_value=document.querySelector('#bmi-value');
const bmi_status=document.querySelector('#bmi-status');
const calculate=document.querySelector('#calculate-bmi');


// addEventListener() methods attaches an event handler to a document
calculate.addEventListener('click',()=>{
    if(height.value==="" && weight.value===""){
        alert('please enter your and height weight');
        return;
    }
    else if(height.value===""){
        alert('please enter your height');
        return;
    }
    else if(weight.value===""){
        alert('please enter your weight');
        return;
    }
    else{

        let height_value=height.value;
        let weight_value=weight.value;
        let height_value_meters=height_value/100;
        let htsqre=height_value_meters*height_value_meters;
        let bmi=weight_value/htsqre;

        // textContent property sets or retuns the text content of the specified node and its all descendants
        bmi_value.textContent=bmi.toFixed(2);
        if(bmi<=18.4){
            bmi_status.textContent='UnderWeight';
        }
        else if(bmi>=18.5 && bmi<=24.9){
            bmi_status.textContent='Normal';
        }
        else if(bmi>=25 && bmi<=99.9){
            bmi_status.textContent='OverWeight';
        }
        else if(bmi>=40){
            bmi_status.textContent='Obese';
        }



    }
     
    
});