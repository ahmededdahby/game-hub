import axios from "axios";

export default axios.create({
    baseURL: "https://api.rawg.io/api",
    params: {
        key : "f3deb307e50e464bb015a5fdaabaeebc"
    }
})