import { database } from "./../data/data.store";
import { IResolvers } from "graphql-tools";
import _ from "lodash";

const type: IResolvers = {
  Estudiante: {
    courses: parent => {
      const cursosLista: Array<any> = [];
      parent.courses.map((curso: string) => {
        cursosLista.push(_.filter(database.cursos, ["id", curso])[0]);
      });
      return cursosLista;
    }
  }
};

export default type;
