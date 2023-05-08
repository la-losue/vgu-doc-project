import React from "react";
import { Link } from "react-router-dom";

const Electronics = () => {
  return (
    <div>
      <h1>Кафедра электроники</h1>
      <ul>
        <li className="work-programm-form">
          <Link className="link" to="/formal">
            Форма
          </Link>
        </li>

        <li className="work-programm-form">
          <Link className="link" to="/outcomes">
            Результаты
          </Link>
        </li>

        <li className="work-programm-form">
          <Link className="link" to="/process">
            Процесс
          </Link>
        </li>

        <li className="work-programm-form">
          <Link className="link" to="/references">
          Рекомендации (Литература)
          </Link>
        </li>

        <li className="work-programm-form">
          <Link className="link" to="/equipment">
            Оборудование
          </Link>
        </li>
      </ul>

    </div>
  );
};
export { Electronics };
