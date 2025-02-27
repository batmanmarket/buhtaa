"use client";
import { useState } from "react";

export default function Home() {
  const [userName, setUserName] = useState(""); // Хэрэглэгчийн нэр
  const [text, setText] = useState(""); // Input утга хадгалах
  const [userItems, setUserItems] = useState({}); // Хэрэглэгчийн бичсэн нэрс

  // Хэрэглэгчийн нэрийг авах
  const handleUserNameChange = (event) => {
    setUserName(event.target.value);
  };

  // Input-ийн утгыг шинэчлэх
  const handleChange = (event) => {
    setText(event.target.value);
  };

  // Жагсаалт руу текст нэмэх
  const addItem = () => {
    if (text.trim() === "") {
      alert("Бөхийн нэр хоосон байж болохгүй!");
      return;
    }

    if (userItems[userName]?.includes(text.trim())) {
      alert("Энэ бөх таны жагсаалтад аль хэдийн орсон байна.");
      return;
    }

    if ((userItems[userName] || []).length >= 4) {
      alert("Та зөвхөн 4 бөхийн нэр оруулах боломжтой!");
      return;
    }

    setUserItems({
      ...userItems,
      [userName]: [...(userItems[userName] || []), text.trim()],
    });
    setText(""); // Input-ийг хоослох
  };

  // Тухайн текстийг жагсаалтаас устгах
  const removeItem = (index) => {
    setUserItems({
      ...userItems,
      [userName]: userItems[userName].filter((_, i) => i !== index),
    });
  };

  const getLabel = (index) => {
    if (index === 0) return "Түрүү бөх:";
    if (index === 1) return "Үзүүрлэх бөх:";
    return "Шөвгөрөх бөх:";
  };

  return (
    <div
      className="w-full h-[100vh] flex flex-col justify-center items-center gap-5 bg-cover bg-center"
      style={{ backgroundImage: "url('/mongolian-wrestling.jpg')" }}
    >
      <div className="bg-white p-6 rounded-xl shadow-lg text-center max-w-md">
        <h1 className="text-lg font-bold mb-3">Цагаан сар 2025</h1>
        <p>Та 4 бөхийн нэрээ оруулна уу?</p>
      </div>

      {/* Хэрэглэгчийн нэр оруулах */}
      <input
        type="text"
        value={userName}
        onChange={handleUserNameChange}
        placeholder="Таны нэр"
        className="p-2 border rounded-lg w-64"
      />

      {/* Хэрэглэгчийн сонгосон бөхчүүд */}
      {userName && userItems[userName] && (
        <div className="bg-white p-4 rounded-lg shadow-md">
          <h2 className="font-semibold">{userName} - Сонгосон бөхчүүд:</h2>
          <ul>
            {userItems[userName].map((item, index) => (
              <li
                key={index}
                className="flex flex-col bg-gray-200 p-2 rounded-lg mt-2"
              >
                <span className="font-bold">{getLabel(index)}</span>
                <div className="flex justify-between items-center">
                  {item}
                  <button
                    onClick={() => removeItem(index)}
                    className="bg-red-500 text-white px-2 py-1 rounded-lg"
                  >
                    Хасах
                  </button>
                </div>
              </li>
            ))}
          </ul>
        </div>
      )}

      {/* Input болон нэмэх товч */}
      <div className="flex gap-2">
        <input
          type="text"
          value={text}
          onChange={handleChange}
          placeholder="Бөхийн нэр"
          className="p-2 border rounded-lg w-64"
          disabled={(userItems[userName] || []).length >= 4}
        />
        <button
          onClick={addItem}
          className={`p-2 rounded-lg text-white ${
            (userItems[userName] || []).length >= 4
              ? "bg-gray-400 cursor-not-allowed"
              : "bg-blue-500"
          }`}
          disabled={(userItems[userName] || []).length >= 4}
        >
          Нэмэх
        </button>
      </div>
    </div>
  );
}
