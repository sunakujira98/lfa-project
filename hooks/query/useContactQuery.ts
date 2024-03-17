import { IBasicContactEnquiry } from '@/domain/types/contactEnquiry.types'
import { ContactApi } from '@/services/contact.api'
import { useMutation } from '@tanstack/react-query'

export const useSendMailMutation = () => {
  const mutation = useMutation({
    mutationFn: async (requestBody: IBasicContactEnquiry) => {
      await ContactApi.sendMail(requestBody)
    },
  })

  return mutation
}
