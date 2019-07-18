function mudaFoto(foto){
	document.getElementById("icone"). src = foto;
}

/** script para calcular o preço do oculos de acordo com o total da quantidade**/
function calc_total(){
        var qtd = (parseInt(document.getElementById("cQtd").value)) * 1500;
        document.getElementById("cTot").value = qtd;
    }