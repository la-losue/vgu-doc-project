import React from "react";
import { useState, useEffect } from "react";
import Stack from "@mui/material/Stack";
import Button from "@mui/material/Button";
import { Link } from "react-router-dom";

const Formal = () => {
  const [formal, setFormal] = useState({
    // состояние компонента, содержащее данные из полей ввода и select
    codeNameDirection: "",
    specializationProfile: "",
    input1: "",
    input2: "",
    studentQualification: "",
    educationalForm: "",
    department: "",
    creatorProgramm: "",
    recommended: "",
    academicYear: "",
    course: "",
    numberPhone: "",
    disciplineTask: "",
    positinInPLO: "",
  });

  // обработчик изменения поля ввода
  const handleInputChange = (event) => {
    const { name, value } = event.target;
    setFormal((prevFormal) => ({
      ...prevFormal,
      [name]: value,
    }));
  };

  // обработчик отправки формы
  const handleSubmit = (event) => {
    event.preventDefault();
    console.log(formal);

    const request = window.indexedDB.open("myDatabase", 1);
    let db;

    request.onerror = (event) => {
      console.log("Error opening database");
    };

    request.onsuccess = (event) => {
      db = event.target.result;

      const transaction = db.transaction("myStore", "readwrite");
      const store = transaction.objectStore("myStore");

      const data = {
        codeNameDirection: formal.codeNameDirection,
        specializationProfile: formal.specializationProfile,
      };

      const request = store.add(data);

      request.onerror = (event) => {
        console.log("Error adding data to database");
      };

      request.onsuccess = (event) => {
        console.log("Data added to database");
      };

      // Очищаем поля после отправки
      setFormal({
        codeNameDirection: "",
        specializationProfile: "",
        input1: "",
        input2: "",
        studentQualification: "",
        educationalForm: "",
        department: "",
        creatorProgramm: "",
        recommended: "",
        academicYear: "",
        course: "",
        numberPhone: "",
      });
    };

   
    request.onupgradeneeded = (event) => {
      db = event.target.result;
      const objectStore = db.createObjectStore("myStore", {
        keyPath: "id",
        autoIncrement: true,
      });
    };
  };

  return (
    <div>
      <Link className="link" to="/electronics">
        Назад
      </Link>
      <form className="document-form" onSubmit={handleSubmit}>
        <ul>
          <li className="field-block">
            <label className="labelField" htmlFor="codeNameDirection">
              1. Код и наименование направления подготовки/специальности:{" "}
            </label>
            <input
              style={{ backgroundColor: "#cccccc", width: "40%" }}
              type="text"
              id="codeNameDirection"
              name="codeNameDirection"
              autoComplete="off"
              value={formal.codeNameDirection}
              onChange={handleInputChange}
            />
          </li>

          {/* <div>  
        <label htmlFor="input1">Input 1:</label>
        <input type="text" id="input1" name="input1" onChange={handleInputChange} />
      </div>
      {formData.input2 && (
        <div>
          <label htmlFor="input2">Input 2:</label>
          <input type="text" id="input2" name="input2" onChange={handleInputChange} />
        </div>
      )}
      <button type="button" onClick={handleAddInput}>
        Add field
      </button> */}

          {/* 2 */}
          <li className="field-block">
            <label className="labelField" htmlFor="specializationProfile">
              2. Профиль подготовки/специализация:{" "}
            </label>
            <input
              style={{ backgroundColor: "#cccccc", width: "40%" }}
              type="text"
              id="specializationProfile"
              name="specializationProfile"
              autoComplete="off"
              value={formal.specializationProfile}
              onChange={handleInputChange}
            />
          </li>

          {/* 3 */}
          <li className="field-block">
            <label className="labelField" htmlFor="studentQualification">
              3. Квалификация (степень) выпускника:{" "}
            </label>
            <input
              style={{ backgroundColor: "#cccccc", width: "40%" }}
              type="text"
              id="studentQualification"
              name="studentQualification"
              autoComplete="off"
              value={formal.studentQualification}
              onChange={handleInputChange}
            />
          </li>

          {/* 4 */}
          <li className="field-block">
            <label className="labelField" htmlFor="educationalForm">
              4. Форма обучения:{" "}
            </label>
            <input
              style={{ backgroundColor: "#cccccc", width: "40%" }}
              type="text"
              id="educationalForm"
              name="educationalForm"
              autoComplete="off"
              value={formal.educationalForm}
              onChange={handleInputChange}
            />
          </li>

          {/* 5 */}
          <li className="field-block">
            <label className="labelField" htmlFor="department">
              5. Кафедра, отвечающая за реализацию дисциплины:{" "}
            </label>
            <input
              style={{ backgroundColor: "#cccccc", width: "40%" }}
              type="text"
              id="department"
              name="department"
              autoComplete="off"
              value={formal.department}
              onChange={handleInputChange}
            />
          </li>

          {/* 6 */}
          <li className="field-block">
            <label className="labelField" htmlFor="creatorProgramm">
              6. Составители программы:{" "}
            </label>
            <input
              style={{ backgroundColor: "#cccccc", width: "40%" }}
              type="text"
              id="creatorProgramm"
              name="creatorProgramm"
              autoComplete="off"
              value={formal.creatorProgramm}
              onChange={handleInputChange}
            />
          </li>

          {/* 7 */}
          <li className="field-block">
            <label className="labelField" htmlFor="recommended">
              7. Рекомендована:{" "}
            </label>
            <input
              style={{ backgroundColor: "#cccccc", width: "40%" }}
              type="text"
              id="recommended"
              name="recommended"
              autoComplete="off"
              value={formal.recommended}
              onChange={handleInputChange}
            />
          </li>

          {/* 8 */}
          <li className="field-block">
            <label className="labelField" htmlFor="academicYear">
              8. Учебный год:{" "}
            </label>
            <input
              style={{ backgroundColor: "#cccccc", width: "40%" }}
              type="date"
              id="academicYear"
              name="academicYear"
              autoComplete="off"
              value={formal.academicYear}
              onChange={handleInputChange}
            />
          </li>

          {/* 9 */}
        </ul>

        {/* <div> */}
        {/* <label htmlFor="course">Курс:</label>
        <select
          id="course"
          name="course"
          value={formData.course}
          onChange={handleInputChange}
        >
          <option value="">Выберите курс</option>
          {data.course.map((course) => (
            <option key={course.id} value={course.name}>
              {course.name}
            </option>
          ))}
        </select>
      </div> */}

        <Stack spacing={2} direction="row">
          <Button className="form-button" type="submit" variant="contained">
            Создать документ
          </Button>
        </Stack>
      </form>
    </div>
  );
};

export { Formal };
