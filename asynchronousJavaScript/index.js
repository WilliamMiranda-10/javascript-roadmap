const loginUser = (email, password) => {
  return new Promise((resolve, reject) => {
    if (password !== "123456") {
      return reject(new Error("Senha inválida"));
    }

    setTimeout(() => {
      resolve({ id: 1, email });
    }, 2000);
  });
};

const getUserPlaylist = (email) => {
  return new Promise((resolve, reject) => {
    setTimeout(() => {
      resolve({
        usuario: email,
        playlist: ["Modão Sertaneijo", "HipHop", "Eletrônicas"],
      });
    }, 2000);
  });
};

const getPlaylistSongs = (playlist) => {
  return new Promise((resolve, reject) => {
    setTimeout(() => {
      if (playlist === "Modão Sertaneijo") {
        resolve([
          "Evidências",
          "Boate Azul",
          "A Carta",
          "Ainda Ontem Chorei de Saudade",
        ]);
      } else if (playlist === "Eletrônicas") {
        resolve(["Wake Me Up", "Love Tonight", "Hear Me Now"]);
      } else if (playlist === "HipHop") {
        resolve(["Lose Yourself", "Insônia", "Vida Loka", "Amor e Fé"]);
      }
    }, 2000);
  });
};

const result = async () => {
  try {
    const user = await loginUser("willianteste@gmail.com", "123456");
    const playlistData = await getUserPlaylist(user.email);

    console.log("Usuário logado:", user.email);

    for (let playlist of playlistData.playlist) {
      const music = await getPlaylistSongs(playlist);
      console.log("Playlist:", playlist);
      console.log("Musicas:", music.join(","));
    }
  } catch (error) {
    console.log({ error });
  }
};

result();
