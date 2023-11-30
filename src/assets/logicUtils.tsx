import {
  FieldType,
  InputWithDates,
  InputWithLevel,
  SubField,
  SubFieldName,
} from './typeUtils'

export const generateDefaultInitialEntry = (
  subFields?: SubField[]
): InputWithLevel | InputWithDates | string => {
  if (subFields) {
    const defaultEntry: { [key: string]: string | Date | null } = {}
    subFields.forEach((subField) => {
      if (subField.type === FieldType.Date) {
        defaultEntry[subField.name] = null
      } else {
        defaultEntry[subField.name] = ''
      }
    })

    return defaultEntry as InputWithLevel | InputWithDates
  }
  return ''
}

export const isSubFieldName = (name: string): name is SubFieldName => {
  return Object.values(SubFieldName).includes(name as SubFieldName)
}
