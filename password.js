function texto() {
    let para = document.createElement('p');
    let pText = document.createTextNode('Mensagem enviada');
    para.appendChild(pText);
    para.classList.add('fade-in');
    document.querySelector('.login').appendChild(para);
}
