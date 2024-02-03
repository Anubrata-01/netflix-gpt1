import OpenAI from 'openai';
import { OpenAI_Key } from '../Components/constant';

const openai = new OpenAI({
  apiKey: OpenAI_Key,
  dangerouslyAllowBrowser: true // This is the default and can be omitted
});
export default openai;