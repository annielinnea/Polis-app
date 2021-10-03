import React, { useState, useEffect } from 'react'
import category from '../../category.json'

//If viable make this into JSON file
export let checkboxList = category

export let categoryName = [];

console.log("checbklsit_: ", categoryName)

//create chckbox for each item in checkboxList
function checkBox() {
    return (
        <form class="checkList">
            {checkboxList.list.map(checkbox => (
                <React.Fragment>
                    <li>
                        <input value={checkbox.value} type="checkbox" onClick={() => {
                            //true or false value
                            checkbox.value = !checkbox.value
                            categoryName.push(checkbox.Cname)
                            console.log(checkboxList)
                            console.log("checbklsit_: ", categoryName)
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