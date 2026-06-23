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
        resolve(["Evidências", "Boate Azul", "A Carta"]);
      } else if (playlist === "Eletrônicas") {
        resolve(["Wake Me Up", "Love Tonight", "Hear Me Now"]);
      } else if (playlist === "HipHop") {
        resolve(["Lose Yourself", "Insônia", "Vida Loka"]);
      }
    }, 2000);
  });
};

const result = async () => {
  try {
    const user = await loginUser("willianteste@gmailcom", "123456"); // login do usuário
    const playlistData = await getUserPlaylist(user.email);
    // retorna a objeto com usuario e playlist
    // {
    //   usuario: 'willianteste@gmailcom',
    //   playlist: [ 'Modão Sertaneijo', 'HipHop', 'Eletrônicas' ]
    // }

    const playlistMusic = playlistData.playlist; // retorna somente a playlist [ 'Modão Sertaneijo', 'HipHop', 'Eletrônicas' ]

    const listPromise = playlistMusic.map((playlist) =>
      getPlaylistSongs(playlist)
    );

    const musicsPlaylist = await Promise.all(listPromise);

    const res = musicsPlaylist.map((musicas, index) => ({
      usuario: user.email,
      playlist: playlistMusic[index],
      musicas,
    }));

    console.log(res);
  } catch (error) {
    console.error("Erro no processo:", error.message);
  }
};

result();
