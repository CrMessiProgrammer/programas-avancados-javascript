function gerar() {
    var num = document.getElementById('txtnum')
    var res = document.getElementById('res')

    if (num.value.length == 0) {
        alert('[ERRO] Insira um número!')
        res.innerHTML = 'Impossível gerar tabuada!'
    } else {
        var n = Number(num.value)
        res.innerHTML = `Gerando tabuada do ${n}: `
        for (var c = 0 ; c <= 10 ; c++) {
            var r = n * c
            res.innerHTML += `<br>${n} x ${c} = ${r}`
        }
    }
}