function gerar(){
    var fnum    = document.getElementById('txtnum')
    var res     = document.getElementById('res')
    var txttabu = document.getElementById('seltab') 
    
    var num = Number(fnum.value)
    if(fnum.value.length == 0){
    alert("Digite um valor")
    }

    else{
        txttabu.innerHTML = ''
        for(var i=0;i<=10;i++){
        var item = document.createElement('option')
        var s = num*i
        item.innerHTML+= `${num} x ${i} = ${s}`    
        txttabu.appendChild(item)    
    }
    }
}