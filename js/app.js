function comprar() {
    
    let ingresso = document.getElementById('tipo-ingresso').value;
    let qtde = document.getElementById('qtd').value;
    let estoque = Number(document.getElementById('qtd-'+ingresso).textContent);
    let atualiza = estoque - qtde;
    if (atualiza < 0) {
        alert('Quantidade indisponível');
        return;
    } else {
        //Atualizar o estoque na tela
        document.getElementById('qtd-'+ingresso).textContent = `${atualiza}`;
    }
    document.getElementById('qtd').value = 0;
}

