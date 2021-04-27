import axios from "axios";

export const api = axios.create({
  baseURL: "http://localhost:3333",
  headers: [
    {
      Authorization: `Bearer eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpYXQiOjE2MTk1NDk2MzUsImV4cCI6MTYxOTYzNjAzNSwic3ViIjoiNjA4ODVkYjVmM2JjNmEwMmU1ZGVkNWVhIn0.u3kCpI-MhfDjVYqnUnISdi6Jt8Pc2F2OFdzzly9Pfx4`,
    },
  ],
});
