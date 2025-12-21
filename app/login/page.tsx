'use client'
import {useState} from 'react'
import {useRouter} from "next/navigation";

export default function LoginPage() {

    const [username, setUsername] = useState("");
    const [password, setPassword] = useState('');
    const [error, setError] = useState('');
    const [loading, setLoading] = useState(false);

    const ADMIN_USERNAME= "vanvan";
    const ADMIN_PASSWORD= "dathanhtoan";

    const router = useRouter();


    async function handleSubmit(e: React.FormEvent) {
        e.preventDefault()
        setLoading(true);
        setError('');

        if(password === ADMIN_PASSWORD && username === ADMIN_USERNAME){
            document.cookie = "auth=1, path=/, max-age=86400";
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
                    placeholder="Username"
                    value={username}
                    onChange={ e => setUsername(e.target.value) }
                    required
                />

                <input
                    type="password"
                    placeholder="Password"
                    value={password}
                    onChange={ e => setPassword(e.target.value) }
                    required
                />

                <button type="submit" disabled={loading}>
                    {loading ? 'Login in process…' : 'Login'}
                </button>
            </form>

            {error && <p style={{ color: 'red' }}>{error}</p>}
        </div>
    );
}