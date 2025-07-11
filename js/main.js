'use strict';

const preencheFormulario = (dados) =>{
    document.getElementById('endereco').value = dados.logradouro;
    document.getElementById('bairro').value = dados.bairro;
    document.getElementById('cidade').value = dados.localidade;
    document.getElementById('estado').value = dados.estado;    
};

const limpaFormulario = () =>{
    document.getElementById('endereco').value = "";
    document.getElementById('bairro').value = "";
    document.getElementById('cidade').value = "";
    document.getElementById('estado').value = "";    
};


const cepValido = (cep) => cep.length == 8 && /^[0-9]+$/.test(cep);             //Testa se "cep" todos os caracteres estão na lista de 0 a 9

const pesquisarCep = async () =>{
    limpaFormulario();
    const cep = document.getElementById('cep').value;
    const url = `http://viacep.com.br/ws/${cep}/json/`;
    if(cepValido(cep)){
        const response = await fetch(url);
        const dados = await response.json();
        if(dados.hasOwnProperty('erro')){                                       //Se este objeto possui a propriedade "erro"
            alert('CEP não encontrado. Verifique e tente novamente!');
        }else{
            preencheFormulario(dados);
        }
    }else{
        alert('CEP inválido!');
    }    
};

document.getElementById('cep').addEventListener('focusout', pesquisarCep);