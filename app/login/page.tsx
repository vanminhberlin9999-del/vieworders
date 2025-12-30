'use client'
import {useState} from 'react'
import {useRouter} from "next/navigation";
import {useDispatch, useSelector} from "react-redux";
import {AppDispatch, RootState, setUsername} from "@/lib/store";

export default function LoginPage() {

    const [usernameInput, setUsernameInput] = useState('');
    const [password, setPassword] = useState('');
    const [error, setError] = useState('');
    const [loading, setLoading] = useState(false);

    const router = useRouter();
    const username = useSelector((state: RootState) => state.users?.username);

    const dispatch = useDispatch<AppDispatch>();

    async function handleSubmit(e: React.FormEvent) {
        e.preventDefault()
        setLoading(true);
        setError('');

        const res = await fetch('/api/auth', {
            method: 'POST',
            headers: { 'Content-Type': 'application/json' },
            body: JSON.stringify({ username: usernameInput, password: password })
        });

        setLoading(false);

        if(res.ok){
            dispatch(setUsername(usernameInput));
            router.push('/');
        }else{
            setError('Wrong password');
        }
    }

    return (
        <div style={{ maxWidth: 800, margin: '100px auto' }} className="flex flex-col items-center justify-between p-24">
            <h2>Login – View Orders</h2>
            <br/>
            <form onSubmit={handleSubmit}>
                <input
                    placeholder="admin"
                    value={usernameInput}
                    onChange={ e => setUsernameInput(e.target.value) }
                    required
                />

                <input
                    type="password"
                    placeholder="123456"
                    value={password}
                    onChange={ e => setPassword(e.target.value) }
                    required
                />

                <button type="submit">
                   Login
                </button>
            </form>

            {error && <p style={{ color: 'red' }}>{error}</p>}
        </div>
    );
}