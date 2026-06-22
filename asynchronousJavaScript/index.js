const loginUser = (email, password) => {
  return new Promise((resolve, reject) => {
    const error = false;
    if (error) {
      reject(new Error("Error in login"));
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

const getVideosDatails = (video) => {
  return new Promise((resolve, reject) => {
    setTimeout(() => {
      resolve({ video: "Curso de javascript" });
    }, 2500);
  });
};

// loginUser("willianteste@gmail.com", "123456").then((user) =>
//   getUserVideos(user.email)
//     .then((videos) => getVideosDatails(videos[2]))
//     .then((videosDatails) => console.log({ videosDatails }))
//     .catch((error) => console.log(error))
// );

const displayUser = async () => {
  try {
    const user = await loginUser("willianteste@gmail.com", "123456");
    const videos = await getUserVideos(user.email);
    const videosDetails = await getVideosDatails(videos[2]);
    console.log("usuário:", { user });
    console.log("Videos:", { videos });
    console.log("Videos details", { videosDetails });
  } catch (error) {
    console.log(error)
  }
};

displayUser();
