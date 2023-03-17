import openai from "./chatgpt";

const query = async (prompt: string, chatId: string, model: string) => {
  console.log("i am here");
  const res = await openai
    .createCompletion({
      model,
      prompt,
      temperature: 0.9,
      max_tokens: 1000,
      top_p: 1,
      frequency_penalty: 0,
      presence_penalty: 0,
    })
    .then((res) => {
      console.log("--------------");
      console.log(res);
      return res.data.choices[0].text;
    })
    .catch(
      (err) => `chatGPT was unable to find an answer (Error: ${err.message})`
    );
  return res;
};

export default query;
