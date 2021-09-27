import React, {useState, useEffect} from 'react'
let checkboxList = [{
    Cname: "Alkohollagen",
    value: false
},
{
    Cname: "Anträffad död",
    value: false
},
{
    Cname: "Anträffat gods",
    value: false
},
{
    Cname: "Arbetsplatsolycka",
    value: true
}
]

function checkBox(){

    

    return(
        <form class="checkList">
              {checkboxList.map(checkbox =>(
                <React.Fragment>
                <li>
            <input value={checkbox.value} type="checkbox" onClick ={() => {
                checkbox.value = !checkbox.value
            }} 
                />
                <label>{checkbox.Cname}</label>
                </li>
                </React.Fragment>
              ))
              }
              
              <input type="submit" onClick={console.log(checkboxList)} />
        </form>
      )

}

export default checkBox