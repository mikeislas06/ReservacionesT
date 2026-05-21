import Image from 'next/image'
import { redirect } from 'next/navigation'

import { createClient } from '@/utils/supabase/server'
import Hero from '@/components/login/Hero'
import { Button } from '@/components/ui/Button'
import Checkbox from '@/components/ui/Checkbox'
import Link from 'next/link'
import Input from '@/components/ui/Input'

export default function LoginPage() {

    // 1. This is the Server Action that runs securely on the backend
    const login = async (formData: FormData) => {
        'use server'

        const email = formData.get('email') as string
        const password = formData.get('password') as string
        const supabase = await createClient()

        const { error } = await supabase.auth.signInWithPassword({
            email,
            password,
        })

        if (error) {
            // Handle the error (e.g., redirect with an error parameter)
            redirect('/login?error=true')
        }

        // On success, send them to the Dashboard
        redirect('/')
    }

    return (
        <>
            <Hero />
            <div className="h-full p-4 mt-2 flex flex-col gap-4 bg-background-gray flex-1">
                <h2 className='text-gray-700 font-bold text-md uppercase mb-5'>Iniciar Sesión</h2>
                <form action={login} className="flex flex-col gap-4">
                    <Input name="email" type="email" placeholder="Correo electrónico" />
                    <Input name="password" type="password" placeholder="Contraseña" />
                    <div className='flex flex-row justify-between items-center my-4'>
                        <Checkbox id="remember-user" name="remember-user" label="Recordarme" />
                        <Link href="" className='text-orange-primary underline font-bold text-sm'>¿Olvidaste tu contraseña?</Link>
                    </div>
                    <Button text="Iniciar Sesión" type='submit' variant='primary' />
                </form>
                <div className='flex flex-row items-center justify-center gap-2 text-text-muted text-xs flex-1'>
                    <p>¿Eres nuevo residente?</p>
                    <Link href="" className='text-orange-primary underline'>Solicita acceso</Link>
                </div>
            </div>
        </>
    )
}
