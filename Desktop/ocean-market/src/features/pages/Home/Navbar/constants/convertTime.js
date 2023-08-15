export const convertTime=(date)=>{
const dateObj = new Date(date);
const timeStr = dateObj.toLocaleTimeString([], { hour: '2-digit', minute: '2-digit' });
return timeStr;
}