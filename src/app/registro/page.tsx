import Link from "next/link";
import Input from "@/components/ui/Input";
import { Button } from "@/components/ui/Button";
import { TablesInsert } from "@/utils/supabase/database.types";
import { redirect } from "next/navigation";
import { createClient } from "@/utils/supabase/server";

export default function RegistroPage() {


    const signUp = async (formData: FormData) => {
        'use server'

        const email = formData.get('email') as string;
        const password = formData.get('password') as string;
        const confirm_password = formData.get('confirm_password') as string;

        if (password !== confirm_password) {
            console.log("Las contraseñas no coinciden")
            return;
        }

        const profileData: Partial<TablesInsert<'profiles'>> = {
            nombre: formData.get('nombre') as string,
            apellido_p: formData.get('apellido_p') as string,
            apellido_m: formData.get('apellido_m') as string,
            num_casa: formData.get('num_casa') as string,
            telefono: formData.get('telefono') as string,
        };

        const supabase = await createClient();

        const { error } = await supabase.auth.signUp({
            email,
            password,
            options: {
                data: profileData
            }
        });

        if (error) {
            console.log("Error de Supabase:", error.message);
            return;
        }

        console.log("¡Usuario registrado con éxito!");
        redirect('/login?registrado=true');
    }

    return (
        <main className="min-h-screen py-4 px-4 md:px-0 flex flex-col items-center mt-4 bg-white">
            <div className="flex flex-col gap-2 items-center">
                <h1 className="text-2xl md:text-4xl font-bold text-orange-primary">Registro para solicitar acceso</h1>
                <h2 className="text-gray-600 text-md mt-2 mb-6">Ingresa tus datos para solicitar acceso</h2>
            </div>

            {/* Formulario */}
            <form action={signUp} className="w-full max-w-md flex flex-col gap-4 my-4">
                <Input name="nombre" type="text" placeholder="Nombre(s)" />
                <Input name="apellido_p" type="text" placeholder="Apellido Paterno" />
                <Input name="apellido_m" type="text" placeholder="Apellido Materno" />
                <Input name="num_casa" type="text" placeholder="Número de Casa (Ej. 24)" />
                <Input name="telefono" type="tel" placeholder="Teléfono" />

                <Input name="email" type="email" placeholder="Correo electrónico" />
                <Input name="password" type="password" placeholder="Crea una contraseña" />
                <Input name="confirm_password" type="password" placeholder="Confirma la contraseña" />

                <Button text="Enviar Solicitud" type="submit" variant="primary" className="my-4" />
            </form>

            <Link href="/login" className="mt-4 text-sm text-text-muted hover:text-orange-primary underline">
                Volver al inicio de sesión
            </Link>
        </main>
    );
}
