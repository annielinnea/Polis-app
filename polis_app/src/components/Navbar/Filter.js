import React, {useState, useEffect} from 'react'

// Might make this too JSON
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
    //create chckbox for each item in checkboxList
    return(
        <form class="checkList">
              {checkboxList.map(checkbox =>(
                <React.Fragment>
                <li>
            <input value={checkbox.value} type="checkbox" onClick ={() => {
                //true or false value
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