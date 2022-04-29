const selectDay = document.getElementById("select-day__id");
const TimeTable = [
    {
        day: 'Monday',

        time1: '10 AM - 11 AM',
        sub1: 'SE',

        time2: '11:25 AM - 12:25 PM',
        sub2: 'DSAL',

        time3: '2:15 PM - 3:15 PM',
        sub3: 'DSA',

        time4: '3:15 PM - 4:15 PM',
        sub4: 'PPL',

        time5: '',
        sub5: ''
    },
    {
        day: 'Tuesday',

        time1: '9 AM - 11 AM',
        sub1: 'PBL',

        time2: '11:15 AM - 12:15 PM',
        sub2: 'M3',

        time3: '12:15 PM - 1:15 PM',
        sub3: 'SE',

        time4: '2:15 PM - 3:15 PM',
        sub4: 'PPL',

        time5: '3:15 PM - 4:15 PM',
        sub5: 'DSA'
    },
    {
        day: 'Wednesday',

        time1: '9 AM - 10 AM',
        sub1: 'M3',

        time2: '10 AM - 11 AM',
        sub2: 'SE',

        time3: '2:15 PM - 3:15 PM',
        sub3: 'PPL',

        time4: '3:15 PM - 4:15 PM',
        sub4: 'PPL',

        time5: '3:15 PM - 4:15 PM',
        sub5: 'DSA'
    },
    {
        day: 'Thursday',

        time1: '10 AM - 11 AM',
        sub1: 'PPL',

        time2: '11:25 AM - 12:25 PM',
        sub2: 'DSAL',

        time3: '2:15 PM - 3:15 PM',
        sub3: 'DSA',

        time4: '3:15 PM - 4:15 PM',
        sub4: 'PPL',

        time5: '3:15 PM - 4:15 PM',
        sub5: 'DSA'
    },
    {
        day: 'Friday',

        time1: '10 AM - 11 AM',
        sub1: 'MP',

        time2: '11:25 AM - 12:25 PM',
        sub2: 'DSAL',

        time3: '2:15 PM - 3:15 PM',
        sub3: 'DSA',

        time4: '3:15 PM - 4:15 PM',
        sub4: 'PPL',

        time5: '3:15 PM - 4:15 PM',
        sub5: 'DSA'
    }


]
function myFunction() {

    let currentDay = selectDay.options[selectDay.selectedIndex].value
    let html = ``


    TimeTable.forEach((ele) => {
        if (ele.day === currentDay) {
            html = `
        
           <ul class="list-group list-group-flush default-monday ">
           <li class="list-group-item">
               <div class="row align-items-center no-gutters">
                   <div class="col me-2">
                       <h6 class="mb-0"><strong>${ele.sub1}</strong></h6>
                       <span class="text-xs">${ele.time1}</span>

                       <h6 class="mb-0"><strong>${ele.sub2}</strong></h6>
                       <span class="text-xs">${ele.time2}</span>

                       <h6 class="mb-0"><strong>${ele.sub3}</strong></h6>
                       <span class="text-xs">${ele.time3}</span>

                       <h6 class="mb-0"><strong>${ele.sub4}</strong></h6>
                       <span class="text-xs">${ele.time4}</span>

                       <h6 class="mb-0"><strong>${ele.sub5}</strong></h6>
                       <span class="text-xs">${ele.time5}</span>
                   </div>
                  
               </div>
           </li>
           </ul>
           
           `
        }
    })


    document.getElementById('show').innerHTML = html;
}


const forgetPass = document.querySelector('#pop-up');
forgetPass.addEventListener('click', function clickHandler(event) {
    alert("Hint : Roll Number");
});