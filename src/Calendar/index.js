//import React from 'react'
import { useState } from 'react'
import { Days, Months } from './consT'
import { CalendarHead, SevenGrid,Wrapper ,HeadDay, CalendarBody, StyledDay, StyledEvent} from './styled'
import { areDatesSame, getDateObj, getDayInMonth , getSortedDays, range } from './Utils'

export const Calendar=({startingDate,objArrEvent}) => {
        const [currentMonth,setCurrentMonth]=useState(startingDate.getMonth())
        const [currentYear,setCurrentYear]=useState(startingDate.getFullYear())
        const DayInMonth = getDayInMonth(currentMonth,currentYear)
        
 const nextMonth = () => {
    if(currentMonth<11){
        setCurrentMonth(prev =>prev + 1)
    }

    else{
        setCurrentMonth(0)
        setCurrentYear(prev =>prev + 1)
    }
 }

 const prevMonth = () => {
    if(currentMonth>0){
        setCurrentMonth(prev =>prev - 1)
    }

    else{
        setCurrentMonth(11)
        setCurrentYear(prev =>prev - 1)
    }
 }
    
  return (
   <Wrapper>
       <CalendarHead>
          <ion-icon onClick={prevMonth} name="arrow-back-circle-outline"></ion-icon>
            <p>
              {Months[currentMonth]} {currentYear}
            </p>
           <ion-icon onClick={nextMonth} name="arrow-forward-circle-outline"></ion-icon>
       </CalendarHead>

       <SevenGrid>
           { getSortedDays(currentMonth,currentYear).map((day)=>(
               <HeadDay>{day}</HeadDay>
           ))}
         </SevenGrid> 

         <CalendarBody fourCol={DayInMonth === 28}>
            {range(DayInMonth).map((day)=>(
              <StyledDay 
                     active={areDatesSame(
                     new Date() ,
                     getDateObj(day,currentMonth,currentYear)  
              )}>
               <p>{day}</p>
               {objArrEvent.map((ev)=>(
                   areDatesSame(getDateObj(day,currentMonth,currentYear),ev.date) && <StyledEvent>{ev.title}</StyledEvent>
               ))} 
              </StyledDay>
              ))}
         </CalendarBody>
      
   </Wrapper>
  );
};

 
