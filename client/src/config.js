export const encoder = (text) => window.btoa(text) 

export const wooCommerceCredentials = {
    user: "ck_d87f935785994380bad8d6e4dea5988af7e1f0cb",
    password: "cs_c2720d1b9a5e91c14e8d5a8a2b651b0f255dad64"
}

export const rootURL = "https://localhost/wp-json"

export const wpAPI = (url, method="GET") => {
    return fetch(`${rootURL}/wp/v2/${url}`, {method})
        .then(res => res.json())
}

export const wcAPI = (url, method="GET") => {
    return fetch(`${rootURL}/wc/v2/${url}`, {
        headers: {
            Authorization: `Basic ${encoder(`${wooCommerceCredentials.user}:${wooCommerceCredentials.password}`)}`
        },
        method,
    })
    .then(res => res.json())
    .then(res => {
        if(res.data && res.data.status !== 200) throw res.message;
        return res
    })
}