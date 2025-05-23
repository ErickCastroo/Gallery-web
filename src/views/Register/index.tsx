import { useForm } from '@tanstack/react-form'
import { toast } from 'react-toastify'
import { Link } from 'react-router-dom'
import type { AnyFieldApi } from '@tanstack/react-form'

function FieldInfo({ field }: { field: AnyFieldApi }) {

  return (
    <>
      {field.state.meta.isTouched && !field.state.meta.isValid ? (
        <em className='flex text-Secondary text-xs'>{field.state.meta.errors.join(',')}</em>
      ) : null}
    </>
  )
}

function Register() {
  const form = useForm({
    defaultValues: {
      username: '',
      email: '',
      password: '',
      confirmPassword: ''
    },
    onSubmit: (values) => {
      if (values.value.password !== values.value.confirmPassword) {
        toast.error('Passwords do not match')
        return;
      }
      console.log(values);
    },
  })

  return (
    <div className='flex flex-col items-center justify-center h-screen bg-[url("./img/login.jpg")] bg-cover bg-center w-full'>
      <div className='absolute inset-0 bg-white/90'></div>
      <div className='relative z-10 p-4'>
        <h1 className='flex justify-center text-3xl font-bold text-Secondary'>Sign Up</h1>
        <p className='text-lg mb-5 text-Secondary'></p>
        <form
          className=''
          onSubmit={async (e) => {
            e.preventDefault()
            e.stopPropagation()
            const isValid = await form.validate('submit')
            if (isValid) {
              form.handleSubmit()
            }
          }}
        >
          <div>
            <form.Field
              name='username'
              validators={{
                onChange: ({ value }) =>
                  !value
                    ? 'username is required'
                    : value.length < 3
                      ? 'username must be at least 3 characters'
                      : undefined,
                onChangeAsyncDebounceMs: 500,
                onChangeAsync: async ({ value }) => {
                  await new Promise((resolve) => setTimeout(resolve, 1000))
                  return value.includes('error') && 'No error allowed in username'
                },
              }}
            >
              {(field) => (
                <>
                  <label htmlFor={field.name} className='flex text-Primary text-lg mt-2'>
                    UserName
                  </label>
                  <input
                    id={field.name}
                    name={field.name}
                    value={field.state.value}
                    onBlur={field.handleBlur}
                    onChange={(e) => field.handleChange(e.target.value)}
                    className='border-2 border-Primary rounded-lg p-2 w-full'
                    placeholder='Enter your Username'
                  />
                  <FieldInfo field={field} />
                </>
              )}
            </form.Field>
          </div>

          <div>
            <form.Field
              name='email'
              validators={{
                onChange: ({ value }) =>
                  !value
                    ? 'Email is required'
                    : value.length < 8
                      ? 'Email must be at least 8 characters'
                      : undefined,
                onChangeAsyncDebounceMs: 500,
                onChangeAsync: async ({ value }) => {
                  await new Promise((resolve) => setTimeout(resolve, 1000))
                  return value.includes('error') && 'No "error" allowed in email'
                },
              }}
            >
              {(field) => (
                <>
                  <label htmlFor={field.name} className='flex text-Primary text-lg mt-2'>
                    Email:
                  </label>
                  <input
                    id={field.name}
                    name={field.name}
                    type='email'
                    autoComplete='email'
                    value={field.state.value}
                    onBlur={field.handleBlur}
                    onChange={(e) => field.handleChange(e.target.value)}
                    className='border-2 border-Primary rounded-lg p-2 w-full'
                    placeholder='Enter your email'
                  />
                  <FieldInfo field={field} />
                </>
              )}
            </form.Field>
          </div>

          <div>
            <form.Field
              name='password'
              validators={{
                onChange: ({ value }) =>
                  !value
                    ? 'Password is required'
                    : value.length < 8
                      ? 'Password must be at least 8 characters'
                      : undefined,
                onChangeAsyncDebounceMs: 500,
                onChangeAsync: async ({ value }) => {
                  await new Promise((resolve) => setTimeout(resolve, 1000))
                  return value.includes('error') && 'No "error" allowed in password'
                },
              }}
            >
              {(field) => (
                <>
                  <label htmlFor={field.name} className='flex text-Primary text-lg mt-2'>
                    Password:
                  </label>
                  <input
                    id={field.name}
                    name={field.name}
                    type='password'
                    value={field.state.value}
                    onBlur={field.handleBlur}
                    onChange={(e) => field.handleChange(e.target.value)}
                    className='border-2 border-Primary rounded-lg p-2 w-full'
                    placeholder='Enter your password'
                  />
                  <FieldInfo field={field} />
                </>
              )}
            </form.Field>
          </div>


          <div>
            <form.Field
              name='confirmPassword'
              validators={{
                onChange: ({ value }) =>
                  !value
                    ? 'confirm your Password is required'
                    : value.length < 8
                      ? 'Password must be at least 8 characters'
                      : undefined,
                onChangeAsyncDebounceMs: 500,
                onChangeAsync: async ({ value }) => {
                  await new Promise((resolve) => setTimeout(resolve, 1000))
                  return value.includes('error') && 'No "error" allowed in password'
                },
              }}
            >
              {(field) => (
                <>
                  <label htmlFor={field.name} className='flex text-Primary text-lg mt-2'>
                    Comfirm Password:
                  </label>
                  <input
                    id={field.name}
                    name={field.name}
                    type='password'
                    value={field.state.value}
                    onBlur={field.handleBlur}
                    onChange={(e) => field.handleChange(e.target.value)}
                    className='border-2 border-Primary rounded-lg p-2 w-full'
                    placeholder='Enter your password'
                  />
                  <FieldInfo field={field} />
                </>
              )}
            </form.Field>
          </div>
          <form.Subscribe
            selector={(state) => [state.canSubmit, state.isSubmitting]}
          >
            {([canSubmit, isSubmitting]) => (
              <>
                <button
                  type='submit'
                  disabled={!canSubmit}
                  className={`bg-Secondary w-full text-white rounded-lg p-2 mt-2 ${canSubmit ? 'hover:bg-Secondary' : 'opacity-50 cursor-not-allowed'
                    }`}
                >
                  {isSubmitting ? '...' : 'Register'}
                </button>
                <Link to='/login' className='flex justify-center text-Secondary mt-3'>
                  Already have an account? Login
                </Link>
              </>
            )}
          </form.Subscribe>
        </form>
      </div>
    </div>
  )
}

export { Register }