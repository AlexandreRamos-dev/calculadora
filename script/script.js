// Função para inserir valores
    function insertToDisplay(insert) {
        document.querySelector('#display').value += insert
    }

// Função para limpar os valores do display
    function clean() {
        document.querySelector('#display').value = ''
    }

// Função para voltar números do display
    function back() {
        const display = document.querySelector('#display')
        display.value = display.value.slice(0, -1)
    }

// Função para calcular os valores do display
    function result() {
        const display = document.querySelector('#display')
        try {
        display.value = eval(display.value)
        } catch {
            display.value = 'Error'
        }
    }