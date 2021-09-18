
let cont = 0;
// Função de  subtração na quantidade 
$("#subtrai").click(function (){   
    cont = cont -1; 

    if (cont > 0){
        document.getElementById('qtde').value = cont;         
    
    }else if(cont <= -1 ){
        cont = 0
        document.getElementById('qtde').value = cont;
        alert("Quantidade não pode ser menor que zero!")   
    }
}
);

// Função de acrécimo de quantidade
$("#soma").click(function (){
    cont = cont +1;
    document.getElementById('qtde').value = cont;
    
    }
);

// Mensagem ao clicar no botão enviar
$("#enviar").click(function(){
    alert("Pedido enviado com sucesso")
});

        

 



