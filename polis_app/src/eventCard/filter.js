import { checkboxList, categoryName } from '../components/Navbar/Checkbox'

const filtered = (filt) => filt === categoryName

export function filtering(arr) {
    let array =[]
    for (let i = 0; i !== categoryName.length; i++) {
        if(arr.find(ar => ar.type === categoryName[i]) === true){
            array.push(arr)
        }
    }

}
export default filtering