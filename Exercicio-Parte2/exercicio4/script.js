function contar(){
    
    var finic  = document.getElementById('txtinic')
    var fim   = document.getElementById('txtfim')
    var passo = document.getElementById('txtpasso')
    var res   = document.getElementById('res')
    
    if (finic.value.length == 0 || passo.value.length == 0 || fim.value.length == 0) {
        alert('Insira um valor')
    } else{
        var n1 = Number(finic.value)
        var n2 =  Number(passo.value)
        var final = Number(fim.value)
        res.innerHTML = 'Contando'
        if(n1<final){
        do{
            res.innerHTML += ` ${n1} \u{1F449}`
            n1=n1+n2;
            
        }while (n1<=final) 
        }else{
        do{
            res.innerHTML += ` ${n1} \u{1F449}`
            n1=n1-n2;
            
        }while (n1>=final) 
    }
            res.innerHTML += `\u{1F3C1}`
        
       
    }
}