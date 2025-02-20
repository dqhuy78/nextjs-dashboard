import { fetchCustomers } from '@/app/lib/data';
import Form from '@/app/ui/invoices/create-form'

// https://medium.com/@rezahedi/next-js-issue-of-redirect-in-server-actions-with-unmounting-intercepting-route-or-modal-from-the-ui-62b7a9702b7f

export default async function Page() {
  const customers = await fetchCustomers();

  return (
    <div className='fixed z-[99] w-full h-full bg-black bg-opacity-50 flex items-center justify-center top-0 left-0'>
      <div className='w-[600px] bg-white rounded-lg p-8'>
        <Form customers={customers} />
      </div>
    </div>
  )
}
