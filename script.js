let productId = 1001;
 document.getElementById('productForm').addEventListener('submit', function (e) {
 e.preventDefault();

  //captura dos valores

   const name = document.getElementById('name').value; 
   const category = document.getElementById('category').value;
    const priceValue = parseFloat(document.getElementById('price').value);
     const qty = parseInt(document.getElementById('qty').value);
     
     //Formatação: transforma o número em moeda brasileira R$ 
     
     const priceFormatted = priceValue.toLocaleString('pt-BR',{minimumFractionDigits: 2});
     
     //Logica de status:
     
     let statuslabel, statusClass;
     
     if(qty === 0){ 
        statuslabel ="Esgotado";
         statusClass ="esgotado";
         }else if (qty <= 5){
             statuslabel = "Baixo Estoque";
              statusClass = "baixo-estoque";
             } else{
              statuslabel = "Em Estoque";
               statusClass = "em-estoque";
              } 
     
     //criação da linha: faz a Linha da tabela
     
     const tableBody = document.querySelector ('#productsTable tbody');
      const newRow = document.createElement('tr');

      newRow.innerHTML=`
      <td data-label="ID">#${productId++}</td>
      <td data-label="Produto">${name}</td>
      <td data-label="Categoria">${category}</td>
      <td data-label="Preço" class="price">R${priceFormatted}</td>
      <td data-label="Qtd."> ${qty}</td>
      <td data-label="Status"><span class"status ${statusClass}"> ${statuslabel}</span>
      `;

      //Inserção: adiciona a nova linha da tabela

      tableBody.appendChild(newRow);

      //limpeza: Reseta os campos do formúlario para o próximo cadastro
    this.reset()
});