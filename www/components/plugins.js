// This is a JavaScript file

$(document).on("click", "#alerta", function(){
    function retorno()
    {
    }
    navigator.notification.alert("Minha Mensagem",retorno,"Aviso!","Aceito");
});

$(document).on("click","#confirm", function(){
    function confirma(buttonIndex){
        if(buttonIndex=="1"){
            navigaton.notification.alert("Escolheu a opção A");
        }else{
            navigator.notification.alert("Escoleu a opção B");
        }
    }
    navigator.notification.confirm("Escolha A ou B", confirma, "Escolha:",['A','B']);
});
$(document).on("click","#beep",function(){
    navigator.notification.beep(4);
});
