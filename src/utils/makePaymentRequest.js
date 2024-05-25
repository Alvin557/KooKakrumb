import axios from "axios";

export const makePaymentRequest = axios.create({
  baseURL: 'http://localhost:1337',
  headers: {
    Authorization: "bearer" + "38e5aaa1c61205f23b25f48bb1a29f803a902858a035975ae583528f4df39d96ad1f6f80a32ca923987b9272076c800db87e89357aa191a09f12bba633454be2068af3502d40162fea8ecbe34fbe4c0322ffb40f03fdbdc5ced8f776d1aee05866758112325fb9241c276b8126d93a07eb9a1685f732f84c3156721236877c5b"
  },
});

 
          