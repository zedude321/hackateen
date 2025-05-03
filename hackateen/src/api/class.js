export const getClass = async (props) => {
  try {
    const res = await fetch("http://localhost:8000/classes/" + props.classId);
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
