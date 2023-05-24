import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import Stack from "@mui/material/Stack";
import Button from "@mui/material/Button";
import { TestFormal } from "pages/form-pages/TestFormal";
import { TestOutcomes } from "pages/form-pages/TestOutcomes";
import { TestReference } from "pages/form-pages/TestReference";
import { TestProcess } from "pages/form-pages/TestProcess";
import { TestEquipment } from "pages/form-pages/TestEquipment";

const Electronics = () => {
  const [formData, setFormData] = useState({
    codeNameDirection: "",
    specializationProfile: "",
    studentQualification: "",
    educationalForm: "",
    educationalForm: "",
    department: "",
    creatorProgramm: "",
    recommended: "",
    academicYear: "",
    disciplineTask: "",
    positinInPLO: "",
    codeResultLearning: "",
    competenceName: "",
    codesResultLearning: "",
    indicatorsResultLearning: "",
    ResultLearning: "",
    disciplineScope: "",
    certificationForm: "",
    classroomСlassesLectures3rdSemester: "",
    classroomСlassesPractice3rdSemester: "",
    independentWork3semester: "",
    intermediateFormCertification3: "",
    classroomСlassesLectures4rdSemester: "",
    classroomСlassesPractice4rdSemester: "",
    independentWork4semester: "",
    intermediateFormCertification4: "",
    disciplineContentPP: "",
    disciplineContentName: "",
    chapterDisciplineContent: "",
    disciplinesClassesPP: "",
    disciplinesClassesName: "",
    disciplinesClassesLecture: "",
    disciplinesClassesPractice: "",
    disciplinesClassesIndepWork: "",
    disciplinesClassesLab: "",
    methodic: "",
    basicLiteraturePP: "",
    basicLiteratureSource: "",
    additionalLiteraturePP: "",
    additionalLiteratureSource: "",
    onlineLiteratureNumber: "",
    onlineLiteratureSource: "",
    manualIndependedWorkNumber: "",
    manualIndependedWorkSource: "",
    referencesTechnologies: "",
    disciplineTechnique: "",
    disciplineTechniqueClassroom: "",
    evaluationFund: "",
    competenceCode: "",
    plannedLearning: "",
    formationStagesDiscipline: "",
    FosAssessment: "",
    evaluationCriteria: "",
    competenceLevel: "",
    ratingScale: "",
    questionsList: "",
    questionsListPractice: "",
    additionalMaterials: "",
  });

  const [showFormal, setShowFormal] = useState(false);
  const [showOutcomes, setShowOutcomes] = useState(false);
  const [showProcess, setShowProcess] = useState(false);
  const [showReferences, setShowReferences] = useState(false);
  const [showEquipment, setShowEquipment] = useState(false);

  const hideFormal = () => {
    setShowFormal(!showFormal);
  };
  const hideOutcomes = () => {
    setShowOutcomes(!showOutcomes);
  };
  const hideshowProcess = () => {
    setShowProcess(!showProcess);
  };
  const hideshowReferences = () => {
    setShowReferences(!showReferences);
  };
  const hideshowEquipment = () => {
    setShowEquipment(!showEquipment);
  };

  //Достаем даные с хранилища localStorage и Изменяем состояние полей
  useEffect(() => {
    const localStorageData = JSON.parse(localStorage.getItem("formData"));
    if (localStorageData) {
      setFormData(localStorageData);
    }
  }, []);

  //Обработчик кнопки "Сохранить рабочую программу"
  const handleSubmit = (event) => {
    event.preventDefault();
    console.log(formData);
    //Очищаем поля после отправки
    setFormData({
      codeNameDirection: "",
      specializationProfile: "",
      studentQualification: "",
      educationalForm: "",
      department: "",
      creatorProgramm: "",
      recommended: "",
      academicYear: "",
      disciplineTask: "",
      positinInPLO: "",
      codeResultLearning: "",
      competenceName: "",
      codesResultLearning: "",
      indicatorsResultLearning: "",
      ResultLearning: "",
      disciplineScope: "",
      certificationForm: "",
      classroomСlassesLectures3rdSemester: "",
      classroomСlassesPractice3rdSemester: "",
      independentWork3semester: "",
      intermediateFormCertification3: "",
      classroomСlassesLectures4rdSemester: "",
      classroomСlassesPractice4rdSemester: "",
      independentWork4semester: "",
      intermediateFormCertification4: "",
      disciplineContentPP: "",
      disciplineContentName: "",
      chapterDisciplineContent: "",
      disciplinesClassesPP: "",
      disciplinesClassesName: "",
      disciplinesClassesLecture: "",
      disciplinesClassesPractice: "",
      disciplinesClassesIndepWork: "",
      disciplinesClassesLab: "",
      methodic: "",
      basicLiteraturePP: "",
      basicLiteratureSource: "",
      additionalLiteraturePP: "",
      additionalLiteratureSource: "",
      onlineLiteratureNumber: "",
      onlineLiteratureSource: "",
      manualIndependedWork: "",
      manualIndependedWorkNumber: "",
      referencesTechnologies: "",
      disciplineTechnique: "",
      disciplineTechniqueClassroom: "",
      evaluationFund: "",
      competenceCode: "",
      plannedLearning: "",
      formationStagesDiscipline: "",
      FosAssessment: "",
      evaluationCriteria: "",
      competenceLevel: "",
      ratingScale: "",
      questionsList: "",
      questionsListPractice: "",
      additionalMaterials: "",
    });

    //Отправляем данные на сервер
    fetch("http://localhost:8000", {
      method: "Post",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(formData),
    })
      .then((response) => response.json())
      .catch((error) => {
        // Обработка ошибки
        console.error(error);
      });
  };

  //отправка данных из localStorage в indexedDb
  const handleBlur = (event) => {
    event.preventDefault();
    const { name } = event.target;

    if (formData[name]) {
      const request = window.indexedDB.open("myDatabase", 1);
      let db;

      request.onerror = (event) => {
        console.log("Error opening database");
      };

      request.onsuccess = (event) => {
        db = event.target.result;
        const transaction = db.transaction("myStore", "readwrite");
        const store = transaction.objectStore("myStore");

        store.getAll().onsuccess = function (event) {
          const currentFormData = event.target.result;

          const localStorageData = JSON.parse(localStorage.getItem("formData"));
          console.log(currentFormData);
          if (!currentFormData[name]) {
            const formDataBase = formData;

            const request = store.add(formDataBase);

            request.onerror = (event) => {
              console.log("Error adding data to database");
            };

            request.onsuccess = (event) => {
              console.log("Data added to database");
            };
          }
        };
      };

      request.onupgradeneeded = (event) => {
        db = event.target.result;
        const objectStore = db.createObjectStore("myStore", {
          keyPath: "id",
          autoIncrement: true,
        });
      };
    }
  };

  return (
    <>
      <Link className="link" to="/WorkProgramm">Назад</Link>
      <form className="document-form" onSubmit={handleSubmit}>
        <ul>
          {/* Formal */}
          <li className="work-programm-form">
            <button className="btn-programm-work" type="button" onClick={hideFormal}>
              Formal
            </button>
            {showFormal ? (
              <TestFormal
                formData={formData}
                setFormData={setFormData}
                handleBlur={handleBlur}
              />
            ) : null}
          </li>

          {/* Outcomes */}
          <li className="work-programm-form">
            <button className="btn-programm-work" type="button" onClick={hideOutcomes}>
              Outcomes
            </button>
            {showOutcomes ? (
              <TestOutcomes
                formData={formData}
                setFormData={setFormData}
                handleBlur={handleBlur}
              />
            ) : null}
          </li>

          {/* Process */}
          <li className="work-programm-form">
            <button className="btn-programm-work" type="button" onClick={hideshowProcess}>
              Process
            </button>
            {showProcess ? (
              <TestProcess
                formData={formData}
                setFormData={setFormData}
                handleBlur={handleBlur}
              />
            ) : null}
          </li>

          {/* References */}
          <li className="work-programm-form">
            <button className="btn-programm-work" type="button" onClick={hideshowReferences}>
              References
            </button>
            {showReferences ? (
              <TestReference
                formData={formData}
                setFormData={setFormData}
                handleBlur={handleBlur}
              />
            ) : null}
          </li>

          {/* Equipment */}
          <li className="work-programm-form">
          <button className="btn-programm-work" type="button" onClick={hideshowEquipment}>
          Equipment
        </button>
        {showEquipment ? (
          <TestEquipment
            formData={formData}
            setFormData={setFormData}
            handleBlur={handleBlur}
          />
        ) : null}
          </li>
        </ul>


        <Stack spacing={2} direction="row">
        <Button type="submit" variant="contained" >
          Сохранить программу
        </Button>
      </Stack> 
      </form>

      {/* <h1>Кафедра электроники</h1>
      <ul>
        <li className="work-programm-form">
          <Link className="link" to="/formal">
            Формальная информация (Formal) (c 1 по 8)
          </Link>
        </li>

        <li className="work-programm-form">
          <Link className="link" to="/outcomes">
            Результаты обучения (Outcomes) (с 9 по 11)
          </Link>
        </li>

        <li className="work-programm-form">
          <Link className="link" to="/process">
            Процесс - Дисциплины (Process) (c 12- 14)
          </Link>
        </li>

        <li className="work-programm-form">
          <Link className="link" to="/references">
            Рекомендаци - Литература (References) (15-18)
          </Link>
        </li>

        <li className="work-programm-form">
          <Link className="link" to="/equipment">
            Материально-техническое обеспечение дисциплины (Equipment) (c 18 и
            до конца)
          </Link>
        </li>
      </ul>

      <Stack spacing={2} direction="row">
        <Button type="submit" variant="contained" >
          Создать программу
        </Button>
      </Stack> */}
    </>
  );
};
export { Electronics };
