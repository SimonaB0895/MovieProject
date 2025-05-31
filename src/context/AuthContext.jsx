import React, { createContext, useState, useEffect } from "react";

export const AuthContext = createContext();

export const AuthProvider = ({ children }) => {
  const [user, setUser] = useState(null)
//  const [likedMovies, setLikedMovies] = useState({});



  // Проверява дали има потребител в localStorage при първоначално зареждане
  useEffect(() => {
    const storedUser = JSON.parse(localStorage.getItem("user"));
    if (storedUser) {
      setUser(storedUser);
    
    //const savedLikes = JSON.parse(localStorage.getItem(`likedMovies_${storedUser.email}`));
      //setLikedMovies(savedLikes || {});
    }
  }, []);

  const login = (email, password) => {
    // // Фалшив логин — тук можеш да замениш с реална проверка чрез API
    // const demoUser = { email };
    // localStorage.setItem("user", JSON.stringify(demoUser));
    // setUser(demoUser);
    const savedUser = JSON.parse(localStorage.getItem("registeredUser"));
  if (savedUser && savedUser.email === email && savedUser.password === password) {
    localStorage.setItem("user", JSON.stringify(savedUser));
    setUser(savedUser);

   // const savedLikes = JSON.parse(localStorage.getItem(`likedMovies_${savedUser.email}`));
      //setLikedMovies(savedLikes || {});

    return true;
  } else {
    alert("Невалиден имейл или парола");
    return false;
  }
  };

  const logout = () => {
    localStorage.removeItem("user");
    setUser(null);
  };

// const toggleLike = (imdbID) => {
//     setLikedMovies(prev => {
//       const newLikes = { ...prev };
//       if (newLikes[imdbID]) {
//         delete newLikes[imdbID];
//       } else {
//         newLikes[imdbID] = true;
//       }

//       // Записваме в localStorage за текущия потребител
//       if (user) {
//         localStorage.setItem(`likedMovies_${user.email}`, JSON.stringify(newLikes));
//       }

//       return newLikes;
//       });
 // };

  return (
       <AuthContext.Provider value={{ user, login, logout }}>

      {children}
    </AuthContext.Provider>
  );
};