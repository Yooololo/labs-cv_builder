import { Formik, Form, FormikHelpers, FormikProps } from 'formik'
import { useNavigate } from 'react-router-dom'
import userFormConfig from './userFormConfig'
import { UserFormValues } from '../../assets/typeUtils'
import FieldSwitcher from '../CustomInputs.tsx/Fieldswitcher'
import userFormValidationSchema from './userFormValidationSchema'
import { useEffect, useState } from 'react'
import generateUserFormInitialValues from './userFormInitialValues'
import { mockInitialValues } from '../../assets/Mocks/userFormMock'

const UserForm = () => {
  const navigate = useNavigate()
  const [showProfilePicture, setShowProfilePicture] = useState(true)
  const [userFormInitialValues, setUserFormInitialValues] = useState<
    UserFormValues | undefined
  >(undefined)

  const toggleProfilePicture = () => {
    setShowProfilePicture(!showProfilePicture)
  }

  const handleSubmit = (
    values: UserFormValues,
    { resetForm }: FormikHelpers<UserFormValues>
  ) => {
    navigate('/curriculum', { state: { cvData: values } })
    resetForm()
  }

  useEffect(() => {
    const initializeForm = async () => {
      const initialValues = mockInitialValues
      // const initialValues = generateUserFormInitialValues() as UserFormValues;
      setUserFormInitialValues(initialValues)
    }

    initializeForm()
  }, [])

  if (userFormInitialValues === undefined) {
    return <div>Loading...</div>
  }

  return (
    <div>
      <h1>Curriculum Vitae Builder</h1>
      <Formik
        initialValues={userFormInitialValues}
        onSubmit={handleSubmit}
        validationSchema={userFormValidationSchema}
      >
        {(formikProps: FormikProps<UserFormValues>) => (
          <Form>
            {userFormConfig.map((field) => (
              <FieldSwitcher
                key={field.fieldName}
                field={field}
                values={formikProps.values}
                form={formikProps}
                showProfilePicture={showProfilePicture}
                toggleProfilePicture={toggleProfilePicture}
              />
            ))}
            <button type="submit">Generate CV</button>
          </Form>
        )}
      </Formik>
    </div>
  )
}

export default UserForm
