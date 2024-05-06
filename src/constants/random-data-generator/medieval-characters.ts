export type RandomCharacter = {
  raça: string;
  classe: string;
  nome: string;
  origem: string;
};

const racas = [
  "humano",
  "elfo",
  "draconato",
  "anão",
  "orc",
  "tiferino",
  "aasimar",
  "gnomo",
];
const classes = [
  "guerreiro",
  "bárbaro",
  "ladino",
  "mago",
  "feiticeiro",
  "bruxo",
  "monge",
  "patrulheiro",
  "paladino",
  "bruxo",
  "clérigo",
];
const nomesMasculinos = [
  "Aldric",
  "Bran",
  "Caelan",
  "Doran",
  "Eldrin",
  "Fendrel",
  "Gavin",
  "Hawke",
  "Ildan",
  "Jarin",
];
const nomesFemininos = [
  "Aria",
  "Brienna",
  "Cara",
  "Dawn",
  "Elara",
  "Fiona",
  "Gwen",
  "Hazel",
  "Ivy",
  "Jade",
];
const origens = [
  "Nascido em uma pequena vila, sua infância foi simples e tranquila.",
  "Cresceu em uma cidade grande, aprendendo desde cedo a lidar com a diversidade e os desafios urbanos.",
  "Filho de camponeses, trabalhou na lavoura desde jovem, desenvolvendo força e resistência.",
  "Criado por uma família de artesãos, seu talento manual é incomparável.",
  "Órfão desde muito jovem, teve que aprender a se virar nas ruas perigosas da cidade.",
  "Descendente de uma antiga linhagem de nobres, cresceu em um ambiente de privilégio e responsabilidade.",
  "Criado por uma comunidade religiosa, sua vida é marcada pela fé e pelos ensinamentos sagrados.",
  "Nascido em uma família de viajantes, conheceu diferentes culturas e aprendeu a se adaptar a qualquer lugar.",
  "Resgatado por uma guilda de aventureiros, encontrou uma nova família e um novo propósito na vida.",
  "Exilado de sua terra natal por razões desconhecidas, busca redenção ou vingança.",
  "Descobriu um talento mágico inato e foi enviado para estudar em uma escola de magia.",
  "Sobrevivente de uma catástrofe natural, sua determinação é tão forte quanto sua história de superação.",
  "Atraído por lendas antigas, partiu em uma jornada em busca de artefatos perdidos e segredos esquecidos.",
  "Treinado em um monastério, encontrou equilíbrio e disciplina em sua vida.",
  "Cresceu entre os animais da floresta, desenvolvendo uma ligação especial com a natureza.",
  "Membro de uma família de comerciantes, aprendeu a arte da negociação e do comércio desde cedo.",
  "Enviado em uma missão diplomática, sua experiência o tornou um especialista em lidar com diferentes culturas e políticas.",
  "Descendente de uma linhagem de guerreiros lendários, carrega o peso de um legado de honra e glória.",
  "Nascido durante um evento cósmico raro, seu nascimento foi visto como um sinal dos céus.",
  "Criado por uma família de ferreiros, conhece o valor do trabalho árduo e a importância das armas e armaduras.",
  "Órfão de guerra, seu desejo de paz o impulsiona a lutar por um mundo melhor.",
  "Descobriu um talento incomum para a música, tornando-se um virtuoso em seu instrumento.",
  "Aprendiz de um mestre alquimista, conhece os segredos das poções e dos ingredientes mágicos.",
  "Sobrevivente de uma conspiração política, sua vida é marcada pela desconfiança e pela astúcia.",
  "Cresceu em uma família de curandeiros, aprendendo a arte da medicina e da cura.",
  "Descendente de uma linhagem de assassinos, sua vida é uma mistura de sombra e mistério.",
  "Criado por uma família de criadores de cavalos, sua habilidade na montaria é incomparável.",
  "Nascido durante uma tempestade que durou dias, seu nascimento foi cercado por mistério e superstição.",
  "Resgatado por uma criatura mágica na infância, desenvolveu uma ligação especial com seres místicos.",
  "Descobriu um artefato antigo que concedeu a ele poderes além da compreensão.",
  "Sobrevivente de um ataque de criaturas das trevas, sua vida é uma busca por vingança e redenção.",
  "Cresceu em uma cidade assolada pela corrupção, jurando limpar o mal que a aflige.",
  "Descendente de uma linhagem de governantes, sua vida é marcada pelo peso da liderança e da responsabilidade.",
  "Criado por uma família de artistas marciais, sua habilidade nas artes da guerra é lendária.",
  "Nascido em uma família de ladrões, sua destreza e habilidade em se esconder são incomparáveis.",
  "Resgatado de um destino sombrio por uma figura misteriosa, sua vida é um mistério até para ele mesmo.",
  "Descendente de uma linhagem de dragões, seu sangue carrega o poder e a majestade dessas criaturas antigas.",
  "Criado por uma tribo de bárbaros, sua força física e sua coragem são lendárias.",
  "Nascido em uma família de caçadores, sua habilidade rastrear e caçar é incomparável.",
];

export function gerarPersonagem(): RandomCharacter {
  const genero = Math.random() < 0.5 ? "masculino" : "feminino";
  const nome =
    genero === "masculino"
      ? nomesMasculinos[Math.floor(Math.random() * nomesMasculinos.length)]
      : nomesFemininos[Math.floor(Math.random() * nomesFemininos.length)];

  return {
    raça: racas[Math.floor(Math.random() * racas.length)],
    classe: classes[Math.floor(Math.random() * classes.length)],
    nome: nome,
    origem: origens[Math.floor(Math.random() * origens.length)],
  };
}
