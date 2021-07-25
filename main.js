/*
  Em Desenvolvimento! Não E A Versão Final!
  Eu Sei O Código Ta Grande Poderia Diminuir Mais Deixa Depois Faço Outro
   
   Criado: 24/07/2021
   Finalizado: 25/07/2021
   versão: 1.0
   blog: https://otoniel-blog.blogspot.com/?m=1 
  
   OBS: desafio Jogo Da Forca JavaScript CFB cursos Completo!
   
   aviso: existem bugs!
   
*/

//palavras para serem escolhidas aleatoriamente
var palavra = [
  "PROMESSA",
  "BANANA",
  "COMIDA",
  "FRUTA",
  "MAÇÃ",
  "LARANJA",
  "TOMATE",
  "VIAJEM",
  "TREM",
  "CEBOLA",
  "MELODIA",
  "PAIXÃO",
  "MESA",
  "ESPELHO",
  "SOL",
  "LUA",
  "ESTRELA",
  "GATO",
  "MELÃO",
  "PESSOA",
  "MATO",
  "JAVASCRIPT",
]

//varivaveis necessárias 
var chances = 7
var historico = document.querySelector("#hs")
var dicas = 3
var ganho = 0
//imagem do boneco
var forca = 1

var LugarBoneco = document.querySelector("#corpo")

var Boneco = []
Boneco[0] = new Image()


//preparando as variáveis para começar
   for(var i = 1;i < palavra.length;i++) {
       var y = Math.floor(Math.random() * i)
   }

     var x = palavra[y].substr(0,2)
   
     var lugar = document.querySelector("#res")
     lugar.innerHTML = x
      
     var vitória = document.querySelector("#vi")
      
     //pergunta
     function pergunta(texto) {
       x += texto.value.toUpperCase()
         lugar.innerHTML = x
          
          let comp = x.localeCompare(palavra[y])
          
        
          if(comp === 1) {
            forca++
          }
          
            if(comp === 0) {
             
             ganho++
              vitória.innerHTML = "Vitorias: "+ganho
              
              alert("CORRETO: "+palavra[y])
             
               alert("começando denovo em 5 seg")
                
                  setTimeout(function() {
                    for(i = 1;i < palavra.length;i++) {
                       y = Math.floor(Math.random() * i)
                     }

                      x = palavra[y].substr(0,2)
   
                        lugar.innerHTML = x
                  },5000)
            } 
           
            historico.innerHTML += texto.value.toUpperCase() + " , "
            
            setTimeout(function() {
              texto.value = null
           },50)
      }
          //dica
          function dica() {
              dicas--
            
                const p = Math.floor(Math.random() * palavra[y].length)
            
                  let ii = palavra[y].charCodeAt(p)
            
                   if(dicas < 0) {
                     alert("SUAS DICAS ACABARAM MAX: 3")
                   } else {
                     alert("TEM UMA LETRA: "+ String.fromCharCode(ii))
                   }
       }

checkGameOver = setInterval(function() {
  
  if(forca === 7) {
    alert("Game Over")
    clearInterval(checkGameOver)
    document.location.reload(1)
  }
  
Boneco[0].src = "res/forca"+forca+".gif"
//faz aparecer a imagen do boneco
LugarBoneco.appendChild(Boneco[0])

},10)