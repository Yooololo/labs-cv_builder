import { FieldName } from '../typeUtils'

export const mockInitialValues = {
  [FieldName.FullName]: 'Harry Potter',
  [FieldName.Email]: 'harry.potter@example.com',
  [FieldName.ProfilePicture]: {
    [FieldName.InputType]: 'url',
    [FieldName.File]: null,
    [FieldName.ImageURL]:
      'https://media.revistavanityfair.es/photos/60e84a97bb9e71d46fd8d1f4/1:1/w_916,h_916,c_limit/39713.jpg',
  },
  [FieldName.Languages]: [
    {
      [FieldName.Language]: 'Parseltongue',
      [FieldName.Level]: 'Advanced',
    },
    {
      [FieldName.Language]: 'English',
      [FieldName.Level]: 'Fluent',
    },
    {
      [FieldName.Language]: 'French',
      [FieldName.Level]: 'Intermediate',
    },
  ],
  [FieldName.SoftSkills]: [
    {
      [FieldName.Skill]: 'Friendship',
    },
    {
      [FieldName.Skill]: 'Communication',
    },
    {
      [FieldName.Skill]: 'Problem Solving',
    },
  ],
  [FieldName.TechnicalHardSkills]: [
    {
      [FieldName.Skill]: 'Defense Against the Dark Arts',
      [FieldName.Level]: 'Intermediate',
    },
    {
      [FieldName.Skill]: 'Potion-Making',
      [FieldName.Level]: 'Intermediate',
    },
    {
      [FieldName.Skill]: 'Transfiguration',
      [FieldName.Level]: 'Intermediate',
    },
  ],
  [FieldName.PertinentEducation]: [
    {
      [FieldName.Title]: 'Hogwarts School of Witchcraft and Wizardry',
      [FieldName.Organization]: 'Ministry of Magic',
      [FieldName.Description]: 'Studied magical arts and spells.',
      [FieldName.StartDate]: '1991-09-01',
      [FieldName.EndDate]: '1998-06-01',
    },
    {
      [FieldName.Title]: 'Advanced Magical Studies',
      [FieldName.Organization]: 'Wizarding University',
      [FieldName.Description]: 'Explored advanced magical theories.',
      [FieldName.StartDate]: '1998-09-01',
      [FieldName.EndDate]: '2002-06-01',
    },
    {
      [FieldName.Title]: 'Wandlore',
      [FieldName.Organization]: 'Ollivanders',
      [FieldName.Description]: 'Learned about the craftsmanship of wands.',
      [FieldName.StartDate]: '2002-09-01',
      [FieldName.EndDate]: '2004-06-01',
    },
  ],
  [FieldName.PertinentWorkExperience]: [
    {
      [FieldName.Title]: 'Auror',
      [FieldName.Organization]: 'Department of Magical Law Enforcement',
      [FieldName.Description]:
        'Fought against dark wizards and magical creatures.',
      [FieldName.StartDate]: '1998-07-01',
      [FieldName.EndDate]: '2008-06-01',
    },
    {
      [FieldName.Title]: 'Magical Law Consultant',
      [FieldName.Organization]: 'Wizengamot',
      [FieldName.Description]: 'Provided legal advice on magical matters.',
      [FieldName.StartDate]: '2008-07-01',
      [FieldName.EndDate]: '2018-06-01',
    },
    {
      [FieldName.Title]: 'Curse-Breaker',
      [FieldName.Organization]: 'Gringotts Wizarding Bank',
      [FieldName.Description]:
        'Specialized in breaking magical curses on treasures.',
      [FieldName.StartDate]: '2018-07-01',
      [FieldName.EndDate]: '2023-06-01',
    },
  ],
  [FieldName.ExtraEducation]: [
    {
      [FieldName.Title]: 'Advanced Potion-Making',
      [FieldName.Organization]: 'Hogwarts School of Witchcraft and Wizardry',
      [FieldName.Description]: 'Learned the art of potion-making.',
      [FieldName.StartDate]: '1991-09-01',
      [FieldName.EndDate]: '1998-06-01',
    },
    {
      [FieldName.Title]: 'Magical Creatures Studies',
      [FieldName.Organization]: 'Magizoology Institute',
      [FieldName.Description]:
        'Explored magical creatures and their behaviors.',
      [FieldName.StartDate]: '1998-09-01',
      [FieldName.EndDate]: '2002-06-01',
    },
  ],
  [FieldName.ExtraWorkExperience]: [
    {
      [FieldName.Title]: 'Quidditch Seeker',
      [FieldName.Organization]: 'Gryffindor Quidditch Team',
      [FieldName.Description]: 'Caught the Golden Snitch multiple times.',
      [FieldName.StartDate]: '1991-09-01',
      [FieldName.EndDate]: '1998-06-01',
    },
    {
      [FieldName.Title]: 'Invisibility Cloak Tester',
      [FieldName.Organization]: "Weasleys' Wizard Wheezes",
      [FieldName.Description]: 'Assisted in testing new magical products.',
      [FieldName.StartDate]: '2002-09-01',
      [FieldName.EndDate]: '2005-06-01',
    },
  ],
}
