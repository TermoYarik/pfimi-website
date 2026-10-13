const returning = document.getElementById('Return'); //кнопка головна сторінка
returning.addEventListener('click', () => {
    const way = window.location.pathname.split('/').pop(); //тимчасова штука так як сайт локал[ьно] (обрізано на скріншоті)
    if ( way !== "pfimiruti.html") { window.location.href = 'pfimiruti.html';} else {
    document.getElementById('korob1').scrollIntoView({ behavior: 'smooth' });};
  });


const newss = document.getElementById('News'); //кнопка головна сторінка
newss.addEventListener('click', () => {
document.getElementById('korob2').scrollIntoView({ behavior: 'smooth' });
});

const weeek = document.getElementById('Week'); //кнопка головна сторінка
weeek.addEventListener('click', () => {
document.getElementById('korob3').scrollIntoView({ behavior: 'smooth' });
});

const coontact = document.getElementById('Contact'); //кнопка головна сторінка
coontact.addEventListener('click', () => {
window.location.href = './contact/pfimiruti.html';
});

document.querySelectorAll('.boxes').forEach(box=>{ //В КОЖНІЙ ОКРЕМІЙ КОРОБЦІ коробці даємо кон[…] (обрізано на скріншоті)
    const btns = box.querySelectorAll('.b-n'); //всі кнопки в btns
    const tabs = box.querySelectorAll('.tab'); //всі вкладинки в tabs

    btns.forEach(btn=> { //для кожної btn в btns
    btn.addEventListener('click', ()=>{  //за кліком
    btns.forEach(btn=>btn.classList.remove('active')); //кожну кнопку в коробці деактивуємо
    tabs.forEach(tab=>tab.classList.remove('active')); //кожну вкладинку в коробці деактивуємо
    btn.classList.add('active'); //кнопку по якій нажимали активуємо

    const targettab=box.querySelector(`#${btn.dataset.tab}`); //константі передаємо айді вклад[ки] (обрізано на скріншоті)
    targettab.classList.add('active'); //вкладинку по отриманій константі активуємо

    });
    });
    });


document.querySelectorAll('.cardbuttons').forEach(card=>{
    card.addEventListener('click' , ()=>{
        const targetpop=document.querySelector(`#${card.dataset.tab}`);
        targetpop.classList.add('active');
        const night=document.getElementById('nightthing');
        night.classList.add('active');
    })
})

document.querySelectorAll('.closebutton').forEach(clsbutton=>{
    clsbutton.addEventListener('click', ()=>{
        const closing=document.querySelector(`#${clsbutton.dataset.tab}`);
        closing.classList.remove('active');
        const night=document.getElementById('nightthing');
        night.classList.remove('active');
    })
})
