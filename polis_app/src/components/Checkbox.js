import React, { useState, useEffect } from 'react'
import category from '../category.json'
import { css, jsx } from '@emotion/react'

//If viable make this into JSON file.... DONE (needs optimization)
export let checkboxList = category

export let categoryName = [];
export let categoryCTag = "";


console.log("checbklsit_: ", categoryName)

//create chckbox for each item in checkboxList
function CheckBox() {
    return (
        <div
      css={css`
        display: innli;
        flex-direction: column;
        align-content: center;
        text-align: center;
        
        
      `}
    >
        <form class="checkList">
            <ul style={{padding: 0}}>
            {checkboxList.list.map(checkbox => (
                <React.Fragment>
                        <input value={checkbox.Cname} style={{margin: '1px', background: '#1e2b38', color: 'white'}} id="input" type="button" onClick={(e) => {
                            //true or false value
                            checkbox.value = !checkbox.value
                            categoryName.splice(0, categoryName.length)
                            categoryName.push(checkbox.Cname)
                            categoryCTag = categoryName         
                            console.log(checkboxList)
                            console.log("checbklsit_: ", categoryName)
                        }}
                        />
                        {/* <label>{checkbox.Cname}</label> */}
                </React.Fragment>
            ))
            }
            </ul>
        </form>
        </div>
    )

}


export default CheckBox