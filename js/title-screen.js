(()=>{'use strict';
const splash=document.getElementById('sharadesSplash');
const artwork='assets/images/title-screen-en.png';
const splashLangButton=document.getElementById('splashLangBtn');
const mainLangButton=document.getElementById('langBtn');
function syncSplashLanguage(){if(splashLangButton&&mainLangButton)splashLangButton.textContent=mainLangButton.textContent;}
if(splashLangButton&&mainLangButton){syncSplashLanguage();splashLangButton.addEventListener('click',event=>{event.stopPropagation();mainLangButton.click();syncSplashLanguage();});mainLangButton.addEventListener('click',()=>{syncSplashLanguage();});}
const splashImage=splash?.querySelector('.splash-art'); if(splashImage)splashImage.src=artwork;
if(!splash)return;
const splashHint=splash.querySelector('.splash-hint');
function syncSplashHint(){if(splashHint&&mainLangButton)splashHint.textContent=mainLangButton.textContent.includes('EN')?'Tap anywhere to start tutorial':'Klepni kamkoli a spusť tutoriál';}
syncSplashHint();
mainLangButton?.addEventListener('click',syncSplashHint);
let opened=false;
function startTutorial(){
 if(opened)return;
 opened=true;
 splash.hidden=true;
 document.body.classList.remove('splash-active');
 // Reuse the game's existing bilingual tutorial rather than creating a duplicate flow.
 const tutorialButton=document.getElementById('tutorialBtn');
 if(tutorialButton){tutorialButton.click();return;}
 // Defensive fallback in case the home screen markup changes later.
 const tutorialScreen=document.getElementById('tutorial');
 if(tutorialScreen){document.querySelectorAll('.screen').forEach(s=>s.classList.toggle('active',s===tutorialScreen));}
}
splash.addEventListener('click',startTutorial);
splash.addEventListener('keydown',event=>{if(event.key==='Enter'||event.key===' '){event.preventDefault();startTutorial();}});
document.body.classList.add('splash-active');
})();
