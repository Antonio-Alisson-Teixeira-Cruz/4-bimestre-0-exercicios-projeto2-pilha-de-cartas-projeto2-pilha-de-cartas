let deck = []
let menu = ``
let interact = false
let card = ''
let leftCard


do{
    menu = ``
        menu += `Cartas  no deck: ${deck.length}.\n`
        menu += `1- Adicionar carta.\n`
        menu += `2- Retirar.\n`
        menu += `3- Sair.`

    interact = prompt(menu)

    switch(interact){
        case '1':
            card = prompt('Qual carta deseja adicionar?')
            deck.push(card)
            break
        
        case '2':
            if(deck.length == 0 ){
                alert('Sem cards no baralho')
            } else {
                leftCard = deck.pop()
                alert(`A carta retirada foi ${leftCard}`)
            }
            break
        case '3':
            alert('Encerrando...')
            break
        default:
            alert('Encerrando...')

        
    }

} while (interact != '3')
