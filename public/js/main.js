$('#btnAdicionar').click(novoAtivo);

const nomes = ["A", "B", "C"];
let listaAtivos = [];
let qtdAtivos = 0;
let totalInvestido = 0;
let totalPorcentagem = 0;

class Ativo {
	constructor(id, nome, valor, porcentagem) {
		this.id = id;
		this.nome = nome;
        this.valor = valor;
        this.porcentagem = porcentagem;
	}
}

$(function() {
    nomes.forEach(() => {
	novoAtivo();
    });
    calculaPorcentagem();
})

function totalValor() {
    listaAtivos.forEach(ativo => {
        totalInvestido += ativo.valor;
    });
    return totalInvestido;
}

function calculaPorcentagem() {
    listaAtivos.forEach(ativo => {
        ativo.porcentagem = ativo.valor / totalInvestido * 100;
        $('#inputPorcentagem' + ativo.id).val((ativo.porcentagem).toFixed(2));
    });
}

function novoAtivo() {
    
    let ativo = new Ativo(qtdAtivos++, "teste");
    listaAtivos.push(ativo);
    let tabela = $('.tabela-at').find('tbody'); 
    let linha = $('<tr>');
    let colunaNome = $('<td>').text(ativo.nome);
    let colunaValor = $('<td>').text("R$ ");
    let inputValor = $('<input>').addClass('inputAtivoinvestimento').attr("type", "number").attr("id", "inputValor" + ativo.id).attr("value", ativo.valor);

    colunaValor.append(inputValor);

    $('#inputTotal').val(totalValor());

    let colunaPorcentagem = $('<td>');
    
    ativo.porcentagem = 0;
    let inputPorcentagem = $('<input>').addClass('inputPorcentagem').attr('type', 'number').attr('id', 'inputPorcentagem' + ativo.id);

    colunaPorcentagem.append(inputPorcentagem);

    let colunaRemover = $('<td>');
    let img = $('<img>').addClass('btnX').attr("src", "./ic_remove.png");

    colunaRemover.append(img);

    linha.append(colunaNome);
    linha.append(colunaValor);
    linha.append(colunaPorcentagem);
    linha.append(colunaRemover);
    linha.find('.btnX').click(removeLinha);
    
    tabela.append(linha);
    getQtdAtivos();
}

function removeLinha() {
    let linha = $(this).parent().parent();
    linha.remove();
}

function atualizaLista() {
    listaAtivos.forEach(ativo => {
        novoAtivo();
    });
    
}

function getQtdAtivos() {
    $('#qtdAtivos').text(listaAtivos.length);
}
