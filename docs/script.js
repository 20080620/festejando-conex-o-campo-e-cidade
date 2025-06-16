// Script.jd para feedback do formulário

document.getElementById("formconato").
addEventListener("submit",function(Event)
{
    event.preventDefault();//impede o envio padrão

    alert("mensagem enviada com sucesso!
        obrigado por entrar em conato.");
         this.reset();//limpa os campos
    });
    