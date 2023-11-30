import * as Yup from 'yup'

const getUserFormValidationSchema = (showProfilePicture: boolean = false) => {
  let baseSchema = Yup.object().shape({
    fullName: Yup.string().required('Full Name is required'),
    email: Yup.string().email('Invalid email').required('Email is required'),
  })

  if (showProfilePicture) {
    baseSchema = baseSchema.shape({
      profilePicture: Yup.object().shape({
        file: Yup.mixed().required('Profile picture is required'),
      }),
    })
  }

  return baseSchema
}

export default getUserFormValidationSchema
