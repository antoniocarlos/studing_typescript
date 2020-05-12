/**
 * Cada serviço deve executar apenas uma função
 * O export default representa que apenas uma função será exportada.
 */

/**
 * Tipando uma variavel 
 * Definindo um valor padrãi 
 * name = '' dessa forma o nome é opcional pois já é passado um valor vazio
 * ou dando um tipo patrão
 * email: string
 */

/**
 * Interface
 * Define os tipos de um conjunto de informações como um objeto
 */

interface TechObject {
  title: string;
  experience: number;
}

interface CreateUserData {
  name?: string; // Com ? define que o valor é opcional, é mantido o valor padrão na declaração
  email: string;
  passworld: string | number; // a barra | "ou" serve para adicionar um tipo aceito
  techs: Array<string | TechObject>; // Strings ou um obj com o formato TechObject
  //Se for uma tipagem simple techs: string[]
};

export default function createUser({ name = '', email, passworld, techs }: CreateUserData
/** é passado o tipo do objeto como um todo */) {
  const user = {
    name,
    email,
    passworld,
    techs,
  };


  return user;
}