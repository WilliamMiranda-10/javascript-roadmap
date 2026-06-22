const loginUser = (email, password, onSuccess, onError) => {
  setTimeout(() => {
    const error = false;
    if (error) {
      return onError(new Error("Error in login"));
    }

    console.log("User logged");
    onSuccess({ email });
  }, 1500);

  console.log("after setTimeout");
};

const getUserVideos = (email, callback) => {
  setTimeout(() => {
    callback(["video 1", "video 2", "video 3"]);
  }, 2000);
};

const user = loginUser(
  "Willianteste@gmail.com",
  "123456",
  (user) => {
    getUserVideos(user.email, (videos)=>{
    console.log({videos})
})
  },
  (error) => {
    console.log({ error });
  }
);

