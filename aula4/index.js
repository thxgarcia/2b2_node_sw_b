const inquirer = require('inquirer')
const chalk = require('chalk')

const fs = require('fs')
operation()
function operation() {
    inquirer.prompt([
        {
            type: 'list',
            name: 'action',
            message: 'O que deseja fazer?',
            choices:[
                'Criar conta',
                'Consultar saldo',
                'Depositar',
                'Sacar',
                'Sair',
            ],
        }
    ]).then((answer) => {
        const action = answer['action']

        if(action === 'Criar conta'){
            console.log(action)
        }else if(action === 'Depositar'){
            console.log(action)
        }else if(action === 'Consultar saldo'){
            console.log(action)
        }else if(action === 'Sacar'){
            console.log(action)
        }else if(action === 'Sair'){
            console.log('Saindo do sistema...')
            process.exit()
        }else {
            console.log('Nao e valido')
        }
    })
}