//variáveis:
let inventario = []
let experiencia = 0
let nacionalidade 
 
//Funções de cada fase:
function inicioDoJogo() {
    let fraseInicial = Number(prompt("Seja bem vindo(a) ao Kasra Adventure! Uma aventura de vida de um atleta incrivel!\nDigite(1) para ver o objetivo \nDigite(2) para começar o jogo \nDigite(3) para conhecer o personagem da nossa história."))
    if (fraseInicial === 1) {
        alert("Seu objetivo principal é ganhar as olimpíadas e conquistar o respeito de todos! Agora vamos em busca dessa aventura! Você deve atingir no minimo 500 de experiencia para chegar até as olimpiadas e ter sua luta final!")
    } else if (fraseInicial === 2) {
        alert("Que começe a aventura!")
    } else if (fraseInicial === 3){
        alert("Kasra Mehdipournejad é um atleta de taekwondo natural do Irã. Ele é conhecido por suas habilidades e conquistas no esporte, tendo participado de várias competições internacionais. Mehdipournejad se destaca por seu compromisso com a excelência no taekwondo e sua dedicação ao treinamento. Agora que você ja sabe quem é o nosso atleta vamos começar o jogo!")
    }
}
 
function primeiraFaseTreino1() {
    let pergunta = Number(prompt("O ano é 2000 e kasra começa sua jornada no taekwondo! Seu pai quer muito ver o filho praticar esse esporte por isso lhe leva até o seu primeiro treino. Chegando lá você tem que escolher:\n1: Cumprimentar o mestre da academia. \n2: Cumprimentar todos os seus colegas e seu mestre. \n3: Não comprimentar ninguém e ir para um canto esperar o treino começar."))
    if (pergunta === 1) {
        alert("Seu mestre gostou de sua atitude e te deu um pingente de boas normas. Você ficou muito feliz e está mais motivado do que nunca para conquistar seu sonho de chegar nas olimpíadas! \nVocê ganhou mais 50 de experiência")
        experiencia = experiencia + 100
    } else if (pergunta === 2) {
        alert("Seu mestre adorou sua atitude e vê muito potencial em você. Seus amigos também gostaram de sua atitude. Todos ficaram animados para treinar e se tornarem a melhor versão de si mesmos. Com isso você ganhou um item de alegria e ele será armazendado no seu inventário! \n Parabéns você ganhou mais 100 de experiência!")
        inventario.push("Alegria");
        experiencia = experiencia + 200
    } else if (pergunta === 3) {
        alert("Uma atitude normal de um aluno novo e tímdio. O treino começa normalmente e você não conhece ninguém lá.")
 
    }
}
 
function primeiraFaseTreino2() {
    let segundaParte = Number(prompt("Começando o treino você se encontra com um outro colega que se chama Reza. Você percebe que ele é mais experiente que você pois a sua faixa é diferente da dele. Você se sente nervoso mas convicto que vai dar o seu melhor. Portanto a luta começa e você tem que escolher oque fazer: \n1: Você escolhe agarra-lo e joga-lo no chão. \n2: Você escolhe dar um chute rápido no lado esquerdo dele. \n3: Você fica com medo e pede para ele ir tranquilo."))
    if (segundaParte === 1) {
        alert("Você tenta agarra-lo mas é parado no mesmo instante pelo seu oponente. Seu mestre vem e diz que você não pode cometer esse erro, afinal não é permitido fazer esse tipo de golpe no taekwondo. Você perde a luta e ganha um sermão do mestre. No seu inventário de emoções agora possui a emoção insegurança. \nVocê perdeu a luta!")
        inventario.push("insegurança")
    } else if (segundaParte === 2) {
        alert("O seu chute foi preciso e inesperado. Seu oponente Rasa cai no chão mas como estava com proteções não se machucou. Todos ali ficaram chocados e viram um enorme potecial em um simples iniciante. Seu mestre o parabeniza e seu oponente o cumprimenta e te da os paraabéns. Você recebe em seu inventário de emoções a emoção de êxtase. \nParabéns você ganhou 200 de experiencia")
        experiencia = experiencia + 200
        inventario.push("êxtase")
    } else if (segundaParte === 3) {
        alert("Seu oponente riu de você e foi 200% com mais vontade do que antes você perdeu a luta em menos de 10 segundos e todos riram de você. Você ficou envergonhado e seu mestre o deu uma lição de moral. Com essa lição de moral você entendeu com seu erro e o promete que não vai acontecer novamente. \nO seu inventário recebeu uma nova emoção: Valentia e mais 100 de experiencia!")
        experiencia = experiencia + 100
        inventario.push("Valentia")
    }
    alert("Você sente que está no caminho certo após esse treino e tem certeza que vai realizar seu sonho se manter a disciplina e o foco no seu objetivo.")
}
 
