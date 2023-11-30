import { Field, ErrorMessage } from 'formik'
import {
  FieldType,
  FormFieldProps,
  UserFormValuesWithSubfields,
  UserFormValuesWithoutSubfields,
} from '../../assets/typeUtils'
import { isSubFieldName } from '../../assets/logicUtils'

const FormField = ({ field, index, subField, values }: FormFieldProps) => {
  const htmlForLabelForField = subField
    ? `${field.fieldName}.${index}.${subField}`
    : field.fieldName

  const labelForField = subField
    ? subField.name.charAt(0).toUpperCase() + subField.name.slice(1)
    : field.fieldName.charAt(0).toUpperCase() + field.fieldName.slice(1)

  const fieldWithoutSubfields = {
    key: `field__${field.fieldName}`,
    type: field?.type,
    id: `${field.fieldName}`,
    name: `${field.fieldName}`,
    as: field.type === FieldType.Textarea ? 'textarea' : undefined,
    value: values?.[field.fieldName as keyof UserFormValuesWithoutSubfields],
  }

  const fieldWithSubfieldsValue =
    subField?.name &&
    isSubFieldName(subField.name) &&
    values?.[field.fieldName as keyof UserFormValuesWithSubfields]?.[index] &&
    subField.name in
      values[field.fieldName as keyof UserFormValuesWithSubfields][index] &&
    values[field.fieldName as keyof UserFormValuesWithSubfields][index][
      subField.name
    ]

  const fieldWithSubfieldsProps = {
    key: `field__${field.fieldName}__${index}__${subField?.name}`,
    type: subField?.type,
    id: `${field.fieldName}.${index}.${subField?.name}`,
    name: `${field.fieldName}.${index}.${subField?.name}`,
    as: subField?.type === FieldType.Textarea ? 'textarea' : undefined,
    value: fieldWithSubfieldsValue || '',
  }

  const propsForField = subField
    ? fieldWithSubfieldsProps
    : fieldWithoutSubfields

  return (
    <div
      key={`${field.fieldName}__${index}${
        subField ? `__${subField.name}` : ''
      }`}
    >
      <label htmlFor={htmlForLabelForField}>{labelForField}:</label>
      <Field {...propsForField} />
      <ErrorMessage
        name={
          subField
            ? `${field.fieldName}.${index}.${subField?.name}`
            : field.fieldName
        }
        component="div"
        className="error"
      />
    </div>
  )
}

export default FormField
