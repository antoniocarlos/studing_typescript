import { Request, Response } from 'express';
import createUser from './services/CreateUsers';


//Quando o editor não encontrar o tipo da variavel ela deve ser tipada
export function helloWorld(request: Request, response: Response){
  const user = createUser({
    name:"Eu", 
    email: "eu@ue.com", 
    passworld: "12345",
    techs: [
      'Node.js',
      'ReactJs',
      { title: 'javaScript', experience: 100 },
    ]
  });
  return response.json({message: 'hello word!'});
}