function segundaFase1(){
    let perguntaa = Number(prompt("Após longos meses de treino seu mestre vê que você está evoluindo constantemente. Chegando normalmente em outro treino o seu mestre lhe diz que se você ganhar uma luta você vai receber a faixa cinza, mas a luta será contra o melhor faixa cinza da academia! Oque você decide fazer? \n1: Você fica recioso mas vai lutar mesmo assim. \n2: Você mente que está machucado para não lutar com ele. \n3: Você se concentra e vai pra cima do adversário e o enfrenta como se ele fosse um iniciante."))
 
    if (perguntaa === 1){
        alert("Mesmo recioso você vai pra cima! A luta é acirrada e ambos vocês estão lutando muito bem. Depois de 5 minutos de luta você escuta um apito. Seu mestre estava observando e determina que a luta acabou. Ele então disse que você completou o seu desafio e você conquistou a sua próxima faixa!\nVocê conquistou mais 150 pontos de experiencia!")
        experiencia = experiencia + 150
    } else if (perguntaa === 2){
        alert("O mestre entende seu lado e diz que você vai ter que treinar por mais um mês para ter uma nova chance. Você por dentro se sente mal por ter perdido essa oportunidade \nFoi adicionado a emoção insegurança a seu inventário de emoções.")
        inventario.push("Insegurança")
    } else if (perguntaa === 3){
        alert("Você deu golpes absurdamente fortes e rápidos e você venceu a luta muito rápido. O seu mestre lhe deu um elogio e disse que você tem um futuro brilhante nesse esporte. Porém você deu golpes que machucaram seu oponente, ele acabou com um osso do braço quebrado. \nVocê ganhou mais 250 de experiencia mas foi adicionado a emoção vulnerabilidade a seu inventario de emoções.")
        experiencia = experiencia + 250
        inventario.push("Vulnerabilidade")
    }
}

function segundaFase2(){
    let perguntinha = Number(prompt("Voltando do treino você vê um assalto com uma senhora do outro lado da rua. Você olha ao redor e vê que é apenas um assaltante e ele está sem nenhuma arma e está apenas roubando a bolsa dela. Oque você faz? \n1: Você sai correndo \n2:Você decide ajudar a senhora"))
    if (perguntinha === 1){
        alert("O assaltante te percebe ali e vê você correndo e logo em seguida ele sai correndo com as coisas da senhora. ")
    } else if (perguntinha === 2){
        alert("Você chega correndo e da um chute na cara do ladrão ele desmaia e cai no chão. A senhora o agradeçe e vocês dois fogem. Depois de um tempo você descobre que a senhora era a mãe de Rasa o amigo que você fez nos treinos. Ele te agradeçe por sua atitude e fala desse acontecimento para seu mestre. \nVocê ganhou 250 de experiencia e mais o item Coragem em o seu inventário!")
        experiencia = experiencia + 250
        inventario.push("Coragem")
    }
}

