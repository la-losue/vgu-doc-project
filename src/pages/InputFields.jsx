import { useState, useEffect } from "react";
import React from "react";
import { TextField } from "@mui/material";
import "./modules.css/InputField.css";
import Stack from "@mui/material/Stack";
import Button from "@mui/material/Button";
import Box from "@mui/material/Box";
import MenuItem from "@mui/material/MenuItem";

import data from "./data.json";

const DocumentForm = () => {
  const [formData, setFormData] = useState({
    // состояние компонента, содержащее данные из полей ввода и select
    codeNameDirection: "",
    specializationProfile: "",
    studentQualification: "",
    educationalForm: "",
    educationalForm: "",
    department: "",
    creatorProgramm: "",
    recommended: "",
    academicYear: "",
    course: "",
    numberPhone: "",
  });

  // обработчик изменения поля ввода
  const handleInputChange = (event) => {
    const { name, value } = event.target;
    setFormData((prevFormData) => ({
      ...prevFormData,
      [name]: value,
    }));
  };

  // обработчик отправки формы
  const handleSubmit = (event) => {
    event.preventDefault();
    console.log(formData);
    // Очищаем поля после отправки
    setFormData({
      codeNameDirection: "",
      specializationProfile: "",
      studentQualification: "",
      educationalForm: "",
      department: "",
      creatorProgramm: "",
      recommended: "",
      academicYear: "",
      course: "",
      numberPhone: "",
    });
    // здесь отправляем данные на сервер
  };

  return (
    <form className="document-form" onSubmit={handleSubmit}>
      <div className="field-block">
        <label className="labelField" htmlFor="codeNameDirection">
          Код и наименование направления подготовки/специальности:{" "}
        </label>
        <TextField
          style={{ backgroundColor: "#cccccc", width: "40%" }}
          type="text"
          id="codeNameDirection"
          name="codeNameDirection"
          autoComplete="off"
          value={formData.codeNameDirection}
          onChange={handleInputChange}
        />
      </div>

      <div className="field-block">
        <label className="labelField" htmlFor="specializationProfile">
          Профиль подготовки/специализация:{" "}
        </label>
        <TextField
          style={{ backgroundColor: "#cccccc", width: "40%" }}
          type="text"
          id="specializationProfile"
          name="specializationProfile"
          autoComplete="off"
          value={formData.specializationProfile}
          onChange={handleInputChange}
        />
      </div>

      <div className="field-block">
        <label className="labelField" htmlFor="studentQualification">
          Квалификация (степень) выпускника:{" "}
        </label>
        <TextField
          style={{ backgroundColor: "#cccccc", width: "40%" }}
          type="text"
          id="studentQualification"
          name="studentQualification"
          autoComplete="off"
          value={formData.studentQualification}
          onChange={handleInputChange}
        />
      </div>

      <div className="field-block">
        <label className="labelField" htmlFor="educationalForm">
          Форма обучения:{" "}
        </label>
        <TextField
          style={{ backgroundColor: "#cccccc", width: "40%" }}
          type="text"
          id="educationalForm"
          name="educationalForm"
          autoComplete="off"
          value={formData.educationalForm}
          onChange={handleInputChange}
        />
      </div>

      <div className="field-block">
        <label className="labelField" htmlFor="department">
          Кафедра, отвечающая за реализацию дисциплины:{" "}
        </label>
        <TextField
          style={{ backgroundColor: "#cccccc", width: "40%" }}
          type="text"
          id="department"
          name="department"
          autoComplete="off"
          value={formData.department}
          onChange={handleInputChange}
        />
      </div>

      <div className="field-block">
        <label className="labelField" htmlFor="creatorProgramm">
          Составители программы:{" "}
        </label>
        <TextField
          style={{ backgroundColor: "#cccccc", width: "40%" }}
          type="text"
          id="creatorProgramm"
          name="creatorProgramm"
          autoComplete="off"
          value={formData.creatorProgramm}
          onChange={handleInputChange}
        />
      </div>

      <div className="field-block">
        <label className="labelField" htmlFor="recommended">
          Рекомендована:{" "}
        </label>
        <TextField
          style={{ backgroundColor: "#cccccc", width: "40%" }}
          type="text"
          id="recommended"
          name="recommended"
          autoComplete="off"
          value={formData.recommended}
          onChange={handleInputChange}
        />
      </div>

      <div className="field-block">
        <label className="labelField" htmlFor="academicYear">
          Учебный год:{" "}
        </label>
        <TextField
          style={{ backgroundColor: "#cccccc", width: "40%" }}
          type="data"
          id="academicYear"
          name="academicYear"
          autoComplete="off"
          value={formData.academicYear}
          onChange={handleInputChange}
        />
      </div>


      <div>
        <label htmlFor="course">Курс:</label>
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
      </div>



      <Box
      
      sx={{
        '& .MuiTextField-root': { m: 1, width: '25ch' },
      }}
      noValidate
      autoComplete="off"
    >
        <div>
          <TextField style={{backgroundColor: "white", marginTop: "30px"}}
            id="numberPhone"
            select
            label="Select"
            defaultValue="00899623064"
            helperText="Введите номер телефона"
            name="numberPhone"
            value={formData.numberPhone}
            onChange={handleInputChange}
          >
            {data.numberPhone.map((numberPhone) => (
              <MenuItem key={numberPhone.id} value={numberPhone.name}>
                {numberPhone.name}
              </MenuItem>
            ))}
          </TextField>
        </div>
        </Box>
      



      <Stack spacing={2} direction="row">
        <Button className="form-button" type="submit" variant="contained">
          Создать документ
        </Button>
      </Stack>
    </form>
  );
};

export { DocumentForm };
