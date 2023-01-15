const noofcountry=document.getElementById("numberofcountry")
noofcountry.innerText=`Total number of countries: ${countries_data.length}`

const country=[]
countries_data.map((ele)=>{
    country.push(ele.name.toLowerCase())
    // console.log(ele.name.toLowerCase());
    
})

function startingword() {
    const lowermaincontainer=document.getElementById("lowermaincontainer")
    lowermaincontainer.innerHTML=""
    const inputt=document.getElementById("input")
    const inputvalue=document.getElementById("input").value
    // console.log(inputt);
    // console.log(inputvalue);
    inputt.setAttribute("onkeyup", "startingword()")
    const countrymatch=[]
    // var temp2=0
    country.map((ele)=>{
        const temp=ele.startsWith(inputvalue.toLowerCase())
        if(inputvalue=="" ){
            lowermaincontainer.innerHTML=
            `
            <div class="card1">
            <h3>"Please enter the country name"</h3>
            </div>
            `
        }
        else if(temp==true){
            const colorchange=document.getElementById("colorchange")
            colorchange.style.backgroundColor="#571bb7"
            const colorchange1=document.getElementById("colorchange1")
            colorchange1.style.backgroundColor="#885ae5"
            // temp2++;
            countrymatch.push(ele)
            lowermaincontainer.innerHTML+=
            `
            <div class="card">
            <h3>"${ele}"</h3>
            </div>
            `
            // console.log(ele);
        }
    })
    if(countrymatch.length==0 && inputvalue!="" ){
        lowermaincontainer.innerHTML=
            `
            <div class="card1">
            <h3>"Please enter valid country name"</h3>
            </div>
            `
    }
    // if(temp2==0 && inputvalue!=""){
    //     lowermaincontainer.innerHTML=
    //         `
    //         <div class="card1">
    //         <h3>"Please enter valid country name"</h3>
    //         </div>
    //         `
    // }
    const countriescontaining=document.getElementById("countriescontaining")
    countriescontaining.innerText=` Countries containing: ${countrymatch.length}`
    
    
}
function anyword() {

    const lowermaincontainer=document.getElementById("lowermaincontainer")
    lowermaincontainer.innerHTML=""
    const inputt=document.getElementById("input")
    const inputvalue=document.getElementById("input").value
    // console.log(inputt);
    // console.log(inputvalue);
    inputt.setAttribute("onkeyup", "anyword()")
    const countrymatch=[]
    country.map((ele)=>{
        const temp=ele.includes(inputvalue.toLowerCase())
        if(inputvalue==""){
            lowermaincontainer.innerHTML=
            `
            <div class="card1">
            <h3>"Please enter the country name"</h3>
            </div>
            `
        }
        else if(temp==true){
            const colorchange=document.getElementById("colorchange")
            colorchange.style.backgroundColor="#885ae5"
            const colorchange1=document.getElementById("colorchange1")
            colorchange1.style.backgroundColor="#571bb7"
            countrymatch.push(ele)
            lowermaincontainer.innerHTML+=
            `
            <div class="card">
            <h3>"${ele}"</h3>
            </div>
            `
            // console.log(ele);
        }
    })
    if(countrymatch.length==0 && inputvalue!="" ){
        lowermaincontainer.innerHTML=
            `
            <div class="card1">
            <h3>"Please enter valid country name"</h3>
            </div>
            `
    }
    const countriescontaining=document.getElementById("countriescontaining")
    countriescontaining.innerText=` Countries containing: ${countrymatch.length}`
    
}
var changewordbutton=0;
function changebutton(params) {
    changewordbutton=(changewordbutton+1)%2
    // console.log(changewordbutton);
    if(changewordbutton==0){
        startingword()
    }else{
        anyword()
    }
}