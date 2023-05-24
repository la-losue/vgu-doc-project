import React from "react";
import Stack from "@mui/material/Stack";
import Button from "@mui/material/Button";

const TestProcess = ({ formData, setFormData, handleBlur }) => {
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
          {/*12 */}
          <li className="field-block">
            <label className="labelField" htmlFor="disciplineScope">
              12. Объем дисциплины в зачетных единицах/час:{" "}
            </label>
            <input
              style={{ backgroundColor: "#cccccc", width: "40%" }}
              type="number"
              id="disciplineScope"
              name="disciplineScope"
              autoComplete="off"
              value={formData.disciplineScope}
              onChange={handleInputChange}
              onBlur={handleBlur}
            />
          </li>
          {/*12.1 */}
          <li className="field-block">
            <label className="labelField" htmlFor="certificationForm">
              12.1 Форма промежуточной аттестации:{" "}
            </label>
            <input
              style={{ backgroundColor: "#cccccc", width: "40%" }}
              type="text"
              id="certificationForm"
              name="certificationForm"
              autoComplete="off"
              value={formData.certificationForm}
              onChange={handleInputChange}
              onBlur={handleBlur}
            />
          </li>

          {/*ТАБЛИЦА 13.1 */}
          <li style={{ marginTop: "50px" }}>ТАБЛИЦА (Виды учебной работы)</li>

          {/*13.1.1 */}
          <li className="field-block">
            <label
              className="labelField"
              htmlFor="classroomСlassesLectures3rdSemester"
            >
              1. Вид учебной работы (Аудиторные занятия - лекции - 3 семестр):{" "}
            </label>
            <input
              style={{ backgroundColor: "#cccccc", width: "40%" }}
              type="number"
              id="classroomСlassesLectures3rdSemester"
              name="classroomСlassesLectures3rdSemester"
              autoComplete="off"
              value={formData.classroomСlassesLectures3rdSemester}
              onChange={handleInputChange}
              onBlur={handleBlur}
            />
          </li>
          {/*13.1.2 */}
          <li className="field-block">
            <label
              className="labelField"
              htmlFor="classroomСlassesPractice3rdSemester"
            >
              2. Вид учебной работы (Аудиторные занятия - практика и
              лабораторные - 3 семестр):{" "}
            </label>
            <input
              style={{ backgroundColor: "#cccccc", width: "40%" }}
              type="number"
              id="classroomСlassesPractice3rdSemester"
              name="classroomСlassesPractice3rdSemester"
              autoComplete="off"
              value={formData.classroomСlassesPractice3rdSemester}
              onChange={handleInputChange}
              onBlur={handleBlur}
            />
          </li>
          {/*13.1.3 */}
          <li className="field-block">
            <label className="labelField" htmlFor="independentWork3semester">
              3. Вид учебной работы (Самостоятельная работа - 3 семестр) :{" "}
            </label>
            <input
              style={{ backgroundColor: "#cccccc", width: "40%" }}
              type="number"
              id="independentWork3semester"
              name="independentWork3semester"
              autoComplete="off"
              value={formData.independentWork3semester}
              onChange={handleInputChange}
              onBlur={handleBlur}
            />
          </li>
          {/*13.1.4 */}
          <li className="field-block">
            <label
              className="labelField"
              htmlFor="intermediateFormCertification3"
            >
              4. Вид учебной работы (Форма промежуточной аттестации - 3
              семестр):{" "}
            </label>
            <input
              style={{ backgroundColor: "#cccccc", width: "40%" }}
              type="number"
              id="intermediateFormCertification3"
              name="intermediateFormCertification3"
              autoComplete="off"
              value={formData.intermediateFormCertification3}
              onChange={handleInputChange}
              onBlur={handleBlur}
            />
          </li>
          {/*ТАБЛИЦА 13.1.5 */}
          <li className="field-block">
            <label
              className="labelField"
              htmlFor="classroomСlassesLectures4rdSemester"
            >
              5. Вид учебной работы (Аудиторные занятия - лекции - 4 семестр):{" "}
            </label>
            <input
              style={{ backgroundColor: "#cccccc", width: "40%" }}
              type="number"
              id="classroomСlassesLectures4rdSemester"
              name="classroomСlassesLectures4rdSemester"
              autoComplete="off"
              value={formData.classroomСlassesLectures4rdSemester}
              onChange={handleInputChange}
              onBlur={handleBlur}
            />
          </li>
          {/*13.1.6 */}
          <li className="field-block">
            <label
              className="labelField"
              htmlFor="classroomСlassesPractice4rdSemester"
            >
              6. Вид учебной работы (Аудиторные занятия - практика и
              лабораторные - 4 семестр):{" "}
            </label>
            <input
              style={{ backgroundColor: "#cccccc", width: "40%" }}
              type="number"
              id="classroomСlassesPractice4rdSemester"
              name="classroomСlassesPractice4rdSemester"
              autoComplete="off"
              value={formData.classroomСlassesPractice4rdSemester}
              onChange={handleInputChange}
              onBlur={handleBlur}
            />
          </li>
          {/*13.1.7 */}
          <li className="field-block">
            <label className="labelField" htmlFor="independentWork4semester">
              7. Вид учебной работы (Самостоятельная работа - 4 семестр) :{" "}
            </label>
            <input
              style={{ backgroundColor: "#cccccc", width: "40%" }}
              type="number"
              id="independentWork4semester"
              name="independentWork4semester"
              autoComplete="off"
              value={formData.independentWork4semester}
              onChange={handleInputChange}
              onBlur={handleBlur}
            />
          </li>
          {/*13.1.8 */}
          <li className="field-block">
            <label
              className="labelField"
              htmlFor="intermediateFormCertification4"
            >
              8. Вид учебной работы (Форма промежуточной аттестации - 4
              семестр):{" "}
            </label>
            <input
              style={{ backgroundColor: "#cccccc", width: "40%" }}
              type="number"
              id="intermediateFormCertification4"
              name="intermediateFormCertification4"
              autoComplete="off"
              value={formData.intermediateFormCertification4}
              onChange={handleInputChange}
              onBlur={handleBlur}
            />
          </li>
          <li style={{ marginBottom: "50px" }}>Таблица закончена</li>

          {/*ТАБЛИЦА 13.2.1 */}
          <li>ТАБЛИЦА (Содержание дисциплины)</li>
          <li className="field-block">
            <label className="labelField" htmlFor="disciplineContentPP">
              1 .п/п:{" "}
            </label>
            <input
              style={{ backgroundColor: "#cccccc", width: "40%" }}
              type="number"
              id="disciplineContentPP"
              name="disciplineContentPP"
              autoComplete="off"
              value={formData.disciplineContentPP}
              onChange={handleInputChange}
              onBlur={handleBlur}
            />
          </li>
          {/*13.2.2 */}
          <li className="field-block">
            <label className="labelField" htmlFor="disciplineContentName">
              2. Наименование раздела дисциплины:{" "}
            </label>
            <input
              style={{ backgroundColor: "#cccccc", width: "40%" }}
              type="number"
              id="disciplineContentName"
              name="disciplineContentName"
              autoComplete="off"
              value={formData.disciplineContentName}
              onChange={handleInputChange}
              onBlur={handleBlur}
            />
          </li>
          {/*13.2.3 */}
          <li className="field-block">
            <label className="labelField" htmlFor="chapterDisciplineContent">
              3. Содержание раздела дисциплины:{" "}
            </label>
            <input
              style={{ backgroundColor: "#cccccc", width: "40%" }}
              type="number"
              id="chapterDisciplineContent"
              name="chapterDisciplineContent"
              autoComplete="off"
              value={formData.chapterDisciplineContent}
              onChange={handleInputChange}
              onBlur={handleBlur}
            />
          </li>
          <Button>Добавить форму</Button>
          <li style={{ marginBottom: "50px" }}>Таблица закончена</li>

          {/* ТАБЛИЦА 13.3 */}
          <li style={{ marginTop: "50px" }}>
            Темы (разделы) дисциплины и виды занятий
          </li>
          {/*13.3.1 */}
          <li className="field-block">
            <label className="labelField" htmlFor="disciplinesClassesPP">
              № п.п:{" "}
            </label>
            <input
              style={{ backgroundColor: "#cccccc", width: "40%" }}
              type="number"
              id="disciplinesClassesPP"
              name="disciplinesClassesPP"
              autoComplete="off"
              value={formData.disciplinesClassesPP}
              onChange={handleInputChange}
              onBlur={handleBlur}
            />
          </li>
          {/*13.3.2 */}
          <li className="field-block">
            <label className="labelField" htmlFor="disciplinesClassesName">
              Наименование темы (раздела) дисциплины:{" "}
            </label>
            <input
              style={{ backgroundColor: "#cccccc", width: "40%" }}
              type="text"
              id="disciplinesClassesName"
              name="disciplinesClassesName"
              autoComplete="off"
              value={formData.disciplinesClassesName}
              onChange={handleInputChange}
              onBlur={handleBlur}
            />
          </li>
          <li>Вид занятия (часов):</li>
          {/*13.3.3  Lecture*/}
          <li className="field-block">
            <label className="labelField" htmlFor="disciplinesClassesLecture">
              1. Лекция:{" "}
            </label>
            <input
              style={{ backgroundColor: "#cccccc", width: "40%" }}
              type="number"
              id="disciplinesClassesLecture"
              name="disciplinesClassesLecture"
              autoComplete="off"
              value={formData.disciplinesClassesLecture}
              onChange={handleInputChange}
              onBlur={handleBlur}
            />
          </li>
          {/*13.3.4 Practice*/}
          <li className="field-block">
            <label
              className="labelField"
              htmlFor="intermediateFormCertification4"
            >
              2. Практика:{" "}
            </label>
            <input
              style={{ backgroundColor: "#cccccc", width: "40%" }}
              type="number"
              id="disciplinesClassesPractice"
              name="disciplinesClassesPractice"
              autoComplete="off"
              value={formData.disciplinesClassesPractice}
              onChange={handleInputChange}
              onBlur={handleBlur}
            />
          </li>
          {/*13.3.5 */}
          <li className="field-block">
            <label className="labelField" htmlFor="disciplinesClassesIndepWork">
              3. Самостоятельная работа:{" "}
            </label>
            <input
              style={{ backgroundColor: "#cccccc", width: "40%" }}
              type="number"
              id="disciplinesClassesIndepWork"
              name="disciplinesClassesIndepWork"
              autoComplete="off"
              value={formData.disciplinesClassesIndepWork}
              onChange={handleInputChange}
              onBlur={handleBlur}
            />
          </li>
          {/*13.3.6 */}
          <li className="field-block">
            <label className="labelField" htmlFor="disciplinesClassesLab">
              4. Лабораторная работа:{" "}
            </label>
            <input
              style={{ backgroundColor: "#cccccc", width: "40%" }}
              type="number"
              id="disciplinesClassesLab"
              name="disciplinesClassesLab"
              autoComplete="off"
              value={formData.disciplinesClassesLab}
              onChange={handleInputChange}
              onBlur={handleBlur}
            />
          </li>
          <Button>Добавить форму</Button>
          <li style={{ marginBottom: "50px" }}>Таблица закончена</li>

          {/* 14 */}
          <li className="field-block">
            <label className="labelField" htmlFor="methodic">
              14. Методические указания для обучающихся по освоению дисциплины:{" "}
            </label>
            <textarea
              style={{ backgroundColor: "#cccccc", width: "40%" }}
              type="text"
              id="methodic"
              name="methodic"
              autoComplete="off"
              value={formData.methodic}
              onChange={handleInputChange}
              onBlur={handleBlur}
            />
          </li>
        </ul>
      </fieldset>
    </>
  );
};

export { TestProcess };
