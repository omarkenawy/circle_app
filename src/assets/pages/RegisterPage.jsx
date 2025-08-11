import { Input } from "@heroui/input";
import { Button, Select, SelectItem } from "@heroui/react";
import { DatePicker } from "@heroui/react";
import React, { useState } from 'react'
import { useForm } from "react-hook-form";
import { zodResolver } from '@hookform/resolvers/zod';
import { sendRegisterData } from "../services/authServices";
import { Link, useNavigate } from "react-router-dom";
import { schema } from "../schema/registerSchema";





export default function RegisterPage() {

    const [loading, setLoading] = useState(false);
    const [apiError, setApiError] = useState(null);
    const { register, handleSubmit, formState: { errors } } = useForm({
        defaultValues: {
            name: 'omar ehab',
            email: 'omarehab@gmail.com',
            password: 'Omar@123',
            rePassword: 'Omar@123',
            gender: '',
            dateOfBirth: '1994-10-07',
            //from API 
        },
        resolver: zodResolver(schema),
    })

    let nav = useNavigate();

    async function signUp(userData) {
        setLoading(true);
        const response = await sendRegisterData(userData);
        if (response.message) {
            nav('/login');
        } else {
            setApiError(response)
        }
        setLoading(false);
        console.log(response);
    }



    return <>

        <div className="register bg-sky-300 h-screen flex justify-center items-center">
            <div className="text-center bg-white rounded-2xl p-8 w-full max-w-md">
                <h1 className="text-center mb-4">Register</h1>
                <form className="space-y-3" onSubmit={handleSubmit(signUp)}>
                    <Input variant="bordered" label='Name' isInvalid={Boolean(errors.name)} errorMessage={errors.name?.message} {...register("name")} type="text" />
                    <Input variant="bordered" label='E-mail' isInvalid={Boolean(errors.email)} errorMessage={errors.email?.message} {...register("email")} type="email" />
                    <Input variant="bordered" label='Password' isInvalid={Boolean(errors.password)} errorMessage={errors.password?.message} {...register("password")} type="Password" />
                    <Input variant="bordered" label='RePassword' isInvalid={Boolean(errors.rePassword)} errorMessage={errors.rePassword?.message} {...register("rePassword")} type="Password" />
                    <div className="flex space-x-2">
                        <Input variant="bordered" label='Date of Birth' isInvalid={Boolean(errors.dateOfBirth)} errorMessage={errors.dateOfBirth?.message} {...register("dateOfBirth")} type="date" />
                        <Select className="max-w-md" isInvalid={Boolean(errors.gender)} errorMessage={errors.gender?.message} label="Select Gender"{...register("gender")}>
                            <SelectItem key={"male"}>{'male'}</SelectItem>
                            <SelectItem key={"Fe-male"}>{'Fe-male'}</SelectItem>
                        </Select>
                    </div>
                    <Button isLoading={loading} type="submit" color="primary" className="px-34">Create An account</Button>
                    {apiError ? <span className=" text-red-600">{apiError}</span> : ""}
                    <p className='pt-4'>If you have an accont please <Link to={'/login'} className='text-blue-500'>Login</Link></p>
                </form>
            </div>
        </div>


    </>
}
