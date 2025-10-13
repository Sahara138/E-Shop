import { useTranslation } from 'react-i18next'
import { useFormik } from 'formik';
import { contactSchema, initialValues } from './schema';

const ContactForm = () => {
  const {t} = useTranslation();
  const {handleSubmit,handleChange,values,errors,touched} = useFormik({
    initialValues:initialValues,
    validationSchema: contactSchema,
    onSubmit: async (values) =>{
      console.log(values)
    }
  })
  return (
    <>
        <div>
            <h2 className='font-poppins font-semibold text-black01 text-4xl'>Contact Us</h2>
            <p className='font-montserrat text-[20px] text-black01 font-normal mt-3 mb-[48px]'>Have any questions for us? Don’t hesitate to contact us.</p>
            <form onSubmit={handleSubmit}>
                <div className='mb-8'>
                  <label className='font-bold font-montserrat block text-xl text-blacl01 mb-2'>Name <span className='text-red'>*</span></label>
                  <input 
                    type="text"
                    placeholder='Amelia Robert Watson'
                    name='name'
                    onChange={handleChange}
                    value={values.name}
                    className='w-full rounded-[10px] p-5 border border-black100 outline-none placeholder:text-[20px]' />
                    {
                      touched.name &&
                      <p className='font-montserrat text-sm mt-1 text-red'>{errors.name}</p>
                    }
                </div>
                <div className='grid grid-cols-[1fr_1fr] items-center gap-x-4 mb-8'>
                  <div>
                    <label className='font-bold font-montserrat block text-xl text-blacl01 mb-2'>Phone Number</label>
                    <input 
                      type="text"
                      placeholder='+123 456 7890'
                      name='phone'
                      onChange={handleChange}
                      value={values.phone}
                      className='w-full rounded-[10px] p-5 border border-black100 outline-none placeholder:text-[20px]' />
                      {
                        touched.phone &&
                        <p className='font-montserrat text-sm mt-1 text-red'>{errors.phone}</p>
                      }
                  </div>
                  <div>
                    <label className='font-bold font-montserrat block text-xl text-blacl01 mb-2'>Email Address <span className='text-red'>*</span></label>
                    <input 
                      type="email"
                      placeholder='amelia.watson@eshop.com'
                      name='email'
                      onChange={handleChange}
                      value={values.email}
                      className='w-full rounded-[10px] p-5 border border-black100 outline-none placeholder:text-[20px]' />
                      {
                        touched.email &&
                        <p className='font-montserrat text-sm mt-1 text-red'>{errors.email}</p>
                      }
                  </div>
                </div>
                <div className=''>
                  <label className='font-bold font-montserrat block text-xl text-blacl01 mb-2'>Message <span className='text-red'>*</span></label>
                    <textarea 
                      name="message" 
                      id="" 
                      onChange={handleChange}
                      value={values.message}
                      placeholder='Enter your message ...'
                      className='w-full rounded-[10px] p-5 border border-black100 outline-none resize-none h-[241px] placeholder:text-[20px]'
                      ></textarea>
                      {
                        touched.message &&
                        <p className='font-montserrat text-sm mt-1 text-red'>{errors.message}</p>
                      }
                </div>
                <button type='submit' className="!bg-orange !px-10 !py-4 rounded-[10px] !text-white !font-montserrat !font-bold !text-base lg:!text-lg !leading-[30px] !mt-[32px] !mb-20 !border-none">{t("Submit")}</button>

            </form>
        </div>
    </>
  )
}

export default ContactForm