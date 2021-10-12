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
    {
        value:5,
        label: "purple"
    },
    {
        value:6,
        label: "native"
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
        </div>
    );
}
export default Bgcolor;