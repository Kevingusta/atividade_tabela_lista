const tabela = document.querySelector('table');
const colunas = tabela.querySelectorAll('th');

let colunaSelecionada = null;

colunas.forEach(coluna => {
    coluna.addEventListener('click', () => {
        // Remove a cor da coluna anterior, se houver
        if (colunaSelecionada) {
            colunaSelecionada.classList.remove('azul', 'verde');
        }

        // Adiciona a cor à coluna clicada
        colunaSelecionada = coluna;
        coluna.classList.add(coluna.id === 'livro' ? 'azul' : 'verde');

        // Altera a cor de todas as células da coluna
        const celulas = tabela.querySelectorAll(`td:nth-child(${Array.from(colunas).indexOf(coluna) + 1})`);
        celulas.forEach(celula => {
            celula.classList.add(coluna.classList.value);
            if(coluna.classList.value){
                celula.classList.remove('azul', 'verde');
            }
        });
    });
});