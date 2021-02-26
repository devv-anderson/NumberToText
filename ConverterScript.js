function Unidades(num) {
    switch (num) {
        case 1:
            return "um";
            break;
        case 2:
            return "dois";
            break;
        case 3:
            return "tres";
            break;
        case 4:
            return "quatro";
            break;
        case 5:
            return "cinco";
            break;
        case 6:
            return "seis";
            break;
        case 7:
            return "sete";
            break;
        case 8:
            return "oito";
            break;
        case 9:
            return "nove";
            break;
        default:
            return "";
    }
}

function Dezenas(num) {
    decena = Math.floor(num / 10); unidade = num - (decena * 10);
    switch (decena) {
        case 1:
            switch (unidade) {
                case 0:
                    return "dez";
                case 1:
                    return "onze";
                case 2:
                    return "doze";
                case 3:
                    return "treze";
                case 4:
                    return "quatorze";
                case 5:
                    return "quinze";
                case 8:
                    return "dezoito";
                default:
                    return "deze" + Unidades(unidade);
            }
        case 2:
            switch (unidade) {
                case 0:
                    return "vinte";
                default:
                    return "vinte" + " e " + Unidades(unidade);
            }
        case 3:
            switch (unidade) {
                case 0:
                    return "trinta";
                default:
                    return "trinta" + " e " + Unidades(unidade);
            }
        case 4:
            switch (unidade) {
                case 0:
                    return "quarenta";
                default:
                    return "quarenta" + " e " + Unidades(unidade);
            }
        case 5:
            switch (unidade) {
                case 0:
                    return "cinquenta";
                default:
                    return "cinquenta" + " e " + Unidades(unidade);
            }
        case 6:
            switch (unidade) {
                case 0:
                    return "sessenta";
                default:
                    return "sessenta" + " e " + Unidades(unidade);
            }
        case 7:
            switch (unidade) {
                case 0:
                    return "setenta";
                default:
                    return "setenta" + " e " + Unidades(unidade);
            }
        case 8:
            switch (unidade) {
                case 0:
                    return "oitenta";
                default:
                    return "oitenta" + " e " + Unidades(unidade);
            }
        case 9:
            switch (unidade) {
                case 0:
                    return "noventa";
                default:
                    return "noventa" + " e " + Unidades(unidade);
            }
        case 0:
            return Unidades(unidade);
    }
}

function Centenas(num) {
    centenas = Math.floor(num / 100); decenas = num - (centenas * 100);

    switch (centenas) {

        case 1:
            if (decenas > 0) {
                return "cento" + " e " + Dezenas(decenas);
            } else {
                return "cem";
            }
            break;
        case 2:
            if (decenas > 0) {
                return "duzentos" + " e " + Dezenas(decenas);
            } else {
                return "duzentos";
            }
            break;
        case 3:
            if (decenas > 0) {
                return "trezentos" + " e " + Dezenas(decenas);
            } else {
                return "trezentos";
            }
            break;
        case 4:
            if (decenas > 0) {
                return "quatrocentos " + " e " + Dezenas(decenas);
            } else {
                return "quatrocentos";
            }
            break;
        case 5:
            if (decenas > 0) {
                return "quinhentos" + " e " + Dezenas(decenas);
            } else {
                return "quinhentos";
            }
            break;
        case 6:
            if (decenas > 0) {
                return "seisentos" + " e " + Dezenas(decenas);
            } else {
                return "seisentos";
            }
            break;
        case 7:
            if (decenas > 0) {
                return "setesentos " + " e " + Dezenas(decenas);
            } else {
                return "setesentos";
            }
            break;
        case 8:
            if (decenas > 0) {
                return "oitosentos" + " e " + Dezenas(decenas);
            } else {
                return "oitosentos";
            }
            break;
        case 9:
            if (decenas > 0) {
                return "novesentos " + " e " + Dezenas(decenas);
            } else {
                return "novesentos";
            }
            break;
        default:
            return Dezenas(decenas);
    }
}

