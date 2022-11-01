export async function connect(url: string, method: string = 'GET', data: FormData | null) {
    if(method === 'GET') {
        const res = await fetch(url);
        if(res.ok) return res.json();
        else throw new Error(`Cannot access to ${url}`);
    }
    else if(method === 'POST') {
        const res = await fetch(url, {
            method: 'POST',
            body: data
        });
        if(res.ok) return res.json();
        else throw new Error(`Cannot access to ${url}`);
    }
}