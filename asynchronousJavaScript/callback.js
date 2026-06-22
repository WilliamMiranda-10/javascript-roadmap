const loginUser = (email, password, onSuccess, onError) => {
  setTimeout(() => {
    const error = false;
    if (error) {
      return onError(new Error("Error in login"));
    }

    console.log("User logged");
    onSuccess({ email });
  }, 1500);
};

const getUserVideos = (email, callback) => {
  setTimeout(() => {
    callback([
      "Era da gelo",
      "Todo mundo odeia o Chris",
      "Os melhores do mundo",
    ]);
  }, 2000);
};

const getVideosDatails = (video, callback) => {
  setTimeout(() => {
    callback({ video: "Curso de javascript" });
  }, 2500);
};

const user = loginUser(
  "WillianTeste@gmail.com",
  "123456",
  (user) => {
    getUserVideos(user.email, (videos) => {
      console.log({ videos });
      getVideosDatails(videos[2], (videosDatails) => {
        console.log({ videosDatails });
      });
    });
  },
  (error) => {
    console.log({ error });
  }
);
