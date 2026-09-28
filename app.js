const services=[
['Home Nursing Service','Professional nursing support and attentive care at home.',6129236],
['Home Health Care Service','Compassionate healthcare assistance in a familiar home environment.',29372532],
['Patient Care Service','Practical day-to-day support focused on patient comfort and dignity.',18459210],
['Patient Attendant Service','Dependable assistance with routines, mobility and everyday needs.',18459702],
['Bedridden Patient Care','Comfort-focused support for patients who need extended bedside care.',7551674],
['Senior Citizen Care','Respectful companionship and practical support for older adults.',29372719],
['Personal Care Assistance','Thoughtful help with personal routines while preserving dignity.',29372705],
['Home Care Service','Flexible support for families who need dependable care at home.',29372733],
['Nursing Care at Home','Nursing-oriented support for ongoing health and recovery needs.',6129676],
['Caretaker Service','Reliable caregiver assistance for patients and seniors at home.',29372534],
['Recovery Care at Home','Support for rest, mobility and everyday recovery after illness or treatment.',6753349],
['Home Attendant Service','Attentive day-to-day assistance for comfortable home living.',29372727],
['Long Term Patient Care','Consistent support for patients requiring longer-duration home care.',7551609]
];
const img=id=>`https://images.pexels.com/photos/${id}/pexels-photo-${id}.jpeg?auto=compress&cs=tinysrgb&w=1400`;
let idx=0, timer;
const $=id=>document.getElementById(id);
function render(){const [title,desc,pid]=services[idx]; const url=img(pid); $('heroImage').src=url; $('serviceImage').src=url; $('heroNo').textContent=`SERVICE ${String(idx+1).padStart(2,'0')}`; $('heroTitle').textContent=title; $('heroDesc').textContent=desc; $('serviceChip').textContent=`SERVICE ${String(idx+1).padStart(2,'0')}`; $('serviceTitle').textContent=title; $('serviceDesc').textContent=desc; $('serviceCount').textContent=`${String(idx+1).padStart(2,'0')} / ${services.length}`; $('progressBar').style.width=`${((idx+1)/services.length)*100}%`; document.querySelectorAll('.dots button,.service-dots button').forEach((b,i)=>b.classList.toggle('active',i===idx));}
function dots(){['heroDots','serviceDots'].forEach(id=>{const box=$(id);box.innerHTML='';services.forEach((_,i)=>{const b=document.createElement('button');b.setAttribute('aria-label',`Service ${i+1}`);b.onclick=()=>{idx=i;render();restart()};box.appendChild(b)})});render()}
function next(){idx=(idx+1)%services.length;render();restart()} function prev(){idx=(idx-1+services.length)%services.length;render();restart()}
function restart(){clearInterval(timer);timer=setInterval(()=>{idx=(idx+1)%services.length;render()},6000)}
$('heroNext').onclick=next;$('heroPrev').onclick=prev;$('serviceNext').onclick=next;$('servicePrev').onclick=prev;dots();restart();
let startX=0;document.querySelector('.service-main').addEventListener('touchstart',e=>startX=e.touches[0].clientX,{passive:true});document.querySelector('.service-main').addEventListener('touchend',e=>{let dx=e.changedTouches[0].clientX-startX;if(Math.abs(dx)>45){dx<0?next():prev()}},{passive:true});
