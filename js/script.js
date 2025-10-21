const $ = s => document.querySelector(s);
function atualizarAno(){document.querySelectorAll('#anoAtual,#anoAtualFooter3').forEach(e=>e&&(e.textContent=new Date().getFullYear()));}
atualizarAno();
const form=document.getElementById('contactForm'),modal=document.getElementById('confirmation'),closeBtn=document.getElementById('closeModal');
if(form){form.addEventListener('submit',e=>{e.preventDefault();const n=$('#nome').value.trim(),eM=$('#email').value.trim(),m=$('#mensagem').value.trim();if(!n||!eM||!m){alert('Por favor, preencha todos os campos antes de enviar.');return;}const r=/^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/;if(!r.test(eM)){alert('Por favor, informe um e-mail válido (ex: usuario@dominio.com).');return;}form.reset();modal.setAttribute('aria-hidden','false');});}
if(closeBtn)closeBtn.addEventListener('click',()=>modal.setAttribute('aria-hidden','true'));
