import React from 'react';
import { useNavigate } from "react-router-dom";
import { VStack, Center, Button, Input } from "@chakra-ui/react";
import { useForm } from "react-hook-form";
import { useState } from "react";
import users from "../../bd/users";

const LoginForm = () => {
    const [datos, setDatos] = useState({});
    const { register, handleSubmit, formState: { errors } } = useForm({defaultValues: {username:"", password:""}});
    const navigate = useNavigate();

    const onSubmit = (data) => {
        setDatos(data);
        const found = checkUser(data.username, data.password);
        redirect(found);
    };
    console.log(datos);
    const checkUser = (usuario, contraseña) => {
        const userFound =  users.find(user => user.username === usuario && user.password === contraseña);
        return Boolean(userFound);
    };
    const redirect = (found) => {
        if (found) {
            localStorage.setItem("logged", true);
            navigate("/home");
        }else{
            alert("Usuario o contraseña incorrectos");
        }
    };


    
    return (
        <Center mt={8} spacing="3px" margin="auto"  >
            <form onSubmit={handleSubmit(onSubmit)}>
                <VStack textAlign={"center"} align="center" justify={"center"} mt={8} spacing="3px">
                    
                    <Input type="text" placeholder="Usuario" {...register("username", { required: "Ingrese su nombre de usuario" })} />
                    {errors.username && <p>{errors.username.message}</p>}
                    <Input type="password" placeholder="Contraseña" {...register("password", { required: "ingrese su contraseña" })} />
                    {errors.password && <p>{errors.password.message}</p>}
                    <Button
                        borderRadius="md"
                        //bg="cyan.600"
                        //bg={"brand"}
                        bg="pink.400"
                        _hover={{ bg: "cyan.200" }}
                        variant="ghost"
                        type="submit"
                    >
                    Submit
                    </Button>
                </VStack>
            </form>
        </Center>
    )
};

export default LoginForm;