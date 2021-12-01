'use strict'

let imgHeader = document.getElementById('imgHeader')

imgHeader.setAttribute('onmouseover', 'abreSobre()')
imgHeader.setAttribute('onmouseleave', 'cierraSobre()')

function abreSobre() {
    imgHeader.setAttribute('src','img/sobreAbierto.png')
}
function cierraSobre() {
    imgHeader.setAttribute('src','img/sobreCerrado.png')
}