function inicio(){
    $("html, body").animate({scrollTop: 0}, 300);
}
function expandir() {     
    
    
    
    $("#collapseTwo").collapse('show');
    $("#collapseThree").collapse('show');
    $("#collapseFor").collapse('show');
    $("#collapseFive").collapse('show');
    $("#collapseSix").collapse('show');
    $("#collapseSeven").collapse('show');
    $("#collapseEight").collapse('show');
    $("#collapseOne").collapse('show');
    
}
function fechar() {    
    $("#collapseOne").collapse();
    $("#collapseTwo").collapse();
    $("#collapseThree").collapse();
    $("#collapseFor").collapse();
    $("#collapseFive").collapse();
    $("#collapseSix").collapse();
    $("#collapseSeven").collapse();
    $("#collapseEight").collapse('show');
    
    
}