function terceiraFase1(){
    alert("Você foi evoluindo constantemente e atingiu um nível acima da média e seu mestre o chamou para um campeonato na capital do Irã, Teraão. ")
    alert("Chegando próximo aos dias do campeonato você se vê extremamente pronto para esse desafio. Você percebe que tudo isso aconteceu muito rápido graças a sua dedicação e escolhas ;). \nDevido sua dedicação e foco nos treinos, você receberá 100 de experiência.")
    let variavel = Number(prompt("Chegando no Teraão você sente que é o seu momento e terá sua primeira luta. Chegando lá você encontra seu primeiro oponente Mohammed Jalili um ótimo lutador mais alto que você! E QUE COMEÇE A LUTA! Grita o juíz. Então oque você faz? \n1:Utilizo minha agilidade ao meu favor, então procuro aplicar golpes mais rápidos e precisos. \n2:Você tenta deixar a luta mais calma e procurar a brecha do oponente. \n3: Você tenta fazer um golpe que você nunca treinou e viu na internet."))
    
    if (variavel === 1){
        experiencia = experiencia + 250
        alert("WOW esta luta foi muito rápida! A sua sequencia de golpes foi avassaladora. Seu oponente não entendeu nada e você está a um passo de ganhar o campeonato!\nVocê ganhou mais 250 de experiencia!")
    } else if (variavel === 2){
        experiencia = experiencia + 150 
        alert("Você tenta estudar o adversário e tenta achar seus pontos fracos. Ele tem o domíneo da luta no inicio, porém em um certo momento você acha a brecha e vai com tudo e vence a luta no final. \nParabéns você ganhou mais 150 de experiência.")
    } else if (variavel === 3){
        alert ("Você tenta e falha miseravelmente e você é eliminado do campeonato")
        experiencia = experiencia - 150
    }

}

function quartaFase1(){
    let frase = Number(prompt("Depois do campeonato você continua a treinar forte e depois de longos meses você quer ir em busca da faixa preta. Seu mestre diz que ainda não está na hora mas você diz que está pronto e decide fazer de tudo para conseguir. Seu mestre então faz uma proposta, você tem que fazer uma dessas alternativas: \n1: Você tem que ficar 2 semanas seguidas na academia dormindo lá e treinando como você nunca treinou. \n2:Você tem que dar treino por um mês para alunos da academia."))
    if (frase === 1){
        alert("Você escolhe treinar incansavelmente por duas semanas na academia. A única coisa que você faz é comer treinar e dormir. \nCom isso você ganha mais 400 de experiencia, um item obsessão e a grande e sonhada faixa preta!")
        experiencia = experiencia + 400
        inventario.push("Obsessão")
    } else if (frase === 2){
        alert("Você escolhe treinar os seus alunos. Você chega e faz suas aulas normalmente e recebe a faixa preta! \nParabéns você ganhou 200 de experiencia!")
        experiencia = experiencia + 200
    }
}

function quintaFase1(){
    alert("Você tem adorado os momentos que tem vivido. Tudo está dando certo e você e todos da sua família estão muito bem. Mas tem uma coisa que tem te incomodado.")
    let question = Number(prompt("Você acha que o regime autoritário exercido no irã tem dificultado questões relacionadas à sua participação em competições internacionais e a suas atividades esportivas. Isso tem tomado uma grande proporção em sua mente. Então você tem que decidir: \n1:Tentar a vida em outro país \n2:Seguir no irã e tentar manter sua vida no seu país."))
    if (question === 1){
        alert("Você mesmo triste opta por ir para europa e seguir focado no seu sonho! \nVocê ganhou mais 150 de experiência")
        experiencia = experiencia + 150
        inventario.push("Perseverança")
        nacionalidade = "Refugiado"
    } else if (question === 2){
        alert("Entendendo que você deve continuar seu sonho mas também deve ficar ao lado de sua familia você opta por ficar no irã. \nVocê ganhou mais 150 de experiencia.")
        experiencia = experiencia + 200
        inventario.push("Humildade")
        nacionalidade = "Iraniano"
    }

}
//Funções possiveis olimpiadas(sendo um iraniano ou refugiado):

function olimpiadaRefugiado1(){
    alert("ISSO AÍ VOCÊ CONSEGUIU CHEGOU NAS OLIMPIADAS! Vcoê está muito animado e quer muito ganhar. Representando o time de refugiados das olimpiadas você sente que está preparado e pronto para vencer. ")
    let situation = Number(prompt("Você precisa ganhar 3 lutas para conquistar o ouro olímpico então você vai para primeira luta. Seu adversário é Saleh Al-Sharabaty cidadão da Jordânia. Ele se mostra ja mais experiente com você pois já ganhou uma medalha nas olimipiadas. Então a luta começa e você decide oque fazer. \n1: Você tenta um chute gancho para finalizar a luta. \n2: Você tenta um chute lateral no lado direito dele. \n3:Você procura despistar a atenção dele com golpes fracos e pega-lo desprevinido em um momento desprevinido."))
    if (situation === 1){
        alert("Você deu um belo chute e nocauteou ele! Você está a duas lutas de se tornar um medalista olímpico!")
    }else if (situation === 2){
        alert("O chute da certo e você ganha pontos mas não é o suficiente para finalizar. A luta segue acirrada e você mantém o controle. O tempo acaba e os juizes dão a vitória para VOCÊ! Faltam duas vitórias para ganhar o ouro olímpico!")
    }else if (situation === 3){
        alert("Sua estrategia inicial não é boa então você toma vários golpes que te deixam na desvantagem. Mas como você sempre deu seu maximo você vai pra cima e vira a luta e ganha a partida! Você está a 2 vitórias de um ouro olímpico!")
    }
}
  
