// node --version # Should be >= 18
// export default 
// import { useDispatch } from "react-redux";
import { Gemini_Api_Key } from "../Components/constant";
import { setResults,storeGptSearchMovie } from "../Redux Store/gptSlice";
const {
  GoogleGenerativeAI,
  HarmCategory,
  HarmBlockThreshold,
} = require("@google/generative-ai");

const MODEL_NAME = "gemini-1.0-pro";
const API_KEY = Gemini_Api_Key;

 const runChat=async(prompt, name, inputValue, dispatch, searchTmdbMovies)=>{
  // const dispatch=useDispatch();
  const genAI = new GoogleGenerativeAI(API_KEY);
  const model = genAI.getGenerativeModel({ model: MODEL_NAME });

  const generationConfig = {
    temperature: 0.9,
    topK: 1,
    topP: 1,
    maxOutputTokens: 2048,
  };

  const safetySettings = [
    {
      category: HarmCategory.HARM_CATEGORY_HARASSMENT,
      threshold: HarmBlockThreshold.BLOCK_MEDIUM_AND_ABOVE,
    },
    {
      category: HarmCategory.HARM_CATEGORY_HATE_SPEECH,
      threshold: HarmBlockThreshold.BLOCK_MEDIUM_AND_ABOVE,
    },
    {
      category: HarmCategory.HARM_CATEGORY_SEXUALLY_EXPLICIT,
      threshold: HarmBlockThreshold.BLOCK_MEDIUM_AND_ABOVE,
    },
    {
      category: HarmCategory.HARM_CATEGORY_DANGEROUS_CONTENT,
      threshold: HarmBlockThreshold.BLOCK_MEDIUM_AND_ABOVE,
    },
  ];

  const chat = model.startChat({
    generationConfig,
    safetySettings,
    history: [
    ],
  });

  const result = await chat.sendMessage(prompt);
  const response = result.response;
  const Response=response.text();
  const gptMovies = Response&& Response.split(",");
  dispatch(setResults(Response))
  if (!inputValue) {
    console.log("Please enter a search query.");
    dispatch(storeGptSearchMovie({ movieNames: null, movieResults: null }));
    return;
  }
  if(gptMovies){

  
  const gptFetchMovies = await Promise.all(gptMovies.map((movie) => searchTmdbMovies(movie)));
  const tmdbResults = await Promise.all(gptFetchMovies);

  dispatch(storeGptSearchMovie({ movieNames: gptMovies, movieResults: tmdbResults }));
  console.log(tmdbResults);
  }
}
// runChat("what is react")

  export default runChat;