function Seccion(num, divisor, strSingular, strPlural) {
    cento = Math.floor(num / divisor)
    resto = num - (cento * divisor)

    letras = "";

    if (cento > 0) {
        if (cento > 1) {
            letras = Centenas(cento) + " " + strPlural;
        } else {
            letras = strSingular;
        }
    }
    if (resto > 0) {
        letras += "";
    }
    return letras;
}


function Milhar(num) {
    let divisor = 1000,
        strMilhar = false,
        strCentenas = false;

    if (num == divisor) {
        cento = Math.floor(num / divisor);
        resto = num - (cento * divisor)
        strMilhar = Seccion(num, divisor, "mil");
        strCentenas = Centenas(resto);
    }

    centena = Math.trunc(centena = num / 100 % 10)
    dezena = Math.trunc(dezena = num / 10 % 10)
    unidade = Math.trunc(unidade = num / 1 % 10)
    milhar = Math.floor(num / divisor)
    /*   console.log('milhar ' + milhar)
      console.log('centena ' + centena)
      console.log('Dezena ' + dezena)
      console.log('Unidade ' + unidade) */

    if (milhar > 0) {
        if (centena == 0) {
            if (dezena == 0 && unidade == 0) {
                strMilhar = Seccion(num, divisor, "mil", "mil");
                strCentenas = Centenas(resto); // correto
            } else if (dezena > 0 || unidade > 0) {
                strMilhar = Seccion(num, divisor, "mil e", "mil e");
                strCentenas = Centenas(resto); // correto
            }
        } else if (centena > 0) {
            if (dezena == 0 && unidade == 0) {
                strMilhar = Seccion(num, divisor, "mil e", "mil e");
                strCentenas = Centenas(resto); //  correto
            } else if (dezena == 0 && unidade > 0) {
                strMilhar = Seccion(num, divisor, "mil", "mil"); // correto
                strCentenas = Centenas(resto);
            } else if (dezena == 0 || unidade == 0) {
                strMilhar = Seccion(num, divisor, "mil", "mil"); // correto
                strCentenas = Centenas(resto);
            } else if (dezena != 0 || unidade != 0) {
                strMilhar = Seccion(num, divisor, "mil", "mil"); // correto
                strCentenas = Centenas(resto);
            }
            else if (dezena > 0 || unidade > 0) {
                strMilhar = Seccion(num, divisor, "mil", "mil"); // correto
                strCentenas = Centenas(resto);
            }

        }
    } else {
        if (centena > 0) {
            if (dezena > 0 || unidade > 0) {
                strMilhar = Seccion(num, divisor, "mil", "mil");
                strCentenas = Centenas(resto);
            } else if (dezena > 0 && unidade > 0) {
                strMilhar = Seccion(num, divisor, "mil", "mil");
                strCentenas = Centenas(resto);
            } else if (dezena == 0 && unidade == 0) {
                strMilhar = Seccion(num, divisor, "mil", "mil");
                strCentenas = Centenas(resto);
            }
        } else {
            if (dezena > 0) {
                if (unidade == 0) {
                    strMilhar = Seccion(num, divisor, "mil", "mil");
                    strCentenas = Centenas(resto);
                } else {
                    strMilhar = Seccion(num, divisor, "mil e", "mil e");
                    strCentenas = Centenas(resto);
                }
            } else {
                if (unidade == 0) {
                    strMilhar = Seccion(num, divisor, "mil", "mil");
                    strCentenas = Dezenas(resto);
                } else {
                    strMilhar = Seccion(num, divisor, "mil e", "mil e");
                    strCentenas = Centenas(resto);
                }
            }
        }
    }

    if (strMilhar.lenght) {
        return strCentenas;
    } else {
        return strMilhar + " " + strCentenas;
    }

}




