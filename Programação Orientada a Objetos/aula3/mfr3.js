/*
Os dados do objeto abaixo foram obtidos por meio de uma requisição a uma API que nos fornece os dados dos posts de um blog, 
os quais estão armazenados em um banco de dados:

Observe que cada post contém um id, título (title), conteúdo (content) e autor (author).

Para renderizar essas informações no front-end da página inicial do blog, o programador (você!) 
deseja colocar o nome do autor em caixa alta (já que ele vai ficar bem pequeno abaixo do título) 
e utilizar apenas os 300 primeiros caracteres do conteúdo do post, afinal, a ideia é que o usuário 
tenha apenas uma noção do conteúdo daquele post (imagine que o conteúdo do post é enorme).

Utilize a função map para aplicar essa transformação no objeto acima.

*/

const posts = [
    {
      id: 0,
      title: 'Programação Funcional',
      content: "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum.",
      author: 'Gabriel Millitelo'
    },
    {
      id: 1,
      title: 'Funções de Alta Ordem',
      content: "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum.",
      author: 'Lucas Maia'
    },
    {
      id: 2,
      title: 'Funções de Alta Ordem de Arrays',
      content: "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum.",
      author: 'Felipe Cabral'
    },
    {
      id: 3,
      title: 'Função map()',
      content: "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum.",
      author: 'Walisson Silva'
    }
]

const postsChange = posts.map (x => ({
    ...x,
    content: x.content.substring(0, 299),
    author: x.author.toUpperCase()
}))

console.log(postsChange);
