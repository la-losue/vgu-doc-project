import React from "react";
import Stack from "@mui/material/Stack";
import Button from "@mui/material/Button";

const TestReference = ({ formData, setFormData, handleBlur }) => {
  const handleInputChange = (event) => {
    const nameEvent = event.target.name;
    const pathEvent = event.target.id;
    const valueEvent = event.target.value;

    setFormData((prev) => ({
      ...prev,
      [pathEvent]: {
        ...prev[pathEvent],
        [nameEvent]: valueEvent
      }
    }));

    //Добавим данные в localStorage
    localStorage.setItem('formData', JSON.stringify({ ...formData, [formData.name]: formData.value }));
  };



  
  return (
    <>
      <fieldset>
        <ul>
          {/* ТАБЛИЦА 15.1 */}
          <li>
            15. Перечень основной и дополнительной литературы, ресурсов
            интернет, необходимых для освоения дисциплины
          </li>
          <li> а) основная литература:</li>
          {/*15.1.1(a) */}
          <li className="field-block">
            <label className="labelField" htmlFor="basicLiteraturePP">
              1. № п.п:{" "}
            </label>
            <input
              style={{ backgroundColor: "#cccccc", width: "40%" }}
              type="number"
              id="basicLiteraturePP"
              name="basicLiteraturePP"
              autoComplete="off"
              value={formData.basicLiteraturePP}
              onChange={handleInputChange}
              onBlur={handleBlur}
            />
          </li>
          {/*15.1.2(а) */}
          <li className="field-block">
            <label className="labelField" htmlFor="basicLiteratureSource">
              2. Источник:{" "}
            </label>
            <textarea
              style={{ backgroundColor: "#cccccc", width: "40%" }}
              type="text"
              id="basicLiteratureSource"
              name="basicLiteratureSource"
              autoComplete="off"
              value={formData.basicLiteratureSource}
              onChange={handleInputChange}
              onBlur={handleBlur}
            />
          </li>
          <Button>Добавить форму</Button>

          {/* ТАБЛИЦА 15.1.2(б) */}
          <li> б) дополнительная литература:</li>
          {/*15.1.1(б) */}
          <li className="field-block">
            <label className="labelField" htmlFor="additionalLiteraturePP">
              1. № п.п:{" "}
            </label>
            <input
              style={{ backgroundColor: "#cccccc", width: "40%" }}
              type="number"
              id="additionalLiteraturePP"
              name="additionalLiteraturePP"
              autoComplete="off"
              value={formData.additionalLiteraturePP}
              onChange={handleInputChange}
              onBlur={handleBlur}
            />
          </li>
          {/*15.1.2(б) */}
          <li className="field-block">
            <label className="labelField" htmlFor="additionalLiteratureSource">
              2. Источник:{" "}
            </label>
            <textarea
              style={{ backgroundColor: "#cccccc", width: "40%" }}
              type="text"
              id="additionalLiteratureSource"
              name="additionalLiteratureSource"
              autoComplete="off"
              value={formData.additionalLiteratureSource}
              onChange={handleInputChange}
              onBlur={handleBlur}
            />
          </li>
          <Button>Добавить форму</Button>

          {/* ТАБЛИЦА 15.1.2(в) */}
          <li>
            {" "}
            в) информационные электронно-образовательные ресурсы (официальные
            ресурсы интернет):
          </li>

          <li className="field-block">
            <label className="labelField" htmlFor="onlineLiteratureNumber">
              1. № п.п:{" "}
            </label>
            <input
              style={{ backgroundColor: "#cccccc", width: "40%" }}
              type="number"
              id="onlineLiteratureNumber"
              name="onlineLiteratureNumber"
              autoComplete="off"
              value={formData.onlineLiteratureNumber}
              onChange={handleInputChange}
              onBlur={handleBlur}
            />
          </li>

          <li className="field-block">
            <label className="labelField" htmlFor="onlineLiteratureSource">
              2. Ресурс:{" "}
            </label>
            <textarea
              style={{ backgroundColor: "#cccccc", width: "40%" }}
              type="text"
              id="onlineLiteratureSource"
              name="onlineLiteratureSource"
              autoComplete="off"
              value={formData.onlineLiteratureSource}
              onChange={handleInputChange}
              onBlur={handleBlur}
            />
          </li>
          <Button>Добавить форму</Button>
          <li style={{ marginBottom: "50px" }}>Таблица закончена</li>

          {/* ТАБЛИЦА 16*/}
          <li>
            16. Перечень учебно-методического обеспечения для самостоятельной
            работы: учебно-методические рекомендации, пособия, задачники,
            методические указания по выполнению практических (контрольных) работ
            и др.
          </li>
          {/* ТАБЛИЦА 16.1*/}
          <li className="field-block">
            <label className="labelField" htmlFor="manualIndependedWorkNumber">
              1. № п.п:{" "}
            </label>
            <input
              style={{ backgroundColor: "#cccccc", width: "40%" }}
              type="number"
              id="manualIndependedWorkNumber"
              name="manualIndependedWorkNumber"
              autoComplete="off"
              value={formData.manualIndependedWorkNumber}
              onChange={handleInputChange}
              onBlur={handleBlur}
            />
          </li>
          {/* ТАБЛИЦА 16.2*/}
          <li className="field-block">
            <label className="labelField" htmlFor="manualIndependedWorkSource">
              2. Ресурс:{" "}
            </label>
            <textarea
              style={{ backgroundColor: "#cccccc", width: "40%" }}
              type="text"
              id="manualIndependedWorkSource"
              name="manualIndependedWorkSource"
              autoComplete="off"
              value={formData.manualIndependedWorkSource}
              onChange={handleInputChange}
              onBlur={handleBlur}
            />
          </li>
          <Button>Добавить форму</Button>
          <li style={{ marginBottom: "50px" }}>Таблица закончена</li>
          {/* 17 */}
          <li className="field-block">
            <label className="labelField" htmlFor="referencesTechnologies">
              17. Информационные технологии, используемые для реализации учебной
              дисциплины, включая программное обеспечение и
              информационно-справочные системы (при необходимости):{" "}
            </label>
            <textarea
              style={{ backgroundColor: "#cccccc", width: "40%" }}
              type="text"
              id="referencesTechnologies"
              name="referencesTechnologies"
              autoComplete="off"
              value={formData.referencesTechnologies}
              onChange={handleInputChange}
              onBlur={handleBlur}
            />
          </li>
        </ul>
      </fieldset>
    </>
  );
};

export { TestReference };
