const doGet = async () => {
  try {
    const response = await fetch("https://api.adviceslip.com/advice");
    if (response.ok) {
      const jsonResponse = await response.json();
      return jsonResponse;
    }
  } catch (error) {
    console.error(error);
  }
};

const main = async () => {
  const adviceId = document.getElementById("adviceId");
  const adviceText = document.getElementById("adviceText");

  try {
    const jsonResponse = await doGet();
    const { id, advice } = jsonResponse.slip;

    adviceId.innerHTML = id;
    adviceText.innerHTML = advice;
  } catch (error) {
    console.error(error);
  }
};
main();
