const monthsE=document.querySelector(".date h1")
const fulldateE=document.querySelector(".date p")
const daysE=document.querySelector(".days")



const monthindex=new Date().getMonth();// it i returning number from 0 to present
const lastday=new Date(new Date().getFullYear(),monthindex+1,0  ).getDate()
const firstday=new Date(new Date().getFullYear(),monthindex,1).getDay()-1
console.log(lastday);

const months=["January","Febraury","March","April","May","June","July","August","September","October","November","December"]
// console.log(months[monthindex ]);
monthsE.innerText=months[monthindex]
fulldateE.innerText=new Date().toDateString();

let days=""
for(let i=firstday;i>0;i--)
{
    days+=`<div class="empty"></div>`

}
for(let i=1;i<=lastday;i++)
{  
    if(i ==new Date().getDate())
    {
        days+=`<div class="today">${i}</div>`
    }
    else{

        days+=`<div>${i}</div>`
    }
}


daysE.innerHTML=days

