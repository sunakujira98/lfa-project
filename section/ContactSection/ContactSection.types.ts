import * as yup from 'yup'

export const getContactSchema = () => {
  return yup.object().shape({
    message: yup.string().required('Please fill your message'),
    email: yup
      .string()
      .required('Please fill your email')
      .matches(/^[^\s@]+@[^\s@]+\.[^\s@]+$/, 'Email must be correct'),
    name: yup.string().required('Please fill your name'),
    contact: yup.string().required('Please fill your contact'),
    companyName: yup.string().optional(),
    privacyPolicy: yup.string().required('You have to agree on privacy policy'),
  })
}
