export const login = async (props) => {
  try {
    const response = await fetch("https://hacketheeen.onrender.com/users/login", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({
        email: props.email,
        password: props.password,
      }),
    });

    if (!response.ok) {
      throw new Error(`Network response was not ok: ${response.status}`);
    }

    const data = await response.json();

    if (data.token) {
      localStorage.setItem("jwt", data.token);
      localStorage.setItem("user", JSON.stringify(data.data));
    }

    return data;
  } catch (error) {
    console.error("Error:", error);
    return error;
  }
};

export const signup = async (props) => {
  try {
    const response = await fetch("https://hacketheeen.onrender.com/users/create", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(props),
    });

    if (!response.ok) {
      throw new Error(`Network response was not ok: ${response.status}`);
    }

    const data = await response.json();

    if (data.token) {
      localStorage.setItem("jwt", data.token);
      localStorage.setItem("user", JSON.stringify(data.data));
    }

    return data;
  } catch (error) {
    console.error("Error:", error);
    return error;
  }
};

export const getUsers = async () => {
  try {
    const response = await fetch("https://hacketheeen.onrender.com/users/");
    if (!response.ok) {
      throw new Error(
        `Network response was not ok: ${response.status} ${response.statusText}`
      );
    }
    const data = await response.json();
    return data;
  } catch (error) {
    const errorMessage =
      error instanceof Error ? error.message : "Unknown error";
    console.error("Error fetching users:", errorMessage);
    return { error: errorMessage };
  }
};

//* Made in honor of E.Enkhbold 🕊️🥀
