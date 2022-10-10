import axios from "axios";

const BASE_URL="http://localhost:5000/api";
const TOKEN="eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpZCI6IjYzMjRjZjIwMDlkYzRlNWUxMzE4MzEyMCIsImlzQWRtaW4iOnRydWUsImlhdCI6MTY2NTQxMDIwNSwiZXhwIjoxNjY1NTgzMDA1fQ.QXtEyvep_VTP-e_V-3iwfxtbHAtgWQj8ED0wDgR_yP0";

export const publicRequest =axios.create({
    baseURL:BASE_URL,
});
export const userRequest =axios.create({
    baseURL:BASE_URL,
    header:{token:`Bearer ${TOKEN}`},   
});