import * as React from 'react';
import Button from '@material-ui/core/Button';
import { CharacterEntityVm } from './character-collection.vm';
import { CharacterCard } from './components/character-card.component';
import { CharacterList } from './components/character-list.component';
import * as classes from './character-collection.styles';

interface Props {
  characterCollection: CharacterEntityVm[];
  oncreateCharacter: () => void;
  onEdit: (id: number) => void;
  onDelete: (id: number) => void;
}

export const CharacterCollectionComponent: React.FunctionComponent<Props> = (
  props
) => {
  const { characterCollection, oncreateCharacter, onEdit, onDelete } = props;

  return (
    <div className={classes.root}>
      <Button variant="contained" color="primary" onClick={oncreateCharacter}>
        Add character
      </Button>

      <ul className={classes.list}>
        {characterCollection.map((character) => (
          <li key={character.id}>
            {/*<CharacterCard character={character} onEdit={onEdit} onDelete={onDelete} />*/}
            <CharacterList character={character} onEdit={onEdit}/>
          </li>
        ))}
      </ul>
    </div>
  );
};
