export default function isFloat(value){
    if(typeof value==="number" && !Number.isNaN(value) && Number.isInteger(value)){
        return true
    }
    return false
}