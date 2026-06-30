const loginUser = (email, password) => {
  return new Promise((resolve, reject) => {
    const error = false;
    if (error) {
      return reject(new Error("Error in login"));
    }

    console.log("user logged");
    resolve({ email });
  });
};

const getUserVideos = (email) => {
  return new Promise((resolve, reject) => {
    setTimeout(() => {
      resolve([
        "Era da gelo",
        "Todo mundo odeia o Chris",
        "Os melhores do mundo",
      ]);
    }, 2000);
  });
};

const getVideosDetails = (video) => {
  return new Promise((resolve, reject) => {
    setTimeout(() => {
      resolve({ video: "Curso de javascript" });
    }, 2500);
  });
};

const displayUser = async () => {
  try {
    const user = await loginUser("willianteste@gmail.com", "123456");
    const videos = await getUserVideos(user.email);
    const videosDetails = await getVideosDetails(videos[2]);

    console.log("Videos details", { videosDetails });
  } catch (error) {
    console.log(error);
  }
};

displayUser();



