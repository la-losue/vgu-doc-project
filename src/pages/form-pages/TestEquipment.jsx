import React from "react";
import Stack from "@mui/material/Stack";
import Button from "@mui/material/Button";

const TestEquipment = ({ formData, setFormData, handleBlur }) => {
  const handleInputChange = (event) => {
    setFormData((prev) => ({
      ...prev,
      [event.target.name]: event.target.value,
    }));

    //Добавим данные в localStorage
    localStorage.setItem("formData", JSON.stringify({ ...formData, [formData.name]: formData.value }));
  };

  
  return (
    <>
      <fieldset>
        <ul>
          {/* 18 */}
          <li className="field-block">
            <label className="labelField" htmlFor="disciplineTechnique">
              18. Материально-техническое обеспечение дисциплины:{" "}
            </label>
            <textarea
              style={{ backgroundColor: "#cccccc", width: "40%" }}
              type="text"
              id="disciplineTechnique"
              name="disciplineTechnique"
              autoComplete="off"
              value={formData.disciplineTechnique}
              onChange={handleInputChange}
              onBlur={handleBlur}
            />
          </li>
          {/* 18.1 */}
          <li className="field-block">
            <label
              className="labelField"
              htmlFor="disciplineTechniqueClassroom"
            >
              18.1 Кабинет:{" "}
            </label>
            <input
              style={{ backgroundColor: "#cccccc", width: "40%" }}
              type="number"
              id="disciplineTechniqueClassroom"
              name="disciplineTechniqueClassroom"
              autoComplete="off"
              value={formData.disciplineTechniqueClassroom}
              onChange={handleInputChange}
              onBlur={handleBlur}
            />
          </li>
          <Button>Добавить форму</Button>
          <li style={{ marginBottom: "50px" }}>Таблица закончена</li>

          {/*19 */}
          <li className="field-block">
            <label className="labelField" htmlFor="evaluationFund">
              19. Фонд оценочных средств::{" "}
            </label>
            <textarea
              style={{ backgroundColor: "#cccccc", width: "40%" }}
              type="text"
              id="evaluationFund"
              name="evaluationFund"
              autoComplete="off"
              value={formData.evaluationFund}
              onChange={handleInputChange}
              onBlur={handleBlur}
            />
          </li>

          {/*ТАБЛИЦА 19.1.1 */}
          <li className="field-block">
            <label className="labelField" htmlFor="competenceCode">
              1. Код и содержание компетенции или ее части:{" "}
            </label>
            <textarea
              style={{ backgroundColor: "#cccccc", width: "40%" }}
              type="text"
              id="competenceCode"
              name="competenceCode"
              autoComplete="off"
              value={formData.competenceCode}
              onChange={handleInputChange}
              onBlur={handleBlur}
            />
          </li>
          {/*ТАБЛИЦА 19.1.2 */}
          <li className="field-block">
            <label className="labelField" htmlFor="plannedLearning">
              2. Планируемые результаты обучения (показатели достижения
              заданного уровня освоения компетенции посредством формирования
              знаний, умений, навыков):{" "}
            </label>
            <textarea
              style={{ backgroundColor: "#cccccc", width: "40%" }}
              type="text"
              id="plannedLearning"
              name="plannedLearning"
              autoComplete="off"
              value={formData.plannedLearning}
              onChange={handleInputChange}
              onBlur={handleBlur}
            />
          </li>
          {/*ТАБЛИЦА 19.1.3 */}
          <li className="field-block">
            <label className="labelField" htmlFor="formationStagesDiscipline">
              3. Этапы формирования компетенции (разделы (темы) дисциплины или
              модуля и их наименование):{" "}
            </label>
            <textarea
              style={{ backgroundColor: "#cccccc", width: "40%" }}
              type="text"
              id="formationStagesDiscipline"
              name="formationStagesDiscipline"
              autoComplete="off"
              value={formData.formationStagesDiscipline}
              onChange={handleInputChange}
              onBlur={handleBlur}
            />
          </li>
          {/*ТАБЛИЦА 19.1.4 */}
          <li className="field-block">
            <label className="labelField" htmlFor="FosAssessment ">
              4. ФОС (средства оценивания):{" "}
            </label>
            <textarea
              style={{ backgroundColor: "#cccccc", width: "40%" }}
              type="text"
              id="FosAssessment"
              name="FosAssessment"
              autoComplete="off"
              value={formData.FosAssessment}
              onChange={handleInputChange}
              onBlur={handleBlur}
            />
          </li>
          <Button>Добавить форму</Button>
          <li style={{ marginBottom: "50px" }}>Таблица закончена</li>

          {/* 19.2 */}
          <li>
            19.2 Описание критериев и шкалы оценивания компетенций (результатов
            обучения) при промежуточной аттестации. Для оценивания результатов
            обучения на экзамене используются следующие показатели: 1) знание
            учебного материала и владение понятийным аппаратом операционных
            систем; 2) умение связывать теорию с практикой; 3) умение
            иллюстрировать ответ примерами, фактами, данными научных
            исследований в области разработки операционных систем;
          </li>
          {/*ТАБЛИЦА 19.2.1 */}
          <li className="field-block">
            <label className="labelField" htmlFor="evaluationCriteria">
              1.Критерии оценивания компетенций:{" "}
            </label>
            <textarea
              style={{ backgroundColor: "#cccccc", width: "40%" }}
              type="text"
              id="evaluationCriteria"
              name="evaluationCriteria"
              autoComplete="off"
              value={formData.evaluationCriteria}
              onChange={handleInputChange}
              onBlur={handleBlur}
            />
          </li>
          {/* 19.2.2 */}
          <li className="field-block">
            <label className="labelField" htmlFor="competenceLevel">
              2. Уровень сформированности компетенций:{" "}
            </label>
            <input
              style={{ backgroundColor: "#cccccc", width: "40%" }}
              type="text"
              id="competenceLevel"
              name="competenceLevel"
              autoComplete="off"
              value={formData.competenceLevel}
              onChange={handleInputChange}
              onBlur={handleBlur}
            />
          </li>
          {/* 19.2.3 */}
          <li className="field-block">
            <label className="labelField" htmlFor="ratingScale">
              3. Шкала оценок:{" "}
            </label>
            <input
              style={{ backgroundColor: "#cccccc", width: "40%" }}
              type="text"
              id="ratingScale"
              name="ratingScale"
              autoComplete="off"
              value={formData.ratingScale}
              onChange={handleInputChange}
              onBlur={handleBlur}
            />
          </li>
          <Button>Добавить форму</Button>
          <li style={{ marginBottom: "50px" }}>Таблица закончена</li>

          {/* 19.3 */}
          <li className="field-block">
            <label className="labelField" htmlFor="questionsList">
              19.3 Перечень вопросов к экзамену::{" "}
            </label>
            <textarea
              style={{ backgroundColor: "#cccccc", width: "40%" }}
              type="text"
              id="questionsList"
              name="questionsList"
              autoComplete="off"
              value={formData.questionsList}
              onChange={handleInputChange}
              onBlur={handleBlur}
            />
          </li>

          {/* 19.4 */}
          <li className="field-block">
            <label className="labelField" htmlFor="questionsListPractice">
              19.4 Перечень практических заданий:{" "}
            </label>
            <textarea
              style={{ backgroundColor: "#cccccc", width: "40%" }}
              type="text"
              id="questionsListPractice"
              name="questionsListPractice"
              autoComplete="off"
              value={formData.questionsListPractice}
              onChange={handleInputChange}
              onBlur={handleBlur}
            />
          </li>

          {/* 19.5 */}
          <li className="field-block">
            <label className="labelField" htmlFor="additionalMaterials">
              19.5 Методические материалы, определяющие процедуры оценивания
              знаний, умений, навыков и (или) опыта деятельности,
              характеризующих этапы формирования компетенций:{" "}
            </label>
            <textarea
              style={{ backgroundColor: "#cccccc", width: "40%" }}
              type="text"
              id="additionalMaterials"
              name="additionalMaterials"
              autoComplete="off"
              value={formData.additionalMaterials}
              onChange={handleInputChange}
              onBlur={handleBlur}
            />
          </li>
        </ul>
      </fieldset>
    </>
  );
};

export { TestEquipment };
