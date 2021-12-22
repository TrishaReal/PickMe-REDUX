import axios from "axios";
import { produceWithPatches } from "immer";

//Creo un'istanza di axios: per andare a mettere tutti i paramentri di autorizzazione, link di base,
//e i vari headers che vanno messi ad ogni richiesta per evitare di riscrivere sempre tutto a mano.
const instance = axios.create({
  baseURL: process.env.REACT_APP_UNSPLASH_API, //che va ad individuare l'ambiente di sviluppo in cui ci troviamo e quando laciamo 'npm run start' verrà settato un'ambiente di sviluppo a developmente.
  headers: {
    "Content-Type": "application/json",
    "Accept-Version": "v1",
    Authorization: `Client-ID ${process.env.REACT_APP_UNSPLASH_CLIENT_ID}`,
  },
});

export default instance;
