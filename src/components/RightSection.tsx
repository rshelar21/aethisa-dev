import React , {useState} from 'react'



interface ILoginForm {
    name : string,
    password : string
}
const RightSection : React.FC = () => {
    const [loginForm, setLoginForm] = useState<ILoginForm>({
        name : '',
        password : ''
    })


    const handlerSubmit = (e : React.FormEvent<HTMLFormElement>) => {
        e.preventDefault();
    console.log(loginForm)
    }

    const handlerChange = (e : React.ChangeEvent<HTMLInputElement>) => {
        const {name, value} = e.target
        setLoginForm((prev) => {
            return {
                ...prev,
                [name] : value
            }
        })

    }
  return (
    <>
      <div className='w-full h-full mt-2 sm:mt-0'>
        <div className='sm:max-w-[360px] w-full mx-auto mt-10 sm:mt-20 '>
            <div className='flex flex-col items-center'>
                <div className='w-16 h-12'>
                    <img src="/assets/petals.svg" alt="" className='w-full h-full object-cover'/>
                </div>
                <h1 className='text-headline-black font-medium text-3xl   sm:text-5xl'>
                    Welcome
                    <span className='text-headline-green'>Back!</span>
                </h1>
                <p className='text-headline-light font-normal text-base'>Glad to see you, Again!</p>
            </div>

            <div className='mt-2 sm:w-[360px] relative '>
                <form className='flex flex-col relative w-full'
                onSubmit={handlerSubmit}>
                     <input type="email" placeholder='Enter your email' className='input my-6' name="name" value={loginForm.name}
                     onChange={handlerChange}/>

                     <div className='flex input p-0 overflow-hidden'>
                     <input type="password" placeholder='Enter your password' className='p-3 flex-grow outline-none' 
                     name='password' value={loginForm.password}
                     onChange={handlerChange}/>
                     <img src="/assets/eye-icon.svg" alt="eye" 
                     className='pr-2 cursor-pointer
                     '/>
                     </div>
                     <p className='text-headline-light font-normal text-sm text-right opacity-50 pt-1'>Forgot Password?</p>

                     <button className='button' type='submit'>
                        Log In
                     </button>
                </form>
            </div>

            <div className='pt-12 text-center cursor-pointer'>
                <p className='text-headline-light font-normal'>Don’t have account yet? <span className='text-headline-green'>Sign Up</span></p>
            </div>
        </div>
      </div>
    </>
  )
}

export default RightSection
