function carregar() {
    var msg = window.document.getElementById('msg')
    var img = window.document.getElementById('imagem')
    var data = new Date()
    var hora = data.getHours()
    var minu = data.getMinutes()
    if (hora >= 0 && hora < 12) {
        //Bom Dia!
        msg.innerHTML = `Agora são exatamente ${hora}:${minu}. Ótimo Dia!`
        img.src = 'manha.png'
        document.body.style.background = '#e2cd9f'
    } else if (hora >= 12 && hora <= 18) {
        //Boa Tarde!
        msg.innerHTML = `Agora são exatamente ${hora}:${minu}. Ótima Tarde!`
        img.src = 'tarde.png'
        document.body.style.background = '#aa7e63'
    } else {
        //Boa Noite!
        msg.innerHTML = `Agora são exatamente ${hora}:${minu}. Ótima Noite!`
        img.src = 'noite.png'
        document.body.style.background = '#515154'
    }
}