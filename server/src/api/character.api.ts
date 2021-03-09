import { Router } from 'express';
import {
  CharacterEdit,
  getCharacterList,
  getCharacter,
  updateCharacter,
  insertCharacter,
  deleteCharacter,
} from '../db';

export const characterApi = Router();
console.log("hoooola");
characterApi
  .get('/', async (req, res) => {
    const characters = await getCharacterList();
    res.send(characters);
  })
  .delete('/:id', async (req, res) => {
    const id : any = req.params.id;
    const success = await deleteCharacter(id);

    res.send(success);

  })
  .get('/:id', async (req, res) => {
    const id : any  = req.params.id;
    const character = await getCharacter(id);
    res.send(character);
  })
  .post('/', async (req, res) => {
    const characterEdit: CharacterEdit = req.body;
    const id = await insertCharacter(characterEdit);
    res.send(id);
  })
  .patch('/:id', async (req, res) => {
    const characterEdit: CharacterEdit = req.body;
    await updateCharacter(characterEdit);
    res.sendStatus(200);
  });

  /*

export const characterApi = Router();

characterApi
  .get('/', async (req, res) => {
    const characters = await getCharacterList();
    res.send(characters);
  })
  .delete('/:id', async (req, res) => {
    const id : any = req.params.id;
    const success = await deleteCharacter(id);
    res.send(success);
  })
  .get('/:id', async (req, res) => {
    const id : any  = req.params.id;
    const character = await getCharacter(id);
    res.send(character);
  })
  .post('/', async (req, res) => {
    const characterEdit: CharacterEdit = req.body;
    const id = await insertCharacter(characterEdit);
    res.send(id);
  })
  .patch('/:id', async (req, res) => {
    const characterEdit: CharacterEdit = req.body;
    await updateCharacter(characterEdit);
    res.sendStatus(200);
  });
*/