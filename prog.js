alert('hello amigos');

/*
var x; a variavel fica existindo sempre, são mutaveis, pode mudar as tipagem

let y; so existe em uma parte do codigo, depois ele some são mutaveis, pode mudar as tipagem

const z = 10; varivel constante, precisa de um valor definido e o valor não pode ser mudado

Boolean 0=false | 1 = true : dierente de zero é verdadeiro, string é verdaderio, se for vazia é true (nome = '')

&& e
|| ou
! não

*/

var x= 3;
document.write(x); /*print no html*/
document.write('\n')
document.write('<br>')
document.write('alanaa');
document.write('<br>' + 'lua' + '<br>' + 'superior')
console.log(typeof(x));

let valor1 = String(x)
console.log(x)



let y= 4;
console.log(y)

const z = 10;


let alunos = []; /*array - list vazia*/
let aluno = new Array();/*array -antigo*/

let aln = ['alana' ,'barbara']/*array - cheia com valores*/
console.log(aln[0])

alunos[0] = 'vitor' /*adiciona no array*/
console.log(alunos[0])

alunos[1] = 'teste' /*adiciona no array*/
console.log(alunos[1])

alunos[1] = 'yuri' /*substitui no array*/
console.log(alunos[1])