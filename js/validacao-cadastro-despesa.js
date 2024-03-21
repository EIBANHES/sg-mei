// Formulário de Cadastro de Despesa no Caixa
var validacao = $('#caixa-cadastro-despesa').validate(
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