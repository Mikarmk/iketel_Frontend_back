import { useState } from "react";
import httoClient from "../../../httoClient";
import s from './Login.module.css'
function Login() {
    const [email, setEmail] = useState(null);
    const [password, setPassword] = useState(null);
    const logInUser = async () => {
        const response = await httoClient.post("/login", {
            email,
            password,
        });
        
        console.log(email, password);
    }
    return (
        <>
        <form>

            <h1 id={s.proj_name}>
                ИкеТель
            </h1>
            <div id={s.enter_block}>
                <div id={s.enter_block_content_wrapper}>
                    <h1 id={s.enter_lbl}>
                        Вход
                    </h1>

                    <div id={s.name_wrapper} class={s.inp_wrapper}>
                    <input class={s.enter_input} type="email" placeholder="Логин" onChange={(e) => setEmail(e.target.value)}/>
                    </div>

                    <div id={s.email_wrapper} class={s.inp_wrapper}>
                    <input class={s.enter_input} type="password" placeholder="Пароль" onChange={(e) => setPassword(e.target.value)}/>
                    </div>

                    <button  class={s.enter_btn} type="button" onClick={() => logInUser()}>Войти</button>
                    <ul class={s.enter_help_links}>
                        <li>Забыли пароль?</li>
                        <li>Есть аккаунт?</li>
                    </ul>
                </div>
            </div>
            </form>

        </>


    );
}

export default Login;
