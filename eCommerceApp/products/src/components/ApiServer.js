const API_URL = "http://localhost:8080"

const urls = {
    FETCH_PRODUCTS: '/product',
}

export const getProducts = () =>
    fetch(`${API_URL}${urls.FETCH_PRODUCTS}`).then(res => res.json());

