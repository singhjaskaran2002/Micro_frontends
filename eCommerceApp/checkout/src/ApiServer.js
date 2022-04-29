const API_URL = "http://localhost:8080"

const urls = {
    FETCH_PRODUCT_BY_ID: '/product/:id'
}

export const getProductByID = (id) =>
    fetch(`${API_URL}${urls.FETCH_PRODUCT_BY_ID.replace(":id", id)}`).then(res => res.json());