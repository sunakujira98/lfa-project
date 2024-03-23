import * as yup from 'yup'

export const getContactSchema = () => {
  return yup.object().shape({
    message: yup.string().required('Please fill your message'),
    enquiryType: yup.string().required('Please select your enquiry type'),
    email: yup
      .string()
      .required('Please fill your email')
      .matches(/^[^\s@]+@[^\s@]+\.[^\s@]+$/, 'Email must be correct'),
    name: yup.string().required('Please fill your name'),
    contact: yup.string().required('Please fill your contact number'),
    companyName: yup.string().optional(),
    privacyPolicy: yup
      .string()
      .required(
        'Please check the boxes indicating your agreement to the Privacy Policy and Terms & Conditions.',
      ),
  })
}
