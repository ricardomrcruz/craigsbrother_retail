
import './globals.css'
import { ToastContainer } from 'react-toastify'
import 'react-toastify/dist/ReactToastify.css'


export const metadata = {
  title: 'Le.Moche.',
  description: 'Privatized Ads',
}

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body className='bg-[#F5F5F5]' >
        <ToastContainer />
        {children}
      </body>
    </html>
  )
}
