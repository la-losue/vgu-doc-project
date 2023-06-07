import React from "react";
import Stack from "@mui/material/Stack";
import Button from "@mui/material/Button";

const TestOutcomes = ({ formData, setFormData, handleBlur }) => {
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
          <li className="field-block">
            <label className="labelField" htmlFor="disciplineTask">
              9. Цели и задачи учебной дисциплины:{" "}
            </label>
            <textarea
              style={{ backgroundColor: "#cccccc", width: "40%" }}
              type="text"
              id="disciplineTask"
              name="disciplineTask"
              autoComplete="off"
              value={formData.disciplineTask}
              onChange={handleInputChange}
              onBlur={handleBlur}
            />
          </li>

          {/* 10 */}
          <li className="field-block">
            <label className="labelField" htmlFor="positinInPLO">
              10. Место учебной дисциплины в структуре ООП:{" "}
            </label>
            <textarea
              style={{ backgroundColor: "#cccccc", width: "40%" }}
              type="text"
              id="positinInPLO"
              name="positinInPLO"
              autoComplete="off"
              value={formData.positinInPLO}
              onChange={handleInputChange}
              onBlur={handleBlur}
            />
          </li>

          {/*ТАБЛИЦА 11 */}
          <li style={{ marginTop: "50px" }}>
            11. Планируемые результаты обучения по дисциплине/модулю (знания,
            умения, навыки), соотнесенные с планируемыми результатами освоения
            образовательной программы (компетенциями выпускников):
          </li>
          {/*ТАБЛИЦА 11.1 */}
          <li className="field-block">
            <label className="labelField" htmlFor="codeResultLearning">
              1. Код:{" "}
            </label>
            <input
              style={{ backgroundColor: "#cccccc", width: "40%" }}
              type="text"
              id="codeResultLearning"
              name="codeResultLearning"
              autoComplete="off"
              value={formData.codeResultLearning}
              onChange={handleInputChange}
              onBlur={handleBlur}
            />
          </li>
          {/*ТАБЛИЦА 11.2 */}
          <li className="field-block">
            <label className="labelField" htmlFor="competenceName">
              2. Название компетенции:{" "}
            </label>
            <textarea
              style={{ backgroundColor: "#cccccc", width: "40%" }}
              type="text"
              id="competenceName"
              name="competenceName"
              autoComplete="off"
              value={formData.competenceName}
              onChange={handleInputChange}
              onBlur={handleBlur}
            />
          </li>
          {/*ТАБЛИЦА 11.3 */}
          <li className="field-block">
            <label className="labelField" htmlFor="codesResultLearning">
              3. Код(ы):{" "}
            </label>
            <input
              style={{ backgroundColor: "#cccccc", width: "40%" }}
              type="text"
              id="codesResultLearning"
              name="codesResultLearning"
              autoComplete="off"
              value={formData.codesResultLearning}
              onChange={handleInputChange}
              onBlur={handleBlur}
            />
          </li>
          {/*ТАБЛИЦА 11.4 */}
          <li className="field-block">
            <label className="labelField" htmlFor="indicatorsResultLearning">
              4. Индикатор(ы):{" "}
            </label>
            <textarea
              style={{ backgroundColor: "#cccccc", width: "40%" }}
              type="text"
              id="indicatorsResultLearning"
              name="indicatorsResultLearning"
              autoComplete="off"
              value={formData.indicatorsResultLearning}
              onChange={handleInputChange}
              onBlur={handleBlur}
            />
          </li>
          {/*ТАБЛИЦА 11.5 */}
          <li className="field-block">
            <label className="labelField" htmlFor="ResultLearning">
              5. Планируемые результаты обучения:{" "}
            </label>
            <textarea
              style={{ backgroundColor: "#cccccc", width: "40%" }}
              type="text"
              id="ResultLearning"
              name="ResultLearning"
              autoComplete="off"
              value={formData.ResultLearning}
              onChange={handleInputChange}
              onBlur={handleBlur}
            />
          </li>
          <Button>Добавить форму</Button>
          <li style={{ marginBottom: "50px" }}>Таблица закончена</li>
        </ul>
      </fieldset>
    </>
  );
};

export { TestOutcomes };
