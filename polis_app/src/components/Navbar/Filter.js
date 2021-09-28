import React, {useState, useEffect} from 'react'

//If viable make this into JSON file
export let checkboxList =   
    [
        {Cname :"Alkohollagen",
        value: false},
        {Cname : "Anträffad död",
        value: false},
        {Cname : "Anträffat gods",
        value: false},
        {Cname : "Arbetsplatsolycka",
        value: false},
        {Cname : "Bedrägeri",
        value: false},
        {Cname : "Bombhot",
        value: false},
        {Cname : "Brand",
        value: false},
        {Cname : "Brand automatlarm",
        value: false},
        {Cname :  "Bråk",
        value: false},
        {Cname : "Detonation",
        value: false},
        {Cname : "Djur skadat/omhändertaget",
        value: false},
        {Cname : "Ekobrott",
        value: false},
        {Cname : "Försvunnen person",
        value: false},
        {Cname : "Inbrott",
        value: false},
        {Cname : "Knivlagen",
        value: false},
        {Cname : "Misshandel",
        value: false},
        {Cname : "Mord/dråp",
        value: false},
        {Cname : "Rån",
        value: false},
        {Cname : "Stöld",
        value: false},
        {Cname : "Trafikolycka",
        value: false},
        {Cname : "Vapenlagen",
        value: false}
    ]

export function Checklist(){
    return checkboxList;
}

        //create chckbox for each item in checkboxList
function checkBox(){
    return(
        <form class="checkList">
              {checkboxList.map(checkbox =>(
                <React.Fragment>
                <li>
            <input value={checkbox.value} type="checkbox" onClick ={() => {
                //true or false value
                checkbox.value = !checkbox.value
                console.log(checkboxList)
            }} 
                />
                <label>{checkbox.Cname}</label>
                </li>
                </React.Fragment>
              ))
              }
        </form>
      )

}


export default checkBox