function Milhoes(num) {
    let divisor = 1000000;

    centena = Math.trunc(centena = num / 100 % 10)
    dezena = Math.trunc(dezena = num / 10 % 10)
    unidade = Math.trunc(unidade = num / 1 % 10)
    milhar = Math.floor(milhar = num / 1000 % 10)
    dmilhar = Math.floor(dmilhar = num / 10000 % 10)
    cmilhar = Math.floor(cmilhar = num / 100000 % 10)
    milhao = Math.floor(milhao = num / 1000000 % 10)

    if (num == divisor) {
        if (cmilhar == 0 && dmilhar == 0 && milhar == 0 && centena == 0 && dezena == 0 && unidade == 0) {
            cento = Math.floor(num / divisor); resto = num - (cento * divisor)
            strMilhoes = Seccion(num, divisor, "um milhao de", "um milhao de");
            strMilhar = Milhar(resto);
        }
    }
    else if (num > divisor && cmilhar == 0 && dmilhar == 0 && milhar == 0 && centena == 0 && dezena == 0 && unidade == 0){
        cento = Math.floor(num / divisor); resto = num - (cento * divisor)
        strMilhoes = Seccion(num, divisor, "milhoes de", "milhoes de");
        strMilhar = Milhar(resto);
    }
    else if (num > divisor && cmilhar != 0 || dmilhar != 0 || milhar != 0){
        cento = Math.floor(num / divisor); resto = num - (cento * divisor)
        strMilhoes = Seccion(num, divisor, "um milhao", "milhoes");
        strMilhar = Milhar(resto);
    }
    
    else {
        cento = Math.floor(num / divisor); resto = num - (cento * divisor)
        strMilhoes = Seccion(num, divisor, "um milhao e", "milhoes e");
        strMilhar = Milhar(resto);
    } 











    

    if (strMilhoes.lenght) {
        return strMilhar;
    } else {
        return strMilhoes + " " + strMilhar;
    }
}

function NumeroALetras(negativo, num, centavos, moeda, contador) {
    var data = {
        numero: num,
        Inteiros: Math.floor(num),
        centavos: (((Math.round(num * 100)) - (Math.floor(num) * 100))),
        letrasCentavos: "",
    };

    auxiliar = centavos

    if (negativo == "-") {
        negativo = " negativo"
    } else {
        negativo = ""
    } 

    if (contador == undefined || contador == false) {
        contador = 0;
    }

    if(moeda == 1){
                data.letrasMoedaPlural = "reais";
                data.LetrasMoedaSingular = "real";
                data.centavos = centavos;
    }
    else if (moeda == 2) {
                data.letrasMoedaPlural = "dolares";
                data.LetrasMoedaSingular = "dolar";
                data.centavos = centavos;

    }
    else if (moeda == 3 ) {
                data.letrasMoedaPlural = "euros";
                data.LetrasMoedaSingular = "euro";
                data.centavos = centavos
    } else 
            data.letrasMoedaPlural = "";
            data.centavos = centavos

    if (moeda <=1){
    if (data.centavos > 0) {
        data.letrasCentavos += " e " + NumeroALetras(null,auxiliar, false, null) + "centavos" + negativo;
    }
    }   
    else if (moeda >= 2) {
        if (data.centavos > 0) {   
        data.letrasCentavos += " e " + NumeroALetras(null, auxiliar, false, null) + "cents" + negativo;
    }}
    if (data.Inteiros <= 0) {
        return data.letrasCentavos;
    } else if (data.Inteiros == 1) {
        return Milhoes(data.Inteiros) + " " + data.LetrasMoedaSingular + " " + data.letrasCentavos;
    } else {
        return Milhoes(data.Inteiros) + " " + data.letrasMoedaPlural + "" + data.letrasCentavos;
    }
}
// 1º parametro - "-" para numero negativos e "+" ou "" para positivos 
// 2º parametro - Quantidade em reais, dolares ou euros
// 3º parametro - Quantidade em centavos ou cents
// 4º parametro - 1 para reais, 2 para dolares e 3 para euros


console.log(NumeroALetras("-",100132330,10,1))
