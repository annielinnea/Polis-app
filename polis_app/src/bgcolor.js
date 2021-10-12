import React, {useState} from 'react'
import Select from 'react-select'

function Bgcolor()
{
    var colors = [
    {
        value:1,
        label: "red"
    },
    {
        value:2,
        label: "blue"
    },
    {
        value:3,
        label: "orange"
    },
    {
        value:4,
        label: "green"
    },
    ];
    var [setbgcolor, ddlvalue] = useState(colors.label);
    var ddlandle = e =>
    {
        ddlvalue(e.label);
    }
    return(
        <div>
            <style>{'body {background-color: '+setbgcolor+' ;} '}</style>
            <Select options={colors} onChange={ddlandle}></Select>
            <center>
                <b>The background color is: {setbgcolor}</b>
            </center>
        </div>
    );
}
export default Bgcolor;