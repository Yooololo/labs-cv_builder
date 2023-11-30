import {
  InputWithDates,
  InputWithLevel,
  UserFormValuesWithSubfields,
} from './../../assets/typeUtils'
import userFormConfig from './userFormConfig'
import {
  FieldName,
  FieldType,
  UserFormValues,
  UserFormValuesWithoutSubfields,
} from '../../assets/typeUtils'
import { generateDefaultInitialEntry } from '../../assets/logicUtils'

const generateUserFormInitialValues = (): UserFormValues => {
  return userFormConfig.reduce((acc, field) => {
    if (
      field.type === FieldType.File &&
      field.fieldName === FieldName.ProfilePicture
    ) {
      acc[field.fieldName] = {
        inputType: 'local',
        file: null,
        imageUrl: '',
      }
    } else if (field.type === FieldType.Array) {
      if (field.fieldName in acc) {
        acc[field.fieldName as keyof UserFormValuesWithSubfields] =
          generateDefaultInitialEntry(field.subFields) as InputWithLevel[] &
            InputWithDates[]
      } else {
        acc[field.fieldName as keyof UserFormValuesWithoutSubfields] = ''
      }
    } else {
      acc[field.fieldName as keyof UserFormValuesWithoutSubfields] = ''
    }
    return acc
  }, {} as UserFormValues)
}
export default generateUserFormInitialValues
