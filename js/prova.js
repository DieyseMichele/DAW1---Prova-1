$("#cep").mask("00000-000");
$("#cpf").mask("000.000.000-00");
$("#cnpj").mask("00.000.000/0000-00");

$("input[name=tipo]").change(function(data)
{ 
    var selection = $("input[name=tipo]:checked").val();
    console.log(selection); 
    if(selection != "juridica")
	{
		$("#campoCpf").show();
        $("#campoCnpj").hide();		
		
	}	
    else
	{
        $("#campoCnpj").show();
		$("#campoCpf").hide();
		
	}	
});

$("#campoCpf").show();
$("#campoCnpj").hide();


function _cpf(cpf) 
{
	cpf = cpf.replace(/[\s.-]*/igm, '');

    if (cpf == '') return false;

    if (cpf.length != 11)
        return false;
	
	 if (cpf == "00000000000" ||
        cpf == "11111111111" ||
        cpf == "22222222222" ||
        cpf == "33333333333" ||
        cpf == "44444444444" ||
        cpf == "55555555555" ||
        cpf == "66666666666" ||
        cpf == "77777777777" ||
        cpf == "88888888888" ||
        cpf == "99999999999")
        return false;
		
	var soma = 0
    var resto
	
    for (var i = 1; i <= 9; i++) 
        soma = soma + parseInt(cpf.substring(i-1, i)) * (11 - i)
	
    resto = (soma * 10) % 11
	
    if ((resto == 10) || (resto == 11))  
		resto = 0
	
    if (resto != parseInt(cpf.substring(9, 10)) ) 
		return false
    soma = 0
	
    for (var i = 1; i <= 10; i++) 
        soma = soma + parseInt(cpf.substring(i-1, i)) * (12 - i)
	
    resto = (soma * 10) % 11
	
    if ((resto == 10) || (resto == 11))  
		resto = 0
	
    if (resto != parseInt(cpf.substring(10, 11) ) ) 
		return false
	
    return true
}

function validarCPF(el)
{
  if( !_cpf(el.value) )
  {

    alert("CPF Inválido!");

    el.value = "";
  }
}


function _cnpj(cnpj) 
{

    cnpj = cnpj.replace(/[^\d]+/g, '');

    if (cnpj == '') return false;

    if (cnpj.length != 14)
        return false;

 
    if (cnpj == "00000000000000" ||
        cnpj == "11111111111111" ||
        cnpj == "22222222222222" ||
        cnpj == "33333333333333" ||
        cnpj == "44444444444444" ||
        cnpj == "55555555555555" ||
        cnpj == "66666666666666" ||
        cnpj == "77777777777777" ||
        cnpj == "88888888888888" ||
        cnpj == "99999999999999")
        return false;

 
    tamanho = cnpj.length - 2
    numeros = cnpj.substring(0, tamanho);
    digitos = cnpj.substring(tamanho);
    soma = 0;
    pos = tamanho - 7;
	
    for (i = tamanho; i >= 1; i--) 
	{
        soma += numeros.charAt(tamanho - i) * pos--;
        if (pos < 2)
            pos = 9;
    }
	
    resultado = soma % 11 < 2 ? 0 : 11 - soma % 11;
	
    if (resultado != digitos.charAt(0)) 
		return false;
	
    tamanho = tamanho + 1;
    numeros = cnpj.substring(0, tamanho);
    soma = 0;
    pos = tamanho - 7;
	
    for (i = tamanho; i >= 1; i--) 
	{
        soma += numeros.charAt(tamanho - i) * pos--;
        if (pos < 2)
            pos = 9;
    }
    resultado = soma % 11 < 2 ? 0 : 11 - soma % 11;
    
	if (resultado != digitos.charAt(1))
        return false;

    return true;

}
function validarCNPJ(el)
{
  if( !_cnpj(el.value) )
  {

    alert("CNPJ Inválido!");

    el.value = "";
  }
}

function _cep(cep)
{
	cep = cep.replace(/\D/g, '');
	if(cep == "")
		return false; 
	if(cep.length < 8)
		return false;
	
	return true;
	
}
function validarCEP(el)
{
	if( !_cep(el.value))
	{
		alert('CEP Invalido!'); 
		el.value = "";
	}
}

