import {Resolver, ResolveField, Args, Query} from '@nestjs/graphql';
import {CharacterArchetype} from './character-archetype.model';

@Resolver(of => CharacterArchetype)
export class CharacterArchetypeResolver {
  constructor(private characterArchetypeService: CharacterArchetypeService) {}

  @Query(returns => CharacterArchetype)
  async author(@Args('id', {type: () => Int}) id: number) {
    return this.characterArchetypeService.findOneById(id);
  }

  // @ResolveField()
  // async posts(@Parent() archetype: Archetype) {
  //   const {id} = archetype;
  //   return this.archetypeService.findAll({authorId: id});
  // }
}
