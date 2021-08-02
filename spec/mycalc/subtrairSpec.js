describe('Suite de testes da funcionalidade subtração da minha calculadora', function(){

	var myCalc = require('../../src/js/myCalc.js');

	it('Deve subtrair dois numeros interios, 2 e 5, e retornar -3', function(){
		expect(myCalc.subtrair(2, 5)).toEqual(-3);
	});

	it('Deve subtrair dois numeros interios, 5 e 3, e retornar 2', function(){
		expect(myCalc.subtrair(5, 3)).toEqual(2);
	});

	it('Deve subtrair dois numeros de ponto flutuante, 5.5 e 3.4, e retornar 2.1', function(){
		expect(myCalc.subtrair(5.5, 3.4)).toEqual(2.1);
	});

	it('Deve subtrair dois numeros de ponto flutuante, 5.55 e 3.45, e retornar 2.10', function(){
		expect(myCalc.subtrair(5.55, 3.45)).toEqual(2.10);
	});
});