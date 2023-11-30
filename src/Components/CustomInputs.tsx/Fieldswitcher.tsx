import { Field, FieldArray, ErrorMessage } from 'formik'
import ProfilePictureInput from '../CustomInputs.tsx/ProfilePictureInput'
import {
  FieldSwitcherProps,
  FieldType,
  InputProfilePicture,
  SubField,
  UserFormValues,
  UserFormValuesWithSubfields,
} from '../../assets/typeUtils'
import FormField from './FormField'

const FieldSwitcher: React.FC<FieldSwitcherProps> = <T extends UserFormValues>({
  field,
  values,
  form,
  toggleProfilePicture,
  showProfilePicture,
}: FieldSwitcherProps & { values: T }) => {
  switch (field.type) {
    case FieldType.File:
      return (
        <div>
          <h2>{field.fieldName}</h2>
          {showProfilePicture && (
            <>
              <Field
                name={field.fieldName}
                render={() => (
                  <>
                    <ProfilePictureInput
                      onChange={(value) => {
                        form.setFieldValue(field.fieldName, value)
                      }}
                      value={
                        values[
                          field.fieldName as keyof UserFormValues
                        ] as InputProfilePicture
                      }
                    />
                    <ErrorMessage
                      name={`${field.fieldName}.file`}
                      component="div"
                      className="error"
                    />
                  </>
                )}
                value={
                  values[
                    field.fieldName as keyof UserFormValues
                  ] as InputProfilePicture
                }
              />
            </>
          )}
          <button type="button" onClick={toggleProfilePicture}>
            Toggle Profile Picture
          </button>
        </div>
      )
    case FieldType.Array:
      return (
        <div>
          <h2>{field.fieldName}</h2>
          <FieldArray
            name={field.fieldName}
            key={field.fieldName}
            render={(arrayHelpers) => (
              <div>
                {Array.isArray(
                  values[field.fieldName as keyof UserFormValues]
                ) &&
                  (
                    values[
                      field.fieldName as keyof UserFormValues
                    ] as UserFormValuesWithSubfields[]
                  )?.map((_, index: number) => (
                    <div key={`${field.fieldName}__${index}`}>
                      {(field?.subFields as SubField[])?.map((subField) => (
                        <FormField
                          key={`${field.fieldName}__${index}__${subField.name}`}
                          field={field}
                          index={index}
                          subField={subField}
                          values={values as T}
                        />
                      ))}
                      <button
                        type="button"
                        onClick={() => arrayHelpers.remove(index)}
                      >
                        Remove
                      </button>
                    </div>
                  ))}
                <button
                  type="button"
                  onClick={() => arrayHelpers.push(field?.initialEntry || {})}
                >
                  Add {field.fieldName.slice(0, -1)}
                </button>
              </div>
            )}
          />
        </div>
      )
    default:
      return (
        <FormField
          field={field}
          index={0}
          subField={undefined}
          values={values as T}
        />
      )
  }
}

export default FieldSwitcher
