
var nome = $("#nome");
var nascimento = $("#nascimento");
var usuario = $("#usuario");
var senha = $("#senha");
var erromsg = '<div class="erromsg">Preencha o campo <span></span></div>';

$("#inscrever").click(function(){
    $(".erromsg").remove();   


    if(!nome.val() || nome.val().length < 5){
        nome.after(erromsg);
        $(".erromsg span").text("nome corretamente");
        return;
     }
     if(!nascimento.val() || nascimento.val().length < 8){
        nascimento.after(erromsg);
        $(".erromsg span").text("nascimento corretamente");
        return;
     }
     if(!usuario.val() || usuario.val().length < 2){
        usuario.after(erromsg);
        $(".erromsg span").text("usuario corretamente");
        return;
     }
     if(!usuario.val() || usuario.val() == "x2018" || usuario.val() == "kiwi"){
        usuario.after(erromsg);
        $(".erromsg span").text("usuário, diferente de "+ usuario.val());
        return;
     }
     if(!senha.val() || senha.val().length < 6){
        senha.after(erromsg);
        $(".erromsg span").text("senha corretamente");
        return;
        
     }else{
         
        alert(nome.val() + ", você foi cadastrado com sucesso!"+ nome);
        //limpa campos
        $("#nome").val("");
        $("#nascimento").val("");
        $("#usuario").val("");
        $("#senha").val("");
     }  
});