export const sendChat = async (props) => {
  try {
    const res = await fetch("http://localhost:8000/chats/create", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(props),
    });
    if (!res.ok) {
      throw new Error(`Network res was not ok: ${res.status}`);
    }

    const data = await res.json();

    return data;
  } catch (error) {
    console.error("Error:", error);
    return error;
  }
};
