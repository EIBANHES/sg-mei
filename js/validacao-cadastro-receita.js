// Formulário de Cadastro de Receita no Caixa
var validacao = $('#caixa-cadastro-receita').validate(
    {
        rules: {
            data: {
                required: true,
                date: true
            },
            valor: {
                required: true,
                number: true
            }
        }
    }
);
validator.form();

