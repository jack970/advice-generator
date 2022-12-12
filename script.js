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

const showLoading = (show) => {
  const loading = document.getElementById("loader");
  return show
    ? (loading.style.display = "block")
    : (loading.style.display = "none");
};

const main = async () => {
  const adviceId = document.getElementById("adviceId");
  const adviceText = document.getElementById("advice-text");

  try {
    adviceText.innerHTML = "";
    showLoading(true);
    const jsonResponse = await doGet();
    showLoading(false);
    const { id, advice } = jsonResponse.slip;

    adviceId.innerHTML = id;
    adviceText.innerHTML = `“${advice}”`;
  } catch (error) {
    console.error(error);
  }
};
main();
