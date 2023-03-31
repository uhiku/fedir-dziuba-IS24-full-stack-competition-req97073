import ky from "ky";

export const http = ky.create({
  prefixUrl: "http://localhost:3001/api",
});
