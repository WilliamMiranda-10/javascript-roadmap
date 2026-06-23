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
  
  const getVideosDetails = (video) => {
    return new Promise((resolve, reject) => {
      setTimeout(() => {
        resolve({ video: "Curso de javascript" });
      }, 2500);
    });
  };
  
  loginUser("willianteste@gmail.com", "123456").then((user) =>
    getUserVideos(user.email)
      .then((videos) => getVideosDetails(videos[2]))
      .then((videosDetails) => console.log({ videosDetails }))
      .catch((error) => console.log(error))
  );
  
  // Promise.all
  
  const yt = new Promise((resolve) => {
    setTimeout(() => {
      resolve("Videos from youtube");
    }, 1000);
  });
  
  const fb = new Promise((resolve, reject) => {
    setTimeout(() => {
      resolve("Videos from facebook");
    }, 5000);
  });
  
  Promise.all([yt, fb]).then((result) => {
    console.log({ result });
  });
  