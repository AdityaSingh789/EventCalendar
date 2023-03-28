import { Days } from "./consT";

export const range = (end) =>{
    const {result} = Array.from({length:end}).reduce(({result,current}) => ({
        result:[...result,current],
        current:current + 1
    }),{result:[],current: 1})

 return result;
}


export const getDayInMonth = (month,year) => {
    return new Date(year, month +1, 0).getDate();
}


export const getSortedDays = (year,month) => {
    const dayIndex = new Date(year,month, 1).getDay();
    return [...Days.slice(dayIndex), ...Days.slice(0, dayIndex)];
    
}

// {export const getDayInmonth = (date) =>{
//     return new Date(date.getFullYear(),date.getMonth()+1,0).getDate()
// }

// export const getSortedDates = (date) => {
//       const daysInMonth = range(getDayInmonth(date))
//       const index = new Date(date.getFullYear(),date.getMonth(),1).getDay()
//       return[...Array(index === 0 ? 6 : index-1), ...daysInMonth]
// }
//}


export const getDateObj = (day,month,year) =>{
      return new Date(year,month,day)
} 

export const areDatesSame = (first,second) =>{
      return (first.getFullYear() === second.getFullYear() && 
             first.getMonth() === second.getMonth() && 
             first.getDate() === second.getDate()
              )
}

