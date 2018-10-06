export const encoder = (text) => window.btoa(text);

export const wooCommerceCredentials = {
    user: "ck_594e469f2c4cf68b2a1ac39b664b1380acdb97d4",
    password: "cs_28ee5939f42487bfc545a1dac41f09e44d744ec2"
};

export const rootURL = "https://localhost/wordpress/wp-json";

export const wpAPI = (url, method="GET") => {
    return fetch(`${rootURL}/wp/v2/${url}`, {method})
        .then(res => res.json())
};

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
};