const pop = new Pop({
  titulo: () => `
  Olá, sou Daniel g. rocha!
  <h1>desenvolvedor Futstack</h1>

`,
  avatar: () => `<img width="90%" height="380px" src="/8f54d63a-5f1a-4957-a775-26e5c754d578.jpeg">`,
  sou: () => `
<p>Sou programador e amante por café</p>


`,
  tituloProjetos: () => `<h2>projetos</h2>`,
  card: () => `pop.js`,
  card2: () => 'nove',
  adoro: () => `Adoro programa enquanto bebo um bom café ☕</br>


`,
  habilidades: () => `<h2>Habilidades</h2>
<ul>
    <li>
        <img src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/javascript/javascript-original.svg" width="40"/>
        JavaScript
    </li>
    <li>
        <img src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/html5/html5-original.svg" width="40"/>
        HTML
    </li>
    <li>
        <img src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/css3/css3-original.svg" width="40"/>
        CSS
    </li>
</ul>

<h3>Conhecimentos Básicos 👨‍💻</h3>
<ul>
    <li>
        <img src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/nodejs/nodejs-original.svg" width="40"/>
        Node.js
    </li>
    <li>
        <img src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/bash/bash-original.svg" width="40"/>
        Terminal (Bash)
    </li>
        <li>
        <img src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/react/react-original.svg" width="40"/>
        React
    </li>
    
    <li>
    <img src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/git/git-original.svg" width="40"/>
    Git
    </li>
</ul>

<h3>Pretendo Estudar</h3>
<ul>
    <li>
        <img src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/java/java-original.svg" width="40"/>
        Java
    </li>
    <li>
        <img src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/cplusplus/cplusplus-original.svg" width="40"/>

        C++
    </li>

</ul>
`,
  
})
pop.init(['titulo', 'avatar', 'sou', 'tituloProjetos',])
setTimeout(() =>{pop.init(['card','card2'])
  pop.classe('card', ['card', 'card2']);

},2000)

setTimeout(() =>pop.init(['habilidades','adoro']),4000)

//pop.style('titulo').transform = 'translate(0px,100px)'


pop.animar("titulo", {
  type: "bounce",
  duration: 1000,
  direction: 5 // O valor 1 representa a intensidade do movimento de quicar
})


/*
pop.mover('titulo',{
mover:{  y:0,ay:1, maxY:200, delay:60}
  
})*/
