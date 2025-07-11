'use strict';

const preencheFormulario = (dados) =>{
    document.getElementById('endereco').value = dados.logradouro;
    document.getElementById('bairro').value = dados.bairro;
    document.getElementById('cidade').value = dados.localidade;
    document.getElementById('estado').value = dados.uf;    
};

const limpaFormulario = () =>{
    document.getElementById('endereco').value = "";
    document.getElementById('bairro').value = "";
    document.getElementById('cidade').value = "";
    document.getElementById('estado').value = "";    
};


const cepValido = (cep) => cep.length == 8 && /^[0-9]+$/.test(cep);

const pesquisarCep = async () =>{
    limpaFormulario();
    const cep = document.getElementById('cep').value;
    const url = `https://viacep.com.br/ws/${cep}/json/`;
    if(cepValido(cep)){
        const response = await fetch(url);
        const dados = await response.json();
        if(dados.hasOwnProperty('erro')){
            alert('CEP não encontrado. Verifique e tente novamente!');
        }else{
            preencheFormulario(dados);
        }
    }else{
        alert('CEP inválido!');
    }    
};

document.getElementById('cep').addEventListener('focusout', pesquisarCep);