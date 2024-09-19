function adicionarItens() {
    const listaCompras = document.getElementById('lista-compras');
    const itens = document.getElementsByClassName('Itens');
  
    // Verifica se todos os itens estão preenchidos
    let todosPreenchidos = true;
    for (let i = 0; i < itens.length; i++) {
      if (itens[i].value.trim() === '') {
        todosPreenchidos = false;
        break;
      }
    }
  
    if (todosPreenchidos) {
      listaCompras.innerHTML = '';
      for (let i = 0; i < itens.length; i++) {
        const item = itens[i].value;
        const li = document.createElement('li');
        li.textContent = item;
        listaCompras.appendChild(li);
      }
    } else {
      alert('Preencha todos os campos da lista de compras.');
    }
  }