$('#btnAdicionar').click(novoAtivo);
$('#qtdAtivos').click(getQtdAtivos);
$('#inputTotal').val(Math.round(Math.random() * 1000000));

const listaAtivos = ["A", "B", "C", "D"];

$(function() {
    getQtdAtivos();
})

function novoAtivo(nomeAtivo) {
    
    var tabela = $('.tabela-at').find('tbody'); 

    var linha = $('<tr>');
    var colunaNome = $('<td>').text(nomeAtivo);
    var colunaValor = $('<td>').text("R$ ");
    var inputValor = $('<input>').addClass('inputAtivoinvestimento').attr("type", "number");

    colunaValor.append(inputValor);

    var colunaPorcentagem = $('<td>');
    var inputPorcentagem = $('<input>').addClass('inputPorcentagem').attr('type', 'text');

    colunaPorcentagem.append(inputPorcentagem);

    var colunaRemover = $('<td>');
    var img = $('<img>').addClass('btnX').attr("src", "./ic_remove.png");

    colunaRemover.append(img);

    linha.append(colunaNome);
    linha.append(colunaValor);
    linha.append(colunaPorcentagem);
    linha.append(colunaRemover);
    linha.find('.btnX').click(removeLinha);
    
    tabela.append(linha);
}

function removeLinha() {
    var linha = $(this).parent().parent();
    linha.remove();
}

function getQtdAtivos() {
    listaAtivos.forEach(ativo => {
        novoAtivo(ativo);
    });
}