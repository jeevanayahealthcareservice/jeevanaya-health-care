const services=[
['Home Nursing Service','Professional nursing support and attentive care at home.','6129236'],
['Home Health Care Service','Compassionate healthcare assistance in a familiar home environment.','29372532'],
['Patient Care Service','Practical day-to-day support focused on patient comfort and dignity.','18459210'],
['Patient Attendant Service','Reliable assistance with everyday patient-care routines and needs.','18459702'],
['Bedridden Patient Care','Support for people who need extended assistance while resting in bed.','7551674'],
['Senior Citizen Care','Friendly support for seniors with comfort, safety and companionship.','29372719'],
['Personal Care Assistance','Help with personal routines and everyday activities at home.','29372705'],
['Home Care Service','Flexible support for families who need dependable care at home.','29372733'],
['Nursing Care at Home','Home-based nursing support for ongoing health and recovery needs.','6129676'],
['Caretaker Service','A helping hand for daily routines, comfort and family support.','29372534'],
['Recovery Care at Home','Supportive care for recovery after illness, treatment or hospital stay.','6753349'],
['Home Attendant Service','Attentive home assistance for patients and older adults.','29372727'],
['Long Term Patient Care','Consistent support for patients who need ongoing home care.','7551609']
];
const img=id=>`https://images.pexels.com/photos/${id}/pexels-photo-${id}.jpeg?auto=compress&cs=tinysrgb&w=1600`;

// Hero care-support slider
let index=0;
const slideImg=document.querySelector('#slideImg'),slideTitle=document.querySelector('#slideTitle'),slideText=document.querySelector('#slideText'),counter=document.querySelector('#counter'),dots=document.querySelector('#dots');
dots.innerHTML=services.map((_,i)=>`<span class="dot ${i===0?'active':''}" data-i="${i}" role="button" tabindex="0"></span>`).join('');
function showHero(i){index=(i+services.length)%services.length;const s=services[index];slideImg.src=img(s[2]);slideImg.alt=s[0];slideTitle.textContent=s[0];slideText.textContent=s[1];counter.textContent=`${String(index+1).padStart(2,'0')} / ${services.length}`;document.querySelectorAll('.dot').forEach((d,n)=>d.classList.toggle('active',n===index));}
document.querySelector('#prev').onclick=()=>showHero(index-1);document.querySelector('#next').onclick=()=>showHero(index+1);dots.onclick=e=>{if(e.target.dataset.i!==undefined)showHero(Number(e.target.dataset.i))};setInterval(()=>showHero(index+1),5500);

// Full service showcase slider
let serviceIndex=0;
const serviceSlideImg=document.querySelector('#serviceSlideImg'),serviceSlideTitle=document.querySelector('#serviceSlideTitle'),serviceSlideText=document.querySelector('#serviceSlideText'),serviceSlideNumber=document.querySelector('#serviceSlideNumber'),serviceSlideCounter=document.querySelector('#serviceSlideCounter'),serviceDots=document.querySelector('#serviceDots');
serviceDots.innerHTML=services.map((_,i)=>`<span class="service-dot ${i===0?'active':''}" data-i="${i}" role="button" tabindex="0" aria-label="Go to service ${i+1}"></span>`).join('');
function showService(i){serviceIndex=(i+services.length)%services.length;const s=services[serviceIndex];serviceSlideImg.classList.remove('slide-fade');void serviceSlideImg.offsetWidth;serviceSlideImg.classList.add('slide-fade');serviceSlideImg.src=img(s[2]);serviceSlideImg.alt=s[0];serviceSlideTitle.textContent=s[0];serviceSlideText.textContent=s[1];serviceSlideNumber.textContent=`SERVICE ${String(serviceIndex+1).padStart(2,'0')}`;serviceSlideCounter.textContent=`${String(serviceIndex+1).padStart(2,'0')} / ${services.length}`;document.querySelectorAll('.service-dot').forEach((d,n)=>d.classList.toggle('active',n===serviceIndex));}
document.querySelector('#servicePrev').onclick=()=>showService(serviceIndex-1);document.querySelector('#serviceNext').onclick=()=>showService(serviceIndex+1);serviceDots.onclick=e=>{if(e.target.dataset.i!==undefined)showService(Number(e.target.dataset.i))};setInterval(()=>showService(serviceIndex+1),6000);

// Mobile menu
const menu=document.querySelector('.menu');menu.onclick=()=>{const l=document.querySelector('.links');l.style.display=l.style.display==='flex'?'none':'flex';l.style.position='absolute';l.style.top='78px';l.style.left='0';l.style.right='0';l.style.padding='18px 6%';l.style.background='#fff';l.style.flexDirection='column';l.style.alignItems='stretch'};
