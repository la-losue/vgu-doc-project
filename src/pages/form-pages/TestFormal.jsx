import React from "react";

const TestFormal = ({ formData, setFormData, handleBlur }) => {
  const handleInputChange = (event) => {
    setFormData((prev) => ({
      ...prev,
      [event.target.name]: event.target.value,
    }));

    //Добавим данные в localStorage
    localStorage.setItem('formData', JSON.stringify({ ...formData, [formData.name]: formData.value }));
  };

  return (
    <>
    <fieldset>
        <ul>
          <li className="field-block">
            <label className="labelField" htmlFor="codeNameDirection">
              1. Код и наименование направления подготовки/специальности:{' '}
            </label>
            <input
              style={{ backgroundColor: '#cccccc', width: '40%' }}
              type="text"
              id="codeNameDirection"
              name="codeNameDirection"
              autoComplete="off"
              value={formData.codeNameDirection}
              onChange={handleInputChange}
              onBlur={handleBlur}
            />
          </li>

          {/* 2 */}
          <li className="field-block">
            <label className="labelField" htmlFor="specializationProfile">
              2. Профиль подготовки/специализация:{' '}
            </label>
            <input
              style={{ backgroundColor: '#cccccc', width: '40%' }}
              type="text"
              id="specializationProfile"
              name="specializationProfile"
              autoComplete="off"
              value={formData.specializationProfile}
              onChange={handleInputChange}
              onBlur={handleBlur}
            />
          </li>

          {/* 3 */}
          <li className="field-block">
            <label className="labelField" htmlFor="studentQualification">
              3. Квалификация (степень) выпускника:{' '}
            </label>
            <input
              style={{ backgroundColor: '#cccccc', width: '40%' }}
              type="text"
              id="studentQualification"
              name="studentQualification"
              autoComplete="off"
              value={formData.studentQualification}
              onChange={handleInputChange}
              onBlur={handleBlur}
            />
          </li>

          {/* 4 */}
          <li className="field-block">
            <label className="labelField" htmlFor="educationalForm">
              4. Форма обучения:{' '}
            </label>
            <input
              style={{ backgroundColor: '#cccccc', width: '40%' }}
              type="text"
              id="educationalForm"
              name="educationalForm"
              autoComplete="off"
              value={formData.educationalForm}
              onChange={handleInputChange}
              onBlur={handleBlur}
            />
          </li>

          {/* 5 */}
          <li className="field-block">
            <label className="labelField" htmlFor="department">
              5. Кафедра, отвечающая за реализацию дисциплины:{' '}
            </label>
            <input
              style={{ backgroundColor: '#cccccc', width: '40%' }}
              type="text"
              id="department"
              name="department"
              autoComplete="off"
              value={formData.department}
              onChange={handleInputChange}
              onBlur={handleBlur}
            />
          </li>

          {/* 6 */}
          <li className="field-block">
            <label className="labelField" htmlFor="creatorProgramm">
              6. Составители программы:{' '}
            </label>
            <input
              style={{ backgroundColor: '#cccccc', width: '40%' }}
              type="text"
              id="creatorProgramm"
              name="creatorProgramm"
              autoComplete="off"
              value={formData.creatorProgramm}
              onChange={handleInputChange}
              onBlur={handleBlur}
            />
          </li>

          {/* 7 */}
          <li className="field-block">
            <label className="labelField" htmlFor="recommended">
              7. Рекомендована:{' '}
            </label>
            <input
              style={{ backgroundColor: '#cccccc', width: '40%' }}
              type="text"
              id="recommended"
              name="recommended"
              autoComplete="off"
              value={formData.recommended}
              onChange={handleInputChange}
              onBlur={handleBlur}
            />
          </li>

          {/* 8 */}
          <li className="field-block">
            <label className="labelField" htmlFor="academicYear">
              8. Учебный год:{' '}
            </label>
            <input
              style={{ backgroundColor: '#cccccc', width: '40%' }}
              type="date"
              id="academicYear"
              name="academicYear"
              autoComplete="off"
              value={formData.academicYear}
              onChange={handleInputChange}
              onBlur={handleBlur}
            />
          </li>

          {/* 9 */}
        </ul>
    </fieldset>
    </>
  )

  
};

export { TestFormal };
