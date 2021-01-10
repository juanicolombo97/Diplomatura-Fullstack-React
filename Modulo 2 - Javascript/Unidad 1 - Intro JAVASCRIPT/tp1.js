var meses = ['Enero', 'Febrero', 'Marzo', 'Abril', 'Mayo', 'Junio', 'Julio', 'Agosto', 'Septiembre', 'Octubre', 'Noviembre', 'Diciembre'];
    
var diasDelMes= [31, 28, 31, 30, 31, 30, 31, 31, 30, 31, 30, 31];

var diasCon31 = [];
var diasCon30 = [];
for (let index = 0; index < meses.length; index++) {
    if (diasDelMes[index] == 31) {
        diasCon31.push(meses[index]);
    } else if (diasDelMes[index] == 30) {
        diasCon30.push(meses[index]);
    }    
}
        
    
    
console.log("Dias con 31");
console.log(diasCon31);
console.log("Dias con 30");
console.log(diasCon30);
