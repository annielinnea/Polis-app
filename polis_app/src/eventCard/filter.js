import { checkboxList, categoryName } from '../components/Navbar/Checkbox'

export function filter(events){
    let filtered = []
    filter(events => events.type.includes(categoryName))
    return filtered
}

export default filter