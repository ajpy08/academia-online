import { IResolvers } from "graphql-tools";
import _ from "lodash";
import { constants } from "buffer";
import { database } from "../data/data.store";

const mutation: IResolvers = {
  Mutation: {
    cursoNuevo(__: void, { curso }): any {
      const itemCurso = {
        id: String(database.cursos.length + 1),
        title: curso.title,
        description: curso.description,
        clases: curso.clases,
        time: curso.time,
        level: curso.level,
        logo: curso.logo,
        path: curso.path,
        teacher: curso.teacher,
        reviews: []
      };

      if (
        database.cursos.filter(i => i.title === itemCurso.title).length === 0
      ) {
        database.cursos.push(itemCurso);
        return itemCurso;
      }

      return {
        id: '-1',
        title: 'El curso ya existe con este titulo',
        description: '',
        clases: -1,
        time: 0.0,
        level: 'TODOS',
        logo: '',
        path: '',
        teacher: '',
        reviews: []
      }
    }
  }
};

export default mutation;