function olimpiadaIraniano1(){
    alert("ISSO AÍ VOCÊ CONSEGUIU CHEGOU NAS OLIMPIADAS! Vcoê está muito animado e quer muito ganhar. Representando o irã nas olimpiadas você sente que está preparado e pronto para vencer. ")
    let situation = Number(prompt("Você precisa ganhar 3 lutas para conquistar o ouro olímpico então você vai para primeira luta. Seu adversário é Saleh Al-Sharabaty cidadão da Jordânia. Ele se mostra ja mais experiente com você pois já ganhou uma medalha nas olimipiadas. Então a luta começa e você decide oque fazer. \n1: Você tenta um chute gancho para finalizar a luta. \n2: Você tenta um chute lateral no lado direito dele. \n3:Você procura despistar a atenção dele com golpes fracos e pega-lo desprevinido em um momento desprevinido."))
    if (situation === 1){
        alert("Você deu um belo chute e nocauteou ele! Você está a duas lutas de se tornar um medalista olímpico!")
    }else if (situation === 2){
        alert("O chute da certo e você ganha pontos mas não é o suficiente para finalizar. A luta segue acirrada e você mantém o controle. O tempo acaba e os juizes dão a vitória para VOCÊ! Faltam duas vitórias para ganhar o ouro olímpico!")
    }else if (situation === 3){
        alert("Sua estrategia inicial não é boa então você toma vários golpes que te deixam na desvantagem. Mas como você sempre deu seu maximo você vai pra cima e vira a luta e ganha a partida! Você está a 2 vitórias de um ouro olímpico!")
    }
}
function olimpiadaRefugiado2(){
    alert("Na semifinal olímpica de Taekwondo, o estádio vibra enquanto você enfrenta Jae-Ho Jeon, um lutador sul-coreano conhecido por seu estilo imprevisível. A luta começa com Jeon atacando rapidamente com chutes e socos, mas você se esquiva e responde com um chute baixo que o faz recuar. Jeon intensifica sua ofensiva, mas você mantém a calma e aproveita uma abertura para um contra-ataque preciso. Após uma sequência de chutes rápidos, você garante uma vantagem decisiva. Com o sinal final, o árbitro declara sua vitória. Você avança para a final e está um passo mais perto da medalha de ouro!")
}
function olimpiadaIraniano2(){
    alert("Na semifinal olímpica de Taekwondo, o estádio vibra enquanto você enfrenta Jae-Ho Jeon, um lutador sul-coreano conhecido por seu estilo imprevisível. A luta começa com Jeon atacando rapidamente com chutes e socos, mas você se esquiva e responde com um chute baixo que o faz recuar. Jeon intensifica sua ofensiva, mas você mantém a calma e aproveita uma abertura para um contra-ataque preciso. Após uma sequência de chutes rápidos, você garante uma vantagem decisiva. Com o sinal final, o árbitro declara sua vitória. Você avança para a final e está um passo mais perto da medalha de ouro!")
}
function olimpiadaRefugiado3(){
    let anuncio = Number(prompt("Você está na grande final do torneio olímpico de Taekwondo e sua luta está prestes a começar. O estádio está lotado e a tensão é palpável. Seu adversário é Steven Lopez, um lutador renomado por sua técnica precisa e velocidade impressionante. Agora, para conquistar a vitória, você deve decidir qual abordagem adotar para superar este desafiante campeão. Como você pretende enfrentar essa batalha decisiva? \n1: Ataque Explosivo: Lance um chute giratório potente e rápido para tentar pegar Steven de surpresa e desequilibrá-lo.\n2: Defesa Inteligente: Utilize esquivas e bloqueios para desgastar Steven, esperando o momento ideal para um contra-ataque estratégico.\n3: Estratégia de Precisão: Realize uma série de chutes baixos e rápidos para desestabilizar Steven e obter um ponto crucial."))
    if (anuncio === 1){
        alert("Seu chute giratório atinge Steven Lopez com força, e ele fica momentaneamente desorientado. Aproveitando a vantagem, você continua com uma série de golpes rápidos, impondo pressão constante. Steven não consegue se recuperar a tempo e você vence a luta por pontos. Parabéns, você conquistou a medalha de ouro!")
    }else if (anuncio === 2){
        alert("Seus bloqueios e esquivas fazem Steven cometer erros. Com o adversário cansado e desajustado, você realiza um contra-ataque preciso e decisivo. Steven não consegue reagir a tempo e você vence a luta por pontos. Parabéns, você conquistou a medalha de ouro!")
    }else if (anuncio === 3){
        alert("Seus chutes baixos e rápidos desestabilizam Steven Lopez. Aproveitando a brecha, você aplica um ataque final preciso e eficaz. Steven não consegue se recuperar e você vence a luta por pontos. Parabéns, você conquistou a medalha de ouro!")
    }

}
function olimpiadaIraniano3(){
    let anuncio = Number(prompt("Você está na grande final do torneio olímpico de Taekwondo e sua luta está prestes a começar. O estádio está lotado e a tensão é palpável. Seu adversário é Steven Lopez, um lutador renomado por sua técnica precisa e velocidade impressionante. Agora, para conquistar a vitória, você deve decidir qual abordagem adotar para superar este desafiante campeão. Como você pretende enfrentar essa batalha decisiva? \n1: Ataque Explosivo: Lance um chute giratório potente e rápido para tentar pegar Steven de surpresa e desequilibrá-lo.\n2: Defesa Inteligente: Utilize esquivas e bloqueios para desgastar Steven, esperando o momento ideal para um contra-ataque estratégico.\n3: Estratégia de Precisão: Realize uma série de chutes baixos e rápidos para desestabilizar Steven e obter um ponto crucial."))
    if (anuncio === 1){
        alert("Seu chute giratório atinge Steven Lopez com força, e ele fica momentaneamente desorientado. Aproveitando a vantagem, você continua com uma série de golpes rápidos, impondo pressão constante. Steven não consegue se recuperar a tempo e você vence a luta por pontos. Parabéns, você conquistou a medalha de ouro!")
    }else if (anuncio === 2){
        alert("Seus bloqueios e esquivas fazem Steven cometer erros. Com o adversário cansado e desajustado, você realiza um contra-ataque preciso e decisivo. Steven não consegue reagir a tempo e você vence a luta por pontos. Parabéns, você conquistou a medalha de ouro!")
    }else if (anuncio === 3){
        alert("Seus chutes baixos e rápidos desestabilizam Steven Lopez. Aproveitando a brecha, você aplica um ataque final preciso e eficaz. Steven não consegue se recuperar e você vence a luta por pontos. Parabéns, você conquistou a medalha de ouro!")
    }
}
//Checkpoints com as fases:
while (experiencia<=1000){
    inicioDoJogo()
 
    primeiraFaseTreino1()
 
    primeiraFaseTreino2()

    segundaFase1()

    segundaFase2()

    terceiraFase1()

    quartaFase1()

    quintaFase1()

    if (experiencia>500){
        alert("Parabéns você chegou a seu tão sonhado sonho que é as olimpiadas! agora você deve se concentrar ao máximo para conquistalá!")

        if (nacionalidade === "Refugiado"){
            olimpiadaRefugiado1()

            olimpiadaRefugiado2()
            
            olimpiadaRefugiado3()
            
        } else if (nacionalidade === "Iraniano"){
            olimpiadaIraniano1()

            olimpiadaIraniano2()

            olimpiadaIraniano3()
        } 
    } else if (experiencia<500){
        alert("Você não atingiu o número necessário de experiencia para avançar para as olimpiadas. ")
    }
}