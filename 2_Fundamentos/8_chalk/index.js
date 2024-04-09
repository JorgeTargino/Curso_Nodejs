const chalk = require('chalk')

const nota = 1

if (nota >= 7) {
    console.log(chalk.green('Parabéns! Você está aprovado'))
} else {
    console.log(chalk.red('Você precisa fazer a prova de recuperação'))
}