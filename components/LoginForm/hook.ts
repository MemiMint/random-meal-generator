import { useState } from "react";
import { IState } from "./IState";

export const useLoginForm = () => {
    const [state, setState] = useState<IState>({
        email: "",
        password: "",
        isLoading: false,
        passwordVisiblity: false
    });

    const onChange = (event: React.ChangeEvent<HTMLInputElement>) => {
        setState((prevState) => ({
            ...prevState,
            [event.target.name]: event.target.value
        }));
    }

    const onTogglePasswordVisibility = () => {
        setState((prevState) => ({
            ...prevState,
            passwordVisiblity: !prevState.passwordVisiblity
        }));
    }

    const onSubmit = async (): Promise<void> => {
        setState((prevState) => ({
            ...prevState,
            isLoading: true
        }));

        setTimeout(() => {
            setState((prevState) => ({
                ...prevState,
                isLoading: false
            }));
        }, 3000)
    }

    return {
        state,
        onChange,
        onSubmit,
        onTogglePasswordVisibility
    }
}