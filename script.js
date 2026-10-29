'use strict';
const root=document.documentElement;
const themeBtn=document.getElementById('themeBtn');
const savedTheme=localStorage.getItem('vk-theme');
if(savedTheme==='light'||savedTheme==='dark')root.dataset.theme=savedTheme;
function updateThemeButton(){const light=root.dataset.theme==='light';themeBtn.textContent=light?'☾':'☀';themeBtn.setAttribute('aria-label',light?'Switch to dark theme':'Switch to light theme')}
updateThemeButton();
themeBtn.addEventListener('click',()=>{root.dataset.theme=root.dataset.theme==='light'?'dark':'light';localStorage.setItem('vk-theme',root.dataset.theme);updateThemeButton()});
const menuBtn=document.getElementById('menuBtn'),navLinks=document.getElementById('navLinks');
function closeMenu(){navLinks.classList.remove('open');menuBtn.setAttribute('aria-expanded','false');menuBtn.textContent='☰'}
menuBtn.addEventListener('click',()=>{const open=navLinks.classList.toggle('open');menuBtn.setAttribute('aria-expanded',String(open));menuBtn.textContent=open?'✕':'☰'});
navLinks.querySelectorAll('a').forEach(a=>a.addEventListener('click',closeMenu));
document.addEventListener('keydown',e=>{if(e.key==='Escape')closeMenu()});
const words=['software that matters.','full-stack applications.','intelligent AI solutions.','reliable backend systems.'];const typing=document.getElementById('typing');
if(!window.matchMedia('(prefers-reduced-motion: reduce)').matches){let wordIndex=0,charIndex=0,deleting=false;function type(){const word=words[wordIndex];typing.textContent=word.slice(0,charIndex);if(!deleting&&charIndex<word.length){charIndex++;setTimeout(type,70)}else if(!deleting){deleting=true;setTimeout(type,1700)}else if(charIndex>0){charIndex--;setTimeout(type,35)}else{deleting=false;wordIndex=(wordIndex+1)%words.length;setTimeout(type,250)}}type()}
document.querySelectorAll('.filter').forEach(button=>button.addEventListener('click',()=>{document.querySelectorAll('.filter').forEach(b=>{b.classList.remove('active');b.setAttribute('aria-pressed','false')});button.classList.add('active');button.setAttribute('aria-pressed','true');const filter=button.dataset.filter;document.querySelectorAll('.project').forEach(project=>{project.hidden=filter!=='all'&&!project.dataset.category.split(' ').includes(filter)})}));
const sections=document.querySelectorAll('main section[id]');const navAnchors=document.querySelectorAll('.nav-links a');
if('IntersectionObserver'in window){const observer=new IntersectionObserver(entries=>{entries.forEach(entry=>{if(entry.isIntersecting){navAnchors.forEach(a=>{const active=a.getAttribute('href')==='#'+entry.target.id;a.classList.toggle('active',active);if(active)a.setAttribute('aria-current','location');else a.removeAttribute('aria-current')})}})},{rootMargin:'-25% 0px -65% 0px'});sections.forEach(s=>observer.observe(s))}
const topBtn=document.getElementById('topBtn');window.addEventListener('scroll',()=>topBtn.classList.toggle('visible',window.scrollY>500),{passive:true});topBtn.addEventListener('click',()=>window.scrollTo({top:0,behavior:'smooth'}));
document.getElementById('year').textContent=new Date().getFullYear();
document.getElementById('contactForm').addEventListener('submit',e=>{e.preventDefault();const form=e.currentTarget;if(!form.reportValidity())return;const name=form.elements.name.value.trim(),email=form.elements.email.value.trim(),message=form.elements.message.value.trim();if(!name||!email||!message)return;const subject=encodeURIComponent('Portfolio inquiry from '+name);const body=encodeURIComponent('From: '+name+' ('+email+')\n\n'+message);window.location.href='mailto:vikramkumarbcrec2027@gmail.com?subject='+subject+'&body='+body;document.getElementById('formStatus').textContent='Your email application should open with the message ready to send.'});
